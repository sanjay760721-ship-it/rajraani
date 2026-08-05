import { defineArrayMember, defineField, defineType } from "../../lib/define.ts";

/**
 * Navigation — a singleton, and the document that closes a ship criterion.
 *
 * build.md §6: "Mega menu is 100% CMS-driven; changing it requires zero
 * deploys." Until this document exists and the storefront reads it, changing a
 * menu link means a code change and a deploy — which is the one Sprint 1 exit
 * criterion still outstanding.
 *
 * addendum A2 found the reference site's mega menu **differed between two page
 * loads** — columns gained and lost links. Whether that is A/B testing or busy
 * merchandisers, the lesson is the same: menu content is live data, never a
 * compile-time constant.
 *
 * The image tiles are merchandised slots, not decoration. Each is an
 * editorially chosen link and each panel gets at least one.
 */

const navLink = defineArrayMember({
  type: "object",
  name: "navLink",
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "href",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .regex(/^\//, { name: "internal path" })
          .error("Must be a path beginning with /"),
    }),
    defineField({
      name: "emphasis",
      title: "Emphasise",
      type: "boolean",
      description:
        "Bolds the link for merchandising. Intentional weighting — use it on a handful, or it stops meaning anything.",
      initialValue: false,
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  __singleton: true,
  fields: [
    defineField({
      name: "panels",
      title: "Mega menu panels",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "navPanel",
          fields: [
            defineField({
              name: "id",
              type: "string",
              description: "Stable key, e.g. shop. Used for ARIA wiring.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              type: "string",
              description: "The word in the nav bar.",
              validation: (rule) => rule.required().max(24),
            }),
            defineField({
              name: "href",
              type: "string",
              description:
                "Where the trigger itself goes, for anyone who clicks rather than hovers.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "columns",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "navColumn",
                  fields: [
                    defineField({
                      name: "heading",
                      type: "string",
                      validation: (rule) => rule.required().max(40),
                    }),
                    defineField({
                      name: "links",
                      type: "array",
                      of: [navLink],
                      validation: (rule) => rule.required().min(1),
                    }),
                  ],
                  preview: { select: { title: "heading" } },
                }),
              ],
              validation: (rule) => rule.required().min(1).max(3),
            }),
            defineField({
              name: "tiles",
              title: "Image tiles",
              type: "array",
              description:
                "Merchandised slots. At least one per panel — an empty column of links is not what this menu is for.",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "navTile",
                  fields: [
                    defineField({
                      name: "label",
                      type: "string",
                      validation: (rule) => rule.required().max(40),
                    }),
                    defineField({
                      name: "href",
                      type: "string",
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: "art",
                      type: "artPair",
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: { select: { title: "label", media: "art.desktop" } },
                }),
              ],
              validation: (rule) => rule.required().min(1).max(2),
            }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "footerColumns",
      title: "Footer columns",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "footerColumn",
          fields: [
            defineField({
              name: "heading",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "links",
              type: "array",
              of: [navLink],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { panels: "panels" },
    prepare: ({ panels }) => ({
      title: "Navigation",
      subtitle: Array.isArray(panels) ? `${panels.length} panels` : undefined,
    }),
  },
});
