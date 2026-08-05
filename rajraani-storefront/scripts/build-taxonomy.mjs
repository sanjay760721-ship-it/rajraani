#!/usr/bin/env node
/**
 * Generates src/lib/domain/facets.generated.ts from taxonomy/facets.json.
 *
 * Why generate rather than import the JSON directly: the vocabulary is read by
 * client components (the facet sidebar), so it has to be bundled — but Node's
 * ESM loader requires an import attribute for JSON that the bundler does not,
 * so a bare `import facets from "…json"` works in one and fails in the other.
 * Generating sidesteps that entirely and keeps the JSON the reviewable source
 * of truth.
 *
 *   taxonomy/facets.json  →  src/lib/domain/facets.generated.ts
 *
 * Run `npm run taxonomy` after editing the JSON. `npm run taxonomy:check`
 * fails if the two have drifted, so they cannot silently diverge.
 *
 * Usage: node scripts/build-taxonomy.mjs [--check]
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(root, "taxonomy", "facets.json");
const TARGET = join(root, "src", "lib", "domain", "facets.generated.ts");

const facets = JSON.parse(readFileSync(SOURCE, "utf8"));

const header = `// GENERATED FILE — DO NOT EDIT.
// Source: taxonomy/facets.json
// Regenerate: npm run taxonomy
//
// The JSON is the source of truth and the reviewable artefact; this module
// exists so the vocabulary can be bundled into client components. See
// taxonomy/REVIEW.md for the 11 decisions still open.

export type RawFacetValue = {
  canonical: string;
  label: string;
  hex?: string | null;
  aliases?: string[];
  definition?: string;
  review?: boolean;
  decision?: string;
  source?: string;
};

export type RawFacetGroup = {
  label?: string;
  note?: string;
  metaobject?: string;
  metafield?: string;
  derived?: boolean;
  computed?: boolean;
  multiSelect?: boolean;
  values?: RawFacetValue[];
};

export const FACETS: Record<string, RawFacetGroup> = `;

// $meta is documentation for humans and input for the taxonomy validator; it
// is not needed at runtime and would only bloat the client bundle.
const groups = Object.fromEntries(
  Object.entries(facets).filter(([key]) => !key.startsWith("$")),
);

const output = `${header}${JSON.stringify(groups, null, 2)};\n`;

if (process.argv.includes("--check")) {
  let current = "";
  try {
    current = readFileSync(TARGET, "utf8");
  } catch {
    console.error(
      "✗ src/lib/domain/facets.generated.ts is missing. Run `npm run taxonomy`.",
    );
    process.exit(1);
  }
  if (current !== output) {
    console.error(
      "✗ facets.generated.ts has drifted from taxonomy/facets.json.\n" +
        "  Run `npm run taxonomy` and commit the result.",
    );
    process.exit(1);
  }
  const count = Object.values(groups).reduce(
    (total, group) => total + (group.values?.length ?? 0),
    0,
  );
  console.log(`✓ Taxonomy in sync — ${Object.keys(groups).length} facets, ${count} values.`);
  process.exit(0);
}

writeFileSync(TARGET, output, "utf8");
console.log(`✓ Wrote src/lib/domain/facets.generated.ts`);
