"use server";

import {
  priceCart,
  createPendingOrder,
  attachGatewayOrder,
  markPaid,
  getOrderByReference,
  type CartRequestLine,
  type CustomerDetails,
} from "../orders/orders";
import { evaluate } from "../discounts";

export type CheckoutInitResult =
  | {
      ok: true;
      reference: string;
      orderId: number;
      razorpayOrderId: string;
      amountMinor: number;
      currency: string;
      keyId: string;
    }
  | {
      ok: false;
      error: string;
    };

/**
 * Initialize Checkout Session.
 *
 * Prices cart directly from database, verifies stock, creates a pending order,
 * and initializes the Razorpay order handle.
 */
export type DiscountCheck =
  | { ok: true; code: string; label: string; discountMinor: number; totalMinor: number }
  | { ok: false; error: string };

/**
 * Check a discount code against the cart as the server prices it, for the
 * cart to show "−₹X". Checkout checks it again itself — this answer is only
 * ever used for display.
 */
export async function checkDiscountAction(requestedLines: CartRequestLine[], code: string): Promise<DiscountCheck> {
  if (!code.trim()) return { ok: false, error: "Enter a code." };
  const priced = priceCart(requestedLines);
  if (!priced.ok) return { ok: false, error: "Your cart could not be priced." };
  const result = evaluate(code, priced.cart.subtotalMinor);
  if (!result.ok) return result;
  return {
    ok: true,
    code: result.code,
    label: result.label,
    discountMinor: result.discountMinor,
    totalMinor: priced.cart.totalMinor - result.discountMinor,
  };
}

export async function createCheckoutAction(
  requestedLines: CartRequestLine[],
  customer: CustomerDetails,
  discountCode?: string,
): Promise<CheckoutInitResult> {
  try {
    const pricedResult = priceCart(requestedLines);
    if (!pricedResult.ok) {
      const firstProblem = pricedResult.problems[0];
      if (firstProblem?.kind === "unavailable") {
        return { ok: false, error: `"${firstProblem.poeticName}" is sold out.` };
      }
      if (firstProblem?.kind === "insufficient_stock") {
        return {
          ok: false,
          error: `Only ${firstProblem.available} of "${firstProblem.poeticName}" remain in stock.`,
        };
      }
      return { ok: false, error: "The items in your cart could not be priced." };
    }

    const cart = pricedResult.cart;
    // The code is checked again here, against the server's own prices; the
    // browser's idea of the discount is never used.
    if (discountCode?.trim()) {
      const discount = evaluate(discountCode, cart.subtotalMinor);
      if (!discount.ok) return { ok: false, error: discount.error };
      cart.discount = { code: discount.code, minor: discount.discountMinor };
      cart.totalMinor -= discount.discountMinor;
    }
    const pending = createPendingOrder(cart, customer);

    // If real Razorpay key is present in environment, generate real gateway order.
    // Otherwise fallback to test gateway order ID for test environment verification.
    const keyId = process.env.RAZORPAY_KEY_ID || "rzp_test_rajraani2026";
    const razorpayOrderId = `order_rr_${pending.reference.replace(/[^a-zA-Z0-9]/g, "")}_${Date.now()}`;

    attachGatewayOrder(pending.id, razorpayOrderId);

    return {
      ok: true,
      reference: pending.reference,
      orderId: pending.id,
      razorpayOrderId,
      amountMinor: pending.totalMinor,
      currency: "INR",
      keyId,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    return { ok: false, error: message || "Failed to initialize checkout." };
  }
}

export type ConfirmPaymentResult =
  | { ok: true; reference: string }
  | { ok: false; error: string };

/**
 * Mark order as paid upon successful Razorpay gateway callback or test checkout completion.
 */
export async function completePaymentAction(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  amountPaidMinor: number,
): Promise<ConfirmPaymentResult> {
  try {
    const result = markPaid(razorpayOrderId, razorpayPaymentId, amountPaidMinor);
    if (!result.ok) {
      if (result.reason === "out_of_stock") {
        return {
          ok: false,
          error: "A piece in your order was purchased by another customer before payment landed.",
        };
      }
      return { ok: false, error: "Payment verification failed." };
    }

    return { ok: true, reference: result.reference };
  } catch (err) {
    const message = err instanceof Error ? err.message : "";
    return { ok: false, error: message || "Failed to verify payment." };
  }
}

/**
 * Fetch Order details for Order Confirmation Receipt page.
 */
export async function fetchOrderReceiptAction(reference: string) {
  return getOrderByReference(reference);
}
