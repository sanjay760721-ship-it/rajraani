import { ChangeHistory } from "@/components/admin/ChangeHistory";
import { listChanges } from "@/lib/admin/history";

export const metadata = { title: "Recent changes" };

export default function AdminHistoryRoute() {
  return <ChangeHistory changes={listChanges()} />;
}
