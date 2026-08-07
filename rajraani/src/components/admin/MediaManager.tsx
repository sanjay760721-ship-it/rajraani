"use client";

import Image from "next/image";
import { useState } from "react";

type MediaItem = {
  name: string;
  path: string;
  size: string;
  type: "image" | "video";
  ratio: "2:3" | "1:1" | "banner" | "video";
};

const SAMPLE_MEDIA: MediaItem[] = [
  {
    name: "Small-Booti-2Banner_2000x.webp",
    path: "/reference-only/Small-Booti-2Banner_2000x.webp",
    size: "149 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "Vanam-Leela-Banner_2000x.webp",
    path: "/reference-only/Vanam-Leela-Banner_2000x.webp",
    size: "207 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "Icons-Banner_2000x.webp",
    path: "/reference-only/Icons-Banner_2000x.webp",
    size: "62 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "GiftingBanner_2000x.webp",
    path: "/reference-only/GiftingBanner_2000x.webp",
    size: "46 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "linen-banner_2000x.webp",
    path: "/reference-only/linen-banner_2000x.webp",
    size: "60 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "Art_CollectibleBanner_2000x.webp",
    path: "/reference-only/Art_CollectibleBanner_2000x.webp",
    size: "136 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "saree-Website-2000px-square_1000x.webp",
    path: "/reference-only/saree-Website-2000px-square_1000x.webp",
    size: "84 KB",
    type: "image",
    ratio: "1:1",
  },
  {
    name: "Dupatta-Website-2000px-square_1000x.webp",
    path: "/reference-only/Dupatta-Website-2000px-square_1000x.webp",
    size: "135 KB",
    type: "image",
    ratio: "1:1",
  },
  {
    name: "desktop-banner-womenswear_2000x.webp",
    path: "/reference-only/desktop-banner-womenswear_2000x.webp",
    size: "96 KB",
    type: "image",
    ratio: "1:1",
  },
  {
    name: "awadhSquares_1200x.webp",
    path: "/reference-only/awadhSquares_1200x.webp",
    size: "48 KB",
    type: "image",
    ratio: "1:1",
  },
  {
    name: "MumbaiBanner_2000x.webp",
    path: "/reference-only/MumbaiBanner_2000x.webp",
    size: "197 KB",
    type: "image",
    ratio: "banner",
  },
  {
    name: "eef6a84960be44829508a3e3e4a77980.mp4",
    path: "/reference-only/eef6a84960be44829508a3e3e4a77980.mp4",
    size: "822 MB",
    type: "video",
    ratio: "video",
  },
];

export function MediaManager() {
  // Fixed until there is a media table to read from — nothing mutates this list.
  const items: MediaItem[] = SAMPLE_MEDIA;
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
