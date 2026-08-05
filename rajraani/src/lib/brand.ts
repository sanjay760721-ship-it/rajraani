/**
 * Brand constants.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The name is **Rajraani**, settled 5 August 2026 (HANDOFF §0). It replaced the
 * placeholder "Tantu" as a single edit to this file — which is the whole reason
 * everything brand-facing lives here. A test asserts no other source file
 * hardcodes the string.
 *
 * The Shopify metafield/metaobject namespace is `rajraani`.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * All copy below is original to this project. build.md §6 Originality makes
 * that an acceptance criterion covering seed data and fixtures, not only the
 * shipped site: no competitor product copy, product names or campaign names may
 * appear anywhere in the repository.
 */

export const BRAND = {
  name: "Rajraani",
  /**
   * Shopify metafield/metaobject namespace.
   *
   * build.md §2.1 was written against the reference site and uses its
   * namespace throughout. Inheriting the structure is the point; inheriting the
   * namespace is not. The originality gate fails on the competitor's.
   */
  namespace: "rajraani",
  /** Sits above the wordmark, italic (the category's brand-line convention). */
  line: "Woven in Banaras, one piece at a time.",
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
} as const;

/**
 * The three-part announcement bar.
 *
 * Duty-paid international shipping is the single highest-value message here:
 * sweep-findings records it as the category's answer to the biggest overseas
 * objection, and it belongs above the fold, not buried in a shipping tab.
 */
export const ANNOUNCEMENTS: readonly string[] = [
  "Complimentary shipping across India",
  "Complimentary worldwide shipping above ₹25,000",
  "All duties paid — nothing further to pay on delivery",
];

/** Free international shipping threshold, in base-currency minor units. */
export const FREE_SHIPPING_THRESHOLD_MINOR = 2_500_000;

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
      "Within India, 3–5 working days. Internationally, 5–10 working days depending on destination.",
      "Shipping within India is complimentary. International shipping is complimentary above ₹25,000.",
      "International orders ship Delivery Duty Paid — customs duty is settled before despatch and there is nothing to pay on arrival.",
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
