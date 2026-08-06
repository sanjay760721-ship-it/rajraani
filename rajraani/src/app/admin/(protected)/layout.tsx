import Link from "next/link";
import { redirect } from "next/navigation";

import { BRAND } from "@/lib/brand";
import { requireAdmin, signOut } from "@/lib/auth/session";

/**
 * The protected admin shell.
 *
 * Everything in this route group requires a session. The guard here covers what
 * is *rendered*; each server action checks again for itself, because an action
 * is a POST endpoint that can be called without ever loading this layout.
 */
export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  const admin = await requireAdmin();

  async function endSession() {
    "use server";
    await signOut();
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-rule bg-bg-alt">
        <div className="wrap-wide flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-baseline gap-6">
            <Link href="/admin" className="font-display text-h4 text-ink">
              {BRAND.name}
            </Link>
            <nav aria-label="Admin">
              <ul className="flex gap-5">
                <li>
                  <Link href="/admin" className="eyebrow text-ink hover:underline">
                    Pieces
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="eyebrow text-ink-muted hover:underline"
                    target="_blank"
                  >
                    View shop ↗
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-caption text-ink-muted">{admin.email}</span>
            <form action={endSession}>
              <button type="submit" className="eyebrow text-ink underline">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="wrap-wide flex-1 py-10">{children}</main>
    </div>
  );
}
