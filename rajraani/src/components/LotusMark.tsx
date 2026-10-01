/**
 * The lotus from the house logo, redrawn as a line mark.
 *
 * Five petals over a short rule and a bindu, in `currentColor`, so it takes
 * gold on ivory and gold-soft on night without a second file. Decorative
 * wherever it appears next to the name, so it is hidden from assistive tech.
 */
export function LotusMark({ className = "", strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 2c3.5 4 3.5 10 0 14-3.5-4-3.5-10 0-14Z" />
      <path d="M16 16c-4-1-7-5-6.5-9.5 3 1.5 5.5 5 6.5 9.5Z" />
      <path d="M16 16c4-1 7-5 6.5-9.5-3 1.5-5.5 5-6.5 9.5Z" />
      <path d="M16 16.5c-5 .5-10.5-2-12.5-6.5 4 0 9 2.5 12.5 6.5Z" />
      <path d="M16 16.5c5 .5 10.5-2 12.5-6.5-4 0-9 2.5-12.5 6.5Z" />
      <path d="M8 19.5h16" />
      <circle cx="16" cy="22" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
