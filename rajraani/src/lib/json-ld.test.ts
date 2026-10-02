import assert from "node:assert/strict";
import { it } from "node:test";
import { serializeJsonLd } from "./json-ld.ts";

it("keeps catalogue text as JSON without allowing it to close the script element", () => {
  const value = { name: '</script><script>alert("injected")</script>' };
  const serialized = serializeJsonLd(value);
  assert.equal(serialized.includes("<"), false);
  assert.deepEqual(JSON.parse(serialized), value);
});
