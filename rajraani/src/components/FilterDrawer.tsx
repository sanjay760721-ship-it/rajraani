"use client";

import { useEffect, useRef } from "react";

import { useRouter, usePathname } from "next/navigation";

import {
  FACET_GROUPS,
  FACET_GROUP_LABELS,
  findTerm,
  termsForGroup,
  type FacetGroup,
} from "@/lib/domain/taxonomy";
import {
  SORT_OPTIONS,
  clearGroup,
  toggleFacet,
  type FacetCounts,
  type FacetSelection,
  type SortOrder,
} from "@/lib/facets/engine";
import { buildFacetHref } from "@/lib/facets/url";

/**
 * Mobile Filter Drawer.
 *
 * Left slide-in drawer on mobile/tablet (<1024px).
 * Same accordion facet groups as desktop sidebar.
 * Sticky APPLY/CLEAR footer with live result count.
 * Multi-select (checkboxes), URL sync, back button works.
 */
interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selection: FacetSelection;
  counts: FacetCounts;
  sort: SortOrder;
  resultCount: number;
  onSelectionChange: (selection: FacetSelection) => void;
  onSortChange: (sort: SortOrder) => void;
}

export function FilterDrawer({
  isOpen,
  onClose,
  selection,
  counts,
  sort,
  resultCount,
  onSelectionChange,
  onSortChange,
}: FilterDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (newSelection: FacetSelection, newSort?: SortOrder) => {
    router.push(
      buildFacetHref(pathname, {
        selection: newSelection,
        sort: newSort ?? sort,
        page: 1,
      }),
      { scroll: false },
    );
    onSelectionChange(newSelection);
    if (newSort !== undefined) onSortChange(newSort);
  };

  // Focus management
  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    // Focus first focusable element after render
    setTimeout(() => {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, [tabindex]:not([tabindex="-1"])',
      );
      firstFocusable?.focus();
    }, 0);
    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  // Escape closes
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
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
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Outside click closes (but not clicks inside drawer)
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (drawerRef.current?.contains(event.target as Node)) return;
      onClose();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasActiveFilters = Object.values(selection).some((arr) => arr.length > 0);

  return (
    <div className="fixed inset-0 z-100 lg:hidden" role="dialog" aria-modal="true" aria-label="Filter">
      <button
        type="button"
        aria-label="Close filter"
        className="absolute inset-0 bg-scrim/60"
        onClick={onClose}
      />
      <div
        ref={drawerRef}
        className="absolute inset-y-0 left-0 w-full max-w-[320px] bg-bg border-r border-rule shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-rule">
          <h2 className="font-display text-h4 text-ink">Filter</h2>
          <button
            type="button"
            className="eyebrow text-ink-muted hover:text-ink p-2"
            onClick={onClose}
            aria-label="Close filter"
          >
            ✕
          </button>
        </div>

        {/* Active filter chips */}
        {hasActiveFilters && (
          <div className="p-4 border-b border-rule">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="eyebrow text-ink-muted">Active filters:</span>
              {Object.entries(selection).flatMap(([group, values]) =>
                values.map((value) => {
                  const term = findTerm(group as FacetGroup, value);
                  return (
                    <button
                      key={`${group}:${value}`}
                      type="button"
                      className="eyebrow flex items-center gap-1.5 border border-rule-input px-2.5 py-1 text-ink"
                      onClick={() => navigate(clearGroup(selection, group as FacetGroup))}
                    >
                      {term?.name ?? value}
                      <span aria-hidden>×</span>
                    </button>
                  );
                }),
              )}
            </div>
            <button
              type="button"
              className="eyebrow border border-rule-strong px-3 py-1.5 text-ink w-full"
              onClick={() => navigate({})}
            >
              Clear all
            </button>
          </div>
        )}

        {/* Facet groups */}
        <div className="flex-1 overflow-y-auto p-4">
          {FACET_GROUPS.map((group) => {
            const options = termsForGroup(group).filter(
              (term) => (counts[group][term.slug] ?? 0) > 0 || isSelected(selection, group, term.slug),
            );
            if (options.length === 0) return null;

            const selectedInGroup = selection[group] ?? [];

            return (
              <details key={group} open className="border-b border-rule py-4">
                <summary className="eyebrow flex cursor-pointer items-center justify-between text-ink">
                  {FACET_GROUP_LABELS[group]}
                  {selectedInGroup.length > 0 && (
                    <button
                      type="button"
                      className="text-caption text-ink-muted normal-case italic underline"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(clearGroup(selection, group));
                      }}
                    >
                      clear
                    </button>
                  )}
                </summary>

                <ul className="mt-3 space-y-2">
                  {options.map((term) => {
                    const count = counts[group][term.slug] ?? 0;
                    const checked = isSelected(selection, group, term.slug);
                    return (
                      <li key={term.slug}>
                        <label
                          className={`flex cursor-pointer items-center gap-3 text-caption text-ink-body ${
                            count === 0 ? "opacity-40" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => navigate(toggleFacet(selection, group, term.slug))}
                            className="size-3.5 accent-ink"
                          />
                          <span className="flex-1">{term.name}</span>
                          <span className="text-eyebrow tabular-nums text-ink-muted">
                            {count}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}

          {/* Sort */}
          <details className="border-t border-rule pt-4">
            <summary className="eyebrow cursor-pointer text-ink">Sort</summary>
            <select
              value={sort}
              onChange={(event) => navigate(selection, event.target.value as SortOrder)}
              className="mt-3 w-full eyebrow cursor-pointer border-b border-rule-input bg-transparent py-2 text-ink"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </details>
        </div>

        {/* Sticky footer with Apply/Clear */}
        <div className="p-4 border-t border-rule bg-bg/95 backdrop-blur sticky bottom-0">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="eyebrow text-ink-muted">
              {resultCount} {resultCount === 1 ? "piece" : "pieces"} found
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                className="eyebrow border border-rule-strong px-3 py-1.5 text-ink"
                onClick={() => navigate({})}
              >
                Clear all
              </button>
            )}
          </div>
          <button
            type="button"
            className="w-full bg-ink px-6 py-3 text-bg font-semibold"
            onClick={onClose}
          >
            Apply filters
          </button>
        </div>
      </div>
    </div>
  );
}

function isSelected(
  selection: FacetSelection,
  group: FacetGroup,
  slug: string,
): boolean {
  return (selection[group] ?? []).includes(slug);
}