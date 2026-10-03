import "server-only";

import { catalogue } from "../data/catalogue";
import type { NavPanel } from "../data/navigation";
import { filterProducts } from "../facets/engine";
import { parseFacetUrlState } from "../facets/url";

/**
 * The menu as shoppers see it: the admin's menu, less any filter link that
 * would open an empty grid.
 *
 * The menu is written once in the admin, but stock comes and goes. A link
 * such as "Jamawar" or "Pre-Order" with no piece behind it opens "Nothing
 * matches", which reads as a shop that has sold out. Only filtered collection
 * links (`/collections/<handle>?…`) are checked. The link reappears by itself
 * as soon as a matching piece is on the shop. The admin's Menu screen still
 * shows every link.
 */
export async function shownMenu(menu: readonly NavPanel[]): Promise<NavPanel[]> {
  const empty = new Map<string, Promise<boolean>>();

  const isEmpty = (href: string): Promise<boolean> => {
    if (!href.startsWith("/collections/") || !href.includes("?")) return Promise.resolve(false);
    let cached = empty.get(href);
    if (!cached) {
      cached = (async () => {
        const url = new URL(href, "http://shop.local");
        const collection = await catalogue.getCollection(url.pathname.split("/")[2] ?? "");
        if (!collection) return false;
        const { selection } = parseFacetUrlState(url.searchParams);
        return filterProducts(await catalogue.productsInCollection(collection), selection).length === 0;
      })();
      empty.set(href, cached);
    }
    return cached;
  };

  const keep = async <T extends { href: string }>(links: readonly T[]): Promise<T[]> => {
    const flags = await Promise.all(links.map((link) => isEmpty(link.href)));
    return links.filter((_, index) => !flags[index]);
  };

  return Promise.all(
    menu.map(async (panel) => ({
      ...panel,
      links: await keep(panel.links),
      columns: panel.columns
        ? (await Promise.all(panel.columns.map(async (column) => ({ ...column, links: await keep(column.links) })))).filter(
            (column) => column.links.length > 0,
          )
        : panel.columns,
    })),
  );
}
