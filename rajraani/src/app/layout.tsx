import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

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
 * Two families, and the split is the one the category runs on: a high-contrast
 * display serif for anything expressive, a quiet sans for anything functional.
 *
 * **Cormorant Garamond** for display. Light, generously modulated, and it holds
 * its elegance at 48px+ where the hero and section headings live — most serifs
 * either go weedy or turn into a slab at that size. It is deliberately NOT used
 * below ~18px; at caption sizes its thin strokes disappear.
 *
 * **Inter** for UI. It is uninteresting on purpose. Nav labels, prices, buttons
 * and form fields should be legible and then get out of the way — the research
 * is unambiguous that the photography is the colour and the interface recedes.
 *
 * `next/font` self-hosts both at build time, so there is no request to Google
 * at runtime, no third-party script, and no layout shift while a webfont
 * arrives. `display: swap` keeps text visible throughout.
 */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display-family",
  display: "swap",
});

const ui = Inter({
  subsets: ["latin"],
  variable: "--font-ui-family",
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
    // data-scroll-behavior tells the router to skip the smooth scroll on route
    // transitions, where it reads as lag rather than as polish.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${ui.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
