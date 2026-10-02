import "server-only";

import { db } from "../db/client.ts";

/**
 * The two numbers worth seeing from every admin screen: paid orders still to
 * be sent, and messages not yet answered. Two small counts, read on each
 * admin page load; the sidebar shows them beside Orders and Messages.
 */
export function adminBadges(): { ordersToSend: number; openMessages: number } {
  const d = db();
  const orders = d.prepare("SELECT COUNT(*) AS n FROM customer_order WHERE status = 'paid'").get() as { n: number } | undefined;
  const messages = d.prepare("SELECT COUNT(*) AS n FROM enquiry WHERE handled = 0").get() as { n: number } | undefined;
  return { ordersToSend: orders?.n ?? 0, openMessages: messages?.n ?? 0 };
}
