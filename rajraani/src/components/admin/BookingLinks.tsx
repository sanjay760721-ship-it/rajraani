"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { replaceBookingLinkAction } from "@/lib/admin/booking-actions";
import type { BookingLink } from "@/lib/admin/booking-links";

function LinkCard({ link }: { link: BookingLink }) {
  const router = useRouter();
  const [value, setValue] = useState(link.url);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [checking, setChecking] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const save = () =>
    startTransition(async () => {
      const result = await replaceBookingLinkAction(link.url, value);
      if (!result.ok) return setMessage({ ok: false, text: result.error });
      setMessage({ ok: true, text: `Changed in ${result.changed} place${result.changed === 1 ? "" : "s"}. Each is in Recent changes.` });
      router.refresh();
    });

  return (
    <li className="a-card space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      <div>
        <p className="a-label" style={{ color: "var(--a-outline)" }}>Booking address</p>
        <a href={link.url} target="_blank" rel="noreferrer" className="a-body-md break-all underline">
          {link.url}
        </a>
        <p className="a-body-sm mt-1" style={{ color: "var(--a-ink-variant)" }}>
          Used in {link.uses.length} place{link.uses.length === 1 ? "" : "s"}:
        </p>
        <ul className="mt-1 space-y-1">
          {link.uses.map((use, index) => (
            <li key={index} className="a-body-sm">
              <Link href={use.href} className="underline">{use.place}</Link>{" "}
              <span style={{ color: "var(--a-outline)" }}>› {use.where}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="block min-w-[16rem] flex-1">
          <span className="a-label block" style={{ color: "var(--a-outline)" }}>Change it everywhere to</span>
          <input className="a-input mt-1 w-full" value={value} onChange={(event) => setValue(event.target.value)} />
        </label>
        <button
          type="button"
          className="a-btn-secondary"
          disabled={!!checking}
          onClick={() => {
            setChecking("Opening…");
            window.open(value, "_blank", "noopener");
            setChecking(null);
          }}
        >
          Test the link ↗
        </button>
        <button type="button" className="a-btn-primary" disabled={pending || value.trim() === link.url} onClick={save}>
          {pending ? "Saving…" : "Save everywhere"}
        </button>
      </div>
      {message ? (
        <p className="a-body-sm" role={message.ok ? "status" : "alert"} style={{ color: message.ok ? "var(--a-status-done)" : "var(--a-negative)" }}>
          {message.ok ? "✓ " : ""}{message.text}
        </p>
      ) : null}
    </li>
  );
}

export function BookingLinks({ links }: { links: BookingLink[] }) {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="a-heading-lg">Store visits</h1>
          <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
            Visits are booked through Calendly. Your bookings, times and reminders are managed there;
            this screen keeps the site’s “Book a visit” buttons pointing at the right Calendly pages.
          </p>
        </div>
        <a href="https://calendly.com/app/scheduled_events/user/me" target="_blank" rel="noreferrer" className="a-btn-primary">
          See my bookings in Calendly ↗
        </a>
      </header>

      <p className="a-body-sm px-4 py-3" style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}>
        Press <strong>Test the link</strong> on each one. If Calendly shows “page not found”, create that
        booking page in Calendly (or paste the address of the one you have) and save.
      </p>

      {links.length === 0 ? (
        <div className="a-card px-6 py-12 text-center" style={{ borderRadius: "var(--a-radius-md)" }}>
          <p className="a-heading-sm">No booking links on the site</p>
          <p className="a-body-md mt-2" style={{ color: "var(--a-ink-variant)" }}>
            Add a button on any page whose link is your Calendly booking page, and it will appear here.
          </p>
        </div>
      ) : (
        <ul className="space-y-3" role="list">
          {links.map((link) => (
            <LinkCard key={link.url} link={link} />
          ))}
        </ul>
      )}
    </div>
  );
}
