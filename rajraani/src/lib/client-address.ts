import "server-only";

import { headers } from "next/headers";

/**
 * The address a request came from, for the limits below.
 *
 * Only what our own reverse proxy adds can be trusted. `X-Real-IP` is set by
 * the proxy (nginx, Caddy), and the proxy appends the address it saw to the
 * END of `X-Forwarded-For`. The first entry is whatever the visitor sent, so
 * keying on it let a script pick a new "address" for every request. That got
 * past every limit, and by filling the table it locked real shoppers out.
 */
export async function clientAddress(): Promise<string> {
  const list = await headers();
  const forwarded = list.get("x-forwarded-for")?.split(",").map((part) => part.trim()).filter(Boolean);
  return list.get("x-real-ip")?.trim() || forwarded?.at(-1) || "unknown";
}
