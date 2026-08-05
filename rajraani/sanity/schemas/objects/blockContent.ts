import {
  defineArrayMember,
  defineType,
  type ValidationRule,
} from "../../lib/define.ts";

/**
 * Long-form editorial text (Portable Text).
 *
 * **Heading levels are constrained on purpose.** `h1` is deliberately absent:
 * the page template owns the single `h1`, and letting an author insert another
 * from inside body copy is precisely how heading order rots. The reference site
 * runs H1 → H4 → H4 → H2 → H4 → H5 on a product page
 * (pre-build-gaps.md §5), and `npm run lint:headings` would fail the build for
 * the same mistake here — better to make it unavailable in the editor than to
 * fail CI after the fact.
 *
 * The style list is short for the same reason the palette is: an editorial
 * template that can express six things well beats one that can express twenty
 * badly.
 */
export const blockContent = defineType({
  name: "blockContent",
  title: "Body",
  type: "object",
  fields: [
    {
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          options: {
            styles: [
              { title: "Paragraph", value: "normal" },
              // h2 and h3 only. See the note above.
              { title: "Heading", value: "h2" },
              { title: "Sub-heading", value: "h3" },
              { title: "Quote", value: "blockquote" },
            ],
            lists: [{ title: "Bulleted", value: "bullet" }],
            marks: {
              decorators: [
                { title: "Italic", value: "em" },
                // No bold: emphasis in this category is italic and space.
                // Bold in body copy reads as a different brand.
              ],
              annotations: [
                {
                  name: "link",
                  type: "object",
                  title: "Link",
                  fields: [
                    {
                      name: "href",
                      type: "string",
                      title: "Destination",
                      validation: (rule: ValidationRule) => rule.required(),
                    },
                  ],
                },
                {
                  /*
                   * Links a named piece inside a story back to its PDP.
                   *
                   * addendum A8: campaign stories name individual sarees by
                   * their poetic names in running prose. Making that a typed
                   * annotation rather than a hand-written URL is what keeps the
                   * editorial layer joined to the catalogue — and it survives a
                   * product handle changing.
                   */
                  name: "pieceRef",
                  type: "object",
                  title: "Named piece",
                  fields: [
                    {
                      name: "shopifyHandle",
                      type: "string",
                      title: "Product handle",
                      validation: (rule: ValidationRule) => rule.required(),
                    },
                  ],
                },
              ],
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
});
