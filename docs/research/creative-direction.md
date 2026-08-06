# Creative Direction — Imagery and Film

**Companion to `photography-brief.md`. Read that one first.**

| Document | Covers |
|---|---|
| `photography-brief.md` | **Catalogue stills.** The six-frame template, ratios, lighting, colour management, throughput, budget, acceptance criteria. The production spec. |
| **This document** | **The look, and the film.** What "premium" means in decisions a studio can act on, campaign imagery, and video — which the other brief does not cover at all. |

The split matters commercially. Catalogue photography is a **repeatable unit cost per
SKU** and never stops. Campaign and film work is a **fixed cost per season**, shot two
or three times a year. Quote them separately or the numbers become meaningless.

---

## 1. The problem with "premium"

The starting direction was: *stylish, premium-looking models in saree and suit, giving
the vibe.*

Every studio agrees with that sentence and every studio delivers something different
from it, because it contains no decision. "Premium" is the output, not the input.

What follows converts it into instructions that can be followed, argued with, and
checked on delivery.

---

## 2. The look, as decisions

### 2.1 Restraint over styling

The single most reliable premium signal in this category is **subtraction**. The
research is consistent on this: the product is the interface, chrome recedes, nothing
competes with the cloth.

| Do | Don't |
|---|---|
| One model, plain ground, generous space | Props, furniture, styled interiors |
| Still, composed, upright | Laughing, walking, mid-gesture |
| Daylight-quality, soft, directional | Coloured gels, hard fashion lighting |
| Jewellery minimal or absent | Full bridal jewellery on a catalogue frame |
| One face across a collection | A different model per piece |

A saree at ₹1,48,000 does not need help looking expensive. It needs to be **seen** —
weave, fall, the way zari catches at an angle. Anything added to the frame is
something taken away from the cloth.

### 2.2 The expression question

**No smiling in catalogue frames.** Composed, level, often looking away or down.

This is not moodiness for its own sake. A smiling model sells the model; a neutral one
sells the garment. It is also the difference the category's buyers read instinctively
between a boutique and a marketplace listing.

Campaign work can be warmer. The catalogue should not be.

### 2.3 Colour of light

Warm-neutral, never cool. The design tokens are built on a warm ink for the same
reason — this category reads cold as cheap. Whatever the studio's usual white balance
habit, it should be agreed at the test shoot and then locked.

`photography-brief.md` §6 is the binding section here, and it is not optional:
saturated bridal reds clip out of sRGB gamut and are the highest-value stock in the
catalogue. A red that photographs orange is a return, not a preference.

---

## 3. Casting

`photography-brief.md` §8 covers the commercial terms — one model per collection,
perpetual worldwide buyout, hair and makeup continuity. Those are non-negotiable and
are not repeated here.

What that section does not say, and should:

- **Look for stillness, not glamour.** The brief is closer to portraiture than fashion.
  Ask for a portfolio of *quiet* work; anyone can supply energetic.
- **Height and proportion matter more than face** for saree work — the drape needs
  vertical room, and a 5'7"+ frame carries 5.5 metres of cloth without bunching.
- **Hands are in more frames than you expect** — pallu held, border turned. Check them.
- **Book the same model for the film shoot.** A different face in the campaign video
  from the catalogue grid breaks the thing you paid for.

---

## 4. Suits — an open decision, not a spec

The direction mentioned **suits**. Two problems to resolve before anyone shoots one.

**Which garment?** "Suit" in this market usually means a women's three-piece — kurta,
bottom, dupatta. It can also mean menswear tailoring. These are different products,
different shoots, different customers.

**The catalogue cannot currently hold one.** The controlled vocabulary
(`rajraani/taxonomy/facets.json`) has: saree, dupatta, lehenga, stole, blouse piece,
fabric by the metre. **There is no suit.** Adding one means a new garment type — and
more importantly a **different shot template**, because a three-piece needs the set
shown together plus each piece separately. The six-frame saree template does not fit.

> **Decision needed before commissioning:** are suits in the launch range? If yes,
> the taxonomy and the shot template both need extending first. Cheap now; expensive
> once a few hundred frames exist to the wrong spec.

---

## 5. Campaign imagery — where the "vibe" actually lives

Distinct from catalogue. Two or three times a year, tied to a collection.

Per campaign, budget for:

| Shot | Ratio | Use |
|---|---|---|
| Hero, desktop | wide / landscape | Homepage and story page hero |
| Hero, mobile | portrait, **recomposed** | The same slot on a phone |
| 3 × supporting stills | 1:1 | Story page galleries |
| 1 × environmental | either | Context — a loom, a doorway, a street |

**The desktop and mobile heroes are separate photographs, not a crop.** The subject is
re-placed for the vertical frame. The site enforces this — the content model will not
accept a banner with only one crop — because a missing mobile crop is invisible to
whoever is authoring on a desktop and obvious to the customer.

Campaign frames may move. Wind, walking, a turn. This is the only place the catalogue's
stillness rule is lifted, which is precisely what makes it read as a campaign.

---

## 6. Film — the gap in the current brief

`photography-brief.md` does not cover video at all. It should, because **film does the
one thing stills cannot: show how the cloth moves.** For a handwoven saree, drape and
weight are most of the product, and a still cannot carry them.

This is a second commission. It must not delay the catalogue shoot.

### 6.1 Three kinds, in priority order

**1. Drape motion — the highest value, and the cheapest**

- 6–10 seconds, model turning slowly or the pallu falling
- Locked-off camera, no camera movement — the *cloth* moves, not the frame
- Silent, looping, no cuts
- One per hero piece, not per SKU
- **This is the shot that sells a saree online.** Weight, fall and recovery are
  invisible in a still and unmistakable in two seconds of motion.

**2. Detail macro — the texture proof**

- 4–8 seconds, extreme close on zari, selvedge, a motif
- Light raking across the surface, slight movement so the metal catches
- No model
- This is the answer to "I can't touch it." It is also the cheapest video to shoot —
  a table, a light and a slider.

**3. Campaign film — the mood piece**

- 30–60 seconds, once or twice a year
- Location, model, edit, sound
- The most expensive by a wide margin and the least commercially load-bearing.
  **Commission it last.** A brand with no drape videos and a beautiful campaign film
  has spent its money in the wrong order.

### 6.2 Technical requirements

| | |
|---|---|
| Capture | 4K minimum, 25 or 50fps. 50fps if any slow motion is wanted. |
| Delivery | H.264 MP4 **and** WebM. Plus a still poster frame per clip — required, not optional. |
| Product video ratio | Match the stills: **2:3 portrait** for on-model, 1:1 for detail |
| Social ratio | 9:16, framed at shoot time — not cropped afterwards |
| Length | Drape 6–10s · detail 4–8s · campaign 30–60s |
| Audio | **Must work silent.** It will autoplay muted. Sound is a bonus, never load-bearing. |
| File size | Under 3 MB per product clip after compression |
| Colour | Same managed pipeline as stills. A video that does not match its own product page is worse than no video. |

That last size line is a hard constraint, not a preference. Images are already **72% of
page weight** in this category. Video that is not budgeted will make the site slow, and
slow reads as cheap regardless of how good the film is.

### 6.3 What must not happen

- No autoplay with sound, ever
- No video as the largest element on first load — it competes with the hero image for
  the metric that decides whether the page feels fast
- No text burned into the frame. It cannot be translated, edited, or made accessible.
- No video where a still would do. Motion is for movement.

---

## 7. What to send a studio

Send **both** documents, and ask for the quote broken out:

1. **Per-SKU catalogue stills** — six frames, the template in `photography-brief.md` §3
2. **Per-SKU drape video** — 6–10s, priced separately, likely on selected pieces only
3. **Per-campaign** — heroes desktop and mobile, three supporting, one environmental
4. **Campaign film** — priced standalone so it can be cut without renegotiating

A studio quoting a single day rate for all four is quoting something they have not
thought about. The unit economics of catalogue work and the fixed cost of campaign work
are different problems, and the first one is the one that runs forever.

---

## 8. Sequence

```
1. Decide the suit question              ← blocks the shot template
2. Fill in SKU counts, send both briefs  ← 3–4 studios
3. Test shoot: 3 pieces, full pipeline   ← approve colour before volume
4. Catalogue stills in volume            ← the long pole
5. Drape + detail video on hero pieces   ← after stills are flowing
6. Campaign film                         ← last, and only if the budget survives
```

Steps 3 and 4 are on the critical path for launch. Steps 5 and 6 are not, and treating
them as though they are is the most common way this budget gets spent in the wrong
order.

---

## 9. Open decisions

| # | Decision | Blocks |
|---|---|---|
| 1 | **Suits in the launch range?** If yes: which kind, and extend the taxonomy and shot template | Commissioning anything |
| 2 | How many SKUs at launch | Every quote |
| 3 | Drape video on all pieces, or selected? | Video quote |
| 4 | Campaign film this season, or defer? | Budget |
| 5 | Same model for stills and film? *(Recommended: yes)* | Casting |

Decisions 1 and 2 are needed before a studio can quote anything at all.
