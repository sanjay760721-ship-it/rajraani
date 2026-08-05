/**
 * Facet state ↔ URL.
 *
 * ONE URL GRAMMAR. pre-build-gaps.md §6 records the reference site using path
 * segments for facets (`/collections/sarees/katan-silk+red`) and a query param
 * for pagination (`?page=3`) — two grammars for the same kind of state, which
 * makes canonicalisation and analytics harder than they need to be.
 *
 * Decision: query parameters for everything. Facets, sort and pagination all
 * live in the query string. Path segments identify the collection and nothing
 * else.
 *
 * Canonical form matters as much as the grammar. Groups are emitted in a fixed
 * order and values are sorted alphabetically within a group, so the same
 * selection always produces byte-identical URLs regardless of the order the
 * shopper clicked. Without that rule, one result set has dozens of URLs and
 * every one of them is a duplicate for a crawler.
 */

import { FACET_GROUPS, type FacetGroup } from "../domain/taxonomy.ts";
import {
  DEFAULT_SORT,
  isSortOrder,
  type FacetSelection,
  type SortOrder,
} from "./engine.ts";

export const PAGE_PARAM = "page";
export const SORT_PARAM = "sort";
const VALUE_SEPARATOR = ",";

export type FacetUrlState = {
  selection: FacetSelection;
  sort: SortOrder;
  page: number;
};

/** Anything the app receives from `searchParams` or `useSearchParams`. */
export type RawSearchParams =
  | URLSearchParams
  | Record<string, string | string[] | undefined>;

function readParam(params: RawSearchParams, key: string): string | undefined {
  if (params instanceof URLSearchParams) {
    return params.get(key) ?? undefined;
  }
  const value = params[key];
  if (Array.isArray(value)) return value[0];
  return value;
}

/**
 * Parse URL state.
 *
 * Unknown values are kept rather than dropped: validation against the
 * controlled vocabulary happens where the terms are rendered, so a stale
 * bookmark degrades to an empty grid with a visible chip the shopper can
 * remove, instead of silently returning unfiltered results.
 */
export function parseFacetUrlState(params: RawSearchParams): FacetUrlState {
  const selection: FacetSelection = {};

  for (const group of FACET_GROUPS) {
    const raw = readParam(params, group);
    if (!raw) continue;
    const values = raw
      .split(VALUE_SEPARATOR)
      .map((value) => value.trim())
      .filter(Boolean);
    if (values.length > 0) {
      selection[group] = [...new Set(values)].sort();
    }
  }

  const rawSort = readParam(params, SORT_PARAM);
  const sort = rawSort && isSortOrder(rawSort) ? rawSort : DEFAULT_SORT;

  const rawPage = Number.parseInt(readParam(params, PAGE_PARAM) ?? "1", 10);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  return { selection, sort, page };
}

/**
 * Serialise to a canonical query string.
 *
 * Defaults are omitted — `sort=featured` and `page=1` never appear, so the
 * unfiltered collection has exactly one URL.
 */
export function buildFacetQuery(state: Partial<FacetUrlState>): string {
  const params = new URLSearchParams();

  for (const group of FACET_GROUPS) {
    const values = state.selection?.[group];
    if (!values || values.length === 0) continue;
    params.set(group, [...values].sort().join(VALUE_SEPARATOR));
  }

  if (state.sort && state.sort !== DEFAULT_SORT) {
    params.set(SORT_PARAM, state.sort);
  }
  if (state.page && state.page > 1) {
    params.set(PAGE_PARAM, String(state.page));
  }

  return params.toString();
}

/** A shareable href for the given collection and state. */
export function buildFacetHref(
  pathname: string,
  state: Partial<FacetUrlState>,
): string {
  const query = buildFacetQuery(state);
  return query ? `${pathname}?${query}` : pathname;
}

/** Every active facet as a removable chip (build.md §9.1). */
export function activeFacetChips(
  selection: FacetSelection,
): { group: FacetGroup; value: string }[] {
  return FACET_GROUPS.flatMap((group) =>
    (selection[group] ?? []).map((value) => ({ group, value })),
  );
}
