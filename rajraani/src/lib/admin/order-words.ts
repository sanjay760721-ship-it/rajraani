/** Order states in plain words. Client-safe: shared by the Orders screen. */

export type OrderStatus =
  | "pending"
  | "paid"
  | "failed"
  | "cancelled"
  | "dispatched"
  | "delivered"
  | "refunded";

/** What each status means to someone packing parcels. */
export const STATUS_WORDS: Record<OrderStatus, { label: string; hint: string; tone: "wait" | "act" | "done" | "stop" }> = {
  pending: { label: "Not paid yet", hint: "The customer started paying but has not finished. Do not send.", tone: "wait" },
  paid: { label: "Paid — to send", hint: "Paid. Pack it and send it, then mark it as sent.", tone: "act" },
  dispatched: { label: "Sent", hint: "On its way to the customer.", tone: "done" },
  delivered: { label: "Delivered", hint: "The customer has it.", tone: "done" },
  failed: { label: "Payment failed", hint: "The payment did not go through. Nothing to send.", tone: "stop" },
  cancelled: { label: "Cancelled", hint: "Cancelled. Nothing to send.", tone: "stop" },
  refunded: { label: "Refunded", hint: "Money returned to the customer.", tone: "stop" },
};

/**
 * Whether online payment really takes money. The one switch for every admin
 * screen that warns about it (Orders, Overview).
 *
 * Checkout creates real Razorpay orders and verifies every payment's signature
 * (HANDOFF §2.58), and it switches itself off when the keys are missing. So
 * online payment is live exactly when both keys are set on this server. Read
 * on the server; the screens receive it as a prop.
 */
export const PAYMENTS_LIVE = Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
