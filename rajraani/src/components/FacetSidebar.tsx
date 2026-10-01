"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

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
import { activeFacetChips, buildFacetHref } from "@/lib/facets/url";

/**
 * Faceting UI.
 *
 * Everything the reference site's filter does not do (build.md §9.1):
 * multi-select within a group, a live count on every option, state pushed to
 * the URL so a filtered view is shareable and the back button works, and no
 * full page reload — `router.push` performs a client-side navigation and the
 * server re-renders only what changed.
 *
 * The counts come from the server and exclude their own group, so an option
 * never reads zero while it is selected.
 */

function useFacetNavigation(sort: SortOrder) {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (selection: FacetSelection) => {
      // Changing a facet always returns to page 1 — page 4 of the old result
      // set is meaningless against the new one.
      router.push(buildFacetHref(pathname, { selection, sort, page: 1 }), {
        scroll: false,
      });
    },
    [router, pathname, sort],
  );
}

export function FacetSidebar({
  selection,
  counts,
  sort,
  collection,
}: {
  selection: FacetSelection;
  counts: FacetCounts;
  sort: SortOrder;
  /**
   * The authored collection this listing is already narrowed to.
   *
   * An authored collection IS a filter — the grid is a subset of the catalogue
   * and the shopper arrived by choosing it — so it belongs in the filter column
   * with the rest, shown as applied and clearable. Without it the narrowing is
   * invisible: the page looks like the whole catalogue with surprisingly few
   * pieces in it, and there is no way back out except the browser's own button.
   *
   * Absent on a facet collection, where the narrowing is already expressed by
   * the facet groups below.
   */
  collection?: { title: string; clearHref: string };
}) {
  const navigate = useFacetNavigation(sort);

  return (
    <aside aria-label="Filter" className="border-t border-rule">
      {collection ? (
        <details open className="border-b border-rule py-4">
          <summary className="eyebrow flex cursor-pointer items-center justify-between text-ink">
            Collection
            <Link
              href={collection.clearHref}
              className="text-caption text-ink-muted normal-case italic underline"
            >
              clear
            </Link>
          </summary>
          <ul className="mt-4 space-y-2.5">
            <li>
              {/*
                * A radio, not a checkbox: the rest of this column is
                * multi-select and this is not — a listing is narrowed to one
                * authored collection at a time. Disabled because the only move
                * available is clearing it, which the link above does.
                */}
              <label className="flex items-center gap-3 text-[0.9375rem] text-ink">
                <input
                  type="radio"
                  checked
                  readOnly
                  disabled
                  className="size-4 accent-[var(--color-accent)]"
                />
                <span className="flex-1 font-semibold">{collection.title}</span>
              </label>
            </li>
          </ul>
        </details>
      ) : null}

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
              {selectedInGroup.length > 0 ? (
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
              ) : null}
            </summary>

            <ul className="mt-4 space-y-2.5">
              {options.map((term) => {
                const count = counts[group][term.slug] ?? 0;
                const checked = isSelected(selection, group, term.slug);
                return (
                  <li key={term.slug}>
                    <label
                      className={`flex cursor-pointer items-center gap-3 text-[0.9375rem] text-ink-body ${
                        count === 0 ? "opacity-40" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        // Multi-select is the whole point — checkboxes, never
                        // radios. The reference site cannot express Red AND
                        // Maroon.
                        onChange={() => navigate(toggleFacet(selection, group, term.slug))}
                        className="size-4 accent-[var(--color-accent)]"
                      />
                      <span className="flex-1">{term.name}</span>
                      <span className="text-caption tabular-nums text-ink-muted">
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
    </aside>
  );
}

function isSelected(
  selection: FacetSelection,
  group: FacetGroup,
  slug: string,
): boolean {
  return (selection[group] ?? []).includes(slug);
}

export function ActiveFilterChips({
  selection,
  sort,
  resultCount,
}: {
  selection: FacetSelection;
  sort: SortOrder;
  resultCount: number;
}) {
  const navigate = useFacetNavigation(sort);
  const chips = activeFacetChips(selection);
  if (chips.length === 0) return null;

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      <p className="sr-only" aria-live="polite">
        {resultCount} results
      </p>
      {chips.map(({ group, value }) => (
        <button
          key={`${group}:${value}`}
          type="button"
          className="eyebrow flex items-center gap-2 border border-rule-input px-3 py-1.5 text-ink"
          onClick={() => navigate(toggleFacet(selection, group, value))}
        >
          {findTerm(group, value)?.name ?? value}
          <span aria-hidden>×</span>
          <span className="sr-only">Remove filter</span>
        </button>
      ))}
      <button
        type="button"
        className="eyebrow border border-rule-strong px-3 py-1.5 text-ink"
        onClick={() => navigate({})}
      >
        Clear all
      </button>
    </div>
  );
}

export function SortSelect({
  selection,
  sort,
}: {
  selection: FacetSelection;
  sort: SortOrder;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      <label htmlFor="sort" className="eyebrow text-ink-muted">
        Sort
      </label>
      <select
        id="sort"
        value={sort}
        onChange={(event) =>
          router.push(
            buildFacetHref(pathname, {
              selection,
              sort: event.target.value as SortOrder,
              page: 1,
            }),
            { scroll: false },
          )
        }
        className="eyebrow cursor-pointer border-b border-rule-input bg-transparent py-1 text-ink"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
