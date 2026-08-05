/**
 * Heading-order lint.
 *
 * build.md §9.9 asks for this in CI, and it is worth having: heading order on
 * the reference PDP runs H1 → H4 → H4 → H2 → H4 → H5, which is what happens
 * when every component picks its own level and nothing checks the result.
 * Both bugs this caught on first run (a PLP grid skipping h1 → h3, and craft
 * pages shipping no h1 at all) were invisible in the design.
 *
 * Runs over the prerendered HTML that `next build` leaves in .next/server/app,
 * so it needs no browser and no running server.
 *
 * COVERAGE LIMIT, stated plainly: this sees statically rendered routes only —
 * the homepage, every PDP and every editorial page. The PLP and search are
 * dynamically rendered and are not in this output, so they are verified by
 * hand until Sprint 6 adds a browser-driven pass.
 *
 * Usage: node scripts/lint-headings.mjs   (after `next build`)
 */

import { readFileSync } from "node:fs";
import { glob } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", ".next", "server", "app");

/** Strip comments and script/style bodies so their contents cannot match. */
function stripNonMarkup(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

function headingsIn(html) {
  const matches = stripNonMarkup(html).matchAll(/<h([1-6])[\s>]/gi);
  return [...matches].map((match) => Number(match[1]));
}

function problemsFor(levels) {
  const problems = [];

  const h1Count = levels.filter((level) => level === 1).length;
  if (h1Count !== 1) {
    problems.push(`expected exactly one h1, found ${h1Count}`);
  }

  let previous = 0;
  for (const level of levels) {
    if (previous && level > previous + 1) {
      problems.push(`skipped a level: h${previous} followed by h${level}`);
    }
    previous = level;
  }

  return problems;
}

let checked = 0;
const failures = [];

for await (const file of glob("**/*.html", { cwd: ROOT })) {
  // Next's own error and not-found shells are not ours to fix.
  if (path.basename(file).startsWith("_")) continue;

  const levels = headingsIn(readFileSync(path.join(ROOT, file), "utf8"));
  if (levels.length === 0) continue;

  checked += 1;
  const problems = problemsFor(levels);
  if (problems.length > 0) {
    failures.push({ file, order: levels.map((l) => `h${l}`).join(" "), problems });
  }
}

if (checked === 0) {
  console.error("No prerendered HTML found. Run `next build` first.");
  process.exit(1);
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`\n${failure.file}`);
    console.error(`  order: ${failure.order}`);
    for (const problem of failure.problems) console.error(`  ✖ ${problem}`);
  }
  console.error(`\n${failures.length} of ${checked} pages have heading-order problems.`);
  process.exit(1);
}

console.log(`Heading order OK across ${checked} prerendered pages.`);
