"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { content } from "../content/content.ts";
import { isSiteTextKey } from "../content/site-text-defs.ts";
import { saveSiteText } from "../content/site-text.ts";
import type { TextRef } from "./text-index.ts";

/**
 * Change one piece of text, wherever it lives, and publish it.
 *
 * `expected` is the text as the owner saw it. If it no longer matches — edited
 * in another tab, or on the band editor — nothing is written and they are asked
 * to reload, rather than one change silently overwriting the other.
 */

export type ChangeResult = { ok: true } | { ok: false; error: string };

const STALE = "This text was changed somewhere else since you opened this screen. Reload the page and try again.";

/** Set a string at `path` inside a cloned value. Returns false if the path is wrong or stale. */
function setAt(root: unknown, path: (string | number)[], expected: string, next: string): boolean {
  let node = root as Record<string | number, unknown>;
  for (const step of path.slice(0, -1)) {
    const child = node?.[step];
    if (!child || typeof child !== "object") return false;
    node = child as Record<string | number, unknown>;
  }
  const last = path.at(-1)!;
  if (node[last] !== expected) return false;
  node[last] = next;
  return true;
}

export async function changeTextAction(
  ref: TextRef,
  expected: string,
  next: string,
): Promise<ChangeResult> {
  await requireAdmin();
  if (typeof next !== "string" || next.length > 5000) return { ok: false, error: "That text is too long." };

  switch (ref.kind) {
    case "site": {
      if (!isSiteTextKey(ref.key)) return { ok: false, error: "Unknown text." };
      await saveSiteText({ [ref.key]: next });
      // Site-wide lines appear on every page.
      revalidatePath("/", "layout");
      return { ok: true };
    }
    case "home": {
      const sections = structuredClone(await content.getHomepageSections());
      if (!setAt(sections, ref.path, expected, next)) return { ok: false, error: STALE };
      await content.saveHomepageSections(sections);
      revalidatePath("/");
      return { ok: true };
    }
    case "page":
    case "pageMeta": {
      const page = await content.getPage(ref.slug);
      if (!page) return { ok: false, error: "That page no longer exists." };
      const copy = structuredClone(page) as typeof page & Record<string, unknown>;
      if (ref.kind === "pageMeta") {
        if (copy[ref.field] !== expected) return { ok: false, error: STALE };
        if (ref.field === "title" && !next.trim()) return { ok: false, error: "A page needs a title." };
        (copy as Record<string, unknown>)[ref.field] = next;
      } else if (!setAt(copy.sections, ref.path, expected, next)) {
        return { ok: false, error: STALE };
      }
      await content.savePage(copy);
      revalidatePath(`/pages/${ref.slug}`);
      return { ok: true };
    }
  }
}

/** Walk to the object at `path`, or undefined. */
function objectAt(root: unknown, path: (string | number)[]): Record<string, unknown> | undefined {
  let node = root as Record<string | number, unknown> | undefined;
  for (const step of path) {
    const child = node?.[step];
    if (!child || typeof child !== "object") return undefined;
    node = child as Record<string | number, unknown>;
  }
  return node as Record<string, unknown> | undefined;
}

/**
 * Replace one photo (computer and, if it was the same photo, phone too).
 *
 * The phone follows automatically because that is what someone replacing
 * "this photo" means. A separately chosen phone photo is left alone.
 */
export async function changePhotoAction(
  ref: Extract<TextRef, { kind: "home" } | { kind: "page" }>,
  expectedSrc: string | undefined,
  nextSrc: string,
): Promise<ChangeResult> {
  await requireAdmin();
  if (!/^\/media\/[0-9]+-[a-z0-9-]+\.webp$/.test(nextSrc)) {
    return { ok: false, error: "Choose a photo from the library." };
  }

  const apply = (root: unknown): ChangeResult | undefined => {
    const art = objectAt(root, ref.path) as
      | { desktop?: { tone: string; src?: string }; mobile?: { tone: string; src?: string } }
      | undefined;
    if (!art?.desktop || !art.mobile) return { ok: false, error: "That photo could not be found. Reload the page." };
    if (art.desktop.src !== expectedSrc) return { ok: false, error: STALE };
    const phoneFollows = !art.mobile.src || art.mobile.src === art.desktop.src;
    art.desktop = { ...art.desktop, src: nextSrc };
    if (phoneFollows) art.mobile = { ...art.mobile, src: nextSrc };
    return undefined;
  };

  if (ref.kind === "home") {
    const sections = structuredClone(await content.getHomepageSections());
    const failed = apply(sections);
    if (failed) return failed;
    await content.saveHomepageSections(sections);
    revalidatePath("/");
    return { ok: true };
  }

  const page = await content.getPage(ref.slug);
  if (!page) return { ok: false, error: "That page no longer exists." };
  const copy = structuredClone(page);
  const failed = apply(copy.sections);
  if (failed) return failed;
  await content.savePage(copy);
  revalidatePath(`/pages/${ref.slug}`);
  return { ok: true };
}
