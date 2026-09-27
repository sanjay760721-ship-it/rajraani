# Rajraani — storefront

Sprint 0 foundations plus a working slice of Sprints 1–2, built against the
research in [`../docs/research/`](../docs/research) — `build.md` is the one that
settles the architecture.

> **Architecture changed on 6 August 2026.** Shopify and Sanity are out;
> Razorpay, our own SQLite database and our own admin panel are in, and the
> store is India-only. `docs/architecture-change-2026-08-06.md` records what
> that costs and what it does not. It supersedes `build.md` §1.1 and §1.3 —
> the rest of `build.md` still stands.

```bash
npm install
npm run db:reset                                          # create and seed the database
node scripts/create-admin.mjs you@example.com a-password  # at least 12 characters
npm run dev                                               # http://localhost:8080
```

| | |
|---|---|
| Shop | http://localhost:8080 |
| Admin | http://localhost:8080/admin |

`npm run verify` runs every gate in order:

| Gate | What it catches |
|---|---|
| `taxonomy:check` | `facets.generated.ts` drifting from `taxonomy/facets.json` |
| `check:taxonomy` | Duplicate canonicals, undeclared cross-facet alias collisions, malformed slugs — and reprints the 11 open review decisions |
| `check:originality` | Competitor names, domains and campaign names *including in fixtures*; fulfilment state baked into title strings; shadows, radii and stray hexes |
| `test` | 170 unit tests, including the 22-pair WCAG contrast contract |
| `lint` · `typecheck` · `build` | The usual |
| `lint:headings` | Skipped heading levels and duplicate `h1`, read from the prerendered HTML |

---

## Consolidation note

Two Sprint 0 builds were produced by concurrent sessions on 5 August. This one
is the survivor; the other was absorbed and deleted on 6 August, and is
recoverable from commit `d88c66c`. Three things were ported across from it
before it was retired, because they were better than what this build had:

- `taxonomy/facets.json` + `taxonomy/REVIEW.md` — a 9-facet, 63-value controlled
  vocabulary with all 11 open domain decisions written out for a reviewer
- `scripts/check-originality.mjs` — the originality acceptance criterion as a CI
  gate rather than a code-review habit
- `scripts/check-taxonomy.mjs` and the GitHub Actions workflow

Adopting that vocabulary changed two fixtures: `meenakari` and `shikargah` are
motifs there, not weaves, which is a deliberate call argued in `REVIEW.md`.

---

## Assumptions made

Two decisions were taken as defaults so work could start. Both are cheap to
reverse. The brand name was the third and is now settled.

| Decision | Taken as | Reverse by |
|---|---|---|
| Brand name | **Rajraani**, settled 5 Aug | Edit `BRAND.name` in `src/lib/brand.ts` — a test fails if the string appears anywhere else. It was "Tantu" until then, and the rename was exactly that one edit. |
| Catalogue backend | **Fixtures**, behind the real interface. The database exists and is seeded but the site does not read it yet. | Implement `SqliteCatalogueRepository` against `CatalogueRepository` and switch `catalogue.ts`. No page changes. |
| Design tokens | **Real values** as of 7 Aug — Cormorant Garamond + Inter, warm palette, editorial rhythm | Change values in `src/app/globals.css` **and** `src/lib/tokens/contrast.ts` together; the test fails if they drift or drop below AA. |

Everything visual is a placeholder, and the running site says so in a banner.

---

## What is built

**Design tokens** (`src/app/globals.css`) — the full §2.5 token shape: type
scale, palette, space, grid, motion, elevation, image ratios. Breakpoints are
locked to 768 / 1024 / 1440 by deleting Tailwind's `sm` and `2xl` stops, so a
fourth breakpoint cannot appear out of habit.

**Typography** — Cormorant Garamond for display, Inter for UI, both self-hosted
by `next/font` so there is no runtime request to Google and no shift while a
webfont loads. Tracking goes **negative** at display sizes: letterspacing that
reads as generous at 15px reads as loose at 56px. Cormorant is deliberately not
used below ~18px, where its thin strokes disappear.

**Contrast contract** (`src/lib/tokens/contrast.ts`) — all 22 ink-on-surface
pairs are computed and asserted against WCAG minimums. §2.5 asks for this at
token-definition time rather than at audit time; it caught two failing
placeholder values on first run.

**Domain model and controlled vocabulary** (`src/lib/domain/`) — the §2.1/§2.2
metafield and metaobject shape as plain types. `taxonomy/facets.json` is the
source of truth and `taxonomy.ts` is a typed reader over it, so the vocabulary
stays reviewable by someone who will never open a `.ts` file. This is the
governance rule from §7.3 made executable: a facet value not in the vocabulary
fails a test. Transliteration forks (`kadwa` → `kadhua`, `mina` → `meenakari`)
resolve through aliases, so search is forgiving without the vocabulary forking.

Alias resolution is **facet-scoped, never global** — `gold` is claimed by both
`zari.gold` (the metallic thread) and `colour.gold` (the shade), both are
correct, and resolving without naming the facet would silently pick one.

**Facet engine** (`src/lib/facets/`) — multi-select within a group, AND across
groups, live counts that exclude their own group, canonical URL encoding.
Query-string grammar for facets, sort *and* pagination alike, fixing the mixed
grammar noted in `pre-build-gaps.md` §6.

**Pages** — homepage (section registry), PLP with faceting, PDP, campaign
stories and craft pages, grouped search.

**Cart** — drawer with focus trap, localStorage persistence, cross-tab sync.
Stops at checkout, which now goes to Razorpay and is not wired up yet.

**Admin** (`/admin`) — scrypt password hashing with the cost parameters stored
per-hash, opaque server-side sessions so a sign-out revokes immediately, and a
product list plus create/edit/delete/publish. Every server action re-checks the
session: the layout guard protects what is *rendered*, not what is *callable*.
Facet fields are dropdowns from `taxonomy/facets.json`, so a new weave cannot be
invented by typing it.

---

## Findings from building it

Three things the specs did not anticipate, all now fixed:

1. **Two of the placeholder token values failed AA.** Accent on the sand
   surface measured 4.3:1 and the input rule 2.7:1. The sand surface is the
   footer, which contains the newsletter form — so the failing pair sat on a
   real control. Both corrected before any component used them.

2. **A single hairline colour cannot serve both jobs.** Decorative dividers want
   to be nearly invisible; form-control boundaries owe 3:1 under WCAG 1.4.11.
   The palette now carries `--color-rule` and `--color-rule-input` separately.

3. **Heading level is a property of position, not of component.** The first
   heading-order run found the PLP grid skipping h1 → h3, and craft pages
   shipping no h1 at all. Both are the defect measured on the reference PDP
   (H1 → H4 → H4 → H2 → H4 → H5). Card and hero heading levels are now passed
   in by the enclosing page.

4. **Availability and dispatch mode are different questions.** A piece can be
   sold out *and* made to order. Merging them into one facet is the modelling
   error that put "Pre-Order:" into 463 product titles on the reference site,
   so they are two facets here.

5. **Two lookaheads in the ported originality gate were silently inert.**
   `/box-shadow\s*:\s*(?!none)/` looks correct and is not — `\s*` backtracks to
   zero width, the lookahead then sees a space rather than `none`, and
   `box-shadow: none` matches its own exemption. Both rules now read the
   declaration's value instead.

---

## Verified behaviour

Checked in a real browser against the running app, not inferred:

- Facets multi-select; counts hold in the selected group while narrowing others;
  URL syncs without a reload; back button restores the previous selection
- Sold-out PDP swaps add-to-cart for the notify form; JSON-LD reports
  `OutOfStock` with all gallery images, `material`, `color` and weave/motif
- Gallery renders 5 × 2:3 then 1:1, both ratios reserved
- Sticky buy bar appears once the buy block leaves the viewport
- Cart drawer traps focus, locks scroll, restores both on Escape
- Search resolves `kadwa` → Kadhua and says so on the page
- Indian lakh grouping (₹1,12,000)
- No hydration warnings

---

## Not built, and why

| Not built | Reason |
|---|---|
| Real photography | Not commissioned. Frames are schematic at exact capture ratios; `Frame.tsx` switches to `next/image` when `src` is populated. |
| Undo in the admin | Saves publish at once; revisions and "Put back" are next (`docs/admin-dashboard-plan.md`). |
| New collections from the admin | Pages, menu, text, photos and products are all editable; creating a collection is not yet. |
| Razorpay checkout | Needs an account with business KYC — start that early. |
| Confirmation emails, refunds | Orders are listed and can be marked sent/delivered in the admin; emails and refunds are not built. |
| Algolia search | Deferred. The grouped result shape is built; at a few hundred products the SQLite scan is fine. |
| 9 of 15 section types | Sprint 4. Adding one is a union member plus a registry case. |
| Filter drawer below 1024px | Collapses to a disclosure instead. Same behaviour, less polish. |
| Heading lint on dynamic routes | The lint reads prerendered HTML, so PLP and search sit outside it. Needs a browser pass in Sprint 6. |

---

## Still blocking, unchanged

These are the specs' open items and none of them moved:

1. **Design token values** — a designer deliverable (§2.5). Placeholders are in
   place and the swap is contained.
2. **Editorial writer** — the architecture assumes a ~90-word narrative, a
   proper name and ~6 alt strings per SKU, permanently (§7.7). Fixture copy is
   placeholder, written to prove the content model.
3. **Facet taxonomy sign-off** — `taxonomy/facets.json` is a draft with **11
   decisions open**, written up for a reviewer in `taxonomy/REVIEW.md`. The one
   that matters most is whether the canonical spelling is `kadhua` or `kadwa`,
   split exactly 50/50 across 32 tag variants on the reference catalogue with
   no frequency signal to break the tie. It becomes a URL, so it is free to
   change now and expensive after launch. `npm run check:taxonomy` reprints the
   list.
4. **Photography quotes** — the brief is written and unsent.

---

## Note on this folder

`node_modules` inside OneDrive will churn the sync client and slow installs.
Either exclude `tantu/node_modules` from OneDrive sync, or move the repo out of
OneDrive once it is under git.
