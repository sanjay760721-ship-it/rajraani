"use client";

import Link from "next/link";
import { useSearchModal } from "@/components/search-context";
import { CurrencySelector } from "@/components/CurrencySelector";
import { WishlistButton } from "@/components/WishlistButton";
import { useCart } from "@/components/cart-context";
import { BRAND } from "@/lib/brand";

/**
 * Utility / Secondary Top Bar — Desktop only.
 *
 * Spec:
 * - Height: 67px (homepagespec.md §1)
 * - Background: #ffffff with 1px border-b #e7e0d6
 * - Left corner: "Made in Banaras. Made by Rajraani." (italic display serif)
 * - Right side: Search | Currency Selector | Login | Wishlist (Red Heart) | Cart
 */
export function UtilityBar() {
  const { open: openSearch } = useSearchModal();
  const { itemCount, open: openCart } = useCart();

  return (
    <div
      className="hidden lg:flex items-center justify-between h-[42px] border-b border-rule px-8 xl:px-14 w-full select-none"
      style={{ backgroundColor: "#faf0f0" }}
      aria-label="Utility navigation"
    >
      {/* Left Corner: Tagline */}
      <div className="flex items-center justify-start min-w-0">
        <p className="font-display italic text-[13.5px] xl:text-[14px] text-ink font-normal tracking-wide">
          {BRAND.line}
        </p>
      </div>

      {/* Right Side: Search, Currency Selector, Login, Wishlist, Cart */}
      <div className="flex items-center justify-end gap-6 xl:gap-8 min-w-0">
        {/* Search */}
        <button
          type="button"
          onClick={openSearch}
          className="font-display flex items-center gap-1.5 text-ink hover:text-[#ae7922] transition-colors py-0.5 text-[13px] tracking-wide cursor-pointer group"
          aria-label="Search catalogue"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink group-hover:text-[#ae7922] transition-colors"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Search</span>
        </button>

        {/* Currency selector */}
        <CurrencySelector />

        {/* Login */}
        <Link
          href="/account"
          className="font-display flex items-center gap-1.5 text-ink hover:text-[#ae7922] transition-colors text-[13px] tracking-wide"
          aria-label="Login to account"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Login</span>
        </Link>

        {/* Wishlist (with red heart) */}
        <WishlistButton />

        {/* Cart */}
        <Link
          href="/cart"
          className="font-display flex items-center gap-1.5 text-ink hover:text-[#ae7922] transition-colors text-[13px] tracking-wide cursor-pointer group"
          aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink group-hover:text-[#ae7922] transition-colors"
            aria-hidden="true"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span>Cart</span>
          {itemCount > 0 && (
            <span className="bg-[#ae7922] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full font-mono leading-none">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}