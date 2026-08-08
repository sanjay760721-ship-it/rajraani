import Image from "next/image";
import Link from "next/link";

import { HeroCarousel } from "./HeroCarousel";
import { EditorialSlideshow } from "./EditorialSlideshow";
import { StoresSlideshow } from "./StoresSlideshow";
import { PLACEHOLDER_WASH, toneFor } from "../Frame";
import { ProductCard } from "../ProductCard";
import { ScrollReveal } from "../ScrollReveal";
import { catalogue } from "@/lib/data/catalogue";
import { sortProducts } from "@/lib/facets/engine";
import type { ArtPair, Section } from "@/lib/content/sections";

export async function SectionRenderer({
  section,
  index = 1,
}: {
  section: Section;
  index?: number;
}) {
  switch (section.type) {
    case "hero":
      return <Hero section={section} isPageTitle={index === 0} />;
    case "heroCarousel":
      return <HeroCarousel slides={section.slides} isPageTitle={index === 0} />;
    case "brandStatement":
      return (
        <ScrollReveal>
          <BrandStatement section={section} />
        </ScrollReveal>
      );
    case "collectionTriptych":
      return (
        <ScrollReveal>
          <CollectionTriptych section={section} />
        </ScrollReveal>
      );
    case "videoBand":
      return (
        <ScrollReveal>
          <VideoBand section={section} />
        </ScrollReveal>
      );
    case "categorySplit":
      return (
        <ScrollReveal>
          <CategorySplit section={section} />
        </ScrollReveal>
      );
    case "tileRow":
      return (
        <ScrollReveal>
          <TileRow section={section} />
        </ScrollReveal>
      );
    case "editorialPair":
      return (
        <ScrollReveal>
          <EditorialPair section={section} />
        </ScrollReveal>
      );
    case "editorialSlideshow":
      return <EditorialSlideshow slides={section.slides} />;
    case "storesSlideshow":
      return <StoresSlideshow slides={section.slides} />;
    case "poetryBand":
      return (
        <ScrollReveal>
          <PoetryBand section={section} />
        </ScrollReveal>
      );
    case "productRail":
      return (
        <ScrollReveal>
          <ProductRail section={section} />
        </ScrollReveal>
      );
    case "hereToHelp":
      return (
        <ScrollReveal>
          <HereToHelp section={section} />
        </ScrollReveal>
      );
    case "storesBand":
      return (
        <ScrollReveal>
          <StoresBand section={section} />
        </ScrollReveal>
      );
    case "dualCampaign":
      return (
        <ScrollReveal>
          <DualCampaign section={section} />
        </ScrollReveal>
      );
    case "richText":
      return (
        <ScrollReveal>
          <RichText section={section} />
        </ScrollReveal>
      );
    case "pullQuote":
      return (
        <ScrollReveal>
          <PullQuote section={section} />
        </ScrollReveal>
      );
  }
}

function Art({
  art,
  className = "",
  alt = "",
  priority = false,
}: {
  art: ArtPair;
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  const crop = (
    side: ArtPair["desktop"],
    visibility: string,
    sizes: string,
    priority: boolean,
  ) =>
    side.src ? (
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
          quality={90}
          className="object-cover object-center"
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
        className="h-[82vh] max-h-[900px] min-h-[520px] w-full"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent"
      />
      <div className="absolute inset-0 flex items-end">
        <div className="wrap-wide pb-16 md:pb-24">
          <div className="max-w-[46ch]">
            {section.eyebrow ? (
              <p className="eyebrow text-bg/75">{section.eyebrow}</p>
            ) : null}
            <Heading className="text-display mt-4 text-bg">{section.title}</Heading>
            <p className="text-prose mt-5 max-w-[38ch] text-bg/85">{section.body}</p>
            <Link href={section.ctaHref} className="cta-primary mt-8 inline-block">
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
    <section className="wrap-prose section-pad text-center">
      <p className="text-h1 text-ink">&ldquo;{section.quote}&rdquo;</p>
      <p className="text-body mt-4 text-ink-body">{section.body}</p>
    </section>
  );
}

function CollectionTriptych({
  section,
}: {
  section: Extract<Section, { type: "collectionTriptych" }>;
}) {
  return (
    <section className="wrap-wide section-pad has-gutter" data-scroll-class="fadeInDown">
      <div className="grid grid-cols-3 gap-6">
        {section.art.map((art, index) => (
          <Link key={index} href={section.ctaHref} className="group overflow-hidden">
            <Art
              art={art}
              className="aspect-square w-full transition-transform duration-600 ease-brand group-hover:scale-103"
            />
          </Link>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-prose text-center">
        <h2 className="text-h2">{section.title}</h2>
        <p className="text-body mt-3 text-ink-body">{section.body}</p>
        <Link href={section.ctaHref} className="cta-link mt-6 inline-block">
          {section.ctaLabel}
        </Link>
      </div>
    </section>
  );
}

function VideoBand({
  section,
}: {
  section: Extract<Section, { type: "videoBand" }>;
}) {
  return (
    <section className="is-width-wide section-pad-vertical" style={{ paddingTop: "20px" }}>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {section.videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src={section.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Art art={section.art} className="absolute inset-0 h-full w-full opacity-60" />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
        />
        <div className="absolute inset-0 flex items-end p-8 md:p-14">
          <div className="max-w-[44ch]">
            <span className="eyebrow block text-bg/80">HANDLOOM HERITAGE</span>
            <h2 className="text-display mt-2 text-bg">{section.title}</h2>
            <p className="text-prose mt-3 text-bg/90">{section.body}</p>
            <Link
              href={section.ctaHref}
              className="cta-link mt-6 inline-block text-bg border-b border-bg/50 hover:border-bg"
            >
              {section.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySplit({
  section,
}: {
  section: Extract<Section, { type: "categorySplit" }>;
}) {
  return (
    <section className="is-width-wide has-gutter section-pad-vertical" style={{ paddingTop: "39px", paddingBottom: "20px" }}>
      <div className="grid grid-cols-2 gap-6">
        {section.items.map((item) => (
          <Link key={item.label} href={item.href} className="group block overflow-hidden">
            <div className="relative overflow-hidden" style={{ aspectRatio: "2000/2415" }}>
              <Art
                art={item.art}
                className="h-full w-full transition-transform duration-600 ease-brand group-hover:scale-103"
              />
            </div>
            <div className="py-4 text-center">
              <span className="text-quicklink group-hover:underline">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TileRow({
  section,
}: {
  section: Extract<Section, { type: "tileRow" }>;
}) {
  return (
    <section className="is-width-wide has-gutter">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 gap-6">
        {section.items.map((item) => (
          <Link key={item.label} href={item.href} className="group block overflow-hidden">
            <div className="aspect-square w-full relative overflow-hidden">
              <Art
                art={item.art}
                className="h-full w-full transition-transform duration-600 ease-brand group-hover:scale-103"
              />
            </div>
            <span className="text-quicklink mt-3 block group-hover:underline">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/*
 * Restored from 69335d2. These four renderers were dropped from the working
 * copy while the slideshow sections were being added, but their `case` arms
 * and their members of the `Section` union both survived — so the module
 * stopped compiling. Recovered verbatim; no behaviour change.
 */
function DualCampaign({
  section,
}: {
  section: Extract<Section, { type: "dualCampaign" }>;
}) {
  return (
    <section className="wrap-wide grid gap-10 py-16 md:grid-cols-2 md:gap-14 md:py-24">
      {section.items.map((item) => (
        <article key={item.title} className="group">
          <Link href={item.ctaHref} className="block overflow-hidden">
            <Art
              art={item.art}
              className="aspect-square w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Link>
          <div className="mt-6 max-w-[44ch]">
            <h2 className="text-h2">{item.title}</h2>
            <p className="text-prose mt-3 text-ink-body">{item.body}</p>
            <Link href={item.ctaHref} className="cta mt-5 inline-block">
              {item.ctaLabel}
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}

function StoresBand({
  section,
}: {
  section: Extract<Section, { type: "storesBand" }>;
}) {
  return (
    <section className="relative my-16 overflow-hidden bg-bg-sand py-24 md:py-32">
      <div className="wrap-wide relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Art art={section.art} className="aspect-[4/3] w-full object-cover" />
        </div>
        <div className="max-w-prose">
          <span className="eyebrow text-ink-muted">RETAIL GALLERIES</span>
          <h2 className="text-h1 mt-3 text-ink">{section.title}</h2>
          <p className="text-prose mt-4 text-ink-body">{section.body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {section.stores.map((store) => (
              <Link
                key={store.name}
                href={store.href}
                className="btn-secondary inline-block px-6 py-3 text-xs tracking-widest uppercase border border-ink text-ink hover:bg-ink hover:text-bg transition-colors"
              >
                {store.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HereToHelp({
  section,
}: {
  section: Extract<Section, { type: "hereToHelp" }>;
}) {
  return (
    <section className="border-t border-rule bg-bg-alt py-16 text-center">
      <div className="wrap-prose px-4">
        <h2 className="eyebrow tracking-widest text-ink">{section.title}</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-ink-body">
          <a href={`mailto:${section.email}`} className="hover:underline">
            {section.email}
          </a>
          <span aria-hidden className="text-rule">•</span>
          <a href={`tel:${section.phone}`} className="hover:underline">
            {section.phone}
          </a>
          <span aria-hidden className="text-rule">•</span>
          <a href={`https://wa.me/${section.phone.replace(/[^0-9]/g, "")}`} className="hover:underline font-medium text-ink">
            {section.whatsapp}
          </a>
        </div>
        <p className="mt-3 text-caption text-ink-muted italic">{section.hours}</p>
      </div>
    </section>
  );
}

function EditorialPair({
  section,
}: {
  section: Extract<Section, { type: "editorialPair" }>;
}) {
  return (
    <section className="wrap-wide grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28 lg:py-32">
      {section.items.map((item) => (
        <article key={item.ctaHref} className="group">
          <Link href={item.ctaHref} className="block overflow-hidden">
            <Art
              art={item.art}
              className="aspect-square w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
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
    <section className="wrap-prose section-pad text-center" style={{ backgroundColor: "var(--color-bg-alt)" }}>
      <h2 className="text-h2">{section.heading}</h2>
      <p className="text-body mt-4 text-ink-body">{section.body}</p>
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
    <section className="wrap-wide section-pad-lg">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="text-h2">{section.title}</h2>
        <Link href={`/collections/${section.collectionHandle}`} className="cta-link">
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

function RichText({ section }: { section: Extract<Section, { type: "richText" }> }) {
  return (
    <section className="wrap-prose section-pad" style={{ backgroundColor: "var(--color-bg)", backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0), var(--color-bg))" }}>
      {section.heading ? <h2 className="text-h3 mb-5">{section.heading}</h2> : null}
      <div className="space-y-5 text-center">
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-ink-body">{paragraph}</p>
        ))}
      </div>
      {section.paragraphs.length > 1 && (
        <div className="mt-6">
          <Link href="/pages/dashashva" className="cta-link">
            DISCOVER
          </Link>
        </div>
      )}
    </section>
  );
}

function PullQuote({ section }: { section: Extract<Section, { type: "pullQuote" }> }) {
  return (
    <figure className="wrap-prose section-pad text-center">
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