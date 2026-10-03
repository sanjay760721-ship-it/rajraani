import Link from "next/link";

import { BarList, Meter, WeeklySales } from "@/components/admin/OverviewCharts";
import { rupees } from "@/lib/admin/format";
import { PAYMENTS_LIVE } from "@/lib/admin/order-words";
import { overview } from "@/lib/admin/overview-data";

export const metadata = { title: "Reports" };


/**
 * One page for how the shop is doing.
 *
 * Every figure comes from the shop's own orders, stock and messages
 * (overview-data.ts). Visitor numbers are not collected yet, and the page says
 * so rather than showing one.
 */

function Tile({ label, value, href, note }: { label: string; value: string; href: string; note?: string }) {
  return (
    <Link href={href} className="a-card block p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      <span className="a-body-sm block" style={{ color: "var(--a-ink-variant)" }}>{label}</span>
      <span className="mt-1 block text-[28px] font-semibold leading-tight" style={{ color: "var(--a-ink)" }}>{value}</span>
      {note ? <span className="a-label mt-1 block" style={{ color: "var(--a-outline)" }}>{note}</span> : null}
    </Link>
  );
}

function Card({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="a-card p-6" style={{ borderRadius: "var(--a-radius-lg)" }}>
      <h2 className="a-heading-sm">{title}</h2>
      {note ? <p className="a-body-sm mt-1" style={{ color: "var(--a-outline)" }}>{note}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function AdminOverviewRoute() {
  const data = await overview();
  const { sales30, salesPrev30, pieces } = data;

  const change =
    salesPrev30.minor > 0 ? Math.round(((sales30.minor - salesPrev30.minor) / salesPrev30.minor) * 100) : null;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="a-heading-lg">Reports</h1>
        <p className="a-body-md mt-1" style={{ color: "var(--a-ink-variant)" }}>
          How the shop is doing, from your own orders, stock and messages.
        </p>
      </header>

      {!PAYMENTS_LIVE ? (
        <p
          className="a-body-sm px-4 py-3"
          style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}
        >
          <strong>Online payment is not switched on yet</strong>: the Razorpay keys have not been added
          on this server, so checkout is closed and sales stay at ₹0. Everything else on this page is live.
        </p>
      ) : null}

      {/* The one number the page leads with. */}
      <section className="a-card p-6" style={{ borderRadius: "var(--a-radius-lg)" }}>
        <p className="a-body-md" style={{ color: "var(--a-ink-variant)" }}>Sales in the last 30 days</p>
        <p className="mt-1 text-[56px] font-semibold leading-none" style={{ color: "var(--a-ink)" }}>
          {rupees(sales30.minor)}
        </p>
        <p className="a-body-sm mt-3" style={{ color: "var(--a-ink-variant)" }}>
          {sales30.orders} paid order{sales30.orders === 1 ? "" : "s"}
          {change !== null ? (
            <>
              {" · "}
              <span style={{ color: change >= 0 ? "var(--a-status-done)" : "var(--a-status-stopped)" }}>
                {change >= 0 ? "▲" : "▼"} {Math.abs(change)}%
              </span>{" "}
              compared with the 30 days before ({rupees(salesPrev30.minor)})
            </>
          ) : salesPrev30.orders === 0 && sales30.orders > 0 ? (
            " · the first sales"
          ) : null}
        </p>
      </section>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <Tile label="Orders to send" value={String(data.ordersToSend)} href="/admin/orders" note={data.ordersToSend ? "Paid, waiting to go out" : "All caught up"} />
        <Tile label="Pieces on the shop" value={String(pieces.live)} href="/admin/products" note={[pieces.needsPhoto ? `${pieces.needsPhoto} waiting for a photo` : "", pieces.hidden ? `${pieces.hidden} hidden` : ""].filter(Boolean).join(" · ") || undefined} />
        <Tile label="Sold out" value={String(pieces.soldOut)} href="/admin/products" note="Still on the shop, marked sold out" />
        <Tile label="Only 1 or 2 left" value={String(pieces.low)} href="/admin/products" />
        <Tile label="Messages to answer" value={String(data.enquiries.open)} href="/admin/messages" note={`${data.enquiries.last30} in the last 30 days`} />
      </div>

      <Card title="Sales per week" note="The last 12 weeks. Point at a bar for the figures.">
        <WeeklySales weeks={data.weekly} />
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card title="Best sellers" note="Pieces sold most, all time.">
          {data.bestSellers.length === 0 ? (
            <p className="a-body-sm" style={{ color: "var(--a-outline)" }}>
              Nothing sold yet. Your five best-selling pieces will be listed here.
            </p>
          ) : (
            <table className="a-table w-full">
              <thead>
                <tr>
                  <th className="text-left">Piece</th>
                  <th className="text-right">Sold</th>
                  <th className="text-right">Takings</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {data.bestSellers.map((row) => (
                  <tr key={row.handle}>
                    <td>
                      <a href={`/products/${row.handle}`} target="_blank" rel="noreferrer" className="underline">
                        {row.name}
                      </a>
                    </td>
                    <td className="text-right">{row.units}</td>
                    <td className="text-right">{rupees(row.minor)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>

        <Card title="What’s on the shop" note="Pieces showing to shoppers, by type.">
          <BarList rows={data.byType} unit={["piece", "pieces"]} />
        </Card>
      </div>

      <Card title="Getting ready for launch" note="The stand-in photos from the mock-up must all be replaced before the shop goes public.">
        <div className="grid gap-8 md:grid-cols-2">
          <Meter
            value={data.ownPhotos.withPhotos}
            total={data.ownPhotos.total}
            label={`${data.ownPhotos.withPhotos} of ${data.ownPhotos.total} pieces have your own photos`}
          />
          <div>
            <p className="text-[28px] font-semibold leading-tight">{data.standInPhotosOnPages}</p>
            <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
              stand-in photos still on the homepage and pages.{" "}
              <Link href="/admin/media" className="underline">See where</Link>
            </p>
          </div>
        </div>
      </Card>

      <Card title="Visitors" note="How many people visit, and what they look at.">
        <p className="a-body-md" style={{ color: "var(--a-ink-variant)" }}>
          Not counted yet. The shop does not collect visitor numbers until a visitor-counting tool
          is chosen and switched on — a decision for you and your developer.
        </p>
      </Card>
    </div>
  );
}
