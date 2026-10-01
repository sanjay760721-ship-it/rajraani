import { Cinematic } from "@/components/cinematic/Cinematic";
import { toScenes } from "@/components/cinematic/scenes";
import { toFooterData } from "@/components/cinematic/footer-data";
import { content } from "@/lib/content/content";
import { getMenu } from "@/lib/content/menu";
import { getFooter } from "@/lib/content/footer";
import { getSiteText } from "@/lib/content/site-text";

/** ISR at 60s per build.md §3. */
export const revalidate = 60;

/**
 * The homepage: the admin's homepage sections, told as full-screen cinematic
 * scenes (components/cinematic). Reordering or editing them in the admin
 * still changes the page.
 */
export default async function HomePage() {
  const [sections, menu, footer, siteText] = await Promise.all([
    content.getHomepageSections(),
    getMenu(),
    getFooter(),
    getSiteText(),
  ]);

  return (
    <Cinematic
      scenes={toScenes(sections, siteText)}
      menu={menu}
      footer={toFooterData(footer, siteText)}
    />
  );
}
