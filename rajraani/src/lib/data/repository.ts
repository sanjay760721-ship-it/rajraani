/**
 * The catalogue seam.
 *
 * Pages depend on this interface and never on a Storefront API response shape.
 * That is what makes "no Shopify credentials yet" a configuration state rather
 * than a blocker: the mock repository serves fixtures today, the Shopify
 * adapter serves the real store when the store exists, and no page changes.
 */

import type { Campaign, Collection, Product } from "../domain/types.ts";

export interface CatalogueRepository {
  listProducts(): Promise<readonly Product[]>;
  getProduct(handle: string): Promise<Product | undefined>;
  listCollections(): Promise<readonly Collection[]>;
  getCollection(handle: string): Promise<Collection | undefined>;
  /** Resolves a collection to its products — by facet or by authored list. */
  productsInCollection(collection: Collection): Promise<readonly Product[]>;
  getCampaign(slug: string): Promise<Campaign | undefined>;
}
