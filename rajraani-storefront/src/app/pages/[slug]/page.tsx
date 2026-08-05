import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { PAGES } from "@/lib/content/sections";
import { CAMPAIGNS } from "@/lib/data/fixtures";

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

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/pages/[slug]">) {
  const { slug } = await props.params;
  const page = PAGES[slug];
  if (!page) return {};
  return { title: page.title, description: page.standfirst };
}

export default async function EditorialPage(props: PageProps<"/pages/[slug]">) {
  const { slug } = await props.params;
  const page = PAGES[slug];
  if (!page) notFound();

  const campaign = CAMPAIGNS.find((entry) => entry.storyPageSlug === slug);

  // A campaign story opens on a hero, which carries the h1. A craft page opens
  // on prose and needs a title block of its own — otherwise the page ships with
  // no h1 at all, which is how heading order rots.
  const opensWithHero = page.sections[0]?.type === "hero";

  return (
    <article>
      {opensWithHero ? null : (
        <header className="wrap-prose py-16">
          <h1 className="text-h1">{page.title}</h1>
          <p className="text-prose mt-5 text-ink-body">{page.standfirst}</p>
        </header>
      )}

      {page.sections.map((section, index) => (
        <SectionRenderer key={section.id} section={section} index={index} />
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
