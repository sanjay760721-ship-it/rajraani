"use client";

import Link from "next/link";
import { useState, useTransition } from "react";

import { adjustStockAction, togglePublishedAction } from "@/lib/admin/product-actions";
import type { AdminProductRow } from "@/lib/data/admin-queries";

import { DuplicateButton, InlinePrice, SpreadsheetPanel } from "./CatalogueTools";

/**
 * Products & stock, for the person who runs the shop floor.
 *
 * Replaces the "Executive Overview" (catalogue value, launch readiness %,
 * "7 of 6 frames", Inspect). What stays is what gets used every day: find a
 * piece by name, see its photo, change how many are in stock, hide it or show
 * it, open it to edit.
 */


type Filter = "all" | "live" | "hidden" | "soldout" | "low";

const FILTERS: { id: Filter; label: string; test: (p: AdminProductRow) => boolean }[] = [
  { id: "all", label: "All", test: () => true },
  { id: "live", label: "On the shop", test: (p) => p.published === 1 },
  { id: "hidden", label: "Hidden", test: (p) => p.published !== 1 },
  { id: "soldout", label: "Sold out", test: (p) => p.inventory_quantity === 0 },
  { id: "low", label: "Only 1 or 2 left", test: (p) => p.inventory_quantity > 0 && p.inventory_quantity <= 2 },
];

function StockControl({ product }: { product: AdminProductRow }) {
  const [quantity, setQuantity] = useState(product.inventory_quantity);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const change = (delta: number) => {
    const before = quantity;
    setQuantity(Math.max(0, before + delta));
    startTransition(async () => {
      const result = await adjustStockAction(product.id, delta);
      if (result.ok) {
        setQuantity(result.quantity);
        setError(null);
      } else {
        setQuantity(before);
        setError(result.error);
      }
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="a-btn-icon"
          aria-label={`One fewer ${product.poetic_name}`}
          disabled={quantity === 0 || pending}
          onClick={() => change(-1)}
        >
          −
        </button>
        <span className="a-body-md w-8 text-center tabular-nums" aria-live="polite">
          {quantity}
        </span>
        <button
          type="button"
          className="a-btn-icon"
          aria-label={`One more ${product.poetic_name}`}
          disabled={pending}
          onClick={() => change(1)}
        >
          +
        </button>
      </div>
      <p className="a-label mt-1" style={{ color: quantity === 0 ? "var(--a-negative)" : "var(--a-outline)" }}>
        {quantity === 0 ? "Sold out" : "in stock"}
      </p>
      {error ? <p className="a-label" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
    </div>
  );
}

export function ProductsBoard({
  products,
  thumbs,
  notice,
}: {
  products: AdminProductRow[];
  /** First photo per product handle, where one exists. */
  thumbs: Record<string, string>;
  notice: string | null;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const test = FILTERS.find((entry) => entry.id === filter)!.test;
  const shown = products.filter(
    (product) =>
      test(product) &&
      (!q || `${product.poetic_name} ${product.title} ${product.sku}`.toLowerCase().includes(q)),
  );

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="a-heading-lg">Products &amp; stock</h1>
          <p className="a-body-md mt-1" style={{ color: "var(--a-ink-variant)" }}>
            Every piece in the shop. Click a price to change it; use − and + for stock — at zero a
            piece shows as sold out.
          </p>
        </div>
        <Link href="/admin/products/new" className="a-btn-primary">
          + Add a new piece
        </Link>
      </header>

      {notice ? (
        <p role="status" className="a-body-sm px-4 py-3" style={{ backgroundColor: "var(--a-positive-container)", borderRadius: "var(--a-radius)" }}>
          {notice}
        </p>
      ) : null}

      <SpreadsheetPanel />

      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((entry) => (
          <button
            key={entry.id}
            type="button"
            aria-pressed={filter === entry.id}
            className={filter === entry.id ? "a-btn-primary" : "a-btn-secondary"}
            onClick={() => setFilter(entry.id)}
          >
            {entry.label} ({products.filter(entry.test).length})
          </button>
        ))}
        <input
          type="search"
          className="a-input ml-auto w-72"
          placeholder="Find a piece by name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Find a piece"
        />
      </div>

      {shown.length === 0 ? (
        <p className="a-body-md py-12 text-center" style={{ color: "var(--a-outline)" }}>
          {products.length === 0 ? "No pieces yet. Add your first one." : "No pieces match."}
        </p>
      ) : (
        <ul className="a-card divide-y" role="list" style={{ borderRadius: "var(--a-radius-md)" }}>
          {shown.map((product) => (
            <li key={product.id} className="flex flex-wrap items-center gap-5 px-5 py-4" style={{ borderColor: "var(--a-outline-variant)" }}>
              <Link href={`/admin/products/${product.id}`} className="shrink-0">
                {thumbs[product.handle] ? (
                  // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
                  <img
                    src={thumbs[product.handle]}
                    alt=""
                    className="h-20 w-14 object-cover"
                    style={{ borderRadius: "var(--a-radius)", backgroundColor: "var(--a-surface-high)" }}
                  />
                ) : (
                  <span
                    className="a-label flex h-20 w-14 items-center justify-center text-center"
                    style={{ borderRadius: "var(--a-radius)", backgroundColor: "var(--a-surface-high)", color: "var(--a-outline)" }}
                  >
                    No photo
                  </span>
                )}
              </Link>

              <div className="min-w-0 flex-1">
                <Link href={`/admin/products/${product.id}`} className="a-body-lg block hover:underline" style={{ color: "var(--a-ink)" }}>
                  {product.poetic_name}
                </Link>
                <p className="a-body-sm truncate" style={{ color: "var(--a-ink-variant)" }}>
                  {product.title}
                </p>
                <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>
                  <InlinePrice id={product.id} minor={product.price_minor} /> ·{" "}
                  {product.photo_count === 0
                    ? "No photos uploaded yet"
                    : `${product.photo_count} photo${product.photo_count === 1 ? "" : "s"}`}
                  {product.published === 1 ? "" : " · Hidden from the shop"}
                </p>
              </div>

              <StockControl product={product} />

              <div className="flex flex-wrap items-center gap-2">
                <Link href={`/admin/products/${product.id}`} className="a-btn-primary">
                  Edit
                </Link>
                <form action={togglePublishedAction}>
                  <input type="hidden" name="id" value={product.id} />
                  <input type="hidden" name="publish" value={product.published === 1 ? "0" : "1"} />
                  <button type="submit" className="a-btn-secondary">
                    {product.published === 1 ? "Hide from shop" : "Show on shop"}
                  </button>
                </form>
                <DuplicateButton id={product.id} name={product.poetic_name} />
                {product.published === 1 ? (
                  <a href={`/products/${product.handle}`} target="_blank" rel="noreferrer" className="a-btn-ghost">
                    See ↗
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
