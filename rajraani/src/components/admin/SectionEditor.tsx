"use client";

import { createContext, useContext, useId, useState } from "react";

import {
  choiceLabel,
  fieldInfo,
  HIDDEN,
  isArtPair,
  optionalFields,
  sectionSummary,
} from "@/lib/admin/section-fields";
import type { SiteLink } from "@/lib/admin/site-links";

import { ArtPairField } from "./MediaPicker";

/**
 * A form for any band, generated from the band itself.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The site has 25 band types. Hand-building 25 forms would leave 25 places for a
 * field to be forgotten — and a forgotten field is text on the live site the
 * owner cannot change. So this walks the band's data: every word, photo, link
 * and choice that is on the page appears in the form, and `section-fields.ts`
 * only supplies plain-language names and allowed choices.
 *
 * What the owner cannot do from here is change a band's *structure* in ways the
 * design does not support: `id` and `type` are never shown, and bands that are
 * a fixed set (three photos in a triptych, two halves of a split) cannot grow
 * or shrink.
 * ─────────────────────────────────────────────────────────────────────────────
 */

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
type Obj = { [key: string]: Json };

/** Lists whose length the design fixes. Paths ignore list positions. */
const FIXED_LENGTH = new Set([
  "collectionTriptych.art",
  "collectionTriptych.artHrefs",
  "categorySplit.items",
  "editorialPair.items",
  "dualCampaign.items",
]);

const LinksContext = createContext<SiteLink[]>([]);
export const SiteLinksProvider = LinksContext.Provider;

export const LINKS_DATALIST = "admin-site-links";

/** The one datalist every link field points at. Render once per screen. */
export function SiteLinksDatalist() {
  const links = useContext(LinksContext);
  return (
    <datalist id={LINKS_DATALIST}>
      {links.map((link) => (
        <option key={link.href} value={link.href}>
          {`${link.label} — ${link.group}`}
        </option>
      ))}
    </datalist>
  );
}

export function LinkHint({ href }: { href: string }) {
  const links = useContext(LinksContext);
  if (!href) return null;
  const match = links.find((link) => link.href === href);
  if (match) {
    return (
      <p className="a-label mt-1" style={{ color: "var(--a-status-done)" }}>
        ✓ {match.label} ({match.group.toLowerCase()})
      </p>
    );
  }
  if (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>
        Outside link — opens another website.
      </p>
    );
  }
  // Query strings and anchors on a known page are fine (filtered search etc.).
  const base = href.split(/[?#]/)[0];
  if (base && links.some((link) => link.href === base)) {
    return (
      <p className="a-label mt-1" style={{ color: "var(--a-status-done)" }}>
        ✓ A view of {links.find((link) => link.href === base)!.label}
      </p>
    );
  }
  return (
    <p className="a-label mt-1" style={{ color: "var(--a-status-waiting)" }}>
      ⚠ No page on the site has this address. Pick one from the list.
    </p>
  );
}

/** Give every `id` inside a copied value a fresh one, so copies never collide. */
function freshIds(value: Json): Json {
  if (Array.isArray(value)) return value.map(freshIds);
  if (value && typeof value === "object") {
    const out: Obj = {};
    for (const [key, inner] of Object.entries(value)) {
      out[key] =
        key === "id" && typeof inner === "string"
          ? `${inner.replace(/-copy-[a-z0-9]+$/, "")}-copy-${Math.random().toString(36).slice(2, 7)}`
          : freshIds(inner);
    }
    return out;
  }
  return value;
}

function TextField({
  label,
  value,
  onChange,
  multiline,
  max,
  link,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline: boolean;
  max?: number;
  link: boolean;
}) {
  const id = useId();
  const over = max !== undefined && value.length > max;

  return (
    <div>
      <label htmlFor={id} className="a-label flex justify-between gap-4" style={{ color: "var(--a-outline)" }}>
        <span>{label}</span>
        {max !== undefined ? (
          <span style={{ color: over ? "var(--a-negative)" : "var(--a-outline)" }}>
            {value.length}/{max}
          </span>
        ) : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={Math.min(8, Math.max(3, Math.ceil(value.length / 90)))}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`a-input mt-1 w-full ${over ? "a-input-error" : ""}`}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          list={link ? LINKS_DATALIST : undefined}
          placeholder={link ? "Start typing a page, collection or product…" : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={`a-input mt-1 w-full ${over ? "a-input-error" : ""}`}
        />
      )}
      {over ? (
        <p className="a-label mt-1" style={{ color: "var(--a-negative)" }}>
          Longer than this space is designed for — it may wrap awkwardly. Shorten by {value.length - max!} characters.
        </p>
      ) : null}
      {link ? <LinkHint href={value} /> : null}
    </div>
  );
}

function ChoiceField({
  label,
  value,
  choices,
  optional,
  onChange,
}: {
  label: string;
  value: string | number | undefined;
  choices: readonly (string | number)[];
  optional: boolean;
  onChange: (value: string | number | undefined) => void;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="a-label block" style={{ color: "var(--a-outline)" }}>
        {label}
      </label>
      <select
        id={id}
        className="a-select mt-1 w-full"
        value={value === undefined ? "" : String(value)}
        onChange={(event) => {
          const raw = event.target.value;
          if (raw === "") return onChange(undefined);
          const numeric = choices.find((choice) => String(choice) === raw);
          onChange(numeric);
        }}
      >
        {optional ? <option value="">Default</option> : null}
        {choices.map((choice) => (
          <option key={String(choice)} value={String(choice)}>
            {choiceLabel(choice)}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Edits one value of any shape. */
function ValueField({
  path,
  fieldKey,
  value,
  onChange,
  optional = false,
}: {
  /** Section type followed by the keys down to this field's parent. */
  path: string[];
  fieldKey: string;
  value: Json | undefined;
  onChange: (value: Json | undefined) => void;
  optional?: boolean;
}) {
  const info = fieldInfo(path, fieldKey, value);

  if (isArtPair(value)) {
    return <ArtPairField label={info.label} value={value} onChange={(next) => onChange(next as unknown as Json)} />;
  }

  if (info.choices && (value === undefined || typeof value === "string" || typeof value === "number")) {
    return (
      <ChoiceField
        label={info.label}
        value={value as string | number | undefined}
        choices={info.choices}
        optional={optional || value === undefined}
        onChange={(next) => onChange(next)}
      />
    );
  }

  if (typeof value === "string") {
    return (
      <TextField
        label={info.label}
        value={value}
        onChange={onChange}
        multiline={info.multiline}
        max={info.max}
        link={info.link}
      />
    );
  }

  if (typeof value === "number") {
    return (
      <label className="block">
        <span className="a-label block" style={{ color: "var(--a-outline)" }}>{info.label}</span>
        <input
          type="number"
          className="a-input mt-1 w-40"
          value={Number.isFinite(value) ? value : ""}
          onChange={(event) => onChange(event.target.value === "" ? 0 : Number(event.target.value))}
        />
      </label>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />
        <span className="a-body-sm">{info.label}</span>
      </label>
    );
  }

  if (Array.isArray(value)) {
    // A list of numbers (size-chart rows): one comma-separated line.
    if (value.every((item) => typeof item === "number")) {
      return (
        <label className="block">
          <span className="a-label block" style={{ color: "var(--a-outline)" }}>
            {info.label} <span style={{ color: "var(--a-outline)" }}>(separate with commas)</span>
          </span>
          <input
            type="text"
            className="a-input mt-1 w-full"
            defaultValue={value.join(", ")}
            onBlur={(event) =>
              onChange(
                event.target.value
                  .split(",")
                  .map((part) => part.trim())
                  .filter(Boolean)
                  .map(Number)
                  .filter((number) => Number.isFinite(number)),
              )
            }
          />
        </label>
      );
    }
    return (
      <ListField
        path={[...path, fieldKey]}
        label={info.label}
        items={value}
        onChange={onChange}
      />
    );
  }

  if (value && typeof value === "object") {
    return (
      <fieldset className="space-y-4 border-l-2 pl-4" style={{ borderColor: "var(--a-outline-variant)" }}>
        <legend className="a-label pb-2" style={{ color: "var(--a-ink)" }}>{info.label}</legend>
        <ObjectFields path={[...path, fieldKey]} value={value} onChange={onChange} />
      </fieldset>
    );
  }

  return null;
}

// ── Groups ──────────────────────────────────────────────────────────────────
//
// A block's fields are shown in titled groups, the way the Menu screen shows
// "Links in the dropdown" and "Photo tiles": photos, then words, then the
// button, then how it looks, then any list (slides, tiles, questions) with a
// picker of its own. Layout and spacing stay folded away under More settings.

type GroupId = "photos" | "words" | "button" | "looks";

const GROUPS: Record<GroupId, { title: string; hint: string }> = {
  photos: { title: "Photos", hint: "Click a photo to change it." },
  words: { title: "Words", hint: "What shoppers read." },
  button: { title: "Button and link", hint: "The button's words, and the page it opens." },
  looks: { title: "How it looks", hint: "Where the words sit and what colour they are." },
};

const BUTTON_WORDS = new Set(["ctaLabel", "linkLabel", "submitLabel"]);

function isObjectList(value: Json | undefined): value is Obj[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => !!item && typeof item === "object" && !Array.isArray(item) && !isArtPair(item))
  );
}

function isPhotoList(value: Json | undefined): boolean {
  return Array.isArray(value) && value.length > 0 && value.every((item) => isArtPair(item));
}

function groupOf(path: string[], key: string, value: Json | undefined): GroupId | "list" | "object" | "advanced" {
  const info = fieldInfo(path, key, value);
  if (isArtPair(value) || isPhotoList(value)) return "photos";
  if (info.advanced) return "advanced";
  if (isObjectList(value)) return "list";
  if (value && typeof value === "object" && !Array.isArray(value)) return "object";
  if (info.link || BUTTON_WORDS.has(key)) return "button";
  if (info.choices || typeof value === "boolean") return "looks";
  return "words";
}

/** A titled group: a card at the top level, a plain subsection inside one. */
function Group({
  title,
  hint,
  nested,
  children,
}: {
  title: string;
  hint?: string;
  nested: boolean;
  children: React.ReactNode;
}) {
  const body = (
    <>
      <h3 className={nested ? "a-label" : "a-heading-sm"} style={nested ? { color: "var(--a-ink)" } : undefined}>
        {title}
      </h3>
      {hint ? (
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
          {hint}
        </p>
      ) : null}
      <div className="mt-4 space-y-5">{children}</div>
    </>
  );
  return nested ? (
    <section className="border-t pt-5" style={{ borderColor: "var(--a-outline-variant)" }}>{body}</section>
  ) : (
    <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>{body}</section>
  );
}

/** The fields of one object, in titled groups. */
export function ObjectFields({
  path,
  value,
  onChange,
}: {
  path: string[];
  value: Obj;
  onChange: (value: Obj) => void;
}) {
  const nested = path.length > 1;
  const set = (key: string, next: Json | undefined) => {
    const copy = { ...value };
    if (next === undefined) delete copy[key];
    else copy[key] = next;
    onChange(copy);
  };

  const keys = Object.keys(value).filter((key) => !HIDDEN.has(key));
  const byGroup = (group: string) => keys.filter((key) => groupOf(path, key, value[key]) === group);
  const missing = Object.entries(optionalFields(path)).filter(([key]) => !(key in value));
  const field = (key: string, optional = false) => (
    <ValueField key={key} path={path} fieldKey={key} value={value[key]} optional={optional} onChange={(next) => set(key, next)} />
  );

  return (
    <div className="space-y-5">
      {(Object.keys(GROUPS) as GroupId[]).map((group) => {
        const members = byGroup(group);
        const extras = missing.filter(([key, initial]) => groupOf(path, key, initial as Json) === group);
        if (!members.length && !extras.length) return null;
        return (
          <Group key={group} title={GROUPS[group].title} hint={nested ? undefined : GROUPS[group].hint} nested={nested}>
            <div className={group === "looks" ? "grid gap-5 md:grid-cols-2" : "space-y-5"}>
              {members.map((key) => field(key))}
            </div>
            {extras.length ? (
              <div className="flex flex-wrap gap-2">
                {extras.map(([key, initial]) => (
                  <button key={key} type="button" className="a-btn-secondary" onClick={() => set(key, initial as Json)}>
                    + Add {fieldInfo(path, key, initial).label.toLowerCase()}
                  </button>
                ))}
              </div>
            ) : null}
          </Group>
        );
      })}

      {/* Nested objects (words over a photo, the contact form) and lists
          (slides, tiles, questions) each get a group of their own. */}
      {byGroup("object").map((key) => (
        <Group key={key} title={fieldInfo(path, key, value[key]).label} nested={nested}>
          <ObjectFields path={[...path, key]} value={value[key] as Obj} onChange={(next) => set(key, next)} />
        </Group>
      ))}
      {byGroup("list").map((key) => (
        <ItemPicker
          key={key}
          path={[...path, key]}
          label={fieldInfo(path, key, value[key]).label}
          items={value[key] as Obj[]}
          nested={nested}
          onChange={(next) => set(key, next)}
        />
      ))}

      {byGroup("advanced").length ? (
        <details className="a-card px-5 py-4" style={{ borderRadius: "var(--a-radius-md)" }}>
          <summary className="a-label cursor-pointer" style={{ color: "var(--a-outline)" }}>
            More settings — layout and spacing (rarely needed)
          </summary>
          <div className="mt-4 grid gap-5 md:grid-cols-2">{byGroup("advanced").map((key) => field(key, true))}</div>
        </details>
      ) : null}
    </div>
  );
}

/** "Slide", "Tile", "Question" — one of a list, for buttons and headings. */
function singular(label: string): string {
  const special: Record<string, string> = {
    Slides: "Slide",
    Items: "Item",
    Stores: "Store",
    Groups: "Group",
    Paragraphs: "Paragraph",
    "Ways to reach us": "Contact line",
    "Social links": "Social link",
    "How to measure": "Measurement",
    Rows: "Row",
    Sizes: "Size",
  };
  return special[label] ?? label.replace(/ies$/, "y").replace(/s$/, "");
}

function itemName(item: Obj): string {
  return (
    sectionSummary(item as Record<string, unknown>) ||
    (item.name as string) ||
    (item.question as string) ||
    (item.label as string) ||
    (item.heading as string) ||
    ""
  );
}

/**
 * A list of things (slides, tiles, questions): a row of numbered buttons to
 * pick one — like the Menu screen's six — and the chosen one's fields below.
 */
function ItemPicker({
  path,
  label,
  items,
  nested,
  onChange,
}: {
  path: string[];
  label: string;
  items: Obj[];
  nested: boolean;
  onChange: (value: Obj[]) => void;
}) {
  const [active, setActive] = useState(0);
  const current = Math.min(active, items.length - 1);
  const fixed = FIXED_LENGTH.has(path.join("."));
  const one = singular(label);
  const item = items[current]!;

  const move = (delta: number) => {
    const target = current + delta;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[current], next[target]] = [next[target]!, next[current]!];
    onChange(next);
    setActive(target);
  };
  const duplicate = () => {
    const next = [...items];
    next.splice(current + 1, 0, freshIds(structuredClone(item)) as Obj);
    onChange(next);
    setActive(current + 1);
  };
  const remove = () => {
    const name = itemName(item);
    if (!confirm(`Remove ${one.toLowerCase()} ${current + 1}${name ? ` (“${name}”)` : ""}?`)) return;
    onChange(items.filter((_, i) => i !== current));
    setActive(Math.max(0, current - 1));
  };

  return (
    <Group
      title={label}
      hint={nested ? undefined : `${items.length} ${items.length === 1 ? one.toLowerCase() : label.toLowerCase()}. Pick one to change it.`}
      nested={nested}
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={label}>
        {items.map((entry, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === current}
            className={index === current ? "a-btn-primary" : "a-btn-secondary"}
            onClick={() => setActive(index)}
          >
            {index + 1}
            {itemName(entry) ? ` · ${itemName(entry).slice(0, 24)}` : ""}
          </button>
        ))}
        {!fixed ? (
          <button type="button" className="a-btn-ghost" onClick={duplicate}>
            + Add {one.toLowerCase()}
          </button>
        ) : null}
      </div>

      <div className="border p-4" style={{ borderColor: "var(--a-outline-variant)", borderRadius: "var(--a-radius-md)" }}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="a-label flex-1" style={{ color: "var(--a-outline)" }}>
            {one} {current + 1} of {items.length}
          </span>
          <button type="button" className="a-btn-icon" aria-label={`Move ${one.toLowerCase()} earlier`} disabled={current === 0} onClick={() => move(-1)}>←</button>
          <button type="button" className="a-btn-icon" aria-label={`Move ${one.toLowerCase()} later`} disabled={current === items.length - 1} onClick={() => move(1)}>→</button>
          {!fixed ? (
            <>
              <button type="button" className="a-label px-2 underline" onClick={duplicate}>Duplicate</button>
              <button
                type="button"
                className="a-label px-2 underline"
                style={{ color: "var(--a-negative)" }}
                disabled={items.length <= 1}
                title={items.length <= 1 ? "Keep at least one — remove the whole block instead" : undefined}
                onClick={remove}
              >
                Remove
              </button>
            </>
          ) : null}
        </div>
        <ObjectFields
          key={current}
          path={path}
          value={item}
          onChange={(next) => onChange(items.map((other, i) => (i === current ? next : other)))}
        />
      </div>
    </Group>
  );
}

/**
 * A list of plain values — paragraphs, or a set of photos. Each in place, with
 * move and remove, and "+ Add" at the end.
 */
function ListField({
  path,
  label,
  items,
  onChange,
}: {
  path: string[];
  label: string;
  items: Json[];
  onChange: (value: Json[]) => void;
}) {
  const fixed = FIXED_LENGTH.has(path.join("."));
  const strings = items.every((item) => typeof item === "string");
  const one = singular(label);

  const move = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target]!, next[index]!];
    onChange(next);
  };
  const replace = (index: number, value: Json | undefined) =>
    onChange(items.map((item, i) => (i === index ? (value as Json) : item)));

  return (
    <div>
      <span className="a-label block pb-2" style={{ color: "var(--a-ink)" }}>{label}</span>
      <ol className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="min-w-0 flex-1">
              <ValueField path={path} fieldKey={path.at(-1)!} value={item} onChange={(next) => replace(index, next)} />
            </div>
            <span className="flex shrink-0 items-center gap-1 pt-6">
              <button type="button" className="a-btn-icon" aria-label="Move up" disabled={index === 0} onClick={() => move(index, -1)}>↑</button>
              <button type="button" className="a-btn-icon" aria-label="Move down" disabled={index === items.length - 1} onClick={() => move(index, 1)}>↓</button>
              {!fixed ? (
                <button
                  type="button"
                  className="a-label px-2 underline"
                  style={{ color: "var(--a-negative)" }}
                  disabled={items.length <= 1}
                  onClick={() => onChange(items.filter((_, i) => i !== index))}
                >
                  Remove
                </button>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
      {!fixed && items.length > 0 ? (
        <button
          type="button"
          className="a-btn-secondary mt-3"
          onClick={() => onChange([...items, strings ? "" : freshIds(structuredClone(items[items.length - 1]!))])}
        >
          + Add {strings ? one.toLowerCase() : `another ${one.toLowerCase()}`}
        </button>
      ) : null}
    </div>
  );
}


/** The whole form for one block. */
export function SectionFields({
  section,
  onChange,
}: {
  section: Obj & { type: string };
  onChange: (section: Obj & { type: string }) => void;
}) {
  return (
    <ObjectFields
      path={[section.type]}
      value={section}
      onChange={(next) => onChange(next as Obj & { type: string })}
    />
  );
}
