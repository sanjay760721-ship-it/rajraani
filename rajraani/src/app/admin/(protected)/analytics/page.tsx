import { redirect } from "next/navigation";

/** The Overview moved to /admin/products. */
export default function AdminAnalyticsRoute() {
  redirect("/admin/overview");
}
