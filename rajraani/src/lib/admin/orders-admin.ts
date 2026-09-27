import "server-only";

import { db } from "../db/client.ts";

/**
 * Orders, as the shop owner reads them.
 *
 * The Orders screen used to be a mock-up: invented customers, "₹24.5M total
 * volume", "1,248 orders" — on a shop that had taken none. A non-technical
 * owner has no way to tell a mock-up from the truth, so a mock-up of money is
 * worse than an empty screen. This reads `customer_order` and nothing else.
 */

import type { OrderStatus } from "./order-words.ts";

export { STATUS_WORDS, type OrderStatus } from "./order-words.ts";

export type AdminOrder = {
  id: number;
  reference: string;
  status: OrderStatus;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalMinor: number;
  shippingMinor: number;
  createdAt: string;
  paidAt: string | null;
  dispatchedAt: string | null;
  tracking: string | null;
  notes: string | null;
  items: { title: string; poeticName: string; handle: string; quantity: number; lineTotalMinor: number }[];
};

type OrderRow = {
  id: number;
  reference: string;
  status: OrderStatus;
  full_name: string;
  email: string;
  phone: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  state: string;
  postcode: string;
  total_minor: number;
  shipping_minor: number;
  created_at: string;
  paid_at: string | null;
  dispatched_at: string | null;
  tracking: string | null;
  notes: string | null;
};

type ItemRow = {
  order_id: number;
  title: string;
  poetic_name: string;
  handle: string;
  quantity: number;
  line_total_minor: number;
};

export function listOrders(): AdminOrder[] {
  const orders = db()
    .prepare(
      `SELECT id, reference, status, full_name, email, phone, address_line1, address_line2,
              city, state, postcode, total_minor, shipping_minor, created_at, paid_at,
              dispatched_at, tracking, notes
         FROM customer_order ORDER BY created_at DESC LIMIT 500`,
    )
    .all() as unknown as OrderRow[];
  if (orders.length === 0) return [];

  const items = db()
    .prepare(
      `SELECT order_id, title, poetic_name, handle, quantity, line_total_minor
         FROM order_item WHERE order_id IN (${orders.map(() => "?").join(",")})`,
    )
    .all(...orders.map((order) => order.id)) as unknown as ItemRow[];

  return orders.map((row) => ({
    id: row.id,
    reference: row.reference,
    status: row.status,
    name: row.full_name,
    email: row.email,
    phone: row.phone,
    address: [row.address_line1, row.address_line2, `${row.city}, ${row.state} ${row.postcode}`]
      .filter(Boolean)
      .join("\n"),
    totalMinor: row.total_minor,
    shippingMinor: row.shipping_minor,
    createdAt: row.created_at,
    paidAt: row.paid_at,
    dispatchedAt: row.dispatched_at,
    tracking: row.tracking,
    notes: row.notes,
    items: items
      .filter((item) => item.order_id === row.id)
      .map((item) => ({
        title: item.title,
        poeticName: item.poetic_name,
        handle: item.handle,
        quantity: item.quantity,
        lineTotalMinor: item.line_total_minor,
      })),
  }));
}

/** Paid → sent. Only a paid order can be sent. */
export function markDispatched(id: number, tracking: string): boolean {
  const result = db()
    .prepare(
      `UPDATE customer_order SET status = 'dispatched', dispatched_at = ?, tracking = ?
        WHERE id = ? AND status = 'paid'`,
    )
    .run(new Date().toISOString(), tracking.trim() || null, id);
  return Number(result.changes) === 1;
}

/** Sent → delivered. */
export function markDelivered(id: number): boolean {
  const result = db()
    .prepare(`UPDATE customer_order SET status = 'delivered' WHERE id = ? AND status = 'dispatched'`)
    .run(id);
  return Number(result.changes) === 1;
}

export function saveOrderNote(id: number, notes: string): void {
  db().prepare(`UPDATE customer_order SET notes = ? WHERE id = ?`).run(notes.trim() || null, id);
}
