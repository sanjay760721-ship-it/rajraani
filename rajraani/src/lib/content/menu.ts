import "server-only";

import { db } from "../db/client.ts";
import { NAVIGATION, type NavPanel } from "../data/navigation.ts";

/**
 * The site menu, editable from the admin.
 *
 * Until 27 Sep 2026 the menu was only the `NAVIGATION` constant, so adding a
 * campaign or a story to a dropdown needed a developer. It is now one `setting`
 * row; `NAVIGATION` remains the default a fresh database shows, and the shape
 * the code's tests hold to.
 *
 * The limits below are the design's, not arbitrary: six top items because the
 * header splits them three and three around the centred wordmark, and a
 * dropdown holds at most four columns and three photo tiles in its 1200px box.
 */

const KEY = "site.menu";

export const MENU_LIMITS = {
  panels: 6,
  columns: 4,
  linksPerColumn: 14,
  tiles: 3,
  topLabel: 20,
  label: 40,
} as const;

export async function getMenu(): Promise<readonly NavPanel[]> {
  try {
    const row = db().prepare("SELECT value_json FROM setting WHERE key = ?").get(KEY) as
      | { value_json: string }
      | undefined;
    if (!row) return NAVIGATION;
    const value = JSON.parse(row.value_json) as NavPanel[];
    return Array.isArray(value) && value.length === MENU_LIMITS.panels ? value : NAVIGATION;
  } catch {
    // A bad row must never take the header off every page.
    return NAVIGATION;
  }
}

const HREF = /^(\/[^\s]*|https:\/\/[^\s]+|mailto:[^\s]+)$/;

/** Every problem with a proposed menu, in words the owner can act on. */
export function menuProblems(panels: readonly NavPanel[]): string[] {
  const problems: string[] = [];
  if (!Array.isArray(panels) || panels.length !== MENU_LIMITS.panels) {
    return ["The menu must have exactly six top items."];
  }
  panels.forEach((panel, index) => {
    const name = panel.label?.trim() || `Top item ${index + 1}`;
    if (!panel.label?.trim()) problems.push(`Top item ${index + 1} needs a name.`);
    if ((panel.label ?? "").length > MENU_LIMITS.topLabel)
      problems.push(`“${name}” is too long for the menu bar — keep it under ${MENU_LIMITS.topLabel} letters.`);
    if (!HREF.test(panel.href ?? "")) problems.push(`Choose where “${name}” goes when clicked.`);
    if ((panel.columns ?? []).length > MENU_LIMITS.columns)
      problems.push(`“${name}” has more than ${MENU_LIMITS.columns} columns.`);
    if ((panel.tiles ?? []).length > MENU_LIMITS.tiles)
      problems.push(`“${name}” has more than ${MENU_LIMITS.tiles} photo tiles.`);
    for (const column of panel.columns ?? []) {
      if (!column.heading?.trim()) problems.push(`A column in “${name}” needs a heading.`);
      if (column.links.length > MENU_LIMITS.linksPerColumn)
        problems.push(`“${column.heading}” in “${name}” has more than ${MENU_LIMITS.linksPerColumn} links.`);
      for (const link of column.links) {
        if (!link.label?.trim()) problems.push(`A link in “${column.heading}” (${name}) has no text.`);
        if ((link.label ?? "").length > MENU_LIMITS.label) problems.push(`“${link.label}” is too long.`);
        if (!HREF.test(link.href ?? "")) problems.push(`Choose where “${link.label || "a link"}” in “${column.heading}” goes.`);
      }
    }
    for (const tile of panel.tiles ?? []) {
      if (!tile.label?.trim()) problems.push(`A photo tile in “${name}” needs a caption.`);
      if (!HREF.test(tile.href ?? "")) problems.push(`Choose where the “${tile.label || "photo"}” tile in “${name}” goes.`);
    }
  });
  return problems;
}

export async function saveMenu(panels: readonly NavPanel[]): Promise<void> {
  db()
    .prepare(
      `INSERT INTO setting (key, value_json, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`,
    )
    .run(KEY, JSON.stringify(panels));
}
