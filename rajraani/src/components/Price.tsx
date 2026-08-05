import type { Money } from "@/lib/domain/types";
import { formatMoney } from "@/lib/money";

/**
 * A price.
 *
 * No longer a client component: with one currency there is nothing to react to,
 * so this renders on the server and ships no JavaScript.
 *
 * There is no strikethrough, "was/now" or sale variant, and there should never
 * be one — `compare_at_price` was null across every product sampled in the
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
  return <span className={`tabular-nums ${className}`}>{formatMoney(value)}</span>;
}
