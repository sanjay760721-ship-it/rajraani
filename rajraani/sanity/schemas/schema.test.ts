import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

import { SLUG_PATTERN } from "../lib/define.ts";
import {
  documentTypes,
  objectTypes,
  schemaTypes,
  singletonTypes,
} from "./index.ts";
import { sectionTypes } from "./objects/sections.ts";

/**
 * The CMS and the renderer are two halves of one contract.
 *
 * A section type an author can publish but the storefront cannot render is a
 * blank space on a live page, and nothing else in the toolchain would catch it:
 * the schema typechecks, the renderer typechecks, and they simply disagree.
 * These tests are the join.
 */

const storefrontSections = readFileSync(
  fileURLToPath(new URL("../../src/lib/content/sections.ts", import.meta.url)),
  "utf8",
);

/** The `type: "…"` discriminants of the storefront's Section union. */
function storefrontSectionNames(): string[] {
  const body = storefrontSections.slice(
    storefrontSections.indexOf("export type Section ="),
    storefrontSections.indexOf("export type EditorialTeaser"),
  );
  return [...body.matchAll(/^\s*type:\s*"([a-zA-Z]+)";/gm)].map((m) => m[1]!);
}

describe("schema is well-formed", () => {
  it("has no duplicate type names", () => {
    const names = schemaTypes.map((type) => type.name);
    assert.equal(new Set(names).size, names.length, "duplicate schema type name");
  });

  it("gives every type at least one field", () => {
    for (const type of schemaTypes) {
      assert.ok(type.fields.length > 0, `${type.name} has no fields`);
    }
  });

  it("references only types that exist", () => {
    const known = new Set([
      ...schemaTypes.map((type) => type.name),
      // Sanity built-ins used by these schemas.
      "string", "text", "number", "boolean", "datetime", "slug",
      "image", "file", "array", "object", "block",
    ]);

    const walk = (fields: readonly { type: string; fields?: readonly unknown[]; of?: readonly unknown[] }[], owner: string) => {
      for (const field of fields) {
        assert.ok(known.has(field.type), `${owner} references unknown type "${field.type}"`);
        if (field.fields) walk(field.fields as never, owner);
        if (field.of) walk(field.of as never, owner);
      }
    };

    for (const type of schemaTypes) walk(type.fields, type.name);
  });

  it("marks exactly the three singletons", () => {
    assert.deepEqual(singletonTypes.sort(), ["globalSettings", "homepage", "navigation"]);
  });

  it("separates documents from objects", () => {
    for (const type of documentTypes) assert.equal(type.type, "document");
    for (const type of objectTypes) assert.equal(type.type, "object");
  });
});

describe("section types match the storefront renderer", () => {
  const cmsNames = sectionTypes.map((section) => section.name).sort();
  const appNames = storefrontSectionNames().sort();

  it("finds the storefront union (guards against this test silently passing)", () => {
    // If the parse breaks, every comparison below would trivially pass.
    assert.ok(appNames.length >= 8, `parsed only ${appNames.length} section types`);
  });

  it("is the same set on both sides", () => {
    assert.deepEqual(
      cmsNames,
      appNames,
      "A section type exists on one side only. An author can publish a section " +
        "the storefront cannot render, or the renderer has a case nothing can " +
        "produce. Add it to both, or to neither.",
    );
  });

  for (const section of sectionTypes) {
    it(`${section.name} is renderable`, () => {
      assert.ok(
        appNames.includes(section.name),
        `${section.name} has no case in SectionRenderer`,
      );
    });
  }
});

describe("constraints that exist because the reference site got them wrong", () => {
  it("requires both crops on every art pair", () => {
    // build.md §6: every banner has independent desktop and mobile art. The
    // failure is invisible on the desktop the author is working on.
    const artPairType = objectTypes.find((type) => type.name === "artPair");
    assert.ok(artPairType);
    const names = artPairType.fields.map((field) => field.name);
    assert.deepEqual(names, ["desktop", "mobile"]);
    for (const field of artPairType.fields) {
      assert.ok(field.validation, `${field.name} is not required`);
      const alt = field.fields?.find((sub) => sub.name === "alt");
      assert.ok(alt?.validation, `${field.name} does not require alt text`);
    }
  });

  it("offers no h1 in body copy", () => {
    // The page template owns the single h1; an author inserting another is how
    // heading order rots, and lint:headings would fail the build for it.
    const block = objectTypes.find((type) => type.name === "blockContent");
    const styles = block?.fields[0]?.of?.[0]?.options?.styles as
      | { value: string }[]
      | undefined;
    assert.ok(styles, "blockContent has no style list");
    assert.ok(!styles.some((style) => style.value === "h1"));
  });

  it("has no title field on the product overlay", () => {
    // The title is Shopify's. A second editable title here is how a fulfilment
    // state eventually creeps into it — 463 times, on the reference site.
    const overlay = documentTypes.find((type) => type.name === "productOverlay");
    assert.ok(overlay);
    assert.ok(!overlay.fields.some((field) => field.name === "title"));
    assert.ok(overlay.fields.some((field) => field.name === "poeticName"));
  });

  it("requires an authored collection handle on every campaign", () => {
    // 0 of 24 campaign-looking handles on the reference site had a matching
    // page. The pairing cannot be inferred, so it must be stated.
    const campaign = documentTypes.find((type) => type.name === "campaignStory");
    const handle = campaign?.fields.find(
      (field) => field.name === "shopifyCollectionHandle",
    );
    assert.ok(handle?.validation, "campaign collection handle is not required");
  });

  it("enforces kebab-case slugs", () => {
    // Handle casing was inconsistent on the reference site; a slug is a URL.
    assert.ok(SLUG_PATTERN.test("of-the-first-water"));
    assert.ok(!SLUG_PATTERN.test("campaignpage_songs_of_the_season_"));
    assert.ok(!SLUG_PATTERN.test("Of-The-First-Water"));
    assert.ok(!SLUG_PATTERN.test("double--hyphen"));
  });

  it("pins the announcement bar to exactly three parts", () => {
    const settings = documentTypes.find((type) => type.name === "globalSettings");
    const bar = settings?.fields.find((field) => field.name === "announcementBar");
    assert.ok(bar?.validation);
  });
});
