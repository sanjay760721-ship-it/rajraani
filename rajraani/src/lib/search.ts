/**
 * Grouped search.
 *
 * build.md §8.3: the one thing the reference site's search does well is
 * grouping — routing a shopper to a *category* or an *editorial story*, not
 * only to a product, which is exactly right for a deep catalogue with a heavy
 * editorial layer. That grouping is copied here.
 *
 * A linear scan over a search index: the live catalogue (photographed,
 * published pieces, with the admin's edits), its collections and the
 * published pages, built on the server by search-index.ts. It used to scan
 * the committed fixtures, so it listed pieces the shop hides (their pages
 * 404) and ignored every edit made in the admin.
 *
 * Alias resolution is wired in, so a shopper typing "kadwa" finds kadhua
 * pieces — the runtime payoff of recording transliteration forks in the
 * vocabulary rather than letting them fork the catalogue.
 */

import { FACET_GROUPS, resolveTerm } from "./domain/taxonomy";
import type { Collection, Product } from "./domain/types";

export type SearchResults = {
  query: string;
  /** Terms the query resolved to, so the UI can say why a result matched. */
  matchedTerms: { group: string; name: string }[];
  products: Product[];
  collections: Collection[];
  pages: { slug: string; title: string; standfirst: string }[];
};

/** What search looks through: built from live data on the server. */
export type SearchIndex = {
  products: readonly Product[];
  collections: readonly Collection[];
  pages: readonly { slug: string; title: string; standfirst: string }[];
};

export const EMPTY_RESULTS: SearchResults = { query: "", matchedTerms: [], products: [], collections: [], pages: [] };

export function search(index: SearchIndex, rawQuery: string): SearchResults {
  const query = rawQuery.trim().toLowerCase();
  if (query.length < 2) {
    return { ...EMPTY_RESULTS, query: rawQuery };
  }

  const matchedTerms = FACET_GROUPS.flatMap((group) => {
    const term = resolveTerm(group, query);
    return term ? [{ group, name: term.name, slug: term.slug }] : [];
  });

  const matchedSlugs = new Set(matchedTerms.map((term) => term.slug));

  const products = index.products.filter((product) => {
    if (
      (product.weave !== undefined && matchedSlugs.has(product.weave)) ||
      matchedSlugs.has(product.fabric) ||
      matchedSlugs.has(product.colourFamily) ||
      product.motifs.some((motif) => matchedSlugs.has(motif))
    ) {
      return true;
    }
    return [product.title, product.poeticName, product.sku, product.narrative]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const collections = index.collections.filter((collection) =>
    `${collection.title} ${collection.seoIntro}`.toLowerCase().includes(query),
  );

  const pages = index.pages.filter((page) =>
    `${page.slug} ${page.title} ${page.standfirst}`.toLowerCase().includes(query),
  );

  return {
    query: rawQuery,
    matchedTerms: matchedTerms.map(({ group, name }) => ({ group, name })),
    products: [...products],
    collections: [...collections],
    pages: [...pages],
  };
}
