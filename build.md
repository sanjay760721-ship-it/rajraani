# build.md — handloom commerce site

Companion to `design.md` (sweep 1), `design-addendum.md` (sweep 2),
`sweep-findings.md` (sweep 3), `pre-build-gaps.md` (sweep 4) and
`photography-brief.md`. This document decides the stack, defines the data model,
and sequences the work.

**Revision A, 5 August 2026.** Re-cut against the agreed target and updated with
measured findings from the live sweep. Changed: new §2.5 (design tokens),
new §7.6–7.7, §8 replaced with answers, new §9, originality criteria added to §6.

**Revision B, 5 August 2026.** Deep data-quality and architecture pass. Changed:
§7.3 re-budgeted from 1 week to 2–3 weeks with a domain expert; new §9.7–9.10
(sold-out as primary state, no fulfilment state in titles, accessibility,
SEO gaps); two new §6 content-fidelity criteria.

---

**Scope assumption — the target is "same architecture, own brand."**

Copy the *structural* decisions that are solved problems in this category:
the five-taxonomy facet model, the campaign story↔collection pairing, the
one-variant inventory model for unique pieces, the shot template, duty-paid
international messaging.

Bring an entirely independent visual identity, copy voice, product naming and
imagery. This is not a clone and must not read as one. Tilfi's photography,
copy, wordmark and product names are theirs, and lifting them would actively
work against a brand trying to establish its own position in the same category.

The practical consequence: **exact hexes and font stacks from the competitor are
irrelevant to this build.** Design tokens are a designer deliverable (§2.5), not
a research finding. Structure is inherited; surface is original.

---

## 1. The three decisions that shape everything

### 1.1 Commerce backend

| Option | Verdict |
|---|---|
| **Shopify + headless (Hydrogen/Next)** | ✅ **Recommended.** Tilfi itself runs Shopify. Checkout, payments (Indian gateways + international cards), multi-currency, taxes, DDP duties, fraud, PCI — all solved. You write zero checkout code. |
| Medusa / Saleor self-hosted | Only if you need custom fulfilment logic Shopify can't express. You will spend the first two sprints on payments instead of the product. |
| WooCommerce | Cheapest to start, worst at the multi-currency + international-duties requirement. |

**Decision: Shopify as commerce backend, headless storefront.** Shopify Markets
handles the eight-currency requirement (A1) and DDP duties natively — that alone
justifies it.

### 1.2 Storefront framework

**Next.js (App Router) + TypeScript + Tailwind.**

Rationale over Shopify Hydrogen: the site is ~45% editorial (design-addendum A9).
You need a real CMS, real long-form layouts, and image-heavy art direction. Next
gives you ISR for collections, static generation for editorial pages, and a much
bigger component ecosystem. Hydrogen optimises for the commerce half only.

Rationale over plain Shopify Liquid theme: the mega menu, the story↔collection
pairing, and the editorial section library are all painful in Liquid and pleasant
in React. Also: a Liquid theme locks you to Shopify's admin for content editing,
which the editorial team will hate.

### 1.3 Content backend

**Sanity** (or Contentful/Payload — Sanity assumed below).

Products live in Shopify. *Everything else* lives in the CMS:
navigation, hero slides, homepage sections, campaign story pages, craft pages,
blog posts, and the per-product editorial overlay (poetic name, campaign link).

The join key is the Shopify product `handle`.

### 1.4 Supporting services

| Concern | Choice | Why |
|---|---|---|
| Images | Shopify CDN for product, Sanity CDN for editorial | Both give on-the-fly resizing |
| Search | Algolia | Native Shopify search can't do the 5-taxonomy faceting |
| Wishlist | Swym, or roll your own on Shopify customer metafields | Tilfi uses Swym; DIY is ~2 days |
| Video | Mux, or Shopify CDN direct | Tilfi serves `.mp4`/`.mov` straight off Shopify CDN — fine to start |
| Analytics | GTM + GA4 + Shopify Web Pixels | Mirrors observed setup |
| Appointments | Calendly embed | Matches observed pattern, zero build |
| Hosting | Vercel | ISR + edge, matches Next |

---

## 2. Data model

### 2.1 What stays in Shopify

Products, variants, inventory, prices, orders, customers, discounts (unused), markets.

Shopify **metafields** to define (namespace `tilfi`):

| Key | Type | Purpose |
|---|---|---|
| `poetic_name` | single_line_text | "Damini", "Haru" — the piece's proper name (addendum A8) |
| `dispatch_lead_days` | number_integer | 10–12, 12–14 — varies per product (A6) |
| `spec_color` | single_line_text | Structured replacement for the `Color` bullet |
| `spec_technique` | rich_text | |
| `spec_fabric` | single_line_text | |
| `spec_speciality` | rich_text | |
| `spec_note` | rich_text | |
| `collection_note` | rich_text | Campaign tie-in paragraph |
| `weave` | metaobject_ref → `weave` | Replaces technique tags |
| `fabric` | metaobject_ref → `fabric` | Replaces fabric tags |
| `zari_type` | list.single_line_text | `real_zari` \| `roopa_sona` \| `gold` \| `silver` \| `resham` |
| `motifs` | list.metaobject_ref → `motif` | koniya, booti, paisley, jaal… |
| `colour_family` | metaobject_ref → `colour` | Normalised; replaces the dirty colour tags |
| `campaign` | metaobject_ref → `campaign` | |
| `fulfilment_mode` | single_line_text | `ready_to_ship` \| `made_to_order` \| `pre_order` |

`Tilfi Promise` ("Pure. Handloom. Banaras.") and the handwoven-irregularity
disclaimer are **global constants**, not product fields (A6).

**Do not migrate the tag soup.** The observed tags mix price bands, stock state,
colour, weave, motif and category in one flat namespace with duplicates and
misspellings (`saree`/`sarees`, `paisely`) — addendum A4.1. Build a one-time
mapping script: `legacy_tag → (facet, value)`, run it, keep tags only for
merchandiser-driven collection rules.

**Price bands must be computed at query time, not stored as tags.** Tilfi stores
`over-40000`, `20000-40000` as tags; that breaks the moment prices change or a
customer switches currency. Use Algolia numeric faceting.

### 2.2 Shopify metaobject definitions

```
weave      { slug, name, description, hero_image, related_collection }
fabric     { slug, name, description, hero_image, care_notes }
motif      { slug, name, description }
colour     { slug, name, hex, family }
campaign   { slug, name, season, story_page_ref, collection_ref, hero_desktop, hero_mobile }
```

The `campaign` metaobject encodes the single most important structural finding
(addendum A3): **every campaign is a pair — an editorial `/pages/x` story and a
shoppable `/collections/x` grid.** Model it as one entity with two references, not
as two unrelated URLs.

### 2.3 Sanity schemas

```
navigation          { compactMenu[], megaMenu[ { title, columns[ {heading, links[]} ],
                                                 tiles[ {image, href, label} ] } ] }
homepage            { sections[] }            // ordered, polymorphic
campaignStory       { slug, title, heroDesktop, heroMobile, standfirst,
                      sections[], shopifyCollectionHandle, closingVideo }
craftPage           { slug, title, body[], comparisonBlocks[], pullQuotes[] }
blogPost            { slug, category, title, hero, body[], publishedAt }
globalSettings      { announcementBar[3], brandLine, shippingTab, dimensionsTab,
                      careTab, otherTab, supportHours, newsletterModal }
productOverlay      { shopifyHandle, poeticName, editorialImages[], styledWith[] }
```

### 2.4 Section library (the polymorphic `sections[]`)

Derived directly from addendum A7 + A8. Build these 14 and you can author every
page on the site:

1. `heroCarousel` — n slides, each {desktopImage, mobileImage, eyebrow, title, body, ctaLabel, ctaHref}
2. `fullBleedBanner` — single slide, same fields
3. `brandStatement` — headline + supporting paragraph, centred, no image
4. `imageGridThree` — 3 square images + title + body + CTA
5. `imageGridTwo` — 2 square category tiles
6. `linkTileRow` — 4 bare image tiles
7. `videoBlock` — src, poster, autoplay/loop flags
8. `editorialTeaserPair` — 2 × {image, title, longBody, CTA}
9. `chapterHeading` — h3 + paragraph (the "Echoes in Silk" pattern)
10. `galleryThree` — 3 images, shared href
11. `imageWithHeading` — large image + h2 + paragraph
12. `richText` — long-form paragraphs
13. `pullQuote` — blockquote (the `/pages/identify` pattern)
14. `comparisonPair` — 2 labelled images side by side (art silk vs pure silk)
15. `storeBlock` — banner + copy + booking CTAs

**Every image field is a desktop/mobile pair.** The category convention is separate
art for both on every banner (A7). Bake this into the schema type so authors can't
forget.

### 2.5 Design tokens — a Sprint 0 designer deliverable

Sweep 1 §3 recorded the competitor's tokens. **Do not implement them.** With an
own-brand target they are the wrong values by definition, and the earlier plan to
extract exact hexes via a DevTools pass has been dropped for that reason.

What the category actually requires is a token *shape*. Brief your designer to
deliver these, in this structure, before Sprint 1:

| Token group | What's needed | Constraint the category imposes |
|---|---|---|
| **Type scale** | Display, H1–H4, body, caption, eyebrow — size, line-height, letter-spacing per breakpoint | A serif or humanist display face for product and editorial headings; a quiet companion for UI. Must render Devanagari if any product naming uses it. |
| **Palette** | Background, surface, ink, muted ink, rule, accent, plus states | A light, low-chroma ground. Product photography is the colour; the interface must not compete with a saree. Accent is used sparingly and never on large fields. |
| **Contrast** | Verified AA pairs for every ink-on-surface combination | A near-white scheme is the standard failure mode — see §6 Accessibility. Verify at token-definition time, not at audit time. |
| **Space scale** | 4 or 8px base, 8–10 steps | Editorial layouts need generous vertical rhythm; commerce grids need tight, predictable gutters. Both come from one scale. |
| **Grid** | Container max-width, columns, gutters per breakpoint | **Breakpoints are settled: 768 / 1024 / 1440** (§8.4). Do not inherit the competitor's 798px. |
| **Motion** | Duration and easing tokens, 3 speeds | Restrained. Hover-swap on product cards and menu reveals only. No scroll-jacking, no parallax. |
| **Elevation** | Shadow or rule-based separation | This category generally uses rules and space rather than shadows. Pick one and be consistent. |
| **Image ratios** | 2:3 and 1:1 as first-class tokens | Must match `photography-brief.md` §2.1 exactly. Reserve both in CSS to protect CLS (§6). |

**Exit criterion for Sprint 0 is unchanged in spirit but not in dependency:** a
blank page renders with the real type scale and palette. It now depends on the
designer, not on a competitor inspection.

---

## 3. Routing

```
/                                     homepage (ISR, 60s)
/collections/[handle]                 PLP (ISR, 60s)
/products/[handle]                    PDP (ISR, 300s)
/pages/[slug]                         craft + campaign story pages (SSG + on-demand revalidate)
/blogs/[category]                     blog index (ISR)
/blogs/[category]/[slug]              blog post (SSG)
/search                               Algolia-backed
/cart                                 client-side, Shopify Cart API
/account/*                            Shopify customer accounts (redirect out)
/checkout                             Shopify-hosted — do not rebuild
```

**Canonical rule:** a campaign's `/pages/x` is the canonical editorial URL and
`/collections/x` is the canonical shoppable URL. Cross-link both ways in the
`campaign` metaobject; emit `rel=alternate` neither way. Do not merge them —
Tilfi's dual-URL pattern is deliberate and SEO-productive.

---

## 4. Component inventory

### Global
`AnnouncementBar` (3-part, rotating on mobile) · `BrandLine` · `Header` (transparent
over hero, solid on scroll) · `CompactNav` · `MegaMenu` (6 panels, image tiles) ·
`MobileNavDrawer` (accordion) · `CurrencySwitcher` (8 currencies) · `SearchOverlay` ·
`CartDrawer` · `WishlistButton` · `Footer` · `NewsletterModal`

### PLP
`CollectionHero` · `FacetSidebar` (garment · weave · fabric · colour · zari · motif ·
price · availability) · `ActiveFilterChips` · `SortSelect` · `ProductGrid` (2:3 cards) ·
`ProductCard` (image, hover-swap to image[1], title, price, sold-out state) ·
`InfiniteScroll` or `LoadMore` · `EmptyState`

### PDP
`Breadcrumb` · `Gallery` (vertical thumb rail + main, mixed 2:3/1:1 — see A4.3) ·
`ZoomModal` · `ProductTitle` · `SkuLine` · `Price` (currency-aware, "MRP inc. of
taxes") · `PoeticNameHeading` · `SpecList` (Color/Technique/Fabric/Speciality/
Collection Note/Tilfi Promise/Note) · `HandwovenDisclaimer` · `VariantSelector`
(**conditional — hide when single default variant**) · `QtyStepper` · `AddToCart` ·
`NotifyWhenRewovenForm` · `InventoryCount` · `InfoTabs` (4, content from
globalSettings) · `RecommendationRail` · `StickyBuyBar` (§9.2) ·
`ProvenanceBlock` (§9.4)

### Editorial
All 15 section components from §2.4 · `CampaignShopCta` · `RelatedStories`

---

## 5. Sprint plan

Assumes 2 engineers + 1 designer, two-week sprints. ~14 weeks to launch.

### Sprint 0 — Foundations (1 week)
- Repo, Next App Router, TS strict, Tailwind, CI, Vercel preview deploys
- Shopify dev store; Markets configured for INR/USD/CAD/GBP/AUD/EUR/JPY/SGD
- Sanity project, dataset, studio deployed
- Design tokens locked — **designer deliverable, see §2.5** (no longer blocked on
  a competitor DevTools pass; that dependency is removed)
- Storybook + visual regression baseline
- **Photography brief issued to studios — see §7.6. This is week 1, not later.**

**Exit:** a blank page renders with the real type scale and palette, and at least
two studio quotes are in hand.

### Sprint 1 — Data layer & shell (2 weeks)
- Shopify Storefront API client, typed codegen
- Metafield + metaobject definitions created (§2.1, §2.2)
- Sanity schemas (§2.3)
- Legacy tag → facet migration script, dry-run report
- `Header` / `MegaMenu` / `MobileNavDrawer` / `Footer` / `AnnouncementBar`
- Currency context + price formatting (Indian lakh grouping, ₹ prefix)

**Exit:** navigation is fully CMS-driven and renders on every route. Currency
switch changes displayed prices.

### Sprint 2 — Commerce core (2 weeks)
- PLP: grid, pagination, sort
- PDP: gallery, spec list, tabs, add-to-cart
- Cart drawer + Shopify checkout handoff
- Sold-out → `NotifyWhenRewoven` flow
- Made-to-order / pre-order / ready-to-ship badging

**Exit:** you can buy a saree end-to-end in INR and USD.

### Sprint 3 — Faceting & search (2 weeks)
- Algolia index + sync webhook from Shopify
- `FacetSidebar` across all five taxonomies (addendum A3)
- Numeric price faceting per currency
- `/search` with predictive dropdown
- URL-state sync for filters (shareable filtered URLs)

**Exit:** "kora silk · real zari · under ₹50,000 · in stock" returns in <200 ms.

### Sprint 4 — Editorial engine (2 weeks)
- All 15 section components (§2.4)
- `campaignStory` and `craftPage` rendering
- Blog index + post
- Campaign ↔ collection cross-linking
- Sanity Studio preview + drag-reorder of sections

**Exit:** an editor can build a campaign story page with no engineering help.

### Sprint 5 — Homepage & polish (2 weeks)
- Homepage assembled from CMS sections
- Store block + Calendly
- Newsletter modal, search overlay
- Wishlist
- Scroll/hover animation pass
- Responsive audit across 768 / 1024 / 1440 (§8.4)

**Exit:** homepage is pixel-signed-off on desktop and mobile.

### Sprint 6 — Hardening (2 weeks)
- Performance: LCP <2.5 s on 4G with 2000px hero art (**this is the hard one** —
  see §7)
- SEO: structured data, sitemaps, canonicals, hreflang for markets
- Accessibility: WCAG 2.2 AA
- Content migration + HTML sanitisation (strip `<meta charset>` / `data-mce-fragment`
  pollution — addendum A11)
- Analytics QA, GTM container, ecommerce events
- Load test, error monitoring

**Exit:** launch checklist green.

### Sprint 7 — Launch (1 week)
Soft launch, DNS, 301 map from any legacy URLs, monitor, hotfix.

---

## 6. Acceptance criteria

Replaces sweep 1's 115-point checklist with things that are actually testable.

### Structural (must pass to ship)
- [ ] Every one of the five taxonomies is independently browsable and combinable
- [ ] **Facets are multi-select within a group**, show live result counts, sync to the
      URL without a page reload, and survive the back button (§9.1)
- [ ] **Add to cart is reachable from any scroll position** via sticky buy bar (§9.2)
- [ ] Every collection is either a facet result or an editorially-earned campaign —
      no hand-made duplicates of a facet combination (§9.5)
- [ ] Every campaign resolves to both a story page and a collection, cross-linked
- [ ] Mega menu is 100% CMS-driven; changing it requires zero deploys
- [ ] Every banner has independent desktop and mobile art
- [ ] Product `poetic_name` renders on PDP and is linkable from editorial pages
- [ ] Editorial pages can be authored end-to-end without an engineer
- [ ] Zero hardcoded product data in the repo

### Commerce
- [ ] Checkout completes in all 8 currencies
- [ ] International orders show DDP messaging; no duty surprise at delivery
- [ ] Free-shipping threshold (₹25,000 international) applied correctly per currency
- [ ] Sold-out PDP shows notify-form, not a dead button
- [ ] Inventory count displays literally ("2 available to order")
- [ ] Pre-order and ready-to-ship items are visually distinguishable in the grid
- [ ] No sale/discount UI anywhere (brand does not discount — addendum A4.5)

### Content fidelity
- [ ] Spec bullets render from structured fields, not pasted HTML
- [ ] Global tabs (Shipping/Dimensions/Care/Other) come from settings, appear on every PDP
- [ ] Dispatch lead time is per-product
- [ ] **No fulfilment state appears in any product title** — state lives in
      `fulfilment_mode` and is expressed by badging (§9.8)
- [ ] **Every product image has frame-descriptive alt text** — weave, motif, colour,
      shot type; never the product title repeated (§9.9)
- [ ] Handwoven-irregularity disclaimer appears on every handloom product
- [ ] Brand constants render verbatim (§A11)

### Performance
- [ ] LCP < 2.5 s p75 mobile
- [ ] CLS < 0.1 — image aspect ratios reserved for both 2:3 and 1:1
- [ ] PLP with 60 products: TTI < 3 s
- [ ] Facet query p95 < 200 ms
- [ ] **AVIF served with WebP fallback** on every product and editorial image (§9.3)
- [ ] **`srcset` advertises no width the master cannot supply** (§9.3)
- [ ] **≤20 third-party scripts on a PDP**, each with a named owner (§9.6)

### Accessibility
- [ ] Mega menu fully keyboard-navigable with correct ARIA
- [ ] Gallery operable without a mouse
- [ ] Contrast AA on the light palette (a near-white scheme is the risk area — verify
      at token-definition time per §2.5, not at audit time)
- [ ] All product images have descriptive alt text (**not** the category's common
      pattern of repeating the full product title twice)

### Originality — must pass to ship

The "own brand" half of the target is only real if it is testable. These are
pass/fail, and they apply to the repository as well as the site.

- [ ] **Zero competitor imagery anywhere** — including Storybook fixtures, seed data,
      design mocks, and test snapshots
- [ ] **Zero competitor product copy** — no narrative descriptions, no spec bullets,
      no tab content lifted or lightly reworded. Addendum A6 records competitor tab
      copy as *observed structure*; it is **not** seed content and must be rewritten.
- [ ] **Zero competitor product names or campaign names** — no poetic names, no
      collection names, in any fixture or example
- [ ] Wordmark, logo, favicon and OG imagery are original
- [ ] Design tokens are the designer's per §2.5, not extracted values
- [ ] Voice and tone documented independently, not reverse-engineered from a
      competitor's product pages
- [ ] A reviewer unfamiliar with the project cannot identify the reference site from
      the built product

The last one is the real test. If it fails, the others were satisfied on a technicality.

---

## 7. Known hard problems

**7.1 Image weight.** The brand's whole proposition is texture — you cannot compress
your way out of it. 2000×2999 hero art at acceptable quality is heavy. Mitigations:
AVIF with WebP fallback, aggressive `srcset` (the observed `_300x`/`_2048x` pattern is
too coarse — generate 6 widths), LQIP blur placeholders, `fetchpriority=high` on the
first hero only, lazy-load everything below fold. Budget: hero ≤ 250 KB, PLP card
≤ 60 KB.

**7.2 Mega menu payload.** ~120 links plus 10 image tiles across 6 panels. Render the
link structure server-side, lazy-load panel imagery on hover/focus intent.

**7.3 Tag migration. — REVISED 5 Aug 2026, this was under-budgeted.**

Measured across 3,000 products (`pre-build-gaps.md` §1): **1,592 unique tags**, 9.9 per
product, **703 used exactly once (44%)**, 93 near-duplicate groups.

Case and plural collisions are the easy half and a script handles them. The hard half is
**transliteration forks that no script can resolve**: `kadhua` and `kadwa` are the same
weaving technique, split *exactly 16/16* across 32 tag variants. Same for `boota`/`buta`
and `meena`/`mina`. Choosing the canonical spelling is a domain judgement about Banarasi
vocabulary — it needs a weaver or merchandiser, not a developer.

> **Revised budget: 2–3 weeks, with a domain expert alongside the engineer.**
> One week buys the normalisation script and a dry-run report. It does not buy the
> reconciliation. Schedule it as a parallel workstream with a named non-engineering
> owner, not as a task inside Sprint 1.

**If the catalogue is greenfield, this inverts into a governance rule:** define the facet
taxonomy before the first product exists, and never allow free-text tag creation. The
1,592-tag outcome is what happens without one.

**7.4 Currency + price bands.** Do not store price bands. Facet numerically on the
base currency and convert at display time, or you will ship a store where the
"under ₹50,000" filter is wrong for every non-INR shopper.

**7.5 Multi-currency SEO.** Shopify Markets + Next ISR + hreflang is fiddly. Decide
early: subfolder (`/en-us/`) or domain-level. Subfolder is simpler and adequate here.

**7.6 Photography — this is the critical path, and it is not an engineering problem.**

Photography carries 60–70% of perceived quality in this category. A buyer deciding
on a ₹50,000 handwoven saree cannot touch the silk, tilt it to catch the zari, or
judge the drape. The photographs *are* the product until the parcel arrives.

It is also the longest-lead item in the project — casting, studio booking, a test
shoot and a colour-approval round run six to eight weeks before a single production
frame is shot. **If it starts when the build finishes, launch slips a quarter.**

It is probably a larger line item than the engineering. Planning estimate: **₹7,500–
18,000 per SKU all-in**, so roughly ₹22–54 lakh for a 300-SKU launch. Validate with
real quotes before assuming the build is the expensive half of this project.

Full specification is in `photography-brief.md` — shot list, ratios, lighting,
colour management, throughput, budget model and acceptance criteria. Three things
from it bind this document:

- **Master sizes are 3000 × 4500 (2:3) and 3000 × 3000 (1:1).** The image pipeline
  in §7.1 must be built to these, not to the 1440–1600px the category currently
  ships (§9.3).
- **The shot template is 5 on-model portrait frames then 1–2 square detail frames.**
  `Gallery` and `ProductCard` must handle exactly this mix. Reserve both ratios.
- **Colour management is a hard gate.** Saturated bridal reds clip out of sRGB gamut
  and are the highest-value stock in the catalogue. This is a shoot-process problem,
  but it surfaces as a returns problem, so it belongs on the launch checklist.

**Build does not wait on the shoot.** Develop against placeholder images at the exact
specified ratios and the swap is clean.

**7.7 Editorial content is a permanent staffing assumption, not a launch task.**

The architecture is ~45% editorial (addendum A9), and §2.4's fifteen-section library
exists to serve it. That engine is worthless without someone feeding it.

Measured against the category benchmark, the commitment is: **a bespoke ~90-word
narrative and a proper name for every single SKU**, plus roughly two long-form
stories a month, indefinitely. At a 900-saree catalogue that is 900 pieces of
original writing before launch and more with every drop.

This is the actual moat. A competitor matching the architecture but not the copy
reads as thinner regardless of build quality. But it is a hiring decision, and it
should be confirmed *before* Sprint 4 builds the engine that depends on it.

If the writer does not exist, the honest options are: fewer SKUs with richer copy,
or a shorter copy template applied consistently. Both are defensible. Building the
full editorial engine and then filling it with placeholder text is not.

---

## 8. Competitive sweep — resolved

**Status: closed, 5 August 2026.** This section previously listed seven open
questions blocking Sprint 0. All are now answered — items 1–3 and 7 by the
own-brand decision (§2.5), items 4–6 by a live browser sweep. Full measured detail
in `sweep-findings.md`.

**8.1 Facets.** Path-based Shopify tag filtering:
`/collections/sarees/red` → `/collections/sarees/katan-silk+red`. Tags alphabetised,
`+`-joined, full page reload per change. Radio buttons — **single-select per group**,
no result counts, no History API. Options prune to co-occurring values.

This is the weakest system on the reference site and §9.1 specifies beating it.
Note that the mechanic is a Shopify-theme convention; our Algolia-backed plan
(Sprint 3) is not constrained by it.

**8.2 Cart.** An anchored mini-cart dropdown beneath the header — not a side drawer,
not a page. URL unchanged.

**Decision for this build: side drawer, not dropdown.** A dropdown panel is cramped
for a cart containing two ₹50,000 pieces with imagery, and it reads as utility rather
than considered. `CartDrawer` in §4 stands as specified.

**8.3 Search.** Centred modal overlay with live typeahead, results grouped into four
labelled sections: Popular Suggestions → Categories → Pages → Products (thumbnails).
Third-party (Searchanise).

**The grouping is the good idea and we should copy it.** Routing a shopper to a
*category* or an *editorial story*, not just a product, is exactly right for a deep
catalogue with a heavy editorial layer. Our Algolia implementation (Sprint 3) should
return the same four groups. `SearchOverlay` in §4 stands.

**8.4 Breakpoints.** Theirs are 798 / 480 / 1024 by media-query frequency. The 798px
value is a legacy theme artefact with no rationale.

**Decision: 768 / 1024 / 1440.** Locked into §2.5.

**8.5 Animation.** Restrained throughout — hover-swap on product cards, menu reveals,
no scroll-jacking. Token shape in §2.5; exact values are a designer call.

---

## 9. Sweep-derived requirements

New in this revision. These come from measured findings (`sweep-findings.md`) and
were not in the original spec. Each is a place where the category benchmark is
weak and the fix is cheap.

**9.1 Facets must be multi-select, counted, and URL-synced without reload.**

The benchmark uses radio buttons — a shopper cannot select Red *and* Maroon — and
reloads the page on every change. Requirements:

- Multi-select within every group
- Result counts on every option, live
- History API state sync; filtered URLs shareable and back-button correct
- No full page reload
- Active-filter chips with individual and bulk clear

Already implied by Sprint 3 and `FacetSidebar`; now explicit and testable in §6.

**9.2 Add to cart must be reachable at all times.**

On the benchmark PDP, add-to-cart sits at y=1168 against an 889px viewport — 1.3
screens below the fold, with no sticky bar, on a ₹49,500 single-variant product.
The gallery column is taller than the copy column and pushes the button down.

Requirement: **a sticky buy bar** — product name, price, add-to-cart — appearing once
the primary buy block scrolls out of view, on both desktop and mobile. Add
`StickyBuyBar` to the PDP component list in §4.

**9.3 Image pipeline: AVIF, and honest `srcset`.**

Measured on the benchmark PDP: images are **72% of total payload** (738 KB of ~1.0 MB),
served as **JPEG and PNG only — no WebP, no AVIF anywhere**. The `srcset` ladder
declares widths up to 5000w while most masters are 1440–1600px wide, so a browser can
request a width that does not exist and receive an upscale.

Requirements, tightening §7.1:

- **AVIF with WebP fallback**, JPEG as last resort. On a 72%-image page this is a
  40–60% payload cut and the single highest-leverage performance decision available.
- **Masters at 3000px** per `photography-brief.md` §2.1. Buyers *will* pinch-zoom into
  zari on a ₹50,000 piece; at 1600px there is nothing there.
- **`srcset` must not advertise widths the master cannot supply.** Generate the ladder
  from actual master dimensions.
- Both 2:3 and 1:1 ratios reserved in CSS — already in §6 under CLS.

**9.4 Social proof without reviews.**

The benchmark has no reviews, ratings or UGC anywhere — deliberate for luxury
positioning, and §10 Non-goals already excludes reviews from v1. But nothing replaces
them, which leaves the PDP with zero credibility surface.

Requirement: build *provenance* as the substitute. Weaver or workshop attribution,
loom and technique detail, time-to-weave, styling credits, press mentions. This suits
the brand better than stars and it is content the editorial function (§7.7) is already
producing. Add to the PDP spec in §4 as `ProvenanceBlock`.

**9.5 Taxonomy discipline.**

The benchmark runs 250+ collections against ~3,000 products — roughly one collection
per twelve items — across five overlapping schemes (price bands, colours, fabrics,
product types, campaign names). The nav surfaces a fraction; most is SEO dead weight
that dilutes the campaigns that matter.

Requirement: **every collection must be either a facet result or an editorially-earned
campaign.** No hand-made collections that duplicate a facet combination. Price-band
collections are forbidden outright — already covered by §7.4.

**9.6 Script budget.**

The benchmark PDP issues **111 script requests**. That is a tag-manager problem, not an
engineering one, but it accretes silently and then cannot be removed because nobody
knows which pixel finance depends on.

Requirement: agree a marketing tag policy before launch, with a named owner and a
documented purpose per tag. Set a budget — suggest ≤20 third-party scripts on a PDP —
and enforce it in the Sprint 6 performance gate.

**9.7 Sold-out is a primary template, not an edge case.**

**49% of the reference catalogue is unavailable** (1,477 of 3,000) — the arithmetic
consequence of inventory-of-1 unique pieces that stay listed after selling.

Roughly half of all product page views will land on a sold-out PDP. Therefore:

- `NotifyWhenRewovenForm` is a **core conversion surface**, not a defensive fallback.
  Design and instrument it as such.
- The PLP must handle sold-out at scale. A grid where every other card is greyed out
  reads as a dying store — default-sort available items forward, keep sold-out
  browsable but not dominant.
- Facet counts must be availability-honest, or shoppers filter into empty grids.

**9.8 No fulfilment state in product titles.**

The reference site prefixes `Pre-Order:` to **463 product titles**, so the state leaks
into breadcrumbs, page titles, cart line items, `og:title` and JSON-LD `name` — and
can only be undone by editing 463 titles.

Requirement: fulfilment state lives in the `fulfilment_mode` metafield (§2.1) and is
expressed by badging in the template. **No fulfilment state may appear in a product
title, ever.** Add to §6 Content fidelity.

**9.9 Accessibility is a live differentiator here.**

Measured on the reference PDP: **all 8 product images have empty alt text**, 65 of 81
form inputs have no label, there is no skip link, and heading order runs
H1→H4→H4→H2→H4→H5. The bar is lower than `design.md` §11 assumed.

Beyond the WCAG 2.2 AA requirement already in §6, add: a skip link, labelled inputs,
and **a heading-order lint in CI**.

**Alt-text policy, decided now because it is a content cost:** alt text describes *the
frame* — weave, motif, colour, shot type — not the product title repeated. That is ~6
alt strings per SKU and it belongs in the same writing brief as the narrative copy
(§7.7), not retrofitted later.

**9.10 SEO gaps worth taking.**

The reference site does collection pagination correctly — self-canonical per page,
`rel=next`/`rel=prev`, `index,follow`, "Page N" title suffix. **Copy that.**

It does not do these, and each is an open gap:

- **No `hreflang` at all**, despite 8 active currencies. §7.5 flagged this as fiddly;
  the benchmark simply hasn't solved it.
- **Thin `Product` schema** — `name, image, description, brand, sku, offers` only, with
  **one image** where the PDP has 6–8. Ship all gallery images plus `material`, `color`,
  and weave/motif as `additionalProperty`.
- **No `ItemList` / `CollectionPage` schema** on PLPs.
- **Mixed URL grammar** — facets use path segments, pagination uses `?page=`. Pick one.

**9.11 Shot-template consistency from SKU #1.**

Re-sampling showed the benchmark converged on a tight shot template recently but never
retro-fitted its back catalogue, so its grid is visibly inconsistent. Locking our
template from the first SKU costs a decision, not money, and cannot be bought back
later once a few hundred unique pieces are shot and sold. Enforced by
`photography-brief.md` §13.

---

## 10. Non-goals

- Rebuilding checkout
- Custom payment integration
- A native app
- User-generated reviews (the source deliberately has none — A5.1)
- Loyalty / referral in v1
- Live chat beyond the WhatsApp deep link
