"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { MegaMenuTile } from "./MegaMenuTile";
import { CurrencySelector } from "./CurrencySelector";
import { WishlistButton } from "./WishlistButton";
import { useCart } from "./cart-context";
import { useSearchModal } from "./search-context";
import { BRAND } from "@/lib/brand";
import { NAVIGATION, type NavPanel } from "@/lib/data/navigation";

/**
 * Header, mega menu and mobile navigation.
 *
 * Structure (design.md §5.2):
 *   Row 1 (top):     Announcement bar — separate component, scrolls away
 *   Row 2 (middle):  Search | centred wordmark + tagline | Currency / Account / Wishlist / Cart
 *   Row 3 (bottom):  Nav links — SHOP, COLLECTIONS, CAMPAIGNS, CRAFT, STORIES, ABOUT US
 *
 * On scroll past ~120px:
 *   - Row 1 (announcement) scrolls away naturally (not sticky)
 *   - Row 2 condenses: wordmark shrinks ~70%, background becomes solid, 1px bottom rule
 *   - Row 3 fades out (height → 0)
 *   - Transition: background-color 300ms linear, height 200ms linear
 *
 * The wordmark is centred with utilities split either side. That is a
 * luxury-retail signature and moving the mark to the left reads as a different
 * category of shop (design.md §5.2).
 */

const HOVER_INTENT_MS = 120;
const SCROLL_THRESHOLD = 120;

export function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCondensed, setIsCondensed] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const { itemCount, open: openCart } = useCart();
  const { open: openSearch } = useSearchModal();

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(openTimer.current);
    };
  }, []);

  // Scroll handler for header condense
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      if (scrolled !== isCondensed) {
        setIsCondensed(scrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCondensed]);

  // Escape closes the panel and returns focus to the trigger that opened it.
  useEffect(() => {
    if (!openPanel && !mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (openPanel) {
        document.getElementById(`${panelId}-trigger-${openPanel}`)?.focus();
        setOpenPanel(null);
      }
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openPanel, mobileOpen, panelId]);

  // Outside click closes the panel.
  useEffect(() => {
    if (!openPanel) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenPanel(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openPanel]);

  const scheduleOpen = (id: string) => {
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpenPanel(id), HOVER_INTENT_MS);
  };

  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpenPanel(null), HOVER_INTENT_MS);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ease-linear ${isCondensed ? "header-condensed" : ""}`}
      style={{ transitionProperty: "background-color, height, border-color" }}
    >
      {/* Row 2 (middle): Search | Wordmark + Tagline | Currency / Account / Wishlist / Cart */}
      <div className="header-row header-row-middle">
        {/* Left utilities: Search */}
        <div className="flex flex-1 items-center gap-4 min-w-0">
          <button
            type="button"
            className="eyebrow text-ink hidden lg:inline"
            aria-label="Search"
            onClick={openSearch}
          >
            Search
          </button>
        </div>

        {/* Centred wordmark + tagline */}
        <Link href="/" className="shrink-0 text-center mx-auto" aria-label={`${BRAND.name} home`}>
          <span className="header-wordmark block header-wordmark-condensed">
            {BRAND.name}
          </span>
          <span className="header-tagline block mt-1">
            {BRAND.line}
          </span>
        </Link>

        {/* Right utilities: Currency / Account / Wishlist / Cart */}
        <div className="flex flex-1 items-center justify-end gap-4 min-w-0">
          {/* Currency selector */}
          <CurrencySelector />
          {/* Account */}
          <Link href="/account" className="eyebrow text-ink hidden lg:inline" aria-label="Account">
            Account
          </Link>
          {/* Wishlist */}
          <WishlistButton />
          {/* Cart */}
          <button type="button" className="eyebrow text-ink" onClick={openCart} aria-label="Cart">
            Cart
            {itemCount > 0 ? (
              <span className="ml-2 bg-ink px-1.5 py-0.5 text-bg">{itemCount}</span>
            ) : null}
          </button>
        </div>
      </div>

      {/* Row 3 (bottom): Desktop navigation */}
      <div ref={navRef} className="header-row header-row-bottom hidden lg:flex" onMouseLeave={scheduleClose}>
        <nav aria-label="Primary navigation">
          <ul className="flex justify-center gap-8 w-full pb-2">
            {NAVIGATION.map((panel) => (
              <li key={panel.id}>
                <button
                  type="button"
                  id={`${panelId}-trigger-${panel.id}`}
                  aria-expanded={openPanel === panel.id}
                  aria-controls={`${panelId}-panel-${panel.id}`}
                  className="eyebrow border-b border-transparent pb-1 text-ink transition-colors hover:border-rule-strong aria-expanded:border-rule-strong"
                  onClick={() => setOpenPanel((current) => (current === panel.id ? null : panel.id))}
                  onMouseEnter={() => scheduleOpen(panel.id)}
                  onFocus={() => setOpenPanel(panel.id)}
                >
                  {panel.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {NAVIGATION.map((panel) => (
          <MegaPanel
            key={panel.id}
            panel={panel}
            id={`${panelId}-panel-${panel.id}`}
            open={openPanel === panel.id}
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            onClose={() => setOpenPanel(null)}
          />
        ))}
      </div>

      {mobileOpen ? (
        <MobileNav id={`${panelId}-mobile`} onNavigate={() => setMobileOpen(false)} />
      ) : null}
    </header>
  );
}

function MegaPanel({
  panel,
  id,
  open,
  onMouseEnter,
  onClose,
}: {
  panel: NavPanel;
  id: string;
  open: boolean;
  onMouseEnter: () => void;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation within mega panel
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const currentIndex = Array.from(focusable).findIndex(
        (el) => el === document.activeElement,
      );
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % focusable.length;
        event.preventDefault();
      } else if (event.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + focusable.length) % focusable.length;
        event.preventDefault();
      } else if (event.key === "ArrowDown") {
        // Find next focusable in next column (rough approximation)
        const cols = panelRef.current?.querySelectorAll(".grid > div") || [];
        let found = false;
        for (let i = 0; i < cols.length; i++) {
          const col = cols[i];
          if (!col) continue;
          const colFocusable = col.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          );
          const idx = Array.from(colFocusable).findIndex(
            (el) => el === document.activeElement,
          );
          if (idx !== -1 && i + 1 < cols.length) {
            const nextCol = cols[i + 1];
            if (!nextCol) continue;
            const nextColFocusable = nextCol.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );
            if (nextColFocusable.length > 0) {
              const focusableArray = Array.from(nextColFocusable);
              const target = focusableArray[Math.min(idx, focusableArray.length - 1)];
              if (target) {
                target.focus();
                event.preventDefault();
                found = true;
                break;
              }
            }
          }
        }
        if (!found) return;
      } else if (event.key === "ArrowUp") {
        // Find previous focusable in previous column
        const cols = panelRef.current?.querySelectorAll(".grid > div") || [];
        let found = false;
        for (let i = 0; i < cols.length; i++) {
          const col = cols[i];
          if (!col) continue;
          const colFocusable = col.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          );
          const idx = Array.from(colFocusable).findIndex(
            (el) => el === document.activeElement,
          );
          if (idx !== -1 && i - 1 >= 0) {
            const prevCol = cols[i - 1];
            if (!prevCol) continue;
            const prevColFocusable = prevCol.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );
            if (prevColFocusable.length > 0) {
              const focusableArray = Array.from(prevColFocusable);
              const target = focusableArray[Math.min(idx, focusableArray.length - 1)];
              if (target) {
                target.focus();
                event.preventDefault();
                found = true;
                break;
              }
            }
          }
        }
        if (!found) return;
      } else {
        return;
      }
      focusable[nextIndex]?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, panel]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id={id}
      aria-label={panel.label}
      onMouseEnter={onMouseEnter}
      className="absolute inset-x-0 border-t border-rule bg-bg"
    >
      <div className="wrap-wide grid grid-cols-4 gap-8 py-10">
        {panel.columns.map((column) => (
          <div key={column.heading}>
            <h2 className="eyebrow mb-4 text-ink">{column.heading}</h2>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`text-caption text-ink-body hover:text-ink hover:underline ${
                      link.emphasis ? "font-semibold text-ink" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Merchandised slots — editorial choices */}
        <div className="col-start-4 grid gap-4">
          {panel.tiles.map((tile) => (
            <MegaMenuTile
              key={tile.href}
              label={tile.label}
              tone={tile.tone}
              src={tile.src}
              alt={tile.label}
              href={tile.href}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div id={id} className="border-t border-rule bg-bg lg:hidden">
      <nav aria-label="Primary navigation" className="wrap-wide py-6">
        {NAVIGATION.map((panel) => (
          <details key={panel.id} className="border-b border-rule py-3">
            <summary className="eyebrow cursor-pointer text-ink">{panel.label}</summary>
            <div className="mt-4 space-y-5 pb-2">
              {panel.columns.map((column) => (
                <div key={column.heading}>
                  <h2 className="eyebrow mb-2 text-ink-muted">{column.heading}</h2>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="text-caption text-ink-body"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        ))}
        <Link href="/search" onClick={onNavigate} className="eyebrow mt-5 block text-ink">
          Search
        </Link>
      </nav>
    </div>
  );
}