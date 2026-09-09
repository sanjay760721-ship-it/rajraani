"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { content } from "../content/content.ts";
import type { PageContent, PageKind } from "../content/repository.ts";
import type { Section } from "../content/sections.ts";

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
  await requireAdmin();

  const problem = malformed(sections);
  if (problem) return { ok: false, error: problem };

  await content.saveHomepageSections(sections);
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
  await requireAdmin();

  if (!SLUG.test(page.slug))
    return { ok: false, error: "Slug must be lowercase words joined by hyphens." };
  if (!page.title.trim()) return { ok: false, error: "A page needs a title." };

  const problem = malformed(page.sections);
  if (problem) return { ok: false, error: problem };

  await content.savePage(page as PageContent);
  revalidatePath(`/pages/${page.slug}`);
  return { ok: true };
}

export async function deletePageAction(slug: string): Promise<SaveResult> {
  await requireAdmin();
  await content.deletePage(slug);
  revalidatePath(`/pages/${slug}`);
  return { ok: true };
}
