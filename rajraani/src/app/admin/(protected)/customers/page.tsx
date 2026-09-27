import { ComingSoon } from "@/components/admin/ComingSoon";

export const metadata = { title: "Customers" };

export default function AdminCustomersRoute() {
  return (
    <ComingSoon
      title="Customers"
      willDo="A list of everyone who has bought from the shop, with their orders and how to reach them."
      meanwhile="each order shows the customer's name, phone, email and address."
      link={{ href: "/admin/orders", label: "Go to Orders" }}
    />
  );
}
