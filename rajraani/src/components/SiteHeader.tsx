"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { MegaMenuTile } from "./MegaMenuTile";
import { WishlistButton } from "./WishlistButton";
import { UtilityBar } from "./UtilityBar";
import { useCart } from "./cart-context";
import { useSearchModal } from "./search-context";
import { BRAND } from "@/lib/brand";
import { useMenu } from "./menu-context";
import type { NavColumn, NavPanel } from "@/lib/data/navigation";

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
  // The owner's menu, from the admin. Three items either side of the wordmark.
  const NAVIGATION = useMenu();
  const LEFT_NAVIGATION = NAVIGATION.slice(0, 3);
  const RIGHT_NAVIGATION = NAVIGATION.slice(3, 6);

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

  /**
   * Cancel a pending dismissal.
   *
   * The panel sits below the trigger with a hairline between them, so the
   * pointer necessarily leaves the button on its way into the menu and
   * `scheduleClose` fires. Something has to call this off once the pointer
   * lands inside the panel, or the menu closes underneath the cursor and no
   * link in it is ever clickable.
   */
  const cancelClose = () => {
    clearTimeout(closeTimer.current);
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

      {/*
        * Tier 3: Main Header - Desktop Single Row (≥1024px) - 76px.
        *
        * No rule under it. A page that opens on a banner sat the photograph
        * under a hairline with a white strip between, which read as a gap in
        * the page rather than as the edge of the header; the mega menu brings
        * its own top border when it opens.
        */}
      <nav
        className="hidden lg:flex lg:items-center lg:justify-between h-[76px] px-6 xl:px-14 select-none"
        aria-label="Main navigation"
        onMouseLeave={scheduleClose}
      >
        {/* Left Navigation Group: Shop, Collections, Campaigns */}
        <div className="flex items-center xl:gap-4 flex-1 justify-end min-w-0">
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
        <div className="shrink-0 px-5 xl:px-14">
          <Link
            href="/"
            aria-label={`${BRAND.name} home`}
            className="block group"
          >
            {/*
              * Set in widely tracked capitals to echo the lettering of the
              * house logo, and in the brand gold, so the name reads as a
              * mark rather than as a seventh menu item in the same ink.
              */}
            <span className="font-display text-[24px] xl:text-[28px] uppercase tracking-[0.2em] mr-[-0.2em] text-accent font-normal leading-none group-hover:text-accent-hover transition-colors duration-300">
              {BRAND.name}
            </span>
          </Link>
        </div>

        {/* Right Navigation Group: Craft, Stories, About Us */}
        <div className="flex items-center xl:gap-4 flex-1 justify-start min-w-0">
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

        {/*
          * The one and only dropdown.
          *
          * It renders here, as a child of <nav>, because that is the element it
          * is positioned against — `absolute top-full left-0 right-0` needs the
          * full-width row as its containing block to span the header. Rendering
          * it per-trigger as well put two identical panels on top of each other.
          */}
        {openPanel && (
          <MegaMenuPanel
            panel={NAVIGATION.find((p) => p.id === openPanel)!}
            id={`${panelId}-dropdown-${openPanel}`}
            onClose={() => setOpenPanel(() => null)}
            onMouseEnter={cancelClose}
          />
        )}
      </nav>

      {/* Mobile ≤768px: 77px bar */}
      <div className="lg:hidden h-[77px] flex items-center justify-between border-b border-rule px-4 bg-white">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="p-2 text-ink hover:text-accent-hover transition-colors cursor-pointer"
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
            className="p-2 text-ink hover:text-accent-hover transition-colors cursor-pointer"
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
            className="p-2 text-ink hover:text-accent-hover transition-colors relative block cursor-pointer"
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
        /*
         * Display serif, 13.5px (12.5px below xl, so all six fit at 1024),
         * uppercase, wide tracking, in body ink rather than heading ink: six
         * labels at full weight crowded the wordmark.
         * Spacing lives in the button's own padding rather than a gap on the
         * row, so the caret has somewhere to sit and the hit target
         * covers the label plus its arrow.
         *
         * The open state was a 2px underline in brand gold, which shouted over
         * six items and fought the rule under the row. A colour shift plus the
         * rotated caret says the same thing and lets the row stay quiet.
         */
        className={`font-display text-[12.5px] xl:text-[13.5px] uppercase tracking-[0.12em] xl:tracking-[0.14em] font-normal transition-colors duration-300 h-full flex items-center gap-1.5 xl:gap-2 px-2 xl:px-3 cursor-pointer ${
          isOpen ? "text-accent-hover" : "text-ink-body hover:text-accent-hover"
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
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M0.75 0.75L4 4L7.25 0.75"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </>
  );
}

/*
 * The dropdown, on the reference's mega-menu template (measured on request,
 * 24 Sep 2026): a white box 1200px wide, centred under the row, no shadow and
 * no border. Link columns fill from the left, photographs sit hard against the
 * right, and the space between them stays empty.
 *
 * Every photograph is their large size, 260x390 inside 20px of padding.
 * Their shorter panels drop to 200x300 tiles in a five-column grid, which
 * read as thumbnails here; fixed 200px link columns leave room for two large
 * tiles even beside Shop's three lists. Below 1200px the tiles give way first
 * (`minmax(0, 300px)`), then the gap.
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
  const tiles = panel.tiles ?? [];

  return (
    <div
      id={id}
      aria-label={panel.label}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
      className="absolute top-full left-1/2 z-50 w-[1200px] max-w-[calc(100vw-40px)] -translate-x-1/2 bg-white animate-[fadeIn_120ms_ease-out]"
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(150px, 200px)) 1fr repeat(${tiles.length}, minmax(0, 300px))`,
        }}
      >
        {columns.map((column) => (
          <div key={column.heading} className="p-5">
            <p className="mb-2 font-display text-[16px] font-bold leading-[1.2] tracking-[1px] text-ink-dark">
              {column.heading}
            </p>
            <ul>
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-[6.5px] font-display text-[13px] leading-[13px] tracking-[1px] text-ink-dark transition-colors hover:text-accent-hover ${
                      link.emphasis ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {tiles.map((tile, index) => (
          <div
            key={tile.href + tile.label}
            className="p-5"
            style={{ gridColumnStart: columns.length + 2 + index }}
          >
            <MegaMenuTile
              label={tile.label}
              tone={tile.tone}
              src={tile.src}
              href={tile.href}
              onClose={onClose}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileNav({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  const NAVIGATION = useMenu();
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
                    className="text-xs text-ink/85 hover:text-accent-hover block py-1.5"
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