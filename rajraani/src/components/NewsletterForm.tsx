"use client";

import { useState, useTransition } from "react";

import { subscribeAction } from "@/lib/newsletter-actions";

/**
 * The footer's sign-up form. It used to have no action, so a shopper who
 * signed up was silently ignored; it now saves the address (lib/newsletter.ts)
 * and says so.
 */
export function FooterNewsletterForm({ button }: { button: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <form
      className="mt-2"
      aria-label="Newsletter signup"
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(async () => {
          const result = await subscribeAction(email, "footer");
          setState(result.ok ? { ok: true, text: "Thank you — you are on the list." } : { ok: false, text: result.error });
          if (result.ok) setEmail("");
        });
      }}
    >
      <label htmlFor="newsletter-email" className="block text-[14px]">
        Email<span aria-hidden="true">*</span>
      </label>
      <div className="mt-1 flex gap-3">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-[35px] min-w-0 flex-1 border border-footer-band bg-white px-3 text-[14px] text-ink outline-none focus:border-ink-body"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-[35px] shrink-0 border border-transparent bg-white/80 px-[17.5px] font-display text-[17px] tracking-[1px] text-ink transition-colors hover:bg-white cursor-pointer"
        >
          {pending ? "…" : button}
        </button>
      </div>
      {state ? (
        <p role={state.ok ? "status" : "alert"} className="mt-2 text-[13px]">
          {state.text}
        </p>
      ) : null}
    </form>
  );
}
