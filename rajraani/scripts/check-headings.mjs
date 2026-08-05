#!/usr/bin/env node
/**
 * Static heading-order lint.
 *
 * pre-build-gaps.md §5 measured the reference PDP's heading order as
 * H1 → H4 → H4 → H2 → H4 → H5 → H2 → H3. That is a WCAG 2.4.6 / 1.3.1 failure
 * and it is invisible to everyone who is not using a screen reader, which is why
 * it survives to production unless something mechanical catches it.
 *
 * This is the cheap static half: per-file, it checks that heading levels never
 * skip downward and that no file declares two h1s. The runtime half — order
 * across a fully composed page — lands in Sprint 6 with axe in Playwright.
 * Static first, because it fails in two seconds on every commit.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, extname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SKIP = new Set(['node_modules', '.next', '.git', 'out', '.vercel', 'scripts']);

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (SKIP.has(e)) continue;
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (['.tsx', '.jsx'].includes(extname(e))) out.push(full);
  }
  return out;
}

const errors = [];
const warnings = [];
let files = 0;

for (const file of walk(root)) {
  const rel = relative(root, file).replace(/\\/g, '/');
  const src = readFileSync(file, 'utf8');
  files++;

  // Opening heading tags, in source order. Source order is a proxy for DOM
  // order — good enough to catch the H1→H4 class of mistake, and honest about
  // not being a full render.
  const found = [...src.matchAll(/<h([1-6])[\s>]/g)].map((m) => ({
    level: Number(m[1]),
    line: src.slice(0, m.index).split('\n').length,
  }));
  if (!found.length) continue;

  const h1s = found.filter((h) => h.level === 1);
  if (h1s.length > 1) {
    errors.push(`${rel}: ${h1s.length} <h1> elements (lines ${h1s.map((h) => h.line).join(', ')}). One per document.`);
  }

  let prev = null;
  for (const h of found) {
    if (prev !== null && h.level > prev + 1) {
      errors.push(`${rel}:${h.line}: heading jumps h${prev} → h${h.level}. Levels may not skip downward.`);
    }
    prev = h.level;
  }

  // A component that starts at h1 is usually a page; one that starts deeper is a
  // fragment whose real order depends on where it is composed. Worth saying out
  // loud rather than asserting.
  if (found[0].level > 1 && rel.startsWith('app/') && rel.endsWith('page.tsx')) {
    warnings.push(`${rel}: page starts at h${found[0].level}, not h1.`);
  }
}

console.log(`\nRajraani — heading order lint (static)\n`);
console.log(`  ${files} component file(s) scanned\n`);

for (const w of warnings) console.log(`  ! ${w}`);
if (warnings.length) console.log();

if (errors.length) {
  console.error(`✗ ${errors.length} error(s):`);
  for (const e of errors) console.error(`    ${e}`);
  console.error(`\n  Runtime order across composed pages is checked by axe in Sprint 6.\n`);
  process.exit(1);
}
console.log(`✓ No skipped levels, no duplicate h1.\n`);
