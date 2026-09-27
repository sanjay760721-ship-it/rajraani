import { OrdersBoard } from "@/components/admin/OrdersBoard";
import { PAYMENTS_LIVE } from "@/lib/admin/order-words";
import { listOrders } from "@/lib/admin/orders-admin";

export const metadata = { title: "Orders" };

/** Real orders only. This replaced a mock-up full of invented customers and revenue. */

export default function AdminOrdersRoute() {
  return <OrdersBoard orders={listOrders()} paymentsLive={PAYMENTS_LIVE} />;
}
