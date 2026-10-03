"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";
import { formatMoney } from "@/lib/money";
import { BASE_CURRENCY } from "@/lib/domain/types";
import { CartThumb } from "@/components/CartThumb";
import { PageHead } from "@/components/cinematic/PageHead";

export default function CartPage() {
  const { lines, setQuantity, remove, subtotal, itemCount, open: openCartDrawer } = useCart();

  return (
    <div className="min-h-[70vh] bg-bg pb-16 px-4 sm:px-8 max-w-[1280px] mx-auto">
      <PageHead kicker="Your bag" title="Shopping cart" size="md" intro="Complimentary shipping across India. Taxes included." />

      {itemCount === 0 ? (
        <div className="text-center py-20 bg-surface-notice border border-rule max-w-xl mx-auto p-8">
          <h2 className="font-display text-xl text-ink mb-2">Your cart is currently empty</h2>
          <p className="text-caption text-ink-muted mb-8">
            Continue exploring our handloom sarees, dupattas and collectibles.
          </p>
          <Link
            href="/collections/all"
            className="inline-block bg-ink text-bg px-8 py-3 text-xs uppercase tracking-[0.16em] hover:bg-ink-dark transition-colors font-medium"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Item List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-rule bg-bg-alt divide-y divide-rule">
              {lines.map((line) => (
                <div key={line.handle} className="p-6 flex gap-6 items-center">
                  <CartThumb line={line} className="h-28 w-20" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-[1.375rem] leading-none tracking-[0.06em] text-ink mb-1">
                      {line.poeticName || line.title}
                    </h3>
                    <p className="text-xs text-ink-muted tabular-nums mb-3">
                      {formatMoney({ minorUnits: line.priceMinorUnits, currency: BASE_CURRENCY })}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-rule">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.handle, line.quantity - 1)}
                          className="px-2.5 py-1 text-ink hover:bg-bg-alt transition-colors text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs tabular-nums text-ink">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.handle, line.quantity + 1)}
                          className="px-2.5 py-1 text-ink hover:bg-bg-alt transition-colors text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.handle)}
                        className="text-xs text-ink-muted hover:text-danger underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm tabular-nums text-ink font-semibold">
                      {formatMoney({ minorUnits: line.priceMinorUnits * line.quantity, currency: BASE_CURRENCY })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-rule bg-bg-alt p-6 sticky top-28">
              <h2 className="font-display text-h3 text-ink mb-4 pb-3 border-b border-rule font-medium">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs text-ink-body">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium">{formatMoney(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-ink-body">
                  <span>Shipping</span>
                  <span className="font-medium text-ink">Free</span>
                </div>
                <div className="flex justify-between text-xs text-ink-body">
                  <span>Taxes</span>
                  <span className="text-ink-muted">Included</span>
                </div>
                <div className="pt-3 border-t border-rule flex justify-between text-sm font-semibold text-ink">
                  <span>Total</span>
                  <span className="tabular-nums">{formatMoney(subtotal)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={openCartDrawer}
                className="w-full bg-ink text-bg py-3.5 text-xs uppercase tracking-[0.16em] hover:bg-ink-dark transition-colors font-medium text-center block cursor-pointer mb-3"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-center text-ink-muted">
                100% Genuine Handloom · Dispatched from Banaras
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
