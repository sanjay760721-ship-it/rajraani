"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminIcon } from "@/components/admin/AdminIcon";

type Collection = {
  handle: string;
  title: string;
  kind: "facet" | "campaign";
  campaign_slug?: string;
  seo_intro: string;
  product_count: number;
  image?: string;
};

const mockCollections: Collection[] = [
  {
    handle: "maharani-pearls",
    title: "Maharani Pearls",
    kind: "campaign",
    campaign_slug: "maharani-pearls-2026",
    seo_intro: "A curation of the finest natural pearls, sourced from the Gulf of Mannar and set in heritage gold designs.",
    product_count: 24,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3W7meIccf1Vy0QD2-4NXNUHR-NOkFEyeH3QI29SR950DO1VHwYb2s9tLDTEhApUsQTLiFF_Y26iSwKA4cE6t0E0E0WPPQZgo0LgFc4M5cZr1ckV1nenzlmRQt7mEVwtF5bBxBGn5JOQWvAAayxdpJD-4jdKkfgVYHN7ejh0RLRhHMm6wDyqpAmUQJ1F22dvzjqpmCAUJ_0X-EOAZIqny5algZWS1jKeAhRI90HJ6hZxD87-Qe40RjqQ",
  },
  {
    handle: "kundan-revival",
    title: "Kundan Revival",
    kind: "campaign",
    campaign_slug: "kundan-revival-aw26",
    seo_intro: "Reviving the Mughal art of kundan — uncut diamonds set in pure gold foil, each piece a testament to the karigar's patience.",
    product_count: 18,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYqc07VB_cI_KOilQE8Ry2F6vXGeGWgBCNMPBts4LcFmWvtBtiZb5EwD4cMGrT2_eFyQ2vU-kqsD0VujYuForFPEEGDcjjG9ifkV6Wnhk5xXliN8C3aCgu24pQcMvHVq4uAX1yvUaqUQ_XmNMwDqHoFrekGOx0c7Qmk1OvhmpotVcNWvSoEPb5laoznTGsYYqe_ntk6-Vf1UF9Iid2DIfWJ7Mzbjw_ine3fLjaxB8BTj8PUxkKiH3zOg",
  },
  {
    handle: "temple-gold",
    title: "Temple Gold",
    kind: "facet",
    seo_intro: "Traditional South Indian temple jewelry — heavy gold, divine motifs, and the weight of devotion.",
    product_count: 42,
  },
  {
    handle: "contemporary-polki",
    title: "Contemporary Polki",
    kind: "facet",
    seo_intro: "Modern interpretations of the ancient polki technique — uncut diamonds in lightweight, wearable silhouettes.",
    product_count: 12,
  },
  {
    handle: "heritage-banarasi",
    title: "Heritage Banarasi",
    kind: "facet",
    seo_intro: "Handwoven Banarasi silks with pure zari — kadhua, tanchoi, and jamawar from the looms of Varanasi.",
    product_count: 8,
  },
];

const CATEGORIES = [
  { slug: "bespoke-silk-sarees", name: "Bespoke Silk Sarees", count: 24 },
  { slug: "heritage-banarasi", name: "Heritage Banarasi", count: 18 },
  { slug: "vintage-patola", name: "Vintage Patola", count: 12 },
  { slug: "royal-kanjeevaram", name: "Royal Kanjeevaram", count: 8 },
  { slug: "chanderi", name: "Chanderi", count: 6 },
];

const AVAILABILITY = [
  { key: "in-stock", label: "In Stock", count: 42, active: true },
  { key: "made-to-order", label: "Made to Order", count: 18 },
  { key: "archive", label: "Archive", count: 8 },
];

function FilterSidebar({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string[]>(["collections", "availability"]);

  return (
    <aside className="w-full lg:w-64 lg:flex-shrink-0 hidden lg:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4">
      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h2 className="a-heading-sm mb-6 relative" style={{ color: "var(--a-ink)" }}>
            <span className="relative z-10">Collections</span>
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: "var(--a-accent)" }} />
          </h2>
          <ul className="space-y-4">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/admin/collections?category=${cat.slug}`}
                  className="flex items-center gap-3 a-body-lg transition-transform hover:translate-x-2"
                  style={{ color: "var(--a-ink)" }}
                >
                  <span className="w-4 h-[1px] flex-shrink-0" style={{ backgroundColor: "var(--a-ink)" }} />
                  <span>{cat.name}</span>
                  <span className="ml-auto a-label" style={{ color: "var(--a-outline)" }}>
                    {cat.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div>
          <h3 className="a-label mb-4" style={{ color: "var(--a-outline)" }}>
            Availability
          </h3>
          <div className="flex flex-wrap gap-2">
            {AVAILABILITY.map((avail) => (
              <button
                key={avail.key}
                className={`a-label px-4 py-2 rounded-full transition-colors shadow-sm ${
                  avail.active
                    ? "bg-ink text-surface-lowest"
                    : "bg-surface-high text-ink-variant hover:bg-surface-highest"
                }`}
              >
                {avail.label} <span className="ml-1" style={{ color: avail.active ? "var(--a-surface-lowest)" : "var(--a-outline)" }}>({avail.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="group cursor-pointer a-card flex flex-col relative overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-low">
        {collection.image ? (
          <img
            src={collection.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-high" style={{ color: "var(--a-outline)" }}>
            <span className="material-symbols-outlined text-4xl">image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--a-ink)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 a-label rounded-full shadow-sm" style={{ color: "var(--a-ink)" }}>
          {collection.kind === "campaign" ? "Campaign" : "Collection"}
        </div>
        <button className="absolute top-4 left-4 w-10 h-10 bg-surface/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 a-btn-icon">
          <span className="material-symbols-outlined text-[20px]">favorite</span>
        </button>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="a-label mb-2" style={{ color: "var(--a-accent)" }}>
          {collection.handle}
        </span>
        <h3 className="a-heading-sm mb-2 leading-tight group-hover:text-accent transition-colors" style={{ color: "var(--a-ink)" }}>
          {collection.title}
        </h3>
        <p className="a-body-sm mb-4 line-clamp-2 flex-1" style={{ color: "var(--a-ink-variant)" }}>
          {collection.seo_intro}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)" }}>
          <span className="a-body-lg" style={{ color: "var(--a-ink)" }}>
            {collection.product_count} pieces
          </span>
          <button className="a-label flex items-center gap-1" style={{ color: "var(--a-accent)" }}>
            VIEW DETAILS
            <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function CollectionsAdminPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row w-full flex-1">
      {/* Sidebar Filters - Desktop */}
      <FilterSidebar onClose={() => setShowFilters(false)} />

      {/* Mobile Filter Toggle */}
      <button
        className="lg:hidden a-btn-secondary mb-6 flex items-center gap-2"
        onClick={() => setShowFilters(true)}
      >
        <span className="material-symbols-outlined text-[18px]">filter_list</span>
        Filters
      </button>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:pl-16">
        {/* Top Actions */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
              Showing <span className="font-medium" style={{ color: "var(--a-ink)" }}>1–5</span> of 5 collections
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="a-label" style={{ color: "var(--a-ink-variant)" }}>Sort By</span>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2 pb-1 border-b" style={{ borderColor: "var(--a-ink)" }}>
                <span className="a-body-sm" style={{ color: "var(--a-ink)" }}>Newest Additions</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
            </div>
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {mockCollections.map((collection) => (
            <CollectionCard key={collection.handle} collection={collection} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 flex justify-center pb-24">
          <button className="group flex flex-col items-center gap-3">
            <span className="a-label" style={{ color: "var(--a-ink-variant)" }}>
              Load Archive
            </span>
            <div className="w-[1px] h-12 transition-all duration-300 group-hover:h-16" style={{ backgroundColor: "var(--a-outline-variant)" }} />
          </button>
        </div>
      </main>
    </div>
  );
}