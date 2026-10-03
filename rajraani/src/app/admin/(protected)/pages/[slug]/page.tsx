import Link from "next/link";
import { notFound } from "next/navigation";

import { PageEditor } from "@/components/admin/PageEditor";
import { siteLinks } from "@/lib/admin/site-links";
import { sectionTemplates } from "@/lib/admin/templates";
import { content } from "@/lib/content/content";
import { listMedia } from "@/lib/media/library";
import { requireAdmin } from "@/lib/auth/session";

export async function generateMetadata(props: PageProps<"/admin/pages/[slug]">) {
  const { slug } = await props.params;
  const page = await content.getPage(slug);
  return { title: page ? `Edit · ${page.title}` : "Page" };
}

export default async function AdminPageEditRoute(props: PageProps<"/admin/pages/[slug]">) {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const { slug } = await props.params;
  const { created } = await props.searchParams;
  const [page, links] = await Promise.all([content.getPage(slug), siteLinks()]);
  if (!page) notFound();

  return (
    <div className="space-y-4">
      <Link href="/admin/pages" className="a-label underline" style={{ color: "var(--a-outline)" }}>
        ← All pages
      </Link>
      {created ? (
        <p role="status" className="a-body-sm px-4 py-3" style={{ backgroundColor: "var(--a-positive-container)", borderRadius: "var(--a-radius)" }}>
          <strong>Your new page is ready, and hidden from shoppers.</strong> It starts as a copy — change
          its words and photos below, tick <strong>Live on the site</strong>, press Save, then add it to
          the <Link href="/admin/menu" className="underline">Menu</Link>.
        </p>
      ) : null}
      <PageEditor page={page} templates={sectionTemplates()} media={listMedia()} links={links} />
    </div>
  );
}
