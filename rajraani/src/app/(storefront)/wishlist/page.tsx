"use client";

import Link from "next/link";
import { useWishlist } from "@/components/wishlist-context";
import { useCart } from "@/components/cart-context";
import { formatMoney } from "@/lib/money";
import { BASE_CURRENCY } from "@/lib/domain/types";
import { PLACEHOLDER_WASH, toneFor } from "@/components/Frame";

export default function WishlistPage() {
  const { items, remove, itemCount } = useWishlist();
  const { add } = useCart();

  return (
    <div className="min-h-[70vh] bg-bg py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="font-display text-3xl sm:text-4xl text-ink font-normal mb-3">
          My Wishlist
        </h1>
        <p className="text-caption text-ink-muted">
          Your saved handloom heirlooms and favorite pieces.
        </p>
      </div>

      {itemCount === 0 ? (
        <div className="text-center py-20 bg-surface-notice border border-rule max-w-xl mx-auto p-8">
          <svg
            className="w-12 h-12 text-danger mx-auto mb-4 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="font-display text-xl text-ink mb-2">Your wishlist is empty</h2>
          <p className="text-caption text-ink-muted mb-8">
            Explore our handcrafted collections and save the pieces that speak to you.
          </p>
          <Link
            href="/collections/all"
            className="inline-block bg-ink text-bg px-8 py-3 text-xs uppercase tracking-[0.16em] hover:bg-ink-dark transition-colors font-medium"
          >
            Explore Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.handle} className="group relative bg-white border border-rule flex flex-col justify-between">
              <div>
                <div className="aspect-[2/3] bg-bg-alt relative overflow-hidden">
                  <Link
                    href={`/products/${item.handle}`}
                    className="block w-full h-full"
                    style={{
                      backgroundColor: toneFor(item.colourSlug),
                      backgroundImage: PLACEHOLDER_WASH,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => remove(item.handle)}
                    className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-ink hover:text-danger transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm text-ink mb-1 line-clamp-1">
                    <Link href={`/products/${item.handle}`}>{item.poeticName || item.title}</Link>
                  </h3>
                  <p className="text-xs text-ink-muted font-mono">
                    {formatMoney({ minorUnits: item.priceMinorUnits, currency: BASE_CURRENCY })}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={() => {
                    add({
                      handle: item.handle,
                      title: item.title,
                      poeticName: item.poeticName,
                      sku: item.sku,
                      priceMinorUnits: item.priceMinorUnits,
                      colourSlug: item.colourSlug,
                      alt: item.alt,
                      maxQuantity: 1,
                    });
                  }}
                  className="w-full bg-ink text-bg py-2.5 text-[11px] uppercase tracking-[0.12em] hover:bg-ink-dark transition-colors text-center block cursor-pointer"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
