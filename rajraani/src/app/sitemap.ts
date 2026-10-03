import type { MetadataRoute } from "next";

import { content } from "@/lib/content/content";
import { catalogue } from "@/lib/data/catalogue";
import { SITE_URL } from "@/lib/site-url";

/** Rebuilt at most hourly, so new pieces appear without a deploy. */
export const revalidate = 3600;

/**
 * sitemap.xml: the homepage, every collection, every piece on the shop and
 * every published page. Hidden pieces and drafts are left out, because the
 * catalogue and `listPages` only return what shoppers can see.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, collections, pages] = await Promise.all([
    catalogue.listProducts(),
    catalogue.listCollections(),
    content.listPages(),
  ]);
  return [
    { url: `${SITE_URL}/` },
    ...collections.map((collection) => ({ url: `${SITE_URL}/collections/${collection.handle}` })),
    ...products.map((product) => ({ url: `${SITE_URL}/products/${product.handle}` })),
    ...pages.filter((page) => page.published).map((page) => ({ url: `${SITE_URL}/pages/${page.slug}` })),
  ];
}
