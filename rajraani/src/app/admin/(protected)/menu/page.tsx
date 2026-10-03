import { MenuEditor } from "@/components/admin/MenuEditor";
import { siteLinks } from "@/lib/admin/site-links";
import { getMenu } from "@/lib/content/menu";
import { listMedia } from "@/lib/media/library";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Menu" };

export default async function AdminMenuRoute(props: PageProps<"/admin/menu">) {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const { item } = await props.searchParams;
  const [menu, links] = await Promise.all([getMenu(), siteLinks()]);
  return (
    <MenuEditor
      initial={menu}
      links={links}
      media={listMedia()}
      initialPanel={typeof item === "string" ? item : undefined}
    />
  );
}
