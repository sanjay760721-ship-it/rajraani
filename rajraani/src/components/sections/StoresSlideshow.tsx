"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { toneFor } from "../Frame";
import type { ArtPair } from "@/lib/content/sections";
import type Flickity from "flickity";

declare global {
  interface Window {
    Flickity: typeof Flickity;
  }
}

interface StoreSlide {
  id: string;
  art: ArtPair;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface StoresSlideshowProps {
  slides: StoreSlide[];
}

/**
 * Stores Slideshow — 2 slides (Banaras/Lucknow), fade transition.
 *
 * - Fade transition (not slide)
 * - No arrows, no dots
 * - Auto-play 4000ms
 * - Secondary buttons with Calendly links
 * - Overlaid "VISIT OUR STORES" heading
 * - Full viewport width, 2:1 aspect
 */
export function StoresSlideshow({ slides }: StoresSlideshowProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    // See HeroCarousel for why this is a dynamic import, why `percentPosition`
    // is off, and why the geometry needs a re-measure after the first paint.
    let flkty: Flickity | null = null;
    let cancelled = false;

    void (async () => {
      const { default: FlickityCtor } = await import("flickity");
      if (cancelled) return;

      flkty = new FlickityCtor(element, {
        cellAlign: "left",
        wrapAround: true,
        percentPosition: false,
        autoPlay: 4000,
        pauseAutoPlayOnHover: true,
        draggable: false, // No drag for fade
        prevNextButtons: false,
        pageDots: false,
        resize: true,
        selectedAttraction: 0.025,
        friction: 0.25,
        initialIndex: 0,
        cellSelector: ".carousel-cell",
        // Fade transition via CSS
      });

      requestAnimationFrame(() => {
        if (!cancelled) flkty?.resize();
      });
    })();

    return () => {
      cancelled = true;
      flkty?.destroy();
    };
  }, []);

  return (
    <section
      ref={carouselRef}
      className="relative w-full min-h-[520px] overflow-hidden bg-bg"
      aria-label="Our stores"
      aria-roledescription="carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-cell relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${index === 0 ? "is-selected" : ""}`}
          aria-hidden={index !== 0}
        >
            <div
              className="relative h-full w-full"
              style={{ backgroundColor: toneFor(slide.art.desktop.tone) }}
            >
              {slide.art.desktop.src ? (
                <Image
                  src={slide.art.desktop.src}
                  alt={slide.title}
                  className="h-full w-full object-cover object-center"
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="100vw"
                />
              ) : (
                <div
                  aria-hidden
                  className="h-full w-full"
                  style={{
                    backgroundColor: toneFor(slide.art.desktop.tone),
                    backgroundImage:
                      "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))",
                  }}
                />
              )}
            </div>

            {/* Scrim Overlay — stronger for stores */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent"
            />

            {/* Overlaid Content — centered */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="max-w-[46ch] text-center">
                <span className="eyebrow text-bg/80 block mb-3">
                  {slide.title}
                </span>
                <p className="text-prose mt-4 max-w-[38ch] text-bg/90 mx-auto">
                  {slide.body}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={slide.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary"
                  >
                    {slide.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
        </div>
      ))}
    </section>
  );
}