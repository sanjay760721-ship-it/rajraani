#!/usr/bin/env node
/**
 * build.md §6 "Originality — must pass to ship":
 *   no competitor imagery, product copy, or campaign names anywhere in the build,
 *   INCLUDING Storybook fixtures and seed data.
 *
 * That is an acceptance criterion, not a guideline, so it is a CI gate rather
 * than a code-review habit. Fixtures are exactly where this leaks — someone
 * grabs a real product name to make a story look convincing and it ships.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, extname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'out', '.vercel']);
const SCAN_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css', '.md', '.mdx', '.html', '.yml', '.yaml']);

/**
 * Each rule carries a `why` so a failure explains itself instead of looking like
 * an arbitrary banned-word list.
 */
const RULES = [
  {
    id: 'competitor-name',
    pattern: /\btilfi\b/i,
    why: 'The competitor brand name. The namespace is `rajraani` (lib/brand.ts) — build.md §2.1 was written against the reference site and its `tilfi` metafield namespace must not be copied.',
  },
  {
    id: 'competitor-domain',
    pattern: /tilfi\.com|cdn\.shopify\.com\/s\/files\/[^\s"']*tilfi/i,
    why: 'A competitor URL or asset path. No borrowed imagery, ever — including in fixtures.',
  },
  {
    id: 'competitor-campaigns',
    // The nine confirmed campaign pairs measured in pre-build-gaps.md §4.
    pattern: /\b(antinomy|of-threads-and-time|the-way-of-flowers|quarter-to-time|the-art-of-gifting|songs-of-the-season|a-quiet-interlude|a-motley-crew|echoes-in-silk)\b/i,
    why: 'A competitor campaign name. Campaign names are the most tempting thing to copy and the most obviously theirs.',
  },
  {
    id: 'fulfilment-in-title',
    pattern: /['"`]\s*(Pre-Order|Pre Order|Made to Order)\s*:/i,
    why: 'Fulfilment state prefixed to a title string. pre-build-gaps.md §3: the reference site did this to 463 products and it leaked into breadcrumbs, og:title, cart lines and JSON-LD. Use the `fulfilment_mode` metafield and badge in the template.',
    // Code and seed data only. Prose that *documents* the rule necessarily quotes it.
    only: ['.ts', '.tsx', '.js', '.jsx'],
  },
  {
    id: 'shadow',
    pattern: /box-shadow\s*:\s*(?!none)(?![^;]*var\(--rj-focus)/i,
    why: 'Elevation is rules and space, not shadows (tokens.json §elevation). Use --rj-border-bounded / --rj-border-raised.',
  },
  {
    id: 'hardcoded-hex',
    pattern: /(?<![\w-])#[0-9a-fA-F]{6}(?![0-9a-fA-F])/,
    why: 'A literal colour outside the token pipeline. Colours live in design/tokens.json and reach code as --rj-* custom properties.',
    only: ['.tsx', '.jsx', '.ts', '.css'],
    exempt: [/^design\/tokens\.css$/, /^app\/globals\.css$/],
  },
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (SCAN_EXT.has(extname(entry))) out.push(full);
  }
  return out;
}

const SELF = new Set(['scripts/check-originality.mjs']);
const failures = [];
let scanned = 0;

for (const file of walk(root)) {
  const rel = relative(root, file).replace(/\\/g, '/');
  if (SELF.has(rel)) continue; // this file names the banned terms by necessity
  scanned++;
  const lines = readFileSync(file, 'utf8').split('\n');

  for (const rule of RULES) {
    if (rule.only && !rule.only.includes(extname(file))) continue;
    if (rule.exempt?.some((re) => re.test(rel))) continue;
    lines.forEach((line, i) => {
      if (rule.pattern.test(line)) {
        failures.push({ rule, rel, line: i + 1, text: line.trim().slice(0, 120) });
      }
    });
  }
}

console.log(`\nRajraani — originality & house-rule gate\n`);
console.log(`  ${scanned} files scanned · ${RULES.length} rules\n`);

if (failures.length) {
  const byRule = new Map();
  for (const f of failures) {
    if (!byRule.has(f.rule.id)) byRule.set(f.rule.id, { why: f.rule.why, hits: [] });
    byRule.get(f.rule.id).hits.push(f);
  }
  for (const [id, { why, hits }] of byRule) {
    console.error(`✗ ${id} — ${hits.length} hit(s)`);
    console.error(`  ${why}`);
    for (const h of hits.slice(0, 10)) console.error(`    ${h.rel}:${h.line}  ${h.text}`);
    if (hits.length > 10) console.error(`    …and ${hits.length - 10} more`);
    console.error();
  }
  process.exit(1);
}

console.log(`✓ No competitor references, no fulfilment state in titles, no shadows, no stray hexes.\n`);
