/**
 * Faceting.
 *
 * build.md §9.1 makes four requirements, all of which the category benchmark
 * fails: multi-select within a group, live result counts on every option, URL
 * state that survives sharing and the back button, and no full page reload.
 *
 * The subtle one is the count rule. A naive implementation counts against the
 * fully filtered set, so the moment you select "Blue" every other colour reads
 * zero and the group becomes un-explorable — which is worse than no counts at
 * all. Counts for a group must therefore be computed against everything
 * *except* that group's own selection.
 */

import {
  PRICE_BANDS,
  type FacetGroup,
  FACET_GROUPS,
} from "../domain/taxonomy.ts";
import { isAvailable, type Product } from "../domain/types.ts";

/** Selected values per group. Absent or empty means the group is unconstrained. */
export type FacetSelection = Partial<Record<FacetGroup, readonly string[]>>;

export type SortOrder =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc";

export const SORT_OPTIONS: readonly { value: SortOrder; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name-asc", label: "Name: A–Z" },
  { value: "name-desc", label: "Name: Z–A" },
];

export const DEFAULT_SORT: SortOrder = "featured";

export function isSortOrder(value: string): value is SortOrder {
  return SORT_OPTIONS.some((option) => option.value === value);
}

/** The price band a product falls into, computed rather than stored (§7.4). */
export function priceBandFor(product: Product): string | undefined {
  const amount = product.price.minorUnits;
  return PRICE_BANDS.find(
    (band) => amount >= band.min && (band.max === undefined || amount < band.max),
  )?.slug;
}

/**
 * The values a product carries in a given group.
 *
 * `availability` is derived rather than stored: a product is "available" when
 * it has stock, and separately carries its fulfilment mode. Deriving it is what
 * keeps facet counts availability-honest, so shoppers cannot filter into an
 * empty grid (build.md §9.7).
 */
export function productValues(
  product: Product,
  group: FacetGroup,
): readonly string[] {
  switch (group) {
    case "garment":
      return [product.garmentType];
    case "weave":
      // A stitched garment has no loom technique, so it belongs in no weave
      // bucket — it must not become a phantom count under some default value.
      // Returning [] also keeps it correctly filtered *out* of any weave
      // selection, which is what a shopper narrowing by "kadhua" means.
      return product.weave ? [product.weave] : [];
    case "fabric":
      return [product.fabric];
    case "colour":
      return [product.colourFamily];
    case "zari":
      return product.zariTypes;
    case "motif":
      return product.motifs;
    case "price": {
      const band = priceBandFor(product);
      return band ? [band] : [];
    }
    case "availability":
      // Derived, never stored — which is what keeps facet counts honest, so a
      // shopper cannot filter into an empty grid (build.md §9.7).
      return isAvailable(product) ? ["available"] : ["sold-out"];
    case "fulfilment":
      // A separate facet from availability. Conflating them is what produced
      // "Pre-Order:" in 463 product titles on the reference catalogue: a piece
      // can be sold out *and* made to order, and those are different questions.
      return [product.fulfilmentMode];
  }
}

function matchesGroup(
  product: Product,
  group: FacetGroup,
  selected: readonly string[],
): boolean {
  if (selected.length === 0) return true;
  const values = productValues(product, group);
  // OR within a group — this is what "multi-select" means, and it is the whole
  // reason a shopper can ask for Red *and* Maroon.
  return selected.some((value) => values.includes(value));
}

/** AND across groups, OR within a group. */
export function matchesSelection(
  product: Product,
  selection: FacetSelection,
  { ignoreGroup }: { ignoreGroup?: FacetGroup } = {},
): boolean {
  return FACET_GROUPS.every((group) => {
    if (group === ignoreGroup) return true;
    return matchesGroup(product, group, selection[group] ?? []);
  });
}

export function filterProducts(
  products: readonly Product[],
  selection: FacetSelection,
): Product[] {
  return products.filter((product) => matchesSelection(product, selection));
}

export type FacetCounts = Record<FacetGroup, Record<string, number>>;

/**
 * Live result counts for every option in every group.
 *
 * Each group is counted against the selection with that group's own
 * constraints lifted, so selecting "Blue" leaves Green and Red showing the
 * number of results they would return *instead of* Blue, rather than zero.
 */
export function computeFacetCounts(
  products: readonly Product[],
  selection: FacetSelection,
): FacetCounts {
  const counts = Object.fromEntries(
    FACET_GROUPS.map((group) => [group, {} as Record<string, number>]),
  ) as FacetCounts;

  for (const group of FACET_GROUPS) {
    const candidates = products.filter((product) =>
      matchesSelection(product, selection, { ignoreGroup: group }),
    );
    const bucket = counts[group];
    for (const product of candidates) {
      for (const value of productValues(product, group)) {
        bucket[value] = (bucket[value] ?? 0) + 1;
      }
    }
  }

  return counts;
}

/**
 * Sort.
 *
 * "Featured" puts available pieces first. With inventory-of-1 uniques, a mature
 * catalogue is around half sold out (pre-build-gaps.md §2), and a grid where
 * every other card is greyed reads as a dying store — so sold-out stays
 * browsable but never leads.
 */
export function sortProducts(
  products: readonly Product[],
  order: SortOrder,
): Product[] {
  const sorted = [...products];
  switch (order) {
    case "featured":
      return sorted.sort((a, b) => {
        const availability = Number(isAvailable(b)) - Number(isAvailable(a));
        if (availability !== 0) return availability;
        return Number(a.id) - Number(b.id);
      });
    case "price-asc":
      return sorted.sort((a, b) => a.price.minorUnits - b.price.minorUnits);
    case "price-desc":
      return sorted.sort((a, b) => b.price.minorUnits - a.price.minorUnits);
    case "name-asc":
      return sorted.sort((a, b) => a.poeticName.localeCompare(b.poeticName));
    case "name-desc":
      return sorted.sort((a, b) => b.poeticName.localeCompare(a.poeticName));
  }
}

export function countActiveFacets(selection: FacetSelection): number {
  return FACET_GROUPS.reduce(
    (total, group) => total + (selection[group]?.length ?? 0),
    0,
  );
}

export function toggleFacet(
  selection: FacetSelection,
  group: FacetGroup,
  value: string,
): FacetSelection {
  const current = selection[group] ?? [];
  const next = current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];

  const updated: FacetSelection = { ...selection };
  if (next.length === 0) {
    delete updated[group];
  } else {
    updated[group] = next;
  }
  return updated;
}

export function clearGroup(
  selection: FacetSelection,
  group: FacetGroup,
): FacetSelection {
  const updated: FacetSelection = { ...selection };
  delete updated[group];
  return updated;
}
