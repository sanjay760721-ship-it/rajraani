# Content model

The Sanity schemas for `build.md` §2.3 and §2.4. **No Sanity project exists
yet** — these are written so that creating one is configuration rather than
modelling.

Nothing here imports the `sanity` package. Sanity schema types are plain
objects; `defineType` is an identity function that exists for type inference, so
`lib/define.ts` provides a local equivalent. That keeps several hundred
megabytes of Studio dependencies out of the storefront while the Studio does not
exist.

```
lib/define.ts            local defineType/defineField + the slug pattern
schemas/
  index.ts               the schema array, and which documents are singletons
  objects/
    artPair.ts           desktop + mobile image pair, alt required on both
    blockContent.ts      Portable Text, deliberately without h1
    sections.ts          the 8 section types
  documents/
    globalSettings.ts    singleton — announcement bar, info tabs, support
    navigation.ts        singleton — mega menu panels, columns, tiles
    pages.ts             homepage, campaignStory, craftPage, blogPost,
                         productOverlay
  schema.test.ts         the CMS ↔ renderer contract
```

## Connecting a real Studio

1. Create a Sanity project, note the project ID and dataset.
2. Scaffold a Studio — ideally a sibling workspace, not inside this app.
3. Point its `schema.types` at `schemaTypes` from `schemas/index.ts`.
4. Swap the import in each schema file:
   ```diff
   -import { defineType, defineField } from "../../lib/define.ts";
   +import { defineType, defineField } from "sanity";
   ```
   The definitions themselves do not change.
5. Use `singletonTypes` in the Studio's structure config to pin one document
   each for `globalSettings`, `navigation` and `homepage`, and to hide their
   "create new" actions. Sanity has no built-in singleton.
6. Add `SANITY_PROJECT_ID` and `SANITY_DATASET` to `.env.local`, then write the
   read layer beside `src/lib/data/` — same repository seam as Shopify.

## Known mismatches with the storefront

One, deliberate, and it is the only place the two sides disagree:

**`richText.body` is Portable Text here; the storefront types it as
`paragraphs: string[]`.** Plain strings cannot carry a link, an emphasis, or a
reference to a named piece — and on a site that is ~45% editorial that is the
wrong model, so the CMS holds the richer shape. When the Studio is connected the
storefront's `richText` case becomes a Portable Text serializer
(`@portabletext/react`, roughly an hour), including a renderer for the
`pieceRef` annotation that links a named saree back to its PDP.

Everything else matches, and `schema.test.ts` fails the build if a section type
appears on one side only.

## Why the constraints are where they are

Each of these exists because the reference site got it wrong in a way that was
measured, not guessed:

| Constraint | Why |
|---|---|
| Both crops required on every `artPair` | Every banner in this category art-directs desktop and mobile separately (addendum A7), and a missing mobile crop is invisible on the desktop the author is working on |
| Alt text required, min 10 chars | All 8 product images on the reference PDP had **empty** alt (pre-build-gaps §5) |
| No `h1` in body copy | Reference PDP heading order runs H1→H4→H4→H2→H4→H5 (§5); `npm run lint:headings` fails the build for it, so the editor should not offer it |
| `campaignStory.shopifyCollectionHandle` required | **0 of 24** campaign-looking handles had a matching page (§4) — the pairing is authored, never inferable |
| Kebab-case slug enforced | `campaignpage_songs_of_the_season_` sat among otherwise kebab-case slugs (§4). A slug is a URL |
| No `title` on `productOverlay` | The title is Shopify's. A second editable title is how `Pre-Order:` reached 463 product titles (§3) |
| Exactly 3 announcement parts | The third carries duty-paid messaging, the category's answer to its biggest overseas objection |
| Exactly 3 triptych frames, 2 teasers | The layout is fixed; rendering the wrong count silently is worse than refusing to save |
| Product rail picks by collection, not by hand | Sold-out pieces sort back automatically — at inventory-of-1, ~49% of a mature catalogue is unavailable (§2) |

## Still open

The 7 remaining section types from `build.md` §2.4 are not modelled — the 8 here
are the 8 the storefront renders. Adding one is a new member in `sections.ts`, a
new member of the storefront union, and a new case in `SectionRenderer`. The
test enforces that you do all three.
