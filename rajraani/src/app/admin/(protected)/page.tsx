import Link from "next/link";

import { countReferencePhotos } from "@/lib/admin/section-fields";
import { listOrders } from "@/lib/admin/orders-admin";
import { content } from "@/lib/content/content";
import { listProductsForAdmin } from "@/lib/data/admin-queries";

export const metadata = { title: "Your website" };

/**
 * The admin's front door.
 *
 * Laid out like the Menu screen: titled groups, each with a one-line hint, and
 * every row saying what it is and opening the one screen that changes it. The
 * groups follow the site — what is on every page, the pages themselves, the
 * shop, the photos. Above them, the fastest route of all: type the words.
 */

const TEXT = (place: string) => `/admin/text?place=${encodeURIComponent(place)}`;

type Part = { title: string; what: string; href: string; action: string };

const GROUPS: { title: string; hint: string; parts: Part[] }[] = [
  {
    title: "On every page",
    hint: "The top and bottom of the site — change them once and every page follows.",
    parts: [
      {
        title: "Announcement strip",
        what: "The maroon line at the very top — “Complimentary shipping across India …”",
        href: TEXT("Announcement strip (the dark line at the very top)"),
        action: "Change the messages",
      },
      { title: "Top bar", what: "The line on the left above the menu — “Made in Banaras…”", href: TEXT("Top bar"), action: "Change the line" },
      {
        title: "Menu",
        what: "Shop, Collections, Campaigns, Crafts, Stories, About Us — and everything in their dropdowns",
        href: "/admin/menu",
        action: "Edit the menu",
      },
      { title: "Contact details", what: "Email, phone and support hours in the footer", href: TEXT("Contact details (footer)"), action: "Change contact details" },
      { title: "Footer", what: "The links at the bottom of every page, social links, the newsletter and its pop-up", href: "/admin/footer", action: "Edit the footer" },
    ],
  },
  {
    title: "Pages",
    hint: "Each page is a stack of blocks — photos, words and buttons you can change, move, add or remove.",
    parts: [
      { title: "Homepage", what: "The slideshow, photos, stories and store slides on the first page", href: "/admin/homepage", action: "Edit the homepage" },
      { title: "Campaign pages", what: "Kala, Katha, Awadh, Antaraal, Nadi — and new ones", href: "/admin/pages#campaigns", action: "Edit a campaign" },
      { title: "Store page", what: "Our Banaras store — photos, text, address and map", href: "/admin/pages/banaras-store", action: "Edit the store page" },
      { title: "All other pages", what: "Our story, Bridal, Gifting, FAQs, Size chart, Shipping, Returns, Privacy… or add a new page", href: "/admin/pages", action: "See all pages" },
    ],
  },
  {
    title: "Shop",
    hint: "The pieces themselves, and the text that appears on every product page.",
    parts: [
      { title: "Products & stock", what: "Each piece — photos, name, story, price, how many in stock", href: "/admin/products", action: "Edit products" },
      { title: "Every product page", what: "“Our promise”, the handwoven note, and the Shipping / Care tabs", href: TEXT("Product page tabs"), action: "Change product page text" },
      { title: "Collections", what: "The names and introductions of Sarees, Katan Silk, Kadhua…", href: "/admin/collections", action: "Edit collections" },
    ],
  },
  {
    title: "Photos",
    hint: "Upload once, then use anywhere on the site.",
    parts: [
      { title: "Photos", what: "Upload new photos and see which stand-in photos still need replacing", href: "/admin/media", action: "Open photos" },
    ],
  },
];

export default async function AdminHome() {
  const [homepage, pages] = await Promise.all([content.getHomepageSections(), content.listPages()]);
  const toSend = listOrders().filter((order) => order.status === "paid").length;
  const soldOut = listProductsForAdmin().filter((product) => product.published === 1 && product.inventory_quantity === 0).length;
  const toReplace =
    countReferencePhotos(homepage) + pages.reduce((sum, page) => sum + countReferencePhotos(page.sections), 0);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header>
        <h1 className="a-heading-lg">Your website</h1>
        <p className="a-body-md mt-1" style={{ color: "var(--a-ink-variant)" }}>
          What would you like to change today?
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <Link href="/admin/orders" className="a-card px-5 py-4" style={{ borderRadius: "var(--a-radius-md)" }}>
          <span className="a-heading-sm block">{toSend === 0 ? "No orders to send" : `${toSend} order${toSend === 1 ? "" : "s"} to send`}</span>
          <span className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>Orders →</span>
        </Link>
        <Link href="/admin/products" className="a-card px-5 py-4" style={{ borderRadius: "var(--a-radius-md)" }}>
          <span className="a-heading-sm block">{soldOut === 0 ? "Nothing sold out" : `${soldOut} piece${soldOut === 1 ? "" : "s"} sold out`}</span>
          <span className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>Products &amp; stock →</span>
        </Link>
        <Link href="/admin/media" className="a-card px-5 py-4" style={{ borderRadius: "var(--a-radius-md)" }}>
          <span className="a-heading-sm block">{toReplace === 0 ? "All photos are yours" : `${toReplace} stand-in photos`}</span>
          <span className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>{toReplace === 0 ? "Photos →" : "To replace before launch →"}</span>
        </Link>
      </div>

      <form action="/admin/text" className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
        <label htmlFor="find" className="a-heading-sm block">
          Change any words on the site
        </label>
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
          Type a few words exactly as you see them on the website.
        </p>
        <div className="mt-4 flex gap-3">
          <input id="find" name="q" type="search" placeholder="e.g. Free shipping" className="a-input flex-1" style={{ fontSize: 18, padding: "12px 16px" }} />
          <button type="submit" className="a-btn-primary">
            Find
          </button>
        </div>
      </form>

      {GROUPS.map((group) => (
        <section key={group.title} className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
          <h2 className="a-heading-sm">{group.title}</h2>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>{group.hint}</p>
          <ul className="mt-4 divide-y" role="list">
            {group.parts.map((part) => (
              <li key={part.title} style={{ borderColor: "var(--a-outline-variant)" }}>
                <Link href={part.href} className="flex flex-wrap items-center gap-4 py-4">
                  <span className="min-w-0 flex-1">
                    <span className="a-body-lg block" style={{ color: "var(--a-ink)" }}>{part.title}</span>
                    <span className="a-body-sm block" style={{ color: "var(--a-ink-variant)" }}>{part.what}</span>
                  </span>
                  <span className="a-btn-secondary shrink-0">{part.action} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="a-body-sm text-center" style={{ color: "var(--a-outline)" }}>
        Tip: while signed in, open the shop and press <strong>✏️ Edit this page</strong> to change words
        and photos by clicking them.
      </p>
    </div>
  );
}
