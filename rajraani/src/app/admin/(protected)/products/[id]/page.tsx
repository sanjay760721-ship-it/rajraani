import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductForm } from "@/components/admin/ProductForm";
import { deleteProductAction } from "@/lib/admin/product-actions";
import { formVocabulary } from "@/lib/admin/vocabulary";
import {
  campaignOptions,
  getProductForEdit,
  listImages,
} from "@/lib/data/admin-queries";

export const metadata = { title: "Edit piece" };

export default async function EditProductPage(
  props: PageProps<"/admin/products/[id]">,
) {
  const { id } = await props.params;
  const { saved } = await props.searchParams;

  const productId = Number(id);
  if (!Number.isFinite(productId)) notFound();

  const product = getProductForEdit(productId);
  if (!product) notFound();

  const images = listImages(productId);

  return (
    <div className="space-y-8">
      <Link href="/admin" className="a-btn-ghost inline-flex items-center gap-2">
        <span className="material-symbols-outlined">arrow_back</span>
        Pieces
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
          <Link
            href={`/products/${product.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="a-btn-ghost"
          >
            View on the shop
            <span className="material-symbols-outlined">external</span>
          </Link>
        ) : null}
      </header>

      {saved ? (
        <p
          role="status"
          className="border px-4 py-3 a-label"
          style={{
            borderRadius: "var(--a-radius)",
            borderColor: "var(--a-positive)",
            color: "var(--a-positive)",
            backgroundColor: "var(--a-positive-container)",
          }}
        >
          Saved.
        </p>
      ) : null}

      <ProductForm
        product={product}
        vocabulary={formVocabulary()}
        campaigns={campaignOptions()}
      />

      <section className="mt-12 max-w-3xl border-t pt-8" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)" }}>
        <h2 className="a-heading-sm">Photographs</h2>
        <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>
          The template is five upright frames then one or two square detail
          frames. {images.length} on file.
        </p>

        {images.length === 0 ? (
          <p className="a-body-sm mt-4" style={{ color: "var(--a-ink-variant)" }}>
            None yet. Upload is not built — this piece renders schematic frames
            until it is.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {images.map((image) => (
              <li key={image.id} className="a-body-sm flex items-center gap-3" style={{ color: "var(--a-ink)" }}>
                <span className="a-label shrink-0" style={{ color: "var(--a-outline)" }}>
                  {image.position + 1} · {image.ratio}
                </span>
                <span>{image.alt}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12 max-w-3xl border-t pt-8" style={{ borderColor: "var(--a-negative)" }}>
        <h2 className="a-heading-sm" style={{ color: "var(--a-negative)" }}>
          Delete
        </h2>
        <p className="a-body-sm mt-1" style={{ color: "var(--a-ink-variant)" }}>
          Permanent, and takes the photographs with it. Unpublishing is usually
          what you want instead — it hides the piece but keeps everything.
        </p>
        <form action={deleteProductAction} className="mt-4">
          <input type="hidden" name="id" value={product.id} />
          <button type="submit" className="a-btn-secondary border-error text-error" style={{ borderColor: "var(--a-negative)" }}>
            <span className="a-label">Delete this piece</span>
          </button>
        </form>
      </section>
    </div>
  );
}