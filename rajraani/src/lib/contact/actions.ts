"use server";

import { db } from "../db/client.ts";
import { headers } from "next/headers";
import { createRateLimit } from "../rate-limit";

const permit = createRateLimit(5, 10 * 60 * 1000);

/**
 * The contact form's submit.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * This exists so the form is not a lie.
 *
 * The reference site's contact page carries a name / email / message form, and
 * matching the page meant carrying one too. A form that posts nowhere is worse
 * than no form: somebody writes in about a piece they are about to spend a lot
 * of money on, sees "thank you", and hears nothing back — and concludes they
 * were ignored rather than that the button was decorative.
 *
 * So it writes to `enquiry`. There is no mail transport in this build and no
 * admin inbox yet (HANDOFF §5.8.1), which means messages are STORED AND NOT
 * DELIVERED. That is a real gap, not a resolved one — until the inbox screen
 * exists somebody has to read the table.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type EnquiryResult =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "error"; message: string };

/**
 * Deliberately permissive.
 *
 * Everything before an `@`, an `@`, then something with a dot in it. Stricter
 * patterns reject real addresses — apostrophes, plus-addressing, new TLDs — and
 * the cost of a bad address reaching the table is that one message cannot be
 * answered, while the cost of rejecting a good one is a customer who cannot
 * reach us at all.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = { name: 120, email: 200, message: 5000 } as const;

export async function submitEnquiryAction(
  _previous: EnquiryResult,
  formData: FormData,
): Promise<EnquiryResult> {
  const list = await headers();
  const address = list.get("x-forwarded-for")?.split(",")[0]?.trim() || list.get("x-real-ip") || "unknown";
  if (!permit(address)) return { status: "error", message: "Please wait a few minutes before sending another message." };
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all three fields." };
  }
  if (!EMAIL.test(email)) {
    return {
      status: "error",
      message: "That email address does not look right — please check it.",
    };
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return { status: "error", message: "That message is longer than we can accept." };
  }

  try {
    db()
      .prepare(
        `INSERT INTO enquiry (name, email, message, created_at)
         VALUES (?, ?, ?, ?)`,
      )
      .run(name, email, message, new Date().toISOString());
  } catch {
    // The reason is deliberately not passed to the browser: a database error
    // message is an information leak and is no use to the person writing in.
    return {
      status: "error",
      message: "Something went wrong at our end. Please email us instead.",
    };
  }

  return { status: "sent" };
}
