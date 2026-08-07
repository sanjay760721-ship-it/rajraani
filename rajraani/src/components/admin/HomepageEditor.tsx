"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HOMEPAGE_SECTIONS, type Section } from "@/lib/content/sections";

const SECTION_DESCRIPTIONS: Record<Section["type"], string> = {
  hero: "Single full-bleed banner with title, paragraph, and CTA",
  heroCarousel: "6-slide auto-playing interactive hero carousel with desktop/mobile crops",
  brandStatement: "High-whitespace brand philosophy text band with centered quote",
  collectionTriptych: "3-frame square image feature highlighting weave craftsmanship",
  videoBand: "Full-bleed or 16:9 framed ambient pit loom video section",
  categorySplit: "2-column square category grid with 1.03x hover zoom scaling",
  editorialPair: "2-column craft & campaign story teasers",
  tileRow: "4-column quick-link square tile grid (Bridal, Gifting, Zarkashi, Collectibles)",
  dualCampaign: "Side-by-side campaign split with narrow prose columns",
  poetryBand: "Warm sand background (var(--color-bg-alt)) lyrical text section",
  storesBand: "Boutique store feature with Varanasi & Mumbai consultation booking",
  hereToHelp: "Customer care support strip with email, phone, and WhatsApp link",
  productRail: "4-card product rail drawn automatically from a collection",
  richText: "Rich text narrative prose block",
  pullQuote: "Centered serif pull quote section",
};

export function HomepageEditor() {
  const [sections, setSections] = useState<Section[]>([...HOMEPAGE_SECTIONS]);
  const [hiddenIds, setHiddenIds] = useState<Record<string, boolean>>({});
  const [editingId, setEditingId] = useState<string | null>(null);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...sections];
    const temp = updated[index - 1]!;
    updated[index - 1] = updated[index]!;
    updated[index] = temp;
    setSections(updated);
  };

  const moveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const updated = [...sections];
    const temp = updated[index + 1]!;
    updated[index + 1] = updated[index]!;
    updated[index] = temp;
    setSections(updated);
  };

  const toggleHide = (id: string) => {
    setHiddenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Homepage Layout & Section Manager</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Visually arrange what appears on the homepage, edit copy, assign photography, and reorder sections.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="btn-secondary border border-rule px-4 py-2 text-xs tracking-wider uppercase text-ink hover:bg-bg-sand"
          >
            Preview Shop ↗
          </Link>
          <button
            type="button"
            disabled
            title="Saving the homepage layout is not built yet — see HANDOFF §2.3"
            className="bg-ink px-6 py-2.5 text-xs tracking-widest uppercase text-bg opacity-40 cursor-not-allowed"
          >
            Save Homepage Layout
          </button>
        </div>
      </div>

      {/*
        This editor is a working prototype of the interface, not a working
        editor. Reordering, hiding and copy edits all live in React state and
        are discarded on navigation — the homepage still renders from
        `src/lib/content/sections.ts`. The notice stays until there is a write
        path behind the save button; an admin tool that quietly forgets what it
        was told is worse than one that admits it cannot remember.
      */}
      <div
        role="note"
        className="border border-amber-700/40 bg-amber-50 px-4 py-3 text-caption text-xs text-amber-900"
      >
        <strong>Preview only.</strong> Changes here are not saved yet — the homepage is still
        edited in code (<code>src/lib/content/sections.ts</code>). Use this to plan a layout, then
        hand the order to a developer.
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {sections.map((section, index) => {
          const isHidden = !!hiddenIds[section.id];
          const isEditing = editingId === section.id;

          return (
            <div
              key={section.id}
              className={`border transition-colors ${
                isHidden ? "border-rule/60 bg-bg-sand/40 opacity-60" : "border-rule bg-bg"
              }`}
            >
              {/* Section Item Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center bg-bg-sand font-display text-sm font-semibold text-ink">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="font-display text-lg text-ink">
                        {section.type.toUpperCase()}
                      </h2>
                      <span className="eyebrow bg-bg-sand px-2 py-0.5 text-[10px] text-ink-muted">
                        ID: {section.id}
                      </span>
                      {isHidden ? (
                        <span className="eyebrow text-error text-[10px]">HIDDEN</span>
                      ) : (
                        <span className="eyebrow text-success text-[10px]">ACTIVE</span>
                      )}
                    </div>
                    <p className="text-caption mt-1 text-ink-muted">
                      {SECTION_DESCRIPTIONS[section.type] ?? "Homepage Section Component"}
                    </p>
                  </div>
                </div>

                {/* Section Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => moveUp(index)}
                    className="border border-rule px-3 py-1 text-xs text-ink disabled:opacity-30 hover:bg-bg-sand"
                    title="Move section up"
                  >
                    ↑ Up
                  </button>
                  <button
                    type="button"
                    disabled={index === sections.length - 1}
                    onClick={() => moveDown(index)}
                    className="border border-rule px-3 py-1 text-xs text-ink disabled:opacity-30 hover:bg-bg-sand"
                    title="Move section down"
                  >
                    ↓ Down
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleHide(section.id)}
                    className="border border-rule px-3 py-1 text-xs text-ink hover:bg-bg-sand"
                  >
                    {isHidden ? "Show" : "Hide"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(isEditing ? null : section.id)}
                    className="bg-ink px-4 py-1 text-xs text-bg hover:opacity-90"
                  >
                    {isEditing ? "Close" : "Edit Content"}
                  </button>
                </div>
              </div>

              {/* Editable Details Form */}
              {isEditing ? (
                <div className="border-t border-rule bg-bg-alt p-6 space-y-6">
                  <h3 className="eyebrow text-ink font-semibold">Edit Section Content</h3>
                  <SectionEditorForm section={section} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionEditorForm({ section }: { section: Section }) {
  switch (section.type) {
    case "heroCarousel":
      return (
        <div className="space-y-4">
          <p className="text-caption text-ink-muted">
            Managing 6 Slides in Hero Carousel. Each slide art-directs a desktop and mobile image.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.slides.map((slide, i) => (
              <div key={slide.id} className="border border-rule bg-bg p-4 space-y-2">
                <span className="eyebrow text-ink font-semibold">Slide {i + 1}: {slide.title}</span>
                <div>
                  <label className="eyebrow block text-ink-muted text-[10px]">Eyebrow</label>
                  <input
                    type="text"
                    defaultValue={slide.eyebrow}
                    className="w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="eyebrow block text-ink-muted text-[10px]">Title</label>
                  <input
                    type="text"
                    defaultValue={slide.title}
                    className="w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="eyebrow block text-ink-muted text-[10px]">Body Copy</label>
                  <textarea
                    defaultValue={slide.body}
                    rows={2}
                    className="w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="eyebrow block text-ink-muted text-[10px]">CTA Label</label>
                    <input
                      type="text"
                      defaultValue={slide.ctaLabel}
                      className="w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="eyebrow block text-ink-muted text-[10px]">CTA Link</label>
                    <input
                      type="text"
                      defaultValue={slide.ctaHref}
                      className="w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                    />
                  </div>
                </div>
                {slide.art.desktop.src ? (
                  <div className="mt-2 flex items-center gap-3">
                    <div className="relative h-12 w-20 bg-bg-sand overflow-hidden border border-rule">
                      <Image
                        src={slide.art.desktop.src}
                        alt={slide.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <span className="text-caption text-ink-muted truncate max-w-[200px]">
                      {slide.art.desktop.src}
                    </span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      );

    case "brandStatement":
      return (
        <div className="space-y-4 max-w-xl">
          <div>
            <label className="eyebrow block text-ink-muted text-[10px]">Main Quote</label>
            <input
              type="text"
              defaultValue={section.quote}
              className="w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="eyebrow block text-ink-muted text-[10px]">Body Philosophy</label>
            <textarea
              defaultValue={section.body}
              rows={3}
              className="w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
            />
          </div>
        </div>
      );

    case "videoBand":
      return (
        <div className="space-y-4 max-w-xl">
          <div>
            <label className="eyebrow block text-ink-muted text-[10px]">Video File (.mp4)</label>
            <input
              type="text"
              defaultValue={section.videoSrc}
              className="w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="eyebrow block text-ink-muted text-[10px]">Section Heading</label>
            <input
              type="text"
              defaultValue={section.title}
              className="w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
            />
          </div>
          <div>
            <label className="eyebrow block text-ink-muted text-[10px]">Description</label>
            <textarea
              defaultValue={section.body}
              rows={2}
              className="w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
            />
          </div>
        </div>
      );

    default:
      return (
        <div className="text-caption text-ink-muted">
          Content fields available for editing. Modify text parameters or re-assign image assets.
        </div>
      );
  }
}
