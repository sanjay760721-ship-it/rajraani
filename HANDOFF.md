# Project Handoff — Rajraani

**Last updated:** 5 August 2026 (Sprint 0 build session)
**Purpose:** Resume state. Read this first in any new session, then read the two documents it points to.

---

## 0. Brand name — settled

> **Rajraani.**

Decided 5 August 2026. It replaces the placeholder "Tantu" used in `prototype.html`.
The Shopify metafield/metaobject namespace is `rajraani`, not the competitor's — set in
`rajraani-storefront/src/lib/brand.ts` and enforced by an originality gate in CI.

The rename was a single edit to that one file, which is what isolating brand constants
bought. A test fails if the name appears hardcoded anywhere else.

**`prototype.html` still says "Tantu".** It is a superseded artefact kept for reference;
the live build is `rajraani-storefront/`. Don't reconcile the prototype — retire it now
that the real homepage renders.

---

## 1. What this project is

Building a handloom saree e-commerce site. Target agreed in an earlier session:

> **Same architecture as the category leader, own brand.**

That phrasing does real work. It means: copy the *structural* decisions that are solved problems in this category (shot template, editorial layer, one-variant inventory model, duty-paid messaging), and bring an entirely independent visual identity, copy voice, and imagery. No Tilfi assets anywhere — including in Storybook fixtures and seed data.

---

## 2. Where things stand

| Item | Status |
|---|---|
| `build.md` — architecture spec | ✅ **Revised 5 Aug.** Re-cut for own-brand target; §8 resolved; §9 added. |
| `design.md` §3 + §12 | ✅ **Verified 5 Aug** against live computed styles. Many token values were wrong — corrections in new §3.0; §12 closed. |
| `pre-build-gaps.md` — sweep 4 | ✅ **New 5 Aug.** Data quality, campaign architecture, availability, SEO, accessibility. **Research is now complete.** |
| §8 competitive sweep | ✅ **Closed.** All seven original questions answered or retired. |
| Deep competitive sweep | ✅ `sweep-findings.md` |
| Photography brief | ✅ `photography-brief.md` — was the critical path, now unblocked |
| Platform decision | ✅ **Settled in `build.md` §1** — Shopify headless + Next.js + Sanity |
| Brand name | ✅ **Rajraani.** Settled 5 Aug. |
| Design tokens | ✅ **Authored 5 Aug** — `rajraani/design/tokens.json`, full §2.5 shape, 25/25 contrast pairs verified. Sprint 1 unblocked. A designer may still refine values; the shape is fixed and code depends on it. |
| Facet taxonomy | 🟡 **Drafted 5 Aug** — `rajraani/taxonomy/`. 8 facets, 294 terms. **11 decisions need domain review before Sprint 3.** |
| Catalogue and editorial content | ❌ Open — see `build.md` §7.7. Confirm the writer exists before Sprint 4. |
| Photography commissioning | ❌ Open — fill SKU counts, send brief, collect quotes |
| `prototype.html` — architecture prototype | ✅ Built 5 Aug. **Superseded by `rajraani/`** — kept for reference, still says "Tantu". |
| Catalogue origin | ✅ **Greenfield.** §7.3 is now a governance rule, not a migration workstream. |
| **Sprint 0 — Foundations** | ✅ **Built 5 Aug.** Live code is `rajraani-storefront/` — see §2.0. |
| **Sprints 1–2 — working slice** | ✅ **Built 5 Aug.** PLP with multi-select faceting, PDP with mixed-ratio gallery and sticky buy bar, homepage section registry, editorial pages, grouped search, cart drawer. All verified in a browser. |

### 2.0 ⚠️ Two Sprint 0 builds were produced — read this before §2.1

Two sessions ran concurrently on 5 August and each produced a Sprint 0. They have been
consolidated, and **the live codebase is now `rajraani-storefront/`**.

| Folder | Status |
|---|---|
| **`rajraani-storefront/`** | ✅ **Live.** Next 16 + Tailwind 4. Sprint 0 *and* a working slice of Sprints 1–2: PLP with faceting, PDP, homepage, editorial pages, search, cart. 170 tests. `npm run verify` green. |
| `rajraani/` | ⛔ **Superseded — safe to delete.** Next 15 + Tailwind 3, foundations only, no components, dependencies never installed. Its best parts were ported across (below). §2.1 describes this folder. |

**Ported from `rajraani/` before retiring it:** the `taxonomy/` vocabulary and `REVIEW.md`
(9 facets, 63 values, 11 open decisions), `check-originality.mjs`, `check-taxonomy.mjs`, and
the GitHub Actions workflow. Adopting that vocabulary reclassified `meenakari` and
`shikargah` as motifs rather than weaves, per `REVIEW.md`.

**Not ported:** `design/tokens.json` and its generator. The live build holds tokens as CSS
custom properties with a typed contrast contract instead — 22 pairs asserted in the test
suite. Worth revisiting if you want tokens as data for a designer handoff.

Run it:

```bash
cd rajraani-storefront && npm install && npm run dev
```

### 2.1 Sprint 0 — what was built in the superseded `rajraani/` folder

*Historical. Describes `rajraani/`, not the live build. Kept because it records what was
ported and what was dropped.*

`/` renders the token specimen, which is the §5 exit criterion (*"a blank page renders with
the real type scale and palette"*).

**Design tokens — `rajraani/design/tokens.json` is the single source of truth.**
Full §2.5 shape: type scale (7 steps × 3 breakpoints, display serif + UI sans, both with
Devanagari coverage), palette (23 colours on a warm low-chroma ground, lac-red accent),
space (4px base, 11 steps), grid (768/1024/1440 — the competitor's 798 is not inherited),
motion (3 durations, collapsing to 0ms under `prefers-reduced-motion`), elevation (rules
and space, no shadows, zero radius), image ratios (2:3 and 1:1 as first-class tokens,
matching `photography-brief.md` §2.1 exactly).

`tokens.css` and `lib/tokens.generated.ts` are generated from the JSON and CI fails if they
drift. Tailwind's default theme is **removed**, not extended — `text-gray-500` does not
exist, so the tokens stay load-bearing.

**Facet taxonomy — `rajraani/taxonomy/`.** 8 facets, 294 terms, alias maps that resolve the
transliteration forks `pre-build-gaps.md` §1 said no script could handle. Price is
deliberately absent (computed per currency at query time). `REVIEW.md` is the human-readable
review sheet.

**Five CI gates, all dependency-free so they fail in seconds:** token drift, WCAG 2.2
contrast, taxonomy well-formedness, originality (competitor names/domains/campaigns —
including in fixtures — plus stray hexes, shadows, and fulfilment state in title strings),
and heading order.

**Also in place:** Storefront API client with ISR policy decided in one place, 8-market
price formatting (INR groups by lakh, JPY carries no minor unit, tabular figures so the cart
aligns), skip link, focus ring that is never removed, `lang`, and an image ladder capped at
the true 3000px master so zooming into zari never hits an upscale.

**Verified:** 25/25 contrast pairs pass; taxonomy validates with 0 errors; originality and
heading gates pass across 20 files; `tsc --noEmit` clean under `strict`,
`noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.

*(The typecheck was run out-of-tree with stubbed `next` types, since dependencies are not
installed in this folder. Run `npm run verify` locally for the real thing.)*

### 2.2 Sprint 1–2 — what was built, 5 August (evening session)

All in `rajraani-storefront/`. `npm run verify` is green: **170 tests, 7 gates, exit 0.**

```bash
cd rajraani-storefront && npm install && npm run dev     # http://localhost:3000
cd rajraani-storefront && npm run verify                 # the full gate
```

**Stack:** Next 16.3 (App Router, Turbopack) · React 19.2 · Tailwind 4 · TypeScript strict
with `noUncheckedIndexedAccess` and `verbatimModuleSyntax`. Tests are `node --test` with
native TS type-stripping — **zero test dependencies**.

**Routes that render:** `/` · `/collections/[handle]` · `/products/[handle]` ·
`/pages/[slug]` · `/search`. 27 pages prerender; the PLP and search are dynamic, correctly.

**Verified in a browser, not inferred:**

- Facets multi-select; counts hold in the selected group while narrowing every other group;
  URL syncs with no reload; back button restores the prior selection
- Sold-out PDP swaps add-to-cart for the notify form; JSON-LD reports `OutOfStock` with all
  gallery images plus `material`, `color` and weave/motif `additionalProperty`
- Gallery renders 5 × 2:3 then 1:1 with both ratios reserved
- Sticky buy bar appears once the buy block leaves the viewport
- Cart drawer traps focus, locks scroll, restores both on Escape, persists across reloads
- Search resolves `kadwa` → Kadhua and says so on the page
- Indian lakh grouping (₹1,12,000), 8 currencies, persisted
- No hydration warnings

**Five things the build found that the specs did not:**

1. Two placeholder token values failed AA — accent 4.3:1 and the input rule 2.7:1 on the
   sand surface, which is the footer, which holds the newsletter form. Both fixed.
2. One hairline colour cannot serve both decorative dividers and form-control boundaries;
   the latter owe 3:1 under WCAG 1.4.11. Palette now has `--color-rule` *and*
   `--color-rule-input`.
3. Heading level is a property of position, not of component. First lint run caught the PLP
   skipping h1→h3 and craft pages shipping no h1 at all — the exact defect measured on the
   reference PDP.
4. Availability and dispatch mode are different questions (a piece can be sold out *and*
   made to order). They are two facets, not one. Conflating them is the modelling error
   that put `Pre-Order:` into 463 reference titles.
5. Two lookaheads in the ported originality gate were silently inert —
   `box-shadow\s*:\s*(?!none)` backtracks and matches its own exemption. Both rules now
   read the declaration value.

### 2.3 Sprint 1 status — precisely

Not complete. The storefront half is done and past it; the backend half has not started.

| `build.md` §5 Sprint 1 item | Status |
|---|---|
| Header · MegaMenu · MobileNavDrawer · Footer · AnnouncementBar | ✅ |
| Currency context + Indian lakh formatting | ✅ |
| Legacy tag → facet migration | ✅ N/A — greenfield; inverted to the governance rule, built and CI-enforced |
| Shopify Storefront client | 🟡 Transport + ISR policy done; typed codegen needs a store |
| Metafield + metaobject definitions **created in Shopify** | ❌ Modelled as types only |
| Sanity schemas (§2.3) | ❌ Not started |

**Exit criterion NOT met:** *"navigation is fully CMS-driven"*. The mega menu is
CMS-**shaped** — `src/lib/data/navigation.ts` returns exactly what the Sanity document will —
but changing a link still needs a deploy, and §6 lists zero-deploy menu edits as a ship
criterion.

**Ahead of schedule:** Sprint 2 is essentially complete (PLP, PDP, cart, sold-out flow,
badging — all but the Shopify checkout handoff, a §10 non-goal), plus the grouped-search
shape from Sprint 3 and the section registry from Sprint 4 (6 of 15 section types).

### 2.4 Pick up here

In priority order:

1. **Sanity schemas (§2.3)** — the largest chunk of Sprint 1 that needs no account. Write
   the schema definitions and content types so connecting a project later is configuration,
   not modelling. *This was the agreed next task when the session ended.*
2. **Get the two accounts.** A Shopify dev store unblocks metaobjects + codegen +
   `shopify-repository.ts`; a Sanity project moves navigation and sections out of
   TypeScript and closes the Sprint 1 exit criterion.
3. **Taxonomy review** — `rajraani-storefront/taxonomy/REVIEW.md`, 11 decisions.
   `kadhua` vs `kadwa` is worth one phone call: it becomes a URL.
4. The remaining 9 section types, filter drawer below 1024px, Algolia (Sprint 3).

**Housekeeping not yet done:** the folder is **not under git**, and `node_modules` sits
inside OneDrive — exclude it from sync or move the repo out once it is versioned.

### Prototype — what it proves

Open `prototype.html` in any browser. No server, no install, no external requests.

It exists to pressure-test the two places the architecture could be wrong:

1. **Multi-select faceting with live counts and URL sync** (§9.1). Counts exclude their own
   group so options never read zero while selected; filtered URLs are shareable; back button
   works. Verified by unit test.
2. **The mixed 2:3 / 1:1 gallery** (§1.4 / photography-brief §3). Five portrait frames then
   two square, both ratios reserved in CSS.

Also demonstrates: sticky buy bar (§9.2), sold-out at true 50% density with the notify form as
a primary surface (§9.7), provenance block (§9.4), cart drawer (§8.2), grouped search (§8.3),
zero radius and zero shadow, skip link and labelled inputs (§9.9).

**Everything visual is a placeholder** — brand name "Tantu", schematic colour-field frames
instead of photographs, placeholder tokens. Frames are deliberately schematic: they show the
shot template without using any imagery at all.

### Revision note, 5 August 2026

The copy of `build.md` in this folder was the **pre-re-cut version** — it predated the
"own brand" decision. Rather than recover the intermediate revision, it was re-cut
directly from measured data, which went further than the original revision could:
§8 was *replaced with answers* rather than shrunk, and a new §9 captures sweep findings
that never existed in any earlier version.

---

## 3. Files in this folder

| File | What it is |
|---|---|
| `sweep-findings.md` | Full competitive sweep of tilfi.com — imagery forensics, PDP anatomy, facets/cart/search, IA, tech and performance. All figures measured live, not estimated. |
| `photography-brief.md` | Sendable studio brief — shot list, ratios, lighting, colour management, throughput, budget model, acceptance criteria. Needs SKU counts filled in at §1. |
| **`rajraani-storefront/`** | **The build.** Start at `rajraani-storefront/README.md`. |
| `rajraani-storefront/taxonomy/REVIEW.md` | The 11 open taxonomy decisions, written for a human reviewer. **The highest-value thing on this list that needs a person.** |
| `rajraani/` | ⛔ Superseded Sprint 0 from a parallel session. Safe to delete — see §2.0. |
| `prototype.html` | Superseded. Still says "Tantu". Kept as a record; retire it. |
| `HANDOFF.md` | This file. |

Note: the research documents (`sweep-findings.md`, `pre-build-gaps.md`, `design.md`,
`design-addendum.md`) name the competitor throughout — correctly, since they *are* the
competitive research. The originality rule applies to the build, not the notes, and CI
scans only `rajraani-storefront/`.

---

## 4. Key findings worth not re-deriving

Measured 5 Aug 2026 across 3,000 products / 4,810 images on tilfi.com.

**Imagery — this drove the photography brief:**

- 90% of images are 2:3 portrait, 9% are 1:1 square. Two ratios carry the whole catalogue.
- Median 6 images per saree (mean 5.7).
- Shot template decodes from gallery position: frames 1–3 are on-model portrait ~90% of the time; frames 6+ are square detail frames 67–91% of the time.
- **Caveat, verified by re-sampling:** the portrait→square switch is a hard boundary in one cohort (newer stock) but drifts across the wider catalogue. They converged on a template recently and never retro-fitted. Locking ours from SKU #1 is a free advantage.
- Most masters are 1440–1600px wide (largest observed 3,931px) while the `srcset` ladder advertises up to 5000w. Buyers zooming into zari on a ₹50k product hit an upscale.
- **No WebP or AVIF anywhere**, on a page where images are 72% of payload.

**Their weaknesses, i.e. our openings:**

- Add to cart sits 1.3 screens below the fold. No sticky bar. On a ₹49,500 single-variant product.
- No reviews, ratings, or social proof of any kind.
- Facets are radio buttons — single-select per group, full page reload, no result counts.
- 250+ collections against ~3,000 products. Most is SEO dead weight diluting the campaigns that matter.
- 111 script requests on a PDP.

**Their strengths, i.e. what to copy:**

- Named pieces with bespoke ~90-word narrative copy per SKU. This is the moat and it's a permanent writing cost.
- Grouped search results — products / categories / editorial, not a flat list.
- Duty-paid international shipping in the announcement bar. Kills the biggest overseas objection.
- One-variant inventory model. Unique pieces, inventory of 1 — makes the whole variant/size layer optional.

**Answers to §8 of `build.md`:**

1. **Facets** — path-based Shopify tag filtering: `/collections/sarees/katan-silk+red`. Alphabetised, `+`-joined, full reload.
2. **Cart** — anchored mini-cart dropdown under the header. Not a drawer, not a page.
3. **Search** — centred modal, live typeahead, four groups: Popular Suggestions / Categories / Pages / Products.
4. **Breakpoints** — theirs are 798 / 480 / 1024. The 798 is a legacy theme artefact. **Use 768 / 1024 / 1440.**

---

## 5. Blockers to clear before building

### 5.1 ~~`build.md` is unreachable~~ — resolved

The `TILFI_COPY` folder is connected. All six files are readable. **Always work from
this folder**, not from session scratch space — session outputs don't survive.

### 5.2 ~~Design tokens~~ — resolved 5 Aug

Every §2.5 group present in `rajraani-storefront/src/app/globals.css`, with all 22
ink-on-surface contrast pairs asserted in the test suite
(`src/lib/tokens/contrast.ts`). **Sprint 1 is unblocked.**

Standing caveat: these are engineering-authored values, not a designer's. They are
deliberate and defensible, not arbitrary — but a designer may still want to refine the
palette and type. That is cheap: the *shape* is what code depends on, and it will not move.
Swapping a value means editing `globals.css` and `contrast.ts` together; the test fails if
they drift, or if a new value drops below AA.

*(The superseded `rajraani/` folder held these as `design/tokens.json` with a generator.
That approach was not carried over — see §2.0. Worth revisiting only if a designer wants
tokens as data to hand back and forth.)*

### 5.3 Editorial staffing — blocking Sprint 4

`build.md` §7.7. The architecture assumes a bespoke ~90-word narrative and a proper name
for **every SKU**, plus ~2 long-form stories a month, permanently. Confirm that person
exists before building the engine that depends on them.

### 5.4 ~~Catalogue origin~~ — resolved. Taxonomy drafted, review outstanding

Greenfield, so §7.3 is a governance rule rather than a migration.

The facet taxonomy is **drafted** at `rajraani-storefront/taxonomy/facets.json`, with the
human-readable review sheet at `rajraani-storefront/taxonomy/REVIEW.md`. 9 facets, 63
values. It is the source of truth: `src/lib/domain/taxonomy.ts` is a typed reader over it,
and `npm run taxonomy:check` fails if the generated module drifts from the JSON.

**11 decisions still need a domain reviewer before Sprint 3.** The one that matters most:
`kadhua` or `kadwa` — measured at exactly 50/50 across 32 tag variants, so no frequency
signal breaks the tie. `kadhua` is proposed. It becomes a URL segment, so it is free to flip
now and expensive after launch. One conversation with a weaver closes it.

Run `npm run check:taxonomy` to re-print the open list.

### 5.5 ~~What to build first~~ — resolved. Sprint 0 built, and Sprint 2 with it

See §2.2. The storefront runs. What remains of Sprint 1 is the CMS and commerce backends —
see §5.7.

### 5.7 The two accounts — now the main blocker

Neither is engineering work, and between them they gate everything left in Sprint 1.

- **Shopify dev store.** Unblocks the metafield and metaobject definitions (§2.1, §2.2),
  typed codegen, and writing `src/lib/data/shopify-repository.ts` against the interface
  that already exists. Transport, auth, error handling and ISR policy are already built in
  `src/lib/data/shopify/client.ts`. Swapping off the fixture catalogue is two env vars.
- **Sanity project.** Moves navigation, homepage sections and campaign stories out of
  TypeScript and closes the Sprint 1 exit criterion (zero-deploy menu edits).

The schemas can be *written* before the account exists — that is the recommended next task
(§2.4).

### 5.6 Not blocking

**Photography.** The brief is written and the shoot runs in parallel. Build against placeholder images at the exact specified ratios (2:3 at 3000×4500, 1:1 at 3000×3000) and the swap is clean.

---

## 6. Next actions

**For sanju — three emails and one conversation, and nothing is blocked:**

1. Fill in SKU counts at §1 of `photography-brief.md`
2. Send the brief to 3–4 studios
3. Collect line-item quotes per §14 of the brief
4. **Confirm who writes the per-SKU editorial copy (§7.7)** — now including alt text,
   ~6 strings per SKU. This is the last unowned thing that gates a sprint.
5. **Walk `rajraani-storefront/taxonomy/REVIEW.md` with a weaver or merchandiser** —
   11 decisions, most of them five seconds each. `kadhua` vs `kadwa` is the one worth real
   attention.
6. Register the domain and secure the handles for **Rajraani**
7. **Create a Shopify dev store and a Sanity project** (§5.7) — the two things now gating
   the rest of Sprint 1
8. Delete the superseded `rajraani/` folder once you have looked it over (§2.0)

**For the next session:**

1. Read this file's §2.0 → §2.4. That is the whole resume state.
2. Read `rajraani-storefront/README.md` — what exists, what does not, and why
3. `cd rajraani-storefront && npm install && npm run verify` — confirm green before
   changing anything
4. **Write the Sanity schemas** (`build.md` §2.3). No account needed to model them.

Taxonomy review is *not* a prerequisite — metaobject definitions are created from the
taxonomy's shape, and values can be seeded after review.

---

## 7. Standing constraints

- **Originality:** no competitor imagery, product copy, or campaign names anywhere in the build — including Storybook fixtures and seed data. This is an acceptance criterion in `build.md`, not a guideline, and it is now **enforced by CI** (`npm run check:originality`) rather than by memory.
- **Editorial:** the architecture assumes ~45% editorial content and a writer producing named-piece copy per SKU, permanently. Confirm that person exists before building the engine that depends on them.
- **Budget reality:** photography lands at roughly ₹7,500–18,000 per SKU all-in (planning estimate, replace with quotes). For a 300-SKU launch that's ₹22–54 lakh. In this category photography is usually the larger line item, not engineering.
