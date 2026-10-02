import assert from "node:assert/strict";
import { it } from "node:test";
import { createRateLimit } from "./rate-limit.ts";

it("limits repeated requests, keeps independent keys, and permits retry after expiry", () => {
  const permit = createRateLimit(2, 1000);
  assert.equal(permit("a", 100), true);
  assert.equal(permit("a", 200), true);
  assert.equal(permit("a", 300), false);
  assert.equal(permit("b", 300), true);
  assert.equal(permit("a", 1100), true);
});

it("bounds memory without evicting active limits and frees expired keys", () => {
  const permit = createRateLimit(1, 1000, 2);
  assert.equal(permit("a", 100), true);
  assert.equal(permit("b", 100), true);
  assert.equal(permit("c", 100), false);
  assert.equal(permit("a", 200), false);
  assert.equal(permit("c", 62000), true);
});
