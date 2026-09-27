import "server-only";

import { content } from "../content/content.ts";
import { catalogue } from "../data/catalogue.ts";

/**
 * Every page on the site a link can point at, for the editor's link picker.
 *
 * The owner chooses a destination by name ("Kala — campaign story") rather than
 * typing `/pages/kala`, so a typo can no longer produce a dead link. The field
 * still accepts a typed value — an outside link, a filtered search — but warns
 * when an internal one is not on this list.
 */

export type SiteLink = { href: string; label: string; group: string };

export async function siteLinks(): Promise<SiteLink[]> {
  const [pages, collections, products] = await Promise.all([
    content.listPages(),
    catalogue.listCollections(),
    catalogue.listProducts(),
  ]);

  return [
    { href: "/", label: "Homepage", group: "Site" },
    { href: "/search", label: "Search", group: "Site" },
    { href: "/pages/contact", label: "Contact", group: "Site" },
    ...pages.map((page) => ({
      href: `/pages/${page.slug}`,
      label: page.title,
      group: page.kind === "campaign_story" ? "Campaign pages" : "Pages",
    })),
    ...collections.map((collection) => ({
      href: `/collections/${collection.handle}`,
      label: collection.title,
      group: "Collections",
    })),
    ...products.map((product) => ({
      href: `/products/${product.handle}`,
      label: product.title,
      group: "Products",
    })),
  ].filter(
    // Contact is also a page; keep one entry per destination.
    (link, index, all) => all.findIndex((other) => other.href === link.href) === index,
  );
}
