# Tilfi.com — Site Analysis & Extraordinary Admin Panel Design

## 1. What Tilfi.com Is

Tilfi is a **luxury Banarasi handloom fashion brand** (Shopify-powered) selling
sarees, dupattas, lehengas, suits, blouses, menswear, and handwoven fabrics
("Tantra") made in Varanasi. Key observations from the live site:

| Area | Observation |
|---|---|
| **Platform** | Shopify (customer_authentication redirect, `/collections/`, `/cart`, `/blogs/` URL patterns, Shopify CDN for images/video) |
| **Catalog depth** | 8 core product types (Sarees, Dupattas, Lehengas, Suits, Blouses, Fabrics, Apparel, Ensembles) × **40+ named collections/campaigns** (Kashi, Zarkashi, Tanchoi Rhymes, Jamawar Collective, Kadhua Collectibles, etc.) — a very editorial, story-driven catalog structure |
| **Storytelling content** | 4 blog verticals (Arts & Culture, Style, Features, Perspective), craft-education pages (Identify, Weaving Process, Techniques & Patterns, Metal Repoussé, Many Hands of Handloom) |
| **Internationalization** | 8 currencies shown (INR, USD, CAD, GBP, AUD, EUR, JPY, SGD); worldwide shipping with duties included |
| **Physical retail** | 2 physical stores (Varanasi, Mumbai) booked via **Calendly** (not native Shopify) |
| **Support channel** | Email, phone, and **WhatsApp** click-to-chat, with published support hours |
| **Marketing** | Homepage is a rotating set of campaign banners/collections that change frequently (seasonal drops — "Fresh Off the Loom," "Back in Stock," "Pre-Order," "Ready to Ship") |
| **Newsletter** | Email capture on homepage + popup |
| **Unique to the vertical** | Handloom/artisan storytelling is core to the brand — products are tied to weaving techniques, artisans, and named "collections" as much as to categories/sizes |

**Implication for admin design:** the biggest operational burden for this business is *not* generic e-commerce CRUD — it's **managing a fast-changing, story-heavy, multi-collection catalog + homepage banners + pre-order/back-in-stock inventory states + appointment bookings + a WhatsApp-heavy support queue**, across multiple currencies. A generic Shopify admin handles the basics but is generic; a *purpose-built* admin layer should optimize for these Tilfi-specific workflows.

---

## 2. Design Goals for the Admin Panel

1. **Reduce clicks for repetitive, high-frequency tasks** (adding a new saree with 15+ attributes, launching a new collection banner, marking items "Back in Stock").
2. **Single pane of glass** — orders, inventory, appointments, and WhatsApp/support all in one place instead of tab-switching between Shopify admin, Calendly, and WhatsApp Business.
3. **Story/collection-first catalog model**, not just category-first — because that's how Tilfi actually sells.
4. **Built-in guardrails** so non-technical staff can't break the live site (banner size validation, required-field checks, preview before publish).
5. **Fast visual workflows** — this is a visual, craft-driven brand; the admin should be image-forward (drag-drop banner uploads, live homepage preview), not spreadsheet-forward.

---

## 3. Information Architecture (Left Nav)

```
🏠 Dashboard
🛍️  Catalog
    ├─ Products
    ├─ Collections & Campaigns
    ├─ Weaves, Fabrics & Techniques (taxonomy)
    └─ Bulk Import / Export
🎨 Homepage & Content
    ├─ Banner / Hero Manager
    ├─ Blog Studio (Arts & Culture / Style / Features / Perspective)
    ├─ Craft Pages (Identify, Weaving Process, etc.)
    └─ SEO & Metadata
📦 Orders & Fulfillment
    ├─ All Orders
    ├─ Pre-Orders
    ├─ Returns & Cancellations
    └─ Shipping & Duties (Intl.)
📊 Inventory
    ├─ Stock by Loom/Batch
    ├─ Back-in-Stock Queue
    └─ Low Stock Alerts
👥 Customers & CRM
    ├─ Customer Profiles
    ├─ Wishlist Activity
    └─ Segments & Tags
📅 Appointments (Store Visits)
    ├─ Varanasi Store Calendar
    └─ Mumbai Store Calendar
💬 Support Inbox
    ├─ WhatsApp
    ├─ Email
    └─ FAQs Manager
📣 Marketing
    ├─ Newsletter / Email Campaigns
    ├─ Discounts & Gift Cards
    └─ Currency & Pricing Rules
🧵 Artisan & Weaver Registry
📈 Analytics & Reports
⚙️ Settings & Team Roles
```

---

## 4. Module-by-Module Feature Design

### 4.1 Dashboard (Home)
- **Today at a glance** cards: Orders today, Revenue (toggle currency), Pending pre-orders, Low-stock SKUs, Unread WhatsApp/support messages, Upcoming store appointments (next 24h).
- **Attention Needed** feed — an auto-prioritized to-do list (e.g. "12 products marked Back-in-Stock have no updated photos," "Collection 'Awadh' banner is live but collection page has 0 products").
- **Quick Actions** bar (floating, always visible): *+ New Product, + New Collection, + New Banner, + Discount Code*.
- Sales snapshot chart with filters: by collection, by category, by currency/region.

### 4.2 Catalog → Products
- **Guided product form** split into logical tabs instead of one long page:
  - *Basics* (title, description, type, price/currency matrix)
  - *Craft Details* (weave technique, fabric, zari type, weaver/artisan credit, loom origin — dropdowns from the Weaver Registry & Weaves taxonomy, so this metadata is consistent site-wide and can power the "Identify"/"Techniques" pages automatically)
  - *Variants* (size, color, blouse-included y/n)
  - *Media* (drag-drop multi-image + video, auto-crop presets for PDP, listing, and Instagram)
  - *Availability* (In stock / Pre-order with expected ship date / Ready to Ship / Back in Stock — first-class status field, not a workaround tag)
  - *SEO* (auto-suggested slug, meta description with live Google-preview snippet)
- **Duplicate Product** button (huge time-saver for saree variants of the same design).
- **Bulk edit** grid (price, status, collection tags) with spreadsheet-style inline editing + CSV import/export.
- Validation before publish: required craft fields, min. 3 images, alt text present (SEO/accessibility).

### 4.3 Catalog → Collections & Campaigns
- Given Tilfi has 40+ collections, this needs a **collection builder**, not a flat list:
  - Create a collection → set title, story blurb, hero image (desktop + mobile, with the exact aspect ratios Tilfi uses), and either *manual product picker* or *rule-based* (tag = "Zarkashi").
  - **Scheduling**: set a collection or campaign to go live/expire at a specific date/time (so "Fresh Off the Loom" drops can be queued in advance rather than requiring someone to be online at launch time).
  - **Live homepage preview** pane showing exactly how the new banner tile will look on desktop and mobile before publishing — this directly matches the desktop/mobile banner pairs seen on the live site.
- Campaign performance mini-report per collection (views → add-to-cart → purchase).

### 4.4 Homepage & Content
- **Banner/Hero Manager**: reorderable drag-drop list of homepage tiles (mirrors the current homepage structure of alternating full-width + square campaign tiles), each with desktop image, mobile image, title, subtitle, CTA link, and go-live schedule.
- **Blog Studio**: simple rich-text + image editor for the 4 blog verticals, with a "craft tag" field so posts can cross-link to relevant products/collections automatically.
- **SEO panel**: bulk view of meta titles/descriptions across all pages/collections with warnings for duplicates or missing metadata.

### 4.5 Orders & Fulfillment
- Unified order table with filters for **Pre-Order**, **Ready to Ship**, **International**, **Duties Prepaid**.
- Pre-order-specific view showing expected weaving/completion timelines per order (critical since handloom pieces can take weeks to weave).
- One-click **Returns & Cancellation** workflow tied to the published policy, with refund status tracking.
- International orders panel showing duty-inclusive pricing reconciliation (site promises "no extra fees upon delivery").

### 4.6 Inventory
- **Stock by Loom/Batch**: since handloom pieces are often one-off or small-batch, track inventory by production batch, not just SKU count — shows "3 of 5 woven, 2 in progress."
- **Back-in-Stock automation**: when a sold-out product's stock is replenished, auto-notify customers who joined the waitlist and auto-tag the product into the "Back in Stock" collection.
- Low-stock and zero-stock alerts surfaced on the Dashboard.

### 4.7 Customers & CRM
- Profile view: order history, wishlist items, lifetime value, preferred currency/region, tags (VIP, Bridal Inquiry, Press).
- Segment builder for newsletter targeting (e.g., "purchased sarees > ₹50,000," "international customers").

### 4.8 Appointments (Store Visits)
- Native calendar view replacing the current external Calendly links — Varanasi and Mumbai stores as separate calendars, with staff assignment, reminder emails/WhatsApp, and no-show tracking.
- (If keeping Calendly, at minimum an **embedded read-only sync view** so staff don't need to leave the admin panel to see today's bookings.)

### 4.9 Support Inbox
- Unified inbox pulling in **WhatsApp Business API** + email + on-site chat into one queue, with canned responses for common questions (sizing, delivery time, duties, care instructions).
- Auto-tag conversations by intent (Order Status / Sizing / Custom Request / Complaint) using simple keyword rules, routable to the right team member.
- **FAQ manager** so the published FAQ page can be edited without a developer.

### 4.10 Marketing
- Newsletter composer with segment targeting and template reuse of homepage banner assets.
- Discount code and gift card management.
- **Currency & Pricing Rules**: since 8 currencies are shown, allow either live FX-rate sync or manual per-currency pricing overrides per product/collection, with a warning if a currency's price hasn't been reviewed in 30+ days.

### 4.11 Artisan & Weaver Registry (Tilfi-specific, high differentiation)
- A structured directory of weavers/artisans and techniques, each with a bio, photo, and craft specialty.
- Linking a product to a weaver profile auto-generates the "meet the maker" content block and feeds the "Many Hands of Handloom" storytelling page — turning content that's currently manually written into a reusable, structured asset.

### 4.12 Analytics & Reports
- Pre-built reports: best-selling collections, pre-order conversion rate, return rate by category, average fulfillment time (weaving-to-ship), regional revenue split by currency.
- Exportable to CSV/Sheets for finance.

### 4.13 Settings & Team Roles
- Role-based access (Catalog Manager, Content Editor, Support Agent, Finance, Super Admin) so, e.g., support staff can't edit pricing and content editors can't issue refunds.
- Audit log of who changed what and when (critical for a small team managing a high-value catalog).

---

## 5. UX Principles That Make It "Extraordinary" (not just functional)

- **Visual-first editing**: because Tilfi sells on craftsmanship and imagery, every content/product screen should show a live preview pane (mirroring how it will actually appear on the storefront), not just raw form fields.
- **Command palette** (⌘K / Ctrl+K): jump to any product, order, or customer instantly by typing — critical once the catalog has hundreds of SKUs across 40+ collections.
- **Smart defaults & templates**: new product/collection forms pre-fill recurring values (currency set, shipping class, size chart) so staff aren't re-entering the same data every time.
- **Inline validation, not after-the-fact errors**: catch missing alt text, broken banner aspect ratios, or empty collections before they go live.
- **Mobile-friendly admin** for on-the-go approvals (e.g., approving a return or replying to a WhatsApp message from a phone).
- **Dark/light theme** and clean typography — since the brand itself is visually refined, the admin tool should not feel like a generic bolted-on dashboard.
- **Undo/version history** on content and pricing changes, since these are irreversible-feeling actions for a small ops team.

---

## 6. Suggested Tech Approach

| Layer | Recommendation |
|---|---|
| **Storefront** | Keep Shopify (already live, handles payments/PCI/tax) |
| **Admin layer** | Build a custom internal admin **on top of the Shopify Admin API / GraphQL Storefront API**, rather than replacing Shopify — this gives all the custom UX above while Shopify remains the system of record for orders/inventory |
| **Extra data** (weaver registry, batch tracking, appointment calendar) | Store in a lightweight database (Postgres/Supabase) linked to Shopify product IDs via metafields |
| **WhatsApp** | WhatsApp Business Platform API integration into the Support Inbox |
| **Appointments** | Either keep Calendly via API sync, or build a simple in-house scheduler for full control |
| **Auth** | Role-based auth (e.g., Clerk/Auth0) mapped to the role matrix in §4.13 |

---

## 7. Suggested Build Priority (Phased Roadmap)

1. **Phase 1 — Core ops relief**: Dashboard, Product form redesign (with Craft Details + Availability status), Collection/Banner scheduler with live preview.
2. **Phase 2 — Revenue protection**: Back-in-Stock automation, Pre-order tracking, Low-stock alerts, Returns workflow.
3. **Phase 3 — Support & retention**: Unified WhatsApp/email inbox, Customer segments, Newsletter composer.
4. **Phase 4 — Brand differentiation**: Artisan/Weaver Registry, in-house appointment calendar, Analytics suite, Role-based permissions & audit log.

---

## 8. Summary

Tilfi's real admin pain points come from being a **high-SKU, story-driven, multi-currency, multi-channel luxury handloom brand** — not a generic store. The highest-leverage admin investment is a **catalog & content layer optimized for fast, guardrailed publishing of collections/banners**, paired with **operational visibility into pre-orders, batch-based inventory, appointments, and WhatsApp support** — all wrapped in a visual, fast, command-palette-driven interface that matches the craftsmanship of the brand itself.
