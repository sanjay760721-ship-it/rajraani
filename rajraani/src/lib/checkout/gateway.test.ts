import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { describe, it } from "node:test";
import { validSignature, isCapturedPayment } from "./gateway.ts";

describe("payment trust boundary", () => {
  const secret = "test-secret-not-a-live-key";
  const payload = "order_123|pay_456";
  const signed = createHmac("sha256", secret).update(payload).digest("hex");
  it("accepts an authentic signature and rejects a changed order, payment, key, or signature", () => {
    assert.equal(validSignature(payload, signed, secret), true);
    for (const changed of ["order_other|pay_456", "order_123|pay_other"]) assert.equal(validSignature(changed, signed, secret), false);
    assert.equal(validSignature(payload, signed, "wrong-key"), false);
    assert.equal(validSignature(payload, "0".repeat(64), secret), false);
    assert.equal(validSignature(payload, "", secret), false);
    assert.equal(validSignature(payload, signed, ""), false);
  });
  it("does not accept authorized-only, refunded, foreign-currency or mismatched payments", () => {
    const payment = { order_id: "order_123", status: "captured", amount: 125000, currency: "INR" };
    assert.equal(isCapturedPayment(payment, "order_123"), true);
    for (const changed of [
      { status: "authorized" }, { status: "refunded" }, { currency: "USD" },
      { order_id: "order_other" }, { amount: -1 }, { amount: 0 }, { amount: "125000" }, { amount: 1.5 },
    ]) assert.equal(isCapturedPayment({ ...payment, ...changed }, "order_123"), false);
    assert.equal(isCapturedPayment(null, "order_123"), false);
  });
});
