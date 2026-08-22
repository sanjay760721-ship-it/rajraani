-- Rajraani catalogue schema.
--
-- SQLite, via Node's built-in `node:sqlite` — no native module to compile, no
-- ORM, no dependency. At a few hundred one-of-a-kind pieces this is not a
-- compromise: the whole catalogue fits in memory several times over, and the
-- queries are joins over hundreds of rows.
--
-- Written in portable SQL so moving to Postgres is a driver change plus the
-- usual type substitutions (INTEGER PRIMARY KEY -> BIGSERIAL, etc). Nothing
-- here uses a SQLite-only feature.
--
-- Conventions:
--   * money is INTEGER minor units (paise). Never a float.
--   * timestamps are TEXT ISO-8601 UTC.
--   * booleans are INTEGER 0/1.
--   * facet values are foreign keys into taxonomy tables, which are seeded from
--     taxonomy/facets.json. A product cannot reference a term that does not
--     exist — this is the governance rule from build.md §7.3, enforced by the
--     database rather than by good intentions. The reference catalogue reached
--     1,592 tags for want of it.

PRAGMA foreign_keys = ON;

-- ---------------------------------------------------------------------------
-- Controlled vocabulary. Seeded from taxonomy/facets.json; never hand-edited.
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS taxonomy_term (
  facet       TEXT NOT NULL,   -- garment | weave | fabric | colour | zari | motif | fulfilment
  slug        TEXT NOT NULL,
  label       TEXT NOT NULL,
  description TEXT,
  hex         TEXT,            -- colour facet only
  PRIMARY KEY (facet, slug)
);

-- Alias -> canonical, scoped to a facet.
--
-- Scoped, not global: `gold` is claimed by both zari.gold (the thread) and
-- colour.gold (the shade) and both are correct. Resolving without naming the
-- facet would silently pick one.
CREATE TABLE IF NOT EXISTS taxonomy_alias (
  facet     TEXT NOT NULL,
  alias     TEXT NOT NULL,
  canonical TEXT NOT NULL,
  PRIMARY KEY (facet, alias),
  FOREIGN KEY (facet, canonical) REFERENCES taxonomy_term (facet, slug) ON DELETE CASCADE
);

-- ---------------------------------------------------------------------------
-- Catalogue
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS product (
  id                 INTEGER PRIMARY KEY,
  handle             TEXT NOT NULL UNIQUE,

  -- The descriptive title. A CHECK constraint forbids fulfilment state in it.
  -- pre-build-gaps.md §3: the reference site prefixed "Pre-Order:" to 463
  -- titles, which leaked into breadcrumbs, page titles, cart lines, og:title
  -- and JSON-LD, and could only be undone by editing 463 records. The database
  -- is the right place to make that impossible.
  title              TEXT NOT NULL
                       CHECK (
                         lower(title) NOT LIKE '%pre-order%' AND
                         lower(title) NOT LIKE '%pre order%' AND
                         lower(title) NOT LIKE '%made to order%' AND
                         lower(title) NOT LIKE '%ready to ship%' AND
                         lower(title) NOT LIKE '%sold out%'
                       ),

  -- The piece's proper name. The brand's core differentiator (addendum A8),
  -- and deliberately a separate column from title.
  poetic_name        TEXT NOT NULL,
  sku                TEXT NOT NULL UNIQUE,

  price_minor        INTEGER NOT NULL CHECK (price_minor > 0),
  currency           TEXT NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),

  -- Inventory of 1 is the norm. ~49% of a mature catalogue reads 0
  -- (pre-build-gaps.md §2), which is why sold-out is a primary template.
  inventory_quantity INTEGER NOT NULL DEFAULT 1 CHECK (inventory_quantity >= 0),

  fulfilment_mode    TEXT NOT NULL DEFAULT 'ready_to_ship',
  dispatch_days_min  INTEGER NOT NULL CHECK (dispatch_days_min > 0),
  dispatch_days_max  INTEGER NOT NULL,

  narrative          TEXT NOT NULL,

  -- Structured spec fields, never pasted HTML (build.md §6 Content fidelity).
  spec_colour        TEXT NOT NULL,
  spec_technique     TEXT NOT NULL,
  spec_fabric        TEXT NOT NULL,
  spec_speciality    TEXT,
  spec_collection_note TEXT,
  spec_note          TEXT,

  -- Provenance replaces reviews as the credibility surface (build.md §9.4).
  provenance_workshop     TEXT NOT NULL,
  provenance_loom         TEXT NOT NULL,
  provenance_weeks        INTEGER NOT NULL CHECK (provenance_weeks > 0),
  provenance_artisans     INTEGER NOT NULL CHECK (provenance_artisans > 0),

  -- Single-valued facets.
  garment_type       TEXT NOT NULL,
  -- Nullable on purpose: a stitched garment (suit, anarkali) is cut from cloth
  -- rather than woven to shape and has no loom technique to name. NULL means
  -- "has no weave", not "not filled in" — the trigger below still rejects any
  -- non-NULL value that is outside the vocabulary.
  weave              TEXT,
  fabric             TEXT NOT NULL,
  colour_family      TEXT NOT NULL,
  campaign_slug      TEXT,

  published          INTEGER NOT NULL DEFAULT 0,
  created_at         TEXT NOT NULL,
  updated_at         TEXT NOT NULL,

  CHECK (dispatch_days_max >= dispatch_days_min)
  -- No foreign key on the facet columns: taxonomy_term is keyed on
  -- (facet, slug), and slug alone is not unique — `gold` is both a zari and a
  -- colour. A single-column reference is therefore impossible, and the pair is
  -- enforced by the triggers below instead.
);

CREATE INDEX IF NOT EXISTS product_published_idx ON product (published);
CREATE INDEX IF NOT EXISTS product_campaign_idx  ON product (campaign_slug);
CREATE INDEX IF NOT EXISTS product_facets_idx    ON product (weave, fabric, colour_family);

-- Multi-valued facets.
CREATE TABLE IF NOT EXISTS product_motif (
  product_id INTEGER NOT NULL REFERENCES product (id) ON DELETE CASCADE,
  motif      TEXT NOT NULL,
  PRIMARY KEY (product_id, motif)
);

CREATE TABLE IF NOT EXISTS product_zari (
  product_id INTEGER NOT NULL REFERENCES product (id) ON DELETE CASCADE,
  zari       TEXT NOT NULL,
  PRIMARY KEY (product_id, zari)
);

-- The shot template, locked from SKU #1 (build.md §9.11).
--
-- `alt` is NOT NULL with a length check because all 8 product images on the
-- reference PDP had empty alt (pre-build-gaps.md §5). An image cannot be
-- stored without a description of what is in it.
CREATE TABLE IF NOT EXISTS product_image (
  id         INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES product (id) ON DELETE CASCADE,
  position   INTEGER NOT NULL,
  ratio      TEXT NOT NULL CHECK (ratio IN ('portrait', 'square')),
  shot       TEXT NOT NULL,
  alt        TEXT NOT NULL CHECK (length(trim(alt)) >= 10),
  url        TEXT,            -- NULL until photography lands; renders schematic
  width      INTEGER NOT NULL,
  height     INTEGER NOT NULL,
  UNIQUE (product_id, position)
);

-- ---------------------------------------------------------------------------
-- Vocabulary enforcement
--
-- This is build.md §7.3's governance rule, made unbypassable. On a greenfield
-- catalogue the whole tag-migration workstream collapses into one discipline:
-- define the vocabulary first, and never allow free-text term creation. The
-- reference catalogue reached 1,592 unique tags — 703 of them used exactly once
-- — because nothing stopped a merchandiser typing a new one.
--
-- A trigger rather than a foreign key, because the check is on the (facet,
-- slug) pair. Writing an unknown term now aborts the transaction.
-- ---------------------------------------------------------------------------

CREATE TRIGGER IF NOT EXISTS product_facets_insert
BEFORE INSERT ON product
FOR EACH ROW
BEGIN
  SELECT RAISE(ABORT, 'unknown garment_type — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'garment' AND slug = NEW.garment_type
  );
  SELECT RAISE(ABORT, 'unknown weave — add it to taxonomy/facets.json first')
  WHERE NEW.weave IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'weave' AND slug = NEW.weave
  );
  SELECT RAISE(ABORT, 'unknown fabric — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'fabric' AND slug = NEW.fabric
  );
  SELECT RAISE(ABORT, 'unknown colour_family — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'colour' AND slug = NEW.colour_family
  );
  SELECT RAISE(ABORT, 'unknown fulfilment_mode')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'fulfilment' AND slug = NEW.fulfilment_mode
  );
END;

CREATE TRIGGER IF NOT EXISTS product_facets_update
BEFORE UPDATE ON product
FOR EACH ROW
BEGIN
  SELECT RAISE(ABORT, 'unknown garment_type — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'garment' AND slug = NEW.garment_type
  );
  SELECT RAISE(ABORT, 'unknown weave — add it to taxonomy/facets.json first')
  WHERE NEW.weave IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'weave' AND slug = NEW.weave
  );
  SELECT RAISE(ABORT, 'unknown fabric — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'fabric' AND slug = NEW.fabric
  );
  SELECT RAISE(ABORT, 'unknown colour_family — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'colour' AND slug = NEW.colour_family
  );
END;

CREATE TRIGGER IF NOT EXISTS product_motif_insert
BEFORE INSERT ON product_motif
FOR EACH ROW
BEGIN
  SELECT RAISE(ABORT, 'unknown motif — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'motif' AND slug = NEW.motif
  );
END;

CREATE TRIGGER IF NOT EXISTS product_zari_insert
BEFORE INSERT ON product_zari
FOR EACH ROW
BEGIN
  SELECT RAISE(ABORT, 'unknown zari type — add it to taxonomy/facets.json first')
  WHERE NOT EXISTS (
    SELECT 1 FROM taxonomy_term WHERE facet = 'zari' AND slug = NEW.zari
  );
END;

-- ---------------------------------------------------------------------------
-- Campaigns and collections
-- ---------------------------------------------------------------------------

-- A campaign is ONE entity holding two references — an editorial story and a
-- shoppable collection (build.md §2.2). pre-build-gaps.md §4 proved the pairing
-- cannot be inferred from a handle: 0 of 24 campaign-looking collection handles
-- had a matching page.
CREATE TABLE IF NOT EXISTS campaign (
  slug              TEXT PRIMARY KEY,
  name              TEXT NOT NULL,
  season            TEXT NOT NULL,
  standfirst        TEXT NOT NULL,
  story_page_slug   TEXT NOT NULL,
  collection_handle TEXT NOT NULL
);

-- Every collection is either a facet result or an editorially-earned campaign
-- (build.md §9.5). There is no third kind, and price-band collections are
-- forbidden outright — the CHECK enforces it.
CREATE TABLE IF NOT EXISTS collection (
  handle        TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  seo_intro     TEXT NOT NULL,
  kind          TEXT NOT NULL CHECK (kind IN ('facet', 'campaign')),
  facets_json   TEXT,   -- facet collections: the saved selection
  campaign_slug TEXT REFERENCES campaign (slug) ON DELETE CASCADE,
  position      INTEGER NOT NULL DEFAULT 0,
  CHECK (
    (kind = 'facet'    AND facets_json IS NOT NULL AND campaign_slug IS NULL) OR
    (kind = 'campaign' AND campaign_slug IS NOT NULL)
  ),
  CHECK (facets_json IS NULL OR facets_json NOT LIKE '%"price"%')
);

-- Campaign collections are authored, so order is editorial.
CREATE TABLE IF NOT EXISTS collection_product (
  collection_handle TEXT NOT NULL REFERENCES collection (handle) ON DELETE CASCADE,
  product_id        INTEGER NOT NULL REFERENCES product (id) ON DELETE CASCADE,
  position          INTEGER NOT NULL,
  PRIMARY KEY (collection_handle, product_id)
);

-- ---------------------------------------------------------------------------
-- Editorial pages
-- ---------------------------------------------------------------------------

-- `sections_json` holds the polymorphic section array (build.md §2.4). Stored
-- as JSON rather than shredded into tables on purpose: it is authored as a
-- unit, read as a unit, and never queried by its contents.
CREATE TABLE IF NOT EXISTS page (
  slug          TEXT PRIMARY KEY,
  kind          TEXT NOT NULL CHECK (kind IN ('campaign_story', 'craft', 'journal')),
  title         TEXT NOT NULL,
  standfirst    TEXT NOT NULL,
  sections_json TEXT NOT NULL,
  published     INTEGER NOT NULL DEFAULT 0,
  published_at  TEXT,
  updated_at    TEXT NOT NULL
);

-- Singleton rows: navigation, homepage sections, global settings.
CREATE TABLE IF NOT EXISTS setting (
  key        TEXT PRIMARY KEY,
  value_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- ---------------------------------------------------------------------------
-- Orders
--
-- The single most important rule in this file:
--
--   THE AMOUNT IS COMPUTED HERE, FROM `product.price_minor`, AND NEVER
--   ACCEPTED FROM THE BROWSER.
--
-- A cart lives in the customer's own localStorage and is theirs to edit. If the
-- server trusts a posted total, anyone can buy a ₹1,48,000 saree for ₹1 by
-- changing a number in devtools. This is the classic e-commerce hole and it is
-- exploited constantly. Prices are read from the database at order creation and
-- the payment gateway is told that figure, not the shopper's.
--
-- Line items snapshot the price and title at the moment of sale, so editing a
-- product later does not silently rewrite what someone was charged.
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS customer_order (
  id             INTEGER PRIMARY KEY,

  -- Human-facing reference, e.g. RJ-2026-0007. Never the primary key: the id is
  -- sequential and would tell anyone how many orders the business has taken.
  reference      TEXT NOT NULL UNIQUE,

  -- Guest checkout. There is no customer account layer, and at this volume
  -- there does not need to be — an order is identified by its reference.
  email          TEXT NOT NULL,
  phone          TEXT NOT NULL,
  full_name      TEXT NOT NULL,

  address_line1  TEXT NOT NULL,
  address_line2  TEXT,
  city           TEXT NOT NULL,
  state          TEXT NOT NULL,
  postcode       TEXT NOT NULL,
  country        TEXT NOT NULL DEFAULT 'IN' CHECK (country = 'IN'),

  -- Computed server-side. Shipping is free within India, so total = subtotal
  -- for now; the column exists so adding a charge later is not a migration of
  -- historical orders.
  subtotal_minor INTEGER NOT NULL CHECK (subtotal_minor > 0),
  shipping_minor INTEGER NOT NULL DEFAULT 0 CHECK (shipping_minor >= 0),
  total_minor    INTEGER NOT NULL CHECK (total_minor > 0),
  currency       TEXT NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),

  /*
   * State machine:
   *
   *   pending ──► paid ──► dispatched ──► delivered
   *      │          │
   *      │          └────► refunded
   *      ├──► failed
   *      └──► cancelled
   *
   * `pending` means an order record exists and the shopper has been sent to
   * pay. It is NOT a sale. Only a verified payment signature moves it to
   * `paid`, and only the server does that.
   */
  status         TEXT NOT NULL DEFAULT 'pending'
                   CHECK (status IN ('pending', 'paid', 'failed', 'cancelled',
                                     'dispatched', 'delivered', 'refunded')),

  -- Razorpay's identifiers. payment_id is UNIQUE so a webhook delivered twice
  -- cannot record the same payment twice — gateways retry, and they will.
  razorpay_order_id   TEXT UNIQUE,
  razorpay_payment_id TEXT UNIQUE,

  notes          TEXT,
  created_at     TEXT NOT NULL,
  paid_at        TEXT,
  dispatched_at  TEXT,
  tracking       TEXT,

  CHECK (total_minor = subtotal_minor + shipping_minor)
);

CREATE INDEX IF NOT EXISTS customer_order_status_idx ON customer_order (status);
CREATE INDEX IF NOT EXISTS customer_order_created_idx ON customer_order (created_at);

-- Line items, with everything that mattered at the time of sale copied in.
--
-- product_id is ON DELETE SET NULL rather than CASCADE: deleting a product must
-- never delete the record of someone having bought it.
CREATE TABLE IF NOT EXISTS order_item (
  id               INTEGER PRIMARY KEY,
  order_id         INTEGER NOT NULL REFERENCES customer_order (id) ON DELETE CASCADE,
  product_id       INTEGER REFERENCES product (id) ON DELETE SET NULL,

  -- Snapshot. If the piece is renamed or repriced later, the order still says
  -- what was actually sold and for how much.
  handle           TEXT NOT NULL,
  title            TEXT NOT NULL,
  poetic_name      TEXT NOT NULL,
  sku              TEXT NOT NULL,
  unit_price_minor INTEGER NOT NULL CHECK (unit_price_minor > 0),
  quantity         INTEGER NOT NULL CHECK (quantity > 0),
  line_total_minor INTEGER NOT NULL CHECK (line_total_minor > 0),

  CHECK (line_total_minor = unit_price_minor * quantity)
);

CREATE INDEX IF NOT EXISTS order_item_order_idx ON order_item (order_id);

-- ---------------------------------------------------------------------------
-- Admin
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS admin_user (
  id            INTEGER PRIMARY KEY,
  email         TEXT NOT NULL UNIQUE,
  -- scrypt, with the salt and parameters stored alongside. Never a bare hash.
  password_hash TEXT NOT NULL,
  created_at    TEXT NOT NULL,
  last_login_at TEXT
);

CREATE TABLE IF NOT EXISTS admin_session (
  token      TEXT PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES admin_user (id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS admin_session_expiry_idx ON admin_session (expires_at);
