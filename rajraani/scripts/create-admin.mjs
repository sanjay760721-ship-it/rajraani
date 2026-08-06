#!/usr/bin/env node
/**
 * Create or update an admin user.
 *
 *   node scripts/create-admin.mjs <email> <password>
 *
 * A CLI rather than a "first run" signup page, deliberately. A public
 * self-registration route on an admin panel is the kind of thing that gets
 * left enabled — this cannot be reached from the internet at all.
 *
 * The password is taken as an argument for convenience on a personal machine.
 * That means it lands in shell history: change it from inside the admin once
 * you are in, or clear the history line.
 */

import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dbPath = process.env.DATABASE_PATH ?? path.join(root, "data", "rajraani.db");

const [email, password] = process.argv.slice(2);

if (!email || !password) {
  console.error("Usage: node scripts/create-admin.mjs <email> <password>");
  process.exit(1);
}
if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
  console.error(`"${email}" does not look like an email address.`);
  process.exit(1);
}
if (password.length < 12) {
  console.error("Password must be at least 12 characters.");
  process.exit(1);
}

const { hashPassword } = await import(
  pathToFileURL(path.join(root, "src", "lib", "auth", "password.ts")).href
);

const db = new DatabaseSync(dbPath);
db.exec("PRAGMA foreign_keys = ON");
db.exec(readFileSync(path.join(root, "src", "lib", "db", "schema.sql"), "utf8"));

const normalised = email.trim().toLowerCase();
const now = new Date().toISOString();

const existing = db
  .prepare("SELECT id FROM admin_user WHERE email = ?")
  .get(normalised);

if (existing) {
  db.prepare("UPDATE admin_user SET password_hash = ? WHERE email = ?").run(
    hashPassword(password),
    normalised,
  );
  // Any existing sessions are invalidated — a password change should log out
  // whoever might already be holding one.
  const dropped = db
    .prepare("DELETE FROM admin_session WHERE user_id = ?")
    .run(existing.id);
  console.log(
    `Updated the password for ${normalised}. ` +
      `${Number(dropped.changes)} existing session(s) signed out.`,
  );
} else {
  db.prepare(
    "INSERT INTO admin_user (email, password_hash, created_at) VALUES (?, ?, ?)",
  ).run(normalised, hashPassword(password), now);
  console.log(`Created admin user ${normalised}.`);
}

console.log("Sign in at /admin/login");
db.close();
