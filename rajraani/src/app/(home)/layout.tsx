import { CartDrawer } from "@/components/CartDrawer";
import { CurrencyProvider } from "@/components/currency-context";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { SearchModal } from "@/components/SearchModal";
import { SearchProvider } from "@/components/search-context";
import { CartProvider } from "@/components/cart-context";
import { WishlistProvider } from "@/components/wishlist-context";
import { SiteTextProvider } from "@/components/site-text-context";
import { SiteEditor } from "@/components/site-editor/SiteEditor";
import { MenuProvider } from "@/components/menu-context";
import { getSiteText } from "@/lib/content/site-text";
import { getMenu } from "@/lib/content/menu";
import { shownMenu } from "@/lib/content/menu-shown";
import { getFooter } from "@/lib/content/footer";

/*
 * The homepage's own layout (redesign, 1 Oct 2026).
 *
 * Everything the storefront layout gives a page is here too: the cart drawer,
 * live search, currency, wishlist and cart counts, the newsletter pop-up, the
 * admin's edit bar and the skip link, all from the same providers. What
 * differs is the chrome: the homepage draws its own cinematic header and
 * footer (components/cinematic), so the storefront's are left out.
 */

export default async function HomeLayout({ children }: LayoutProps<"/">) {
  const [siteText, menu, footer] = await Promise.all([getSiteText(), getMenu().then(shownMenu), getFooter()]);

  return (
    <SiteTextProvider value={siteText}>
      <MenuProvider value={menu}>
        <CartProvider>
          <CurrencyProvider>
            <WishlistProvider>
              <SearchProvider>
                <div className="flex-1">
                  <a
                    href="#main"
                    className="eyebrow sr-only bg-ink px-4 py-3 text-bg focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100"
                  >
                    Skip to content
                  </a>
                  {children}
                </div>
                <CartDrawer />
                <SearchModal />
                <NewsletterPopup settings={footer} />
                <SiteEditor />
              </SearchProvider>
            </WishlistProvider>
          </CurrencyProvider>
        </CartProvider>
      </MenuProvider>
    </SiteTextProvider>
  );
}
