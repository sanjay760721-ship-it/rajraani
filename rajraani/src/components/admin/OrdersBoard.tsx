"use client";

import { useState, useTransition } from "react";

import { markDeliveredAction, markSentAction, saveOrderNoteAction } from "@/lib/admin/order-actions";
import type { AdminOrder } from "@/lib/admin/orders-admin";
import { STATUS_WORDS, type OrderStatus } from "@/lib/admin/order-words";

/**
 * Orders, for someone who packs parcels.
 *
 * Tabs by what needs doing ("To send" first), not by database state. Each
 * order opens to show who, where, what, and one obvious next step.
 */

const rupees = (minor: number) => `₹${(minor / 100).toLocaleString("en-IN")}`;
const when = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });

const TABS: { id: string; label: string; statuses: OrderStatus[] }[] = [
  { id: "send", label: "To send", statuses: ["paid"] },
  { id: "sent", label: "Sent", statuses: ["dispatched"] },
  { id: "done", label: "Delivered", statuses: ["delivered"] },
  { id: "unpaid", label: "Not paid", statuses: ["pending", "failed"] },
  { id: "other", label: "Cancelled / refunded", statuses: ["cancelled", "refunded"] },
  { id: "all", label: "All", statuses: ["pending", "paid", "failed", "cancelled", "dispatched", "delivered", "refunded"] },
];

const TONE = {
  wait: "var(--a-status-waiting)",
  act: "var(--a-status-progress)",
  done: "var(--a-status-done)",
  stop: "var(--a-status-stopped)",
};

function StatusPill({ status }: { status: OrderStatus }) {
  const words = STATUS_WORDS[status];
  return (
    <span
      className="a-label inline-block px-2 py-1"
      style={{ color: TONE[words.tone], border: `1px solid ${TONE[words.tone]}`, borderRadius: "var(--a-radius-pill)" }}
    >
      {words.label}
    </span>
  );
}

function OrderDetail({ order }: { order: AdminOrder }) {
  const [tracking, setTracking] = useState(order.tracking ?? "");
  const [notes, setNotes] = useState(order.notes ?? "");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const run = (action: () => Promise<{ ok: boolean; error?: string }>) =>
    startTransition(async () => {
      setError(null);
      const result = await action();
      if (!result.ok) setError(result.error ?? "That did not work.");
    });

  return (
    <div className="grid gap-6 border-t px-5 py-5 md:grid-cols-3" style={{ borderColor: "var(--a-outline-variant)" }}>
      <div>
        <p className="a-label" style={{ color: "var(--a-outline)" }}>Customer</p>
        <p className="a-body-md mt-1">{order.name}</p>
        <p className="a-body-sm"><a className="underline" href={`tel:${order.phone}`}>{order.phone}</a></p>
        <p className="a-body-sm"><a className="underline" href={`mailto:${order.email}`}>{order.email}</a></p>
        <p className="a-label mt-4" style={{ color: "var(--a-outline)" }}>Send to</p>
        <p className="a-body-sm mt-1 whitespace-pre-line">{order.address}</p>
      </div>

      <div>
        <p className="a-label" style={{ color: "var(--a-outline)" }}>What they bought</p>
        <ul className="mt-1 space-y-1">
          {order.items.map((item) => (
            <li key={item.handle} className="a-body-sm">
              <a href={`/products/${item.handle}`} target="_blank" rel="noreferrer" className="underline">
                {item.poeticName}
              </a>{" "}
              {item.quantity > 1 ? `× ${item.quantity} ` : ""}— {rupees(item.lineTotalMinor)}
            </li>
          ))}
        </ul>
        {order.discountMinor ? (
          <p className="a-body-sm mt-2">Discount ({order.discountCode}): −{rupees(order.discountMinor)}</p>
        ) : null}
        <p className="a-body-sm mt-2">Delivery: {order.shippingMinor ? rupees(order.shippingMinor) : "free"}</p>
        <p className="a-body-md mt-1"><strong>Total: {rupees(order.totalMinor)}</strong></p>
      </div>

      <div className="space-y-4">
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>{STATUS_WORDS[order.status].hint}</p>

        {order.status === "paid" ? (
          <div>
            <label className="a-label block" style={{ color: "var(--a-outline)" }}>
              Courier tracking number (optional)
              <input className="a-input mt-1 w-full" value={tracking} onChange={(event) => setTracking(event.target.value)} />
            </label>
            <button type="button" className="a-btn-primary mt-3" disabled={pending} onClick={() => run(() => markSentAction(order.id, tracking))}>
              {pending ? "Saving…" : "Mark as sent"}
            </button>
          </div>
        ) : null}

        {order.status === "dispatched" ? (
          <div>
            {order.tracking ? <p className="a-body-sm">Tracking: {order.tracking}</p> : null}
            <button type="button" className="a-btn-primary mt-3" disabled={pending} onClick={() => run(() => markDeliveredAction(order.id))}>
              {pending ? "Saving…" : "Mark as delivered"}
            </button>
          </div>
        ) : null}

        <label className="a-label block" style={{ color: "var(--a-outline)" }}>
          Your notes (only you see these)
          <textarea
            className="a-input mt-1 w-full"
            rows={2}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            onBlur={() => {
              if (notes !== (order.notes ?? "")) run(() => saveOrderNoteAction(order.id, notes));
            }}
          />
        </label>

        {error ? <p role="alert" className="a-body-sm" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
      </div>
    </div>
  );
}

export function OrdersBoard({ orders, paymentsLive }: { orders: AdminOrder[]; paymentsLive: boolean }) {
  const toSend = orders.filter((order) => order.status === "paid").length;
  const [tab, setTab] = useState(toSend > 0 || orders.length === 0 ? "send" : "all");
  const [openId, setOpenId] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const statuses = TABS.find((entry) => entry.id === tab)!.statuses;
  const q = query.trim().toLowerCase();
  const shown = orders.filter(
    (order) =>
      statuses.includes(order.status) &&
      (!q || `${order.reference} ${order.name} ${order.phone} ${order.email}`.toLowerCase().includes(q)),
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="a-heading-lg">Orders</h1>
        <p className="a-body-md mt-1" style={{ color: "var(--a-ink-variant)" }}>
          {toSend > 0
            ? `${toSend} order${toSend === 1 ? "" : "s"} paid and waiting to be sent.`
            : "Nothing waiting to be sent."}
        </p>
      </header>

      {!paymentsLive ? (
        <p
          className="a-body-sm px-4 py-3"
          style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}
        >
          <strong>Online payment is not switched on yet.</strong> Until it is, any order here is a
          test and no money was taken. Do not send anything for these.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        {TABS.map((entry) => {
          const count = orders.filter((order) => entry.statuses.includes(order.status)).length;
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={tab === entry.id}
              className={tab === entry.id ? "a-btn-primary" : "a-btn-secondary"}
              onClick={() => setTab(entry.id)}
            >
              {entry.label} ({count})
            </button>
          );
        })}
        <input
          type="search"
          className="a-input ml-auto w-64"
          placeholder="Find by name, phone or order no."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {orders.length === 0 ? (
        <div className="a-card px-6 py-16 text-center" style={{ borderRadius: "var(--a-radius-lg)" }}>
          <p className="a-heading-sm">No orders yet</p>
          <p className="a-body-md mt-2" style={{ color: "var(--a-ink-variant)" }}>
            When someone buys from the shop, their order appears here.
          </p>
        </div>
      ) : shown.length === 0 ? (
        <p className="a-body-md py-8 text-center" style={{ color: "var(--a-outline)" }}>
          Nothing here.
        </p>
      ) : (
        <ul className="space-y-3" role="list">
          {shown.map((order) => (
            <li key={order.id} className="a-card overflow-hidden" style={{ borderRadius: "var(--a-radius-md)" }}>
              <button
                type="button"
                className="flex w-full flex-wrap items-center gap-4 px-5 py-4 text-left"
                aria-expanded={openId === order.id}
                onClick={() => setOpenId(openId === order.id ? null : order.id)}
              >
                <span className="min-w-0 flex-1">
                  <span className="a-body-md block">{order.name}</span>
                  <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                    Order {order.reference} · {when(order.createdAt)} ·{" "}
                    {order.items.map((item) => item.poeticName).join(", ")}
                  </span>
                </span>
                <span className="a-body-md">{rupees(order.totalMinor)}</span>
                <StatusPill status={order.status} />
              </button>
              {openId === order.id ? <OrderDetail order={order} /> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
