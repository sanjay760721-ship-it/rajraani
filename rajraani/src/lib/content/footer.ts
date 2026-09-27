import "server-only";

import { db } from "../db/client.ts";
import { withDefaults, type FooterSettings } from "./footer-defs.ts";

/** The footer as the owner last saved it (`setting` row `site.footer`). */
export const FOOTER_KEY = "site.footer";

export async function getFooter(): Promise<FooterSettings> {
  try {
    const row = db().prepare("SELECT value_json FROM setting WHERE key = ?").get(FOOTER_KEY) as { value_json: string } | undefined;
    return withDefaults(row ? (JSON.parse(row.value_json) as Partial<FooterSettings>) : null);
  } catch {
    // A bad row must never take the footer off every page.
    return withDefaults(null);
  }
}

export async function saveFooter(value: FooterSettings): Promise<void> {
  db()
    .prepare(
      `INSERT INTO setting (key, value_json, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`,
    )
    .run(FOOTER_KEY, JSON.stringify(value));
}
