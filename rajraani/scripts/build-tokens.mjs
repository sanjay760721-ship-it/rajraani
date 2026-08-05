#!/usr/bin/env node
/**
 * design/tokens.json  →  design/tokens.css  +  lib/tokens.generated.ts
 *
 * tokens.json is the single source of truth. Both outputs are generated and
 * committed; CI regenerates and fails if the working tree differs, so the JSON
 * can never drift from what ships.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(root, 'design/tokens.json'), 'utf8'));
const P = t.$meta.prefix;

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const lines = [];
const push = (s = '') => lines.push(s);

push(`/* GENERATED FROM design/tokens.json — DO NOT EDIT.`);
push(` * Run \`npm run tokens\` after changing the JSON.`);
push(` * ${t.$meta.brand} v${t.$meta.version} · ${t.$meta.spec}`);
push(` */`);
push();
push(':root {');

// ---- colour -----------------------------------------------------------------
push('  /* colour */');
for (const [group, members] of Object.entries(t.colour)) {
  if (group.startsWith('$')) continue;
  for (const [name, leaf] of Object.entries(members)) {
    if (name.startsWith('$')) continue;
    push(`  --${P}-${kebab(group)}-${kebab(name)}: ${leaf.value};`);
  }
}

// ---- type families ----------------------------------------------------------
push();
push('  /* type families */');
for (const [name, f] of Object.entries(t.type.family)) {
  push(`  --${P}-font-${kebab(name)}: ${f.value};`);
}

// ---- type scale (base breakpoint; md/lg applied in media queries below) -----
push();
push('  /* type scale — base */');
for (const [name, s] of Object.entries(t.type.scale)) {
  if (name.startsWith('$')) continue;
  push(`  --${P}-text-${kebab(name)}-size: ${s.base.size};`);
  push(`  --${P}-text-${kebab(name)}-leading: ${s.base.leading};`);
  push(`  --${P}-text-${kebab(name)}-tracking: ${s.base.tracking};`);
}

// ---- space ------------------------------------------------------------------
push();
push('  /* space */');
for (const [step, val] of Object.entries(t.space.steps)) {
  push(`  --${P}-space-${step}: ${val};`);
}

// ---- grid -------------------------------------------------------------------
push();
push('  /* grid — base */');
push(`  --${P}-container-max: ${t.grid.container.base.maxWidth};`);
push(`  --${P}-container-pad: ${t.grid.container.base.padding};`);
push(`  --${P}-grid-columns: ${t.grid.container.base.columns};`);
push(`  --${P}-grid-gutter: ${t.grid.container.base.gutter};`);
push(`  --${P}-container-narrow: ${t.grid.containerNarrow.maxWidth};`);
push(`  --${P}-product-grid-columns: ${t.grid.productGrid.base};`);

// ---- motion -----------------------------------------------------------------
push();
push('  /* motion */');
for (const [name, d] of Object.entries(t.motion.duration)) {
  push(`  --${P}-duration-${kebab(name)}: ${d.value};`);
}
for (const [name, e] of Object.entries(t.motion.easing)) {
  push(`  --${P}-ease-${kebab(name)}: ${e.value};`);
}

// ---- elevation --------------------------------------------------------------
push();
push('  /* elevation — rules, not shadows */');
for (const [name, l] of Object.entries(t.elevation.levels)) {
  push(`  --${P}-border-${kebab(name)}: ${l.value};`);
}
push(`  --${P}-scrim: ${t.elevation.scrim.value};`);
push(`  --${P}-radius: ${t.elevation.radius.value};`);

// ---- image ------------------------------------------------------------------
push();
push('  /* image ratios — reserved to protect CLS */');
for (const [name, r] of Object.entries(t.image.ratio)) {
  push(`  --${P}-ratio-${kebab(name)}: ${r.value};`);
}
push('}');

// ---- responsive overrides ---------------------------------------------------
for (const bp of ['md', 'lg', 'xl']) {
  const px = t.grid.breakpoints[bp];
  const container = t.grid.container[bp];
  const scaleKeys = Object.keys(t.type.scale).filter((k) => !k.startsWith('$') && t.type.scale[k][bp]);
  if (!container && !scaleKeys.length) continue;
  push();
  push(`@media (min-width: ${px}px) {`);
  push('  :root {');
  for (const name of scaleKeys) {
    const s = t.type.scale[name][bp];
    push(`    --${P}-text-${kebab(name)}-size: ${s.size};`);
    push(`    --${P}-text-${kebab(name)}-leading: ${s.leading};`);
    push(`    --${P}-text-${kebab(name)}-tracking: ${s.tracking};`);
  }
  if (container) {
    push(`    --${P}-container-max: ${container.maxWidth};`);
    push(`    --${P}-container-pad: ${container.padding};`);
    push(`    --${P}-grid-columns: ${container.columns};`);
    push(`    --${P}-grid-gutter: ${container.gutter};`);
  }
  if (t.grid.productGrid[bp]) push(`    --${P}-product-grid-columns: ${t.grid.productGrid[bp]};`);
  push('  }');
  push('}');
}

// ---- reduced motion ---------------------------------------------------------
push();
push('/* ' + t.motion.reducedMotion + ' */');
push('@media (prefers-reduced-motion: reduce) {');
push('  :root {');
for (const name of Object.keys(t.motion.duration)) push(`    --${P}-duration-${kebab(name)}: 0ms;`);
push('  }');
push('  *, *::before, *::after {');
push('    animation-duration: 0.01ms !important;');
push('    animation-iteration-count: 1 !important;');
push('    transition-duration: 0.01ms !important;');
push('    scroll-behavior: auto !important;');
push('  }');
push('}');
push();

writeFileSync(join(root, 'design/tokens.css'), lines.join('\n'));

// ---- TS surface -------------------------------------------------------------
const ts = `// GENERATED FROM design/tokens.json — DO NOT EDIT. Run \`npm run tokens\`.
export const breakpoints = ${JSON.stringify(t.grid.breakpoints, null, 2)} as const;

export const imageRatios = ${JSON.stringify(
  Object.fromEntries(Object.entries(t.image.ratio).map(([k, v]) => [k, v.value])),
  null,
  2
)} as const;

export const imageWidths = ${JSON.stringify(t.image.widths)} as const;
export const imageFormats = ${JSON.stringify(t.image.formats)} as const;

export type ImageRatio = keyof typeof imageRatios;
export type Breakpoint = keyof typeof breakpoints;
`;
writeFileSync(join(root, 'lib/tokens.generated.ts'), ts);

console.log(`✓ design/tokens.css  (${lines.length} lines)`);
console.log(`✓ lib/tokens.generated.ts`);
