import Image from "next/image";

import { COLOURS } from "@/lib/domain/taxonomy";
import type { ImageRatio, ProductImage } from "@/lib/domain/types";

/**
 * The single place photography enters the app.
 *
 * There is no photography yet — the brief is written but the shoot has not been
 * commissioned (HANDOFF §6). Rather than wire placeholder JPEGs, this renders a
 * schematic colour field at the exact capture ratio, which does three things:
 *
 * 1. Reserves both 2:3 and 1:1 in CSS, so CLS is already handled and the mixed
 *    gallery sequence is genuinely exercised (build.md §6, §9.3).
 * 2. Uses no imagery at all, which is the only way to be certain no competitor
 *    asset reaches the build (§6 Originality).
 * 3. Keeps the swap contained: when `src` is populated, this component switches
 *    to next/image and nothing else in the app changes.
 *
 * The `srcset` honesty rule (§9.3) lives here too — widths are generated from
 * the master's real dimensions, so the ladder can never advertise a width the
 * master cannot supply. The reference site declares up to 5000w against
 * 1440–1600px masters, and a browser that asks for it receives an upscale.
 */

const RATIO_CLASS: Record<ImageRatio, string> = {
  portrait: "aspect-portrait",
  square: "aspect-square",
};

/**
 * The schematic wash laid over every placeholder, so a frame reads as a
 * deliberate blank rather than a broken image.
 */
export const PLACEHOLDER_WASH =
  "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))";

/** Falls back to the muted-ink token rather than a literal colour. */
const NEUTRAL_TONE = "var(--color-ink-muted)";

/** Widths the master can actually supply, capped at its own width. */
export function srcsetWidths(masterWidth: number): number[] {
  return [400, 600, 900, 1200, 1800, 2400, 3000].filter(
    (width) => width <= masterWidth,
  );
}

/** Swatch colour for a colour-family slug, from taxonomy/facets.json. */
export function toneFor(colourSlug: string | undefined): string {
  return COLOURS.find((colour) => colour.slug === colourSlug)?.hex ?? NEUTRAL_TONE;
}

export function Frame({
  image,
  colourSlug,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 50vw",
  className = "",
  showLabel = false,
  ratio,
  fit = "cover",
}: {
  image: ProductImage;
  /** Drives the placeholder tint so a grid reads plausibly. */
  colourSlug?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Label the frame's role in the shot template — useful while placeholding. */
  showLabel?: boolean;
  /**
   * Force the box's shape, ignoring the frame's own.
   *
   * The gallery needs this: a shot template that mixes 2:3 on-model frames
   * with 1:1 details will otherwise change the height of the whole column
   * every time someone steps onto a detail shot. Reserving one shape and
   * letting the square sit inside it keeps the page still.
   */
  ratio?: ImageRatio;
  /**
   * `contain` shows the whole photograph inside the box, letterboxed if its
   * shape differs. Use it wherever the box's shape is forced — cropping a
   * square detail into a 2:3 hole throws away the detail it was shot for.
   */
  fit?: "cover" | "contain";
}) {
  const ratioClass = RATIO_CLASS[ratio ?? image.ratio];
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (image.src) {
    return (
      <div className={`relative ${ratioClass} overflow-hidden bg-bg-alt ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized
          className={fitClass}
        />
      </div>
    );
  }

  const tone = toneFor(colourSlug);

  return (
    <div
      // role/aria-label rather than an empty div: the frame still has to carry
      // its description to assistive technology while it is a placeholder.
      role="img"
      aria-label={image.alt}
      className={`relative ${ratioClass} overflow-hidden ${className}`}
      style={{
        backgroundColor: tone,
        backgroundImage: PLACEHOLDER_WASH,
      }}
    >
      {showLabel ? (
        <span className="eyebrow absolute bottom-3 left-3 bg-bg/90 px-2 py-1 text-ink">
          {image.shot.replace(/_/g, " ")}
        </span>
      ) : null}
    </div>
  );
}

/** A schematic tile for navigation and editorial slots, which have no image yet. */
export function ToneTile({
  label,
  tone,
  ratio = "portrait",
}: {
  label: string;
  /** A colour-family slug from taxonomy/facets.json. */
  tone: string;
  ratio?: ImageRatio;
}) {
  return (
    <div
      className={`relative ${RATIO_CLASS[ratio]} overflow-hidden`}
      style={{
        backgroundColor: toneFor(tone),
        backgroundImage: PLACEHOLDER_WASH,
      }}
    >
      <span className="eyebrow absolute bottom-3 left-3 text-bg">{label}</span>
    </div>
  );
}
