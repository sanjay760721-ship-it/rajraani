/**
 * The controlled vocabulary.
 *
 * `taxonomy/facets.json` is the single source of truth. This module is a typed
 * reader over it and adds no terms of its own, so the vocabulary stays
 * reviewable by someone who will never open a `.ts` file. `taxonomy/REVIEW.md`
 * is the same content written for a human reviewer.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * STILL A DRAFT. 11 decisions need domain sign-off before Sprint 3 — most
 * importantly whether the canonical spelling is `kadhua` or `kadwa`, which the
 * reference catalogue split exactly 50/50 across 32 tag variants. Canonical
 * slugs become URLs, so they are free to change now and expensive later.
 * `npm run check:taxonomy` re-prints the open list.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * This file is also the governance rule from build.md §7.3. On a greenfield
 * catalogue the tag-migration workstream inverts into one discipline: define
 * the vocabulary before the first product exists, and never allow free-text
 * term creation. The reference catalogue reached 1,592 unique tags, 703 of them
 * used exactly once, for want of it.
 *
 * ALIAS RESOLUTION IS FACET-SCOPED, NEVER GLOBAL. `gold` is claimed by both
 * `zari.gold` (the metallic thread) and `colour.gold` (the shade); both are
 * correct, and a shopper tells them apart from the group label. Resolving a
 * term without naming its facet is therefore always a bug — which is why
 * `resolveTerm` takes the group as its first argument.
 */

import { FACETS, type RawFacetValue } from "./facets.generated.ts";

/** The facet groups the storefront exposes, in sidebar order. */
export const FACET_GROUPS = [
  "garment",
  "weave",
  "fabric",
  "colour",
  "zari",
  "motif",
  "price",
  "availability",
  "fulfilment",
] as const;

export type FacetGroup = (typeof FACET_GROUPS)[number];

/** Groups whose values are stored on the product and read from facets.json. */
type VocabularyGroup =
  | "garment"
  | "weave"
  | "fabric"
  | "colour"
  | "zari"
  | "motif"
  | "availability"
  | "fulfilment";

export type TaxonomyTerm = {
  /** The slug stored on the product and used in URLs. */
  slug: string;
  /** Presentation only — may be re-worded without a migration. */
  name: string;
  description?: string;
  /**
   * For search-query expansion and import mapping. Never stored on a product.
   *
   * This is the runtime half of the transliteration finding: a shopper typing
   * "kadwa" reaches Kadhua, and a legacy tag maps rather than forks.
   */
  aliases?: readonly string[];
  /** Swatch colour, colour facet only. */
  hex?: string;
  /** True while this term is still awaiting domain sign-off. */
  needsReview?: boolean;
  /** The open question, for the review tooling. */
  reviewNote?: string;
};

function readGroup(group: VocabularyGroup): TaxonomyTerm[] {
  const values: RawFacetValue[] = FACETS[group]?.values ?? [];
  return values.map((value) => ({
    slug: value.canonical,
    name: value.label,
    ...(value.definition ? { description: value.definition } : {}),
    ...(value.aliases ? { aliases: value.aliases } : {}),
    ...(value.hex ? { hex: value.hex } : {}),
    ...(value.review ? { needsReview: true } : {}),
    ...(value.decision ? { reviewNote: value.decision } : {}),
  }));
}

export const GARMENT_TYPES = readGroup("garment");
export const WEAVES = readGroup("weave");
export const FABRICS = readGroup("fabric");
export const COLOURS = readGroup("colour");
export const ZARI_TYPES = readGroup("zari");
export const MOTIFS = readGroup("motif");
export const AVAILABILITY_OPTIONS = readGroup("availability");
export const FULFILMENT_OPTIONS = readGroup("fulfilment");

/**
 * Price bands, computed at query time against the base currency.
 *
 * Deliberately absent from facets.json and deliberately not stored on the
 * product: a stored band is wrong the moment a price changes or a shopper
 * switches to one of the other seven markets (build.md §7.4).
 */
export const PRICE_BANDS: readonly (TaxonomyTerm & {
  /** Minor units, base currency. `max` is exclusive; absent means open-ended. */
  min: number;
  max?: number;
})[] = [
  { slug: "under-25000", name: "Under ₹25,000", min: 0, max: 2_500_000 },
  { slug: "25000-50000", name: "₹25,000 – ₹50,000", min: 2_500_000, max: 5_000_000 },
  { slug: "50000-100000", name: "₹50,000 – ₹1,00,000", min: 5_000_000, max: 10_000_000 },
  { slug: "over-100000", name: "Over ₹1,00,000", min: 10_000_000 },
];

export const FACET_GROUP_LABELS: Record<FacetGroup, string> = {
  garment: "Garment",
  weave: "Weave",
  fabric: "Fabric",
  colour: "Colour",
  zari: "Zari",
  motif: "Motif",
  price: "Price",
  availability: "Availability",
  fulfilment: "Dispatch",
};

export function termsForGroup(group: FacetGroup): readonly TaxonomyTerm[] {
  switch (group) {
    case "garment":
      return GARMENT_TYPES;
    case "weave":
      return WEAVES;
    case "fabric":
      return FABRICS;
    case "colour":
      return COLOURS;
    case "zari":
      return ZARI_TYPES;
    case "motif":
      return MOTIFS;
    case "price":
      return PRICE_BANDS;
    case "availability":
      return AVAILABILITY_OPTIONS;
    case "fulfilment":
      return FULFILMENT_OPTIONS;
  }
}

export function findTerm(
  group: FacetGroup,
  slug: string,
): TaxonomyTerm | undefined {
  return termsForGroup(group).find((term) => term.slug === slug);
}

/**
 * Resolve a user-typed or legacy term to its canonical slug, WITHIN a facet.
 *
 * The group argument is not a convenience — see the note at the top of this
 * file about `gold`. Resolving globally would silently pick one of two answers
 * that are both correct.
 */
export function resolveTerm(
  group: FacetGroup,
  input: string,
): TaxonomyTerm | undefined {
  const needle = input.trim().toLowerCase().replace(/\s+/g, " ");
  return termsForGroup(group).find(
    (term) =>
      term.slug.toLowerCase() === needle ||
      term.name.toLowerCase() === needle ||
      term.aliases?.some((alias) => alias.toLowerCase() === needle),
  );
}

/** Terms still awaiting domain sign-off, for the review tooling. */
export function termsAwaitingReview(): { group: FacetGroup; term: TaxonomyTerm }[] {
  return FACET_GROUPS.flatMap((group) =>
    termsForGroup(group)
      .filter((term) => term.needsReview)
      .map((term) => ({ group, term })),
  );
}
