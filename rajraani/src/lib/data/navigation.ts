import { BRAND_NAME } from "@/lib/brand-name";

/**
 * Navigation.
 *
 * build.md §6 requires the mega menu be 100% CMS-driven, so changing it needs
 * zero deploys. This file is the shape that contract produces — in production
 * it comes from the Sanity `navigation` document (§2.3) and this becomes the
 * fallback. Addendum A2 found the reference site's menu differed between two
 * page loads, so menu content is genuinely dynamic data and must never be
 * treated as a compile-time constant.
 *
 * Every panel carries at least one image tile. Those are merchandised slots,
 * not decoration — each is an editorially chosen link (A2).
 *
 * Panel structure per design.md §5.3 Table 5.3:
 * 1. Shop — New Arrivals · Clothing · Featured | 1 tile
 * 2. Collections — Weaves & Patterns · Fabrics · How to Style | 1 tile
 * 3. Campaigns — Shop by Campaign · Featured Campaign | 2 tiles
 * 4. Craft — Handloom · Metal | 2 tiles
 * 5. Stories — Spirit of Creations · Stories | 2 tiles
 * 6. About Us — About Us | 2 tiles (Impact, Retail Stores)
 */

export type NavLink = {
  label: string;
  href: string;
  /** Merchandising emphasis. Intentional weighting, preserved from the CMS. */
  emphasis?: boolean;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavTile = {
  label: string;
  href: string;
  /** Optional image source for art-directed tiles. */
  src?: string;
  /** Fallback tone when no image is available. */
  tone: string;
};

export type NavPanel = {
  id: string;
  label: string;
  href: string;
  columns: NavColumn[];
  tiles: NavTile[];
};

export const NAVIGATION: readonly NavPanel[] = [
  {
    id: "shop",
    label: "Shop",
    href: "/collections/sarees",
    columns: [
      {
        heading: "New Arrivals",
        links: [
          { label: "Fresh off the loom", href: "/collections/sarees?sort=name-asc" },
          { label: "Freshly Tailored", href: "/collections/sarees?availability=freshly-tailored" },
          { label: "Gifts", href: "/collections/sarees?edit=gifts" },
          { label: "Bestsellers", href: "/collections/sarees?sort=popular", emphasis: true },
          { label: "Back in Stock", href: "/collections/sarees?availability=back-in-stock" },
          { label: "Pre Orders", href: "/collections/sarees?availability=pre-order" },
          { label: "Ready to Ship", href: "/collections/sarees?availability=ready-to-ship" },
        ],
      },
      {
        heading: "Clothing",
        links: [
          { label: "Sarees", href: "/collections/sarees" },
          { label: "Lehengas", href: "/collections/lehengas" },
          { label: "Dupattas", href: "/collections/dupattas" },
          { label: "Suits", href: "/collections/suits" },
          { label: "Blouses", href: "/collections/blouses" },
          { label: "Jackets", href: "/collections/jackets" },
          { label: "Tops & Shirts", href: "/collections/tops-shirts" },
          { label: "Pants & Co-Ords", href: "/collections/pants-co-ords" },
          { label: "Dresses", href: "/collections/dresses" },
          { label: "Scarves & Stoles", href: "/collections/scarves-stoles" },
          { label: "Accessories", href: "/collections/accessories" },
        ],
      },
      {
        heading: "Featured",
        links: [
          { label: "Shikargah Tales", href: "/collections/sarees?motif=shikargah" },
          { label: `${BRAND_NAME} Icons`, href: "/collections/icons" },
          { label: "Handwoven Fabrics", href: "/collections/fabrics" },
          { label: "Bridal", href: "/collections/bridal" },
          { label: "Zarkashi", href: "/collections/sarees?motif=zarkashi" },
          { label: "Antara", href: "/collections/antara" },
          { label: "Menswear", href: "/collections/menswear", emphasis: true },
        ],
      },
    ],
    tiles: [
      { label: "Nadi", href: "/collections/nadi", tone: "indigo", src: "/reference-only/tile-nadi.webp" },
    ],
  },
  {
    id: "collections",
    label: "Collections",
    href: "/collections/kadhua",
    columns: [
      {
        heading: "Weaves & Patterns",
        links: [
          { label: "Kadhua", href: "/collections/kadhua", emphasis: true },
          { label: "Tanchoi", href: "/collections/sarees?weave=tanchoi" },
          { label: "Shikargah", href: "/collections/sarees?weave=shikargah" },
          { label: "Kadiyal", href: "/collections/sarees?weave=kadiyal" },
          { label: "Rangkat", href: "/collections/sarees?weave=rangkat" },
          { label: "Jamdani", href: "/collections/sarees?weave=jamdani" },
          { label: "Meenakari", href: "/collections/sarees?weave=meenakari" },
        ],
      },
      {
        heading: "Fabrics",
        links: [
          { label: "Katan Silk", href: "/collections/katan-silk" },
          { label: "Kora Organza", href: "/collections/sarees?fabric=kora-organza" },
          { label: "Handwoven Georgette", href: "/collections/sarees?fabric=handwoven-georgette" },
          { label: "Sooti Cotton", href: "/collections/sarees?fabric=sooti-cotton" },
          { label: "Tissue Silk", href: "/collections/sarees?fabric=tissue-silk" },
          { label: "Silk Wool", href: "/collections/sarees?fabric=silk-wool" },
        ],
      },
      {
        heading: "How to Style",
        links: [
          { label: "Bridal", href: "/collections/bridal" },
          { label: "Festive Edit", href: "/collections/festive" },
          { label: "Modern Classics", href: "/collections/modern-classics" },
          { label: "Collector's Edit", href: "/collections/collectors-edit" },
          { label: "Excellence Series", href: "/collections/excellence" },
          { label: "Seasonal Selections", href: "/collections/seasonal" },
        ],
      },
    ],
    tiles: [
      { label: "On kadhua", href: "/pages/kadhua", tone: "maroon", src: "/reference-only/tile-kadhua.webp" },
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    href: "/collections/nadi",
    columns: [
      {
        heading: "Shop by Campaign",
        links: [
          { label: "Nadi", href: "/pages/nadi", emphasis: true },
          { label: "Antaraal", href: "/pages/antaraal" },
          { label: "Charbagh", href: "/pages/charbagh" },
          { label: "Tarang", href: "/pages/tarang" },
          { label: "Peony Pavilion", href: "/pages/peony-pavilion" },
          { label: "SeeSaw", href: "/pages/seesaw" },
          { label: "Sandhi", href: "/pages/sandhi" },
          { label: "Charulata", href: "/pages/charulata" },
          { label: "Nagma", href: "/pages/nagma" },
          { label: "Janavi", href: "/pages/janavi" },
          { label: "Shakti", href: "/pages/shakti" },
          { label: "Balance", href: "/pages/balance" },
        ],
      },
      {
        heading: "Featured Campaign",
        links: [
          { label: "Nadi", href: "/collections/nadi" },
          { label: "Antaraal", href: "/collections/antaraal" },
        ],
      },
    ],
    tiles: [
      { label: "Nadi", href: "/pages/nadi", tone: "green", src: "/reference-only/tile-nadi-campaign.webp" },
      { label: "Antaraal", href: "/pages/antaraal", tone: "purple", src: "/reference-only/tile-antaraal-campaign.webp" },
    ],
  },
  {
    id: "craft",
    label: "Craft",
    href: "/pages/kadhua",
    columns: [
      {
        heading: "Handloom",
        links: [
          { label: "On kadhua", href: "/pages/kadhua" },
          { label: "Telling handloom from powerloom", href: "/pages/handloom" },
          { label: "Identify a handloom saree", href: "/pages/identify" },
          { label: "Fabrics of Banaras", href: "/pages/fabrics" },
          { label: "Weaving Process", href: "/pages/weaving-process" },
          { label: "Techniques & Patterns", href: "/pages/techniques" },
          { label: "Many Hands of Handloom", href: "/pages/many-hands" },
        ],
      },
      {
        heading: "Metal",
        links: [
          { label: "Metal Repoussé", href: "/pages/repousse" },
          { label: "Art & Collectibles", href: "/pages/antaraal" },
        ],
      },
    ],
    tiles: [
      { label: "The loom", href: "/pages/handloom", tone: "gold", src: "/reference-only/tile-loom.webp" },
      { label: "Repoussé", href: "/pages/repousse", tone: "black", src: "/reference-only/tile-repousse.webp" },
    ],
  },
  {
    id: "stories",
    label: "Stories",
    href: "/pages/nadi",
    columns: [
      {
        heading: "Spirit of Creations",
        links: [
          { label: "Becoming", href: "/pages/becoming" },
          { label: "A Colour Unbroken", href: "/pages/colour-unbroken" },
          { label: "Banaras Nocturne", href: "/pages/banaras-nocturne" },
          { label: "Banaras Bombay", href: "/pages/banaras-bombay" },
          { label: "Evening Raga", href: "/pages/evening-raga" },
          { label: "Yatra", href: "/pages/yatra" },
          { label: "Gulab Bari", href: "/pages/gulab-bari" },
          { label: "Kala", href: "/pages/kala" },
          { label: "Katha", href: "/pages/katha" },
        ],
      },
      {
        heading: "Stories",
        links: [
          { label: "Arts & Culture", href: "/blogs/arts-culture" },
          { label: "Style", href: "/blogs/style" },
          { label: "Features", href: "/blogs/features" },
          { label: "Perspective", href: "/blogs/perspective" },
          { label: "Maestros of the Arts", href: "/blogs/maestros" },
        ],
      },
    ],
    tiles: [
      { label: "Nadi", href: "/pages/nadi", tone: "indigo", src: "/reference-only/tile-nadi-story.webp" },
      { label: "Antaraal", href: "/pages/antaraal", tone: "purple", src: "/reference-only/tile-antaraal-story.webp" },
    ],
  },
  {
    id: "about",
    label: "About Us",
    href: "/pages/our-story",
    columns: [
      {
        heading: "About Us",
        links: [
          { label: "Our Story / Our Heritage", href: "/pages/our-story" },
          { label: "Impact", href: "/pages/impact" },
          { label: "Press & Media", href: "/pages/press" },
          { label: "Careers", href: "/pages/careers" },
          { label: "Contact Us", href: "/pages/contact" },
        ],
      },
    ],
    tiles: [
      { label: "Impact", href: "/pages/impact", tone: "green", src: "/reference-only/tile-impact.webp" },
      { label: "Retail Stores", href: "/pages/stores", tone: "maroon", src: "/reference-only/tile-stores.webp" },
    ],
  },
];