import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductForm } from "@/components/admin/ProductForm";
import { ProductPhotos, type PhotoSlot } from "@/components/admin/ProductPhotos";
import { deleteProductAction } from "@/lib/admin/product-actions";
import { formVocabulary } from "@/lib/admin/vocabulary";
import { catalogue } from "@/lib/data/catalogue";
import { campaignOptions, getProductForEdit, listImages } from "@/lib/data/admin-queries";
import { listMedia } from "@/lib/media/library";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Edit piece" };

export default async function EditProductPage(props: PageProps<"/admin/products/[id]">) {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const { id } = await props.params;
  const { saved } = await props.searchParams;

  const productId = Number(id);
  if (!Number.isFinite(productId)) notFound();

  const product = getProductForEdit(productId);
  if (!product) notFound();

  // What the shop shows today, so slots still on stand-in photos can say so.
  const onShop = await catalogue.getProduct(product.handle);
  const slots: PhotoSlot[] = listImages(productId).map((image, index) => ({
    id: image.id,
    alt: image.alt,
    url: image.url,
    standIn: image.url ? undefined : onShop?.images[index]?.src,
  }));

  return (
    <div className="space-y-10">
      <Link href="/admin/products" className="a-btn-ghost inline-flex items-center gap-2">
        ← All products
      </Link>

      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h1 className="a-display-md" style={{ color: "var(--a-ink)" }}>
            {product.poeticName}
          </h1>
          <p className="a-body-lg mt-1" style={{ color: "var(--a-ink-variant)" }}>
            {product.title}
          </p>
        </div>
        {product.published ? (
          <Link href={`/products/${product.handle}`} target="_blank" rel="noopener noreferrer" className="a-btn-secondary">
            See it on the shop ↗
          </Link>
        ) : (
          <span className="a-badge a-badge-draft">Hidden from the shop</span>
        )}
      </header>

      {saved ? (
        <p
          role="status"
          className="a-body-sm px-4 py-3"
          style={{ borderRadius: "var(--a-radius)", backgroundColor: "var(--a-positive-container)" }}
        >
          Saved — the shop is showing this now.
        </p>
      ) : null}

      <ProductPhotos productId={productId} slots={slots} media={listMedia()} />

      <ProductForm product={product} vocabulary={formVocabulary()} campaigns={campaignOptions()} />

      <details className="max-w-3xl border-t pt-6" style={{ borderColor: "var(--a-outline-variant)" }}>
        <summary className="a-label cursor-pointer" style={{ color: "var(--a-outline)" }}>
          Delete this piece forever
        </summary>
        <p className="a-body-sm mt-3" style={{ color: "var(--a-ink-variant)" }}>
          This cannot be undone and removes its photos from the piece. If it is sold out or you
          just don’t want it on the shop, untick <strong>Show this piece on the shop</strong>{" "}
          above instead — that hides it but keeps everything.
        </p>
        <form action={deleteProductAction} className="mt-4">
          <input type="hidden" name="id" value={product.id} />
          <button type="submit" className="a-btn-secondary" style={{ borderColor: "var(--a-negative)", color: "var(--a-negative)" }}>
            Yes, delete {product.poeticName} forever
          </button>
        </form>
      </details>
    </div>
  );
}
