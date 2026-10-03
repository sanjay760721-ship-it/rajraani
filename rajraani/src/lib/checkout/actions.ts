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
import { gatewayRequest, isCapturedPayment, validSignature } from "./gateway";
import { allowReceipt, canReadReceipt } from "./receipt";
import { createRateLimit } from "../rate-limit";
import { clientAddress } from "../client-address";

const permitCheckout = createRateLimit(10, 10 * 60 * 1000);
// Generous for a shopper trying a code or two; slow for a script guessing codes.
const permitDiscount = createRateLimit(20, 10 * 60 * 1000);

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
  if (typeof code !== "string" || code.length > 100 || !code.trim()) return { ok: false, error: "Enter a code." };
  if (!permitDiscount(await clientAddress())) return { ok: false, error: "Too many tries. Please wait a few minutes." };
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
    const address = await clientAddress();
    if (!permitCheckout(address)) return { ok: false, error: "Please wait a few minutes before trying checkout again." };
    if (discountCode !== undefined && (typeof discountCode !== "string" || discountCode.length > 100)) return { ok: false, error: "Invalid discount code." };
    const keyId = process.env.RAZORPAY_KEY_ID;
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !secret) return { ok: false, error: "Checkout is temporarily unavailable. Please contact us to order." };
    if (!customer || ["email", "phone", "fullName", "addressLine1", "city", "state", "postcode"].some(
      (key) => typeof customer[key as keyof CustomerDetails] !== "string" || !customer[key as keyof CustomerDetails]!.trim() || customer[key as keyof CustomerDetails]!.length > 250,
    ) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) || !/^\d{6}$/.test(customer.postcode) ||
      (customer.addressLine2 !== undefined && (typeof customer.addressLine2 !== "string" || customer.addressLine2.length > 250))) {
      return { ok: false, error: "Please enter valid contact and delivery details." };
    }
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

    const gateway = await gatewayRequest({ keyId, secret }, "orders", {
      amount: pending.totalMinor, currency: "INR", receipt: pending.reference,
    });
    if (typeof gateway.id !== "string" || !/^order_[a-zA-Z0-9]+$/.test(gateway.id) || gateway.amount !== pending.totalMinor || gateway.currency !== "INR") {
      throw new Error("Could not initialize payment. Please try again.");
    }
    const razorpayOrderId: string = gateway.id;

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
    console.error("[checkout] initialization failed", err);
    return { ok: false, error: "Could not initialize checkout. Please try again or contact us." };
  }
}

export type ConfirmPaymentResult =
  | { ok: true; reference: string }
  | { ok: false; error: string };

/**
 * Verify the signed gateway callback and captured amount before recording payment.
 */
export async function completePaymentAction(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  signature: string,
): Promise<ConfirmPaymentResult> {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !secret || typeof razorpayOrderId !== "string" || typeof razorpayPaymentId !== "string" || typeof signature !== "string" ||
      !/^order_[a-zA-Z0-9]+$/.test(razorpayOrderId) || !/^pay_[a-zA-Z0-9]+$/.test(razorpayPaymentId) ||
      !validSignature(`${razorpayOrderId}|${razorpayPaymentId}`, signature, secret)) {
      return { ok: false, error: "Payment verification failed." };
    }
    const payment = await gatewayRequest({ keyId, secret }, `payments/${razorpayPaymentId}`);
    if (!isCapturedPayment(payment, razorpayOrderId)) return { ok: false, error: "Payment is not confirmed yet. Please contact us with your payment reference." };
    const result = markPaid(razorpayOrderId, razorpayPaymentId, payment.amount);
    if (!result.ok) {
      if (result.reason === "out_of_stock") {
        return {
          ok: false,
          error: "A piece in your order was purchased by another customer before payment landed.",
        };
      }
      return { ok: false, error: "Payment verification failed." };
    }

    await allowReceipt(result.reference);
    return { ok: true, reference: result.reference };
  } catch (err) {
    console.error("[checkout] payment confirmation failed", err);
    return { ok: false, error: "Payment could not be confirmed. Please contact us with your payment reference before retrying." };
  }
}

/**
 * Fetch Order details for Order Confirmation Receipt page.
 */
export async function fetchOrderReceiptAction(reference: string) {
  if (typeof reference !== "string" || !(await canReadReceipt(reference))) return undefined;
  return getOrderByReference(reference);
}
