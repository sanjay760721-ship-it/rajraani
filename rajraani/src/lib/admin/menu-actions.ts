"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { menuProblems, saveMenu } from "../content/menu.ts";
import type { NavPanel } from "../data/navigation.ts";

export type MenuSaveResult = { ok: true } | { ok: false; problems: string[] };

export async function saveMenuAction(panels: NavPanel[]): Promise<MenuSaveResult> {
  await requireAdmin();
  const problems = menuProblems(panels);
  if (problems.length) return { ok: false, problems };
  await saveMenu(panels);
  // The menu is on every page.
  revalidatePath("/", "layout");
  return { ok: true };
}
