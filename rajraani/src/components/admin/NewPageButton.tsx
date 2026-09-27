"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { createPageAction } from "@/lib/admin/content-actions";

/**
 * "+ New page": name it, pick an existing page whose layout to copy, done.
 *
 * The copy opens in the page editor, hidden from shoppers, so the owner can
 * replace the words and photos before anyone sees it.
 */
export function NewPageButton({ pages }: { pages: { slug: string; title: string; group: string }[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState(pages.find((page) => page.slug === "kala")?.slug ?? pages[0]?.slug ?? "");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const groups = [...new Set(pages.map((page) => page.group))];

  const create = () =>
    startTransition(async () => {
      setError(null);
      const result = await createPageAction(from, title);
      if (!result.ok) return setError(result.error);
      router.push(`/admin/pages/${result.slug}?created=1`);
    });

  if (!open) {
    return (
      <button type="button" className="a-btn-primary" onClick={() => setOpen(true)}>
        + New page
      </button>
    );
  }

  return (
    <div className="a-card w-full space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      <h2 className="a-heading-sm">New page</h2>
      <label className="block">
        <span className="a-label block" style={{ color: "var(--a-outline)" }}>Name of the page</span>
        <input
          autoFocus
          className="a-input mt-1 w-full"
          placeholder="e.g. Basant — our spring campaign"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label className="block">
        <span className="a-label block" style={{ color: "var(--a-outline)" }}>
          Start from a copy of — pick the page most like the new one
        </span>
        <select className="a-select mt-1 w-full" value={from} onChange={(event) => setFrom(event.target.value)}>
          {groups.map((group) => (
            <optgroup key={group} label={group}>
              {pages
                .filter((page) => page.group === group)
                .map((page) => (
                  <option key={page.slug} value={page.slug}>
                    {page.title}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </label>
      <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
        The new page starts with the same blocks, words and photos as the copy, and stays hidden
        from shoppers until you tick <strong>Live on the site</strong>. Then add it to the menu.
      </p>
      {error ? <p role="alert" className="a-body-sm" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
      <div className="flex gap-3">
        <button type="button" className="a-btn-primary" disabled={pending || !title.trim()} onClick={create}>
          {pending ? "Creating…" : "Create the page"}
        </button>
        <button type="button" className="a-btn-secondary" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
