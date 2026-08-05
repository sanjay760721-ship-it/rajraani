import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { buildFacetHref, buildFacetQuery, parseFacetUrlState } from "./url.ts";
import type { FacetSelection } from "./engine.ts";

describe("URL round-trip", () => {
  it("survives a round trip unchanged", () => {
    const selection: FacetSelection = {
      colour: ["blue", "red"],
      weave: ["kadhua"],
    };
    const query = buildFacetQuery({ selection, sort: "price-asc", page: 3 });
    const parsed = parseFacetUrlState(new URLSearchParams(query));

    assert.deepEqual(parsed.selection, selection);
    assert.equal(parsed.sort, "price-asc");
    assert.equal(parsed.page, 3);
  });

  it("is canonical — click order does not change the URL", () => {
    // Without this, one result set has dozens of URLs and every one of them is
    // a duplicate for a crawler.
    const a = buildFacetQuery({ selection: { colour: ["red", "blue"] } });
    const b = buildFacetQuery({ selection: { colour: ["blue", "red"] } });
    assert.equal(a, b);
  });

  it("emits groups in a fixed order regardless of insertion order", () => {
    const a = buildFacetQuery({ selection: { weave: ["kadhua"], colour: ["red"] } });
    const b = buildFacetQuery({ selection: { colour: ["red"], weave: ["kadhua"] } });
    assert.equal(a, b);
  });

  it("omits defaults so the unfiltered collection has exactly one URL", () => {
    assert.equal(buildFacetQuery({ sort: "featured", page: 1 }), "");
    assert.equal(buildFacetHref("/collections/sarees", {}), "/collections/sarees");
  });

  it("uses one grammar — query params for facets, sort and pagination alike", () => {
    const href = buildFacetHref("/collections/sarees", {
      selection: { colour: ["blue"] },
      page: 2,
    });
    assert.equal(href, "/collections/sarees?colour=blue&page=2");
    assert.ok(!href.includes("/blue"), "facets must not leak into path segments");
  });
});

describe("parsing untrusted input", () => {
  it("accepts a plain searchParams object as well as URLSearchParams", () => {
    const fromObject = parseFacetUrlState({ colour: "blue,red" });
    const fromParams = parseFacetUrlState(new URLSearchParams("colour=blue,red"));
    assert.deepEqual(fromObject.selection, fromParams.selection);
  });

  it("takes the first value when a param is repeated", () => {
    const state = parseFacetUrlState({ colour: ["blue", "red"] });
    assert.deepEqual(state.selection.colour, ["blue"]);
  });

  it("falls back to defaults for a nonsense sort or page", () => {
    const state = parseFacetUrlState({ sort: "by-vibes", page: "-4" });
    assert.equal(state.sort, "featured");
    assert.equal(state.page, 1);
  });

  it("ignores unknown params and empty values", () => {
    const state = parseFacetUrlState({ colour: "", utm_source: "newsletter" });
    assert.deepEqual(state.selection, {});
  });

  it("deduplicates repeated values within a group", () => {
    const state = parseFacetUrlState({ colour: "blue,blue,red" });
    assert.deepEqual(state.selection.colour, ["blue", "red"]);
  });

  it("keeps unknown facet values so a stale URL shows a removable chip", () => {
    const state = parseFacetUrlState({ colour: "chartreuse" });
    assert.deepEqual(state.selection.colour, ["chartreuse"]);
  });
});
