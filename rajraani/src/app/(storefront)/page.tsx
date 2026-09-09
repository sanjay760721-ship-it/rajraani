import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { content } from "@/lib/content/content";

/** ISR at 60s per build.md §3. */
export const revalidate = 60;

/**
 * The homepage is a stack of independently-configured sections, assembled from
 * an ordered list rather than hardcoded. Reordering it is a content edit
 * (build.md §2.4).
 */
export default async function HomePage() {
  // Through the content seam, so an edit in the admin reaches the page. Falls
  // back to the committed seed while nothing has been authored.
  const sections = await content.getHomepageSections();

  return (
    <>
      {sections.map((section, index) => (
        <SectionRenderer key={section.id} section={section} index={index} />
      ))}
    </>
  );
}
