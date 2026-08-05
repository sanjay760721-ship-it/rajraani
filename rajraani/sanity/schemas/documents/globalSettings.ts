import { defineArrayMember, defineField, defineType } from "../../lib/define.ts";

/**
 * Global settings — a singleton.
 *
 * Everything here is identical across every product and page, which is exactly
 * why it lives in settings rather than in per-product fields. addendum A5
 * verified the four PDP info tabs are byte-identical across two unrelated
 * products on the reference site; duplicating them per SKU would mean 900 copies
 * of the same shipping policy, rotting independently.
 */
export const globalSettings = defineType({
  name: "globalSettings",
  title: "Global settings",
  type: "document",
  __singleton: true,
  fields: [
    defineField({
      name: "announcementBar",
      title: "Announcement bar",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description:
        "Exactly three. The third should carry the duty-paid message — it answers the biggest objection an overseas buyer has, and it earns the position.",
      validation: (rule) => rule.required().length(3),
    }),
    defineField({
      name: "brandLine",
      title: "Brand line",
      type: "string",
      description: "Italic, under the wordmark.",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "promise",
      title: "The promise",
      type: "string",
      description:
        "Rendered verbatim in the spec list on every product. A global constant, never a product field.",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "irregularityNote",
      title: "Handwoven irregularity note",
      type: "text",
      rows: 3,
      description:
        "Appears on every handloom product. A trust device, and true of every piece — so it belongs here, not on the SKU.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "infoTabs",
      title: "Product info tabs",
      type: "array",
      description:
        "Shipping, Dimensions, Care, Other. Identical on every PDP. 'Other' carries the statutory manufacturer and country-of-origin block required for Indian e-commerce.",
      of: [
        defineArrayMember({
          type: "object",
          name: "infoTab",
          fields: [
            defineField({
              name: "id",
              type: "string",
              description: "shipping | dimensions | care | other",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "items",
              title: "Bullets",
              type: "array",
              of: [defineArrayMember({ type: "text" })],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
      validation: (rule) => rule.required().length(4),
    }),
    defineField({
      name: "freeShippingThreshold",
      title: "Free international shipping threshold",
      type: "number",
      description:
        "In base-currency major units. Converted per market at display time — never stored per currency.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "supportEmail",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "supportPhone",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "supportHours",
      type: "string",
      description: "Rendered italic and muted in the footer. A small warmth cue.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "newsletterModal",
      title: "Newsletter modal",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 3 }),
        defineField({ name: "art", type: "artPair" }),
      ],
    }),
  ],
  preview: { select: { title: "brandLine" } },
});
