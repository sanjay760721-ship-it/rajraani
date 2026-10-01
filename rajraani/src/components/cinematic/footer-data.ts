import type { FooterSettings } from "@/lib/content/footer-defs";
import type { SiteText } from "@/lib/content/site-text-defs";
import type { CineFooterData } from "./CineFooter";

/** The footer's words: the admin's Footer screen plus the contact lines from Change text. */
export function toFooterData(footer: FooterSettings, text: SiteText): CineFooterData {
  return {
    newsletterHeading: footer.newsletterHeading,
    newsletterText: footer.newsletterText,
    newsletterButton: footer.newsletterButton,
    email: text["contact.email"],
    phone: text["contact.phone"],
    talkHeading: footer.talkHeading,
    whatsappLabel: footer.whatsappLabel,
    hoursLabel: footer.hoursLabel,
    columns: footer.columns,
    socials: footer.socials,
    hours: text["contact.hours"].split("\n").map((line) => line.trim()).filter(Boolean),
    legalName: footer.copyrightName,
  };
}
