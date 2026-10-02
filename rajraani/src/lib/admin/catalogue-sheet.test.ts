import assert from "node:assert/strict";
import { it } from "node:test";
import { csvField, parseCsv } from "./catalogue-sheet.ts";

it("prevents user-supplied spreadsheet formulas while preserving quoted data", () => {
  for (const input of ["=1+1", "+SUM(1,2)", "@example", "-cmd", "\t=1+1"]) {
    assert.equal(parseCsv(`${csvField(input)}\n`)[0]?.[0], `'${input}`);
  }
  assert.equal(csvField(-12), "-12");
  assert.equal(parseCsv(`${csvField('A, "B"')}\n`)[0]?.[0], 'A, "B"');
});
