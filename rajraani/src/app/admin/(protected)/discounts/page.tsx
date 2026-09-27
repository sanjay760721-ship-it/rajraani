import { ComingSoon } from "@/components/admin/ComingSoon";

export const metadata = { title: "Discounts" };

export default function AdminDiscountsRoute() {
  return (
    <ComingSoon
      title="Discount codes"
      willDo="Create codes like FESTIVE10 for a percentage or amount off, with start and end dates."
      meanwhile="to change a price, edit the piece itself."
      link={{ href: "/admin/products", label: "Go to Products & stock" }}
    />
  );
}
