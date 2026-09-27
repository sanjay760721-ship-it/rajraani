"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { markDelivered, markDispatched, saveOrderNote } from "./orders-admin.ts";

export type OrderActionResult = { ok: true } | { ok: false; error: string };

export async function markSentAction(id: number, tracking: string): Promise<OrderActionResult> {
  await requireAdmin();
  if (tracking.length > 200) return { ok: false, error: "That tracking number is too long." };
  if (!markDispatched(id, tracking)) {
    return { ok: false, error: "Only a paid order can be marked as sent. Reload to see its latest state." };
  }
  revalidatePath("/admin/orders");
  return { ok: true };
}

export async function markDeliveredAction(id: number): Promise<OrderActionResult> {
  await requireAdmin();
  if (!markDelivered(id)) {
    return { ok: false, error: "Only a sent order can be marked as delivered. Reload to see its latest state." };
  }
  revalidatePath("/admin/orders");
  return { ok: true };
}

export async function saveOrderNoteAction(id: number, notes: string): Promise<OrderActionResult> {
  await requireAdmin();
  if (notes.length > 2000) return { ok: false, error: "That note is too long." };
  saveOrderNote(id, notes);
  revalidatePath("/admin/orders");
  return { ok: true };
}
