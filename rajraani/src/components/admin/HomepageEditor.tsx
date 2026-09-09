"use client";

import { useMemo, useRef, useState, useTransition } from "react";

import Link from "next/link";

import { saveHomepageAction } from "@/lib/admin/content-actions";
import type { Section } from "@/lib/content/sections";

/**
 * The homepage layout manager.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * This screen used to be a mock, and could not have been anything else: it read
 * `HOMEPAGE_SECTIONS` — a TypeScript constant — into `useState`, let you
 * rearrange it, and discarded everything on navigation. There was nowhere to
 * save to. `src/lib/content/` is that somewhere now.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Two decisions worth stating.
 *
 * **Hiding a section is removing it from the list.** There is no `hidden` flag.
 * The saved list *is* the homepage, in order, which means there is exactly one
 * thing to reason about rather than a list plus a set of exceptions. Nothing is
 * lost by removing: everything not currently placed sits in the tray below,
 * ready to go back, and the committed seed is in git regardless.
 *
 * **Preview is the real page, in an iframe, not a reconstruction.** A preview
 * built out of admin components is a second implementation that drifts from the
 * first and lies to you exactly when it matters. `SectionRenderer` is an async
 * server component and cannot run in here anyway. So: save, then reload the
 * actual homepage — which now reads from the database, so it shows the truth.
 */

/**
 * Text fields an editor may change from this screen.
 *
 * Deliberately a whitelist rather than "every string on the object". Section
 * objects carry `id` and `type`, which are structural and would break the page
 * if typed over, and `ctaHref`, which is a link and gets its own treatment.
 */
const TEXT_FIELDS = ["eyebrow", "title", "body", "ctaLabel", "ctaHref"] as const;

const MULTILINE = new Set(["body"]);

type Editable = Section & Partial<Record<(typeof TEXT_FIELDS)[number], string>>;

export function HomepageEditor({
  initialSections,
  library,
  isSeed,
}: {
  initialSections: readonly Section[];
  /** Every section the seed knows about, for the "not placed" tray. */
  library: readonly Section[];
  /** True while the homepage is still the committed default. */
  isSeed: boolean;
}) {
  const [sections, setSections] = useState<Editable[]>([
    ...(initialSections as Editable[]),
  ]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const previewRef = useRef<HTMLIFrameElement>(null);

  const dirtyRef = useRef(false);
  const markDirty = () => {
    dirtyRef.current = true;
    setMessage(null);
  };

  /** Seed sections not currently on the homepage. */
  const unplaced = useMemo(() => {
    const placed = new Set(sections.map((section) => section.id));
    return library.filter((section) => !placed.has(section.id));
  }, [library, sections]);

  const move = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= sections.length) return;
    const next = [...sections];
    const held = next[index]!;
    next[index] = next[target]!;
    next[target] = held;
    setSections(next);
    markDirty();
  };

  const remove = (id: string) => {
    setSections((current) => current.filter((section) => section.id !== id));
    markDirty();
  };

  const place = (section: Section) => {
    setSections((current) => [...current, section as Editable]);
    markDirty();
  };

  const editField = (id: string, field: string, value: string) => {
    setSections((current) =>
      current.map((section) =>
        section.id === id ? ({ ...section, [field]: value } as Editable) : section,
      ),
    );
    markDirty();
  };

  const save = () => {
    setError(null);
    startTransition(async () => {
      const result = await saveHomepageAction(sections);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      dirtyRef.current = false;
      setMessage("Saved. The homepage is showing this now.");
      // Reload the preview so it reflects what was just written, rather than
      // whatever it was showing before.
      const frame = previewRef.current;
      if (frame) frame.src = `/?preview=${Date.now()}`;
    });
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-rule pb-5">
        <div>
          <h1 className="text-h2">Homepage</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Reorder, edit and remove the bands that make up the homepage. Changes
            go live when you save.
          </p>
          {isSeed ? (
            <p className="text-caption mt-2 text-ink-muted">
              Nothing has been authored yet — this is the built-in default. Your
              first save replaces it.
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="border border-rule px-4 py-2 text-xs tracking-wider text-ink uppercase hover:bg-bg-sand"
          >
            Open homepage ↗
          </Link>
          <button
            type="button"
            onClick={save}
            disabled={pending}
            className="bg-ink px-5 py-2 text-xs tracking-wider text-bg uppercase disabled:opacity-50"
          >
            {pending ? "Saving…" : "Save"}
          </button>
        </div>
      </header>

      {error ? (
        <p role="alert" className="border border-error px-4 py-3 text-caption text-error">
          {error}
        </p>
      ) : null}
      {message ? (
        <p role="status" className="text-caption text-success">
          {message}
        </p>
      ) : null}

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <ol className="space-y-3">
            {sections.map((section, index) => (
              <li key={section.id} className="border border-rule">
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="text-caption w-6 shrink-0 text-ink-muted tabular-nums">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-ink">
                      {section.title ?? section.type}
                    </p>
                    <p className="text-caption text-ink-muted">{section.type}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => move(index, -1)}
                    disabled={index === 0}
                    aria-label={`Move ${section.type} up`}
                    className="px-2 py-1 text-ink disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => move(index, 1)}
                    disabled={index === sections.length - 1}
                    aria-label={`Move ${section.type} down`}
                    className="px-2 py-1 text-ink disabled:opacity-30"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenId(openId === section.id ? null : section.id)}
                    aria-expanded={openId === section.id}
                    className="text-caption px-2 py-1 text-ink underline"
                  >
                    {openId === section.id ? "Close" : "Edit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(section.id)}
                    aria-label={`Remove ${section.type} from the homepage`}
                    className="text-caption px-2 py-1 text-danger"
                  >
                    Remove
                  </button>
                </div>

                {openId === section.id ? (
                  <div className="space-y-3 border-t border-rule bg-bg-alt px-4 py-4">
                    {TEXT_FIELDS.filter(
                      (field) => typeof section[field] === "string",
                    ).map((field) => (
                      <label key={field} className="block">
                        <span className="text-caption text-ink-muted capitalize">
                          {field === "ctaLabel"
                            ? "Button label"
                            : field === "ctaHref"
                              ? "Button link"
                              : field}
                        </span>
                        {MULTILINE.has(field) ? (
                          <textarea
                            rows={3}
                            value={section[field] ?? ""}
                            onChange={(event) =>
                              editField(section.id, field, event.target.value)
                            }
                            className="mt-1 w-full border border-rule-input bg-bg px-3 py-2 text-ink"
                          />
                        ) : (
                          <input
                            type="text"
                            value={section[field] ?? ""}
                            onChange={(event) =>
                              editField(section.id, field, event.target.value)
                            }
                            className="mt-1 w-full border border-rule-input bg-bg px-3 py-2 text-ink"
                          />
                        )}
                      </label>
                    ))}
                    <p className="text-caption text-ink-muted">
                      Photography, slides and product picks for this band are not
                      editable here yet — see the handoff.
                    </p>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          {sections.length === 0 ? (
            <p className="border border-rule px-4 py-8 text-center text-ink-muted">
              The homepage has no bands. Add one from below.
            </p>
          ) : null}

          <section>
            <h2 className="text-caption text-ink-muted uppercase">
              Not on the homepage
            </h2>
            {unplaced.length === 0 ? (
              <p className="text-caption mt-2 text-ink-muted">
                Every band is placed.
              </p>
            ) : (
              <ul className="mt-2 space-y-2">
                {unplaced.map((section) => (
                  <li
                    key={section.id}
                    className="flex items-center gap-3 border border-rule px-4 py-2"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-ink">
                        {(section as Editable).title ?? section.type}
                      </p>
                      <p className="text-caption text-ink-muted">{section.type}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => place(section)}
                      className="text-caption px-2 py-1 text-ink underline"
                    >
                      Add
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {/* The real page, not a reconstruction of it. */}
        <div className="hidden xl:block">
          <div className="sticky top-6">
            <p className="text-caption mb-2 text-ink-muted">
              Live homepage — reloads when you save.
            </p>
            <iframe
              ref={previewRef}
              src="/"
              title="Homepage preview"
              className="h-[70vh] w-full border border-rule bg-bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
