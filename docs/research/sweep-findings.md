# Competitive Sweep — tilfi.com

Live sweep, 5 August 2026. Method: DOM inspection, `products.json` extraction across the full catalogue, `performance` API resource timing, and manual interaction. All figures measured, not estimated. Sample: 3,000 products (API page cap), 4,810 images, 971 sarees.

This document resolves §8 of `build.md` and adds the imagery forensics that feed `photography-brief.md`.

---

## 1. Imagery forensics

The single most useful finding: **the shot template is decodable from image position.**

### 1.1 Aspect ratios

| Ratio | Count | Share |
|---|---|---|
| 0.667 (2:3 portrait) | 4,330 | 90.0% |
| 1.000 (1:1 square) | 442 | 9.2% |
| Everything else | 38 | 0.8% |

Two ratios carry the entire catalogue. The stragglers are legacy uploads, not a third format.

### 1.2 Master file dimensions

| Dimensions | Count | Note |
|---|---|---|
| 1600 × 2399 | 1,872 | primary portrait master |
| 1440 × 2159 | 958 | older portrait master |
| 1440 × 2160 | 681 | older portrait master |
| 1600 × 2400 | 342 | primary portrait master |
| 2000 × 2000 | 229 | square detail |
| 2000 × 2999 | 172 | high-res portrait (newest) |
| 800 × 1200 | 97 | legacy, undersized |
| 1600 × 1600 | 95 | square detail |

The 2399/2159 oddities are off-by-one crops from a batch action, not a deliberate spec. Four generations of master size are visible in one catalogue — 800px, 1440px, 1600px, 2000px — which means no locked capture spec has ever been enforced.

**Correction after re-sampling:** the *largest* master observed is 3,931px wide, so the catalogue is not hard-capped at 1600–2000px as the frequency table alone suggests. But those large files are outliers. The overwhelming majority of the catalogue sits at 1440–1600px wide, which is what a buyer will actually hit when they zoom.

### 1.3 Frames per SKU — sarees only (n = 511 sampled)

| Frames | SKUs |
|---|---|
| 4 | 30 |
| 5 | 135 |
| 6 | 298 |
| 7 | 37 |
| 8+ | 8 |

Mean 5.71, median 6. Catalogue-wide (all product types) the mean drops to 4.81 — sarees get the most coverage.

### 1.4 Ratio by gallery position — this is the shot template

| Position | Portrait 2:3 | Square 1:1 |
|---|---|---|
| 1 | 506 | 3 |
| 2 | 507 | 3 |
| 3 | 504 | 5 |
| 4 | 497 | 9 |
| 5 | 419 | 58 |
| 6 | 54 | **287** |
| 7 | 12 | **32** |

Read down the column and the recipe falls out:

> **Frames 1–5: portrait, on-model. Frames 6–7: square, detail/flat.**

The switch happens hard at position 6 in this cohort.

### 1.4a Verification re-sample — the pattern is real but less disciplined than it first looks

An independent re-sample of a different 471 sarees (2,632 images, no overlap with the set above) shows the same direction with much softer edges:

| Position | Portrait | Square | Square share |
|---|---|---|---|
| 1 | 440 | 31 | 7% |
| 2 | 436 | 35 | 7% |
| 3 | 417 | 53 | 11% |
| 4 | 339 | 122 | 26% |
| 5 | 228 | 143 | 39% |
| 6 | 77 | 158 | 67% |
| 7 | 23 | 73 | 76% |
| 8+ | 5 | 52 | 91% |

So the honest version of the finding:

- **Directionally certain.** Portrait dominates early positions, square dominates late. Frames 1–3 are on-model portrait in 89–93% of cases across both samples. Positions 6+ are detail frames in two thirds to nine tenths of cases.
- **The hard switch is not catalogue-wide.** One cohort — almost certainly the newer stock — follows a tight 5-portrait + 1-square template. The wider catalogue drifts, with square frames appearing as early as position 4.

That drift is itself the useful finding: **they have converged on a template recently but never retro-fitted the back catalogue.** Their grid is inconsistent as a result. Locking the template from SKU #1, as §13 of the photography brief requires, is a cheap advantage — it costs a decision, not money, and it cannot be bought back later once a few hundred pieces are shot and sold.

Filenames confirm a third element: separate blouse-piece frames (`..._Blouse-Image.jpg`), shot flat.

### 1.5 Delivery pipeline

- **Formats served: JPEG and PNG only.** No WebP, no AVIF. On a category that is 90% imagery, this is the biggest single performance own-goal on the site.
- **`srcset` ladder declares 200w → 5000w** (16 steps) while most masters are 1440–1600px wide (largest observed: 3,931px). For the bulk of the catalogue the upper half of the ladder is fiction — the browser can request 3000w or 5000w and receive an upscale.
- **No WebP or AVIF served anywhere**, re-verified across the full resource list.
- **Hero image: 381 KB.** Catalogue average 35 KB.
- **`loading="auto"`** on product images — no explicit lazy-loading, no `fetchpriority` hint on the LCP image.
- Grid thumbnails carry a small bottom-right watermark.

---

## 2. PDP anatomy

Measured on a ₹49,500 saree. Page height 2,584px against an 889px viewport.

Module order, top to bottom:

1. Announcement bar (shipping + duties)
2. Utility row — search, currency, login, wishlist, cart
3. Main nav (7 top-level, centred logo)
4. Breadcrumb (`Home › All › Product`)
5. Two-column body: stacked image column left, copy right
6. Title → SKU → price → "MRP inc. of taxes"
7. Named-piece heading, then a ~90-word narrative paragraph
8. Five labelled attributes — Colour, Technique, Fabric, Speciality, brand promise
9. Handloom-irregularity disclaimer (italic)
10. **Add to cart** — at y=1168
11. Tab group — Shipping / Dimensions / Care / Other
12. "You may also like" — 3 items, same design in alternate colourways
13. Footer

### What's notable

**Add to cart sits 1.3 screens below the fold, with no sticky bar.** On a ₹49,500 item with a single variant. The gallery column is taller than the copy column, so the button is pushed down by images the buyer has already scrolled past.

**No reviews, no ratings, no UGC anywhere on the PDP.** Deliberate — luxury positioning avoids star ratings — but it removes the only social-proof surface, and there is no substitute (no "as seen in", no styling credits).

**Copy is genuinely strong and expensive to produce.** Every saree has a proper name and a bespoke ~90-word narrative referencing motif, technique, and region. This is the moat, and it is a per-SKU writing cost across ~971 sarees. Any competitor matching the architecture but not the copy will read as thinner regardless of build quality.

**Cross-sell is colourway-only.** All three "you may also like" items were the same design in other colours at the same price. Simple, and probably correct for this category, but it does nothing for discovery.

**Variant model is trivially simple.** `Title: 1` — one variant per product. Sarees are unique pieces, so inventory is 1. This makes the whole variant/size layer optional in a saree-first build.

---

## 3. Facets, cart, search

### 3.1 Facets — path-based Shopify tag filtering

```
/collections/sarees              → base
/collections/sarees/red          → one filter
/collections/sarees/katan-silk+red   → two filters
```

Tags alphabetised and `+`-joined into the path. Full page load per change; no History API, no partial render.

- **Radio buttons — one value per group.** Cannot select Red *and* Maroon.
- Options prune to co-occurring values: after Red, the Colour group drops from 18 options to 2 (Red, Off-White).
- Per-group `clear` link appears once active. Groups: Colour, Fabric, Type, Price, plus more below the fold.
- Sort is a separate native `<select>` (Featured default).

This is the weakest system on the site. Multi-select, result counts, and URL-state-without-reload are all table stakes now and all absent.

### 3.2 Cart — anchored mini-cart dropdown

Not a side drawer, not a page. Clicking the bag drops a panel beneath the header: "Shopping Cart (0)", bag glyph, empty-state line, "Continue shopping", count repeated at the foot. URL unchanged.

### 3.3 Search — centred modal with grouped typeahead

Page dims behind an overlay. Typing returns live results in four labelled groups: **Popular Suggestions → Categories → Pages → Products** (with thumbnails). Query term bolded in suggestions. Powered by Searchanise.

The grouping is the good idea here — routing a shopper to a *category* or an *editorial page*, not just a product, suits a catalogue this deep.

### 3.4 Breakpoints

By media-query rule frequency across all stylesheets:

| Breakpoint | Rules |
|---|---|
| 798 / 799px | 217 |
| 480 / 481px | 113 |
| 1024 / 1025px | 49 |
| 768 / 767px | 18 |

So: mobile <480, tablet 480–798, desktop 798–1024, wide >1024. The 798px value is a legacy theme artefact — there is no reason to inherit it. Use 768 / 1024 / 1440.

---

## 4. IA and editorial

- **≥3,000 products** (API page cap hit), **971 sarees**, **250+ collections**, **130 links in the header nav**, 40 of them to static pages.
- **125 blog/editorial URLs** in the sitemap.
- Seven top-level nav items: Shop, Collections, Campaigns / Craft, Stories, About Us.
- Collection handles reveal at least five overlapping taxonomies fighting for the same shelf:
  - price bands (`30000-40000`)
  - colours (`beige`, `black`, `blue`, `brown`)
  - fabrics (`chiffon-georgette`, `linen`)
  - product types (`blouses`, `caps`, `co-ord-set`, `accessories`)
  - poetic campaign names (`a-quiet-interlude`, `birds-of-kashi`, `charbagh`, `antinomy`, `basant`)
- Geo-targeted SEO collections exist (`banarasi-sarees-usa`).

**The lesson to take, and the one to avoid.** The editorial-and-campaign layer is the brand — named collections with their own worlds are what separate this from a marketplace listing. But 250 collections against 3,000 products is roughly one collection per twelve products, and the nav can only surface a fraction. Most of that taxonomy is dead weight built for SEO, and it dilutes the campaigns that actually matter.

Budget for the editorial layer as a permanent function, not a launch task: at this scale it implies a writer producing named-piece copy for every SKU plus roughly two long-form stories a month, indefinitely.

---

## 5. Tech and performance

Measured on the PDP:

| Metric | Value |
|---|---|
| Total requests | 348 |
| Transfer | ~1.0 MB |
| Scripts | 111 requests |
| `<link>` elements | 118 |
| Images | 21 requests, 738 KB (72% of payload) |
| CSS | 10 files, 22 KB |
| iframes | 5 |

**Third-party hosts observed:** Shopify CDN, Klaviyo (email), Searchanise (search), Razorpay (payments), Google Tag Manager + Analytics, Pinterest Ads, LinkedIn Ads, Intuit/Mailchimp, Shopify OTLP telemetry.

111 script requests on a product page is a tag-manager problem, not an engineering one — but it is the kind of debt that accretes silently and then can't be removed because nobody knows which pixel finance depends on. Decide your marketing tag policy before launch, not after.

**Stack:** Shopify (custom Liquid theme, section-based). Sensible for this category — it removes payments, tax, and duties from your build scope entirely.

---

## 6. What to copy, what to beat

**Copy:**

- The 5-portrait + 1–2-square shot template. It's a solved production problem; don't re-solve it.
- Named pieces with bespoke narrative copy. This is the moat.
- Grouped search results (products / categories / editorial), not a flat product list.
- Duty-paid international shipping messaging in the announcement bar. Removes the single biggest objection for overseas buyers.
- One-variant inventory model for unique pieces.

**Beat:**

| Their weakness | Your move |
|---|---|
| Radio-button facets, full page reload | Multi-select, result counts, History API |
| ATC 1.3 screens below fold, no sticky bar | Sticky buy bar from the moment the gallery scrolls |
| JPEG/PNG only | AVIF with WebP fallback — 40–60% payload cut on a 72%-image page |
| Masters capped at 1600px, ladder claims 5000w | 3000px+ masters, honest `srcset`, real zoom |
| No social proof of any kind | Styling credits, provenance, weaver attribution — proof without star ratings |
| 250 collections, ~1 per 12 products | Fewer, deeper, editorially-earned collections |
| 798px breakpoint | 768 / 1024 / 1440 |
| 111 scripts on a PDP | Tag budget agreed before launch |

---

## 7. Originality note

Nothing in this document reproduces Tilfi imagery, product copy, or campaign names as reusable assets. Campaign handles are cited only as evidence of taxonomy sprawl. The photography brief derived from this sweep specifies *format and process* — ratios, frame counts, colour management — which are category conventions, not proprietary creative.
