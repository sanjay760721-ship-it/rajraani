"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { db, transaction } from "../db/client.ts";
import { getMediaByFile } from "../media/library.ts";

/**
 * A piece's photographs: add, replace, reorder, remove, describe.
 *
 * Every photo comes from the media library (uploaded through /admin/api/media),
 * so what lands in `product_image.url` is always a file this site serves.
 */

export type PhotoResult = { ok: true } | { ok: false; error: string };

function mediaFor(src: string) {
  const file = src.startsWith("/media/") ? src.slice("/media/".length) : "";
  return getMediaByFile(file);
}

function productHandle(productId: number): string | undefined {
  const row = db().prepare("SELECT handle FROM product WHERE id = ?").get(productId) as { handle: string } | undefined;
  return row?.handle;
}

function refresh(productId: number) {
  const handle = productHandle(productId);
  if (handle) revalidatePath(`/products/${handle}`);
  // Listings and collection grids show the first photo.
  revalidatePath("/", "layout");
  revalidatePath(`/admin/products/${productId}`);
}

/** Near-square photos are details; everything else is an upright frame. */
function ratioOf(width: number, height: number): "portrait" | "square" {
  return Math.abs(width - height) / Math.max(width, height) < 0.08 ? "square" : "portrait";
}

/** Alt text has a 10-character floor in the schema; start from something true. */
function defaultAlt(productId: number): string {
  const row = db().prepare("SELECT title FROM product WHERE id = ?").get(productId) as { title: string } | undefined;
  return `Photograph of ${row?.title ?? "this piece"}`;
}

export async function addProductPhotoAction(productId: number, src: string): Promise<PhotoResult> {
  await requireAdmin();
  const media = mediaFor(src);
  if (!media) return { ok: false, error: "Choose a photo from the library." };

  // Fill the first planned slot that has no photo yet, if there is one: the
  // slot already says which shot belongs there.
  const empty = db()
    .prepare("SELECT id FROM product_image WHERE product_id = ? AND url IS NULL ORDER BY position LIMIT 1")
    .get(productId) as { id: number } | undefined;
  if (empty) {
    db()
      .prepare("UPDATE product_image SET url = ?, width = ?, height = ?, ratio = ? WHERE id = ?")
      .run(media.src, media.width, media.height, ratioOf(media.width, media.height), empty.id);
    refresh(productId);
    return { ok: true };
  }

  const next = db()
    .prepare("SELECT COALESCE(MAX(position), -1) + 1 AS next FROM product_image WHERE product_id = ?")
    .get(productId) as { next: number };
  db()
    .prepare(
      `INSERT INTO product_image (product_id, position, ratio, shot, alt, url, width, height)
       VALUES (?, ?, ?, 'owner', ?, ?, ?, ?)`,
    )
    .run(productId, next.next, ratioOf(media.width, media.height), media.alt.length >= 10 ? media.alt : defaultAlt(productId), media.src, media.width, media.height);
  refresh(productId);
  return { ok: true };
}

export async function replaceProductPhotoAction(imageId: number, src: string): Promise<PhotoResult> {
  await requireAdmin();
  const media = mediaFor(src);
  if (!media) return { ok: false, error: "Choose a photo from the library." };
  const row = db().prepare("SELECT product_id FROM product_image WHERE id = ?").get(imageId) as { product_id: number } | undefined;
  if (!row) return { ok: false, error: "That photo no longer exists. Reload the page." };

  db()
    .prepare("UPDATE product_image SET url = ?, width = ?, height = ?, ratio = ? WHERE id = ?")
    .run(media.src, media.width, media.height, ratioOf(media.width, media.height), imageId);
  refresh(row.product_id);
  return { ok: true };
}

export async function removeProductPhotoAction(imageId: number): Promise<PhotoResult> {
  await requireAdmin();
  const row = db().prepare("SELECT product_id FROM product_image WHERE id = ?").get(imageId) as { product_id: number } | undefined;
  if (!row) return { ok: true };
  transaction(() => {
    db().prepare("DELETE FROM product_image WHERE id = ?").run(imageId);
    renumber(row.product_id);
  });
  refresh(row.product_id);
  return { ok: true };
}

export async function moveProductPhotoAction(imageId: number, delta: -1 | 1): Promise<PhotoResult> {
  await requireAdmin();
  const row = db().prepare("SELECT product_id, position FROM product_image WHERE id = ?").get(imageId) as
    | { product_id: number; position: number }
    | undefined;
  if (!row) return { ok: false, error: "That photo no longer exists. Reload the page." };
  const other = db()
    .prepare("SELECT id FROM product_image WHERE product_id = ? AND position = ?")
    .get(row.product_id, row.position + delta) as { id: number } | undefined;
  if (!other) return { ok: true };

  // UNIQUE (product_id, position): park one row at -1 while swapping.
  transaction(() => {
    db().prepare("UPDATE product_image SET position = -1 WHERE id = ?").run(imageId);
    db().prepare("UPDATE product_image SET position = ? WHERE id = ?").run(row.position, other.id);
    db().prepare("UPDATE product_image SET position = ? WHERE id = ?").run(row.position + delta, imageId);
  });
  refresh(row.product_id);
  return { ok: true };
}

export async function describeProductPhotoAction(imageId: number, alt: string): Promise<PhotoResult> {
  await requireAdmin();
  const text = alt.trim();
  if (text.length < 10) return { ok: false, error: "Describe the photo in a few more words (at least 10 letters)." };
  if (text.length > 300) return { ok: false, error: "Keep the description under 300 characters." };
  const row = db().prepare("SELECT product_id FROM product_image WHERE id = ?").get(imageId) as { product_id: number } | undefined;
  if (!row) return { ok: false, error: "That photo no longer exists. Reload the page." };
  db().prepare("UPDATE product_image SET alt = ? WHERE id = ?").run(text, imageId);
  refresh(row.product_id);
  return { ok: true };
}

/** Close the gaps left by a removal: positions 0, 1, 2… in the current order. */
function renumber(productId: number) {
  const ids = db()
    .prepare("SELECT id FROM product_image WHERE product_id = ? ORDER BY position")
    .all(productId) as { id: number }[];
  // Two passes so no intermediate state collides with UNIQUE (product_id, position).
  ids.forEach(({ id }, index) => db().prepare("UPDATE product_image SET position = ? WHERE id = ?").run(-1000 - index, id));
  ids.forEach(({ id }, index) => db().prepare("UPDATE product_image SET position = ? WHERE id = ?").run(index, id));
}
