"use client";

import { useEffect, useState } from "react";

import { useSiteText } from "@/components/site-text-context";
import { announcementParts } from "@/lib/content/site-text-defs";

/**
 * Announcement strip: deep Banarasi maroon with zari-gold capitals, one
 * message at a time between two small gold diamonds.
 *
 * The messages take turns every 4 seconds, fading up into place. The rotation
 * pauses while the pointer is over the strip and never runs for
 * reduced-motion users, who see the first message only. The strip can be
 * closed for the current page view and scrolls away with the page.
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
    const timer = setInterval(() => setIndex((i) => (i + 1) % parts.length), 4000);
    return () => clearInterval(timer);
  }, [paused, parts.length]);

  if (dismissed || parts.length === 0) return null;

  return (
    <aside
      aria-label="Store announcement"
      className="relative z-30 w-full bg-announce-bg text-announce-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto flex min-h-[46px] max-w-[1680px] items-center justify-center px-10 py-2 md:min-h-10 md:px-12">
        <p
          key={index}
          aria-live="polite"
          className="flex items-center gap-3.5 text-center font-ui text-[10.5px] uppercase leading-snug tracking-[0.1em] animate-[announceIn_600ms_ease-out] md:text-[12.5px] md:tracking-[0.14em]"
        >
          <span className="hidden size-[5px] shrink-0 rotate-45 bg-announce-ink md:inline-block" aria-hidden="true" />
          <span className="text-balance">{parts[index % parts.length]}</span>
          <span className="hidden size-[5px] shrink-0 rotate-45 bg-announce-ink md:inline-block" aria-hidden="true" />
        </p>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-announce-ink/80 transition-colors hover:bg-announce-ink/15 hover:text-announce-ink"
          aria-label="Close announcement"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
