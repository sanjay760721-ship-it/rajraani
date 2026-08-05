# Facet taxonomy — review sheet

**Draft for sanju + a domain reviewer. 11 decisions need a yes/no before Sprint 3.**

The machine-readable source is `facets.json`. This file exists so the decisions can be
reviewed by someone who will never open the JSON. Run `npm run check:taxonomy` to
re-print the open list at any time.

**Why this is a draft and not a deliverable:** `pre-build-gaps.md` §1 measured 1,592 tags
on the reference catalogue, 44% used exactly once, with transliteration forks split
50/50. The report's conclusion was that no script resolves those forks — it needs a
weaver, a merchandiser, or a subject expert. Everything below is a proposal from the
measured data plus published Banarasi vocabulary. **Each item flagged ● is a place where
I made a call I am not qualified to make alone.**

Because the catalogue is greenfield, all of this is free to change *now* and expensive to
change later — canonical slugs become URLs (`/collections/sarees/kadhua+red`).

---

## The eight facets

| Facet | Values | Storage | Multi-select |
|---|---|---|---|
| Garment | 6 | metaobject | no |
| Weave | 9 | metaobject | yes |
| Fabric | 10 | metaobject | no |
| Zari | 5 | metafield list (fixed by `build.md` §2.1) | yes |
| Motif | 11 | metaobject | yes |
| Colour | 17 families | metaobject | no |
| Availability | 2 | derived from Shopify | no |
| Dispatch | 3 | `fulfilment_mode` metafield | no |

Price is deliberately absent — computed at query time per currency via Algolia numeric
faceting. Storing `over-40000` as a value breaks the moment a price changes or a shopper
switches to one of the other seven markets.

---

## The 11 decisions

### ● 1. `kadhua` or `kadwa`? — the one that matters most

Measured **exactly 50/50** on the reference catalogue: 16 tag variants each. There is no
frequency signal to break the tie.

**Proposed: `kadhua`**, because it transliterates the aspirated Devanagari form more
faithfully and is the spelling used in most published literature on Banarasi weaving.

This becomes a URL segment. Flipping it after launch means redirects and lost link
equity. **Worth one phone call to a weaver.**

### ● 2. `booti` and `boota` are kept as *separate concepts*

Not spelling variants — different sizes of the same idea (booti = small scattered motif,
boota = larger standalone motif). A naive normalisation script would merge them and
destroy a distinction merchandisers rely on.

**Confirm this distinction is real and worth two facet values rather than one.**

### ● 3. `boota` over `buta`

Measured 26 variants vs 2. Frequency is decisive here, unlike decision 1. Low risk.

### ● 4. `meenakari` over `mina`, and it sits under **Motif**

Measured 38 vs 1 — spelling is settled. The open question is placement: meenakari
describes *how a motif is coloured*, not the motif's shape, so it is arguably a technique.
**Placed under Motif because that is where a shopper looks for it.** Say so if you disagree.

### ● 5. `jangla` is a **Weave**, not a Motif

It reads as both. Modelled as a weave and deliberately not repeated under motif — a value
living in two facets makes counts double and shoppers stop trusting them.

### ● 6. `bootidar` is a **Weave** — borderline

Arguably a motif *layout*. Kept under weave because merchandisers describe pieces that
way. Easy to move now.

### ● 7. `tissue` — fabric or weave effect?

`tissue-silk` is held as a **Fabric**. But "tissue" also names the effect of metallic zari
carried in the weft. Confirm merchandisers will only ever mean the fabric.

### ● 8. `khaddi` ≠ `khadi`

`khaddi-georgette` here means handwoven-on-pit-loom georgette — **not** khadi hand-spun
cotton. Same transliteration, different material. If the label "Khaddi georgette" is
ambiguous to a shopper, change the *label* (free) rather than the canonical (a migration).

### ● 9. `koradi` as an alias of `kadiyal`

Listed tentatively. Confirm it is the same construction and not a separate regional
technique.

### ● 10. `jaali` deliberately **not** aliased to `jaal`

`jaal` = all-over lattice layout. `jaali` more often means pierced/openwork. Kept apart.
Confirm.

### ● 11. Shopper-facing label: "Paisley" or "Ambi"?

Canonical is `paisley` with `ambi`, `keri`, `aam`, `kalka` as aliases. Which word appears
in the filter sidebar is a **brand-voice call, not a data call** — it is yours, not a
weaver's. (The misspelling `paisely` exists in the reference data and is kept as an import
alias only.)

---

## Two declared ambiguities, resolved by rule rather than renaming

`gold` and `sona` are each claimed by two facets — **zari.gold** (the metallic thread) and
**colour.gold** (the shade). Both are correct, and a shopper reads them from the facet
group label.

Rather than rename either, the contract is: **alias resolution is facet-scoped, never
global.** An importer or search expander must always resolve a term *within a named
facet*. This is declared in `$meta.ambiguousTerms` and enforced by CI — an undeclared
cross-facet collision fails the build.

---

## Colour: 207 tags → 17 families

The reference catalogue had 207 colour-ish tags. Shoppers do not filter across 207
options; they filter by family and then read for shade.

So: 17 families as facet values, and the precise shade lives in the `spec_color`
metafield **as prose**. "Deep sindoori red shot with antique gold" is copy, not a filter.

This also means the colour vocabulary is the one facet a merchandiser can never expand —
which is the point.

---

## What happens after review

1. Decisions confirmed or flipped here
2. `facets.json` updated, `review: true` flags cleared
3. Values deployed as Shopify metaobjects (Sprint 1, `build.md` §2.2)
4. Free-text tag creation disabled for merchandisers — **this is the whole point**
5. Facet sidebar built against the vocabulary (Sprint 3)
