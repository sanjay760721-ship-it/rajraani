import "server-only";

import { content } from "../content/content.ts";
import type { Section } from "../content/sections.ts";
import { SECTION_LABELS, sectionSummary } from "./section-fields.ts";

/**
 * Store-visit booking links, wherever they appear.
 *
 * Visits are booked through Calendly (the owner's decision), and its links sit
 * inside homepage and page blocks — the stores slideshow, the store page's
 * closing band. Each address can appear in several places, so it is listed once
 * with every place that uses it, and changed everywhere in one go.
 */

export const BOOKING_HOSTS = /^https:\/\/(www\.)?(calendly\.com|cal\.com|zcal\.co)\//;

export type BookingUse = { place: string; where: string; href: string };
export type BookingLink = { url: string; uses: BookingUse[] };

function walk(value: unknown, found: string[]): void {
  if (typeof value === "string") {
    if (BOOKING_HOSTS.test(value)) found.push(value);
  } else if (Array.isArray(value)) value.forEach((item) => walk(item, found));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => walk(item, found));
}

function usesIn(sections: readonly Section[], place: string, href: string): { url: string; use: BookingUse }[] {
  const out: { url: string; use: BookingUse }[] = [];
  sections.forEach((section, index) => {
    const urls: string[] = [];
    walk(section, urls);
    for (const url of urls) {
      const name = SECTION_LABELS[section.type]?.name ?? section.type;
      const summary = sectionSummary(section as unknown as Record<string, unknown>);
      out.push({ url, use: { place, where: `Block ${index + 1} · ${name}${summary ? ` — ${summary.slice(0, 40)}` : ""}`, href } });
    }
  });
  return out;
}

export async function bookingLinks(): Promise<BookingLink[]> {
  const [homepage, pages] = await Promise.all([content.getHomepageSections(), content.listPages()]);
  const all = [
    ...usesIn(homepage, "Homepage", "/admin/homepage"),
    ...pages.flatMap((page) => usesIn(page.sections, page.title, `/admin/pages/${page.slug}`)),
  ];
  const byUrl = new Map<string, BookingUse[]>();
  for (const { url, use } of all) byUrl.set(url, [...(byUrl.get(url) ?? []), use]);
  return [...byUrl.entries()].map(([url, uses]) => ({ url, uses }));
}

/** Replace every exact occurrence of one string inside a value. */
export function replaceEverywhere<T>(value: T, from: string, to: string): { value: T; count: number } {
  let count = 0;
  const visit = (node: unknown): unknown => {
    if (node === from) {
      count++;
      return to;
    }
    if (Array.isArray(node)) return node.map(visit);
    if (node && typeof node === "object") {
      return Object.fromEntries(Object.entries(node).map(([key, inner]) => [key, visit(inner)]));
    }
    return node;
  };
  return { value: visit(value) as T, count };
}
