import Link from "next/link";

import { BRAND } from "@/lib/brand";

/**
 * Footer.
 *
 * Four regions, on the sand surface. The italic support hours are a small
 * warmth cue the category gets right and worth keeping (design.md §5.7).
 */

const COLUMNS: readonly { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Shop",
    links: [
      { label: "Sarees", href: "/collections/sarees" },
      { label: "Dupattas", href: "/collections/dupattas" },
      { label: "Kadhua", href: "/collections/kadhua" },
      { label: "Katan Silk", href: "/collections/katan-silk" },
    ],
  },
  {
    heading: "Read",
    links: [
      { label: "Nadi", href: "/pages/nadi" },
      { label: "Antaraal", href: "/pages/antaraal" },
      { label: "On kadhua", href: "/pages/kadhua" },
      { label: "Handloom or powerloom", href: "/pages/handloom" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-bg-sand">
      <div className="wrap-wide py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="eyebrow mb-4 text-ink">Here to help</h2>
            <ul className="space-y-2 text-caption text-ink-body">
              <li>
                <a href={`mailto:${BRAND.supportEmail}`} className="hover:text-ink">
                  {BRAND.supportEmail}
                </a>
              </li>
              <li>{BRAND.supportPhone}</li>
              <li className="text-ink-muted italic">{BRAND.supportHours}</li>
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="eyebrow mb-4 text-ink">{column.heading}</h2>
              <ul className="space-y-2 text-caption text-ink-body">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-ink hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="eyebrow mb-4 text-ink">Stay in touch</h2>
            <p className="text-caption mb-4 text-ink-body">
              Occasional letters about what has come off the loom.
            </p>
            {/* Labelled input. 65 of 81 inputs on the reference PDP had no
                label at all (pre-build-gaps.md §5). */}
            <form className="flex items-end gap-3">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="eyebrow block text-ink-muted">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full border-b border-rule-input bg-transparent py-2 text-ink outline-none focus:border-ink"
                />
              </div>
              <button type="submit" className="cta">
                Sign up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 text-caption text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.legalName}
          </p>
          <p className="italic">{BRAND.promise}</p>
        </div>
      </div>
    </footer>
  );
}
