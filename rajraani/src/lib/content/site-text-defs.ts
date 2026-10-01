import { ANNOUNCEMENT_PARTS, BRAND, INFO_TABS } from "../brand.ts";

/**
 * Site-wide lines of text the owner can change.
 *
 * These are the words that are not part of any one page: the announcement
 * strip, the line in the top bar, contact details, the fixed text on every
 * product page. Until 27 Sep 2026 they were constants in `brand.ts`, so
 * changing "Free shipping in India" needed a developer and a deploy.
 *
 * The defaults are still those constants. The database stores only what the
 * owner has changed (`setting` row `site.text`), so a fresh database shows the
 * site exactly as before. Client-safe: no database import here.
 */

export type SiteTextKey = keyof typeof SITE_TEXT_DEFAULTS;
export type SiteText = Record<SiteTextKey, string>;

const tab = (id: string) => INFO_TABS.find((entry) => entry.id === id)!;

export const SITE_TEXT_DEFAULTS = {
  "announce.1": ANNOUNCEMENT_PARTS[0],
  "announce.2": ANNOUNCEMENT_PARTS[1],
  "announce.3": ANNOUNCEMENT_PARTS[2],
  tagline: BRAND.line,
  "contact.email": BRAND.supportEmail,
  "contact.phone": BRAND.supportPhone,
  "contact.hours": BRAND.supportHours.split(" · ").join("\n"),
  "home.storyKicker": "The collection",
  "home.shopThePieces": "Shop the pieces",
  "home.filmKicker": "Handloom heritage",
  "home.fact1.figure": "6–26",
  "home.fact1.label": "Weeks on the loom",
  "home.fact2.figure": "By hand",
  "home.fact2.label": "Every thread",
  "home.fact3.figure": "Varanasi",
  "home.fact3.label": "Where it is woven",
  "home.shopKicker": "Shop",
  "home.editsKicker": "For the occasion",
  "home.editsTitle": "Curated edits",
  "home.editsNote": "Bridal, gifting, real zari and repoussé, each chosen piece by piece.",
  "home.campaignKicker": "Campaign",
  "home.visitButton": "Book a visit",
  "product.promise": BRAND.promise,
  "product.handmadeNote": BRAND.irregularityNote,
  "product.tab.shipping.label": tab("shipping").label,
  "product.tab.shipping.lines": tab("shipping").items.join("\n"),
  "product.tab.dimensions.label": tab("dimensions").label,
  "product.tab.dimensions.lines": tab("dimensions").items.join("\n"),
  "product.tab.care.label": tab("care").label,
  "product.tab.care.lines": tab("care").items.join("\n"),
  "product.tab.other.label": tab("other").label,
  "product.tab.other.lines": tab("other").items.join("\n"),
} as const;

/** Where each line appears, in the words the owner would use. */
export const SITE_TEXT_FIELDS: readonly {
  key: SiteTextKey;
  group: string;
  label: string;
  hint?: string;
  lines?: boolean;
}[] = [
  { key: "announce.1", group: "Promises (the line of three in the footer)", label: "First promise" },
  { key: "announce.2", group: "Promises (the line of three in the footer)", label: "Second promise" },
  { key: "announce.3", group: "Promises (the line of three in the footer)", label: "Third promise", hint: "Leave one empty to show only two." },
  { key: "tagline", group: "Footer signature", label: "Line under the large RAJRAANI in the footer" },
  { key: "home.storyKicker", group: "Homepage — small words", label: "Label above the three photographs", hint: "The scene that pulls back from one photo to three." },
  { key: "home.shopThePieces", group: "Homepage — small words", label: "Second link on the campaign and photo scenes" },
  { key: "home.filmKicker", group: "Homepage — small words", label: "Label above the loom film's title" },
  { key: "home.fact1.figure", group: "Homepage — the loom film's three facts", label: "Fact 1 — large figure" },
  { key: "home.fact1.label", group: "Homepage — the loom film's three facts", label: "Fact 1 — words under it" },
  { key: "home.fact2.figure", group: "Homepage — the loom film's three facts", label: "Fact 2 — large figure" },
  { key: "home.fact2.label", group: "Homepage — the loom film's three facts", label: "Fact 2 — words under it" },
  { key: "home.fact3.figure", group: "Homepage — the loom film's three facts", label: "Fact 3 — large figure" },
  { key: "home.fact3.label", group: "Homepage — the loom film's three facts", label: "Fact 3 — words under it" },
  { key: "home.shopKicker", group: "Homepage — small words", label: "Label on the tall shop strips" },
  { key: "home.editsKicker", group: "Homepage — curated edits (the sliding row of four)", label: "Small label" },
  { key: "home.editsTitle", group: "Homepage — curated edits (the sliding row of four)", label: "Title" },
  { key: "home.editsNote", group: "Homepage — curated edits (the sliding row of four)", label: "Line under the title", lines: true },
  { key: "home.campaignKicker", group: "Homepage — small words", label: "Label on the campaign slides" },
  { key: "home.visitButton", group: "Homepage — small words", label: "Button on the store slides" },
  { key: "contact.email", group: "Contact details (footer)", label: "Email address" },
  { key: "contact.phone", group: "Contact details (footer)", label: "Phone number", hint: "Also used for the WhatsApp link." },
  { key: "contact.hours", group: "Contact details (footer)", label: "Support hours", hint: "One line per row.", lines: true },
  { key: "product.promise", group: "Every product page", label: "“Our promise” line" },
  { key: "product.handmadeNote", group: "Every product page", label: "Handwoven note under the details", lines: true },
  { key: "product.tab.shipping.label", group: "Product page tabs", label: "Tab 1 — name" },
  { key: "product.tab.shipping.lines", group: "Product page tabs", label: "Tab 1 — text", hint: "One point per line.", lines: true },
  { key: "product.tab.dimensions.label", group: "Product page tabs", label: "Tab 2 — name" },
  { key: "product.tab.dimensions.lines", group: "Product page tabs", label: "Tab 2 — text", hint: "One point per line.", lines: true },
  { key: "product.tab.care.label", group: "Product page tabs", label: "Tab 3 — name" },
  { key: "product.tab.care.lines", group: "Product page tabs", label: "Tab 3 — text", hint: "One point per line.", lines: true },
  { key: "product.tab.other.label", group: "Product page tabs", label: "Tab 4 — name" },
  { key: "product.tab.other.lines", group: "Product page tabs", label: "Tab 4 — text", hint: "One point per line.", lines: true },
];

export function isSiteTextKey(key: string): key is SiteTextKey {
  return Object.hasOwn(SITE_TEXT_DEFAULTS, key);
}

/** The announcement messages, skipping any the owner has emptied. */
export function announcementParts(text: SiteText): string[] {
  return [text["announce.1"], text["announce.2"], text["announce.3"]].filter((part) => part.trim());
}

/** Product page tabs, in the shape InfoPanels renders. */
export function productTabs(text: SiteText) {
  return (["shipping", "dimensions", "care", "other"] as const)
    .map((id) => ({
      id,
      label: text[`product.tab.${id}.label`],
      items: text[`product.tab.${id}.lines`].split("\n").map((line) => line.trim()).filter(Boolean),
    }))
    .filter((entry) => entry.label.trim() && entry.items.length);
}
