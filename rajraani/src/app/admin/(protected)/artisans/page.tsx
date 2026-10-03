import Link from "next/link";

import { db } from "@/lib/db/client";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Weavers" };

/**
 * The workshops behind the pieces, built from each piece's "Where it was made".
 *
 * Read-only by design: the workshop, loom, weeks and number of weavers are
 * part of each piece's own record, and the piece is where they are changed.
 * This screen answers "what has this workshop made for us?".
 */

type Row = {
  id: number;
  poetic_name: string;
  provenance_workshop: string;
  provenance_loom: string;
  provenance_weeks: number;
  provenance_artisans: number;
  published: number;
};

export default async function AdminWeaversRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const rows = db()
    .prepare(
      `SELECT id, poetic_name, provenance_workshop, provenance_loom, provenance_weeks, provenance_artisans, published
         FROM product ORDER BY provenance_workshop, poetic_name`,
    )
    .all() as unknown as Row[];

  const workshops = new Map<string, Row[]>();
  for (const row of rows) {
    const name = row.provenance_workshop.trim() || "Workshop not recorded";
    workshops.set(name, [...(workshops.get(name) ?? []), row]);
  }
  const list = [...workshops.entries()].sort((a, b) => b[1].length - a[1].length);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="a-heading-lg">Weavers</h1>
        <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
          The workshops behind your pieces, from each piece’s “Where it was made”. To change a
          workshop’s name or details, open the piece and edit it there.
        </p>
      </header>

      <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
        <h2 className="a-heading-sm">{list.length} workshop{list.length === 1 ? "" : "s"}</h2>
        <ul className="mt-2 divide-y" role="list">
          {list.map(([name, pieces]) => {
            const looms = [...new Set(pieces.map((piece) => piece.provenance_loom).filter(Boolean))];
            const weeks = pieces.map((piece) => piece.provenance_weeks);
            const weavers = Math.max(...pieces.map((piece) => piece.provenance_artisans));
            return (
              <li key={name} style={{ borderColor: "var(--a-outline-variant)" }}>
                <details className="py-3">
                  <summary className="flex cursor-pointer flex-wrap items-center gap-4">
                    <span className="min-w-[12rem] flex-1">
                      <span className="a-body-md block">{name}</span>
                      <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                        {looms.join(" · ") || "Loom not recorded"}
                      </span>
                    </span>
                    <span className="a-body-sm">
                      {pieces.length} piece{pieces.length === 1 ? "" : "s"} · {Math.min(...weeks)}–{Math.max(...weeks)} weeks on the loom · up to {weavers} weaver{weavers === 1 ? "" : "s"}
                    </span>
                  </summary>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {pieces.map((piece) => (
                      <li key={piece.id}>
                        <Link href={`/admin/products/${piece.id}`} className="a-btn-secondary" style={{ padding: "6px 12px" }}>
                          {piece.poetic_name}
                          {piece.published ? "" : " (hidden)"}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
