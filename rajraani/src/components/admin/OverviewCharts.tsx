"use client";

import { useState } from "react";

import { rupees } from "@/lib/admin/format";

/**
 * The Overview's charts. One series each, so no legend: the heading names it.
 *
 * Marks follow the dataviz spec: bars at most 24px thick with a 4px rounded
 * end and a square baseline, hairline solid gridlines, text in ink tokens (never
 * the series colour), a hover tooltip on every bar, and a table view.
 */


/** ₹68,000 → "₹68K"; ₹12,40,000 → "₹12.4L" — Indian short form for axis ticks. */
function compact(minor: number): string {
  const r = minor / 100;
  if (r >= 1_00_00_000) return `₹${+(r / 1_00_00_000).toFixed(1)}Cr`;
  if (r >= 1_00_000) return `₹${+(r / 1_00_000).toFixed(1)}L`;
  if (r >= 1_000) return `₹${+(r / 1_000).toFixed(1)}K`;
  return `₹${r}`;
}

/** A clean top for the y-axis: 1, 2 or 5 × a power of ten. */
function niceMax(value: number): number {
  if (value <= 0) return 1;
  const power = 10 ** Math.floor(Math.log10(value));
  const step = [1, 2, 5, 10].find((n) => n * power >= value)!;
  return step * power;
}

export type Week = { label: string; minor: number; orders: number };

export function WeeklySales({ weeks }: { weeks: Week[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const top = niceMax(Math.max(...weeks.map((week) => week.minor)));
  const empty = weeks.every((week) => week.minor === 0);
  const ticks = [top, top / 2, 0];

  return (
    <figure className="m-0">
      <div className="relative flex h-56 gap-3">
        {/* Y axis: tabular figures, since they stack in a column. */}
        <div className="a-label flex w-14 shrink-0 flex-col justify-between text-right tabular-nums" style={{ color: "var(--a-outline)" }}>
          {ticks.map((tick) => (
            <span key={tick}>{empty ? "" : compact(tick)}</span>
          ))}
        </div>

        <div className="relative flex-1">
          {/* Recessive hairline gridlines at each tick. */}
          {ticks.map((tick) => (
            <div
              key={tick}
              aria-hidden="true"
              className="absolute inset-x-0"
              style={{ top: `${100 - (tick / top) * 100}%`, borderTop: "1px solid var(--a-surface-high)" }}
            />
          ))}

          <div className="absolute inset-0 flex items-end">
            {weeks.map((week, index) => (
              <div
                key={week.label}
                className="relative flex h-full flex-1 cursor-default items-end justify-center"
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(index)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                aria-label={`Week of ${week.label}: ${rupees(week.minor)}, ${week.orders} order${week.orders === 1 ? "" : "s"}`}
              >
                <div
                  style={{
                    width: "min(24px, 60%)",
                    height: `${(week.minor / top) * 100}%`,
                    background: "var(--a-chart)",
                    borderRadius: "4px 4px 0 0",
                    opacity: hover === null || hover === index ? 1 : 0.55,
                  }}
                />
                {hover === index ? (
                  <div
                    role="tooltip"
                    className="a-body-sm pointer-events-none absolute bottom-full z-10 mb-2 whitespace-nowrap px-3 py-2"
                    style={{ background: "var(--a-ink)", color: "var(--a-surface-lowest)", borderRadius: "var(--a-radius)" }}
                  >
                    Week of {week.label}
                    <br />
                    <strong>{rupees(week.minor)}</strong> · {week.orders} order{week.orders === 1 ? "" : "s"}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {empty ? (
            <p className="a-body-sm absolute inset-0 flex items-center justify-center text-center" style={{ color: "var(--a-outline)" }}>
              No sales yet. Each paid order will appear here in its week.
            </p>
          ) : null}
        </div>
      </div>

      {/* Baseline and week labels, every other one to avoid crowding. */}
      <div className="ml-[4.25rem] flex border-t pt-2" style={{ borderColor: "var(--a-outline-variant)" }}>
        {weeks.map((week, index) => (
          <span key={week.label} className="a-label flex-1 text-center" style={{ color: "var(--a-outline)" }}>
            {index % 2 === 1 ? week.label : ""}
          </span>
        ))}
      </div>

      <details className="mt-3">
        <summary className="a-label cursor-pointer" style={{ color: "var(--a-outline)" }}>
          Show as a table
        </summary>
        <table className="a-table mt-2 w-full">
          <thead>
            <tr>
              <th className="text-left">Week of</th>
              <th className="text-right">Sales</th>
              <th className="text-right">Orders</th>
            </tr>
          </thead>
          <tbody className="tabular-nums">
            {weeks.map((week) => (
              <tr key={week.label}>
                <td>{week.label}</td>
                <td className="text-right">{rupees(week.minor)}</td>
                <td className="text-right">{week.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

/** Horizontal bars, value at the tip. Few enough rows to label them all. */
export function BarList({ rows, unit }: { rows: { name: string; count: number }[]; unit: [string, string] }) {
  const [hover, setHover] = useState<string | null>(null);
  const top = Math.max(1, ...rows.map((row) => row.count));

  if (rows.length === 0) {
    return <p className="a-body-sm" style={{ color: "var(--a-outline)" }}>Nothing on the shop yet.</p>;
  }

  return (
    <ul className="space-y-3" role="list">
      {rows.map((row) => (
        <li
          key={row.name}
          className="relative grid grid-cols-[8rem_1fr] items-center gap-3"
          onMouseEnter={() => setHover(row.name)}
          onMouseLeave={() => setHover(null)}
        >
          <span className="a-body-sm truncate">{row.name}</span>
          <span className="flex items-center gap-2">
            <span
              style={{
                width: `${(row.count / top) * 85}%`,
                minWidth: 4,
                height: 20,
                background: "var(--a-chart)",
                borderRadius: "0 4px 4px 0",
                opacity: hover === null || hover === row.name ? 1 : 0.55,
              }}
            />
            <span className="a-body-sm tabular-nums">{row.count}</span>
          </span>
          {hover === row.name ? (
            <span
              role="tooltip"
              className="a-body-sm pointer-events-none absolute right-0 bottom-full z-10 whitespace-nowrap px-3 py-2"
              style={{ background: "var(--a-ink)", color: "var(--a-surface-lowest)", borderRadius: "var(--a-radius)" }}
            >
              {row.name}: {row.count} {row.count === 1 ? unit[0] : unit[1]} on the shop
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/** Progress toward a whole, on a lighter step of the same hue. */
export function Meter({ value, total, label }: { value: number; total: number; label: string }) {
  const share = total ? value / total : 0;
  return (
    <div>
      <div
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={label}
        className="h-3 w-full overflow-hidden"
        style={{ background: "var(--a-chart-track)", borderRadius: "var(--a-radius-pill)" }}
      >
        <div style={{ width: `${share * 100}%`, height: "100%", background: "var(--a-chart)", borderRadius: "var(--a-radius-pill)" }} />
      </div>
      <p className="a-body-sm mt-2" style={{ color: "var(--a-ink-variant)" }}>
        {label}
      </p>
    </div>
  );
}
