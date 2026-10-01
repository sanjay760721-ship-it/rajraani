import Link from "next/link";
import type { ReactNode } from "react";

import type { SiteText } from "@/lib/content/site-text-defs";
import type { FooterSettings } from "@/lib/content/footer-defs";
import { BRAND } from "@/lib/brand";
import { LotusMark } from "./LotusMark";
import { FooterNewsletterForm } from "./NewsletterForm";


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

/**
 * The footer (redesign, 1 Oct 2026).
 *
 * The page ends at night. A Kashi-indigo ground with a faint booti weave, in
 * three movements:
 *
 *   1. The invitation: "Letters from the loom" set large, with the sign-up as
 *      one pill-shaped field beside it.
 *   2. The house: how to reach us, then the owner's two link columns and the
 *      social links, under a zari rule.
 *   3. The signature: the lotus and the name drawn very large in gold
 *      outline, the house line under it, and the legal line at the foot.
 *
 * Every word and link is the owner's, from the admin's Footer screen and
 * Change text.
 */

const KICKER = "eyebrow text-gold-soft/90";
const LINK = "transition-colors hover:text-gold-soft";

/** Contact details come from the admin (Site-wide text), via the layout. */
export function SiteFooter({ text, footer }: { text: SiteText; footer: FooterSettings }) {
  // Edited in the admin under Footer; defaults in content/footer-defs.ts.
  const socials = footer.socials.map((social) => ({ ...social, icon: social.label.toLowerCase() }));
  const [usefulColumn, aboutColumn] = footer.columns;
  const email = text["contact.email"];
  const phone = text["contact.phone"];
  const whatsapp = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
  // One line per row, as the owner typed them.
  const hours = text["contact.hours"].split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <footer className="booti-ground mt-24 overflow-hidden bg-night text-on-night-muted">
      {/* 1 · The invitation */}
      <section className="wrap-wide grid gap-10 pt-20 pb-16 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20 lg:pt-28">
        <div>
          <LotusMark className="mb-6 h-7 w-9 text-gold" />
          <h2 className="font-display text-[clamp(2rem,1.3rem+2.6vw,3.5rem)] leading-[1.05] text-on-night">
            {footer.newsletterHeading}
          </h2>
          <p className="mt-4 max-w-[44ch] font-serif text-[18px] leading-relaxed text-on-night-muted">
            {footer.newsletterText}
          </p>
        </div>
        <FooterNewsletterForm button={footer.newsletterButton} />
      </section>

      <div className="wrap-wide">
        <div className="zari-rule text-gold/50"><span className="zari-rule__knot" /></div>
      </div>

      {/* 2 · The house */}
      <section className="wrap-wide grid gap-12 py-16 font-ui text-[14px] leading-[1.75] md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className={KICKER}>{footer.talkHeading}</h2>
          <ul className="mt-4 space-y-1 text-on-night">
            <li>
              <a href={`mailto:${email}`} className={LINK}>{email}</a>
            </li>
            <li>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className={LINK}>{phone}</a>
            </li>
            <li>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${LINK} underline decoration-gold/50 underline-offset-4`}>
                {footer.whatsappLabel}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={KICKER}>{footer.hoursLabel}</h2>
          <ul className="mt-4 space-y-1">
            {hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={KICKER}>{aboutColumn?.heading}</h2>
          <ul className="mt-4 space-y-1">
            {(aboutColumn?.links ?? []).map((link) => (
              <li key={`${link.href}:${link.label}`}>
                <Link href={link.href} className={LINK}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={KICKER}>{usefulColumn?.heading}</h2>
          <ul className="mt-4 space-y-1">
            {(usefulColumn?.links ?? []).map((link) => (
              <li key={`${link.href}:${link.label}`}>
                <Link href={link.href} className={LINK}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {socials.length > 0 ? (
            <div className="mt-6 flex items-center gap-2" aria-label="Social links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-on-night/20 text-on-night transition-colors hover:border-gold-soft hover:text-gold-soft"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="size-[17px]" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* 3 · The signature */}
      <section className="wrap-wide pb-8">
        <p
          aria-hidden="true"
          className="select-none text-center font-display text-[clamp(3.5rem,15vw,15rem)] uppercase leading-[0.85] tracking-[0.06em] text-transparent [-webkit-text-stroke:1px_var(--color-gold)] opacity-70"
        >
          {BRAND.name}
        </p>
        <p className="mt-12 text-center font-serif text-[17px] italic text-on-night-muted">{text.tagline}</p>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-on-night/10 pt-6 font-ui text-[12px] tracking-[0.02em] md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className={LINK}>
              {footer.copyrightName}
            </Link>
          </p>
          <p className="tracking-[0.2em] uppercase text-[10.5px] text-gold-soft/70">Varanasi · India</p>
        </div>
      </section>
    </footer>
  );
}
