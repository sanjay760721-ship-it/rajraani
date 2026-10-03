"use client";

import { useId, useState } from "react";

import { QuantityStepper } from "./CartDrawer";
import { useCart } from "./cart-context";
import { useWishlist } from "./wishlist-context";
import { isAvailable, type Product } from "@/lib/domain/types";

/**
 * The buy block.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * There was a sticky buy bar here, removed 10 Sep 2026 at the owner's request.
 *
 * It came from §9.2: on the reference PDP add-to-cart sits 1.3 screens below
 * the fold with nothing following it down the page, and the argument was that
 * the buy action should be reachable from any scroll position. That argument
 * still holds on paper — but the bar was a permanent strip across the foot of
 * every product page, and the reference has no such thing, so it was both an
 * intrusion and a visible departure from the page being matched. If it is ever
 * wanted again, it belongs behind a deliberate decision rather than as a
 * default.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * §9.7 — 49% of a mature catalogue of unique pieces is sold out, so roughly
 * half of all product views land on the sold-out template. The notify form is
 * therefore a **core conversion surface**, not a defensive fallback, and it
 * gets the same visual weight as add-to-cart rather than being demoted to a
 * grey box.
 */
export function BuyBlock({ product }: { product: Product }) {
  return isAvailable(product) ? (
    <AddToCart product={product} />
  ) : (
    <NotifyWhenRewoven product={product} />
  );
}

function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [consented, setConsented] = useState(false);
  const primary = product.images[0];

  const [finishing, setFinishing] = useState<readonly string[]>([]);
  const isPreOrder = product.fulfilmentMode === "pre_order";
  // The button says what the action is. Measured §A5.2 item 13: the reference
  // labels a pre-order button "Pre-Order", not "Add to cart".
  const label = isPreOrder ? "Pre-order" : "Add to cart";
  const blocked = isPreOrder && !consented;

  return (
    <div>
      <p className="text-caption text-ink-body">
        {/* Literal inventory count, no manufactured urgency (addendum A5.1). */}
        {product.inventoryQuantity === 1
          ? "One piece, and only one."
          : `${product.inventoryQuantity} available to order.`}
      </p>

      {/*
        Pre-order consent (§A5.2 item 11).
        A pre-order is a promise about a date, and the one thing that reliably
        goes wrong is a buyer who did not register that the piece is not woven
        yet. The checkbox is a gate on the button, not a formality below it.
      */}
      {isPreOrder ? (
        <div className="mt-4 border border-rule p-4">
          <p className="text-caption text-ink-body">
            Pre-order — despatch in {product.dispatchLeadDays[0]}–
            {product.dispatchLeadDays[1]} working days.
          </p>
          <label className="text-caption mt-3 flex items-start gap-2 text-ink-body">
            <input
              type="checkbox"
              checked={consented}
              onChange={(event) => setConsented(event.target.checked)}
              className="mt-0.5 shrink-0"
            />
            <span>
              I understand this is a pre-order and have read the despatch
              timeline.
            </span>
          </label>
        </div>
      ) : null}

      {/*
        Complimentary finishing services (§A5.2 item 9).

        Checkboxes, not radios — the reference lets more than one be chosen,
        and "despatch as is" is simply the state of choosing none. Each adds
        days before despatch, so the estimate below moves with the selection
        rather than sitting stale above it.
      */}
      <FinishingServices selected={finishing} onChange={setFinishing} />

      <p className="text-caption mt-4 text-ink-muted">
        Despatch in {product.dispatchLeadDays[0] + extraDays(finishing)}–
        {product.dispatchLeadDays[1] + extraDays(finishing)} working days.
      </p>

      {/* Qty on its own row above the button, not inline beside it (§A5.2
          item 12), and the button sized to its label rather than stretched
          across the column (item 13). */}
      {/* Always shown, even on a single piece, where it renders as "1" with a
          disabled minus — the reference does the same, and a control that
          appears only on some products reads as a rendering fault. */}
      <div className="mt-5">
        <QuantityStepper
          value={quantity}
          max={product.inventoryQuantity}
          onChange={setQuantity}
          label={product.poeticName}
          variant="wide"
        />
      </div>

      <button
        type="button"
        disabled={blocked}
        aria-describedby={blocked ? "preorder-consent" : undefined}
        className="mt-4 bg-ink px-8 py-3 font-display text-[1.0625rem] text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
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
              src: primary?.src,
              maxQuantity: product.inventoryQuantity,
            },
            quantity,
          )
        }
      >
        {label}
      </button>
      <WishlistSave product={product} />
      {blocked ? (
        <p id="preorder-consent" className="text-caption mt-2 text-ink-muted">
          Tick the box above to continue.
        </p>
      ) : null}
    </div>
  );
}

/**
 * Finishing a saree adds days before it can go out.
 *
 * Held here rather than in the catalogue: these are a service the workshop
 * offers, identical across every saree, so a per-product field would be the
 * same three rows copied several hundred times. If it ever varies by garment
 * it moves into the product record and this list reads from there.
 */
const FINISHING_SERVICES: readonly { id: string; label: string; days: number }[] =
  [
    { id: "fall-pico", label: "Fall and pico", days: 3 },
    { id: "tassels", label: "Tassels", days: 3 },
  ];

function extraDays(selected: readonly string[]): number {
  return FINISHING_SERVICES.filter((service) =>
    selected.includes(service.id),
  ).reduce((most, service) => Math.max(most, service.days), 0);
}

function FinishingServices({
  selected,
  onChange,
}: {
  selected: readonly string[];
  onChange: (next: readonly string[]) => void;
}) {
  return (
    <fieldset className="mt-5">
      <legend className="text-caption text-ink-body">
        Complimentary finishing. Each adds working days before despatch.
      </legend>
      <div className="mt-2 space-y-1.5">
        {FINISHING_SERVICES.map((service) => (
          <label
            key={service.id}
            className="text-caption flex items-center gap-2 text-ink-body"
          >
            <input
              type="checkbox"
              checked={selected.includes(service.id)}
              onChange={(event) =>
                onChange(
                  event.target.checked
                    ? [...selected, service.id]
                    : selected.filter((id) => id !== service.id),
                )
              }
            />
            <span>
              {service.label} ({service.days} days)
            </span>
          </label>
        ))}
        <p className="text-caption text-ink-muted">
          Choose none to have it despatched as it is.
        </p>
      </div>
    </fieldset>
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

/** Save the piece for later, beside Add to cart; the heart fills once saved. */
function WishlistSave({ product }: { product: Product }) {
  const { isInWishlist, toggle } = useWishlist();
  const saved = isInWishlist(product.handle);
  return (
    <button
      type="button"
      data-on={saved ? "" : undefined}
      aria-pressed={saved}
      onClick={() =>
        toggle({
          handle: product.handle,
          title: product.title,
          poeticName: product.poeticName,
          sku: product.sku,
          priceMinorUnits: product.price.minorUnits,
          colourSlug: product.colourFamily,
          alt: product.images[0]?.alt ?? product.title,
          src: product.images[0]?.src,
        })
      }
      className="wish-save"
    >
      <svg className="wish-heart__icon h-5 w-5 stroke-current" fill={saved ? "currentColor" : "none"} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      {saved ? "Saved to wishlist" : "Save to wishlist"}
    </button>
  );
}
