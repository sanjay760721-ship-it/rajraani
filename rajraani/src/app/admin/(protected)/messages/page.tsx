import { removeSubscriberAction } from "@/lib/admin/footer-actions";
import { setMessageAnsweredAction } from "@/lib/admin/message-actions";
import { listSubscribers } from "@/lib/newsletter";
import { db } from "@/lib/db/client";
import { requireAdmin } from "@/lib/auth/session";

export const metadata = { title: "Messages" };

type Message = { id: number; name: string; email: string; message: string; handled: number; created_at: string };

/**
 * Messages sent through the contact form on the website.
 *
 * They were being saved (see the `enquiry` table) with no screen to read them,
 * so a customer who wrote in would never have been answered.
 */
export default async function AdminMessagesRoute() {
  // The layout is skipped on in-app moves between admin screens, so each
  // page checks the session itself (see src/proxy.ts).
  await requireAdmin();
  const subscribers = listSubscribers();
  const messages = db()
    .prepare("SELECT id, name, email, message, handled, created_at FROM enquiry ORDER BY handled ASC, created_at DESC LIMIT 300")
    .all() as unknown as Message[];
  const open = messages.filter((message) => !message.handled).length;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="a-heading-lg">Messages</h1>
        <p className="a-body-md mt-1" style={{ color: "var(--a-ink-variant)" }}>
          {open === 0 ? "Nothing waiting for a reply." : `${open} message${open === 1 ? "" : "s"} waiting for a reply.`}{" "}
          These come from the contact form on the website. Reply by email, then mark it answered.
        </p>
      </header>

      {messages.length === 0 ? (
        <p className="a-card px-6 py-16 text-center a-body-md" style={{ borderRadius: "var(--a-radius-lg)", color: "var(--a-ink-variant)" }}>
          No messages yet.
        </p>
      ) : (
        <ul className="space-y-3" role="list">
          {messages.map((message) => (
            <li
              key={message.id}
              className="a-card p-5"
              style={{ borderRadius: "var(--a-radius-md)", opacity: message.handled ? 0.65 : 1 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="a-body-md">
                  <strong>{message.name}</strong>{" "}
                  <a className="underline" href={`mailto:${message.email}?subject=${encodeURIComponent("Your message to us")}`}>
                    {message.email}
                  </a>
                </p>
                <span className="a-label" style={{ color: "var(--a-outline)" }}>
                  {new Date(message.created_at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}
                  {message.handled ? " · Answered" : ""}
                </span>
              </div>
              <p className="a-body-sm mt-3 whitespace-pre-line">{message.message}</p>
              <div className="mt-4 flex gap-3">
                <a className="a-btn-primary" href={`mailto:${message.email}?subject=${encodeURIComponent("Your message to us")}`}>
                  Reply by email
                </a>
                <form action={setMessageAnsweredAction.bind(null, message.id, !message.handled)}>
                  <button type="submit" className="a-btn-secondary">
                    {message.handled ? "Mark as not answered" : "Mark as answered"}
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}

      <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="a-heading-sm">Newsletter sign-ups</h2>
            <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
              {subscribers.length === 0
                ? "Nobody yet. Sign-ups from the footer and the pop-up appear here."
                : `${subscribers.length} ${subscribers.length === 1 ? "person has" : "people have"} signed up. Download the list to send them a letter from any mailing service.`}
            </p>
          </div>
          {subscribers.length ? (
            <a href="/admin/api/subscribers" className="a-btn-secondary">
              Download list
            </a>
          ) : null}
        </div>
        {subscribers.length ? (
          <ul className="mt-3 divide-y" role="list">
            {subscribers.slice(0, 100).map((subscriber) => (
              <li key={subscriber.email} className="flex flex-wrap items-center gap-4 py-2" style={{ borderColor: "var(--a-outline-variant)" }}>
                <span className="a-body-sm min-w-[12rem] flex-1">{subscriber.email}</span>
                <span className="a-label" style={{ color: "var(--a-outline)" }}>
                  {new Date(subscriber.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })} · {subscriber.source === "popup" ? "pop-up" : "footer"}
                </span>
                <form action={removeSubscriberAction.bind(null, subscriber.email)}>
                  <button type="submit" className="a-label underline" style={{ color: "var(--a-negative)" }}>
                    Remove
                  </button>
                </form>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </div>
  );
}
