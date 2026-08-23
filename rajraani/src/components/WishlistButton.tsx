"use client";

import Link from "next/link";
import { useWishlist } from "./wishlist-context";

/**
 * Wishlist button/link for header — navigates directly to /wishlist.
 */
export function WishlistButton() {
  const { itemCount } = useWishlist();

  return (
    <Link
      href="/wishlist"
      aria-label={`Wishlist${itemCount > 0 ? `, ${itemCount} items` : ""}`}
      className="font-display text-[13px] tracking-wide text-ink hover:text-accent-hover flex items-center gap-1.5 py-1 transition-colors relative cursor-pointer group"
    >
      <svg
        className="w-[15px] h-[15px] text-danger stroke-danger fill-transparent group-hover:fill-danger/20 transition-colors"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>Wishlist</span>
      {itemCount > 0 && (
        <span className="bg-accent-hover text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full font-mono leading-none">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
}