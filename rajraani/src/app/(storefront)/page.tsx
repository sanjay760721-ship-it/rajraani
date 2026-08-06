import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { HOMEPAGE_SECTIONS } from "@/lib/content/sections";

/** ISR at 60s per build.md §3. */
export const revalidate = 60;

/**
 * The homepage is a stack of independently-configured sections, assembled from
 * an ordered list rather than hardcoded. Reordering it is a content edit
 * (build.md §2.4).
 */
export default function HomePage() {
  return (
    <>
      {HOMEPAGE_SECTIONS.map((section, index) => (
        <SectionRenderer key={section.id} section={section} index={index} />
      ))}
    </>
  );
}
