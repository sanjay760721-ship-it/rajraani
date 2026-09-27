import { BookingLinks } from "@/components/admin/BookingLinks";
import { bookingLinks } from "@/lib/admin/booking-links";

export const metadata = { title: "Store visits" };

/** Store-visit booking: the Calendly links on the site, managed in one place. */
export default async function AdminAppointmentsRoute() {
  return <BookingLinks links={await bookingLinks()} />;
}
