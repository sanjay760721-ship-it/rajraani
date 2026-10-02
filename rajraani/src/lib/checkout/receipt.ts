import "server-only";
import { createHmac } from "node:crypto";
import { cookies } from "next/headers";
import { validSignature } from "./gateway";

const COOKIE = "rj_receipt";
const payload = (reference: string) => `receipt:${reference}`;

export async function allowReceipt(reference: string) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) throw new Error("Payment configuration is missing.");
  const signature = createHmac("sha256", secret).update(payload(reference)).digest("hex");
  (await cookies()).set(COOKIE, `${reference}.${signature}`, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
    path: "/", maxAge: 7 * 86400,
  });
}

export async function canReadReceipt(reference: string): Promise<boolean> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token || !token.startsWith(`${reference}.`)) return false;
  return validSignature(payload(reference), token.slice(reference.length + 1), process.env.RAZORPAY_KEY_SECRET ?? "");
}
