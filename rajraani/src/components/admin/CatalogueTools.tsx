"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";

import { applySheetAction, duplicateProductAction, previewSheetAction, setPriceAction } from "@/lib/admin/catalogue-actions";
import type { SheetPreview } from "@/lib/admin/catalogue-sheet";

/**
 * Small tools for the Products screen: a price you can change in place, a
 * Duplicate button, and the spreadsheet download/upload with a preview.
 */

/** "₹68,000" that turns into a box when clicked. Enter saves, Escape cancels. */
export function InlinePrice({ id, minor }: { id: number; minor: number }) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(String(minor / 100));
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const save = () => {
    const rupees = Number(value.replace(/[₹,\s]/g, ""));
    if (rupees * 100 === minor) return setEditing(false);
    startTransition(async () => {
      const result = await setPriceAction(id, rupees);
      if (!result.ok) return setError(result.error);
      setError(null);
      setEditing(false);
      router.refresh();
    });
  };

  if (!editing) {
    return (
      <button
        type="button"
        className="underline decoration-dotted underline-offset-4"
        title="Click to change the price"
        onClick={() => {
          setValue(String(minor / 100));
          setEditing(true);
        }}
      >
        ₹{(minor / 100).toLocaleString("en-IN")}
      </button>
    );
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      ₹
      <input
        autoFocus
        inputMode="numeric"
        className="a-input w-28"
        style={{ padding: "4px 8px" }}
        value={value}
        disabled={pending}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") save();
          if (event.key === "Escape") setEditing(false);
        }}
        aria-label="New price in rupees"
      />
      <button type="button" className="a-label underline" onClick={save} disabled={pending}>
        {pending ? "Saving…" : "Save"}
      </button>
      <button type="button" className="a-label underline" onClick={() => setEditing(false)}>
        Cancel
      </button>
      {error ? <span style={{ color: "var(--a-negative)" }}>{error}</span> : null}
    </span>
  );
}

export function DuplicateButton({ id, name }: { id: number; name: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      className="a-btn-ghost"
      disabled={pending}
      title="Make a copy of this piece to start a similar one"
      onClick={() => {
        if (!confirm(`Make a copy of ${name}? The copy starts hidden, with no photos, so you can change it first.`)) return;
        startTransition(async () => {
          const result = await duplicateProductAction(id);
          if (!result.ok) return alert(result.error);
          router.push(`/admin/products/${result.id}?saved=1`);
        });
      }}
    >
      {pending ? "Copying…" : "Duplicate"}
    </button>
  );
}

/** Download the catalogue, or upload it back with a preview first. */
export function SpreadsheetPanel() {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [csv, setCsv] = useState<string | null>(null);
  const [preview, setPreview] = useState<SheetPreview | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  const read = async (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const text = await file.text();
    setCsv(text);
    setMessage(null);
    startTransition(async () => setPreview(await previewSheetAction(text)));
    if (input.current) input.current.value = "";
  };

  const apply = () =>
    startTransition(async () => {
      if (!csv) return;
      const result = await applySheetAction(csv);
      if (!result.ok) return setMessage({ ok: false, text: result.error });
      setMessage({ ok: true, text: `${result.applied} piece${result.applied === 1 ? "" : "s"} updated. Each one is in Recent changes, where it can be put back.` });
      setPreview(null);
      setCsv(null);
      router.refresh();
    });

  return (
    <section className="a-card space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      <div>
        <h2 className="a-heading-sm">Many pieces at once — by spreadsheet</h2>
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
          Download the catalogue, change names, descriptions, prices, stock or “On the shop” (yes/no) in
          Excel or Google Sheets, save it as CSV, and upload it here. You will see every change before
          anything happens.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="/admin/api/catalogue" className="a-btn-secondary">Download spreadsheet</a>
        <input ref={input} type="file" accept=".csv,text/csv" className="sr-only" onChange={(event) => read(event.target.files)} aria-label="Upload spreadsheet" />
        <button type="button" className="a-btn-secondary" onClick={() => input.current?.click()} disabled={pending}>
          {pending && !preview ? "Reading…" : "Upload changed spreadsheet"}
        </button>
      </div>

      {preview ? (
        <div className="space-y-3 border-t pt-4" style={{ borderColor: "var(--a-outline-variant)" }}>
          <p className="a-body-md">
            <strong>{preview.changes.length}</strong> piece{preview.changes.length === 1 ? "" : "s"} will change
            {preview.unchanged ? ` · ${preview.unchanged} unchanged` : ""}.
          </p>
          {preview.problems.length ? (
            <div className="a-body-sm px-4 py-3" style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}>
              <strong>Rows that will be skipped:</strong>
              <ul className="mt-1 list-disc pl-5">
                {preview.problems.slice(0, 20).map((problem) => <li key={problem}>{problem}</li>)}
              </ul>
            </div>
          ) : null}
          {preview.changes.length ? (
            <ul className="max-h-80 space-y-2 overflow-y-auto" role="list">
              {preview.changes.map((change) => (
                <li key={change.code} className="a-body-sm">
                  <strong>{change.name}</strong> <span style={{ color: "var(--a-outline)" }}>({change.code})</span>
                  {change.changes.map((c) => (
                    <span key={c.column} className="block pl-4">
                      {c.column}: <s style={{ color: "var(--a-outline)" }}>{c.from}</s> → {c.to}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex gap-3">
            <button type="button" className="a-btn-primary" disabled={pending || !preview.changes.length} onClick={apply}>
              {pending ? "Applying…" : `Apply ${preview.changes.length} change${preview.changes.length === 1 ? "" : "s"}`}
            </button>
            <button type="button" className="a-btn-secondary" onClick={() => { setPreview(null); setCsv(null); }}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {message ? (
        <p className="a-body-sm" role={message.ok ? "status" : "alert"} style={{ color: message.ok ? "var(--a-status-done)" : "var(--a-negative)" }}>
          {message.ok ? "✓ " : ""}{message.text}
        </p>
      ) : null}
    </section>
  );
}
