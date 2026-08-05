import { defineField, defineType } from "../../lib/define.ts";

/**
 * An art-directed image: desktop and mobile, both required.
 *
 * addendum A7 measured the category convention — every banner ships separate
 * desktop and mobile art (`*Banner_2000x.jpg` / `*Banner-Mob_2000x.jpg`), and
 * the mobile crop is a portrait recomposition, not a CSS resize. build.md §6
 * makes "every banner has independent desktop and mobile art" a ship criterion.
 *
 * So the pairing is baked into the type rather than left to authoring
 * discipline: **an author cannot save a banner with only one crop.** This is the
 * single most useful constraint in the whole content model, because the failure
 * is invisible on the desktop the author is working on.
 */

/** Alt text is required on every image, everywhere. */
const imageWithAlt = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: "image",
    description,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        description:
          "Describe the frame — what is in it, and what it shows. Not the page title repeated.",
        // Measured on the reference PDP: all 8 product images had empty alt
        // (pre-build-gaps.md §5). Requiring it here is the cheapest possible
        // fix, and it has to be required or it will not be written.
        validation: (rule) => rule.required().min(10),
      }),
    ],
    validation: (rule) => rule.required(),
  });

export const artPair = defineType({
  name: "artPair",
  title: "Art (desktop + mobile)",
  type: "object",
  description:
    "Both crops are required. The mobile frame is a recomposition, not a resize.",
  fields: [
    imageWithAlt(
      "desktop",
      "Desktop",
      "Landscape or full-bleed. Shown at 768px and above.",
    ),
    imageWithAlt(
      "mobile",
      "Mobile",
      "Portrait crop with the subject recomposed. Shown below 768px.",
    ),
  ],
  preview: {
    select: { media: "desktop", alt: "desktop.alt" },
    prepare: ({ alt }) => ({
      title: typeof alt === "string" ? alt : "Art pair",
    }),
  },
});

/**
 * CTA fields, reused across section types.
 *
 * Deliberately flat (`ctaLabel` / `ctaHref`) rather than a nested `cta` object,
 * because that is the shape the storefront's Section union already reads. A
 * nested object would model slightly better and buy nothing a shopper can see,
 * at the cost of a refactor on both sides.
 */
export const ctaFields = () => [
  defineField({
    name: "ctaLabel",
    title: "Link label",
    type: "string",
    description:
      "Sentence case here; the template applies the uppercase letterspacing.",
    validation: (rule) => rule.required().max(40),
  }),
  defineField({
    name: "ctaHref",
    title: "Link destination",
    type: "string",
    description: "A path on this site, e.g. /collections/nadi",
    validation: (rule) =>
      rule
        .required()
        .regex(/^\//, { name: "internal path" })
        .error("Must be a path beginning with /"),
  }),
];
