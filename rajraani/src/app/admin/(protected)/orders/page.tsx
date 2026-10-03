import { OrdersBoard } from "@/components/admin/OrdersBoard";
import { PAYMENTS_LIVE } from "@/lib/admin/order-words";
import { listOrders } from "@/lib/admin/orders-admin";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Orders" };

/** Real orders only. This replaced a mock-up full of invented customers and revenue. */

export default async function AdminOrdersRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  return <OrdersBoard orders={listOrders()} paymentsLive={PAYMENTS_LIVE} />;
}
