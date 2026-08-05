import {
  BASE_CURRENCY,
  type CurrencyCode,
  type Money,
} from "./domain/types.ts";

/**
 * Price formatting and currency conversion.
 *
 * Indian lakh grouping with a ₹ prefix is the base presentation (₹1,78,000 —
 * not ₹178,000), which `Intl` gives correctly for the en-IN locale.
 */

/**
 * PLACEHOLDER RATES, relative to the base currency.
 *
 * In production these come from Shopify Markets, which owns conversion,
 * rounding rules and per-market price adjustments. They exist here only so the
 * currency switcher is demonstrably wired end to end against mock data.
 */
const PLACEHOLDER_RATES: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.012,
  CAD: 0.016,
  GBP: 0.0094,
  AUD: 0.018,
  EUR: 0.011,
  JPY: 1.79,
  SGD: 0.016,
};

/** Currencies conventionally written without minor units. */
const ZERO_DECIMAL: ReadonlySet<CurrencyCode> = new Set<CurrencyCode>(["JPY"]);

export function money(majorUnits: number, currency: CurrencyCode = BASE_CURRENCY): Money {
  const factor = ZERO_DECIMAL.has(currency) ? 1 : 100;
  return { minorUnits: Math.round(majorUnits * factor), currency };
}

export function toMajorUnits(value: Money): number {
  return ZERO_DECIMAL.has(value.currency)
    ? value.minorUnits
    : value.minorUnits / 100;
}

export function convert(value: Money, target: CurrencyCode): Money {
  if (value.currency === target) return value;
  if (value.currency !== BASE_CURRENCY) {
    throw new Error(
      `Conversion is only defined from the base currency (${BASE_CURRENCY}), received ${value.currency}`,
    );
  }
  const rate = PLACEHOLDER_RATES[target];
  return money(toMajorUnits(value) * rate, target);
}

/**
 * Format for display.
 *
 * Prices are whole units throughout — this category does not price in decimals
 * and does not discount, so there is no strikethrough or "was/now" variant to
 * build (addendum A4.5).
 */
export function formatMoney(value: Money): string {
  const locale = value.currency === "INR" ? "en-IN" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: value.currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(toMajorUnits(value));
}

export function formatIn(value: Money, currency: CurrencyCode): string {
  return formatMoney(convert(value, currency));
}
