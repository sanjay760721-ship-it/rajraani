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
import { SiteTextProvider } from "@/components/site-text-context";
import { SiteEditor } from "@/components/site-editor/SiteEditor";
import { getSiteText } from "@/lib/content/site-text";
import { MenuProvider } from "@/components/menu-context";
import { getMenu } from "@/lib/content/menu";

/** The shop. Everything a customer sees is inside this layout. */
export default async function StorefrontLayout({
  children,
}: LayoutProps<"/">) {
  // Owner-editable lines (announcement strip, top bar, contact details,
  // product tabs), read once here for every page.
  const siteText = await getSiteText();
  // The menu, as the owner last saved it in the admin.
  const menu = await getMenu();

  return (
    <SiteTextProvider value={siteText}>
    <MenuProvider value={menu}>
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
            <SiteFooter text={siteText} />
            <CartDrawer />
            <SearchModal />
            <NewsletterPopup />
            {/* Invisible to visitors; the editing bar for a signed-in admin. */}
            <SiteEditor />
          </SearchProvider>
        </WishlistProvider>
      </CurrencyProvider>
    </CartProvider>
    </MenuProvider>
    </SiteTextProvider>
  );
}
