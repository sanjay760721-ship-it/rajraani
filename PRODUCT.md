# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted equally by the owner (confirmed 1 Oct 2026):

- **Brides and families** buying for a wedding, often several pieces, often deciding together.
- **Collectors** who know Banarasi weaves and buy rare pieces for the craft.
- **Everyday-luxury buyers** choosing a fine saree for festivals, functions and gifting a few times a year.

All three are in India; the site ships within India only.

## Product Purpose

Rajraani is an own-brand e-commerce house for handwoven Banarasi sarees, suits, dupattas and stoles. It lets a buyer find, understand and buy a single handwoven piece online, or book a visit to see cloth in person. Success is a buyer who trusts a five- or six-figure piece enough to buy it without touching it, or who books a visit to do so.

## Positioning

A **royal house** (the owner's phrase for what a first-time visitor should feel): heritage and grandeur, buying from a palace atelier rather than a marketplace. Underneath it, the facts a neighbouring shop cannot copy:

- Pieces are bought directly from weavers in and around Varanasi.
- Every piece is one piece: when it sells it is rewoven, or never made again.
- Each piece carries its provenance: workshop, loom, weeks on the loom, number of artisans.

## Operating Context

- Catalogue of about 36 pieces, priced roughly ₹21,500 to ₹1,48,000, each with a poetic name (Aparajita, Nilambari…), weave, fabric and provenance.
- Two rooms, in Banaras and Lucknow, visited by appointment (booking links in the admin).
- A non-technical owner edits every word, photo, menu and page in the admin after launch; the design must survive their edits.
- Weaves are the craft's own vocabulary: kadhua, jangla, tanchoi, rangkat, jamdani, shikargah, meenakari, cutwork.

## Capabilities and Constraints

- Next.js 16 / React 19 / Tailwind 4 storefront in `rajraani/`, with its own SQLite admin. Checkout is Razorpay (still being made real).
- Shipping is India-only. Never claim worldwide shipping or duty-paid delivery.
- The site began as a copy of tilfi.com. Every visible trace of that site must go (`docs/redesign/reference-fingerprint.md`, `npm run check:redesign`). No copy, colours, type or measured spacing from it.
- Current photography is unlicensed stand-in imagery for local use only; it must never be committed, published or deployed. Commissioned photography is planned (`docs/research/photography-brief.md`).
- Undecided: final support email and phone, social accounts, and the date of the photo shoot.

## Brand Commitments

- Name **Rajraani**, with **Banaras** as its place. Logo at `docs/brand/logo.jpeg`: gold classical capitals, a lotus, a draped saree with a red tassel, on ivory.
- The owner wants the royal, Banarasi aesthetic kept in everything.
- Reference the owner considers classy: **Sabyasachi** (rich Indian heritage couture). A reference for the level of richness and confidence only; nothing of theirs may be copied.
- House photography direction is restraint: the cloth is the subject, and nothing in the frame or the interface competes with it (`docs/research/creative-direction.md`).

## Evidence on Hand

- Real catalogue data with provenance in `rajraani/data/rajraani.db` (36 products).
- Long-form editorial copy for campaigns and craft pages in `rajraani/src/lib/content/sections.ts`.
- No testimonials, press or awards exist. Do not invent any.

## Product Principles

1. The cloth leads. Interface, ornament and motion exist to frame the piece, never to compete with it.
2. Royal through confidence, not decoration. Grandeur comes from scale, depth and restraint rather than pattern and effects.
3. Provenance is the proof. Weaver, loom and weeks are shown with pride wherever a piece is.
4. Every word is true. No claims the business cannot back (shipping, certification, stock).
5. Editable by a non-technical owner. Designs must hold up when the words and photos change.

## Accessibility & Inclusion

WCAG 2.2 AA. Keyboard focus visible (a deliberately quiet 1px gold ring), reduced motion respected, contrast pairs enforced by `rajraani/src/lib/tokens/contrast.test.ts`.
