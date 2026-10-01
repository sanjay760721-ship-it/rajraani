"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

import type { NavPanel } from "@/lib/data/navigation";
import { useCart } from "@/components/cart-context";
import { useCurrency } from "@/components/currency-context";
import { useSearchModal } from "@/components/search-context";
import { useWishlist } from "@/components/wishlist-context";
import { CineMenu } from "./CineMenu";

/**
 * The site's one header, on every storefront page.
 *
 * `overlay` (the homepage) starts transparent over the first photograph and
 * turns solid once the visitor is past it; `solid` (every other page) is solid
 * from the start, because there is no photograph underneath. Both slide away
 * while scrolling down and come back on the way up.
 */
export function CineHeader({ menu, mode }: { menu: readonly NavPanel[]; mode: "overlay" | "solid" }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const header = ref.current;
      if (!header) return;
      if (Math.abs(y - last) > 4) {
        header.toggleAttribute("data-hidden", y > last && y > 140 && !header.hasAttribute("data-menu"));
        last = y;
      }
      if (mode === "overlay") header.toggleAttribute("data-solid", y > window.innerHeight * 0.85);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [mode]);

  return (
    <header ref={ref} className="cine-header" data-solid={mode === "solid" ? "" : undefined}>
      <div className="cine-header__row">
        <Link href="/" className="cine-logo" aria-label={`${BRAND.name} home`}>
          {BRAND.name.toUpperCase()}
        </Link>
        <CineMenu panels={menu} onOpenChange={(isOpen) => ref.current?.toggleAttribute("data-menu", isOpen)}>
          <CineActions />
        </CineMenu>
      </div>
    </header>
  );
}

/*
 * Wired to the same providers as the rest of the shop: Search opens the live
 * search, Bag opens the cart drawer, and the counts are the real ones.
 */
function CineActions() {
  const { open: openSearch } = useSearchModal();
  const { itemCount, open: openCart } = useCart();
  const { itemCount: saved } = useWishlist();
  const { currency, setCurrency, currencies } = useCurrency();

  return (
    <>
      <button type="button" onClick={openSearch} className="cine-nav cine-hide-sm cine-action">
        Search
      </button>
      <label className="cine-hide-sm cine-currency">
        <span className="sr-only">Currency</span>
        <select value={currency} onChange={(event) => setCurrency(event.target.value as typeof currency)} className="cine-nav">
          {currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </label>
      <Link href="/account" className="cine-nav cine-hide-lg">
        Account
      </Link>
      <Link href="/wishlist" className="cine-nav cine-hide-sm" aria-label={`Wishlist${saved > 0 ? `, ${saved} saved` : ""}`}>
        Wishlist{saved > 0 ? <span className="cine-count">{saved}</span> : null}
      </Link>
      <button type="button" onClick={openCart} className="cine-nav cine-action" aria-label={`Bag${itemCount > 0 ? `, ${itemCount} items` : ""}`}>
        Bag{itemCount > 0 ? <span className="cine-count">{itemCount}</span> : null}
      </button>
    </>
  );
}
