import type { Metadata } from "next";
import { Instrument_Sans, Manrope, Marcellus, Newsreader, Playfair_Display } from "next/font/google";

import { BRAND } from "@/lib/brand";

import "./globals.css";

/**
 * Root layout — deliberately almost empty.
 *
 * It holds only what every page on the domain shares: the document, the fonts,
 * the stylesheet, the language. The storefront's header, footer and cart live
 * in `(storefront)/layout.tsx`, and the admin has its own chrome, because an
 * admin page wrapped in a shop header is a page where you can accidentally
 * click "Add to cart" while editing a product.
 */

/**
 * Three families, chosen for Rajraani (redesign, 1 Oct 2026).
 *
 * **Marcellus** for display: flared classical capitals in the spirit of the
 * lettering in the house logo. One weight; hierarchy comes from size.
 *
 * **Newsreader** for the book voice: statements, stories and the product
 * narrative, where a reader settles in. Optical sizes keep it crisp small.
 *
 * **Instrument Sans** for shopping: prices, filters, forms and buttons. Clean
 * at 12-15px, and with a 500 weight so a button label holds its own.
 *
 * next/font self-hosts all three at build time: no request to Google at
 * runtime, no layout shift, text visible while they load.
 */
const display = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const book = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const ui = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument",
  display: "swap",
});

/**
 * Two more families, for the admin only.
 *
 * The admin runs its own design system ("Ethos & Elegance") — Playfair Display
 * for headings, Manrope for interface and data. They are declared here because
 * `next/font` has to be called at module scope in a layout, but nothing on the
 * storefront references these variables, and the weights are self-hosted the
 * same way, so the shop pays no download cost for them.
 */
const adminDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const adminUi = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — handwoven Banarasi textiles`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    "Handwoven Banarasi sarees, dupattas and stoles, made one at a time on pit looms in Varanasi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${book.variable} ${ui.variable} ${adminDisplay.variable} ${adminUi.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
