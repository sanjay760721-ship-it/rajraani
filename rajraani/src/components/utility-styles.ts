/**
 * Class strings shared by the header's action cluster (search, currency,
 * account, wishlist, cart).
 *
 * Each action is a 44px round target holding a single line icon; the word is
 * kept for screen readers and shown as a tooltip-style label on hover. A
 * quiet ivory well appears under the pointer so the target reads as a button.
 */
export const UTILITY_ITEM =
  "group/u relative inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-bg-alt hover:text-sindoor cursor-pointer";
export const UTILITY_ICON = "size-[19px]";
export const UTILITY_CAPTION =
  "pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 font-ui text-[10.5px] tracking-[0.04em] text-bg opacity-0 transition-opacity duration-200 group-hover/u:opacity-100 group-focus-visible/u:opacity-100";
export const UTILITY_BADGE =
  "absolute top-1 right-0.5 min-w-4 h-4 px-1 rounded-full bg-sindoor text-paper font-ui text-[9.5px] font-medium leading-4 text-center tabular-nums";
