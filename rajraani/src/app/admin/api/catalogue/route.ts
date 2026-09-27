import { currentAdmin } from "@/lib/auth/session";
import { csvField, SHEET_COLUMNS } from "@/lib/admin/catalogue-sheet";
import { db } from "@/lib/db/client";

/**
 * The whole catalogue as a spreadsheet (CSV), for Excel or Google Sheets.
 *
 * Starts with a byte-order mark so Excel reads the ₹ sign and Indian names
 * correctly. Checks the session itself: route handlers sit outside the
 * protected layout.
 */
export async function GET() {
  if (!(await currentAdmin())) return new Response("Sign in first.", { status: 401 });

  const rows = db()
    .prepare(
      `SELECT p.sku, p.poetic_name, p.title, p.price_minor, p.inventory_quantity, p.published,
              COALESCE(p.weave, '') AS weave, p.fabric, p.colour_family, p.handle,
              (SELECT COUNT(*) FROM product_image i WHERE i.product_id = p.id AND i.url IS NOT NULL) AS photos
         FROM product p ORDER BY p.poetic_name`,
    )
    .all() as unknown as {
    sku: string;
    poetic_name: string;
    title: string;
    price_minor: number;
    inventory_quantity: number;
    published: number;
    weave: string;
    fabric: string;
    colour_family: string;
    handle: string;
    photos: number;
  }[];

  const lines = [
    SHEET_COLUMNS.map(csvField).join(","),
    ...rows.map((row) =>
      [
        row.sku,
        row.poetic_name,
        row.title,
        row.price_minor / 100,
        row.inventory_quantity,
        row.published ? "yes" : "no",
        row.weave,
        row.fabric,
        row.colour_family,
        row.photos,
        `/products/${row.handle}`,
      ]
        .map(csvField)
        .join(","),
    ),
  ];

  const day = new Date().toISOString().slice(0, 10);
  return new Response("﻿" + lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="rajraani-catalogue-${day}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
