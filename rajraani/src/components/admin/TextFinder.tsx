"use client";

import { useMemo, useState, useTransition } from "react";

import { changeTextAction } from "@/lib/admin/text-actions";
import type { TextEntry } from "@/lib/admin/text-index";

/**
 * "Change text" — find any words on the site and change them.
 *
 * Type a few words you can see on the website. Every place they appear is
 * listed, with where it is in plain words and a box to change it. Save changes
 * that one place and it is live straight away.
 */

const normalise = (text: string) => text.toLowerCase().replace(/\s+/g, " ").trim();

function Highlight({ text, query }: { text: string; query: string }) {
  const q = normalise(query);
  if (!q) return <>{text}</>;
  const at = text.toLowerCase().indexOf(q);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark style={{ backgroundColor: "var(--a-accent-container)", color: "inherit" }}>
        {text.slice(at, at + q.length)}
      </mark>
      {text.slice(at + q.length)}
    </>
  );
}

function EntryCard({
  entry,
  query,
  compact = false,
  onSaved,
}: {
  entry: TextEntry;
  query: string;
  /** Inside a place's own list: the place and block are already headings. */
  compact?: boolean;
  onSaved: (value: string) => void;
}) {
  const [value, setValue] = useState(entry.value);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState(false);
  const [pending, startTransition] = useTransition();
  const changed = value !== entry.value;

  const save = () =>
    startTransition(async () => {
      setError(null);
      const result = await changeTextAction(entry.ref, entry.value, value);
      if (!result.ok) return setError(result.error);
      onSaved(value);
      setSavedAt(true);
    });

  return (
    <li className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      {compact ? (
        <p className="a-label" style={{ color: "var(--a-outline)" }}>
          {(entry.trail.length > 1 ? entry.trail.slice(1) : entry.trail).join(" › ")}
        </p>
      ) : (
        <p className="a-body-sm" style={{ color: "var(--a-ink)" }}>
          <strong>{entry.place}</strong>
          {entry.trail.length ? (
            <span style={{ color: "var(--a-outline)" }}> › {entry.trail.join(" › ")}</span>
          ) : null}
        </p>
      )}

      {changed || !query ? null : (
        <p className="a-body-sm mt-2" style={{ color: "var(--a-ink-variant)" }}>
          <Highlight text={entry.value.length > 240 ? `${entry.value.slice(0, 240)}…` : entry.value} query={query} />
        </p>
      )}

      {entry.multiline ? (
        <textarea
          className="a-input mt-3 w-full"
          rows={Math.min(8, Math.max(2, Math.ceil(value.length / 80) + value.split("\n").length - 1))}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setSavedAt(false);
          }}
          aria-label={`${entry.place} › ${entry.trail.join(" › ")}`}
        />
      ) : (
        <input
          className="a-input mt-3 w-full"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setSavedAt(false);
          }}
          aria-label={`${entry.place} › ${entry.trail.join(" › ")}`}
        />
      )}

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" className="a-btn-primary" disabled={!changed || pending} onClick={save}>
          {pending ? "Saving…" : "Save"}
        </button>
        {changed ? (
          <button type="button" className="a-btn-secondary" onClick={() => setValue(entry.value)}>
            Undo
          </button>
        ) : null}
        {savedAt ? (
          <span className="a-body-sm" style={{ color: "var(--a-status-done)" }}>
            ✓ Saved — live on the site now.
          </span>
        ) : null}
        {compact ? null : (
          <a href={entry.viewHref} target="_blank" rel="noreferrer" className="a-label ml-auto underline" style={{ color: "var(--a-outline)" }}>
            See it on the site ↗
          </a>
        )}
      </div>
      {error ? (
        <p role="alert" className="a-body-sm mt-2" style={{ color: "var(--a-negative)" }}>
          {error}
        </p>
      ) : null}
    </li>
  );
}

export function TextFinder({
  entries: initial,
  initialPlace,
  initialQuery = "",
}: {
  entries: TextEntry[];
  initialPlace?: string;
  initialQuery?: string;
}) {
  const [entries, setEntries] = useState(initial);
  const [query, setQuery] = useState(initialQuery);
  const [place, setPlace] = useState<string | null>(initialPlace ?? null);
  /** After a save: the old wording, if it still appears elsewhere. */
  const [echo, setEcho] = useState<{ old: string; count: number } | null>(null);

  const places = useMemo(() => [...new Set(initial.map((entry) => entry.place))], [initial]);

  const results = useMemo(() => {
    const q = normalise(query);
    return entries.filter(
      (entry) =>
        (!place || entry.place === place) &&
        (!q || normalise(entry.value).includes(q) || normalise(`${entry.place} ${entry.trail.join(" ")}`).includes(q)),
    );
  }, [entries, query, place]);

  const showing = results.slice(0, 80);

  /** Places grouped the way the site is: every page, the homepage, the rest. */
  const placeGroups = useMemo(() => {
    const groups: { title: string; places: { name: string; count: number }[] }[] = [
      { title: "On every page", places: [] },
      { title: "Homepage", places: [] },
      { title: "Pages", places: [] },
    ];
    for (const name of places) {
      const first = entries.find((entry) => entry.place === name)!;
      const group = first.ref.kind === "site" ? 0 : first.ref.kind === "home" ? 1 : 2;
      groups[group]!.places.push({ name, count: entries.filter((entry) => entry.place === name).length });
    }
    return groups.filter((group) => group.places.length);
  }, [places, entries]);

  /** Within one place, the text grouped by block ("Block 3 · Photo with text"). */
  const byBlock = useMemo(() => {
    const blocks = new Map<string, TextEntry[]>();
    for (const entry of showing) {
      const heading = entry.trail.length > 1 ? entry.trail[0]! : "About this page";
      blocks.set(heading, [...(blocks.get(heading) ?? []), entry]);
    }
    return [...blocks.entries()];
  }, [showing]);

  const onSaved = (entry: TextEntry) => (value: string) => {
    setEntries((current) => current.map((other) => (other.id === entry.id ? { ...other, value } : other)));
    // A short fact (an email, a phone number, "₹25,000") is often repeated
    // inside other sentences. Say where it still lives.
    const old = entry.value.trim();
    if (old.length >= 5 && old.length <= 80) {
      const count = entries.filter(
        (other) => other.id !== entry.id && normalise(other.value).includes(normalise(old)),
      ).length;
      setEcho(count > 0 ? { old, count } : null);
    }
  };

  const grouped = !!place && !query;

  return (
    <div className="space-y-6">
      {/* Header — the same shape as the Menu screen's. */}
      <header>
        <h1 className="a-heading-lg">Change text</h1>
        <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
          Type any words you can see on your website, or pick a place on the left. Change the words
          and press <strong>Save</strong> — each one goes live on its own.
        </p>
      </header>

      <div className="a-card sticky top-0 z-10 p-4" style={{ borderRadius: "var(--a-radius-md)" }}>
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Find words on the site — e.g.  Free shipping   or   Visit our stores"
          className="a-input w-full"
          style={{ fontSize: 18, padding: "14px 16px" }}
          aria-label="Words to find"
        />
      </div>

      {echo ? (
        <div
          role="status"
          className="a-body-sm flex flex-wrap items-center gap-3 px-4 py-3"
          style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}
        >
          <span>
            <strong>The old wording is still in {echo.count} other place{echo.count === 1 ? "" : "s"}</strong>{" "}
            — “{echo.old}”. Change {echo.count === 1 ? "it" : "them"} too, so the site says the same thing everywhere.
          </span>
          <button
            type="button"
            className="a-btn-secondary"
            onClick={() => {
              setPlace(null);
              setQuery(echo.old);
              setEcho(null);
            }}
          >
            Show {echo.count === 1 ? "it" : "them"}
          </button>
          <button type="button" className="a-label underline" onClick={() => setEcho(null)}>
            Dismiss
          </button>
        </div>
      ) : null}

      <div className="grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Places, grouped like the site. */}
        <nav aria-label="Places on the site" className="a-card p-3 lg:sticky lg:top-28" style={{ borderRadius: "var(--a-radius-md)" }}>
          {placeGroups.map((group) => (
            <div key={group.title} className="mb-3 last:mb-0">
              <p className="a-label px-2 pb-1 pt-2" style={{ color: "var(--a-outline)" }}>{group.title}</p>
              <ul className="space-y-0.5">
                {group.places.map(({ name, count }) => {
                  const active = place === name;
                  return (
                    <li key={name}>
                      <button
                        type="button"
                        aria-current={active ? "true" : undefined}
                        onClick={() => {
                          setPlace(active ? null : name);
                          setQuery("");
                        }}
                        className="flex w-full items-center gap-2 px-2 py-1.5 text-left"
                        style={{ borderRadius: "var(--a-radius)", backgroundColor: active ? "var(--a-accent-container)" : undefined }}
                      >
                        <span className="a-body-sm min-w-0 flex-1 truncate">{name.replace(/ \(.*\)$/, "")}</span>
                        <span className="a-label tabular-nums" style={{ color: "var(--a-outline)" }}>{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="min-w-0 space-y-4">
          {!query && !place ? (
            <div className="a-card px-6 py-12 text-center" style={{ borderRadius: "var(--a-radius-md)" }}>
              <p className="a-heading-sm">What would you like to change?</p>
              <p className="a-body-md mt-2" style={{ color: "var(--a-ink-variant)" }}>
                Type a few words from the site in the box above, or pick a place on the left to see all
                of its text.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="a-heading-sm">
                  {query ? `“${query}”` : place}
                  {grouped && showing[0] ? (
                    <a href={showing[0].viewHref} target="_blank" rel="noreferrer" className="a-label ml-3 underline" style={{ color: "var(--a-outline)" }}>
                      See it on the site ↗
                    </a>
                  ) : null}
                </h2>
                <p className="a-body-sm" style={{ color: "var(--a-outline)" }}>
                  {results.length === 0
                    ? "Nothing found. Try fewer words, or check the spelling as it appears on the site."
                    : results.length > showing.length
                      ? `${results.length} places — showing the first ${showing.length}. Add more words to narrow it down.`
                      : grouped
                        ? `${results.length} piece${results.length === 1 ? "" : "s"} of text`
                        : `${results.length} place${results.length === 1 ? "" : "s"}${query && place ? ` in ${place}` : ""}`}
                </p>
              </div>

              {grouped ? (
                byBlock.map(([heading, members]) => (
                  <section key={heading} className="space-y-3">
                    <h3 className="a-label pt-2" style={{ color: "var(--a-ink)" }}>{heading}</h3>
                    <ul className="space-y-3" role="list">
                      {members.map((entry) => (
                        <EntryCard key={entry.id} entry={entry} query={query} compact onSaved={onSaved(entry)} />
                      ))}
                    </ul>
                  </section>
                ))
              ) : (
                <ul className="space-y-3" role="list">
                  {showing.map((entry) => (
                    <EntryCard key={entry.id} entry={entry} query={query} onSaved={onSaved(entry)} />
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
