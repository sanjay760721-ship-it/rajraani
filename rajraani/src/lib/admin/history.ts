import "server-only";

import { db } from "../db/client.ts";
import { getProductForEdit, saveProduct, setPublished, type ProductInput } from "../data/admin-queries.ts";

/**
 * Recent changes, and putting one back.
 *
 * Every save in the admin records what it changed *from*, in plain words, so
 * the owner can see who changed what and undo a mistake with one click. The
 * alternative — "be careful" — is not a safety net for someone who does not
 * build websites.
 *
 * What is recorded is the stored value itself (a `setting` row, a `page` row,
 * a product's editable fields), not a diff, so putting it back is exact. A put
 * back is itself a change, so it can be put back too.
 *
 * Some changes are recorded but cannot be put back from here — a sent order, a
 * deleted piece, photo moves — and the list says so.
 */

export type ChangeKind = "setting" | "page" | "collection" | "product" | "stock" | "visibility" | "note";

export type Change = {
  id: number;
  kind: ChangeKind;
  target: string;
  label: string;
  summary: string;
  who: string;
  createdAt: string;
  restorable: boolean;
  /** How many later changes touch the same thing (putting this back undoes them too). */
  laterOnSameTarget: number;
};

let ready = false;
function table() {
  if (!ready) {
    db().exec(`CREATE TABLE IF NOT EXISTS change_log (
      id          INTEGER PRIMARY KEY,
      kind        TEXT NOT NULL,
      target      TEXT NOT NULL,
      label       TEXT NOT NULL,
      summary     TEXT NOT NULL,
      before_json TEXT,
      after_json  TEXT,
      restorable  INTEGER NOT NULL DEFAULT 1,
      who         TEXT NOT NULL,
      created_at  TEXT NOT NULL
    )`);
    db().exec("CREATE INDEX IF NOT EXISTS change_log_target_idx ON change_log (kind, target, id)");
    ready = true;
  }
  return db();
}

// ── Reading current state, raw ──────────────────────────────────────────────

/** A setting row's stored JSON, or null when nothing is stored (the default shows). */
export function rawSetting(key: string): string | null {
  const row = db().prepare("SELECT value_json FROM setting WHERE key = ?").get(key) as { value_json: string } | undefined;
  return row?.value_json ?? null;
}

/** A page row as JSON, or null when the page is still its built-in seed. */
export function rawPage(slug: string): string | null {
  const row = db()
    .prepare("SELECT slug, kind, title, standfirst, sections_json, published FROM page WHERE slug = ?")
    .get(slug);
  return row ? JSON.stringify(row) : null;
}

/** A collection's name, intro, filters and hand-picked pieces — everything the admin edits. */
export function rawCollection(handle: string): string | null {
  const row = db()
    .prepare("SELECT handle, title, seo_intro, kind, facets_json, campaign_slug, position FROM collection WHERE handle = ?")
    .get(handle) as Record<string, unknown> | undefined;
  if (!row) return null;
  const pieces = (
    db().prepare("SELECT product_id FROM collection_product WHERE collection_handle = ? ORDER BY position").all(handle) as { product_id: number }[]
  ).map((piece) => piece.product_id);
  return JSON.stringify({ ...row, pieces });
}

export function rawProduct(id: number): string | null {
  const product = getProductForEdit(id);
  if (!product) return null;
  const { id: _id, ...input } = product;
  void _id;
  return JSON.stringify(input);
}

// ── Describing a change in plain words ──────────────────────────────────────

/** Every string and number in a JSON value, by path. */
function leaves(value: unknown, path = "", out = new Map<string, string>()): Map<string, string> {
  if (value === null || value === undefined) return out;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    out.set(path, String(value));
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => leaves(item, `${path}[${index}]`, out));
  } else if (typeof value === "object") {
    for (const [key, inner] of Object.entries(value)) {
      if (key === "sections_json" && typeof inner === "string") {
        try {
          leaves(JSON.parse(inner), `${path}.sections`, out);
          continue;
        } catch {
          /* fall through */
        }
      }
      leaves(inner, `${path}.${key}`, out);
    }
  }
  return out;
}

const clip = (text: string, length = 50) => (text.length > length ? `${text.slice(0, length)}…` : text);

/** "Changed “Nadi” to “Nadi, the river”" or "12 changes, including …". */
export function describe(before: string | null, after: string | null): string {
  const parse = (json: string | null) => {
    if (json === null) return null;
    try {
      return JSON.parse(json) as unknown;
    } catch {
      return json;
    }
  };
  const a = leaves(parse(before));
  const b = leaves(parse(after));
  const changed: [string, string][] = [];
  let photos = 0;
  for (const [path, value] of b) {
    const old = a.get(path);
    if (old === value) continue;
    if (/\.src$/.test(path)) photos++;
    else if (old !== undefined) changed.push([old, value]);
  }
  const added = [...b.keys()].filter((path) => !a.has(path) && !/\.src$/.test(path)).length;
  const removed = [...a.keys()].filter((path) => !b.has(path)).length;

  if (before === null && after !== null) return "Created";
  const parts: string[] = [];
  if (changed.length === 1) parts.push(`Changed “${clip(changed[0]![0])}” to “${clip(changed[0]![1])}”`);
  else if (changed.length > 1) parts.push(`${changed.length} words or settings changed, e.g. “${clip(changed[0]![0], 30)}” → “${clip(changed[0]![1], 30)}”`);
  if (photos) parts.push(`${photos} photo${photos === 1 ? "" : "s"} changed`);
  if (added && !removed) parts.push("something added");
  if (removed && !added) parts.push("something removed");
  if (added && removed) parts.push("blocks moved, added or removed");
  return parts.join("; ") || "Saved with no visible change";
}

// ── Recording ───────────────────────────────────────────────────────────────

export function recordChange(entry: {
  kind: ChangeKind;
  target: string;
  label: string;
  who: string;
  before: string | null;
  after: string | null;
  summary?: string;
  restorable?: boolean;
}): void {
  try {
    table()
      .prepare(
        `INSERT INTO change_log (kind, target, label, summary, before_json, after_json, restorable, who, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        entry.kind,
        entry.target,
        entry.label,
        entry.summary ?? describe(entry.before, entry.after),
        entry.before,
        entry.after,
        entry.restorable === false ? 0 : 1,
        entry.who,
        new Date().toISOString(),
      );
  } catch (error) {
    // The change itself has already been saved; losing its log entry must not
    // turn a successful save into an error on screen.
    console.error("[history] could not record a change", error);
  }
}

export function listChanges(limit = 200): Change[] {
  const rows = table()
    .prepare(
      `SELECT c.id, c.kind, c.target, c.label, c.summary, c.who, c.created_at, c.restorable,
              (SELECT COUNT(*) FROM change_log l WHERE l.kind = c.kind AND l.target = c.target AND l.id > c.id) AS later
         FROM change_log c ORDER BY c.id DESC LIMIT ?`,
    )
    .all(limit) as unknown as {
    id: number;
    kind: ChangeKind;
    target: string;
    label: string;
    summary: string;
    who: string;
    created_at: string;
    restorable: number;
    later: number;
  }[];
  return rows.map((row) => ({
    id: row.id,
    kind: row.kind,
    target: row.target,
    label: row.label,
    summary: row.summary,
    who: row.who,
    createdAt: row.created_at,
    restorable: row.restorable === 1,
    laterOnSameTarget: row.later,
  }));
}

// ── Putting back ────────────────────────────────────────────────────────────

function writeSetting(key: string, json: string | null) {
  if (json === null) db().prepare("DELETE FROM setting WHERE key = ?").run(key);
  else
    db()
      .prepare(
        `INSERT INTO setting (key, value_json, updated_at) VALUES (?, ?, datetime('now'))
         ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`,
      )
      .run(key, json);
}

/** Make a collection match a recorded state; null means it did not exist. */
function writeCollection(handle: string, json: string | null) {
  if (json === null) {
    db().prepare("DELETE FROM collection WHERE handle = ?").run(handle);
    return;
  }
  const value = JSON.parse(json) as {
    title: string;
    seo_intro: string;
    kind?: string;
    facets_json?: string | null;
    campaign_slug?: string | null;
    position?: number;
    pieces?: number[];
  };
  const exists = db().prepare("SELECT 1 FROM collection WHERE handle = ?").get(handle);
  if (exists) {
    db().prepare("UPDATE collection SET title = ?, seo_intro = ? WHERE handle = ?").run(value.title, value.seo_intro, handle);
    if (value.kind === "facet" && value.facets_json) {
      db().prepare("UPDATE collection SET facets_json = ? WHERE handle = ?").run(value.facets_json, handle);
    }
  } else {
    db()
      .prepare("INSERT INTO collection (handle, title, seo_intro, kind, facets_json, campaign_slug, position) VALUES (?, ?, ?, ?, ?, ?, ?)")
      .run(handle, value.title, value.seo_intro, value.kind ?? "edit", value.facets_json ?? null, value.campaign_slug ?? null, value.position ?? 0);
  }
  // Older log entries recorded only the name and intro; leave pieces alone then.
  if (value.pieces && value.kind !== "facet") {
    db().prepare("DELETE FROM collection_product WHERE collection_handle = ?").run(handle);
    value.pieces.forEach((id, position) =>
      db().prepare("INSERT OR IGNORE INTO collection_product (collection_handle, product_id, position) VALUES (?, ?, ?)").run(handle, id, position),
    );
  }
}

function writePage(slug: string, json: string | null) {
  if (json === null) {
    db().prepare("DELETE FROM page WHERE slug = ?").run(slug);
    return;
  }
  const page = JSON.parse(json) as { kind: string; title: string; standfirst: string; sections_json: string; published: number };
  db()
    .prepare(
      `INSERT INTO page (slug, kind, title, standfirst, sections_json, published, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
       ON CONFLICT(slug) DO UPDATE SET title = excluded.title, standfirst = excluded.standfirst,
         sections_json = excluded.sections_json, published = excluded.published, updated_at = excluded.updated_at`,
    )
    .run(slug, page.kind, page.title, page.standfirst, page.sections_json, page.published);
}

/** What a put back did, in the same words as the change it undid. */
function putBackSummary(kind: ChangeKind, now: string | null, restored: string | null): string {
  try {
    if (kind === "stock") {
      const from = (JSON.parse(now ?? "{}") as { quantity: number }).quantity;
      const to = (JSON.parse(restored ?? "{}") as { quantity: number }).quantity;
      return `stock ${from} → ${to}${to === 0 ? " (sold out)" : ""}`;
    }
    if (kind === "visibility") {
      return (JSON.parse(restored ?? "{}") as { published: boolean }).published ? "shown on the shop again" : "hidden from the shop again";
    }
  } catch {
    /* fall through to the general description */
  }
  if (restored === null) return "back to the built-in version";
  const text = describe(now, restored);
  return text.charAt(0).toLowerCase() + text.slice(1);
}

/**
 * Put a change back: make the thing look as it did before that change.
 * Returns the paths to refresh, or an error in words.
 */
export function restoreChange(id: number, who: string): { ok: true; refresh: string[] } | { ok: false; error: string } {
  const row = table()
    .prepare("SELECT kind, target, label, before_json, restorable FROM change_log WHERE id = ?")
    .get(id) as { kind: ChangeKind; target: string; label: string; before_json: string | null; restorable: number } | undefined;
  if (!row) return { ok: false, error: "That change is no longer in the list." };
  if (!row.restorable) return { ok: false, error: "This kind of change cannot be put back from here." };

  const { kind, target, before_json: before } = row;
  let now: string | null = null;
  let refresh: string[] = ["/"];

  switch (kind) {
    case "setting":
      now = rawSetting(target);
      writeSetting(target, before);
      refresh = ["/"];
      break;
    case "page":
      now = rawPage(target);
      writePage(target, before);
      refresh = [`/pages/${target}`];
      break;
    case "collection": {
      now = rawCollection(target);
      writeCollection(target, before);
      refresh = [`/collections/${target}`];
      break;
    }
    case "product": {
      const productId = Number(target);
      now = rawProduct(productId);
      if (!before || !now) return { ok: false, error: "That piece no longer exists." };
      saveProduct(JSON.parse(before) as ProductInput, productId);
      break;
    }
    case "stock": {
      const productId = Number(target);
      const current = db().prepare("SELECT inventory_quantity AS q FROM product WHERE id = ?").get(productId) as { q: number } | undefined;
      if (!current || !before) return { ok: false, error: "That piece no longer exists." };
      now = JSON.stringify({ quantity: current.q });
      db().prepare("UPDATE product SET inventory_quantity = ? WHERE id = ?").run((JSON.parse(before) as { quantity: number }).quantity, productId);
      break;
    }
    case "visibility": {
      const productId = Number(target);
      const current = db().prepare("SELECT published FROM product WHERE id = ?").get(productId) as { published: number } | undefined;
      if (!current || !before) return { ok: false, error: "That piece no longer exists." };
      now = JSON.stringify({ published: current.published === 1 });
      setPublished(productId, (JSON.parse(before) as { published: boolean }).published);
      break;
    }
    default:
      return { ok: false, error: "This kind of change cannot be put back from here." };
  }

  recordChange({
    kind,
    target,
    label: row.label,
    who,
    before: now,
    after: before,
    summary: `Put back: ${putBackSummary(kind, now, before)}`,
  });
  return { ok: true, refresh };
}
