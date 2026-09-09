import Link from "next/link";
import { notFound } from "next/navigation";

import { BuyBlock } from "@/components/BuyBlock";
import { Gallery } from "@/components/Gallery";
import { InfoPanels } from "@/components/InfoPanels";
import { Price } from "@/components/Price";
import { ProductCard } from "@/components/ProductCard";
import { BRAND } from "@/lib/brand";
import { catalogue } from "@/lib/data/catalogue";
import { COLOURS, findTerm } from "@/lib/domain/taxonomy";
import { isAvailable, type Product } from "@/lib/domain/types";
import { toMajorUnits } from "@/lib/money";

/** Static, revalidating on a 300s cadence per build.md §3. */
export const revalidate = 300;

/**
 * Read through the repository, not from fixtures.
 *
 * This used to import the fixture array directly, which worked only while the
 * fixtures *were* the catalogue. Once a product can be added in the admin, a
 * hardcoded list means the new product has no page generated for it — it would
 * 404 until the next deploy.
 */
export async function generateStaticParams() {
  const products = await catalogue.listProducts();
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata(props: PageProps<"/products/[handle]">) {
  const { handle } = await props.params;
  const product = await catalogue.getProduct(handle);
  if (!product) return {};

  return {
    // No fulfilment state leaks in here, because there is none in the title
    // to leak (§9.8).
    title: `${product.poeticName} — ${product.title}`,
    description: product.narrative.slice(0, 160),
  };
}

export default async function ProductPage(props: PageProps<"/products/[handle]">) {
  const { handle } = await props.params;
  const product = await catalogue.getProduct(handle);
  if (!product) notFound();

  /**
   * Related pieces share the weave — the strongest craft signal on the page.
   * A stitched garment has none, so it falls back to garment type; without that
   * fallback every weaveless piece would match every other one on
   * `undefined === undefined` and the rail would fill with unrelated suits.
   */
  /**
   * The collection this piece sits in, for the breadcrumb and the prev/next
   * pair (design.md §6.3). Resolved from the product's own garment type rather
   * than hardcoded — a suit's breadcrumb pointing at "Sarees" is the kind of
   * error that only shows up on the one page nobody checks.
   */
  const collections = await catalogue.listCollections();
  const garmentCollection = collections.find(
    (candidate) =>
      candidate.kind === "facet" &&
      candidate.facets.garment?.includes(product.garmentType),
  );

  const siblings = garmentCollection
    ? await catalogue.productsInCollection(garmentCollection)
    : [];
  const position = siblings.findIndex((entry) => entry.handle === product.handle);
  const previous = position > 0 ? siblings[position - 1] : undefined;
  const next =
    position >= 0 && position < siblings.length - 1
      ? siblings[position + 1]
      : undefined;

  const others = (await catalogue.listProducts()).filter(
    (candidate) => candidate.handle !== product.handle,
  );

  /**
   * Ranked, not filtered.
   *
   * This was a hard filter on shared weave, which emptied the rail on almost
   * every page: weave is a narrow key, and once the catalogue is limited to
   * photographed pieces most weaves have exactly one member. An empty
   * recommendation rail is worse than an imperfect one — the reference always
   * shows three. So the weave match now sorts rather than excludes, with
   * garment type and fabric behind it, and the rail fills from whatever is
   * left over.
   */
  const affinity = (candidate: Product) =>
    (product.weave && candidate.weave === product.weave ? 4 : 0) +
    (candidate.garmentType === product.garmentType ? 2 : 0) +
    (candidate.fabric === product.fabric ? 1 : 0);

  const related = [...others]
    .sort((a, b) => affinity(b) - affinity(a))
    .slice(0, 3);

  return (
    <div className="wrap pb-24">
      {/* Breadcrumb left, prev/next right, on one row (design.md §6.3). */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 py-5">
        <nav aria-label="Breadcrumb">
          <ol className="eyebrow flex flex-wrap gap-2 text-ink-muted">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden>&rarr;</li>
            {garmentCollection ? (
              <>
                <li>
                  <Link
                    href={`/collections/${garmentCollection.handle}`}
                    className="hover:text-ink"
                  >
                    {garmentCollection.title}
                  </Link>
                </li>
                <li aria-hidden>&rarr;</li>
              </>
            ) : null}
            {/* The full descriptive title, not the poetic name — the crumb has
                to match the h1 it leads to (design-addendum §A5 item 1). */}
            <li aria-current="page" className="text-ink">
              {product.title}
            </li>
          </ol>
        </nav>

        <PrevNext previous={previous} next={next} />
      </div>

      {/* Two equal columns — measured 580/580 in a 1160 container, not 58/42
          (design-addendum §A5.2). The details column does not stick; the
          reference's is `position: static` and the two columns run to roughly
          the same depth, so there is nothing for it to stick against. */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-5">
        <Gallery images={product.images} colourSlug={product.colourFamily} />

        <div>
          <FulfilmentBadge product={product} />
          <h1 className="text-h2">{product.title}</h1>
          <p className="eyebrow mt-2 text-ink-muted">{product.sku}</p>

          <p className="mt-5 text-h3 text-ink">
            <Price value={product.price} />
          </p>
          <p className="text-caption text-ink-muted italic">MRP inclusive of taxes</p>

          {/* The named piece. The reference sets this as a bold run inside the
              body copy rather than a heading (§A5.2 item 5) — matched here,
              except that it keeps a heading role so the page outline still
              names the piece. §5's heading-order rule is not negotiable. */}
          <h2 className="mt-8 font-display text-[1.1875rem] font-semibold text-ink">
            {product.poeticName}
          </h2>
          <p className="text-prose mt-3 text-ink-body">{product.narrative}</p>

          <SpecList product={product} />

          <p className="text-caption mt-6 text-ink-muted italic">
            {BRAND.irregularityNote}
          </p>

          <div className="mt-8">
            <BuyBlock product={product} />
          </div>
        </div>
      </div>

      <ProvenanceBlock product={product} />

      <InfoPanels />

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="mb-10 text-center font-display text-h2 text-ink">
            You may also like
          </h2>
          {/* Three across, not four — measured on the reference rail. */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            {related.map((candidate) => (
              <li key={candidate.handle}>
                <ProductCard product={candidate} quickView />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd product={product} collection={garmentCollection} />
    </div>
  );
}

/**
 * Prev / next within the garment collection.
 *
 * design.md §6.3: top-right, 11px uppercase muted. It exists because a shopper
 * comparing single pieces otherwise has to go back to the grid between every
 * two products, and on a catalogue where every piece is unique that is the main
 * way the page gets browsed.
 */
function PrevNext({
  previous,
  next,
}: {
  previous?: Product;
  next?: Product;
}) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Adjacent pieces" className="eyebrow flex gap-5 text-ink-muted">
      {previous ? (
        <Link
          href={`/products/${previous.handle}`}
          rel="prev"
          className="hover:text-ink"
        >
          ← Previous
        </Link>
      ) : null}
      {next ? (
        <Link href={`/products/${next.handle}`} rel="next" className="hover:text-ink">
          Next →
        </Link>
      ) : null}
    </nav>
  );
}

/**
 * The attribute list.
 *
 * Structured fields, never pasted HTML (build.md §6 Content fidelity). Label
 * grammar and the plain hyphen separator are measured (§A5.2 item 7) — the
 * earlier spec had an en dash. `Speciality` is genuinely optional; it was absent
 * on the SKU re-measured.
 *
 * Dispatch time is a row here rather than a separate paragraph, which is where
 * the reference puts it and where it is actually looked for.
 */
function SpecList({ product }: { product: Product }) {
  const rows: [string, string | undefined][] = [
    ["Colour", product.spec.colour],
    ["Technique", product.spec.technique],
    ["Fabric", product.spec.fabric],
    ["Speciality", product.spec.speciality],
    ["Collection note", product.spec.collectionNote],
    // Ours, never the reference's own phrasing of it — build.md §6.
    ["Our promise", BRAND.promise],
    [
      "Expected despatch",
      `${product.dispatchLeadDays[0]}–${product.dispatchLeadDays[1]} business days`,
    ],
    ["Note", product.spec.note],
  ];

  return (
    <ul className="mt-6 list-disc space-y-2 pl-5 text-caption marker:text-ink-muted">
      {rows.map(([label, value]) =>
        value ? (
          <li key={label} className="text-ink-body">
            <span className="font-semibold text-ink italic">{label}</span>
            {" - "}
            {/* The Note row is set in italic on the reference — it is an
                aside about styling, not an attribute of the cloth. */}
            <span className={label === "Note" ? "italic" : undefined}>{value}</span>
          </li>
        ) : null,
      )}
    </ul>
  );
}

/**
 * Fulfilment state, above the title.
 *
 * A filled pill in the details column (§A5.2 item 1) — not on the image, and
 * not welded into the title the way the reference does it, which is the
 * data-modelling error §9.8 exists to avoid.
 */
function FulfilmentBadge({ product }: { product: Product }) {
  const label = !isAvailable(product)
    ? "Sold out"
    : product.fulfilmentMode === "pre_order"
      ? "Pre-order"
      : product.fulfilmentMode === "made_to_order"
        ? "Made to order"
        : undefined;

  if (!label) return null;

  return (
    <p className="eyebrow mb-3 inline-block bg-accent px-2.5 py-1 text-bg">
      {label}
    </p>
  );
}

/**
 * Provenance, in place of reviews.
 *
 * The category carries no reviews, ratings or UGC anywhere — deliberate for
 * luxury positioning — but nothing replaces them, which leaves the PDP with no
 * credibility surface at all (build.md §9.4). Attribution, loom, time on the
 * loom and hands involved suit this brand better than stars, and it is content
 * the editorial function is already producing.
 */
function ProvenanceBlock({ product }: { product: Product }) {
  const { provenance } = product;
  const facts: [string, string][] = [
    ["Woven at", provenance.workshop],
    ["Loom", provenance.loom],
    ["Time on the loom", `${provenance.weaveTimeWeeks} weeks`],
    [
      "Hands involved",
      `${provenance.artisanCount} ${provenance.artisanCount === 1 ? "weaver" : "weavers"}`,
    ],
  ];

  return (
    <section className="mt-20 border-y border-rule bg-bg-alt px-6 py-12 md:px-12">
      <h2 className="text-h3">Where this came from</h2>
      <dl className="mt-8 grid gap-8 md:grid-cols-4">
        {facts.map(([label, value]) => (
          <div key={label}>
            <dt className="eyebrow text-ink-muted">{label}</dt>
            <dd className="mt-2 font-display text-h4 text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/**
 * BreadcrumbList.
 *
 * design.md §6.3 asks for this beside the Product schema; it was the one piece
 * of the specified structured data the page did not emit.
 */
function BreadcrumbJsonLd({
  product,
  collection,
}: {
  product: Product;
  collection?: { handle: string; title: string };
}) {
  const trail = [
    { name: "Home", url: "/" },
    ...(collection
      ? [{ name: collection.title, url: `/collections/${collection.handle}` }]
      : []),
    { name: product.title, url: `/products/${product.handle}` },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Full Product schema.
 *
 * pre-build-gaps.md §6 measured the reference site's as thin: name, image,
 * description, brand, sku, offers only — and **one image** where the PDP has
 * six to eight. Every gallery image ships here, plus material, color and the
 * weave/motif vocabulary as additionalProperty, all of which are rich-result
 * eligible and obvious for textiles.
 */
function ProductJsonLd({ product }: { product: Product }) {
  const colour = COLOURS.find((entry) => entry.slug === product.colourFamily);

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.poeticName} — ${product.title}`,
    sku: product.sku,
    description: product.narrative,
    brand: { "@type": "Brand", name: BRAND.name },
    material: findTerm("fabric", product.fabric)?.name ?? product.fabric,
    color: colour?.name ?? product.colourFamily,
    image: product.images.map((image) => image.id),
    additionalProperty: [
      // Omitted rather than sent empty when the garment has no loom technique:
      // a PropertyValue with no value is worse structured data than no property.
      ...(product.weave
        ? [
            {
              "@type": "PropertyValue",
              name: "Weave",
              value: findTerm("weave", product.weave)?.name ?? product.weave,
            },
          ]
        : []),
      {
        "@type": "PropertyValue",
        name: "Motifs",
        value: product.motifs
          .map((motif) => findTerm("motif", motif)?.name ?? motif)
          .join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Zari",
        value: product.zariTypes
          .map((zari) => findTerm("zari", zari)?.name ?? zari)
          .join(", "),
      },
    ],
    offers: {
      "@type": "Offer",
      price: toMajorUnits(product.price),
      priceCurrency: product.price.currency,
      availability: isAvailable(product)
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
