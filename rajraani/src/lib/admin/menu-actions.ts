"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { menuProblems, saveMenu } from "../content/menu.ts";
import type { NavPanel } from "../data/navigation.ts";
import { describe, rawSetting, recordChange } from "./history.ts";
import { getMenu } from "../content/menu.ts";

export type MenuSaveResult = { ok: true } | { ok: false; problems: string[] };

export async function saveMenuAction(panels: NavPanel[]): Promise<MenuSaveResult> {
  const admin = await requireAdmin();
  const problems = menuProblems(panels);
  if (problems.length) return { ok: false, problems };
  const before = rawSetting("site.menu");
  const shown = JSON.stringify(await getMenu());
  await saveMenu(panels);
  recordChange({ kind: "setting", target: "site.menu", label: "Menu", who: admin.email, before, after: rawSetting("site.menu"), summary: describe(shown, JSON.stringify(panels)) });
  // The menu is on every page.
  revalidatePath("/", "layout");
  return { ok: true };
}
