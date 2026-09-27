"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { content } from "../content/content.ts";
import { replaceEverywhere } from "./booking-links.ts";
import { rawPage, rawSetting, recordChange } from "./history.ts";

export type BookingResult = { ok: true; changed: number } | { ok: false; error: string };

/**
 * Point every "book a visit" button that uses one address at a new one.
 * Each homepage or page it touches is saved (and logged) like any other edit.
 */
export async function replaceBookingLinkAction(from: string, to: string): Promise<BookingResult> {
  const admin = await requireAdmin();
  const next = to.trim();
  if (!/^https:\/\/[^\s]+$/.test(next)) return { ok: false, error: "Paste the full booking address, starting with https://" };
  if (next === from) return { ok: false, error: "That is the address already in use." };

  let changed = 0;
  const summary = `Booking link changed to ${next}`;

  const homepage = await content.getHomepageSections();
  const home = replaceEverywhere(homepage, from, next);
  if (home.count) {
    const before = rawSetting("homepage.sections");
    await content.saveHomepageSections(home.value);
    recordChange({ kind: "setting", target: "homepage.sections", label: "Homepage", who: admin.email, before, after: rawSetting("homepage.sections"), summary });
    changed += home.count;
    revalidatePath("/");
  }

  for (const page of await content.listPages()) {
    const result = replaceEverywhere(page.sections, from, next);
    if (!result.count) continue;
    const before = rawPage(page.slug);
    await content.savePage({ ...page, sections: result.value });
    recordChange({ kind: "page", target: page.slug, label: `Page: ${page.title}`, who: admin.email, before, after: rawPage(page.slug), summary });
    changed += result.count;
    revalidatePath(`/pages/${page.slug}`);
  }

  if (!changed) return { ok: false, error: "That address is no longer used anywhere. Reload the page." };
  return { ok: true, changed };
}
