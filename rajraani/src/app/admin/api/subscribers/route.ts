import { currentAdmin } from "@/lib/auth/session";
import { csvField } from "@/lib/admin/catalogue-sheet";
import { listSubscribers } from "@/lib/newsletter";

/** Newsletter sign-ups as a spreadsheet, for importing into a mailing service. */
export async function GET() {
  if (!(await currentAdmin())) return new Response("Sign in first.", { status: 401 });
  const lines = [
    ["Email", "Signed up", "Where"].join(","),
    ...listSubscribers().map((row) => [row.email, row.createdAt.slice(0, 10), row.source === "popup" ? "Pop-up" : "Footer"].map(csvField).join(",")),
  ];
  return new Response("﻿" + lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="newsletter-signups-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
