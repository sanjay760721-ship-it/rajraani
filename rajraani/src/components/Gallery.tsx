"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Frame } from "./Frame";
import { ZoomFrame } from "./ZoomFrame";
import type { ProductImage } from "@/lib/domain/types";

/**
 * PDP gallery.
 *
 * The requirement the prototype existed to pressure-test: a **mixed 2:3 / 1:1
 * sequence**. Five on-model portrait frames then one or two square detail
 * frames (photography-brief.md §3), with both ratios reserved in CSS so the
 * switch costs no layout shift.
 *
 * Main frame on top, thumbnails in a five-up strip beneath it — corrected
 * 10 Sep 2026 against the live reference (design-addendum §A5.2). This was a
 * vertical rail down the left, which the earlier research pass recorded and the
 * re-measurement found no trace of.
 *
 * Operable without a mouse (build.md §6): thumbnails are real buttons in tab
 * order, and the main frame is announced when it changes.
 *
 * The main frame opens a fullscreen lightbox (design.md §6.3). A lens-style
 * magnifier was the alternative; a lightbox was chosen because it works from
 * the keyboard and on touch, where a hover lens is simply unavailable, and
 * because these are 3000px masters — the useful gesture is "show me this big",
 * not "magnify this corner".
 */
/**
 * The one shape the gallery reserves, for the main frame and every thumbnail.
 *
 * Held constant so stepping onto a 1:1 detail shot does not resize the column
 * and shove the page around. Square frames are fitted inside it, not cropped.
 */
const GALLERY_RATIO = "portrait" as const;

/** Thumbnails across the rail's width. The rest are a scroll away, not gone. */
const THUMBS_PER_VIEW = 5;

/** Rail gutter, in px. Kept in sync with the `gap-3` below by the width maths. */
const THUMB_GAP = 12;

export function Gallery({
  images,
  colourSlug,
}: {
  images: readonly ProductImage[];
  colourSlug: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const railRef = useRef<HTMLUListElement>(null);
  const active = images[activeIndex] ?? images[0];

  /*
   * Slide the rail to the active frame.
   *
   * The rail shows five and scrolls; stepping past the fifth with the frame
   * arrows would otherwise select a thumbnail nobody can see. `inline:
   * "nearest"` is deliberate — it moves only when the target is actually out of
   * view, so clicking a visible thumbnail does not shunt the row sideways
   * underneath the cursor.
   *
   * Scrolling the rail itself is untouched by this, so every frame stays
   * reachable by hand as well as by stepping.
   */
  useEffect(() => {
    const rail = railRef.current;
    const target = rail?.children[activeIndex];
    if (!target) return;

    // The reduced-motion preference covers scripted scrolling too, and this is
    // exactly the kind of sideways drift it exists to stop.
    const stillness = window.matchMedia("(prefers-reduced-motion: reduce)");

    target.scrollIntoView({
      behavior: stillness.matches ? "auto" : "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [activeIndex]);

  if (!active) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        {/* Hover magnifies in place; click opens the fullscreen viewer. */}
        <ZoomFrame
          image={active}
          colourSlug={colourSlug}
          onOpen={() => setZoomed(true)}
        />

        {/* Circular arrows sitting on the frame itself, as the reference has
            them — stepping frames without going down to the thumbnails. */}
        {images.length > 1 ? (
          <>
            <FrameArrow
              direction="previous"
              onClick={() =>
                setActiveIndex((current) =>
                  current === 0 ? images.length - 1 : current - 1,
                )
              }
            />
            <FrameArrow
              direction="next"
              onClick={() =>
                setActiveIndex((current) => (current + 1) % images.length)
              }
            />
          </>
        ) : null}
        <p className="sr-only" aria-live="polite">
          {active.alt}
        </p>
        <p className="text-caption mt-3 text-ink-muted">
          {active.alt}
        </p>
      </div>

      {/*
        One row of five that slides, holding every frame.

        Three things had to be true at once, and each earlier attempt got two.
        Letting thumbnails take their own shape gave mismatched heights, because
        the shot template mixes 2:3 on-model frames with 1:1 details. Wrapping
        to a second row made the column's height depend on the frame count.
        Capping at five and hiding the rest lost photographs outright.

        So: the cell shape is fixed and squares sit inside it whole rather than
        cropped; the row never wraps; and the overflow scrolls instead of being
        dropped, sliding itself to follow the active frame. Nothing is hidden —
        it is one scroll or one arrow-press away.
      */}
      <ul
        ref={railRef}
        aria-label="Frames"
        className="scrollbar-none grid snap-x snap-mandatory grid-flow-col gap-3 overflow-x-auto"
        style={{
          gridAutoColumns: `calc((100% - ${
            (THUMBS_PER_VIEW - 1) * THUMB_GAP
          }px) / ${THUMBS_PER_VIEW})`,
        }}
      >
        {images.map((image, index) => (
          <li key={image.id} className="snap-start">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex}
              className="block w-full aria-[current=true]:outline aria-[current=true]:outline-2 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-ink"
            >
              <Frame
                image={image}
                colourSlug={colourSlug}
                sizes="100px"
                ratio={GALLERY_RATIO}
                fit="contain"
              />
              <span className="sr-only">
                Frame {index + 1} of {images.length}: {image.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {zoomed ? (
        <Lightbox
          images={images}
          colourSlug={colourSlug}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setZoomed(false)}
        />
      ) : null}
    </div>
  );
}

/**
 * Fullscreen frame viewer.
 *
 * Arrow keys move through the sequence and Esc closes, so the whole gallery is
 * reachable from here without going back to the thumb rail. Closing returns the
 * page to whichever frame was last looked at, which is why the index is lifted
 * rather than kept locally.
 */
/** One of the two circular step arrows overlaid on the main frame. */
function FrameArrow({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${isPrevious ? "Previous" : "Next"} frame`}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 text-ink transition-colors hover:bg-bg ${
        isPrevious ? "left-4" : "right-4"
      }`}
    >
      <span aria-hidden>{isPrevious ? "←" : "→"}</span>
    </button>
  );
}

function Lightbox({
  images,
  colourSlug,
  index,
  onIndexChange,
  onClose,
}: {
  images: readonly ProductImage[];
  colourSlug: string;
  index: number;
  onIndexChange: (next: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const active = images[index];

  const step = useCallback(
    (delta: number) => {
      const next = (index + delta + images.length) % images.length;
      onIndexChange(next);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => closeRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [onClose, step]);

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Frame viewer"
      className="fixed inset-0 z-50 flex flex-col bg-ink/92 p-4 md:p-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex shrink-0 items-center justify-between">
        <p className="eyebrow text-bg">
          {index + 1} / {images.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close frame viewer"
          className="eyebrow px-3 py-2 text-bg"
        >
          Close
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-4 py-4">
        {images.length > 1 ? (
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous frame"
            className="eyebrow shrink-0 px-3 py-6 text-bg"
          >
            ←
          </button>
        ) : null}

        {/* The viewer keeps each frame's own shape — unlike the inline
            gallery, it has the room, and a detail shot is worth seeing square.
            Capped by height so neither ratio overflows the viewport. */}
        <div className="flex h-full min-w-0 items-center justify-center">
          <div className="h-full" style={{ aspectRatio: active.ratio === "square" ? "1 / 1" : "2 / 3" }}>
            <Frame image={active} colourSlug={colourSlug} sizes="90vh" />
          </div>
        </div>

        {images.length > 1 ? (
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next frame"
            className="eyebrow shrink-0 px-3 py-6 text-bg"
          >
            →
          </button>
        ) : null}
      </div>

      <p className="text-caption shrink-0 text-center text-bg/80">{active.alt}</p>
    </div>
  );
}
