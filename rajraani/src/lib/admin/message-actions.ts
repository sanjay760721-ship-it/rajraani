"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { db } from "../db/client.ts";

/** Mark a contact-form message answered (or not). */
export async function setMessageAnsweredAction(id: number, answered: boolean): Promise<void> {
  await requireAdmin();
  db().prepare("UPDATE enquiry SET handled = ? WHERE id = ?").run(answered ? 1 : 0, id);
  revalidatePath("/admin/messages");
  revalidatePath("/admin/overview");
}
