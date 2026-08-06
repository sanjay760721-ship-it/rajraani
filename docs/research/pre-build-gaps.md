# Pre-Build Gap Report

**Sweep 4 — deep pass, 5 August 2026.** Areas not covered by earlier sweeps: catalogue data quality, campaign architecture, availability model, currency/markets, SEO structured data, accessibility.

Method: full-catalogue extraction across 3,000 products, `HEAD` probes on 54 URLs, computed-style and DOM inspection on PDP and PLP.

**Verdict: nothing here blocks Sprint 0.** Two findings materially change estimates in `build.md`, three change acceptance criteria, and one changes a component priority. All are folded back into `build.md`.

---

## 1. The catalogue data is far dirtier than estimated — resize §7.3

`build.md` §7.3 budgeted **one week** for tag migration and warned the vocabulary was "genuinely dirty." Measured, it is worse than that description implies.

| Metric | Measured |
|---|---|
| Products sampled | 3,000 |
| **Unique tags** | **1,592** |
| Average tags per product | 9.9 |
| **Tags used exactly once** | **703 (44%)** |
| Tags used fewer than 5 times | 985 (62%) |
| Near-duplicate groups (case/plural/separator) | 93 |
| Colour-ish tags | 207 |
| Price-band tags | 11 |
| Stock-state tags | 4 |

### Why this is not a one-week script

**Case and plural collisions are the easy half.** `saree` / `sarees` / `Saree`, `blouse` / `blouses`, `Kadhua` / `kadhua`, `off-white` / `offwhite`, `in-stock` / `in stock`, `kadwa  bootis` (double space) / `kadwa booti` / `kadwa bootis`. A normalisation pass catches these 93 groups.

**Transliteration forks are the hard half, and no script solves them:**

| Variant A | Count | Variant B | Count |
|---|---|---|---|
| `kadhua`* | 16 tags | `kadwa`* | 16 tags |
| `boota`* | 26 tags | `buta`* | 2 tags |
| `meena`* | 38 tags | `mina`* | 1 tag |

`kadhua` and `kadwa` are the same weaving technique, split **exactly 50/50** across 32 tag variants. Deciding which spelling is canonical is a domain judgement about Banarasi weaving vocabulary — it needs a weaver, a merchandiser, or a subject expert, not a developer with a regex. The same applies to motif vocabulary generally.

**And 44% of the vocabulary is single-use**, which usually means typos, one-off merchandising experiments, and abandoned campaign tags. Each needs a human decision: map, merge, or drop.

### Revised estimate

> **2–3 weeks, and it needs a domain expert alongside the engineer.** One week buys the normalisation script and a dry-run report. It does not buy the reconciliation.

This does not delay Sprint 0 or 1 — but it should be scheduled as a parallel workstream with a named non-engineering owner, not as an engineering task inside Sprint 1.

**Note on scope:** this only matters if you are migrating an existing catalogue. If the catalogue is greenfield, the finding inverts into a warning: **this is what happens without a controlled vocabulary from day one.** Define the facet taxonomy before the first product is created, and never let merchandisers create free-text tags.

---

## 2. Sold-out is half the catalogue, not an edge case

| State | Products | Share |
|---|---|---|
| First variant available | 1,523 | 51% |
| **First variant unavailable** | **1,477** | **49%** |

This is the arithmetic consequence of unique-piece inventory: every piece has inventory of 1, it sells, and the page stays live for SEO and discovery.

**Consequences for the build:**

- The **sold-out PDP is a primary template**, not a fallback. Roughly half of all product page views land on one.
- `NotifyWhenRewovenForm` moves from a nice-to-have to a **core conversion surface**. It is the main capture mechanism on half the catalogue.
- The PLP must handle sold-out gracefully at scale — a grid where every other card is greyed out reads as a dying store. Consider default-sorting available items forward, with sold-out browsable but not dominant.
- Merchandising and facet counts must be honest about availability, or shoppers filter into empty grids.

`build.md` §6 already requires "sold-out PDP shows notify-form, not a dead button." That criterion is right; this finding says it is load-bearing rather than defensive.

---

## 3. Pre-order is encoded in product titles — a data-modelling failure worth not repeating

**463 products have `Pre-Order:` prefixed to the product title itself.**

The consequences are visible across the reference site: the prefix appears in breadcrumbs, page titles, search results, cart line items, `og:title`, and the JSON-LD `name` field. A merchandising state has been baked into the product's identity, so removing it later means editing 463 titles and accepting the SEO churn.

Fulfilment-state tags exist but cover only 1,098 of 3,000 products (`in-stock` 717, `pre-order` 375, `Ready to ship` 2, `in stock` 4) — so tags are not a reliable state source either.

**This validates `build.md` §2.1's `fulfilment_mode` metafield** (`ready_to_ship | made_to_order | pre_order`). Add an explicit acceptance criterion: *no fulfilment state may appear in a product title.* Badging is presentation; it belongs to the template.

Related dirt: option names include `Style`, `Title`, `Options`, `Options ` (trailing space), `Option`, `Blouse`. Normalise on creation.

---

## 4. Campaign↔collection pairing is real but partial — and handles cannot identify a campaign

`design-addendum.md` A3 claimed **every** campaign is a pair of `/pages/x` and `/collections/x`. `build.md` §2.2 calls this "the single most important structural finding."

Tested directly:

| Test | Result |
|---|---|
| 24 campaign-*looking* collection handles → does `/pages/{handle}` exist? | **0 of 24** |
| 30 nav `/pages/` handles → does `/collections/{handle}` exist? | **9 of 30** |

Confirmed pairs: `antinomy`, `awadh`, `kala`, `intersections`, `of-threads-and-time`, `the-way-of-flowers`, `quarter-to-time`, `silk-wool`, `the-art-of-gifting`.

**The claim survives, with an important correction.** Genuine campaigns *are* paired. But most poetic-sounding collection handles are not campaigns at all — they are ordinary merchandising collections that happen to have evocative names (`a-quiet-interlude`, `a-motley-crew`, `heritage-pieces`). **You cannot tell a campaign from a collection by looking at its handle.**

That is an argument *for* the modelling decision already in `build.md` §2.2: making `campaign` a first-class metaobject with explicit `story_page_ref` and `collection_ref` makes explicit what the URL structure cannot express. Keep it, and treat the pairing as an authored relationship rather than a naming convention.

Also observed: handle casing is inconsistent — `campaignpage_songs_of_the_season_` sits among otherwise kebab-case slugs. Enforce a slug pattern at the CMS layer.

---

## 5. Accessibility baseline — worse than recorded, and a real opportunity

`design.md` §11 warned against "the current pattern of repeating the full product title twice" in alt text. **That is not the current pattern.** Measured on a live PDP:

| Check | Result |
|---|---|
| Product images with alt text | **0 of 8 — every alt is empty** |
| Form inputs without a label or `aria-label` | **65 of 81** |
| Skip link | **Absent** |
| Heading order | **Broken** — H1 → H4 → H4 → H2 → H4 → H5 → H2 → H3 |
| `lang` attribute | Present (`en`) |

Empty alt on decorative images is correct practice. Empty alt on **the product image, on a product page, where the image is the entire product** is a straightforward WCAG 1.1.1 failure — and on a catalogue this visual it also forfeits image-search traffic.

`build.md` §6 already requires WCAG 2.2 AA and descriptive alt text. This finding says the bar is lower than assumed, so **AA is a genuine differentiator here, not just compliance.** Add: skip link, labelled inputs, and a heading-order lint in CI.

**Alt-text policy to specify now**, because it interacts with §7.7 editorial staffing: alt text should describe *the frame*, not repeat the title — e.g. weave, motif, colour, and shot type. That is 6 alt strings per SKU. At catalogue scale it is a content cost, and it should be part of the same writing brief as the narrative copy, not retrofitted.

---

## 6. SEO — pagination is right, structured data and hreflang are not

**Done well (copy it):** collection pagination carries a self-referencing canonical per page (`/collections/sarees?page=3`), `rel=next` and `rel=prev`, `index,follow`, and a "Page 3" title suffix. That is textbook and worth replicating.

**Gaps:**

| Issue | Detail |
|---|---|
| **No `hreflang` at all** | Zero `rel=alternate hreflang` tags despite 8 active currencies. `build.md` §7.5 flagged multi-currency SEO as fiddly — the reference site simply has not solved it. **This is an open competitive gap.** |
| **Thin `Product` schema** | Only `name, image, description, brand, sku, offers`. Just **1 image** where the PDP has 6–8. No `material`, `color`, `additionalProperty` — all rich-result eligible and all obvious for textiles. |
| **No `ItemList` / `CollectionPage` schema** on the PLP | Only `BreadcrumbList` and `WebSite`. |
| **Mixed URL grammar** | Facets use path segments (`/collections/sarees/katan-silk+red`) while pagination uses a query param (`?page=3`). Pick one grammar. |

Add to Sprint 6: full `Product` schema with all gallery images, `material`, `color` and weave/motif as `additionalProperty`; `ItemList` on PLPs; and hreflang across markets.

---

## 7. Platform confirmation

| Fact | Value |
|---|---|
| Active currencies | **8 — INR, USD, CAD, GBP, AUD, EUR, JPY, SGD** |
| Theme | `Becoming` (commercial Shopify theme), role `main` |
| Locale | `en` only |
| Variants per product | 2,938 of 3,000 are single-variant |

The 8-currency list **exactly matches** the Markets configuration already specified in `build.md` Sprint 0. No change needed.

Worth noting: the reference site runs a **bought commercial theme**, not a bespoke build. Much of what we have catalogued as "their design decisions" — the 798px breakpoint, the block-layout product grid, the anchored mini-cart, the numbered pager — are theme defaults they never overrode. That reframes the competitive picture: the bar is a well-merchandised off-the-shelf theme, not a custom engineering effort.

---

## 8. What actually remains before building

Nothing in this report blocks Sprint 0. Ordered by what genuinely gates work:

| # | Item | Blocks | Owner |
|---|---|---|---|
| 1 | **Design tokens** — values per `build.md` §2.5 | Sprint 1 | Designer (unassigned) |
| 2 | **Editorial writer confirmed** — §7.7, now including alt-text policy (§5 above) | Sprint 4 | Hiring |
| 3 | **Catalogue origin: migration or greenfield?** Decides whether §1 is a 3-week workstream or a governance rule | Sprint 1 scope | You |
| 4 | **Facet taxonomy defined** — the controlled vocabulary tags must map to | Sprint 3 | You + domain expert |
| 5 | **Photography quotes** — brief is written, quotes not collected | Production shoot | You |
| 6 | **What to build first** — prototype / production / design system | Everything | You |

Items 1, 2, 3 and 6 are decisions you can make this week without further research. Item 4 needs a weaving-vocabulary conversation. Item 5 needs three emails.

**Research is done.** Four sweeps have now covered structure, imagery, tokens, data quality, architecture, SEO and accessibility. Further scanning will produce detail, not decisions.
