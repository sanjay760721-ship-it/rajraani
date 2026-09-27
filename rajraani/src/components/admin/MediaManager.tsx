"use client";

import Link from "next/link";
import { useState } from "react";

import { saveMediaAltAction } from "@/lib/admin/media-actions";
import type { MediaItem } from "@/lib/media/library";

import { MediaLibraryProvider, UploadButton, useMediaLibrary } from "./MediaPicker";

/**
 * The photo library.
 *
 * Upload here in bulk, or from any photo slot in the page editors — both land
 * in the same library. Above the grid, a count of every place on the site
 * still showing an unlicensed stand-in photo: that number has to reach zero
 * before launch.
 */

export type ReferenceUse = { where: string; href: string; count: number };

function formatBytes(bytes: number) {
  return bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

function AltField({ item }: { item: MediaItem }) {
  const [value, setValue] = useState(item.alt);
  const [state, setState] = useState<"idle" | "saving" | "saved">("idle");
  return (
    <label className="block">
      <span className="a-label block" style={{ color: "var(--a-outline)" }}>
        What is in the photo {state === "saved" ? "· saved" : ""}
      </span>
      <input
        className="a-input mt-1 w-full"
        value={value}
        placeholder="e.g. Deep red Katan silk saree with gold zari border, folded"
        onChange={(event) => {
          setValue(event.target.value);
          setState("idle");
        }}
        onBlur={async () => {
          if (value === item.alt && state === "idle") return;
          setState("saving");
          await saveMediaAltAction(item.id, value);
          setState("saved");
        }}
      />
    </label>
  );
}

function Grid() {
  const { items } = useMediaLibrary();
  if (items.length === 0) {
    return (
      <p className="a-body-md py-16 text-center" style={{ color: "var(--a-outline)" }}>
        No photos uploaded yet. Press Upload photos above to add your first.
      </p>
    );
  }
  return (
    <ul className="grid gap-6 md:grid-cols-3 xl:grid-cols-4" role="list">
      {items.map((item) => (
        <li key={item.id} className="a-card overflow-hidden" style={{ borderRadius: "var(--a-radius-md)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- admin thumbnail */}
          <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" style={{ backgroundColor: "var(--a-surface-high)" }} />
          <div className="space-y-3 p-4">
            <p className="a-body-sm truncate" title={item.originalName}>{item.originalName}</p>
            <p className="a-label" style={{ color: "var(--a-outline)" }}>
              {item.width}×{item.height} · {formatBytes(item.bytes)}
            </p>
            <AltField item={item} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function MediaManager({
  items,
  referenceUses,
}: {
  items: MediaItem[];
  referenceUses: ReferenceUse[];
}) {
  const total = referenceUses.reduce((sum, use) => sum + use.count, 0);

  return (
    <MediaLibraryProvider initial={items}>
      <div className="space-y-6">
        {/* Header — the same shape as the Menu screen's. */}
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="a-heading-lg">Photos</h1>
            <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
              Upload photos straight from the camera or phone — they are resized for the web
              automatically. Then pick them anywhere on the site: a page, a product, the menu.
            </p>
          </div>
          <UploadButton onUploaded={() => {}} />
        </header>

        <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
          <h2 className="a-heading-sm">
            {total ? `Stand-in photos to replace — ${total} left` : "Stand-in photos to replace — none left"}
          </h2>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            {total
              ? "Photos from the mock-up that cannot be used once the site is public. Open each page — they are outlined in orange — and pick your own."
              : "Every page now uses your own photos."}
          </p>
          {total ? (
            <ul className="mt-4 divide-y" role="list">
              {referenceUses.map((use) => (
                <li key={use.href} style={{ borderColor: "var(--a-outline-variant)" }}>
                  <Link href={use.href} className="flex flex-wrap items-center gap-4 py-3">
                    <span className="a-body-md min-w-0 flex-1" style={{ color: "var(--a-ink)" }}>{use.where}</span>
                    <span className="a-label" style={{ color: "var(--a-status-waiting)" }}>
                      {use.count} stand-in{use.count === 1 ? "" : "s"}
                    </span>
                    <span className="a-btn-secondary">Replace them →</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
          <h2 className="a-heading-sm">Your photos</h2>
          <p className="a-body-sm mb-4" style={{ color: "var(--a-ink-variant)" }}>
            Everything you have uploaded, newest first. Describe what is in each photo — it helps
            shoppers who cannot see it, and Google.
          </p>
          <Grid />
        </section>
      </div>
    </MediaLibraryProvider>
  );
}
