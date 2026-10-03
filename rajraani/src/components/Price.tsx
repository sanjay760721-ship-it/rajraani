"use client";

import { useCurrency } from "@/components/currency-context";
import type { Money } from "@/lib/domain/types";
import { convertMoney, formatMoney } from "@/lib/money";

/**
 * A price, in the currency the shopper picked in the header.
 *
 * Checkout is always in rupees (Razorpay, India only), so any other currency
 * is a guide: shown with "≈" and a note, from the fixed display rates in
 * domain/types.ts. The server renders rupees and the browser switches after
 * loading (the currency store's server value is rupees, so nothing mismatches).
 * This was a server component showing rupees only, so the header's currency
 * picker saved a choice and changed nothing.
 *
 * There is no strikethrough, "was/now" or sale variant, and there should never
 * be one — the brand does not discount.
 */
export function Price({
  value,
  className = "",
}: {
  value: Money;
  className?: string;
}) {
  const { currency } = useCurrency();
  if (currency === value.currency) {
    return <span className={`tabular-nums ${className}`}>{formatMoney(value)}</span>;
  }
  return (
    <span className={`tabular-nums ${className}`} title={`About ${formatMoney(convertMoney(value, currency))}. You pay ${formatMoney(value)} in rupees at checkout.`}>
      ≈ {formatMoney(convertMoney(value, currency))}
    </span>
  );
}
