"use client";

import { saveHomepageAction } from "@/lib/admin/content-actions";
import type { SiteLink } from "@/lib/admin/site-links";
import type { Section } from "@/lib/content/sections";
import type { MediaItem } from "@/lib/media/library";

import { SectionListEditor } from "./SectionListEditor";

/**
 * The homepage, band by band.
 *
 * Every word, photo, link and slide on the homepage is edited here. The
 * earlier version could only change a band's top-level text; photos, slides
 * and links were read-only. It now uses the same generated editor as every
 * other page, so nothing on the homepage is out of reach.
 *
 * Preview is the real page in an iframe, not a reconstruction — a second
 * implementation of the page would drift from the first and lie exactly when
 * it matters.
 */
export function HomepageEditor({
  initialSections,
  templates,
  media,
  links,
  isSeed,
}: {
  initialSections: readonly Section[];
  templates: readonly Section[];
  media: MediaItem[];
  links: SiteLink[];
  /** True while the homepage is still the built-in default. */
  isSeed: boolean;
}) {
  return (
    <SectionListEditor
      initialSections={initialSections}
      templates={templates}
      media={media}
      links={links}
      previewPath="/"
      save={saveHomepageAction}
      title="Homepage"
      intro={
        <>
          Pick a block on the left to change its photos, words and button. Nothing changes on the
          site until you press <strong>Save &amp; publish</strong>.
          {isSeed ? " (This is still the starting layout — your first save replaces it.)" : null}
        </>
      }
    />
  );
}
