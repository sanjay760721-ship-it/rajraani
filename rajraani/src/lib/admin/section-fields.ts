/**
 * What the section editor needs to know about each field, in plain words.
 *
 * ── Where this comes from ───────────────────────────────────────────────────
 * The editor walks the section's actual data, so no field that exists on a
 * live page can ever be hidden from the owner. This module only *describes*
 * what it finds: a friendly name, the allowed choices, a length limit, whether
 * it is a link. Choices and limits are read from the content model in
 * `sanity/schemas/objects/sections.ts` — the same declarations `schema.test.ts`
 * holds to the storefront — and topped up here where the model is thinner than
 * the data (per-slide caption colour, overlay placement and so on).
 *
 * Field names are never shown to the owner. "ctaHref" is "Button goes to".
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { FieldDefinition, TypeDefinition, ValidationRule } from "../../../sanity/lib/define.ts";
import { sectionTypes } from "../../../sanity/schemas/objects/sections.ts";

/** Each band type, as the owner would describe it. */
export const SECTION_LABELS: Record<string, { name: string; hint: string }> = {
  hero: { name: "Large banner", hint: "One big photo with a headline and a button." },
  heroCarousel: { name: "Slideshow at the top", hint: "Big photos that change on their own, each with its own words and button." },
  brandStatement: { name: "Brand statement", hint: "One large line of words and a short paragraph. No photo." },
  collectionTriptych: { name: "Three photos + text", hint: "Three photos in a row with a title and a button." },
  videoBand: { name: "Film", hint: "A video with a title and a button." },
  categorySplit: { name: "Two categories side by side", hint: "Two large photos, each linking somewhere." },
  tileRow: { name: "Row of tiles", hint: "A row of photos with short labels." },
  editorialPair: { name: "Two stories side by side", hint: "Two photos, each with a title, text and a button." },
  editorialSlideshow: { name: "Story slideshow", hint: "Full-width slides, each with words and a button." },
  storesSlideshow: { name: "Our stores slideshow", hint: "One slide per store." },
  poetryBand: { name: "Short poem or quote", hint: "A heading and a few lines." },
  richText: { name: "Text", hint: "A heading and paragraphs." },
  sizeChart: { name: "Size chart", hint: "Measurements table beside a figure." },
  pullQuote: { name: "Quote", hint: "A single large quotation." },
  productRail: { name: "Row of products", hint: "Products from one collection." },
  hereToHelp: { name: "Contact details", hint: "Email, phone, WhatsApp and hours." },
  imageWithText: { name: "Photo with text", hint: "A photo beside a heading and paragraphs." },
  imageBand: { name: "Photo", hint: "One photo on its own, optionally with words over it." },
  faqAccordion: { name: "Questions & answers", hint: "Grouped questions that open when clicked." },
  mapBand: { name: "Map", hint: "A map pin for an address." },
  galleryGrid: { name: "Photo grid", hint: "A grid of photos, optionally captioned and linked." },
  contactPanel: { name: "Contact details + form", hint: "Who to write to, the stores, and the contact form." },
  storesBand: { name: "Our stores", hint: "A photo with a list of stores." },
  dualCampaign: { name: "Two campaigns side by side", hint: "Two photos, each with a title, text and a button." },
  campaignSlideshow: { name: "Campaign slideshow", hint: "One slide per campaign." },
};

/** Friendly names for field keys. Anything missing is humanised. */
const LABELS: Record<string, string> = {
  eyebrow: "Small line above the headline",
  title: "Headline",
  heading: "Heading",
  body: "Text",
  quote: "Quote",
  standfirst: "Introduction",
  ctaLabel: "Button text",
  ctaHref: "Button goes to",
  href: "Photo links to",
  artHrefs: "Where each photo links to",
  art: "Photo",
  slides: "Slides",
  items: "Items",
  label: "Label",
  paragraphs: "Paragraphs",
  align: "Text position",
  textAlign: "Text alignment",
  verticalAlign: "Text position (up / down)",
  imageSide: "Photo on which side",
  ink: "Text colour",
  buttonVariant: "Button style",
  caption: "Caption under the photo",
  overlay: "Words over the photo",
  panel: "Background behind the words",
  mobileAlign: "Words position on phones",
  attribution: "Who said it",
  collectionHandle: "Collection",
  videoSrc: "Video file",
  stores: "Stores",
  name: "Name",
  detail: "Detail",
  address: "Address",
  email: "Email",
  phone: "Phone",
  whatsapp: "WhatsApp",
  hours: "Opening hours",
  query: "Place to show on the map",
  groups: "Groups",
  question: "Question",
  answer: "Answer",
  routes: "Ways to reach us",
  text: "Text",
  tail: "Text after the email address",
  linkLabel: "Link text",
  linkHref: "Link goes to",
  socialIntro: "Line above the social links",
  socials: "Social links",
  visitHeading: "Heading above the stores",
  form: "Contact form",
  intro: "Introduction",
  submitLabel: "Send button text",
  ground: "Background colour",
  ratio: "Photo shape (desktop)",
  mobileRatio: "Photo shape (phone)",
  imageRatio: "Photo shape",
  fullWidth: "Run edge to edge",
  bleed: "Run edge to edge",
  inset: "Margin around the photo",
  columns: "Columns",
  divider: "Line under the heading",
  uppercase: "Heading in capitals",
  measure: "Text width",
  tone: "Text colour",
  asPageTitle: "This heading is the page title",
  italicParagraphs: "Paragraphs in italics (numbers, from 0)",
  padTop: "Space above (px)",
  padBottom: "Space below (px)",
  padX: "Space at the sides (px)",
  padY: "Space above and below (px)",
  zoom: "Map zoom",
  figure: "Figure",
  measures: "How to measure",
  point: "Measuring point",
  note: "Note",
  sizes: "Sizes",
  rows: "Rows",
  inches: "Inches",
  cm: "Centimetres",
};

/** Settings most owners never touch. Shown under "More settings". */
export const ADVANCED = new Set([
  "padTop", "padBottom", "padX", "padY", "measure", "ratio", "mobileRatio",
  "bleed", "fullWidth", "inset", "uppercase", "asPageTitle", "italicParagraphs",
  "tone", "zoom", "columns", "divider", "ground", "videoSrc",
]);

/** Structural keys the owner must never type over. */
export const HIDDEN = new Set(["id", "type"]);

/** Choice labels, so the owner reads "Dark text" rather than "dark". */
const CHOICE_LABELS: Record<string, string> = {
  left: "Left", center: "Centre", right: "Right", top: "Top", middle: "Middle",
  bottom: "Bottom", primary: "Dark button", secondary: "Light button",
  dark: "Dark text (for light photos)", solid: "White panel", none: "No panel",
  cream: "Cream", deep: "Deep maroon", white: "White", brown: "Brown",
  prose: "Comfortable (680px)", content: "Wide (1200px)", women: "Women", men: "Men",
};

export function choiceLabel(value: string | number): string {
  return CHOICE_LABELS[String(value)] ?? String(value);
}

/**
 * Choices the content model does not declare, keyed by path then by field.
 * Paths ignore list positions: `heroCarousel.slides` is every hero slide.
 */
const EXTRA_CHOICES: Record<string, Record<string, readonly (string | number)[]>> = {
  "heroCarousel.slides": { align: ["left", "center", "right"], ink: ["dark"] },
  "editorialSlideshow.slides": { verticalAlign: ["bottom", "center"], ink: ["dark"] },
  "imageBand.overlay": {
    align: ["left", "center", "right"],
    panel: ["solid", "none"],
    ink: ["cream", "deep", "white"],
    mobileAlign: ["top", "middle"],
    textAlign: ["left", "center"],
  },
  imageBand: {
    padTop: [0, 20, 25, 30, 40, 60, 100],
    padBottom: [0, 20, 30, 40, 60],
    ratio: ["15/8", "3/1", "2/1", "7/5", "3/2", "4/3", "9/8", "1/1"],
    mobileRatio: ["3/2", "2/3", "4/5", "1/1"],
  },
  imageWithText: { imageSide: ["left", "right"], ground: ["deep", "cream"], ratio: ["1/1", "4/5"] },
  richText: { align: ["left", "center"], measure: ["prose", "content"], tone: ["deep", "brown"], columns: [1, 2] },
  galleryGrid: { columns: [2, 3, 4] },
  mapBand: { padY: [20, 30], padX: [0, 20] },
  sizeChart: { figure: ["women", "men"] },
};

/**
 * Optional fields a band can have but may not have been given yet, so the
 * owner can add, say, a small line above a slide's headline without asking.
 */
const EXTRA_OPTIONAL: Record<string, Record<string, unknown>> = {
  "heroCarousel.slides": { eyebrow: "", align: "center" },
  "editorialSlideshow.slides": { eyebrow: "" },
  imageBand: { href: "", caption: "" },
  imageWithText: { eyebrow: "", heading: "", href: "" },
  richText: { heading: "" },
  galleryGrid: { heading: "", standfirst: "" },
  pullQuote: { attribution: "" },
};

// ── Reading the content model ───────────────────────────────────────────────

type RuleInfo = { required?: boolean; max?: number };

/** Run a declared validation against a recorder to learn its limits. */
function readRule(validation: FieldDefinition["validation"]): RuleInfo {
  const info: RuleInfo = {};
  if (!validation) return info;
  const rule: ValidationRule = {
    required: () => ((info.required = true), rule),
    min: () => rule,
    max: (n) => ((info.max = n), rule),
    length: () => rule,
    regex: () => rule,
    uri: () => rule,
    custom: () => rule,
    error: () => rule,
    warning: () => rule,
  };
  try {
    validation(rule);
  } catch {
    /* a validation we cannot read just means no limits shown */
  }
  return info;
}

const BY_TYPE = new Map<string, TypeDefinition>(
  (sectionTypes as TypeDefinition[]).map((type) => [type.name, type]),
);

/** Find the model's declaration for a field at `path` (keys only). */
function declaration(path: readonly string[]): FieldDefinition | undefined {
  const [typeName, ...keys] = path;
  let fields: FieldDefinition[] | undefined = BY_TYPE.get(typeName ?? "")?.fields;
  let found: FieldDefinition | undefined;
  for (const key of keys) {
    found = fields?.find((field) => field.name === key);
    if (!found) return undefined;
    fields = found.type === "array" ? found.of?.[0]?.fields : found.fields;
  }
  return found;
}

export type FieldInfo = {
  label: string;
  choices?: readonly (string | number)[];
  max?: number;
  link: boolean;
  multiline: boolean;
  advanced: boolean;
};

/**
 * Describe one field.
 *
 * @param path  section type followed by the keys down to the parent object
 * @param key   the field's own key
 * @param value its current value, to tell a paragraph from a label
 */
export function fieldInfo(path: readonly string[], key: string, value: unknown): FieldInfo {
  const decl = declaration([...path, key]);
  const pathKey = path.join(".");
  const extra = EXTRA_CHOICES[pathKey]?.[key];
  const declared = decl?.options?.list as readonly (string | number)[] | undefined;
  const { max } = readRule(decl?.validation);

  const link =
    /href$/i.test(key) || key === "href" || key === "artHrefs" || path.at(-1) === "artHrefs";

  return {
    label: LABELS[key] ?? humanise(key),
    choices: extra ?? declared,
    max,
    link,
    multiline:
      decl?.type === "text" ||
      ["body", "answer", "standfirst", "note", "intro", "text", "tail"].includes(key) ||
      path.at(-1) === "paragraphs" ||
      (typeof value === "string" && value.length > 90),
    advanced: ADVANCED.has(key),
  };
}

export function optionalFields(path: readonly string[]): Record<string, unknown> {
  return EXTRA_OPTIONAL[path.join(".")] ?? {};
}

export function humanise(key: string): string {
  const words = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/** The line the section list shows for a band, e.g. its headline. */
export function sectionSummary(section: Record<string, unknown>): string {
  const candidates = [section.title, section.heading, section.quote];
  for (const value of candidates) if (typeof value === "string" && value.trim()) return value;
  const slides = section.slides as { title?: string }[] | undefined;
  if (slides?.[0]?.title) return slides.map((slide) => slide.title).join(" · ");
  const items = section.items as { label?: string; title?: string }[] | undefined;
  if (items?.length) {
    const names = items.map((item) => item.label ?? item.title).filter(Boolean);
    if (names.length) return names.join(" · ");
  }
  const paragraphs = section.paragraphs as string[] | undefined;
  if (paragraphs?.[0]) return paragraphs[0].slice(0, 80) + (paragraphs[0].length > 80 ? "…" : "");
  const overlay = section.overlay as { title?: string } | undefined;
  if (overlay?.title) return overlay.title;
  if (typeof section.caption === "string" && section.caption) return section.caption;
  return "";
}

/** True for `{ desktop: {...}, mobile: {...} }` — the storefront's ArtPair. */
export function isArtPair(value: unknown): value is {
  desktop: { tone: string; src?: string };
  mobile: { tone: string; src?: string };
} {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.desktop === "object" && v.desktop !== null &&
    typeof v.mobile === "object" && v.mobile !== null &&
    "tone" in (v.desktop as object)
  );
}

/** Photos still pointing at unlicensed reference files (HANDOFF §2.48). */
export function isReferenceSrc(src: string | undefined): boolean {
  return !!src && (src.startsWith("/homepage/") || src.startsWith("/reference-only/"));
}

/** Count photos still pointing at reference files, anywhere in a value. */
export function countReferencePhotos(value: unknown): number {
  if (isArtPair(value)) {
    return Number(isReferenceSrc(value.desktop.src)) + Number(isReferenceSrc(value.mobile.src) && value.mobile.src !== value.desktop.src);
  }
  if (Array.isArray(value)) return value.reduce((sum: number, item) => sum + countReferencePhotos(item), 0);
  if (value && typeof value === "object") {
    return Object.values(value).reduce((sum: number, item) => sum + countReferencePhotos(item), 0);
  }
  return 0;
}
