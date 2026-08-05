import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ActiveFilterChips,
  FacetSidebar,
  SortSelect,
} from "@/components/FacetSidebar";
import { ProductCard } from "@/components/ProductCard";
import { catalogue } from "@/lib/data/catalogue";
import { COLLECTIONS } from "@/lib/data/fixtures";
import {
  computeFacetCounts,
  filterProducts,
  sortProducts,
} from "@/lib/facets/engine";
import { buildFacetHref, parseFacetUrlState } from "@/lib/facets/url";

/**
 * Product listing.
 *
 * Reads `searchParams`, so this route is dynamically rendered — correct for a
 * faceted grid. build.md §3's ISR-60s target applies to the unfiltered
 * collection shell and is revisited in Sprint 3, when Algolia takes over
 * faceting and the counts stop being computed in the request path.
 */

const PAGE_SIZE = 24;

export function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({ handle: collection.handle }));
}

export async function generateMetadata(
  props: PageProps<"/collections/[handle]">,
) {
  const { handle } = await props.params;
  const collection = await catalogue.getCollection(handle);
  if (!collection) return {};

  const { page } = parseFacetUrlState(await props.searchParams);
  return {
    // "Page N" title suffix — the one thing the reference site's pagination
    // does textbook-correctly (pre-build-gaps.md §6). Worth copying.
    title: page > 1 ? `${collection.title} — Page ${page}` : collection.title,
    description: collection.seoIntro,
  };
}

export default async function CollectionPage(
  props: PageProps<"/collections/[handle]">,
) {
  const { handle } = await props.params;
  const collection = await catalogue.getCollection(handle);
  if (!collection) notFound();

  const { selection, sort, page } = parseFacetUrlState(await props.searchParams);

  const base = await catalogue.productsInCollection(collection);
  const filtered = sortProducts(filterProducts(base, selection), sort);
  const counts = computeFacetCounts(base, selection);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="wrap-wide">
      <nav aria-label="Breadcrumb" className="py-5">
        <ol className="eyebrow flex gap-2 text-ink-muted">
          <li>
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page">{collection.title}</li>
        </ol>
      </nav>

      <header className="pb-10">
        <h1 className="text-h1">{collection.title}</h1>
        {/* Meaningful organic-traffic infrastructure — keep it on every
            major collection (design.md §6.2). */}
        <p className="text-prose mt-5 max-w-prose text-ink-body">
          {collection.seoIntro}
        </p>
      </header>

      <div className="grid gap-8 pb-20 lg:grid-cols-[236px_1fr] lg:gap-12">
        {/* Below 1024 the sidebar collapses to a disclosure. A slide-in filter
            drawer is the Sprint 5 refinement; the behaviour is identical. */}
        <details className="border-t border-rule lg:hidden">
          <summary className="eyebrow cursor-pointer py-4 text-ink">
            Filter ({filtered.length})
          </summary>
          <FacetSidebar selection={selection} counts={counts} sort={sort} />
        </details>
        <div className="hidden lg:block">
          <FacetSidebar selection={selection} counts={counts} sort={sort} />
        </div>

        <div>
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3">
            <p className="eyebrow text-ink-muted">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <SortSelect selection={selection} sort={sort} />
          </div>

          <ActiveFilterChips
            selection={selection}
            sort={sort}
            resultCount={filtered.length}
          />

          {visible.length === 0 ? (
            <div className="border border-rule px-6 py-20 text-center">
              <p className="font-display text-h3 text-ink">
                Nothing matches all of those at once.
              </p>
              <p className="mt-3 text-ink-body">
                Remove a filter above, or start again.
              </p>
              <Link href={`/collections/${collection.handle}`} className="cta mt-6 inline-block">
                Clear filters
              </Link>
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
              {visible.map((product, index) => (
                <li key={product.handle}>
                  {/* First row is the LCP candidate. The grid sits directly
                      under the page h1, so cards are h2 here. */}
                  <ProductCard
                    product={product}
                    priority={index < 4}
                    headingLevel={2}
                  />
                </li>
              ))}
            </ul>
          )}

          {pageCount > 1 ? (
            <Pagination
              handle={collection.handle}
              currentPage={currentPage}
              pageCount={pageCount}
              selection={selection}
              sort={sort}
            />
          ) : null}
        </div>
      </div>

      <ItemListJsonLd
        products={visible}
        collectionTitle={collection.title}
        startIndex={(currentPage - 1) * PAGE_SIZE}
      />
    </div>
  );
}

function Pagination({
  handle,
  currentPage,
  pageCount,
  selection,
  sort,
}: {
  handle: string;
  currentPage: number;
  pageCount: number;
  selection: ReturnType<typeof parseFacetUrlState>["selection"];
  sort: ReturnType<typeof parseFacetUrlState>["sort"];
}) {
  const href = (page: number) =>
    buildFacetHref(`/collections/${handle}`, { selection, sort, page });

  return (
    <nav aria-label="Pagination" className="mt-14 flex justify-center gap-6">
      {currentPage > 1 ? (
        <Link href={href(currentPage - 1)} className="eyebrow text-ink" rel="prev">
          Previous
        </Link>
      ) : null}
      <span className="eyebrow text-ink-muted">
        Page {currentPage} of {pageCount}
      </span>
      {currentPage < pageCount ? (
        <Link href={href(currentPage + 1)} className="eyebrow text-ink" rel="next">
          Next
        </Link>
      ) : null}
    </nav>
  );
}

/**
 * ItemList on the PLP.
 *
 * pre-build-gaps.md §6: the reference site emits only BreadcrumbList and
 * WebSite on its collection pages. This is an open gap and cheap to take.
 */
function ItemListJsonLd({
  products,
  collectionTitle,
  startIndex,
}: {
  products: readonly { handle: string; poeticName: string }[];
  collectionTitle: string;
  startIndex: number;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collectionTitle,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: startIndex + index + 1,
        url: `/products/${product.handle}`,
        name: product.poeticName,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
