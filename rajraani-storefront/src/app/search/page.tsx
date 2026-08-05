import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { search } from "@/lib/search";

/**
 * Search results, grouped.
 *
 * Four labelled groups rather than a flat list (build.md §8.3). The modal
 * overlay with live typeahead is Sprint 3, alongside Algolia; this page is the
 * durable half — the grouping and the routes.
 */
export const metadata = { title: "Search" };

export default async function SearchPage(props: PageProps<"/search">) {
  const params = await props.searchParams;
  const raw = params.q;
  const query = Array.isArray(raw) ? (raw[0] ?? "") : (raw ?? "");
  const results = search(query);

  const total =
    results.products.length + results.collections.length + results.pages.length;

  return (
    <div className="wrap-wide pb-24">
      <div className="mx-auto max-w-prose py-16">
        <h1 className="text-h1 text-center">What are you looking for?</h1>
        <form action="/search" className="mt-8">
          <label htmlFor="q" className="sr-only">
            Search
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="A colour, a weave, a name"
            className="w-full border-b border-rule-input bg-transparent py-3 text-center text-h4 text-ink outline-none focus:border-ink"
          />
        </form>

        {results.matchedTerms.length > 0 ? (
          <p className="text-caption mt-4 text-center text-ink-muted">
            Reading that as{" "}
            {results.matchedTerms.map((term) => term.name).join(", ")}.
          </p>
        ) : null}
      </div>

      {query.length >= 2 && total === 0 ? (
        <p className="py-16 text-center text-ink-body">
          Nothing for “{query}”. Try a weave, a colour, or a piece&rsquo;s name.
        </p>
      ) : null}

      {results.collections.length > 0 ? (
        <Group title="Collections">
          <ul className="space-y-3">
            {results.collections.map((collection) => (
              <li key={collection.handle}>
                <Link
                  href={`/collections/${collection.handle}`}
                  className="font-display text-h4 text-ink hover:underline"
                >
                  {collection.title}
                </Link>
              </li>
            ))}
          </ul>
        </Group>
      ) : null}

      {results.pages.length > 0 ? (
        <Group title="Reading">
          <ul className="space-y-4">
            {results.pages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/pages/${page.slug}`}
                  className="font-display text-h4 text-ink hover:underline"
                >
                  {page.title}
                </Link>
                <p className="text-caption mt-1 max-w-prose text-ink-body">
                  {page.standfirst}
                </p>
              </li>
            ))}
          </ul>
        </Group>
      ) : null}

      {results.products.length > 0 ? (
        <Group title="Pieces">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
            {results.products.map((product) => (
              <li key={product.handle}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </Group>
      ) : null}
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-rule py-10">
      <h2 className="eyebrow mb-6 text-ink-muted">{title}</h2>
      {children}
    </section>
  );
}
