import Link from "next/link";

import { ProductForm } from "@/components/admin/ProductForm";
import { formVocabulary } from "@/lib/admin/vocabulary";
import { campaignOptions } from "@/lib/data/admin-queries";

export const metadata = { title: "Add a piece" };

export default function NewProductPage() {
  return (
    <div>
      <Link href="/admin" className="eyebrow text-ink-muted hover:underline">
        ← Pieces
      </Link>
      <h1 className="text-h2 mt-3 mb-8">Add a piece</h1>

      <ProductForm vocabulary={formVocabulary()} campaigns={campaignOptions()} />
    </div>
  );
}
