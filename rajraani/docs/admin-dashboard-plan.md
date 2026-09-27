# Admin dashboard plan

**Written:** 24 September 2026 · **Revised:** 27 September 2026 · **Status:** largely built — admin ~65% (see §7a Progress and HANDOFF §2.54); owner decisions in §8 still open
**Goal:** the owner can change everything a visitor sees, top to bottom, without a
code change or a deploy — and cannot break the site by doing it.

---

## 1. The principle

> **Code decides how things look. The database decides what they say, show and link to.**

Every word, photograph, link, price, menu item and setting on the storefront comes from
the database and has exactly one screen where it is edited. Layout, typography, spacing
and the section designs stay in code, where they are consistent and tested. The owner
never edits CSS; a developer never has to ship a deploy to change a sentence.

Three rules make that safe:

1. **Nothing goes live by accident.** Every edit is a draft until *Publish*, with a
   preview of the real page first.
2. **Nothing can link nowhere.** Links are chosen from a picker of real pages,
   collections and products, not typed. A page that is linked to cannot be deleted
   until the links are moved.
3. **Everything can be undone.** Every publish keeps a revision; any revision can be
   restored in one click.

---

## 2. Where things stand (measured 24 September 2026)

| Screen | Today | Saves? |
|---|---|---|
| Dashboard | Reads real counts from the DB | — |
| Products (edit, new) | Real editor | ✅ yes — **except photos**, which cannot be uploaded |
| Homepage | Real, but **text fields only**; photos, slides and product picks read-only | ✅ partly |
| Collections | Reads the DB | ❌ no editor |
| Taxonomy | Reads the DB | ❌ read-only |
| Media | Reads the DB | ❌ no upload |
| Orders | Reads the DB | ❌ and orders are not trustworthy until payments are fixed |
| Editorials, FAQs, Artisans | Mock-ups | ❌ |
| Customers, Appointments, Discounts, Analytics | Mock-ups | ❌ |
| **Not in the admin at all** | Menus, footer, announcement bar, contact details, social links, the 20 content pages, SEO, the newsletter popup, product-page standard text | code only |

The database already has the tables most of this needs — `page`, `setting`, `campaign`,
`collection`, `enquiry`, `customer_order` — and the storefront already reads pages and the
homepage through a content layer with `savePage` / `deletePage` written and unused. The
foundations are there; the screens are not.

---

## 3. The dashboard, screen by screen

The sidebar, in the order the owner will use it most:

### Home
**Dashboard** — today's orders and revenue, pieces low in stock, drafts waiting to be
published, new enquiries and appointment requests, and a "what's live" list of the last
ten changes and who made them.

### Shop
| Screen | Edits |
|---|---|
| **Products** | Everything on a product page: name, poetic name, story, price, stock, made-to-order lead time, specifications, weave/fabric/colour/motif tags, **photos (upload, reorder, crop, alt text)**, related pieces, SEO title and description, publish/unpublish. Adds the missing product *list* screen with search and filters. |
| **Collections** | Title, intro text, hero photo, which products and in what order (hand-picked) or which filters (automatic, e.g. "all Katan silk"), SEO. |
| **Campaigns** | Everything about a campaign in one place, with a *New campaign* wizard and one-click retire (§4a). |
| **Stores** | Each store once: address, hours, phone, map, photos, booking link, story. It then appears everywhere it is shown (§4a). |
| **Taxonomy** | The fixed vocabulary — weaves, fabrics, colours, motifs, zari — with spellings and aliases (so "kadwa" finds Kadhua). Edited rarely, by the owner only. |

### Content
| Screen | Edits |
|---|---|
| **Homepage** | Every band, top to bottom: slides (photo, phone crop, text, button, dark/light caption), the order of bands, show/hide a band, product picks, the video. |
| **Pages** | All 20 content pages — campaign stories, craft pages, About, the store, FAQs, policies, the size chart. Add, reorder, hide or delete sections; edit every text, photo and link in them; create new pages from a template. |
| **Menus** | The six top menus and their dropdowns: columns, links, photo tiles and captions. The mobile menu follows automatically. |
| **Footer** | Columns, links, the newsletter line, the copyright line. |
| **Announcements** | The strip above the header, and the newsletter popup (text, photo, when it appears). |
| **Media library** | Every photo and video on the site in one place: upload, find where each one is used, replace everywhere at once, set desktop and phone crops, alt text. Flags images that are still unlicensed reference shots. |

### Customers & orders
| Screen | Edits |
|---|---|
| **Orders** | Order list and detail, mark packed/shipped with tracking, refunds, notes, print invoice. *Depends on the payment fix (HANDOFF §6 A).* |
| **Customers** | Customer list, their orders and wishlist, contact history. |
| **Enquiries** | Messages from the contact form, reply status. |
| **Appointments** | Store-visit requests (replaces or sits beside Calendly), confirm/decline. |
| **Discounts** | Codes, amount or percentage, dates, limits. |

### Settings
| Screen | Edits |
|---|---|
| **Store details** | Brand line, support email, phone, WhatsApp number, support hours, store addresses, social links (today all placeholders in `brand.ts`). |
| **Shipping & duties** | Free-shipping threshold, duty text, dispatch promises — the text now repeated in the announcement bar, product pages and policies, set once. |
| **SEO** | Site title pattern, default share image, per-page overrides live on each page. |
| **Team** | Admin accounts and their roles (§6). |
| **Activity log** | Who changed what and when, with restore. |

---

## 4. Top to bottom — every part of the site and where it is edited

| On the site | Edited in |
|---|---|
| Announcement strip | Content → Announcements |
| Tagline, search, currency, login, wishlist, cart | Settings → Store details (tagline); the rest is functional, not content |
| Menu row and dropdowns (links, tiles, captions) | Content → Menus |
| Homepage bands | Content → Homepage |
| Collection page: title, intro, products, order | Shop → Collections |
| Product page: everything | Shop → Products |
| Product page standard text (irregularity note, promise, finishing options, delivery tabs) | Settings → Shipping & duties, and a "product page defaults" block |
| Campaign pages | Shop → Campaigns (the story itself in Content → Pages) |
| Store details wherever they appear (homepage slideshow, store page, contact, map) | Shop → Stores |
| Craft pages, About, contact, FAQs, policies, size chart | Content → Pages |
| Where a photo links to | The link picker on that photo (falls back to the page's default) |
| Footer | Content → Footer |
| Contact details, socials, WhatsApp | Settings → Store details |
| Newsletter popup | Content → Announcements |
| Page titles and share images for Google and WhatsApp | The SEO panel on each page, product and collection |

Anything a visitor can read that is not on this list is a bug in the plan.

---

## 5. Shared building blocks

These are built once and used by every content screen. They are most of the work.

1. **The section editor.** The site is built from ~28 section types (banner, image with
   text, gallery grid, size chart, FAQ, slideshow…). Rather than hand-building 28 forms,
   each section type declares its fields once — text, rich text, photo, link, list,
   choice — and the editor generates the form. Adding a new section type later means
   declaring its fields, not building a screen. The declarations already exist in
   outline in `sanity/schemas/objects/sections.ts` and are held to the storefront by a
   test; they become the source for the forms.
2. **Live preview.** The editor on the left, the real page on the right, updating as you
   type, with phone and desktop widths.
3. **Media picker with art direction.** Choose or upload a photo, set the desktop crop
   and the phone crop separately, write alt text. Warns when a photo is too small for
   where it is placed.
4. **Link picker.** Search pages, collections and products; external links allowed but
   marked. No free-typed internal URLs, so no dead links.
5. **Draft, preview, publish, revisions.** On pages, homepage, menus, footer and
   settings alike.
6. **Guard rails.** Required fields, length limits sized to the design (a hero title that
   would wrap to four lines is flagged), contrast check on text-over-photo captions
   (the measurement used in the 24 Sep design audit, automated), and the originality
   check run on save.

---

## 4a. Easy for the owner — the test every screen must pass

*Added 27 September 2026.* Covering everything is not enough. The owner must be able to
change anything, from the homepage to campaigns to stores, **without training, without
knowing how the site is built, and without editing the same fact in two places.**

### Edit from the page itself
The owner browses the real site while signed in. Every band, menu, footer column,
product and store shows a small **Edit** button that opens the right form, already
scrolled to that item. Nobody has to learn which admin screen owns which part of the
site; they click the thing they want to change.

### One thing, one record, shown everywhere
Today, facts are typed more than once. The Banaras store's name, text and photo are
written separately in the homepage stores slideshow, the store page, its map and the
contact page. A campaign is spread across a `page`, a `collection`, a `campaign` row and
a menu link. The admin edits **things**, and sections only *point* at them:

| Thing | Edited once | Appears automatically in |
|---|---|---|
| **Store** | Name, city, address, hours, phone, map pin, photos, booking link, short line, long story | Homepage stores slideshow, store page, contact page, footer, map |
| **Campaign** | Name, season, cover photo (desktop + phone), one-line pitch, story, its pieces, on/off | Its own page, its collection, the menu dropdown, homepage bands that feature it |
| **Product** | Everything (§3) | Collections, search, campaign pages, homepage picks |
| **Store details** | Email, phone, WhatsApp, socials | Header, footer, contact page, product pages, order emails |

### Wizards for the big jobs
- **New campaign:** name it, upload the cover, write the pitch, pick the pieces, then choose
  where it appears (menu? homepage?). One *Publish* creates the page, the collection and
  the menu link together. **Retiring** a campaign takes one click: it comes out of the
  menu and the homepage, and its page stays up as an archive.
- **New store:** fill in one form. The store appears in every place listed above.

### Forms in plain words
- No slugs, JSON, file paths or section-type names on screen. Fields are named for what
  the visitor sees ("Big headline on the first slide"), and each shows a small thumbnail
  of where it appears.
- Photos: drag in, drag to reorder, click to set the focal point. That is all.
- The homepage is a list of its bands as thumbnails: drag to reorder, eye icon to hide,
  **+** to add a band from a gallery of pictures of each band type.
- The phone preview sits next to the desktop preview by default, because most visitors
  will be on a phone.
- Mistakes are hard to make, and the admin says what went wrong in plain words ("This
  headline will wrap to four lines on a phone — shorten it by about 12 characters").

**Acceptance test for every content screen:** someone who has never seen the admin changes
a store's photo and hours, launches a new campaign with six pieces, and reorders the
homepage, each in under five minutes, with no help.

---

## 5a. Built for a site where every word and photo gets replaced

*Added 27 September 2026.* The owner has said that once the site is live, **every text and
every image will change**. So the admin is the main tool for launch, not a nice-to-have.
Six things follow from that, and §5 does not cover them:

1. **Every photo on the site today has to go before launch.** All storefront imagery is
   unlicensed reference photography in gitignored `public/reference-only/` and
   `public/homepage/`. Each image *slot* (hero slide, band, tile, product photo) is a
   database row that points at a media item. It is in one of three states: **real**,
   **empty** (the section shows its drawn placeholder, as product fixtures already do) or
   **reference-only**. The dashboard shows a *Launch readiness* count ("41 slots still
   show reference photos"). Production refuses to serve a reference-only file.
2. **Uploads need somewhere to live.** Today the database is a SQLite file
   (`data/rajraani.db`) and images are files in `public/`. Neither survives a deploy on
   serverless hosting such as Vercel. Choose one:
   - **A:** a small VPS or a Fly/Railway app with a persistent disk. Keep SQLite, and
     keep uploads on the same disk. Simplest, and cheapest at this size.
   - **B:** object storage (Cloudflare R2 or S3) for images, and a hosted database.
     This means moving from `node:sqlite` to Postgres or Turso.
   Recommended: **A**, with nightly off-site backups of both the DB and the media folder.
3. **One upload, every size.** The owner uploads one full-size photo. The server makes
   the web sizes (WebP/AVIF, 480–2400px), reads its dimensions, and rejects anything too
   small for the slot it is going into. Each slot declares its aspect ratio (hero 16:9 /
   phone 4:5, tile 2:3, band 15:8 and so on). The owner sets **one focal point**, and the
   desktop and phone crops come from it. Separate crops remain an override, not the
   default step.
4. **Interface wording is content too.** Beyond the sections, fixed wording sits in about
   20 components: cart drawer, cart and order-confirmation pages, footer, utility bar,
   filters, buy block, newsletter popup, empty states. It moves to one keyed table
   (`cart.empty`, `buy.addToBag`…) with a **Site wording** screen grouped by where each
   line appears. A test fails if a component renders a literal visible string outside
   that table.
5. **A publish shows up at once.** Every publish calls `revalidatePath`/`revalidateTag`
   for each page that uses the changed item. That includes media: replacing a photo
   refreshes every page it appears on. Waiting out the current `revalidate = 300` timer
   is not acceptable.
6. **The database, not git, becomes the record.** After launch, rolling back a commit
   will not bring back lost copy. Revisions (§1 rule 3), the activity log and the
   off-site backups are the only undo, so they ship in phase 1.

---

## 6. Who can do what

| Role | Can |
|---|---|
| **Owner** | Everything, including team, settings, taxonomy and deleting |
| **Editor** | Pages, homepage, menus, footer, media, product text and photos — publish included |
| **Catalogue** | Products, collections, stock, prices |
| **Fulfilment** | Orders, customers, enquiries, appointments — no content |

Sign-in stays as built (scrypt, opaque sessions). Adds: roles, a second factor for the
owner, and the activity log on every write.

---

## 7. Build order and estimate

In working days for one developer, assuming the current stack.

| Phase | Delivers | Days |
|---|---|---|
| **0. Payments fixed** (prerequisite, HANDOFF §6 A) | Orders become real | 3–4 |
| **1. Foundations** | Hosting + storage decision (§5a.2) · media library with upload, resizing, focal point and slot states · link picker · draft/publish/revisions · activity log · backups · roles | 10–12 |
| **2. Section editor + live preview** | The generated forms for all section types · *Edit* buttons on the live site · Store and Campaign records that sections point at (§4a) | 11–13 |
| **3. Content screens** | Pages (all 20 move from code to the DB) · full Homepage · Menus · Footer · Announcements · Site wording (§5a.4) · Launch readiness | 8–10 |
| **4. Catalogue** | Product list + photo upload · Collections editor · Campaigns · Taxonomy editing | 5–6 |
| **5. Settings** | Store details · Shipping & duties · SEO · product page defaults | 3 |
| **6. Operations** | Orders workflow · Customers · Enquiries · Appointments · Discounts | 8–10 |
| **7. Dashboard + analytics** | The home screen of §3, basic sales and traffic figures | 3–4 |
| **Total** | | **~51–62 days** (about 10–13 weeks) |

Phases 1–3 are what "edit everything top to bottom" needs; they take ~29–35 days on
their own. Because every image must be replaced before launch (§5a.1), **phases 0–4 are
the launch line**. Operations (6) and analytics (7) can follow. Each phase is usable when it lands — nothing waits
for the end.

**Migration is part of phase 3, not an afterthought:** the 20 pages, the menus and the
footer move from `sections.ts`, `navigation.ts` and `SiteFooter.tsx` into the database
unchanged, with a test that the site renders identically before and after.

---

## 7a. Progress

**27 Sep 2026: slice 1 built** (uncommitted, `npm run verify` green, 403 tests):

- **Photos.** Upload from the Photos screen or from any photo slot. Uploads are
  rotated upright, capped at 3000px, converted to WebP and stored in `data/media/`
  (gitignored, alongside the DB), with a `media` table and served by
  `app/media/[file]/route.ts`. The upload endpoint is `app/admin/api/media`; it is a
  route handler because server actions cap uploads at 1MB. Photos under 400px are
  refused. The Photos screen counts every reference photo still on the site, per page.
- **One editor for every band** (`SectionEditor.tsx`). It is generated from the
  band's own data, so nothing on a page is out of reach. It has plain-language
  labels, choices, and length counters from the content model
  (`lib/admin/section-fields.ts`), and link fields that check against every real
  page, collection and product. Layout and spacing settings sit under "More settings".
- **Homepage** and **Pages** (all 20, including the campaign and store pages) both
  use it. You can reorder, add a band (from a copy of a real one), remove, duplicate
  slides, and preview live at computer or phone width. Save publishes and refreshes
  the page.
- Fixed: `content.listPages()` hid every unedited page as soon as one page had been saved.

**27 Sep 2026: slice 2, simplified.** The owner found the band editor too complex
for "change this sentence". So:
- **`/admin` is now "Your website":** a search box plus the site's parts in visitor
  order, each opening one screen. The business overview moved to `/admin/overview`.
- **Change text (`/admin/text`):** type words you see on the site, and every place they
  appear is listed with a plain-words location and a Save button that publishes at
  once. It checks the text hasn't changed elsewhere before overwriting.
- **Site-wide lines are editable:** the announcement strip, top-bar line, footer
  contact details, "Our promise", the handwoven note, and the product tabs. These are
  `lib/content/site-text*.ts`, stored in the `site.text` setting. `brand.ts` still holds
  the defaults.
- **The sidebar is in plain words:** Your website / Shop / Not ready yet.

**27 Sep 2026: slice 3, edit on the website itself.** A signed-in admin sees a bar
on the live site. With "✏️ Edit this page" on, anything editable gets a gold outline
when pointed at; clicking it opens a side panel (change the words, or upload or pick a
photo) with Save. No page component was changed: a click is matched to content by the
words or photo file on screen (`components/site-editor/`, `/admin/api/edit-context`).
Visitors make no request and download no editor code. The storefront only asks the
server when the non-secret `rj_edit` hint cookie (set at sign-in) is present. Not yet
clickable: menu, footer links, product listings. A product page links to that
product's editor instead.

**27 Sep 2026: slice 4, the shop screens verified and rebuilt.**
- **Orders was a mock-up** with invented customers and "₹24.5M". It now reads
  `customer_order`, with tabs To send / Sent / Delivered / Not paid, one next step per
  order (mark as sent with tracking, mark as delivered), and notes. A banner says
  payment isn't live (`PAYMENTS_LIVE = false` until the signature check, HANDOFF §6 A).
- **Collections was a mock-up** of jewellery collections. It now shows the real 20,
  with photos, counts and a plain "shows every piece woven in Kadhua", and the name
  and intro are editable.
- **Products & stock** (was "Executive Overview") has a thumbnail, price, real photo
  count, −/+ stock, Hide/Show, Edit and search. **Product editor:** photo slots with
  upload / replace / reorder / remove / describe (`product-photo-actions.ts`), plain
  labels, and delete tucked away. Uploaded photos beat the staged reference photos, and
  a piece with real photos shows only those (`catalogue.ts` `realPhotosOnly`).
- **Weaves & colours:** plain groups, piece counts linking to the shop, and the dead
  "+ Add" button removed.
- **Customers, Appointments, Discounts, Analytics, Artisans** were mock-ups with
  invented data. They're now honest "Not ready yet" pages; FAQs redirects to Pages.

**27 Sep 2026: slice 5, the Overview page.** It's `/admin/overview`, first in the
sidebar (the products list moved to `/admin/products`, and `/admin/analytics`
redirects). Every figure is real (`lib/admin/overview-data.ts`):
- sales for the last 30 days vs the 30 before, and sales per week for 12 weeks (column
  chart with a hover tooltip and a table view)
- orders to send, pieces on the shop / sold out / low, messages to answer
- best sellers, and pieces by type
- photo readiness for launch
- Visitors says "not counted yet". Choosing a visitor-counting tool is an open decision.

The chart colour is the `--a-chart` token, validated with the dataviz script; the bronze
accent read as grey. There's also a new **Messages** screen for contact-form enquiries,
which were being saved but never shown.

**27 Sep 2026: slice 6, the Menu and new pages.**
- **`/admin/menu`** covers the six top items. Each can be renamed and repointed,
  and each dropdown's columns, links and photo tiles can be added, renamed,
  reordered or removed. An "Also on phones" tick builds the mobile list.
- It's stored in the `site.menu` setting (`lib/content/menu.ts`), with `NAVIGATION`
  as the default. The header reads it through `MenuProvider` / `useMenu()`.
- Limits come from the design (6 top items, 4 columns, 14 links, 3 tiles). The
  server checks them and reports problems in plain words.
- **"+ New page"** on Pages copies an existing page (e.g. Kala) under a new name,
  hidden until ticked Live. In the on-site editor, clicking the menu points to the
  Menu screen.

**27 Sep 2026: final sweep.**
- Crawled 23 admin routes, 20 page editors, 36 product editors and 60 storefront
  URLs: no errors, no broken links.
- Against a production build: every admin screen redirects a stranger to sign-in,
  both admin APIs return 401, and a visitor's browser makes no editor request.
- Fixed:
  - the editing bar showing inside admin previews
  - `sharp` not declared as a dependency
  - `PAYMENTS_LIVE` defined twice (now in `order-words.ts`)
  - no warning before removing a piece's only photo
  - old wording left elsewhere after a change: Change text now says where, e.g. the
    contact email is repeated in 7 places
  - the `quality={100}` warnings on product photos
- Tested a 20 MB camera-size upload (2.5 s). The database was checked to be back to
  its pre-test state.

**27 Sep 2026: "Your website" screens redesigned to match the Menu screen.** The
same header throughout (title, a one-line intro, Unsaved / Save & publish on the
right), titled cards with a hint line, and pick-one-then-edit:
- **Homepage & Pages:** the page's numbered blocks on the left, the chosen block on
  the right. Its fields are grouped as Photos / Words / Button and link / How it looks,
  plus a picker for slides and tiles (`ItemPicker`), with More settings folded. Preview
  is a button (computer or phone). Page details sit in an "About this page" card.
- **Change text:** places on the left (On every page / Homepage / Pages, with counts),
  and the chosen place's text on the right, grouped by block.
- **Start here:** titled groups On every page / Pages / Shop / Photos.
- **Pages list:** titled cards with hints, and "+ New page" in the header.
- **Photos:** the stand-ins to replace, listed per page, then "Your photos".
- The visible word "band" became "block" everywhere, and "reference" became "stand-in".

**Known limits, not bugs:**
- Two tabs saving the same page means the last save wins. Change text is safe; the
  band editors are not until revisions exist.
- No undo yet.
- The browser pane could not render during the sweep, so the new screens have been
  checked as text and data, **not looked at**. A human click-through is still owed.

**Next slices:** Store and Campaign records shown everywhere (§4a) · Edit buttons on
the live site · Menus, footer and announcement bar · site wording · drafts and
revisions (today Save publishes at once) · alt text chosen per slot.

## 8. Decisions for the owner

0. **Hosting (§5a.2):** a VPS or persistent-disk app with SQLite and local uploads
   (recommended), or object storage plus a hosted database?
1. **How many people will use the admin**, and which roles in §6 you need at launch.
2. **Appointments:** keep Calendly (the links currently 404) or book visits in our own
   admin?
3. **Newsletter:** which mailing service, or keep sign-ups in our own database for now?
4. **Analytics:** a simple built-in view, or connect Google Analytics / a privacy-first
   alternative?
5. **Order of work:** confirm payments first (recommended), or content editing
   first so copy can be written while payments are fixed.
