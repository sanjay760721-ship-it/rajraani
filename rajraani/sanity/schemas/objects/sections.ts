import { defineArrayMember, defineField, defineType } from "../../lib/define.ts";
import { ctaFields } from "./artPair.ts";

/**
 * The section library (build.md §2.4).
 *
 * Every page on the site is an ordered list of these, so an editor can build a
 * campaign story with no engineering help — which is a ship criterion (§6), not
 * a nicety.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THESE NAMES AND FIELDS MUST MATCH `src/lib/content/sections.ts`.
 *
 * The CMS and the renderer are two halves of one contract: a section type the
 * storefront cannot render is a section an author can publish into a blank
 * space on the page. `sanity/schemas/schema.test.ts` asserts the type names on
 * both sides are identical, so the two cannot drift apart silently.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Eight of the fifteen specified types are modelled here — the eight the
 * storefront renders today. The remaining seven are additive: a new type is a
 * new member here, a new member of the union, and a new case in the registry.
 */

export const heroSection = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "art",
      type: "artPair",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      type: "string",
      description: "Small label above the title, e.g. a season. Optional.",
      validation: (rule) => rule.max(40),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 3,
      description: "One or two sentences. Price never appears in a hero.",
      validation: (rule) => rule.required().max(240),
    }),
    ...ctaFields(),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow", media: "art.desktop" },
  },
});

export const brandStatementSection = defineType({
  name: "brandStatement",
  title: "Brand statement",
  type: "object",
  description: "Centred, mostly whitespace. No image, no CTA.",
  fields: [
    defineField({
      name: "quote",
      type: "string",
      description: "A single line, set large in the display face.",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
  ],
  preview: { select: { title: "quote", subtitle: "body" } },
});

export const collectionTriptychSection = defineType({
  name: "collectionTriptych",
  title: "Collection triptych",
  type: "object",
  description: "Three square frames above a centred title, body and link.",
  fields: [
    defineField({
      name: "art",
      title: "Three frames",
      type: "array",
      of: [defineArrayMember({ type: "artPair" })],
      // Exactly three. The layout is a triptych; two or four is a different
      // section, and silently rendering the wrong count is worse than refusing.
      validation: (rule) => rule.required().length(3),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(400),
    }),
    ...ctaFields(),
  ],
  preview: { select: { title: "title", media: "art.0.desktop" } },
});

export const productRailSection = defineType({
  name: "productRail",
  title: "Product rail",
  type: "object",
  description:
    "Four pieces from a collection. Availability decides the order, not the author.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "collectionHandle",
      title: "Collection",
      type: "string",
      description:
        "The collection handle to draw from, e.g. sarees. Products are not picked by hand — sold-out pieces sort back automatically.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaLabel",
      title: "Link label",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
  ],
  preview: { select: { title: "title", subtitle: "collectionHandle" } },
});

export const editorialPairSection = defineType({
  name: "editorialPair",
  title: "Editorial pair",
  type: "object",
  description: "Two teasers side by side, each linking to a story.",
  fields: [
    defineField({
      name: "items",
      title: "The two teasers",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "teaser",
          fields: [
            defineField({
              name: "art",
              type: "artPair",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              validation: (rule) => rule.required().max(60),
            }),
            defineField({
              name: "body",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required().max(400),
            }),
            ...ctaFields(),
          ],
          preview: { select: { title: "title", media: "art.desktop" } },
        }),
      ],
      validation: (rule) => rule.required().length(2),
    }),
  ],
  preview: {
    select: { first: "items.0.title", second: "items.1.title" },
    prepare: ({ first, second }) => ({
      title: [first, second].filter(Boolean).join(" · ") || "Editorial pair",
    }),
  },
});

export const poetryBandSection = defineType({
  name: "poetryBand",
  title: "Poetry band",
  type: "object",
  description: "A heading and two lines on the warm ground. No CTA, by design.",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
  ],
  preview: { select: { title: "heading", subtitle: "body" } },
});

export const richTextSection = defineType({
  name: "richText",
  title: "Text",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "Optional. Renders as an h2.",
      validation: (rule) => rule.max(80),
    }),
    defineField({
      /*
       * KNOWN MISMATCH, deliberate. The storefront currently types this as
       * `paragraphs: string[]`, which cannot carry a link, an emphasis or a
       * reference to a named piece. On a site that is ~45% editorial that is
       * the wrong model, so the CMS holds Portable Text and the storefront
       * gains a serializer when the Studio is connected. Recorded in
       * sanity/README.md under "Known mismatches".
       */
      name: "body",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "heading" } },
});

export const pullQuoteSection = defineType({
  name: "pullQuote",
  title: "Pull quote",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "attribution",
      type: "string",
      description: "Optional.",
      validation: (rule) => rule.max(80),
    }),
  ],
  preview: { select: { title: "quote", subtitle: "attribution" } },
});

/** Every section type, in the order they appear in the Studio's insert menu. */
export const sectionTypes = [
  heroSection,
  brandStatementSection,
  collectionTriptychSection,
  productRailSection,
  editorialPairSection,
  poetryBandSection,
  richTextSection,
  pullQuoteSection,
];

/** The array members for any document's `sections[]` field. */
export const sectionArrayMembers = sectionTypes.map((section) =>
  defineArrayMember({ type: section.name }),
);
