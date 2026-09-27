import { redirect } from "next/navigation";

/**
 * Editorials was a mock-up with no save. Every editorial page — campaign
 * stories, craft, about, store — is now edited under Pages.
 */
export default function AdminEditorialsRoute() {
  redirect("/admin/pages");
}
