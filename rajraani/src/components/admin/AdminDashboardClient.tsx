"use client";

import Link from "next/link";
import { useState } from "react";

import type { AdminProductRow, DashboardMetrics } from "@/lib/data/admin-queries";
import { formatMoney } from "@/lib/money";

export function AdminDashboardClient({
  products,
  metrics,
  togglePublishedAction,
}: {
  products: AdminProductRow[];
  metrics: DashboardMetrics;
  togglePublishedAction: (formData: FormData) => Promise<void>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "live" | "draft" | "soldout" | "incomplete">("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [showWorkflowGuide, setShowWorkflowGuide] = useState(true);

  // Filter products dynamically
  const filteredProducts = products.filter((product) => {
    // Search query match
    const matchesSearch =
      product.poetic_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Filter tab match
    if (filterTab === "live") return product.published === 1;
    if (filterTab === "draft") return product.published === 0;
    if (filterTab === "soldout") return product.published === 1 && product.inventory_quantity === 0;
    if (filterTab === "incomplete") return product.image_count < 6;

    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Interactive Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule/80 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="eyebrow text-[10px] text-ink-muted uppercase tracking-widest">
              Live Operating System
            </span>
          </div>
          <h1 className="text-h2 font-display font-semibold text-ink mt-1">
            Catalogue & Dashboard
          </h1>
          <p className="text-caption text-ink-muted mt-1">
            Real-time management for Banarasi sarees, inventory status, and storefront drops.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/products/new"
            className="bg-gradient-to-r from-amber-900 to-ink text-bg px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:opacity-95 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
          >
            + Add New Saree
          </Link>
          <Link
            href="/admin/homepage"
            className="border border-rule bg-bg-alt px-4 py-2 text-xs font-medium tracking-wider uppercase text-ink hover:bg-bg-sand transition-all"
          >
            Homepage Builder
          </Link>
          <Link
            href="/admin/media"
            className="border border-rule bg-bg-alt px-4 py-2 text-xs font-medium tracking-wider uppercase text-ink hover:bg-bg-sand transition-all"
          >
            Media Manager
          </Link>
        </div>
      </div>

      {/* Interactive Stat Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard
          icon="📦"
          label="Total Catalogue"
          value={metrics.totalProducts}
          subtext={`${metrics.totalCollections} collections · ${metrics.totalCampaigns} drops`}
          onClick={() => setFilterTab("all")}
          isActive={filterTab === "all"}
        />
        <MetricCard
          icon="✨"
          label="Live Storefront"
          value={metrics.liveProducts}
          subtext="Visible to public buyers"
          badge="Live"
          badgeColor="success"
          onClick={() => setFilterTab("live")}
          isActive={filterTab === "live"}
        />
        <MetricCard
          icon="📝"
          label="Draft Review"
          value={metrics.draftProducts}
          subtext="Awaiting photos or approval"
          badge="Draft"
          badgeColor="muted"
          onClick={() => setFilterTab("draft")}
          isActive={filterTab === "draft"}
        />
        <MetricCard
          icon="⚠️"
          label="Out of Stock"
          value={metrics.soldOutProducts}
          subtext="Inventory quantity 0"
          badge={metrics.soldOutProducts > 0 ? "Alert" : "OK"}
          badgeColor={metrics.soldOutProducts > 0 ? "error" : "muted"}
          onClick={() => setFilterTab("soldout")}
          isActive={filterTab === "soldout"}
        />
        <MetricCard
          icon="💰"
          label="Catalogue Value"
          value={formatMoney({
            minorUnits: metrics.totalInventoryValueMinor,
            currency: "INR",
          })}
          subtext="Stock valuation at INR"
        />
      </div>

      {/* Guided Assistant & Workflow Checklist */}
      {showWorkflowGuide ? (
        <div className="border border-amber-900/20 bg-gradient-to-r from-bg-sand/40 via-bg-alt to-bg-sand/40 p-6 rounded-xs relative space-y-4 shadow-xs">
          <button
            type="button"
            onClick={() => setShowWorkflowGuide(false)}
            className="absolute top-4 right-4 text-caption text-ink-muted hover:text-ink text-xs underline"
          >
            Dismiss Guide ✕
          </button>

          <div>
            <span className="eyebrow text-[10px] text-accent font-semibold uppercase tracking-widest">
              Guided Merchandising Assistant
            </span>
            <h2 className="text-h3 font-display font-semibold text-ink mt-0.5">
              3-Step Workflow: How to Add & Publish a Saree
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
            <div className="bg-bg border border-rule/70 p-4 space-y-1.5 hover:border-ink transition-colors">
              <div className="flex items-center gap-2 font-semibold text-ink">
                <span className="w-5 h-5 rounded-full bg-ink text-bg flex items-center justify-center text-[11px]">
                  1
                </span>
                <span>Step 1: Enter Product Specs</span>
              </div>
              <p className="text-caption text-ink-muted leading-relaxed pl-7">
                Click <strong>&ldquo;+ Add New Saree&rdquo;</strong>. Select weave technique (*Kadhua*, *Tanchoi*), fabric, zari type, and price in INR.
              </p>
            </div>

            <div className="bg-bg border border-rule/70 p-4 space-y-1.5 hover:border-ink transition-colors">
              <div className="flex items-center gap-2 font-semibold text-ink">
                <span className="w-5 h-5 rounded-full bg-ink text-bg flex items-center justify-center text-[11px]">
                  2
                </span>
                <span>Step 2: Attach 6 Shot Frames</span>
              </div>
              <p className="text-caption text-ink-muted leading-relaxed pl-7">
                Ensure 6 photos are attached (full drape, pallu, booti detail, motif, blouse piece, loom provenance).
              </p>
            </div>

            <div className="bg-bg border border-rule/70 p-4 space-y-1.5 hover:border-ink transition-colors">
              <div className="flex items-center gap-2 font-semibold text-ink">
                <span className="w-5 h-5 rounded-full bg-ink text-bg flex items-center justify-center text-[11px]">
                  3
                </span>
                <span>Step 3: Toggle to &ldquo;Publish&rdquo;</span>
              </div>
              <p className="text-caption text-ink-muted leading-relaxed pl-7">
                Switch status from Draft to Live. The saree immediately appears on storefront collection pages!
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Interactive Search, Filter Tabs & View Mode Switcher */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule/60 pb-3">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <FilterTabButton
              label={`All Pieces (${products.length})`}
              active={filterTab === "all"}
              onClick={() => setFilterTab("all")}
            />
            <FilterTabButton
              label={`Live (${metrics.liveProducts})`}
              active={filterTab === "live"}
              onClick={() => setFilterTab("live")}
            />
            <FilterTabButton
              label={`Drafts (${metrics.draftProducts})`}
              active={filterTab === "draft"}
              onClick={() => setFilterTab("draft")}
            />
            <FilterTabButton
              label={`Sold Out (${metrics.soldOutProducts})`}
              active={filterTab === "soldout"}
              onClick={() => setFilterTab("soldout")}
            />
            <FilterTabButton
              label={`Needs Photos (${metrics.incompletePhotoProducts})`}
              active={filterTab === "incomplete"}
              onClick={() => setFilterTab("incomplete")}
              isWarning={metrics.incompletePhotoProducts > 0}
            />
          </div>

          {/* Search Input & View Switcher */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <span className="absolute inset-y-0 left-3 flex items-center text-ink-muted text-xs">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search saree, title, SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg border border-rule pl-8 pr-3 py-1.5 text-xs text-ink placeholder-ink-muted/70 focus:outline-none focus:border-ink"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-2 text-ink-muted text-xs"
                >
                  ✕
                </button>
              ) : null}
            </div>

            {/* Grid / Table View Switcher */}
            <div className="flex border border-rule bg-bg text-xs">
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`px-3 py-1.5 ${
                  viewMode === "table" ? "bg-ink text-bg font-semibold" : "text-ink-body hover:bg-bg-sand"
                }`}
                title="Table View"
              >
                ☰ Table
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 ${
                  viewMode === "grid" ? "bg-ink text-bg font-semibold" : "text-ink-body hover:bg-bg-sand"
                }`}
                title="Visual Grid View"
              >
                ▦ Grid Cards
              </button>
            </div>
          </div>
        </div>

        {/* Content Display: Table or Grid View */}
        {filteredProducts.length === 0 ? (
          <div className="border border-rule bg-bg p-12 text-center space-y-3">
            <p className="text-lg font-display text-ink">No sarees found</p>
            <p className="text-caption text-ink-muted text-xs">
              {searchQuery
                ? `No products match "${searchQuery}". Try clearing search or filters.`
                : "No items match the selected filter."}
            </p>
            {searchQuery || filterTab !== "all" ? (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setFilterTab("all");
                }}
                className="eyebrow text-xs text-ink underline"
              >
                Reset Filters
              </button>
            ) : null}
          </div>
        ) : viewMode === "table" ? (
          /* Table View */
          <div className="overflow-x-auto border border-rule bg-bg shadow-xs">
            <table className="w-full min-w-[760px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-rule bg-bg-alt/70 text-ink-muted font-mono uppercase tracking-wider text-[10px]">
                  <th scope="col" className="py-3 px-4">Piece Name & Title</th>
                  <th scope="col" className="py-3 px-4">SKU</th>
                  <th scope="col" className="py-3 px-4">Price (INR)</th>
                  <th scope="col" className="py-3 px-4">Stock</th>
                  <th scope="col" className="py-3 px-4">Fulfillment</th>
                  <th scope="col" className="py-3 px-4">Photos</th>
                  <th scope="col" className="py-3 px-4">Status</th>
                  <th scope="col" className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule/70">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="align-top hover:bg-bg-sand/40 transition-colors">
                    <td className="py-3.5 px-4">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="font-display text-sm font-semibold text-ink hover:underline block"
                      >
                        {product.poetic_name}
                      </Link>
                      <p className="text-caption text-ink-muted text-xs line-clamp-1">{product.title}</p>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-ink-body">{product.sku}</td>
                    <td className="py-3.5 px-4 tabular-nums font-semibold text-ink">
                      {formatMoney({ minorUnits: product.price_minor, currency: "INR" })}
                    </td>
                    <td className="py-3.5 px-4 tabular-nums">
                      {product.inventory_quantity === 0 ? (
                        <span className="text-error font-semibold">Sold out</span>
                      ) : (
                        <span className="text-ink-body font-medium">{product.inventory_quantity}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-caption text-ink-muted capitalize">
                      {product.fulfilment_mode.replace(/_/g, " ")}
                    </td>
                    <td className="py-3.5 px-4 tabular-nums">
                      <span
                        className={
                          product.image_count < 6
                            ? "text-error font-bold"
                            : "text-emerald-700 font-medium"
                        }
                      >
                        {product.image_count} / 6
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`eyebrow px-2 py-0.5 text-[9px] uppercase border font-semibold ${
                          product.published
                            ? "border-emerald-700/40 bg-emerald-50 text-emerald-800"
                            : "border-rule bg-bg-alt text-ink-muted"
                        }`}
                      >
                        {product.published ? "Live" : "Draft"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-3">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="eyebrow text-ink underline hover:opacity-80"
                      >
                        Edit
                      </Link>
                      <form action={togglePublishedAction} className="inline">
                        <input type="hidden" name="id" value={product.id} />
                        <input type="hidden" name="publish" value={product.published ? "0" : "1"} />
                        <button type="submit" className="eyebrow text-ink underline hover:opacity-80">
                          {product.published ? "Unpublish" : "Publish"}
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Visual Grid Cards View */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-rule bg-bg p-4 flex flex-col justify-between hover:border-ink transition-all hover:shadow-md group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="eyebrow text-[9px] text-ink-muted uppercase font-mono block">
                        {product.sku}
                      </span>
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="font-display text-lg font-bold text-ink group-hover:underline block mt-0.5"
                      >
                        {product.poetic_name}
                      </Link>
                    </div>
                    <span
                      className={`eyebrow px-2 py-0.5 text-[9px] uppercase border font-semibold shrink-0 ${
                        product.published
                          ? "border-emerald-700/40 bg-emerald-50 text-emerald-800"
                          : "border-rule bg-bg-alt text-ink-muted"
                      }`}
                    >
                      {product.published ? "Live" : "Draft"}
                    </span>
                  </div>

                  <p className="text-caption text-ink-muted text-xs mt-1 line-clamp-2">
                    {product.title}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rule space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-ink text-sm">
                      {formatMoney({ minorUnits: product.price_minor, currency: "INR" })}
                    </span>
                    <span
                      className={
                        product.image_count < 6
                          ? "text-error font-semibold text-[11px]"
                          : "text-ink-muted text-[11px]"
                      }
                    >
                      {product.image_count}/6 Photos
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-1 text-caption">
                    <span className="text-ink-muted capitalize">
                      Stock: {product.inventory_quantity}
                    </span>
                    <div className="space-x-3">
                      <Link href={`/admin/products/${product.id}`} className="underline text-ink">
                        Edit
                      </Link>
                      <form action={togglePublishedAction} className="inline">
                        <input type="hidden" name="id" value={product.id} />
                        <input type="hidden" name="publish" value={product.published ? "0" : "1"} />
                        <button type="submit" className="underline text-ink">
                          {product.published ? "Unpublish" : "Publish"}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  subtext,
  badge,
  badgeColor = "muted",
  onClick,
  isActive,
}: {
  icon: string;
  label: string;
  value: string | number;
  subtext: string;
  badge?: string;
  badgeColor?: "success" | "error" | "muted";
  onClick?: () => void;
  isActive?: boolean;
}) {
  const badgeStyles = {
    success: "border-emerald-700/40 text-emerald-800 bg-emerald-50",
    error: "border-error/40 text-error bg-error/5",
    muted: "border-rule text-ink-muted bg-bg-alt",
  }[badgeColor];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left w-full border p-4 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${
        isActive
          ? "border-ink bg-bg-sand/60 shadow-xs ring-1 ring-ink"
          : "border-rule bg-bg hover:border-ink-muted"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-base">{icon}</span>
          {badge ? (
            <span className={`eyebrow text-[9px] px-1.5 py-0.5 border font-semibold ${badgeStyles}`}>
              {badge}
            </span>
          ) : null}
        </div>
        <span className="eyebrow text-ink-muted text-[10px] uppercase block mt-2">{label}</span>
        <div className="text-h3 mt-0.5 font-display font-bold text-ink">{value}</div>
      </div>
      <p className="text-caption mt-3 text-ink-muted text-[10px] border-t border-rule/50 pt-2 line-clamp-1">
        {subtext}
      </p>
    </button>
  );
}

function FilterTabButton({
  label,
  active,
  onClick,
  isWarning,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  isWarning?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
        active
          ? "bg-ink text-bg border-ink font-semibold"
          : isWarning
          ? "border-error/40 bg-error/5 text-error hover:bg-error/10"
          : "border-rule bg-bg text-ink-body hover:border-ink-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
