import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import { before, describe, it } from "node:test";

/**
 * What the database refuses to store.
 *
 * Every constraint here exists because the reference catalogue demonstrates
 * what happens without it. These are not style preferences — each one is a
 * measured failure that cost that business real money or real SEO, and the
 * cheapest place to prevent them is the layer that cannot be bypassed by an
 * admin form, an import script, or a future developer in a hurry.
 *
 * Runs against a fresh in-memory database, so it never touches data/.
 */

const schema = readFileSync(
  fileURLToPath(new URL("./schema.sql", import.meta.url)),
  "utf8",
);

let db: DatabaseSync;

const COLUMNS = [
  "handle", "title", "poetic_name", "sku", "price_minor", "currency",
  "inventory_quantity", "fulfilment_mode", "dispatch_days_min", "dispatch_days_max",
  "narrative", "spec_colour", "spec_technique", "spec_fabric",
  "provenance_workshop", "provenance_loom", "provenance_weeks", "provenance_artisans",
  "garment_type", "weave", "fabric", "colour_family",
  "published", "created_at", "updated_at",
];

type ProductOverrides = Partial<Record<string, string | number>>;

function insertProduct(overrides: ProductOverrides = {}) {
  const now = new Date().toISOString();
  const values: Record<string, string | number> = {
    handle: `handle-${Math.random().toString(36).slice(2)}`,
    title: "A Valid Katan Silk Saree",
    poetic_name: "Probe",
    sku: `SKU${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    price_minor: 100_000,
    currency: "INR",
    inventory_quantity: 1,
    fulfilment_mode: "ready_to_ship",
    dispatch_days_min: 10,
    dispatch_days_max: 12,
    narrative: "A narrative.",
    spec_colour: "Red",
    spec_technique: "Kadhua",
    spec_fabric: "Katan silk",
    provenance_workshop: "A workshop",
    provenance_loom: "Pit loom",
    provenance_weeks: 8,
    provenance_artisans: 2,
    garment_type: "saree",
    weave: "kadhua",
    fabric: "katan-silk",
    colour_family: "red",
    published: 1,
    created_at: now,
    updated_at: now,
    ...overrides,
  };

  const sql =
    `INSERT INTO product (${COLUMNS.join(", ")}) ` +
    `VALUES (${COLUMNS.map(() => "?").join(", ")})`;

  return db.prepare(sql).run(...COLUMNS.map((column) => values[column]!));
}

before(() => {
  db = new DatabaseSync(":memory:");
  db.exec("PRAGMA foreign_keys = ON");
  db.exec(schema);

  // The minimum vocabulary the triggers check against.
  const term = db.prepare(
    "INSERT INTO taxonomy_term (facet, slug, label) VALUES (?, ?, ?)",
  );
  const vocabulary: [facet: string, slug: string][] = [
    ["garment", "saree"],
    ["weave", "kadhua"],
    ["fabric", "katan-silk"],
    ["colour", "red"],
    // `gold` deliberately appears under two facets — see the scoping test.
    ["colour", "gold"],
    ["zari", "gold"],
    ["motif", "booti"],
    ["fulfilment", "ready_to_ship"],
  ];
  for (const [facet, slug] of vocabulary) {
    term.run(facet, slug, slug);
  }
});

describe("the controlled vocabulary is enforced by the database", () => {
  // build.md §7.3. The reference catalogue reached 1,592 unique tags, 703 used
  // exactly once, because nothing stopped a merchandiser inventing one.
  it("accepts a product whose facets all exist", () => {
    assert.doesNotThrow(() => insertProduct());
  });

  it("rejects an unknown weave — including a known misspelling", () => {
    // `kadwa` is a real alias, but an alias is not a canonical value. It
    // resolves at search time; it is never stored.
    assert.throws(() => insertProduct({ weave: "kadwa" }), /unknown weave/);
  });

  it("rejects an invented fabric", () => {
    assert.throws(() => insertProduct({ fabric: "bamboo-silk" }), /unknown fabric/);
  });

  it("rejects an unknown colour family", () => {
    assert.throws(
      () => insertProduct({ colour_family: "chartreuse" }),
      /unknown colour_family/,
    );
  });

  it("rejects an unknown motif", () => {
    insertProduct({ handle: "motif-host", sku: "SKUMOTIF" });
    const id = (
      db.prepare("SELECT id FROM product WHERE handle = 'motif-host'").get() as {
        id: number;
      }
    ).id;

    assert.doesNotThrow(() =>
      db.prepare("INSERT INTO product_motif VALUES (?, ?)").run(id, "booti"),
    );
    assert.throws(
      () => db.prepare("INSERT INTO product_motif VALUES (?, ?)").run(id, "squiggle"),
      /unknown motif/,
    );
  });

  it("keeps alias resolution facet-scoped", () => {
    // `gold` is a colour AND a zari type, and both are correct. A global
    // namespace would have to pick one.
    const rows = db
      .prepare("SELECT facet FROM taxonomy_term WHERE slug = 'gold' ORDER BY facet")
      .all() as { facet: string }[];
    assert.deepEqual(
      rows.map((row) => row.facet),
      ["colour", "zari"],
    );
  });
});

describe("fulfilment state cannot reach a product title", () => {
  // pre-build-gaps.md §3: 463 titles on the reference site carried a
  // "Pre-Order:" prefix, which leaked into breadcrumbs, page titles, cart
  // lines, og:title and JSON-LD — undoable only by editing 463 records.
  for (const title of [
    "Pre-Order: A Red Saree",
    "PRE ORDER Red Saree",
    "A Red Saree (Made to Order)",
    "Ready to Ship — Red Saree",
    "Red Saree — Sold Out",
  ]) {
    it(`rejects ${JSON.stringify(title)}`, () => {
      assert.throws(() => insertProduct({ title }), /CHECK constraint failed/);
    });
  }

  it("still accepts a title that merely describes the cloth", () => {
    assert.doesNotThrow(() =>
      insertProduct({ title: "Red Pure Katan Silk Kadhua Banarasi Handloom Saree" }),
    );
  });
});

describe("images cannot ship without a description", () => {
  // All 8 product images on the reference PDP had empty alt text.
  it("rejects an empty or thin alt", () => {
    insertProduct({ handle: "image-host", sku: "SKUIMAGE" });
    const id = (
      db.prepare("SELECT id FROM product WHERE handle = 'image-host'").get() as {
        id: number;
      }
    ).id;

    const insert = db.prepare(
      "INSERT INTO product_image (product_id, position, ratio, shot, alt, width, height) VALUES (?,?,?,?,?,?,?)",
    );

    assert.throws(
      () => insert.run(id, 0, "portrait", "on_model_full", "", 3000, 4500),
      /CHECK constraint failed/,
    );
    assert.throws(
      () => insert.run(id, 1, "portrait", "on_model_full", "   red   ", 3000, 4500),
      /CHECK constraint failed/,
    );
    assert.doesNotThrow(() =>
      insert.run(
        id,
        2,
        "portrait",
        "on_model_full",
        "Full-length view of the draped red saree in kadhua weave",
        3000,
        4500,
      ),
    );
  });

  it("allows only the two capture ratios", () => {
    const id = (
      db.prepare("SELECT id FROM product WHERE handle = 'image-host'").get() as {
        id: number;
      }
    ).id;
    assert.throws(
      () =>
        db
          .prepare(
            "INSERT INTO product_image (product_id, position, ratio, shot, alt, width, height) VALUES (?,?,?,?,?,?,?)",
          )
          .run(id, 9, "16:9", "on_model_full", "A wide crop of the saree", 3000, 1688),
      /CHECK constraint failed/,
    );
  });
});

describe("collections stay disciplined", () => {
  // build.md §9.5: every collection is a facet result or an editorially-earned
  // campaign. The reference site ran 250+ collections against ~3,000 products.
  it("refuses a price-band collection outright", () => {
    assert.throws(
      () =>
        db
          .prepare(
            "INSERT INTO collection (handle, title, seo_intro, kind, facets_json) VALUES (?,?,?,?,?)",
          )
          .run("under-50000", "Under 50,000", "A long enough intro.", "facet", '{"price":["under-50000"]}'),
      /CHECK constraint failed/,
    );
  });

  it("refuses a facet collection with no facets, or a campaign with no campaign", () => {
    assert.throws(
      () =>
        db
          .prepare(
            "INSERT INTO collection (handle, title, seo_intro, kind) VALUES (?,?,?,?)",
          )
          .run("empty", "Empty", "Intro.", "facet"),
      /CHECK constraint failed/,
    );
    assert.throws(
      () =>
        db
          .prepare(
            "INSERT INTO collection (handle, title, seo_intro, kind) VALUES (?,?,?,?)",
          )
          .run("orphan", "Orphan", "Intro.", "campaign"),
      /CHECK constraint failed/,
    );
  });
});

describe("basic sanity on money and stock", () => {
  it("refuses a non-positive price", () => {
    assert.throws(() => insertProduct({ price_minor: 0 }), /CHECK constraint failed/);
  });

  it("refuses a currency other than INR while the store is India-only", () => {
    assert.throws(() => insertProduct({ currency: "USD" }), /CHECK constraint failed/);
  });

  it("refuses negative stock, but allows zero — half the catalogue reads zero", () => {
    assert.throws(
      () => insertProduct({ inventory_quantity: -1 }),
      /CHECK constraint failed/,
    );
    assert.doesNotThrow(() => insertProduct({ inventory_quantity: 0 }));
  });

  it("refuses a dispatch window that runs backwards", () => {
    assert.throws(
      () => insertProduct({ dispatch_days_min: 14, dispatch_days_max: 10 }),
      /CHECK constraint failed/,
    );
  });
});
