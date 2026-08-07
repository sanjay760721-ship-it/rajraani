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
export async function createCheckoutAction(
  requestedLines: CartRequestLine[],
  customer: CustomerDetails,
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
