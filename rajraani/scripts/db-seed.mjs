#!/usr/bin/env node
/**
 * Create the database and seed it.
 *
 * Two sources, in order:
 *   1. taxonomy/facets.json  -> the controlled vocabulary
 *   2. src/lib/data/fixtures.ts -> the twelve seed pieces
 *
 * Order matters: the triggers reject a product whose facet values are not in
 * the vocabulary, so the vocabulary has to land first. That is the point of
 * them.
 *
 * Idempotent — safe to re-run. Pass --fresh to delete the database first.
 *
 *   node scripts/db-seed.mjs [--fresh]
 */

import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dbPath = process.env.DATABASE_PATH ?? path.join(root, "data", "rajraani.db");
const fresh = process.argv.includes("--fresh");

/**
 * Admin accounts survive a --fresh reset.
 *
 * They did not until 22 August 2026, and the failure was quiet in the worst
 * way: `--fresh` deletes the database file, this script seeds vocabulary,
 * products, collections and campaigns, and `admin_user` is not among them. So a
 * reset run to reload the catalogue silently destroyed every admin login, and
 * the only symptom was a sign-in form that rejected a correct password.
 *
 * Resetting the CATALOGUE should not revoke CREDENTIALS. They are unrelated
 * concerns that happened to share a file. The rows are read out before the file
 * goes and written back after the schema is recreated — hashes and all, so no
 * password is known to this script at any point.
 *
 * Sessions are deliberately NOT preserved. A database rebuild is exactly when
 * you want everyone holding a cookie to sign in again.
 */
let preservedAdmins = [];

if (fresh) {
  if (existsSync(dbPath)) {
    try {
      const old = new DatabaseSync(dbPath);
      preservedAdmins = old
        .prepare("SELECT email, password_hash, created_at, last_login_at FROM admin_user")
        .all();
      old.close();
    } catch {
      // A corrupt or pre-schema database has nothing worth rescuing. Carry on
      // and rebuild rather than refusing to reset.
      preservedAdmins = [];
    }
  }

  for (const suffix of ["", "-wal", "-shm"]) {
    rmSync(`${dbPath}${suffix}`, { force: true });
  }
  console.log("Removed the existing database.");
}

mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new DatabaseSync(dbPath);
db.exec("PRAGMA foreign_keys = ON");
db.exec(readFileSync(path.join(root, "src", "lib", "db", "schema.sql"), "utf8"));

if (preservedAdmins.length > 0) {
  const restore = db.prepare(
    `INSERT OR IGNORE INTO admin_user (email, password_hash, created_at, last_login_at)
     VALUES (?, ?, ?, ?)`,
  );
  for (const admin of preservedAdmins) {
    restore.run(
      admin.email,
      admin.password_hash,
      admin.created_at,
      admin.last_login_at ?? null,
    );
  }
  console.log(
    `Admin accounts preserved: ${preservedAdmins.length}. Sessions were not — sign in again.`,
  );
}

const now = new Date().toISOString();

// ---------------------------------------------------------------------------
// 1. Vocabulary
// ---------------------------------------------------------------------------

const facets = JSON.parse(
  readFileSync(path.join(root, "taxonomy", "facets.json"), "utf8"),
);

const insertTerm = db.prepare(
  `INSERT INTO taxonomy_term (facet, slug, label, description, hex)
   VALUES (?, ?, ?, ?, ?)
   ON CONFLICT (facet, slug) DO UPDATE SET
     label = excluded.label, description = excluded.description, hex = excluded.hex`,
);
const insertAlias = db.prepare(
  `INSERT INTO taxonomy_alias (facet, alias, canonical) VALUES (?, ?, ?)
   ON CONFLICT (facet, alias) DO UPDATE SET canonical = excluded.canonical`,
);

let termCount = 0;
let aliasCount = 0;

db.exec("BEGIN");
for (const [facet, group] of Object.entries(facets)) {
  if (facet.startsWith("$") || !group.values) continue;
  for (const value of group.values) {
    insertTerm.run(
      facet,
      value.canonical,
      value.label,
      value.definition ?? null,
      value.hex ?? null,
    );
    termCount += 1;
    for (const alias of value.aliases ?? []) {
      insertAlias.run(facet, alias.toLowerCase(), value.canonical);
      aliasCount += 1;
    }
  }
}
db.exec("COMMIT");
console.log(`Vocabulary: ${termCount} terms, ${aliasCount} aliases.`);

// ---------------------------------------------------------------------------
// 2. Catalogue
// ---------------------------------------------------------------------------

// pathToFileURL, not a bare path: on Windows an absolute path starts with a
// drive letter, which the ESM loader reads as an unsupported URL scheme.
const { PRODUCTS, COLLECTIONS, CAMPAIGNS } = await import(
  pathToFileURL(path.join(root, "src", "lib", "data", "fixtures.ts")).href
);

const insertCampaign = db.prepare(
  `INSERT INTO campaign (slug, name, season, standfirst, story_page_slug, collection_handle)
   VALUES (?, ?, ?, ?, ?, ?)
   ON CONFLICT (slug) DO UPDATE SET
     name = excluded.name, season = excluded.season, standfirst = excluded.standfirst,
     story_page_slug = excluded.story_page_slug,
     collection_handle = excluded.collection_handle`,
);

const insertProduct = db.prepare(
  `INSERT INTO product (
     handle, title, poetic_name, sku, price_minor, currency, inventory_quantity,
     fulfilment_mode, dispatch_days_min, dispatch_days_max, narrative,
     spec_colour, spec_technique, spec_fabric, spec_speciality,
     spec_collection_note, spec_note,
     provenance_workshop, provenance_loom, provenance_weeks, provenance_artisans,
     garment_type, weave, fabric, colour_family, campaign_slug,
     published, created_at, updated_at
   ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
   ON CONFLICT (handle) DO NOTHING`,
);

const insertImage = db.prepare(
  `INSERT INTO product_image (product_id, position, ratio, shot, alt, url, width, height)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)
   ON CONFLICT (product_id, position) DO NOTHING`,
);
const insertMotif = db.prepare(
  `INSERT INTO product_motif (product_id, motif) VALUES (?, ?)
   ON CONFLICT DO NOTHING`,
);
const insertZari = db.prepare(
  `INSERT INTO product_zari (product_id, zari) VALUES (?, ?)
   ON CONFLICT DO NOTHING`,
);
const insertCollection = db.prepare(
  `INSERT INTO collection (handle, title, seo_intro, kind, facets_json, campaign_slug, position)
   VALUES (?, ?, ?, ?, ?, ?, ?)
   ON CONFLICT (handle) DO UPDATE SET
     title = excluded.title, seo_intro = excluded.seo_intro`,
);
const insertCollectionProduct = db.prepare(
  `INSERT INTO collection_product (collection_handle, product_id, position)
   VALUES (?, ?, ?)
   ON CONFLICT DO NOTHING`,
);
const findProduct = db.prepare(`SELECT id FROM product WHERE handle = ?`);

db.exec("BEGIN");
try {
  for (const campaign of CAMPAIGNS) {
    insertCampaign.run(
      campaign.slug,
      campaign.name,
      campaign.season,
      campaign.standfirst,
      campaign.storyPageSlug,
      campaign.collectionHandle,
    );
  }

  for (const product of PRODUCTS) {
    insertProduct.run(
      product.handle,
      product.title,
      product.poeticName,
      product.sku,
      product.price.minorUnits,
      product.price.currency,
      product.inventoryQuantity,
      product.fulfilmentMode,
      product.dispatchLeadDays[0],
      product.dispatchLeadDays[1],
      product.narrative,
      product.spec.colour,
      product.spec.technique,
      product.spec.fabric,
      product.spec.speciality ?? null,
      product.spec.collectionNote ?? null,
      product.spec.note ?? null,
      product.provenance.workshop,
      product.provenance.loom,
      product.provenance.weaveTimeWeeks,
      product.provenance.artisanCount,
      product.garmentType,
      // Absent for stitched garments — node:sqlite will not bind `undefined`,
      // and the column is nullable precisely so this can be NULL.
      product.weave ?? null,
      product.fabric,
      product.colourFamily,
      product.campaign ?? null,
      1,
      now,
      now,
    );

    const row = findProduct.get(product.handle);
    const id = row.id;

    product.images.forEach((image, index) => {
      insertImage.run(
        id,
        index,
        image.ratio,
        image.shot,
        image.alt,
        image.src ?? null,
        image.width,
        image.height,
      );
    });
    for (const motif of product.motifs) insertMotif.run(id, motif);
    for (const zari of product.zariTypes) insertZari.run(id, zari);
  }

  for (const [index, collection] of COLLECTIONS.entries()) {
    insertCollection.run(
      collection.handle,
      collection.title,
      collection.seoIntro,
      collection.kind,
      collection.kind === "facet" ? JSON.stringify(collection.facets) : null,
      collection.kind === "campaign" ? collection.campaignSlug : null,
      index,
    );
    // Campaigns AND edits carry an authored product list. Only facets do not.
    // This read `=== "campaign"` until 12 Sep 2026, which meant the four `edit`
    // collections seeded with a row and no products and rendered empty grids.
    if (collection.kind !== "facet") {
      collection.productHandles.forEach((handle, position) => {
        const row = findProduct.get(handle);
        if (row) insertCollectionProduct.run(collection.handle, row.id, position);
      });
    }
  }

  db.exec("COMMIT");
} catch (error) {
  db.exec("ROLLBACK");
  console.error("\nSeed failed, nothing was written:\n ", error.message);
  process.exit(1);
}

const count = (sql) => db.prepare(sql).get().n;
console.log(
  `Catalogue: ${count("SELECT COUNT(*) n FROM product")} products, ` +
    `${count("SELECT COUNT(*) n FROM product_image")} frames, ` +
    `${count("SELECT COUNT(*) n FROM collection")} collections, ` +
    `${count("SELECT COUNT(*) n FROM campaign")} campaigns.`,
);
console.log(`\nDatabase ready at ${path.relative(root, dbPath)}`);
db.close();
