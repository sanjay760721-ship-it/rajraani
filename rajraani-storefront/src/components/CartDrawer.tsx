"use client";

import { useEffect, useRef } from "react";

import { PLACEHOLDER_WASH, toneFor } from "./Frame";
import { useCart } from "./cart-context";
import { useCurrency } from "./currency-context";
import { BASE_CURRENCY } from "@/lib/domain/types";
import { FREE_SHIPPING_THRESHOLD_MINOR } from "@/lib/brand";
import { formatIn } from "@/lib/money";

/**
 * Cart drawer.
 *
 * A right slide-in, not the anchored dropdown the reference site uses
 * (build.md §8.2). A dropdown panel is cramped for a cart holding two ₹50,000
 * pieces with imagery, and it reads as utility rather than as something
 * considered.
 *
 * Focus is trapped while open, Escape closes, and focus returns to whatever
 * opened it.
 */
export function CartDrawer() {
  const { lines, isOpen, close, setQuantity, remove, subtotal } = useCart();
  const { currency } = useCurrency();
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus();
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const remaining = FREE_SHIPPING_THRESHOLD_MINOR - subtotal.minorUnits;

  return (
    <div className="fixed inset-0 z-100">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-scrim"
        onClick={close}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col bg-bg"
      >
        <div className="flex items-center justify-between border-b border-rule px-6 py-5">
          <h2 className="text-h4">Cart</h2>
          <button type="button" className="eyebrow text-ink-muted" onClick={close}>
            Close
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-h3 text-ink">Nothing here yet.</p>
            <button type="button" className="cta" onClick={close}>
              Continue looking
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-rule overflow-y-auto px-6">
              {lines.map((line) => (
                <li key={line.handle} className="flex gap-4 py-5">
                  <div
                    role="img"
                    aria-label={line.alt}
                    className="aspect-portrait w-20 shrink-0"
                    style={{
                      backgroundColor: toneFor(line.colourSlug),
                      backgroundImage: PLACEHOLDER_WASH,
                    }}
                  />
                  <div className="flex-1">
                    <p className="font-display text-ink">{line.poeticName}</p>
                    <p className="text-caption text-ink-body">{line.title}</p>
                    <p className="eyebrow mt-1 text-ink-muted">{line.sku}</p>
                    <p className="mt-2 tabular-nums text-ink">
                      {formatIn(
                        {
                          minorUnits: line.priceMinorUnits * line.quantity,
                          currency: BASE_CURRENCY,
                        },
                        currency,
                      )}
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <QuantityStepper
                        value={line.quantity}
                        max={line.maxQuantity}
                        onChange={(quantity) => setQuantity(line.handle, quantity)}
                        label={line.poeticName}
                      />
                      <button
                        type="button"
                        className="eyebrow text-ink-muted underline"
                        onClick={() => remove(line.handle)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-rule px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow text-ink-muted">Subtotal</span>
                <span className="tabular-nums text-ink">
                  {formatIn(subtotal, currency)}
                </span>
              </div>
              <p className="text-caption mt-2 text-ink-muted">
                {remaining > 0
                  ? `${formatIn({ minorUnits: remaining, currency: BASE_CURRENCY }, currency)} more for complimentary worldwide shipping.`
                  : "Complimentary worldwide shipping, duties paid."}
              </p>
              {/* build.md §10: checkout is not rebuilt. It hands off to
                  Shopify's hosted checkout, which needs a store. */}
              <button
                type="button"
                disabled
                className="mt-4 w-full bg-ink px-6 py-4 text-bg opacity-40"
                title="Checkout hands off to Shopify and needs a connected store"
              >
                <span className="eyebrow">Checkout</span>
              </button>
              <p className="text-caption mt-2 text-center text-ink-muted">
                Checkout hands off to Shopify. Connect a store to enable it.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function QuantityStepper({
  value,
  max,
  onChange,
  label,
}: {
  value: number;
  max: number;
  onChange: (quantity: number) => void;
  label: string;
}) {
  return (
    <div className="flex items-center border border-rule-input">
      <button
        type="button"
        className="px-3 py-1.5 text-ink disabled:opacity-40"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Decrease quantity of ${label}`}
      >
        −
      </button>
      <span className="min-w-8 text-center tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="px-3 py-1.5 text-ink disabled:opacity-40"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Increase quantity of ${label}`}
      >
        +
      </button>
    </div>
  );
}
