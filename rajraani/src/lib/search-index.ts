import "server-only";

import { content } from "./content/content";
import { catalogue } from "./data/catalogue";
import { search, type SearchIndex, type SearchResults } from "./search";

/**
 * The search index, from what the shop is actually showing: the catalogue's
 * pieces (photographed and published, with the admin's edits), its
 * collections, and the published pages. Built per request; the catalogue is
 * a few dozen pieces, so a fresh read is cheaper than keeping a copy in sync.
 */
export async function searchIndex(): Promise<SearchIndex> {
  const [products, collections, pages] = await Promise.all([
    catalogue.listProducts(),
    catalogue.listCollections(),
    content.listPages(),
  ]);
  return {
    products,
    collections,
    pages: pages
      .filter((page) => page.published)
      .map(({ slug, title, standfirst }) => ({ slug, title, standfirst })),
  };
}

export async function searchSite(query: string): Promise<SearchResults> {
  return search(await searchIndex(), query);
}
