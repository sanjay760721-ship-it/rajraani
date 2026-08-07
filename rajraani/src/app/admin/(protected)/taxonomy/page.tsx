import { listTaxonomyTerms } from "@/lib/data/admin-queries";

export const metadata = { title: "Taxonomy & Controlled Vocabulary" };

export default async function TaxonomyAdminPage() {
  const terms = listTaxonomyTerms();

  // Group terms by facet
  const facetsGrouped = terms.reduce<Record<string, typeof terms>>((acc, term) => {
    acc[term.facet] = acc[term.facet] || [];
    acc[term.facet]!.push(term);
    return acc;
  }, {});

  const facetList = Object.keys(facetsGrouped);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Taxonomy & Controlled Vocabulary</h1>
          <p className="text-caption mt-1 text-ink-muted">
            The controlled vocabulary enforcing consistent weave, garment, fabric, zari, and motif tags site-wide.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="eyebrow px-3 py-1 border border-rule bg-bg-alt text-ink">
            {terms.length} Total Terms
          </span>
          <button
            type="button"
            className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
          >
            + Add Vocabulary Term
          </button>
        </div>
      </div>

      {/* Facet Groups */}
      <div className="space-y-8">
        {facetList.map((facet) => {
          const groupTerms = facetsGrouped[facet] || [];

          return (
            <div key={facet} className="border border-rule bg-bg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-rule pb-3">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-xl font-semibold capitalize text-ink">
                    {facet} Facet
                  </h2>
                  <span className="eyebrow text-[10px] px-2 py-0.5 border border-rule bg-bg-sand text-ink-muted">
                    {groupTerms.length} Terms
                  </span>
                </div>
              </div>

              {/* Grid of Terms in Facet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {groupTerms.map((term) => (
                  <div
                    key={term.slug}
                    className="border border-rule/70 p-3 bg-bg-alt/30 hover:border-ink transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-ink text-sm">{term.label}</span>
                        {term.hex ? (
                          <span
                            className="w-4 h-4 rounded-full border border-rule shrink-0 shadow-xs"
                            style={{ backgroundColor: term.hex }}
                            title={term.hex}
                          />
                        ) : null}
                      </div>
                      <span className="eyebrow text-[10px] text-ink-muted block mt-0.5 font-mono">
                        slug: {term.slug}
                      </span>
                      {term.description ? (
                        <p className="text-caption text-ink-body mt-2 text-xs line-clamp-2">
                          {term.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
