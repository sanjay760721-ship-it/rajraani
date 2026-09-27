import {
  CollectionsManager,
  type CollectionView,
  type FilterGroup,
  type PieceOption,
} from "@/components/admin/CollectionsManager";
import { formVocabulary } from "@/lib/admin/vocabulary";
import { listProductsForAdmin } from "@/lib/data/admin-queries";
import { catalogue } from "@/lib/data/catalogue";
import { FACET_GROUP_LABELS, termsForGroup, type FacetGroup } from "@/lib/domain/taxonomy";

export const metadata = { title: "Collections" };

/**
 * The shop's real collections.
 *
 * This replaced a mock-up listing jewellery collections ("Maharani Pearls",
 * "Temple Gold") that have never existed in this shop.
 */

/** How one filter reads in a sentence: "woven in Kadhua", "in Katan silk". */
const PHRASE: Partial<Record<FacetGroup, (names: string) => string>> = {
  garment: (names) => `that is a ${names.toLowerCase()}`,
  weave: (names) => `woven in ${names}`,
  fabric: (names) => `in ${names}`,
  colour: (names) => `in ${names.toLowerCase()}`,
  zari: (names) => `with ${names.toLowerCase()}`,
  motif: (names) => `with ${names.toLowerCase()} motifs`,
};

/** "Shows every piece woven in Kadhua" — how a collection fills itself, in words. */
function describe(facets: Readonly<Record<string, readonly string[]>>): string {
  const parts = Object.entries(facets)
    .filter(([, slugs]) => slugs.length)
    .map(([group, slugs]) => {
      const names = slugs
        .map((slug) => termsForGroup(group as FacetGroup).find((term) => term.slug === slug)?.name ?? slug)
        .join(" or ");
      const phrase = PHRASE[group as FacetGroup];
      return phrase ? phrase(names) : `with ${FACET_GROUP_LABELS[group as FacetGroup] ?? group} ${names}`;
    });
  return parts.length
    ? `Shows every piece ${parts.join(" and ")} — automatically.`
    : "Shows every piece in the shop — automatically.";
}

export default async function AdminCollectionsRoute() {
  const [collections, shopProducts] = await Promise.all([catalogue.listCollections(), catalogue.listProducts()]);
  const rows = listProductsForAdmin();
  const idByHandle = new Map(rows.map((row) => [row.handle, row.id]));
  const thumbByHandle = new Map(shopProducts.map((product) => [product.handle, product.images[0]?.src]));

  const pieces: PieceOption[] = rows
    .map((row) => ({
      id: row.id,
      name: row.poetic_name,
      title: row.title,
      thumb: thumbByHandle.get(row.handle),
      hidden: row.published !== 1,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const vocabulary = formVocabulary();
  const filterGroups: FilterGroup[] = (
    [
      ["garment", "What it is", vocabulary.garment],
      ["weave", "Weave", vocabulary.weave],
      ["fabric", "Fabric", vocabulary.fabric],
      ["colour", "Main colour", vocabulary.colour],
      ["motif", "Motif", vocabulary.motif],
      ["zari", "Zari & thread", vocabulary.zari],
    ] as const
  ).map(([group, label, options]) => ({ group, label, options: options.map((option) => ({ slug: option.slug, name: option.name })) }));

  const views: CollectionView[] = await Promise.all(
    collections.map(async (collection) => {
      const inside = await catalogue.productsInCollection(collection);
      return {
        handle: collection.handle,
        title: collection.title,
        intro: collection.seoIntro,
        kind: collection.kind,
        how:
          collection.kind === "facet"
            ? describe(collection.facets)
            : collection.kind === "campaign"
              ? "This campaign's pieces, picked by hand."
              : "Pieces picked by hand, in the order you choose.",
        facets: collection.kind === "facet" ? Object.fromEntries(Object.entries(collection.facets).map(([k, v]) => [k, [...v]])) : {},
        pieceIds:
          collection.kind === "facet"
            ? []
            : collection.productHandles.map((handle) => idByHandle.get(handle)).filter((id): id is number => id !== undefined),
        count: inside.length,
        thumbs: inside
          .slice(0, 6)
          .map((piece) => ({ src: piece.images[0]?.src, name: piece.poeticName }))
          .filter((thumb): thumb is { src: string; name: string } => !!thumb.src),
      };
    }),
  );

  return <CollectionsManager collections={views} pieces={pieces} filterGroups={filterGroups} />;
}
