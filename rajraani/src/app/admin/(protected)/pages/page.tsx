import Link from "next/link";

import { NewPageButton } from "@/components/admin/NewPageButton";
import { countReferencePhotos } from "@/lib/admin/section-fields";
import { content } from "@/lib/content/content";
import { PAGE_KINDS, type PageKind } from "@/lib/content/repository";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Pages" };

/**
 * Every content page on the site, grouped the way the owner thinks of them.
 *
 * Campaign stories first — they change every season — then the craft and
 * about pages, then journal entries.
 */
export default async function AdminPagesRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const pages = await content.listPages();
  const groups = PAGE_KINDS.map((kind) => ({
    ...kind,
    pages: pages
      .filter((page) => page.kind === kind.value)
      .sort((a, b) => a.title.localeCompare(b.title)),
  })).filter((group) => group.pages.length > 0);

  const GROUP_TITLES: Record<PageKind, string> = {
    campaign_story: "Campaign pages",
    craft: "Store, about, craft and help pages",
    journal: "Journal",
  };

  const GROUP_HINTS: Record<PageKind, string> = {
    campaign_story: "Each campaign's story. To start a new campaign, press + New page and copy one of these.",
    craft: "Our story, the store, the craft pages, and the help pages shoppers look for.",
    journal: "Longer pieces of writing.",
  };

  return (
    <div className="space-y-6">
      {/* Header — the same shape as the Menu screen's. */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="a-heading-lg">Pages</h1>
          <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
            Every page on the site. Open one to change its photos, words and buttons, or add a new
            one — it starts as a copy of a page you pick.
          </p>
        </div>
        <NewPageButton
          pages={pages.map((page) => ({ slug: page.slug, title: page.title, group: GROUP_TITLES[page.kind] }))}
        />
      </header>

      {groups.map((group) => (
        <section
          key={group.value}
          id={group.value === "campaign_story" ? "campaigns" : undefined}
          className="a-card p-5"
          style={{ borderRadius: "var(--a-radius-md)" }}
        >
          <h2 className="a-heading-sm">{GROUP_TITLES[group.value]}</h2>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>{GROUP_HINTS[group.value]}</p>
          <ul className="mt-4 divide-y" role="list">
            {group.pages.map((page) => {
              const refs = countReferencePhotos(page.sections);
              return (
                <li key={page.slug} className="flex flex-wrap items-center gap-4 py-3" style={{ borderColor: "var(--a-outline-variant)" }}>
                  <div className="min-w-0 flex-1">
                    <Link href={`/admin/pages/${page.slug}`} className="a-body-md block truncate hover:underline" style={{ color: "var(--a-ink)" }}>
                      {page.title}
                    </Link>
                    <span className="a-label block" style={{ color: "var(--a-outline)" }}>
                      {page.sections.length} block{page.sections.length === 1 ? "" : "s"}
                      {refs > 0 ? (
                        <span style={{ color: "var(--a-status-waiting)" }}> · {refs} stand-in photo{refs === 1 ? "" : "s"} to replace</span>
                      ) : null}
                    </span>
                  </div>
                  <span className={`a-badge ${page.published ? "a-badge-live" : "a-badge-draft"}`}>
                    {page.published ? "Live" : "Hidden"}
                  </span>
                  <Link href={`/admin/pages/${page.slug}`} className="a-btn-secondary">
                    Edit
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
