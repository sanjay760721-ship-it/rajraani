import { HomepageExperience } from "@/components/homepage/HomepageExperience";
import { content } from "@/lib/content/content";

/** ISR at 60s per build.md §3. */
export const revalidate = 60;

/**
 * The homepage stays data-driven through the content repository, but its
 * presentation is intentionally distinct from the reference site.
 */
export default async function HomePage() {
  const sections = await content.getHomepageSections();

  return <HomepageExperience sections={sections} />;
}
