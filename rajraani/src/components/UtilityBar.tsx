"use client";

import Link from "next/link";
import { useSearchModal } from "@/components/search-context";
import { CurrencySelector } from "@/components/CurrencySelector";
import { WishlistButton } from "@/components/WishlistButton";
import { useCart } from "@/components/cart-context";
import { useSiteText } from "@/components/site-text-context";
import { UTILITY_BADGE, UTILITY_CAPTION, UTILITY_ICON, UTILITY_ITEM } from "@/components/utility-styles";
import styles from "./HouseBars.module.css";

export function UtilityBar() {
  const { open: openSearch } = useSearchModal();
  const { itemCount } = useCart();
  const { tagline } = useSiteText();

  return (
    <div className={styles.toolbar} aria-label="Utility navigation">
      <div className={styles.toolbarInner}>
        <div className={styles.signature}>
          <svg className={styles.emblem} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <path d="M18 4c-5 6-5 12 0 18 5-6 5-12 0-18Z" /><path d="M18 24C9 23 4 18 5 10c8 1 12 6 13 14Zm0 0c9-1 14-6 13-14-8 1-12 6-13 14Z" /><path d="M6 25c6 6 18 6 24 0M11 32h14M18 24v8" />
          </svg>
          <div><span className={styles.signatureLabel}>THE BANARAS ATELIER</span><p className={styles.tagline}>{tagline}</p></div>
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={openSearch} className={styles.search} aria-label="Search catalogue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
            <span>Find your piece</span><span className={styles.searchArrow} aria-hidden="true">↗</span>
          </button>
          <div className={styles.currency}><CurrencySelector /></div>
          <div className={styles.divider} aria-hidden="true" />
          <Link href="/account" className={UTILITY_ITEM} aria-label="Login to account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={UTILITY_ICON} aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></svg>
            <span className={UTILITY_CAPTION}>Account</span>
          </Link>
          <WishlistButton variant="stacked" />
          <Link href="/cart" className={UTILITY_ITEM} aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={UTILITY_ICON} aria-hidden="true"><path d="M5 7h14l1 14H4L5 7Z" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></svg>
            <span className={UTILITY_CAPTION}>Bag</span>
            {itemCount > 0 && <span className={UTILITY_BADGE}>{itemCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
