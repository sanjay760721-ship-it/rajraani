"use client";

import { useState, useTransition } from "react";

import { subscribeAction } from "@/lib/newsletter-actions";

/**
 * The footer's sign-up form: one pill-shaped field on the night ground with
 * the button set inside its right end. It saves the address
 * (lib/newsletter.ts) and says so.
 */
export function FooterNewsletterForm({ button }: { button: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <form
      aria-label="Newsletter signup"
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(async () => {
          const result = await subscribeAction(email, "footer");
          setState(result.ok ? { ok: true, text: "Thank you, you are on the list." } : { ok: false, text: result.error });
          if (result.ok) setEmail("");
        });
      }}
    >
      <label htmlFor="newsletter-email" className="eyebrow block text-gold-soft/90">
        Your email
      </label>
      <div className="mt-3 flex h-14 items-center rounded-full border border-on-night/25 bg-night-soft/60 p-1.5 pl-6 transition-colors focus-within:border-gold-soft">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="name@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-full min-w-0 flex-1 bg-transparent font-ui text-[15px] text-on-night outline-none placeholder:text-on-night-muted/60"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-full shrink-0 cursor-pointer rounded-full bg-gold-soft px-6 font-ui text-[14px] font-medium text-night transition-colors hover:bg-paper disabled:opacity-60"
        >
          {pending ? "Sending…" : button}
        </button>
      </div>
      {state ? (
        <p role={state.ok ? "status" : "alert"} className="mt-3 font-ui text-[13px] text-gold-soft">
          {state.text}
        </p>
      ) : null}
    </form>
  );
}
