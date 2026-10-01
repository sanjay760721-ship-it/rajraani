"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { useCurrency } from "@/components/currency-context";
import { createPortal } from "react-dom";

import type { NavColumn, NavPanel } from "@/lib/data/navigation";

const HOVER_INTENT_MS = 120;
/** Forgiving on the way out: time to travel from a word down into its dropdown. */
const CLOSE_DELAY_MS = 360;
/** Moving from one open dropdown to another word takes a deliberate pause. */
const SWITCH_DELAY_MS = 300;

/**
 * The site's own menu, from the admin (`getMenu`), behaving as it does on the
 * live header: every item opens its dropdown on hover (with a short intent
 * delay), on click, or on keyboard focus; Escape closes it and returns focus;
 * a click outside closes it. The dropdown carries the same link columns and
 * photo tiles. On phones and tablets the burger opens a full-screen menu with
 * every link. Only the look is new.
 */
export function CineMenu({ panels, onOpenChange, children }: { panels: readonly NavPanel[]; onOpenChange?: (open: boolean) => void; children?: ReactNode }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const { currency, setCurrency, currencies } = useCurrency();
  // Where the phone menu renders: the preview root, outside the header, whose
  // blur would otherwise trap a fixed overlay inside the header strip.
  const [portalTarget, setPortalTarget] = useState<Element | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const wrapRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    onOpenChange?.(open !== null || mobile);
  }, [open, mobile, onOpenChange]);

  useEffect(() => {
    return () => {
      clearTimeout(openTimer.current);
      clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open && !mobile) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (open) document.getElementById(`${id}-t-${open}`)?.focus();
      setOpen(null);
      setMobile(false);
    };
    const onDown = (event: PointerEvent) => {
      if (open && !wrapRef.current?.contains(event.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, mobile, id]);

  useEffect(() => {
    if (!mobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobile]);

  const scheduleOpen = (panelId: string) => {
    clearTimeout(closeTimer.current);
    clearTimeout(openTimer.current);
    // With a dropdown already open, passing over a neighbouring word on the
    // way down into it must not swap the panel: only a deliberate pause does.
    openTimer.current = setTimeout(() => setOpen(panelId), open ? SWITCH_DELAY_MS : HOVER_INTENT_MS);
  };
  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), CLOSE_DELAY_MS);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  const current = panels.find((panel) => panel.id === open);

  return (
    <>
      <div ref={wrapRef} className="cine-menu" onMouseLeave={scheduleClose}>
        <nav aria-label="Main" className="cine-menu__row">
          {panels.map((panel) => (
            /* The word is a link to its own page (Shop → all sarees), as on
               the old site; hovering or tabbing to it opens the dropdown. */
            <Link
              key={panel.id}
              id={`${id}-t-${panel.id}`}
              href={panel.href}
              className="cine-menu__trigger"
              aria-expanded={open === panel.id}
              aria-controls={`${id}-p-${panel.id}`}
              onClick={() => setOpen(null)}
              onMouseEnter={() => scheduleOpen(panel.id)}
              onMouseLeave={scheduleClose}
              onFocus={() => setOpen(panel.id)}
            >
              {panel.label}
            </Link>
          ))}
        </nav>

        {current ? (
          <div
            id={`${id}-p-${current.id}`}
            aria-label={current.label}
            className="cine-drop"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            data-lenis-prevent
          >
            <div className="cine-drop__inner">
              <div className="cine-drop__cols">
                {columnsOf(current).map((column) => (
                  <div key={column.heading}>
                    <p className="cine-drop__heading">{column.heading}</p>
                    <ul>
                      {column.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link href={link.href} onClick={() => setOpen(null)} className={`cine-drop__link ${link.emphasis ? "is-strong" : ""}`}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {current.tiles && current.tiles.length > 0 ? (
                <div className="cine-drop__tiles">
                  {current.tiles.slice(0, 3).map((tile) => (
                    <Link key={tile.href + tile.label} href={tile.href} onClick={() => setOpen(null)} className="cine-tile">
                      <span className="cine-tile__img">
                        {tile.src ? <Image src={tile.src} alt="" fill sizes="240px" className="object-cover" /> : null}
                      </span>
                      <span className="cine-tile__label">{tile.label}</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <div className="cine-header__end">
        {children}
        <button
          type="button"
          className="cine-burger"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls={`${id}-mobile`}
          onClick={() => {
            setPortalTarget(wrapRef.current?.closest(".cine") ?? document.body);
            setMobile((value) => !value);
          }}
        >
          <span />
          <span />
        </button>
      </div>

      {mobile && portalTarget ? createPortal(
        <div id={`${id}-mobile`} className="cine-mobile" role="dialog" aria-modal="true" aria-label="Menu" data-lenis-prevent>
          <div className="cine-mobile__top">
            <span className="cine-logo">{BRAND.name.toUpperCase()}</span>
            <button type="button" className="cine-mobile__close" aria-label="Close menu" onClick={() => setMobile(false)} autoFocus>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
            </button>
          </div>
          <nav aria-label="Mobile">
            {panels.map((panel) => (
              <details key={panel.id} className="cine-mobile__group">
                <summary>{panel.label}</summary>
                <ul>
                  {panel.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} onClick={() => setMobile(false)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </nav>
          <div className="cine-mobile__actions">
            <Link href="/search" onClick={() => setMobile(false)}>Search</Link>
            <Link href="/account" onClick={() => setMobile(false)}>Account</Link>
            <Link href="/wishlist" onClick={() => setMobile(false)}>Wishlist</Link>
            <Link href="/cart" onClick={() => setMobile(false)}>Bag</Link>
            <label className="cine-mobile__currency">
              <span>Currency</span>
              <select value={currency} onChange={(event) => setCurrency(event.target.value as typeof currency)}>
                {currencies.map((code) => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </label>
          </div>
        </div>,
        portalTarget,
      ) : null}
    </>
  );
}

function columnsOf(panel: NavPanel): NavColumn[] {
  return panel.columns && panel.columns.length > 0 ? panel.columns : [{ heading: panel.label, links: panel.links }];
}

export const CINE_MENU_CSS = `
.cine-menu { display: none; justify-self: center; }
@media (min-width: 1360px) { .cine-menu { display: block; } .cine-burger { display: none; } }
.cine-menu__row { display: flex; gap: 6px; }
.cine-menu__trigger { position: relative; background: none; border: 0; cursor: pointer; padding: 12px clamp(9px, 0.95vw, 16px); font-family: var(--font-cine-display); font-weight: 500; font-size: 16.5px; letter-spacing: 0.17em; text-transform: uppercase; white-space: nowrap; color: #fff; opacity: 0.86; transition: opacity 200ms ease; }
.cine-menu__trigger:hover, .cine-menu__trigger[aria-expanded="true"] { opacity: 1; }
.cine-menu__trigger::after { content: ""; position: absolute; left: clamp(9px, 0.95vw, 16px); right: calc(clamp(9px, 0.95vw, 16px) + 0.17em); bottom: 4px; height: 2px; background: #fff; transform: scaleX(0); transform-origin: left; transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-menu__trigger[aria-expanded="true"]::after { transform: scaleX(1); }

/* An invisible bridge over the gap between the words and the dropdown, so the
   pointer never leaves the menu on its way down. */
.cine-drop::before { content: ""; position: absolute; left: 0; right: 0; bottom: 100%; height: 24px; }
/* The words always sit above the dropdown and its bridge, so another word can
   be hovered or clicked while a dropdown is open. */
.cine-menu__row { position: relative; z-index: 2; }
.cine-drop { position: absolute; left: 50%; top: calc(100% - 8px); width: min(1200px, calc(100vw - 2 * var(--pad))); translate: -50% 0; background: var(--kohl); border: 1px solid rgb(255 255 255 / 0.12); animation: cineDrop 380ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes cineDrop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
.cine-drop__inner { display: flex; justify-content: space-between; gap: 48px; padding: 40px 44px 44px; }
.cine-drop__cols { display: flex; gap: 56px; }
.cine-drop__heading { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.55); }
.cine-drop ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
.cine-drop__link { display: inline-block; padding: 5px 0; font-family: var(--font-cine-text); font-size: 18px; color: rgb(255 255 255 / 0.86); transition: color 200ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-drop__link:hover { color: #fff; transform: translateX(4px); }
.cine-drop__link.is-strong { color: #fff; font-weight: 500; }
.cine-drop__tiles { display: flex; gap: 20px; }
.cine-tile { display: block; width: 220px; color: #fff; }
.cine-tile__img { position: relative; display: block; aspect-ratio: 3 / 4; overflow: hidden; background: rgb(255 255 255 / 0.06); }
.cine-tile__img img { transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-tile:hover .cine-tile__img img { transform: scale(1.05); }
.cine-tile__label { display: block; margin-top: 12px; font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.18em; text-transform: uppercase; }

.cine-mobile { position: fixed; inset: 0; z-index: 70; overflow-y: auto; background: var(--kohl); padding: 0 var(--pad) 48px; animation: cineDrop 300ms ease both; }
.cine-mobile__top { height: 72px; display: flex; align-items: center; justify-content: space-between; }
.cine-mobile__close { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; background: none; border: 0; color: #fff; cursor: pointer; }
.cine-mobile__group { border-bottom: 1px solid rgb(255 255 255 / 0.14); }
.cine-mobile__group summary { list-style: none; cursor: pointer; padding: 20px 0; font-family: var(--font-cine-display); font-weight: 600; font-size: 30px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
.cine-mobile__group summary::-webkit-details-marker { display: none; }
.cine-mobile__group ul { list-style: none; margin: 0; padding: 0 0 18px; display: grid; gap: 2px; }
.cine-mobile__group a { display: block; padding: 8px 0; font-size: 18px; color: rgb(255 255 255 / 0.8); }
.cine-mobile__actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 32px; }
.cine-mobile__currency { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; height: 52px; padding: 0 18px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
.cine-mobile__currency select { background: transparent; border: 0; color: #fff; font: inherit; letter-spacing: 0.1em; }
.cine-mobile__currency option { color: #000; }
.cine-mobile__actions a { display: flex; align-items: center; justify-content: center; height: 52px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
`;
