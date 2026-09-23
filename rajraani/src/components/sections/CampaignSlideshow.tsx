"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { toneFor } from "../Frame";
import type { ArtPair } from "@/lib/content/sections";
import { ImageLink } from "../ImageLink";

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
 * The campaign band — a split, not an overlay.
 *
 * Text occupies the left ~40% on its own ground; the photograph holds the right
 * ~60% full-bleed to the edge. Measured off the reference at a 1896 viewport:
 * the panel divides at x = 770, which is 40.6% / 59.4%.
 *
 * This replaced a full-bleed slide with the caption laid over the image. The
 * split is the better arrangement for prose of this length: a paragraph over a
 * photograph needs a scrim to stay legible, and the scrim is what made the
 * other bands read dull. Here the words sit on paper and the picture keeps its
 * brightness.
 *
 * Hand-rolled rather than Flickity: two slides, one translate, and two dots
 * justify a carousel library, and the previous implementation pulled Flickity
 * in for exactly that.
 */
export function CampaignSlideshow({ slides }: CampaignSlideshowProps) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Campaigns"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      {/*
        * A track that translates, not a fade.
        *
        * Every slide is laid side by side in a flex row the width of the band,
        * and the row slides by one full width per step. Two earlier attempts
        * were wrong in different ways: `hidden` on the inactive slide did
        * nothing, because `hidden` and `grid` both set `display` and Tailwind
        * emits `hidden` first; rendering only the active slide fixed that but
        * left nothing to move, so it read as a flash.
        *
        * `overflow-hidden` on the section is what crops the off-screen slide.
        */}
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
      {slides.map((slide, index) => {
        return (
          <div
            key={slide.id}
            /*
              * `inert`, not `aria-hidden`.
              *
              * Both slides stay mounted so the track has something to move, so
              * the off-screen one still holds a link and two dot buttons.
              * `aria-hidden` would hide them from a screen reader while leaving
              * them in the tab order — focus lands on something nobody can see.
              * `inert` removes them from both.
              */
            inert={index !== active}
            className="grid w-full shrink-0 grid-cols-1 md:grid-cols-[40.6%_59.4%]"
          >
            {/* Left: the words, on paper. */}
            <div className="order-2 flex items-center justify-center px-6 py-14 md:order-1 md:py-24">
              <div className="max-w-[650px] text-center">
                <h2 className="font-display text-[24px] leading-tight text-ink">
                  {slide.title}
                </h2>
                <p className="text-body mt-5 leading-[1.75] text-ink-body">
                  {slide.body}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="cta-link is-drawn mt-8 inline-block"
                >
                  {slide.ctaLabel}
                </Link>

                {slides.length > 1 ? (
                  <div className="mt-10 flex items-center justify-center gap-2.5">
                    {slides.map((dot, dotIndex) => (
                      <button
                        key={dot.id}
                        type="button"
                        aria-label={`Show ${dot.title}`}
                        aria-current={dotIndex === active}
                        onClick={() => setActive(dotIndex)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          dotIndex === active ? "bg-ink" : "bg-ink/25"
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Right: the photograph, flush to the edge, and a link to the same place as the words. */}
            <ImageLink
              href={slide.ctaHref}
              duplicate
              className="relative order-1 block aspect-square w-full md:order-2 md:aspect-auto md:min-h-[800px]"
              style={{ backgroundColor: toneFor(slide.art.desktop.tone) }}
            >
              {slide.art.desktop.src ? (
                <Image
                  src={slide.art.desktop.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  quality={90}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover object-center"
                />
              ) : null}
            </ImageLink>
          </div>
        );
      })}
      </div>
    </section>
  );
}
