import { TextFinder } from "@/components/admin/TextFinder";
import { textIndex } from "@/lib/admin/text-index";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Change text" };

export default async function AdminTextRoute(props: PageProps<"/admin/text">) {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const { place, q } = await props.searchParams;
  return (
    <TextFinder
      entries={await textIndex()}
      initialPlace={typeof place === "string" ? place : undefined}
      initialQuery={typeof q === "string" ? q : ""}
    />
  );
}
