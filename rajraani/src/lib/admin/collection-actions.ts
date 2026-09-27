"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { db, transaction } from "../db/client.ts";
import { rawCollection, recordChange } from "./history.ts";

export type CollectionSaveResult = { ok: true } | { ok: false; error: string };

/**
 * Change a collection's name and introduction.
 *
 * Which pieces a collection holds is not edited here: most collections fill
 * themselves from the pieces' own details ("every Katan silk piece"), so the
 * way to put a piece in one is to describe the piece correctly.
 */
export async function saveCollectionAction(
  handle: string,
  title: string,
  intro: string,
): Promise<CollectionSaveResult> {
  const admin = await requireAdmin();
  if (!title.trim()) return { ok: false, error: "A collection needs a name." };
  if (title.length > 80) return { ok: false, error: "Keep the name under 80 characters." };
  if (intro.length > 1200) return { ok: false, error: "Keep the introduction under 1,200 characters." };

  const before = rawCollection(handle);
  const result = db()
    .prepare("UPDATE collection SET title = ?, seo_intro = ? WHERE handle = ?")
    .run(title.trim(), intro.trim(), handle);
  if (Number(result.changes) !== 1) return { ok: false, error: "That collection no longer exists." };
  recordChange({ kind: "collection", target: handle, label: `Collection: ${title.trim()}`, who: admin.email, before, after: rawCollection(handle) });

  // The name can appear in menus and breadcrumbs across the site.
  revalidatePath("/", "layout");
  return { ok: true };
}

/** The filter groups a collection can fill itself by. Price is refused by the schema. */
const FILTER_GROUPS = ["garment", "weave", "fabric", "colour", "motif", "zari"] as const;

function cleanFilters(facets: Record<string, string[]>): Record<string, string[]> | string {
  const out: Record<string, string[]> = {};
  for (const [group, values] of Object.entries(facets ?? {})) {
    if (!(FILTER_GROUPS as readonly string[]).includes(group)) return "Unknown filter.";
    const picked = [...new Set(values.filter((value) => /^[a-z0-9_-]+$/.test(value)))];
    if (picked.length) out[group] = picked;
  }
  if (!Object.keys(out).length) return "Choose at least one filter, e.g. a weave or a fabric.";
  return out;
}

export type CreateCollectionResult = { ok: true; handle: string } | { ok: false; error: string };

/**
 * A new collection: hand-picked pieces, or one that fills itself from filters.
 * It starts empty (hand-picked) or already filled (filters), and is reachable
 * at /collections/<handle> straight away — add it to the Menu to link to it.
 */
export async function createCollectionAction(input: {
  title: string;
  intro: string;
  kind: "edit" | "facet";
  facets?: Record<string, string[]>;
}): Promise<CreateCollectionResult> {
  const admin = await requireAdmin();
  const title = input.title.trim();
  if (!title) return { ok: false, error: "Give the collection a name." };
  if (title.length > 80) return { ok: false, error: "Keep the name under 80 characters." };
  if (input.intro.length > 1200) return { ok: false, error: "Keep the introduction under 1,200 characters." };

  let facetsJson: string | null = null;
  if (input.kind === "facet") {
    const facets = cleanFilters(input.facets ?? {});
    if (typeof facets === "string") return { ok: false, error: facets };
    facetsJson = JSON.stringify(facets);
  }

  const base =
    title.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "collection";
  let handle = base;
  for (let n = 2; db().prepare("SELECT 1 FROM collection WHERE handle = ?").get(handle); n++) handle = `${base}-${n}`;

  const position = (db().prepare("SELECT COALESCE(MAX(position), 0) + 1 AS next FROM collection").get() as { next: number }).next;
  db()
    .prepare("INSERT INTO collection (handle, title, seo_intro, kind, facets_json, campaign_slug, position) VALUES (?, ?, ?, ?, ?, NULL, ?)")
    .run(handle, title, input.intro.trim(), input.kind, facetsJson, position);

  recordChange({
    kind: "collection",
    target: handle,
    label: `Collection: ${title}`,
    who: admin.email,
    before: null,
    after: rawCollection(handle),
    summary: input.kind === "facet" ? "New collection that fills itself" : "New hand-picked collection",
  });
  revalidatePath("/", "layout");
  return { ok: true, handle };
}

/** Replace a hand-picked collection's pieces, in this order. */
export async function setCollectionPiecesAction(handle: string, productIds: number[]): Promise<CollectionSaveResult> {
  const admin = await requireAdmin();
  const row = db().prepare("SELECT kind, title FROM collection WHERE handle = ?").get(handle) as { kind: string; title: string } | undefined;
  if (!row) return { ok: false, error: "That collection no longer exists." };
  if (row.kind === "facet") return { ok: false, error: "This collection fills itself — change its filters instead." };
  const ids = [...new Set(productIds.filter((id) => Number.isInteger(id)))];
  if (ids.length > 500) return { ok: false, error: "That is more pieces than a collection can hold." };

  const before = rawCollection(handle);
  transaction(() => {
    db().prepare("DELETE FROM collection_product WHERE collection_handle = ?").run(handle);
    ids.forEach((id, position) =>
      db()
        .prepare("INSERT INTO collection_product (collection_handle, product_id, position) SELECT ?, id, ? FROM product WHERE id = ?")
        .run(handle, position, id),
    );
  });
  recordChange({
    kind: "collection",
    target: handle,
    label: `Collection: ${row.title}`,
    who: admin.email,
    before,
    after: rawCollection(handle),
    summary: `Pieces changed — now ${ids.length}`,
  });
  revalidatePath("/", "layout");
  return { ok: true };
}

/** Change which filters a self-filling collection uses. */
export async function setCollectionFiltersAction(
  handle: string,
  facets: Record<string, string[]>,
): Promise<CollectionSaveResult> {
  const admin = await requireAdmin();
  const row = db().prepare("SELECT kind, title FROM collection WHERE handle = ?").get(handle) as { kind: string; title: string } | undefined;
  if (!row) return { ok: false, error: "That collection no longer exists." };
  if (row.kind !== "facet") return { ok: false, error: "This collection is hand-picked — choose its pieces instead." };
  const clean = cleanFilters(facets);
  if (typeof clean === "string") return { ok: false, error: clean };

  const before = rawCollection(handle);
  db().prepare("UPDATE collection SET facets_json = ? WHERE handle = ?").run(JSON.stringify(clean), handle);
  recordChange({
    kind: "collection",
    target: handle,
    label: `Collection: ${row.title}`,
    who: admin.email,
    before,
    after: rawCollection(handle),
    summary: "Filters changed",
  });
  revalidatePath("/", "layout");
  return { ok: true };
}
