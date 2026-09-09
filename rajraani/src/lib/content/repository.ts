import type { Section } from "./sections.ts";

/**
 * The content seam.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Why this exists.
 *
 * Until now the homepage and every editorial page imported `HOMEPAGE_SECTIONS`
 * and `PAGES` straight from `sections.ts` — a TypeScript module. That is why
 * the admin's homepage editor was a mock and could only ever have been one:
 * there was nowhere to save to. `HomepageEditor` read the constant into
 * `useState`, let you rearrange it, and dropped everything on navigation.
 *
 * The database was already shaped for this and empty: `page.sections_json` and
 * the `setting` key/value table have existed, unused, since the schema was
 * written. What was missing was the seam between them and the pages.
 *
 * This is deliberately the same shape as `CatalogueRepository`, which has now
 * absorbed three backend changes without a page noticing. Same reasons, same
 * pattern: pages depend on the interface, the implementation is chosen once.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * The three kinds of editorial page, constrained in the schema itself.
 *
 * Not a free-text field: `page.kind` carries a CHECK, so an editor choosing a
 * fourth kind is a database error rather than a page that renders oddly.
 */
export type PageKind = "campaign_story" | "craft" | "journal";

export const PAGE_KINDS: readonly { value: PageKind; label: string }[] = [
  { value: "campaign_story", label: "Campaign story" },
  { value: "craft", label: "Craft" },
  { value: "journal", label: "Journal" },
];

export type PageContent = {
  readonly slug: string;
  readonly kind: PageKind;
  readonly title: string;
  /** NOT NULL in the schema — an empty string, never absent. */
  readonly standfirst: string;
  readonly sections: readonly Section[];
  /** Drafts exist so a half-written page can be saved without going live. */
  readonly published: boolean;
};

export interface ContentRepository {
  /** The homepage's ordered section list. */
  getHomepageSections(): Promise<readonly Section[]>;
  /** Every editorial page, published or not — the admin needs the drafts. */
  listPages(): Promise<readonly PageContent[]>;
  /** One page. Storefront callers must check `published` themselves. */
  getPage(slug: string): Promise<PageContent | undefined>;
}

/**
 * Writes are a separate interface from reads.
 *
 * The storefront needs `ContentRepository` and must never be handed a `save`;
 * keeping them apart means a page component cannot mutate content even by
 * accident, and the admin imports the wider one explicitly.
 */
export interface ContentWriteRepository extends ContentRepository {
  saveHomepageSections(sections: readonly Section[]): Promise<void>;
  savePage(page: PageContent): Promise<void>;
  deletePage(slug: string): Promise<void>;
}
