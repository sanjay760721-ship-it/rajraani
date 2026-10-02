import type { ReactNode } from "react";

/**
 * A plain wrapper around each page block.
 *
 * It used to fade its block in with framer-motion, starting every block at
 * opacity 0 in the server HTML, so nothing showed until the page's JavaScript
 * had loaded (the opening photograph of a story page waited about a second).
 * Since the redesign the blocks are animated by CineMotion (GSAP) on top of
 * content that is already visible, so this only keeps the wrapper element the
 * page layout rules expect (`:has(> .section-pad-prose)` in globals.css).
 * `delay` is accepted and ignored so existing call sites stay valid.
 */
export function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
