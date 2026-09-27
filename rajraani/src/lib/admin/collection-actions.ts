"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { db } from "../db/client.ts";

export type CollectionSaveResult = { ok: true } | { ok: false; error: string };

/**
 * Change a collection's name and introduction.
 *
 * Which pieces a collection holds is not edited here: most collections fill
 * themselves from the pieces' own details ("every Katan silk piece"), so the
 * way to put a piece in one is to describe the piece correctly.
 */
export async function saveCollectionAction(
  handle: string,
  title: string,
  intro: string,
): Promise<CollectionSaveResult> {
  await requireAdmin();
  if (!title.trim()) return { ok: false, error: "A collection needs a name." };
  if (title.length > 80) return { ok: false, error: "Keep the name under 80 characters." };
  if (intro.length > 1200) return { ok: false, error: "Keep the introduction under 1,200 characters." };

  const result = db()
    .prepare("UPDATE collection SET title = ?, seo_intro = ? WHERE handle = ?")
    .run(title.trim(), intro.trim(), handle);
  if (Number(result.changes) !== 1) return { ok: false, error: "That collection no longer exists." };

  // The name can appear in menus and breadcrumbs across the site.
  revalidatePath("/", "layout");
  return { ok: true };
}
