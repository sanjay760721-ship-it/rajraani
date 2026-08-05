/**
 * Domain model.
 *
 * Follows the field model in build.md §2.1 and §2.2 — which was written for
 * Shopify metafields, but describes the domain rather than the platform, so it
 * survived Shopify being dropped intact. The database repository maps rows into
 * these; the fixture repository constructs them directly.
 *
 * Two structural rules from the research are encoded in the types themselves,
 * where they cannot be forgotten:
 *
 * - Fulfilment state is a field, never part of the title (§9.8). `title` has no
 *   place to put it and `fulfilmentMode` has nowhere else to go.
 * - Every image carries its own descriptive alt text and shot type (§9.9).
 *   `alt` is required, so an image cannot be added without one.
 */

/**
 * Currencies.
 *
 * INR only — the store is India-only and Razorpay settles in rupees. The eight
 * markets the research measured were a Shopify Markets capability; without it
 * there is no rate source, and an unmaintained rate prices real orders wrongly.
 * See lib/money.ts.
 */
export const CURRENCIES = ["INR"] as const;

export type CurrencyCode = (typeof CURRENCIES)[number];

/** The store's base currency. All catalogue prices are held in this. */
export const BASE_CURRENCY: CurrencyCode = "INR";

/**
 * Money in minor units (paise for INR), to keep arithmetic in integers.
 *
 * Price bands are never stored — they are computed at query time (build.md
 * §7.4), because a stored band is wrong the moment a price changes or a
 * shopper switches currency.
 */
export type Money = {
  /** Minor units. ₹46,500 is 4_650_000. */
  readonly minorUnits: number;
  readonly currency: CurrencyCode;
};

/**
 * Fulfilment state lives here and is expressed by badging in the template.
 *
 * build.md §9.8: the reference site prefixed "Pre-Order:" onto 463 product
 * titles, which leaked into breadcrumbs, page titles, cart lines, og:title and
 * JSON-LD name, and could only be undone by editing 463 titles.
 */
export type FulfilmentMode = "ready_to_ship" | "made_to_order" | "pre_order";

export type ZariType =
  | "real_zari"
  | "roopa_sona"
  | "gold"
  | "silver"
  | "resham";

/** Which of the two capture ratios a frame was shot at (photography-brief §2.1). */
export type ImageRatio = "portrait" | "square";

/**
 * Position in the shot template (photography-brief.md §3).
 *
 * Locked from SKU #1 — build.md §9.11 notes the reference site converged on a
 * template late and never retro-fitted, leaving a visibly inconsistent grid.
 * Consistency here costs a decision, not money, and cannot be bought back.
 */
export type ShotType =
  | "on_model_full"
  | "on_model_drape"
  | "on_model_pallu"
  | "on_model_detail"
  | "on_model_movement"
  | "detail_weave"
  | "detail_border"
  | "flat_lay";

export type ProductImage = {
  readonly id: string;
  readonly ratio: ImageRatio;
  readonly shot: ShotType;
  /**
   * Describes the frame — weave, motif, colour, shot type — never the product
   * title repeated (build.md §9.9). Required, so a frame cannot ship without
   * one. Roughly 6 strings per SKU; they belong in the writing brief.
   */
  readonly alt: string;
  /** Master dimensions. 3000×4500 portrait, 3000×3000 square. */
  readonly width: number;
  readonly height: number;
  /** Set once real photography lands. Absent means render the placeholder. */
  readonly src?: string;
};

/**
 * Vocabulary terms live in taxonomy/facets.json and are read through
 * lib/domain/taxonomy.ts. They are deliberately not redefined here — one
 * definition, in the file that owns the source of truth.
 */

export type Campaign = {
  readonly slug: string;
  readonly name: string;
  readonly season: string;
  /**
   * The pairing is the core content architecture (build.md §2.2). A campaign is
   * one entity holding two references, not two URLs that happen to share a
   * handle — pre-build-gaps.md §4 proved you cannot infer the pairing from the
   * handle, because most evocative handles are ordinary collections.
   */
  readonly storyPageSlug: string;
  readonly collectionHandle: string;
  readonly standfirst: string;
};

/** The structured spec bullets. Never pasted HTML (build.md §6). */
export type ProductSpec = {
  readonly colour: string;
  readonly technique: string;
  readonly fabric: string;
  readonly speciality?: string;
  readonly collectionNote?: string;
  readonly note?: string;
};

/**
 * Provenance replaces reviews as the PDP credibility surface (build.md §9.4).
 *
 * The category deliberately carries no reviews or ratings, which leaves the
 * page with nothing to trust. This suits the brand better than stars, and it
 * is content the editorial function is already producing.
 */
export type Provenance = {
  readonly workshop: string;
  readonly loom: string;
  readonly weaveTimeWeeks: number;
  readonly artisanCount: number;
};

export type Product = {
  readonly id: string;
  readonly handle: string;
  /**
   * The descriptive title. Contains no fulfilment state, ever — that is
   * `fulfilmentMode`, and it is enforced by a test.
   */
  readonly title: string;
  /**
   * The piece's proper name — the brand's core differentiator (build.md §2.1,
   * addendum A8). First-class and distinct from `title`, so editorial pages can
   * link a named piece back to its PDP.
   */
  readonly poeticName: string;
  readonly sku: string;
  readonly price: Money;
  /** Inventory of 1 for unique pieces; 49% of a mature catalogue reads 0. */
  readonly inventoryQuantity: number;
  readonly fulfilmentMode: FulfilmentMode;
  /** Varies per product — 10–12, 12–14 (addendum A6). */
  readonly dispatchLeadDays: readonly [number, number];
  readonly images: readonly ProductImage[];
  readonly narrative: string;
  readonly spec: ProductSpec;
  readonly provenance: Provenance;

  /* --- Facet references. Slugs into the controlled vocabularies. --------- */
  readonly garmentType: string;
  readonly weave: string;
  readonly fabric: string;
  readonly colourFamily: string;
  readonly zariTypes: readonly ZariType[];
  readonly motifs: readonly string[];
  readonly campaign?: string;
};

export function isAvailable(product: Product): boolean {
  return product.inventoryQuantity > 0;
}

/**
 * A collection is either a facet result or an editorially-earned campaign
 * (build.md §9.5). There is no third kind — hand-made collections that
 * duplicate a facet combination are what produced 250+ collections against
 * ~3,000 products on the reference site, and price-band collections are
 * forbidden outright by §7.4.
 */
export type Collection =
  | {
      readonly kind: "facet";
      readonly handle: string;
      readonly title: string;
      /** Organic-traffic infrastructure; keep it (design.md §6.2). */
      readonly seoIntro: string;
      /** The facet selection this collection is a saved view of. */
      readonly facets: Readonly<Record<string, readonly string[]>>;
    }
  | {
      readonly kind: "campaign";
      readonly handle: string;
      readonly title: string;
      readonly seoIntro: string;
      readonly campaignSlug: string;
      readonly productHandles: readonly string[];
    };
