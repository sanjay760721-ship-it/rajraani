import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";

/** FAQs are a page like any other: edited under Pages. */
export default async function AdminFaqsRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  redirect("/admin/pages/faqs");
}
