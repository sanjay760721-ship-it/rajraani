import "server-only";

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "../db/client.ts";
import { verifyPassword } from "./password.ts";

/**
 * Admin sessions.
 *
 * The cookie carries a random token; the database stores only its SHA-256.
 * That way a leaked database backup does not hand over live sessions — the
 * same reason passwords are not stored in the clear. Session tokens are
 * bearer credentials and deserve the same treatment.
 *
 * Sessions are opaque and server-side rather than signed JWTs, because the
 * property that matters here is *revocation*: deleting the row logs the user
 * out immediately, everywhere. A stateless token cannot be withdrawn.
 */

const COOKIE = "rj_admin";
const SESSION_DAYS = 7;

export type AdminUser = { id: number; email: string };

/**
 * Development sign-in bypass.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS IS NOT SIMPLY "AUTH REMOVED"
 *
 * The admin edits the catalogue, moves stock and reads orders. An unauthenticated
 * one reachable from the internet is not a rough edge, it is the whole shop. So
 * the password path is untouched and still the only way in on a deployed build;
 * what follows short-circuits it on a developer's machine and cannot be switched
 * on anywhere else.
 *
 * Two independent conditions, both of which must hold:
 *
 *   1. `NODE_ENV !== "production"`. `next build` hard-codes production, so a
 *      deployed bundle cannot take this branch no matter how it is configured —
 *      the check is compiled against a literal, not read at runtime.
 *   2. `ADMIN_AUTH !== "strict"`. An escape hatch for exercising the real login
 *      locally without editing this file.
 *
 * Condition 1 is the one that matters; condition 2 is a convenience. Neither is
 * a substitute for the other.
 *
 * The identity returned is synthetic and deliberately not written to the
 * database: `admin_user` stays empty, no session row is created, and nothing
 * here mints a cookie. Only `email` is consumed downstream (the sidebar prints
 * it), and no table references `admin_user.id`, so a row that does not exist
 * costs nothing.
 *
 * TO TURN IT OFF:  set ADMIN_AUTH=strict in .env.local, or delete this block
 * and the branch in `currentAdmin()`.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const DEV_AUTH_BYPASS =
  process.env.NODE_ENV !== "production" && process.env.ADMIN_AUTH !== "strict";

/** The stand-in identity used while the bypass is active. */
const DEV_ADMIN: AdminUser = { id: 0, email: "dev@localhost" };

const sha256 = (value: string) =>
  createHash("sha256").update(value).digest("hex");

/**
 * Sign in.
 *
 * Returns undefined on any failure, without saying which — "no such user" and
 * "wrong password" must be indistinguishable, or the form becomes a tool for
 * discovering who has an account.
 */
export async function signIn(
  email: string,
  password: string,
): Promise<AdminUser | undefined> {
  const row = db()
    .prepare(`SELECT id, email, password_hash FROM admin_user WHERE email = ?`)
    .get(email.trim().toLowerCase()) as unknown as
    | { id: number; email: string; password_hash: string }
    | undefined;

  if (!row) {
    // Spend comparable time even when the user does not exist, so response
    // timing does not reveal which emails are registered.
    verifyPassword(password, `scrypt$16384$8$1$${"A".repeat(24)}$${"A".repeat(88)}`);
    return undefined;
  }

  if (!verifyPassword(password, row.password_hash)) return undefined;

  const token = randomBytes(32).toString("base64url");
  const now = new Date();
  const expires = new Date(now.getTime() + SESSION_DAYS * 86_400_000);

  db()
    .prepare(
      `INSERT INTO admin_session (token, user_id, created_at, expires_at)
       VALUES (?, ?, ?, ?)`,
    )
    .run(sha256(token), row.id, now.toISOString(), expires.toISOString());

  db()
    .prepare(`UPDATE admin_user SET last_login_at = ? WHERE id = ?`)
    .run(now.toISOString(), row.id);

  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true, // unreadable from JavaScript, so XSS cannot lift it
    sameSite: "lax", // blocks cross-site form posts riding the session
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires,
  });

  return { id: row.id, email: row.email };
}

export async function signOut(): Promise<void> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (token) {
    db().prepare(`DELETE FROM admin_session WHERE token = ?`).run(sha256(token));
  }
  store.delete(COOKIE);
}

/** The signed-in admin, or undefined. Never throws. */
export async function currentAdmin(): Promise<AdminUser | undefined> {
  /*
   * Placed here rather than in `requireAdmin`, because this is the one function
   * both the layout guard and every server action funnel through. Putting it in
   * `requireAdmin` alone would leave the login page still believing nobody is
   * signed in, and it would bounce a developer back to a form they cannot use.
   */
  if (DEV_AUTH_BYPASS) return DEV_ADMIN;

  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return undefined;

  const row = db()
    .prepare(
      `SELECT u.id, u.email, s.expires_at
         FROM admin_session s
         JOIN admin_user u ON u.id = s.user_id
        WHERE s.token = ?`,
    )
    .get(sha256(token)) as unknown as
    | { id: number; email: string; expires_at: string }
    | undefined;

  if (!row) return undefined;

  if (new Date(row.expires_at) < new Date()) {
    db().prepare(`DELETE FROM admin_session WHERE token = ?`).run(sha256(token));
    return undefined;
  }

  return { id: row.id, email: row.email };
}

/**
 * Require an admin, or redirect to the login page.
 *
 * Called by the protected layout *and* by every mutating action. That
 * duplication is deliberate: a layout guard protects what is rendered, not what
 * is callable. Server actions are POST endpoints that a determined caller can
 * invoke directly, so each one checks for itself.
 */
export async function requireAdmin(): Promise<AdminUser> {
  const admin = await currentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

/** Housekeeping: drop sessions that have already expired. */
export function pruneSessions(): number {
  const result = db()
    .prepare(`DELETE FROM admin_session WHERE expires_at < ?`)
    .run(new Date().toISOString());
  return Number(result.changes);
}

/** Constant-time string comparison, for CSRF-style token checks. */
export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}
