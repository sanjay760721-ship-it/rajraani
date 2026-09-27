import "server-only";

import { db } from "../db/client.ts";
import {
  isSiteTextKey,
  SITE_TEXT_DEFAULTS,
  type SiteText,
  type SiteTextKey,
} from "./site-text-defs.ts";

/**
 * Reading and writing the site-wide lines (see site-text-defs.ts).
 *
 * Stored as one `setting` row holding only the lines the owner changed.
 * Anything unreadable falls back to the defaults — a bad row must never take
 * the header off every page.
 */

const KEY = "site.text";

function stored(): Partial<SiteText> {
  try {
    const row = db().prepare("SELECT value_json FROM setting WHERE key = ?").get(KEY) as
      | { value_json: string }
      | undefined;
    if (!row) return {};
    const value = JSON.parse(row.value_json) as Record<string, unknown>;
    const out: Partial<SiteText> = {};
    for (const [key, text] of Object.entries(value)) {
      if (isSiteTextKey(key) && typeof text === "string") out[key] = text;
    }
    return out;
  } catch {
    return {};
  }
}

export async function getSiteText(): Promise<SiteText> {
  return { ...SITE_TEXT_DEFAULTS, ...stored() };
}

export async function saveSiteText(changes: Partial<Record<SiteTextKey, string>>): Promise<void> {
  const next: Partial<SiteText> = { ...stored() };
  for (const [key, value] of Object.entries(changes)) {
    if (!isSiteTextKey(key) || typeof value !== "string") continue;
    // Back to the default is stored as "no change", so a later change to the
    // default in code reaches the site again.
    if (value === SITE_TEXT_DEFAULTS[key]) delete next[key];
    else next[key] = value;
  }
  db()
    .prepare(
      `INSERT INTO setting (key, value_json, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`,
    )
    .run(KEY, JSON.stringify(next));
}
