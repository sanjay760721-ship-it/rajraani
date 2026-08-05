/**
 * Global constants. build.md §2.1: the brand promise and the handloom
 * irregularity disclaimer are global constants, not product fields — they must
 * never be duplicated into per-SKU content where they would rot independently.
 */
export const BRAND = {
  name: 'Rajraani',
  /** Metafield/metaobject namespace in Shopify. Must not be the competitor's. */
  namespace: 'rajraani',
  promise: 'Pure. Handloom. Banaras.',
  irregularityNote:
    'Woven entirely by hand. Slight irregularities in weave and motif are inherent to handloom and are the signature of the loom, not a defect.',
} as const;

/** build.md Sprint 0 / pre-build-gaps §7 — Markets configuration. */
export const CURRENCIES = ['INR', 'USD', 'CAD', 'GBP', 'AUD', 'EUR', 'JPY', 'SGD'] as const;
export type Currency = (typeof CURRENCIES)[number];
export const DEFAULT_CURRENCY: Currency = 'INR';

/** build.md §2.1 — fulfilment state lives in a metafield, never in a product title. */
export const FULFILMENT_MODES = ['ready_to_ship', 'made_to_order', 'pre_order'] as const;
export type FulfilmentMode = (typeof FULFILMENT_MODES)[number];
