import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";

/**
 * Editorials was a mock-up with no save. Every editorial page — campaign
 * stories, craft, about, store — is now edited under Pages.
 */
export default async function AdminEditorialsRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  redirect("/admin/pages");
}
