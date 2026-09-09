import { HomepageEditor } from "@/components/admin/HomepageEditor";
import { content, homepageIsSeed } from "@/lib/content/content";
import { HOMEPAGE_SECTIONS } from "@/lib/content/sections";

export const metadata = { title: "Homepage" };

/**
 * Read on the server, edit on the client.
 *
 * The editor is a client component because reordering is interactive, but the
 * content it starts from is read here — so the screen opens on what the site is
 * actually serving rather than on a constant that may no longer match it.
 */
export default async function AdminHomepageRoute() {
  const [sections, isSeed] = await Promise.all([
    content.getHomepageSections(),
    homepageIsSeed(),
  ]);

  return (
    <HomepageEditor
      initialSections={sections}
      // The seed doubles as the library of bands available to place. Once more
      // section types can be authored from scratch this becomes a real palette.
      library={HOMEPAGE_SECTIONS}
      isSeed={isSeed}
    />
  );
}
