import "server-only";

import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * The database connection.
 *
 * SQLite through Node's built-in `node:sqlite` — no native module to compile
 * (which matters on Windows), no ORM, no dependency at all. At a few hundred
 * one-of-a-kind pieces the entire catalogue fits in memory many times over.
 *
 * `server-only` is a real guard: importing this into a client component must
 * fail the build rather than attempt to bundle a database driver for a browser.
 */

const DB_PATH =
  process.env.DATABASE_PATH || path.join(process.cwd(), "data", "rajraani.db");

let instance: DatabaseSync | undefined;

export function db(): DatabaseSync {
  if (instance) return instance;

  instance = new DatabaseSync(DB_PATH);
  // Foreign keys are OFF by default in SQLite — a long-standing compatibility
  // default that silently makes every FK decorative. Turn them on per
  // connection, every time.
  instance.exec("PRAGMA foreign_keys = ON");
  // WAL lets reads proceed during a write, which matters once the admin is
  // saving a product while the storefront is serving pages.
  instance.exec("PRAGMA journal_mode = WAL");
  instance.exec("PRAGMA busy_timeout = 5000");
  return instance;
}

/** Apply the schema. Idempotent — every statement is CREATE ... IF NOT EXISTS. */
export function migrate(target: DatabaseSync = db()): void {
  const schema = readFileSync(
    path.join(process.cwd(), "src", "lib", "db", "schema.sql"),
    "utf8",
  );
  target.exec(schema);
}

/**
 * Run a function inside a transaction, rolling back if it throws.
 *
 * Seeding a product touches four tables; a half-written product is worse than
 * no product.
 */
export function transaction<T>(fn: () => T, target: DatabaseSync = db()): T {
  target.exec("BEGIN");
  try {
    const result = fn();
    target.exec("COMMIT");
    return result;
  } catch (error) {
    target.exec("ROLLBACK");
    throw error;
  }
}

export function closeDb(): void {
  instance?.close();
  instance = undefined;
}
