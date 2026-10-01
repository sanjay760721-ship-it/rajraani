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

/*
 * The admin is internal tooling, not the storefront, and it runs on its own
 * design system ("Ethos & Elegance"): Playfair Display over Manrope, a 4px
 * soft-square radius, and an ambient hover shadow on cards.
 *
 * Elevation-by-rules-and-space is a rule about the *brand surface* — what a
 * customer sees. Applying it to a data-dense operations console bought nothing
 * and was already being violated 37 times before anyone decided it should be.
 * This makes the exemption a decision with a reason rather than a drift.
 *
 * Deliberately narrow: only shadow and radius, only under these two paths.
 * Everything else — competitor names, borrowed asset paths, fulfilment state
 * in titles, stray hexes, mojibake — still applies to the admin in full.
 */
const ADMIN_SURFACE = [
  /^src\/app\/admin\//,
  /^src\/components\/admin\//,
];

const SCAN_EXT = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".json", ".css", ".md", ".mdx", ".html", ".yml", ".yaml",
]);

const RULES = [
  {
    id: "competitor-name",
    /*
     * NO WORD BOUNDARIES, deliberately.
     *
     * This was `/\btilfi\b/i` until 22 Aug 2026, and the boundaries made it
     * blind to exactly the case it most needed to catch: asset filenames.
     * `…TILFI06301_2048x.webp` has a digit welded to the name, so `\b` never
     * matches and 59 staged competitor photographs passed a green run. Any
     * borrowed file whose name ends in a digit was invisible.
     *
     * The cost of dropping the boundaries is false positives on words that
     * merely contain the letters. There is no such English word, and if one
     * ever appears in a dependency name it can be exempted by path.
     */
    pattern: /tilfi/i,
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
    /*
     * The nine confirmed pairs from pre-build-gaps.md §4, plus the second batch
     * added 22 Aug 2026 after their full navigation tree was mapped: six mega
     * menus, ~90 destinations, roughly thirty campaign names between them.
     *
     * The batch was not academic. `dashashva` was sitting hard-coded in the
     * RichText renderer as a link target, firing on six sections across the
     * homepage and every editorial page, 404ing from all of them — and passing
     * this gate, because the list only knew nine names and that was not one.
     *
     * ONLY DISTINCTIVE NAMES BELONG HERE. Their catalogue also uses ordinary
     * words as campaign titles — balance, becoming, katha, tarang, surkh,
     * shakti — and blocking those would fire on legitimate prose about cloth.
     * A gate that cries wolf gets switched off. When in doubt, leave it out and
     * rely on the human review in build.md §6.
     */
    pattern:
      /\b(antinomy|of-threads-and-time|the-way-of-flowers|quarter-to-time|the-art-of-gifting|songs-of-the-season|a-quiet-interlude|a-motley-crew|echoes-in-silk|dash[a\u0101]shva|textured-trails|peony-pavilion|gulab-bari|banaras-nocturne|a-colour-unbroken|of-the-first-water|portrait-of-a-woman|an-artists-legacy|shikargah-tales|excellence-series|the-onam-edit|many-hands-of-handloom)\b/i,
    why:
      "A competitor campaign name. Campaign names are the most tempting thing to " +
      "copy and the most obviously theirs.",
  },
  {
    /*
     * Prose lifted from the reference site.
     *
     * A 22 Aug 2026 sweep diffed every visible string on their homepage against
     * this repository and found nineteen matches — a whole brand statement, the
     * store-booking line, two category taglines, four mega-menu group labels and
     * a footer heading. One had their sentence with `${BRAND.name}` substituted
     * for their brand, which is worse than an unedited paste: it is deliberate
     * enough to be hard to explain.
     *
     * Every one of them passed this gate, because until now it only knew their
     * NAME, their DOMAIN and their CAMPAIGNS. Nothing here looked at sentences.
     *
     * BE CLEAR ABOUT WHAT THIS RULE DOES AND DOES NOT DO. It pins the specific
     * phrasings that were found and removed, so they cannot creep back in a
     * later edit. It CANNOT detect copying it has not seen before — no regex
     * can. Novel borrowing is still caught only by build.md §6's human review
     * gate: "a reviewer unfamiliar with the project cannot identify the
     * reference site". If you are adding homepage copy, that review is the
     * control, not this list.
     *
     * Fragments are short and distinctive on purpose — enough to fingerprint a
     * reused line, not a transcription of their page.
     */
    id: "borrowed-copy",
    pattern: new RegExp(
      [
        "many-hued yarns",
        "silken parchment",
        "soft cadences",
        "is a weaver's poem",
        "immerse yourself in the poetry",
        "exquisite banarasi art",
        "in an intimate setting",
        "elegant silhouettes and timeless",
        "classic weaves and signature",
        "handwoven stories written in",
        "skills passed down through generations",
        "kadhua collectibles",
        "seasonal selections",
        "many hands of handloom",
        "maestros of the arts",
        "techniques & patterns",
        "here to help",
        "with love from banaras",
        "new woven treasures",
      ].join("|"),
      "i",
    ),
    why:
      "A phrase measured on the reference site and rewritten out of this build " +
      "on 22 Aug 2026. It must not return. Write the line for this brand " +
      "instead — build.md §6 makes originality an acceptance criterion, and " +
      "product copy is the part of it a shopper can actually recognise.",
    // Prose only. Comments explaining the rule have to name what they forbid.
    skipComments: true,
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
    exempt: [
      // Asserts these exact strings are REJECTED by the database. The test has
      // to name what it forbids, the same way this file does.
      /^src\/lib\/db\/schema\.test\.ts$/,
    ],
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
    exempt: ADMIN_SURFACE,
  },
  {
    id: "border-radius",
    declaration: /border-radius\s*:\s*([^;]+)/i,
    allow: (value) => /^(0(px|rem|%)?|var\(--radius-[a-z]+\))$/i.test(value.trim()),
    only: [".css", ".ts", ".tsx", ".js", ".jsx"],
    why:
      "Corners are a design decision, so they come from the named radius tokens in " +
      "globals.css (--radius-none, -soft, -pill, -arch), never a one-off value.",
    exempt: ADMIN_SURFACE,
  },
  {
    /*
     * Double-encoded UTF-8, i.e. mojibake.
     *
     * Caught the hard way: three source files were round-tripped through
     * PowerShell, whose `Get-Content -Raw` reads as ANSI when a file has no
     * BOM. Every multi-byte character was decoded as Windows-1252 and
     * re-encoded as UTF-8, so em dashes became three characters and the
     * product narratives shipped corrupted to the browser.
     *
     * The signature is a Latin-1 high byte followed by a UTF-8 continuation
     * byte — a sequence that essentially never occurs in real prose.
     */
    id: "double-encoded-utf8",
    /*
     * Written as escapes, not literals: a pattern containing the very bytes it
     * hunts for is one careless save away from being corrupted itself, and a
     * silently inert gate is worse than no gate.
     *
     * â€ is the em-dash and curly-quote family (UTF-8 E2 80 xx read as
     * cp1252, where 0x80 maps to the euro sign). The Â and Ã branches
     * cover two-byte sequences: section marks, non-breaking spaces, accented Latin.
     */
    pattern: /â€|Â[ -¿]|Ã[-¿]/,
    why:
      "Double-encoded UTF-8 (mojibake). A file was read as ANSI and rewritten " +
      "as UTF-8. Do not round-trip source through PowerShell's Get-Content / " +
      "Set-Content — use an editor or .NET ReadAllText/WriteAllText with an " +
      "explicit UTF8Encoding($false).",
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
  "✓ No competitor references, no fulfilment state in titles, no shadows, no stray radii, no stray hexes.\n",
);
