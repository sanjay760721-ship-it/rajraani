import "server-only";

import { db } from "./db/client.ts";

/**
 * Newsletter sign-ups.
 *
 * Until 27 Sep 2026 both sign-up forms were decorative: the footer form had
 * no action at all, and the pop-up waited a second, said "Subscribed!" and
 * threw the address away. Now every sign-up is kept here, listed in the admin
 * (Messages), and can be downloaded for whichever mailing service is chosen.
 */

let ready = false;
function table() {
  if (!ready) {
    db().exec(`CREATE TABLE IF NOT EXISTS newsletter_subscriber (
      id         INTEGER PRIMARY KEY,
      email      TEXT NOT NULL UNIQUE,
      source     TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`);
    ready = true;
  }
  return db();
}

export const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

/** Returns true when the address is new, false when it was already signed up. */
export function subscribe(email: string, source: string): boolean {
  const address = email.trim().toLowerCase();
  const result = table()
    .prepare("INSERT OR IGNORE INTO newsletter_subscriber (email, source, created_at) VALUES (?, ?, ?)")
    .run(address, source, new Date().toISOString());
  return Number(result.changes) === 1;
}

export type Subscriber = { email: string; source: string; createdAt: string };

export function listSubscribers(): Subscriber[] {
  return (
    table().prepare("SELECT email, source, created_at FROM newsletter_subscriber ORDER BY id DESC").all() as unknown as {
      email: string;
      source: string;
      created_at: string;
    }[]
  ).map((row) => ({ email: row.email, source: row.source, createdAt: row.created_at }));
}

export function removeSubscriber(email: string): void {
  table().prepare("DELETE FROM newsletter_subscriber WHERE email = ?").run(email.trim().toLowerCase());
}
