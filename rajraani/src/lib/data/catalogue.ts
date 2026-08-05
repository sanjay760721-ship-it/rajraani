/**
 * Catalogue entry point.
 *
 * Everything in the app reads the catalogue through `catalogue`. Which
 * implementation backs it is a configuration question, answered once, here.
 */

import { MockCatalogueRepository } from "./mock-repository.ts";
import type { CatalogueRepository } from "./repository.ts";
import {
  ShopifyCatalogueRepository,
  readShopifyConfig,
} from "./shopify-repository.ts";

function createCatalogue(): CatalogueRepository {
  const config = readShopifyConfig();
  return config
    ? new ShopifyCatalogueRepository(config)
    : new MockCatalogueRepository();
}

export const catalogue: CatalogueRepository = createCatalogue();

/** True when the site is serving seed data rather than a real store. */
export const IS_MOCK_CATALOGUE = readShopifyConfig() === undefined;
