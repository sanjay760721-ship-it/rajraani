import { CollectionsManager, type CollectionView } from "@/components/admin/CollectionsManager";
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
  const collections = await catalogue.listCollections();

  const views: CollectionView[] = await Promise.all(
    collections.map(async (collection) => {
      const pieces = await catalogue.productsInCollection(collection);
      return {
        handle: collection.handle,
        title: collection.title,
        intro: collection.seoIntro,
        how:
          collection.kind === "facet"
            ? describe(collection.facets)
            : collection.kind === "campaign"
              ? "The pieces of this campaign. A piece joins it when its Campaign is set on the product."
              : "Hand-picked pieces.",
        count: pieces.length,
        thumbs: pieces
          .slice(0, 6)
          .map((piece) => ({ src: piece.images[0]?.src, name: piece.poeticName }))
          .filter((thumb): thumb is { src: string; name: string } => !!thumb.src),
      };
    }),
  );

  return <CollectionsManager collections={views} />;
}
