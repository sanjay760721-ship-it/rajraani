"use client";

import { useEffect, useState } from "react";

import { useSiteText } from "@/components/site-text-context";
import { announcementParts } from "@/lib/content/site-text-defs";

/**
 * Announcement strip: one line at a time, in zari gold on the night ground.
 *
 * The messages take turns at every width rather than sitting side by side,
 * so each one is read rather than skimmed. The rotation pauses while the
 * pointer is over the strip and never runs for reduced-motion users, who get
 * the first message only. It scrolls away with the page.
 */
export function AnnouncementBar() {
  // Edited in the admin under Site-wide text.
  const parts = announcementParts(useSiteText());
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || parts.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % parts.length), 4500);
    return () => clearInterval(timer);
  }, [paused, parts.length]);

  if (dismissed || parts.length === 0) return null;

  return (
    <aside
      aria-label="Store announcement"
      className="relative z-[60] w-full bg-night text-announce-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto flex h-9 max-w-[var(--container-site)] items-center justify-center px-12">
        <p
          key={index}
          aria-live="polite"
          className="flex items-center gap-3 truncate font-ui text-[11.5px] tracking-[0.08em] animate-[riseIn_500ms_var(--ease-out)]"
        >
          <span className="inline-block size-1 rotate-45 bg-gold" aria-hidden="true" />
          {parts[index % parts.length]}
          <span className="inline-block size-1 rotate-45 bg-gold" aria-hidden="true" />
        </p>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-announce-ink/80 transition-colors hover:bg-night-soft hover:text-announce-ink"
          aria-label="Close announcement"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
