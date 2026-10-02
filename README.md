# Rajraani

Handloom Banarasi saree e-commerce. Own brand, category architecture.

---

## Start here

| If you want to… | Read |
|---|---|
| **Know where the project stands** | [HANDOFF.md](HANDOFF.md) — resume state, kept current (§2.58 is the latest) |
| **Use the admin (shop owner)** | [docs/admin-guide.md](docs/admin-guide.md) — plain-language guide to changing the site |
| **Know how the admin is built, and what is left** | [rajraani/docs/admin-dashboard-plan.md](rajraani/docs/admin-dashboard-plan.md) |
| **Run the site** | [rajraani/README.md](rajraani/README.md) |
| **Understand why it is built this way** | [docs/research/build.md](docs/research/build.md) |
| **Know what changed on 6 Aug** | [rajraani/docs/architecture-change-2026-08-06.md](rajraani/docs/architecture-change-2026-08-06.md) |

```bash
git config core.hooksPath .githooks   # once per clone — runs the gate before every push

cd rajraani
npm install
npm run db:reset                                          # create and seed the database
node scripts/create-admin.mjs you@example.com a-password  # 12 characters or more
npm run dev                                               # http://localhost:8080
```

> **GitHub Actions is not running yet** — the account is new and its jobs are being
> cancelled in the queue before a runner picks them up. See `HANDOFF.md` §2.35. The
> `pre-push` hook runs the same gate locally in the meantime, which is why the
> `core.hooksPath` line above matters.

Shop at **/**, admin at **/admin**. On a developer machine the admin needs no sign-in;
on a deployed build it always does.

---

## Progress at a glance — 27 September 2026

**Roughly 82% of the build is done** (73% on 24 September). **The admin is complete for
daily use (~92%)**: every word, photo, page, menu, footer, product, price, collection,
order, customer, discount and sign-up is managed without a developer, every change can
be put back, and it works on a phone. What blocks going live is not the admin:

1. **Payments** — real Razorpay orders, signature checks and a webhook are built (HANDOFF §2.58); keys, hosting and staging tests remain ([rajraani/LAUNCH_READINESS.md](rajraani/LAUNCH_READINESS.md)).
2. **Photography** — every photo is still a stand-in; 87 on pages, 36 pieces to shoot.
3. **Hosting** — the database and uploaded photos need a server with a persistent disk.

The full ledger, with what is left and how long it takes, is HANDOFF §2.55.

**Redesign, 1–2 October 2026:** done and kept. A cinematic dark homepage, and white shop pages with black condensed capitals and gold accents, sharing one header, menu and footer. Admin edits reach every new piece. Status, palette and type scale: HANDOFF §2.57 (the rejected attempts are in §2.56).

---

## What is in this folder

```
README.md          This file — the front door.
HANDOFF.md         Where the project stands, and what to do next.
rajraani/          The site. Everything that runs.
docs/
  admin-guide.md   How the shop owner changes the site. Plain language.
  research/        The analysis documents. The reasoning behind the build.
  specs/           Page specifications (homepage).
  design/          The Stitch design-system export (HTML; PNG renders not in git).
  brand/           The logo.
  archive/         Superseded artefacts, kept as a record.
pics/              Local stand-in photography. Gitignored — never committed.
```

### `rajraani/` — the site

```
src/app/(storefront)/   The shop: home, listings, product pages, editorial, search
src/app/admin/          The admin: overview, text, menu, pages, photos, products, orders
src/components/         Shared components
src/lib/                Domain model, database, faceting, auth, money
taxonomy/               The controlled vocabulary + its review sheet
sanity/                 The content model (schemas kept; Sanity itself dropped)
scripts/                Seeding, admin creation, and the CI gates
docs/                   Decisions specific to the build
```

### `docs/research/` — why it is built this way

Written before any code, from a measured study of the category leader. **Every
figure in them was measured, not estimated.** They are the reason the build makes
the choices it does, and they are worth reading before changing an architectural
decision.

| Document | What it settles |
|---|---|
| [build.md](docs/research/build.md) | The architecture, data model and sprint plan. **The main one.** |
| [design.md](docs/research/design.md) | Design system and page anatomy |
| [design-addendum.md](docs/research/design-addendum.md) | Navigation, product data, PDP anatomy — all measured |
| [sweep-findings.md](docs/research/sweep-findings.md) | Imagery forensics, facets, cart, search, performance |
| [pre-build-gaps.md](docs/research/pre-build-gaps.md) | Data quality, availability, SEO, accessibility |
| [photography-brief.md](docs/research/photography-brief.md) | **Sendable to studios.** Catalogue stills — template, ratios, colour, budget. Needs SKU counts at §1. |
| [creative-direction.md](docs/research/creative-direction.md) | **Send with the above.** The look, campaign imagery, and film — which the photography brief does not cover. |
| [admin-analysis.md](docs/research/admin-analysis.md) | An early study of the reference site and a first admin-panel sketch. Superseded by `rajraani/docs/admin-dashboard-plan.md`. |

Note that `build.md` §1.1 and §1.3 are **superseded** — Shopify and Sanity were
dropped on 6 August. Everything else in it still stands.

### `docs/archive/`

`prototype.html` — the clickable architecture prototype, from before the real
build. Still says "Tantu", the placeholder name. Kept as a record; not maintained.

---

## Standing constraints

- **Originality.** No competitor imagery, copy or campaign names anywhere —
  including in seed data and fixtures. This is an acceptance criterion, and it is
  enforced in CI by `npm run check:originality`, not by memory.
- **The vocabulary is closed.** Weaves, fabrics, colours and motifs come from
  `rajraani/taxonomy/facets.json`. Nobody can invent a term by typing it — the
  database refuses. This is what prevents the 1,592-tag mess measured on the
  reference catalogue.
- **Editorial is the moat.** ~90 words and a proper name for every piece,
  permanently. The architecture assumes it.
