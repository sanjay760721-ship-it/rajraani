import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { content } from "@/lib/content/content";
import { catalogue } from "@/lib/data/catalogue";

/**
 * Editorial pages — campaign stories and craft pages.
 *
 * The canonical rule from build.md §3: a campaign's `/pages/x` is the canonical
 * editorial URL and `/collections/x` is the canonical shoppable URL. They are
 * cross-linked both ways and deliberately not merged — the dual-URL pattern is
 * SEO-productive, and the pairing is an authored relationship held on the
 * campaign, not something inferred from the handle (pre-build-gaps.md §4).
 */
export const revalidate = 300;

export async function generateStaticParams() {
  const pages = await content.listPages();
  // Only published pages get a prerendered path — a draft must not be
  // reachable by guessing its slug.
  return pages.filter((page) => page.published).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(props: PageProps<"/pages/[slug]">) {
  const { slug } = await props.params;
  const page = await content.getPage(slug);
  if (!page?.published) return {};
  return { title: page.title, description: page.standfirst };
}

export default async function EditorialPage(props: PageProps<"/pages/[slug]">) {
  const { slug } = await props.params;
  const page = await content.getPage(slug);
  // A draft is a 404 to the storefront. Preview is the admin's job, and it
  // authenticates; a published check here is the only thing standing between a
  // half-written page and anyone who guesses the URL.
  if (!page?.published) notFound();

  // Campaign lookup goes through the repository. The pairing is authored, so
  // the story page has to ask for it rather than infer it from the slug.
  const campaign = await catalogue.getCampaign(slug);

  // A campaign story opens on a hero, which carries the h1. A craft page opens
  // on prose and needs a title block of its own — otherwise the page ships with
  // no h1 at all, which is how heading order rots.
  const first = page.sections[0];
  const opensWithHero = first?.type === "hero";

  /*
   * An about page opens on a full-bleed banner and puts its title UNDERNEATH.
   *
   * So a leading `imageBand` with `bleed` is hoisted above the header and the
   * rest of the list renders after it. Done here rather than by letting the
   * header float, because the h1 has to stay in the document before the bands
   * that follow it — `scripts/lint-headings.mjs` checks that, and a banner is
   * not a heading.
   */
  const opensWithBanner = first?.type === "imageBand" && first.bleed === true;
  const body = opensWithBanner ? page.sections.slice(1) : page.sections;

  /*
   * A contact panel carries its own h1, at the top of its left column.
   *
   * The reference's contact page has no centred title block above the two
   * columns — the title sits where the addresses start. Rendering the shared
   * header as well put "Contact us" on the page twice, once centred and once
   * ranged left underneath it.
   */
  const opensWithContactPanel = first?.type === "contactPanel";

  return (
    <article>
      {opensWithBanner ? <SectionRenderer section={first} index={0} /> : null}

      {opensWithHero || opensWithContactPanel ? null : (
        /*
         * Centred, and at the same measure as the `richText` blocks below it.
         * It was ranged left in a 680px column while everything under it was
         * centred in the same column — three elements in a stack disagreeing
         * about their own axis.
         */
        <header className="wrap-prose section-pad text-center">
          <h1 className="text-h1">{page.title}</h1>
          <p className="text-body mt-4 text-ink-body">{page.standfirst}</p>
        </header>
      )}

      {body.map((section, index) => (
        /*
         * The index must stay the section's position in the ORIGINAL list.
         * `Hero` renders its title as the h1 only at index 0, so shifting every
         * section up by one took the h1 off all five campaign stories at once
         * — caught by `lint:headings`, invisible in a browser.
         */
        <SectionRenderer
          key={section.id}
          section={section}
          index={opensWithBanner ? index + 1 : index}
        />
      ))}

      {campaign ? (
        <section className="wrap-prose border-t border-rule py-16 text-center">
          <p className="eyebrow text-ink-muted">{campaign.season}</p>
          <h2 className="text-h2 mt-3">Shop {campaign.name}</h2>
          <Link
            href={`/collections/${campaign.collectionHandle}`}
            className="cta mt-6 inline-block"
          >
            See the collection
          </Link>
        </section>
      ) : null}
    </article>
  );
}
