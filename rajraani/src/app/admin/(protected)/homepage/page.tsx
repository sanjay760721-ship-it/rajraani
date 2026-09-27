import { HomepageEditor } from "@/components/admin/HomepageEditor";
import { siteLinks } from "@/lib/admin/site-links";
import { sectionTemplates } from "@/lib/admin/templates";
import { content, homepageIsSeed } from "@/lib/content/content";
import { listMedia } from "@/lib/media/library";

export const metadata = { title: "Homepage" };

/**
 * Read on the server, edit on the client.
 *
 * The editor opens on what the site is actually serving, with the media
 * library and every linkable page loaded alongside it.
 */
export default async function AdminHomepageRoute() {
  const [sections, isSeed, links] = await Promise.all([
    content.getHomepageSections(),
    homepageIsSeed(),
    siteLinks(),
  ]);

  return (
    <HomepageEditor
      initialSections={sections}
      templates={sectionTemplates()}
      media={listMedia()}
      links={links}
      isSeed={isSeed}
    />
  );
}
