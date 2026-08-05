import type { Metadata } from "next";

import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CartDrawer } from "@/components/CartDrawer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CartProvider } from "@/components/cart-context";
import { CurrencyProvider } from "@/components/currency-context";
import { BRAND } from "@/lib/brand";
import { IS_MOCK_CATALOGUE } from "@/lib/data/catalogue";

import "./globals.css";

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
      <body className="flex min-h-full flex-col">
        <CurrencyProvider>
          <CartProvider>
            {/* First tab stop. Absent entirely on the reference site
                (pre-build-gaps.md §5). */}
            <a
              href="#main"
              className="eyebrow sr-only bg-ink px-4 py-3 text-bg focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
            >
              Skip to content
            </a>

            {IS_MOCK_CATALOGUE ? <PlaceholderNotice /> : null}
            <AnnouncementBar />
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
            <CartDrawer />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}

/**
 * Standing reminder that nothing here is finished work.
 *
 * The catalogue is seed data, the tokens are placeholders and there is no
 * photography. Saying so on the page is cheaper than someone screenshotting it
 * and circulating it as a design.
 */
function PlaceholderNotice() {
  return (
    <p className="bg-ink px-4 py-2 text-center text-caption text-bg">
      Placeholder build — seed catalogue, placeholder design tokens, no
      photography. Frames are schematic on purpose.
    </p>
  );
}
