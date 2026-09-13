import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { HeroCarousel } from "./HeroCarousel";
import { EditorialSlideshow } from "./EditorialSlideshow";
import { StoresSlideshow } from "./StoresSlideshow";
import { CampaignSlideshow } from "./CampaignSlideshow";
import { VideoPlayer } from "./VideoPlayer";
import { PLACEHOLDER_WASH, toneFor } from "../Frame";
import { ContactForm } from "../ContactForm";
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
    case "imageWithText":
      return (
        <ScrollReveal>
          <ImageWithText section={section} />
        </ScrollReveal>
      );
    case "imageBand":
      return (
        <ScrollReveal>
          <ImageBand section={section} />
        </ScrollReveal>
      );
    case "faqAccordion":
      return (
        <ScrollReveal>
          <FaqAccordion section={section} />
        </ScrollReveal>
      );
    case "mapBand":
      return (
        <ScrollReveal>
          <MapBand section={section} />
        </ScrollReveal>
      );
    case "galleryGrid":
      return (
        <ScrollReveal>
          <GalleryGrid section={section} />
        </ScrollReveal>
      );
    case "contactPanel":
      return (
        <ScrollReveal>
          <ContactPanel section={section} isPageTitle={index === 0} />
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
  // Their campaign pages have no title block; this heading is the page's h1.
  const Heading = section.asPageTitle ? "h1" : "h2";
  return (
    /*
     * `text-center` sits on the section, not on the paragraphs.
     *
     * It used to be on the inner <div> only, so the body centred while the
     * heading above it and the link below it stayed ranged left — three
     * elements in a column, disagreeing about their own axis.
     */
    <section
      className={`section-pad ${section.measure === "content" ? "wrap" : "wrap-prose"} ${section.align === "left" ? "text-left" : "text-center"} ${section.tone ? CAMPAIGN_TONE[section.tone] : ""}`}
      style={{ backgroundColor: "var(--color-bg)", backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0), var(--color-bg))" }}
    >
      {section.heading ? (
        <Heading className="text-h3 mb-5">{section.heading}</Heading>
      ) : null}
      {/*
        * `columns-2` flows the paragraphs into two columns and balances them,
        * which is what `column-count: 2` does on theirs. `space-y` would fight
        * it — margins collapse oddly across a column break — so the spacing
        * goes on the paragraphs instead.
        */}
      <div className={section.columns === 2 ? "md:columns-2 md:gap-16" : "space-y-5"}>
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-body text-ink-body${
              section.columns === 2 ? " mb-5 last:mb-0" : ""
            }${section.italicParagraphs?.includes(index) ? " italic" : ""}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
      {section.ctaLabel && section.ctaHref ? (
        <div className="mt-6">
          <Link
            href={section.ctaHref}
            className={section.tone ? "campaign-cta" : "cta-link"}
          >
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
/*
 * ── The About Us set ───────────────────────────────────────────────────────
 *
 * Type scale note: these use `text-body` and `eyebrow`, which are real
 * `@utility` declarations in globals.css. Several older renderers in this file
 * reach for `text-prose` and `text-caption`, which are not — they were never
 * declared, so they style nothing and the paragraphs under them fall back to
 * the base size. Not fixed here because it is a visual change to the homepage
 * and belongs in its own pass, but do not copy those two class names forward.
 */

function ImageWithText({
  section,
}: {
  section: Extract<Section, { type: "imageWithText" }>;
}) {
  /*
   * Order is set on the columns, not by swapping the JSX.
   *
   * Below `md` the grid is a single column and the image must come first
   * whichever side it takes on desktop — a heading, then prose, then the
   * photograph it refers to reads backwards on a phone. Putting the art first
   * in source and moving it with `order` gets both without duplicating the
   * markup.
   */
  const imageLeft = section.imageSide === "left";

  return (
    /*
     * `wrap` (1200) rather than `wrap-wide` (1600).
     *
     * At 1600 the prose column comes out around 660px on a laptop, which is
     * half again the comfortable measure, and the band runs to the viewport
     * edge while the page title above it sits in a 680px prose column — a step
     * that reads as broken alignment rather than as a change of gear. The
     * closing `fullBleedImage` is the section that is meant to break the
     * container, and it is the only one that does.
     */
    <section
      className={`${section.fullWidth ? "" : "wrap section-pad"} ${
        section.ground ? GROUND[section.ground] : ""
      }`}
    >
      <div
        className={
          section.fullWidth
            ? "grid items-center md:grid-cols-2"
            : "grid items-center gap-10 md:grid-cols-2 md:gap-16"
        }
      >
        <div className={imageLeft ? "md:order-1" : "md:order-2"}>
          {/*
            * Linked when the band has somewhere to go. Their campaign bands
            * wrap the photograph in an anchor to the collection, so the picture
            * is the shortest route to the thing it is a picture of.
            */}
          {section.href ? (
            <Link href={section.href} className="block">
              <BandArt section={section} />
            </Link>
          ) : (
            <BandArt section={section} />
          )}
        </div>

        <div
          className={`${imageLeft ? "md:order-2" : "md:order-1"}${
            /*
             * A full-width band has no container gutter, so the prose would
             * otherwise start at the viewport edge. 30px is their
             * `.image-with-text__text-column` padding; the wide version gets
             * more, because at half of 1500px the measure needs reining in.
             */
            section.fullWidth ? " p-[30px] md:px-12 lg:px-20" : ""
          }`}
        >
          {section.eyebrow ? (
            <p className="eyebrow text-ink-muted">{section.eyebrow}</p>
          ) : null}
          {section.heading ? (
            <h2 className="text-h2 mt-3">{section.heading}</h2>
          ) : null}
          <div className={section.heading || section.eyebrow ? "mt-5 space-y-4" : "space-y-4"}>
            {section.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-body ${section.ground ? "" : "text-ink-body"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          {section.ctaLabel && section.ctaHref ? (
            <Link href={section.ctaHref} className="cta-link mt-6 inline-block">
              {section.ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}


/**
 * The call to action inside an `imageBand` overlay.
 *
 * Appointment booking lives on an external scheduler, so this has to emit a
 * plain anchor for an absolute URL — `next/link` prefetches and client-routes,
 * neither of which means anything for a different origin, and React will warn.
 */
function OverlayCta({ href, label }: { href: string; label: string }) {
  const external = /^https?:\/\//.test(href);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-primary mt-6 inline-block"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="cta-primary mt-6 inline-block">
      {label}
    </Link>
  );
}


/*
 * Their per-section padding steps, spelled out rather than approximated.
 * `section-pad` is a flat 20/20 and could not express a 0/0 opening banner or a
 * 20/40 closing frame, which is most of what gives their pages their rhythm.
 */
const PAD_TOP = {
  0: "pt-0",
  20: "pt-5",
  25: "pt-[25px]",
  30: "pt-[30px]",
} as const;

const PAD_BOTTOM = {
  0: "pb-0",
  20: "pb-5",
  30: "pb-[30px]",
  40: "pb-10",
} as const;


function BandArt({
  section,
}: {
  section: Extract<Section, { type: "imageWithText" }>;
}) {
  return (
    <Art
      art={section.art}
      className={`w-full ${section.ratio === "4/5" ? "aspect-4/5" : "aspect-square"}`}
      alt={section.heading ?? ""}
    />
  );
}


/** Campaign rich-text inks; the colours live in globals.css. */
const CAMPAIGN_TONE = { deep: "campaign-deep", brown: "campaign-brown" } as const;

/** Campaign grounds and caption inks; the colours live in globals.css. */
const GROUND = { deep: "ground-deep", cream: "ground-cream" } as const;
const CAPTION_INK = {
  cream: "caption-ink-cream",
  deep: "caption-ink-deep",
  white: "caption-ink-white",
} as const;

/** Which edge an `imageBand` caption panel sits against. */
const OVERLAY_ALIGN = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
} as const;

const IMAGE_BAND_RATIO = {
  "15/8": "md:aspect-[15/8]",
  "3/1": "md:aspect-[3/1]",
  "9/8": "md:aspect-[9/8]",
  "2/1": "md:aspect-[2/1]",
  "7/5": "md:aspect-[7/5]",
  "3/2": "md:aspect-[3/2]",
  "4/3": "md:aspect-[4/3]",
  "1/1": "md:aspect-square",
} as const;

const IMAGE_BAND_MOBILE_RATIO = {
  "3/2": "aspect-[3/2]",
  "2/3": "aspect-[2/3]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
} as const;

function ImageBand({
  section,
}: {
  section: Extract<Section, { type: "imageBand" }>;
}) {
  return (
    <section
      className={`${section.bleed ? "" : "wrap"} ${
        PAD_TOP[section.padTop ?? 20]
      } ${PAD_BOTTOM[section.padBottom ?? 20]}`}
    >
      {/*
        * The phone frame carries its own ratio, not the desktop one.
        *
        * A 15:8 band at 375 wide is 200px tall — a rule with a picture in it
        * rather than a photograph — so this was pinned to 3:2. That silently
        * forced landscape onto every art-directed PORTRAIT phone crop we ship
        * (900x1350, 1080x1350), which is the opposite of what art direction is
        * for. Both ends are authored now.
        */}
      <div className="relative">
        <Art
          art={section.art}
          className={`w-full ${IMAGE_BAND_MOBILE_RATIO[section.mobileRatio ?? "3/2"]} ${IMAGE_BAND_RATIO[section.ratio ?? "15/8"]}`}
          alt={section.caption ?? section.overlay?.title ?? ""}
        />
        {section.overlay ? (
          /*
            * A translucent white caption panel, centred, with dark text — not a
            * dark scrim with light text over the whole frame.
            *
            * Measured on the reference: `background-color: rgba(255,255,255,
            * 0.77)`, `width: 55%`, `min-width: 350px`, 30px of padding, text
            * centred and middle-aligned, heading in near-black. A full-frame
            * gradient dims the photograph to make type legible; a panel leaves
            * the photograph alone and puts the type on its own ground.
            */
          <div
            className={`absolute inset-0 flex items-center px-5 ${
              OVERLAY_ALIGN[section.overlay.align ?? "center"]
            }`}
          >
            {/*
              * 55% wide, min 350px — their numbers. A `max-w` cap was pulling
              * this to 39% of the frame, which made the panel read as a label
              * dropped on the photograph rather than as a band across it.
              */}
            <div
              className={`w-full min-w-[350px] p-[30px] md:w-[55%] ${
                section.overlay.textAlign === "left" ? "text-left" : "text-center"
              } ${
                section.overlay.panel === "none"
                  ? CAPTION_INK[section.overlay.ink ?? "white"]
                  : "bg-white/[0.77]"
              }`}
            >
              <h2
                className={`text-h1 ${
                  section.overlay.panel === "none" ? "" : "text-ink"
                }`}
              >
                {section.overlay.title}
              </h2>
              {section.overlay.body ? (
                <p
                  className={`text-body mt-3 ${
                    section.overlay.panel === "none" ? "" : "text-ink-body"
                  }`}
                >
                  {section.overlay.body}
                </p>
              ) : null}
              {section.overlay.ctaLabel && section.overlay.ctaHref ? (
                <OverlayCta
                  href={section.overlay.ctaHref}
                  label={section.overlay.ctaLabel}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      {section.caption ? (
        <p className="mt-3 text-xs tracking-wide text-ink-muted italic">
          {section.caption}
        </p>
      ) : null}
    </section>
  );
}

function FaqAccordion({
  section,
}: {
  section: Extract<Section, { type: "faqAccordion" }>;
}) {
  return (
    /*
      * Full content width, not a prose measure.
      *
      * This was `wrap-prose` (680px) — right for an essay, wrong for a list of
      * short questions, which then wrapped onto two lines apiece and made the
      * page twice as long as theirs. Their accordion runs the full 1200px
      * container and each question sits on one line.
      */
    <section className="wrap section-pad">
      {section.groups.map((group) => (
        <div key={group.heading} className="mb-12 last:mb-0">
          {/*
            * A display-serif heading, ranged left, with no rule under it.
            * It was an `eyebrow` — uppercase, tracked, small, underlined —
            * which reads as a table label rather than as the start of a
            * section.
            */}
          <h2 className="text-h1 mb-2 text-ink">{group.heading}</h2>

          <dl>
            {group.items.map((item) => (
              <div key={item.question} className="border-b border-rule">
                {/*
                  * `<details>` inside a `<dt>`/`<dd>` pair rather than around
                  * one: a definition list is the right structure for question
                  * and answer, and `<details>` cannot wrap both halves without
                  * putting a block element inside `<dt>`, which is invalid.
                  */}
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    {/*
                      * Chevron on the LEFT of the question, which is where
                      * theirs sits. On the right it reads as a disclosure
                      * control on a table row; on the left it reads as a
                      * bullet that happens to open.
                      */}
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-4 w-4 shrink-0 text-ink transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 9l7 7 7-7" />
                    </svg>
                    <dt className="text-body text-ink">{item.question}</dt>
                  </summary>
                  <dd className="text-body mt-3 pl-8 text-ink-body">
                    {item.answer}
                  </dd>
                </details>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </section>
  );
}

/**
 * Small mark for a social account. Unknown networks render nothing rather than
 * a placeholder box — an icon nobody recognises is worse than a gap.
 */
function SocialIcon({ label }: { label: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true,
  } as const;

  switch (label.toLowerCase()) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8.5V6.8c0-.7.3-1.1 1.1-1.1H16V3h-2c-2 0-3 1.2-3 3.2v2.3H9V11h2v10h3V11h2l.4-2.5H14z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M10 18l1.6-6.4M9.7 10.2c0-1.5 1.1-2.6 2.6-2.6 1.4 0 2.4 1 2.4 2.4 0 1.9-1 3.4-2.4 3.4-.8 0-1.4-.6-1.2-1.4" />
        </svg>
      );
    default:
      return null;
  }
}

function ContactPanel({
  section,
  isPageTitle,
}: {
  section: Extract<Section, { type: "contactPanel" }>;
  isPageTitle: boolean;
}) {
  /*
   * The heading is the page's h1 when this section opens the page, which on the
   * contact page it does. `pages/[slug]/page.tsx` suppresses its own header for
   * exactly this case, because the reference puts the title at the top of the
   * left column rather than centred above both.
   */
  const Heading = isPageTitle ? "h1" : "h2";

  return (
    /*
      * Tall enough to hold the first screen on a laptop.
      *
      * Without this the panel came to about 665px against a 945px viewport and
      * the full-bleed band below it showed 120px of itself under the fold — a
      * strip of photograph with no context, which reads as a layout fault
      * rather than as an invitation to scroll.
      *
      * 9rem is the measured header stack: announcement bar, utility row and nav
      * come to 143px. If the announcement bar is dismissed the reserve is a
      * little generous and the band simply starts a little lower, which is the
      * harmless direction to be wrong in.
      *
      * `svh`, not `vh`: on mobile browsers `vh` is the tallest the viewport ever
      * gets, so a `vh` box is under the address bar on load. Gated at `md`
      * anyway, where the two columns exist at all.
      */
    <section className="wrap section-pad md:flex md:min-h-[calc(100svh-9rem)] md:flex-col">
      {/*
        * Two halves, form on the right, stacking on a phone with the addresses
        * first — somebody on a train wants the phone number before the form.
        *
        * `items-start`, so the filled panel is the height of its own content.
        * It was stretching to the section's full height, which made the grey
        * block by far the largest thing on the page — theirs stops just under
        * the Submit button and is shorter than the column of addresses beside
        * it. The section keeps its minimum height; the slack falls below both
        * columns as white space rather than inflating the panel.
        */}
      <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <div>
          {section.heading ? (
            <Heading className="text-h1">{section.heading}</Heading>
          ) : null}

          <div className="mt-6 space-y-4">
            {section.routes.map((route, index) => (
              <Fragment key={route.text}>
                <p className="text-body text-ink-body">
                  {route.text}{" "}
                  {route.email ? (
                    <a
                      href={`mailto:${route.email}`}
                      className="font-semibold text-ink hover:underline"
                    >
                      {route.email}
                    </a>
                  ) : null}
                  {route.linkLabel && route.linkHref ? (
                    <Link
                      href={route.linkHref}
                      className="font-semibold text-ink hover:underline"
                    >
                      {route.linkLabel}
                    </Link>
                  ) : null}
                  {route.tail ? <>. {route.tail}</> : null}
                  {/*
                    * The "you can also find us" line belongs to the first
                    * paragraph, not to a new one — it introduces the list that
                    * follows it, and a paragraph gap between them reads as a
                    * change of subject.
                    */}
                  {index === 0 ? (
                    <>
                      <br />
                      {section.socialIntro}
                    </>
                  ) : null}
                </p>

                {index === 0 ? (
                  <div className="space-y-3 pt-1">
                    {section.socials.map((social) => (
                      <p key={social.label} className="text-body">
                        <a
                          href={social.href}
                          className="font-semibold text-ink hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          -{social.label}
                        </a>
                      </p>
                    ))}
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>

          {/*
            * An h2 at body size and weight. It is the first heading under the
            * page h1, so h3 would skip a level and `lint:headings` would say so
            * — the size is a visual choice, the level is a structural fact.
            */}
          <h2 className="text-body mt-8 font-semibold text-ink">
            {section.visitHeading}
          </h2>
          <div className="mt-4 space-y-4">
            {section.stores.map((store) => (
              <Fragment key={store.name}>
                <p className="text-body text-ink-body">{store.detail}</p>
                <address className="text-body text-ink-body italic">
                  <span className="font-semibold">{store.name}</span>
                  {", "}
                  {store.address}
                </address>
              </Fragment>
            ))}
          </div>

          <ul className="mt-8 flex items-center gap-4">
            {section.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="block text-ink-muted transition-colors hover:text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <SocialIcon label={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*
          * The form sits in a filled panel, which is the whole reason it reads
          * as a second thing on the page rather than as more of the first.
          * Intro line inside the panel, not above it.
          */}
        <div className="bg-bg-sand p-6 md:p-8">
          <p className="text-body text-ink-body">{section.form.intro}</p>
          <div className="mt-6">
            <ContactForm submitLabel={section.form.submitLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY_COLUMNS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

function GalleryGrid({
  section,
}: {
  section: Extract<Section, { type: "galleryGrid" }>;
}) {
  return (
    <section className="wrap section-pad">
      {section.heading ? (
        <h2 className="text-h2 text-center">{section.heading}</h2>
      ) : null}
      {section.standfirst ? (
        <p className="text-body mx-auto mt-4 max-w-[60ch] text-center text-ink-body">
          {section.standfirst}
        </p>
      ) : null}

      <div
        className={`mt-10 grid grid-cols-2 gap-5 ${GALLERY_COLUMNS[section.columns]}`}
      >
        {section.items.map((item, index) => {
          const frame = (
            <>
              <Art
                art={item.art}
                className="aspect-square w-full"
                alt={item.label ?? ""}
              />
              {item.label ? (
                <span className="eyebrow mt-3 block text-ink">{item.label}</span>
              ) : null}
            </>
          );

          /*
           * A tile is a link only when it has somewhere to go. The gallery of
           * the making is photographs and nothing else — wrapping those in an
           * anchor to the same page is a keyboard tab stop that does nothing.
           */
          return item.href ? (
            <Link key={index} href={item.href} className="group block">
              {frame}
            </Link>
          ) : (
            <div key={index}>{frame}</div>
          );
        })}
      </div>
    </section>
  );
}

function MapBand({
  section,
}: {
  section: Extract<Section, { type: "mapBand" }>;
}) {
  const src =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(section.query) +
    `&z=${section.zoom ?? 16}`;

  return (
    /*
      * 30px above and below, which is what the reference's map section carries
      * (`padding-top: 30px; padding-bottom: 30px`). The band above it ends at
      * `padding-bottom: 0`, so the gap between a photograph and the map is this
      * rule alone.
      *
      * An arbitrary value rather than `section-pad`: the token is 20px and this
      * is a measured 30. Matching the measurement was the instruction, and a
      * near-miss here is visible because both blocks run edge to edge.
      */
    <section
      aria-label={section.label}
      className={`${section.padY === 20 ? "py-5" : "py-[30px]"} ${
        section.padX === 20 ? "px-5" : ""
      }`}
    >
      {/*
        * `loading="lazy"` matters more here than on an image: the embed pulls
        * a third-party bundle, and this sits at the very bottom of the page.
        * Most visitors never scroll to it and should not pay for it.
        */}
      <iframe
        src={src}
        title={section.label}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[320px] w-full border-0 md:h-[420px]"
      />
    </section>
  );
}
