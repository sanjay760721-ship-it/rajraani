"use server";

import { requireAdmin } from "../auth/session.ts";
import { setMediaAlt } from "../media/library.ts";

/** Save a photo's description (alt text) for screen readers and Google. */
export async function saveMediaAltAction(id: number, alt: string): Promise<{ ok: boolean }> {
  await requireAdmin();
  if (!Number.isInteger(id) || alt.length > 300) return { ok: false };
  setMediaAlt(id, alt);
  return { ok: true };
}
