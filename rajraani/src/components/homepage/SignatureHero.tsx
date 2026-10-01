"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BRAND } from "@/lib/brand";
import type { ArtPair, HeroSlide } from "@/lib/content/sections";

function HeroImage({
  art,
  alt,
  priority,
}: {
  art: ArtPair;
  alt: string;
  priority: boolean;
}) {
  return (
    <>
      {art.mobile.src ? (
        <Image
          src={art.mobile.src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
      ) : null}
      {art.desktop.src ? (
        <Image
          src={art.desktop.src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="hidden object-cover object-center md:block"
        />
      ) : null}
    </>
  );
}

export function SignatureHero({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[active];
  if (!slide) return null;

  return (
    <section
      className="relative isolate min-h-[720px] overflow-hidden bg-ink text-bg lg:h-[calc(100svh-101px)] lg:max-h-[980px]"
      aria-label="Featured collections"
    >
      <h1 className="sr-only">{BRAND.name} — handwoven Banarasi textiles</h1>

      <div className="absolute inset-y-0 right-0 w-full lg:w-[64%]">
        {slides.map((item, index) => (
          <div
            key={item.id}
            aria-hidden={index !== active}
            className={
              "absolute inset-0 transition-opacity duration-1000 ease-brand " +
              (index === active
                ? "opacity-100"
                : "pointer-events-none opacity-0")
            }
          >
            <HeroImage
              art={item.art}
              alt={index === active ? item.title : ""}
              priority={index === 0}
            />
          </div>
        ))}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent lg:from-ink/75 lg:via-transparent lg:to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/75 to-transparent lg:hidden"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-[0.035em] top-[46%] hidden -translate-y-1/2 select-none font-display text-[clamp(15rem,25vw,28rem)] leading-none text-bg/[0.035] lg:block"
      >
        R
      </div>

      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1680px] flex-col px-5 py-8 md:px-8 lg:h-full lg:px-14 lg:py-10 xl:px-20">
        <div className="flex items-center justify-between">
          <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-bg/70">
            {BRAND.name} / Banaras
          </p>
          <p className="hidden font-ui text-[10px] uppercase tracking-[0.22em] text-bg/55 md:block">
            Handloom · One piece at a time
          </p>
        </div>

        <div className="mt-auto grid items-end gap-10 pb-12 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-16 lg:pb-16">
          <div className="max-w-[680px]">
            {slide.eyebrow ? (
              <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-bg/70">
                {slide.eyebrow}
              </p>
            ) : null}

            <p className="mt-5 font-display text-[clamp(3.6rem,8vw,8.4rem)] leading-[0.78] tracking-[-0.055em] text-bg">
              {slide.title}
            </p>

            <div className="mt-8 grid gap-7 md:grid-cols-[minmax(0,36ch)_auto] md:items-end">
              <p className="font-ui text-[13px] leading-6 text-bg/78">
                {slide.body}
              </p>
              <Link
                href={slide.ctaHref}
                className="group inline-flex w-fit items-center gap-4 border-b border-bg/55 pb-2 font-ui text-[10px] uppercase tracking-[0.22em] text-bg transition-colors hover:border-bg"
              >
                {slide.ctaLabel}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden border-l border-bg/20 pl-8 lg:block">
            <p className="font-ui text-[10px] uppercase tracking-[0.24em] text-bg/45">
              Current story
            </p>
            <div className="mt-6 space-y-4">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={
                    "group flex w-full items-center gap-4 text-left transition-opacity " +
                    (index === active
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-75")
                  }
                  aria-label={"Show " + item.title}
                  aria-current={index === active ? "true" : undefined}
                >
                  <span className="font-ui text-[9px] tabular-nums text-bg/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-bg/25">
                    <span
                      className={
                        "block h-px bg-bg transition-all duration-500 " +
                        (index === active ? "w-full" : "w-0")
                      }
                    />
                  </span>
                  <span className="max-w-[9rem] truncate font-display text-[15px] text-bg">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={
                "h-px transition-all duration-300 " +
                (index === active ? "w-10 bg-bg" : "w-5 bg-bg/35")
              }
              aria-label={"Show " + item.title}
            />
          ))}
          <span className="ml-2 font-ui text-[9px] tabular-nums text-bg/55">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
