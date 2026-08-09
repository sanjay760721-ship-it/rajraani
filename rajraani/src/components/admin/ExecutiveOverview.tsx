"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

import { AdminIcon, type AdminIconName } from "./AdminIcon";
import { adjustStockAction, togglePublishedAction } from "@/lib/admin/product-actions";
import type { AdminProductRow, DashboardMetrics } from "@/lib/data/admin-queries";
import { formatMoney } from "@/lib/money";

type Tone = "neutral" | "positive" | "warning";

type FilterTab = "all" | "live" | "draft" | "soldout" | "incomplete";

const TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Live" },
  { id: "draft", label: "Draft" },
  { id: "soldout", label: "Sold out" },
  { id: "incomplete", label: "Short of frames" },
];

function matchesTab(p: AdminProductRow, tab: FilterTab): boolean {
  if (tab === "live") return p.published === 1;
  if (tab === "draft") return p.published === 0;
  if (tab === "soldout") return p.published === 1 && p.inventory_quantity === 0;
  if (tab === "incomplete") return p.image_count < 6;
  return true;
}

function Tile({
  label,
  value,
  detail,
  icon,
  tone = "neutral",
}: {
  label: string;
  value: string;
  detail: string;
  icon: AdminIconName;
  tone?: Tone;
}) {
  const detailColor =
    tone === "positive"
      ? "var(--a-positive)"
      : tone === "warning"
        ? "var(--a-negative)"
        : "var(--a-outline)";

  return (
    <div className="a-card a-card-interactive flex flex-col gap-6 p-7">
      <div className="flex items-start justify-between gap-3">
        <span className="a-label" style={{ color: "var(--a-outline)" }}>
          {label}
        </span>
        <AdminIcon name={icon} className="h-[18px] w-[18px] shrink-0" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="a-figure text-[34px]" style={{ color: "var(--a-ink)" }}>
          {value}
        </span>
        <span className="text-[13px] leading-5" style={{ color: detailColor }}>
          {detail}
        </span>
      </div>
    </div>
  );
}

export function ExecutiveOverview({
  products: initialProducts,
  metrics,
}: {
  products: AdminProductRow[];
  metrics: DashboardMetrics;
}) {
  const [products, setProducts] = useState(initialProducts);
  const [pending, setPending] = useState<ReadonlySet<number>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<FilterTab>("all");
  const [view, setView] = useState<"table" | "grid">("table");
  const [preview, setPreview] = useState<AdminProductRow | null>(null);

  const adjustStock = (productId: number, delta: number) => {
    const before = products.find((p) => p.id === productId)?.inventory_quantity;
    if (before === undefined) return;

    const setQuantity = (quantity: number) =>
      setProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, inventory_quantity: quantity } : p)),
      );

    setQuantity(Math.max(0, before + delta));
    setPending((prev) => new Set(prev).add(productId));

    startTransition(async () => {
      const result = await adjustStockAction(productId, delta);
      if (result.ok) {
        setQuantity(result.quantity);
        setError(null);
      } else {
        setQuantity(before);
        setError(result.error);
      }
      setPending((prev) => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    });
  };

  const readyCount = products.filter(
    (p) => p.published === 1 && p.image_count >= 6 && p.inventory_quantity > 0,
  ).length;
  const readiness = Math.round((readyCount / Math.max(1, products.length)) * 100);

  const needle = query.trim().toLowerCase();
  const visible = products.filter((p) => {
    if (!matchesTab(p, tab)) return false;
    if (!needle) return true;
    return [p.poetic_name, p.title, p.sku].some((f) => f.toLowerCase().includes(needle));
  });

  const countFor = (id: FilterTab) => products.filter((p) => matchesTab(p, id)).length;

  const recent = [...products]
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    .slice(0, 5);

  return (
    <div className="flex flex-col gap-12">
      {error ? (
        <p
          role="alert"
          className="border px-4 py-3 text-[13px] font-semibold"
          style={{
            borderRadius: "var(--a-radius)",
            borderColor: "var(--a-negative)",
            color: "var(--a-negative)",
            backgroundColor: "color-mix(in srgb, var(--a-negative) 6%, transparent)",
          }}
        >
          {error} Stock was left unchanged.
        </p>
      ) : null}

      <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-3">
          <h1 className="a-display-md" style={{ color: "var(--a-ink)" }}>
            Executive Overview
          </h1>
          <p
            className="max-w-2xl a-body-lg"
            style={{ color: "var(--a-ink-variant)" }}
          >
            The state of the catalogue — what is live, what is short of stock, and
            what is not yet ready to publish.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="a-btn-primary inline-flex shrink-0 items-center gap-2"
        >
          Add a piece
        </Link>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Tile
          label="Catalogue value"
          value={formatMoney({
            minorUnits: metrics.totalInventoryValueMinor,
            currency: "INR",
          })}
          detail={`Across ${metrics.totalProducts} pieces in stock`}
          icon="catalog"
        />
        <Tile
          label="Live"
          value={String(metrics.liveProducts)}
          detail={`${metrics.draftProducts} still in draft`}
          icon="dashboard"
          tone={metrics.liveProducts > 0 ? "positive" : "neutral"}
        />
        <Tile
          label="Sold out"
          value={String(metrics.soldOutProducts)}
          detail={`${metrics.lowStockProducts} more at two or fewer`}
          icon="orders"
          tone={metrics.soldOutProducts > 0 ? "warning" : "neutral"}
        />
        <Tile
          label="Short of photographs"
          value={String(metrics.incompletePhotoProducts)}
          detail="Fewer than the six frames a piece needs"
          icon="media"
          tone={metrics.incompletePhotoProducts > 0 ? "warning" : "positive"}
        />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="a-card flex flex-col gap-7 p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="a-heading-sm" style={{ color: "var(--a-ink)" }}>
              Launch readiness
            </h2>
            <span className="a-figure text-[26px]" style={{ color: "var(--a-accent)" }}>
              {readiness}%
            </span>
          </div>

          <div>
            <div
              className="flex h-2 w-full overflow-hidden"
              style={{ backgroundColor: "var(--a-surface-high)" }}
              role="img"
              aria-label={`${readyCount} of ${products.length} pieces fully prepared`}
            >
              <div
                style={{
                  width: `${(readyCount / Math.max(1, products.length)) * 100}%`,
                  backgroundColor: "var(--a-accent)",
                }}
              />
            </div>
            <p className="mt-3 text-[13px]" style={{ color: "var(--a-outline)" }}>
              {readyCount} of {products.length} pieces are published, in stock, and
              carry all six frames.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 border-t pt-6"
            style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 45%, transparent)" }}
          >
            {[
              { k: "Collections", v: metrics.totalCollections },
              { k: "Campaigns", v: metrics.totalCampaigns },
              { k: "Drafts", v: metrics.draftProducts },
            ].map((s) => (
              <div key={s.k} className="flex flex-col gap-1">
                <dt className="a-label" style={{ color: "var(--a-outline)" }}>
                  {s.k}
                </dt>
                <dd className="a-figure text-[22px]" style={{ color: "var(--a-ink)" }}>
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="a-card flex flex-col gap-6 p-8">
          <h2 className="a-heading-sm" style={{ color: "var(--a-ink)" }}>
            Recently edited
          </h2>
          <ol className="flex flex-col">
            {recent.map((p, i) => (
              <li
                key={p.id}
                className="flex flex-col gap-1 py-4"
                style={{
                  borderTop:
                    i === 0
                      ? "none"
                      : "1px solid color-mix(in srgb, var(--a-outline-variant) 45%, transparent)",
                }}
              >
                <span className="a-label" style={{ color: "var(--a-outline)" }}>
                  {new Date(p.updated_at).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <Link
                  href={`/admin/products/${p.id}`}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "var(--a-ink)" }}
                >
                  {p.poetic_name}
                </Link>
                <span className="text-[13px]" style={{ color: "var(--a-ink-variant)" }}>
                  {p.published === 1 ? "Live" : "Draft"} · {p.inventory_quantity} in stock
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="a-heading-sm" style={{ color: "var(--a-ink)" }}>
            The catalogue
          </h2>
          <label className="flex items-center gap-2 px-4 py-2"
            style={{
              borderRadius: "var(--a-radius-pill)",
              backgroundColor: "var(--a-surface-low)",
            }}
          >
            <AdminIcon name="search" className="h-4 w-4" />
            <span className="sr-only">Search the catalogue</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or SKU"
              className="w-56 bg-transparent text-sm outline-none"
              style={{ color: "var(--a-ink)" }}
            />
          </label>
        </div>

        {/* Filters and view mode. */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter the catalogue">
            {TABS.map((t) => {
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setTab(t.id)}
                  className="a-label px-3.5 py-2 transition-colors"
                  style={{
                    borderRadius: "var(--a-radius)",
                    backgroundColor: isActive ? "var(--a-accent-container)" : "transparent",
                    color: isActive ? "var(--a-on-accent-container)" : "var(--a-ink-variant)",
                    border: `1px solid ${
                      isActive
                        ? "transparent"
                        : "color-mix(in srgb, var(--a-outline-variant) 55%, transparent)"
                    }`,
                  }}
                >
                  {t.label}
                  <span className="ml-2 tabular-nums" style={{ opacity: 0.65 }}>
                    {countFor(t.id)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-1" role="group" aria-label="View mode">
            {(["table", "grid"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setView(mode)}
                aria-pressed={view === mode}
                className="a-label px-3 py-2 transition-colors"
                style={{
                  borderRadius: "var(--a-radius)",
                  backgroundColor: view === mode ? "var(--a-surface-high)" : "transparent",
                  color: view === mode ? "var(--a-ink)" : "var(--a-outline)",
                }}
              >
                {mode === "table" ? "Table" : "Grid"}
              </button>
            ))}
          </div>
        </div>

        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <div key={p.id} className="a-card a-card-interactive flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`/admin/products/${p.id}`}
                    className="a-heading-sm hover:underline"
                    style={{ color: "var(--a-ink)" }}
                  >
                    {p.poetic_name}
                  </Link>
                  <span
                    className={`a-label shrink-0 px-2.5 py-1 ${
                      p.published === 1 ? "a-badge-live" : "a-badge-draft"
                    }`}
                  >
                    {p.published === 1 ? "Live" : "Draft"}
                  </span>
                </div>

                <span className="text-xs" style={{ color: "var(--a-outline)" }}>
                  {p.sku}
                </span>

                <div className="flex items-baseline justify-between gap-3">
                  <span className="a-figure text-[22px]" style={{ color: "var(--a-ink)" }}>
                    {formatMoney({ minorUnits: p.price_minor, currency: "INR" })}
                  </span>
                  <span
                    className="text-[13px] tabular-nums"
                    style={{
                      color: p.image_count < 6 ? "var(--a-negative)" : "var(--a-outline)",
                    }}
                  >
                    {p.image_count} of 6 frames
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => adjustStock(p.id, -1)}
                    disabled={pending.has(p.id) || p.inventory_quantity === 0}
                    aria-label={`Decrease stock of ${p.poetic_name}`}
                    className="h-6 w-6 border text-xs disabled:opacity-35"
                    style={{
                      borderRadius: "var(--a-radius)",
                      borderColor: "var(--a-outline-variant)",
                      color: "var(--a-ink)",
                    }}
                  >
                    −
                  </button>
                  <span
                    aria-live="polite"
                    className="min-w-[26px] text-center font-semibold tabular-nums"
                    style={{
                      color:
                        p.inventory_quantity === 0 ? "var(--a-negative)" : "var(--a-ink)",
                      opacity: pending.has(p.id) ? 0.5 : 1,
                    }}
                  >
                    {p.inventory_quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustStock(p.id, 1)}
                    disabled={pending.has(p.id)}
                    aria-label={`Increase stock of ${p.poetic_name}`}
                    className="h-6 w-6 border text-xs disabled:opacity-35"
                    style={{
                      borderRadius: "var(--a-radius)",
                      borderColor: "var(--a-outline-variant)",
                      color: "var(--a-ink)",
                    }}
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreview(p)}
                    className="a-label ml-auto px-2.5 py-1.5"
                    style={{
                      borderRadius: "var(--a-radius)",
                      border:
                        "1px solid color-mix(in srgb, var(--a-outline-variant) 55%, transparent)",
                      color: "var(--a-ink-variant)",
                    }}
                  >
                    Inspect
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
        <div className="a-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="a-table">
              <thead>
                <tr>
                  {["Piece", "Price", "Stock", "Frames", "State", ""].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="a-label px-6 py-4 text-left"
                      style={{ color: "var(--a-outline)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.map((p) => (
                  <tr
                    key={p.id}
                    style={{
                      borderBottom:
                        "1px solid color-mix(in srgb, var(--a-outline-variant) 35%, transparent)",
                    }}
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/products/${p.id}`}
                        className="font-semibold hover:underline"
                        style={{ color: "var(--a-ink)" }}
                      >
                        {p.poetic_name}
                      </Link>
                      <span
                        className="mt-0.5 block text-xs"
                        style={{ color: "var(--a-outline)" }}
                      >
                        {p.sku}
                      </span>
                    </td>
                    <td
                      className="px-6 py-4 tabular-nums"
                      style={{ color: "var(--a-ink)" }}
                    >
                      {formatMoney({ minorUnits: p.price_minor, currency: "INR" })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => adjustStock(p.id, -1)}
                          disabled={pending.has(p.id) || p.inventory_quantity === 0}
                          aria-label={`Decrease stock of ${p.poetic_name}`}
                          className="h-6 w-6 border text-xs transition-colors disabled:opacity-35"
                          style={{
                            borderRadius: "var(--a-radius)",
                            borderColor: "var(--a-outline-variant)",
                            color: "var(--a-ink)",
                          }}
                        >
                          −
                        </button>
                        <span
                          aria-live="polite"
                          className="min-w-[26px] text-center font-semibold tabular-nums"
                          style={{
                            color:
                              p.inventory_quantity === 0
                                ? "var(--a-negative)"
                                : "var(--a-ink)",
                            opacity: pending.has(p.id) ? 0.5 : 1,
                          }}
                        >
                          {p.inventory_quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => adjustStock(p.id, 1)}
                          disabled={pending.has(p.id)}
                          aria-label={`Increase stock of ${p.poetic_name}`}
                          className="h-6 w-6 border text-xs transition-colors disabled:opacity-35"
                          style={{
                            borderRadius: "var(--a-radius)",
                            borderColor: "var(--a-outline-variant)",
                            color: "var(--a-ink)",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 tabular-nums"
                      style={{
                        color:
                          p.image_count < 6 ? "var(--a-negative)" : "var(--a-ink-variant)",
                      }}
                    >
                      {p.image_count} of 6
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`a-label inline-block px-2.5 py-1 ${
                          p.published === 1 ? "a-badge-live" : "a-badge-draft"
                        }`}
                      >
                        {p.published === 1 ? "Live" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setPreview(p)}
                          className="a-label px-2.5 py-1.5 transition-colors"
                          style={{
                            borderRadius: "var(--a-radius)",
                            border:
                              "1px solid color-mix(in srgb, var(--a-outline-variant) 55%, transparent)",
                            color: "var(--a-ink-variant)",
                          }}
                        >
                          Inspect
                        </button>
                        {/*
                          One-click publish. This is a form rather than an
                          onClick because `togglePublishedAction` redirects,
                          and it is the only write path to `published` outside
                          the full edit form.
                        */}
                        <form action={togglePublishedAction}>
                          <input type="hidden" name="id" value={p.id} />
                          <input
                            type="hidden"
                            name="publish"
                            value={p.published === 1 ? "0" : "1"}
                          />
                          <button
                            type="submit"
                            className="a-label px-2.5 py-1.5 transition-colors"
                            style={{
                              borderRadius: "var(--a-radius)",
                              border:
                                "1px solid color-mix(in srgb, var(--a-outline-variant) 55%, transparent)",
                              color: "var(--a-ink-variant)",
                            }}
                          >
                            {p.published === 1 ? "Unpublish" : "Publish"}
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        )}

        {visible.length === 0 ? (
          <p
            className="a-card px-6 py-10 text-center text-sm"
            style={{ color: "var(--a-outline)" }}
          >
            {query
              ? `Nothing matches “${query}”.`
              : "No pieces in this view."}
          </p>
        ) : null}
      </section>

      {preview ? (
        <PreviewDialog product={preview} onClose={() => setPreview(null)} />
      ) : null}
    </div>
  );
}

/**
 * Inspect panel — the quick read on a piece without leaving the dashboard.
 *
 * Closes on Escape and on a click outside, and returns focus to the page. The
 * backdrop is a button rather than a div with onClick so it is reachable by
 * keyboard and announced as a control.
 */
function PreviewDialog({
  product,
  onClose,
}: {
  product: AdminProductRow;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const rows: [string, string][] = [
    ["SKU", product.sku],
    ["Title", product.title],
    ["Price", formatMoney({ minorUnits: product.price_minor, currency: "INR" })],
    ["In stock", String(product.inventory_quantity)],
    ["Frames", `${product.image_count} of 6`],
    ["Fulfilment", product.fulfilment_mode.replace(/_/g, " ")],
    ["State", product.published === 1 ? "Live" : "Draft"],
    ["Last edited", new Date(product.updated_at).toLocaleString("en-IN")],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0"
        style={{ backgroundColor: "rgb(27 28 28 / 0.35)" }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.poetic_name} details`}
        className="a-card relative w-full max-w-lg p-8"
      >
        <h2 className="a-heading-sm" style={{ color: "var(--a-ink)" }}>
          {product.poetic_name}
        </h2>

        <dl className="mt-6 flex flex-col">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-6 py-3"
              style={{
                borderTop:
                  i === 0
                    ? "none"
                    : "1px solid color-mix(in srgb, var(--a-outline-variant) 40%, transparent)",
              }}
            >
              <dt className="a-label" style={{ color: "var(--a-outline)" }}>
                {k}
              </dt>
              <dd className="text-sm capitalize" style={{ color: "var(--a-ink)" }}>
                {v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="a-btn-secondary">
            Close
          </button>
          <Link href={`/admin/products/${product.id}`} className="a-btn-primary">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}