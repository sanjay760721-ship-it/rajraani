#!/usr/bin/env node
/**
 * Redesign progress meter: how much of the reference site's design is still in
 * the storefront.
 *
 * docs/redesign/reference-fingerprint.md (repo root) lists what was measured on
 * the reference site on 27 Sep 2026. Each entry below is one of those
 * fingerprints, as a pattern that finds it in our source. The redesign is done
 * when every count is zero.
 *
 * Report-only by default, so `npm run verify` stays green during the redesign.
 * `--strict` exits 1 while anything remains. It joins `verify` in phase 7.
 *
 * Like check-originality, this only finds what it knows about. Layout
 * structure (the homepage order, the product page anatomy) is checked by the
 * side-by-side screenshots in phase 7, not here.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const strict = process.argv.includes("--strict");
const verbose = process.argv.includes("--verbose");

// The admin has its own design system and is not part of the redesign.
const SKIP = [/^src\/app\/admin\//, /^src\/components\/admin\//, /\.test\.tsx?$/];
const EXT = new Set([".ts", ".tsx", ".css"]);

const FINGERPRINTS = [
  {
    id: "typefaces",
    pattern: /\bcardo\b|open[\s_-]?sans/i,
    what: "Their type pairing: Cardo for display, Open Sans for UI.",
  },
  {
    id: "colours",
    pattern: /#533e2d|#d1ac67|#faf0f0|#fbe9c4|rgb\(\s*83,\s*62,\s*45|rgb\(\s*209,\s*172,\s*103|rgb\(\s*250,\s*240,\s*240|rgb\(\s*251,\s*233,\s*196/i,
    what: "Their ink brown, gold, blush top bar and cream announcement text.",
  },
  {
    id: "measured-values",
    pattern: /measured (on|off|against|at|live)|measured the reference|from reference|reference rail|\b1905px\b|§A5\.2/i,
    what: "Values copied from their pages' computed styles (spacing, sizes, widths).",
  },
  {
    id: "tagline",
    pattern: /Made in Banaras\. Made by/,
    what: "Their top-bar tagline pattern, with our name swapped in.",
  },
  {
    id: "announcement",
    pattern: /Rest assured|Free worldwide shipping above/,
    what: "Their announcement strip wording.",
  },
  {
    id: "stores-heading",
    pattern: /visit our stores/i,
    what: "Their stores slideshow heading, overlaid on the photo.",
  },
  {
    id: "collection-grid",
    pattern: /grid-cols-\[2\d\dpx_1fr\]/,
    what: "Their collection layout: a fixed left filter column beside a 2-up grid.",
  },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else yield path;
  }
}

const found = new Map(FINGERPRINTS.map((f) => [f.id, []]));
for (const path of walk(join(root, "src"))) {
  const rel = relative(root, path).replaceAll("\\", "/");
  if (!EXT.has(extname(path)) || SKIP.some((p) => p.test(rel))) continue;
  readFileSync(path, "utf8").split("\n").forEach((line, i) => {
    for (const f of FINGERPRINTS) if (f.pattern.test(line)) found.get(f.id).push(`${rel}:${i + 1}`);
  });
}

let total = 0;
console.log("Reference-site fingerprints still in the storefront:\n");
for (const f of FINGERPRINTS) {
  const hits = found.get(f.id);
  total += hits.length;
  const files = new Set(hits.map((h) => h.replace(/:\d+$/, ""))).size;
  console.log(`  ${hits.length ? "✗" : "✓"} ${f.id.padEnd(16)} ${String(hits.length).padStart(4)} lines in ${files} files  ${f.what}`);
  if (verbose) for (const h of hits) console.log(`      ${h}`);
}
console.log(`\n${total} lines to go. --verbose lists them.`);
if (strict && total > 0) process.exit(1);
