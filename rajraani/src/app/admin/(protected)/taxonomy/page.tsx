import Link from "next/link";

import { catalogue } from "@/lib/data/catalogue";
import { COLOURS, termsForGroup, type FacetGroup } from "@/lib/domain/taxonomy";
import type { Product } from "@/lib/domain/types";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Weaves, colours & fabrics" };

/**
 * The fixed words used to describe pieces — and which are the shop's filters.
 *
 * Read-only on purpose. These words live in `taxonomy/` and are checked by
 * `npm run taxonomy:check`; letting them be typed freely is how a shop ends up
 * with "Katan", "katan silk" and "Katan Silk" as three filters. The old screen
 * had an "+ Add vocabulary term" button that did nothing — worse than no button
 * for someone who will press it and wait.
 */

const GROUPS: { group: FacetGroup; title: string; what: string; count: (p: Product, slug: string) => boolean }[] = [
  { group: "garment", title: "What it is", what: "Saree, suit, dupatta…", count: (p, s) => p.garmentType === s },
  { group: "weave", title: "Weaves", what: "How the pattern is woven.", count: (p, s) => p.weave === s },
  { group: "fabric", title: "Fabrics", what: "What the cloth is.", count: (p, s) => p.fabric === s },
  { group: "colour", title: "Colours", what: "The main colour, as shoppers filter by it.", count: (p, s) => p.colourFamily === s },
  { group: "motif", title: "Motifs", what: "The patterns on the cloth.", count: (p, s) => p.motifs.includes(s) },
  { group: "zari", title: "Zari & thread", what: "The metallic or silk thread work.", count: (p, s) => (p.zariTypes as readonly string[]).includes(s) },
];

export default async function TaxonomyAdminPage() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const products = await catalogue.listProducts();

  return (
    <div className="space-y-10">
      <header>
        <h1 className="a-heading-lg">Weaves, colours &amp; fabrics</h1>
        <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
          The words you choose from when describing a piece. They are also the filters shoppers
          use, so they are kept fixed and tidy. To add a new weave, colour or fabric, ask your
          developer — it takes a few minutes.
        </p>
      </header>

      {GROUPS.map(({ group, title, what, count }) => (
        <section key={group}>
          <h2 className="a-heading-sm">{title}</h2>
          <p className="a-body-sm" style={{ color: "var(--a-outline)" }}>{what}</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3" role="list">
            {termsForGroup(group).map((term) => {
              const used = products.filter((product) => count(product, term.slug)).length;
              const hex = group === "colour" ? COLOURS.find((colour) => colour.slug === term.slug)?.hex : undefined;
              return (
                <li key={term.slug} className="a-card flex gap-3 p-4" style={{ borderRadius: "var(--a-radius-md)" }}>
                  {hex ? (
                    <span
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0"
                      style={{ backgroundColor: hex, borderRadius: "var(--a-radius-pill)", border: "1px solid var(--a-outline-variant)" }}
                    />
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <p className="a-body-md">{term.name}</p>
                    {term.description ? (
                      <p className="a-body-sm mt-1" style={{ color: "var(--a-ink-variant)" }}>
                        {/* First sentence only: later ones are notes for developers. */}
                        {term.description.split(/(?<=\.)\s/)[0]}
                      </p>
                    ) : null}
                    <p className="a-label mt-2" style={{ color: "var(--a-outline)" }}>
                      {used === 0 ? (
                        "No pieces yet"
                      ) : (
                        <Link href={`/collections/all?${group}=${term.slug}`} target="_blank" className="underline">
                          {used} piece{used === 1 ? "" : "s"} — see them ↗
                        </Link>
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
