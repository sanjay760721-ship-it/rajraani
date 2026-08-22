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

interface CampaignSlide {
  id: string;
  art: ArtPair;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface CampaignSlideshowProps {
  slides: CampaignSlide[];
}

/**
 * Campaign Slideshow — 4 slides, dots only, no arrows, matching reference spec.
 *
 * - Fade transition (not slide)
 * - Page dots only (no prev/next arrows)
 * - Auto-play 4000ms
 * - Secondary buttons
 * - Full viewport width, 1:1 aspect
 */
export function CampaignSlideshow({ slides }: CampaignSlideshowProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

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
        draggable: true,
        prevNextButtons: false,
        pageDots: true,
        resize: true,
        selectedAttraction: 0.025,
        friction: 0.25,
        initialIndex: 0,
        cellSelector: ".carousel-cell",
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
      aria-label="Campaigns"
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

            {/* Scrim Overlay — bottom gradient for text legibility */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            />

            {/* Slide Content — centered */}
            <div className="absolute inset-0 flex items-end">
              <div className="wrap-wide pb-16 md:pb-24">
                <div className="max-w-[46ch] mx-auto text-center">
                  <h2 className="text-display text-bg drop-shadow-sm">
                    {slide.title}
                  </h2>
                  <p className="text-prose mt-4 max-w-[38ch] text-bg/90 mx-auto">
                    {slide.body}
                  </p>
                  <Link
                    href={slide.ctaHref}
                    className="cta-secondary mt-8 inline-block"
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