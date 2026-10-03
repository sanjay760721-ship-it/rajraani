import { DiscountsManager } from "@/components/admin/DiscountsManager";
import { PAYMENTS_LIVE } from "@/lib/admin/order-words";
import { listDiscounts } from "@/lib/discounts";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Discount codes" };

export default async function AdminDiscountsRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  return <DiscountsManager codes={listDiscounts()} paymentsLive={PAYMENTS_LIVE} />;
}
