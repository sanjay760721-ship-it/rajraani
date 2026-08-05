import Link from "next/link";
import { notFound } from "next/navigation";

import { BuyBlock } from "@/components/BuyBlock";
import { Gallery } from "@/components/Gallery";
import { Price } from "@/components/Price";
import { ProductCard } from "@/components/ProductCard";
import { BRAND, INFO_TABS } from "@/lib/brand";
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

  const related = (await catalogue.listProducts())
    .filter(
      (candidate) =>
        candidate.handle !== product.handle && candidate.weave === product.weave,
    )
    .slice(0, 4);

  return (
    <div className="wrap-wide pb-24">
      <nav aria-label="Breadcrumb" className="py-5">
        <ol className="eyebrow flex flex-wrap gap-2 text-ink-muted">
          <li>
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/collections/sarees" className="hover:text-ink">
              Shop
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page">{product.poeticName}</li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-16">
        <Gallery images={product.images} colourSlug={product.colourFamily} />

        {/* The details column is sticky while the gallery scrolls. */}
        <div className="lg:sticky lg:top-28">
          <h1 className="text-h2">{product.title}</h1>
          <p className="eyebrow mt-2 text-ink-muted">{product.sku}</p>

          <p className="mt-5 text-h3 text-ink">
            <Price value={product.price} />
          </p>
          <p className="text-caption text-ink-muted italic">MRP inclusive of taxes</p>

          {/* The named piece. First-class, and linkable from editorial. */}
          <h2 className="mt-8 font-display text-h3 text-ink">{product.poeticName}</h2>
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

      <section aria-label="Product information" className="mt-16 max-w-prose">
        {INFO_TABS.map((tab) => (
          <details key={tab.id} className="border-b border-rule py-4">
            <summary className="eyebrow cursor-pointer text-ink">{tab.label}</summary>
            <ul className="mt-4 space-y-2 text-caption text-ink-body">
              {tab.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </section>

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="text-h3 mb-8">Others in the same technique</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((candidate) => (
              <li key={candidate.handle}>
                <ProductCard product={candidate} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ProductJsonLd product={product} />
    </div>
  );
}

/** Structured fields, never pasted HTML (build.md §6 Content fidelity). */
function SpecList({ product }: { product: Product }) {
  const rows: [string, string | undefined][] = [
    ["Colour", product.spec.colour],
    ["Technique", product.spec.technique],
    ["Fabric", product.spec.fabric],
    ["Speciality", product.spec.speciality],
    ["Collection note", product.spec.collectionNote],
    ["Our promise", BRAND.promise],
    ["Note", product.spec.note],
  ];

  return (
    <dl className="mt-6 space-y-2 text-caption">
      {rows.map(([label, value]) =>
        value ? (
          <div key={label} className="flex gap-2">
            <dt className="shrink-0 font-semibold text-ink italic">{label} —</dt>
            <dd className="text-ink-body">{value}</dd>
          </div>
        ) : null,
      )}
    </dl>
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
      {
        "@type": "PropertyValue",
        name: "Weave",
        value: findTerm("weave", product.weave)?.name ?? product.weave,
      },
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
