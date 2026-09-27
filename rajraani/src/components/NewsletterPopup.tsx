"use client";

import { useEffect, useState } from "react";

import type { FooterSettings } from "@/lib/content/footer-defs";
import { subscribeAction } from "@/lib/newsletter-actions";

/**
 * Newsletter Popup - Two-panel design matching reference.
 *
 * - 15s delay OR exit intent (mouse leaves viewport top)
 * - Once per session (cookie dismiss)
 * - Two-panel: campaign image left, form right
 * - Warm greeting, ships-worldwide reassurance, email field, SIGN UP CTA
 * - Dismissible x; remembered via session cookie
 */
/** Wording and on/off come from the admin (Footer screen). */
export function NewsletterPopup({ settings }: { settings: FooterSettings }) {
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Check cookie on mount - use lazy initialization to avoid setState in effect
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Both of these read *from* an external system that does not exist during
  // render — the cookie jar, and the fact of being on the client at all. A lazy
  // initialiser would hydrate a dismissed popup against a server that rendered
  // it visible, so the mount effect is the correct place for them.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
    const dismissed = document.cookie.includes("newsletter_dismissed=true");
    setDismissed(dismissed);
    /* eslint-enable react-hooks/set-state-in-effect */
    if (!dismissed) {
      // 15s delay
      const delayTimer = setTimeout(() => setIsOpen(true), 15000);

      // Exit intent detection
      const handleMouseLeave = (event: MouseEvent) => {
        if (event.clientY <= 0) {
          setIsOpen(true);
        }
      };
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        clearTimeout(delayTimer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  // Switched off in the admin.
  if (!settings.popupEnabled) return null;

  // If dismissed, don't render at all
  if (dismissed) return null;

  const dismiss = () => {
    setIsOpen(false);
    // Set session cookie (expires when browser closes)
    document.cookie = "newsletter_dismissed=true; path=/; SameSite=Lax";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setError(null);
    // A real sign-up now; this used to wait a second and say "Subscribed!"
    // without keeping the address anywhere.
    const result = await subscribeAction(email, "popup");
    if (!result.ok) {
      setStatus("error");
      setError(result.error);
      return;
    }
    setStatus("success");
    // Leave the thank-you on screen for a moment before closing.
    setTimeout(dismiss, 1800);
  };

  if (!mounted) return null;

  // If dismissed, don't render at all
  if (dismissed) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">
      <button
        type="button"
        aria-label="Close newsletter popup"
        className="absolute inset-0 bg-scrim/60"
        onClick={dismiss}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-bg border border-rule shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left panel: Campaign image / brand illustration */}
        <div className="hidden md:flex md:w-1/2 relative bg-ink text-bg overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center max-w-xs">
              <svg className="mx-auto mb-6 w-24 h-24 text-bg/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="font-display text-h2 mb-4">{settings.popupSideTitle}</p>
              <p className="text-prose text-bg/80">{settings.popupSideText}</p>
            </div>
          </div>
        </div>

        {/* Right panel: Form */}
        <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto">
          <button
            type="button"
            className="absolute top-4 right-4 text-ink-muted hover:text-ink p-2"
            onClick={dismiss}
            aria-label="Close"
          >
            x
          </button>

          <div className="max-w-sm mx-auto w-full">
            <h2 id="newsletter-title" className="font-display text-h2 text-center mb-2 text-ink">
              {settings.popupTitle}
            </h2>
            <p className="text-caption text-center text-ink-body mb-6">{settings.popupText}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email-popup" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email-popup"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-rule-input bg-transparent py-3 text-center text-h4 text-ink outline-none focus:border-ink"
                  required
                  disabled={status === "submitting" || status === "success"}
                />
              </div>
              <button
                type="submit"
                className="w-full cta justify-center"
                disabled={status === "submitting" || status === "success"}
              >
                {status === "submitting" ? "Signing up..." : status === "success" ? "Subscribed!" : "Sign up"}
              </button>
              {error ? (
                <p role="alert" className="text-caption text-center text-error">
                  {error}
                </p>
              ) : null}
            </form>

            <p className="text-caption text-center text-ink-muted mt-6 max-w-sm mx-auto">
              {settings.popupFootnote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}