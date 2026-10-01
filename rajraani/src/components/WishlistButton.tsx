"use client";

import Link from "next/link";
import { useWishlist } from "./wishlist-context";
import {
  UTILITY_BADGE,
  UTILITY_CAPTION,
  UTILITY_ICON,
  UTILITY_ITEM,
} from "./utility-styles";

/**
 * Wishlist link for the header's action cluster: a line heart that fills
 * in sindoor once something has been saved, with the count on a badge.
 */
export function WishlistButton() {
  const { itemCount } = useWishlist();
  const count = itemCount > 9 ? "9+" : itemCount;

  return (
    <Link
      href="/wishlist"
      aria-label={`Wishlist${itemCount > 0 ? `, ${itemCount} items` : ""}`}
      className={UTILITY_ITEM}
    >
      <svg
        className={`${UTILITY_ICON} transition-colors ${itemCount > 0 ? "fill-sindoor/15 text-sindoor" : "fill-transparent"}`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.4}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className={UTILITY_CAPTION} aria-hidden="true">Wishlist</span>
      {itemCount > 0 && <span className={UTILITY_BADGE}>{count}</span>}
    </Link>
  );
}
