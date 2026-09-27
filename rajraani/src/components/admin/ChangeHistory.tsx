"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { putBackAction } from "@/lib/admin/history-actions";
import type { Change } from "@/lib/admin/history";

/**
 * Recent changes — who changed what, and a Put back button.
 *
 * Laid out like the Menu screen: a header, then titled cards, one per day.
 * Putting back a change that has later changes to the same thing warns first,
 * because it undoes those too.
 */

function when(iso: string) {
  return new Date(iso).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
}

function dayLabel(iso: string) {
  const day = new Date(iso);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const same = (a: Date, b: Date) => a.toDateString() === b.toDateString();
  if (same(day, today)) return "Today";
  if (same(day, yesterday)) return "Yesterday";
  return day.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
}

function Row({ change }: { change: Change }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  const putBack = () => {
    const later = change.laterOnSameTarget;
    const question = later
      ? `Put “${change.label}” back as it was before this change? This also undoes the ${later} later change${later === 1 ? "" : "s"} to it.`
      : `Put “${change.label}” back as it was before this change?`;
    if (!confirm(question)) return;
    startTransition(async () => {
      setError(null);
      const result = await putBackAction(change.id);
      if (!result.ok) return setError(result.error);
      setDone(true);
      router.refresh();
    });
  };

  return (
    <li className="flex flex-wrap items-start gap-4 py-4" style={{ borderColor: "var(--a-outline-variant)" }}>
      <span className="a-label w-16 shrink-0 pt-1 tabular-nums" style={{ color: "var(--a-outline)" }}>
        {when(change.createdAt)}
      </span>
      <div className="min-w-0 flex-1">
        <p className="a-body-md" style={{ color: "var(--a-ink)" }}>{change.label}</p>
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>{change.summary}</p>
        <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>by {change.who}</p>
        {error ? <p role="alert" className="a-body-sm mt-1" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
      </div>
      {change.restorable ? (
        <button type="button" className="a-btn-secondary shrink-0" disabled={pending || done} onClick={putBack}>
          {done ? "✓ Put back" : pending ? "Putting back…" : "Put back"}
        </button>
      ) : (
        <span className="a-label shrink-0 pt-2" style={{ color: "var(--a-outline)" }}>Can’t be put back</span>
      )}
    </li>
  );
}

export function ChangeHistory({ changes }: { changes: Change[] }) {
  const days = new Map<string, Change[]>();
  for (const change of changes) {
    const label = dayLabel(change.createdAt);
    days.set(label, [...(days.get(label) ?? []), change]);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="a-heading-lg">Recent changes</h1>
        <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
          Everything changed in the admin, newest first. Made a mistake? Press <strong>Put back</strong>
          {" "}and that thing goes back to how it was — and putting back is itself listed here, so it can
          be undone too.
        </p>
      </header>

      {changes.length === 0 ? (
        <div className="a-card px-6 py-12 text-center" style={{ borderRadius: "var(--a-radius-md)" }}>
          <p className="a-heading-sm">No changes yet</p>
          <p className="a-body-md mt-2" style={{ color: "var(--a-ink-variant)" }}>
            Every save in the admin will be listed here, with a way to put it back.
          </p>
        </div>
      ) : (
        [...days.entries()].map(([day, items]) => (
          <section key={day} className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
            <h2 className="a-heading-sm">{day}</h2>
            <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
              {items.length} change{items.length === 1 ? "" : "s"}
            </p>
            <ul className="mt-2 divide-y" role="list">
              {items.map((change) => (
                <Row key={change.id} change={change} />
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
