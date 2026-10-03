import { FooterEditor } from "@/components/admin/FooterEditor";
import { siteLinks } from "@/lib/admin/site-links";
import { getFooter } from "@/lib/content/footer";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Footer" };

export default async function AdminFooterRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const [footer, links] = await Promise.all([getFooter(), siteLinks()]);
  return <FooterEditor initial={footer} links={links} />;
}
