#!/usr/bin/env node
/**
 * Originality and house-rule gate.
 *
 * build.md §6 "Originality — must pass to ship": no competitor imagery,
 * product copy or campaign names anywhere in the build, INCLUDING Storybook
 * fixtures and seed data. That is an acceptance criterion, not a guideline, so
 * it is a CI gate rather than a code-review habit. Fixtures are exactly where
 * this leaks — someone grabs a real product name to make a story look
 * convincing, and it ships.
 *
 * Each rule carries a `why`, so a failure explains itself instead of reading as
 * an arbitrary banned-word list.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "out",
  ".vercel",
  ".claude",
]);

const SCAN_EXT = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".json", ".css", ".md", ".mdx", ".html", ".yml", ".yaml",
]);

const RULES = [
  {
    id: "competitor-name",
    pattern: /\btilfi\b/i,
    why:
      "The competitor brand name. The Shopify metafield namespace is `rajraani` " +
      "(src/lib/brand.ts) — build.md §2.1 was written against the reference site " +
      "and its namespace must not be copied along with the structure.",
  },
  {
    id: "competitor-domain",
    pattern: /tilfi\.com|cdn\.shopify\.com\/s\/files\/[^\s"']*tilfi/i,
    why: "A competitor URL or asset path. No borrowed imagery, ever — including in fixtures.",
  },
  {
    id: "competitor-campaigns",
    // The confirmed campaign pairs measured in pre-build-gaps.md §4.
    pattern:
      /\b(antinomy|of-threads-and-time|the-way-of-flowers|quarter-to-time|the-art-of-gifting|songs-of-the-season|a-quiet-interlude|a-motley-crew|echoes-in-silk)\b/i,
    why:
      "A competitor campaign name. Campaign names are the most tempting thing to " +
      "copy and the most obviously theirs.",
  },
  {
    id: "fulfilment-in-title",
    pattern: /['"`]\s*(Pre-Order|Pre Order|Made to Order|Ready to Ship)\s*:/i,
    why:
      "Fulfilment state prefixed to a title string. pre-build-gaps.md §3: the " +
      "reference site did this to 463 products and it leaked into breadcrumbs, " +
      "og:title, cart lines and JSON-LD, recoverable only by editing 463 titles. " +
      "Use the `fulfilmentMode` field and badge it in the template.",
    // Code and seed data only. Comments documenting the rule have to quote the
    // thing they forbid, so they are exempt — this gate exists to catch the
    // string reaching a product, not to police the explanation of why it must
    // not.
    only: [".ts", ".tsx", ".js", ".jsx"],
    skipComments: true,
  },
  {
    /*
     * Declaration rules read the VALUE rather than lookahead past the colon.
     * `/box-shadow\s*:\s*(?!none)/` looks correct and is not: `\s*` backtracks
     * to zero-width, the lookahead then sees a space instead of `none`, and
     * `box-shadow: none` matches its own exemption.
     */
    id: "shadow",
    declaration: /box-shadow\s*:\s*([^;]+)/i,
    allow: (value) => /^none$/i.test(value.trim()),
    // Style declarations only. Prose explaining the rule has to quote it.
    only: [".css", ".ts", ".tsx", ".js", ".jsx"],
    why:
      "Elevation is rules and space, not shadows (build.md §2.5). The reference " +
      "site carries 5 box-shadows on an entire page and all 5 are third-party " +
      "widgets. Separate with a border or with space.",
  },
  {
    id: "border-radius",
    declaration: /border-radius\s*:\s*([^;]+)/i,
    allow: (value) => /^(0(px|rem|%)?|var\(--radius-none\))$/i.test(value.trim()),
    only: [".css", ".ts", ".tsx", ".js", ".jsx"],
    why:
      "Square corners, no exceptions (build.md §2.5 Elevation). 891 of 900 " +
      "sampled elements in this category measure `border-radius: 0`.",
  },
  {
    id: "hardcoded-hex",
    pattern: /(?<![\w-])#[0-9a-fA-F]{6}(?![0-9a-fA-F])/,
    why:
      "A literal colour outside the token pipeline. Palette values live in " +
      "src/app/globals.css and are mirrored for verification in " +
      "src/lib/tokens/contrast.ts; catalogue swatches live in taxonomy/facets.json.",
    only: [".tsx", ".jsx", ".ts"],
    exempt: [
      // The token definition and its contrast proof necessarily hold hexes.
      /^src\/lib\/tokens\/contrast\.ts$/,
      /^src\/lib\/tokens\/contrast\.test\.ts$/,
    ],
  },
];

/** Line-granularity comment detection — enough for the rules that need it. */
function isComment(line) {
  return /^\s*(\/\/|\/\*|\*)/.test(line);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (SCAN_EXT.has(extname(entry))) out.push(full);
  }
  return out;
}

// This file names the banned terms by necessity.
const SELF = new Set(["scripts/check-originality.mjs"]);

/**
 * Generated artefacts are skipped entirely.
 *
 * They are byte-for-byte derivations of a source that is itself reviewed and
 * gated (taxonomy/facets.json, via `npm run taxonomy:check`). Linting the
 * derivative only produces findings you cannot act on there — the swatch hexes
 * and the note quoting "Pre-Order:" both belong in the vocabulary.
 */
const GENERATED = [/\.generated\.ts$/];

const failures = [];
let scanned = 0;

for (const file of walk(root)) {
  const rel = relative(root, file).replace(/\\/g, "/");
  if (SELF.has(rel)) continue;
  if (GENERATED.some((pattern) => pattern.test(rel))) continue;
  scanned += 1;

  const lines = readFileSync(file, "utf8").split("\n");

  for (const rule of RULES) {
    if (rule.only && !rule.only.includes(extname(file))) continue;
    if (rule.exempt?.some((pattern) => pattern.test(rel))) continue;

    lines.forEach((line, index) => {
      if (rule.skipComments && isComment(line)) return;

      if (rule.declaration) {
        const match = rule.declaration.exec(line);
        if (match && match[1] && !rule.allow(match[1])) {
          failures.push({ rule, rel, line: index + 1, text: line.trim().slice(0, 120) });
        }
        return;
      }

      if (rule.pattern.test(line)) {
        failures.push({ rule, rel, line: index + 1, text: line.trim().slice(0, 120) });
      }
    });
  }
}

console.log(`\nRajraani — originality & house-rule gate`);
console.log(`  ${scanned} files scanned · ${RULES.length} rules\n`);

if (failures.length > 0) {
  const byRule = new Map();
  for (const failure of failures) {
    if (!byRule.has(failure.rule.id)) {
      byRule.set(failure.rule.id, { why: failure.rule.why, hits: [] });
    }
    byRule.get(failure.rule.id).hits.push(failure);
  }

  for (const [id, { why, hits }] of byRule) {
    console.error(`✗ ${id} — ${hits.length} hit(s)`);
    console.error(`  ${why}`);
    for (const hit of hits.slice(0, 10)) {
      console.error(`    ${hit.rel}:${hit.line}  ${hit.text}`);
    }
    if (hits.length > 10) console.error(`    …and ${hits.length - 10} more`);
    console.error();
  }
  process.exit(1);
}

console.log(
  "✓ No competitor references, no fulfilment state in titles, no shadows, no radius, no stray hexes.\n",
);
