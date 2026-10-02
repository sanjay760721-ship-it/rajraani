import "server-only";

/**
 * Slows down password guessing on the admin sign-in.
 *
 * Scrypt makes each guess expensive, but nothing stopped a script trying
 * thousands in a row. After too many failures inside the window, further
 * attempts are refused without even checking the password — for that account
 * (5), and separately for the connection they come from (20), so one address
 * cannot sweep many accounts either.
 *
 * In memory, which is right for one server: a restart clears it, and that is
 * acceptable for a lockout measured in minutes. Move it to the database if the
 * site ever runs on more than one process.
 */

const WINDOW_MS = 15 * 60 * 1000;
const PER_ACCOUNT = 5;
const PER_ADDRESS = 20;

const failures = new Map<string, number[]>();
let lastSweep = 0;

function recent(key: string, now: number): number[] {
  if (now - lastSweep > 60_000) {
    for (const [storedKey, attempts] of failures) {
      if (!attempts.some((at) => now - at < WINDOW_MS)) failures.delete(storedKey);
    }
    lastSweep = now;
  }
  if (!failures.has(key) && failures.size >= 10_000) {
    failures.delete(failures.keys().next().value!);
  }
  const kept = (failures.get(key) ?? []).filter((at) => now - at < WINDOW_MS);
  if (kept.length) failures.set(key, kept);
  else failures.delete(key);
  return kept;
}

const accountKey = (email: string) => `account:${email.trim().toLowerCase().slice(0, 250)}`;
const addressKey = (address: string) => `address:${address.slice(0, 128)}`;

/** Minutes until this account or address may try again, or 0 if it may now. */
export function lockedFor(email: string, address: string, now = Date.now()): number {
  const account = recent(accountKey(email), now);
  const from = recent(addressKey(address), now);
  const blocking = [
    account.length >= PER_ACCOUNT ? account[account.length - PER_ACCOUNT]! : 0,
    from.length >= PER_ADDRESS ? from[from.length - PER_ADDRESS]! : 0,
  ].filter(Boolean);
  if (!blocking.length) return 0;
  return Math.ceil((Math.max(...blocking) + WINDOW_MS - now) / 60_000);
}

export function recordFailure(email: string, address: string, now = Date.now()): void {
  for (const key of [accountKey(email), addressKey(address)]) {
    failures.set(key, [...recent(key, now), now]);
  }
}

/** A successful sign-in clears the account's count (not the address's). */
export function recordSuccess(email: string): void {
  failures.delete(accountKey(email));
}
