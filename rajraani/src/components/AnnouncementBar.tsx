"use client";

import { useEffect, useState } from "react";

import { ANNOUNCEMENT_PARTS } from "@/lib/brand";

/**
 * Announcement bar — shipping and duty terms, above the utility row.
 *
 * Structure & Design tokens (design.md §5.1):
 * - Height: 36px
 * - Background: bg-bg-alt with 1px bottom border
 * - Desktop: 3-part pipe-delimited with italic reassurance clause
 * - Mobile: smooth rotating ticker between the 3 messages
 * - Closable: dismissible for the current session/view (reappears on fresh page load/refresh)
 * - Scrolls away with the page (not sticky)
 */
export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate messages on mobile viewport
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_PARTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Store announcement"
      className="relative z-30 w-full min-h-[36px] transition-all duration-300"
      style={{ backgroundColor: "var(--color-ink)", color: "var(--color-announce-ink)" }}
    >
      <div className="mx-auto flex min-h-[36px] max-w-[1680px] items-center justify-center px-8 sm:px-12 py-1.5">
        {/* Desktop view: 3-part pipe-delimited message */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-3 text-center text-[11.5px] lg:text-[12px] font-normal tracking-[0.06em] text-announce-ink leading-none">
          <span>{ANNOUNCEMENT_PARTS[0]}</span>
          <span className="text-announce-ink/40 select-none" aria-hidden="true">|</span>
          <span>{ANNOUNCEMENT_PARTS[1]}</span>
          <span className="text-announce-ink/40 select-none" aria-hidden="true">|</span>
          <span className="italic">{ANNOUNCEMENT_PARTS[2]}</span>
        </div>

        {/* Mobile view: rotating ticker with smooth fade */}
        <div className="flex md:hidden items-center justify-center text-center text-[11px] font-normal tracking-[0.05em] text-announce-ink leading-snug px-2">
          <span
            key={currentIndex}
            className="animate-[fadeIn_300ms_ease-in-out] inline-block transition-opacity duration-300"
          >
            {currentIndex === 2 ? (
              <span className="italic">{ANNOUNCEMENT_PARTS[2]}</span>
            ) : (
              ANNOUNCEMENT_PARTS[currentIndex]
            )}
          </span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-announce-ink hover:bg-announce-ink/15 active:bg-announce-ink/25 transition-colors"
          aria-label="Close announcement bar"
          title="Close announcement"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
