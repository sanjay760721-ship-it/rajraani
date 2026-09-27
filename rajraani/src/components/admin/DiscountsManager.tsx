"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { saveDiscountAction, type DiscountInput } from "@/lib/admin/discount-actions";
import type { DiscountCode } from "@/lib/discounts";

/**
 * Discount codes, laid out like the Menu screen: a header with "+ New code",
 * then one card per code with its state in plain words and an Edit button.
 */

const rupees = (minor: number) => `₹${Math.round(minor / 100).toLocaleString("en-IN")}`;
const day = (iso: string | null) => (iso ? iso.slice(0, 10) : "");

function state(code: DiscountCode, now: Date): { label: string; tone: string } {
  if (!code.active) return { label: "Switched off", tone: "var(--a-outline)" };
  if (code.startsAt && now < new Date(code.startsAt)) return { label: `Starts ${day(code.startsAt)}`, tone: "var(--a-status-progress)" };
  if (code.endsAt && now > new Date(code.endsAt)) return { label: "Expired", tone: "var(--a-outline)" };
  if (code.maxUses !== null && code.usedCount >= code.maxUses) return { label: "Used up", tone: "var(--a-outline)" };
  return { label: "Working now", tone: "var(--a-status-done)" };
}

function toInput(code?: DiscountCode): DiscountInput {
  return code
    ? {
        code: code.code,
        kind: code.kind,
        amount: code.kind === "percent" ? code.value : code.value / 100,
        minOrderRupees: code.minOrderMinor / 100,
        startsOn: day(code.startsAt),
        endsOn: day(code.endsAt),
        maxUses: code.maxUses === null ? "" : String(code.maxUses),
        note: code.note,
        active: code.active,
      }
    : { code: "", kind: "percent", amount: 10, minOrderRupees: 0, startsOn: "", endsOn: "", maxUses: "", note: "", active: true };
}

function CodeForm({ initial, isNew, onDone }: { initial: DiscountInput; isNew: boolean; onDone: () => void }) {
  const router = useRouter();
  const [value, setValue] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const set = <K extends keyof DiscountInput>(key: K, next: DiscountInput[K]) => setValue((current) => ({ ...current, [key]: next }));

  const save = () =>
    startTransition(async () => {
      setError(null);
      const result = await saveDiscountAction(value, isNew);
      if (!result.ok) return setError(result.error);
      onDone();
      router.refresh();
    });

  const field = (label: string, input: React.ReactNode, hint?: string) => (
    <label className="block">
      <span className="a-label block" style={{ color: "var(--a-outline)" }}>{label}</span>
      {input}
      {hint ? <span className="a-label mt-1 block" style={{ color: "var(--a-outline)" }}>{hint}</span> : null}
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {field(
          "Code shoppers type",
          <input className="a-input mt-1 w-full uppercase" value={value.code} disabled={!isNew} onChange={(event) => set("code", event.target.value.toUpperCase())} placeholder="FESTIVE10" />,
          isNew ? "Letters and numbers, 3 to 20." : "The code itself cannot be changed.",
        )}
        {field(
          "Kind",
          <select className="a-select mt-1 w-full" value={value.kind} onChange={(event) => set("kind", event.target.value as DiscountInput["kind"])}>
            <option value="percent">A percentage off</option>
            <option value="amount">An amount off (₹)</option>
          </select>,
        )}
        {field(
          value.kind === "percent" ? "How much off (%)" : "How much off (₹)",
          <input className="a-input mt-1 w-full" inputMode="numeric" value={String(value.amount)} onChange={(event) => set("amount", Number(event.target.value.replace(/[^\d]/g, "")) || 0)} />,
          value.kind === "percent" ? "1 to 90." : "Whole rupees, e.g. 2000.",
        )}
        {field(
          "Minimum order (₹)",
          <input className="a-input mt-1 w-full" inputMode="numeric" value={value.minOrderRupees ? String(value.minOrderRupees) : ""} placeholder="None" onChange={(event) => set("minOrderRupees", Number(event.target.value.replace(/[^\d]/g, "")) || 0)} />,
          "Leave empty for any order.",
        )}
        {field("Starts on", <input type="date" className="a-input mt-1 w-full" value={value.startsOn} onChange={(event) => set("startsOn", event.target.value)} />, "Leave empty to start now.")}
        {field("Ends on", <input type="date" className="a-input mt-1 w-full" value={value.endsOn} onChange={(event) => set("endsOn", event.target.value)} />, "Leave empty to never end.")}
        {field("Limit on uses", <input className="a-input mt-1 w-full" inputMode="numeric" value={value.maxUses} placeholder="No limit" onChange={(event) => set("maxUses", event.target.value.replace(/[^\d]/g, ""))} />, "Counted when an order is paid.")}
        {field("Note (only you see this)", <input className="a-input mt-1 w-full" value={value.note} onChange={(event) => set("note", event.target.value)} placeholder="e.g. Diwali newsletter" />)}
        <label className="flex items-center gap-2 self-end pb-2">
          <input type="checkbox" checked={value.active} onChange={(event) => set("active", event.target.checked)} />
          <span className="a-body-sm">Switched on</span>
        </label>
      </div>
      {error ? <p role="alert" className="a-body-sm" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
      <div className="flex gap-3">
        <button type="button" className="a-btn-primary" disabled={pending} onClick={save}>
          {pending ? "Saving…" : isNew ? "Create the code" : "Save"}
        </button>
        <button type="button" className="a-btn-secondary" onClick={onDone}>Cancel</button>
      </div>
    </div>
  );
}

export function DiscountsManager({ codes, paymentsLive }: { codes: DiscountCode[]; paymentsLive: boolean }) {
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [now] = useState(() => new Date());

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="a-heading-lg">Discount codes</h1>
          <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
            Codes shoppers type at checkout for money off. The shop checks each code itself when the
            order is placed, so a code cannot be faked.
          </p>
        </div>
        <button type="button" className="a-btn-primary" disabled={creating} onClick={() => setCreating(true)}>
          + New code
        </button>
      </header>

      {!paymentsLive ? (
        <p className="a-body-sm px-4 py-3" style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}>
          Codes already work in the cart, but online payment is not switched on yet — so no real
          order can use one until it is.
        </p>
      ) : null}

      {creating ? (
        <section className="a-card space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
          <h2 className="a-heading-sm">New code</h2>
          <CodeForm initial={toInput()} isNew onDone={() => setCreating(false)} />
        </section>
      ) : null}

      {codes.length === 0 && !creating ? (
        <div className="a-card px-6 py-12 text-center" style={{ borderRadius: "var(--a-radius-md)" }}>
          <p className="a-heading-sm">No codes yet</p>
          <p className="a-body-md mt-2" style={{ color: "var(--a-ink-variant)" }}>Press + New code to make your first, e.g. FESTIVE10 for 10% off.</p>
        </div>
      ) : (
        <ul className="space-y-3" role="list">
          {codes.map((code) => {
            const status = state(code, now);
            return (
              <li key={code.code} className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="min-w-[12rem] flex-1">
                    <p className="a-body-lg tracking-wider">{code.code}</p>
                    <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                      {code.kind === "percent" ? `${code.value}% off` : `${rupees(code.value)} off`}
                      {code.minOrderMinor ? ` orders over ${rupees(code.minOrderMinor)}` : ""}
                      {code.endsAt ? ` · until ${day(code.endsAt)}` : ""}
                      {` · used ${code.usedCount}${code.maxUses !== null ? ` of ${code.maxUses}` : ""} time${code.usedCount === 1 && code.maxUses === null ? "" : "s"}`}
                      {code.note ? ` · ${code.note}` : ""}
                    </p>
                  </div>
                  <span className="a-label px-2 py-1" style={{ color: status.tone, border: `1px solid ${status.tone}`, borderRadius: "var(--a-radius-pill)" }}>
                    {status.label}
                  </span>
                  <button type="button" className="a-btn-secondary" onClick={() => setEditing(editing === code.code ? null : code.code)}>
                    {editing === code.code ? "Close" : "Edit"}
                  </button>
                </div>
                {editing === code.code ? (
                  <div className="mt-4 border-t pt-4" style={{ borderColor: "var(--a-outline-variant)" }}>
                    <CodeForm initial={toInput(code)} isNew={false} onDone={() => setEditing(null)} />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
