import { createHmac, timingSafeEqual } from "node:crypto";

export function validSignature(payload: string, signature: string, secret: string): boolean {
  if (!secret || !/^[a-f0-9]{64}$/.test(signature)) return false;
  const expected = createHmac("sha256", secret).update(payload).digest();
  return timingSafeEqual(expected, Buffer.from(signature, "hex"));
}

export type GatewayCredentials = { keyId: string; secret: string };

export async function gatewayRequest(credentials: GatewayCredentials, path: string, body?: object) {
  const response = await fetch(`https://api.razorpay.com/v1/${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Basic ${Buffer.from(`${credentials.keyId}:${credentials.secret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error("Payment provider is unavailable. Please try again.");
  return response.json();
}

export function isCapturedPayment(payment: unknown, orderId: string): payment is { amount: number } {
  if (!payment || typeof payment !== "object") return false;
  const p = payment as Record<string, unknown>;
  return p.order_id === orderId && p.status === "captured" && p.currency === "INR" &&
    Number.isSafeInteger(p.amount) && (p.amount as number) > 0;
}
