import "server-only";
import { randomBytes } from "node:crypto";

import { db, transaction } from "../db/client.ts";
import type { Money } from "../domain/types.ts";
import { ensureDiscountStorage, recordUse } from "../discounts.ts";

/**
 * Orders.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE PRICE IS DECIDED HERE, NOT BY THE BROWSER.
 *
 * The cart lives in the customer's localStorage. They can edit it, and some
 * will. Every quantity and every product handle arriving from a browser is
 * treated as a *request*, and every rupee is looked up from the database.
 *
 * Nothing in this file accepts an amount as input. There is deliberately no
 * parameter to pass one.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * The other hazard here is stock. Inventory is 1 for almost every piece, so two
 * people can hold the same saree in their carts at once. Both will be allowed
 * to start checkout — refusing earlier would mean holding stock for abandoned
 * carts — but only the payment that lands first decrements it, inside a
 * transaction. The second gets told, before they are charged.
 */

export type CartRequestLine = {
  /** What the browser claims is in the cart. Quantity is honoured; price is not. */
  handle: string;
  quantity: number;
};

export type PricedLine = {
  productId: number;
  handle: string;
  title: string;
  poeticName: string;
  sku: string;
  unitPriceMinor: number;
  quantity: number;
  lineTotalMinor: number;
};

export type PricedCart = {
  lines: PricedLine[];
  subtotalMinor: number;
  shippingMinor: number;
  totalMinor: number;
  /**
   * A discount code checked on the server (discounts.ts). When present, the
   * order is written with the discount taken off (see createPendingOrder).
   */
  discount?: { code: string; minor: number };
};

export type PricingProblem =
  | { kind: "empty" }
  | { kind: "unknown_product"; handle: string }
  | { kind: "unavailable"; handle: string; poeticName: string }
  | { kind: "insufficient_stock"; handle: string; poeticName: string; available: number };

export type PricingResult =
  | { ok: true; cart: PricedCart }
  | { ok: false; problems: PricingProblem[] };

const MAX_QUANTITY_PER_LINE = 20;

/**
 * Price a cart from the database.
 *
 * Returns every problem rather than the first, so a shopper with two sold-out
 * pieces is told about both at once instead of discovering them one refresh at
 * a time.
 */
export function priceCart(requested: readonly CartRequestLine[]): PricingResult {
  const problems: PricingProblem[] = [];

  if (!Array.isArray(requested) || requested.length === 0 || requested.length > 50 || requested.some(
    (item) => !item || typeof item.handle !== "string" || item.handle.length > 200 || !Number.isSafeInteger(item.quantity) || item.quantity < 1 || item.quantity > MAX_QUANTITY_PER_LINE,
  )) return { ok: false, problems: [{ kind: "empty" }] };

  // Merge duplicate handles before checking stock. Separate lines must not
  // each pass the same inventory check while their combined quantity exceeds it.
  const merged = new Map<string, number>();
  for (const item of requested) merged.set(item.handle, (merged.get(item.handle) ?? 0) + item.quantity);

  const lookup = db().prepare(
    `SELECT id, handle, title, poetic_name, sku, price_minor, inventory_quantity
       FROM product WHERE handle = ? AND published = 1`,
  );

  const lines: PricedLine[] = [];

  for (const [handle, requestedQuantity] of merged) {
    const item = { handle, quantity: requestedQuantity };
    // Quantities were validated and duplicate handles combined above.
    const quantity = item.quantity;
    if (quantity > MAX_QUANTITY_PER_LINE) return { ok: false, problems: [{ kind: "empty" }] };

    const row = lookup.get(item.handle) as unknown as
      | {
          id: number;
          handle: string;
          title: string;
          poetic_name: string;
          sku: string;
          price_minor: number;
          inventory_quantity: number;
        }
      | undefined;

    if (!row) {
      // Unpublished counts as unknown: a draft must not be purchasable by
      // anyone who guessed its handle.
      problems.push({ kind: "unknown_product", handle: item.handle });
      continue;
    }

    if (row.inventory_quantity <= 0) {
      problems.push({
        kind: "unavailable",
        handle: row.handle,
        poeticName: row.poetic_name,
      });
      continue;
    }

    if (row.inventory_quantity < quantity) {
      problems.push({
        kind: "insufficient_stock",
        handle: row.handle,
        poeticName: row.poetic_name,
        available: row.inventory_quantity,
      });
      continue;
    }

    lines.push({
      productId: row.id,
      handle: row.handle,
      title: row.title,
      poeticName: row.poetic_name,
      sku: row.sku,
      // From the database. Always.
      unitPriceMinor: row.price_minor,
      quantity,
      lineTotalMinor: row.price_minor * quantity,
    });
  }

  if (problems.length > 0) return { ok: false, problems };

  const subtotalMinor = lines.reduce((total, line) => total + line.lineTotalMinor, 0);
  // Complimentary across India, with no threshold. The column exists so adding
  // a charge later is not a migration of historical orders.
  const shippingMinor = 0;

  return {
    ok: true,
    cart: {
      lines,
      subtotalMinor,
      shippingMinor,
      totalMinor: subtotalMinor + shippingMinor,
    },
  };
}

export type CustomerDetails = {
  email: string;
  phone: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postcode: string;
};

export type DraftOrder = {
  id: number;
  reference: string;
  totalMinor: number;
};

/**
 * A human-facing reference with a random, unguessable suffix.
 *
 * Avoid exposing the row id or order count in customer URLs.
 */
function nextReference(): string {
  const year = new Date().getFullYear();
  return `RJ-${year}-${randomBytes(12).toString("hex").toUpperCase()}`;
}

/**
 * Create a pending order.
 *
 * Pending is not a sale. It records intent and gives the payment gateway
 * something to attach to. Stock is NOT decremented here — see `markPaid`.
 */
export function createPendingOrder(
  cart: PricedCart,
  customer: CustomerDetails,
): DraftOrder {
  ensureDiscountStorage();
  // The orders table requires total = subtotal + shipping, so the stored
  // subtotal is the one after the discount; the discount sits beside it.
  const discountMinor = cart.discount?.minor ?? 0;
  const storedSubtotal = cart.subtotalMinor - discountMinor;
  return transaction(() => {
    const reference = nextReference();
    const now = new Date().toISOString();

    const result = db()
      .prepare(
        `INSERT INTO customer_order (
           reference, email, phone, full_name,
           address_line1, address_line2, city, state, postcode, country,
           subtotal_minor, shipping_minor, total_minor, currency,
           status, created_at, discount_code, discount_minor
         ) VALUES (?,?,?,?,?,?,?,?,?,'IN',?,?,?,'INR','pending',?,?,?)`,
      )
      .run(
        reference,
        customer.email.trim().toLowerCase(),
        customer.phone.trim(),
        customer.fullName.trim(),
        customer.addressLine1.trim(),
        customer.addressLine2?.trim() || null,
        customer.city.trim(),
        customer.state.trim(),
        customer.postcode.trim(),
        storedSubtotal,
        cart.shippingMinor,
        storedSubtotal + cart.shippingMinor,
        now,
        cart.discount?.code ?? null,
        discountMinor,
      );

    const orderId = Number(result.lastInsertRowid);

    const insertItem = db().prepare(
      `INSERT INTO order_item (
         order_id, product_id, handle, title, poetic_name, sku,
         unit_price_minor, quantity, line_total_minor
       ) VALUES (?,?,?,?,?,?,?,?,?)`,
    );

    for (const line of cart.lines) {
      insertItem.run(
        orderId,
        line.productId,
        line.handle,
        line.title,
        line.poeticName,
        line.sku,
        line.unitPriceMinor,
        line.quantity,
        line.lineTotalMinor,
      );
    }

    return { id: orderId, reference, totalMinor: storedSubtotal + cart.shippingMinor };
  });
}

export function attachGatewayOrder(orderId: number, razorpayOrderId: string): void {
  db()
    .prepare(`UPDATE customer_order SET razorpay_order_id = ? WHERE id = ?`)
    .run(razorpayOrderId, orderId);
}

export type MarkPaidResult =
  | { ok: true; reference: string; alreadyRecorded: boolean }
  | { ok: false; reason: "unknown_order" | "amount_mismatch" | "out_of_stock" };

/**
 * Record a verified payment and decrement stock, atomically.
 *
 * Only ever called after the gateway signature has been verified. It re-checks
 * two things regardless:
 *
 * 1. **The amount paid matches the order total.** Belt and braces against a
 *    tampered or mismatched gateway callback.
 * 2. **Stock is still there.** Between starting checkout and paying, someone
 *    else may have bought the same one-of-one piece. Decrementing inside the
 *    transaction with a `WHERE inventory_quantity >= quantity` guard means the
 *    second payment cannot take stock below zero — the row simply does not
 *    update, and the caller is told to refund.
 *
 * Idempotent: a webhook delivered twice finds the payment already recorded and
 * reports success without decrementing stock again. Gateways retry, always.
 */
export function markPaid(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  amountPaidMinor: number,
): MarkPaidResult {
  return transaction(() => {
    const order = db()
      .prepare(
        `SELECT id, reference, total_minor, status, razorpay_payment_id
           FROM customer_order WHERE razorpay_order_id = ?`,
      )
      .get(razorpayOrderId) as unknown as
      | {
          id: number;
          reference: string;
          total_minor: number;
          status: string;
          razorpay_payment_id: string | null;
        }
      | undefined;

    if (!order) return { ok: false, reason: "unknown_order" } as const;

    if (order.status === "paid" || order.razorpay_payment_id) {
      return { ok: true, reference: order.reference, alreadyRecorded: true } as const;
    }

    if (amountPaidMinor !== order.total_minor) {
      return { ok: false, reason: "amount_mismatch" } as const;
    }

    const items = db()
      .prepare(
        `SELECT product_id, quantity FROM order_item WHERE order_id = ?`,
      )
      .all(order.id) as unknown as { product_id: number | null; quantity: number }[];

    const decrement = db().prepare(
      `UPDATE product SET inventory_quantity = inventory_quantity - ?
        WHERE id = ? AND inventory_quantity >= ?`,
    );

    for (const item of items) {
      if (item.product_id === null) continue;
      const result = decrement.run(item.quantity, item.product_id, item.quantity);
      if (Number(result.changes) === 0) {
        // Someone else got there first. Throwing rolls the whole transaction
        // back, so no partial decrement and no order marked paid.
        throw new OutOfStockError();
      }
    }

    db()
      .prepare(
        `UPDATE customer_order
            SET status = 'paid', razorpay_payment_id = ?, paid_at = ?
          WHERE id = ?`,
      )
      .run(razorpayPaymentId, new Date().toISOString(), order.id);

    // A discount use counts once the order is paid, not when checkout starts.
    ensureDiscountStorage();
    const used = db().prepare('SELECT discount_code FROM customer_order WHERE id = ?').get(order.id) as { discount_code: string | null } | undefined;
    recordUse(used?.discount_code ?? null);

    return { ok: true, reference: order.reference, alreadyRecorded: false } as const;
  });
}

/** Thrown inside the payment transaction when stock vanished mid-checkout. */
export class OutOfStockError extends Error {
  constructor() {
    super("A piece in this order sold before the payment completed");
    this.name = "OutOfStockError";
  }
}

export function markFailed(razorpayOrderId: string): void {
  db()
    .prepare(
      `UPDATE customer_order SET status = 'failed'
        WHERE razorpay_order_id = ? AND status = 'pending'`,
    )
    .run(razorpayOrderId);
}

export type OrderSummary = {
  reference: string;
  status: string;
  totalMinor: number;
  fullName: string;
  email: string;
  createdAt: string;
  items: { poeticName: string; title: string; quantity: number; lineTotalMinor: number }[];
};

export function getOrderByReference(reference: string): OrderSummary | undefined {
  const order = db()
    .prepare(
      `SELECT reference, status, total_minor, full_name, email, created_at
         FROM customer_order WHERE reference = ?`,
    )
    .get(reference) as unknown as
    | {
        reference: string;
        status: string;
        total_minor: number;
        full_name: string;
        email: string;
        created_at: string;
      }
    | undefined;

  if (!order) return undefined;

  const items = db()
    .prepare(
      `SELECT poetic_name, title, quantity, line_total_minor
         FROM order_item WHERE order_id =
           (SELECT id FROM customer_order WHERE reference = ?)`,
    )
    .all(reference) as unknown as {
    poetic_name: string;
    title: string;
    quantity: number;
    line_total_minor: number;
  }[];

  return {
    reference: order.reference,
    status: order.status,
    totalMinor: order.total_minor,
    fullName: order.full_name,
    email: order.email,
    createdAt: order.created_at,
    items: items.map((item) => ({
      poeticName: item.poetic_name,
      title: item.title,
      quantity: item.quantity,
      lineTotalMinor: item.line_total_minor,
    })),
  };
}

export function money(minorUnits: number): Money {
  return { minorUnits, currency: "INR" };
}
