import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { PAGE_IMAGE_HREF } from "@/lib/content/sections";
import { content } from "@/lib/content/content";
import { catalogue } from "@/lib/data/catalogue";
import { PageHead } from "@/components/cinematic/PageHead";

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
  // Where a photograph without a link of its own goes; see PAGE_IMAGE_HREF.
  const imageHref = PAGE_IMAGE_HREF[slug];

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
  /*
   * Any leading image band is hoisted, bleed or not.
   *
   * This used to require `bleed`, which was wrong the moment the about page's
   * opening banner turned out to be contained: theirs still sits ABOVE the
   * title. Width and running order are separate decisions and this only cares
   * about the order.
   */
  const opensWithBanner = first?.type === "imageBand";
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

  /*
   * The FAQ page ranges its title left at the full content width, where an
   * about page centres its title in a prose column. Both are theirs; the
   * difference is that one opens on an essay and the other on a list, and a
   * centred title above a left-ranged list of questions looks like a mistake.
   */
  const opensWithFaq = first?.type === "faqAccordion";

  /*
   * A section can carry the page's h1 itself, which the campaign pages do —
   * theirs show no title block at all, the banner running straight into a
   * rich-text heading. The template then renders no header of its own.
   */
  const sectionCarriesTitle = page.sections.some(
    (section) => section.type === "richText" && section.asPageTitle === true,
  );

  /*
   * Does the page stop at the viewport edge?
   *
   * A map or a bleed band as the last section wants the footer flush against
   * it — see the rule in globals.css. Declared here because the page knows and
   * the footer does not.
   */
  const last = page.sections[page.sections.length - 1];
  const endsFullBleed = last?.type === "mapBand" || last?.type === "imageBand";

  return (
    <article {...(endsFullBleed ? { "data-ends-full-bleed": "" } : {})}>
      {/*
        * `data-ends-full-bleed` now covers a CONTAINED closing band too. The
        * footer's 96px margin is right under text and wrong under a photograph
        * of any width — the band carries its own bottom padding (40px on the
        * about page) and that is the whole gap theirs leaves.
        */}
      {opensWithBanner ? (
        <SectionRenderer section={first} index={0} fallbackHref={imageHref} />
      ) : null}

      {opensWithHero || opensWithContactPanel || sectionCarriesTitle ? null : (
        /*
         * Centred, and at the same measure as the `richText` blocks below it.
         * It was ranged left in a 680px column while everything under it was
         * centred in the same column — three elements in a stack disagreeing
         * about their own axis.
         */
        <header
          className={
            opensWithFaq
              ? "wrap section-pad"
              : "wrap-prose section-pad text-center"
          }
        >
          <PageHead
            title={page.title}
            align={opensWithFaq ? "left" : "center"}
            intro={page.standfirst ? <p>{page.standfirst}</p> : undefined}
          />
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
          fallbackHref={imageHref}
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
