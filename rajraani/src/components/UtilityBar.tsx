"use client";

import Link from "next/link";
import { useSearchModal } from "@/components/search-context";
import { CurrencySelector } from "@/components/CurrencySelector";
import { WishlistButton } from "@/components/WishlistButton";
import { useCart } from "@/components/cart-context";
import { BRAND } from "@/lib/brand";
import {
  UTILITY_BADGE,
  UTILITY_CAPTION,
  UTILITY_ICON,
  UTILITY_ITEM,
} from "@/components/utility-styles";

/**
 * Utility / Secondary Top Bar — Desktop only.
 *
 * - Height: 64px, --color-surface-notice, 1px --color-rule bottom border
 * - Left corner: the house tagline from BRAND (italic display serif)
 * - Right side: Search | Currency | Login | Wishlist | Cart, icon over caption
 */
export function UtilityBar() {
  const { open: openSearch } = useSearchModal();
  // The cart here navigates to /cart rather than opening the drawer, so the
  // drawer opener is deliberately not pulled off the context.
  const { itemCount } = useCart();

  return (
    <div
      className="hidden lg:flex items-center justify-between h-[64px] border-b border-rule px-8 xl:px-14 w-full select-none"
      style={{ backgroundColor: "var(--color-surface-notice)" }}
      aria-label="Utility navigation"
    >
      {/* Left Corner: Tagline */}
      <div className="flex items-center justify-start min-w-0">
        <p className="font-display italic text-[15px] xl:text-[16px] text-ink font-normal tracking-[0.04em]">
          {BRAND.line}
        </p>
      </div>

      {/* Right Side: Search, Currency Selector, Login, Wishlist, Cart */}
      <div className="flex items-stretch justify-end gap-4 xl:gap-6 h-full min-w-0">
        {/* Search */}
        <button
          type="button"
          onClick={openSearch}
          className={UTILITY_ITEM}
          aria-label="Search catalogue"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={UTILITY_ICON}
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7.5" />
            <line x1="20.5" y1="20.5" x2="16.4" y2="16.4" />
          </svg>
          <span className={UTILITY_CAPTION}>Search</span>
        </button>

        {/* Currency selector */}
        <CurrencySelector />

        {/* Login */}
        <Link href="/account" className={UTILITY_ITEM} aria-label="Login to account">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={UTILITY_ICON}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3.25" />
            <path d="M6.2 18.6a6.5 6.5 0 0 1 11.6 0" />
          </svg>
          <span className={UTILITY_CAPTION}>Login</span>
        </Link>

        {/* Wishlist (with red heart) */}
        <WishlistButton variant="stacked" />

        {/* Cart */}
        <Link
          href="/cart"
          className={UTILITY_ITEM}
          aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={UTILITY_ICON}
            aria-hidden="true"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className={UTILITY_CAPTION}>Cart</span>
          {itemCount > 0 && <span className={UTILITY_BADGE}>{itemCount}</span>}
        </Link>
      </div>
    </div>
  );
}
