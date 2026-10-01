"use client";

import Image from "next/image";
import Link from "next/link";

import { toneFor } from "./Frame";

interface MegaMenuTileProps {
  label: string;
  tone: string;
  src?: string;
  alt?: string;
  href: string;
  onClose?: () => void;
}

/**
 * Mega menu image tile.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * This component existed and nothing used it. `SiteHeader` had grown its own
 * copy of the same markup inline, and the two had drifted in the way duplicated
 * markup always does — the inline one had the hover treatment, this one had the
 * thing that actually mattered.
 *
 * WHICH IS THE TONE FALLBACK. Every tile src in the menus pointed into
 * `/public/homepage/mega-menu/`, a directory that has been empty for as long as
 * it has existed, so all thirteen tiles were broken images in a panel whose
 * whole job is to look composed. The inline copy rendered `<Image>`
 * unconditionally. This one falls back to a flat tone in the piece's own
 * colour, which reads as a deliberate placeholder rather than as a failure.
 *
 * Photography is still the real fix — commissioned, per docs/research/
 * photography-brief.md. Until then the menu should degrade quietly.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export function MegaMenuTile({
  label,
  tone,
  src,
  alt,
  href,
  onClose,
}: MegaMenuTileProps) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group relative block overflow-hidden"
    >
      {src ? (
        /*
         * next/image, not a raw <img>: these are full-size masters served into
         * a column of at most 200px, so without it every panel ships the
         * original. `sizes` is fixed at the two column widths because the
         * column only has two.
         */
        <div className="relative aspect-2/3 w-full overflow-hidden">
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes="260px"
            loading="lazy"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className="aspect-2/3 w-full"
          style={{
            backgroundColor: toneFor(tone),
            backgroundImage:
              "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))",
          }}
        />
      )}

      {/*
        * A permanent scrim under the caption rather than a hover-only one: the
        * caption has to be legible before the pointer arrives, and on a touch
        * device it never does. Deep enough at the foot of the frame that white
        * type reads on a pale photograph as well as a dark one.
        */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

      <span className="absolute inset-x-3 bottom-[9%] text-center font-display text-[15px] uppercase leading-[1.3] tracking-[1.5px] text-white [text-shadow:0_1px_3px_rgb(0_0_0/0.45)]">
        {label}
      </span>
    </Link>
  );
}
