# Rajraani — storefront

Handloom saree commerce. Shopify headless + Next.js App Router + Sanity.

Architecture is specified in `../build.md`. This README covers only what you need to run
the thing.

---

## Run it

```bash
npm install
cp .env.example .env.local   # fill in Shopify + Sanity credentials
npm run dev
```

`/` currently renders the **token specimen** — the type scale, palette, image ratios and
price formatting for all 8 markets, read live from `design/tokens.json`. That is the
Sprint 0 exit criterion (`build.md` §5: *"a blank page renders with the real type scale and
palette"*). It is deleted in Sprint 5 when the real homepage lands.

## Verify

```bash
npm run verify
```

Five gates run before typecheck and lint, all with zero dependencies, so a regression
fails in seconds:

| Gate | What it catches |
|---|---|
| `tokens:check` | `tokens.css` drifting from `tokens.json` |
| `check:contrast` | Any colour pair below its WCAG 2.2 threshold, and any colour with no declared pair |
| `check:taxonomy` | Duplicate canonicals, undeclared cross-facet alias collisions, malformed slugs |
| `check:originality` | Competitor names, domains and campaign names — including in fixtures; also stray hexes, shadows, and fulfilment state baked into title strings |
| `check:headings` | Skipped heading levels and duplicate `h1` |

---

## Design tokens

`design/tokens.json` is the **single source of truth**. Everything else is generated:

```
design/tokens.json  →  design/tokens.css          (CSS custom properties, --rj-*)
                    →  lib/tokens.generated.ts    (breakpoints, ratios, image ladder)
```

Run `npm run tokens` after editing the JSON. CI regenerates and fails if the working tree
differs, so the two can never drift.

**Tailwind is bound to the tokens, and the default theme is removed** — `theme`, not
`theme.extend`. `text-gray-500` and `rounded-lg` do not exist. That is deliberate: it is
what keeps the token set load-bearing rather than decorative.

Three rules the code enforces rather than documents:

- **Zero radius, zero shadow.** Elevation is rules and space (`--rj-border-bounded`,
  `--rj-border-raised`). `box-shadow` fails CI.
- **No literal hex outside `tokens.json`.** Fails CI.
- **Focus is never removed.** 2px ring, 2px offset, defined once in `globals.css`.

Contrast is verified at token-definition time, not audit time — a near-white scheme is the
standard failure mode in this category. 25/25 pairs currently pass.

## Facet taxonomy

`taxonomy/facets.json` is the controlled vocabulary; `taxonomy/REVIEW.md` is the same
thing written for a human reviewer.

**It is a draft.** 11 decisions need domain review before Sprint 3 — most importantly
whether the canonical spelling is `kadhua` or `kadwa`, which the reference catalogue split
exactly 50/50 across 32 tag variants. `npm run check:taxonomy` re-prints the open list.

The rule that makes all of this worth doing: **merchandisers may never create a facet
value.** Values are added to the JSON, reviewed, and deployed as Shopify metaobjects. The
reference catalogue reached 1,592 tags with 44% used exactly once because nobody enforced
that.

## Layout

```
app/          App Router. Routing map in build.md §3.
components/   Component inventory in build.md §4. Empty until Sprint 1.
design/       Tokens — source of truth + generated CSS.
lib/          brand.ts (global constants), money.ts (8-market formatting),
              shopify/ (Storefront client; typed codegen lands Sprint 1).
scripts/      Token build + the five CI gates.
taxonomy/     Controlled vocabulary + review sheet.
```

## Not yet built

Sprint 0 is foundations only. Still absent, in `build.md` order: Sanity studio and schemas
(§2.3), metafield/metaobject definitions (§2.2), Storybook and visual regression, the
component inventory (§4), Algolia (Sprint 3), and the editorial engine (Sprint 4).

Two things gate later sprints and are **not** engineering problems: a writer for the
per-SKU narrative and alt text (§7.7), and photography quotes against the brief in
`../photography-brief.md`.
