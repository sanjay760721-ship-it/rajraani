import type { Metadata } from "next";
import { Cardo, Manrope, Open_Sans, Playfair_Display } from "next/font/google";

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
 * Two families, matching reference exactly: Cardo for display, Open Sans for UI.
 *
 * **Cardo** for display. Classic, elegant, weight 400 only — matches reference.
 *
 * **Open Sans** for UI. Weight 400 only — the category standard at small sizes.
 *
 * `next/font` self-hosts both at build time, no runtime request to Google,
 * no third-party script, no layout shift. `display: swap` keeps text visible.
 */
const display = Cardo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cardo",
  display: "swap",
});

/*
 * Open Sans, not Lato.
 *
 * The category standard pairs a display serif with Open Sans at 400, and the
 * difference is not subtle at small sizes: Lato's narrower apertures and higher
 * contrast read as a different voice in a dense link list, which is exactly
 * where most of the UI face appears on this site.
 *
 * One weight only. Everything in the UI face is either 400 or a size change.
 */
const ui = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-open-sans",
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
      className={`${display.variable} ${ui.variable} ${adminDisplay.variable} ${adminUi.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
