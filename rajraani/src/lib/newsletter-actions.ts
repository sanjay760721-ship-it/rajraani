"use server";


import { EMAIL, subscribe } from "./newsletter.ts";
import { createRateLimit } from "./rate-limit.ts";
import { clientAddress } from "./client-address";

/**
 * The public sign-up, used by the footer form and the pop-up.
 *
 * Deliberately says the same thing whether the address is new or already on
 * the list, so the form cannot be used to find out who has signed up. A light
 * per-address limit stops a script filling the list.
 */

export type SubscribeResult = { ok: true } | { ok: false; error: string };

const permit = createRateLimit(10, 10 * 60 * 1000);

export async function subscribeAction(email: string, source: "footer" | "popup"): Promise<SubscribeResult> {
  if (typeof email !== "string" || !EMAIL.test(email.trim()) || email.length > 200) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  const address = await clientAddress();
  if (!permit(address)) return { ok: false, error: "Please try again in a few minutes." };

  subscribe(email, source === "popup" ? "popup" : "footer");
  return { ok: true };
}
