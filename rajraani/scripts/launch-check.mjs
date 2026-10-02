import { existsSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd(), false, { info() {}, error() {} });
let failed = false;
function check(name, ok) {
  console.log(`${ok ? "PASS" : "ACTION NEEDED"}: ${name}`);
  if (!ok) failed = true;
}
check("Live Razorpay key ID configured", /^rzp_live_/.test(process.env.RAZORPAY_KEY_ID ?? ""));
check("Razorpay key secret configured", Boolean(process.env.RAZORPAY_KEY_SECRET?.trim()));
check("Webhook secret configured", Boolean(process.env.RAZORPAY_WEBHOOK_SECRET?.trim()));
const databasePath = process.env.DATABASE_PATH || path.join(process.cwd(), "data", "rajraani.db");
check("Database exists", existsSync(databasePath));
if (existsSync(databasePath)) {
  const database = new DatabaseSync(databasePath, { readOnly: true });
  try {
    check("Database integrity", database.prepare("PRAGMA quick_check").get().quick_check === "ok");
    check("At least one real admin account exists", database.prepare("SELECT COUNT(*) AS count FROM admin_user").get().count > 0);
    const row = database.prepare("SELECT value_json FROM setting WHERE key = 'site.text'").get();
    const text = row ? JSON.parse(row.value_json) : {};
    check("Real support email saved in Admin → Text", typeof text["contact.email"] === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text["contact.email"]) && !text["contact.email"].endsWith(".invalid"));
    check("Real support phone saved in Admin → Text", typeof text["contact.phone"] === "string" && text["contact.phone"].replace(/\D/g, "").length >= 10 && !/00000/.test(text["contact.phone"]));
  } finally { database.close(); }
}
console.log("Manual checks still required: HTTPS, persistent disk, backup restore, test payment/refund, webhook retries, mobile checkout, and real support details in brand.ts/seeded pages.");
process.exitCode = failed ? 1 : 0;
