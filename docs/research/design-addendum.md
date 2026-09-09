# Tilfi — Design Addendum (Sweep 2)

Supplements `design.md`. Everything below is **observed**, not inferred: sourced from
`tilfi.com` HTML and the public Shopify JSON endpoints on 5 Aug 2026. Where sweep 1
estimated, this document supersedes it.

> Note: this addendum was written in a fresh session and does not have `design.md`
> in hand — it is self-contained rather than a diff. Sections are numbered A1–A12 to
> avoid colliding with `design.md` §1–§13.

---

## A1. Confirmed platform facts

| Fact | Value | Where observed |
|---|---|---|
| Platform | Shopify (not Plus-specific markers) | `meta-shopify-digital-wallet: /12242138/digital_wallets/dialog` |
| Shop ID | `12242138` | digital wallet path, CDN path `/s/files/1/1224/2138/` |
| Analytics | GTM container `GTM-MK3BS8B` | noscript iframe |
| Wishlist | Swym (`#swym-wishlist` anchor) | header + mobile nav |
| Theme colour meta | `#ffffff` | `meta-theme-color` |
| Copyright | `© 2026 Tilfi` | footer |
| Legal entity | Tilfi Brands Pvt Ltd, Amaltas, Rathaytra-Mahmoorganj Road, Varanasi, UP 221010 *(sic — source spelling)* | PDP "Other" tab |
| Booking | Calendly (two links: Banaras experience centre, Mumbai flagship) | homepage store block |

**Multi-currency is real, not decorative.** The header currency switcher offers eight
currencies: INR, USD, CAD, GBP, AUD, EUR, JPY, SGD. Login is region-aware
(`/customer_authentication/redirect?locale=en&region_country=IN`). Any rebuild needs a
currency context provider from day one, not bolted on later.

---

## A2. The navigation is two different menus

This is the single biggest thing to get right, and sweep 1 under-described it.

**Menu 1 — the compact bar** (used in the sticky/condensed header):
five groups — Shop · Collections · Campaigns · Craft · Stories · About Us.
Shop has 8 links, Collections 14, Campaigns 10.

**Menu 2 — the mega menu** (the full-width drop panel): a completely different,
much larger structure with image tiles interleaved between link columns:

| Panel | Columns | Notes |
|---|---|---|
| New Arrivals / Clothing / Featured | 7 + 11 + 8 links | + 1 image tile (`/collections/vanam-leela`) |
| Weaves & Patterns / Fabrics / How to Style | 11 + 9 + 11 links | + 1 image tile (`/collections/kadhua-collectibles`) |
| Shop By Campaign / Featured Campaign | 13 + 14 links | + 2 image tiles |
| Handloom / Metal | 5 + 1 links | + 2 image tiles |
| About Us | 8 links | + 2 image tiles |
| Spirit of Creations / Stories | 9 + 3 links | + 2 image tiles |

The image tiles are **merchandised slots**, not decoration — each is an editorially
chosen link. In the build they must be CMS-driven, one per panel minimum.

Also observed: the mega menu is **not stable between page loads**. Comparing the
homepage render against `/pages/identify`, the "How to Style" column gained/lost
"Kadhua Collectibles" and "Pastel Dreams", and "Featured Campaign" gained "A Weightless
Weave". This means either A/B testing or frequent merchandiser edits. Treat menu
content as fully dynamic data, never as a hardcoded constant.

---

## A3. The five parallel taxonomies — now enumerated

Sweep 1 named the pattern. Here are the actual members.

**1. Garment type** (8 in compact nav, 11 in mega menu)
`sarees` · `lehenga` · `dupattas` · `suits` · `blouses` · `jackets` · `tops-shirts` ·
`co-ord-sets-pants` · `dresses` · `scarves-stoles` · `accessories`
Plus umbrella: `tantra` (fabrics by the metre), `apparel`, `ensembles`, `menswear`,
`womenswear`, `art-collectibles-1`.

**2. Weave / technique** (11)
`kashi` · `zarkashi` (real zari) · `kadhua-collectibles` · `tanchoi-rhymes` ·
`shikaargah-tales` · `kadiyal-classics` · `vasket-of-wonders` · `twill` · `rangkat` ·
`banarasi-bandhej-sarees-dupattas` · `nafees` (jamdani)

**3. Fabric** (9)
`katan-silk` · `gossamer-koras` (kora organza) · `a-summer-in-georgettes` ·
`sooti-cottons` · `a-breath-of-linen` · `textured-trails` · `lustrous-tissue` ·
`satin-silk` · `silk-wool`

**4. Campaign** (13 "Shop By" + 14 "Featured")
Shop By: `charbagh` `tarang` `peony-pavilion` `seesaw` `of-the-first-water` `sandhi`
`charulata` `portrait-of-a-woman` `balance` `nagma` `janavi` `shakti` + `/pages/silk-wool`
Featured: mostly `/pages/*` — `tilfi-jamdani` `antinomy` `kala` `an-artists-legacy`
`shikargah-tales` `intersections` `of-threads-and-time` `awadh` `the-way-of-flowers`
+ `/collections/*` — `surkh` `quarter-to-time` `katha` `gulab-bari-collection`

**5. Occasion / merch state** (7 + 11)
`fresh-off-the-loom` · `freshly-tailored` · `best-sellers` · `back-in-stock` ·
`pre-order` · `ready-to-ship` · `/pages/the-art-of-gifting`
Style edits: `festive-spotlight` · `tilfi-weddings` · `splendour-of-spring` ·
`soft-hued-delights` · `modern-classics` · `silken-rivers` · `tilfi-signature-classics` ·
`collectors-edit` · `tilfi-bridal` · `seasonal-selections` · `gift-cards`

**Critical structural note:** campaigns exist as **both** `/collections/x` and
`/pages/x`, sometimes both for the same campaign (`of-threads-and-time` has both;
`shikargah-tales` has a page and `shikaargah-tales` — note the extra `a` — has a
collection). The `/pages/` version is the editorial narrative; the `/collections/`
version is the shoppable grid. **This pairing is the core content architecture.**
Model it explicitly as `Campaign { story_slug, collection_slug }`.

---

## A4. Product data model — from `products.json`

Real records, not guesses.

```jsonc
{
  "id": 8016630972578,
  "title": "'Damini' Red Pure Cotton Jamdani Real Zari Banarasi Handloom Saree",
  "handle": "damini-red-pure-cotton-jamdani-...",
  "vendor": "Tilfi",                    // always "Tilfi"
  "product_type": "Saree",              // Saree | Blouses | Menswear | ...
  "tags": [ ... ],                      // the real taxonomy carrier
  "variants": [ { "sku": "SRCJDRD11047", "price": "78000.00",
                  "available": true, "grams": 1000,
                  "compare_at_price": null, "option1": "Default Title" } ],
  "images": [ { "src": "...", "width": 2000, "height": 2999, "position": 1 } ],
  "options": [ { "name": "Title", "values": ["Default Title"] } ]
}
```

### A4.1 Tags do all the work

Tags are the de-facto facet store. Observed vocabularies:

- **Price band:** `20000-40000`, `over-40000`, `over-60000` — pre-computed price
  buckets stored as tags. (Implies collection filtering by tag, not by price range query.)
- **Stock:** `in-stock`
- **Colour:** `red`, `blue`, `Navy Blue`, `light pink`, `pink`, `beige`
- **Fabric:** `cotton`, `pure cotton`, `katan silk jacket`
- **Technique:** `jamdani`, `Zari Vasket`, `Sanjhi Jamdani`, `diagonal jaal`, `Aadha`,
  `aadha jaal`, `plain`, `plain body`, `plain saree`
- **Zari:** `real zari`, `real silver`, `Real Zari cotton`, `roopa sona zari`,
  `gold zari`, `silver zari booti`, `zari bootis`, `floral zari`
- **Motif:** `koniya`, `koniya aanchal`, `koniya anchal`, `koniya motif`, `koniyas`,
  `paisely`, `paisely anchal`, `paisely koniya`, `paisely motifs`
- **Category:** `saree`, `sarees`, `blouse`, `blouses`, `apparel`, `womenswear`,
  `menswear`, `Topwear`, `Bottomwear`
- **Campaign:** `Vanam Leela`

**The tag vocabulary is dirty.** `saree`/`sarees`, `blouse`/`blouses`,
`koniya`/`koniyas`/`koniya motif`, `paisely` (misspelled, consistently). A rebuild
should normalise into proper facet tables and keep a legacy-tag → facet mapping table.
Do not port the tag soup.

### A4.2 Variants are near-degenerate

Most products have exactly one variant, `option1 = "Default Title"` — sarees are
one-of-one pieces. The exception is bundles: the menswear jacket exposes
`option1 ∈ {"Beige Jacket Only" (₹48,000), "Complete Set (Jacket + Kurta + Pants)" (₹84,000)}`
under an option named `Style`. So: **support variants, but design the PDP for the
single-variant case as the default and treat the option selector as a conditional block.**

### A4.3 Images

- Aspect ratio is consistently **2:3** (2000×2999, 1600×2399, 1440×2160, 1000×1500).
- Plus a trailing **1:1** swatch/flat-lay image (1600×1600 or 1000×1000), usually the
  blouse piece or the SKU-coded product shot, always last in `position`.
- Shopify sizing suffixes in use: `_300x` (thumbs), `_2048x` (main), `_2000x` (banners).
- Median 5–8 images per product; the jacket had 8.

**Design consequence:** the PDP gallery must handle a mixed 2:3 run followed by a 1:1
tail without breaking the rhythm. Do not force-crop.

### A4.4 SKU grammar

`SRCJDRD11047` decomposes as `SR` (saree) + `C` (cotton) + `JD` (jamdani) + `RD` (red)
+ serial. Others: `SRCJDBL11424` (…blue), `SOTPLYW10186` (kora tissue, plain, yellow),
`SNJPK01b` (Sanjhi, pink, variant b), `MUG0018`/`MUG0018a` (menswear). **The SKU is a
readable encoding of category · fabric · technique · colour.** It is displayed on the
PDP directly under the title. Preserve it — it is part of the collector-facing identity.

### A4.5 Prices observed

₹13,600 (kora tissue saree, sold out) · ₹27,000 (embroidered blouse) · ₹48,000 /
₹84,000 (menswear bundle) · ₹78,000 (real-zari cotton jamdani) · ₹1,78,000 (Haru navy
jamdani). Formatting is **Indian lakh grouping with ₹ prefix** (`₹78,000`), followed by
the line *"MRP inc. of taxes"* in small italic. `compare_at_price` is `null` across all
sampled products — **Tilfi does not discount.** No strikethrough price component is
needed. Do not build a sale badge.

---

## A5. PDP anatomy — exact, from `/products/damini-…`

Top to bottom:

1. **Breadcrumb** — `Home / All / <product title>`. Middle crumb links to
   `/collections/all`, not to the garment collection.
2. **Gallery** — vertical thumbnail rail (`_300x`) beside a large main image
   (`_2048x`), with zoom links pointing at the full asset. Order = `images[].position`.
3. **Title** (h1, full descriptive string including colour, fabric, technique, "Banarasi
   Handloom Saree").
4. **SKU** in plain text, immediately under the title.
5. **Price**, then *"MRP inc. of taxes"* italic caption.
6. **Body copy** — an `<h4>` poetic name (e.g. **Damini**), a lead paragraph, then a
   structured bullet list with a fixed label grammar:
   `Color` · `Technique` · `Fabric` · `Speciality` · `Collection Note` · `Tilfi Promise`
   · `Note`. Labels are **bold + italic**, followed by an en dash.
   `Tilfi Promise` is always the literal string *"Pure. Handloom. Banaras."*
7. **Standard closing disclaimer**, italic:
   *"Since this product is handwoven, there might be slight irregularities. But don't
   you think these add to the singular charm of a handloom beauty?"*
8. **Back-in-stock capture** — email field + *"Notify me when this product is rewoven
   and available to order:"*. Note the verb: **rewoven**, not restocked. This is a
   make-to-order model surfaced in the UI.
9. **Inventory line** — `"2 available to order"`, then Qty stepper, then **Add to cart**.
10. **Four-tab accordion** — `Shipping` · `Dimensions` · `Care` · `Other`. Content is
    **global, identical across products** (verified against two unrelated PDPs), so it
    belongs in settings, not per-product fields. Full text captured in A6.
11. **"You may also like"** recommendation rail.

### A5.2 Re-measured 10 Sep 2026 — corrections to A5 and to design.md §6.3

Measured live at 1280×720 on a saree PDP. Where this section and A5/§6.3 disagree,
**this section is correct** — the earlier pass got the gallery and the column split
wrong, and both are load-bearing for how the page reads.

**Container and columns**
- Container **1160px**, centred. Not `--max-w-content` (1200) and not full-bleed.
- **Two equal columns of 580px**, ~20px gutter. Not 58/42. The gallery is exactly as
  wide as the details.
- The details column is **`position: static`**. It does **not** stick. §6.3's "sticky
  while the gallery scrolls (a key premium feel)" is not what the site does.

**Gallery — the big one**
- There is **no vertical thumbnail rail**. A5 item 2 is wrong.
- Layout is **main image on top, horizontal thumbnail strip beneath it**, both inside
  the left column. Thumbnails are `one-fifth column` — **five per row**, wrapping.
- Main image **580×870** (2:3), served from a 1440×2159 master.
- Thumbnails **96×144** for 2:3 frames and **96×96** for 1:1 detail frames, from 300px
  masters. The mixed-ratio sequence is confirmed: 5 portrait, then square.
- Click the main image → **fullscreen lightbox** with prev/next arrows at the screen
  edges and a top-right toolbar (zoom / slideshow / close). Flickity underneath.

**Breadcrumb row**
- Separator is **`→`**, not `/`. Trail is `Home → Sarees → <full product title>`.
- **`Previous | Next`** sits at the **far right of the same row**. Confirmed.

**Details column, corrected order**
1. **Fulfilment badge** — a filled pill, `rgb(174, 121, 34)` ochre, ~75×22, **above the
   h1**, in the details column. Not on the image.
2. `h1` — full descriptive title, including the `Pre-Order:` prefix (§9.8 still stands:
   that prefix is a data-modelling error we do not copy).
3. **SKU**, plain.
4. **Price**, then `MRP inc. of taxes` in italic.
5. **Poetic name as `<strong>`**, not a heading. A5 item 6 and §6.3 item 4 both say
   `<h4>`; it is a bold run inside body copy.
6. **Lead paragraph.**
7. **Attribute list.** Labels are `<em>` italic; the separator is a plain **hyphen `-`**,
   not an en dash. Observed labels: `Color`, `Technique`, `Fabric`, `Collection note`,
   `Tilfi Promise`, `Note`. `Speciality` did not appear on this SKU — it is optional.
   **`Expected Dispatch Time - 1 week.`** appears as a **bold item inside this list**,
   not as separate body copy. A5's closing note has it in the wrong place.
8. **Irregularity disclaimer**, italic.
9. **Complimentary finishing services** — *not previously recorded anywhere.* A radio
   group headed "Would you like the following complimentary services? Please add extra
   working days before despatch:", with three options: **Fall Pico (3 days)**,
   **Tassels (3 days)**, **Despatch as is**. This is a real per-order choice that
   changes the despatch estimate, and it needs product fields we do not have.
10. **Inventory line** — `1 available to order`.
11. **Pre-order consent** (pre-order SKUs only) — a `Pre-Order timelines - <n> week`
    line plus a **required checkbox**: "I understand that this is a pre-order and have
    read the despatch timeline".
12. **Qty input** — 190×44, on **its own row above the button**. Not inline beside it.
13. **Primary button** — **auto-width (101px measured) × 44px**, *not* full column width
    and not 48px tall. Its **label follows fulfilment mode**: `Pre-Order` here, not
    `Add to cart`.

**Below the columns**
- **Tab bar** at full container width (1160), below both columns:
  `Shipping · Dimensions · Care · Other`, first active. A real tab bar, not an accordion.
  Confirmed as specified.
- **`You may also like`** — an `<h4>`, **centred**, then the card row.
- Nothing else. No provenance block, no reviews — A5.1 still holds.

**What we keep that the reference does not do.** The sticky buy bar (§9.2), the
provenance block (§9.4), corrected heading order (§5) and the fuller `Product` +
`BreadcrumbList` schema (§6) are deliberate departures, argued elsewhere and unaffected
by this re-measurement. `Tilfi Promise` stays `Our promise` in our build — build.md §6
forbids the competitor's literal strings regardless of what the reference does.

### A5.2b Second pass, 10 Sep 2026 — Quick View, and the rest of the detail

**§12 item 7 is wrong. Quick View exists.**

`design.md` §12 item 7 records "No Quick View exists. No such control anywhere on the
PLP", and that finding was acted on twice: the component was specified out of the
inventory, then built as an "original addition", then deleted again on the strength of
it. The control is there. It appears **on hover over a product card** — a pale
translucent bar across the middle of the image, the words *Quick View* set in the
display serif, centred. Treat §12 item 7 as retracted.

The lesson is not about Quick View. A single negative observation from one automated
pass was allowed to stand as settled fact and then to remove a feature; negative
findings about hover-only affordances should be held much more loosely than positive
ones, because an automation session that never hovers cannot see them.

**Type and colour — measured, not inferred**
- Body: **Open Sans 400, 14px / 21px**, colour **`#533e2d`**.
- Headings: **Cardo 400**, PDP `h1` at **25px / 28px**, colour **`#301e1d`**.
- Attribute list: **Cardo 13px**, letter-spacing **1px**, colour **`#332210`**.
- Page background **`#ffffff`**.

Our type families already matched. The ink did not, deliberately — see the note in
`globals.css`, which records the decision that was reversed here on the owner's
instruction and how to undo it.

**Gallery — hover magnification**
- The main frame is a `.zoom-container` at frame size with `overflow: hidden`, holding
  a **larger copy of the same photograph** (measured **800×1200 inside 580×870**, so
  **1.4×**) that is **panned so the point under the cursor stays under the cursor**.
- This is a pan-zoom, not `scale()` on hover: with a fixed origin the detail being
  pointed at slides out from under the pointer, which defeats the purpose.
- **Circular step arrows sit on the frame itself**, left and right, vertically centred —
  translucent white discs. Not recorded in the first pass.
- Click still opens the fullscreen viewer.

**Details column — further corrections to A5.2**
- Finishing services are **checkboxes, not radios** (A5.2 item 9 said radios). More than
  one can be chosen, and "despatch as is" is the state of choosing none.
- The **`Note` row's value is set in italic**; the other attribute values are not.
- The qty control is a **wide bar (~250×44)** with filled `−` / `+` at each end, not a
  compact inline stepper.

**Recommendation rail**
- **Three cards, not four.**
- Heading `You may also like` is **centred**, in the display serif at section size.
- **Card titles and prices are centred** under the frame, not left-aligned.

### A5.1 What is NOT on the PDP

No reviews. No star ratings. No social share row. No "customers also bought". No size
selector for sarees (dimensions are fixed and live in the tab). No urgency/scarcity
banners beyond the plain inventory count. **Keep it that way** — the restraint is the brand.

---

## A6. Global PDP tab copy (verbatim — reusable as seed content)

**Shipping**
- Tilfi ships across the world. All our apparel and textiles are shipped via the express service available at BlueDart, DTDC, DHL, UBX or FedEX.
- We will provide you with a tracking number to track your shipment online.
- Deliveries within India take roughly 3-5 working days. International deliveries take around 5-10 working days depending on the location.
- Domestic shipping within India is offered free of charge. International shipping is free for orders above ₹25,000.
- Currently, Tilfi sends all international shipments as Delivery Duty Paid (DDP) - clients do not have to pay any import customs duty.

**Dimensions**
- Saree — L 5.4 m × W 1.1 m; Blouse — 90 cm × W 1.1 m
- Dupatta — L 2.4 m × W 1.01 m
- Stole — L 2.2 m × W 0.5 m
- Scarf — 92 cm × 92 cm
- Tillet — L 82.5 cm × W 5.58 cm
- All our garments are made to order.

**Care**
- Store carefully, away from the sun, dust, and moisture, preferably in muslin cloth.
- Regularly air and refold the garment.
- Dry-clean the garment only when required.
- Avoid ironing directly on the zari and any direct contact with perfume.

**Other** — manufacturer address, `orders@tilfi.com`, +91 7303741333, Country of Origin: India.

**Dispatch lead time is per-product, in the body copy, not in the tabs:**
"Please allow 12-14 business days for despatch" (menswear), "10-12 business days"
(blouse). So: `dispatch_lead_days` is a product field.

---

## A7. Homepage section order — confirmed sequence

1. **Announcement bar** (three-part, pipe-separated): *"Free shipping in India | Free
   worldwide shipping above ₹25,000 | Rest assured - all duties are included, with no
   extra fees upon delivery"*
2. **Brand line**: *"Made in Banaras. Made by Tilfi."* (italic, above the logo)
3. Header: search · currency · Login · Wishlist · Cart
4. **Hero carousel — 6 slides**, each with separate desktop + mobile art
   (`*Banner_2000x.jpg` / `*Banner-Mob_2000x.jpg`), an `<h2>` title, one line of body,
   and a `DISCOVER` / `Explore` CTA:

   | Slide | Copy | Target |
   |---|---|---|
   | Among Orchids | "A new collection of orchid-inspired forms woven in fine Kadhua Silks." | `/collections/kadhua-collectibles` |
   | Vanam Leela | "A convergence: Sanjhi Art expressed in Jamdanis." | `/pages/tilfi-jamdani` |
   | Tilfi Icons | "Our emblem takes a new expression." | `/collections/tilfi-icons` |
   | The Art of Gifting | "Gifts that express what words cannot." | `/collections/gifts` |
   | Seasonal Selections | "Our new selections for summer." | `/collections/seasonal-selections` |
   | Art & Collectibles | "A collection of timeless repoussé metal art." | `/pages/art-collectibles` |

5. **Brand statement**: *"Handwoven stories written in eternal Banaras"* + supporting line.
6. **Three-up square image grid** (2000×2000) → Kadhua Collectibles, with title, body, CTA.
7. **Video block** — `cdn.shopify.com/videos/c/o/v/*.mp4`.
8. **Two-up category tiles** — Sarees / Dupattas, square crops.
9. **Two full-bleed gender banners** — Womenswear ("Elegant silhouettes and timeless
   textiles") and Menswear ("Classic weaves and signature tailoring"), each with
   desktop+mobile art.
10. **Four bare link tiles** — bridal, gifting, zarkashi, art-collectibles.
11. **Two-up editorial teasers** — "Of Threads & Time" and "Awadh", long-form paragraph
    each + DISCOVER.
12. **Poetry block**: *"Immerse yourself in the poetry of the house"* + "…a Tilfi saree
    is a weaver's poem."
13. **Store block ×2** (Varanasi banner, Mumbai banner) — same copy, two Calendly CTAs.
14. **Footer** — "Here to Help" (email / phone / WhatsApp / support hours) ·
    Useful Information (4 policy links) · About (9 links) · social (FB/IG/YT) ·
    newsletter ("Hear about our new woven treasures and more…").
15. **Two modals** — search overlay ("What are you looking for?") and a
    **"With Love from Banaras"** newsletter pop-up with a 2000px image.

**Count: ~15 distinct section types.** Sweep 1 called it §1–§11; the real page is longer.
Every one of these needs to be a CMS section type with desktop/mobile image pairs.

---

## A8. Editorial page anatomy — from `/pages/of-threads-and-time`

The campaign story pages have their own grammar, distinct from the homepage:

1. Full-bleed hero (desktop + mobile pair) with a single line of intro and a
   `DISCOVER THE COLLECTION` CTA.
2. Standfirst paragraph (2–3 sentences, no heading).
3. Named sub-chapter with `<h3>` + paragraph (e.g. "Echoes in Silk" — "A capsule of six
   handwoven creations…").
4. **Three-up gallery** (`gallery1a/b/c`), all three linking to the same collection.
5. Interstitial paragraph.
6. Large single image + `<h2>` section ("Quiet Permanence") + paragraph.
7. Four repeated link slots (bare, image-driven).
8. Long descriptive paragraph naming individual pieces by their poetic names —
   *Borders of Time, Scattered Light, Crimson Passage, Woven Breath, Drifting Light*.
9. **Second three-up gallery** (`gallery2a/b/c`).
10. Closing line + repeat CTA.
11. Closing video (`.mov` from Shopify CDN).

**Individual sarees have proper names.** This is the brand's core differentiator and the
thing a rebuild most often drops. `product.poetic_name` must be a first-class field,
distinct from `title`, and it must be joinable from the editorial page back to the PDP.

Observed rendering bug worth noting: one paragraph on this page is **repeated four
times** in the live HTML — an authoring/section-duplication artefact. Don't replicate it.

---

## A9. Craft / knowledge pages — `/pages/identify`

Long-form, image-illustrated, no commerce. Structure: intro → `<h3>` "Artificial vs Pure
Silk" → paired comparison images (art silk vs pure silk, `_medium.png`) → four named
tests as bold-lead paragraphs (**The touch test…**, **Luster…**, **The burn test…**,
**The age test…**) → `<h3>` "Handloom vs Powerloom" → blockquote → *Bevar* pinhole
explanation + image → closing.

Note the **blockquote treatment** — a long pull-quote about buying from a hand-maker.
Needs a dedicated editorial component.

Sibling pages in the same family: `/pages/fabrics`, `/pages/weaving-process`,
`/pages/techniques-patterns`, `/pages/many-hands-of-handloom`, `/pages/metal-art`,
`/pages/maestros-of-the-arts`, `/pages/impact`, `/pages/excellence-series`.

Four blogs: `/blogs/art-culture`, `/blogs/style`, `/blogs/features`, `/blogs/perspective`.

**Non-commerce surface is ~45+ URLs** (pages + blog indexes), against ~60 collection
URLs. Sweep 1's "~40% editorial" estimate holds and is if anything low.

---

## A10. Commerce behaviours confirmed

| Behaviour | Detail |
|---|---|
| Sold-out state | `available: false` on the variant; PDP swaps Add-to-cart for the "notify when rewoven" email capture |
| Inventory display | Literal count shown: *"2 available to order"* |
| Made-to-order | Explicit in copy: "All our products are made on order"; per-product dispatch windows |
| Pre-order | Separate collection `/collections/pre-order` vs `/collections/ready-to-ship` — **two fulfilment modes coexist** |
| Free shipping | India: always free. International: free above ₹25,000 |
| Duties | DDP — duties included, stated in the announcement bar *and* the shipping tab |
| Wishlist | Swym, anchor-based (`#swym-wishlist`), present in both desktop and mobile nav |
| Gift cards | `/collections/gift-cards` |
| Appointments | Calendly, per-store |
| Support channel | WhatsApp deep link `wa.me/917303741333`, with published hours (Mon–Fri 06:00–22:00 IST, Sat 09:30–18:00 IST) |
| Discounting | None observed — `compare_at_price` null throughout |

---

## A11. Copy conventions (write these into the CMS field help text)

- CTAs are **all-caps** for editorial (`DISCOVER`, `DISCOVER THE COLLECTION`) and
  **sentence-case** for category tiles (`Explore`, `Discover`).
- Product titles follow: `'PoeticName' Colour Fabric Technique [Real Zari] Banarasi Handloom Garment`.
- The bullet grammar (`Color / Technique / Fabric / Speciality / Tilfi Promise / Note`)
  is fixed. Make it a structured field set, not free HTML.
- Recurring brand strings to hardcode as constants:
  - "Made in Banaras. Made by Tilfi."
  - "Pure. Handloom. Banaras."
  - "Handwoven stories written in eternal Banaras"
  - "…a Tilfi saree is a weaver's poem."
  - "With Love from Banaras"
- British spelling ("colour" in prose, but the PDP bullet label is US "Color" — an
  inconsistency in the source; pick one).
- Existing body HTML is heavily polluted with `<meta charset>` tags and
  `data-mce-fragment` attributes from the WYSIWYG. **Sanitise on migration.**

---

## A12. Corrections & confidence

| Sweep-1 item | Status after sweep 2 |
|---|---|
| Colour/type tokens | **Still unmeasured.** No browser session; `meta-theme-color: #ffffff` is the only hard value. Needs a DevTools pass. |
| "Five taxonomies" | **Confirmed and enumerated** (A3). |
| "~40% editorial" | **Confirmed, likely higher** (A9). |
| Homepage §1–§11 | **Superseded** — ~15 section types (A7). |
| Product schema | **Now measured, not estimated** (A4). |
| PDP anatomy | **Now exact** (A5, A6). |

**Still open (requires a rendered browser session, not HTML fetch):**

1. Type stack — font families, weights, scale.
2. Exact palette hexes.
3. Grid gutters, container max-width, breakpoints.
4. PLP facet UI — the filter/sort widget did not survive HTML-to-text extraction.
   Need to inspect `?filter.p.tag=` / `?sort_by=` params on a live collection page.
5. Cart drawer vs cart page behaviour.
6. Search implementation (predictive? Shopify native? third-party?).
7. Scroll/hover animation timings.

**Asset caution unchanged:** all image and video URLs cited here are Tilfi's own
photography and copy, referenced for prototype wiring only. Replace before anything ships.
