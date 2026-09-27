"use client";

import { useState } from "react";

import { savePageAction } from "@/lib/admin/content-actions";
import type { SiteLink } from "@/lib/admin/site-links";
import type { PageContent } from "@/lib/content/repository";
import type { Section } from "@/lib/content/sections";
import type { MediaItem } from "@/lib/media/library";

import { SectionListEditor } from "./SectionListEditor";

/**
 * One page: its title, introduction, whether it is live, and its bands.
 *
 * The web address (slug) is shown but not editable: changing it would break
 * every link, menu entry and search result pointing at the page. Renaming
 * with redirects is a later feature.
 */
export function PageEditor({
  page,
  templates,
  media,
  links,
}: {
  page: PageContent;
  templates: readonly Section[];
  media: MediaItem[];
  links: SiteLink[];
}) {
  const [title, setTitle] = useState(page.title);
  const [standfirst, setStandfirst] = useState(page.standfirst);
  const [published, setPublished] = useState(page.published);
  const [saved, setSaved] = useState({ title: page.title, standfirst: page.standfirst, published: page.published });

  const dirty =
    title !== saved.title || standfirst !== saved.standfirst || published !== saved.published;

  return (
    <SectionListEditor
      initialSections={page.sections}
      templates={templates}
      media={media}
      links={links}
      previewPath={`/pages/${page.slug}`}
      extraDirty={dirty}
      onSaved={() => setSaved({ title, standfirst, published })}
      save={(sections) =>
        savePageAction({ slug: page.slug, kind: page.kind, title, standfirst, sections, published })
      }
      title={title || "Untitled page"}
      intro={
        <>
          Pick a block on the left to change its photos, words and button. The page lives at{" "}
          <a href={`/pages/${page.slug}`} target="_blank" rel="noreferrer" className="underline">
            /pages/{page.slug}
          </a>
          .
        </>
      }
      header={
        <details className="a-card px-5 py-4" style={{ borderRadius: "var(--a-radius-md)" }} open={!published}>
          <summary className="flex cursor-pointer flex-wrap items-center gap-3">
            <span className="a-heading-sm flex-1">About this page</span>
            <span className={`a-badge ${published ? "a-badge-live" : "a-badge-draft"}`}>
              {published ? "Live" : "Hidden from shoppers"}
            </span>
          </summary>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                Page name (shown on browser tabs and in Google)
              </span>
              <input className="a-input mt-1 w-full" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>
            <label className="flex items-center gap-2 self-end pb-2">
              <input type="checkbox" checked={published} onChange={(event) => setPublished(event.target.checked)} />
              <span className="a-body-sm">
                Live on the site {published ? "" : "— tick when it is ready, then Save & publish"}
              </span>
            </label>
            <label className="block md:col-span-2">
              <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                Introduction (shown under the page name, and in Google)
              </span>
              <textarea className="a-input mt-1 w-full" rows={2} value={standfirst} onChange={(event) => setStandfirst(event.target.value)} />
            </label>
          </div>
        </details>
      }
    />
  );
}
