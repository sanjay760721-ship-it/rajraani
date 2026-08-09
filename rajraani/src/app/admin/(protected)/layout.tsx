import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { requireAdmin, signOut } from "@/lib/auth/session";

// The admin's own design system, kept out of globals.css so the storefront's
// contract-tested palette and the admin's tokens can never collide.
import "../admin-theme.css";

/**
 * The protected admin shell with sticky left sidebar navigation.
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
    // `admin-surface` is what switches design systems. Every token the admin
    // uses is scoped under it in globals.css, so the storefront's contract-
    // tested palette is untouched and nothing here can leak out of this tree.
    <div className="admin-surface flex min-h-screen">
      <AdminSidebar adminEmail={admin.email} signOutAction={endSession} />

      <div className="flex min-w-0 flex-1 flex-col">
        <main className="mx-auto w-full max-w-[1280px] flex-1 px-10 py-12">
          {children}
        </main>
      </div>
    </div>
  );
}

