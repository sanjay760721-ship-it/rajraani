"use client";

import Link from "next/link";
import { useState } from "react";

import { BRAND } from "@/lib/brand";
import type { AdminProductRow, DashboardMetrics } from "@/lib/data/admin-queries";
import { formatMoney } from "@/lib/money";

export function InteractiveAdminHub({
  products: initialProducts,
  metrics,
  togglePublishedAction,
}: {
  products: AdminProductRow[];
  metrics: DashboardMetrics;
  togglePublishedAction: (formData: FormData) => Promise<void>;
}) {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "live" | "draft" | "soldout" | "incomplete">("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [previewProduct, setPreviewProduct] = useState<AdminProductRow | null>(null);

  // Quick stock adjustment helper
  const adjustStock = (productId: number, delta: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const newQty = Math.max(0, p.inventory_quantity + delta);
          return { ...p, inventory_quantity: newQty };
        }
        return p;
      }),
    );
  };

  // Filter products based on active tab & search query
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.poetic_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeTab === "live") return p.published === 1;
    if (activeTab === "draft") return p.published === 0;
    if (activeTab === "soldout") return p.published === 1 && p.inventory_quantity === 0;
    if (activeTab === "incomplete") return p.image_count < 6;

    return true;
  });

  // Calculate Readiness Percentage
  const readyProductsCount = products.filter((p) => p.published === 1 && p.image_count >= 6 && p.inventory_quantity > 0).length;
  const readinessPercentage = Math.round((readyProductsCount / Math.max(1, products.length)) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dynamic Header with Real-Time Catalogue Readiness Health Bar */}
      <div className="bg-gradient-to-r from-bg-alt via-bg-sand/30 to-bg-alt border border-rule p-6 rounded-xs shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="eyebrow text-[10px] text-accent uppercase font-bold tracking-widest">
                Interactive Control Center
              </span>
            </div>
            <h1 className="text-h2 font-display font-bold text-ink mt-1">
              {BRAND.name} Operating System
            </h1>
            <p className="text-caption text-ink-muted text-xs mt-0.5">
              Live inventory controls, instant filtering, stock adjusters, and publication readiness.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/products/new"
              className="bg-gradient-to-r from-amber-900 to-ink text-bg px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:opacity-90 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              ⚡ + Add Saree
            </Link>
            <Link
              href="/admin/homepage"
              className="border border-rule bg-bg px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink hover:bg-bg-sand transition-all"
            >
              🎨 Layout Builder
            </Link>
          </div>
        </div>

        {/* Catalogue Readiness Health Meter */}
        <div className="border-t border-rule/60 pt-4 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-ink flex items-center gap-2">
              <span>🎯 Catalogue Launch Readiness:</span>
              <span className="font-bold text-emerald-800">{readinessPercentage}% Ready</span>
            </span>
            <span className="text-caption text-ink-muted">
              {readyProductsCount} of {products.length} pieces fully prepped (6 photos + in stock)
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-bg-sand h-2.5 rounded-full overflow-hidden border border-rule flex">
            <div
              className="bg-emerald-600 h-full transition-all duration-500"
              style={{ width: `${(metrics.liveProducts / products.length) * 100}%` }}
              title="Live & Published"
            />
            <div
              className="bg-amber-500 h-full transition-all duration-500"
              style={{ width: `${(metrics.draftProducts / products.length) * 100}%` }}
              title="Drafts"
            />
            <div
              className="bg-rose-500 h-full transition-all duration-500"
              style={{ width: `${(metrics.soldOutProducts / products.length) * 100}%` }}
              title="Sold Out"
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-0.5">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" /> Live ({metrics.liveProducts})
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> Drafts ({metrics.draftProducts})
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Sold Out ({metrics.soldOutProducts})
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <InteractiveMetricCard
          icon="✨"
          label="Total Catalogue"
          value={metrics.totalProducts}
          subtext={`${metrics.totalCollections} Collections · ${metrics.totalCampaigns} Drops`}
          onClick={() => setActiveTab("all")}
          isActive={activeTab === "all"}
        />
        <InteractiveMetricCard
          icon="🟢"
          label="Live Storefront"
          value={metrics.liveProducts}
          subtext="Visible to online shoppers"
          badge="Live"
          badgeColor="emerald"
          onClick={() => setActiveTab("live")}
          isActive={activeTab === "live"}
        />
        <InteractiveMetricCard
          icon="📝"
          label="Draft Review"
          value={metrics.draftProducts}
          subtext="Unpublished items"
          badge="Draft"
          badgeColor="amber"
          onClick={() => setActiveTab("draft")}
          isActive={activeTab === "draft"}
        />
        <InteractiveMetricCard
          icon="⚠️"
          label="Sold Out"
          value={metrics.soldOutProducts}
          subtext="Zero inventory balance"
          badge={metrics.soldOutProducts > 0 ? "Alert" : "OK"}
          badgeColor={metrics.soldOutProducts > 0 ? "rose" : "amber"}
          onClick={() => setActiveTab("soldout")}
          isActive={activeTab === "soldout"}
        />
        <InteractiveMetricCard
          icon="💰"
          label="Stock Valuation"
          value={formatMoney({ minorUnits: metrics.totalInventoryValueMinor, currency: "INR" })}
          subtext="Total INR inventory value"
        />
      </div>

      {/* Filter Tabs, Instant Search & View Switcher */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-3">
          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <PillButton
              label={`All Items (${products.length})`}
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
            />
            <PillButton
              label={`Live (${metrics.liveProducts})`}
              active={activeTab === "live"}
              onClick={() => setActiveTab("live")}
            />
            <PillButton
              label={`Drafts (${metrics.draftProducts})`}
              active={activeTab === "draft"}
              onClick={() => setActiveTab("draft")}
            />
            <PillButton
              label={`Sold Out (${metrics.soldOutProducts})`}
              active={activeTab === "soldout"}
              onClick={() => setActiveTab("soldout")}
            />
            <PillButton
              label={`Needs Photos (${metrics.incompletePhotoProducts})`}
              active={activeTab === "incomplete"}
              onClick={() => setActiveTab("incomplete")}
              isAlert={metrics.incompletePhotoProducts > 0}
            />
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <span className="absolute inset-y-0 left-3 flex items-center text-ink-muted text-xs">
                🔍
              </span>
              <input
                type="text"
                placeholder="Live search by saree name, SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg border border-rule pl-9 pr-8 py-2 text-xs text-ink placeholder-ink-muted/70 focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 text-ink-muted text-xs hover:text-ink"
                >
                  ✕
                </button>
              ) : null}
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex border border-rule bg-bg text-xs">
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`px-3 py-1.5 ${
                  viewMode === "table" ? "bg-ink text-bg font-semibold" : "text-ink-body hover:bg-bg-sand"
                }`}
              >
                ☰ Table View
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 ${
                  viewMode === "grid" ? "bg-ink text-bg font-semibold" : "text-ink-body hover:bg-bg-sand"
                }`}
              >
                ▦ Visual Cards
              </button>
            </div>
          </div>
        </div>

        {/* Content Display: Table or Grid */}
        {filteredProducts.length === 0 ? (
          <div className="border border-rule bg-bg p-12 text-center space-y-3">
            <p className="text-lg font-display text-ink">No sarees found</p>
            <p className="text-caption text-ink-muted text-xs">
              No products match your search or filter selection.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="eyebrow text-xs text-ink underline"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "table" ? (
          /* Table View with Quick Stock Adjuster */
          <div className="overflow-x-auto border border-rule bg-bg shadow-xs">
            <table className="w-full min-w-[780px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-rule bg-bg-alt text-ink-muted font-mono uppercase tracking-wider text-[10px]">
                  <th scope="col" className="py-3.5 px-4">Piece Name & SKU</th>
                  <th scope="col" className="py-3.5 px-4">Price (INR)</th>
                  <th scope="col" className="py-3.5 px-4">Interactive Stock Adjuster</th>
                  <th scope="col" className="py-3.5 px-4">Mode</th>
                  <th scope="col" className="py-3.5 px-4">Photos</th>
                  <th scope="col" className="py-3.5 px-4">Status</th>
                  <th scope="col" className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule/70">
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="align-top hover:bg-bg-sand/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <button
                            type="button"
                            onClick={() => setPreviewProduct(p)}
                            className="font-display text-sm font-bold text-ink hover:underline text-left"
                          >
                            {p.poetic_name}
                          </button>
                          <p className="text-caption text-ink-muted text-xs">{p.title}</p>
                          <span className="eyebrow text-[9px] text-ink-muted font-mono block mt-0.5">
                            SKU: {p.sku}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-ink tabular-nums">
                      {formatMoney({ minorUnits: p.price_minor, currency: "INR" })}
                    </td>

                    {/* Interactive Stock Adjuster Column */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => adjustStock(p.id, -1)}
                          className="w-6 h-6 border border-rule bg-bg hover:bg-bg-sand flex items-center justify-center text-ink font-bold rounded-xs cursor-pointer active:scale-95 transition-transform"
                          title="Decrease Stock"
                        >
                          -
                        </button>
                        <span
                          className={`font-semibold tabular-nums px-2 min-w-[28px] text-center ${
                            p.inventory_quantity === 0 ? "text-rose-600" : "text-ink"
                          }`}
                        >
                          {p.inventory_quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => adjustStock(p.id, 1)}
                          className="w-6 h-6 border border-rule bg-bg hover:bg-bg-sand flex items-center justify-center text-ink font-bold rounded-xs cursor-pointer active:scale-95 transition-transform"
                          title="Increase Stock"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-caption text-ink-muted capitalize">
                      {p.fulfilment_mode.replace(/_/g, " ")}
                    </td>

                    <td className="py-3.5 px-4 tabular-nums">
                      <span className={p.image_count < 6 ? "text-rose-600 font-bold" : "text-emerald-700 font-medium"}>
                        {p.image_count} / 6
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`eyebrow px-2.5 py-1 text-[9px] uppercase border font-bold rounded-xs ${
                          p.published
                            ? "border-emerald-700/40 bg-emerald-50 text-emerald-800"
                            : "border-rule bg-bg-alt text-ink-muted"
                        }`}
                      >
                        {p.published ? "Live" : "Draft"}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right space-x-3">
                      <button
                        type="button"
                        onClick={() => setPreviewProduct(p)}
                        className="eyebrow text-ink underline hover:opacity-80"
                      >
                        Quick View
                      </button>
                      <Link
                        href={`/admin/products/${p.id}`}
                        className="eyebrow text-ink underline hover:opacity-80"
                      >
                        Edit
                      </Link>
                      <form action={togglePublishedAction} className="inline">
                        <input type="hidden" name="id" value={p.id} />
                        <input type="hidden" name="publish" value={p.published ? "0" : "1"} />
                        <button type="submit" className="eyebrow text-ink underline hover:opacity-80">
                          {p.published ? "Unpublish" : "Publish"}
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Visual Cards Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="border border-rule bg-bg p-5 flex flex-col justify-between hover:border-ink transition-all hover:shadow-lg group transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 border-b border-rule/50 pb-2">
                    <div>
                      <span className="eyebrow text-[9px] text-ink-muted font-mono block">
                        {p.sku}
                      </span>
                      <h3 className="font-display text-lg font-bold text-ink mt-0.5 group-hover:underline">
                        {p.poetic_name}
                      </h3>
                    </div>
                    <span
                      className={`eyebrow px-2 py-0.5 text-[9px] uppercase border font-bold ${
                        p.published
                          ? "border-emerald-700/40 bg-emerald-50 text-emerald-800"
                          : "border-rule bg-bg-alt text-ink-muted"
                      }`}
                    >
                      {p.published ? "Live" : "Draft"}
                    </span>
                  </div>

                  <p className="text-caption text-ink-muted text-xs mt-2 line-clamp-2 leading-relaxed">
                    {p.title}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rule space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-ink text-base">
                      {formatMoney({ minorUnits: p.price_minor, currency: "INR" })}
                    </span>
                    <span className={p.image_count < 6 ? "text-rose-600 font-bold" : "text-ink-muted"}>
                      {p.image_count}/6 Shots
                    </span>
                  </div>

                  {/* Stock Buttons */}
                  <div className="flex justify-between items-center bg-bg-sand/40 p-2 border border-rule/60 text-xs">
                    <span className="text-caption text-ink-muted font-medium">Stock Level:</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => adjustStock(p.id, -1)}
                        className="w-5 h-5 border border-rule bg-bg hover:bg-bg-sand font-bold text-xs flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-bold text-ink px-1">{p.inventory_quantity}</span>
                      <button
                        type="button"
                        onClick={() => adjustStock(p.id, 1)}
                        className="w-5 h-5 border border-rule bg-bg hover:bg-bg-sand font-bold text-xs flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs pt-1">
                    <button
                      type="button"
                      onClick={() => setPreviewProduct(p)}
                      className="eyebrow text-ink underline"
                    >
                      Inspect Piece
                    </button>
                    <Link href={`/admin/products/${p.id}`} className="eyebrow text-ink underline font-bold">
                      Edit →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal Lightbox */}
      {previewProduct ? (
        <div className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-bg border border-rule p-8 max-w-lg w-full space-y-6 shadow-2xl relative animate-fadeIn">
            <button
              type="button"
              onClick={() => setPreviewProduct(null)}
              className="absolute top-4 right-4 text-ink-muted hover:text-ink font-bold text-lg"
            >
              ✕
            </button>

            <div>
              <span className="eyebrow text-accent text-[10px] font-mono uppercase block">
                {previewProduct.sku}
              </span>
              <h2 className="font-display text-2xl font-bold text-ink mt-1">
                {previewProduct.poetic_name}
              </h2>
              <p className="text-caption text-ink-muted text-xs mt-1">{previewProduct.title}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-bg-sand/30 p-4 border border-rule/70 text-xs">
              <div>
                <span className="eyebrow text-ink-muted text-[10px] block">Price</span>
                <span className="font-bold text-ink text-base">
                  {formatMoney({ minorUnits: previewProduct.price_minor, currency: "INR" })}
                </span>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] block">Stock Balance</span>
                <span className="font-bold text-ink text-base">
                  {previewProduct.inventory_quantity} in stock
                </span>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] block">Photography</span>
                <span className="font-bold text-ink">
                  {previewProduct.image_count} / 6 Shot Frames
                </span>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] block">Status</span>
                <span className="font-bold text-emerald-800">
                  {previewProduct.published ? "Live on Shop" : "Draft"}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setPreviewProduct(null)}
                className="border border-rule px-4 py-2 text-xs uppercase eyebrow text-ink hover:bg-bg-sand"
              >
                Close
              </button>
              <Link
                href={`/admin/products/${previewProduct.id}`}
                className="bg-ink text-bg px-5 py-2 text-xs uppercase eyebrow hover:opacity-90 font-semibold"
              >
                Edit Full Form →
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function InteractiveMetricCard({
  icon,
  label,
  value,
  subtext,
  badge,
  badgeColor = "emerald",
  onClick,
  isActive,
}: {
  icon: string;
  label: string;
  value: string | number;
  subtext: string;
  badge?: string;
  badgeColor?: "emerald" | "amber" | "rose";
  onClick?: () => void;
  isActive?: boolean;
}) {
  const badgeStyles = {
    emerald: "border-emerald-700/40 text-emerald-800 bg-emerald-50",
    amber: "border-amber-700/40 text-amber-900 bg-amber-50",
    rose: "border-rose-700/40 text-rose-800 bg-rose-50",
  }[badgeColor];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left w-full border p-4 flex flex-col justify-between transition-all cursor-pointer transform hover:-translate-y-1 hover:shadow-md ${
        isActive
          ? "border-amber-900 bg-bg-sand/70 ring-1 ring-amber-900/50 shadow-xs"
          : "border-rule bg-bg hover:border-ink-muted"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-lg">{icon}</span>
          {badge ? (
            <span className={`eyebrow text-[9px] px-2 py-0.5 border font-bold uppercase ${badgeStyles}`}>
              {badge}
            </span>
          ) : null}
        </div>
        <span className="eyebrow text-ink-muted text-[10px] uppercase block mt-2 font-semibold">
          {label}
        </span>
        <div className="text-h3 mt-0.5 font-display font-bold text-ink">{value}</div>
      </div>
      <p className="text-caption mt-3 text-ink-muted text-[10px] border-t border-rule/50 pt-2 truncate">
        {subtext}
      </p>
    </button>
  );
}

function PillButton({
  label,
  active,
  onClick,
  isAlert,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  isAlert?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
        active
          ? "bg-ink text-bg border-ink shadow-xs"
          : isAlert
          ? "border-rose-500/40 bg-rose-50 text-rose-800 hover:bg-rose-100"
          : "border-rule bg-bg text-ink-body hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}
