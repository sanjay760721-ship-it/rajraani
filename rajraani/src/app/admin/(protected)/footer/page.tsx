import { FooterEditor } from "@/components/admin/FooterEditor";
import { siteLinks } from "@/lib/admin/site-links";
import { getFooter } from "@/lib/content/footer";

export const metadata = { title: "Footer" };

export default async function AdminFooterRoute() {
  const [footer, links] = await Promise.all([getFooter(), siteLinks()]);
  return <FooterEditor initial={footer} links={links} />;
}
