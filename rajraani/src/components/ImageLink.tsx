import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/**
 * A photograph that goes somewhere.
 *
 * Every image on the site is a link (asked for 24 Sep 2026): a picture of a
 * piece, a campaign or a room is the shortest route to that thing, and one
 * that does nothing when clicked reads as broken. This is the one wrapper they
 * all use, so the rules live in one place:
 *
 *   - External targets (the store booking pages) open in a new tab.
 *   - `duplicate` is for a picture whose section already has a text link to
 *     the same place — a slide with a Discover button. The image is then a
 *     larger target for the pointer but not a second tab stop, and hidden from
 *     assistive tech so the destination is not announced twice.
 *   - With no `href` it renders the plain element, so a caller never has to
 *     branch.
 */
export function ImageLink({
  href,
  label,
  duplicate = false,
  className,
  style,
  children,
}: {
  href?: string;
  /** Accessible name when the link is not a duplicate. */
  label?: string;
  duplicate?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  if (!href) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const a11y = duplicate
    ? ({ tabIndex: -1, "aria-hidden": true } as const)
    : ({ "aria-label": label } as const);

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        {...a11y}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style} {...a11y}>
      {children}
    </Link>
  );
}
