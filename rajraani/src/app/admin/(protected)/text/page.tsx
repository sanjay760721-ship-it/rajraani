import { TextFinder } from "@/components/admin/TextFinder";
import { textIndex } from "@/lib/admin/text-index";

export const metadata = { title: "Change text" };

export default async function AdminTextRoute(props: PageProps<"/admin/text">) {
  const { place, q } = await props.searchParams;
  return (
    <TextFinder
      entries={await textIndex()}
      initialPlace={typeof place === "string" ? place : undefined}
      initialQuery={typeof q === "string" ? q : ""}
    />
  );
}
