import type { ReactNode } from "react";

/**
 * A storefront page's opening, in the homepage's voice: a zari-ruled label,
 * the title in tall condensed capitals rising into view, and the introduction
 * directly beneath it on the same left edge. `center` for pages composed
 * around a centred column (search, a story under a photograph).
 */
export function PageHead({
  kicker,
  title,
  intro,
  align = "left",
  size = "lg",
  children,
}: {
  kicker?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  size?: "lg" | "md";
  children?: ReactNode;
}) {
  return (
    <header className={`cine-page-head ${align === "center" ? "cine-page-head--center" : ""}`}>
      {kicker ? (
        <p className="cine-kicker">
          <span aria-hidden="true" className="cine-kicker__rule" />
          {kicker}
        </p>
      ) : null}
      <h1 className={`cine-page-title cine-page-title--${size}`}>{title}</h1>
      {intro ? <div className="cine-page-head__intro">{intro}</div> : null}
      {children}
    </header>
  );
}
