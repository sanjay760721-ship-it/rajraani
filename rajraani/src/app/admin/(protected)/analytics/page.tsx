import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";

/** The old Analytics address; the figures are under Reports (/admin/overview). */
export default async function AdminAnalyticsRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  redirect("/admin/overview");
}
