import "server-only";

import { content } from "../content/content.ts";
import type { Section } from "../content/sections.ts";
import { SITE_TEXT_FIELDS } from "../content/site-text-defs.ts";
import { getSiteText } from "../content/site-text.ts";
import { fieldInfo, HIDDEN, humanise, isArtPair, SECTION_LABELS, sectionSummary } from "./section-fields.ts";

/**
 * Every piece of text on the site, with where it is, for "Change text".
 *
 * The owner sees a sentence on the website and wants it different. They should
 * not need to know it lives in "band 3 of the homepage, slide 2, eyebrow" —
 * they type a few of its words, and every place those words appear is listed
 * with a box to change them. `where` is the answer to "which one is this?" in
 * words they would use.
 */

export type TextRef =
  | { kind: "site"; key: string }
  | { kind: "home"; path: (string | number)[] }
  | { kind: "page"; slug: string; path: (string | number)[] }
  | { kind: "pageMeta"; slug: string; field: "title" | "standfirst" };

export type TextEntry = {
  id: string;
  /** Top-level place: "Homepage", "Our Banaras store", "Announcement strip…". */
  place: string;
  /** The rest of the trail, e.g. ["Slideshow at the top", "Slide 3", "Headline"]. */
  trail: string[];
  value: string;
  multiline: boolean;
  /** Where to look at it on the site. */
  viewHref: string;
  ref: TextRef;
};

/** Keys that hold text but are not words a visitor reads. */
const NOT_WORDS = new Set(["src", "tone", "videoSrc", "collectionHandle", "query"]);

type Walked = { path: (string | number)[]; trail: string[]; value: string; multiline: boolean };

function walkSection(section: Section): Walked[] {
  const out: Walked[] = [];
  const visit = (value: unknown, path: (string | number)[], keys: string[], trail: string[]) => {
    if (typeof value === "string") {
      const key = keys.at(-1)!;
      const parentKeys = [section.type, ...keys.slice(0, -1)];
      const info = fieldInfo(parentKeys, key, value);
      if (HIDDEN.has(key) || NOT_WORDS.has(key) || info.link || info.choices || info.advanced) return;
      if (!value.trim()) return;
      out.push({ path, trail, value, multiline: info.multiline });
      return;
    }
    if (Array.isArray(value)) {
      const key = keys.at(-1) ?? "";
      value.forEach((item, index) => {
        const noun =
          key === "slides" ? "Slide" : key === "paragraphs" ? "Paragraph" : key === "items" ? "Item" :
          key === "groups" ? "Group" : key === "stores" ? "Store" : key === "routes" ? "Contact line" :
          humanise(key).replace(/s$/, "");
        const itemName =
          item && typeof item === "object" ? sectionSummary(item as Record<string, unknown>) : "";
        const label = `${noun} ${index + 1}${itemName && typeof item === "object" ? ` (${itemName.slice(0, 40)})` : ""}`;
        visit(item, [...path, index], keys, [...trail, label]);
      });
      return;
    }
    if (value && typeof value === "object") {
      for (const [key, inner] of Object.entries(value)) {
        if (HIDDEN.has(key)) continue;
        const label = fieldInfo([section.type, ...keys], key, inner).label;
        // A list names its own items ("Slide 2", "Paragraph 3"), so it adds
        // nothing to the trail itself; any other field adds its name.
        const nextTrail = Array.isArray(inner) ? trail : [...trail, label];
        visit(inner, [...path, key], [...keys, key], nextTrail);
      }
    }
  };
  visit(section, [], [], []);
  return out;
}

function blockLabel(section: Section, index: number): string {
  const kind = SECTION_LABELS[section.type]?.name ?? section.type;
  return `Block ${index + 1} · ${kind}`;
}

export async function textIndex(): Promise<TextEntry[]> {
  const [siteText, homepage, pages] = await Promise.all([
    getSiteText(),
    content.getHomepageSections(),
    content.listPages(),
  ]);

  const entries: TextEntry[] = [];

  for (const field of SITE_TEXT_FIELDS) {
    const value = siteText[field.key];
    entries.push({
      id: `site:${field.key}`,
      place: field.group,
      trail: [field.label],
      value,
      multiline: !!field.lines || value.length > 90,
      viewHref: field.key.startsWith("product.") ? "/search" : "/",
      ref: { kind: "site", key: field.key },
    });
  }

  homepage.forEach((section, index) => {
    for (const hit of walkSection(section)) {
      entries.push({
        id: `home:${index}:${hit.path.join(".")}`,
        place: "Homepage",
        trail: [blockLabel(section, index), ...hit.trail],
        value: hit.value,
        multiline: hit.multiline,
        viewHref: "/",
        ref: { kind: "home", path: [index, ...hit.path] },
      });
    }
  });

  for (const page of pages) {
    const viewHref = `/pages/${page.slug}`;
    entries.push(
      {
        id: `meta:${page.slug}:title`,
        place: page.title,
        trail: ["Page name"],
        value: page.title,
        multiline: false,
        viewHref,
        ref: { kind: "pageMeta", slug: page.slug, field: "title" },
      },
      {
        id: `meta:${page.slug}:standfirst`,
        place: page.title,
        trail: ["Introduction"],
        value: page.standfirst,
        multiline: true,
        viewHref,
        ref: { kind: "pageMeta", slug: page.slug, field: "standfirst" },
      },
    );
    page.sections.forEach((section, index) => {
      for (const hit of walkSection(section)) {
        entries.push({
          id: `page:${page.slug}:${index}:${hit.path.join(".")}`,
          place: page.title,
          trail: [blockLabel(section, index), ...hit.trail],
          value: hit.value,
          multiline: hit.multiline,
          viewHref,
          ref: { kind: "page", slug: page.slug, path: [index, ...hit.path] },
        });
      }
    });
  }

  return entries.filter((entry) => entry.value.trim() || entry.ref.kind === "site");
}

// ── Photos ──────────────────────────────────────────────────────────────────

export type PhotoEntry = {
  id: string;
  place: string;
  trail: string[];
  desktopSrc?: string;
  mobileSrc?: string;
  /** Points at the photo pair itself (`{ desktop, mobile }`). */
  ref: Extract<TextRef, { kind: "home" } | { kind: "page" }>;
};

function walkPhotos(section: Section): { path: (string | number)[]; trail: string[]; desktop?: string; mobile?: string }[] {
  const out: { path: (string | number)[]; trail: string[]; desktop?: string; mobile?: string }[] = [];
  const visit = (value: unknown, path: (string | number)[], keys: string[], trail: string[]) => {
    if (isArtPair(value)) {
      out.push({ path, trail, desktop: value.desktop.src, mobile: value.mobile.src });
      return;
    }
    if (Array.isArray(value)) {
      const key = keys.at(-1) ?? "";
      const noun = key === "slides" ? "Slide" : key === "art" ? "Photo" : "Item";
      value.forEach((item, index) => {
        const name = item && typeof item === "object" ? sectionSummary(item as Record<string, unknown>) : "";
        visit(item, [...path, index], keys, [...trail, `${noun} ${index + 1}${name ? ` (${name.slice(0, 40)})` : ""}`]);
      });
      return;
    }
    if (value && typeof value === "object") {
      for (const [key, inner] of Object.entries(value)) {
        if (HIDDEN.has(key)) continue;
        visit(inner, [...path, key], [...keys, key], Array.isArray(inner) || isArtPair(inner) ? trail : [...trail, fieldInfo([section.type, ...keys], key, inner).label]);
      }
    }
  };
  visit(section, [], [], []);
  return out;
}

export async function photoIndex(): Promise<PhotoEntry[]> {
  const [homepage, pages] = await Promise.all([content.getHomepageSections(), content.listPages()]);
  const entries: PhotoEntry[] = [];
  homepage.forEach((section, index) => {
    for (const hit of walkPhotos(section)) {
      entries.push({
        id: `home:${index}:${hit.path.join(".")}`,
        place: "Homepage",
        trail: [blockLabel(section, index), ...hit.trail],
        desktopSrc: hit.desktop,
        mobileSrc: hit.mobile,
        ref: { kind: "home", path: [index, ...hit.path] },
      });
    }
  });
  for (const page of pages) {
    page.sections.forEach((section, index) => {
      for (const hit of walkPhotos(section)) {
        entries.push({
          id: `page:${page.slug}:${index}:${hit.path.join(".")}`,
          place: page.title,
          trail: [blockLabel(section, index), ...hit.trail],
          desktopSrc: hit.desktop,
          mobileSrc: hit.mobile,
          ref: { kind: "page", slug: page.slug, path: [index, ...hit.path] },
        });
      }
    });
  }
  return entries;
}

/** Only what belongs on the page at `pathname`, plus the site-wide lines. */
export function forPage<T extends { ref: TextRef }>(entries: T[], pathname: string): T[] {
  const slug = pathname.startsWith("/pages/") ? pathname.slice("/pages/".length).split("/")[0] : undefined;
  return entries.filter((entry) => {
    const ref = entry.ref;
    if (ref.kind === "site") return true;
    if (ref.kind === "home") return pathname === "/";
    return ref.slug === slug;
  });
}
