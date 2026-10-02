"use client";

import { useId, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { useSiteText } from "@/components/site-text-context";
import { announcementParts } from "@/lib/content/site-text-defs";

import { subscribeAction } from "@/lib/newsletter-actions";

export type CineFooterData = {
  newsletterHeading: string;
  newsletterText: string;
  newsletterButton: string;
  email: string;
  phone: string;
  talkHeading: string;
  whatsappLabel: string;
  hoursLabel: string;
  hours: string[];
  columns: { heading: string; links: { label: string; href: string }[] }[];
  socials: { label: string; href: string }[];
  legalName: string;
};

/**
 * Footer for the cinematic preview. The large faint name, then the two things
 * that earn their place: the newsletter sign-up (saved to the admin's
 * Messages, like the live footer's) and a way to reach the house, with
 * WhatsApp first. Words and contact details come from the admin's Footer
 * screen and Change text.
 */
export function CineFooter({ data }: { data: CineFooterData }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const inputId = useId();
  const siteText = useSiteText();
  const promises = announcementParts(siteText);
  const phoneDigits = data.phone.replace(/[^0-9]/g, "");

  return (
    <footer className="cine-footer">
      <div className="cine-footer__sign">
        {/* The brand logo in full (pics/logo), its paper faded into the light
            footer; shown on the shop pages. On the dark homepage the lotus
            alone sits over the large name instead. */}
        <Image src="/brand/logo-full.webp" alt={`${BRAND.name}, Banaras`} width={900} height={552} sizes="(min-width: 768px) 420px, 80vw" className="cine-footer__logo" />
        <Image src="/brand/lotus.png" alt="" width={184} height={135} className="cine-footer__lotus" />
        <p className="cine-footer__name" aria-hidden="true">{BRAND.name.toUpperCase()}</p>
        {/* The top-bar line (Change text → Top bar), signed under the name. */}
        {siteText.tagline ? <p className="cine-footer__tagline">{siteText.tagline}</p> : null}
      </div>

      {/* The announcement messages (Change text → Announcement strip), kept
          here as the house's standing promises rather than a strip above the
          header. */}
      {promises.length > 0 ? (
        <ul className="cine-promises" aria-label="Our promises">
          {promises.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}

      <section className="cine-letters" aria-labelledby={`${inputId}-h`}>
        <div>
          <h2 id={`${inputId}-h`} className="cine-letters__title">{data.newsletterHeading}</h2>
          <p className="cine-letters__text">{data.newsletterText}</p>
        </div>
        <form
          className="cine-letters__form"
          onSubmit={(event) => {
            event.preventDefault();
            startTransition(async () => {
              const result = await subscribeAction(email, "footer");
              setState(result.ok ? { ok: true, text: "Thank you. You are on the list." } : { ok: false, text: result.error });
              if (result.ok) setEmail("");
            });
          }}
        >
          <label htmlFor={inputId} className="cine-letters__label">Your email</label>
          <div className="cine-letters__row">
            <input
              id={inputId}
              type="email"
              required
              autoComplete="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" disabled={pending} className="cine-button cine-button--solid">
              <span>{pending ? "Sending" : data.newsletterButton}</span>
            </button>
          </div>
          {state ? (
            <p role={state.ok ? "status" : "alert"} className="cine-letters__note">{state.text}</p>
          ) : null}
        </form>
      </section>

      {/* The admin's footer (Footer screen): Talk to us with its own labels,
          both link columns as saved, and the social accounts. */}
      <div className="cine-foot-grid">
        <section aria-labelledby={`${inputId}-talk`}>
          <h2 id={`${inputId}-talk`} className="cine-foot-grid__h">{data.talkHeading}</h2>
          <ul className="cine-foot-grid__list">
            <li><a href={`mailto:${data.email}`}>{data.email}</a></li>
            <li>Call us: <a href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a></li>
            <li><a href={`https://wa.me/${phoneDigits}`} target="_blank" rel="noopener noreferrer">{data.whatsappLabel}</a></li>
          </ul>
          <p className="cine-foot-grid__hours">
            <span>{data.hoursLabel}</span>
            {data.hours.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </section>
        {data.columns.map((column, i) => (
          <nav key={column.heading + i} aria-label={column.heading}>
            <h2 className="cine-foot-grid__h">{column.heading}</h2>
            <ul className="cine-foot-grid__list">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            {i === data.columns.length - 1 && data.socials.length > 0 ? (
              <ul className="cine-foot-grid__social" aria-label="Social links">
                {data.socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
        ))}
      </div>
      <p className="cine-footer__legal">© {new Date().getFullYear()} <Link href="/">{data.legalName}</Link>.</p>
    </footer>
  );
}

export const CINE_FOOTER_CSS = `
.cine-footer { position: relative; isolation: isolate; }
.cine-footer::before { content: ""; position: absolute; inset: 0 0 auto; height: min(560px, 70%); z-index: -1; pointer-events: none; background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'60'%20height%3D'60'%3E%3Cpath%20d%3D'M30%200C36%2010%2050%2016%2060%2030%2050%2044%2036%2050%2030%2060%2024%2050%2010%2044%200%2030%2010%2016%2024%2010%2030%200Z'%20fill%3D'none'%20stroke%3D'rgb(201%2C169%2C110)'%20stroke-width%3D'.8'%2F%3E%3Cpath%20d%3D'M30%2021C24.5%2025.5%2023.5%2033%2027.5%2038%2029.5%2040.2%2033%2039.4%2034%2036.2%2035%2032.4%2032%2031%2031%2028.8%2030.2%2026.8%2030.8%2024%2030%2021Z'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'0'%20cy%3D'0'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'60'%20cy%3D'0'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'0'%20cy%3D'60'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'60'%20cy%3D'60'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3C%2Fsvg%3E") repeat 50% 0 / 60px 60px; opacity: 0.16; -webkit-mask-image: radial-gradient(ellipse 70% 85% at 50% 0%, black 30%, transparent 75%); mask-image: radial-gradient(ellipse 70% 85% at 50% 0%, black 30%, transparent 75%); }
.cine-footer__sign { display: flex; flex-direction: column; align-items: center; }
.cine-footer__logo { display: none; width: min(420px, 80vw); height: auto; }
.cine-footer__lotus { width: 72px; height: auto; margin-bottom: 18px; }
.cine--shop .cine-footer__logo { display: block; }
.cine--shop :is(.cine-footer__lotus, .cine-footer__name) { display: none; }
.cine-footer__tagline { margin: 4px 0 0; font-size: 17px; letter-spacing: 0.02em; color: rgb(255 255 255 / 0.62); }
.cine-promises { list-style: none; margin: 0 0 56px; padding: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 0; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; color: rgb(255 255 255 / 0.62); }
.cine-promises li { padding: 0 22px; }
.cine-promises li + li { border-left: 1px solid rgb(255 255 255 / 0.22); }
@media (max-width: 767px) { .cine-promises { flex-direction: column; align-items: center; gap: 14px; text-align: center; } .cine-promises li + li { border-left: 0; } }
.cine-letters { width: min(1100px, 100%); display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 48px; align-items: end; padding: 40px 0 44px; border-top: 1px solid rgb(255 255 255 / 0.14); border-bottom: 1px solid rgb(255 255 255 / 0.14); text-align: left; }
.cine-letters__title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(2rem, 1.4rem + 1.8vw, 3rem); line-height: 1; text-transform: uppercase; color: #fff; }
.cine-letters__text { margin: 12px 0 0; max-width: 40ch; font-size: 17px; line-height: 1.5; color: rgb(255 255 255 / 0.7); }
.cine-letters__label { display: block; margin-bottom: 10px; font-family: var(--font-cine-display); font-weight: 500; font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.7); }
.cine-letters__row { display: flex; gap: 12px; }
.cine-letters__row input { flex: 1; min-width: 0; height: 56px; padding: 0 18px; background: transparent; border: 1px solid rgb(255 255 255 / 0.45); color: #fff; font-size: 17px; outline: none; transition: border-color 200ms ease; }
.cine-letters__row input::placeholder { color: rgb(255 255 255 / 0.45); }
.cine-letters__row input:focus { border-color: #fff; }
.cine-button--solid { background: var(--zari); border-color: var(--zari); color: var(--kohl); padding: 0 34px; height: 56px; cursor: pointer; }
.cine-button--solid::before { background: rgb(255 255 255); }
.cine-button--solid:hover { color: var(--kohl); }
.cine-button--solid:disabled { opacity: 0.6; cursor: default; }
.cine-letters__note { margin: 10px 0 0; font-size: 15px; color: #fff; }
.cine-foot-grid { width: min(1100px, 100%); display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 48px; padding: 8px 0 24px; text-align: left; }
.cine-foot-grid__h { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; }
.cine-foot-grid__list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; font-size: 16px; color: rgb(255 255 255 / 0.62); }
.cine-foot-grid__list a { color: rgb(255 255 255 / 0.82); transition: color 200ms ease; }
.cine-foot-grid__list a:hover, .cine-foot-grid__social a:hover { color: #fff; }
.cine-foot-grid__hours { margin: 18px 0 0; display: grid; gap: 4px; font-size: 15px; color: rgb(255 255 255 / 0.55); }
.cine-foot-grid__social { list-style: none; margin: 24px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 22px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; }
.cine-foot-grid__social a { color: rgb(255 255 255 / 0.75); }
.cine-footer__legal a { color: inherit; }
@media (max-width: 767px) { .cine-foot-grid { grid-template-columns: 1fr; gap: 36px; } }
.cine-contact { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.cine-contact__ways { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 36px; font-size: 17px; }
.cine-contact__ways a { color: rgb(255 255 255 / 0.86); transition: color 200ms ease; }
.cine-contact__ways a:hover { color: #fff; }
.cine-contact__wa { font-family: var(--font-cine-display); font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #fff !important; padding-bottom: 3px; border-bottom: 2px solid #fff; }
.cine-contact__hours { margin: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 28px; font-size: 15px; color: rgb(255 255 255 / 0.55); }
.cine-contact__hours span { white-space: nowrap; }
html:has(.cine), body:has(.cine) { background: rgb(16 11 18); }
@media (max-width: 767px) {
  .cine-letters { grid-template-columns: 1fr; gap: 24px; }
  .cine-letters__row { flex-direction: column; }
  .cine-letters__row input { flex: none; width: 100%; }
  .cine-button--solid { justify-content: center; }
}
`;
