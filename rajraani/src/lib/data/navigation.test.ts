import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { PAGES } from "../content/sections.ts";
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

/** Editorial page slug a nav href points at, or undefined if it points elsewhere. */
function pageSlug(href: string): string | undefined {
  const match = /^\/pages\/([^/?#]+)/.exec(href);
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
const NOT_YET_AUTHORED = new Set<string>([
  /*
   * EMPTY, as of 12 Sep 2026 — and the aim is to keep it that way.
   *
   * The last four (`back-in-stock`, `bridal`, `fresh-off-the-loom`, `gifts`)
   * were authored as `edit` collections in `fixtures.ts`. Every collection the
   * menus advertise now exists, which is the first time that has been true.
   *
   * This is kept rather than deleted because the mechanism is the point: if a
   * menu entry has to go in before the collection behind it is written, it
   * goes here, in the open, with the test insisting the list stays honest in
   * both directions.
   */
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

  /*
   * The other half of the same bug, found 12 Sep 2026.
   *
   * The collection half of this file had been guarded since 10 Sep. The
   * editorial half had not, and it was in a worse state: About Us pointed at
   * five pages and every one of them 404d, Stories advertised a `/blogs`
   * section that has no route in this build at all, and Craft listed seven
   * essays of which two had been written.
   *
   * There is no NOT_YET_AUTHORED equivalent here on purpose. A collection can
   * honestly be "real but empty" while the catalogue fills; an editorial page
   * cannot — it either has words or it does not, and a menu entry to a page
   * with no words is just a 404 with a nicer label.
   */
  it("links only to editorial pages that exist", () => {
    const dead = everyNavLink()
      .map((link) => ({ ...link, slug: pageSlug(link.href) }))
      .filter((link) => link.slug && !(link.slug in PAGES));

    assert.deepEqual(
      dead.map((link) => `${link.label} → ${link.href}`),
      [],
      "these menu links resolve to nothing",
    );
  });

  it("points nowhere but at a collection or an editorial page", () => {
    const stray = everyNavLink().filter(
      (link) => !/^\/(collections|pages)\//.test(link.href),
    );

    assert.deepEqual(
      stray.map((link) => `${link.label} → ${link.href}`),
      [],
      "the menus have two destination shapes; this is neither",
    );
  });
});
