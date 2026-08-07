import Link from "next/link";
import { listCollectionsForAdmin } from "@/lib/data/admin-queries";

export const metadata = { title: "Collections & Campaign Drops Manager" };

export default async function CollectionsAdminPage() {
  const collections = listCollectionsForAdmin();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Collections & Campaign Drops</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Manage named seasonal drops, facet collections, SEO intro blurbs, and product assignments.
          </p>
        </div>
        <button
          type="button"
          className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
        >
          + Create New Collection
        </button>
      </div>

      {/* Grid of Collections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((col) => (
          <div key={col.handle} className="border border-rule bg-bg p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase font-mono">
                  /{col.handle}
                </span>
                <h2 className="font-display text-xl font-semibold text-ink mt-0.5">{col.title}</h2>
              </div>
              <span
                className={`eyebrow text-[10px] px-2.5 py-1 border ${
                  col.kind === "campaign"
                    ? "border-success/40 bg-success/5 text-success"
                    : "border-rule bg-bg-alt text-ink-muted"
                }`}
              >
                {col.kind === "campaign" ? `Campaign: ${col.campaign_slug}` : "Facet Collection"}
              </span>
            </div>

            <p className="text-caption text-ink-body text-xs line-clamp-3 leading-relaxed">
              {col.seo_intro}
            </p>

            <div className="border-t border-rule pt-4 flex justify-between items-center text-xs">
              <Link
                href={`/collections/${col.handle}`}
                target="_blank"
                className="eyebrow text-ink-muted hover:underline"
              >
                Preview Collection Page ↗
              </Link>
              <button type="button" className="eyebrow text-ink underline">
                Edit SEO Copy & Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
