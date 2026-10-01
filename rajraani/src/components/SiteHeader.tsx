"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { CurrencySelector } from "./CurrencySelector";
import { LotusMark } from "./LotusMark";
import { MegaMenuTile } from "./MegaMenuTile";
import { WishlistButton } from "./WishlistButton";
import { useCart } from "./cart-context";
import { useSearchModal } from "./search-context";
import { useSiteText } from "./site-text-context";
import { UTILITY_BADGE, UTILITY_CAPTION, UTILITY_ICON, UTILITY_ITEM } from "./utility-styles";
import { BRAND } from "@/lib/brand";
import { useMenu } from "./menu-context";
import type { NavColumn, NavPanel } from "@/lib/data/navigation";

const HOVER_INTENT_MS = 120;

/**
 * The site header (redesign, 1 Oct 2026).
 *
 * One row that stays with the reader: the lotus and the name at the left, the
 * owner's six menu items in a single centred line, and a compact cluster of
 * actions at the right. It settles from 84px to 64px once the page scrolls,
 * and the BANARAS line under the name folds away with it.
 *
 * A dropdown is a full-width sheet of ivory paper that unrolls from under the
 * row, with the page dimmed behind it; the phone menu is a full-screen panel
 * on the night ground. All of the menu's words and photographs come from the
 * admin (`useMenu`).
 */
export function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const { itemCount } = useCart();
  const { open: openSearch } = useSearchModal();
  const NAVIGATION = useMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(openTimer.current);
    };
  }, []);

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

  useEffect(() => {
    if (!openPanel) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenPanel(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openPanel]);

  // The phone menu covers the page, so the page must not scroll beneath it.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const scheduleOpen = (id: string) => {
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpenPanel(id), HOVER_INTENT_MS);
  };

  /*
   * The pointer has to leave a trigger on its way into the sheet below it,
   * which schedules a close; landing inside the sheet calls that off.
   */
  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpenPanel(null), HOVER_INTENT_MS);
  };

  const compact = scrolled || openPanel !== null;

  return (
    <>
      <header
        ref={navRef}
        data-compact={compact || undefined}
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          compact ? "border-rule bg-paper/95 backdrop-blur-md" : "border-transparent bg-bg"
        }`}
      >
        {/* ── Computers (≥1024px) ─────────────────────────────────────── */}
        <nav
          className={`wrap-wide hidden grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-500 ease-[var(--ease-brand)] lg:grid ${
            compact ? "h-16" : "h-[84px]"
          }`}
          aria-label="Main navigation"
          onMouseLeave={scheduleClose}
        >
          <BrandMark compact={compact} />

          <ul className="flex items-center">
            {NAVIGATION.map((panel) => (
              <li key={panel.id}>
                <NavTrigger
                  panel={panel}
                  isOpen={openPanel === panel.id}
                  setOpenPanel={setOpenPanel}
                  panelId={panelId}
                  scheduleOpen={scheduleOpen}
                  scheduleClose={scheduleClose}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-0.5">
            <button
              type="button"
              onClick={openSearch}
              className="mr-2 hidden h-10 cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full border border-rule px-4 font-ui text-[13px] text-ink-muted transition-colors hover:border-ink hover:text-ink xl:inline-flex"
              aria-label="Search the collection"
            >
              <SearchIcon className="size-4" />
              <span>Search sarees, weaves…</span>
            </button>
            <button type="button" onClick={openSearch} className={`${UTILITY_ITEM} xl:hidden`} aria-label="Search">
              <SearchIcon className={UTILITY_ICON} />
              <span className={UTILITY_CAPTION} aria-hidden="true">Search</span>
            </button>
            <CurrencySelector />
            <Link href="/account" className={UTILITY_ITEM} aria-label="Account">
              <AccountIcon className={UTILITY_ICON} />
              <span className={UTILITY_CAPTION} aria-hidden="true">Account</span>
            </Link>
            <WishlistButton />
            <Link
              href="/cart"
              className={UTILITY_ITEM}
              aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
            >
              <BagIcon className={UTILITY_ICON} />
              <span className={UTILITY_CAPTION} aria-hidden="true">Cart</span>
              {itemCount > 0 && <span className={UTILITY_BADGE}>{itemCount}</span>}
            </Link>
          </div>

          {openPanel && (
            <MegaMenuPanel
              panel={NAVIGATION.find((p) => p.id === openPanel)!}
              id={`${panelId}-dropdown-${openPanel}`}
              onClose={() => setOpenPanel(() => null)}
              onMouseEnter={cancelClose}
            />
          )}
        </nav>

        {/* ── Phones and tablets (<1024px) ────────────────────────────── */}
        <div className="flex h-16 items-center justify-between gap-2 pl-4 pr-2 lg:hidden">
          <BrandMark compact />
          <div className="flex items-center">
            <button type="button" onClick={openSearch} className={UTILITY_ITEM} aria-label="Search">
              <SearchIcon className={UTILITY_ICON} />
            </button>
            <Link
              href="/cart"
              className={UTILITY_ITEM}
              aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
            >
              <BagIcon className={UTILITY_ICON} />
              {itemCount > 0 && <span className={UTILITY_BADGE}>{itemCount}</span>}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={UTILITY_ITEM}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls={`${panelId}-mobile`}
            >
              <svg className="h-[14px] w-[22px]" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <line x1="0" y1="1" x2="22" y2="1" />
                <line x1="6" y1="7" x2="22" y2="7" />
                <line x1="0" y1="13" x2="22" y2="13" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* The page dims behind an open dropdown, so the sheet reads as in front. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-40 bg-night/30 transition-opacity duration-500 ${
          openPanel ? "opacity-100" : "opacity-0"
        }`}
      />

      {mobileOpen && <MobileNav id={`${panelId}-mobile`} onClose={() => setMobileOpen(false)} />}
    </>
  );
}

/** The lotus over the name, echoing the logo; BANARAS folds away on scroll. */
function BrandMark({ compact }: { compact: boolean }) {
  return (
    <Link href="/" aria-label={`${BRAND.name} home`} className="group flex items-center gap-3 justify-self-start">
      <LotusMark className="h-[26px] w-[34px] text-gold transition-transform duration-700 ease-[var(--ease-brand)] group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[21px] uppercase tracking-[0.2em] text-ink lg:text-[23px]">
          {BRAND.name}
        </span>
        <span
          className={`overflow-hidden font-ui text-[8.5px] font-medium uppercase tracking-[0.62em] text-accent transition-all duration-500 ease-[var(--ease-brand)] ${
            compact ? "mt-0 max-h-0 opacity-0" : "mt-1.5 max-h-3 opacity-100"
          }`}
        >
          Banaras
        </span>
      </span>
    </Link>
  );
}

interface NavTriggerProps {
  panel: NavPanel;
  isOpen: boolean;
  setOpenPanel: (id: string | ((curr: string | null) => string | null)) => void;
  panelId: string;
  scheduleOpen: (id: string) => void;
  scheduleClose: () => void;
}

/**
 * A menu item: the display face in title case, with a gold thread that draws
 * out from the centre beneath it while its sheet is open.
 */
function NavTrigger({ panel, isOpen, setOpenPanel, panelId, scheduleOpen, scheduleClose }: NavTriggerProps) {
  return (
    <button
      type="button"
      id={`${panelId}-trigger-${panel.id}`}
      aria-expanded={isOpen}
      aria-controls={`${panelId}-dropdown-${panel.id}`}
      className={`group relative flex h-11 cursor-pointer items-center px-3 font-display text-[15.5px] tracking-[0.04em] transition-colors duration-300 xl:px-4 xl:text-[16.5px] ${
        isOpen ? "text-sindoor" : "text-ink hover:text-sindoor"
      }`}
      onClick={() => setOpenPanel((curr) => (curr === panel.id ? null : panel.id))}
      onMouseEnter={() => scheduleOpen(panel.id)}
      onMouseLeave={scheduleClose}
      onFocus={() => setOpenPanel(panel.id)}
    >
      {panel.label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-3 bottom-1.5 h-px origin-center bg-gold transition-transform duration-500 ease-[var(--ease-brand)] xl:inset-x-4 ${
          isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </button>
  );
}

/*
 * The dropdown sheet. Link columns on the left under small gold kickers, the
 * panel's photographs on the right in arch frames, the first one larger as the
 * panel's lead story. It unrolls from the top edge like cloth let down from a
 * rod, and its links rise in one after another.
 */
function MegaMenuPanel({
  panel,
  id,
  onClose,
  onMouseEnter,
}: {
  panel: NavPanel;
  id: string;
  onClose: () => void;
  onMouseEnter: () => void;
}) {
  const columns: NavColumn[] =
    panel.columns && panel.columns.length > 0
      ? panel.columns
      : [{ heading: panel.label, links: panel.links }];
  const tiles = (panel.tiles ?? []).slice(0, 3);
  let linkIndex = 0;

  return (
    <div
      id={id}
      aria-label={panel.label}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
      className="absolute inset-x-0 top-full z-50 border-y border-rule bg-paper animate-[unroll_520ms_var(--ease-brand)]"
    >
      <div className="wrap-wide grid grid-cols-[minmax(0,1fr)_auto] gap-12 py-10">
        <div className="flex flex-col">
          <div className="grid auto-cols-[minmax(160px,220px)] grid-flow-col gap-10">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="eyebrow mb-4">{column.heading}</p>
                <ul className="space-y-0.5">
                  {column.links.map((link) => {
                    const delay = 60 + linkIndex++ * 28;
                    return (
                      <li
                        key={link.href + link.label}
                        className="animate-[riseIn_480ms_var(--ease-out)_both]"
                        style={{ animationDelay: `${delay}ms` }}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="group/l flex items-center gap-2 py-1.5 font-serif text-[17px] leading-snug text-ink transition-colors hover:text-sindoor"
                        >
                          {link.emphasis && <span className="size-1 rotate-45 bg-gold" aria-hidden="true" />}
                          <span className="transition-transform duration-300 ease-[var(--ease-brand)] group-hover/l:translate-x-1">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <Link href={panel.href} onClick={onClose} className="cta-link mt-auto self-start pt-8">
            All of {panel.label.toLowerCase()}
          </Link>
        </div>

        {tiles.length > 0 && (
          <div className="flex items-start gap-5">
            {tiles.map((tile, index) => (
              <div
                key={tile.href + tile.label}
                className={`animate-[riseIn_640ms_var(--ease-out)_both] ${index === 0 ? "w-[260px]" : "w-[200px] pt-10"}`}
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <MegaMenuTile label={tile.label} tone={tile.tone} src={tile.src} href={tile.href} onClose={onClose} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * The phone menu: a full-screen panel on the night ground. Each menu item is
 * a large display line that opens to its links; the actions sit at the foot.
 */
function MobileNav({ id, onClose }: { id: string; onClose: () => void }) {
  const NAVIGATION = useMenu();
  const { tagline } = useSiteText();

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="booti-ground fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-night text-on-night animate-[fadeIn_300ms_ease-out] lg:hidden"
    >
      <div className="flex h-16 shrink-0 items-center justify-between pl-4 pr-2">
        <Link href="/" onClick={onClose} className="flex items-center gap-3" aria-label={`${BRAND.name} home`}>
          <LotusMark className="h-[24px] w-[32px] text-gold-soft" />
          <span className="font-display text-[20px] uppercase tracking-[0.2em] text-on-night">{BRAND.name}</span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-on-night hover:bg-night-soft"
          aria-label="Close menu"
          autoFocus
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="flex-1 px-6 pt-6 pb-10">
        {NAVIGATION.map((panel, index) => (
          <details
            key={panel.id}
            className="group border-b border-on-night/10 animate-[riseIn_500ms_var(--ease-out)_both]"
            style={{ animationDelay: `${80 + index * 50}ms` }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-[28px] leading-none text-on-night">
              <span>{panel.label}</span>
              <span
                aria-hidden="true"
                className="relative size-3 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-gold-soft after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-gold-soft after:transition-transform group-open:after:scale-y-0"
              />
            </summary>
            <ul className="pb-5">
              {panel.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-serif text-[18px] text-on-night-muted transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}

        <div className="mt-8 grid grid-cols-3 gap-2 font-ui text-[13px]">
          {(
            [
              ["/account", "Account"],
              ["/wishlist", "Wishlist"],
              ["/cart", "Cart"],
            ] as const
          ).map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex h-12 items-center justify-center rounded-full border border-on-night/20 text-on-night transition-colors hover:border-gold-soft hover:text-gold-soft"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <div className="zari-rule text-gold/60"><span className="zari-rule__knot" /></div>
          <p className="mt-4 text-center font-serif text-[16px] italic text-on-night-muted">{tagline}</p>
        </div>
      </nav>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.75" />
      <line x1="20" y1="20" x2="15.4" y2="15.4" />
    </svg>
  );
}

function AccountIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.75" />
      <path d="M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
    </svg>
  );
}

/** A potli bag rather than a generic shopping bag: drawn cord, round body. */
function BagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8.5 7.5c-3 2-4.5 5-4.5 8 0 3.5 3.5 5.5 8 5.5s8-2 8-5.5c0-3-1.5-6-4.5-8" />
      <path d="M8 7.5h8" />
      <path d="M9.5 7.5 8 3.5c1.3.6 2.6.9 4 .9s2.7-.3 4-.9l-1.5 4" />
    </svg>
  );
}
