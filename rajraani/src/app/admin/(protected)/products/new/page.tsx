import Link from "next/link";

import { ProductForm } from "@/components/admin/ProductForm";
import { formVocabulary } from "@/lib/admin/vocabulary";
import { campaignOptions } from "@/lib/data/admin-queries";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Add a piece" };

export default async function NewProductPage() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  return (
    <div className="space-y-8">
      <Link href="/admin/products" className="a-btn-ghost inline-flex items-center gap-2">
        ← All products
      </Link>
      <h1 className="a-display-md">Add a piece</h1>
      <p className="a-body-md" style={{ color: "var(--a-ink-variant)" }}>
        Fill in the details and press Save. You can add photos straight after.
      </p>

      <ProductForm vocabulary={formVocabulary()} campaigns={campaignOptions()} />
    </div>
  );
}