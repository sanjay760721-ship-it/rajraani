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
    <div>
      <Link href="/admin" className="eyebrow text-ink-muted hover:underline">
        ← Pieces
      </Link>

      <div className="mt-3 mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h1 className="text-h2">{product.poeticName}</h1>
          <p className="text-caption mt-1 text-ink-muted">{product.title}</p>
        </div>
        {product.published ? (
          <Link
            href={`/products/${product.handle}`}
            target="_blank"
            className="eyebrow text-ink underline"
          >
            View on the shop ↗
          </Link>
        ) : null}
      </div>

      {saved ? (
        <p
          role="status"
          className="text-caption mb-8 border border-success px-4 py-3 text-success"
        >
          Saved.
        </p>
      ) : null}

      <ProductForm
        product={product}
        vocabulary={formVocabulary()}
        campaigns={campaignOptions()}
      />

      <section className="mt-16 max-w-3xl border-t border-rule pt-6">
        <h2 className="text-h4">Photographs</h2>
        <p className="text-caption mt-1 text-ink-muted">
          The template is five upright frames then one or two square detail
          frames. {images.length} on file.
        </p>

        {images.length === 0 ? (
          <p className="text-caption mt-4 text-ink-body">
            None yet. Upload is not built — this piece renders schematic frames
            until it is.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {images.map((image) => (
              <li key={image.id} className="text-caption text-ink-body">
                <span className="eyebrow mr-3 text-ink-muted">
                  {image.position + 1} · {image.ratio}
                </span>
                {image.alt}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-16 max-w-3xl border-t border-error pt-6">
        <h2 className="text-h4 text-error">Delete</h2>
        <p className="text-caption mt-1 text-ink-body">
          Permanent, and takes the photographs with it. Unpublishing is usually
          what you want instead — it hides the piece but keeps everything.
        </p>
        <form action={deleteProductAction} className="mt-4">
          <input type="hidden" name="id" value={product.id} />
          <button type="submit" className="border border-error px-6 py-3 text-error">
            <span className="eyebrow">Delete this piece</span>
          </button>
        </form>
      </section>
    </div>
  );
}
