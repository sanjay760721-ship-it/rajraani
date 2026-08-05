/**
 * The catalogue seam.
 *
 * Pages depend on this interface and never on a concrete data source. That seam
 * has now paid for itself twice: it absorbed the switch from fixtures to a
 * database, and before that the removal of an entire Shopify integration,
 * without a single page changing.
 *
 * Implementations: `SqliteCatalogueRepository` (live) and
 * `MockCatalogueRepository` (fixtures, used before the database is seeded).
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
