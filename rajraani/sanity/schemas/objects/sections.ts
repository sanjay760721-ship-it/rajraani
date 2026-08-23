import { defineArrayMember, defineField, defineType } from "../../lib/define.ts";
import { ctaFields } from "./artPair.ts";

/**
 * Section type for the 2-slide editorial slideshow (Womenswear/Menswear).
 * Matches reference's editorial split with slide transition, arrows, secondary buttons.
 */
export const campaignSlideshowSection = defineType({
  name: "campaignSlideshow",
  title: "Campaign Slideshow",
  type: "object",
  description:
    "Full-width campaign slides, each pairing one square frame with a title, a paragraph and a link into the campaign's story page.",
  fields: [
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "campaignSlide",
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
            defineField({
              name: "ctaLabel",
              type: "string",
              validation: (rule) => rule.required().max(40),
            }),
            defineField({
              name: "ctaHref",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(2),
    }),
  ],
});

export const editorialSlideshowSection = defineType({
  name: "editorialSlideshow",
  title: "Editorial Slideshow (2-Slide)",
  type: "object",
  description:
    "Two full-width slides (Womenswear/Menswear) with slide transition, arrows, secondary Explore buttons.",
  fields: [
    defineField({
      name: "slides",
      title: "Slides (exactly 2)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "editorialSlide",
          fields: [
            defineField({
              name: "art",
              type: "artPair",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "eyebrow",
              type: "string",
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
              validation: (rule) => rule.required().max(240),
            }),
            defineField({
              name: "ctaLabel",
              type: "string",
              validation: (rule) => rule.required().max(40),
            }),
            defineField({
              name: "ctaHref",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "buttonVariant",
              type: "string",
              options: { list: ["primary", "secondary"] },
              initialValue: "secondary",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "textAlign",
              type: "string",
              options: { list: ["left", "right", "center"] },
              initialValue: "center",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", media: "art.desktop" },
          },
        }),
      ],
      validation: (rule) => rule.required().length(2),
    }),
  ],
  preview: {
    select: { first: "slides.0.title", second: "slides.1.title" },
    prepare: ({ first, second }) => ({
      title: [first, second].filter(Boolean).join(" · ") || "Editorial Slideshow",
    }),
  },
});

/**
 * Section type for the 2-slide stores slideshow (Banaras/Mumbai).
 * Fade transition, no arrows/dots, Calendly links.
 */
export const storesSlideshowSection = defineType({
  name: "storesSlideshow",
  title: "Stores Slideshow (2-Slide Fade)",
  type: "object",
  description:
    "Two slides (Banaras/Mumbai) with fade transition, overlaid VISIT OUR STORES heading, Calendly links.",
  fields: [
    defineField({
      name: "slides",
      title: "Slides (exactly 2: Banaras, Mumbai)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "storeSlide",
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
              validation: (rule) => rule.required().max(240),
            }),
            defineField({
              name: "ctaLabel",
              type: "string",
              validation: (rule) => rule.required().max(40),
            }),
            defineField({
              name: "ctaHref",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", media: "art.desktop" },
          },
        }),
      ],
      validation: (rule) => rule.required().length(2),
    }),
  ],
  preview: {
    select: { first: "slides.0.title", second: "slides.1.title" },
    prepare: ({ first, second }) => ({
      title: [first, second].filter(Boolean).join(" · ") || "Stores Slideshow",
    }),
  },
});

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

export const heroCarouselSection = defineType({
  name: "heroCarousel",
  title: "Hero Carousel",
  type: "object",
  fields: [
    defineField({
      name: "slides",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "heroSlide",
          fields: [
            defineField({
              name: "art",
              type: "artPair",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "eyebrow",
              type: "string",
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
              validation: (rule) => rule.required().max(240),
            }),
            ...ctaFields(),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "slides.0.title" },
    prepare: ({ title }) => ({ title: `Carousel: ${title || "Hero Carousel"}` }),
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

export const videoBandSection = defineType({
  name: "videoBand",
  title: "Video Band",
  type: "object",
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
      validation: (rule) => rule.required().max(300),
    }),
    ...ctaFields(),
  ],
  preview: { select: { title: "title" } },
});

export const categorySplitSection = defineType({
  name: "categorySplit",
  title: "Category Split (2-Up)",
  type: "object",
  fields: [
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "categoryItem",
          fields: [
            defineField({ name: "art", type: "artPair", validation: (rule) => rule.required() }),
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().length(2),
    }),
  ],
  preview: { select: { title: "items.0.label" } },
});

export const tileRowSection = defineType({
  name: "tileRow",
  title: "Quick-Link Tile Row (4-Up)",
  type: "object",
  fields: [
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "tileItem",
          fields: [
            defineField({ name: "art", type: "artPair", validation: (rule) => rule.required() }),
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: { select: { title: "items.0.label" } },
});

export const dualCampaignSection = defineType({
  name: "dualCampaign",
  title: "Dual Campaign Feature",
  type: "object",
  fields: [
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "campaignItem",
          fields: [
            defineField({ name: "art", type: "artPair", validation: (rule) => rule.required() }),
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "body", type: "text", rows: 3, validation: (rule) => rule.required() }),
            ...ctaFields(),
          ],
        }),
      ],
      validation: (rule) => rule.required().length(2),
    }),
  ],
  preview: { select: { title: "items.0.title" } },
});

export const storesBandSection = defineType({
  name: "storesBand",
  title: "Boutique Stores Band",
  type: "object",
  fields: [
    defineField({ name: "art", type: "artPair", validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "stores",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "storeLocation",
          fields: [
            defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: { select: { title: "title" } },
});

export const hereToHelpSection = defineType({
  name: "hereToHelp",
  title: "Talk To Us Block",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "email", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "phone", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "whatsapp", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "hours", type: "string", validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: "title" } },
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
  heroCarouselSection,
  brandStatementSection,
  collectionTriptychSection,
  videoBandSection,
  categorySplitSection,
  tileRowSection,
  dualCampaignSection,
  storesBandSection,
  hereToHelpSection,
  productRailSection,
  editorialPairSection,
  editorialSlideshowSection,
  campaignSlideshowSection,
  storesSlideshowSection,
  poetryBandSection,
  richTextSection,
  pullQuoteSection,
];

/** The array members for any document's `sections[]` field. */
export const sectionArrayMembers = sectionTypes.map((section) =>
  defineArrayMember({ type: section.name }),
);
