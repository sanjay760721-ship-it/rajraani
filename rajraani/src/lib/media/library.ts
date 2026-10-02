import "server-only";

import { mkdirSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

import { db } from "../db/client.ts";

/**
 * The media library: photographs the owner uploads from the admin.
 *
 * ── Where the files go ──────────────────────────────────────────────────────
 * `data/media/`, next to the database, and for the same reason: both are the
 * site's *content*, which after launch changes daily and belongs to the owner,
 * not to git. `public/` is the wrong place — Next snapshots it at build time,
 * so a file written there after a deploy is never served. Files are served by
 * `app/media/[file]/route.ts` instead, which only serves names this table
 * knows about.
 *
 * ── One upload, one web-ready master ────────────────────────────────────────
 * The owner uploads whatever the camera or phone produced. We rotate it upright
 * (EXIF), cap the long edge at 3000px — the top of the `deviceSizes` ladder, so
 * nothing larger could ever be asked for — and store WebP at quality 88. A
 * 25MB JPEG becomes roughly 1MB and still holds up on a retina hero.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const MEDIA_DIR =
  process.env.MEDIA_PATH || path.join(process.cwd(), "data", "media");

/** Served-name pattern; the route refuses anything else, so no path tricks. */
export const MEDIA_FILE = /^[0-9]+-[a-z0-9-]{1,60}\.webp$/;

const MAX_EDGE = 3000;
export const MAX_UPLOAD_BYTES = 30 * 1024 * 1024;
export const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

export type MediaItem = {
  id: number;
  file: string;
  src: string;
  originalName: string;
  width: number;
  height: number;
  bytes: number;
  alt: string;
  createdAt: string;
};

type Row = {
  id: number;
  file: string;
  original_name: string;
  width: number;
  height: number;
  bytes: number;
  alt: string;
  created_at: string;
};

let ready = false;

/**
 * The table is created on first use as well as in schema.sql.
 *
 * `schema.sql` is only applied by `npm run db:seed`; a database seeded before
 * this table existed would otherwise make every upload a 500 until someone
 * reseeded — and reseeding wipes content.
 */
function table() {
  if (!ready) {
    db().exec(`CREATE TABLE IF NOT EXISTS media (
      id            INTEGER PRIMARY KEY,
      file          TEXT NOT NULL UNIQUE,
      original_name TEXT NOT NULL,
      width         INTEGER NOT NULL,
      height        INTEGER NOT NULL,
      bytes         INTEGER NOT NULL,
      alt           TEXT NOT NULL DEFAULT '',
      created_at    TEXT NOT NULL
    )`);
    ready = true;
  }
  return db();
}

const toItem = (row: Row): MediaItem => ({
  id: row.id,
  file: row.file,
  src: `/media/${row.file}`,
  originalName: row.original_name,
  width: row.width,
  height: row.height,
  bytes: row.bytes,
  alt: row.alt,
  createdAt: row.created_at,
});

/** A filename-safe slug from whatever the camera called the file. */
function slugFrom(name: string): string {
  const base = path.parse(name).name.toLowerCase();
  const slug = base.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  return slug || "photo";
}

export function listMedia(): MediaItem[] {
  const rows = table()
    .prepare(
      `SELECT id, file, original_name, width, height, bytes, alt, created_at
       FROM media ORDER BY id DESC`,
    )
    .all() as unknown as Row[];
  return rows.map(toItem);
}

export function getMediaByFile(file: string): MediaItem | undefined {
  const row = table()
    .prepare(
      `SELECT id, file, original_name, width, height, bytes, alt, created_at
       FROM media WHERE file = ?`,
    )
    .get(file) as unknown as Row | undefined;
  return row ? toItem(row) : undefined;
}

export class UploadError extends Error {}

/** Resize, convert and store one upload. Returns the library entry. */
export async function saveUpload(
  input: Buffer,
  originalName: string,
): Promise<MediaItem> {
  if (input.byteLength > MAX_UPLOAD_BYTES) {
    throw new UploadError("That file is over 30 MB. Export a smaller copy and try again.");
  }

  let output: { data: Buffer; info: { width: number; height: number } };
  try {
    output = await sharp(input, { failOn: "error", limitInputPixels: 40_000_000 })
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 88 })
      .toBuffer({ resolveWithObject: true });
  } catch {
    throw new UploadError(
      "That file could not be read as a photograph. Use a JPEG, PNG, WebP or AVIF.",
    );
  }

  const { data, info } = output;
  if (Math.min(info.width, info.height) < 400) {
    throw new UploadError(
      `That photo is only ${info.width}×${info.height}px — too small to look sharp anywhere on the site. Use one at least 1200px wide.`,
    );
  }

  mkdirSync(MEDIA_DIR, { recursive: true });

  const database = table();
  const insert = database.prepare(
    `INSERT INTO media (file, original_name, width, height, bytes, alt, created_at)
     VALUES (?, ?, ?, ?, ?, '', ?)`,
  );
  // Insert with a placeholder name to get the id, then name the file after it:
  // ids never repeat, so two uploads called IMG_0001.jpg cannot collide.
  const placeholder = `pending-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const result = insert.run(
    placeholder,
    originalName,
    info.width,
    info.height,
    data.byteLength,
    new Date().toISOString(),
  );
  const id = Number(result.lastInsertRowid);
  const file = `${id}-${slugFrom(originalName)}.webp`;

  try {
    writeFileSync(path.join(MEDIA_DIR, file), data);
  } catch (error) {
    database.prepare("DELETE FROM media WHERE id = ?").run(id);
    throw error;
  }
  database.prepare("UPDATE media SET file = ? WHERE id = ?").run(file, id);

  return getMediaByFile(file)!;
}

export function setMediaAlt(id: number, alt: string): void {
  table().prepare("UPDATE media SET alt = ? WHERE id = ?").run(alt.trim(), id);
}

/** Read a served file. Undefined for anything the library does not own. */
export async function readMediaFile(file: string): Promise<Buffer | undefined> {
  if (!MEDIA_FILE.test(file)) return undefined;
  if (!getMediaByFile(file)) return undefined;
  try {
    // Runtime uploads live on persistent storage, not in a traced deployment.
    return await readFile(/* turbopackIgnore: true */ path.join(/* turbopackIgnore: true */ MEDIA_DIR, file));
  } catch {
    return undefined;
  }
}
