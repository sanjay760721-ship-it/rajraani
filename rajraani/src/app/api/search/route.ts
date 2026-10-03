import { searchSite } from "@/lib/search-index";

/**
 * Typeahead for the search overlay: the same live index as /search, so the
 * overlay never lists a piece the shop hides or misses an admin edit.
 */
export async function GET(request: Request) {
  const query = (new URL(request.url).searchParams.get("q") ?? "").slice(0, 100);
  const results = await searchSite(query);
  return Response.json(results, { headers: { "Cache-Control": "no-store" } });
}
