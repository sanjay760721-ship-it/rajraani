import { ANNOUNCEMENTS } from "@/lib/brand";

/**
 * Announcement bar.
 *
 * Three parts, the third of which is the duty-paid message. sweep-findings
 * records duty-paid international shipping in this position as the category's
 * answer to its biggest overseas objection — it earns the space.
 *
 * Not dismissible, not sticky: it scrolls away with the page.
 */
export function AnnouncementBar() {
  return (
    <div className="border-b border-rule bg-bg-alt">
      <div className="wrap-wide flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center">
        {ANNOUNCEMENTS.map((message, index) => (
          <p
            key={message}
            className={`text-caption text-ink-body ${
              // The reassurance clause carries the emphasis.
              index === ANNOUNCEMENTS.length - 1 ? "italic" : ""
            }`}
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}
