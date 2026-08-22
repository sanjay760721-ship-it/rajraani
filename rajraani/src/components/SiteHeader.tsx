"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { WishlistButton } from "./WishlistButton";
import { UtilityBar } from "./UtilityBar";
import { useCart } from "./cart-context";
import { useSearchModal } from "./search-context";
import { BRAND } from "@/lib/brand";
import {
  NAVIGATION,
  LEFT_NAVIGATION,
  RIGHT_NAVIGATION,
  type NavPanel,
} from "@/lib/data/navigation";

const HOVER_INTENT_MS = 120;

export function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const { itemCount } = useCart();
  const { open: openSearch } = useSearchModal();

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
      ref={navRef}
      className="relative z-50 bg-white"
    >
      {/* Tier 2: Utility Bar - always rendered */}
      <UtilityBar />

      {/* Tier 3: Main Header - Desktop Single Row (≥1024px) - 65px */}
      <nav
        className="hidden lg:flex lg:items-center lg:justify-between border-b border-rule h-[65px] px-6 xl:px-14 select-none"
        aria-label="Main navigation"
        onMouseLeave={scheduleClose}
      >
        {/* Left Navigation Group: Shop, Collections, Campaigns */}
        <div className="flex items-center gap-4 flex-1 justify-start min-w-0">
          {LEFT_NAVIGATION.map((panel) => (
            <CompactNavTrigger
              key={panel.id}
              panel={panel}
              openPanel={openPanel}
              setOpenPanel={setOpenPanel}
              panelId={panelId}
              scheduleOpen={scheduleOpen}
              scheduleClose={scheduleClose}
            />
          ))}
        </div>

        {/* Center Brand Wordmark */}
        <div className="shrink-0 px-3">
          <Link
            href="/"
            aria-label={`${BRAND.name} home`}
            className="block group"
          >
            <span className="font-display text-[20px] tracking-normal text-ink font-normal leading-tight group-hover:text-[#ae7922] transition-colors duration-300">
              {BRAND.name}
            </span>
          </Link>
        </div>

        {/* Right Navigation Group: Craft, Stories, About Us */}
        <div className="flex items-center gap-4 flex-1 justify-end min-w-0">
          {RIGHT_NAVIGATION.map((panel) => (
            <CompactNavTrigger
              key={panel.id}
              panel={panel}
              openPanel={openPanel}
              setOpenPanel={setOpenPanel}
              panelId={panelId}
              scheduleOpen={scheduleOpen}
              scheduleClose={scheduleClose}
            />
          ))}
        </div>

        {/* Mega Menu Panels for desktop */}
        {openPanel && (
          <MegaMenuPanel
            panel={NAVIGATION.find((p) => p.id === openPanel)!}
            id={`${panelId}-dropdown-${openPanel}`}
            onClose={() => setOpenPanel(() => null)}
            onMouseEnter={scheduleClose}
          />
        )}
      </nav>

      {/* Mobile ≤768px: 77px bar */}
      <div className="lg:hidden h-[77px] flex items-center justify-between border-b border-rule px-4 bg-white">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="p-2 text-ink hover:text-[#ae7922] transition-colors cursor-pointer"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="13" x2="21" y2="13" />
              <line x1="3" y1="20" x2="21" y2="20" />
            </svg>
          )}
        </button>

        <Link href="/" className="flex-1 text-center" aria-label={`${BRAND.name} home`}>
          <span className="font-display text-[22px] tracking-normal text-ink font-normal">
            {BRAND.name}
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openSearch}
            className="p-2 text-ink hover:text-[#ae7922] transition-colors cursor-pointer"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <WishlistButton />
          <Link
            href="/cart"
            className="p-2 text-ink hover:text-[#ae7922] transition-colors relative block cursor-pointer"
            aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-ink text-bg text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <MobileNav id={`${panelId}-mobile`} onNavigate={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

interface CompactNavTriggerProps {
  panel: NavPanel;
  openPanel: string | null;
  setOpenPanel: (id: string | ((curr: string | null) => string | null)) => void;
  panelId: string;
  scheduleOpen: (id: string) => void;
  scheduleClose: () => void;
}

function CompactNavTrigger({
  panel,
  openPanel,
  setOpenPanel,
  panelId,
  scheduleOpen,
  scheduleClose,
}: CompactNavTriggerProps) {
  const isOpen = openPanel === panel.id;

  return (
    <>
      <button
        type="button"
        id={`${panelId}-trigger-${panel.id}`}
        aria-expanded={isOpen}
        aria-controls={`${panelId}-dropdown-${panel.id}`}
        className={`font-display text-[13px] uppercase tracking-wider font-normal transition-colors duration-300 h-full flex items-center border-b-2 cursor-pointer ${
          isOpen
            ? "text-[#ae7922] border-[#ae7922]"
            : "text-ink border-transparent hover:text-[#ae7922]"
        }`}
        onClick={() => setOpenPanel((curr) => (curr === panel.id ? null : panel.id))}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpenPanel((curr) => (curr === panel.id ? null : panel.id));
          }
        }}
        onMouseEnter={() => scheduleOpen(panel.id)}
        onMouseLeave={scheduleClose}
        onFocus={() => setOpenPanel(panel.id)}
      >
        {panel.label}
      </button>

      {isOpen && (
        <MegaMenuPanel
          panel={panel}
          id={`${panelId}-dropdown-${panel.id}`}
          onClose={() => setOpenPanel(() => null)}
          onMouseEnter={scheduleClose}
        />
      )}
    </>
  );
}

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
  const panelRef = useRef<HTMLDivElement>(null);

  const hasColumns = panel.columns && panel.columns.length > 0;
  const hasTiles = panel.tiles && panel.tiles.length > 0;

  return (
    <div
      ref={panelRef}
      id={id}
      aria-label={panel.label}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 bg-white border-t border-rule shadow-[0_10px_28px_rgba(0,0,0,0.09)] z-50 animate-[fadeIn_120ms_ease-out]"
    >
      <div className="mx-auto max-w-[1265px] px-8 xl:px-14 py-6">
        {hasColumns ? (
          <div className="flex flex-wrap gap-12">
            {/* Link Columns */}
            {panel.columns!.map((column, colIndex) => (
              <div key={colIndex} className="flex-1 min-w-[180px] max-w-[280px]">
                <h4 className="font-display text-[11px] uppercase tracking-widest text-ink-muted font-normal mb-3 pb-2 border-b border-rule">
                  {column.heading}
                </h4>
                <ul className="space-y-1">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`block px-2 py-1.5 font-display text-[13.5px] ${link.emphasis ? "font-medium text-ink" : "font-normal text-[#332210]"} hover:text-[#ae7922] transition-colors tracking-wide`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Image Tiles */}
            {hasTiles && (
              <div className="w-[280px] flex-shrink-0 flex flex-col gap-4">
                {panel.tiles!.map((tile, tileIndex) => (
                  <Link
                    key={tileIndex}
                    href={tile.href}
                    onClick={onClose}
                    className="block group relative overflow-hidden"
                  >
                    {tile.src ? (
                      <img
                        src={tile.src}
                        alt=""
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="aspect-[2/3] bg-rule flex items-center justify-center">
                        <span className="font-display text-[14px] text-ink-muted">{tile.label}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <span className="font-display text-[14px] tracking-wide block">{tile.label}</span>
                      <span className="font-display text-[12px] tracking-wider mt-1 block opacity-80">Explore →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-md">
            <ul className="space-y-1">
              {panel.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-2 font-display text-[13.5px] text-[#332210] hover:text-[#ae7922] hover:bg-[#faf0f0] transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileNav({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div id={id} className="border-t border-rule bg-white lg:hidden">
      <nav aria-label="Mobile navigation" className="px-6 py-6 max-h-[80vh] overflow-y-auto">
        {NAVIGATION.map((panel) => (
          <details key={panel.id} className="border-b border-rule py-3 group">
            <summary className="font-display text-xs uppercase tracking-wider text-ink font-medium cursor-pointer flex justify-between items-center list-none">
              <span>{panel.label}</span>
              <span className="text-ink-muted text-sm transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="mt-2 space-y-1 pb-2 pl-2">
              {panel.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="text-xs text-ink/85 hover:text-[#ae7922] block py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <div className="mt-6 pt-4 border-t border-rule space-y-3">
          <Link href="/account" onClick={onNavigate} className="font-display text-xs tracking-wider text-ink uppercase block">
            Account / Login
          </Link>
          <Link href="/wishlist" onClick={onNavigate} className="font-display text-xs tracking-wider text-ink uppercase block">
            Wishlist
          </Link>
          <Link href="/cart" onClick={onNavigate} className="font-display text-xs tracking-wider text-ink uppercase block">
            Shopping Cart
          </Link>
        </div>
      </nav>
    </div>
  );
}