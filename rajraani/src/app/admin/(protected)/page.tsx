import Link from "next/link";

import { togglePublishedAction } from "@/lib/admin/product-actions";
import { listProductsForAdmin } from "@/lib/data/admin-queries";
import { formatMoney } from "@/lib/money";

export const metadata = { title: "Pieces" };

/**
 * The product list.
 *
 * Drafts sort first — they are the ones needing attention, and a list ordered
 * purely by date buries the half-finished piece you came back to finish.
 */
export default async function AdminHome(props: PageProps<"/admin">) {
  const { saved, deleted } = await props.searchParams;
  const products = listProductsForAdmin();

  const drafts = products.filter((product) => product.published === 0).length;
  const soldOut = products.filter(
    (product) => product.published === 1 && product.inventory_quantity === 0,
  ).length;

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h1 className="text-h2">Pieces</h1>
          <p className="text-caption mt-2 text-ink-muted">
            {products.length} in the catalogue
            {drafts > 0 ? ` · ${drafts} draft${drafts === 1 ? "" : "s"}` : ""}
            {soldOut > 0 ? ` · ${soldOut} sold out` : ""}
          </p>
        </div>
        <Link href="/admin/products/new" className="bg-ink px-6 py-3 text-bg">
          <span className="eyebrow">Add a piece</span>
        </Link>
      </div>

      {saved ? <Notice>Saved.</Notice> : null}
      {deleted ? <Notice>Deleted.</Notice> : null}

      {products.length === 0 ? (
        <p className="mt-10 border border-rule px-6 py-16 text-center text-ink-body">
          Nothing yet. Add your first piece.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="eyebrow py-3 text-ink-muted">Name</th>
                <th scope="col" className="eyebrow py-3 text-ink-muted">SKU</th>
                <th scope="col" className="eyebrow py-3 text-ink-muted">Price</th>
                <th scope="col" className="eyebrow py-3 text-ink-muted">Stock</th>
                <th scope="col" className="eyebrow py-3 text-ink-muted">Photos</th>
                <th scope="col" className="eyebrow py-3 text-ink-muted">Status</th>
                <th scope="col" className="eyebrow py-3 text-right text-ink-muted">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-rule align-top">
                  <td className="py-4 pr-4">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="font-display text-ink hover:underline"
                    >
                      {product.poetic_name}
                    </Link>
                    <p className="text-caption text-ink-muted">{product.title}</p>
                  </td>
                  <td className="py-4 pr-4 text-caption text-ink-body">{product.sku}</td>
                  <td className="py-4 pr-4 tabular-nums text-ink">
                    {formatMoney({
                      minorUnits: product.price_minor,
                      currency: "INR",
                    })}
                  </td>
                  <td className="py-4 pr-4 tabular-nums text-ink-body">
                    {product.inventory_quantity === 0 ? (
                      <span className="text-ink-muted">Sold out</span>
                    ) : (
                      product.inventory_quantity
                    )}
                  </td>
                  <td className="py-4 pr-4 tabular-nums text-ink-body">
                    {/* Six is the shot template. Anything less is incomplete. */}
                    <span className={product.image_count < 6 ? "text-error" : ""}>
                      {product.image_count}
                    </span>
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className={`eyebrow ${
                        product.published ? "text-success" : "text-ink-muted"
                      }`}
                    >
                      {product.published ? "Live" : "Draft"}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <form action={togglePublishedAction} className="inline">
                      <input type="hidden" name="id" value={product.id} />
                      <input
                        type="hidden"
                        name="publish"
                        value={product.published ? "0" : "1"}
                      />
                      <button type="submit" className="eyebrow text-ink underline">
                        {product.published ? "Unpublish" : "Publish"}
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Notice({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="status"
      className="text-caption mt-6 border border-success px-4 py-3 text-success"
    >
      {children}
    </p>
  );
}
