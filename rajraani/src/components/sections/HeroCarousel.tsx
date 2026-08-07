"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { toneFor } from "../Frame";
import { BRAND } from "@/lib/brand";
import type { ArtPair, HeroSlide } from "@/lib/content/sections";

const AUTOPLAY_MS = 6000;

function SlideArt({
  art,
  alt = "",
  priority = false,
}: {
  art: ArtPair;
  alt?: string;
  priority?: boolean;
}) {
  const renderCrop = (
    side: ArtPair["desktop"],
    visibility: string,
    sizes: string,
  ) =>
    side.src ? (
      <div
        className={`relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${visibility}`}
        style={{ backgroundColor: toneFor(side.tone) }}
      >
        <Image
          src={side.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={100}
          unoptimized
          className="object-cover object-center"
        />
      </div>
    ) : (
      <div
        aria-hidden
        className={`h-[82vh] max-h-[900px] min-h-[520px] w-full ${visibility}`}
        style={{ backgroundColor: toneFor(side.tone) }}
      />
    );

  return (
    <>
      {renderCrop(art.mobile, "md:hidden", "100vw")}
      {renderCrop(art.desktop, "hidden md:block", "(min-width: 1440px) 1600px, 100vw")}
    </>
  );
}

export function HeroCarousel({
  slides,
  isPageTitle = true,
}: {
  slides: HeroSlide[];
  isPageTitle?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, slides.length, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? null;
    if (touchEndX === null) return;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  /*
   * Every slide heading is an h2, never an h1.
   *
   * A carousel has one heading per slide, so making them h1 gives the page six
   * of them — the heading lint caught exactly that. A document has one h1, and
   * which slide happens to be showing must not change the outline.
   *
   * The page keeps its h1 below: visually hidden, stable, and the thing a
   * screen-reader user hears first.
   */
  const Heading = "h2";

  return (
    <section
      className="group relative w-full overflow-hidden bg-bg text-bg"
      aria-label="Featured collections"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/*
        The page's only h1. Visually hidden because the design leads with a
        photograph rather than a title, but the document still owes one — it is
        what a screen reader announces on arrival, and what the outline hangs
        from. `isPageTitle` is false when this carousel is used further down a
        page, in which case the page's own h1 is elsewhere.
      */}
      {isPageTitle ? (
        <h1 className="sr-only">{BRAND.name} — handwoven Banarasi textiles</h1>
      ) : null}

      {/* Slide Stack */}
      <div className="relative h-[82vh] max-h-[900px] min-h-[520px] w-full">
        {slides.map((slide, index) => {
          const active = index === current;
          return (
            <div
              key={slide.id}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                active ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
              }`}
            >
              <SlideArt art={slide.art} alt={slide.title} priority={index === 0} />

              {/* Scrim Overlay */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-end">
                <div className="wrap-wide pb-16 md:pb-24">
                  <div className="max-w-[46ch]">
                    {slide.eyebrow ? (
                      <p className="eyebrow text-bg/80">{slide.eyebrow}</p>
                    ) : null}
                    <Heading className="text-display mt-3 text-bg drop-shadow-sm">
                      {slide.title}
                    </Heading>
                    <p className="text-prose mt-4 max-w-[38ch] text-bg/90">
                      {slide.body}
                    </p>
                    <Link
                      href={slide.ctaHref}
                      className="cta mt-8 inline-block text-bg hover:underline"
                    >
                      {slide.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Controls (Desktop Hover) */}
      {slides.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-3 text-bg/75 opacity-0 transition-opacity hover:text-bg group-hover:opacity-100 focus:opacity-100"
          >
            <span className="font-display text-3xl font-light">‹</span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-3 text-bg/75 opacity-0 transition-opacity hover:text-bg group-hover:opacity-100 focus:opacity-100"
          >
            <span className="font-display text-3xl font-light">›</span>
          </button>
        </>
      ) : null}

      {/* Indicator Dots */}
      {slides.length > 1 ? (
        <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              aria-current={index === current ? "true" : undefined}
              className={`h-1.5 transition-all duration-300 ${
                index === current ? "w-8 bg-bg" : "w-2 bg-bg/40 hover:bg-bg/75"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
