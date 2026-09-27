"use client";

import { createContext, useContext, useRef, useState } from "react";

import { isReferenceSrc } from "@/lib/admin/section-fields";
import type { MediaItem } from "@/lib/media/library";

/**
 * Choosing and uploading photographs, anywhere in the admin.
 *
 * The library is held once, in context, so a photo uploaded from one slide is
 * immediately offered on every other slide without a reload.
 */

type Library = { items: MediaItem[]; add: (items: MediaItem[]) => void };

const MediaContext = createContext<Library>({ items: [], add: () => {} });

export function MediaLibraryProvider({
  initial,
  children,
}: {
  initial: MediaItem[];
  children: React.ReactNode;
}) {
  const [items, setItems] = useState(initial);
  return (
    <MediaContext.Provider
      value={{ items, add: (added) => setItems((current) => [...added, ...current]) }}
    >
      {children}
    </MediaContext.Provider>
  );
}

export const useMediaLibrary = () => useContext(MediaContext);

/** Upload files to the library. Returns what was saved, or throws a readable message. */
export async function uploadPhotos(files: FileList | File[]): Promise<MediaItem[]> {
  const body = new FormData();
  for (const file of Array.from(files)) body.append("file", file);
  const response = await fetch("/admin/api/media", { method: "POST", body });
  const result = (await response.json().catch(() => ({}))) as {
    saved?: MediaItem[];
    error?: string;
  };
  if (!response.ok) {
    const error = new Error(result.error ?? "The upload failed.") as Error & { saved?: MediaItem[] };
    error.saved = result.saved;
    throw error;
  }
  return result.saved ?? [];
}

/** The upload button, reused by the picker and the Media screen. */
export function UploadButton({
  onUploaded,
  label = "Upload photos",
  multiple = true,
}: {
  onUploaded: (items: MediaItem[]) => void;
  label?: string;
  multiple?: boolean;
}) {
  const input = useRef<HTMLInputElement>(null);
  const { add } = useMediaLibrary();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    setError(null);
    try {
      const saved = await uploadPhotos(files);
      add(saved);
      onUploaded(saved);
    } catch (caught) {
      const failure = caught as Error & { saved?: MediaItem[] };
      if (failure.saved?.length) add(failure.saved);
      setError(failure.message);
    } finally {
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  };

  return (
    <div>
      <input
        ref={input}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/heic"
        multiple={multiple}
        className="sr-only"
        onChange={(event) => upload(event.target.files)}
        aria-label={label}
      />
      <button
        type="button"
        className="a-btn-primary"
        disabled={busy}
        onClick={() => input.current?.click()}
      >
        {busy ? "Uploading…" : label}
      </button>
      {error ? (
        <p role="alert" className="a-body-sm mt-2" style={{ color: "var(--a-negative)" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** A modal grid of the library: click a photo to use it. */
export function MediaDialog({
  open,
  onClose,
  onChoose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  onChoose: (item: MediaItem) => void;
  title: string;
}) {
  const { items } = useMediaLibrary();
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ backgroundColor: "rgb(27 28 28 / 0.45)" }}
      onClick={onClose}
    >
      <div
        className="a-card-elevated flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden"
        style={{ backgroundColor: "var(--a-surface-lowest)", borderRadius: "var(--a-radius-lg)" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="flex items-center justify-between gap-4 border-b p-5"
          style={{ borderColor: "var(--a-outline-variant)" }}
        >
          <h2 className="a-heading-sm">{title}</h2>
          <div className="flex items-center gap-3">
            <UploadButton
              label="Upload new"
              multiple={false}
              onUploaded={(saved) => {
                if (saved[0]) onChoose(saved[0]);
              }}
            />
            <button type="button" className="a-btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
        <div className="overflow-y-auto p-5">
          {items.length === 0 ? (
            <p className="a-body-md py-12 text-center" style={{ color: "var(--a-outline)" }}>
              No photos uploaded yet. Use <strong>Upload new</strong> to add one.
            </p>
          ) : (
            <ul className="grid grid-cols-3 gap-4 md:grid-cols-4" role="list">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onChoose(item)}
                    className="a-card-interactive block w-full overflow-hidden text-left"
                    style={{ borderRadius: "var(--a-radius-md)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- admin thumbnail */}
                    <img
                      src={item.src}
                      alt={item.alt || item.originalName}
                      className="aspect-square w-full object-cover"
                      style={{ backgroundColor: "var(--a-surface-high)" }}
                      loading="lazy"
                    />
                    <span className="a-label block truncate p-2" style={{ color: "var(--a-ink-variant)" }}>
                      {item.originalName}
                      <span className="block" style={{ color: "var(--a-outline)" }}>
                        {item.width}×{item.height}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

type Side = { tone: string; src?: string };
type ArtPair = { desktop: Side; mobile: Side };

/** One slot: a thumbnail with Change / Remove. */
function Slot({
  label,
  side,
  onChange,
}: {
  label: string;
  side: Side;
  onChange: (side: Side) => void;
}) {
  const [open, setOpen] = useState(false);
  const reference = isReferenceSrc(side.src);

  return (
    <div className="min-w-0">
      <span className="a-label block pb-1" style={{ color: "var(--a-outline)" }}>
        {label}
      </span>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block aspect-[4/3] w-full overflow-hidden"
        style={{
          borderRadius: "var(--a-radius-md)",
          backgroundColor: side.tone.startsWith("#") ? side.tone : "var(--a-surface-high)",
          outline: reference ? "2px solid var(--a-status-waiting)" : undefined,
        }}
        aria-label={`Change ${label.toLowerCase()} photo`}
      >
        {side.src ? (
          // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
          <img src={side.src} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="a-label absolute inset-0 flex items-center justify-center" style={{ color: "var(--a-ink-variant)" }}>
            No photo — click to add
          </span>
        )}
        {reference ? (
          <span
            className="a-label absolute inset-x-0 bottom-0 px-2 py-1 text-left"
            style={{ backgroundColor: "var(--a-status-waiting)", color: "#fff" }}
          >
            Stand-in photo — replace before launch
          </span>
        ) : null}
      </button>
      <div className="mt-2 flex gap-3">
        <button type="button" className="a-label underline" onClick={() => setOpen(true)}>
          {side.src ? "Change" : "Choose"}
        </button>
        {side.src ? (
          <button
            type="button"
            className="a-label underline"
            style={{ color: "var(--a-negative)" }}
            onClick={() => onChange({ tone: side.tone })}
          >
            Remove
          </button>
        ) : null}
      </div>
      <MediaDialog
        open={open}
        title={`Choose the ${label.toLowerCase()} photo`}
        onClose={() => setOpen(false)}
        onChoose={(item) => {
          onChange({ ...side, src: item.src });
          setOpen(false);
        }}
      />
    </div>
  );
}

/** Desktop and phone photos for one frame. */
export function ArtPairField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: ArtPair;
  onChange: (value: ArtPair) => void;
}) {
  const same = value.mobile.src === value.desktop.src;

  return (
    <fieldset className="space-y-3">
      <legend className="a-label pb-2" style={{ color: "var(--a-ink)" }}>
        {label}
      </legend>
      <div className="grid max-w-xl grid-cols-2 gap-4">
        <Slot
          label="Computer"
          side={value.desktop}
          onChange={(desktop) =>
            onChange(same ? { desktop, mobile: { ...value.mobile, src: desktop.src } } : { ...value, desktop })
          }
        />
        {same ? (
          <div>
            <span className="a-label block pb-1" style={{ color: "var(--a-outline)" }}>
              Phone
            </span>
            <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
              Uses the same photo, cropped to fit.
            </p>
            <button
              type="button"
              className="a-label mt-2 underline"
              onClick={() => onChange({ ...value, mobile: { ...value.mobile, src: undefined } })}
            >
              Use a different photo on phones
            </button>
          </div>
        ) : (
          <div>
            <Slot
              label="Phone"
              side={value.mobile}
              onChange={(mobile) => onChange({ ...value, mobile })}
            />
            <button
              type="button"
              className="a-label mt-1 underline"
              onClick={() => onChange({ ...value, mobile: { ...value.mobile, src: value.desktop.src } })}
            >
              Use the computer photo on phones too
            </button>
          </div>
        )}
      </div>
    </fieldset>
  );
}
