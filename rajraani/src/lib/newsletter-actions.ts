"use server";

import { headers } from "next/headers";

import { EMAIL, subscribe } from "./newsletter.ts";

/**
 * The public sign-up, used by the footer form and the pop-up.
 *
 * Deliberately says the same thing whether the address is new or already on
 * the list, so the form cannot be used to find out who has signed up. A light
 * per-address limit stops a script filling the list.
 */

export type SubscribeResult = { ok: true } | { ok: false; error: string };

const recent = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 10;

export async function subscribeAction(email: string, source: "footer" | "popup"): Promise<SubscribeResult> {
  if (typeof email !== "string" || !EMAIL.test(email.trim()) || email.length > 200) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  const list = await headers();
  const address = list.get("x-forwarded-for")?.split(",")[0]?.trim() || list.get("x-real-ip") || "unknown";
  const now = Date.now();
  const times = (recent.get(address) ?? []).filter((at) => now - at < WINDOW_MS);
  if (times.length >= LIMIT) return { ok: false, error: "Please try again in a few minutes." };
  recent.set(address, [...times, now]);

  subscribe(email, source === "popup" ? "popup" : "footer");
  return { ok: true };
}
