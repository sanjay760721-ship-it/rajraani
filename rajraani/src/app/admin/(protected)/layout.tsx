import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { requireAdmin, signOut } from "@/lib/auth/session";

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
    <div className="flex min-h-screen bg-bg">
      {/* Left Navigation Sidebar */}
      <AdminSidebar adminEmail={admin.email} signOutAction={endSession} />

      {/* Main Workspace Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}

