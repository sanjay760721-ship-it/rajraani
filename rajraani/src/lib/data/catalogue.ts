import { existsSync } from "node:fs";
import path from "node:path";

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

function createCatalogue(): CatalogueRepository {
  return hasDatabase ? new SqliteCatalogueRepository() : new MockCatalogueRepository();
}

export const catalogue: CatalogueRepository = createCatalogue();

/**
 * True when the site is serving fixtures rather than the database.
 *
 * Drives the placeholder banner. Note this reports the *source*, not whether
 * the content is real — the database is currently seeded from those same twelve
 * fixtures, so the banner is separately justified until real products land.
 */
export const IS_FIXTURE_CATALOGUE = !hasDatabase;
