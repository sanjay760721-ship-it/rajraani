import { ComingSoon } from "@/components/admin/ComingSoon";

export const metadata = { title: "Appointments" };

export default function AdminAppointmentsRoute() {
  return (
    <ComingSoon
      title="Store appointments"
      willDo="Requests to visit the store, so you can confirm or suggest another time."
      meanwhile="visit bookings go through the “Book an appointment” links on the website."
    />
  );
}
