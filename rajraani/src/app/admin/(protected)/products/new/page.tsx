import Link from "next/link";

import { ProductForm } from "@/components/admin/ProductForm";
import { formVocabulary } from "@/lib/admin/vocabulary";
import { campaignOptions } from "@/lib/data/admin-queries";

export const metadata = { title: "Add a piece" };

export default function NewProductPage() {
  return (
    <div className="space-y-8">
      <Link href="/admin" className="a-btn-ghost inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Pieces
      </Link>
      <h1 className="a-display-md">Add a piece</h1>

      <ProductForm vocabulary={formVocabulary()} campaigns={campaignOptions()} />
    </div>
  );
}