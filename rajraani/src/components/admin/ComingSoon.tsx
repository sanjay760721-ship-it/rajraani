import Link from "next/link";

/**
 * An honest placeholder for a screen that is not built yet.
 *
 * These screens used to be mock-ups filled with invented customers, stores and
 * sales figures. Someone who does not build websites cannot tell a mock-up from
 * the truth, so each one now says plainly that it is not ready, what it will
 * do, and what to use in the meantime.
 */
export function ComingSoon({
  title,
  willDo,
  meanwhile,
  link,
}: {
  title: string;
  willDo: string;
  meanwhile: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-12">
      <span className="a-badge a-badge-draft">Not ready yet</span>
      <h1 className="a-heading-lg">{title}</h1>
      <p className="a-body-lg" style={{ color: "var(--a-ink-variant)" }}>
        {willDo}
      </p>
      <p className="a-body-md" style={{ color: "var(--a-ink-variant)" }}>
        <strong>For now:</strong> {meanwhile}
      </p>
      {link ? (
        <Link href={link.href} className="a-btn-secondary inline-block">
          {link.label}
        </Link>
      ) : null}
    </div>
  );
}
