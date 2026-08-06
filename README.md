# Rajraani

Handloom Banarasi saree e-commerce. Own brand, category architecture.

---

## Start here

| If you want to… | Read |
|---|---|
| **Know where the project stands** | [HANDOFF.md](HANDOFF.md) — resume state, kept current |
| **Run the site** | [rajraani/README.md](rajraani/README.md) |
| **Understand why it is built this way** | [docs/research/build.md](docs/research/build.md) |
| **Know what changed on 6 Aug** | [rajraani/docs/architecture-change-2026-08-06.md](rajraani/docs/architecture-change-2026-08-06.md) |

```bash
cd rajraani
npm install
npm run db:reset                                          # create and seed the database
node scripts/create-admin.mjs you@example.com a-password  # 12 characters or more
npm run dev                                               # http://localhost:8080
```

Shop at **/**, admin at **/admin**.

---

## What is in this folder

```
rajraani/          The site. Everything that runs.
docs/research/     Six analysis documents. The reasoning behind the build.
archive/           Superseded artefacts, kept as a record.
HANDOFF.md         Where the project stands, and what to do next.
```

### `rajraani/` — the site

```
src/app/(storefront)/   The shop: home, listings, product pages, editorial, search
src/app/admin/          The admin: sign in, manage pieces
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
| [photography-brief.md](docs/research/photography-brief.md) | **Sendable to studios.** Needs SKU counts filling in at §1. |

Note that `build.md` §1.1 and §1.3 are **superseded** — Shopify and Sanity were
dropped on 6 August. Everything else in it still stands.

### `archive/`

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
