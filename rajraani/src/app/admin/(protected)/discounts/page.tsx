import { DiscountsManager } from "@/components/admin/DiscountsManager";
import { PAYMENTS_LIVE } from "@/lib/admin/order-words";
import { listDiscounts } from "@/lib/discounts";

export const metadata = { title: "Discount codes" };

export default function AdminDiscountsRoute() {
  return <DiscountsManager codes={listDiscounts()} paymentsLive={PAYMENTS_LIVE} />;
}
