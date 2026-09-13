// Relative, like every sibling in this directory: the `@/` alias is a bundler
// concern and `node --test` does not resolve it, so an aliased import here is
// what kept this module untestable.

/**
 * Site navigation.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ARCHITECTURE inherited from the category, CONTENT ours.
 *
 * Six panels, split three either side of the centred wordmark, each panel a set
 * of link columns plus image tiles. That shape is a solved merchandising
 * problem for a catalogue this deep and build.md's scope note is explicit that
 * structure is what we copy.
 *
 * What is NOT inherited: collection and campaign names. Those are a house's
 * identity, and the reference site's were sitting in this file until 22 Aug
 * 2026 — see HANDOFF §2.49. The names below are ours.
 *
 * WEAVE AND FABRIC NAMES ARE NEITHER. `kadhua`, `katan silk`, `tanchoi` and the
 * rest are the craft's own technical vocabulary, documented in
 * taxonomy/facets.json, and they belong to Banaras rather than to any shop in
 * it. They are used here as facet values, which is why those links carry query
 * strings: they resolve to a real filtered PLP rather than to a hand-built
 * landing page that has to be maintained separately.
 *
 * ── Two destinations, and only two (12 Sep 2026) ────────────────────────────
 *
 * Every entry in this tree lands on one of exactly two kinds of page:
 *
 *   /collections/<handle>   shoppable — a facet result or an authored edit
 *   /pages/<slug>           editorial — a campaign story or a craft piece
 *
 * A campaign has one of each, cross-linked, and they are deliberately not
 * merged (build.md §3). Nothing in the menus points anywhere else: there is no
 * `/blogs` route in this build, so the Journal column that used to sit under
 * Stories advertised five pages that did not exist. `navigation.test.ts` now
 * holds both halves of that rule — collection handles must exist, and page
 * slugs must exist.
 *
 * The tree was cut back to this shape on 12 Sep 2026. It had been a map of a
 * catalogue several times the size of ours: ten campaigns where we have run
 * four, twelve styling edits with nothing to put in them, four garment
 * categories we do not make. A menu that advertises more than the shop holds
 * reads as a shop that has sold out.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type NavLink = {
  label: string;
  href: string;
  emphasis?: boolean;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavTile = {
  label: string;
  href: string;
  src?: string;
  tone: string;
};

export type NavPanel = {
  id: string;
  label: string;
  href: string;
  /** Flat list used by the mobile drawer, which has no room for columns. */
  links: NavLink[];
  columns?: NavColumn[];
  tiles?: NavTile[];
};

/** Facet-filtered PLP. One place that builds these, so the shape stays right. */
const facet = (group: string, value: string) =>
  `/collections/sarees?${group}=${value}`;

export const NAVIGATION: readonly NavPanel[] = [
  /* ─── 1 · Shop ─────────────────────────────────────────────────────────── */
  {
    id: "shop",
    label: "Shop",
    href: "/collections/sarees",
    links: [
      { label: "Sarees", href: "/collections/sarees" },
      { label: "Suits", href: "/collections/suits" },
      { label: "Fresh Off the Loom", href: "/collections/fresh-off-the-loom" },
      { label: "Ready to Ship", href: "/collections/sarees?fulfilment=ready_to_ship" },
      { label: "Gifts", href: "/collections/gifts" },
    ],
    columns: [
      {
        heading: "New Arrivals",
        links: [
          { label: "Fresh Off the Loom", href: "/collections/fresh-off-the-loom", emphasis: true },
          { label: "Back in Stock", href: "/collections/back-in-stock" },
          { label: "Ready to Ship", href: "/collections/sarees?fulfilment=ready_to_ship" },
          { label: "Made to Order", href: "/collections/sarees?fulfilment=made_to_order" },
          { label: "Pre-Order", href: "/collections/sarees?fulfilment=pre_order" },
          { label: "Gifts", href: "/collections/gifts" },
        ],
      },
      {
        /*
         * Two entries, and that is the whole catalogue.
         *
         * We weave sarees and we tailor suits. The column listed nine garment
         * types until 12 Sep 2026 — dupattas, lehengas, stoles, blouse pieces,
         * yardage, menswear, womenswear — and seven of them had nothing
         * catalogued behind them.
         */
        heading: "Clothing",
        links: [
          { label: "Sarees", href: "/collections/sarees" },
          { label: "Suits", href: "/collections/suits" },
        ],
      },
      {
        /*
         * Each of these now opens on a page of its own rather than dropping
         * straight into a grid, which is how the reference treats them. The
         * page carries the argument and a button through to the listing.
         *
         * Handwoven Fabrics removed 13 Sep 2026: it pointed at
         * /collections/yardage, and there is no yardage in the catalogue.
         */
        heading: "Featured",
        links: [
          { label: "Bridal", href: "/pages/bridal" },
          { label: "Gifting", href: "/pages/gifts" },
          { label: "Zarkashi", href: "/pages/zarkashi" },
        ],
      },
    ],
    tiles: [
      { label: "Bridal", href: "/collections/bridal", tone: "pink", src: "/homepage/four-tiles/tile-01-bridal.webp" },
      { label: "Gifting", href: "/collections/gifts", tone: "gold", src: "/homepage/four-tiles/tile-02-gifting.webp" },
    ],
  },

  /* ─── 2 · Collections ──────────────────────────────────────────────────── */
  {
    id: "collections",
    label: "Collections",
    href: "/collections/kadhua",
    links: [
      { label: "Kadhua", href: "/collections/kadhua" },
      { label: "Katan Silk", href: "/collections/katan-silk" },
    ],
    columns: [
      {
        heading: "Weaves & Patterns",
        links: [
          { label: "Kadhua", href: "/collections/kadhua", emphasis: true },
          { label: "Kadiyal", href: facet("weave", "kadiyal") },
          { label: "Jangla", href: facet("weave", "jangla") },
          { label: "Jamawar", href: facet("weave", "jamawar") },
          { label: "Tanchoi", href: facet("weave", "tanchoi") },
          { label: "Cutwork", href: facet("weave", "cutwork") },
          { label: "Jamdani", href: facet("weave", "jamdani") },
          { label: "Rangkat", href: facet("weave", "rangkat") },
          { label: "Bootidar", href: facet("weave", "bootidar") },
          { label: "Meenakari", href: facet("motif", "meenakari") },
          { label: "Shikargah", href: facet("motif", "shikargah") },
        ],
      },
      {
        heading: "Fabrics",
        links: [
          { label: "Katan Silk", href: "/collections/katan-silk", emphasis: true },
          { label: "Kora Organza", href: facet("fabric", "kora-organza") },
          { label: "Khaddi Georgette", href: facet("fabric", "khaddi-georgette") },
          { label: "Georgette", href: facet("fabric", "georgette") },
          { label: "Tissue Silk", href: facet("fabric", "tissue-silk") },
          { label: "Satin Silk", href: facet("fabric", "satin-silk") },
          { label: "Tussar Silk", href: facet("fabric", "tussar-silk") },
          { label: "Muslin Cotton", href: facet("fabric", "muslin-cotton") },
          { label: "Silk Wool", href: facet("fabric", "silk-wool") },
        ],
      },
    ],
    tiles: [
      { label: "On kadhua", href: "/pages/kadhua", tone: "maroon", src: "/homepage/gallery/tile-03.webp" },
      { label: "Katan Silk", href: "/collections/katan-silk", tone: "indigo", src: "/homepage/category/sarees.webp" },
    ],
  },

  /* ─── 3 · Campaigns ────────────────────────────────────────────────────── */
  {
    id: "campaigns",
    label: "Campaigns",
    href: "/collections/nadi",
    links: [
      { label: "Nadi", href: "/collections/nadi" },
      { label: "Antaraal", href: "/collections/antaraal" },
      { label: "Awadh", href: "/collections/awadh" },
      { label: "Kala", href: "/pages/kala" },
      { label: "Katha", href: "/pages/katha" },
    ],
    columns: [
      {
        /*
         * Three campaigns, each with a collection behind it. The column listed
         * ten until 12 Sep 2026 and eight of them had neither a collection nor
         * a story — the rule since is that nothing goes in here until both
         * halves exist.
         */
        heading: "Shop by Campaign",
        links: [
          { label: "Nadi", href: "/collections/nadi", emphasis: true },
          { label: "Antaraal", href: "/collections/antaraal" },
          { label: "Awadh", href: "/collections/awadh" },
        ],
      },
      {
        /*
         * The two story pages. These resolve to `/pages` — the essay is the
         * point — and each one carries its own button through to the pieces, so
         * a reader who wants the listing rather than the writing is one click
         * away rather than stuck.
         */
        heading: "Featured Campaign",
        links: [
          { label: "Kala", href: "/pages/kala", emphasis: true },
          { label: "Katha", href: "/pages/katha" },
        ],
      },
    ],
    tiles: [
      { label: "Nadi", href: "/pages/nadi", tone: "green", src: "/homepage/gallery/tile-01.webp" },
      { label: "Antaraal", href: "/pages/antaraal", tone: "purple", src: "/homepage/campaign/charbagh.webp" },
    ],
  },

  /* ─── 4 · Crafts ───────────────────────────────────────────────────────── */
  {
    id: "craft",
    label: "Crafts",
    href: "/pages/art-collectibles",
    links: [{ label: "Art & Collectibles", href: "/pages/art-collectibles" }],
    columns: [
      {
        heading: "Metal",
        links: [
          { label: "Art & Collectibles", href: "/pages/art-collectibles", emphasis: true },
        ],
      },
    ],
    tiles: [
      { label: "Art & Collectibles", href: "/pages/art-collectibles", tone: "gold", src: "/homepage/four-tiles/tile-04-art-collectibles.webp" },
      { label: "Raised from one sheet", href: "/pages/art-collectibles", tone: "black", src: "/homepage/hero/slide-05-art-collectibles.webp" },
    ],
  },

  /* ─── 5 · Stories ──────────────────────────────────────────────────────── */
  {
    id: "stories",
    label: "Stories",
    href: "/pages/kala",
    links: [
      { label: "Kala", href: "/pages/kala" },
      { label: "Katha", href: "/pages/katha" },
    ],
    columns: [
      {
        heading: "Spirit of Creation",
        links: [
          { label: "Kala", href: "/pages/kala", emphasis: true },
          { label: "Katha", href: "/pages/katha" },
        ],
      },
    ],
    tiles: [
      { label: "Kala", href: "/pages/kala", tone: "maroon", src: "/homepage/campaign/kala.webp" },
      { label: "Katha", href: "/pages/katha", tone: "indigo", src: "/homepage/category/suits-b.webp" },
    ],
  },

  /* ─── 6 · About Us ─────────────────────────────────────────────────────── */
  {
    id: "about",
    label: "About Us",
    href: "/pages/our-story",
    links: [
      { label: "Our story", href: "/pages/our-story" },
      { label: "Our Banaras store", href: "/pages/banaras-store" },
      { label: "FAQs", href: "/pages/faqs" },
      { label: "Contact us", href: "/pages/contact" },
    ],
    columns: [
      {
        heading: "About Us",
        links: [
          { label: "Our story", href: "/pages/our-story", emphasis: true },
          { label: "Our Banaras store", href: "/pages/banaras-store" },
          { label: "FAQs", href: "/pages/faqs" },
          { label: "Contact us", href: "/pages/contact" },
        ],
      },
    ],
    tiles: [
      { label: "Our Banaras store", href: "/pages/banaras-store", tone: "black", src: "/homepage/stores/varanasi.webp" },
      { label: "Our story", href: "/pages/our-story", tone: "green", src: "/homepage/gallery/tile-02.webp" },
    ],
  },
];

/**
 * Split either side of the centred wordmark.
 *
 * Three and three, matching the header layout: the panels a shopper reaches for
 * sit left, the ones they browse sit right.
 */
export const LEFT_NAVIGATION = NAVIGATION.slice(0, 3);
export const RIGHT_NAVIGATION = NAVIGATION.slice(3, 6);
