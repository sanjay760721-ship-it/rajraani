import { BRAND } from "../brand.ts";

/**
 * The footer and the newsletter pop-up — everything in them the owner can
 * change. Client-safe: the defaults are what the footer said when it was a
 * component constant, so a fresh database shows the site exactly as before.
 *
 * Contact details (email, phone, hours) are not here: they are site-wide lines
 * edited under Change text, because the contact page uses them too.
 */

export type FooterLink = { label: string; href: string };
export type SocialName = "Facebook" | "Instagram" | "YouTube" | "Pinterest";

export type FooterSettings = {
  talkHeading: string;
  whatsappLabel: string;
  hoursLabel: string;
  columns: { heading: string; links: FooterLink[] }[];
  socials: { label: SocialName; href: string }[];
  newsletterHeading: string;
  newsletterText: string;
  newsletterButton: string;
  popupEnabled: boolean;
  popupSideTitle: string;
  popupSideText: string;
  popupTitle: string;
  popupText: string;
  popupFootnote: string;
  copyrightName: string;
};

export const SOCIAL_NAMES: readonly SocialName[] = ["Instagram", "Facebook", "YouTube", "Pinterest"];

export const FOOTER_DEFAULTS: FooterSettings = {
  talkHeading: "Write to us",
  whatsappLabel: "Start a WhatsApp conversation",
  hoursLabel: "We answer",
  columns: [
    {
      heading: "Care & policies",
      links: [
        { label: "Returns & Cancellation", href: "/pages/returns" },
        { label: "Delivery & Shipping", href: "/pages/shipping" },
        { label: "Privacy Policy", href: "/pages/privacy" },
        { label: "Terms & Conditions", href: "/pages/terms" },
      ],
    },
    {
      heading: "The house",
      links: [
        { label: "Our Story", href: "/pages/our-story" },
        { label: "Our Banaras Store", href: "/pages/banaras-store" },
        { label: "FAQs", href: "/pages/faqs" },
        { label: "Size Guide", href: "/pages/size-guide" },
        { label: "Gifting", href: "/collections/gifts" },
        { label: "Contact Us", href: "/pages/contact" },
      ],
    },
  ],
  socials: BRAND.socials.map((social) => ({ label: social.label, href: social.href })),
  newsletterHeading: "Letters from the loom",
  newsletterText: "A few times a season: new pieces as they come off the loom, and the weavers who made them.",
  newsletterButton: "Subscribe",
  popupEnabled: true,
  popupSideTitle: "Woven in Banaras",
  popupSideText: "Occasional letters about what has come off the loom. No spam, ever.",
  popupTitle: "Stay in touch",
  popupText: "Occasional letters about what has come off the loom.",
  popupFootnote: "Complimentary shipping across India. We respect your inbox.",
  copyrightName: BRAND.legalName,
};

const HREF = /^(\/[^\s]*|https:\/\/[^\s]+|mailto:[^\s]+)$/;

/** Every problem with proposed footer settings, in plain words. */
export function footerProblems(value: FooterSettings): string[] {
  const problems: string[] = [];
  const text = (label: string, field: string, max: number) => {
    if (!field.trim()) problems.push(`${label} cannot be empty.`);
    else if (field.length > max) problems.push(`${label} is too long (${max} characters at most).`);
  };
  text("The “Talk to us” heading", value.talkHeading, 40);
  text("The WhatsApp link text", value.whatsappLabel, 60);
  text("The newsletter heading", value.newsletterHeading, 40);
  text("The newsletter button", value.newsletterButton, 20);
  text("The copyright name", value.copyrightName, 80);
  if (value.columns.length !== 2) problems.push("The footer has two link columns.");
  value.columns.forEach((column, index) => {
    text(`Column ${index + 1}'s heading`, column.heading, 40);
    if (column.links.length > 10) problems.push(`“${column.heading}” has more than 10 links.`);
    for (const link of column.links) {
      if (!link.label.trim()) problems.push(`A link in “${column.heading}” has no text.`);
      if (!HREF.test(link.href)) problems.push(`Choose where “${link.label || "a link"}” in “${column.heading}” goes.`);
    }
  });
  for (const social of value.socials) {
    if (!SOCIAL_NAMES.includes(social.label)) problems.push(`Unknown social network “${social.label}”.`);
    if (!/^https:\/\/[^\s]+$/.test(social.href)) problems.push(`The ${social.label} link must start with https://`);
  }
  if (value.popupEnabled) {
    text("The pop-up heading", value.popupTitle, 40);
    text("The pop-up side title", value.popupSideTitle, 40);
  }
  return problems;
}

/** Stored settings merged over the defaults, so a missing field never blanks the footer. */
export function withDefaults(stored: Partial<FooterSettings> | null): FooterSettings {
  return { ...FOOTER_DEFAULTS, ...(stored ?? {}) };
}
