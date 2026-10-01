import Link from "next/link";

import { Frame } from "./Frame";
import { Price } from "./Price";
import { QuickView } from "./QuickView";
import { WishlistHeart } from "./WishlistHeart";
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

/** Rails and mega-menu tiles; the PLP is two-up and passes its own. */
const RAIL_SIZES = "(min-width: 1440px) 25vw, (min-width: 768px) 33vw, 50vw";

export function ProductCard({
  product,
  priority = false,
  headingLevel = 3,
  sizes = RAIL_SIZES,
  quickView = false,
}: {
  product: Product;
  priority?: boolean;
  /**
   * The card cannot know how wide it renders — that is the grid's business —
   * so the caller states it. Wrong here means the browser picks the wrong rung
   * of the srcset ladder, which is a bandwidth bug, not a visual one.
   */
  sizes?: string;
  /**
   * Offer the quick-view bar on hover. On in the listing grids and the
   * recommendation rail, which is where the reference puts it.
   */
  quickView?: boolean;
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

  // Sold-out pieces are badged, not dimmed. Fading the photograph to 60% made
  // them read as poor photography rather than as unavailable stock — and on a
  // catalogue where roughly half of a mature season is sold out (§9.7), that
  // would be half the grid looking washed out for no informational gain. The
  // badge already carries the state.
  const badge = isAvailable(product)
    ? BADGES[product.fulfilmentMode]
    : "Sold out";

  return (
    <article className="product-card group relative">
      <div className="relative">
        <Frame
          image={primary}
          colourSlug={product.colourFamily}
          priority={priority}
          sizes={sizes}
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
              sizes={sizes}
            />
          </div>
        ) : null}

        {badge ? (
          <span className="eyebrow absolute top-3 left-3 bg-bg/92 px-2 py-1 text-ink">
            {badge}
          </span>
        ) : null}
        {/* Wishlist heart — fades in on card hover */}
        <WishlistHeart product={product} />
        {quickView ? <QuickView product={product} /> : null}
      </div>

      {/*
        The name leads, in the display face at a size where it reads as a name
        rather than a label. The descriptive title sits under it, quiet and
        clamped — it exists for search and for scanning, not for admiring.
        Price last, in the UI face with tabular figures so a column of prices
        aligns on the decimal even at different lengths.
      */}
      {/* Centred under the frame — the reference centres both the title and
          the price, and a left-aligned column of names under centred images
          reads as a different grid entirely. */}
      <div className="mt-4 text-center">
        <Heading className="font-display text-[1.375rem] leading-none tracking-[0.06em] text-ink">
          {/* Stretched link: the whole card is one target, without nesting
              anchors inside an anchor. */}
          <Link href={`/products/${product.handle}`} className="after:absolute after:inset-0">
            {product.poeticName}
          </Link>
        </Heading>
        <p className="text-caption mx-auto mt-2 line-clamp-2 max-w-[34ch] text-ink-muted">{product.title}</p>
        <p className="mt-2.5 text-[0.9375rem] tabular-nums tracking-[0.02em] text-ink">
          <Price value={product.price} />
        </p>
      </div>
    </article>
  );
}
