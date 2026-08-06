import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

/**
 * Password hashing, with scrypt from node:crypto.
 *
 * No dependency. scrypt is memory-hard and is what Node ships for exactly this
 * job; bcrypt would mean a native module, and argon2 another.
 *
 * The parameters are stored *inside* the hash string rather than as constants
 * here. That is not decoration: it means raising the cost later does not
 * invalidate existing passwords — old hashes keep verifying with the parameters
 * they were made with, and each one upgrades the next time its owner logs in.
 *
 * Format: scrypt$N$r$p$salt$hash   (salt and hash base64)
 */

const N = 16_384; // CPU/memory cost. ~100ms on a laptop, which is the point.
const r = 8;
const p = 1;
const KEY_LENGTH = 64;
const SALT_LENGTH = 16;

export function hashPassword(password: string): string {
  if (password.length < 12) {
    // Enforced here rather than only in the form, because the CLI that creates
    // the first admin does not go through a form.
    throw new Error("Password must be at least 12 characters");
  }
  const salt = randomBytes(SALT_LENGTH);
  const hash = scryptSync(password.normalize("NFKC"), salt, KEY_LENGTH, { N, r, p });
  return [
    "scrypt",
    N,
    r,
    p,
    salt.toString("base64"),
    hash.toString("base64"),
  ].join("$");
}

/**
 * Verify a password against a stored hash.
 *
 * Returns false rather than throwing on a malformed hash — a corrupt row must
 * fail the login, not crash the login page.
 */
export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;

  const [, nRaw, rRaw, pRaw, saltRaw, hashRaw] = parts;
  const cost = Number(nRaw);
  const blockSize = Number(rRaw);
  const parallelism = Number(pRaw);
  if (!cost || !blockSize || !parallelism || !saltRaw || !hashRaw) return false;

  let expected: Buffer;
  let actual: Buffer;
  try {
    expected = Buffer.from(hashRaw, "base64");
    actual = scryptSync(
      password.normalize("NFKC"),
      Buffer.from(saltRaw, "base64"),
      expected.length,
      { N: cost, r: blockSize, p: parallelism },
    );
  } catch {
    return false;
  }

  // Constant-time. A plain === leaks how much of the hash matched, through
  // timing, which is enough to reconstruct it given patience.
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

/** True when a stored hash was made with weaker parameters than we now use. */
export function needsRehash(stored: string): boolean {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return true;
  return Number(parts[1]) < N || Number(parts[2]) < r;
}
