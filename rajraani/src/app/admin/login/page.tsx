import { redirect } from "next/navigation";

import { BRAND } from "@/lib/brand";
import { currentAdmin, signIn } from "@/lib/auth/session";

export const metadata = { title: "Sign in" };

/**
 * Admin sign-in.
 *
 * Outside the protected route group, obviously — but it still redirects an
 * already-signed-in admin away, so the browser back button after logging in
 * does not land on a login form that appears to have failed.
 */
export default async function LoginPage(props: PageProps<"/admin/login">) {
  if (await currentAdmin()) redirect("/admin");

  const { error } = await props.searchParams;

  async function attemptSignIn(formData: FormData) {
    "use server";

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const admin = await signIn(email, password);
    if (!admin) {
      // One message for every failure mode. Distinguishing "no such user" from
      // "wrong password" turns the form into a way of discovering who has an
      // account.
      redirect("/admin/login?error=1");
    }
    redirect("/admin");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-prose flex-col justify-center px-6">
      <div className="border border-rule p-8">
        <p className="eyebrow text-ink-muted">{BRAND.name}</p>
        <h1 className="text-h2 mt-2">Sign in</h1>

        {error ? (
          <p
            role="alert"
            className="text-caption mt-5 border border-error px-4 py-3 text-error"
          >
            Those details were not recognised.
          </p>
        ) : null}

        <form action={attemptSignIn} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="eyebrow block text-ink-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="username"
              autoFocus
              className="w-full border-b border-rule-input bg-transparent py-2 text-ink outline-none focus:border-ink"
            />
          </div>

          <div>
            <label htmlFor="password" className="eyebrow block text-ink-muted">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full border-b border-rule-input bg-transparent py-2 text-ink outline-none focus:border-ink"
            />
          </div>

          <button type="submit" className="w-full bg-ink px-6 py-4 text-bg">
            <span className="eyebrow">Sign in</span>
          </button>
        </form>
      </div>

      <p className="text-caption mt-6 text-center text-ink-muted">
        No account yet? Create one from the command line:
        <br />
        <code className="text-ink">node scripts/create-admin.mjs you@example.com yourpassword</code>
      </p>
    </div>
  );
}
