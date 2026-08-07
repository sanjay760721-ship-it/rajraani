# Project Handoff — Rajraani

**Last updated:** 5 August 2026 (Sprint 0 build session)
**Purpose:** Resume state. Read this first in any new session, then read the two documents it points to.

---

## 0. Brand name — settled

> **Rajraani.**

Decided 5 August 2026. It replaces the placeholder "Tantu" used in `prototype.html`.
The Shopify metafield/metaobject namespace is `rajraani`, not the competitor's — set in
`rajraani/src/lib/brand.ts` and enforced by an originality gate in CI.

The rename was a single edit to that one file, which is what isolating brand constants
bought. A test fails if the name appears hardcoded anywhere else.

**`prototype.html` still says "Tantu".** It is a superseded artefact kept for reference;
the live build is `rajraani/`. Don't reconcile the prototype — retire it now
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
| Platform decision | ⚠️ **CHANGED 6 Aug** — Shopify and Sanity dropped. Razorpay + our own database and admin, India-only. See `rajraani/docs/architecture-change-2026-08-06.md`. This supersedes `build.md` §1.1 and §1.3. |
| Brand name | ✅ **Rajraani.** Settled 5 Aug. |
| Design tokens | ✅ **Authored 5 Aug, real values 7 Aug** — `rajraani/src/app/globals.css`. Cormorant Garamond + Inter via `next/font`, warm deepened palette, editorial spacing. 22 contrast pairs asserted in tests. No longer placeholders. |
| Facet taxonomy | 🟡 **Drafted 5 Aug** — `rajraani/taxonomy/`. 9 facets, 63 values. **11 decisions need domain review before Sprint 3.** |
| Catalogue and editorial content | ❌ Open — see `build.md` §7.7. Confirm the writer exists before Sprint 4. |
| Photography commissioning | ❌ Open — fill SKU counts, send brief, collect quotes |
| `prototype.html` — architecture prototype | ✅ Built 5 Aug. **Superseded by the live build** — kept for reference, still says "Tantu". |
| Catalogue origin | ✅ **Greenfield.** §7.3 is now a governance rule, not a migration workstream. |
| **Sprint 0 — Foundations** | ✅ **Built 5 Aug.** Live code is `rajraani/` — see §2.0. |
| **Sprints 1–2 — working slice** | ✅ **Built 5 Aug.** PLP with multi-select faceting, PDP with mixed-ratio gallery and sticky buy bar, homepage section registry, editorial pages, grouped search, cart drawer. All verified in a browser. |
| **Homepage 11-Section Parity** | ✅ **Built 7 Aug.** 6-slide interactive hero carousel, brand statement, kadhua triptych, artisan video band (`eef6a84960be44829508a3e3e4a77980.mp4`), 2-up category split, 4-up quick links, dual campaign split, poetry band, boutique store booking band, support strip, scroll reveal animations, crystal-sharp 100% image quality. |

### 2.0 There is one build, in `rajraani/`

```bash
cd rajraani && npm install && npm run dev     # http://localhost:3000
cd rajraani && npm run verify                 # the full gate
```

**Historical note, so the git log makes sense.** Two sessions ran concurrently on 5 August
and each produced a Sprint 0 — one in `tantu/` (which became this build) and one in a
second `rajraani/` folder. They were consolidated on 6 August: the working build was kept,
the other was absorbed and then deleted. It is recoverable from commit `d88c66c` if ever
needed.

**Absorbed from it before deletion:** the `taxonomy/` vocabulary and `REVIEW.md` (9 facets,
63 values, 11 open decisions), `check-originality.mjs`, `check-taxonomy.mjs`, and the
GitHub Actions workflow. Adopting that vocabulary reclassified `meenakari` and `shikargah`
as motifs rather than weaves, per `REVIEW.md`.

**Deliberately not absorbed:** its `design/tokens.json` and generator, which expressed the
token set as data. This build holds tokens as CSS custom properties with a typed contrast
contract instead — 22 pairs asserted in the test suite, same guarantee. Worth revisiting
only if a designer would rather exchange tokens as a JSON file than edit CSS; running both
would mean two competing sources of truth for colour.

### 2.2 Sprint 1–2 — what was built, 5 August (evening session)

All in `rajraani/`. `npm run verify` is green: **170 tests, 7 gates, exit 0.**

```bash
cd rajraani && npm install && npm run dev     # http://localhost:3000
cd rajraani && npm run verify                 # the full gate
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

### 2.3 Sprint 1 status — precisely, after the architecture change

`build.md`'s sprint plan assumed Shopify and Sanity. With both dropped, the Sprint 1
line items no longer map one-to-one. What matters now:

| Item | Status |
|---|---|
| Header · MegaMenu · MobileNavDrawer · Footer · AnnouncementBar | ✅ |
| Indian lakh price formatting | ✅ (currency layer collapsed to INR) |
| Controlled vocabulary + governance rule | ✅ Enforced by database triggers |
| Content model | ✅ Modelled in `sanity/` — kept as the model even though Sanity is out |
| Database | ✅ Schema, seed, 20 constraint tests |
| Storefront reads the database | ✅ Verified by editing a row and watching the page follow |
| **Admin — sign-in and products** | ✅ scrypt auth, opaque sessions, product list, create/edit/delete, publish/unpublish |
| **Admin — photo upload** | ❌ **Next.** The form manages everything except images. |
| **Admin — pages, navigation, campaigns** | ❌ Still code-edited |
| **Razorpay checkout** | ❌ Not started |
| Order management (orders, emails, refunds) | ❌ Not started — a consequence of dropping Shopify |

**Sprint 2** is otherwise complete (PLP, PDP, cart, sold-out flow, badging), plus the
grouped-search shape from Sprint 3 and 8 of 15 section types from Sprint 4.

The old "navigation must be CMS-driven" exit criterion is now the admin's job, not
Sanity's, and is **not yet met** — navigation still lives in
`src/lib/data/navigation.ts`.

### 2.35 ⚠️ Open at the end of 6 August

**1. ~~CI is failing~~ — diagnosed 7 August. It is not a code problem.**

All four runs executed **zero steps** and ended `cancelled`, after sitting queued
for 15–58 minutes. No runner ever picked the job up, so the workflow, the Node
version and the code were never evaluated. Actions is enabled on the repo
(`{"enabled":true}`); the account was created 1 August 2026.

**Cause: a six-day-old free account running Actions on a private repo.** GitHub
withholds or throttles runners for new accounts, and private repos draw on a
metered pool that is often not provisioned until the account is verified.

**To fix, in a browser:** check https://github.com/settings/billing for Actions
minutes and any prompt to verify the account or add a payment method. Free tier
includes 2,000 minutes/month for private repos; adding a card usually releases it
without a charge. (The billing API needs a `user` token scope, which the current
auth does not have — hence checking by hand.)

**Mitigation already in place:** a `pre-push` hook at `.githooks/pre-push` runs the
full gate before anything reaches GitHub, so CI being unavailable does not mean
unverified code ships. Worth keeping even after Actions works — it fails in seconds
rather than minutes.

> **After cloning, enable the hook once:** `git config core.hooksPath .githooks`
> `core.hooksPath` is local config and cannot be committed.

**2. Payment system is half built** — see §2.4 item 1.

**3. Photo upload is still not built.** It was the agreed next task before payments
were brought forward. A piece cannot be completed without it.

### 2.4 Pick up here

1. **Finish the payment system.** Started 6 Aug — `src/lib/orders/orders.ts` and the
   `customer_order` / `order_item` tables are done and pushed, including
   server-side pricing, the stock race guard and idempotent payment recording.
   **Still to build:** the Razorpay API calls, the checkout form, the webhook route,
   the confirmation page, and the admin order list. Also **no tests yet** — the
   pricing rules deserve them, particularly that a tampered cart cannot change the
   amount.
   Needs a **Razorpay account**: test keys arrive immediately on signup, live mode
   needs business KYC, so start it early. Keys go in `.env.local`, never in git.
2. **Photo upload in the admin.** Without it a piece cannot be finished, and
   photography is the longest-lead item in the project. Needs an upload handler, a
   store on disk, frame ordering, and alt text per frame (the database already
   refuses a frame without it).
3. **Admin for pages, navigation and campaigns.** Closes the zero-deploy-content
   criterion.
4. **Taxonomy review** — `rajraani/taxonomy/REVIEW.md`, 11 decisions, sanju + a weaver.
5. The remaining 7 section types; Portable Text serializer if the CMS model is used
   as-is (see `sanity/README.md` "Known mismatches").

**Do not rebuild Shopify or Sanity integrations.** Both were deliberately dropped on
6 August — read `rajraani/docs/architecture-change-2026-08-06.md` before assuming
otherwise.

**Getting in:** `npm run dev` serves on **8080**. Admin at `/admin/login`. Create or
reset a user with `node scripts/create-admin.mjs <email> <password>`. The dev
credential in git history is compromised by definition — change it before deploying.

**Housekeeping:** `node_modules` and `data/` sit inside OneDrive. Exclude them from
sync, or move the repo out of OneDrive. There is no git remote — push somewhere.

### Prototype — what it proved

*Historical. `archive/prototype.html` predates the real build and is not maintained.*

Open it in any browser. No server, no install, no external requests.

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

## 3. How the folder is arranged

Reorganised 6 August. [`README.md`](README.md) at the root is the front door.

```
README.md          Front door — what is here and where to start
HANDOFF.md         This file. Where the project stands, and what is next.
rajraani/          The site. Everything that runs.
docs/research/     The six analysis documents
archive/           Superseded artefacts
```

| Path | What it is |
|---|---|
| **`rajraani/`** | **The build.** Start at `rajraani/README.md`. |
| `rajraani/taxonomy/REVIEW.md` | The 11 open taxonomy decisions, written for a human reviewer. **The highest-value thing on this list that needs a person.** |
| `rajraani/docs/architecture-change-2026-08-06.md` | Why Shopify and Sanity are out. Read before assuming otherwise. |
| `docs/research/build.md` | Architecture, data model, sprint plan. The main one. §1.1 and §1.3 superseded. |
| `docs/research/photography-brief.md` | Sendable studio brief. Needs SKU counts at §1. |
| `docs/research/sweep-findings.md` | Imagery forensics, PDP anatomy, facets, cart, search, performance. Measured, not estimated. |
| `docs/research/design.md` · `design-addendum.md` · `pre-build-gaps.md` | The rest of the research |
| `archive/prototype.html` | Superseded. Still says "Tantu". Kept as a record. |

Note: the research documents name the competitor throughout — correctly, since they
*are* the competitive research. The originality rule applies to the build, not the
notes, and CI scans only `rajraani/`.

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

All research is in `docs/research/`. **Always work in this folder**, not in session
scratch space — session outputs don't survive. Everything is under git as of 6 August,
so nothing is lost to a crash either.

### 5.2 ~~Design tokens~~ — resolved 5 Aug, given real values 7 Aug

Every §2.5 group present in `rajraani/src/app/globals.css`, with all 22
ink-on-surface contrast pairs asserted in the test suite
(`src/lib/tokens/contrast.ts`).

**Real values as of 7 August**, after sanju pointed out the site looked
unfinished — which it did, and treating tokens as "a designer's deliverable"
had become the reason it stayed that way:

- **Cormorant Garamond** display + **Inter** UI, self-hosted via `next/font`.
  No runtime request to Google, no shift while a webfont loads.
- Ink deepened to `#2e2721` — the earlier value was too light to carry a
  high-contrast serif at 72px.
- Display sizes raised and tracking made **negative** at display sizes.
  Letterspacing that reads as generous at 15px reads as loose at 56px, and that
  one detail was doing much of the "unfinished" work.
- Section rhythm raised to 64 / 96 / 128px, against design.md §3.3's 104–140px
  desktop specification. Everything had been at 64.
- Hero gained a bottom-weighted scrim: white type over an uncontrolled
  photograph is a legibility gamble, and it went live the moment real images
  entered those slots.

Still engineering-authored, not a designer's. Swapping a value means editing
`globals.css` and `contrast.ts` together; the test fails if they drift or if a
value drops below AA. That contract is why the palette could be moved at all.

*(The parallel Sprint 0 held these as a `design/tokens.json` with a generator. That approach
was not carried over — see §2.0. Worth revisiting only if a designer wants tokens as data to
hand back and forth.)*

### 5.3 Editorial staffing — blocking Sprint 4

`build.md` §7.7. The architecture assumes a bespoke ~90-word narrative and a proper name
for **every SKU**, plus ~2 long-form stories a month, permanently. Confirm that person
exists before building the engine that depends on them.

### 5.4 ~~Catalogue origin~~ — resolved. Taxonomy drafted, review outstanding

Greenfield, so §7.3 is a governance rule rather than a migration.

The facet taxonomy is **drafted** at `rajraani/taxonomy/facets.json`, with the
human-readable review sheet at `rajraani/taxonomy/REVIEW.md`. 9 facets, 63
values. It is the source of truth: `src/lib/domain/taxonomy.ts` is a typed reader over it,
and `npm run taxonomy:check` fails if the generated module drifts from the JSON.

**11 decisions still need a domain reviewer before Sprint 3.** The one that matters most:
`kadhua` or `kadwa` — measured at exactly 50/50 across 32 tag variants, so no frequency
signal breaks the tie. `kadhua` is proposed. It becomes a URL segment, so it is free to flip
now and expensive after launch. One conversation with a weaver closes it.

Run `npm run check:taxonomy` to re-print the open list.

### 5.5 ~~What to build first~~ — resolved. Sprint 0 built, and Sprint 2 with it

See §2.2. The storefront runs. What remains is the database wiring, the admin panel and
Razorpay — see §2.4.

### 5.7 ~~The two accounts~~ — no longer applicable

Superseded 6 August. Shopify and Sanity were both dropped, so neither account is needed.
**Nothing external now blocks engineering** — the database, the admin and the payment
integration are all ours to build.

What still needs sanju rather than code: **photography** (§5.6 and §6), the **editorial
writer** (§5.3), and the **taxonomy review** (§5.4). Plus a Razorpay account when
checkout is ready to wire up, which needs business KYC and is worth starting early.

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
5. **Walk `rajraani/taxonomy/REVIEW.md` with a weaver or merchandiser** —
   11 decisions, most of them five seconds each. `kadhua` vs `kadwa` is the one worth real
   attention.
6. Register the domain and secure the handles for **Rajraani**
7. **Start a Razorpay account.** Business KYC takes time, so begin it well before
   checkout is ready to wire up. (Replaces the old "create a Shopify store" item —
   see §5.7.)
8. ~~Delete the superseded parallel build~~ — done 6 Aug; there is one folder now (§2.0)

**For the next session:**

1. Read this file's §2.0 → §2.4. That is the whole resume state.
2. Read `rajraani/docs/architecture-change-2026-08-06.md` — **Shopify and Sanity are
   out.** Do not rebuild either.
3. Read `rajraani/README.md` — what exists, what does not, and why
4. `cd rajraani && npm install && npm run db:reset && npm run verify` — confirm green
   before changing anything
5. **Continue at §2.4 item 1:** point the storefront at the database.

Taxonomy review is *not* a prerequisite for any of it — the vocabulary's shape is
settled, and only the canonical spellings are open.

---

## 7. Standing constraints

- **Originality:** no competitor imagery, product copy, or campaign names anywhere in the build — including Storybook fixtures and seed data. This is an acceptance criterion in `build.md`, not a guideline, and it is now **enforced by CI** (`npm run check:originality`) rather than by memory.
- **Editorial:** the architecture assumes ~45% editorial content and a writer producing named-piece copy per SKU, permanently. Confirm that person exists before building the engine that depends on them.
- **Budget reality:** photography lands at roughly ₹7,500–18,000 per SKU all-in (planning estimate, replace with quotes). For a 300-SKU launch that's ₹22–54 lakh. In this category photography is usually the larger line item, not engineering.
