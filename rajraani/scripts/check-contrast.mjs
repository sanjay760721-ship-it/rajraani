#!/usr/bin/env node
/**
 * Verifies every pair declared in design/tokens.json → contrastPairs.
 *
 * Runs in CI. A near-white scheme is the standard failure mode in this category
 * (build.md §2.5), so contrast is verified at token-definition time, not at audit
 * time. Adding a colour without declaring its pair is also a failure.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(readFileSync(join(root, 'design/tokens.json'), 'utf8'));

/** #rrggbb → [r,g,b] 0–255 */
function parseHex(hex) {
  const h = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`Not a 6-digit hex: ${hex}`);
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

/** WCAG 2.x relative luminance */
function luminance(hex) {
  const [r, g, b] = parseHex(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(fg, bg) {
  const a = luminance(fg);
  const b = luminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

/** "ink.muted" → tokens.colour.ink.muted.value */
function resolve(path) {
  const node = path.split('.').reduce((acc, k) => {
    if (acc == null || !(k in acc)) throw new Error(`Unknown colour token: ${path}`);
    return acc[k];
  }, tokens.colour);
  if (typeof node?.value !== 'string') throw new Error(`Token is not a colour leaf: ${path}`);
  return node.value;
}

/** Every colour leaf in tokens.colour, as dotted paths. */
function allColourPaths(node = tokens.colour, prefix = []) {
  const out = [];
  for (const [key, val] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    if (val && typeof val === 'object') {
      if (typeof val.value === 'string') out.push([...prefix, key].join('.'));
      else out.push(...allColourPaths(val, [...prefix, key]));
    }
  }
  return out;
}

const pairs = tokens.contrastPairs.pairs;
const rows = [];
let failed = 0;

for (const { fg, bg, min, context } of pairs) {
  const ratio = contrast(resolve(fg), resolve(bg));
  const pass = ratio >= min;
  if (!pass) failed++;
  rows.push({ pass, fg, bg, min, ratio, context });
}

// Coverage: any colour token never named in a pair is flagged. Some are
// legitimately exempt — they are declared here, with a reason, on purpose.
const EXEMPT = {
  'ink.disabled': 'Disabled control text. WCAG 1.4.3 exempts disabled controls; never carries meaning alone.',
  'rule.hairline': 'Decorative separator. Not a UI component boundary that conveys state — rule.strong is.',
  'rule.inverse': 'Decorative separator on inverse ground.',
  'accent.lacQuiet': 'Background only; covered as a bg in the ink.primary pair.',
  'state.success': 'Covered on bg.page; not used on other grounds.',
  'bg.sunk': 'Background only; covered as a bg in three pairs.',
  'bg.inverse': 'Background only; covered as a bg in two pairs.',
  'bg.page': 'Background only.',
  'bg.surface': 'Background only.',
  'accent.lacHover': 'Covered as a bg in the ink.onAccent pair.',
  'ink.onAccent': 'Covered as an fg in two pairs.',
  'ink.inverse': 'Covered as an fg in one pair.',
  'focus.ringInverse': 'Covered as an fg in one pair.',
};

const named = new Set(pairs.flatMap((p) => [p.fg, p.bg]));
const uncovered = allColourPaths().filter((p) => !named.has(p) && !(p in EXEMPT));

const w = (s, n) => String(s).padEnd(n);
console.log(`\nRajraani — token contrast verification (WCAG 2.2)\n`);
console.log(`${w('', 2)}${w('foreground', 20)}${w('background', 20)}${w('min', 6)}${w('actual', 8)}context`);
console.log('-'.repeat(96));
for (const r of rows) {
  console.log(
    `${w(r.pass ? '✓' : '✗', 2)}${w(r.fg, 20)}${w(r.bg, 20)}${w(r.min.toFixed(1), 6)}${w(r.ratio.toFixed(2), 8)}${r.context}`
  );
}
console.log('-'.repeat(96));
console.log(`${rows.length - failed}/${rows.length} pairs pass.`);

if (uncovered.length) {
  console.error(`\n✗ Colour tokens with no declared contrast pair and no exemption:`);
  for (const p of uncovered) console.error(`    colour.${p}`);
  console.error(`  Add a pair to contrastPairs, or an entry to EXEMPT in this script with a reason.`);
}

if (failed || uncovered.length) {
  console.error(`\nFAILED — ${failed} pair(s) below threshold, ${uncovered.length} token(s) uncovered.\n`);
  process.exit(1);
}
console.log(`\nPASSED — every declared pair clears its threshold, every colour is covered.\n`);
