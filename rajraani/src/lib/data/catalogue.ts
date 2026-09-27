import { existsSync } from "node:fs";
import path from "node:path";

import type { Product } from "../domain/types.ts";
import {
  HAS_LOCAL_PHOTOGRAPHY,
  withLocalPhotography,
  withLocalPhotographyOne,
} from "./local-photography.ts";
import { MockCatalogueRepository } from "./mock-repository.ts";
import type { CatalogueRepository } from "./repository.ts";
import { SqliteCatalogueRepository } from "./sqlite-repository.ts";

/**
 * Catalogue entry point.
 *
 * Everything in the app reads the catalogue through `catalogue`. Which
 * implementation backs it is a configuration question, answered once, here.
 *
 * The database is used when it exists. It will not on a fresh clone before
 * `npm run db:seed`, and failing the build for that would be hostile — so the
 * fixtures remain as a fallback and the site says so in a banner. That is the
 * difference between "not set up yet" and "broken".
 */

const DB_PATH =
  process.env.DATABASE_PATH ?? path.join(process.cwd(), "data", "rajraani.db");

const hasDatabase = existsSync(DB_PATH);

/**
 * Wraps a repository so staged local photography reaches the pages.
 *
 * Applied here rather than inside either implementation, so both get it from
 * one place and neither knows about it — the seam absorbing a change again,
 * which is the third time it has (see repository.ts). It is a pass-through when
 * nothing is staged, which is the case on every clone and in CI.
 *
 * Deliberately NOT applied to the committed fixtures themselves: those must
 * keep `src` absent for the originality guard in catalogue.test.ts to mean
 * anything. See local-photography.ts.
 */
function withPhotography(inner: CatalogueRepository): CatalogueRepository {
  if (!HAS_LOCAL_PHOTOGRAPHY) return inner;

  return {
    listProducts: async () => photographed(await inner.listProducts()),
    getProduct: async (handle) =>
      onlyIfPhotographed(withLocalPhotographyOne(await inner.getProduct(handle))),
    productsInCollection: async (collection) =>
      photographed(await inner.productsInCollection(collection)),
    listCollections: () => inner.listCollections(),
    getCollection: (handle) => inner.getCollection(handle),
    getCampaign: (slug) => inner.getCampaign(slug),
  };
}

/** A product is shoppable once at least one of its frames has a photograph. */
function hasPhotograph(product: Product): boolean {
  return product.images.some((image) => Boolean(image.src));
}

/**
 * Overlay the staged photography, then drop what it did not reach.
 *
 * Once *any* photography is staged, a product still on placeholder colour
 * fields reads as a broken tile next to a real one rather than as pending — so
 * it leaves the grid entirely, and the facet counts, which are computed from
 * this same list, follow it out. With nothing staged the whole site is
 * schematic on purpose and this wrapper is never installed at all.
 */
function photographed(products: readonly Product[]): readonly Product[] {
  return withLocalPhotography(products).filter(hasPhotograph);
}

/** The same rule for one product: an unphotographed handle is a 404. */
function onlyIfPhotographed(product: Product | undefined): Product | undefined {
  return product && hasPhotograph(product) ? product : undefined;
}

/**
 * A piece with real photographs shows only those.
 *
 * Photos are added one at a time in the admin, into planned slots. Until every
 * slot is filled, the rest would render as blank colour frames beside real
 * photographs — which reads as broken. Pieces with no real photos at all keep
 * their placeholder frames, exactly as before.
 */
function realPhotosOnly(product: Product): Product {
  if (!product.images.some((image) => image.src)) return product;
  return { ...product, images: product.images.filter((image) => image.src) };
}

function withRealPhotosOnly(inner: CatalogueRepository): CatalogueRepository {
  return {
    listProducts: async () => (await inner.listProducts()).map(realPhotosOnly),
    getProduct: async (handle) => {
      const product = await inner.getProduct(handle);
      return product && realPhotosOnly(product);
    },
    productsInCollection: async (collection) =>
      (await inner.productsInCollection(collection)).map(realPhotosOnly),
    listCollections: () => inner.listCollections(),
    getCollection: (handle) => inner.getCollection(handle),
    getCampaign: (slug) => inner.getCampaign(slug),
  };
}

function createCatalogue(): CatalogueRepository {
  return withRealPhotosOnly(
    withPhotography(
      hasDatabase ? new SqliteCatalogueRepository() : new MockCatalogueRepository(),
    ),
  );
}

export const catalogue: CatalogueRepository = createCatalogue();

/** True when the pages are showing staged local photography. */
export { HAS_LOCAL_PHOTOGRAPHY };

/**
 * True when the site is serving fixtures rather than the database.
 *
 * Drives the placeholder banner. Note this reports the *source*, not whether
 * the content is real — the database is currently seeded from those same twelve
 * fixtures, so the banner is separately justified until real products land.
 */
export const IS_FIXTURE_CATALOGUE = !hasDatabase;
