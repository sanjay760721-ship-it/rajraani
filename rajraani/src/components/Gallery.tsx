"use client";

import { useState } from "react";

import { Frame } from "./Frame";
import type { ProductImage } from "@/lib/domain/types";

/**
 * PDP gallery.
 *
 * The requirement the prototype existed to pressure-test: a **mixed 2:3 / 1:1
 * sequence**. Five on-model portrait frames then one or two square detail
 * frames (photography-brief.md §3), with both ratios reserved in CSS so the
 * switch costs no layout shift.
 *
 * Operable without a mouse (build.md §6): thumbnails are real buttons in tab
 * order, and the main frame is announced when it changes.
 */
export function Gallery({
  images,
  colourSlug,
}: {
  images: readonly ProductImage[];
  colourSlug: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];
  if (!active) return null;

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      {/* Thumb rail: horizontal scroll-snap strip on mobile, vertical on desktop. */}
      <ul
        aria-label="Frames"
        className="flex snap-x gap-3 overflow-x-auto md:w-20 md:shrink-0 md:flex-col md:overflow-visible"
      >
        {images.map((image, index) => (
          <li key={image.id} className="w-16 shrink-0 snap-start md:w-full">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex}
              className="block w-full aria-[current=true]:outline aria-[current=true]:outline-2 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-ink"
            >
              <Frame image={image} colourSlug={colourSlug} sizes="80px" />
              <span className="sr-only">
                Frame {index + 1} of {images.length}: {image.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1">
        <Frame
          image={active}
          colourSlug={colourSlug}
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          showLabel
        />
        <p className="sr-only" aria-live="polite">
          {active.alt}
        </p>
        <p className="text-caption mt-3 text-ink-muted">
          {active.alt}
        </p>
      </div>
    </div>
  );
}
