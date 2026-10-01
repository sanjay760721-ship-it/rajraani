/**
 * Class strings shared by every item on the right of the bar.
 *
 * Each action is an icon stacked over a small uppercase caption. Inline
 * icon-plus-word at 13px read as fine print on a wide screen; stacking lets the
 * icon carry the size while the caption stays quiet, and gives each item a
 * target far larger than the glyph. Exported so the wishlist and currency
 * controls, which live in their own files, line up with the rest.
 */
export const UTILITY_ITEM =
  "relative flex flex-col items-center justify-center gap-1.5 min-w-[52px] h-full text-topbar-ink hover:text-topbar-accent transition-colors cursor-pointer group";
export const UTILITY_ICON = "w-[20px] h-[20px]";
export const UTILITY_CAPTION =
  "font-ui text-[10px] uppercase tracking-[0.16em] leading-none";
export const UTILITY_BADGE =
  "absolute top-[10px] right-[8px] min-w-[16px] h-[16px] px-1 rounded-full bg-topbar-accent text-white text-[9px] font-semibold font-mono leading-[16px] text-center";
