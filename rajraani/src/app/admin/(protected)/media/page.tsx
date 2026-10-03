import { MediaManager, type ReferenceUse } from "@/components/admin/MediaManager";
import { countReferencePhotos } from "@/lib/admin/section-fields";
import { content } from "@/lib/content/content";
import { listMedia } from "@/lib/media/library";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Photos" };

/**
 * The photo library, plus where reference photos are still in use.
 *
 * This used to list the files in `public/reference-only/` — the unlicensed
 * mock-up photography — as if it were the library. The library is now what
 * the owner uploads; the reference files appear only as a count of places
 * still to be replaced.
 */
export default async function AdminMediaRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const [homepage, pages] = await Promise.all([
    content.getHomepageSections(),
    content.listPages(),
  ]);

  const referenceUses: ReferenceUse[] = [
    { where: "Homepage", href: "/admin/homepage", count: countReferencePhotos(homepage) },
    ...pages.map((page) => ({
      where: page.title,
      href: `/admin/pages/${page.slug}`,
      count: countReferencePhotos(page.sections),
    })),
  ].filter((use) => use.count > 0);

  return <MediaManager items={listMedia()} referenceUses={referenceUses} />;
}
