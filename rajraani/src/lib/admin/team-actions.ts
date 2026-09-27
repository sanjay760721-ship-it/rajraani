"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createHash } from "node:crypto";

import { hashPassword, verifyPassword } from "../auth/password.ts";
import { requireAdmin } from "../auth/session.ts";
import { db } from "../db/client.ts";
import { recordChange } from "./history.ts";

/**
 * Who can sign in to the admin.
 *
 * Every admin can do everything (there are no roles yet — one or two trusted
 * people run this shop). Two guard rails: you cannot remove yourself, and the
 * last account cannot be removed, so the shop can never be locked out of its
 * own admin.
 *
 * Passwords never go into Recent changes — only that an account was added,
 * removed, or had its password changed.
 */

export type TeamResult = { ok: true; message?: string } | { ok: false; error: string };

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MIN_PASSWORD = 12;

export async function addAdminAction(email: string, password: string): Promise<TeamResult> {
  const admin = await requireAdmin();
  const address = email.trim().toLowerCase();
  if (!EMAIL.test(address)) return { ok: false, error: "That does not look like an email address." };
  if (password.length < MIN_PASSWORD) return { ok: false, error: `The password needs at least ${MIN_PASSWORD} characters.` };
  if (db().prepare("SELECT 1 FROM admin_user WHERE email = ?").get(address)) {
    return { ok: false, error: "That person can already sign in." };
  }
  db()
    .prepare("INSERT INTO admin_user (email, password_hash, created_at) VALUES (?, ?, ?)")
    .run(address, hashPassword(password), new Date().toISOString());
  recordChange({ kind: "note", target: address, label: "Team", who: admin.email, before: null, after: null, summary: `Added ${address} as an admin`, restorable: false });
  revalidatePath("/admin/team");
  return { ok: true, message: `${address} can now sign in. Give them the password privately — they can change it under Team.` };
}

export async function removeAdminAction(id: number): Promise<TeamResult> {
  const admin = await requireAdmin();
  if (id === admin.id) return { ok: false, error: "You cannot remove yourself. Ask another admin to." };
  const count = (db().prepare("SELECT COUNT(*) AS n FROM admin_user").get() as { n: number }).n;
  if (count <= 1) return { ok: false, error: "This is the only admin account, so it cannot be removed." };
  const row = db().prepare("SELECT email FROM admin_user WHERE id = ?").get(id) as { email: string } | undefined;
  if (!row) return { ok: false, error: "That account no longer exists." };
  // Sessions go with it (ON DELETE CASCADE), so they are signed out at once.
  db().prepare("DELETE FROM admin_user WHERE id = ?").run(id);
  recordChange({ kind: "note", target: row.email, label: "Team", who: admin.email, before: null, after: null, summary: `Removed ${row.email} — they can no longer sign in`, restorable: false });
  revalidatePath("/admin/team");
  return { ok: true, message: `${row.email} can no longer sign in.` };
}

export async function changeMyPasswordAction(current: string, next: string, again: string): Promise<TeamResult> {
  const admin = await requireAdmin();
  const row = db().prepare("SELECT password_hash FROM admin_user WHERE id = ?").get(admin.id) as { password_hash: string } | undefined;
  if (!row) {
    return { ok: false, error: "This is the developer sign-in used on a developer's machine; it has no password to change." };
  }
  if (!verifyPassword(current, row.password_hash)) return { ok: false, error: "Your current password is not right." };
  if (next.length < MIN_PASSWORD) return { ok: false, error: `The new password needs at least ${MIN_PASSWORD} characters.` };
  if (next !== again) return { ok: false, error: "The two new passwords do not match." };
  if (next === current) return { ok: false, error: "Choose a password different from the current one." };

  db().prepare("UPDATE admin_user SET password_hash = ? WHERE id = ?").run(hashPassword(next), admin.id);
  // Sign out every other device: a changed password should end sessions that
  // might belong to whoever knew the old one. Keep this browser signed in.
  const token = (await cookies()).get("rj_admin")?.value;
  const mine = token ? createHash("sha256").update(token).digest("hex") : "";
  const ended = db().prepare("DELETE FROM admin_session WHERE user_id = ? AND token <> ?").run(admin.id, mine);
  recordChange({ kind: "note", target: admin.email, label: "Team", who: admin.email, before: null, after: null, summary: "Changed their own password", restorable: false });
  const others = Number(ended.changes);
  return { ok: true, message: `Password changed.${others ? ` Signed out on ${others} other device${others === 1 ? "" : "s"}.` : ""}` };
}
