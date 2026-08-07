import "server-only";

import { db, transaction } from "../db/client.ts";

/**
 * Copy a query result into ordinary objects.
 *
 * `node:sqlite` returns rows with a **null prototype**. React refuses to
 * serialise those across the server/client boundary — "Only plain objects, and
 * a few built-ins, can be passed to Client Components" — which surfaces as a
 * server error on the page rather than anywhere near the query.
 *
 * Cheap insurance, applied at every read, so a row can be handed to a form
 * component without anyone having to remember this.
 */
function plain<T>(rows: unknown[]): T[] {
  return rows.map((row) => ({ ...(row as object) })) as T[];
}

function plainOne<T>(row: unknown): T | undefined {
  return row === undefined || row === null ? undefined : ({ ...(row as object) } as T);
}

/**
 * Admin reads and writes.
 *
 * Separate from the storefront repository on purpose. The storefront only ever
 * sees published products and never writes; the admin sees drafts and writes
 * everything. Sharing one object would mean every storefront query carried a
 * "but not drafts" caveat, and one day someone would forget it.
 */

export type AdminProductRow = {
  id: number;
  handle: string;
  title: string;
  poetic_name: string;
  sku: string;
  price_minor: number;
  inventory_quantity: number;
  fulfilment_mode: string;
  published: number;
  updated_at: string;
  image_count: number;
};

export function listProductsForAdmin(): AdminProductRow[] {
  return plain<AdminProductRow>(
    db()
      .prepare(
        `SELECT p.id, p.handle, p.title, p.poetic_name, p.sku, p.price_minor,
                p.inventory_quantity, p.fulfilment_mode, p.published, p.updated_at,
                (SELECT COUNT(*) FROM product_image i WHERE i.product_id = p.id)
                  AS image_count
           FROM product p
          ORDER BY p.published ASC, p.updated_at DESC`,
      )
      .all(),
  );
}

export type ProductInput = {
  handle: string;
  title: string;
  poeticName: string;
  sku: string;
  priceRupees: number;
  inventoryQuantity: number;
  fulfilmentMode: string;
  dispatchDaysMin: number;
  dispatchDaysMax: number;
  narrative: string;
  specColour: string;
  specTechnique: string;
  specFabric: string;
  specSpeciality: string;
  specCollectionNote: string;
  specNote: string;
  provenanceWorkshop: string;
  provenanceLoom: string;
  provenanceWeeks: number;
  provenanceArtisans: number;
  garmentType: string;
  weave: string;
  fabric: string;
  colourFamily: string;
  campaignSlug: string;
  motifs: string[];
  zariTypes: string[];
  published: boolean;
};

export type EditableProduct = ProductInput & { id: number };

export function getProductForEdit(id: number): EditableProduct | undefined {
  const row = plainOne<Record<string, string | number | null>>(
    db().prepare(`SELECT * FROM product WHERE id = ?`).get(id),
  );
  if (!row) return undefined;

  const motifs = (
    db()
      .prepare(`SELECT motif FROM product_motif WHERE product_id = ? ORDER BY motif`)
      .all(id) as unknown as { motif: string }[]
  ).map((r) => r.motif);

  const zari = (
    db()
      .prepare(`SELECT zari FROM product_zari WHERE product_id = ? ORDER BY zari`)
      .all(id) as unknown as { zari: string }[]
  ).map((r) => r.zari);

  const text = (key: string) => String(row[key] ?? "");
  const num = (key: string) => Number(row[key] ?? 0);

  return {
    id,
    handle: text("handle"),
    title: text("title"),
    poeticName: text("poetic_name"),
    sku: text("sku"),
    priceRupees: num("price_minor") / 100,
    inventoryQuantity: num("inventory_quantity"),
    fulfilmentMode: text("fulfilment_mode"),
    dispatchDaysMin: num("dispatch_days_min"),
    dispatchDaysMax: num("dispatch_days_max"),
    narrative: text("narrative"),
    specColour: text("spec_colour"),
    specTechnique: text("spec_technique"),
    specFabric: text("spec_fabric"),
    specSpeciality: text("spec_speciality"),
    specCollectionNote: text("spec_collection_note"),
    specNote: text("spec_note"),
    provenanceWorkshop: text("provenance_workshop"),
    provenanceLoom: text("provenance_loom"),
    provenanceWeeks: num("provenance_weeks"),
    provenanceArtisans: num("provenance_artisans"),
    garmentType: text("garment_type"),
    weave: text("weave"),
    fabric: text("fabric"),
    colourFamily: text("colour_family"),
    campaignSlug: text("campaign_slug"),
    motifs,
    zariTypes: zari,
    published: num("published") === 1,
  };
}

const PRODUCT_COLUMNS = [
  "handle", "title", "poetic_name", "sku", "price_minor", "inventory_quantity",
  "fulfilment_mode", "dispatch_days_min", "dispatch_days_max", "narrative",
  "spec_colour", "spec_technique", "spec_fabric", "spec_speciality",
  "spec_collection_note", "spec_note", "provenance_workshop", "provenance_loom",
  "provenance_weeks", "provenance_artisans", "garment_type", "weave", "fabric",
  "colour_family", "campaign_slug", "published", "updated_at",
];

function columnValues(input: ProductInput): (string | number | null)[] {
  const orNull = (value: string) => (value.trim() === "" ? null : value.trim());
  return [
    input.handle.trim(),
    input.title.trim(),
    input.poeticName.trim(),
    input.sku.trim(),
    Math.round(input.priceRupees * 100),
    input.inventoryQuantity,
    input.fulfilmentMode,
    input.dispatchDaysMin,
    input.dispatchDaysMax,
    input.narrative.trim(),
    input.specColour.trim(),
    input.specTechnique.trim(),
    input.specFabric.trim(),
    orNull(input.specSpeciality),
    orNull(input.specCollectionNote),
    orNull(input.specNote),
    input.provenanceWorkshop.trim(),
    input.provenanceLoom.trim(),
    input.provenanceWeeks,
    input.provenanceArtisans,
    input.garmentType,
    input.weave,
    input.fabric,
    input.colourFamily,
    orNull(input.campaignSlug),
    input.published ? 1 : 0,
    new Date().toISOString(),
  ];
}

/**
 * Insert or update, with the multi-valued facets replaced wholesale.
 *
 * All in one transaction: a product whose motifs saved but whose price did not
 * is worse than a save that failed cleanly and said so.
 */
export function saveProduct(input: ProductInput, id?: number): number {
  return transaction(() => {
    let productId: number;

    if (id) {
      db()
        .prepare(
          `UPDATE product SET ${PRODUCT_COLUMNS.map((c) => `${c} = ?`).join(", ")}
            WHERE id = ?`,
        )
        .run(...columnValues(input), id);
      productId = id;
    } else {
      const now = new Date().toISOString();
      const result = db()
        .prepare(
          `INSERT INTO product (${PRODUCT_COLUMNS.join(", ")}, created_at)
           VALUES (${PRODUCT_COLUMNS.map(() => "?").join(", ")}, ?)`,
        )
        .run(...columnValues(input), now);
      productId = Number(result.lastInsertRowid);
    }

    db().prepare(`DELETE FROM product_motif WHERE product_id = ?`).run(productId);
    db().prepare(`DELETE FROM product_zari WHERE product_id = ?`).run(productId);

    const motif = db().prepare(`INSERT INTO product_motif VALUES (?, ?)`);
    for (const value of new Set(input.motifs)) motif.run(productId, value);

    const zari = db().prepare(`INSERT INTO product_zari VALUES (?, ?)`);
    for (const value of new Set(input.zariTypes)) zari.run(productId, value);

    return productId;
  });
}

export function deleteProduct(id: number): void {
  // Images, motifs and zari rows cascade.
  db().prepare(`DELETE FROM product WHERE id = ?`).run(id);
}

export function setPublished(id: number, published: boolean): void {
  db()
    .prepare(`UPDATE product SET published = ?, updated_at = ? WHERE id = ?`)
    .run(published ? 1 : 0, new Date().toISOString(), id);
}

export type AdminImage = {
  id: number;
  position: number;
  ratio: string;
  shot: string;
  alt: string;
  url: string | null;
};

export function listImages(productId: number): AdminImage[] {
  return plain<AdminImage>(
    db()
      .prepare(
        `SELECT id, position, ratio, shot, alt, url FROM product_image
          WHERE product_id = ? ORDER BY position`,
      )
      .all(productId),
  );
}

export function campaignOptions(): { slug: string; name: string }[] {
  return plain<{ slug: string; name: string }>(
    db().prepare(`SELECT slug, name FROM campaign ORDER BY name`).all(),
  );
}

/** Is this handle already taken by a different product? */
export function handleTaken(handle: string, excludeId?: number): boolean {
  const row = db()
    .prepare(`SELECT id FROM product WHERE handle = ?`)
    .get(handle.trim()) as unknown as { id: number } | undefined;
  return row !== undefined && row.id !== excludeId;
}

export function skuTaken(sku: string, excludeId?: number): boolean {
  const row = db()
    .prepare(`SELECT id FROM product WHERE sku = ?`)
    .get(sku.trim()) as unknown as { id: number } | undefined;
  return row !== undefined && row.id !== excludeId;
}

export type DashboardMetrics = {
  totalProducts: number;
  liveProducts: number;
  draftProducts: number;
  soldOutProducts: number;
  lowStockProducts: number;
  incompletePhotoProducts: number;
  totalInventoryValueMinor: number;
  totalCollections: number;
  totalCampaigns: number;
};

export function getDashboardMetrics(): DashboardMetrics {
  const database = db();
  const totalProducts = (database.prepare(`SELECT COUNT(*) as n FROM product`).get() as { n: number }).n;
  const liveProducts = (database.prepare(`SELECT COUNT(*) as n FROM product WHERE published = 1`).get() as { n: number }).n;
  const draftProducts = (database.prepare(`SELECT COUNT(*) as n FROM product WHERE published = 0`).get() as { n: number }).n;
  const soldOutProducts = (database.prepare(`SELECT COUNT(*) as n FROM product WHERE published = 1 AND inventory_quantity = 0`).get() as { n: number }).n;
  const lowStockProducts = (database.prepare(`SELECT COUNT(*) as n FROM product WHERE inventory_quantity > 0 AND inventory_quantity <= 2`).get() as { n: number }).n;
  const incompletePhotoProducts = (database.prepare(`SELECT COUNT(*) as n FROM product WHERE (SELECT COUNT(*) FROM product_image WHERE product_id = product.id) < 6`).get() as { n: number }).n;
  const totalInventoryValueMinor = (database.prepare(`SELECT COALESCE(SUM(price_minor * inventory_quantity), 0) as n FROM product`).get() as { n: number }).n;
  const totalCollections = (database.prepare(`SELECT COUNT(*) as n FROM collection`).get() as { n: number }).n;
  const totalCampaigns = (database.prepare(`SELECT COUNT(*) as n FROM campaign`).get() as { n: number }).n;

  return {
    totalProducts,
    liveProducts,
    draftProducts,
    soldOutProducts,
    lowStockProducts,
    incompletePhotoProducts,
    totalInventoryValueMinor,
    totalCollections,
    totalCampaigns,
  };
}

export type TaxonomyTermRow = {
  facet: string;
  slug: string;
  label: string;
  description: string | null;
  hex: string | null;
};

export function listTaxonomyTerms(): TaxonomyTermRow[] {
  return plain<TaxonomyTermRow>(
    db()
      .prepare(`SELECT facet, slug, label, description, hex FROM taxonomy_term ORDER BY facet, label`)
      .all(),
  );
}

export type CollectionRow = {
  handle: string;
  title: string;
  seo_intro: string;
  kind: string;
  facets_json: string | null;
  campaign_slug: string | null;
  position: number;
};

export function listCollectionsForAdmin(): CollectionRow[] {
  return plain<CollectionRow>(
    db()
      .prepare(`SELECT handle, title, seo_intro, kind, facets_json, campaign_slug, position FROM collection ORDER BY position`)
      .all(),
  );
}


