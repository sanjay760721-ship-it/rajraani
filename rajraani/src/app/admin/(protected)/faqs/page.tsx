import { redirect } from "next/navigation";

/** FAQs are a page like any other: edited under Pages. */
export default function AdminFaqsRoute() {
  redirect("/admin/pages/faqs");
}
