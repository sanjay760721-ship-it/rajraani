#!/usr/bin/env node
/**
 * Validates taxonomy/facets.json.
 *
 * The whole point of a controlled vocabulary is that it stays controlled, so the
 * invariants are enforced by CI rather than by good intentions:
 *   1. slugs are kebab-case or snake_case, never free text
 *   2. no canonical value is duplicated within a facet
 *   3. no alias collides with another alias, or with a canonical, ANYWHERE —
 *      including across facets, because import mapping and search expansion both
 *      resolve globally and an ambiguous alias silently mis-files a product
 *   4. every colour family carries a hex, or is explicitly null (multicolour)
 *
 * Also prints the open review decisions, so nobody forgets they are open.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(root, 'taxonomy/facets.json'), 'utf8'));

const errors = [];
const reviews = [];
const ambiguities = [];
const seenGlobally = new Map(); // term -> "facet.canonical (as alias|canonical)"
const SLUG = /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/;

for (const [facet, def] of Object.entries(t)) {
  if (facet.startsWith('$') || !def.values) continue;
  const canonicals = new Set();

  for (const v of def.values) {
    if (!SLUG.test(v.canonical)) errors.push(`${facet}: canonical "${v.canonical}" is not a valid slug`);
    if (canonicals.has(v.canonical)) errors.push(`${facet}: duplicate canonical "${v.canonical}"`);
    canonicals.add(v.canonical);

    if (facet === 'colour' && !('hex' in v)) errors.push(`colour.${v.canonical}: missing hex (use null for multicolour)`);
    if (v.review) reviews.push({ facet, canonical: v.canonical, decision: v.decision ?? '(no note)' });

    const terms = [v.canonical, ...(v.aliases ?? [])];
    for (const term of terms) {
      const key = term.toLowerCase();
      const role = term === v.canonical ? 'canonical' : 'alias';
      const where = `${facet}.${v.canonical} (${role})`;
      if (seenGlobally.has(key)) {
        // A cross-facet collision is only permitted if it is declared and
        // justified in $meta.ambiguousTerms. That declaration is what makes
        // "alias resolution is facet-scoped" an explicit contract rather than
        // an accident nobody noticed.
        const declared = t.$meta.ambiguousTerms?.[key];
        if (!declared) {
          errors.push(`ambiguous term "${term}" — claimed by both ${seenGlobally.get(key)} and ${where}`);
        } else {
          ambiguities.push(`"${term}" — ${seenGlobally.get(key)} vs ${where}`);
        }
      } else {
        seenGlobally.set(key, where);
      }
      if (role === 'alias' && !SLUG.test(term)) errors.push(`${where}: alias "${term}" is not a valid slug`);
    }
  }
}

const facetCount = Object.keys(t).filter((k) => !k.startsWith('$') && t[k].values).length;
console.log(`\nRajraani — facet taxonomy validation\n`);
console.log(`  ${facetCount} facets · ${seenGlobally.size} unique terms · ${reviews.length} open review decisions\n`);

if (reviews.length) {
  console.log('Open decisions requiring domain review before Sprint 3:');
  for (const r of reviews) {
    console.log(`\n  ● ${r.facet}.${r.canonical}`);
    console.log(`    ${r.decision.replace(/\s+/g, ' ')}`);
  }
  console.log();
}

if (ambiguities.length) {
  console.log('Declared cross-facet ambiguities (resolution is facet-scoped — see $meta.ambiguousTerms):');
  for (const a of ambiguities) console.log(`  ~ ${a}`);
  console.log();
}

if (errors.length) {
  console.error(`✗ ${errors.length} error(s):`);
  for (const e of errors) console.error(`    ${e}`);
  console.error();
  process.exit(1);
}
console.log(`✓ No duplicate canonicals, no ambiguous aliases, all slugs well-formed.\n`);
