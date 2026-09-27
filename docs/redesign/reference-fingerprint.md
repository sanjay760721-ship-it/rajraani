# The tilfi.com fingerprint: what the new design must not look like

*Scanned 27 September 2026 in a 1440×900 browser window: the homepage,
/collections/sarees and one product page. **This records measurements only.** None of
their text, images or code was taken. It is the avoid list for the redesign
([redesign-brief.md](redesign-brief.md) §2).*

**How to check progress:** `npm run check:redesign` (in `rajraani/`) counts what is left
in our code. On 27 Sep it counted **67 lines across 7 fingerprints**. Layout fingerprints
(the homepage order, the product page anatomy) can't be found by searching the code, so
they are checked in phase 7 with side-by-side screenshots.

---

## 1. Design system

| Fingerprint | tilfi.com (measured) | Ours today | Verdict |
|---|---|---|---|
| Display face | Cardo 400; headings 25 / 30 / 35px, never uppercase | Cardo | **Copy**: replace |
| UI face | Open Sans; body 13 / 14 / 15px | Open Sans | **Copy**: replace |
| Text ink | `#533E2D` (68 elements) | `--color-ink-body: #533e2d` | **Exact copy**: replace |
| Gold band | `#D1AC67` | close gold values | Replace with a logo-derived gold |
| Top bar | blush `#FAF0F0` | similar | Replace |
| Announcement | brown `#533E2D`, cream text `#FBE9C4` | same scheme | Replace |
| Buttons | Cardo 14–17.5px, 1px tracking, square, ink fill or 81% white | same proportions, square | Replace the component set |
| Corners | radius 0 everywhere | radius 0, **enforced by our own originality gate** ("Square corners, no exceptions") | The gate rule came from copying them. Loosen it when the new system is chosen (e.g. arch frames) |

## 2. Header and homepage

**Header stack:** announcement 55px → a 67px top bar with a tagline on the left → a 65px
centred wordmark with the menu split three items each side. **Ours: the same stack.**

**Tagline:** "Made in Banaras. Made by Tilfi." **Ours:** "Made in Banaras. Made by Rajraani."
(`src/lib/brand.ts:22`). **The same sentence with the name swapped.** Rewrite it.

**Announcement:** "Free shipping in India | Free worldwide shipping above… | Rest assured…".
**Ours: the same three clauses** (`src/lib/brand.ts:59-65`). Rewrite it, and also
check that the offer is true for Rajraani (does it ship worldwide?).

**Homepage order**, top to bottom:

| # | tilfi.com | Height | Ours |
|---|---|---|---|
| 1 | Full-width hero slideshow, 3 slides | 713 | heroCarousel |
| 2 | Short centred quote | 139 | brandStatement |
| 3 | 3 images in a row | 522 | collectionTriptych |
| 4 | Short rich text | 205 | (same) |
| 5 | Full-width film | 802 | videoBand |
| 6 | 2 large collection tiles | 886 | categorySplit |
| 7 | Women / men slideshow | 746 | (same) |
| 8 | 4 tiles with captions | 439 | tileRow |
| 9 | 2-slide campaign slideshow | 877 | editorialSlideshow |
| 10 | Short centred heading | 139 | poetryBand |
| 11 | "VISIT OUR STORES" slideshow, heading over the photo | 731 | storesSlideshow (the same heading) |
| 12 | Footer "Here to Help" + "Useful Information", Cardo 18px | 408 | hereToHelp + footer |

**Ours follows the same order, block for block.** The order is admin data, so the fix is
a new order plus new block designs, not only new colours.

## 3. Collection page

| | tilfi.com | Ours |
|---|---|---|
| Layout | 280px filter column on the left, grid on the right | 236px column + grid (`collections/[handle]/page.tsx:112`) |
| Grid | **2 per row**, 420px cards, 20px gap | 2 per row |
| Image | 2:3 portrait, plain rectangle | 2:3, plain |
| Card text | name and price centred below, Open Sans 14px ink | the same |
| Filters | Colour / Fabric lists, "Featured" sort | Colour / Fabric / Weave, with multi-select and counts (**ours is already better**) |

## 4. Product page

| | tilfi.com | Ours |
|---|---|---|
| Layout | gallery left (580×870 portrait images in a sideways strip), info right, 580 + 580 in a 1160 container | 2 equal columns, commented "measured 580/580 in a 1160 container" |
| Info order | title (Cardo 25px) → SKU → price → "MRP inc. of taxes" → mood word → Colour / Fabric / Technique → brand promise → note → "notify me" email → stock count → qty → **Add to cart** → "Pairs well with" | title → SKU → price → "MRP inclusive of taxes" → story → note → buy block → related pieces: **the same spine** |
| Add to cart | ink fill, white Cardo 14px, 107×44, square, at **y = 1104px: below the first screen** | similar |

"MRP inclusive of taxes" is a legal requirement in India, so it stays; only its
presentation changes.

## 5. Motion and states

- Images zoom on hover; slideshows fade; nothing else moves.
- Empty and loading states are not designed.

---

## 6. Rules for the new design (Rajraani must…)

1. **Type:** use neither Cardo nor Open Sans, nor a near-twin (Cormorant, EB Garamond
   paired with a humanist sans). Classical capitals echoing the logo are the lead.
2. **Colour:** use none of the four measured colours, and no brown as body ink. Derive
   the palette from the logo (ivory parchment, antique gold, sindoor red) and re-test
   the contrast pairs.
3. **Header:** no split-centred menu, and no tagline top bar above the header. A
   different structure (brief §2 row 3).
4. **Homepage:** a new narrative order. No quote → triptych → film run, and no stores
   slideshow with a heading laid over it. At least half the blocks get new designs,
   not restyles.
5. **Collection page:** not "fixed left column + 2-up grid". For example, filters as a
   top bar or a drawer, 3-up on computers with occasional wide editorial cards, and a
   new card with the weave and the loom time.
6. **Product page:** Add to cart visible on the first screen at 1440×900 and 375×812,
   plus a sticky buy bar. The provenance ledger (weaver, loom, weeks) replaces the
   "promise / note" stack.
7. **Words:** new tagline and announcement, written for Rajraani, no "Made in … Made by …"
   construction, no "Rest assured".
8. **Shape:** decide on corners and frames deliberately (e.g. an arch for photos), then
   update the originality gate's radius rule to match.
9. **Values:** no number in the new design comes from their computed styles. Every
   "measured on the reference" comment goes when its value is replaced.
10. **Proof:** phase 7 puts screenshots of both sites side by side (home, collection,
    product, menu, cart, footer, phone). Anyone should be able to tell them apart at
    a glance, with the logos covered.
