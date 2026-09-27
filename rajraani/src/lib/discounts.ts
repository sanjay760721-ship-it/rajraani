import "server-only";

import { db } from "./db/client.ts";

/**
 * Discount codes: created in the admin, checked on the server at checkout.
 *
 * The browser never decides a discount. It sends the code; checkout prices the
 * cart itself, asks `evaluate` what the code is worth against that subtotal,
 * and writes the result into the order. A use is counted only when the order
 * is paid (`markPaid`), so abandoned checkouts do not eat a limited code.
 *
 * Storage note: `customer_order` has CHECK (total = subtotal + shipping). The
 * order therefore stores the subtotal *after* the discount, and records the
 * discount itself in `discount_code` / `discount_minor` beside it, so the
 * admin can show "Discount (FESTIVE10): −₹6,800" under the lines.
 */

export type DiscountKind = "percent" | "amount";

export type DiscountCode = {
  code: string;
  kind: DiscountKind;
  /** Percent (1–90) for `percent`; paise for `amount`. */
  value: number;
  minOrderMinor: number;
  startsAt: string | null;
  endsAt: string | null;
  maxUses: number | null;
  usedCount: number;
  active: boolean;
  note: string;
  createdAt: string;
};

let ready = false;

/** Tables and columns, created on first use for databases seeded before them. */
export function ensureDiscountStorage() {
  if (ready) return;
  const d = db();
  d.exec(`CREATE TABLE IF NOT EXISTS discount_code (
    code            TEXT PRIMARY KEY,
    kind            TEXT NOT NULL CHECK (kind IN ('percent', 'amount')),
    value           INTEGER NOT NULL CHECK (value > 0),
    min_order_minor INTEGER NOT NULL DEFAULT 0 CHECK (min_order_minor >= 0),
    starts_at       TEXT,
    ends_at         TEXT,
    max_uses        INTEGER CHECK (max_uses IS NULL OR max_uses > 0),
    used_count      INTEGER NOT NULL DEFAULT 0,
    active          INTEGER NOT NULL DEFAULT 1,
    note            TEXT NOT NULL DEFAULT '',
    created_at      TEXT NOT NULL,
    CHECK (kind <> 'percent' OR value <= 90)
  )`);
  const columns = (d.prepare("PRAGMA table_info(customer_order)").all() as { name: string }[]).map((column) => column.name);
  if (!columns.includes("discount_code")) d.exec("ALTER TABLE customer_order ADD COLUMN discount_code TEXT");
  if (!columns.includes("discount_minor")) {
    d.exec("ALTER TABLE customer_order ADD COLUMN discount_minor INTEGER NOT NULL DEFAULT 0 CHECK (discount_minor >= 0)");
  }
  ready = true;
}

type Row = {
  code: string;
  kind: DiscountKind;
  value: number;
  min_order_minor: number;
  starts_at: string | null;
  ends_at: string | null;
  max_uses: number | null;
  used_count: number;
  active: number;
  note: string;
  created_at: string;
};

const toCode = (row: Row): DiscountCode => ({
  code: row.code,
  kind: row.kind,
  value: row.value,
  minOrderMinor: row.min_order_minor,
  startsAt: row.starts_at,
  endsAt: row.ends_at,
  maxUses: row.max_uses,
  usedCount: row.used_count,
  active: row.active === 1,
  note: row.note,
  createdAt: row.created_at,
});

export const normaliseCode = (code: string) => code.trim().toUpperCase().replace(/\s+/g, "");

export function listDiscounts(): DiscountCode[] {
  ensureDiscountStorage();
  return (db().prepare("SELECT * FROM discount_code ORDER BY active DESC, created_at DESC").all() as unknown as Row[]).map(toCode);
}

export function getDiscount(code: string): DiscountCode | undefined {
  ensureDiscountStorage();
  const row = db().prepare("SELECT * FROM discount_code WHERE code = ?").get(normaliseCode(code)) as Row | undefined;
  return row ? toCode(row) : undefined;
}

export function saveDiscount(value: Omit<DiscountCode, "usedCount" | "createdAt">): void {
  ensureDiscountStorage();
  db()
    .prepare(
      `INSERT INTO discount_code (code, kind, value, min_order_minor, starts_at, ends_at, max_uses, active, note, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(code) DO UPDATE SET kind = excluded.kind, value = excluded.value,
         min_order_minor = excluded.min_order_minor, starts_at = excluded.starts_at, ends_at = excluded.ends_at,
         max_uses = excluded.max_uses, active = excluded.active, note = excluded.note`,
    )
    .run(
      value.code,
      value.kind,
      value.value,
      value.minOrderMinor,
      value.startsAt,
      value.endsAt,
      value.maxUses,
      value.active ? 1 : 0,
      value.note,
      new Date().toISOString(),
    );
}

export type Evaluation =
  | { ok: true; code: string; discountMinor: number; label: string }
  | { ok: false; error: string };

/** What a code takes off this subtotal, now — or why it cannot be used. */
export function evaluate(code: string, subtotalMinor: number, now = new Date()): Evaluation {
  const found = getDiscount(code);
  const sorry = "That code is not valid.";
  if (!found || !found.active) return { ok: false, error: sorry };
  if (found.startsAt && now < new Date(found.startsAt)) return { ok: false, error: sorry };
  if (found.endsAt && now > new Date(found.endsAt)) return { ok: false, error: "That code has expired." };
  if (found.maxUses !== null && found.usedCount >= found.maxUses) return { ok: false, error: "That code has been used up." };
  if (subtotalMinor < found.minOrderMinor) {
    return { ok: false, error: `That code needs an order of at least ₹${(found.minOrderMinor / 100).toLocaleString("en-IN")}.` };
  }
  const raw = found.kind === "percent" ? Math.round((subtotalMinor * found.value) / 100) : found.value;
  // Never to zero: an order must still cost something (the orders table
  // requires a positive total), and a ₹0 payment cannot go through Razorpay.
  const discountMinor = Math.max(0, Math.min(raw, subtotalMinor - 100));
  return {
    ok: true,
    code: found.code,
    discountMinor,
    label: found.kind === "percent" ? `${found.value}% off` : `₹${(found.value / 100).toLocaleString("en-IN")} off`,
  };
}

/** Count one use. Called inside the transaction that marks an order paid. */
export function recordUse(code: string | null): void {
  if (!code) return;
  ensureDiscountStorage();
  db().prepare("UPDATE discount_code SET used_count = used_count + 1 WHERE code = ?").run(code);
}
