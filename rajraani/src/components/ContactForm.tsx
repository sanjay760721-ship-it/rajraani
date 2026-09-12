"use client";

import { useActionState } from "react";

import {
  submitEnquiryAction,
  type EnquiryResult,
} from "@/lib/contact/actions";

/**
 * Name, email, message — the right-hand column of the contact page.
 *
 * `useActionState` rather than an onSubmit handler, so the form posts and
 * validates with JavaScript disabled too. A contact form is the last thing on a
 * site that should require a working bundle: someone whose script failed is
 * exactly the person who needs to tell us something.
 */
const INITIAL: EnquiryResult = { status: "idle" };

export function ContactForm({ submitLabel }: { submitLabel: string }) {
  const [state, action, pending] = useActionState(submitEnquiryAction, INITIAL);

  if (state.status === "sent") {
    return (
      <div className="border border-rule p-6" role="status">
        <p className="text-body text-ink">Thank you — we have your message.</p>
        <p className="text-body mt-2 text-ink-muted">
          Someone reads every one of these, usually the same day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.status === "error" ? (
        <p role="alert" className="text-body border border-error px-4 py-3 text-error">
          {state.message}
        </p>
      ) : null}

      <Field name="name" label="Name" type="text" autoComplete="name" />
      <Field name="email" label="Email" type="email" autoComplete="email" />

      <div>
        <label htmlFor="enquiry-message" className="eyebrow block text-ink-muted">
          Message <Required />
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={7}
          required
          maxLength={5000}
          className="text-body mt-2 w-full border border-rule-input bg-bg px-3 py-2 text-ink focus:border-ink focus:outline-none"
        />
      </div>

      <button type="submit" disabled={pending} className="cta-primary disabled:opacity-60">
        {pending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

function Required() {
  // The asterisk is decoration; `required` on the input is what a screen reader
  // announces, so the glyph is hidden from it rather than read as "star".
  return <span aria-hidden>*</span>;
}

function Field({
  name,
  label,
  type,
  autoComplete,
}: {
  name: string;
  label: string;
  type: "text" | "email";
  autoComplete: string;
}) {
  const id = `enquiry-${name}`;
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-ink-muted">
        {label} <Required />
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="text-body mt-2 w-full border border-rule-input bg-bg px-3 py-2 text-ink focus:border-ink focus:outline-none"
      />
    </div>
  );
}
