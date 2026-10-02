"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { PLACEHOLDER_WASH, toneFor } from "./Frame";
import type { ProductImage } from "@/lib/domain/types";

/**
 * The PDP main frame, with hover magnification.
 *
 * Measured on the reference 10 Sep 2026 (design-addendum §A5.2a): a
 * `.zoom-container` at the frame's own size with `overflow: hidden`, holding a
 * larger copy of the same photograph — 800×1200 inside a 580×870 box, so
 * **1.4×** — panned so that the point under the cursor stays under the cursor.
 *
 * That is a pan-zoom, not a `scale()` on hover. The difference matters: a
 * scale grows the image about a fixed origin, so the detail you were pointing
 * at slides away from the pointer. Here it does not move, which is the whole
 * point when someone is trying to look at a specific motif.
 *
 * Pointer-driven and therefore mouse-only by nature. It is strictly additive:
 * the frame is still a button that opens the fullscreen viewer, which is what
 * touch and keyboard use, so nothing is behind the hover.
 */

const ZOOM = 1.4;

export function ZoomFrame({
  image,
  colourSlug,
  onOpen,
}: {
  image: ProductImage;
  colourSlug?: string;
  /** Click still opens the lightbox — zoom is a look, not a destination. */
  onOpen: () => void;
}) {
  const boxRef = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  // One shape for every frame. A gallery that resizes when you step onto a
  // square detail shot shoves the whole details column up and down the page.
  const ratioClass = "aspect-portrait";

  // No photograph yet: the schematic colour field, and nothing to magnify.
  if (!image.src) {
    return (
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View larger: ${image.alt}`}
        className={`relative block w-full cursor-zoom-in overflow-hidden ${ratioClass}`}
        style={{
          backgroundColor: toneFor(colourSlug),
          backgroundImage: PLACEHOLDER_WASH,
        }}
      />
    );
  }

  return (
    <button
      ref={boxRef}
      type="button"
      onClick={onOpen}
      aria-label={`View larger: ${image.alt}`}
      className={`relative block w-full cursor-zoom-in overflow-hidden bg-bg-alt ${ratioClass}`}
      onMouseMove={(event) => {
        const box = boxRef.current?.getBoundingClientRect();
        if (!box) return;
        setOrigin({
          x: ((event.clientX - box.left) / box.width) * 100,
          y: ((event.clientY - box.top) / box.height) * 100,
        });
      }}
      onMouseLeave={() => setOrigin(null)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 580px, 100vw"
        priority
        // `contain`, not `cover`: the box's shape is forced, and a square
        // detail cropped into a 2:3 hole loses the detail it was shot for.
        className="object-contain transition-transform duration-200 ease-out"
        style={
          origin
            ? {
                transform: `scale(${ZOOM})`,
                // Anchoring the origin to the cursor is what keeps the point
                // under the pointer still while everything else grows past it.
                transformOrigin: `${origin.x}% ${origin.y}%`,
              }
            : undefined
        }
      />
    </button>
  );
}
