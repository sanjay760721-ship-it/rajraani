"use client";

import { useEffect, useMemo, useState, useTransition } from "react";

import type { SaveResult } from "@/lib/admin/content-actions";
import { countReferencePhotos, SECTION_LABELS, sectionSummary } from "@/lib/admin/section-fields";
import type { SiteLink } from "@/lib/admin/site-links";
import type { Section } from "@/lib/content/sections";
import type { MediaItem } from "@/lib/media/library";

import { MediaLibraryProvider } from "./MediaPicker";
import { SectionFields, SiteLinksDatalist, SiteLinksProvider } from "./SectionEditor";

/**
 * The editor for a page made of blocks — the homepage, or any page.
 *
 * Laid out like the Menu screen: pick one thing, change it, save. On the left,
 * the page top to bottom as numbered blocks; on the right, the chosen block in
 * titled groups (Photos, Words, Button…). Preview is a button, at computer or
 * phone width, showing the real page as visitors see it after the last save.
 *
 * Nothing is live until **Save & publish**. Leaving with unsaved changes asks.
 */

type AnySection = Section & Record<string, unknown>;

function blockName(section: Section) {
  return SECTION_LABELS[section.type]?.name ?? section.type;
}

/** A fresh block id. Module scope: it is only ever called from a click. */
function newSectionId(type: string) {
  return `${type}-${Date.now().toString(36)}`;
}

export function SectionListEditor({
  initialSections,
  templates,
  media,
  links,
  previewPath,
  save,
  header,
  title,
  intro,
  extraDirty = false,
  onSaved,
}: {
  initialSections: readonly Section[];
  /** One example of each block type, offered under "Add a block". */
  templates: readonly Section[];
  media: MediaItem[];
  links: SiteLink[];
  /** Page to show in the preview. */
  previewPath: string;
  save: (sections: readonly Section[]) => Promise<SaveResult>;
  title: string;
  intro: React.ReactNode;
  /** Rendered under the header — page name fields and the like. */
  header?: React.ReactNode;
  /** The parent has unsaved changes of its own (title etc.). */
  extraDirty?: boolean;
  onSaved?: () => void;
}) {
  const [sections, setSections] = useState<AnySection[]>(initialSections as AnySection[]);
  const [selected, setSelected] = useState<string | null>(initialSections[0]?.id ?? null);
  const [mode, setMode] = useState<"edit" | "add" | "preview">("edit");
  const [width, setWidth] = useState<"computer" | "phone">("computer");
  const [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewKey, setPreviewKey] = useState(0);
  const [pending, startTransition] = useTransition();

  const unsaved = dirty || extraDirty;

  useEffect(() => {
    if (!unsaved) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [unsaved]);

  const change = (next: AnySection[]) => {
    setSections(next);
    setDirty(true);
    setMessage(null);
  };

  const index = sections.findIndex((section) => section.id === selected);
  const current = index >= 0 ? sections[index]! : null;

  const move = (delta: number) => {
    const target = index + delta;
    if (index < 0 || target < 0 || target >= sections.length) return;
    const next = [...sections];
    [next[index], next[target]] = [next[target]!, next[index]!];
    change(next);
  };

  const duplicate = () => {
    if (!current) return;
    const copy = structuredClone(current) as AnySection;
    copy.id = newSectionId(current.type);
    const next = [...sections];
    next.splice(index + 1, 0, copy);
    change(next);
    setSelected(copy.id);
  };

  const remove = () => {
    if (!current) return;
    const name = sectionSummary(current) || blockName(current);
    if (!confirm(`Remove “${name}” from this page? Nothing changes on the site until you save.`)) return;
    const next = sections.filter((section) => section.id !== current.id);
    change(next);
    setSelected(next[Math.max(0, index - 1)]?.id ?? null);
  };

  const add = (template: Section) => {
    const copy = structuredClone(template) as AnySection;
    copy.id = newSectionId(template.type);
    const at = index >= 0 ? index + 1 : sections.length;
    const next = [...sections];
    next.splice(at, 0, copy);
    change(next);
    setSelected(copy.id);
    setMode("edit");
  };

  const referenceCount = useMemo(() => countReferencePhotos(sections), [sections]);

  const doSave = () => {
    setError(null);
    startTransition(async () => {
      const result = await save(sections);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setDirty(false);
      setMessage("Saved — the live site is showing this now.");
      setPreviewKey((key) => key + 1);
      onSaved?.();
    });
  };

  return (
    <MediaLibraryProvider initial={media}>
      <SiteLinksProvider value={links}>
        <SiteLinksDatalist />
        <div className="space-y-6">
          {/* Header — the same shape as the Menu screen's. */}
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="a-heading-lg">{title}</h1>
              <div className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
                {intro}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {unsaved ? <span className="a-label" style={{ color: "var(--a-status-waiting)" }}>Unsaved changes</span> : null}
              {message && !unsaved ? <span className="a-body-sm" style={{ color: "var(--a-status-done)" }}>✓ {message}</span> : null}
              <button
                type="button"
                className={mode === "preview" ? "a-btn-primary" : "a-btn-secondary"}
                aria-pressed={mode === "preview"}
                onClick={() => setMode(mode === "preview" ? "edit" : "preview")}
              >
                {mode === "preview" ? "Back to editing" : "Preview"}
              </button>
              <button type="button" onClick={doSave} disabled={pending || !unsaved} className="a-btn-primary">
                {pending ? "Saving…" : "Save & publish"}
              </button>
            </div>
          </header>

          {error ? (
            <p role="alert" className="a-body-sm px-4 py-3" style={{ color: "var(--a-negative)", backgroundColor: "var(--a-negative-container)", borderRadius: "var(--a-radius)" }}>
              <strong>Not saved yet:</strong> {error}
            </p>
          ) : null}

          {header}

          {mode === "preview" ? (
            <section className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex gap-1" role="group" aria-label="Preview width">
                  {(["computer", "phone"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={width === option}
                      className={width === option ? "a-btn-primary" : "a-btn-secondary"}
                      onClick={() => setWidth(option)}
                    >
                      {option === "computer" ? "Computer" : "Phone"}
                    </button>
                  ))}
                </div>
                <span className="a-body-sm" style={{ color: "var(--a-outline)" }}>
                  {unsaved
                    ? "This shows the page as last saved. Press Save & publish to see your latest changes here."
                    : "The page exactly as visitors see it."}
                </span>
                <a href={previewPath} target="_blank" rel="noreferrer" className="a-btn-ghost ml-auto">
                  Open in a new tab ↗
                </a>
              </div>
              <div
                className="mx-auto overflow-hidden border"
                style={{ width: width === "phone" ? 390 : "100%", borderColor: "var(--a-outline-variant)", borderRadius: "var(--a-radius-md)" }}
              >
                <iframe key={previewKey} src={previewPath} title="Page preview" className="h-[80vh] w-full bg-white" />
              </div>
            </section>
          ) : (
            <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
              {/* The page, top to bottom. */}
              <nav aria-label="Blocks on this page" className="a-card p-3 lg:sticky lg:top-4" style={{ borderRadius: "var(--a-radius-md)" }}>
                <p className="a-label px-2 pb-2" style={{ color: "var(--a-outline)" }}>
                  The page, top to bottom
                </p>
                <ol className="space-y-1">
                  {sections.map((section, i) => {
                    const refs = countReferencePhotos(section);
                    const active = section.id === selected && mode === "edit";
                    return (
                      <li key={section.id}>
                        <button
                          type="button"
                          aria-current={active ? "true" : undefined}
                          onClick={() => {
                            setSelected(section.id);
                            setMode("edit");
                          }}
                          className="flex w-full items-start gap-3 px-2 py-2 text-left"
                          style={{
                            borderRadius: "var(--a-radius)",
                            backgroundColor: active ? "var(--a-accent-container)" : undefined,
                          }}
                        >
                          <span className="a-label w-5 shrink-0 pt-0.5 tabular-nums" style={{ color: "var(--a-outline)" }}>{i + 1}</span>
                          <span className="min-w-0 flex-1">
                            <span className="a-body-sm block truncate" style={{ color: "var(--a-ink)" }}>
                              {sectionSummary(section) || blockName(section)}
                            </span>
                            <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                              {blockName(section)}
                              {refs > 0 ? <span style={{ color: "var(--a-status-waiting)" }}> · {refs} stand-in</span> : null}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
                <button
                  type="button"
                  className={mode === "add" ? "a-btn-primary mt-3 w-full" : "a-btn-secondary mt-3 w-full"}
                  onClick={() => setMode(mode === "add" ? "edit" : "add")}
                >
                  + Add a block
                </button>
                {referenceCount > 0 ? (
                  <p className="a-label mt-3 px-2" style={{ color: "var(--a-status-waiting)" }}>
                    {referenceCount} stand-in photo{referenceCount === 1 ? "" : "s"} to replace before launch
                  </p>
                ) : null}
              </nav>

              {/* The chosen block, or the gallery of block types. */}
              <div className="min-w-0 space-y-5">
                {mode === "add" ? (
                  <section className="space-y-4">
                    <div>
                      <h2 className="a-heading-sm">Add a block</h2>
                      <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                        {current ? `It goes after block ${index + 1}. ` : ""}
                        It starts as a copy of one already on the site — then change its words and photos.
                      </p>
                    </div>
                    <ul className="grid gap-3 md:grid-cols-2" role="list">
                      {templates.map((template) => (
                        <li key={template.type}>
                          <button
                            type="button"
                            onClick={() => add(template)}
                            className="a-card-interactive block h-full w-full p-4 text-left"
                            style={{ borderRadius: "var(--a-radius-md)" }}
                          >
                            <span className="a-body-md block" style={{ color: "var(--a-ink)" }}>{blockName(template)}</span>
                            <span className="a-body-sm mt-1 block" style={{ color: "var(--a-outline)" }}>
                              {SECTION_LABELS[template.type]?.hint}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : current ? (
                  <>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="min-w-[14rem] flex-1">
                        <p className="a-label" style={{ color: "var(--a-outline)" }}>
                          Block {index + 1} of {sections.length}
                        </p>
                        <h2 className="a-heading-sm">{blockName(current)}</h2>
                        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                          {SECTION_LABELS[current.type]?.hint}
                        </p>
                      </div>
                      <button type="button" className="a-btn-icon" aria-label="Move block up" disabled={index === 0} onClick={() => move(-1)}>↑</button>
                      <button type="button" className="a-btn-icon" aria-label="Move block down" disabled={index === sections.length - 1} onClick={() => move(1)}>↓</button>
                      <button type="button" className="a-btn-secondary" onClick={duplicate}>Duplicate</button>
                      <button type="button" className="a-btn-secondary" style={{ color: "var(--a-negative)" }} onClick={remove}>
                        Remove
                      </button>
                    </div>
                    <SectionFields
                      key={current.id}
                      section={current as never}
                      onChange={(next) =>
                        change(sections.map((other) => (other.id === current.id ? (next as unknown as AnySection) : other)))
                      }
                    />
                  </>
                ) : (
                  <p className="a-body-md py-12 text-center" style={{ color: "var(--a-outline)" }}>
                    This page has no blocks yet. Press <strong>+ Add a block</strong>.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </SiteLinksProvider>
    </MediaLibraryProvider>
  );
}
