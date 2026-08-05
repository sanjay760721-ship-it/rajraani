import 'server-only';

/**
 * Minimal Storefront API client. Typed codegen replaces the `unknown` generics
 * in Sprint 1 (build.md §5); this exists so Sprint 0 can prove connectivity and
 * so caching policy is decided once, here, rather than per call site.
 */
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const version = process.env.SHOPIFY_API_VERSION ?? '2025-07';

export interface ShopifyFetchOptions {
  query: string;
  variables?: Record<string, unknown>;
  /** ISR window in seconds. PDP 300s, PLP 60s — build.md §3. */
  revalidate?: number;
  tags?: string[];
}

export async function shopifyFetch<T>({
  query,
  variables,
  revalidate = 60,
  tags = [],
}: ShopifyFetchOptions): Promise<T> {
  if (!domain || !token) {
    throw new Error(
      'Shopify credentials missing. Copy .env.example to .env.local and fill SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN.'
    );
  }

  const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags },
  });

  if (!res.ok) throw new Error(`Shopify ${res.status}: ${await res.text()}`);

  const json = (await res.json()) as { data?: T; errors?: Array<{ message: string }> };
  if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join('; '));
  if (!json.data) throw new Error('Shopify returned no data');
  return json.data;
}
