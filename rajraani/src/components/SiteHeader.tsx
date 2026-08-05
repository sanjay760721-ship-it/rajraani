"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ToneTile } from "./Frame";
import { useCart } from "./cart-context";
import { BRAND } from "@/lib/brand";
import { NAVIGATION, type NavPanel } from "@/lib/data/navigation";

/**
 * Header, mega menu and mobile navigation.
 *
 * The mega menu opens on hover, which is the category convention (design.md
 * §12 item 6) — but hover alone is an accessibility failure and the category
 * does not solve it for you. So every trigger is a real `<button>` with
 * `aria-expanded` and `aria-controls`, opens on click and on focus as well as
 * hover, closes on Escape, and returns focus to its trigger when it does.
 *
 * The wordmark is centred with utilities split either side. That is a
 * luxury-retail signature and moving the mark to the left reads as a different
 * category of shop (design.md §5.2).
 */

const HOVER_INTENT_MS = 120;

export function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const { itemCount, open: openCart } = useCart();

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(openTimer.current);
    };
  }, []);

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
    // Intent delay stops the panel flickering as the pointer crosses the bar.
    openTimer.current = setTimeout(() => setOpenPanel(id), HOVER_INTENT_MS);
  };

  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpenPanel(null), HOVER_INTENT_MS);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg">
      <div className="wrap-wide">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          {/* Left utilities */}
          <div className="flex flex-1 items-center gap-4">
            <button
              type="button"
              className="eyebrow text-ink lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={`${panelId}-mobile`}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
            <Link href="/search" className="eyebrow hidden text-ink lg:inline">
              Search
            </Link>
          </div>

          {/* Centred wordmark */}
          <Link href="/" className="shrink-0 text-center">
            <span className="block font-display text-xl tracking-[0.22em] text-ink uppercase md:text-2xl">
              {BRAND.name}
            </span>
            <span className="eyebrow mt-1 block text-ink-muted normal-case italic">
              {BRAND.line}
            </span>
          </Link>

          {/* Right utilities */}
          <div className="flex flex-1 items-center justify-end gap-4">
            {/* The currency switcher lived here. India-only, so there is
                nothing to switch — see lib/money.ts. */}
            <button type="button" className="eyebrow text-ink" onClick={openCart}>
              Cart
              {itemCount > 0 ? (
                <span className="ml-2 bg-ink px-1.5 py-0.5 text-bg">{itemCount}</span>
              ) : null}
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <div ref={navRef} className="hidden lg:block" onMouseLeave={scheduleClose}>
          <nav aria-label="Primary">
            <ul className="flex justify-center gap-10 pb-3">
              {NAVIGATION.map((panel) => (
                <li key={panel.id}>
                  <button
                    type="button"
                    id={`${panelId}-trigger-${panel.id}`}
                    aria-expanded={openPanel === panel.id}
                    aria-controls={`${panelId}-panel-${panel.id}`}
                    className="eyebrow border-b border-transparent pb-1 text-ink transition-colors hover:border-rule-strong aria-expanded:border-rule-strong"
                    onClick={() =>
                      setOpenPanel((current) => (current === panel.id ? null : panel.id))
                    }
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
  if (!open) return null;

  return (
    <div
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

        {/* Merchandised slots, not decoration — each is an editorial choice. */}
        <div className="col-start-4 grid gap-4">
          {panel.tiles.map((tile) => (
            <Link key={tile.href} href={tile.href} onClick={onClose}>
              <ToneTile label={tile.label} tone={tile.tone} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div id={id} className="border-t border-rule bg-bg lg:hidden">
      <nav aria-label="Primary" className="wrap-wide py-6">
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

