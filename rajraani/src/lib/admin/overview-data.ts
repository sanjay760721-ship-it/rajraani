import "server-only";

import { content } from "../content/content.ts";
import { db } from "../db/client.ts";
import { termsForGroup } from "../domain/taxonomy.ts";
import { listProductsForAdmin } from "../data/admin-queries.ts";
import { catalogue } from "../data/catalogue.ts";
import { countReferencePhotos } from "./section-fields.ts";

/**
 * The numbers on the Overview page — every one read from the shop's own data.
 *
 * Nothing here is estimated or illustrative. Where the shop does not collect
 * something yet (visitor numbers), the page says so instead of showing a
 * figure. A sale is an order that was paid: paid, dispatched or delivered.
 */

const SOLD = "('paid', 'dispatched', 'delivered')";
const DAY = 86_400_000;

export type Overview = {
  sales30: { minor: number; orders: number };
  salesPrev30: { minor: number; orders: number };
  weekly: { label: string; start: string; minor: number; orders: number }[];
  ordersToSend: number;
  bestSellers: { name: string; handle: string; units: number; minor: number }[];
  pieces: { live: number; needsPhoto: number; hidden: number; soldOut: number; low: number; total: number };
  byType: { name: string; count: number }[];
  ownPhotos: { withPhotos: number; total: number };
  standInPhotosOnPages: number;
  enquiries: { open: number; last30: number };
};

/** Monday 00:00 (local) of the week containing `date`. */
function weekStart(date: Date): Date {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  return start;
}

export async function overview(now = new Date()): Promise<Overview> {
  const d = db();
  const since30 = new Date(now.getTime() - 30 * DAY).toISOString();
  const since60 = new Date(now.getTime() - 60 * DAY).toISOString();

  const window = (from: string, to: string) =>
    d
      .prepare(
        `SELECT COALESCE(SUM(total_minor), 0) AS minor, COUNT(*) AS orders
           FROM customer_order WHERE status IN ${SOLD} AND created_at >= ? AND created_at < ?`,
      )
      .get(from, to) as { minor: number; orders: number };

  // Twelve weeks, oldest first, zero-filled so empty weeks still show.
  const firstWeek = weekStart(new Date(now.getTime() - 11 * 7 * DAY));
  const sold = d
    .prepare(`SELECT total_minor, created_at FROM customer_order WHERE status IN ${SOLD} AND created_at >= ?`)
    .all(firstWeek.toISOString()) as { total_minor: number; created_at: string }[];
  const weekly = Array.from({ length: 12 }, (_, index) => {
    const start = new Date(firstWeek);
    start.setDate(start.getDate() + index * 7);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    const inWeek = sold.filter((order) => {
      const at = new Date(order.created_at);
      return at >= start && at < end;
    });
    return {
      label: start.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      start: start.toISOString(),
      minor: inWeek.reduce((sum, order) => sum + order.total_minor, 0),
      orders: inWeek.length,
    };
  });

  const bestSellers = (
    d
      .prepare(
        `SELECT i.poetic_name AS name, i.handle, SUM(i.quantity) AS units, SUM(i.line_total_minor) AS minor
           FROM order_item i JOIN customer_order o ON o.id = i.order_id
          WHERE o.status IN ${SOLD}
          GROUP BY i.handle ORDER BY units DESC, minor DESC LIMIT 5`,
      )
      .all() as { name: string; handle: string; units: number; minor: number }[]
  ).map((row) => ({ ...row }));

  const products = listProductsForAdmin();
  // "On the shop" is what a shopper can see: switched on and photographed
  // (the catalogue leaves out pieces with no photo yet).
  const visible = new Set((await catalogue.listProducts()).map((product) => product.handle));
  const switchedOn = products.filter((product) => product.published === 1);
  const live = switchedOn.filter((product) => visible.has(product.handle));

  const garmentRows = d
    .prepare(`SELECT garment_type AS slug, COUNT(*) AS count FROM product WHERE published = 1 GROUP BY garment_type`)
    .all() as { slug: string; count: number }[];
  const garments = termsForGroup("garment");
  const byType = garmentRows
    .map((row) => ({ name: garments.find((term) => term.slug === row.slug)?.name ?? row.slug, count: row.count }))
    .sort((a, b) => b.count - a.count);

  const [homepage, pages] = await Promise.all([content.getHomepageSections(), content.listPages()]);

  const enquiries = d
    .prepare(
      `SELECT SUM(handled = 0) AS open, SUM(created_at >= ?) AS last30 FROM enquiry`,
    )
    .get(since30) as { open: number | null; last30: number | null };

  return {
    sales30: window(since30, now.toISOString()),
    salesPrev30: window(since60, since30),
    weekly,
    ordersToSend: (d.prepare(`SELECT COUNT(*) AS n FROM customer_order WHERE status = 'paid'`).get() as { n: number }).n,
    bestSellers,
    pieces: {
      live: live.length,
      needsPhoto: switchedOn.length - live.length,
      hidden: products.length - switchedOn.length,
      soldOut: live.filter((product) => product.inventory_quantity === 0).length,
      low: live.filter((product) => product.inventory_quantity > 0 && product.inventory_quantity <= 2).length,
      total: products.length,
    },
    byType,
    ownPhotos: { withPhotos: products.filter((product) => product.photo_count > 0).length, total: products.length },
    standInPhotosOnPages:
      countReferencePhotos(homepage) + pages.reduce((sum, page) => sum + countReferencePhotos(page.sections), 0),
    enquiries: { open: enquiries.open ?? 0, last30: enquiries.last30 ?? 0 },
  };
}
