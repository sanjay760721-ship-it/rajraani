import type { MetadataRoute } from "next";

import { SITE_LIVE, SITE_URL } from "@/lib/site-url";

/**
 * robots.txt. Every crawler is turned away until launch (`SITE_LIVE=1`); after
 * that the shop is open and the private screens stay out of the index.
 */
export default function robots(): MetadataRoute.Robots {
  if (!SITE_LIVE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/api", "/cart", "/wishlist", "/order-confirmation", "/search", "/account", "/login"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
