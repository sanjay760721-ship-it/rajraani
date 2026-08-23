"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND } from "@/lib/brand";

export default function AccountPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[70vh] bg-bg py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-rule p-8 sm:p-12 shadow-xs">
        {isForgot ? (
          <div>
            <h1 className="font-display text-2xl sm:text-3xl text-center text-ink mb-3 font-normal">
              Reset your password
            </h1>
            <p className="text-caption text-ink-muted text-center mb-8">
              We will send you an email to reset your password.
            </p>

            {submitted ? (
              <div className="text-center p-4 bg-surface-notice border border-rule mb-6">
                <p className="text-caption text-ink">
                  If an account exists for {email}, you will receive a reset link shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="reset-email" className="eyebrow block text-xs text-ink mb-2">
                    Email Address
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-rule-input focus:border-ink focus:outline-none text-sm text-ink bg-bg-alt"
                    placeholder="name@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ink text-bg py-3 text-xs uppercase tracking-[0.14em] hover:bg-ink-dark transition-colors font-medium cursor-pointer"
                >
                  Submit
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsForgot(false);
                  setSubmitted(false);
                }}
                className="text-xs text-ink underline hover:text-ink-muted transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : isRegister ? (
          <div>
            <h1 className="font-display text-2xl sm:text-3xl text-center text-ink mb-3 font-normal">
              Create Account
            </h1>
            <p className="text-caption text-ink-muted text-center mb-8">
              Sign up for faster checkout and order tracking with {BRAND.name}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="reg-name" className="eyebrow block text-xs text-ink mb-2">
                  Full Name
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-rule-input focus:border-ink focus:outline-none text-sm text-ink bg-bg-alt"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="reg-email" className="eyebrow block text-xs text-ink mb-2">
                  Email Address
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-rule-input focus:border-ink focus:outline-none text-sm text-ink bg-bg-alt"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="reg-password" className="eyebrow block text-xs text-ink mb-2">
                  Password
                </label>
                <input
                  id="reg-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-rule-input focus:border-ink focus:outline-none text-sm text-ink bg-bg-alt"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-bg py-3 text-xs uppercase tracking-[0.14em] hover:bg-ink-dark transition-colors font-medium cursor-pointer"
              >
                Create Account
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-rule text-center">
              <p className="text-caption text-ink-muted mb-2">Already have an account?</p>
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-xs text-ink uppercase tracking-wider font-semibold hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-display text-2xl sm:text-3xl text-center text-ink mb-3 font-normal">
              Login
            </h1>
            <p className="text-caption text-ink-muted text-center mb-8">
              Sign in to manage your orders, wishlist, and profile.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="login-email" className="eyebrow block text-xs text-ink mb-2">
                  Email Address
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-rule-input focus:border-ink focus:outline-none text-sm text-ink bg-bg-alt"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="login-password" className="eyebrow block text-xs text-ink">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgot(true)}
                    className="text-[11px] text-ink-muted hover:text-ink underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-rule-input focus:border-ink focus:outline-none text-sm text-ink bg-bg-alt"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-bg py-3 text-xs uppercase tracking-[0.14em] hover:bg-ink-dark transition-colors font-medium cursor-pointer"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-rule text-center">
              <p className="text-caption text-ink-muted mb-2">Don&apos;t have an account?</p>
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-xs text-ink uppercase tracking-wider font-semibold hover:underline cursor-pointer"
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
