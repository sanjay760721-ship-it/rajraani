"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import {
  addProductPhotoAction,
  describeProductPhotoAction,
  moveProductPhotoAction,
  removeProductPhotoAction,
  replaceProductPhotoAction,
  type PhotoResult,
} from "@/lib/admin/product-photo-actions";
import type { MediaItem } from "@/lib/media/library";

import { MediaDialog, MediaLibraryProvider } from "./MediaPicker";

/**
 * A piece's photographs, slot by slot.
 *
 * Each piece starts with planned slots ("Full-length view of the draped
 * piece", "Macro detail of the weave"…). The owner fills them by uploading or
 * picking photos; the first one is the one shown in listings.
 */

export type PhotoSlot = {
  id: number;
  alt: string;
  url: string | null;
  /** What the shop shows here today when no real photo is set (a stand-in). */
  standIn?: string;
};

function Slot({
  slot,
  index,
  last,
  only,
  run,
}: {
  slot: PhotoSlot;
  index: number;
  last: boolean;
  /** The piece's only slot: removing it leaves the piece with no photos. */
  only: boolean;
  run: (action: () => Promise<PhotoResult>) => void;
}) {
  const [picking, setPicking] = useState(false);
  const [alt, setAlt] = useState(slot.alt);
  const shown = slot.url ?? slot.standIn;

  return (
    <li className="a-card overflow-hidden" style={{ borderRadius: "var(--a-radius-md)" }}>
      <button
        type="button"
        onClick={() => setPicking(true)}
        className="relative block aspect-[3/4] w-full"
        style={{ backgroundColor: "var(--a-surface-high)" }}
        aria-label={slot.url ? `Replace photo ${index + 1}` : `Add photo ${index + 1}`}
      >
        {shown ? (
          // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
          <img src={shown} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="a-body-sm absolute inset-0 flex items-center justify-center p-3 text-center" style={{ color: "var(--a-ink-variant)" }}>
            + Add photo
          </span>
        )}
        <span className="a-label absolute top-2 left-2 px-2 py-0.5" style={{ backgroundColor: "var(--a-surface-lowest)", borderRadius: "var(--a-radius)" }}>
          {index === 0 ? "1 · Main photo" : index + 1}
        </span>
        {!slot.url && slot.standIn ? (
          <span className="a-label absolute inset-x-0 bottom-0 px-2 py-1 text-left" style={{ backgroundColor: "var(--a-status-waiting)", color: "var(--a-surface-lowest)" }}>
            Stand-in photo — replace before launch
          </span>
        ) : null}
      </button>

      <div className="space-y-2 p-3">
        <p className="a-label" style={{ color: "var(--a-outline)" }}>What this photo should show</p>
        <textarea
          className="a-input w-full"
          rows={2}
          value={alt}
          onChange={(event) => setAlt(event.target.value)}
          onBlur={() => {
            if (alt !== slot.alt) run(() => describeProductPhotoAction(slot.id, alt));
          }}
        />
        <div className="flex flex-wrap gap-2">
          <button type="button" className="a-btn-secondary" onClick={() => setPicking(true)}>
            {slot.url ? "Replace" : "Add photo"}
          </button>
          <button type="button" className="a-btn-icon" aria-label="Move earlier" disabled={index === 0} onClick={() => run(() => moveProductPhotoAction(slot.id, -1))}>←</button>
          <button type="button" className="a-btn-icon" aria-label="Move later" disabled={last} onClick={() => run(() => moveProductPhotoAction(slot.id, 1))}>→</button>
          <button
            type="button"
            className="a-label ml-auto underline"
            style={{ color: "var(--a-negative)" }}
            onClick={() => {
              const warning = only
                ? "This is the piece’s only photo. Without a photo it will not show on the shop until you add one. Remove it?"
                : "Remove this photo from the piece?";
              if (confirm(warning)) run(() => removeProductPhotoAction(slot.id));
            }}
          >
            Remove
          </button>
        </div>
      </div>

      <MediaDialog
        open={picking}
        title={`Photo ${index + 1}`}
        onClose={() => setPicking(false)}
        onChoose={(item) => {
          setPicking(false);
          run(() => replaceProductPhotoAction(slot.id, item.src));
        }}
      />
    </li>
  );
}

export function ProductPhotos({
  productId,
  slots,
  media,
}: {
  productId: number;
  slots: PhotoSlot[];
  media: MediaItem[];
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [pending, startTransition] = useTransition();

  const run = (action: () => Promise<PhotoResult>) =>
    startTransition(async () => {
      setError(null);
      const result = await action();
      if (!result.ok) setError(result.error);
      router.refresh();
    });

  const filled = slots.filter((slot) => slot.url).length;

  return (
    <MediaLibraryProvider initial={media}>
      <section className="max-w-5xl space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="a-heading-sm">Photos</h2>
            <p className="a-body-sm mt-1" style={{ color: "var(--a-ink-variant)" }}>
              {filled === 0
                ? "No real photos yet. Click a slot to upload one — the first is shown in listings."
                : `${filled} of ${slots.length} photos added. The first is shown in listings.`}{" "}
              {pending ? "Saving…" : ""}
            </p>
          </div>
          <button type="button" className="a-btn-primary" onClick={() => setAdding(true)}>
            + Add a photo
          </button>
        </div>
        {error ? <p role="alert" className="a-body-sm" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4" role="list">
          {slots.map((slot, index) => (
            <Slot key={slot.id} slot={slot} index={index} last={index === slots.length - 1} only={slots.length === 1} run={run} />
          ))}
        </ul>
        <MediaDialog
          open={adding}
          title="Add a photo to this piece"
          onClose={() => setAdding(false)}
          onChoose={(item) => {
            setAdding(false);
            run(() => addProductPhotoAction(productId, item.src));
          }}
        />
      </section>
    </MediaLibraryProvider>
  );
}
