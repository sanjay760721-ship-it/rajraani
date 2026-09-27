import { ComingSoon } from "@/components/admin/ComingSoon";

export const metadata = { title: "Weavers" };

export default function AdminArtisansRoute() {
  return (
    <ComingSoon
      title="Weavers"
      willDo="A page for each weaver and workshop, linked from the pieces they made."
      meanwhile="each piece has a “Where it was made” section — workshop, loom and weeks on the loom."
      link={{ href: "/admin/products", label: "Go to Products & stock" }}
    />
  );
}
