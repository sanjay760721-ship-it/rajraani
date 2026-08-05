import { BASE_CURRENCY, type CurrencyCode, type Money } from "./domain/types.ts";

/**
 * Money.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * INDIA-ONLY, so INR is the only currency.
 *
 * This file previously carried eight currencies and a table of placeholder
 * conversion rates, because Shopify Markets was going to own conversion. With
 * Shopify dropped in favour of Razorpay, nothing in the stack has an
 * authoritative rate source — and a hardcoded rate going quietly stale is worse
 * than not offering the currency at all, because it prices real orders wrongly.
 *
 * Re-adding the other seven is contained: restore the currency list, add a
 * rates source, put the switcher back in the header. It is all in git history.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Amounts are held in minor units (paise) so arithmetic stays in integers.
 * Prices are whole rupees throughout — this category does not price in decimals
 * and does not discount, so there is no strikethrough or "was/now" to build.
 */

export function money(rupees: number, currency: CurrencyCode = BASE_CURRENCY): Money {
  return { minorUnits: Math.round(rupees * 100), currency };
}

export function toMajorUnits(value: Money): number {
  return value.minorUnits / 100;
}

/**
 * Format for display.
 *
 * Indian lakh grouping with a ₹ prefix — ₹1,78,000, not ₹178,000. `en-IN` gets
 * this right and a generic locale does not; the difference is immediately
 * visible to an Indian shopper.
 */
export function formatMoney(value: Money): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: value.currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(toMajorUnits(value));
}

export function addMoney(a: Money, b: Money): Money {
  if (a.currency !== b.currency) {
    throw new Error(`Cannot add ${a.currency} to ${b.currency}`);
  }
  return { minorUnits: a.minorUnits + b.minorUnits, currency: a.currency };
}
