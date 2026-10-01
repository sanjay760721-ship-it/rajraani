import Image from "next/image";
import Link from "next/link";

import { PLACEHOLDER_WASH, toneFor } from "@/components/Frame";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { VideoPlayer } from "@/components/sections/VideoPlayer";
import type { ArtPair, Section } from "@/lib/content/sections";

import { SignatureHero } from "./SignatureHero";

function Art({
  art,
  className = "",
  alt = "",
  sizes = "100vw",
}: {
  art: ArtPair;
  className?: string;
  alt?: string;
  sizes?: string;
}) {
  const render = (
    side: ArtPair["desktop"],
    visibility: string,
    sourceSizes: string,
  ) =>
    side.src ? (
      <div
        className={"group relative overflow-hidden " + visibility + " " + className}
        style={{ backgroundColor: toneFor(side.tone) }}
      >
        <Image
          src={side.src}
          alt={alt}
          fill
          sizes={sourceSizes}
          className="object-cover object-center transition-transform duration-1000 ease-brand group-hover:scale-[1.025]"
        />
      </div>
    ) : (
      <div
        aria-hidden
        className={visibility + " " + className}
        style={{
          backgroundColor: toneFor(side.tone),
          backgroundImage: PLACEHOLDER_WASH,
        }}
      />
    );

  return (
    <>
      {render(art.mobile, "md:hidden", "100vw")}
      {render(art.desktop, "hidden md:block", sizes)}
    </>
  );
}

function Manifesto({
  section,
}: {
  section: Extract<Section, { type: "brandStatement" }>;
}) {
  return (
    <section className="bg-bg py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1480px] gap-12 px-5 md:px-8 lg:grid-cols-[210px_minmax(0,1fr)] lg:px-14 xl:px-20">
        <div className="pt-3">
          <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-ink-muted">
            House principle
          </p>
          <div className="mt-5 h-px w-14 bg-rule-strong" />
        </div>
        <div>
          <h2 className="max-w-[1080px] font-display text-[clamp(2.9rem,6.2vw,6.8rem)] leading-[0.96] tracking-[-0.045em] text-ink">
            {section.quote}
          </h2>
          <div className="mt-12 grid gap-7 border-t border-rule pt-7 md:grid-cols-2">
            <p className="max-w-[52ch] font-ui text-[13px] leading-6 text-ink-body">
              {section.body}
            </p>
            <p className="max-w-[40ch] font-display text-[20px] italic leading-7 text-ink-muted md:justify-self-end">
              Made slowly enough to remember who made it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionStudy({
  section,
}: {
  section: Extract<Section, { type: "collectionTriptych" }>;
}) {
  return (
    <section className="overflow-hidden bg-bg-alt py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              Collection study / 01
            </p>
            <h2 className="mt-5 font-display text-[clamp(3.2rem,7vw,7.6rem)] leading-[0.82] tracking-[-0.055em] text-ink">
              {section.title}
            </h2>
          </div>
          <p className="max-w-[48ch] font-ui text-[13px] leading-6 text-ink-body lg:pb-2">
            {section.body}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-12 md:gap-6">
          {section.art.map((art, index) => (
            <Link
              key={String(index)}
              href={section.artHrefs?.[index] ?? section.ctaHref}
              className={
                "group block " +
                (index === 0
                  ? "col-span-2 md:col-span-5"
                  : index === 1
                    ? "col-span-1 md:col-span-3 md:mt-24"
                    : "col-span-1 md:col-span-4 md:mt-10")
              }
            >
              <Art
                art={art}
                className="aspect-[2/3] w-full"
                sizes="(min-width: 1024px) 38vw, 50vw"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-ui text-[9px] uppercase tracking-[0.22em] text-ink-muted">
                  Look {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="text-ink-muted">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href={section.ctaHref}
            className="group inline-flex items-center gap-4 border-b border-ink pb-2 font-ui text-[10px] uppercase tracking-[0.22em] text-ink"
          >
            {section.ctaLabel}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LoomStory({
  section,
}: {
  section: Extract<Section, { type: "videoBand" }>;
}) {
  return (
    <section className="bg-ink py-20 text-bg md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-16 lg:px-14 xl:px-20">
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-body">
          {section.videoSrc ? (
            <VideoPlayer
              src={section.videoSrc}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Art art={section.art} className="absolute inset-0 h-full w-full" />
          )}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"
          />
          <p className="absolute bottom-5 left-5 font-ui text-[9px] uppercase tracking-[0.24em] text-bg/70 md:bottom-8 md:left-8">
            Pit loom / Varanasi
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-bg/45">
              The making
            </p>
            <h2 className="mt-6 font-display text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.045em] text-bg">
              {section.title}
            </h2>
            <p className="mt-7 font-ui text-[13px] leading-6 text-bg/72">
              {section.body}
            </p>
          </div>

          <div className="mt-14 border-t border-bg/20 pt-6">
            <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1">
              {[
                ["06–26", "weeks"],
                ["01", "pit loom"],
                ["100%", "hand guided"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-bg/15 last:border-r-0 lg:border-r-0 lg:border-b lg:pb-5 lg:last:border-b-0"
                >
                  <dt className="font-display text-[28px] text-bg">{value}</dt>
                  <dd className="mt-1 font-ui text-[9px] uppercase tracking-[0.22em] text-bg/45">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href={section.ctaHref}
              className="mt-8 inline-flex items-center gap-4 border-b border-bg/45 pb-2 font-ui text-[10px] uppercase tracking-[0.22em] text-bg"
            >
              {section.ctaLabel} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryEdit({
  section,
}: {
  section: Extract<Section, { type: "categorySplit" }>;
}) {
  return (
    <section className="bg-bg py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 lg:px-14 xl:px-20">
        <div className="mb-12 flex items-end justify-between gap-8 md:mb-16">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              The wardrobe
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.8rem,5vw,5.7rem)] leading-[0.9] tracking-[-0.045em] text-ink">
              Two ways in.
            </h2>
          </div>
          <p className="hidden max-w-[30ch] font-ui text-[12px] leading-5 text-ink-muted md:block">
            Start with the form. Stay for the cloth.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-6">
          {section.items.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                "group block " +
                (index === 0
                  ? "md:col-span-7"
                  : "md:col-span-5 md:mt-24")
              }
            >
              <Art
                art={item.art}
                className={
                  "w-full " + (index === 0 ? "aspect-[4/5]" : "aspect-[3/4]")
                }
                alt={item.label}
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 58vw, 100vw"
                    : "(min-width: 1024px) 42vw, 100vw"
                }
              />
              <div className="mt-5 flex items-end justify-between border-b border-rule pb-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-ui text-[9px] tabular-nums text-ink-muted">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-none tracking-[-0.03em] text-ink">
                    {item.label.toLowerCase()}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="text-xl text-ink transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingThought({
  section,
}: {
  section: Extract<Section, { type: "richText" }>;
}) {
  return (
    <section className="bg-bg-alt py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-5 text-center md:px-8">
        {section.heading ? (
          <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-ink-muted">
            {section.heading}
          </p>
        ) : null}
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mx-auto mt-8 max-w-[1120px] font-display text-[clamp(2.4rem,4.6vw,5.5rem)] leading-[1.02] tracking-[-0.035em] text-ink"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export async function HomepageExperience({
  sections,
}: {
  sections: readonly Section[];
}) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "heroCarousel":
            return <SignatureHero key={section.id} slides={section.slides} />;
          case "brandStatement":
            return (
              <ScrollReveal key={section.id}>
                <Manifesto section={section} />
              </ScrollReveal>
            );
          case "collectionTriptych":
            return (
              <ScrollReveal key={section.id}>
                <CollectionStudy section={section} />
              </ScrollReveal>
            );
          case "videoBand":
            return (
              <ScrollReveal key={section.id}>
                <LoomStory section={section} />
              </ScrollReveal>
            );
          case "categorySplit":
            return (
              <ScrollReveal key={section.id}>
                <CategoryEdit section={section} />
              </ScrollReveal>
            );
          case "richText":
            return (
              <ScrollReveal key={section.id}>
                <ClosingThought section={section} />
              </ScrollReveal>
            );
          default:
            return (
              <SectionRenderer
                key={section.id}
                section={section}
                index={index}
              />
            );
        }
      })}
    </>
  );
}
