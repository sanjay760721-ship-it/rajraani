# Redesign brief: from a copy of tilfi.com to Rajraani's own design

*Started 27 September 2026. Owner's instruction: **every aspect of the design changes**,
so the site no longer looks like a copy, and the result must be **better than tilfi.com**,
without losing any functionality or the aesthetic of Banaras.*

---

## 1. The rule

**Change how everything looks. Never change what anything is or does.**

- Pages, blocks, menu, footer, products, filters, search, cart, checkout, discounts,
  wishlist, the admin and every URL keep working exactly as now.
- Content stays in the database and the admin edits it unchanged. A new homepage order
  is an admin rearrangement, not code.
- New visual options are added with defaults, so existing content never breaks.
- Section types, the data model and the admin are not touched unless a design genuinely
  cannot be expressed otherwise, and then only additively.

---

## 2. Everything that changes: the Tilfi fingerprint, and what replaces it

Each row is something a visitor would recognise from tilfi.com. **All of them go.** The
"Replaced by" column is filled in from the chosen direction (§6) at the design-system
stage; the principle is fixed now.

| # | Aspect | Tilfi fingerprint in the site today | Replaced by (principle) |
|---|---|---|---|
| 1 | **Typefaces** | Cardo + Open Sans at their measured sizes | A new pairing chosen for Rajraani: classical capitals echoing the logo, a book face for stories, a clean shopping face |
| 2 | **Colour** | Their ink browns set to the reference's exact values (10 Sep) | A palette taken from the Rajraani logo and Banaras itself |
| 3 | **Header** | Centred wordmark, three menu items each side, 64px utility bar with icons over captions | A different structure entirely, e.g. the lotus mark and wordmark at left, one menu row, utilities as a compact cluster |
| 4 | **Mega menus** | Their template: 1200px white box, 200px columns, 260×390 tiles on a dark scrim | A new menu pattern, e.g. a full-width panel led by one large editorial story |
| 5 | **Homepage structure** | Their band sequence (slideshow → statement → triptych → film → split → tiles → campaigns → stores) | A new narrative order and new block designs (the order is admin data) |
| 6 | **Spacing and rhythm** | Gaps measured on their pages at 1905px (`padTop`/`padBottom`, `section-pad-*`) | Our own spacing scale and vertical rhythm; every "measured against the reference" value retired |
| 7 | **Slideshows** | Their hero carousel look: caption placement, scrims, arrows, dots | New slide composition, captions and controls, with new motion |
| 8 | **Photo treatment** | Plain rectangles, 110% hover zoom | Our own framing (e.g. arch or pallu-border frames), and a new hover behaviour |
| 9 | **Collection page** | Their grid, card and filter-drawer layout | New product card, grid rhythm and filter presentation (the filter *behaviour* stays) |
| 10 | **Product page** | Their gallery and information column anatomy | A new layout, e.g. a "story ledger" of weave, loom, weeks and weaver beside the gallery |
| 11 | **Cart and checkout** | Drawer styling, trust badges | New visual design (the steps and server checks stay) |
| 12 | **Footer** | Grey band, three columns, copyright under it | A new footer composition |
| 13 | **Size chart** | Their measurements and table layout (our drawings) | New presentation; measurements re-checked against Rajraani's own tailoring |
| 14 | **Buttons, links, forms** | Their button proportions and uppercase letter-spacing | A new component set |
| 15 | **Icons** | Generic line icons | One consistent set, with Banarasi ornament where it helps (lotus, booti) |
| 16 | **Ornament** | None | Drawn from the logo: gold dividers, the lotus, the drape, zari borders, faint booti/jaal texture |
| 17 | **Motion** | Hover zoom, basic fades | Signature moments (lotus unfolding, gold thread drawing, drape falling), smooth scrolling, with reduced motion respected |
| 18 | **Announcement strip, utility bar** | Their layout and scale | Redesigned to the new header |
| 19 | **Mobile patterns** | Their breakpoints and stacked layouts | Designed phone-first with our own patterns |
| 20 | **Empty, loading and error states** | Unstyled | Designed, on-brand states |

**Checked, not guessed:** the originality gate is extended so values commented as
"measured against the reference" fail the build once replaced. Before and after
screenshots are compared side by side with tilfi.com.

---

## 3. "Better than tilfi.com": measurable targets

| Area | tilfi.com (measured in `docs/research/`) | Rajraani target |
|---|---|---|
| Speed | JPEG/PNG only; `srcset` claims 5000w on 1600px masters; 111 scripts on a product page | AVIF/WebP, honest `srcset`; a script budget; LCP under 2.5s on 4G; CLS under 0.1 |
| Accessibility | 0 of 8 product images had alt text; no skip link | WCAG 2.2 AA throughout; alt text required; keyboard and screen-reader journeys pass |
| Shopping | Radio-button filters with a full page reload; Add to cart 1.3 screens below the fold | Multi-select filters with counts (already built); Add to cart visible from the first screen, with a sticky buy bar |
| Trust | No social proof | Provenance: weaver, loom, weeks, workshop, shown with pride |
| Photography | 1600px masters | 3000px masters with real zoom (needs the shoot) |
| Mobile | 798px breakpoint | Phone-first at 375 / 768 / 1024 / 1440 |
| Identity | A heritage-brand look shared by many sites | Unmistakably Rajraani and Banaras: logo-derived palette, ornament, motion |

---

## 4. What must keep working: the regression list

Before any visual change, each of these is recorded (screenshots plus scripted journeys
with Playwright), then re-proven after every phase.

- **Navigation:** every menu item and dropdown link, the phone menu, the footer links, and
  every URL (crawl: 0 broken links today across 60+ pages).
- **Homepage and all 20 pages:** every block renders; every photo is a link.
- **Collections:** filters (multi-select, counts, URL state), sort, and the product grid.
- **Product page:** gallery and zoom, stock and sold-out states, add to cart, wishlist, related pieces.
- **Search:** grouped results.
- **Cart and checkout:** quantities, the discount code (check and apply), customer
  details, order creation, and the confirmation page.
- **Newsletter:** footer and pop-up sign-ups are saved.
- **Contact form:** messages are saved.
- **✏️ Edit mode on the site:** words and photos are clickable for a signed-in admin.
- **Admin:** every screen, the preview frames, Change text finding every text, and Put back.
- **Accessibility:** focus rings, skip link, heading order (`lint:headings`), and contrast
  pairs (`tokens/contrast.test.ts`, updated to the new palette).
- `npm run verify` stays green.

---

## 5. Phases

| Phase | Output | Days |
|---|---|---|
| 0. Brief | This document, plus Impeccable's `PRODUCT.md` / `DESIGN.md` once §6 is answered | ½ |
| 1. Safety net | Baseline screenshots of every page at phone and computer widths; scripted journeys for §4 | 1 |
| 2. Design system and mockups | Tokens (colour, type, spacing, motion), ornaments from the logo; **mockups of home, collection, product, menu and cart for approval before code** | 2 |
| 3. Site frame | Announcement, header, menu, footer, cart drawer | 2 |
| 4. Blocks | All 25 section designs; new homepage order in the admin | 3 |
| 5. Shop pages | Collection, filters, product, search, cart, checkout visuals, wishlist | 2 |
| 6. Motion | Signature moments, smooth scrolling, reduced motion | 1–2 |
| 7. Proof | Regression screenshots and journeys, accessibility, speed, originality gate, side-by-side against tilfi.com | 1–2 |
| | **Total** | **≈ 12–15** |

**Tools, and what each is for:**
- Impeccable leads the design system and critique.
- `redesign-existing-projects` sets the process.
- `high-end-visual-design`, `design-taste-frontend` and `minimalist-ui` calibrate the look.
- Emil Kowalski's skills cover motion and polish.
- Anime.js, GSAP, Lenis and Framer Motion implement the motion.
- React Bits, Vengence UI and Skiper UI supply component ideas, restyled and never used as-is.
- Playwright handles the safety net.
- Figma is used sparingly (the Starter plan's View seat is rate-limited).

---

## 6. Open decisions (owner)

1. **Direction:** Royal Ivory (recommended; ivory, antique gold and sindoor red from the
   logo), Night Loom (dark and dramatic), Ghat Light (airy and contemporary), or another.
2. **Main customer:** brides and families, collectors, or everyday luxury.
3. **3–5 admired websites**, from any category.
4. **Photography:** is a shoot planned, and when? Without one, the design is built around
   strong placeholders, but real photos decide most of the final beauty.
