import { DEFAULT_CURRENCY, type Currency } from './brand';

/**
 * Price formatting across 8 markets.
 *
 * INR uses the Indian grouping system (lakh/crore): 1,49,500 — not 149,500.
 * `en-IN` gets this right in every modern runtime, so the rule is: never
 * hand-roll grouping, always pick the right locale for the currency.
 *
 * Zero-decimal currencies (JPY) must not show ".00". Intl handles this from the
 * currency code alone, which is why the currency is passed rather than assumed.
 */
const LOCALE_FOR: Record<Currency, string> = {
  INR: 'en-IN',
  USD: 'en-US',
  CAD: 'en-CA',
  GBP: 'en-GB',
  AUD: 'en-AU',
  EUR: 'en-IE',
  JPY: 'ja-JP',
  SGD: 'en-SG',
};

export interface Money {
  /** Decimal string as returned by the Shopify Storefront API, e.g. "49500.00". */
  amount: string;
  currencyCode: Currency;
}

export function formatMoney(money: Money, opts: { showCents?: boolean } = {}): string {
  const { amount, currencyCode } = money;
  const value = Number(amount);
  if (!Number.isFinite(value)) throw new Error(`Unformattable amount: ${amount}`);

  const locale = LOCALE_FOR[currencyCode] ?? LOCALE_FOR[DEFAULT_CURRENCY];
  const isWhole = Number.isInteger(value);
  const showCents = opts.showCents ?? !isWhole;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: showCents ? undefined : 0,
    maximumFractionDigits: showCents ? undefined : 0,
  }).format(value);
}
