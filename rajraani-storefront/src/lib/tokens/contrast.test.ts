import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

import {
  CSS_VARIABLE,
  PALETTE,
  contrastRatio,
  evaluateContrastContract,
  parseHex,
  relativeLuminance,
  type PaletteToken,
} from "./contrast.ts";

describe("contrast maths", () => {
  it("computes the reference extremes", () => {
    // The two anchors of the WCAG scale.
    assert.equal(Math.round(contrastRatio("#000000", "#ffffff")), 21);
    assert.equal(contrastRatio("#ffffff", "#ffffff"), 1);
  });

  it("is symmetric — order of arguments does not matter", () => {
    assert.equal(
      contrastRatio(PALETTE.ink, PALETTE.bg),
      contrastRatio(PALETTE.bg, PALETTE.ink),
    );
  });

  it("matches a known published value", () => {
    // #767676 on white is the canonical 4.54:1 example used in WCAG guidance.
    assert.equal(
      Math.round(contrastRatio("#767676", "#ffffff") * 100) / 100,
      4.54,
    );
  });

  it("rejects malformed hex input rather than silently scoring it", () => {
    assert.throws(() => parseHex("#fff"), /6-digit hex/);
    assert.throws(() => relativeLuminance("not-a-colour"), /6-digit hex/);
  });
});

describe("palette contrast contract (build.md §2.5)", () => {
  const results = evaluateContrastContract();

  it("covers every ink-on-surface combination", () => {
    // 3 surfaces × 7 foregrounds, plus white-on-ink for the primary button.
    assert.equal(results.length, 22);
  });

  for (const result of results) {
    const label = `${String(result.foreground)} on ${String(result.background)} — ${result.usage}`;

    it(`${label} meets ${result.minimum}:1`, () => {
      assert.ok(
        result.passes,
        `${label}\n  required ${result.minimum}:1\n  measured ${result.ratio.toFixed(2)}:1\n` +
          `  Fix the value in BOTH src/app/globals.css and src/lib/tokens/contrast.ts.`,
      );
    });
  }
});

describe("token values stay in sync with globals.css", () => {
  // The palette exists in two places by necessity: CSS cannot be imported into
  // the test runner, and the runner cannot generate Tailwind utilities. This
  // test is what stops the two copies from drifting apart.
  const cssPath = fileURLToPath(new URL("../../app/globals.css", import.meta.url));
  const css = readFileSync(cssPath, "utf8");

  for (const [token, variable] of Object.entries(CSS_VARIABLE) as [
    PaletteToken,
    string,
  ][]) {
    it(`${variable} matches PALETTE.${token}`, () => {
      const match = new RegExp(`${variable}:\\s*(#[0-9a-fA-F]{6})\\s*;`).exec(css);
      assert.ok(match, `${variable} was not found in globals.css`);
      assert.equal(
        match[1]?.toLowerCase(),
        PALETTE[token].toLowerCase(),
        `${variable} in globals.css does not match PALETTE.${token} in contrast.ts`,
      );
    });
  }
});
