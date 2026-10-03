import Link from "next/link";

import { PageHead } from "@/components/cinematic/PageHead";

export const metadata = { title: "Page not found" };

/**
 * The shop's "not found", inside the shop's own header, menu and footer.
 *
 * Shown for a piece or page that does not exist (or is hidden), and, through
 * `[...missing]`, for any address the site does not know. Without it a shopper
 * following an old link met Next.js's bare default page, with no way back.
 */
export default function NotFound() {
  return (
    <div className="mx-auto min-h-[60vh] max-w-[1280px] px-4 pb-24 sm:px-8">
      <PageHead
        kicker="Not found"
        title="This page has moved on"
        size="md"
        intro="The piece may have found its home, or the link is out of date. Everything still on the shop is a step away."
      />
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/collections/all"
          className="inline-block bg-ink px-8 py-3 text-xs font-medium uppercase tracking-[0.16em] text-bg transition-colors hover:bg-ink-dark"
        >
          See every piece
        </Link>
        <Link
          href="/"
          className="inline-block border border-ink px-8 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Back to the homepage
        </Link>
      </div>
    </div>
  );
}
