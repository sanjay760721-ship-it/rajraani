import { gatewayRequest, isCapturedPayment, validSignature } from "@/lib/checkout/gateway";
import { markPaid } from "@/lib/orders/orders";

export const runtime = "nodejs";

// Razorpay retries this endpoint if a shopper closes the browser before the
// success callback reaches us. Only signed, captured payments update stock.
export async function POST(request: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret || !keyId || !keySecret) return new Response("Not configured", { status: 503 });
  const reader = request.body?.getReader();
  if (!reader) return new Response("Missing body", { status: 400 });
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > 256 * 1024) {
      await reader.cancel();
      return new Response("Too large", { status: 413 });
    }
    chunks.push(value);
  }
  const body = Buffer.concat(chunks).toString("utf8");
  if (!validSignature(body, request.headers.get("x-razorpay-signature") ?? "", secret)) {
    return new Response("Invalid signature", { status: 401 });
  }
  try {
    const event = JSON.parse(body);
    if (event.event !== "payment.captured" && event.event !== "order.paid") return new Response("Ignored");
    const payment = event.payload?.payment?.entity;
    if (!payment || typeof payment.id !== "string" || !/^pay_[a-zA-Z0-9]+$/.test(payment.id) || typeof payment.order_id !== "string" || !/^order_[a-zA-Z0-9]+$/.test(payment.order_id)) {
      return new Response("Invalid payment", { status: 400 });
    }
    const verified = await gatewayRequest({ keyId, secret: keySecret }, `payments/${payment.id}`);
    if (!isCapturedPayment(verified, payment.order_id)) return new Response("Not captured", { status: 409 });
    const result = markPaid(payment.order_id, payment.id, verified.amount);
    if (!result.ok) {
      // Unknown orders are not ours; acknowledge rather than retry forever.
      if (result.reason === "unknown_order") return new Response("Ignored");
      console.error("[payment-webhook] manual payment review required", payment.id, result.reason);
      return new Response("Needs review", { status: 409 });
    }
    return new Response("Recorded");
  } catch (error) {
    console.error("[payment-webhook] confirmation failed", error);
    return new Response("Retry later", { status: 500 });
  }
}
