import Link from "next/link";
import type { ReactNode } from "react";

import { BRAND } from "@/lib/brand";
import type { SiteText } from "@/lib/content/site-text-defs";

/**
 * Footer.
 *
 * Laid out on the reference's footer (measured on request, 24 Sep 2026): a
 * full-width light grey band with a white hairline above and below, holding
 * three equal columns inside the 1200px container, and the copyright line
 * underneath it on the page ground.
 *
 *   1. Talk To Us — email, phone, WhatsApp, italic support hours, then the
 *      four policies under their own heading in the same column.
 *   2. About — the brand's own pages, with the social icons under the list.
 *   3. Stay in touch — one line, then the email field and button side by side.
 *
 * Headings are the display serif at 18px; everything else the UI face at
 * 13px, all in body ink. The words and destinations are ours: every link here
 * goes to a page that exists — theirs lists a Mumbai store, press, careers and
 * gift cards, none of which this business has.
 */

type FooterLink = { label: string; href: string };

const POLICY_LINKS: readonly FooterLink[] = [
  { label: "Returns & Cancellation", href: "/pages/returns" },
  { label: "Delivery & Shipping", href: "/pages/shipping" },
  { label: "Privacy Policy", href: "/pages/privacy" },
  { label: "Terms & Conditions", href: "/pages/terms" },
];

const ABOUT_LINKS: readonly FooterLink[] = [
  { label: "Our Story", href: "/pages/our-story" },
  { label: "Our Banaras Store", href: "/pages/banaras-store" },
  { label: "FAQs", href: "/pages/faqs" },
  { label: "Size Guide", href: "/pages/size-guide" },
  // Their "Gift Cards"; there is no gift-card product here, so the gifting edit.
  { label: "Gifting", href: "/collections/gifts" },
  { label: "Contact Us", href: "/pages/contact" },
];

// From BRAND, so the footer and the contact page cannot disagree. Empty until
// the real accounts exist, in which case the row is not drawn at all.
const SOCIAL_LINKS = BRAND.socials.map((social) => ({
  ...social,
  icon: social.label.toLowerCase(),
}));

const HEADING = "font-display text-[18px] leading-[1.5] font-normal text-ink-body";
const LINK = "hover:underline";

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, ReactNode> = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} aria-hidden="true" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} aria-hidden="true" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} aria-hidden="true" className={className}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
    pinterest: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} aria-hidden="true" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M10.5 21l1.8-7.4M11 13.6c.5 1 1.4 1.4 2.4 1.4 2.3 0 3.6-2.2 3.6-4.6C17 8 15 6 12.1 6 8.9 6 7 8.2 7 10.6c0 1 .4 2 1.2 2.4" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

/** Contact details come from the admin (Site-wide text), via the layout. */
export function SiteFooter({ text }: { text: SiteText }) {
  const email = text["contact.email"];
  const phone = text["contact.phone"];
  const whatsapp = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
  // One line per row, as the owner typed them.
  const hours = text["contact.hours"].split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <footer className="mt-24">
      <section className="border-y border-white bg-footer-band px-2.5 py-5">
        <div className="mx-auto grid max-w-[1200px] font-ui text-[13px] leading-[1.5] text-ink-body md:grid-cols-3">
          {/* 1 · Talk To Us, then the policies */}
          <div className="px-5 py-2.5">
            <h2 className={HEADING}>Talk To Us</h2>
            <p className="mt-1">
              Email:{" "}
              <a href={`mailto:${email}`} className={LINK}>
                {email}
              </a>
              <br />
              Call us:{" "}
              <a href={`tel:${phone.replace(/\s/g, "")}`} className={LINK}>
                {phone}
              </a>
              <br />
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={LINK}>
                Start a WhatsApp conversation
              </a>
            </p>
            <p className="mt-5 italic">
              Support hours:
              {hours.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </p>

            <h2 className={`${HEADING} mt-5`}>Useful Information</h2>
            <ul className="mt-1">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2 · About, with the social icons under the list */}
          <div className="px-5 py-2.5">
            <h2 className={HEADING}>About</h2>
            <ul className="mt-1">
              {ABOUT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {SOCIAL_LINKS.length > 0 ? (
              <div className="mt-5 flex items-center gap-[5px]" aria-label="Social links">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-ink"
                    aria-label={social.label}
                  >
                    <SocialIcon name={social.icon} className="h-[17px] w-[17px]" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {/* 3 · Stay in touch */}
          <div className="px-5 py-2.5">
            <h2 className={HEADING}>Stay in touch</h2>
            <p className="mt-1">Occasional letters about what has come off the loom.</p>
            <form className="mt-2" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="block text-[14px]">
                Email<span aria-hidden="true">*</span>
              </label>
              <div className="mt-1 flex gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="h-[35px] min-w-0 flex-1 border border-footer-band bg-white px-3 text-[14px] text-ink outline-none focus:border-ink-body"
                />
                <button
                  type="submit"
                  className="h-[35px] shrink-0 border border-transparent bg-white/80 px-[17.5px] font-display text-[17px] tracking-[1px] text-ink transition-colors hover:bg-white cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 py-3 font-ui text-[11.5px] text-ink-body">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            {BRAND.legalName}
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
