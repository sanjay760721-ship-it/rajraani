import "server-only";

import { HOMEPAGE_SECTIONS, PAGES, type Section } from "../content/sections.ts";

/**
 * One example of every band type, for "Add a band".
 *
 * A new band starts as a copy of a real one rather than as an empty form: a
 * blank slideshow has no slides to edit, and an empty form gives no sense of
 * how much text the space is designed for. The owner changes the copy.
 */
export function sectionTemplates(): Section[] {
  const seen = new Map<string, Section>();
  const all = [
    ...HOMEPAGE_SECTIONS,
    ...Object.values(PAGES).flatMap((page) => page.sections),
  ];
  for (const section of all) if (!seen.has(section.type)) seen.set(section.type, section);
  return [...seen.values()];
}
