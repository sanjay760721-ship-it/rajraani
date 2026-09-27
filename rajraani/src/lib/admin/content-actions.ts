"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { content } from "../content/content.ts";
import type { PageContent, PageKind } from "../content/repository.ts";
import type { Section } from "../content/sections.ts";
import { describe, rawPage, rawSetting, recordChange } from "./history.ts";

/**
 * Server actions for the content editors.
 *
 * Every one calls `requireAdmin()` first, for the reason spelled out in
 * `product-actions.ts`: a server action is a POST endpoint, reachable without
 * ever rendering the page whose form calls it. The layout guard protects the
 * screen, not the endpoint.
 *
 * These take structured arguments rather than `FormData`. The section editors
 * are drag-and-reorder interfaces holding a whole tree in client state, and
 * flattening that into form fields to unflatten it again here would buy
 * nothing — the payload is already JSON either way.
 */

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type SaveResult = { ok: true } | { ok: false; error: string };

/**
 * Reject a section list that could not have come from the editor.
 *
 * Not schema validation — the section union has fifteen members and validating
 * it properly belongs in one shared validator, not duplicated here. This is the
 * cheap structural floor that stops a malformed payload being persisted and
 * taking the homepage down on the next render.
 */
function malformed(sections: readonly Section[]): string | undefined {
  if (!Array.isArray(sections)) return "Sections must be a list.";
  if (sections.length === 0) return "A page needs at least one section.";

  const seen = new Set<string>();
  for (const section of sections) {
    if (!section || typeof section !== "object") return "A section is not an object.";
    if (typeof section.type !== "string" || !section.type)
      return "A section is missing its type.";
    if (typeof section.id !== "string" || !section.id)
      return "A section is missing its id.";
    // Ids key the React list and the anchor links; a duplicate silently drops
    // one of the two from the rendered page.
    if (seen.has(section.id)) return `Two sections share the id "${section.id}".`;
    seen.add(section.id);
  }
  return undefined;
}

export async function saveHomepageAction(
  sections: readonly Section[],
): Promise<SaveResult> {
  const admin = await requireAdmin();

  const problem = malformed(sections);
  if (problem) return { ok: false, error: problem };

  const before = rawSetting("homepage.sections");
  const shownBefore = JSON.stringify(await content.getHomepageSections());
  await content.saveHomepageSections(sections);
  recordChange({
    kind: "setting",
    target: "homepage.sections",
    label: "Homepage",
    who: admin.email,
    before,
    after: rawSetting("homepage.sections"),
    summary: describe(shownBefore, JSON.stringify(sections)),
  });
  // The homepage is ISR at 60s; without this an editor saves and then watches
  // the old page for a minute, which reads as the save having failed.
  revalidatePath("/");
  return { ok: true };
}

export async function savePageAction(page: {
  slug: string;
  kind: PageKind;
  title: string;
  standfirst: string;
  sections: readonly Section[];
  published: boolean;
}): Promise<SaveResult> {
  const admin = await requireAdmin();

  if (!SLUG.test(page.slug))
    return { ok: false, error: "Slug must be lowercase words joined by hyphens." };
  if (!page.title.trim()) return { ok: false, error: "A page needs a title." };

  const problem = malformed(page.sections);
  if (problem) return { ok: false, error: problem };

  const before = rawPage(page.slug);
  const shown = await content.getPage(page.slug);
  await content.savePage(page as PageContent);
  recordChange({
    kind: "page",
    target: page.slug,
    label: `Page: ${page.title}`,
    who: admin.email,
    before,
    after: rawPage(page.slug),
    summary: describe(JSON.stringify(shown ?? null), JSON.stringify(page)),
  });
  revalidatePath(`/pages/${page.slug}`);
  return { ok: true };
}

export async function deletePageAction(slug: string): Promise<SaveResult> {
  await requireAdmin();
  await content.deletePage(slug);
  revalidatePath(`/pages/${slug}`);
  return { ok: true };
}

export type CreatePageResult = { ok: true; slug: string } | { ok: false; error: string };

/**
 * A new page, as a copy of an existing one — hidden until the owner publishes it.
 *
 * Starting from a copy rather than a blank page is deliberate: a new campaign
 * page copied from Kala already has the right bands in the right order, and
 * the owner only has to change the words and photos.
 */
export async function createPageAction(fromSlug: string, title: string): Promise<CreatePageResult> {
  const admin = await requireAdmin();
  const name = title.trim();
  if (!name) return { ok: false, error: "Give the new page a name." };
  if (name.length > 80) return { ok: false, error: "Keep the name under 80 characters." };

  const source = await content.getPage(fromSlug);
  if (!source) return { ok: false, error: "The page to copy no longer exists." };

  const base =
    name
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "page";
  const taken = new Set((await content.listPages()).map((page) => page.slug));
  let slug = base;
  for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`;

  await content.savePage({
    slug,
    kind: source.kind,
    title: name,
    standfirst: source.standfirst,
    sections: structuredClone(source.sections),
    published: false,
  });
  recordChange({
    kind: "page",
    target: slug,
    label: `Page: ${name}`,
    who: admin.email,
    before: null,
    after: rawPage(slug),
    summary: `New page, copied from “${source.title}” (hidden until it is made live)`,
  });
  return { ok: true, slug };
}
