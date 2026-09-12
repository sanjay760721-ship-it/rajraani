import "server-only";

import type { ContentWriteRepository, PageContent } from "./repository.ts";
import { HOMEPAGE_SECTIONS, PAGES, type Section } from "./sections.ts";
import { SqliteContentRepository } from "./sqlite-content.ts";

/**
 * Content entry point.
 *
 * Everything reads content through `content`. Which implementation backs it is
 * answered once, here — the same arrangement `catalogue.ts` uses, for the same
 * reason.
 *
 * ── The fallback, and why it is not a hack ──────────────────────────────────
 *
 * `sections.ts` remains the source of the *seed* content, and the database
 * starts empty. An empty homepage row therefore means "nothing has been
 * authored yet", not "the homepage is blank" — and rendering a blank homepage
 * for that would be hostile in exactly the way `catalogue.ts` describes: the
 * difference between not set up yet and broken.
 *
 * So reads fall back to the committed constants when the database has nothing.
 * The first save writes a real row and the fallback stops applying, per key.
 * That also makes the admin non-destructive to try: rearranging sections and
 * saving cannot lose the seed, because the seed is in git.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const inner = new SqliteContentRepository();

/** Seed pages, in the shape the repository returns. */
function seedPages(): readonly PageContent[] {
  return Object.entries(PAGES).map(([slug, page]) => ({
    slug,
    // Carried on the seed itself. This used to be inferred here — `slug ===
    // "nadi" || slug === "antaraal"` — which filed every campaign story added
    // after those two under `craft`, silently, in a list the admin groups by
    // kind.
    kind: page.kind,
    title: page.title,
    standfirst: page.standfirst,
    sections: page.sections,
    published: true,
  }));
}

export const content: ContentWriteRepository = {
  async getHomepageSections(): Promise<readonly Section[]> {
    const stored = await inner.getHomepageSections();
    return stored.length > 0 ? stored : HOMEPAGE_SECTIONS;
  },

  async listPages(): Promise<readonly PageContent[]> {
    const stored = await inner.listPages();
    return stored.length > 0 ? stored : seedPages();
  },

  async getPage(slug: string): Promise<PageContent | undefined> {
    const stored = await inner.getPage(slug);
    if (stored) return stored;
    return seedPages().find((page) => page.slug === slug);
  },

  saveHomepageSections: (sections) => inner.saveHomepageSections(sections),
  savePage: (page) => inner.savePage(page),
  deletePage: (slug) => inner.deletePage(slug),
};

/**
 * True when the homepage is still showing the committed seed.
 *
 * Drives the admin's "not yet authored" notice, so an editor can tell whether
 * they are looking at content someone chose or at the defaults.
 */
export async function homepageIsSeed(): Promise<boolean> {
  const stored = await inner.getHomepageSections();
  return stored.length === 0;
}
