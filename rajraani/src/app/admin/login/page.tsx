import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BRAND } from "@/lib/brand";
import { currentAdmin, signIn } from "@/lib/auth/session";
import { lockedFor, recordFailure, recordSuccess } from "@/lib/auth/throttle";

export const metadata = { title: "Sign in" };

/** The address a sign-in attempt came from, for the guess limit. */
async function clientAddress(): Promise<string> {
  const list = await headers();
  return (
    list.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    list.get("x-real-ip") ||
    "unknown"
  );
}

/**
 * Admin sign-in.
 *
 * Outside the protected route group, obviously — but it still redirects an
 * already-signed-in admin away, so the browser back button after logging in
 * does not land on a login form that appears to have failed.
 *
 * Repeated wrong passwords are refused for a while (auth/throttle.ts). The
 * "create an account from the command line" hint shows only on a developer's
 * machine: on the public site it told strangers how admin accounts are made.
 */
export default async function LoginPage(props: PageProps<"/admin/login">) {
  if (await currentAdmin()) redirect("/admin");

  const { error, wait } = await props.searchParams;

  async function attemptSignIn(formData: FormData) {
    "use server";

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const address = await clientAddress();

    const minutes = lockedFor(email, address);
    if (minutes > 0) redirect(`/admin/login?error=locked&wait=${minutes}`);

    const admin = await signIn(email, password);
    if (!admin) {
      recordFailure(email, address);
      // One message for every failure mode. Distinguishing "no such user" from
      // "wrong password" turns the form into a way of discovering who has an
      // account.
      redirect("/admin/login?error=1");
    }
    recordSuccess(email);
    redirect("/admin");
  }

  const message =
    error === "locked"
      ? `Too many wrong attempts. For your security, please wait ${typeof wait === "string" ? wait : "15"} minutes and try again.`
      : error
        ? "Those details were not recognised. Check the email and password and try again."
        : null;

  return (
    <div className="mx-auto flex min-h-screen max-w-prose flex-col justify-center px-6">
      <div className="border border-rule p-8">
        <p className="eyebrow text-ink-muted">{BRAND.name}</p>
        <h1 className="text-h2 mt-2">Sign in to your admin</h1>

        {message ? (
          <p role="alert" className="text-caption mt-5 border border-error px-4 py-3 text-error">
            {message}
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

        <p className="text-caption mt-6 text-ink-muted">
          Forgotten your password? Ask your developer to set a new one — it takes a minute.
        </p>
      </div>

      <p className="text-caption mt-6 text-center">
        <Link href="/" className="text-ink-muted underline">
          ← Back to the shop
        </Link>
      </p>

      {process.env.NODE_ENV !== "production" ? (
        <p className="text-caption mt-6 text-center text-ink-muted">
          Developer note (hidden on the live site): create an account from the command line with
          <br />
          <code className="text-ink">node scripts/create-admin.mjs you@example.com yourpassword</code>
        </p>
      ) : null}
    </div>
  );
}
