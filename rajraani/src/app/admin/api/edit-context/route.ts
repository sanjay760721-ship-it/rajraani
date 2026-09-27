import { currentAdmin } from "@/lib/auth/session";
import { forPage, photoIndex, textIndex } from "@/lib/admin/text-index";
import { listProductsForAdmin } from "@/lib/data/admin-queries";
import { listMedia } from "@/lib/media/library";

/**
 * What can be edited on one storefront page — for the on-site editor.
 *
 * The storefront is static, so it cannot know at render time who is looking.
 * The editing bar asks here instead, and only when the `rj_edit` hint cookie
 * says an admin signed in on this browser. Anyone without a real session gets
 * a 401 and the page stays exactly as a visitor sees it.
 */
export async function GET(request: Request) {
  const admin = await currentAdmin();
  if (!admin) return Response.json({ admin: false }, { status: 401 });

  const pathname = new URL(request.url).searchParams.get("path") ?? "/";
  const [texts, photos] = await Promise.all([textIndex(), photoIndex()]);

  return Response.json(
    {
      admin: true,
      texts: forPage(texts, pathname),
      photos: forPage(photos, pathname),
      media: listMedia(),
      // On a product page, where to edit that product.
      productEditHref: productEditHref(pathname),
    },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}

function productEditHref(pathname: string): string | null {
  if (!pathname.startsWith("/products/")) return null;
  const handle = pathname.split("/")[2];
  try {
    const row = listProductsForAdmin().find((product) => product.handle === handle);
    return row ? `/admin/products/${row.id}` : null;
  } catch {
    // Before the database is seeded, products come from fixtures and have no editor.
    return null;
  }
}
