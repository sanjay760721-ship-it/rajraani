import type { Vocabulary } from "@/components/admin/ProductForm";
import { termsForGroup } from "../domain/taxonomy.ts";

/**
 * The vocabulary, shaped for the admin form's selects.
 *
 * Read from `taxonomy/facets.json` at render time, so adding a weave is a JSON
 * edit and a redeploy rather than a code change — and there is exactly one
 * place a term can come from.
 */
export function formVocabulary(): Vocabulary {
  const options = (group: Parameters<typeof termsForGroup>[0]) =>
    termsForGroup(group).map((term) => ({ slug: term.slug, name: term.name }));

  return {
    garment: options("garment"),
    weave: options("weave"),
    fabric: options("fabric"),
    colour: options("colour"),
    zari: options("zari"),
    motif: options("motif"),
    fulfilment: options("fulfilment"),
  };
}
