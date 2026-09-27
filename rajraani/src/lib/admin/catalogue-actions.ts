"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { db, transaction } from "../db/client.ts";
import { getProductForEdit, saveProduct } from "../data/admin-queries.ts";
import { parseCsv, type SheetChange, type SheetPreview } from "./catalogue-sheet.ts";
import { rawProduct, recordChange } from "./history.ts";

/**
 * Catalogue tools on the Products screen: change a price in place, duplicate a
 * piece, and update many pieces at once from a spreadsheet.
 *
 * Every change goes through Recent changes, piece by piece, so a spreadsheet
 * upload can be put back one piece at a time.
 */

export type CatalogueResult = { ok: true } | { ok: false; error: string };

function piece(id: number) {
  return db().prepare("SELECT id, sku, poetic_name, title, price_minor, inventory_quantity, published FROM product WHERE id = ?").get(id) as
    | { id: number; sku: string; poetic_name: string; title: string; price_minor: number; inventory_quantity: number; published: number }
    | undefined;
}

export async function setPriceAction(id: number, rupees: number): Promise<CatalogueResult> {
  const admin = await requireAdmin();
  if (!Number.isInteger(rupees) || rupees <= 0 || rupees > 1_00_00_000) {
    return { ok: false, error: "Enter the price in whole rupees, e.g. 68000." };
  }
  const row = piece(id);
  if (!row) return { ok: false, error: "That piece no longer exists." };
  const before = rawProduct(id);
  db().prepare("UPDATE product SET price_minor = ?, updated_at = ? WHERE id = ?").run(rupees * 100, new Date().toISOString(), id);
  recordChange({
    kind: "product",
    target: String(id),
    label: `Piece: ${row.poetic_name}`,
    who: admin.email,
    before,
    after: rawProduct(id),
    summary: `Price ₹${(row.price_minor / 100).toLocaleString("en-IN")} → ₹${rupees.toLocaleString("en-IN")}`,
  });
  revalidatePath("/", "layout");
  return { ok: true };
}

export type DuplicateResult = { ok: true; id: number } | { ok: false; error: string };

/** A copy of a piece — every detail, empty photo slots, hidden until ready. */
export async function duplicateProductAction(id: number): Promise<DuplicateResult> {
  const admin = await requireAdmin();
  const source = getProductForEdit(id);
  if (!source) return { ok: false, error: "That piece no longer exists." };

  const taken = (column: "handle" | "sku", value: string) =>
    !!db().prepare(`SELECT 1 FROM product WHERE ${column} = ?`).get(value);
  let n = 1;
  let handle = `${source.handle}-copy`;
  let sku = `${source.sku}-C`;
  while (taken("handle", handle) || taken("sku", sku)) {
    n++;
    handle = `${source.handle}-copy-${n}`;
    sku = `${source.sku}-C${n}`;
  }

  const { id: _source, ...input } = source;
  void _source;
  let newId: number;
  try {
    // saveProduct runs its own transaction, so it cannot sit inside ours.
    newId = saveProduct({ ...input, handle, sku, poeticName: `${source.poeticName} (copy)`, published: false });
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Could not copy the piece." };
  }
  // The same planned photo slots, without the photos: a copy is a different
  // piece and must be photographed itself.
  const slots = db()
    .prepare("SELECT position, ratio, shot, alt, width, height FROM product_image WHERE product_id = ? ORDER BY position")
    .all(id) as { position: number; ratio: string; shot: string; alt: string; width: number; height: number }[];
  transaction(() => {
    for (const slot of slots) {
      db()
        .prepare("INSERT INTO product_image (product_id, position, ratio, shot, alt, url, width, height) VALUES (?, ?, ?, ?, ?, NULL, ?, ?)")
        .run(newId, slot.position, slot.ratio, slot.shot, slot.alt, slot.width, slot.height);
    }
  });

  recordChange({
    kind: "product",
    target: String(newId),
    label: `Piece: ${source.poeticName} (copy)`,
    who: admin.email,
    before: null,
    after: rawProduct(newId),
    summary: `New piece, copied from ${source.poeticName} (hidden until you show it)`,
    restorable: false,
  });
  revalidatePath("/admin/products");
  return { ok: true, id: newId };
}

// ── Spreadsheet ─────────────────────────────────────────────────────────────

type Planned = SheetChange & {
  id: number;
  set: { poetic_name?: string; title?: string; price_minor?: number; inventory_quantity?: number; published?: number };
};

function yesNo(value: string): number | undefined {
  const text = value.trim().toLowerCase();
  if (["yes", "y", "true", "1", "shown", "live"].includes(text)) return 1;
  if (["no", "n", "false", "0", "hidden"].includes(text)) return 0;
  return undefined;
}

/** Read the sheet and work out what would change. Nothing is written. */
function plan(csv: string): { planned: Planned[]; problems: string[]; unchanged: number } {
  const rows = parseCsv(csv);
  const problems: string[] = [];
  if (rows.length < 2) return { planned: [], problems: ["The file has no rows below the headings."], unchanged: 0 };

  const header = rows[0]!.map((cell) => cell.trim().toLowerCase());
  const col = (name: string) => header.indexOf(name.toLowerCase());
  const at = {
    code: col("Product code"),
    name: col("Name"),
    description: col("Description"),
    price: col("Price (₹)") >= 0 ? col("Price (₹)") : col("Price"),
    stock: col("In stock"),
    shown: col("On the shop"),
  };
  if (at.code < 0) return { planned: [], problems: ["There is no “Product code” column — download the spreadsheet from this screen and edit that."], unchanged: 0 };

  const planned: Planned[] = [];
  let unchanged = 0;
  const seen = new Set<string>();

  rows.slice(1).forEach((cells, index) => {
    const line = index + 2;
    const code = (cells[at.code] ?? "").trim();
    if (!code) return;
    if (seen.has(code)) {
      problems.push(`Row ${line}: product code ${code} appears twice — only the first row was used.`);
      return;
    }
    seen.add(code);
    const row = db().prepare("SELECT id, poetic_name, title, price_minor, inventory_quantity, published FROM product WHERE sku = ?").get(code) as
      | { id: number; poetic_name: string; title: string; price_minor: number; inventory_quantity: number; published: number }
      | undefined;
    if (!row) {
      problems.push(`Row ${line}: no piece has product code “${code}”. New pieces are added with “+ Add a new piece”, not by spreadsheet.`);
      return;
    }

    const change: Planned = { id: row.id, code, name: row.poetic_name, changes: [], set: {} };
    const cell = (i: number) => (i >= 0 ? (cells[i] ?? "").trim() : "");

    const name = cell(at.name);
    if (at.name >= 0 && name && name !== row.poetic_name) {
      if (name.length > 60) problems.push(`Row ${line}: the name is too long (60 letters at most).`);
      else {
        change.set.poetic_name = name;
        change.changes.push({ column: "Name", from: row.poetic_name, to: name });
      }
    }
    const description = cell(at.description);
    if (at.description >= 0 && description && description !== row.title) {
      change.set.title = description;
      change.changes.push({ column: "Description", from: row.title, to: description });
    }
    const priceText = cell(at.price).replace(/[₹,\s]/g, "");
    if (at.price >= 0 && priceText) {
      const rupees = Number(priceText);
      if (!Number.isInteger(rupees) || rupees <= 0) problems.push(`Row ${line} (${row.poetic_name}): “${cell(at.price)}” is not a price in whole rupees.`);
      else if (rupees * 100 !== row.price_minor) {
        change.set.price_minor = rupees * 100;
        change.changes.push({ column: "Price", from: `₹${(row.price_minor / 100).toLocaleString("en-IN")}`, to: `₹${rupees.toLocaleString("en-IN")}` });
      }
    }
    const stockText = cell(at.stock);
    if (at.stock >= 0 && stockText) {
      const stock = Number(stockText);
      if (!Number.isInteger(stock) || stock < 0) problems.push(`Row ${line} (${row.poetic_name}): “${stockText}” is not a number of pieces in stock.`);
      else if (stock !== row.inventory_quantity) {
        change.set.inventory_quantity = stock;
        change.changes.push({ column: "In stock", from: String(row.inventory_quantity), to: String(stock) });
      }
    }
    const shownText = cell(at.shown);
    if (at.shown >= 0 && shownText) {
      const shown = yesNo(shownText);
      if (shown === undefined) problems.push(`Row ${line} (${row.poetic_name}): “On the shop” should be yes or no.`);
      else if (shown !== row.published) {
        change.set.published = shown;
        change.changes.push({ column: "On the shop", from: row.published ? "yes" : "no", to: shown ? "yes" : "no" });
      }
    }

    if (change.changes.length) planned.push(change);
    else unchanged++;
  });

  return { planned, problems, unchanged };
}

export async function previewSheetAction(csv: string): Promise<SheetPreview> {
  await requireAdmin();
  if (csv.length > 2_000_000) return { changes: [], problems: ["That file is too large."], unchanged: 0 };
  const { planned, problems, unchanged } = plan(csv);
  return { changes: planned.map(({ code, name, changes }) => ({ code, name, changes })), problems, unchanged };
}

export async function applySheetAction(csv: string): Promise<CatalogueResult & { applied?: number }> {
  const admin = await requireAdmin();
  const { planned } = plan(csv);
  if (!planned.length) return { ok: false, error: "Nothing to change." };

  try {
    transaction(() => {
      for (const change of planned) {
        const before = rawProduct(change.id);
        const set = change.set;
        const columns = Object.keys(set) as (keyof typeof set)[];
        db()
          .prepare(`UPDATE product SET ${columns.map((column) => `${column} = ?`).join(", ")}, updated_at = ? WHERE id = ?`)
          .run(...columns.map((column) => set[column]!), new Date().toISOString(), change.id);
        recordChange({
          kind: "product",
          target: String(change.id),
          label: `Piece: ${change.set.poetic_name ?? change.name}`,
          who: admin.email,
          before,
          after: rawProduct(change.id),
          summary: `From spreadsheet: ${change.changes.map((c) => `${c.column} ${c.from} → ${c.to}`).join("; ")}`,
        });
      }
    });
  } catch (error) {
    // The database refuses anything its rules forbid (e.g. stock words in a
    // description); nothing is half-applied because this is one transaction.
    return { ok: false, error: error instanceof Error ? `Nothing was changed: ${error.message}` : "Nothing was changed." };
  }
  revalidatePath("/", "layout");
  return { ok: true, applied: planned.length };
}
