import { setMessageAnsweredAction } from "@/lib/admin/message-actions";
import { db } from "@/lib/db/client";

export const metadata = { title: "Messages" };

type Message = { id: number; name: string; email: string; message: string; handled: number; created_at: string };

/**
 * Messages sent through the contact form on the website.
 *
 * They were being saved (see the `enquiry` table) with no screen to read them,
 * so a customer who wrote in would never have been answered.
 */
export default function AdminMessagesRoute() {
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
    </div>
  );
}
