"use client";

import { useCurrency } from "./currency-context";
import type { Money } from "@/lib/domain/types";
import { formatIn } from "@/lib/money";

/**
 * A price, in the shopper's chosen currency.
 *
 * There is no strikethrough, "was/now" or sale variant, and there should never
 * be one: `compare_at_price` was null across every product sampled in the
 * category (addendum A4.5). The brand does not discount, so a discount
 * component is a surface waiting to be misused.
 */
export function Price({
  value,
  className = "",
}: {
  value: Money;
  className?: string;
}) {
  const { currency } = useCurrency();
  return (
    <span className={`tabular-nums ${className}`}>{formatIn(value, currency)}</span>
  );
}
