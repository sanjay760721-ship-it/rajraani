"use client";

import Image from "next/image";
import { useState } from "react";

export type MediaItem = {
  name: string;
  path: string;
  size: string;
  type: "image" | "video";
  ratio: "2:3" | "1:1" | "banner" | "video";
};

export function MediaManager({ items }: { items: MediaItem[] }) {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const handleCopy = (path: string) => {
    navigator.clipboard?.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2500);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "image") return item.type === "image";
    if (filter === "video") return item.type === "video";
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Media Asset Manager & Uploader</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Upload studio photography, campaign banners, and artisan video files. High-resolution 3000px masters supported.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider ${
              filter === "all" ? "bg-ink text-bg" : "border border-rule text-ink hover:bg-bg-sand"
            }`}
          >
            All Assets ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("image")}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider ${
              filter === "image" ? "bg-ink text-bg" : "border border-rule text-ink hover:bg-bg-sand"
            }`}
          >
            Images ({items.filter((i) => i.type === "image").length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("video")}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider ${
              filter === "video" ? "bg-ink text-bg" : "border border-rule text-ink hover:bg-bg-sand"
            }`}
          >
            Videos ({items.filter((i) => i.type === "video").length})
          </button>
        </div>
      </div>

      {copiedPath ? (
        <div className="border border-success bg-bg-alt px-4 py-3 text-caption text-success">
          Path copied to clipboard: <code className="font-mono">{copiedPath}</code>
        </div>
      ) : null}

      {/*
        The drop zone accepted files, invented a `/reference-only/` path for
        each and pushed them into local state — so an operator could "upload" a
        master, see it listed, and lose it on refresh. There is no storage
        backend and no write path yet (HANDOFF §2.3, "Admin — photo upload").
        Until there is, the zone states that plainly rather than pretending.
      */}
      <div
        role="note"
        className="border-2 border-dashed border-rule bg-bg-sand/30 p-10 text-center space-y-2"
      >
        <span className="block font-display text-xl text-ink-muted">
          Uploading is not built yet
        </span>
        <p className="text-caption text-ink-muted mx-auto max-w-lg">
          Photography is still added to <code>public/</code> in the repository and referenced by
          path. The asset list below is a catalogue of what is already committed — copy a path from
          it to use in a product or section.
        </p>
      </div>

      {/*
        Empty is the expected state on a fresh checkout, not an error:
        `public/reference-only/` is gitignored on purpose (unlicensed reference
        photography), so it exists only on machines where someone put it there.
        Saying so beats an unexplained blank grid.
      */}
      {filteredItems.length === 0 ? (
        <p className="border border-rule bg-bg-alt px-4 py-8 text-center text-caption text-ink-muted">
          {items.length === 0
            ? "No media found. public/reference-only/ is gitignored — reference imagery lives only on the machine it was placed on, and commissioned photography has not landed yet."
            : "No media of this type."}
        </p>
      ) : null}

      {/* Media Grid */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="group border border-rule bg-bg overflow-hidden flex flex-col justify-between"
          >
            {/* Preview Box */}
            <div className="relative aspect-[4/3] bg-bg-sand overflow-hidden">
              {item.type === "video" ? (
                <div className="flex h-full w-full items-center justify-center bg-ink text-bg p-4 text-center">
                  <div>
                    <span className="block font-display text-2xl font-light">▶</span>
                    <span className="eyebrow mt-2 block text-bg/80">HD VIDEO (.MP4)</span>
                  </div>
                </div>
              ) : (
                <Image
                  src={item.path}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <span className="eyebrow absolute top-2 right-2 bg-bg/90 px-2 py-0.5 text-[10px] text-ink">
                {item.ratio.toUpperCase()}
              </span>
            </div>

            {/* Asset Info */}
            <div className="p-4 space-y-2">
              <p className="font-mono text-xs font-semibold text-ink truncate" title={item.name}>
                {item.name}
              </p>
              <div className="flex items-center justify-between text-caption text-ink-muted">
                <span>{item.size}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(item.path)}
                  className="eyebrow text-ink underline hover:text-accent"
                >
                  Copy Path
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
