"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { toneFor } from "../Frame";
import { BRAND } from "@/lib/brand";
import type { ArtPair, HeroSlide } from "@/lib/content/sections";
import type Flickity from "flickity";
import { ImageLink } from "../ImageLink";

/**
 * Hero Carousel — Flickity-based, matching reference exactly.
 *
 * - 6 slides, slide transition (not fade)
 * - 4000ms interval, pause on hover/focus
 * - Dots only (no prev/next arrows on desktop)
 * - 2:1 aspect ratio (1800/900)
 * - Full viewport width, max-height 900px, min-height 520px
 * - sr-only h1 for accessibility
 */

function SlideArt({
  art,
  alt = "",
  priority = false,
}: {
  art: ArtPair;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <div
      className="relative h-full w-full"
      style={{ backgroundColor: toneFor(art.desktop.tone) }}
    >
      {art.desktop.src ? (
        <Image
          src={art.desktop.src}
          alt={alt}
          className="h-full w-full object-cover object-center"
          fill
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes="100vw"
        />
      ) : (
        <div
          aria-hidden
          className="h-full w-full"
          style={{
            backgroundColor: toneFor(art.desktop.tone),
            backgroundImage:
              "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))",
          }}
        />
      )}
    </div>
  );
}

export function HeroCarousel({
  slides,
  isPageTitle = true,
}: {
  slides: HeroSlide[];
  isPageTitle?: boolean;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityRef = useRef<Flickity | null>(null);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    // Flickity is loaded here rather than at module scope for two reasons: it
    // touches `window` on import so it cannot be evaluated during SSR, and a
    // static import would put the whole library in the entry bundle for a
    // component that only matters below the fold on some pages.
    let flkty: Flickity | null = null;
    let cancelled = false;
    let handleFocus: (() => void) | undefined;
    let handleBlur: (() => void) | undefined;

    void (async () => {
      const { default: FlickityCtor } = await import("flickity");
      if (cancelled) return;

      flkty = new FlickityCtor(element, {
        cellAlign: "left",
        // `contain` is ignored when `wrapAround` is on, and `percentPosition`
        // made Flickity measure each full-width cell as a fraction of the
        // track — every slide landed ~63px from the origin and selecting a dot
        // moved almost nothing. Pixel positioning is correct for cells that are
        // exactly one viewport wide.
        wrapAround: true,
        percentPosition: false,
        autoPlay: 4000,
        pauseAutoPlayOnHover: true,
        draggable: true,
        prevNextButtons: true, // Arrows only (spec: Hero has arrows, no dots)
        pageDots: false, // No dots
        resize: true,
        selectedAttraction: 0.025,
        friction: 0.25,
        initialIndex: 0,
        cellSelector: ".carousel-cell",
      });

      flickityRef.current = flkty;

      /*
       * Flickity measures cell geometry during its constructor. At that point
       * this carousel has not been through a layout pass with its final cell
       * height, so it computed scroll targets ~31px apart instead of one
       * viewport each — every dot selected the right index and the track
       * barely moved. Re-measuring after a paint, and again once the first
       * (eager) slide image has decoded, fixes the targets.
       *
       * `window.resize` is not enough: Flickity's own handler short-circuits
       * when the viewport width is unchanged, which it is here.
       */
      requestAnimationFrame(() => {
        if (!cancelled) flkty?.resize();
      });

      const firstImage = element.querySelector("img");
      if (firstImage && !firstImage.complete) {
        firstImage.addEventListener(
          "load",
          () => {
            if (!cancelled) flkty?.resize();
          },
          { once: true },
        );
      }

      // Pause on focus (accessibility)
      handleFocus = () => flkty?.pausePlayer?.();
      handleBlur = () => flkty?.unpausePlayer?.();
      element.addEventListener("focusin", handleFocus);
      element.addEventListener("focusout", handleBlur);
    })();

    return () => {
      cancelled = true;
      if (handleFocus) element.removeEventListener("focusin", handleFocus);
      if (handleBlur) element.removeEventListener("focusout", handleBlur);
      flkty?.destroy();
      flickityRef.current = null;
    };
  }, []);

  return (
    <section
      ref={carouselRef}
      /*
       * `flickity-enabled` is Flickity's own class and must not be hardcoded —
       * it styles the cells for a viewport element that only exists once the
       * library has initialised. The `min-h` is the safety net: cells are
       * `h-full`, so without a height on an ancestor they resolve to 0 and the
       * whole hero collapses behind `overflow-hidden`.
       */
      className="relative w-full min-h-[520px] overflow-hidden bg-bg text-bg"
      aria-label="Featured collections"
      aria-roledescription="carousel"
    >
      {/* The page's only h1. Visually hidden because the design leads with a
          photograph rather than a title, but the document still owes one — it is
          what a screen reader announces on arrival, and what the outline hangs
          from. `isPageTitle` is false when this carousel is used further down a
          page, in which case the page's own h1 is elsewhere. */}
      {isPageTitle ? (
        <h1 className="sr-only">{BRAND.name} — handwoven Banarasi textiles</h1>
      ) : null}

      {/*
        The cells are direct children on purpose. Flickity builds its own
        `.flickity-viewport > .flickity-slider` around them at init, so a
        hand-written wrapper carrying those class names both fights the library
        and buries the cells a level deeper than `cellSelector` looks.

        The height lives on each cell rather than on an ancestor: cells sized
        `h-full` inside a viewport that Flickity sizes *from* its cells is
        circular, and resolves to zero. `82vh` clamped to the design's 520–900
        band keeps the 2:1 intent without depending on any parent.
      */}
      {slides.map((slide, index) => {
        const align = slide.align;
        return (
        <div
          key={slide.id}
          className={`carousel-cell relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${index === 0 ? "is-selected" : ""}`}
          aria-hidden={index !== 0}
        >
            <SlideArt art={slide.art} alt={slide.title} priority={index === 0} />
            {/*
              * The whole frame goes where the button goes. The scrim and
              * caption layers above are `pointer-events-none`, so a click
              * anywhere on the photograph lands here; only the button itself
              * takes its own clicks.
              */}
            <ImageLink href={slide.ctaHref} duplicate className="absolute inset-0" />

            {/*
              * Two caption treatments, and the default is the original one.
              *
              * Slides that set `align` get the reference's centred variant: a
              * narrow measure pinned to one edge, vertically centred, with the
              * scrim running in from that side. Slides that do not are left
              * exactly as they were \u2014 wide measure along the bottom, ranged
              * left, bottom-up scrim.
              *
              * Keeping both is the point. The bottom-left treatment reads
              * better on a frame with room across the foot of it, and swapping
              * every slide to the centred one lost that.
              */}
            {align ? (
              <>
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 ${
                    align === "right"
                      ? "bg-gradient-to-l from-black/60 via-black/20 to-transparent"
                      : align === "left"
                        ? "bg-gradient-to-r from-black/60 via-black/20 to-transparent"
                        : "bg-gradient-to-t from-black/60 via-black/25 to-transparent"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 flex items-center">
                  <div className="wrap-wide w-full">
                    <div
                      className={`w-full max-w-[360px] text-center ${
                        align === "right"
                          ? "ml-auto"
                          : align === "left"
                            ? "mr-auto"
                            : "mx-auto"
                      }`}
                    >
                      {slide.eyebrow ? (
                        <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-bg/85">
                          {slide.eyebrow}
                        </p>
                      ) : null}
                      {/* Cardo 35px / 39.4px, white, no tracking \u2014 measured. */}
                      <h2 className="font-display text-[28px] md:text-[35px] leading-[1.125] mt-3 text-bg font-normal">
                        {slide.title}
                      </h2>
                      <p className="font-ui text-[14px] leading-[1.6] mt-4 text-bg/90">
                        {slide.body}
                      </p>
                      {/*
                        * Filled, not outlined: 81% white with black text is
                        * what stays legible over an arbitrary photograph.
                        */}
                      <Link
                        href={slide.ctaHref}
                        className="pointer-events-auto font-display text-[16px] tracking-[1px] mt-7 inline-block border border-black/15 bg-white/80 px-4 py-[5px] text-black transition-colors duration-300 hover:bg-white"
                      >
                        {slide.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Scrim Overlay — bottom gradient for text legibility */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                />

                {/* Slide Content \u2014 bottom-aligned, max-width 46ch */}
                <div className="pointer-events-none absolute inset-0 flex items-end">
                  <div className="wrap-wide pb-16 md:pb-24">
                    <div className="max-w-[46ch]">
                      {slide.eyebrow ? (
                        <p className="eyebrow text-bg/80">{slide.eyebrow}</p>
                      ) : null}
                      <h2 className="text-display mt-3 text-bg drop-shadow-sm">
                        {slide.title}
                      </h2>
                      <p className="text-prose mt-4 max-w-[38ch] text-bg/90">
                        {slide.body}
                      </p>
                      <Link
                        href={slide.ctaHref}
                        className="cta-primary pointer-events-auto mt-8 inline-block"
                      >
                        {slide.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>
        );
      })}

      {/* Flickity will inject page dots here automatically */}
    </section>
  );
}