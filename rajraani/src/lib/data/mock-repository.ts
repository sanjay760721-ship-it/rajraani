/**
 * Fixture-backed catalogue.
 *
 * Serves the seed data in fixtures.ts through the same interface the database
 * repository implements. Used only before `npm run db:seed` has run.
 *
 * Async throughout, deliberately — a synchronous mock lets pages accidentally
 * depend on data being available during render, and that assumption breaks the
 * day a real data source arrives. It did.
 */

import { filterProducts } from "../facets/engine.ts";
import type { Campaign, Collection, Product } from "../domain/types.ts";
import type { CatalogueRepository } from "./repository.ts";
import { CAMPAIGNS, COLLECTIONS, PRODUCTS } from "./fixtures.ts";

export class MockCatalogueRepository implements CatalogueRepository {
  async listProducts(): Promise<readonly Product[]> {
    return PRODUCTS;
  }

  async getProduct(handle: string): Promise<Product | undefined> {
    return PRODUCTS.find((product) => product.handle === handle);
  }

  async listCollections(): Promise<readonly Collection[]> {
    return COLLECTIONS;
  }

  async getCollection(handle: string): Promise<Collection | undefined> {
    return COLLECTIONS.find((collection) => collection.handle === handle);
  }

  async productsInCollection(
    collection: Collection,
  ): Promise<readonly Product[]> {
    if (collection.kind === "facet") {
      // A facet collection is a saved view, not a stored list — so it can never
      // drift out of sync with the catalogue behind it (build.md §9.5).
      return filterProducts(PRODUCTS, collection.facets);
    }
    // A campaign or an edit is authored, and order is editorial.
    return collection.productHandles
      .map((handle) => PRODUCTS.find((product) => product.handle === handle))
      .filter((product): product is Product => product !== undefined);
  }

  async getCampaign(slug: string): Promise<Campaign | undefined> {
    return CAMPAIGNS.find((campaign) => campaign.slug === slug);
  }
}
