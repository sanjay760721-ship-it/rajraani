import { HomepageEditor } from "@/components/admin/HomepageEditor";
import { siteLinks } from "@/lib/admin/site-links";
import { sectionTemplates } from "@/lib/admin/templates";
import { content, homepageIsSeed } from "@/lib/content/content";
import { listMedia } from "@/lib/media/library";

/*
 * The block types the cinematic homepage turns into scenes
 * (components/cinematic/scenes.ts). Any other type would save and then never
 * appear, so the Homepage screen does not offer it.
 */
const HOMEPAGE_TYPES = new Set([
  "heroCarousel", "brandStatement", "collectionTriptych", "videoBand", "categorySplit",
  "editorialSlideshow", "tileRow", "campaignSlideshow", "richText", "storesSlideshow",
]);

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
      templates={sectionTemplates().filter((template) => HOMEPAGE_TYPES.has(template.type))}
      media={listMedia()}
      links={links}
      isSeed={isSeed}
    />
  );
}
