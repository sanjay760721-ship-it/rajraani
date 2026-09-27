"use client";

import { useEffect, useState, useTransition } from "react";

import { saveMenuAction } from "@/lib/admin/menu-actions";
import { isReferenceSrc } from "@/lib/admin/section-fields";
import type { SiteLink } from "@/lib/admin/site-links";
import type { NavPanel } from "@/lib/data/navigation";
import type { MediaItem } from "@/lib/media/library";

import { MediaDialog, MediaLibraryProvider } from "./MediaPicker";
import { LINKS_DATALIST, LinkHint, SiteLinksDatalist, SiteLinksProvider } from "./SectionEditor";

/**
 * The site menu: six top items, each opening a dropdown of columns of links
 * and photo tiles.
 *
 * Everything inside a dropdown can be added, renamed, moved and removed. The
 * six top items can be renamed and pointed elsewhere but not added to — the
 * header puts three either side of the logo (see content/menu.ts).
 *
 * The phone menu is a shorter list; each link carries an "Also on phones"
 * tick, and saving rebuilds that list from the ticks.
 */

type Link = { label: string; href: string; phone: boolean };
type Column = { heading: string; links: Link[] };
type Tile = { label: string; href: string; src?: string; tone: string };
type Panel = { id: string; label: string; href: string; columns: Column[]; tiles: Tile[] };

const LIMITS = { columns: 4, links: 14, tiles: 3 };

function toEditable(panels: readonly NavPanel[]): Panel[] {
  return panels.map((panel) => ({
    id: panel.id,
    label: panel.label,
    href: panel.href,
    columns: (panel.columns ?? []).map((column) => ({
      heading: column.heading,
      links: column.links.map((link) => ({
        label: link.label,
        href: link.href,
        phone: panel.links.some((mobile) => mobile.href === link.href),
      })),
    })),
    tiles: (panel.tiles ?? []).map((tile) => ({ ...tile })),
  }));
}

function toNav(panels: Panel[]): NavPanel[] {
  return panels.map((panel) => {
    const phone: { label: string; href: string }[] = [];
    for (const column of panel.columns)
      for (const link of column.links)
        if (link.phone && !phone.some((entry) => entry.href === link.href))
          phone.push({ label: link.label, href: link.href });
    return {
      id: panel.id,
      label: panel.label,
      href: panel.href,
      links: phone,
      columns: panel.columns.map((column) => ({
        heading: column.heading,
        links: column.links.map(({ label, href }) => ({ label, href })),
      })),
      tiles: panel.tiles,
    };
  });
}

/** Swap two neighbours in a list; out-of-range moves do nothing. */
function moved<T>(list: T[], index: number, delta: number): T[] {
  const target = index + delta;
  if (target < 0 || target >= list.length) return list;
  const next = [...list];
  [next[index], next[target]] = [next[target]!, next[index]!];
  return next;
}

function LinkInput({ value, onChange, label }: { value: string; onChange: (value: string) => void; label: string }) {
  return (
    <label className="block min-w-0 flex-1">
      <span className="a-label block" style={{ color: "var(--a-outline)" }}>{label}</span>
      <input
        className="a-input mt-1 w-full"
        list={LINKS_DATALIST}
        value={value}
        placeholder="Start typing a page, collection or piece…"
        onChange={(event) => onChange(event.target.value)}
      />
      <LinkHint href={value} />
    </label>
  );
}

function Arrows({ onUp, onDown, upOff, downOff, what }: { onUp: () => void; onDown: () => void; upOff: boolean; downOff: boolean; what: string }) {
  return (
    <span className="flex shrink-0 gap-1">
      <button type="button" className="a-btn-icon" aria-label={`Move ${what} up`} disabled={upOff} onClick={onUp}>↑</button>
      <button type="button" className="a-btn-icon" aria-label={`Move ${what} down`} disabled={downOff} onClick={onDown}>↓</button>
    </span>
  );
}

function TilePhoto({ tile, onChange }: { tile: Tile; onChange: (src: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-24 shrink-0">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block aspect-[2/3] w-full overflow-hidden"
        style={{
          borderRadius: "var(--a-radius)",
          backgroundColor: "var(--a-surface-high)",
          outline: isReferenceSrc(tile.src) ? "2px solid var(--a-status-waiting)" : undefined,
        }}
        aria-label={`Change the photo for ${tile.label}`}
      >
        {tile.src ? (
          // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
          <img src={tile.src} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="a-label absolute inset-0 flex items-center justify-center p-1 text-center">+ Photo</span>
        )}
      </button>
      <button type="button" className="a-label mt-1 underline" onClick={() => setOpen(true)}>
        Change photo
      </button>
      {isReferenceSrc(tile.src) ? (
        <p className="a-label" style={{ color: "var(--a-status-waiting)" }}>Stand-in — replace</p>
      ) : null}
      <MediaDialog
        open={open}
        title={`Photo for “${tile.label}”`}
        onClose={() => setOpen(false)}
        onChoose={(item) => {
          onChange(item.src);
          setOpen(false);
        }}
      />
    </div>
  );
}

function PanelEditor({ panel, onChange }: { panel: Panel; onChange: (panel: Panel) => void }) {
  const setColumns = (columns: Column[]) => onChange({ ...panel, columns });
  const setColumn = (index: number, column: Column) =>
    setColumns(panel.columns.map((other, i) => (i === index ? column : other)));
  const setTiles = (tiles: Tile[]) => onChange({ ...panel, tiles });

  return (
    <div className="space-y-8">
      {/* The top item itself */}
      <section className="a-card grid gap-5 p-5 md:grid-cols-2" style={{ borderRadius: "var(--a-radius-md)" }}>
        <label className="block">
          <span className="a-label block" style={{ color: "var(--a-outline)" }}>Name in the menu bar</span>
          <input className="a-input mt-1 w-full" value={panel.label} maxLength={20} onChange={(event) => onChange({ ...panel, label: event.target.value })} />
        </label>
        <LinkInput label="Clicking the name itself goes to" value={panel.href} onChange={(href) => onChange({ ...panel, href })} />
      </section>

      {/* Columns of links */}
      <section className="space-y-4">
        <div>
          <h3 className="a-heading-sm">Links in the dropdown</h3>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            Grouped in columns, each with a small heading. Up to {LIMITS.columns} columns.
          </p>
        </div>

        {panel.columns.map((column, columnIndex) => (
          <div key={columnIndex} className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
            <div className="flex flex-wrap items-end gap-3">
              <label className="block min-w-0 flex-1">
                <span className="a-label block" style={{ color: "var(--a-outline)" }}>Column heading</span>
                <input className="a-input mt-1 w-full" value={column.heading} onChange={(event) => setColumn(columnIndex, { ...column, heading: event.target.value })} />
              </label>
              <Arrows
                what="column"
                onUp={() => setColumns(moved(panel.columns, columnIndex, -1))}
                onDown={() => setColumns(moved(panel.columns, columnIndex, 1))}
                upOff={columnIndex === 0}
                downOff={columnIndex === panel.columns.length - 1}
              />
              <button
                type="button"
                className="a-label underline"
                style={{ color: "var(--a-negative)" }}
                onClick={() => {
                  if (confirm(`Remove the whole “${column.heading}” column and its ${column.links.length} links?`))
                    setColumns(panel.columns.filter((_, i) => i !== columnIndex));
                }}
              >
                Remove column
              </button>
            </div>

            <ol className="mt-4 space-y-3">
              {column.links.map((link, linkIndex) => {
                const setLink = (next: Link) =>
                  setColumn(columnIndex, { ...column, links: column.links.map((other, i) => (i === linkIndex ? next : other)) });
                return (
                  <li key={linkIndex} className="flex flex-wrap items-start gap-3 border-t pt-3" style={{ borderColor: "var(--a-outline-variant)" }}>
                    <label className="block w-56">
                      <span className="a-label block" style={{ color: "var(--a-outline)" }}>Link text</span>
                      <input className="a-input mt-1 w-full" value={link.label} onChange={(event) => setLink({ ...link, label: event.target.value })} />
                    </label>
                    <LinkInput label="Goes to" value={link.href} onChange={(href) => setLink({ ...link, href })} />
                    <label className="flex items-center gap-2 pt-7">
                      <input type="checkbox" checked={link.phone} onChange={(event) => setLink({ ...link, phone: event.target.checked })} />
                      <span className="a-body-sm">Also on phones</span>
                    </label>
                    <span className="pt-6">
                      <Arrows
                        what="link"
                        onUp={() => setColumn(columnIndex, { ...column, links: moved(column.links, linkIndex, -1) })}
                        onDown={() => setColumn(columnIndex, { ...column, links: moved(column.links, linkIndex, 1) })}
                        upOff={linkIndex === 0}
                        downOff={linkIndex === column.links.length - 1}
                      />
                    </span>
                    <button
                      type="button"
                      className="a-label pt-7 underline"
                      style={{ color: "var(--a-negative)" }}
                      onClick={() => setColumn(columnIndex, { ...column, links: column.links.filter((_, i) => i !== linkIndex) })}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ol>
            <button
              type="button"
              className="a-btn-secondary mt-4"
              disabled={column.links.length >= LIMITS.links}
              onClick={() => setColumn(columnIndex, { ...column, links: [...column.links, { label: "", href: "", phone: true }] })}
            >
              + Add a link to “{column.heading || "this column"}”
            </button>
            {column.links.length >= LIMITS.links ? (
              <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>A column holds {LIMITS.links} links at most.</p>
            ) : null}
          </div>
        ))}

        <button
          type="button"
          className="a-btn-secondary"
          disabled={panel.columns.length >= LIMITS.columns}
          onClick={() => setColumns([...panel.columns, { heading: "", links: [{ label: "", href: "", phone: true }] }])}
        >
          + Add a column
        </button>
        {panel.columns.length >= LIMITS.columns ? (
          <p className="a-label" style={{ color: "var(--a-outline)" }}>The dropdown has room for {LIMITS.columns} columns.</p>
        ) : null}
      </section>

      {/* Photo tiles */}
      <section className="space-y-4">
        <div>
          <h3 className="a-heading-sm">Photo tiles</h3>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            Large photos on the right of the dropdown, each with a caption. Up to {LIMITS.tiles}.
          </p>
        </div>
        {panel.tiles.map((tile, tileIndex) => {
          const setTile = (next: Tile) => setTiles(panel.tiles.map((other, i) => (i === tileIndex ? next : other)));
          return (
            <div key={tileIndex} className="a-card flex flex-wrap items-start gap-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
              <TilePhoto tile={tile} onChange={(src) => setTile({ ...tile, src })} />
              <label className="block w-56">
                <span className="a-label block" style={{ color: "var(--a-outline)" }}>Caption</span>
                <input className="a-input mt-1 w-full" value={tile.label} onChange={(event) => setTile({ ...tile, label: event.target.value })} />
              </label>
              <LinkInput label="Goes to" value={tile.href} onChange={(href) => setTile({ ...tile, href })} />
              <span className="pt-6">
                <Arrows
                  what="tile"
                  onUp={() => setTiles(moved(panel.tiles, tileIndex, -1))}
                  onDown={() => setTiles(moved(panel.tiles, tileIndex, 1))}
                  upOff={tileIndex === 0}
                  downOff={tileIndex === panel.tiles.length - 1}
                />
              </span>
              <button type="button" className="a-label pt-7 underline" style={{ color: "var(--a-negative)" }} onClick={() => setTiles(panel.tiles.filter((_, i) => i !== tileIndex))}>
                Remove
              </button>
            </div>
          );
        })}
        <button
          type="button"
          className="a-btn-secondary"
          disabled={panel.tiles.length >= LIMITS.tiles}
          onClick={() => setTiles([...panel.tiles, { label: "", href: "", tone: "black" }])}
        >
          + Add a photo tile
        </button>
      </section>
    </div>
  );
}

export function MenuEditor({
  initial,
  links,
  media,
  initialPanel,
}: {
  initial: readonly NavPanel[];
  links: SiteLink[];
  media: MediaItem[];
  initialPanel?: string;
}) {
  const [panels, setPanels] = useState(() => toEditable(initial));
  const [active, setActive] = useState(() =>
    Math.max(0, initial.findIndex((panel) => panel.id === initialPanel)),
  );
  const [dirty, setDirty] = useState(false);
  const [problems, setProblems] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const save = () =>
    startTransition(async () => {
      const result = await saveMenuAction(toNav(panels));
      if (!result.ok) {
        setProblems(result.problems);
        setSaved(false);
        return;
      }
      setProblems([]);
      setDirty(false);
      setSaved(true);
    });

  return (
    <MediaLibraryProvider initial={media}>
      <SiteLinksProvider value={links}>
        <SiteLinksDatalist />
        <div className="space-y-6">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="a-heading-lg">Menu</h1>
              <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
                The menu at the top of every page. Choose one of the six below, then add, rename,
                move or remove what appears when shoppers point at it.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {dirty ? <span className="a-label" style={{ color: "var(--a-status-waiting)" }}>Unsaved changes</span> : null}
              {saved && !dirty ? <span className="a-body-sm" style={{ color: "var(--a-status-done)" }}>✓ Saved — every page shows it now.</span> : null}
              <a href="/" target="_blank" rel="noreferrer" className="a-btn-secondary">See the site ↗</a>
              <button type="button" className="a-btn-primary" disabled={!dirty || pending} onClick={save}>
                {pending ? "Saving…" : "Save & publish"}
              </button>
            </div>
          </header>

          {problems.length ? (
            <div role="alert" className="a-body-sm px-4 py-3" style={{ backgroundColor: "var(--a-negative-container)", borderRadius: "var(--a-radius)" }}>
              <strong>Not saved yet — please fix:</strong>
              <ul className="mt-1 list-disc pl-5">
                {problems.map((problem) => <li key={problem}>{problem}</li>)}
              </ul>
            </div>
          ) : null}

          {/* The six, laid out as they sit in the header: three, logo, three. */}
          <nav aria-label="Menu items" className="flex flex-wrap items-center gap-2">
            {panels.map((panel, index) => (
              <span key={panel.id} className="contents">
                {index === 3 ? <span className="a-label px-3" style={{ color: "var(--a-outline)" }}>· logo ·</span> : null}
                <button
                  type="button"
                  aria-pressed={active === index}
                  className={active === index ? "a-btn-primary" : "a-btn-secondary"}
                  onClick={() => setActive(index)}
                >
                  {panel.label || `Item ${index + 1}`}
                </button>
              </span>
            ))}
          </nav>

          <PanelEditor
            key={panels[active]!.id}
            panel={panels[active]!}
            onChange={(next) => {
              setPanels(panels.map((other, i) => (i === active ? next : other)));
              setDirty(true);
              setSaved(false);
            }}
          />
        </div>
      </SiteLinksProvider>
    </MediaLibraryProvider>
  );
}
