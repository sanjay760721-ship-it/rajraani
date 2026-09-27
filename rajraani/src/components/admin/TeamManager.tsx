"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { addAdminAction, changeMyPasswordAction, removeAdminAction, type TeamResult } from "@/lib/admin/team-actions";

export type TeamMember = { id: number; email: string; createdAt: string; lastLoginAt: string | null; isMe: boolean };

const date = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "never";

function useAction() {
  const router = useRouter();
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const run = (action: () => Promise<TeamResult>, after?: () => void) =>
    startTransition(async () => {
      const result = await action();
      setMessage(result.ok ? { ok: true, text: result.message ?? "Done." } : { ok: false, text: result.error });
      if (result.ok) {
        after?.();
        router.refresh();
      }
    });
  return { message, pending, run };
}

function Note({ message }: { message: { ok: boolean; text: string } | null }) {
  if (!message) return null;
  return (
    <p className="a-body-sm" role={message.ok ? "status" : "alert"} style={{ color: message.ok ? "var(--a-status-done)" : "var(--a-negative)" }}>
      {message.ok ? "✓ " : ""}
      {message.text}
    </p>
  );
}

function Field({ label, value, onChange, type = "text", hint }: { label: string; value: string; onChange: (v: string) => void; type?: string; hint?: string }) {
  return (
    <label className="block">
      <span className="a-label block" style={{ color: "var(--a-outline)" }}>{label}</span>
      <input className="a-input mt-1 w-full" type={type} value={value} onChange={(event) => onChange(event.target.value)} autoComplete={type === "password" ? "new-password" : "off"} />
      {hint ? <span className="a-label mt-1 block" style={{ color: "var(--a-outline)" }}>{hint}</span> : null}
    </label>
  );
}

export function TeamManager({ members, devSignIn }: { members: TeamMember[]; devSignIn: boolean }) {
  const list = useAction();
  const adding = useAction();
  const password = useAction();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [again, setAgain] = useState("");

  return (
    <div className="space-y-6">
      <header>
        <h1 className="a-heading-lg">Team</h1>
        <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
          Who can sign in to this admin. Everyone here can change everything, so add only people you
          trust with the shop.
        </p>
      </header>

      {devSignIn ? (
        <p className="a-body-sm px-4 py-3" style={{ backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)", borderRadius: "var(--a-radius)" }}>
          You are using the developer sign-in on this computer. On the live site everyone signs in with
          one of the accounts below — <strong>add the first one before the shop goes live.</strong>
        </p>
      ) : null}

      <section className="a-card p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
        <h2 className="a-heading-sm">People who can sign in</h2>
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
          {members.length === 0 ? "Nobody yet." : `${members.length} account${members.length === 1 ? "" : "s"}.`}
        </p>
        <ul className="mt-3 divide-y" role="list">
          {members.map((member) => (
            <li key={member.id} className="flex flex-wrap items-center gap-4 py-3" style={{ borderColor: "var(--a-outline-variant)" }}>
              <div className="min-w-[12rem] flex-1">
                <p className="a-body-md">
                  {member.email} {member.isMe ? <span className="a-label" style={{ color: "var(--a-accent)" }}>· you</span> : null}
                </p>
                <p className="a-label" style={{ color: "var(--a-outline)" }}>
                  Added {date(member.createdAt)} · last signed in {date(member.lastLoginAt)}
                </p>
              </div>
              {!member.isMe ? (
                <button
                  type="button"
                  className="a-btn-secondary"
                  style={{ color: "var(--a-negative)" }}
                  disabled={list.pending}
                  onClick={() => {
                    if (confirm(`Remove ${member.email}? They will be signed out and cannot sign in again.`)) list.run(() => removeAdminAction(member.id));
                  }}
                >
                  Remove
                </button>
              ) : null}
            </li>
          ))}
        </ul>
        <Note message={list.message} />
      </section>

      <section className="a-card space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
        <div>
          <h2 className="a-heading-sm">Add a person</h2>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            Choose a first password for them (12 characters or more) and tell them privately. They can
            change it here after signing in.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Their email" value={email} onChange={setEmail} type="email" />
          <Field label="First password" value={newPassword} onChange={setNewPassword} type="password" hint={`${newPassword.length}/12 characters minimum`} />
        </div>
        <button
          type="button"
          className="a-btn-primary"
          disabled={adding.pending || !email.trim() || newPassword.length < 12}
          onClick={() =>
            adding.run(() => addAdminAction(email, newPassword), () => {
              setEmail("");
              setNewPassword("");
            })
          }
        >
          {adding.pending ? "Adding…" : "Add to the team"}
        </button>
        <Note message={adding.message} />
      </section>

      <section className="a-card space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
        <div>
          <h2 className="a-heading-sm">Change my password</h2>
          <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
            Any other device signed in as you is signed out when you change it.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Current password" value={current} onChange={setCurrent} type="password" />
          <Field label="New password" value={next} onChange={setNext} type="password" hint="12 characters or more" />
          <Field label="New password again" value={again} onChange={setAgain} type="password" />
        </div>
        <button
          type="button"
          className="a-btn-primary"
          disabled={password.pending || !current || next.length < 12 || !again}
          onClick={() =>
            password.run(() => changeMyPasswordAction(current, next, again), () => {
              setCurrent("");
              setNext("");
              setAgain("");
            })
          }
        >
          {password.pending ? "Changing…" : "Change my password"}
        </button>
        <Note message={password.message} />
      </section>
    </div>
  );
}
