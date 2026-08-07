import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CartDrawer } from "@/components/CartDrawer";
import { CurrencyProvider } from "@/components/currency-context";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { SearchModal } from "@/components/SearchModal";
import { SearchProvider } from "@/components/search-context";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CartProvider } from "@/components/cart-context";
import { WishlistProvider } from "@/components/wishlist-context";
import { IS_FIXTURE_CATALOGUE } from "@/lib/data/catalogue";

/** The shop. Everything a customer sees is inside this layout. */
export default function StorefrontLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <CartProvider>
      <CurrencyProvider>
        <WishlistProvider>
          <SearchProvider>
            {/* First tab stop. Absent entirely on the reference site
                (pre-build-gaps.md §5). */}
            <a
              href="#main"
              className="eyebrow sr-only bg-ink px-4 py-3 text-bg focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
            >
              Skip to content
            </a>

            <PlaceholderNotice fixtures={IS_FIXTURE_CATALOGUE} />
            <AnnouncementBar />
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
            <CartDrawer />
            <SearchModal />
            <NewsletterPopup />
          </SearchProvider>
        </WishlistProvider>
      </CurrencyProvider>
    </CartProvider>
  );
}

/**
 * Standing reminder that nothing here is finished work.
 *
 * The catalogue is seed data, the tokens are placeholders and there is no
 * photography. Saying so on the page is cheaper than someone screenshotting it
 * and circulating it as a design.
 */
function PlaceholderNotice({ fixtures }: { fixtures: boolean }) {
  return (
    <p className="bg-ink px-4 py-2 text-center text-caption text-bg">
      Placeholder build — {fixtures ? "seed fixtures" : "seed catalogue"},
      placeholder design tokens, no photography. Frames are schematic on purpose.
    </p>
  );
}
