/**
 * Shopify Storefront API adapter — NOT YET IMPLEMENTED.
 *
 * The seam exists and the mapping is specified; the implementation waits on a
 * dev store. When one exists, this file writes the queries and maps responses
 * onto the domain types — transport, auth, error handling and caching are
 * already solved in `shopify/client.ts`, and nothing above this file changes.
 *
 * Mapping contract, from build.md §2.1 (namespace `BRAND.namespace`):
 *
 *   product.handle                → Product.handle
 *   product.title                 → Product.title       (no fulfilment state, §9.8)
 *   variants[0].sku               → Product.sku
 *   variants[0].price             → Product.price       (base currency; Markets converts)
 *   variants[0].quantityAvailable → Product.inventoryQuantity
 *   metafield poetic_name         → Product.poeticName
 *   metafield dispatch_lead_days  → Product.dispatchLeadDays
 *   metafield fulfilment_mode     → Product.fulfilmentMode
 *   metafield spec_*              → Product.spec.*
 *   metaobject weave/fabric/…     → the facet slug fields
 *   images[].altText              → ProductImage.alt    (required, §9.9)
 *
 * Two things this adapter must NOT do, both learned from the sweep:
 *
 * - Read facets from product tags. Tags stay for merchandiser collection rules
 *   only; the vocabulary lives in metaobjects (build.md §2.1).
 * - Advertise srcset widths the master cannot supply (§9.3). The ladder is
 *   generated from actual master dimensions, which is why ProductImage carries
 *   width and height rather than a bare URL.
 */

import type { Campaign, Collection, Product } from "../domain/types.ts";
import type { CatalogueRepository } from "./repository.ts";

export type ShopifyConfig = {
  storeDomain: string;
  storefrontAccessToken: string;
  apiVersion: string;
};

export function readShopifyConfig(
  env: Record<string, string | undefined> = process.env,
): ShopifyConfig | undefined {
  const storeDomain = env.SHOPIFY_STORE_DOMAIN;
  const storefrontAccessToken = env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!storeDomain || !storefrontAccessToken) return undefined;
  return {
    storeDomain,
    storefrontAccessToken,
    apiVersion: env.SHOPIFY_API_VERSION ?? "2026-01",
  };
}

const NOT_IMPLEMENTED =
  "The Shopify adapter is not implemented yet. Remove SHOPIFY_STORE_DOMAIN from " +
  ".env.local to fall back to the fixture catalogue, or implement " +
  "src/lib/data/shopify-repository.ts against a dev store.";

export class ShopifyCatalogueRepository implements CatalogueRepository {
  constructor(private readonly config: ShopifyConfig) {}

  async listProducts(): Promise<readonly Product[]> {
    throw new Error(NOT_IMPLEMENTED);
  }

  async getProduct(): Promise<Product | undefined> {
    throw new Error(NOT_IMPLEMENTED);
  }

  async listCollections(): Promise<readonly Collection[]> {
    throw new Error(NOT_IMPLEMENTED);
  }

  async getCollection(): Promise<Collection | undefined> {
    throw new Error(NOT_IMPLEMENTED);
  }

  async productsInCollection(): Promise<readonly Product[]> {
    throw new Error(NOT_IMPLEMENTED);
  }

  async getCampaign(): Promise<Campaign | undefined> {
    throw new Error(NOT_IMPLEMENTED);
  }
}
