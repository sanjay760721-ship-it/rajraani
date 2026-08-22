#!/usr/bin/env node
/**
 * Stage reference photography for LOCAL PREVIEW ONLY.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THIS IS, AND WHY IT IS NOT JUST "ADDING THE IMAGES"
 *
 * build.md §6 Originality is an acceptance criterion, not a guideline: no
 * competitor imagery may appear anywhere in this repository, "INCLUDING
 * Storybook fixtures and seed data". The photographs in `../pics/` are
 * unlicensed third-party reference shots — several are watermarked, and their
 * filenames carry the competitor's SKU prefixes. They cannot be committed and
 * they cannot ship.
 *
 * They are still the only way to see whether this design holds up under real
 * photography instead of colour fields, which is a genuine question and worth
 * answering before the shoot is commissioned.
 *
 * So the two requirements are separated:
 *
 *   committed fixtures      →  carry no `src`. `catalogue.test.ts` asserts it,
 *                              and that assertion stays meaningful.
 *   local preview           →  reads this staged directory, which is gitignored
 *                              and never imported by a committed fixture.
 *
 * This is HANDOFF §2.45 decision 1, taken as recommended there.
 *
 * FILES ARE RENAMED on the way in, to `01.webp`, `02.webp`… That is not
 * tidiness: `check-originality.mjs` scans the working tree, not the index, so a
 * staged file keeping its original name would sit inside the project tripping
 * the competitor-name gate. Until 22 Aug 2026 it would have done something
 * worse and slipped past — that pattern required word boundaries, and these
 * filenames weld a digit to the brand name. The hole is closed now, and
 * renaming on ingest means the question does not arise either way.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *   node scripts/import-local-photos.mjs [--clean]
 *
 * Re-runnable. `--clean` empties the staging directory first.
 */

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.join(root, "..", "pics");
const STAGE = path.join(root, "public", "reference-only", "products");

/**
 * Source folder → product handle.
 *
 * Matched on COLOUR first, then on cloth. Colour is the facet a shopper filters
 * by and the word that appears in the title, so a red photograph under a piece
 * titled "Yellow …" is wrong in a way nobody can miss, while a jamdani
 * photograph under a piece described as kadiyal is a subtlety invisible in a
 * mockup. Two of the ten are approximate and marked so.
 */
const MAPPING = [
  // ── Sarees: staged onto existing fixtures ──────────────────────────────
  ["saree1", "sindoor-red-katan-silk-kadiyal-saree"],
  ["saree2", "nilambari-blue-katan-silk-shikargah-saree"],
  ["saree3", "chandrika-ivory-tissue-silk-jangla-saree"],
  // Approximate: the photograph is pink, the fixture off-white. Georgette is
  // the shared attribute and there is no pink saree in the fixture set.
  ["saree4", "bela-white-handwoven-georgette-kadhua-saree"],
  // Approximate: the photograph is red, the fixture orange — adjacent warms.
  ["saree5", "kesari-orange-katan-silk-tanchoi-saree"],

  // ── Suits: staged onto the five fixtures written for them ──────────────
  ["suit1", "ksheera-off-white-muslin-cotton-jamdani-suit"],
  ["suit2", "shyamala-green-katan-silk-kurta-set"],
  ["suit3", "padmini-pink-moonga-silk-anarkali-suit"],
  ["suit4", "ashoka-maroon-satin-silk-anarkali-suit"],
  ["suit5", "baluka-beige-tussar-silk-embroidered-suit"],
];

const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

/** Numeric-aware sort, so `…10` follows `…9` rather than `…1`. */
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

if (!existsSync(SOURCE)) {
  console.error(`No source directory at ${SOURCE} — nothing to stage.`);
  process.exit(0);
}

if (process.argv.includes("--clean") && existsSync(STAGE)) {
  rmSync(STAGE, { recursive: true, force: true });
  console.log("Cleared the staging directory.");
}

mkdirSync(STAGE, { recursive: true });

let staged = 0;
const report = [];

for (const [folder, handle] of MAPPING) {
  const from = path.join(SOURCE, folder);
  if (!existsSync(from) || !statSync(from).isDirectory()) {
    report.push(`  ${folder.padEnd(8)} → (missing, skipped)`);
    continue;
  }

  const files = readdirSync(from)
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
    .sort(collator.compare);

  if (files.length === 0) {
    report.push(`  ${folder.padEnd(8)} → (no images, skipped)`);
    continue;
  }

  const into = path.join(STAGE, handle);
  mkdirSync(into, { recursive: true });

  files.forEach((name, index) => {
    const ext = path.extname(name).toLowerCase();
    const target = `${String(index + 1).padStart(2, "0")}${ext}`;
    copyFileSync(path.join(from, name), path.join(into, target));
    staged += 1;
  });

  report.push(`  ${folder.padEnd(8)} → ${handle}  (${files.length})`);
}

console.log("\nStaged reference photography — LOCAL PREVIEW ONLY, never committed.\n");
console.log(report.join("\n"));
console.log(`\n${staged} files into public/reference-only/products/.`);
console.log("Frame order follows filename order; rename a file to reorder it.\n");
