/**
 * Admin iconography — fine-line strokes, matching the "Ethos & Elegance" weight.
 *
 * These are inline SVG rather than the Material Symbols webfont the mockups
 * used. An icon font is a render-blocking request to fonts.googleapis.com, it
 * flashes tofu before it lands, and it ships thousands of glyphs to draw eight.
 * At this count, paths are smaller and they inherit `currentColor` for free.
 */

export type AdminIconName =
  | "dashboard"
  | "orders"
  | "catalog"
  | "analytics"
  | "customers"
  | "settings"
  | "collections"
  | "taxonomy"
  | "artisans"
  | "homepage"
  | "media"
  | "editorials"
  | "faqs"
  | "appointments"
  | "discounts"
  | "external"
  | "search"
  | "bell"
  | "help"
  | "download"
  | "trendUp"
  | "trendDown";

/** 24x24 viewBox, 1.5 stroke, round caps — one visual weight across the set. */
const PATHS: Record<AdminIconName, string> = {
  dashboard: "M3 3h7v7H3zM14 3h7v4h-7zM14 11h7v10h-7zM3 14h7v7H3z",
  orders: "M6 2h12l1 5H5zM5 7v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7M9 11a3 3 0 0 0 6 0",
  catalog: "M3 7h18M3 7l1.5-4h15L21 7M5 7v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7M9 12h6",
  analytics: "M3 20h18M6 16l4-5 3 3 5-7",
  customers: "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.87M16 2.13a4 4 0 0 1 0 7.75",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.4 15a1.6 1.6 0 0 0 .32 1.77l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.6 1.6 0 0 0-1.77-.32 1.6 1.6 0 0 0-1 1.47V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1.05-1.47 1.6 1.6 0 0 0-1.77.32l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.6 1.6 0 0 0 .32-1.77 1.6 1.6 0 0 0-1.47-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.47-1.05 1.6 1.6 0 0 0-.32-1.77l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.6 1.6 0 0 0 1.77.32H9a1.6 1.6 0 0 0 1-1.47V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.47 1.6 1.6 0 0 0 1.77-.32l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.6 1.6 0 0 0-.32 1.77V9a1.6 1.6 0 0 0 1.47 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.47 1z",
  collections: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  taxonomy: "M20.6 13.4 11 3.8V3H3v8h.8l9.6 9.6a2 2 0 0 0 2.8 0l4.4-4.4a2 2 0 0 0 0-2.8M7 7h.01",
  artisans: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 11h.01M15 11h.01",
  homepage: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
  media: "M3 5h18v14H3zM3 15l5-5 4 4 3-3 6 6M8.5 9.5h.01",
  editorials: "M4 3h11l5 5v13H4zM15 3v5h5M8 13h8M8 17h5",
  faqs: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01",
  appointments: "M3 5h18v16H3zM3 10h18M8 3v4M16 3v4M8 14h3",
  discounts: "M20.6 13.4 11 3.8V3H3v8h.8l9.6 9.6a2 2 0 0 0 2.8 0l4.4-4.4a2 2 0 0 0 0-2.8M7.5 7.5h.01",
  external: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16M21 21l-4.35-4.35",
  bell: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",
  help: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M9.1 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  trendUp: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
  trendDown: "M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6",
};

export function AdminIcon({
  name,
  className = "h-5 w-5",
}: {
  name: AdminIconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
