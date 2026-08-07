import { BASE_CURRENCY, type CurrencyCode, type Money, DISPLAY_RATES } from "./domain/types.ts";

/**
 * Money.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * INDIA-ONLY checkout (Razorpay INR), but 8 display currencies per design.md §7.
 * Conversion rates are static placeholders — real rates need a live API source.
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

/** Convert Money from base currency (INR) to target display currency. */
export function convertMoney(value: Money, targetCurrency: CurrencyCode): Money {
  if (value.currency === targetCurrency) return value;
  const fromRate = DISPLAY_RATES[value.currency] ?? 1;
  const toRate = DISPLAY_RATES[targetCurrency] ?? 1;
  const baseMinorUnits = Math.round(value.minorUnits / fromRate);
  return { minorUnits: Math.round(baseMinorUnits * toRate), currency: targetCurrency };
}

/**
 * Format for display.
 *
 * Indian lakh grouping with a ₹ prefix — ₹1,78,000, not ₹178,000. `en-IN` gets
 * this right and a generic locale does not; the difference is immediately
 * visible to an Indian shopper.
 */
export function formatMoney(value: Money): string {
  const localeMap: Record<CurrencyCode, string> = {
    INR: "en-IN",
    USD: "en-US",
    CAD: "en-CA",
    GBP: "en-GB",
    AUD: "en-AU",
    EUR: "de-DE",
    JPY: "ja-JP",
    SGD: "en-SG",
  };

  return new Intl.NumberFormat(localeMap[value.currency] ?? "en-IN", {
    style: "currency",
    currency: value.currency,
    maximumFractionDigits: value.currency === "JPY" ? 0 : 2,
    minimumFractionDigits: value.currency === "JPY" ? 0 : 0,
  }).format(toMajorUnits(value));
}

export function addMoney(a: Money, b: Money): Money {
  if (a.currency !== b.currency) {
    throw new Error(`Cannot add ${a.currency} to ${b.currency}`);
  }
  return { minorUnits: a.minorUnits + b.minorUnits, currency: a.currency };
}