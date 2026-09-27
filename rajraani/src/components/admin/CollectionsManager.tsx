"use client";

import { useState, useTransition } from "react";

import { saveCollectionAction } from "@/lib/admin/collection-actions";

export type CollectionView = {
  handle: string;
  title: string;
  intro: string;
  how: string;
  count: number;
  thumbs: { src: string; name: string }[];
};

function CollectionCard({ collection }: { collection: CollectionView }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(collection.title);
  const [intro, setIntro] = useState(collection.intro);
  const [saved, setSaved] = useState({ title: collection.title, intro: collection.intro });
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const changed = title !== saved.title || intro !== saved.intro;

  const save = () =>
    startTransition(async () => {
      const result = await saveCollectionAction(collection.handle, title, intro);
      if (!result.ok) return setMessage({ ok: false, text: result.error });
      setSaved({ title, intro });
      setMessage({ ok: true, text: "Saved — live on the shop now." });
    });

  return (
    <li className="a-card overflow-hidden" style={{ borderRadius: "var(--a-radius-md)" }}>
      <div className="flex flex-wrap items-center gap-5 p-5">
        <div className="flex shrink-0 -space-x-3">
          {collection.thumbs.slice(0, 4).map((thumb) => (
            // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
            <img
              key={thumb.src}
              src={thumb.src}
              alt={thumb.name}
              className="h-14 w-11 object-cover"
              style={{ border: "2px solid var(--a-surface-lowest)", borderRadius: "var(--a-radius)" }}
            />
          ))}
          {collection.thumbs.length === 0 ? (
            <span className="a-label flex h-14 w-11 items-center justify-center" style={{ backgroundColor: "var(--a-surface-high)", borderRadius: "var(--a-radius)" }}>
              —
            </span>
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <p className="a-body-lg">{saved.title}</p>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            {collection.count} piece{collection.count === 1 ? "" : "s"} · {collection.how}
          </p>
        </div>
        <a href={`/collections/${collection.handle}`} target="_blank" rel="noreferrer" className="a-btn-ghost">
          See on shop ↗
        </a>
        <button type="button" className="a-btn-secondary" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Change name or text"}
        </button>
      </div>

      {open ? (
        <div className="space-y-4 border-t p-5" style={{ borderColor: "var(--a-outline-variant)" }}>
          <label className="block">
            <span className="a-label block" style={{ color: "var(--a-outline)" }}>Name (the heading on the collection page)</span>
            <input className="a-input mt-1 w-full" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label className="block">
            <span className="a-label block" style={{ color: "var(--a-outline)" }}>
              Introduction (the paragraph under the heading — Google reads it too)
            </span>
            <textarea className="a-input mt-1 w-full" rows={4} value={intro} onChange={(event) => setIntro(event.target.value)} />
          </label>
          <div className="flex items-center gap-3">
            <button type="button" className="a-btn-primary" disabled={!changed || pending} onClick={save}>
              {pending ? "Saving…" : "Save"}
            </button>
            {message ? (
              <span className="a-body-sm" style={{ color: message.ok ? "var(--a-status-done)" : "var(--a-negative)" }}>
                {message.text}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
    </li>
  );
}

export function CollectionsManager({ collections }: { collections: CollectionView[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = collections.filter((collection) => !q || collection.title.toLowerCase().includes(q));

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="a-heading-lg">Collections</h1>
          <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
            The groups of pieces shoppers browse — Sarees, Katan Silk, Kadhua and so on. Most fill
            themselves: a piece appears in “Katan Silk” because its fabric is set to Katan silk. To
            move a piece, change its details on the piece itself.
          </p>
        </div>
        <input
          type="search"
          className="a-input w-64"
          placeholder="Find a collection"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </header>
      <ul className="space-y-3" role="list">
        {shown.map((collection) => (
          <CollectionCard key={collection.handle} collection={collection} />
        ))}
      </ul>
    </div>
  );
}
