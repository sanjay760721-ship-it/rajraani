import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

import { BRAND } from "../brand.ts";
import { CAMPAIGNS, COLLECTIONS, PRODUCTS } from "./fixtures.ts";
import {
  COLOURS,
  FABRICS,
  GARMENT_TYPES,
  MOTIFS,
  WEAVES,
  ZARI_TYPES,
  resolveTerm,
} from "../domain/taxonomy.ts";
import { isAvailable } from "../domain/types.ts";

/**
 * Catalogue integrity.
 *
 * These are the acceptance criteria from build.md §6 that can be checked
 * mechanically, expressed as tests so they hold on every commit rather than
 * being re-read at launch. The criteria that cannot be automated — voice, and
 * whether "a reviewer unfamiliar with the project can identify the reference
 * site" — stay human review gates, and no test here should be mistaken for
 * covering them.
 */

const slugsIn = (terms: readonly { slug: string }[]) =>
  new Set(terms.map((term) => term.slug));

describe("identity", () => {
  it("has unique handles, ids and SKUs", () => {
    for (const key of ["handle", "id", "sku"] as const) {
      const values = PRODUCTS.map((product) => product[key]);
      assert.equal(
        new Set(values).size,
        values.length,
        `duplicate ${key} in the catalogue`,
      );
    }
  });

  it("gives every piece a poetic name distinct from its title", () => {
    // The named piece is the brand's core differentiator and the thing a
    // rebuild most often drops (addendum A8).
    for (const product of PRODUCTS) {
      assert.ok(product.poeticName.length > 0, `${product.handle} has no poetic name`);
      assert.notEqual(product.poeticName, product.title);
    }
  });
});

describe("no fulfilment state in product titles (§9.8)", () => {
  // The reference site prefixed "Pre-Order:" onto 463 titles, leaking the state
  // into breadcrumbs, page titles, cart lines, og:title and JSON-LD name — and
  // could only undo it by editing 463 titles.
  const FORBIDDEN = /pre[-\s]?order|ready to ship|made to order|sold out|back in stock|coming soon/i;

  for (const product of PRODUCTS) {
    it(`${product.handle}`, () => {
      assert.doesNotMatch(
        product.title,
        FORBIDDEN,
        "fulfilment state belongs in fulfilmentMode and is expressed by badging",
      );
    });
  }
});

describe("controlled vocabulary (build.md §7.3 governance)", () => {
  // On a greenfield catalogue the tag-migration workstream inverts into this
  // one rule. The reference catalogue reached 1,592 unique tags without it.
  const VOCABULARIES = {
    garmentType: slugsIn(GARMENT_TYPES),
    fabric: slugsIn(FABRICS),
    colourFamily: slugsIn(COLOURS),
  } as const;

  /**
   * Garments cut and stitched from cloth rather than woven to shape. These may
   * carry no `weave`, and the rule below is what stops "optional" decaying into
   * "sometimes forgotten": absent is legal *here* and nowhere else.
   */
  const STITCHED = new Set(["suit"]);

  for (const product of PRODUCTS) {
    it(`${product.handle} references only known terms`, () => {
      for (const [field, allowed] of Object.entries(VOCABULARIES)) {
        const value = product[field as keyof typeof VOCABULARIES];
        assert.ok(
          allowed.has(value),
          `${field} "${value}" is not in the controlled vocabulary`,
        );
      }

      if (product.weave === undefined) {
        assert.ok(
          STITCHED.has(product.garmentType),
          `${product.garmentType} is a woven garment and must name a weave`,
        );
      } else {
        assert.ok(
          slugsIn(WEAVES).has(product.weave),
          `weave "${product.weave}" is not in the controlled vocabulary`,
        );
      }
      for (const motif of product.motifs) {
        assert.ok(slugsIn(MOTIFS).has(motif), `unknown motif "${motif}"`);
      }
      for (const zari of product.zariTypes) {
        assert.ok(slugsIn(ZARI_TYPES).has(zari), `unknown zari type "${zari}"`);
      }
    });
  }

  it("resolves transliteration forks to one canonical term", () => {
    // The half of the tag problem no script can solve: kadhua/kadwa were split
    // exactly 16/16 across 32 variants on the reference catalogue.
    assert.equal(resolveTerm("weave", "kadwa")?.slug, "kadhua");
    assert.equal(resolveTerm("weave", "Kadhua")?.slug, "kadhua");
    assert.equal(resolveTerm("motif", "mina")?.slug, "meenakari");
    assert.equal(resolveTerm("motif", "buti")?.slug, "booti");
  });

  it("keeps booti and boota apart — they are sizes, not spellings", () => {
    // taxonomy/REVIEW.md decision 2. A naive normalisation script would merge
    // them and destroy a distinction merchandisers rely on: booti is the small
    // scattered motif, boota the larger standalone one.
    assert.equal(resolveTerm("motif", "boota")?.slug, "boota");
    assert.equal(resolveTerm("motif", "buta")?.slug, "boota");
    assert.notEqual(
      resolveTerm("motif", "booti")?.slug,
      resolveTerm("motif", "boota")?.slug,
    );
  });

  it("resolves aliases within a facet, never globally", () => {
    // `gold` is claimed by zari.gold (the thread) and colour.gold (the shade).
    // Both are correct — which is exactly why resolution must be facet-scoped.
    assert.equal(resolveTerm("zari", "gold")?.slug, "gold");
    assert.equal(resolveTerm("colour", "gold")?.slug, "gold");
    assert.equal(resolveTerm("colour", "sona")?.slug, "gold");
    assert.equal(resolveTerm("weave", "gold"), undefined);
  });

  it("does not let an alias become a second canonical term", () => {
    const canonical = slugsIn(WEAVES);
    for (const weave of WEAVES) {
      for (const alias of weave.aliases ?? []) {
        assert.ok(
          !canonical.has(alias),
          `"${alias}" is both an alias and a canonical slug`,
        );
      }
    }
  });
});

describe("imagery and the shot template", () => {
  for (const product of PRODUCTS) {
    describe(product.handle, () => {
      it("carries at least the six-frame template (photography-brief §3)", () => {
        assert.ok(
          product.images.length >= 6,
          `${product.images.length} frames — median in this category is 6`,
        );
      });

      it("runs five 2:3 portrait frames before any 1:1 square", () => {
        // Locked from SKU #1 (§9.11). The reference site converged on a
        // template late and never retro-fitted, leaving a visibly inconsistent
        // grid — consistency costs a decision now, and cannot be bought later.
        const ratios = product.images.map((image) => image.ratio);
        assert.deepEqual(ratios.slice(0, 5), Array<string>(5).fill("portrait"));
        for (const ratio of ratios.slice(5)) {
          assert.equal(ratio, "square");
        }
      });

      it("uses the exact master dimensions", () => {
        for (const image of product.images) {
          const expected =
            image.ratio === "portrait"
              ? { width: 3000, height: 4500 }
              : { width: 3000, height: 3000 };
          assert.equal(image.width, expected.width);
          assert.equal(image.height, expected.height);
        }
      });

      it("gives every frame descriptive alt text that is not the title (§9.9)", () => {
        // Measured on the reference PDP: all 8 product images had empty alt.
        for (const image of product.images) {
          assert.ok(image.alt.trim().length > 10, `frame ${image.id} has thin alt text`);
          assert.notEqual(image.alt, product.title);
          assert.ok(
            !image.alt.includes(product.title),
            `frame ${image.id} repeats the product title instead of describing the frame`,
          );
        }
      });

      it("does not repeat the same alt string across frames", () => {
        const alts = product.images.map((image) => image.alt);
        assert.equal(new Set(alts).size, alts.length);
      });
    });
  }
});

describe("availability modelling (§9.7)", () => {
  it("models sold-out as a primary state, not an edge case", () => {
    // 49% of the reference catalogue is unavailable — the arithmetic
    // consequence of inventory-of-1 pieces that stay listed after selling.
    // A fixture set that is all in stock hides the template half of all
    // product views land on.
    const soldOut = PRODUCTS.filter((product) => !isAvailable(product)).length;
    const share = soldOut / PRODUCTS.length;
    assert.ok(
      share >= 0.25 && share <= 0.6,
      `${Math.round(share * 100)}% sold out — the fixture set should stay near the measured 49%`,
    );
  });

  it("gives every product an ordered dispatch window", () => {
    for (const product of PRODUCTS) {
      const [from, to] = product.dispatchLeadDays;
      assert.ok(from > 0 && to >= from, `${product.handle} has an invalid dispatch window`);
    }
  });
});

describe("collections (§9.5)", () => {
  it("is only ever a facet result or an editorially-earned campaign", () => {
    for (const collection of COLLECTIONS) {
      assert.ok(["facet", "campaign"].includes(collection.kind));
    }
  });

  it("has no price-band collection (§7.4 forbids them outright)", () => {
    for (const collection of COLLECTIONS) {
      if (collection.kind !== "facet") continue;
      assert.ok(
        !("price" in collection.facets),
        `${collection.handle} is a price-band collection`,
      );
    }
  });

  it("resolves every campaign to both a story page and a collection", () => {
    // The pairing is an authored relationship, not a naming convention:
    // pre-build-gaps.md §4 found 0 of 24 campaign-looking handles had a
    // matching page, so the handle cannot be trusted to express it.
    for (const campaign of CAMPAIGNS) {
      const collection = COLLECTIONS.find(
        (candidate) => candidate.handle === campaign.collectionHandle,
      );
      assert.ok(collection, `campaign ${campaign.slug} has no collection`);
      assert.equal(collection.kind, "campaign");
      assert.ok(campaign.storyPageSlug.length > 0);
    }
  });

  it("points campaign collections at products that exist", () => {
    const handles = new Set(PRODUCTS.map((product) => product.handle));
    for (const collection of COLLECTIONS) {
      if (collection.kind !== "campaign") continue;
      for (const handle of collection.productHandles) {
        assert.ok(handles.has(handle), `${collection.handle} references missing ${handle}`);
      }
    }
  });

  it("gives every collection an SEO intro", () => {
    // Meaningful organic-traffic infrastructure on every major collection
    // (design.md §6.2) — cheap to keep, expensive to retrofit.
    for (const collection of COLLECTIONS) {
      assert.ok(collection.seoIntro.length > 40, `${collection.handle} has a thin intro`);
    }
  });
});

describe("originality (build.md §6)", () => {
  it("references no external imagery", () => {
    // No competitor asset can reach the build if no fixture points off-site.
    for (const product of PRODUCTS) {
      for (const image of product.images) {
        assert.equal(
          image.src,
          undefined,
          `${image.id} has a src — placeholder frames must carry none`,
        );
      }
    }
  });

  it("keeps the placeholder brand name in exactly one file", () => {
    // "Tantu" is a placeholder. Isolating it means the real name is one edit,
    // not a search across the codebase.
    const srcDir = fileURLToPath(new URL("../..", import.meta.url));
    const offenders: string[] = [];

    const walk = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full);
          continue;
        }
        if (!/\.(ts|tsx|css)$/.test(entry.name)) continue;
        // brand.ts declares it; this test names it to check for it.
        if (full.endsWith("brand.ts") || full.endsWith("catalogue.test.ts")) continue;
        if (readFileSync(full, "utf8").includes(BRAND.name)) {
          offenders.push(path.relative(srcDir, full));
        }
      }
    };
    walk(srcDir);

    assert.deepEqual(
      offenders,
      [],
      `hardcoded brand name found — import BRAND from lib/brand instead:\n  ${offenders.join("\n  ")}`,
    );
  });
});
