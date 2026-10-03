"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";

import { changePhotoAction, changeTextAction } from "@/lib/admin/text-actions";
import type { PhotoEntry, TextEntry } from "@/lib/admin/text-index";
import type { MediaItem } from "@/lib/media/library";

/**
 * The editing bar and panel shown on the live site to a signed-in admin.
 *
 * Turn on **Edit mode**, point at anything, and what can be changed gets a gold
 * outline. Click it: a panel slides in on the right with the words (or the
 * photo) and a Save button. Nothing to learn about how the site is built.
 *
 * ── How a click finds its content ───────────────────────────────────────────
 * No page component knows about this editor. A click is matched to content by
 * what is ON the screen: the words of the clicked element against every piece
 * of text on this page, or the clicked photo's file against every photo on it.
 * That keeps the 25 band designs untouched — and means anything new that shows
 * content from the database becomes clickable without further work.
 *
 * Styles are inline, from the site palette tokens, so the
 * editor looks the same on every page and cannot be restyled by any one band.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type EditContext = {
  admin: true;
  texts: TextEntry[];
  photos: PhotoEntry[];
  media: MediaItem[];
  productEditHref: string | null;
};

type Target =
  | { kind: "text"; element: HTMLElement; entries: TextEntry[] }
  | { kind: "photo"; element: HTMLElement; entries: PhotoEntry[] }
  | { kind: "none"; element: HTMLElement };

const MODE_KEY = "rj-edit-mode";
const GOLD = "var(--color-accent)";
const INK = "var(--color-ink)";
const MUTED = "var(--color-ink-muted)";
const FONT = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

const normalise = (text: string) =>
  text.toLowerCase().replace(/[“”"‘’']/g, "").replace(/\s+/g, " ").trim();

function readMode(): boolean {
  try {
    return sessionStorage.getItem(MODE_KEY) === "on";
  } catch {
    return false;
  }
}

function writeMode(on: boolean) {
  try {
    if (on) sessionStorage.setItem(MODE_KEY, "on");
    else sessionStorage.removeItem(MODE_KEY);
  } catch {
    /* private window: edit mode just will not survive a reload */
  }
}

/** The photo file behind an <img>, unwrapping Next's optimiser URL. */
function imageSrc(img: HTMLImageElement): string {
  const raw = img.getAttribute("src") ?? "";
  if (raw.startsWith("/_next/image")) {
    return new URL(raw, location.origin).searchParams.get("url") ?? raw;
  }
  try {
    return new URL(raw, location.origin).pathname;
  } catch {
    return raw;
  }
}

function findText(start: HTMLElement, texts: TextEntry[]): { element: HTMLElement; entries: TextEntry[] } | null {
  let element: HTMLElement | null = start;
  for (let depth = 0; element && depth < 5; depth++, element = element.parentElement) {
    // A container holding a photo is a photo, not a sentence.
    if (element.querySelector("img, video")) break;
    const text = normalise(element.textContent ?? "");
    if (!text) continue;

    const exact = texts.filter((entry) => normalise(entry.value) === text);
    if (exact.length) return { element, entries: exact };

    // The design sometimes adds to the words (quote marks) or splits them
    // (one line per row); match either way round.
    // Only near-whole matches: a short word ("Shipping") found somewhere inside
    // a big block of text is not what was clicked.
    const inside = texts
      .filter((entry) => {
        const value = normalise(entry.value);
        const wraps = value.length >= 4 && text.includes(value) && text.length <= value.length + 6;
        const part = text.length >= 12 && value.includes(text);
        // A shortened form on the page: "Banaras" drawn from "Banaras Store".
        const lead = text.length >= 5 && value.startsWith(text + " ");
        return wraps || part || lead;
      })
      .sort((a, b) => b.value.length - a.value.length);
    if (inside.length) return { element, entries: [inside[0]!] };
  }
  return null;
}

function findPhoto(x: number, y: number, photos: PhotoEntry[]): { element: HTMLElement; entries: PhotoEntry[] } | null {
  const img = document
    .elementsFromPoint(x, y)
    .find((node): node is HTMLImageElement => node instanceof HTMLImageElement && !node.closest("[data-site-editor]"));
  if (!img) return null;
  const src = imageSrc(img);
  const entries = photos.filter((photo) => photo.desktopSrc === src || photo.mobileSrc === src);
  return entries.length ? { element: img, entries } : null;
}

// ── Shared bits of UI ───────────────────────────────────────────────────────

function Button({
  children,
  onClick,
  primary,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        font: `600 14px ${FONT}`,
        padding: "10px 18px",
        borderRadius: 8,
        border: primary ? "none" : "1px solid var(--color-rule-strong)",
        background: primary ? INK : "var(--color-bg)",
        color: primary ? "var(--color-bg)" : INK,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.45 : 1,
      }}
    >
      {children}
    </button>
  );
}

function Where({ place, trail }: { place: string; trail: string[] }) {
  return (
    <p style={{ font: `13px/1.5 ${FONT}`, color: MUTED, margin: 0 }}>
      <strong style={{ color: INK }}>{place}</strong>
      {trail.length ? ` › ${trail.join(" › ")}` : ""}
    </p>
  );
}

// ── The panels ──────────────────────────────────────────────────────────────

function TextPanel({ entry, onDone }: { entry: TextEntry; onDone: (saved: boolean) => void }) {
  const [value, setValue] = useState(entry.value);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const changed = value !== entry.value;

  const save = () =>
    startTransition(async () => {
      setError(null);
      const result = await changeTextAction(entry.ref, entry.value, value);
      if (!result.ok) return setError(result.error);
      onDone(true);
    });

  return (
    <>
      <h2 style={{ font: `600 18px ${FONT}`, margin: "0 0 6px" }}>Change these words</h2>
      <Where place={entry.place} trail={entry.trail} />
      <textarea
        autoFocus
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={Math.min(12, Math.max(3, Math.ceil(value.length / 38) + value.split("\n").length - 1))}
        style={{
          display: "block",
          width: "100%",
          marginTop: 16,
          padding: 12,
          font: `16px/1.5 ${FONT}`,
          color: INK,
          border: `2px solid ${GOLD}`,
          borderRadius: 8,
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />
      {error ? <p role="alert" style={{ color: "var(--color-error)", font: `14px ${FONT}` }}>{error}</p> : null}
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <Button primary onClick={save} disabled={!changed || pending}>
          {pending ? "Saving…" : "Save"}
        </Button>
        <Button onClick={() => onDone(false)}>Cancel</Button>
      </div>
      <p style={{ font: `13px ${FONT}`, color: MUTED, marginTop: 14 }}>
        Saving changes the live website straight away.
      </p>
    </>
  );
}

function PhotoPanel({
  entry,
  media: initialMedia,
  onDone,
}: {
  entry: PhotoEntry;
  media: MediaItem[];
  onDone: (saved: boolean) => void;
}) {
  const [media, setMedia] = useState(initialMedia);
  const [chosen, setChosen] = useState<MediaItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [pending, startTransition] = useTransition();
  const input = useRef<HTMLInputElement>(null);

  const upload = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setError(null);
    const body = new FormData();
    body.append("file", files[0]!);
    try {
      const response = await fetch("/admin/api/media", { method: "POST", body });
      const result = (await response.json()) as { saved?: MediaItem[]; error?: string };
      if (!response.ok || !result.saved?.[0]) throw new Error(result.error ?? "The upload failed.");
      setMedia((current) => [result.saved![0]!, ...current]);
      setChosen(result.saved[0]);
    } catch (caught) {
      setError((caught as Error).message);
    } finally {
      setUploading(false);
      if (input.current) input.current.value = "";
    }
  };

  const save = () =>
    startTransition(async () => {
      if (!chosen) return;
      setError(null);
      const result = await changePhotoAction(entry.ref, entry.desktopSrc, chosen.src);
      if (!result.ok) return setError(result.error);
      onDone(true);
    });

  const current = chosen?.src ?? entry.desktopSrc;

  return (
    <>
      <h2 style={{ font: `600 18px ${FONT}`, margin: "0 0 6px" }}>Change this photo</h2>
      <Where place={entry.place} trail={entry.trail} />

      <div style={{ marginTop: 16, borderRadius: 8, overflow: "hidden", background: "var(--color-bg-alt)", aspectRatio: "4 / 3" }}>
        {current ? (
          // eslint-disable-next-line @next/next/no-img-element -- editor preview
          <img src={current} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : null}
      </div>
      <p style={{ font: `13px ${FONT}`, color: MUTED, margin: "6px 0 0" }}>
        {chosen ? "New photo — press Save to use it." : "The photo on the website now."}
      </p>

      <input
        ref={input}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/heic"
        style={{ display: "none" }}
        onChange={(event) => upload(event.target.files)}
      />
      <div style={{ marginTop: 16 }}>
        <Button onClick={() => input.current?.click()} disabled={uploading}>
          {uploading ? "Uploading…" : "📷 Upload a new photo"}
        </Button>
      </div>

      {media.length ? (
        <>
          <p style={{ font: `600 13px ${FONT}`, color: INK, margin: "18px 0 8px" }}>Or pick one you uploaded before</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {media.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setChosen(item)}
                aria-label={`Use ${item.originalName}`}
                style={{
                  padding: 0,
                  border: chosen?.id === item.id ? `3px solid ${GOLD}` : "1px solid var(--color-rule)",
                  borderRadius: 6,
                  overflow: "hidden",
                  cursor: "pointer",
                  aspectRatio: "1",
                  background: "var(--color-bg-alt)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- editor thumbnail */}
                <img src={item.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </button>
            ))}
          </div>
        </>
      ) : null}

      {error ? <p role="alert" style={{ color: "var(--color-error)", font: `14px ${FONT}` }}>{error}</p> : null}
      <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
        <Button primary onClick={save} disabled={!chosen || pending}>
          {pending ? "Saving…" : "Save"}
        </Button>
        <Button onClick={() => onDone(false)}>Cancel</Button>
      </div>
      <p style={{ font: `13px ${FONT}`, color: MUTED, marginTop: 14 }}>
        The phone version of the page uses the same photo, cropped to fit.
      </p>
    </>
  );
}

function ChoosePanel<T extends { id: string; place: string; trail: string[] }>({
  entries,
  describe,
  onPick,
  onCancel,
}: {
  entries: T[];
  describe: (entry: T) => string;
  onPick: (entry: T) => void;
  onCancel: () => void;
}) {
  return (
    <>
      <h2 style={{ font: `600 18px ${FONT}`, margin: "0 0 6px" }}>This appears in more than one place</h2>
      <p style={{ font: `14px ${FONT}`, color: MUTED }}>Which one do you want to change?</p>
      <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
        {entries.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => onPick(entry)}
            style={{ textAlign: "left", padding: 12, border: "1px solid var(--color-rule)", borderRadius: 8, background: "var(--color-bg)", cursor: "pointer" }}
          >
            <Where place={entry.place} trail={entry.trail} />
            <span style={{ font: `14px ${FONT}`, color: INK }}>{describe(entry)}</span>
          </button>
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </>
  );
}

function NotHerePanel({
  productEditHref,
  inMenu,
  onClose,
}: {
  productEditHref: string | null;
  inMenu: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <h2 style={{ font: `600 18px ${FONT}`, margin: "0 0 6px" }}>{inMenu ? "This is the menu" : "This can’t be changed from here yet"}</h2>
      {inMenu ? (
        <p style={{ font: `15px/1.5 ${FONT}`, color: INK }}>
          The menu and everything in its dropdowns — campaigns, stories, photo tiles — is changed on
          the Menu screen.{" "}
          <a href="/admin/menu" style={{ color: GOLD, fontWeight: 600 }}>
            Edit the menu →
          </a>
        </p>
      ) : productEditHref ? (
        <p style={{ font: `15px/1.5 ${FONT}`, color: INK }}>
          Product names, prices, stories and photos are changed on the product itself.{" "}
          <a href={productEditHref} style={{ color: GOLD, fontWeight: 600 }}>
            Edit this product →
          </a>
        </p>
      ) : (
        <p style={{ font: `15px/1.5 ${FONT}`, color: INK }}>
          Some parts — the footer links and the product listings — are managed elsewhere.
          If you need this changed, use{" "}
          <a href="/admin/text" style={{ color: GOLD, fontWeight: 600 }}>
            Change text
          </a>{" "}
          or ask your developer.
        </p>
      )}
      <div style={{ marginTop: 16 }}>
        <Button onClick={onClose}>OK</Button>
      </div>
    </>
  );
}

// ── The whole thing ─────────────────────────────────────────────────────────

type Open =
  | { kind: "text"; entry: TextEntry }
  | { kind: "photo"; entry: PhotoEntry }
  | { kind: "chooseText"; entries: TextEntry[] }
  | { kind: "choosePhoto"; entries: PhotoEntry[] }
  | { kind: "none"; inMenu: boolean };

export function SiteEditorPanel({ context }: { context: EditContext }) {
  // Restores edit mode after the reload that follows a save. Safe to read
  // here: this component is only ever rendered in the browser (ssr: false).
  const [on, setOn] = useState(readMode);
  const [open, setOpen] = useState<Open | null>(null);
  const hovered = useRef<HTMLElement | null>(null);

  const resolve = useCallback(
    (target: HTMLElement, x: number, y: number): Target | null => {
      if (target.closest("[data-site-editor]")) return null;
      // In the header only the site-wide lines (the top-bar tagline) are edited
      // in place. A menu link reading "Kala" is the menu, not the homepage
      // slide that happens to share its name — those go to the Menu screen.
      const inHeader = !!target.closest("header");
      const texts = inHeader ? context.texts.filter((entry) => entry.ref.kind === "site") : context.texts;
      const text = findText(target, texts);
      if (text) return { kind: "text", ...text };
      const photo = inHeader ? null : findPhoto(x, y, context.photos);
      if (photo) return { kind: "photo", ...photo };
      if (target.closest("main, header, footer, aside")) return { kind: "none", element: target };
      return null;
    },
    [context],
  );

  useEffect(() => {
    if (!on || open) return;

    const clearHover = () => {
      if (hovered.current) {
        hovered.current.style.outline = hovered.current.dataset.editorOutline ?? "";
        hovered.current.style.cursor = "";
        hovered.current = null;
      }
    };

    const over = (event: MouseEvent) => {
      const found = resolve(event.target as HTMLElement, event.clientX, event.clientY);
      const element = found && found.kind !== "none" ? found.element : null;
      if (element === hovered.current) return;
      clearHover();
      if (element) {
        element.dataset.editorOutline = element.style.outline;
        element.style.outline = `2px dashed ${GOLD}`;
        element.style.cursor = "pointer";
        hovered.current = element;
      }
    };

    const click = (event: MouseEvent) => {
      const found = resolve(event.target as HTMLElement, event.clientX, event.clientY);
      if (!found) return;
      // Nothing editable here: let ordinary buttons work (closing a pop-up,
      // opening the cart), but do not follow a link away from the page being
      // edited — say why instead.
      if (found.kind === "none" && !(event.target as HTMLElement).closest("a[href]")) return;
      event.preventDefault();
      event.stopPropagation();
      clearHover();
      if (found.kind === "text") {
        setOpen(found.entries.length === 1 ? { kind: "text", entry: found.entries[0]! } : { kind: "chooseText", entries: found.entries });
      } else if (found.kind === "photo") {
        setOpen(found.entries.length === 1 ? { kind: "photo", entry: found.entries[0]! } : { kind: "choosePhoto", entries: found.entries });
      } else {
        // The header's menu links are edited on the Menu screen.
        setOpen({ kind: "none", inMenu: !!(event.target as HTMLElement).closest("header") });
      }
    };

    document.addEventListener("mouseover", over, true);
    document.addEventListener("click", click, true);
    return () => {
      document.removeEventListener("mouseover", over, true);
      document.removeEventListener("click", click, true);
      clearHover();
    };
  }, [on, open, resolve]);

  const toggle = (next: boolean) => {
    setOn(next);
    writeMode(next);
    if (!next) setOpen(null);
  };

  const done = (saved: boolean) => {
    setOpen(null);
    // Reload to show the saved change exactly as visitors will see it.
    if (saved) location.reload();
  };

  return (
    <div data-site-editor style={{ font: `14px ${FONT}`, color: INK }}>
      {/* The bar */}
      <div
        className="site-editor-bar"
        style={{
          position: "fixed",
          left: "50%",
          bottom: 20,
          transform: "translateX(-50%)",
          zIndex: 2147483000,
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 12px 10px 18px",
          background: INK,
          color: "var(--color-bg)",
          borderRadius: 999,
          boxShadow: "0 8px 30px rgb(0 0 0 / 0.3)",
          maxWidth: "calc(100vw - 24px)",
        }}
      >
        <span className="site-editor-bar__label" style={{ font: `14px ${FONT}` }}>
          {on ? "✏️ Click any words or photo to change them" : "You’re signed in as the shop admin"}
        </span>
        <button
          type="button"
          onClick={() => toggle(!on)}
          style={{
            font: `600 14px ${FONT}`,
            padding: "8px 16px",
            borderRadius: 999,
            border: "none",
            background: on ? "var(--color-bg)" : GOLD,
            color: on ? INK : "var(--color-bg)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {on ? "Done editing" : "✏️ Edit this page"}
        </button>
        <a href="/admin" style={{ color: "var(--color-bg)", font: `13px ${FONT}`, opacity: 0.8, whiteSpace: "nowrap" }}>
          Admin
        </a>
      </div>

      {/* The panel */}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: "fixed", inset: 0, zIndex: 2147483001, background: "rgb(0 0 0 / 0.25)" }}
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(420px, 100vw)",
              background: "var(--color-bg)",
              padding: 24,
              overflowY: "auto",
              boxShadow: "-8px 0 30px rgb(0 0 0 / 0.15)",
              boxSizing: "border-box",
            }}
          >
            {open.kind === "text" ? <TextPanel entry={open.entry} onDone={done} /> : null}
            {open.kind === "photo" ? <PhotoPanel entry={open.entry} media={context.media} onDone={done} /> : null}
            {open.kind === "chooseText" ? (
              <ChoosePanel
                entries={open.entries}
                describe={(entry) => entry.value.slice(0, 80)}
                onPick={(entry) => setOpen({ kind: "text", entry })}
                onCancel={() => setOpen(null)}
              />
            ) : null}
            {open.kind === "choosePhoto" ? (
              <ChoosePanel
                entries={open.entries}
                describe={() => ""}
                onPick={(entry) => setOpen({ kind: "photo", entry })}
                onCancel={() => setOpen(null)}
              />
            ) : null}
            {open.kind === "none" ? (
              <NotHerePanel productEditHref={context.productEditHref} inMenu={open.inMenu} onClose={() => setOpen(null)} />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
