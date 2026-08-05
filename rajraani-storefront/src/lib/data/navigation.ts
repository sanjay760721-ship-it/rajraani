/**
 * Navigation.
 *
 * build.md Â§6 requires the mega menu be 100% CMS-driven, so changing it needs
 * zero deploys. This file is the shape that contract produces â€” in production
 * it comes from the Sanity `navigation` document (Â§2.3) and this becomes the
 * fallback. Addendum A2 found the reference site's menu differed between two
 * page loads, so menu content is genuinely dynamic data and must never be
 * treated as a compile-time constant.
 *
 * Every panel carries at least one image tile. Those are merchandised slots,
 * not decoration â€” each is an editorially chosen link (A2).
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
  /** Deliberately no image field yet â€” see components/Frame for why. */
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
        heading: "By garment",
        links: [
          { label: "Sarees", href: "/collections/sarees" },
          { label: "Dupattas", href: "/collections/dupattas" },
          { label: "Stoles & Scarves", href: "/collections/sarees?garment=stole" },
        ],
      },
      {
        heading: "New and returning",
        links: [
          { label: "Fresh off the loom", href: "/collections/sarees?sort=name-asc" },
          {
            label: "Available now",
            href: "/collections/sarees?availability=available",
            emphasis: true,
          },
          { label: "Made to order", href: "/collections/sarees?availability=made-to-order" },
          { label: "Pre-order", href: "/collections/sarees?availability=pre-order" },
        ],
      },
    ],
    tiles: [{ label: "Nadi", href: "/collections/nadi", tone: "indigo" }],
  },
  {
    id: "weaves",
    label: "Weaves",
    href: "/collections/kadhua",
    columns: [
      {
        heading: "Technique",
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
        heading: "Fabric",
        links: [
          { label: "Katan Silk", href: "/collections/katan-silk" },
          { label: "Kora Organza", href: "/collections/sarees?fabric=kora-organza" },
          { label: "Handwoven Georgette", href: "/collections/sarees?fabric=handwoven-georgette" },
          { label: "Sooti Cotton", href: "/collections/sarees?fabric=sooti-cotton" },
          { label: "Tissue Silk", href: "/collections/sarees?fabric=tissue-silk" },
          { label: "Silk Wool", href: "/collections/sarees?fabric=silk-wool" },
        ],
      },
    ],
    tiles: [{ label: "On kadhua", href: "/pages/kadhua", tone: "maroon" }],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    href: "/collections/nadi",
    columns: [
      {
        heading: "This season",
        links: [
          { label: "Nadi", href: "/pages/nadi", emphasis: true },
          { label: "Antaraal", href: "/pages/antaraal" },
        ],
      },
      {
        heading: "Shop the collections",
        links: [
          { label: "Nadi", href: "/collections/nadi" },
          { label: "Antaraal", href: "/collections/antaraal" },
        ],
      },
    ],
    tiles: [
      { label: "Nadi", href: "/pages/nadi", tone: "green" },
      { label: "Antaraal", href: "/pages/antaraal", tone: "purple" },
    ],
  },
  {
    id: "craft",
    label: "Craft",
    href: "/pages/kadhua",
    columns: [
      {
        heading: "Understanding the cloth",
        links: [
          { label: "On kadhua", href: "/pages/kadhua" },
          { label: "Telling handloom from powerloom", href: "/pages/handloom" },
        ],
      },
    ],
    tiles: [{ label: "The loom", href: "/pages/handloom", tone: "gold" }],
  },
];
