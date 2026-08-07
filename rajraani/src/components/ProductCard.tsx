import Link from "next/link";

import { Frame } from "./Frame";
import { Price } from "./Price";
import { isAvailable, type Product } from "@/lib/domain/types";

/**
 * The atomic unit of every grid.
 *
 * The card *is* the image — no border, no background, no shadow, no radius.
 * Aspect ratio is 2:3, never square: a saree cropped to 1:1 in a grid loses the
 * drape, which is the thing being sold (design.md §5.4, corrected).
 *
 * Fulfilment state is badged from `fulfilmentMode`, never read out of the
 * title (§9.8).
 */

const BADGES: Partial<Record<Product["fulfilmentMode"], string>> = {
  pre_order: "Pre-order",
  made_to_order: "Made to order",
};

export function ProductCard({
  product,
  priority = false,
  headingLevel = 3,
}: {
  product: Product;
  priority?: boolean;
  /**
   * The card's heading level depends on what encloses it, so the caller has to
   * say. In a grid sitting directly under the page `h1` it is an `h2`; inside a
   * titled rail whose heading is an `h2` it is an `h3`.
   *
   * This is not fussiness — heading order on the reference PDP runs
   * H1→H4→H4→H2→H4→H5 (pre-build-gaps.md §5), which is what happens when every
   * component hardcodes its own level.
   */
  headingLevel?: 2 | 3;
}) {
  const [primary, secondary] = product.images;
  if (!primary) return null;

  const Heading = `h${headingLevel}` as const;

  const available = isAvailable(product);
  const badge = available ? BADGES[product.fulfilmentMode] : "Sold out";

  return (
    <article className="group relative">
      <div className="relative">
        <Frame
          image={primary}
          colourSlug={product.colourFamily}
          priority={priority}
          sizes="(min-width: 1440px) 25vw, (min-width: 768px) 33vw, 50vw"
          className={available ? "" : "opacity-60"}
        />
        {/* Hover swaps to the second frame — the only motion on the card. */}
        {secondary ? (
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-brand group-hover:opacity-100"
          >
            <Frame
              image={secondary}
              colourSlug={product.colourFamily}
              sizes="(min-width: 1440px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </div>
        ) : null}

        {badge ? (
          <span className="eyebrow absolute top-3 left-3 bg-bg/92 px-2 py-1 text-ink">
            {badge}
          </span>
        ) : null}
      </div>

      {/*
        The name leads, in the display face at a size where it reads as a name
        rather than a label. The descriptive title sits under it, quiet and
        clamped — it exists for search and for scanning, not for admiring.
        Price last, in the UI face with tabular figures so a column of prices
        aligns on the decimal even at different lengths.
      */}
      <div className="mt-4">
        <Heading className="font-display text-[1.375rem] leading-tight tracking-tight text-ink">
          {/* Stretched link: the whole card is one target, without nesting
              anchors inside an anchor. */}
          <Link href={`/products/${product.handle}`} className="after:absolute after:inset-0">
            {product.poeticName}
          </Link>
        </Heading>
        <p className="text-caption mt-1.5 line-clamp-2 text-ink-muted">{product.title}</p>
        <p className="mt-2.5 text-caption text-ink">
          <Price value={product.price} />
        </p>
      </div>
    </article>
  );
}
