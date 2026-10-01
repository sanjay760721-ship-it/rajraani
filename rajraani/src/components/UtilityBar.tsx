"use client";

import Link from "next/link";
import { useSearchModal } from "@/components/search-context";
import { CurrencySelector } from "@/components/CurrencySelector";
import { LotusMark } from "@/components/LotusMark";
import { WishlistButton } from "@/components/WishlistButton";
import { useCart } from "@/components/cart-context";
import { useSiteText } from "@/components/site-text-context";
import {
  UTILITY_BADGE,
  UTILITY_CAPTION,
  UTILITY_ICON,
  UTILITY_ITEM,
} from "@/components/utility-styles";

/**
 * Top bar, computers only: warm ivory over a thin gold rule.
 *
 * - Left: the gold lotus from the logo and the house line (editable in the
 *   admin under Change text).
 * - Centre: a search box. It opens the live search, where results appear as
 *   the shopper types, so it reads as a field and behaves as the search.
 * - Right: Currency | Login | Wishlist | Cart, icon over caption, in maroon ink.
 *
 * The three parts sit in equal outer columns so the search box stays centred
 * on the page, in line with the wordmark below it.
 */
export function UtilityBar() {
  const { open: openSearch } = useSearchModal();
  // The cart here navigates to /cart rather than opening the drawer.
  const { itemCount } = useCart();
  // Edited in the admin under Site-wide text.
  const { tagline } = useSiteText();

  return (
    <div
      className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6 h-[64px] border-b border-topbar-rule bg-topbar-bg px-8 xl:px-14 w-full select-none"
      aria-label="Utility navigation"
    >
      {/* Left: lotus and the house line */}
      <div className="flex items-center gap-3 min-w-0">
        <LotusMark className="h-[22px] w-[30px] shrink-0 text-zari" />
        <p className="truncate font-display italic text-[16px] xl:text-[17px] text-topbar-accent tracking-[0.02em]">
          {tagline}
        </p>
      </div>

      {/* Centre: the search box */}
      <button
        type="button"
        onClick={openSearch}
        className="group flex h-10 w-[360px] xl:w-[440px] cursor-text items-center gap-2.5 rounded-full border border-topbar-field-rule bg-topbar-field px-[18px] text-left font-ui text-[13.5px] text-ink-muted transition-colors hover:border-zari focus-visible:border-zari"
        aria-label="Search the collection"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="h-4 w-4 shrink-0 text-topbar-accent"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7.5" />
          <line x1="20.5" y1="20.5" x2="16.4" y2="16.4" />
        </svg>
        <span className="truncate">Search sarees, weaves, colours…</span>
      </button>

      {/* Right: Currency, Login, Wishlist, Cart */}
      <div className="flex items-stretch justify-end gap-4 xl:gap-6 h-full min-w-0">
        <CurrencySelector />

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

        <WishlistButton variant="stacked" />

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
