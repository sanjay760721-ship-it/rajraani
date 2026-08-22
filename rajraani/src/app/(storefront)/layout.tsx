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
