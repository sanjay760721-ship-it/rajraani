import type { Metadata } from "next";

import { BRAND } from "@/lib/brand";

import "./globals.css";

/**
 * Root layout — deliberately almost empty.
 *
 * It holds only what every page on the domain shares: the document, the
 * stylesheet, the language. The storefront's header, footer and cart live in
 * `(storefront)/layout.tsx`, and the admin has its own chrome, because an
 * admin page wrapped in a shop header is a page where you can accidentally
 * click "Add to cart" while editing a product.
 */

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
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
