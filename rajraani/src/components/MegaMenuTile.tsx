"use client";

import Image from "next/image";

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
 * Mega Menu Image Tile — art-directed image tile for mega menu panels.
 *
 * When `src` is provided, renders the actual image with proper aspect ratio.
 * Falls back to ToneTile-style placeholder when no image is available.
 * Uses 3:4 portrait aspect ratio per design.md §5.3.
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
    <a
      href={href}
      onClick={onClose}
      className="group block relative overflow-hidden"
      aria-label={label}
    >
      {src ? (
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={src}
            alt={alt || label}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: toneFor(tone),
              backgroundImage:
                "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))",
            }}
          />
        </div>
      )}
      <span className="eyebrow absolute bottom-3 left-3 text-bg">
        {label}
      </span>
    </a>
  );
}