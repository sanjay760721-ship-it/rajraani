"use client";

import { useEffect, useId, useRef, useState } from "react";

import { QuantityStepper } from "./CartDrawer";
import { Price } from "./Price";
import { useCart } from "./cart-context";
import { isAvailable, type Product } from "@/lib/domain/types";

/**
 * The buy block, and the sticky bar that follows it.
 *
 * Two findings drive this component.
 *
 * §9.2 — on the reference PDP, add-to-cart sits at y=1168 against an 889px
 * viewport: 1.3 screens below the fold, no sticky bar, on a ₹49,500
 * single-variant product. The gallery column is taller than the copy column and
 * pushes the button down. So the buy action must be reachable from any scroll
 * position.
 *
 * §9.7 — 49% of a mature catalogue of unique pieces is sold out, so roughly
 * half of all product views land on the sold-out template. The notify form is
 * therefore a **core conversion surface**, not a defensive fallback, and it
 * gets the same visual weight as add-to-cart rather than being demoted to a
 * grey box.
 */
export function BuyBlock({ product }: { product: Product }) {
  const buyRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const element = buyRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(entry ? !entry.isIntersecting : false),
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={buyRef}>
        {isAvailable(product) ? (
          <AddToCart product={product} />
        ) : (
          <NotifyWhenRewoven product={product} />
        )}
      </div>
      {showSticky ? <StickyBuyBar product={product} /> : null}
    </>
  );
}

function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const primary = product.images[0];

  return (
    <div>
      <p className="text-caption text-ink-body">
        {/* Literal inventory count, no manufactured urgency (addendum A5.1). */}
        {product.inventoryQuantity === 1
          ? "One piece, and only one."
          : `${product.inventoryQuantity} available to order.`}
      </p>
      <p className="text-caption mt-1 text-ink-muted">
        Dispatched in {product.dispatchLeadDays[0]}–{product.dispatchLeadDays[1]}{" "}
        business days.
      </p>

      <div className="mt-5 flex items-stretch gap-3">
        {product.inventoryQuantity > 1 ? (
          <QuantityStepper
            value={quantity}
            max={product.inventoryQuantity}
            onChange={setQuantity}
            label={product.poeticName}
          />
        ) : null}
        <button
          type="button"
          className="flex-1 bg-ink px-6 py-4 text-bg transition-opacity hover:opacity-90"
          onClick={() =>
            add(
              {
                handle: product.handle,
                title: product.title,
                poeticName: product.poeticName,
                sku: product.sku,
                priceMinorUnits: product.price.minorUnits,
                colourSlug: product.colourFamily,
                alt: primary?.alt ?? product.title,
                maxQuantity: product.inventoryQuantity,
              },
              quantity,
            )
          }
        >
          <span className="eyebrow">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

/**
 * The sold-out template's primary surface.
 *
 * Note the verb: **rewoven**, not restocked. These are made to order, and the
 * copy should say so — it is the difference between "we ran out" and "we will
 * make another".
 */
function NotifyWhenRewoven({ product }: { product: Product }) {
  const [submitted, setSubmitted] = useState(false);
  const id = useId();

  return (
    <div id="notify" className="border border-rule-strong p-6">
      <p className="font-display text-h4 text-ink">This one has gone.</p>
      <p className="text-caption mt-2 text-ink-body">
        {product.poeticName} was a single piece. Leave an address and we will
        write when it is rewoven — usually {product.dispatchLeadDays[1]} weeks,
        sometimes longer.
      </p>

      {submitted ? (
        <p className="mt-5 text-caption text-success" role="status">
          Noted. We will write when it is back on the loom.
        </p>
      ) : (
        <form
          className="mt-5"
          onSubmit={(event) => {
            event.preventDefault();
            // Wired to the ESP in Sprint 2; the surface is what matters here.
            setSubmitted(true);
          }}
        >
          <label htmlFor={id} className="eyebrow block text-ink-muted">
            Email
          </label>
          <input
            id={id}
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full border-b border-rule-input bg-transparent py-2 text-ink outline-none focus:border-ink"
          />
          <button type="submit" className="mt-4 w-full bg-ink px-6 py-4 text-bg">
            <span className="eyebrow">Notify me</span>
          </button>
        </form>
      )}
    </div>
  );
}

function StickyBuyBar({ product }: { product: Product }) {
  const { add } = useCart();
  const available = isAvailable(product);
  const primary = product.images[0];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-bg/97 backdrop-blur">
      <div className="wrap-wide flex items-center justify-between gap-4 py-3">
        <div className="min-w-0">
          <p className="truncate font-display text-ink">{product.poeticName}</p>
          <p className="text-caption text-ink">
            <Price value={product.price} />
          </p>
        </div>
        {available ? (
          <button
            type="button"
            className="shrink-0 bg-ink px-6 py-3 text-bg"
            onClick={() =>
              add({
                handle: product.handle,
                title: product.title,
                poeticName: product.poeticName,
                sku: product.sku,
                priceMinorUnits: product.price.minorUnits,
                colourSlug: product.colourFamily,
                alt: primary?.alt ?? product.title,
                maxQuantity: product.inventoryQuantity,
              })
            }
          >
            <span className="eyebrow">Add to cart</span>
          </button>
        ) : (
          <a href="#notify" className="shrink-0 border border-ink px-6 py-3 text-ink">
            <span className="eyebrow">Notify me</span>
          </a>
        )}
      </div>
    </div>
  );
}
