/**
 * Brand constants.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The name is **Rajraani**, settled 5 August 2026 (HANDOFF §0). It replaced the
 * placeholder "Tantu" as a single edit to this file — which is the whole reason
 * everything brand-facing lives here. A test asserts no other source file
 * hardcodes the string.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * All copy below is original to this project. build.md §6 Originality makes
 * that an acceptance criterion covering seed data and fixtures, not only the
 * shipped site: no competitor product copy, product names or campaign names may
 * appear anywhere in the repository.
 */

import { BRAND_NAME } from "./brand-name.ts";

export const BRAND = {
  name: BRAND_NAME,
  /** Sits on the left of the top bar, italic, beside the gold lotus. */
  line: "Pure handloom, from Varanasi",
  /** Rendered verbatim on every handloom product, as a global constant. */
  promise: "Pure. Handloom. Banaras.",
  /**
   * The handwoven-irregularity disclaimer. A global constant, not a product
   * field (build.md §2.1) — it is true of every piece.
   */
  irregularityNote:
    "Woven entirely by hand, so no two pieces are identical and small irregularities are part of the record of making.",
  legalName: "Rajraani Handloom Private Limited",
  countryOfOrigin: "India",
  supportEmail: "orders@example.invalid",
  supportPhone: "+91 00000 00000",
  /** Mon–Fri and Saturday hours, rendered italic and muted in the footer. */
  supportHours: "Monday to Friday, 10:00–19:00 IST · Saturday, 10:00–16:00 IST",
  /**
   * The house's social accounts — the one list the footer and the contact
   * page both read.
   *
   * EMPTY until the real handles exist. The footer icons used to point at
   * "#" and the contact page at facebook.com's front door: links that looked
   * finished and went nowhere. With nothing here, neither place shows social
   * links at all. Add `{ label: "Instagram", href: "https://…" }` entries
   * (Facebook, Instagram, YouTube or Pinterest) and both pick them up.
   */
  socials: [] as readonly {
    label: "Facebook" | "Instagram" | "YouTube" | "Pinterest";
    href: string;
  }[],
} as const;

/**
 * Announcement strip: three short, true lines that take turns.
 *
 * Shipping is India-only today (the Shipping tab below says so), so nothing
 * here promises more than that.
 */
export const ANNOUNCEMENT_PARTS = [
  "Complimentary shipping across India",
  "Handwoven in Varanasi, one piece at a time",
  "Visit us in Banaras by appointment",
] as const;

export const ANNOUNCEMENT_MESSAGE = ANNOUNCEMENT_PARTS.join(" · ");

/**
 * Global PDP tab content.
 *
 * Identical across products, so it lives in settings rather than in per-product
 * fields (addendum A5 verified this against two unrelated PDPs). In production
 * these come from the CMS `globalSettings` document; the shape is the contract.
 */
export const INFO_TABS: readonly { id: string; label: string; items: readonly string[] }[] = [
  {
    id: "shipping",
    label: "Shipping",
    items: [
      "Dispatched from Varanasi with a tracking number sent on despatch.",
      "Delivery within India takes 3–5 working days.",
      "Shipping within India is complimentary, with no minimum.",
      // Honest about the current limit rather than silent about it. An overseas
      // buyer who writes in is a better outcome than one who reaches checkout
      // and discovers we cannot ship.
      "We ship within India only at present. For enquiries from elsewhere, please write to us.",
    ],
  },
  {
    id: "dimensions",
    label: "Dimensions",
    items: [
      "Saree — 5.5 m × 1.1 m, with an unstitched blouse piece of 0.8 m.",
      "Dupatta — 2.4 m × 1.0 m.",
      "Stole — 2.2 m × 0.7 m.",
      "Every piece is woven to order, so dimensions may vary very slightly.",
    ],
  },
  {
    id: "care",
    label: "Care",
    items: [
      "Store folded in muslin, away from sunlight, damp and dust.",
      "Air and refold every few months so the folds do not set.",
      "Dry clean only, and only when it is genuinely needed.",
      "Keep perfume and a hot iron off the zari.",
    ],
  },
  {
    id: "other",
    label: "Other",
    items: [
      `Manufactured and marketed by ${BRAND.legalName}, Varanasi, Uttar Pradesh, India.`,
      `Country of origin: ${BRAND.countryOfOrigin}.`,
      `For queries, write to ${BRAND.supportEmail} or call ${BRAND.supportPhone}.`,
    ],
  },
];
