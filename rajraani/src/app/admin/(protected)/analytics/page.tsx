import { redirect } from "next/navigation";

/** The old Analytics address; the figures are under Reports (/admin/overview). */
export default function AdminAnalyticsRoute() {
  redirect("/admin/overview");
}
