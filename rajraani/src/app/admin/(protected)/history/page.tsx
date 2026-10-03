import { ChangeHistory } from "@/components/admin/ChangeHistory";
import { listChanges } from "@/lib/admin/history";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Recent changes" };

export default async function AdminHistoryRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  return <ChangeHistory changes={listChanges()} />;
}
