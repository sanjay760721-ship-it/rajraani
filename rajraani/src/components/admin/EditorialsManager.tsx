"use client";

import Link from "next/link";
import { useState } from "react";
import { PAGES } from "@/lib/content/sections";

export function EditorialsManager() {
  const [pages] = useState(PAGES);
  const [selectedSlug, setSelectedSlug] = useState<string>("nadi");

  const currentPage = pages[selectedSlug];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Editorials & Campaign Stories Manager</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Craft long-form narrative campaign essays, weaving process guides, and craft education pages.
          </p>
        </div>
        <button
          type="button"
          className="bg-ink px-6 py-2.5 text-xs tracking-widest uppercase text-bg hover:opacity-90"
        >
          Create New Campaign Story
        </button>
      </div>

      {/* Editor Layout Split */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Story Selector List (Left Column) */}
        <div className="border border-rule bg-bg p-4 space-y-3">
          <h2 className="eyebrow text-ink font-semibold border-b border-rule pb-2">
            Published Stories & Pages ({Object.keys(pages).length})
          </h2>
          <div className="space-y-2">
            {Object.entries(pages).map(([slug, story]) => (
              <button
                key={slug}
                type="button"
                onClick={() => setSelectedSlug(slug)}
                className={`w-full text-left p-3 border transition-colors ${
                  selectedSlug === slug
                    ? "border-ink bg-bg-sand text-ink"
                    : "border-rule bg-bg text-ink-body hover:border-ink-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-semibold">{story.title}</span>
                  <span className="eyebrow text-[10px] text-ink-muted">/{slug}</span>
                </div>
                <p className="text-caption mt-1 line-clamp-2 text-ink-muted">{story.standfirst}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Story Editor Panel (Right 2 Columns) */}
        {currentPage ? (
          <div className="md:col-span-2 border border-rule bg-bg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-rule pb-4">
              <div>
                <span className="eyebrow text-ink-muted">EDITING CAMPAIGN PAGE</span>
                <h2 className="font-display text-2xl text-ink">{currentPage.title}</h2>
              </div>
              <Link
                href={`/pages/${selectedSlug}`}
                target="_blank"
                className="btn-secondary border border-rule px-4 py-2 text-xs uppercase tracking-wider text-ink hover:bg-bg-sand"
              >
                View Live Page ↗
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <label className="eyebrow block text-ink-muted text-[10px]">Page Title</label>
                <input
                  type="text"
                  defaultValue={currentPage.title}
                  className="w-full border-b border-rule py-2 text-caption font-semibold text-ink bg-transparent focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="eyebrow block text-ink-muted text-[10px]">Standfirst / Intro Essay</label>
                <textarea
                  defaultValue={currentPage.standfirst}
                  rows={3}
                  className="w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                />
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-3 pt-4 border-t border-rule">
                <h3 className="eyebrow text-ink font-semibold">Story Sections ({currentPage.sections.length})</h3>
                <div className="space-y-2">
                  {currentPage.sections.map((sec, idx) => (
                    <div key={sec.id} className="border border-rule p-3 bg-bg-alt flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="eyebrow bg-bg-sand px-2 py-1 text-ink">{idx + 1}</span>
                        <div>
                          <span className="font-display text-sm text-ink">{sec.type.toUpperCase()}</span>
                          <span className="eyebrow ml-2 text-[10px] text-ink-muted">({sec.id})</span>
                        </div>
                      </div>
                      <span className="text-caption text-ink-muted underline cursor-pointer">Edit Block</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-rule flex justify-end">
                <button
                  type="button"
                  className="bg-ink px-6 py-2.5 text-xs uppercase tracking-widest text-bg hover:opacity-90"
                >
                  Save Editorial Changes
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
