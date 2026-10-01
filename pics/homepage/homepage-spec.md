# Homepage — build specification

Measured from the live reference site on 22 August 2026 at **1280×720**, **1024×800**,
**768×900** and **375×812**. Every number below was read off computed styles and
bounding boxes, not estimated.

**How to use this document.** It specifies *structure* — geometry, grid, type
scale, image ratios, interaction, destinations, breakpoints. Every text slot is
described by its **role, length and register** rather than filled in (§9): the
words are the one layer that has to be ours, and they are the cheapest thing on
the page to get right.

Companion file: `homepage.txt` (the original walkthrough this expands on).

**Second sweep, 22 Aug.** §§11–17 are new: spacing model, full breakpoint matrix,
navigation mechanism, media config, motion, overlay layer, and an accessibility
audit that found two defects worth not copying.

---

## 1. Page skeleton

Three chrome bars, eleven content sections, one footer.

| # | Section | Desktop h | Mobile h | Inner width | Pad Y (t/b) |
|---|---|---:|---:|---:|---|
| — | Announcement bar | 55 | 55 | full bleed | 0 / 0 |
| — | Utility bar | 67 | — | full bleed | 0 / 0 |
| — | Header | 141 | 77 | 1265 | 0 / 0 |
| 1 | Hero slideshow | 450 | 563 | full bleed | 0 / 0 |
| 2 | Heading band | 139 | 205 | 1200 | 20 / 20 |
| 3 | Three-photo gallery | 521 | 1411 | 1200 | 20 / 0 |
| 4 | Rich-text band | 208 | 271 | 1183 | 10 / 20 |
| 5 | Video band | 720 | 220 | full bleed | 20 / 0 |
| 6 | Two-up category split | 799 | 956 | 1265 | 39 / 20 |
| 7 | Womens/mens slideshow | 581 | 689 | full bleed | 0 / 33 |
| 8 | Four-tile row | 391 | 1874 | 1265 | 0 / 0 |
| 9 | Campaign slideshow | 710 | 1000 | 1265 | 42 / 0 |
| 10 | Heading band (repeat) | 139 | 205 | 1200 | 20 / 20 |
| 11 | Stores slideshow | 468 | 581 | full bleed | 0 / 0 |
| — | Footer | 408 | 958 | 1200 | — |

**Total chrome above the fold: 263px desktop, 132px mobile.**

### The rhythm is the design

The sequence alternates deliberately: a band you *look at*, then a band you
*read*. Sections 1→2, 3→4, 9→10 are all image-then-text pairs. Never run two
image bands adjacent without a text beat between them — that alternation is the
single most copyable thing about this page and costs nothing to reproduce.

Header is **`position: static`** — it scrolls away. (Ours is sticky; a deliberate
divergence and an improvement, not a gap.)

---

## 2. Type scale

Two families only.

| Role | Family | Size | Weight | Transform | Tracking |
|---|---|---:|---:|---|---|
| Logo (h1) | Cardo | 25px | 400 | none | normal |
| Slide title (h2) | Cardo | 35px | 400 | none | normal |
| Rich-text head (h2) | Cardo | 30px | 400 | none | normal |
| Band heading (h2) | Cardo | 25px | 400 | none | normal |
| Campaign title (h2) | Cardo | 25px | 400 | none | normal |
| Body | Open Sans | 14px | 400 | none | normal |
| Utility bar | Cardo | 14px | 400 | **uppercase** | **1px** |

Display serif at **35 / 30 / 25**, body sans at **14**. Four sizes, whole scale.
Headings centred throughout; body centred in text bands, left in campaign blocks.

Primary ink: `rgb(83, 62, 45)`.

> **Do not adopt that ink value.** It is the reference site's most-used colour by
> a wide margin — 1,402 elements. Ours is `#3a2a2e`, chosen 42° away in hue for
> exactly this reason. Structure transfers; palette is identity.

---

## 3. Call-to-action styles

Three treatments — pick per section, do not unify.

| Where | Case | Size | Border | Padding (y/x) | Tracking |
|---|---|---:|---|---|---|
| Hero slide | Title Case | 17.5px | 1px solid box | 6 / 18 | 1px |
| Rich text | UPPERCASE | 16px | 1px underline | 0 / 0 | 1px |
| Womens/mens | Title Case | 14px | 1px solid box | 4 / 14 | 1px |
| Campaign | UPPERCASE | 16px | 1px underline | 0 / 0 | 1px |

Boxed CTAs sit over imagery; underlined CTAs sit under prose. That is the rule.

---

## 4. Image specification

| Section | Master | Ratio | Displayed | object-fit |
|---|---|---:|---|---|
| Hero slides | 1800×900 | 2.00 | 1265×633 | cover |
| Gallery (×3) | 2000×2639 | 0.76 | 380×501 | cover |
| Category split (×2) | 2000×2415 | 0.83 | 613×740 | cover |
| Womens/mens | 1800×900 + 2000×2000 | 2.00 / 1.00 | 1265×633 | cover |
| Four-tile row (×4) | 2000×2639 | 0.76 | 296×391 | **fill** |
| Campaign slides (×2) | 1800×1800 / 2000×2000 | 1.00 | 739×739 | cover |
| Mega-menu tiles | 400×600 / 900×1350 | 0.67 | — | cover |

**Two defects worth not copying:**

1. The four-tile row uses `object-fit: fill` on 0.76 masters in a 0.76 box — safe
   by coincidence, distorts the moment anyone swaps an asset. Use `cover`.
2. The mega-menu ships 400×600 tiles into slots that can render larger. One
   master size per slot.

**Standardise on:** `2:1` hero, `0.76` portrait editorial (≈19:25), `0.83`
category (≈5:6), `1:1` campaign, `0.67` menu tile (2:3).

---

## 5. Grid geometry

All grids are **flex with wrap**, not CSS grid.

| Section | Desktop cols | Child w | 1024 | 768 | 375 |
|---|---:|---:|---:|---:|---:|
| Gallery | 3 | 380 | 3 | **2** | 1 |
| Category split | 2 | 613 | 2 | **1** | 1 |
| Four-tile row | 4 | 296 | 4 | **2** | 1 |
| Campaign | 2 | 739 | 2 | 2 | 1 |

Full column counts survive down to 1024. **Everything collapses between 1024 and
768** — that is the only meaningful layout breakpoint on the page.

---

## 6. Carousel behaviour

Four carousels, **each configured differently** — the detail most likely to be missed.

| Section | Real slides | Dots | Arrows |
|---|---:|---:|---:|
| 1 · Hero | **5** | 0 | 4 |
| 7 · Womens/mens | 2 | 2 | 4 |
| 9 · Campaign | 4 | 2 | 0 |
| 11 · Stores | 2 | 0 | 0 |

- **Hero: arrows only, no dots** — five slides with no position indicator.
- **Campaign: dots only, no arrows.**
- **Stores: neither.**

Arrow counts read as 4 because prev/next are duplicated for mobile. Autoplay is
not declared in markup; treat timing as a decision to make. Suggested: 6s hero,
none elsewhere.

---

## 7. Destinations

Hero, in order:

| # | Slide | Destination |
|---|---|---|
| 1 | Featured collection | `/collections/<featured>` |
| 2 | Campaign story | `/pages/<campaign>` |
| 3 | Seasonal edit | `/collections/<seasonal>` |
| 4 | Gifting | `/collections/gifts` |
| 5 | Metalwork | `/pages/<art-collectibles>` |

Slides 2 and 5 go to **story pages**, 1/3/4 to **collections**. Intentional: a
campaign is a story that owns a collection, not a collection with a nice name.

| Section | Links to |
|---|---|
| 3 · Gallery (all three) | the featured collection |
| 4 · Rich text | the same featured collection |
| 6 · Category split | left → sarees, **right → suits** |
| 7 · Womens/mens | `/collections/womenswear`, `/collections/menswear` |
| 8 · Four tiles | bridal, gifting, zarkashi, art & collectibles |
| 9 · Campaign ×2 | two campaign story pages |
| 11 · Stores | booking URL per city |

Gallery and rich-text sharing one destination is the point — images sell it,
prose explains it.

---

## 8. Navigation taxonomy

Six mega-menus, ~90 destinations, three tiers. Most under-built area in our version.

| Menu | Groups | Items |
|---|---|---:|
| Shop | New Arrivals · Clothing · Featured | 26 |
| Collections | Weaves & Patterns · Fabrics · How to Style | 32 |
| Campaigns | Shop by Campaign · Featured Campaign | 27 |
| Craft | Handloom · Metal | 6 |
| About Us | — | 8 |
| Stories | Spirit of Creations · Stories | 12 |

Each panel carries **1–2 images** beside plain-text link columns; the images are
the only colour in the panel.

**Group headings to keep** (functional): New Arrivals, Clothing, Featured, Weaves
& Patterns, Fabrics, How to Style, Shop by Campaign, Handloom, Metal, About Us,
Stories.

**To rename** (theirs): every campaign name inside Shop by Campaign and Spirit of
Creations. Our replacements are already in `navigation.ts`.

---

## 9. Text slots — briefs, to write

Each row is a **brief**, not copy. Word counts measured from the reference so the
layout holds.

| # | Slot | Words | Register |
|---|---|---:|---|
| 1 | Hero slide title | 1–3 | The campaign's proper name |
| 1 | Hero slide body | 12–20 | One sentence. What the collection *is*, concretely |
| 2 | Heading band head | 6–8 | A claim about the house. Quotable, not boastful |
| 2 | Heading band body | 18–22 | Who makes it and how. Plain |
| 4 | Rich-text head | 2–3 | The featured collection's name |
| 4 | Rich-text body | 30–36 | Where it came from — a source, an idea, a technique |
| 5 | Video band head | 3–5 | Names the process |
| 5 | Video band body | 12–18 | A duration and a fact. Numbers land here |
| 6 | Category label ×2 | 1 | Garment noun |
| 7 | Womens/mens body | 5–7 | A fragment, not a sentence |
| 9 | Campaign title ×2 | 1–2 | Proper name |
| 9 | Campaign body ×2 | 25–35 | The idea behind the campaign |
| 10 | Heading band ×2 | 6–8 + 22–26 | The page's closing thought |
| 11 | Stores body | 15–20 | An invitation. Per city, not one line reused |

**House register**, from our own product narratives: concrete over evocative,
technique named plainly, ends on an observation rather than a flourish. Numbers
are good — a measured range does more than an adjective.

Two slots the reference gets wrong: the stores band prints **one identical
sentence under both cities**, and the four-tile row carries no copy beyond a label.

---

## 10. Footer

Four columns, 18 links, one email capture, inner width 1200.

| Column | Contents |
|---|---|
| 1 · Support | Email, phone, WhatsApp, support hours |
| 2 · Useful Information | Returns, delivery, privacy, terms |
| 3 · About | Story, stores ×2, press, FAQs, careers, size guide, gift cards, contact |
| 4 · Stay in touch | One-line invitation + email input |

Columns 2–3 headings are generic retail nomenclature and transfer fine. Contact
details are ours — theirs are a real business's real phone number.

---

# Second sweep

## 11. Spacing model

**Every section has `margin: 0` and a transparent background.** All fourteen
measured gaps between consecutive sections are exactly **0px**.

This is the single most important structural fact on the page, and it is easy to
get wrong by reflex:

- Vertical rhythm is **100% internal padding**. No section pushes its neighbour.
- No section paints a background, so the page ground shows through everywhere —
  there are no alternating bands, no tinted sections, no visual grouping by fill.
- Separation between sections is achieved **only** by the padding values in §1
  and by the imagery itself.

Consequence for our build: do not reach for `margin-block` or `space-y` between
sections, and do not add surface tints to differentiate them. Set padding on the
section, nothing else. Our `section-pad` utility is already the right shape.

Container padding-x is **0** at every measured width; horizontal inset comes from
the container's own max-width, not padding.

---

## 12. Breakpoint matrix

| Metric | 375 | 768 | 1024 | 1280 |
|---|---:|---:|---:|---:|
| Header height | 77 | 77 | **65** | **141** |
| Hero height | 563 | **1130** | 505 | 450 |
| Container width | ~355 | 696 | 940 | 1200 |
| Gallery columns | 1 | 2 | 3 | 3 |
| Category split cols | 1 | 1 | 2 | 2 |
| Four-tile columns | 1 | 2 | 4 | 4 |
| Horizontal overflow | none | none | none | none |

Three things to note:

1. **The header has three states, not two.** 141px at 1280 (centred logo with
   split nav above and below), 65px at 1024 (compact single row), 77px at and
   below 768 (mobile bar). The 1024 state is the one most likely to be missed.
2. **The hero is tallest at 768 (1130px)** — more than double its desktop height.
   The 2:1 master cannot fill a portrait-ish viewport, so the layout stacks
   image and text instead of overlaying them. Budget for that.
3. **No horizontal overflow at any width.** Whatever else is wrong with the page,
   this is done properly and is worth matching.

---

## 13. Navigation mechanism

**The mega-menus are a CSS checkbox-hack, not JavaScript.**

- Six hidden `<input type="checkbox">`, one per menu
- Triggered by `<label for="dropdown-shop">`, `dropdown-collections`,
  `dropdown-campaigns`, `dropdown-craft`, `dropdown-stories`, `dropdown-about-us`
- Panels are `display: none` until the checkbox is checked

Consequences that change how we build it:

- **Menus open on click, not hover.** Synthetic `mouseover`/`mouseenter` on the
  trigger does nothing; the panel state is bound to the checkbox.
- It works with JavaScript disabled.
- Keyboard behaviour comes free from the checkbox, but focus management does not —
  nothing moves focus into the opened panel or traps it.
- Only one panel can be open at a time only if the checkboxes are radio-like;
  these are independent checkboxes, so multiple can be open simultaneously.

If we implement with React state instead, match the **click-to-open** behaviour;
a hover menu at this link density is hostile on a trackpad.

---

## 14. Media configuration

The video band (§5):

| Attribute | Value |
|---|---|
| `autoplay` | true |
| `muted` | true |
| `loop` | true |
| `controls` | **true** |
| `playsinline` | true |
| `preload` | `metadata` |
| `poster` | **none** |
| Intrinsic size | 1920×1080 |

Two decisions to copy and one not to:

- **Copy** `muted` + `playsinline` + `autoplay` — the only combination that
  autoplays on iOS.
- **Copy** `preload="metadata"` — not `auto`. Directly relevant to us: our
  `loom.mp4` is 822 MB and currently has no preload hint.
- **Do not copy** visible `controls` on a decorative ambient loop, and **do** add
  a `poster`. Without one the band is blank until the first frame decodes.

---

## 15. Motion

Almost none, and that is a choice worth keeping.

- **399 links** carry `transition: color 0.3s ease-in-out` — the only transition
  applied at any scale on the page.
- No scroll-triggered reveals, no parallax, no entrance animation.
- Cart drawer transitions `opacity 0.3s ease-in`.

The page moves when you interact with it and not otherwise. Our build currently
has scroll-reveal animation; that is a divergence to make consciously rather than
by inheritance.

---

## 16. Overlay layer

| Overlay | Width | Position | Transition | z-index |
|---|---|---|---|---:|
| Cart drawer | 420px | absolute | `opacity 0.3s ease-in` | **70** |
| Search | overlay present | — | — | — |
| Quick-shop popup | — | `display: none` until invoked | — | auto |

The cart is a **420px drawer** that fades rather than slides — `transform` is
`none`, so there is no translate. A slide-in reads better and costs nothing;
ours already slides.

z-index 70 is the highest on the page; nothing competes with it.

---

## 17. Accessibility audit — two real defects

Measured, and both are reasons to diverge rather than copy.

### There is no `<h1>` on the homepage

Heading sequence is fifteen consecutive `H2`, then an `H4`, then an `H5`:

```
H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H2 H4 H5
```

No `h1` anywhere, and an `h2 → h4` skip near the footer. The logo is marked up as
`h1` on inner pages but not here.

Our build already enforces this properly: `lint-headings.mjs` fails the build on
a skipped level, and it currently passes across 22 prerendered pages. **Keep that
gate.** It is one of the few places we are unambiguously ahead.

### All 72 images have empty `alt` text

Every single image on the page — 72 of them, including all product photography,
all mega-menu tiles, all category art — carries `alt=""`. None missing, none
filled. Uniformly empty.

`alt=""` is correct for genuinely decorative images. It is not correct for
product photography, which is content. A screen-reader user gets nothing from
this page's imagery.

Our `ProductImage.alt` is a **required** field with a documented rule that it
describes the *frame* rather than repeating the title. That is the right model.
This finding is a reason to hold the line on it, not to relax it.

### Loading strategy

All 71 content images are `loading="auto"` — **no lazy loading anywhere**, on a
page with a 720px video band and ~5,000px of scroll. Every image is fetched on
load.

Ours should set `loading="lazy"` below the fold and `priority` on the hero only.

---

## 18. Build order

Against our current build, which already has 11 sections wired:

1. **Hero → 5 slides** with the destination mix in §7 (currently 6, wrong mix)
2. **Wire real photography** into §3 gallery, §6 split, §8 tiles
3. **Fix §6 right-hand tile → suits**
4. **Build the destination pages** the hero points at — 3 collections, 2 story
   pages — or the slides 404 on click
5. **Deepen the nav** toward §8's 90 destinations, click-to-open per §13
6. **Carousel configs per §6** — they are not interchangeable
7. **Video attributes per §14** — `preload="metadata"` and a poster on `loom.mp4`
8. **Write the §9 slots**

Items 1–4 make the page work. 5–8 are polish.

**Do not port:** the missing `h1` (§17), the empty alt text (§17), the eager
image loading (§17), `object-fit: fill` on tiles (§4), visible video controls
(§14), or the ink value (§2).

---

## 19. Measurement notes

- Viewports 1280×720, 1024×800, 768×900, 375×812 — all after full load and reload
- Heights from `getBoundingClientRect()`; type, colour and transitions from
  `getComputedStyle`
- Slide counts exclude carousel clones
- Column counts derived by grouping children on rounded `top` offset, not inferred
  from widths
- The reference runs Shopify sections; theme class names (`jsSlideshowClassic`,
  `gallery-with-text`, `collection-list`) map to our `heroCarousel`, `tileRow`,
  `categorySplit` — names differ, geometry does not

---

# Third sweep — band-by-band, 23 August

Measured while rebuilding each band, including from screenshots at 1920 where
the earlier passes only covered 1280 and below. Where these disagree with §§1–10,
these are the later reading.

## 20. Container width is the hidden variable

`--container-site` in our build is **1600px**; the reference's bands sit around
**1200**. Everything using `wrap-wide` inherits it, so bands read a third too
large even when their aspect ratio is correct.

This is worth internalising before measuring anything else: **ratio and scale are
separate bugs.** Setting `aspect-[380/501]` on the three-photo band fixed its
shape and left it oversized, because the tiles were still filling a 1600px
container. Two rounds went into that.

## 21. Three-photo band

| | |
|---|---:|
| Tile | 380 × 501 (0.76) |
| Gap | 20px |
| Measure | **1180px** — `380×3 + 20×2` |

## 22. Four-tile row — full bleed, not contained

Read at a 1920 viewport:

| | |
|---|---:|
| Tile | 456 × 603 (**0.757**) |
| Gaps | 20px |
| Side margins | ~10px |
| Total span | 1886 of 1920 — **98%** |
| Vertical padding | 32px above, 32px below |

**The tiles scale with the viewport.** There is no max-width; only the ratio is
fixed. Capping it at a measure is what makes this band read small.

**The labels are inside the photographs.** That is why this section contains no
text nodes at all on the reference. Do not draw the label over the top — it
prints twice. Use it as the link's accessible name instead.

## 23. Campaign band — split, not overlay

| | |
|---|---|
| Text panel | left **40.6%** (0 → 770 of 1896) |
| Image | right **59.4%**, flush to the edge |
| Title | Cardo 24px |
| Body | ~15px, centred in its panel |
| CTA | underlined, uppercase |
| Dots | 2, centred under the text |

Prose of this length cannot sit over a photograph without a scrim, and the scrim
is what dulls the image. The split avoids the trade entirely.

## 24. Footer typography

| | |
|---|---|
| Columns | 4 |
| Headings | Cardo **18px**, weight 400, **sentence case**, no tracking, `margin-bottom: 10px` |
| Links | Open Sans **13px**, line-height 19.5px (1.5) |
| Links total | 18 |
| Email capture | yes |

Not small uppercase labels — that was our error and it changes the whole feel of
the block.

**Do not copy their heading levels:** `h2`, `h4`, `h5` across four columns, which
skips levels. Our `lint-headings` gate rejects it, correctly.

## 25. Over-image type needs its own gold

Measured contrast for a button sitting on photography:

| Colour | On dark frame | On mid-tone |
|---|---:|---:|
| `--color-accent` `#7d5f2a` | 3.1:1 | **1.7:1** |
| `--color-accent-hover` `#ae7922` | 4.8:1 | **2.7:1** |
| **`#d9bb6c`** | **9.7:1** | **5.4:1** |

A slide cannot control what is behind it, so the mid-tone column is the one that
matters. Both palette golds fail it.

## 26. Scrims — the reference has none

Measured: no overlay, no filter, on any slideshow band. The photograph plays at
full brightness and the captions rely on the frames being art-directed for text.

Ours carry `from-black/70 via-black/30`. Removing them entirely was **too bright
for taste** and they were restored — recorded because the measurement stands.
Between the two extremes, `/50` is untried.

## 27. Traps found while building

Two utilities setting one property; the loser is dropped with no error:

- `hidden` vs `grid` — Tailwind emits `hidden` first, so `grid` wins and the
  hiding silently fails
- `gap-4` vs `gap-6` on one element
- `aspect-square` against 0.76 masters
- `text-center` on the paragraphs only, leaving heading and CTA ranged left

If scanning for these, **compare within a breakpoint**. Stripping prefixes turns
every legitimate `hidden md:flex` into a false positive.
