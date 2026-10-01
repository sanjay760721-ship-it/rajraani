"use client";

import { useWishlist } from "./wishlist-context";
import { type Product } from "@/lib/domain/types";

/**
 * Wishlist heart icon for product cards.
 *
 * Fades in on card hover. Click toggles wishlist state.
 * Uses stroke-only icon per design system (no filled glyphs).
 */
export function WishlistHeart({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { isInWishlist, toggle } = useWishlist();
  const inWishlist = isInWishlist(product.handle);

  return (
    <button
      type="button"
      data-on={inWishlist ? "" : undefined}
      className={`wish-heart absolute top-3 right-3 z-10 flex size-10 items-center justify-center ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle({
          handle: product.handle,
          title: product.title,
          poeticName: product.poeticName,
          sku: product.sku,
          priceMinorUnits: product.price.minorUnits,
          colourSlug: product.colourFamily,
          alt: product.images[0]?.alt ?? product.title,
          src: product.images[0]?.src,
        });
      }}
      aria-label={inWishlist ? `Remove ${product.poeticName} from wishlist` : `Add ${product.poeticName} to wishlist`}
      aria-pressed={inWishlist}
    >
      <svg
        className="wish-heart__icon h-[22px] w-[22px] stroke-current"
        fill={inWishlist ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}