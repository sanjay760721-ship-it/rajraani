import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { PRODUCTS } from "../data/fixtures.ts";
import { FACET_GROUPS } from "../domain/taxonomy.ts";
import { isAvailable } from "../domain/types.ts";
import {
  computeFacetCounts,
  filterProducts,
  priceBandFor,
  productValues,
  sortProducts,
  toggleFacet,
  type FacetSelection,
} from "./engine.ts";

describe("filtering", () => {
  it("returns everything when nothing is selected", () => {
    assert.equal(filterProducts(PRODUCTS, {}).length, PRODUCTS.length);
  });

  it("ORs within a group — the point of multi-select (§9.1)", () => {
    const blue = filterProducts(PRODUCTS, { colour: ["blue"] });
    const red = filterProducts(PRODUCTS, { colour: ["red"] });
    const both = filterProducts(PRODUCTS, { colour: ["blue", "red"] });

    assert.ok(blue.length > 0 && red.length > 0);
    assert.equal(both.length, blue.length + red.length);
  });

  it("ANDs across groups", () => {
    const selection: FacetSelection = {
      colour: ["blue"],
      weave: ["kadhua"],
    };
    const result = filterProducts(PRODUCTS, selection);

    assert.ok(result.length > 0);
    for (const product of result) {
      assert.equal(product.colourFamily, "blue");
      assert.equal(product.weave, "kadhua");
    }
  });

  it("narrows rather than widens as groups are added", () => {
    const blue = filterProducts(PRODUCTS, { colour: ["blue"] });
    const blueKadhua = filterProducts(PRODUCTS, {
      colour: ["blue"],
      weave: ["kadhua"],
    });

    assert.ok(blueKadhua.length < blue.length, "adding a group must narrow the set");
    const blueHandles = new Set(blue.map((product) => product.handle));
    for (const product of blueKadhua) {
      assert.ok(blueHandles.has(product.handle), "the result must stay a subset");
    }
  });

  it("matches multi-valued groups when any value hits", () => {
    const result = filterProducts(PRODUCTS, { motif: ["konia"] });
    assert.ok(result.length > 0);
    for (const product of result) {
      assert.ok(product.motifs.includes("konia"));
    }
  });

  it("separates availability from dispatch mode", () => {
    // They answer different questions: a piece can be sold out AND made to
    // order. Conflating them is what put "Pre-Order:" in 463 titles.
    const soldOut = filterProducts(PRODUCTS, { availability: ["sold-out"] });
    const madeToOrder = filterProducts(PRODUCTS, { fulfilment: ["made_to_order"] });

    assert.ok(soldOut.length > 0 && madeToOrder.length > 0);
    for (const product of soldOut) assert.equal(product.inventoryQuantity, 0);
    for (const product of madeToOrder) {
      assert.equal(product.fulfilmentMode, "made_to_order");
    }
  });

  it("returns an empty set for a contradiction rather than ignoring it", () => {
    // A stale bookmark should show an empty grid with removable chips, not
    // silently unfiltered results.
    const result = filterProducts(PRODUCTS, {
      colour: ["red"],
      fabric: ["silk-wool"],
    });
    assert.equal(result.length, 0);
  });
});

describe("facet counts", () => {
  it("counts every option when nothing is selected", () => {
    const counts = computeFacetCounts(PRODUCTS, {});
    const colourTotal = Object.values(counts.colour).reduce((a, b) => a + b, 0);
    // Every product has exactly one colour family.
    assert.equal(colourTotal, PRODUCTS.length);
  });

  it("EXCLUDES a group's own selection from its counts", () => {
    // The rule that makes a faceted grid explorable. Without it, selecting Blue
    // drives every other colour to zero and the group is dead.
    const unselected = computeFacetCounts(PRODUCTS, {});
    const selected = computeFacetCounts(PRODUCTS, { colour: ["blue"] });

    assert.deepEqual(selected.colour, unselected.colour);
    assert.ok((selected.colour.red ?? 0) > 0, "red must not read zero while blue is selected");
  });

  it("narrows OTHER groups when a selection is made", () => {
    const unselected = computeFacetCounts(PRODUCTS, {});
    const selected = computeFacetCounts(PRODUCTS, { colour: ["blue"] });

    const weaveTotalBefore = Object.values(unselected.weave).reduce((a, b) => a + b, 0);
    const weaveTotalAfter = Object.values(selected.weave).reduce((a, b) => a + b, 0);

    assert.ok(weaveTotalAfter < weaveTotalBefore);
  });

  it("never shows a count that would return an empty grid", () => {
    // Availability-honest counts (§9.7): clicking any option with a non-zero
    // count must produce that many results.
    const selection: FacetSelection = { fabric: ["katan-silk"] };
    const counts = computeFacetCounts(PRODUCTS, selection);

    for (const [value, count] of Object.entries(counts.colour)) {
      const combined = filterProducts(PRODUCTS, { ...selection, colour: [value] });
      assert.equal(
        combined.length,
        count,
        `colour "${value}" advertised ${count} results but returns ${combined.length}`,
      );
    }
  });

  it("keeps availability counts honest against real stock", () => {
    const counts = computeFacetCounts(PRODUCTS, {});
    const actuallyAvailable = PRODUCTS.filter(isAvailable).length;
    assert.equal(counts.availability.available, actuallyAvailable);
  });

  it("covers every group", () => {
    const counts = computeFacetCounts(PRODUCTS, {});
    for (const group of FACET_GROUPS) {
      assert.ok(group in counts, `missing counts for ${group}`);
    }
  });
});

describe("price bands", () => {
  it("computes a band for every product rather than storing one (§7.4)", () => {
    for (const product of PRODUCTS) {
      assert.ok(priceBandFor(product), `no band for ${product.handle}`);
    }
  });

  it("puts a price on exactly one band — bands do not overlap", () => {
    for (const product of PRODUCTS) {
      assert.equal(productValues(product, "price").length, 1);
    }
  });
});

describe("sorting", () => {
  it("leads with available pieces under the default order (§9.7)", () => {
    const sorted = sortProducts(PRODUCTS, "featured");
    const firstSoldOut = sorted.findIndex((product) => !isAvailable(product));
    const lastAvailable = sorted.map(isAvailable).lastIndexOf(true);

    assert.ok(
      firstSoldOut > lastAvailable,
      "a sold-out piece appeared before an available one",
    );
  });

  it("keeps sold-out pieces browsable rather than hiding them", () => {
    const sorted = sortProducts(PRODUCTS, "featured");
    assert.equal(sorted.length, PRODUCTS.length);
  });

  it("orders by price in both directions", () => {
    const asc = sortProducts(PRODUCTS, "price-asc");
    const desc = sortProducts(PRODUCTS, "price-desc");

    for (let i = 1; i < asc.length; i += 1) {
      assert.ok(asc[i]!.price.minorUnits >= asc[i - 1]!.price.minorUnits);
    }
    assert.equal(desc[0]?.handle, asc[asc.length - 1]?.handle);
  });

  it("does not mutate its input", () => {
    const before = PRODUCTS.map((product) => product.handle);
    sortProducts(PRODUCTS, "price-desc");
    assert.deepEqual(
      PRODUCTS.map((product) => product.handle),
      before,
    );
  });
});

describe("toggling", () => {
  it("adds, then removes, and drops the group when it empties", () => {
    const added = toggleFacet({}, "colour", "blue");
    assert.deepEqual(added.colour, ["blue"]);

    const two = toggleFacet(added, "colour", "red");
    assert.deepEqual(two.colour, ["blue", "red"]);

    const back = toggleFacet(two, "colour", "red");
    assert.deepEqual(back.colour, ["blue"]);

    const empty = toggleFacet(back, "colour", "blue");
    assert.ok(!("colour" in empty), "an emptied group must be removed, not left as []");
  });

  it("does not mutate the selection it is given", () => {
    const original: FacetSelection = { colour: ["blue"] };
    toggleFacet(original, "colour", "red");
    assert.deepEqual(original.colour, ["blue"]);
  });
});
