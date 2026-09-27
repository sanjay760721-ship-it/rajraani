"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { restoreChange } from "./history.ts";

export type PutBackResult = { ok: true } | { ok: false; error: string };

/** Put one change back, and refresh everything that shows it. */
export async function putBackAction(id: number): Promise<PutBackResult> {
  const admin = await requireAdmin();
  if (!Number.isInteger(id)) return { ok: false, error: "That change is no longer in the list." };
  const result = restoreChange(id, admin.email);
  if (!result.ok) return result;
  // Menus, site-wide lines and listings appear on every page.
  revalidatePath("/", "layout");
  for (const path of result.refresh) revalidatePath(path);
  revalidatePath("/admin/history");
  return { ok: true };
}
