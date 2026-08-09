import type { Metadata } from "next";
import { Cardo, Lato, Manrope, Playfair_Display } from "next/font/google";

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
 * Two families, matching reference exactly: Cardo for display, Lato for UI.
 *
 * **Cardo** for display. Classic, elegant, weight 400 only — matches reference.
 *
 * **Lato** for UI. Clean, legible, weight 400 only — matches reference.
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

const ui = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
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
