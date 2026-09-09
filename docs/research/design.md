# design.md — Tilfi.com Design Analysis & Rebuild Specification

**Reference site:** https://tilfi.com
**Target fidelity:** 90–95% visual + structural match
**Analysis date:** 5 August 2026
**Status:** Design analysis (Phase 1). Stack decision and implementation plan follow in a separate `build.md`.

---

## 0. How to use this document

This is a **design system + page anatomy specification** derived from a live analysis of tilfi.com. It is written so that a developer or an AI coding agent can build a 90–95% match without needing to look at the original site.

**Fidelity budget — where the 5–10% gap lives.** Do not chase these:

| Gap | Why | Cost to close |
|---|---|---|
| Exact licensed font files | Tilfi uses commercially licensed webfonts | Buy the licence, or accept a near-match |
| Photography | Every image is bespoke studio/campaign work | Reshoot or license |
| Shopify checkout chrome | Not themeable below Plus | Accept |
| Third-party widget internals (Swym wishlist, Boost filters) | Vendor-rendered DOM | Rebuild behaviour, not markup |
| Sub-pixel kerning of the wordmark | Custom lettering | Vector-trace |

**Legal note.** Structure, layout grammar, navigation architecture and interaction patterns are fair to study and reimplement. The copy, product photography, campaign films, the Tilfi wordmark and the product names are Tilfi's property. Asset URLs are cited below **for prototype wiring and measurement only** — swap in your own before anything ships publicly.

---

## 1. Brand & design intent

Tilfi sells handloom Banarasi textiles at ₹10,000–₹1,00,000+. The site is not a fast-fashion storefront; it is closer to a **gallery catalogue with a checkout attached.** Every design decision follows from that.

**The five governing principles:**

1. **The product is the interface.** Photography is full-bleed, uncropped, and given room. Chrome recedes — thin rules, no shadows, no cards, no gradients.
2. **Editorial before commercial.** A campaign is introduced with a name and a sentence of poetry, then a quiet "Discover" link. Price is never in a hero. There are no discount badges, no countdown timers, no "only 2 left!" urgency.
3. **Whitespace as luxury signal.** Generous vertical rhythm (80–140px section padding on desktop). Text blocks are narrow and centred.
4. **Craft vocabulary is load-bearing.** Kadhua, Tanchoi, Shikargah, Kadiyal, Rangkat, Jamdani, Katan, Kora — these are navigation categories, not marketing adjectives. The IA teaches the customer the craft taxonomy. **Any rebuild that collapses these into "Silk / Cotton / Sale" loses the brand.**
5. **Restraint in motion.** Fades and slow crossfades only. Nothing bounces, nothing parallaxes aggressively, nothing auto-plays with sound.

**Tone of voice:** literary, third-person, present tense, unhurried. Section headings are noun phrases ("Among Orchids", "Of Threads & Time"). Body copy is one to three sentences. CTAs are single verbs, letterspaced, uppercase — `DISCOVER`, `EXPLORE`.

---

## 2. Technology stack (observed)

| Layer | What tilfi.com runs |
|---|---|
| Platform | **Shopify** (store id `12242138`) |
| Theme | Custom Liquid theme, Shopify Sections architecture |
| CDN | `tilfi.com/cdn/shop/files/...` with `_{width}x` suffix transforms |
| Video | `cdn.shopify.com/videos/c/o/v/{hash}.mp4` |
| Analytics | Google Tag Manager (`GTM-MK3BS8B`) |
| Wishlist | **Swym** (anchor target `#swym-wishlist`) |
| PLP filtering | Tag-based facets on path segments (`/collections/sarees/black`) — Boost AI / Shopify tag filtering pattern |
| Multi-currency | Shopify Markets — INR, USD, CAD, GBP, AUD, EUR, JPY, SGD |
| Appointments | Calendly embeds for store visits |
| Customer accounts | New Shopify customer accounts (`/customer_authentication/redirect`) |

**Key structural implication:** the filter URL scheme is `/collections/{collection}/{tag}` — a path segment, not a query string. Facets stack (`/collections/sarees/black/katan-silk`). Any rebuild must replicate this because it is SEO-load-bearing and drives thousands of indexed landing pages.

**Image transform contract.** Every CDN URL ends `_{width}x.jpg?v={timestamp}`. Observed widths: `300x` (thumbnails), `2000x` (hero/desktop), `2048x` (PDP zoom). Build your `srcset` on this pattern.

---

## 3. Design tokens

> ✅ **Verified against computed styles, 5 August 2026.** A live browser session has now run. **Several values below were wrong — see §3.0.**
>
> ⚠️ **But read §3.0 first for a more important point:** under the agreed "same architecture, own brand" target (`build.md` scope note), these values are **reference only and must not be implemented**. Design tokens are a designer deliverable — `build.md` §2.5 specifies the required token *shape*. This section is retained as evidence of what the category does, not as a spec.

### 3.0 Verification results

Measured from `getComputedStyle` on the live site at 1920px.

#### Corrected — the original estimates were wrong

| Token | Estimated | **Measured** | Note |
|---|---|---|---|
| Display family | Cormorant Garamond / EB Garamond | **`Cardo, serif`** | Different face, similar genre |
| Display weight | 300 | **400** | The site is not as light as it reads |
| UI family | Jost / Futura / Lato | **`"Open Sans", sans-serif`** | A very ordinary system-grade sans, not a geometric |
| Ink (headings) | `#1a1a1a` near-black | **`#533e2d`** | **Biggest miss.** A warm mid-brown, not near-black. Explains much of the site's warmth. |
| Body line-height | 1.7 | **1.5** (14px/21px) | Less generous than described |
| Body size | 15–16px | **14px** | |
| Nav link family | UI sans | **Cardo — the serif** | §3.2's "sans for everything functional" is **wrong**. Nav is serif, uppercase, 14px. |
| Nav letter-spacing | +0.12em | **1px @ 14px ≈ +0.071em** | Roughly half. The "single most identity-defining move" claim in §3.2 is overstated. |
| `--max-w-site` | 1680px | **2000px** | |
| `--max-w-content` | 1280px | **1200px** | |
| `--header-h` | 72px scrolled / 96px at top | **65px at rest / 78px sticky** | Inverted — the header gets *taller* when it sticks, not shorter |

#### Confirmed

| Claim | Result |
|---|---|
| `--radius: 0` — "everything is square, no exceptions" | ✅ **891 of 900 sampled elements have `border-radius: 0px`.** The handful of exceptions are third-party widgets. |
| "The site has effectively zero box-shadows" | ✅ **5 shadows on the entire page**, all on third-party widgets (chat, wishlist). Header class is literally `box-shadow-false`. |
| `--c-bg: #ffffff` | ✅ Confirmed |
| Product card ratio 2:3 | ✅ Card measures **420 × 630** exactly; image ratio 0.667 |

#### Newly measured

- **Header transition:** `background-color 0.3s linear, height 0.2s linear`. The 0.2s height transition is the whole condense animation — §3.6's `--t-base: 320ms` is in the right region but the header specifically uses 200/300ms.
- **Sticky header** is `position: fixed`, engaged after the header scrolls out of view (below 612px; exact threshold not isolated — the handler ignores programmatic scroll).
- **Product grid is not CSS Grid.** Block/float layout, older theme generation. Do not infer a grid system from it; build your own per `build.md` §2.5.
- **Homepage hero** is Flickity (`jsSlideshowClassic`, `gallery-cell`), 9 slide indicators, with an `overlaid-header-option` class — so header-over-hero is a theme option, though the header computed white at rest.

#### Interpretation

The original analysis got the *relationships* right — square corners, no elevation, warm and quiet, serif display over sans UI, restrained motion — and the *values* wrong in almost every case. That is the expected failure mode for visual estimation, and it is exactly why §2.5 of `build.md` now treats tokens as a designer deliverable rather than something to extract.

One finding is worth carrying regardless of target: **the ink is brown, not black.** A near-monochrome luxury palette built on `#1a1a1a` reads colder and harder than this category does. Whatever palette your designer lands on, that warm-neutral-ink decision is the one structural lesson in this section.

### 3.1 Colour

The palette is almost monochrome. Colour on the page comes from the textiles, not the UI.

```css
:root {
  /* Surfaces */
  --c-bg:            #ffffff;   /* confirmed: meta theme-color */
  --c-bg-alt:        #faf8f5;   /* warm off-white, editorial bands */
  --c-bg-sand:       #f4f0ea;   /* footer / newsletter block */

  /* Ink */
  --c-ink:           #1a1a1a;   /* headings — near-black, never #000 */
  --c-ink-body:      #3d3d3d;   /* body copy */
  --c-ink-muted:     #7a7a7a;   /* meta, SKU, captions, disabled */

  /* Lines */
  --c-rule:          #e2ddd6;   /* hairlines, input underlines, dividers */
  --c-rule-strong:   #1a1a1a;   /* CTA underline, active tab */

  /* Accent — used sparingly */
  --c-accent:        #8a6a3d;   /* muted antique gold */
  --c-accent-soft:   #c9a96a;   /* hover on gold elements */

  /* State */
  --c-error:         #a33b32;
  --c-success:       #4a6b48;

  /* Overlays */
  --c-scrim:         rgba(0,0,0,0.28);   /* over hero imagery */
  --c-scrim-strong:  rgba(0,0,0,0.45);   /* mobile hero, text legibility */
}
```

**Rules of use:**

- Buttons are **outline or underline**, not filled, in 90% of cases. Primary filled button (`Add to cart`) is `--c-ink` background, white text.
- Never use pure `#000` or pure black shadows. The site has effectively **zero box-shadows**.
- Gold is reserved for hover states and the occasional divider flourish. If gold appears on more than ~2% of pixels, you have overdone it.

### 3.2 Typography

Two families. A light display serif for everything expressive; a light geometric/humanist sans for everything functional.

```css
:root {
  /* Substitute freely-licensed near-matches if the originals aren't licensed */
  --f-display: "Cormorant Garamond", "EB Garamond", Didot, Georgia, serif;
  --f-ui:      "Jost", "Futura", "Lato", -apple-system, "Helvetica Neue", sans-serif;
}
```

**Where each is used:**

| Element | Family | Weight | Size (desktop) | Tracking | Case |
|---|---|---|---|---|---|
| Wordmark "Tilfi" | custom lettering (SVG) | — | ~26px cap height | wide | Title |
| Hero / section title (h2) | display | 300 | 40–56px | +0.01em | Title Case |
| Editorial pull quote | display | 300 *italic* | 28–36px | +0.02em | Sentence |
| Page title (PLP h1) | display | 300 | 32–40px | +0.02em | Title Case |
| Product title (PDP h1) | display | 300 | 26–32px | normal | Title Case |
| Product title (card) | ui | 300 | 13–14px | +0.04em | Title Case |
| Price | ui | 400 | 14–15px | +0.02em | — |
| Body copy | ui | 300 | 15–16px | +0.01em | Sentence |
| Nav top-level | ui | 400 | 12–13px | **+0.12em** | UPPERCASE |
| Mega-menu column head | ui | 500 | 11–12px | +0.14em | UPPERCASE |
| Mega-menu link | ui | 300 | 13px | +0.02em | Title Case |
| CTA link (`DISCOVER`) | ui | 400 | 11–12px | **+0.18em** | UPPERCASE |
| Button label | ui | 400 | 12px | +0.14em | UPPERCASE |
| Announcement bar | ui | 300 | 11–12px | +0.06em | Sentence |
| Meta / SKU / caption | ui | 300 | 11px | +0.06em | UPPERCASE |
| Footer link | ui | 300 | 13px | +0.02em | Title Case |

**Line heights:** display headings `1.15`. Body `1.7` (generous — this is a big part of the "calm" feel). Nav and buttons `1`. Captions `1.5`.

**The single most identity-defining typographic move:** wide letterspacing (`+0.12em` to `+0.18em`) on every uppercase micro-label. Get this wrong and nothing else will save the match.

**Measure:** editorial paragraphs are capped at `~62ch` and centred. PDP description column caps at `~52ch`.

### 3.3 Spacing scale

An 8px base, but with deliberately large section-level steps.

```css
:root {
  --s-1:  4px;   --s-2:  8px;   --s-3: 12px;  --s-4: 16px;
  --s-5: 24px;   --s-6: 32px;   --s-7: 48px;  --s-8: 64px;
  --s-9: 80px;   --s-10: 104px; --s-11: 140px;

  --section-y-desktop: var(--s-10);  /* 104px top and bottom */
  --section-y-mobile:  var(--s-8);   /* 64px */
  --gutter-desktop:    var(--s-7);   /* 48px */
  --gutter-mobile:     var(--s-4);   /* 16px */
  --grid-gap:          var(--s-5);   /* 24px between product cards */
}
```

### 3.4 Layout & grid

```css
:root {
  --max-w-site:       1680px;  /* wide, near-full-bleed feel */
  --max-w-content:    1280px;  /* PLP grid, PDP two-column */
  --max-w-prose:      720px;   /* editorial text blocks */
  --header-h:         72px;    /* desktop, scrolled state */
  --header-h-top:     96px;    /* desktop, at page top (roomier) */
  --header-h-mobile:  56px;
  --announcement-h:   36px;
}
```

**Column grid:** 12-column, 24px gutter, inside `--max-w-content`.

**Hero sections are full-bleed** — they break out of the container to `100vw`.

### 3.5 Radii, borders, elevation

```css
--radius:        0;        /* everything is square. no exceptions. */
--radius-pill:   999px;    /* only: currency chip, filter "clear" chip */
--border:        1px solid var(--c-rule);
--shadow:        none;     /* the site uses no elevation */
```

Square corners are a deliberate luxury cue. **Do not round anything.**

### 3.6 Motion

```css
--ease:        cubic-bezier(0.25, 0.1, 0.25, 1);   /* near-linear, calm */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);      /* drawer / menu open */
--t-fast:      180ms;   /* link + icon hover */
--t-base:      320ms;   /* image crossfade, underline draw */
--t-slow:      600ms;   /* mega-menu reveal, drawer slide */
--t-hero:      1200ms;  /* hero slide crossfade */
```

**Motion inventory — the complete list of animations on the site:**

1. Hero carousel: opacity crossfade, ~1200ms, autoplay ~6s interval.
2. Product card: primary → secondary image crossfade on hover, ~320ms.
3. Nav link: 1px underline draws left→right on hover, ~180ms.
4. Mega menu: fade + 8px translateY down, ~300ms in, instant out.
5. Drawers (cart, filter, search): slide from edge, ~400ms `--ease-out`, with scrim fade.
6. Scroll reveal: sections fade in + 16px rise, once, `IntersectionObserver` at ~15% threshold.
7. Accordion (PDP tabs, mobile nav, filters): height auto-transition ~250ms.

Anything not on this list should not move. Honour `prefers-reduced-motion: reduce` by disabling 1, 5, 6, 7.

### 3.7 Breakpoints

```css
/* mobile-first */
--bp-sm:  480px;   /* large phone         → 2-col product grid */
--bp-md:  768px;   /* tablet portrait     → 2-col, sidebar filters become drawer */
--bp-lg:  1024px;  /* tablet landscape    → 3-col, desktop nav appears */
--bp-xl:  1280px;  /* desktop             → 4-col grid, full mega menu */
--bp-2xl: 1600px;  /* large desktop       → 4-col, wider gutters */
```

Note the site serves **separate desktop and mobile hero images** (`...Banner_2000x.jpg` vs `...Banner-Mob_2000x.jpg`) — this is an art-direction `<picture>` swap, not a CSS resize. Replicate it; mobile heroes are portrait-crop with the subject recomposed.

---

## 4. Information architecture

This is the highest-leverage part of the match. Tilfi's IA is unusually deep — five parallel taxonomies over the same catalogue.

```
/
├─ /collections/{handle}                        Product listing
│   └─ /collections/{handle}/{tag}[/{tag}...]   Faceted listing (path-based)
├─ /collections/{handle}/products/{handle}      Product detail (in-collection)
├─ /products/{handle}                           Product detail (canonical)
├─ /pages/{handle}                              Editorial / craft / campaign / policy
├─ /blogs/{blog}/{article}                      Journal
├─ /cart
├─ /search
└─ /customer_authentication/redirect            Account
```

### 4.1 The five taxonomies

| Taxonomy | Question it answers | Examples |
|---|---|---|
| **Garment type** | "What am I buying?" | Sarees, Dupattas, Lehengas, Suits, Blouses, Jackets, Tops & Shirts, Pants & Co-Ords, Dresses, Scarves & Stoles, Accessories |
| **Weave / pattern** | "How was it made?" | Kadhua, Tanchoi, Shikargah, Kadiyal, Vasket, Twill, Rangkat, Jamdani (Nafees), Bandhej, Zarkashi, Kashi |
| **Fabric** | "What is it made of?" | Katan Silk, Kora Organza, Handwoven Georgette, Sooti Cotton, Linen, Textured Silk, Tissue Silk, Satin Silk, Silk Pashmina Wool |
| **Campaign** | "What story is it part of?" | Charbagh, Tarang, Peony Pavilion, SeeSaw, Sandhi, Charulata, Nagma, Janavi, Shakti, Balance |
| **Occasion / edit** | "When would I wear it?" | Bridal, Festive Edit, Weddings, Modern Classics, Collector's Edit, Excellence Series, Seasonal Selections |

Plus a merchandising axis: Fresh off the Loom, Freshly Tailored, Bestsellers, Back in Stock, Pre-Orders, Ready to Ship, Gifts.

**Implementation note:** in Shopify these are all `collections`, cross-cut by product `tags`. In a headless rebuild, model this as a single `Product` with a many-to-many `taxonomy_terms` join and a `taxonomy_type` enum. Do **not** model it as a single-parent category tree — it will not fit.

### 4.2 Non-commerce page families

- **Craft / education:** Identify, Fabrics, Weaving Process, Techniques & Patterns, Many Hands of Handloom, Metal Repoussé / Art & Collectibles
- **Brand:** Our Story / Our Heritage, Impact, Press & Media, Careers, Contact Us, Banaras Store, Mumbai Store, Retail Stores
- **"Spirit of Creations"** (long-form campaign essays): Becoming, A Colour Unbroken, Banaras Nocturne, Banaras Bombay, Quarter to Time, Yatra, Gulab Bari, Kala, Katha
- **Journal blogs:** Arts & Culture, Style, Features, Perspective; plus Maestros of the Arts
- **Policy:** Returns & Cancellation, Delivery & Shipping, Privacy Policy, Terms & Conditions, Size Chart, FAQs

**Roughly 40% of the site by page count is non-commerce editorial.** A rebuild that ships only the shop templates will feel thin and will miss the brand entirely — this is the single most common failure mode.

---

## 5. Global components

### 5.1 Announcement bar

- Full width, `--c-bg-alt` or `--c-ink` background, height `36px`.
- Centred, 11–12px, light weight, `+0.06em` tracking.
- Content is a rotating or pipe-delimited set of shipping/duty reassurances. Italic emphasis on the reassurance clause.
- A second thin strip beneath carries an italic brand tagline.
- Not dismissible. Scrolls away with the page (not sticky).

### 5.2 Header

**Desktop structure — three rows at page top, collapsing to one on scroll:**

```
┌──────────────────────────────────────────────────────────────┐
│  [announcement bar]                                          │
├──────────────────────────────────────────────────────────────┤
│  ⌕ Search        [ TILFI wordmark ]      ₹INR ▾  Login  ♡  🛍 0│
├──────────────────────────────────────────────────────────────┤
│   SHOP   COLLECTIONS   CAMPAIGNS   CRAFT   STORIES   ABOUT US│
└──────────────────────────────────────────────────────────────┘
```

- **Wordmark centred**, utilities split left (search) / right (currency, account, wishlist, cart). This centred-mark layout is a core luxury-retail signature — do not move the logo left.
- Nav row: 6 top-level items, centred, uppercase, `+0.12em`, ~13px, gap ~40px.
- Background: transparent over the hero on the homepage, becoming solid white on scroll past ~120px. On all other templates it is solid white from load.
- On scroll: header condenses to a single row (`--header-h` 72px), wordmark shrinks to ~70%, sticky with a 1px bottom rule. Transition ~300ms.
- Cart shows a live item count. Clicking opens a **drawer**, not a page navigation (though `/cart` exists as a fallback).

**Mobile structure — single row, 56px:**

```
☰    [ TILFI ]    ⌕  ♡  🛍
```

Hamburger opens a full-height left drawer with accordion sections mirroring the desktop taxonomy, plus currency selector and Login pinned to the bottom.

### 5.3 Mega menu

The most complex component on the site. Each top-level nav item opens a **full-width panel** that spans the viewport, not a narrow dropdown.

**Layout — 4 or 5 columns of links + 1–2 image tiles on the right:**

```
┌───────────────────────────────────────────────────────────────────────┐
│  NEW ARRIVALS    CLOTHING        FEATURED         ┌────────┐ ┌────────┐│
│  Fresh off the   Sarees          Shikargah Tales  │        │ │        ││
│  Freshly Tail.   Lehengas        Tilfi Icons      │ image  │ │ image  ││
│  Gifts           Dupattas        Handwoven Fab.   │  tile  │ │  tile  ││
│  Bestsellers     Suits           Bridal           │        │ │        ││
│  Back in Stock   Blouses         Zarkashi         │ Label  │ │ Label  ││
│  Pre Orders      Jackets         Antinomy         └────────┘ └────────┘│
│  Ready to Ship   Tops & Shirts   Menswear                              │
│                  Pants & Co-Ords Art & Collectibles                    │
│                  Dresses                                               │
│                  Scarves & Stoles                                      │
│                  Accessories                                           │
└───────────────────────────────────────────────────────────────────────┘
```

**Panel contents by trigger:**

| Trigger | Columns | Image tiles |
|---|---|---|
| **Shop** | New Arrivals · Clothing · Featured | 1 (current campaign) |
| **Collections** | Weaves & Patterns · Fabrics · How to Style | 1 |
| **Campaigns** | Shop by Campaign · Featured Campaign | 2 |
| **Craft** | Handloom · Metal | 2 |
| **About Us** | About Us | 2 (Impact, Retail Stores) |
| **Stories** | Spirit of Creations · Stories | 2 |

**Behaviour:**
- Opens on hover (desktop) with ~120ms intent delay to prevent flicker; also opens on keyboard focus/Enter.
- Closes on mouse-leave of the panel + trigger union, on `Esc`, or on outside click.
- Page content behind gets a light scrim (`rgba(0,0,0,0.15)`); body scroll is **not** locked.
- Column heads: uppercase, `+0.14em`, 11–12px, `--c-ink`, ~16px bottom margin.
- Links: 13px, `--c-ink-body`, 10px vertical rhythm. Hover → `--c-ink` + 1px underline.
- Some links are **bolded** for merchandising emphasis (Gifts, Bestsellers, Zarkashi, Kashi, Antinomy, Menswear). Preserve this — it is intentional weighting, not an accident.
- Image tiles: 3:4 portrait, uppercase caption below or overlaid bottom-left, subtle 1.03 scale on hover over ~600ms.

**Accessibility:** each trigger is a `<button aria-expanded aria-controls>`; the panel is a labelled region; arrow keys move between columns; `Esc` returns focus to the trigger.

### 5.4 Product card

The atomic unit of every grid.

```
┌─────────────────┐
│                 │
│                 │   3:4 portrait image
│   [ product ]   │   primary → secondary crossfade on hover
│                 │   ♡ wishlist, top-right, fades in on hover
│                 │   [ Quick View ] bar slides up from bottom on hover
├─────────────────┤
│ Product Title   │   ui, 300, 13–14px, +0.04em, max 2 lines
│ ₹46,500         │   ui, 400, 14px, --c-ink
└─────────────────┘
```

> 🔴 **Corrected 5 Aug 2026 after live measurement.** Two claims in this block are wrong:
> - **Aspect ratio is 2:3, not 3:4.** Cards measure exactly **420 × 630**; image ratio 0.667 across 4,330 of 4,810 catalogue images (`sweep-findings.md` §1.1). Use **2:3**, matching `photography-brief.md` §2.1.
> - **Quick View does not exist.** No such control on the live PLP (§12 item 7). Drop it, or build it as an original addition — but note that the whole-card-is-one-link problem below only exists if you do.

**Specification:**
- Aspect ratio **2:3** (portrait) — *corrected; the 3:4 below was an estimate*. Never crop a saree to square in a grid.
- `object-fit: cover`, `object-position: center`.
- No card border, no background, no shadow, no radius. The card *is* the image.
- Title truncates at 2 lines with ellipsis; full title in `title`/`aria-label`.
- Price: single value. No strikethrough, no "was/now" — the brand does not discount.
- Badges appear only for `Pre-Order`, `Back in Stock`, `Sold Out`. Style: uppercase 10px, `+0.1em`, `--c-ink-muted`, top-left, no pill, no colour fill.
- **Quick View** opens a modal with the image gallery, title, price, description excerpt and Add-to-cart — it does not navigate.
- Whole card is one link target; wishlist and Quick View are nested interactive elements (use `<article>` + a stretched-link pseudo-element, not nested `<a>`).
- Loading: `loading="lazy"` below the fold, `fetchpriority="high"` on the first row.

### 5.5 Buttons & links

| Variant | Style |
|---|---|
| **Primary** (`ADD TO CART`) | `--c-ink` fill, white text, 12px `+0.14em` uppercase, height 48px, full-width in PDP column, square. Hover → `#000`. |
| **Secondary** (`Banaras Store`) | Transparent, 1px `--c-ink` border, `--c-ink` text. Hover → fill `--c-ink`, text white, 180ms. |
| **Editorial CTA** (`DISCOVER`) | Text only, uppercase, 11–12px, `+0.18em`, with a 1px underline offset ~6px below. Hover → underline width animates from 0→100% left-to-right. **This is the site's signature CTA.** |
| **Ghost / icon** | 24px icon, `--c-ink-body`, hover `--c-ink`. Thin 1px stroke icons throughout — never filled glyphs. |
| **Disabled** | `--c-ink-muted` fill at 40% opacity, `cursor: not-allowed`. |

Focus ring: `outline: 1px solid var(--c-ink); outline-offset: 3px`. Visible, square, no glow.

### 5.6 Form inputs

- **Underline only** — no boxes. `border-bottom: 1px solid var(--c-rule)`, transparent background.
- Height 44px, 14px text, placeholder in `--c-ink-muted`.
- Focus: bottom border → `--c-ink`, 180ms.
- Label sits above, 11px uppercase `+0.08em`, or floats up on focus.
- Required marker: a thin `*` in `--c-ink-muted`.
- Error: bottom border `--c-error`, message 11px below.

### 5.7 Footer

Four-region layout on desktop, stacked accordion on mobile.

```
┌──────────────────────────────────────────────────────────────┐
│                    STAY IN TOUCH                             │
│         Hear about our new woven treasures and more...       │
│         [ Email ______________________ ]  [ SIGN UP ]        │
├──────────────────────────────────────────────────────────────┤
│  HERE TO HELP        USEFUL INFORMATION      ABOUT          │
│  Email               Returns & Cancellation  Our Story       │
│  Phone               Delivery & Shipping     Banaras Store   │
│  WhatsApp link       Privacy Policy          Mumbai Store    │
│  Support hours       Terms & Conditions      Press & Media   │
│  (italic, muted)                             FAQs            │
│                                              Careers         │
│                                              Size Guide      │
│                                              Gift Cards      │
│                                              Contact Us      │
├──────────────────────────────────────────────────────────────┤
│  [f] [ig] [yt]                              © 2026 Tilfi     │
└──────────────────────────────────────────────────────────────┘
```

- Background `--c-bg-sand` or `--c-bg-alt`. 1px top rule.
- Column heads uppercase 11px `+0.12em`. Links 13px, `--c-ink-body`, hover `--c-ink` + underline.
- Support hours in italic `--c-ink-muted` — a small warmth cue worth keeping.
- Social icons: 1px stroke outline, 20px, `--c-ink-body`.
- Newsletter is a `<form>` with an underline input and a `SIGN UP` text-CTA, side by side on desktop, stacked on mobile.
- Vertical padding: 80px top, 40px bottom.

### 5.8 Overlays

| Overlay | Trigger | Behaviour |
|---|---|---|
| **Search** | header ⌕ | *Corrected:* a **centred modal**, not a full-screen takeover. Live typeahead grouped into four labelled sections — Popular Suggestions / Categories / Pages / Products. The grouping is worth copying (`build.md` §8.3). |
| **Cart drawer** | header 🛍 | *Note:* the reference uses an **anchored dropdown**, not a drawer (`build.md` §8.2). We are deliberately specifying a **right slide-in drawer, ~420px, full height** — better for two ₹50,000 line items. Thumbnails **2:3**, not 3:4. |
| **Filter drawer** | PLP `Filter` (mobile/tablet) | Left slide-in, accordion facet groups, sticky `APPLY` / `CLEAR` footer. **Must be multi-select** — the reference is radio-only (`build.md` §9.1). |
| ~~**Quick View**~~ | — | **Does not exist on the reference site** (§12 item 7). Dropped. |
| **Newsletter popup** | ~15s delay or exit intent, once per session | Two-panel: campaign image left, form right. Warm greeting, ships-worldwide reassurance, email field, `SIGN UP`. Dismissible ×; remembered via cookie. |

All overlays: scrim `--c-scrim`, body scroll lock, focus trap, `Esc` to close, focus returned to trigger.

---

## 6. Page anatomy

### 6.1 Homepage

The homepage is a **stack of independently-configured sections** — Shopify Sections in the original. Build it as a section registry, not a hardcoded page. Observed order:

**§1 — Hero carousel (full-bleed)**

- 6 slides, each: full-viewport-width image, art-directed desktop/mobile pair, centred or bottom-left text block.
- Text block per slide: `<h2>` display serif ~48px + one-sentence subtitle 15–16px + a `DISCOVER` CTA.
- Text sits over a soft bottom scrim gradient for legibility.
- Desktop height ~`80vh` (min 600px, max 900px). Mobile ~`75vh` portrait crop.
- Autoplay ~6s, opacity crossfade 1200ms, pause on hover/focus. Slim dot or bar indicators, bottom-centre. No visible prev/next arrows on desktop; swipe on mobile.
- *Observed slides:* Among Orchids → Kadhua Collectibles; Vanam Leela → Jamdani; Tilfi Icons; The Art of Gifting; Seasonal Selections; Art & Collectibles.
- *Reference assets (prototype only):* `Small-Booti-2Banner_2000x.jpg`, `Vanam-Leela-Banner_2000x.jpg`, `Tilfi-Icons-Banner_2000x.jpg`, `GiftingBanner_2000x.jpg`, `linen-banner_2000x.jpg`, `Art_CollectibleBanner_2000x.jpg` (each with a `-Mob` sibling).

**§2 — Brand statement**

- Centred, `--max-w-prose`, on `--c-bg` or `--c-bg-alt`.
- A short display-serif quotation (~36px, in quote marks) + one sentence of body copy beneath.
- Section padding `--s-11` (140px) top and bottom. This band is mostly whitespace — that is the point.

**§3 — Featured collection triptych**

- Three square (1:1) images in a row, `--grid-gap` between, all linking to one collection.
- Below the row, centred: `<h2>` collection name, 2-sentence description, `DISCOVER` CTA.
- Mobile: horizontal scroll-snap carousel of the three.

**§4 — Video band**

- Full-bleed autoplaying `<video>`, muted, looped, `playsinline`, no controls, `preload="metadata"`, poster frame required.
- Height ~`70vh` desktop. Optional overlaid text.

**§5 — Category split (2-up)**

- Two square tiles side by side: `SAREES` | `DUPATTAS`. Uppercase label centred beneath or overlaid.
- 1:1 aspect. Hover: image scales 1.03 over 600ms with `overflow: hidden`.

**§6 — Editorial split (Womenswear / Menswear)**

- Two full-width bands, each: art-directed image + overlaid `<h2>` + one-line subtitle + `Explore` CTA.
- Alternating text alignment (left on one, right on the next).

**§7 — Quick-link tile row**

- Four square tiles, image-only with overlaid uppercase label: Bridal · The Art of Gifting · Zarkashi · Art & Collectibles.

**§8 — Dual campaign feature**

- Two square campaign images side by side; beneath each, its `<h2>`, a 2–3 sentence editorial paragraph, and `DISCOVER`.
- Text columns capped at `--max-w-prose / 1.5`, left-aligned under their image.

**§9 — Poetry band**

- Centred display-serif heading + a two-sentence lyrical paragraph. Same generous padding as §2. No CTA.

**§10 — Stores**

- Two art-directed bands (Banaras, Mumbai), each with overlaid `VISIT OUR STORES` heading, an appointment invitation line, and two secondary buttons linking to Calendly booking pages.

**§11 — Here to Help**

- Contact block: email, phone, WhatsApp link, italic support hours. Sits directly above the footer, sometimes rendered as part of it.

**Homepage performance targets:** LCP < 2.5s (hero image is the LCP element — preload it, `fetchpriority="high"`, AVIF/WebP with JPEG fallback). CLS < 0.1 (every image needs explicit `width`/`height` or `aspect-ratio`). Lazy-load §4's video below the fold.

### 6.2 Collection / PLP

```
Home / Sarees                                    [breadcrumb, 11px, muted]

                        Sarees                   [h1, display, centred]

              [ Featured ▾ ]                     [sort select, right or centred]

  Tilfi's pure handloom Banarasi sarees are…     [SEO intro, prose width, centred]

┌──────────┬─────────────────────────────────────────────────┐
│ FILTER   │  ┌────┐ ┌────┐ ┌────┐ ┌────┐                    │
│          │  │    │ │    │ │    │ │    │                    │
│ Color    │  └────┘ └────┘ └────┘ └────┘                    │
│ Fabric   │  ┌────┐ ┌────┐ ┌────┐ ┌────┐                    │
│ Type     │  │    │ │    │ │    │ │    │                    │
│ Price    │  └────┘ └────┘ └────┘ └────┘                    │
│ Pattern  │                                                  │
│ Avail.   │              [ LOAD MORE ]                       │
└──────────┴─────────────────────────────────────────────────┘
```

**Header block**
- Breadcrumb: `Home / {Collection}`, 11px uppercase `+0.06em`, `--c-ink-muted`, `/` separators.
- `<h1>`: display serif, 32–40px, centred, `--s-7` below breadcrumb.
- SEO intro paragraph: `--max-w-prose`, centred, 15px, `--c-ink-body`, line-height 1.7. Present on every major collection. **Keep it** — it is meaningful organic-traffic infrastructure.

**Sort control**
- Native-looking `<select>` styled minimally, or a custom listbox. Options: `Featured`, `Alphabetically: A-Z`, `Alphabetically: Z-A`, `Price: Low to High`, `Price: High to Low`.
- Uppercase 12px `+0.08em`, thin chevron.

**Filter sidebar (desktop ≥1024px)**
- Width ~220px, sticky below the header, left of the grid.
- Facet groups as accordions, each with a heading (`Color`, `Fabric`, `Type`, `Price`, `Pattern`, `Availability`) and a small in-group search input for long lists.
- Facet values as checkbox rows (square 14px checkbox, 13px label). Colour facet may show a small swatch.
- Active facets render as removable chips above the grid, plus a `clear` link.
- **URL scheme:** selecting a facet navigates to `/collections/{collection}/{tag}`; multiple facets append `/{tag}/{tag}`. Preserve this — it is server-rendered and indexed. Order tags alphabetically to avoid duplicate URLs for the same result set, and canonicalise.

*Observed facet values, for parity:*
- **Color:** Black, Beige, Blue, Green, Gold, Grey, Magenta, Maroon, Orange, Pink, Purple, Red, Silver, Turquoise, Tussar, White, Yellow, Off-White, Peach
- **Fabric:** Chiffon Georgette, Cotton, Kora, Satin Silk, Silk by Cotton, Silk Georgette, Tussar Silk, Cotton Tissue, Katan Tissue, Tussar Georgette, Katan Silk, Kora Net, Silk Wool, Linen
- **Type:** Sarees, Pre Pleated
- **Price:** ₹10,000–20,000 · ₹20,000–40,000 · ₹40,000–60,000 · Over ₹60,000
- **Pattern:** Floral, Booti, Patola, Shikaargah, Tanchoi, Jangla, Jamdani, Jamawar, Rangkat, Hand Embroidered, Baluchari, Plain
- **Availability:** Pre-Order

**Filter drawer (< 1024px)**
- `FILTER` button pinned near the sort control; opens a left drawer with the same accordions and a sticky `APPLY` / `CLEAR` footer showing a live result count.

**Product grid**
- Desktop ≥1280px: **4 columns**. 1024–1279px: 3. 480–1023px: 2. < 480px: 2 (tight gutter) — note the site keeps 2-up on phones rather than dropping to 1, which reads as a catalogue.
- Gap 24px desktop, 12px mobile.
- Pagination: `LOAD MORE` button (or infinite scroll) — but also emit real `?page=n` links in markup for crawlability.
- Empty state: centred display-serif line + a `Clear filters` CTA.

### 6.3 Product detail / PDP

> 🔴 **Corrected 10 Sep 2026 by live re-measurement — see `design-addendum.md` §A5.2.**
> Three things in this section are wrong and A5.2 supersedes them:
> - **Columns are 50/50 in a 1160px container**, not "roughly 58% gallery / 42% details".
> - **The details column is not sticky.** It is `position: static`.
> - **There is no vertical thumbnail rail.** The main image sits above a horizontal
>   five-up thumbnail strip, both in the left column.
>
> The ASCII sketch below still shows the old, wrong arrangement; read A5.2 for the
> measured one.


```
Home / Sarees / 'Majestic Leap' Green…          ← Previous  |  Next →

┌────────────────────────┬─────────────────────────────┐
│  ┌──┐                  │  'Majestic Leap' Green Pure │
│  │  │  ┌──────────────┐│  Katan Silk Banarasi        │
│  ├──┤  │              ││  Handloom Saree             │
│  │  │  │   MAIN       ││  SKASHGN12285               │
│  ├──┤  │   IMAGE      ││                             │
│  │  │  │   (zoom)     ││  ₹46,500                    │
│  ├──┤  │              ││  MRP inc. of taxes          │
│  │  │  └──────────────┘│                             │
│  └──┘                  │  ── Majestic Leap ──        │
│  thumbs                │  Editorial paragraph…       │
│  (vertical)            │                             │
│                        │  • Color — Forest Green     │
│                        │  • Technique — …            │
│                        │  • Fabric — Pure Katan Silk │
│                        │  • Collection note — …      │
│                        │  • Tilfi Promise — …        │
│                        │                             │
│                        │  Handwoven-irregularity note│
│                        │                             │
│                        │  2 available to order       │
│                        │  Qty [− 1 +]  [ ADD TO CART]│
└────────────────────────┴─────────────────────────────┘

  Shipping | Dimensions | Care | Other        [tab bar]
  ──────────────────────────────────────────
  · content …

  You may also like
  ┌────┐ ┌────┐ ┌────┐ ┌────┐
```

**Layout:** two columns, roughly 58% gallery / 42% details, `--max-w-content`. The details column is **sticky** while the gallery scrolls (a key premium feel). Below ~1024px it stacks: gallery, then details.

**Gallery**
- *Corrected 5 Aug 2026:* **median 6, mean 5.7 images per saree** — of which **frames 1–5 are 2:3 portrait on-model and frames 6–7 are 1:1 square detail** (`sweep-findings.md` §1.3–1.4). Not a uniform 3:4. The gallery must handle a **mixed 2:3 / 1:1 sequence** and reserve both ratios to protect CLS. Masters on the reference site are mostly 1440–1600px wide; ours are 3000px per `photography-brief.md` §2.1.
- Vertical thumbnail rail on the left of the main image (desktop); horizontal scroll-snap strip beneath (mobile).
- Click or hover main image → zoom (lens or fullscreen lightbox with pinch/scroll zoom).
- Last image in the set is often a flat detail/swatch shot — keep that convention.

**Prev / Next** links to adjacent products within the current collection, top-right, 11px uppercase muted.

**Details column, in order:**
1. `<h1>` display serif, 26–32px, line-height 1.25.
2. **SKU** directly beneath, 11px uppercase `+0.06em`, `--c-ink-muted`.
3. **Price**, 20–22px, `--c-ink`; beneath it `MRP inc. of taxes` in 11px italic muted.
4. **Named design title** (`<h4>`, display serif, bold-ish) — the piece's poetic name, distinct from the SKU-ish product title.
5. **Editorial paragraph**, 2–4 sentences, 15px, line-height 1.7.
6. **Attribute list** — bulleted, each with an *italic bold* label then an em-dash and the value: Color, Technique, Fabric, Collection note, Tilfi Promise. Labels 13px, values 14px.
7. **Handloom-irregularity note** — italic, muted, 13px. A trust/charm device; keep it.
8. **Availability** — either a live count ("2 available to order") or, when sold out, a *notify-me* email capture with the "rewoven and available to order" framing.
9. **Qty stepper** — `−` / value / `+`, 44px tall, thin 1px border, square.
10. **`ADD TO CART`** — primary button, full column width, 48px.
11. (Optional) wishlist ♡ text-link beneath.

**Tab / accordion block** — four panels below the fold: `Shipping`, `Dimensions`, `Care`, `Other`. Tabs on desktop (active tab gets a 1px `--c-rule-strong` underline), accordion on mobile. Content is bulleted lists; `Other` carries the statutory manufacturer/country-of-origin block required for Indian e-commerce.

**`You may also like`** — 4-card carousel/grid using the standard product card.

**Structured data:** emit `Product` JSON-LD with `name`, `sku`, `image[]`, `description`, `brand`, `offers{price, priceCurrency, availability}`, plus `BreadcrumbList`.

### 6.4 Cart

- Drawer-first; `/cart` page as a full fallback with the same content in a two-column layout (items left, summary right).
- Line item: **2:3** thumb (80×120) *(corrected)*, title (2 lines max), SKU, unit price, qty stepper, line total, remove ×.
- Summary: subtotal, a note that shipping/duties are included, optional gift/order note field, `CHECKOUT` primary button.
- Empty state: centred display-serif line + `CONTINUE SHOPPING`.

### 6.5 Editorial / craft / campaign pages

One flexible long-form template driving ~40% of the site.

**Section vocabulary (compose freely):**
- Full-bleed hero image with an overlaid centred display-serif title
- Centred prose block (`--max-w-prose`, 16px/1.8)
- Full-bleed image with caption beneath (11px muted, centred)
- Two-up image pair
- Image + text 50/50 split, alternating side each instance
- Pull quote — display serif italic, 28–36px, centred, generous margins, no quotation-mark decoration beyond the glyphs
- Video embed, 16:9
- Step / process list (numbered, for Weaving Process, Identify)
- Related-products strip
- Closing CTA band

**Rhythm rule:** never place two prose blocks adjacently without an image between them. The alternation of image and text at a slow cadence is what makes these pages feel like a printed monograph.

### 6.6 Search

- Full-screen overlay. Large centred display-serif prompt, one wide underline input auto-focused.
- Live results after 2 characters: a small product grid plus grouped page/collection suggestions.
- `Esc` or × closes and restores scroll position.

---

## 7. Commerce behaviour

| Feature | Behaviour |
|---|---|
| **Multi-currency** | Header selector: INR, USD, CAD, GBP, AUD, EUR, JPY, SGD. Persist choice; re-render all prices; default by geo-IP. |
| **Free shipping** | Free in India; free worldwide above ₹25,000. Surface in the announcement bar and the Shipping tab. |
| **DDP** | International shipments duty-paid. This reassurance appears in the announcement bar, the PDP shipping tab, and the newsletter popup — it is a known conversion blocker for the category. |
| **Pre-order** | Products can be `Pre-Order`; badge on card, and the PDP messaging shifts from stock count to lead-time. |
| **Sold out / rewoven** | No hard "Sold Out" dead end — an email capture offers notification when the piece is rewoven. Rebuild this; it is on-brand and commercially load-bearing. |
| **Wishlist** | Persistent, account-linked. Heart on cards + header entry point. |
| **Gift cards** | Sold as a collection. |
| **Appointments** | Store visits booked via Calendly, separate links per store. |
| **Accounts** | Login/register, order history, addresses, wishlist. |

---

## 8. Responsive rules

| Element | < 768px | 768–1023px | ≥ 1024px |
|---|---|---|---|
| Header | 56px, hamburger + centred mark | 64px, hamburger | 72–96px, full nav |
| Navigation | Full-height drawer, accordions | Drawer | Mega-menu panels |
| Hero | 75vh, portrait art-direction, swipe | 70vh | 80vh, crossfade autoplay |
| Product grid | 2 cols, 12px gap | 2 cols, 16px gap | 3 → 4 cols, 24px gap |
| PLP filters | Drawer | Drawer | Sticky sidebar 220px |
| PDP | Stacked; swipe gallery | Stacked; wider gallery | 58/42 split, sticky details |
| PDP tabs | Accordion | Accordion | Tab bar |
| Section padding | 64px | 80px | 104–140px |
| Display h2 | 30px | 38px | 48px |
| Body | 15px | 15px | 16px |
| Footer | Stacked accordions | 2 cols | 3–4 cols |

Touch targets ≥ 44×44px throughout. Test at 320px width — the wide letterspacing on nav labels is the first thing to break.

---

## 9. Accessibility & quality bar

- Contrast: `--c-ink-body` on `--c-bg` ≥ 4.5:1; text over imagery always sits on a scrim. Verify each hero.
- All interactive elements keyboard-reachable in logical order; visible square focus ring.
- Overlays: focus trap, `Esc` to close, focus restored on close, `aria-modal="true"`.
- Carousels: `aria-live="polite"` region announcing slide changes; pause control available.
- Every product image needs a descriptive `alt` (currently the site repeats the product title — you can do better: describe colour, weave, motif).
- Respect `prefers-reduced-motion`.
- Semantic landmarks: `header`, `nav`, `main`, `footer`, `aside` for filters.
- Skip-to-content link as the first tab stop.

**Performance budget:** LCP < 2.5s · CLS < 0.1 · INP < 200ms · JS < 200KB gzipped on the homepage. Serve AVIF/WebP with `srcset` at the observed CDN widths. Preload the display serif's regular weight only; `font-display: swap`.

---

## 10. Component build order

Build bottom-up. Each item is independently testable.

**Tier 1 — primitives**
1. Design tokens (CSS custom properties or Tailwind theme extension)
2. Typography scale + fluid clamps
3. Container / grid utilities
4. Button (4 variants) · Link-CTA with animated underline
5. Input (underline) · Checkbox · Select · Qty stepper
6. Responsive `<picture>` image with art-direction and CDN `srcset`
7. Accordion · Tabs · Modal shell · Drawer shell (focus trap, scroll lock)

**Tier 2 — composites**
8. Announcement bar
9. Header (scroll-condense states) + Mega-menu panel + Mobile nav drawer
10. Product card
11. Search overlay · Cart drawer · Filter drawer · ~~Quick View modal~~ *(dropped — §12 item 7)* · Newsletter popup
12. Footer + newsletter form

**Tier 3 — sections**
13. Hero carousel · Statement band · Triptych · Video band · Category split · Editorial split · Tile row · Dual campaign · Poetry band · Stores band · Here-to-Help

**Tier 4 — templates**
14. Homepage (section registry) · PLP (+ faceting) · PDP · Cart · Editorial · Search results · Blog index + article · Policy · 404

**Tier 5 — polish**
15. Scroll reveals · Motion audit · Reduced-motion pass · Accessibility audit · Lighthouse pass · Cross-browser (Safari image rendering, iOS drawer scroll-lock)

---

## 11. Fidelity checklist

Score yourself. Each ✓ is worth roughly the weight shown; **90% is the target floor.**

| # | Criterion | Weight |
|---|---|---|
| 1 | Centred wordmark, split utilities, three-row → one-row scroll condense | 5 |
| 2 | Full-width mega-menu panels with correct columns + image tiles per trigger | 8 |
| 3 | All five taxonomies present in navigation (type, weave, fabric, campaign, occasion) | 8 |
| 4 | Two-family type system with correct weights and wide uppercase tracking | 10 |
| 5 | Near-monochrome palette; gold used sparingly; no pure black | 5 |
| 6 | Zero border-radius, zero box-shadow anywhere | 4 |
| 7 | Section padding at 104–140px desktop; prose capped and centred | 6 |
| 8 | Product card: **2:3** *(corrected)*, hover crossfade, wishlist, ~~Quick View~~ *(dropped)*, no chrome | 7 |
| 9 | 4-col desktop grid → 2-col mobile (not 1-col) | 3 |
| 10 | PLP path-based facet URLs + SEO intro paragraph + 6 facet groups | 6 |
| 11 | PDP two-column with sticky details, vertical thumb rail, zoom | 7 |
| 12 | PDP attribute list with italic labels + irregularity note + rewoven capture | 6 |
| 13 | PDP four-tab block incl. statutory "Other" panel | 3 |
| 14 | Hero: art-directed desktop/mobile pair, 1200ms crossfade, 6s autoplay | 6 |
| 15 | Editorial CTA with animated left→right underline | 4 |
| 16 | Full homepage section stack in the correct order (§1–§11) | 6 |
| 17 | Cart drawer + search overlay + filter drawer with focus trap | 4 |
| 18 | Footer four-region layout incl. italic support hours | 3 |
| 19 | Multi-currency selector with 8 currencies, persisted | 2 |
| 20 | Editorial template rendering ≥ 3 real long-form pages | 6 |
| 21 | Reduced-motion + keyboard + contrast pass | 3 |
| 22 | LCP < 2.5s, CLS < 0.1 | 3 |
| | **Total** | **115** |

Divide your score by 115. Anything below 0.90 — look first at items 2, 3, 4, and 20; that combination is where most rebuilds lose the brand.

---

## 12. Open items — resolved

**Status: closed, 5 August 2026.** Live browser session run. Seven of eight answered; the eighth is moot.

| # | Item | Answer |
|---|---|---|
| 1 | Exact font families | **`Cardo, serif`** (display, and nav) + **`"Open Sans", sans-serif`** (body). See §3.0. **Reference only** — do not implement. |
| 2 | Exact hex values | Ink **`#533e2d`** (warm brown, not near-black), background **`#ffffff`**. See §3.0. **Reference only.** |
| 3 | Header scroll threshold and condensed height | `position: fixed` engages after the header leaves the viewport (below 612px; exact trigger not isolated — the handler ignores programmatic scroll). Height goes **65px → 78px**: it grows on stick, it does not condense. Transition `background-color .3s linear, height .2s linear`. |
| 4 | Hero autoplay interval / loop | Flickity (`jsSlideshowClassic`, `gallery-cell`), **9 slide indicators**, `overlaid-header-option` on the section. **No slide advance observed across 13 s** — autoplay is either disabled, longer than 13 s, or paused when the tab is not focused. |
| 5 | PLP pagination — load more or infinite scroll? | **Neither. Numbered pagination.** Controls read `1 · 2 · 3 … 20 · Next`. Sarees collection is 20 pages at ~48 products each. |
| 6 | Mega menu — hover or click? | **Opens on hover.** Layout is three link columns (New Arrivals / Clothing / Featured) plus one large campaign image tile at the right. |
| 7 | Quick View contents | ~~**No Quick View exists.**~~ **RETRACTED 10 Sep 2026 — this finding was wrong.** Quick View is there, on the product cards, revealed **on hover**; an automated pass that never hovered could not see it. See `design-addendum.md` §A5.2b. |
| 8 | Mobile grid gutter at 375px | **Not verified** — window resize did not take effect in the automation session. Also **moot**: under the own-brand target the grid is ours, and `build.md` §2.5 sets breakpoints at 768 / 1024 / 1440. |

### What this changes

**Item 5 is the one that matters for the build.** Numbered pagination on a 971-product collection is a poor experience and a poor discovery surface — it also means a shopper cannot land deep into a collection from search without paging. `build.md` Sprint 3 already specifies Algolia-backed faceting; pair it with infinite scroll or a Load More that pushes state to the URL. Do not copy the numbered pager.

**~~Item 7 removes a component.~~ Retracted — see §A5.2b.** Quick View exists and is matched.

**Item 6 confirms hover.** Keep hover, but the keyboard-navigable requirement in `build.md` §6 stands — hover-only is an accessibility failure and the category does not solve it for you.

**Items 1–2 are now explicitly reference-only** and are recorded in §3.0 rather than acted on.

---

## 13. Next document

`build.md` — stack decision (Next.js + Tailwind vs. custom Shopify Liquid theme vs. static), data model for the five-taxonomy catalogue, repository structure, and a sprint-by-sprint plan mapped to §10.

---

*Prepared 5 August 2026; §3 and §12 verified against a live browser session the same day, with corrections marked inline.*

*This document records observations of a competitor for structural analysis. Under the agreed "same architecture, own brand" target, its token values, copy and imagery references are **evidence, not specification** — see `build.md` §2.5 and the Originality acceptance criteria in `build.md` §6. No reference imagery or copy may reach the build.*
