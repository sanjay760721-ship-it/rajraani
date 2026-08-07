import Image from "next/image";
import Link from "next/link";

import { PLACEHOLDER_WASH, toneFor } from "../Frame";
import { ProductCard } from "../ProductCard";
import { catalogue } from "@/lib/data/catalogue";
import { sortProducts } from "@/lib/facets/engine";
import type { ArtPair, Section } from "@/lib/content/sections";

/**
 * Section registry.
 *
 * A page is an ordered list of typed sections and this switch is the only place
 * that knows how each renders. Adding a section type is a new union member plus
 * a new case — no page changes, and no engineer needed to compose a page once
 * the types exist (build.md §6).
 */
export async function SectionRenderer({
  section,
  index = 1,
}: {
  section: Section;
  /**
   * Position on the page. Only the section at index 0 may own the `h1`, which
   * is how a hero can be a page title on the homepage and a sub-heading
   * further down without either case hardcoding a level.
   */
  index?: number;
}) {
  switch (section.type) {
    case "hero":
      return <Hero section={section} isPageTitle={index === 0} />;
    case "brandStatement":
      return <BrandStatement section={section} />;
    case "collectionTriptych":
      return <CollectionTriptych section={section} />;
    case "productRail":
      return <ProductRail section={section} />;
    case "editorialPair":
      return <EditorialPair section={section} />;
    case "poetryBand":
      return <PoetryBand section={section} />;
    case "richText":
      return <RichText section={section} />;
    case "pullQuote":
      return <PullQuote section={section} />;
  }
}

/**
 * Art-directed placeholder.
 *
 * The desktop/mobile pair is honoured with a `<picture>`-equivalent swap: the
 * two tones differ, so the art direction is visibly a pair rather than a CSS
 * resize of one asset (design.md §3.7).
 */
function Art({
  art,
  className = "",
  alt = "",
  priority = false,
}: {
  art: ArtPair;
  className?: string;
  alt?: string;
  /** Set on the hero only — it is the LCP element. */
  priority?: boolean;
}) {
  /**
   * One crop per breakpoint, as separate elements rather than a CSS resize —
   * the mobile frame is a recomposition, not the same photograph scaled
   * (addendum A7).
   *
   * When a pair carries no `src` it falls back to the schematic colour field,
   * so deleting the reference folder degrades to a blank rather than to a
   * broken image icon.
   */
  const crop = (
    side: ArtPair["desktop"],
    visibility: string,
    sizes: string,
    priority: boolean,
  ) =>
    side.src ? (
      // next/image rather than a bare <img>: these slots hold the LCP element
      // on the homepage, and the format negotiation and srcset ladder
      // configured in next.config.ts apply here too.
      <div
        className={`relative ${visibility} ${className}`}
        style={{ backgroundColor: toneFor(side.tone) }}
      >
        <Image
          src={side.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    ) : (
      <div
        aria-hidden
        className={`${visibility} ${className}`}
        style={{
          backgroundColor: toneFor(side.tone),
          backgroundImage: PLACEHOLDER_WASH,
        }}
      />
    );

  return (
    <>
      {crop(art.mobile, "md:hidden", "100vw", priority)}
      {crop(art.desktop, "hidden md:block", "(min-width: 1440px) 1600px, 100vw", priority)}
    </>
  );
}

function Hero({
  section,
  isPageTitle,
}: {
  section: Extract<Section, { type: "hero" }>;
  isPageTitle: boolean;
}) {
  const Heading = isPageTitle ? "h1" : "h2";
  return (
    <section className="relative">
      <Art
        art={section.art}
        className="h-[70vh] max-h-[820px] min-h-[440px] w-full"
        priority
      />
      <div className="absolute inset-0 flex items-end">
        <div className="wrap-wide pb-14">
          <div className="max-w-prose">
            {section.eyebrow ? (
              <p className="eyebrow text-bg/80">{section.eyebrow}</p>
            ) : null}
            <Heading className="text-display mt-3 text-bg">{section.title}</Heading>
            <p className="text-prose mt-4 text-bg/90">{section.body}</p>
            <Link href={section.ctaHref} className="cta mt-6 inline-block text-bg">
              {section.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStatement({
  section,
}: {
  section: Extract<Section, { type: "brandStatement" }>;
}) {
  return (
    <section className="wrap-prose py-24 text-center md:py-32">
      <p className="font-display text-h1 text-ink">{section.quote}</p>
      <p className="text-prose mt-6 text-ink-body">{section.body}</p>
    </section>
  );
}

function CollectionTriptych({
  section,
}: {
  section: Extract<Section, { type: "collectionTriptych" }>;
}) {
  return (
    <section className="wrap-wide py-16">
      <div className="grid grid-cols-3 gap-4">
        {section.art.map((art, index) => (
          <Link key={index} href={section.ctaHref}>
            <Art art={art} className="aspect-square w-full" />
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-prose text-center">
        <h2 className="text-h2">{section.title}</h2>
        <p className="text-prose mt-4 text-ink-body">{section.body}</p>
        <Link href={section.ctaHref} className="cta mt-6 inline-block">
          {section.ctaLabel}
        </Link>
      </div>
    </section>
  );
}

async function ProductRail({
  section,
}: {
  section: Extract<Section, { type: "productRail" }>;
}) {
  const collection = await catalogue.getCollection(section.collectionHandle);
  if (!collection) return null;

  const products = sortProducts(
    await catalogue.productsInCollection(collection),
    "featured",
  ).slice(0, 4);

  return (
    <section className="wrap-wide py-16">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="text-h2">{section.title}</h2>
        <Link href={`/collections/${section.collectionHandle}`} className="cta">
          {section.ctaLabel}
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
        {products.map((product) => (
          <li key={product.handle}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function EditorialPair({
  section,
}: {
  section: Extract<Section, { type: "editorialPair" }>;
}) {
  return (
    <section className="wrap-wide grid gap-12 py-16 md:grid-cols-2">
      {section.items.map((item) => (
        <article key={item.ctaHref}>
          <Link href={item.ctaHref}>
            <Art art={item.art} className="aspect-square w-full" />
          </Link>
          <h2 className="text-h3 mt-6">{item.title}</h2>
          <p className="text-prose mt-3 text-ink-body">{item.body}</p>
          <Link href={item.ctaHref} className="cta mt-5 inline-block">
            {item.ctaLabel}
          </Link>
        </article>
      ))}
    </section>
  );
}

function PoetryBand({
  section,
}: {
  section: Extract<Section, { type: "poetryBand" }>;
}) {
  return (
    <section className="bg-bg-alt py-24 md:py-32">
      <div className="wrap-prose text-center">
        <h2 className="text-h2">{section.heading}</h2>
        <p className="text-prose mt-5 text-ink-body">{section.body}</p>
      </div>
    </section>
  );
}

function RichText({ section }: { section: Extract<Section, { type: "richText" }> }) {
  return (
    <section className="wrap-prose py-12">
      {section.heading ? <h2 className="text-h3 mb-5">{section.heading}</h2> : null}
      <div className="space-y-5">
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-prose text-ink-body">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function PullQuote({ section }: { section: Extract<Section, { type: "pullQuote" }> }) {
  return (
    <figure className="wrap-prose py-16 text-center">
      <blockquote className="font-display text-h2 text-ink italic">
        {section.quote}
      </blockquote>
      {section.attribution ? (
        <figcaption className="eyebrow mt-5 text-ink-muted">
          {section.attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
