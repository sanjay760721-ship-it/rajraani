import "server-only";

import { db } from "../db/client.ts";
import { filterProducts } from "../facets/engine.ts";
import type {
  Campaign,
  Collection,
  FulfilmentMode,
  ImageRatio,
  Product,
  ProductImage,
  ShotType,
  ZariType,
} from "../domain/types.ts";
import type { CatalogueRepository } from "./repository.ts";

/**
 * The catalogue, read from SQLite.
 *
 * Implements the same interface the fixtures did, so no page changes when the
 * source swaps. That seam was built on the assumption the backend was
 * uncertain, and it was — this is the third implementation of it.
 *
 * Two deliberate choices:
 *
 * 1. **Everything is loaded and mapped in one pass.** At a few hundred
 *    one-of-a-kind pieces this is faster than the alternative and far simpler:
 *    three queries, no N+1, no join gymnastics. It stops being right somewhere
 *    around ten thousand products, which this catalogue will not reach.
 *
 * 2. **Only published products are visible.** Draft rows exist so the admin can
 *    save a half-written product without it appearing on the site.
 */

type ProductRow = {
  id: number;
  handle: string;
  title: string;
  poetic_name: string;
  sku: string;
  price_minor: number;
  currency: string;
  inventory_quantity: number;
  fulfilment_mode: string;
  dispatch_days_min: number;
  dispatch_days_max: number;
  narrative: string;
  spec_colour: string;
  spec_technique: string;
  spec_fabric: string;
  spec_speciality: string | null;
  spec_collection_note: string | null;
  spec_note: string | null;
  provenance_workshop: string;
  provenance_loom: string;
  provenance_weeks: number;
  provenance_artisans: number;
  garment_type: string;
  /** NULL for stitched garments, which have no loom technique. */
  weave: string | null;
  fabric: string;
  colour_family: string;
  campaign_slug: string | null;
};

type ImageRow = {
  product_id: number;
  position: number;
  ratio: string;
  shot: string;
  alt: string;
  url: string | null;
  width: number;
  height: number;
};

type TermRow = { product_id: number; value: string };

type CollectionRow = {
  handle: string;
  title: string;
  seo_intro: string;
  kind: string;
  facets_json: string | null;
  campaign_slug: string | null;
};

function toProduct(
  row: ProductRow,
  images: ProductImage[],
  motifs: string[],
  zari: ZariType[],
): Product {
  return {
    id: String(row.id),
    handle: row.handle,
    title: row.title,
    poeticName: row.poetic_name,
    sku: row.sku,
    price: { minorUnits: row.price_minor, currency: "INR" },
    inventoryQuantity: row.inventory_quantity,
    fulfilmentMode: row.fulfilment_mode as FulfilmentMode,
    dispatchLeadDays: [row.dispatch_days_min, row.dispatch_days_max],
    images,
    narrative: row.narrative,
    spec: {
      colour: row.spec_colour,
      technique: row.spec_technique,
      fabric: row.spec_fabric,
      ...(row.spec_speciality ? { speciality: row.spec_speciality } : {}),
      ...(row.spec_collection_note
        ? { collectionNote: row.spec_collection_note }
        : {}),
      ...(row.spec_note ? { note: row.spec_note } : {}),
    },
    provenance: {
      workshop: row.provenance_workshop,
      loom: row.provenance_loom,
      weaveTimeWeeks: row.provenance_weeks,
      artisanCount: row.provenance_artisans,
    },
    garmentType: row.garment_type,
    // Spread rather than assigned, so a stitched garment carries no `weave` key
    // at all. `weave: undefined` would satisfy the type but survive JSON round
    // trips as an explicit null, and the domain rule is that the field is absent.
    ...(row.weave ? { weave: row.weave } : {}),
    fabric: row.fabric,
    colourFamily: row.colour_family,
    zariTypes: zari,
    motifs,
    ...(row.campaign_slug ? { campaign: row.campaign_slug } : {}),
  };
}

/** One pass over the catalogue, assembled in memory. */
function loadProducts(): Product[] {
  const connection = db();

  const rows = connection
    .prepare(
      `SELECT * FROM product WHERE published = 1 ORDER BY id`,
    )
    .all() as unknown as ProductRow[];

  if (rows.length === 0) return [];

  const imageRows = connection
    .prepare(
      `SELECT product_id, position, ratio, shot, alt, url, width, height
         FROM product_image ORDER BY product_id, position`,
    )
    .all() as unknown as ImageRow[];

  const motifRows = connection
    .prepare(`SELECT product_id, motif AS value FROM product_motif ORDER BY motif`)
    .all() as unknown as TermRow[];

  const zariRows = connection
    .prepare(`SELECT product_id, zari AS value FROM product_zari ORDER BY zari`)
    .all() as unknown as TermRow[];

  const imagesByProduct = new Map<number, ProductImage[]>();
  for (const image of imageRows) {
    const list = imagesByProduct.get(image.product_id) ?? [];
    list.push({
      id: `${image.product_id}-${image.position + 1}`,
      ratio: image.ratio as ImageRatio,
      shot: image.shot as ShotType,
      alt: image.alt,
      width: image.width,
      height: image.height,
      ...(image.url ? { src: image.url } : {}),
    });
    imagesByProduct.set(image.product_id, list);
  }

  const group = (source: TermRow[]) => {
    const map = new Map<number, string[]>();
    for (const item of source) {
      const list = map.get(item.product_id) ?? [];
      list.push(item.value);
      map.set(item.product_id, list);
    }
    return map;
  };

  const motifsByProduct = group(motifRows);
  const zariByProduct = group(zariRows);

  return rows.map((row) =>
    toProduct(
      row,
      imagesByProduct.get(row.id) ?? [],
      motifsByProduct.get(row.id) ?? [],
      (zariByProduct.get(row.id) ?? []) as ZariType[],
    ),
  );
}

function toCollection(row: CollectionRow): Collection {
  if (row.kind === "facet") {
    return {
      kind: "facet",
      handle: row.handle,
      title: row.title,
      seoIntro: row.seo_intro,
      // The CHECK constraint guarantees facets_json is present for this kind.
      facets: JSON.parse(row.facets_json ?? "{}") as Record<string, string[]>,
    };
  }

  const handles = db()
    .prepare(
      `SELECT p.handle FROM collection_product cp
         JOIN product p ON p.id = cp.product_id
        WHERE cp.collection_handle = ? AND p.published = 1
        ORDER BY cp.position`,
    )
    .all(row.handle) as unknown as { handle: string }[];

  return {
    kind: "campaign",
    handle: row.handle,
    title: row.title,
    seoIntro: row.seo_intro,
    campaignSlug: row.campaign_slug ?? row.handle,
    productHandles: handles.map((item) => item.handle),
  };
}

export class SqliteCatalogueRepository implements CatalogueRepository {
  async listProducts(): Promise<readonly Product[]> {
    return loadProducts();
  }

  async getProduct(handle: string): Promise<Product | undefined> {
    return loadProducts().find((product) => product.handle === handle);
  }

  async listCollections(): Promise<readonly Collection[]> {
    const rows = db()
      .prepare(`SELECT * FROM collection ORDER BY position, handle`)
      .all() as unknown as CollectionRow[];
    return rows.map(toCollection);
  }

  async getCollection(handle: string): Promise<Collection | undefined> {
    const row = db()
      .prepare(`SELECT * FROM collection WHERE handle = ?`)
      .get(handle) as unknown as CollectionRow | undefined;
    return row ? toCollection(row) : undefined;
  }

  async productsInCollection(collection: Collection): Promise<readonly Product[]> {
    const products = loadProducts();

    if (collection.kind === "facet") {
      // A facet collection is a saved view, evaluated live — so it can never
      // drift out of sync with the catalogue behind it (build.md §9.5).
      return filterProducts(products, collection.facets);
    }

    // A campaign collection is authored, and its order is editorial.
    const byHandle = new Map(products.map((product) => [product.handle, product]));
    return collection.productHandles
      .map((handle) => byHandle.get(handle))
      .filter((product): product is Product => product !== undefined);
  }

  async getCampaign(slug: string): Promise<Campaign | undefined> {
    const row = db()
      .prepare(`SELECT * FROM campaign WHERE slug = ?`)
      .get(slug) as unknown as
      | {
          slug: string;
          name: string;
          season: string;
          standfirst: string;
          story_page_slug: string;
          collection_handle: string;
        }
      | undefined;

    if (!row) return undefined;
    return {
      slug: row.slug,
      name: row.name,
      season: row.season,
      standfirst: row.standfirst,
      storyPageSlug: row.story_page_slug,
      collectionHandle: row.collection_handle,
    };
  }
}
