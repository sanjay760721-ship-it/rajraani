/**
 * Grouped search.
 *
 * build.md §8.3: the one thing the reference site's search does well is
 * grouping — routing a shopper to a *category* or an *editorial story*, not
 * only to a product, which is exactly right for a deep catalogue with a heavy
 * editorial layer. That grouping is copied here.
 *
 * This is a linear scan over fixtures. Sprint 3 replaces it with Algolia; the
 * grouped result shape is the part that should survive.
 *
 * Alias resolution is wired in, so a shopper typing "kadwa" finds kadhua
 * pieces — the runtime payoff of recording transliteration forks in the
 * vocabulary rather than letting them fork the catalogue.
 */

import { PAGES } from "./content/sections";
import { COLLECTIONS, PRODUCTS } from "./data/fixtures";
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

export function search(rawQuery: string): SearchResults {
  const query = rawQuery.trim().toLowerCase();
  if (query.length < 2) {
    return { query: rawQuery, matchedTerms: [], products: [], collections: [], pages: [] };
  }

  const matchedTerms = FACET_GROUPS.flatMap((group) => {
    const term = resolveTerm(group, query);
    return term ? [{ group, name: term.name, slug: term.slug }] : [];
  });

  const matchedSlugs = new Set(matchedTerms.map((term) => term.slug));

  const products = PRODUCTS.filter((product) => {
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

  const collections = COLLECTIONS.filter((collection) =>
    `${collection.title} ${collection.seoIntro}`.toLowerCase().includes(query),
  );

  const pages = Object.entries(PAGES)
    .filter(([slug, page]) =>
      `${slug} ${page.title} ${page.standfirst}`.toLowerCase().includes(query),
    )
    .map(([slug, page]) => ({
      slug,
      title: page.title,
      standfirst: page.standfirst,
    }));

  return {
    query: rawQuery,
    matchedTerms: matchedTerms.map(({ group, name }) => ({ group, name })),
    products,
    collections,
    pages,
  };
}
