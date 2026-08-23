import Image from "next/image";
import Link from "next/link";

import { HeroCarousel } from "./HeroCarousel";
import { EditorialSlideshow } from "./EditorialSlideshow";
import { StoresSlideshow } from "./StoresSlideshow";
import { CampaignSlideshow } from "./CampaignSlideshow";
import { VideoPlayer } from "./VideoPlayer";
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
    case "campaignSlideshow":
      return <CampaignSlideshow slides={section.slides} />;
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
    <section className="wrap-wide section-pad text-center">
      <p className="text-h1 text-ink">&ldquo;{section.quote}&rdquo;</p>
      {/*
       * The body runs as ONE line on desktop, which is why it is not inside
       * `wrap-prose` like the rest of the text bands: a prose measure wraps it
       * to three. `nowrap` is gated at `md` so the sentence still breaks
       * normally on a phone, where one line would mean a horizontal scrollbar.
       */}
      <p className="text-body mt-4 text-ink-body md:whitespace-nowrap">
        {section.body}
      </p>
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
      {/*
        * 380x501 tiles, 20px apart.
        *
        * Constrained here rather than inheriting `wrap-wide`, which is capped
        * at --container-site (1600px). At that width three tiles come out
        * around 507px each and the band reads a third too large. 1180 is the
        * measured content width: 380*3 + 20*2.
        */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-3 gap-5">
        {section.art.map((art, index) => (
          <Link
            key={index}
            href={section.artHrefs?.[index] ?? section.ctaHref}
            className="group overflow-hidden"
          >
            {/*
              * Portrait, not square.
              *
              * The masters are portrait and the band renders them at 380x501,
              * a ratio of 0.76. A square frame cropped a third off every one of
              * them, which on a full-length drape is the part worth showing.
              */}
            <Art
              art={art}
              className="aspect-[380/501] w-full transition-transform duration-600 ease-brand group-hover:scale-103"
            />
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-h2">{section.title}</h2>
        {/*
          * Two centred lines.
          *
          * The measure is set to break roughly in half rather than left to the
          * container, and `text-balance` evens the two so the second is not a
          * short orphan. One line was never realistic at this length — 212
          * characters needs about 1400px, which no ordinary window has.
          */}
        <p className="text-body mt-3 mx-auto max-w-[720px] text-balance text-ink-body">
          {section.body}
        </p>
        {/*
          * `cta-link` keeps its rule hidden until hover. Here it stays drawn —
          * this is the band's only exit, so it has to read as a link at rest.
          */}
        <Link
          href={section.ctaHref}
          className="cta-link is-drawn mt-6 inline-block"
        >
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
          <VideoPlayer
            src={section.videoSrc}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <Art art={section.art} className="absolute inset-0 h-full w-full opacity-60" />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
        />
        <div className="pointer-events-none absolute inset-0 flex items-end p-8 md:p-14">
          <div className="max-w-[44ch] pointer-events-auto">
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
              {/*
                * A scrim the reference does not have.
                *
                * There the label is white on bare photograph, which works
                * because their frames are dark in that corner. Ours are not
                * chosen for it, and white on a pale hem is unreadable. This is
                * the least that guarantees legibility; delete it once the
                * commissioned shoot controls what is in that corner.
                */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent"
              />
              {/*
                * Caption inside the frame, bottom-left: absolute at left 0 /
                * bottom 0 with 20px of padding, Cardo 16px in white. Measured.
                * Weight is 400 on the reference, not bold — it reads heavy
                * because it is white over a photograph, not because it is bold.
                */}
              <span className="absolute bottom-0 left-0 z-[2] p-5 font-display text-[16px] font-normal text-white">
                {item.label}
              </span>
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
    /*
     * Full-bleed, not a contained measure.
     *
     * Measured off the reference at a 1920 viewport: four tiles 456px wide with
     * 20px between them, spanning 1886px — 98% of the window. The tiles scale
     * with the viewport rather than stopping at a max-width, which is why an
     * 1180px cap made this band read small next to the original.
     *
     * The ratio is what stays fixed: 0.757, near enough 280/369.
     *
     * 32px above and below.
     *
     * The top figure is measured — the slideshow ends at 107 and the tiles
     * begin at 139. The bottom was a guess against the edge of a screenshot, so
     * it is matched to the top rather than invented: an even band is the safer
     * default, and it is the one that survives a section being reordered.
     */
    <section className="py-8">
      <div className="grid grid-cols-2 gap-5 px-[10px] md:grid-cols-4">
        {section.items.map((item) => (
          /*
           * `aria-label` because nothing here renders text: the lettering is
           * inside the photograph. Without it this is a link containing only an
           * image, and a screen reader announces it as "link" and nothing else.
           */
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="group block overflow-hidden"
          >
            <div className="relative aspect-[280/369] w-full overflow-hidden">
              <Art
                art={item.art}
                className="h-full w-full transition-transform duration-600 ease-brand group-hover:scale-103"
              />
              {/*
                * No label overlay, and no scrim to support one.
                *
                * These four frames carry their own lettering — it is part of
                * the artwork, which is why the reference renders this band with
                * no text nodes at all. Drawing `item.label` over the top of
                * them printed every word twice.
                *
                * `item.label` still exists and still does work: it is the
                * accessible name of the link and the React key. It just is not
                * painted.
                */}
            </div>
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
    /*
     * `text-center` sits on the section, not on the paragraphs.
     *
     * It used to be on the inner <div> only, so the body centred while the
     * heading above it and the link below it stayed ranged left — three
     * elements in a column, disagreeing about their own axis.
     */
    <section className="wrap-prose section-pad text-center" style={{ backgroundColor: "var(--color-bg)", backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0), var(--color-bg))" }}>
      {section.heading ? <h2 className="text-h3 mb-5">{section.heading}</h2> : null}
      <div className="space-y-5">
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-ink-body">{paragraph}</p>
        ))}
      </div>
      {section.ctaLabel && section.ctaHref ? (
        <div className="mt-6">
          <Link href={section.ctaHref} className="cta-link">
            {section.ctaLabel}
          </Link>
        </div>
      ) : null}
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