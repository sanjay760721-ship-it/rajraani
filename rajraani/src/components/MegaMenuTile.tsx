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
 * A photograph in the dropdown sheet: a temple-arch frame with the caption
 * set beneath it in the display face, so the words never fight the picture.
 *
 * A tile whose photograph has not been supplied falls back to a flat tone in
 * the piece's own colour with a faint booti ground, which reads as a
 * deliberate placeholder rather than a broken image.
 */
export function MegaMenuTile({ label, tone, src, alt, href, onClose }: MegaMenuTileProps) {
  return (
    <Link href={href} onClick={onClose} className="group block">
      <div className="frame-arch photo-drift relative aspect-[3/4] w-full bg-bg-sand">
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes="260px"
            loading="lazy"
            className="object-cover object-center"
          />
        ) : (
          <div className="booti-ground absolute inset-0" style={{ backgroundColor: toneFor(tone) }} />
        )}
        <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[inherit] border border-paper/50" />
      </div>
      <span className="mt-3 flex items-center justify-center gap-2 text-center font-display text-[16px] tracking-[0.04em] text-ink transition-colors group-hover:text-sindoor">
        {label}
      </span>
    </Link>
  );
}
