import { ProductsBoard } from "@/components/admin/ProductsBoard";
import { catalogue } from "@/lib/data/catalogue";
import { listProductsForAdmin } from "@/lib/data/admin-queries";

export const metadata = { title: "Products & stock" };

/**
 * Products & stock. Replaced the "Executive Overview" dashboard, whose tiles
 * (catalogue value, launch readiness, frames per piece) answered a
 * developer's questions rather than a shopkeeper's.
 */
export default async function AdminProductsRoute(props: PageProps<"/admin/products">) {
  const { saved, deleted } = await props.searchParams;
  const products = listProductsForAdmin();

  // First photo per piece, through the catalogue so it matches the shop.
  const thumbs: Record<string, string> = {};
  for (const product of await catalogue.listProducts()) {
    const src = product.images[0]?.src;
    if (src) thumbs[product.handle] = src;
  }

  const notice = saved ? "Saved — the shop is showing this now." : deleted ? "Piece deleted." : null;

  return <ProductsBoard products={products} thumbs={thumbs} notice={notice} />;
}
