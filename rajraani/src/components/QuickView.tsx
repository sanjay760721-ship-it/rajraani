"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";

import { Gallery } from "./Gallery";
import { Price } from "./Price";
import { useCart } from "./cart-context";
import { isAvailable, type Product } from "@/lib/domain/types";

/**
 * Quick view.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * This component was removed on 10 Sep 2026 and restored the same day.
 *
 * `design.md` §12 item 7 records "No Quick View exists. No such control
 * anywhere on the PLP", and that finding was wrong — or has gone stale. The
 * control is there, on the product cards, and it appears on hover. Screenshots
 * from the owner showed it; the doc has been corrected (§A5.2b) rather than
 * left to mislead the next person the same way.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * A pale bar across the middle of the image, on hover — that is the reference's
 * treatment, and it is what this matches. The modal carries the gallery, title,
 * price, description excerpt and add-to-cart, and links out to the PDP for the
 * rest; it shares the cart context with the PDP, so a piece added here lands in
 * the same drawer rather than in a second funnel.
 */
export function QuickView({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        // z-10 clears the card's stretched link, which otherwise covers the
        // whole image and would swallow this click.
        className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 bg-bg/75 py-3 font-display text-[1.0625rem] text-ink opacity-0 transition-opacity duration-200 hover:bg-bg/90 focus-visible:opacity-100 group-hover:opacity-100"
        onClick={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
      >
        Quick View
      </button>
      {open ? (
        <QuickViewModal product={product} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}

function QuickViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { add } = useCart();

  const [primary] = product.images;
  const available = isAvailable(product);

  const close = useCallback(() => onClose(), [onClose]);

  // Same modal contract as the search overlay: remember focus, lock the page
  // behind it, hand focus back on the way out.
  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => closeRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [close]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.poeticName} — quick view`}
        className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto bg-bg"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close quick view"
          className="absolute top-3 right-3 z-10 bg-bg/90 px-3 py-2 text-ink"
        >
          <span aria-hidden className="text-lg leading-none">
            &times;
          </span>
        </button>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10">
          <div className="md:py-6 md:pl-6">
            <Gallery images={product.images} colourSlug={product.colourFamily} />
          </div>

          <div className="px-6 pb-6 md:py-8 md:pr-8 md:pl-0">
            <h2 className="font-display text-h3 text-ink">
              {product.poeticName}
            </h2>
            <p className="text-caption mt-1.5 text-ink-muted">{product.title}</p>
            <p className="mt-4 text-ink">
              <Price value={product.price} />
            </p>

            {/* An excerpt, not the whole narrative — the full text is the
                PDP's, and this is meant to be read in a few seconds. */}
            <p className="text-prose mt-5 border-t border-rule pt-5 text-ink-body">
              {excerpt(product.narrative)}
            </p>

            {available ? (
              <div className="mt-6">
                <p className="text-caption text-ink-body">
                  {product.inventoryQuantity === 1
                    ? "One piece, and only one."
                    : `${product.inventoryQuantity} available to order.`}
                </p>
                <p className="text-caption mt-1 text-ink-muted">
                  Dispatched in {product.dispatchLeadDays[0]}–
                  {product.dispatchLeadDays[1]} business days.
                </p>
                <button
                  type="button"
                  className="mt-4 bg-ink px-10 py-3.5 text-bg transition-opacity hover:opacity-90"
                  onClick={() => {
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
                      1,
                    );
                    // The drawer opens on add and takes the screen. Two
                    // stacked overlays each holding a scroll lock is one too
                    // many, so this one steps aside.
                    close();
                  }}
                >
                  <span className="eyebrow">Add to cart</span>
                </button>
              </div>
            ) : (
              <div className="mt-6 border border-rule-strong p-5">
                <p className="font-display text-h4 text-ink">
                  This one has gone.
                </p>
                <p className="text-caption mt-2 text-ink-body">
                  {product.poeticName} was a single piece. Ask to be written to
                  when it is rewoven.
                </p>
                <Link
                  href={`/products/${product.handle}#notify`}
                  className="cta mt-4 inline-block"
                >
                  Tell me when it is rewoven
                </Link>
              </div>
            )}

            <Link
              href={`/products/${product.handle}`}
              className="eyebrow mt-6 inline-block border-b border-rule-strong pb-1 text-ink"
            >
              View full details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * First two sentences of the narrative, at most.
 *
 * Cut on the sentence rather than at a character count: these paragraphs open
 * on the cloth and only then reach the maker, so the first sentences are the
 * ones that describe the piece, and a mid-clause ellipsis reads as a truncation
 * bug rather than as an excerpt.
 */
function excerpt(narrative: string): string {
  const sentences = narrative.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return narrative;
  const taken = sentences.slice(0, 2).join("").trim();
  return taken.length < narrative.trim().length ? `${taken} …` : taken;
}
