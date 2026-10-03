import { BookingLinks } from "@/components/admin/BookingLinks";
import { bookingLinks } from "@/lib/admin/booking-links";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Store visits" };

/** Store-visit booking: the Calendly links on the site, managed in one place. */
export default async function AdminAppointmentsRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  return <BookingLinks links={await bookingLinks()} />;
}
