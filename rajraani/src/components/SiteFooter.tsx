import Link from "next/link";
import type { ReactNode } from "react";

import { BRAND } from "@/lib/brand";

/**
 * Footer.
 *
 * Four regions, on the sand surface, per design.md §5.7:
 * 1. Talk To Us
 * 2. Useful Information
 * 3. About
 * 4. Stay in Touch
 *
 * The italic support hours are a small warmth cue the category gets right.
 * Social icons: 1px stroke outline, 20px.
 */

type FooterLink = {
  label: string;
  href: string;
  isText?: boolean;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    heading: "Talk To Us",
    links: [
      { label: "Email", href: `mailto:${BRAND.supportEmail}` },
      { label: "Phone", href: `tel:${BRAND.supportPhone}` },
      { label: "WhatsApp", href: `https://wa.me/${BRAND.supportPhone.replace(/[^0-9]/g, "")}` },
      { label: BRAND.supportHours, href: "#", isText: true },
    ],
  },
  {
    heading: "Useful Information",
    links: [
      { label: "Returns & Cancellation", href: "/pages/returns" },
      { label: "Delivery & Shipping", href: "/pages/shipping" },
      { label: "Privacy Policy", href: "/pages/privacy" },
      { label: "Terms & Conditions", href: "/pages/terms" },
      { label: "FAQs", href: "/pages/faqs" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story / Our Heritage", href: "/pages/our-story" },
      { label: "Banaras Store", href: "/pages/banaras-store" },
      { label: "Mumbai Store", href: "/pages/mumbai-store" },
      { label: "Press & Media", href: "/pages/press" },
      { label: "Careers", href: "/pages/careers" },
      { label: "Size Guide", href: "/pages/size-guide" },
      { label: "Gift Cards", href: "/pages/gift-cards" },
      { label: "Contact Us", href: "/pages/contact" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

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
  };
  return icons[name] ?? null;
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-bg-sand">
      <div className="wrap-wide py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="eyebrow mb-4 text-ink">{column.heading}</h2>
              <ul className="space-y-2 text-caption text-ink-body">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.isText ? (
                      <span className="text-ink-muted italic">{link.label}</span>
                    ) : (
                      <Link href={link.href} className="hover:text-ink hover:underline">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay in Touch — Column 4 */}
          <div>
            <h2 className="eyebrow mb-4 text-ink">Stay in touch</h2>
            <p className="text-caption mb-4 text-ink-body">
              Occasional letters about what has come off the loom.
            </p>
            <form className="flex flex-col gap-3" aria-label="Newsletter signup">
              <div>
                <label htmlFor="newsletter-email" className="eyebrow block text-ink-muted">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full border-b border-rule-input bg-transparent py-2 text-ink outline-none focus:border-ink"
                  required
                />
              </div>
              <button type="submit" className="cta-primary">
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Social icons + copyright */}
        <div className="mt-14 flex flex-col gap-6 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-6" aria-label="Social links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-ink-body hover:text-ink transition-colors"
                aria-label={social.label}
              >
                <SocialIcon name={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-caption text-ink-muted md:flex-row md:items-center md:justify-between md:gap-4">
            <p>© {new Date().getFullYear()} {BRAND.legalName}</p>
            <p className="italic">{BRAND.promise}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}