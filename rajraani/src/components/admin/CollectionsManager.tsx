"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";

import {
  createCollectionAction,
  saveCollectionAction,
  setCollectionFiltersAction,
  setCollectionPiecesAction,
} from "@/lib/admin/collection-actions";

/**
 * Collections: the groups of pieces shoppers browse.
 *
 * Laid out like the Menu screen — a header with "+ New collection", then one
 * card per collection. A card opens onto two things: its name and
 * introduction, and which pieces it holds. A hand-picked collection gets a
 * piece picker; one that fills itself gets filter checkboxes.
 */

export type CollectionView = {
  handle: string;
  title: string;
  intro: string;
  kind: "facet" | "campaign" | "edit";
  how: string;
  facets: Record<string, string[]>;
  pieceIds: number[];
  count: number;
  thumbs: { src: string; name: string }[];
};

export type PieceOption = { id: number; name: string; title: string; thumb?: string; hidden: boolean };
export type FilterGroup = { group: string; label: string; options: { slug: string; name: string }[] };

type Result = { ok: true } | { ok: false; error: string };

function Thumb({ src, name }: { src?: string; name: string }) {
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
    <img src={src} alt={name} className="h-14 w-10 shrink-0 object-cover" style={{ borderRadius: "var(--a-radius)" }} />
  ) : (
    <span className="a-label flex h-14 w-10 shrink-0 items-center justify-center" style={{ backgroundColor: "var(--a-surface-high)", borderRadius: "var(--a-radius)" }}>
      —
    </span>
  );
}

function useSave() {
  const router = useRouter();
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const run = (action: () => Promise<Result>, done = "Saved — live on the shop now.") =>
    startTransition(async () => {
      const result = await action();
      setMessage(result.ok ? { ok: true, text: done } : { ok: false, text: result.error });
      if (result.ok) router.refresh();
    });
  return { message, pending, run };
}

function Message({ message }: { message: { ok: boolean; text: string } | null }) {
  if (!message) return null;
  return (
    <span className="a-body-sm" role={message.ok ? "status" : "alert"} style={{ color: message.ok ? "var(--a-status-done)" : "var(--a-negative)" }}>
      {message.ok ? "✓ " : ""}
      {message.text}
    </span>
  );
}

/** Filter checkboxes, one group per row. */
function FilterPicker({
  groups,
  value,
  onChange,
}: {
  groups: FilterGroup[];
  value: Record<string, string[]>;
  onChange: (value: Record<string, string[]>) => void;
}) {
  const toggle = (group: string, slug: string) => {
    const current = value[group] ?? [];
    const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
    const copy = { ...value };
    if (next.length) copy[group] = next;
    else delete copy[group];
    onChange(copy);
  };
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <fieldset key={group.group}>
          <legend className="a-label pb-2" style={{ color: "var(--a-outline)" }}>{group.label}</legend>
          <div className="flex flex-wrap gap-2">
            {group.options.map((option) => {
              const on = (value[group.group] ?? []).includes(option.slug);
              return (
                <button
                  key={option.slug}
                  type="button"
                  aria-pressed={on}
                  className={on ? "a-btn-primary" : "a-btn-secondary"}
                  style={{ padding: "8px 14px" }}
                  onClick={() => toggle(group.group, option.slug)}
                >
                  {option.name}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
        Pick one or more in a row to mean “any of these”. Picking in two rows means “both” — e.g. Kadhua
        <em> and</em> Katan silk.
      </p>
    </div>
  );
}

/** Hand-picked pieces: the list in order, and a search to add more. */
function PiecePicker({
  pieces,
  value,
  onChange,
}: {
  pieces: PieceOption[];
  value: number[];
  onChange: (value: number[]) => void;
}) {
  const [query, setQuery] = useState("");
  const byId = useMemo(() => new Map(pieces.map((piece) => [piece.id, piece])), [pieces]);
  const q = query.trim().toLowerCase();
  const candidates = pieces
    .filter((piece) => !value.includes(piece.id) && (!q || `${piece.name} ${piece.title}`.toLowerCase().includes(q)))
    .slice(0, 12);

  const move = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    [next[index], next[target]] = [next[target]!, next[index]!];
    onChange(next);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <p className="a-label pb-2" style={{ color: "var(--a-ink)" }}>In this collection, in order ({value.length})</p>
        {value.length === 0 ? (
          <p className="a-body-sm" style={{ color: "var(--a-outline)" }}>No pieces yet — add some from the right.</p>
        ) : (
          <ol className="space-y-2">
            {value.map((id, index) => {
              const piece = byId.get(id);
              if (!piece) return null;
              return (
                <li key={id} className="flex items-center gap-3">
                  <span className="a-label w-5 tabular-nums" style={{ color: "var(--a-outline)" }}>{index + 1}</span>
                  <Thumb src={piece.thumb} name={piece.name} />
                  <span className="min-w-0 flex-1">
                    <span className="a-body-sm block truncate">{piece.name}</span>
                    {piece.hidden ? <span className="a-label" style={{ color: "var(--a-status-waiting)" }}>Hidden from the shop</span> : null}
                  </span>
                  <button type="button" className="a-btn-icon" aria-label={`Move ${piece.name} up`} disabled={index === 0} onClick={() => move(index, -1)}>↑</button>
                  <button type="button" className="a-btn-icon" aria-label={`Move ${piece.name} down`} disabled={index === value.length - 1} onClick={() => move(index, 1)}>↓</button>
                  <button type="button" className="a-label underline" style={{ color: "var(--a-negative)" }} onClick={() => onChange(value.filter((other) => other !== id))}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </div>
      <div>
        <p className="a-label pb-2" style={{ color: "var(--a-ink)" }}>Add pieces</p>
        <input className="a-input w-full" placeholder="Find a piece by name" value={query} onChange={(event) => setQuery(event.target.value)} />
        <ul className="mt-3 space-y-2">
          {candidates.map((piece) => (
            <li key={piece.id} className="flex items-center gap-3">
              <Thumb src={piece.thumb} name={piece.name} />
              <span className="min-w-0 flex-1">
                <span className="a-body-sm block truncate">{piece.name}</span>
                <span className="a-label block truncate" style={{ color: "var(--a-outline)" }}>{piece.title}</span>
              </span>
              <button type="button" className="a-btn-secondary" onClick={() => onChange([...value, piece.id])}>
                + Add
              </button>
            </li>
          ))}
          {candidates.length === 0 ? (
            <li className="a-body-sm" style={{ color: "var(--a-outline)" }}>{q ? "No piece matches." : "Every piece is already in."}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

function CollectionCard({
  collection,
  pieces,
  filterGroups,
}: {
  collection: CollectionView;
  pieces: PieceOption[];
  filterGroups: FilterGroup[];
}) {
  const [open, setOpen] = useState<"none" | "words" | "pieces">("none");
  const [title, setTitle] = useState(collection.title);
  const [intro, setIntro] = useState(collection.intro);
  const [facets, setFacets] = useState(collection.facets);
  const [pieceIds, setPieceIds] = useState(collection.pieceIds);
  const { message, pending, run } = useSave();

  const wordsChanged = title !== collection.title || intro !== collection.intro;
  const piecesChanged =
    collection.kind === "facet"
      ? JSON.stringify(facets) !== JSON.stringify(collection.facets)
      : JSON.stringify(pieceIds) !== JSON.stringify(collection.pieceIds);

  return (
    <li className="a-card overflow-hidden" style={{ borderRadius: "var(--a-radius-md)" }}>
      <div className="flex flex-wrap items-center gap-4 p-5">
        <div className="flex shrink-0 -space-x-3">
          {collection.thumbs.slice(0, 4).map((thumb) => (
            // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
            <img key={thumb.src} src={thumb.src} alt={thumb.name} className="h-14 w-11 object-cover" style={{ border: "2px solid var(--a-surface-lowest)", borderRadius: "var(--a-radius)" }} />
          ))}
          {collection.thumbs.length === 0 ? <Thumb name={collection.title} /> : null}
        </div>
        <div className="min-w-[12rem] flex-1">
          <p className="a-body-lg">{collection.title}</p>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            {collection.count} piece{collection.count === 1 ? "" : "s"} on the shop · {collection.how}
          </p>
        </div>
        <a href={`/collections/${collection.handle}`} target="_blank" rel="noreferrer" className="a-btn-ghost">See on shop ↗</a>
        <button type="button" className={open === "words" ? "a-btn-primary" : "a-btn-secondary"} onClick={() => setOpen(open === "words" ? "none" : "words")}>
          Name &amp; text
        </button>
        <button type="button" className={open === "pieces" ? "a-btn-primary" : "a-btn-secondary"} onClick={() => setOpen(open === "pieces" ? "none" : "pieces")}>
          Which pieces
        </button>
      </div>

      {open === "words" ? (
        <div className="space-y-4 border-t p-5" style={{ borderColor: "var(--a-outline-variant)" }}>
          <label className="block">
            <span className="a-label block" style={{ color: "var(--a-outline)" }}>Name (the heading on the collection page)</span>
            <input className="a-input mt-1 w-full" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label className="block">
            <span className="a-label block" style={{ color: "var(--a-outline)" }}>Introduction (the paragraph under the heading — Google reads it too)</span>
            <textarea className="a-input mt-1 w-full" rows={4} value={intro} onChange={(event) => setIntro(event.target.value)} />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className="a-btn-primary" disabled={!wordsChanged || pending} onClick={() => run(() => saveCollectionAction(collection.handle, title, intro))}>
              {pending ? "Saving…" : "Save"}
            </button>
            <Message message={message} />
          </div>
        </div>
      ) : null}

      {open === "pieces" ? (
        <div className="space-y-4 border-t p-5" style={{ borderColor: "var(--a-outline-variant)" }}>
          {collection.kind === "facet" ? (
            <>
              <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                This collection fills itself: every piece matching these is in it, including pieces you add later.
              </p>
              <FilterPicker groups={filterGroups} value={facets} onChange={setFacets} />
            </>
          ) : (
            <PiecePicker pieces={pieces} value={pieceIds} onChange={setPieceIds} />
          )}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="a-btn-primary"
              disabled={!piecesChanged || pending}
              onClick={() =>
                run(() =>
                  collection.kind === "facet"
                    ? setCollectionFiltersAction(collection.handle, facets)
                    : setCollectionPiecesAction(collection.handle, pieceIds),
                )
              }
            >
              {pending ? "Saving…" : "Save pieces"}
            </button>
            <Message message={message} />
          </div>
        </div>
      ) : null}
    </li>
  );
}

function NewCollection({ filterGroups, onClose }: { filterGroups: FilterGroup[]; onClose: () => void }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [kind, setKind] = useState<"edit" | "facet">("edit");
  const [facets, setFacets] = useState<Record<string, string[]>>({});
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const create = () =>
    startTransition(async () => {
      setError(null);
      const result = await createCollectionAction({ title, intro, kind, facets });
      if (!result.ok) return setError(result.error);
      onClose();
      router.refresh();
    });

  return (
    <section className="a-card space-y-5 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      <div>
        <h2 className="a-heading-sm">New collection</h2>
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
          Its page is ready at once. Add it to the <a href="/admin/menu" className="underline">Menu</a> so shoppers can find it.
        </p>
      </div>
      <label className="block">
        <span className="a-label block" style={{ color: "var(--a-outline)" }}>Name</span>
        <input autoFocus className="a-input mt-1 w-full" placeholder="e.g. Basant — spring pieces" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label className="block">
        <span className="a-label block" style={{ color: "var(--a-outline)" }}>Introduction (optional)</span>
        <textarea className="a-input mt-1 w-full" rows={3} value={intro} onChange={(event) => setIntro(event.target.value)} />
      </label>
      <fieldset>
        <legend className="a-label pb-2" style={{ color: "var(--a-outline)" }}>How are pieces chosen?</legend>
        <div className="grid gap-3 md:grid-cols-2">
          {([
            ["edit", "I pick the pieces", "You choose each piece and the order. Good for a campaign, an occasion or a gift edit."],
            ["facet", "It fills itself", "Every piece matching what you choose — e.g. all Kadhua sarees. New pieces join by themselves."],
          ] as const).map(([value, label, hint]) => (
            <button
              key={value}
              type="button"
              aria-pressed={kind === value}
              onClick={() => setKind(value)}
              className="a-card-interactive block p-4 text-left"
              style={{ borderRadius: "var(--a-radius-md)", outline: kind === value ? "2px solid var(--a-ink)" : undefined }}
            >
              <span className="a-body-md block">{label}</span>
              <span className="a-body-sm block" style={{ color: "var(--a-outline)" }}>{hint}</span>
            </button>
          ))}
        </div>
      </fieldset>
      {kind === "facet" ? <FilterPicker groups={filterGroups} value={facets} onChange={setFacets} /> : (
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>You will pick the pieces straight after creating it, under <strong>Which pieces</strong>.</p>
      )}
      {error ? <p role="alert" className="a-body-sm" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
      <div className="flex gap-3">
        <button type="button" className="a-btn-primary" disabled={pending || !title.trim()} onClick={create}>
          {pending ? "Creating…" : "Create the collection"}
        </button>
        <button type="button" className="a-btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </section>
  );
}

export function CollectionsManager({
  collections,
  pieces,
  filterGroups,
}: {
  collections: CollectionView[];
  pieces: PieceOption[];
  filterGroups: FilterGroup[];
}) {
  const [query, setQuery] = useState("");
  const [creating, setCreating] = useState(false);
  const q = query.trim().toLowerCase();
  const shown = collections.filter((collection) => !q || collection.title.toLowerCase().includes(q));

  return (
    <div className="space-y-6">
      {/* Header — the same shape as the Menu screen's. */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="a-heading-lg">Collections</h1>
          <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
            The groups of pieces shoppers browse. Some are picked by hand; others fill themselves — a
            piece appears in “Katan Silk” because its fabric is Katan silk.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <input type="search" className="a-input w-56" placeholder="Find a collection" value={query} onChange={(event) => setQuery(event.target.value)} />
          <button type="button" className="a-btn-primary" onClick={() => setCreating(true)} disabled={creating}>
            + New collection
          </button>
        </div>
      </header>

      {creating ? <NewCollection filterGroups={filterGroups} onClose={() => setCreating(false)} /> : null}

      <ul className="space-y-3" role="list">
        {shown.map((collection) => (
          <CollectionCard key={collection.handle} collection={collection} pieces={pieces} filterGroups={filterGroups} />
        ))}
      </ul>
    </div>
  );
}
