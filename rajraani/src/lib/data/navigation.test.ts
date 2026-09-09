import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { COLLECTIONS } from "./fixtures.ts";
import { NAVIGATION } from "./navigation.ts";

/**
 * Every collection the menus link to must exist.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Why this file exists.
 *
 * On 10 Sep 2026, **30 of the 36 collection links in the navigation 404'd**.
 * The menus had been written as a merchandising structure — the shape a
 * catalogue this deep wants — and the collections behind them were never
 * created. Nothing failed, nothing warned; the links simply went nowhere, and
 * they had been going nowhere for as long as the menu had existed.
 *
 * That is the kind of gap a build gate catches in a second and a person never
 * catches at all, because nobody clicks all 36.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Collection handle a nav href points at, or undefined if it points elsewhere. */
function collectionHandle(href: string): string | undefined {
  const match = /^\/collections\/([^/?#]+)/.exec(href);
  return match?.[1];
}

function everyNavLink(): { label: string; href: string }[] {
  return NAVIGATION.flatMap((panel) => [
    { label: panel.label, href: panel.href },
    ...panel.links,
    ...(panel.columns?.flatMap((column) => column.links) ?? []),
    ...(panel.tiles ?? []),
  ]);
}

/**
 * Collections the menus advertise that do not exist yet.
 *
 * These are editorial groupings — occasions, edits, campaign names in our own
 * voice — with no facet behind them and, at this catalogue size, nothing to put
 * in them. They are listed rather than silently tolerated: the list is the
 * backlog, and it is the thing to shorten.
 *
 * **Do not add to this list to make the test pass.** A new dead link is a bug.
 * The only correct reasons to touch it are removing a handle because the
 * collection now exists, or removing a handle along with the menu entry.
 */
const NOT_YET_AUTHORED = new Set([
  "alap",
  "back-in-stock",
  "bridal",
  "chhaya",
  "collectors-edit",
  "everyday",
  "festive",
  "first-saree",
  "fresh-off-the-loom",
  "freshly-tailored",
  "gifts",
  "heirloom",
  "kinara",
  "lightweight",
  "menswear",
  "modern-classics",
  "nirantar",
  "occasion",
  "office-travel",
  "prabhat",
  "ritu",
  "seasonal",
  "signatures",
  "taar",
  "udgam",
  "womenswear",
]);

describe("navigation", () => {
  const handles = new Set(COLLECTIONS.map((collection) => collection.handle));

  it("links only to collections that exist, or to ones known to be unwritten", () => {
    const dead = everyNavLink()
      .map((link) => ({ ...link, handle: collectionHandle(link.href) }))
      .filter(
        (link) =>
          link.handle &&
          !handles.has(link.handle) &&
          !NOT_YET_AUTHORED.has(link.handle),
      );

    assert.deepEqual(
      dead.map((link) => `${link.label} → ${link.href}`),
      [],
      "these menu links resolve to nothing",
    );
  });

  it("keeps the unwritten list honest — no handle on it that now exists", () => {
    const stale = [...NOT_YET_AUTHORED].filter((handle) => handles.has(handle));
    assert.deepEqual(
      stale,
      [],
      "these collections exist now and should come off NOT_YET_AUTHORED",
    );
  });

  it("keeps the unwritten list honest — no handle on it the menus dropped", () => {
    const linked = new Set(
      everyNavLink()
        .map((link) => collectionHandle(link.href))
        .filter((handle): handle is string => Boolean(handle)),
    );
    const orphaned = [...NOT_YET_AUTHORED].filter((handle) => !linked.has(handle));
    assert.deepEqual(
      orphaned,
      [],
      "nothing links to these any more — take them off NOT_YET_AUTHORED",
    );
  });
});
