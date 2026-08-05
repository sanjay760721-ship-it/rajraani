import "server-only";

/**
 * Storefront API transport.
 *
 * Ported from the parallel Sprint 0 build. Two reasons it earns its place even
 * though there is no store yet:
 *
 * 1. **Caching policy is decided once, here**, rather than drifting across call
 *    sites. build.md §3 sets the ISR windows — PDP 300s, PLP and homepage 60s —
 *    and a `revalidate` argument at every call site is how those become three
 *    different numbers within a sprint.
 * 2. It draws the line between transport and mapping. When the dev store
 *    exists, `shopify-repository.ts` writes queries and maps responses onto the
 *    domain types; none of it re-solves auth, error handling or caching.
 *
 * `server-only` is a real guard, not decoration: this module reads a Storefront
 * access token, and importing it into a client component must fail the build
 * rather than ship the token to a browser.
 *
 * Typed codegen replaces the `T` generic in Sprint 1 (build.md §5).
 */

import { readShopifyConfig } from "../shopify-repository.ts";

/** ISR windows from build.md §3, named so call sites cannot invent their own. */
export const REVALIDATE = {
  /** Product detail — build.md §3. */
  product: 300,
  /** Collections and homepage — build.md §3. */
  collection: 60,
  /** Editorial pages: static, revalidated on demand by a CMS webhook. */
  editorial: 3600,
} as const;

export type ShopifyFetchOptions = {
  query: string;
  variables?: Record<string, unknown>;
  /** Seconds. Use a REVALIDATE member rather than a literal. */
  revalidate?: number;
  /** Cache tags, for on-demand revalidation from a webhook. */
  tags?: string[];
};

export async function shopifyFetch<T>({
  query,
  variables,
  revalidate = REVALIDATE.collection,
  tags = [],
}: ShopifyFetchOptions): Promise<T> {
  const config = readShopifyConfig();
  if (!config) {
    throw new Error(
      "Shopify credentials missing. Copy .env.example to .env.local and fill " +
        "SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN. " +
        "With them unset the app serves the fixture catalogue instead.",
    );
  }

  const response = await fetch(
    `https://${config.storeDomain}/api/${config.apiVersion}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": config.storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate, tags },
    },
  );

  if (!response.ok) {
    throw new Error(`Shopify ${response.status}: ${await response.text()}`);
  }

  const payload = (await response.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  // GraphQL reports errors with a 200, so this is not redundant with !ok.
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }
  if (!payload.data) throw new Error("Shopify returned no data");

  return payload.data;
}
