import { defineArrayMember, defineField, defineType } from "../../lib/define.ts";
import { sectionArrayMembers } from "../objects/sections.ts";
import { slugValidation } from "../../lib/define.ts";

/**
 * The page documents: homepage, campaign story, craft page, blog post.
 *
 * All four are assembled from the same `sections[]` library, which is the
 * point — one renderer, and an editor who has learned to build one page can
 * build any of them.
 */

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  __singleton: true,
  description: "A stack of sections. Reordering the page is a content edit.",
  fields: [
    defineField({
      name: "sections",
      type: "array",
      of: sectionArrayMembers,
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "seoTitle",
      type: "string",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: { sections: "sections" },
    prepare: ({ sections }) => ({
      title: "Homepage",
      subtitle: Array.isArray(sections) ? `${sections.length} sections` : undefined,
    }),
  },
});

/**
 * A campaign story.
 *
 * **The pairing is the core content architecture** (build.md §2.2): every
 * campaign is an editorial `/pages/x` story *and* a shoppable `/collections/x`
 * grid, cross-linked.
 *
 * `collectionHandle` is required because the relationship is **authored,
 * not inferred**. pre-build-gaps.md §4 tested this directly on the reference
 * site: of 24 campaign-looking collection handles, **zero** had a matching page.
 * Most evocative handles are ordinary merchandising collections that happen to
 * sound like campaigns. You cannot tell a campaign from its handle, so the link
 * has to be stated.
 */
export const campaignStory = defineType({
  name: "campaignStory",
  title: "Campaign story",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 60 },
      description: "Becomes /pages/<slug>.",
      validation: slugValidation,
    }),
    defineField({
      name: "season",
      type: "string",
      description: "e.g. Monsoon 2026",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "standfirst",
      type: "text",
      rows: 4,
      description: "Two or three sentences under the hero. Sets the register.",
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "collectionHandle",
      title: "Shoppable collection",
      type: "string",
      description:
        "The /collections/<handle> this story sells. Required — the pairing is authored, never guessed from the slug.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: sectionArrayMembers,
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "closingVideo",
      title: "Closing video",
      type: "file",
      description: "Optional. Muted, looped, with a poster frame.",
    }),
  ],
  preview: { select: { title: "title", subtitle: "season" } },
});

/**
 * A craft or education page — the non-commerce half of the site.
 *
 * design.md §4.2 and addendum A9: roughly 45% of the site by page count is
 * editorial, and a rebuild that ships only the shop templates "will feel thin
 * and will miss the brand entirely — this is the single most common failure
 * mode."
 */
export const craftPage = defineType({
  name: "craftPage",
  title: "Craft page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 60 },
      description: "Becomes /pages/<slug>.",
      validation: slugValidation,
    }),
    defineField({
      name: "standfirst",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: sectionArrayMembers,
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: { select: { title: "title", subtitle: "standfirst" } },
});

export const blogPost = defineType({
  name: "blogPost",
  title: "Journal entry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: slugValidation,
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Craft", value: "craft" },
          { title: "Style", value: "style" },
          { title: "People", value: "people" },
          { title: "Perspective", value: "perspective" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hero",
      type: "artPair",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "hero.desktop" } },
});

/**
 * Per-product editorial overlay.
 *
 * The product record owns price, stock and title; the editorial layer lives
 * here, joined on the product handle.
 *
 * Note what is deliberately absent: **there is no title field.** The title
 * belongs to the product record, and a second editable one here is how a
 * fulfilment state or a campaign prefix eventually creeps into it — exactly the
 * failure pre-build-gaps.md §3 measured, where "Pre-Order:" reached 463 product
 * titles and leaked into breadcrumbs, og:title, cart lines and JSON-LD. The
 * database now refuses it outright too (src/lib/db/schema.sql).
 */
export const productOverlay = defineType({
  name: "productOverlay",
  title: "Product editorial",
  type: "document",
  fields: [
    defineField({
      name: "productHandle",
      title: "Product handle",
      type: "string",
      description: "The join key. Must match the product handle in the catalogue exactly.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "poeticName",
      title: "The piece's name",
      type: "string",
      description:
        "Its proper name, distinct from the descriptive title — Aparajita, not 'Blue Katan Silk Saree'. This is the brand's core differentiator and the thing a rebuild most often drops.",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "narrative",
      title: "Narrative",
      type: "text",
      rows: 8,
      description:
        "Roughly 90 words, bespoke to this piece. This is the moat, and it is a permanent writing cost — a competitor matching the architecture but not the copy reads as thinner regardless of build quality.",
      validation: (rule) => rule.required().min(200),
    }),
    defineField({
      name: "provenance",
      title: "Provenance",
      type: "object",
      description:
        "Replaces reviews as the credibility surface. The category carries no ratings anywhere, which leaves a PDP with nothing to trust — this suits the brand better than stars.",
      fields: [
        defineField({
          name: "workshop",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "loom",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "weaveTimeWeeks",
          title: "Weeks on the loom",
          type: "number",
          validation: (rule) => rule.required().min(1),
        }),
        defineField({
          name: "artisanCount",
          title: "Weavers involved",
          type: "number",
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "editorialImages",
      title: "Editorial frames",
      type: "array",
      description:
        "Optional extra frames beyond the shot template — campaign or styling imagery.",
      of: [defineArrayMember({ type: "artPair" })],
    }),
    defineField({
      name: "styledWith",
      title: "Styled with",
      type: "array",
      description: "Product handles of pieces shown alongside this one.",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: { select: { title: "poeticName", subtitle: "productHandle" } },
});
