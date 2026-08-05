# Architecture change — 6 August 2026

**Shopify and Sanity are out. Razorpay, our own database, and our own admin are in.
The store is India-only.**

This supersedes `build.md` §1.1 (commerce backend), §1.3 (content backend) and the
eight-currency requirement throughout. `build.md` is otherwise still accurate and is
still the reference for structure, data model and sprint sequencing — it was right
about *what* to build, and this changes *what it runs on*.

---

## What changed and why

| | Was | Now |
|---|---|---|
| Commerce | Shopify headless | Razorpay + our own order handling |
| Content | Sanity | Our own admin panel |
| Markets | 8 currencies, DDP international | India only, INR only |
| Catalogue store | Shopify products | SQLite (`node:sqlite`), portable to Postgres |

The decision was sanju's, made on commercial grounds: no monthly platform fee, and
Razorpay is a better fit for Indian payments than Shopify is — UPI in particular,
which Shopify does not handle natively and which is how a large share of Indian
customers actually pay.

## What it costs, honestly

`build.md` §1.1 chose Shopify for what surrounds payments, not for payments:

> Checkout, payments, multi-currency, taxes, DDP duties, fraud, PCI — all solved.
> You write zero checkout code.

Razorpay solves **card handling and PCI** (its hosted checkout means card data never
touches our servers). It does not solve the rest. These are now ours to build and,
more importantly, ours to *run*:

- Inventory, orders, order status, refunds, cancellations
- Customer accounts and order history
- Order confirmation and dispatch emails
- Tax handling (GST)
- An admin interface for all of it

That is a permanent operational commitment, not a one-off build. It is a reasonable
trade at this scale — a few hundred one-of-a-kind pieces, one person merchandising —
and it would be a poor one at ten times the volume.

## The one thing that was lost, not deferred

**Duty-paid international shipping.** The announcement bar promised *"All duties paid
— nothing further to pay on delivery."* sweep-findings records this as the single
strongest message to overseas buyers in this category, because unexpected customs
charges on a ₹50,000 parcel are the biggest reason an international order does not
happen.

**DDP is a courier contract (DHL/FedEx), not a payment feature.** No payment gateway
provides it. The claim was removed from the announcement bar and the shipping tab the
moment Shopify was dropped, because leaving it would have been a false statement on a
live page.

It returns whenever a DDP courier arrangement exists. Nothing in the code prevents it.

## What survived the change

Almost all of it, because the catalogue always sat behind an interface:

```
CatalogueRepository  ← pages depend on this
  ├─ MockCatalogueRepository   (fixtures)
  ├─ SqliteCatalogueRepository (new)
  └─ ShopifyCatalogueRepository (deleted)
```

The homepage, listing pages, product pages, faceting, cart, search and editorial
layer are untouched by this change. That seam was built on the assumption the backend
was uncertain, and it was.

The Sanity schemas are **kept**. They are the content model — the shape of a campaign
story, the constraint that both art crops are required, the rule that body copy
cannot contain an `h1`. That thinking transfers to our own admin directly, and
rewriting it as admin forms is a smaller job than re-deciding it.

## Re-entry points, if any of this reverses

- **International:** restore the currency list in `src/lib/domain/types.ts`, add a
  rate source, restore the switcher in `SiteHeader`. All in git history.
- **Shopify:** `src/lib/data/shopify-repository.ts` in git history holds the full
  field mapping from `build.md` §2.1.
- **Sanity:** `sanity/` is intact and connects to a real Studio in one import change
  per file.
