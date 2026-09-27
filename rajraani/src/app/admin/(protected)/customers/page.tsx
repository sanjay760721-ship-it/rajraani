import Link from "next/link";

import { rupees } from "@/lib/admin/format";
import { STATUS_WORDS } from "@/lib/admin/order-words";
import { listOrders } from "@/lib/admin/orders-admin";
import { db } from "@/lib/db/client";

export const metadata = { title: "Customers" };

/**
 * Everyone who has ordered, built from the orders themselves.
 *
 * There is no separate customer account in this shop (guest checkout), so a
 * customer is an email address: their orders, what they have spent, and any
 * messages they sent through the contact form. Nothing here is typed in by
 * hand, so it cannot drift from the orders.
 */

const SOLD = new Set(["paid", "dispatched", "delivered"]);
const day = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function AdminCustomersRoute() {
  const orders = listOrders();
  const messages = db()
    .prepare("SELECT LOWER(email) AS email, COUNT(*) AS n FROM enquiry GROUP BY LOWER(email)")
    .all() as unknown as { email: string; n: number }[];
  const messageCount = new Map(messages.map((row) => [row.email, row.n]));

  const byEmail = new Map<string, typeof orders>();
  for (const order of orders) {
    const key = order.email.trim().toLowerCase();
    byEmail.set(key, [...(byEmail.get(key) ?? []), order]);
  }
  const customers = [...byEmail.entries()]
    .map(([email, theirs]) => {
      const sold = theirs.filter((order) => SOLD.has(order.status));
      return {
        email,
        name: theirs[0]!.name,
        phone: theirs[0]!.phone,
        city: theirs[0]!.address.split("\n").at(-1) ?? "",
        orders: theirs,
        spentMinor: sold.reduce((sum, order) => sum + order.totalMinor, 0),
        paidOrders: sold.length,
        last: theirs[0]!.createdAt,
        messages: messageCount.get(email) ?? 0,
      };
    })
    .sort((a, b) => b.last.localeCompare(a.last));

  return (
    <div className="space-y-6">
      <header>
        <h1 className="a-heading-lg">Customers</h1>
        <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
          Everyone who has placed an order, newest first — with what they bought and how to reach
          them. Built from the orders, so it is always up to date.
        </p>
      </header>

      {customers.length === 0 ? (
        <div className="a-card px-6 py-12 text-center" style={{ borderRadius: "var(--a-radius-md)" }}>
          <p className="a-heading-sm">No customers yet</p>
          <p className="a-body-md mt-2" style={{ color: "var(--a-ink-variant)" }}>
            When someone places an order, they appear here.
          </p>
        </div>
      ) : (
        <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
          <h2 className="a-heading-sm">{customers.length} customer{customers.length === 1 ? "" : "s"}</h2>
          <ul className="mt-2 divide-y" role="list">
            {customers.map((customer) => (
              <li key={customer.email} style={{ borderColor: "var(--a-outline-variant)" }}>
                <details className="py-3">
                  <summary className="flex cursor-pointer flex-wrap items-center gap-4">
                    <span className="min-w-[12rem] flex-1">
                      <span className="a-body-md block">{customer.name}</span>
                      <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                        {customer.city} · last order {day(customer.last)}
                      </span>
                    </span>
                    <span className="a-body-sm">
                      {customer.orders.length} order{customer.orders.length === 1 ? "" : "s"}
                      {customer.messages ? ` · ${customer.messages} message${customer.messages === 1 ? "" : "s"}` : ""}
                    </span>
                    <span className="a-body-md tabular-nums">{rupees(customer.spentMinor)}</span>
                  </summary>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <div className="a-body-sm space-y-1">
                      <p><a className="underline" href={`mailto:${customer.email}`}>{customer.email}</a></p>
                      <p><a className="underline" href={`tel:${customer.phone}`}>{customer.phone}</a></p>
                      <p style={{ color: "var(--a-ink-variant)" }}>
                        Spent {rupees(customer.spentMinor)} across {customer.paidOrders} paid order{customer.paidOrders === 1 ? "" : "s"}.
                      </p>
                      {customer.messages ? <Link href="/admin/messages" className="underline">See their messages →</Link> : null}
                    </div>
                    <ul className="space-y-2">
                      {customer.orders.map((order) => (
                        <li key={order.id} className="a-body-sm">
                          <strong>Order {order.reference}</strong> · {day(order.createdAt)} · {STATUS_WORDS[order.status].label} · {rupees(order.totalMinor)}
                          <span className="block" style={{ color: "var(--a-ink-variant)" }}>
                            {order.items.map((item) => item.poeticName).join(", ")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </section>
      )}
      <p className="a-body-sm" style={{ color: "var(--a-outline)" }}>
        To send an order or add a tracking number, go to <Link href="/admin/orders" className="underline">Orders</Link>.
      </p>
    </div>
  );
}
