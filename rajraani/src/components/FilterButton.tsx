"use client";

import { useState } from "react";

import { FilterDrawer } from "./FilterDrawer";
import type { FacetCounts, FacetSelection, SortOrder } from "@/lib/facets/engine";

interface FilterButtonProps {
  selection: FacetSelection;
  counts: FacetCounts;
  sort: SortOrder;
  resultCount: number;
  className?: string;
}

/**
 * Filter button that opens the mobile filter drawer.
 *
 * The drawer is a client component, so this wrapper handles the open state
 * and passes the server-rendered facet data to the drawer.
 */
export function FilterButton({
  selection,
  counts,
  sort,
  resultCount,
  className,
}: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`eyebrow flex items-center gap-2 px-4 py-2 border border-rule text-ink hover:bg-bg-alt transition-colors ${className ?? ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open filters"
        aria-expanded={isOpen}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filter
        {Object.values(selection).some((arr) => arr.length > 0) && (
          <span className="bg-ink text-bg text-[10px] font-semibold px-1.5 py-0.5 rounded-none">
            {Object.values(selection).reduce((sum, arr) => sum + arr.length, 0)}
          </span>
        )}
      </button>
      <FilterDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selection={selection}
        counts={counts}
        sort={sort}
        resultCount={resultCount}
        onSelectionChange={() => {}}
        onSortChange={() => {}}
      />
    </>
  );
}