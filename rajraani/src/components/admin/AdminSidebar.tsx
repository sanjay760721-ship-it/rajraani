"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AdminIcon, type AdminIconName } from "./AdminIcon";
import { BRAND } from "@/lib/brand";

type NavItem = {
  href: string;
  label: string;
  icon: AdminIconName;
  target?: string;
  exact?: boolean;
  live?: boolean;
};

type NavGroup = { title: string; items: NavItem[] };

const NAV_GROUPS: NavGroup[] = [
  {
    // How the shop is doing, at a glance — first, because it is the question
    // asked most often.
    title: "Overview",
    items: [{ href: "/admin/overview", label: "Overview", icon: "analytics", live: true }],
  },
  {
    title: "Your website",
    items: [
      { href: "/admin", label: "Start here", icon: "dashboard", exact: true, live: true },
      { href: "/admin/text", label: "Change text", icon: "editorials", live: true },
      { href: "/admin/menu", label: "Menu", icon: "collections", live: true },
      { href: "/admin/homepage", label: "Homepage", icon: "homepage", live: true },
      { href: "/admin/pages", label: "Pages", icon: "editorials", live: true },
      { href: "/admin/media", label: "Photos", icon: "media", live: true },
    ],
  },
  {
    title: "Shop",
    items: [
      { href: "/admin/products", label: "Products & stock", icon: "collections", live: true },
      { href: "/admin/collections", label: "Collections", icon: "collections", live: true },
      { href: "/admin/taxonomy", label: "Weaves, colours, fabrics", icon: "taxonomy", live: true },
      { href: "/admin/orders", label: "Orders", icon: "orders", live: true },
      { href: "/admin/messages", label: "Messages", icon: "customers", live: true },
    ],
  },
  {
    // Screens that are still mock-ups. Kept visible so they are not forgotten,
    // but set apart so nobody expects them to save.
    title: "Not ready yet",
    items: [
      { href: "/admin/customers", label: "Customers", icon: "customers" },
      { href: "/admin/appointments", label: "Appointments", icon: "appointments" },
      { href: "/admin/discounts", label: "Discounts", icon: "discounts" },
      { href: "/admin/artisans", label: "Weavers", icon: "artisans" },
    ],
  },
];

export function AdminSidebar({
  adminEmail,
  signOutAction,
}: {
  adminEmail: string;
  signOutAction: () => Promise<void>;
}) {
  const pathname = usePathname();

  return (
    <aside
      className="sticky top-0 flex h-screen w-64 shrink-0 flex-col justify-between overflow-y-auto border-r a-glass"
      style={{
        borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)",
      }}
    >
      <div className="flex flex-col">
        <div className="p-6 pb-8">
          <Link href="/admin" className="block" aria-label={`${BRAND.name} Admin Home`}>
            <span className="a-label block" style={{ color: "var(--a-accent)" }}>
              Admin
            </span>
            <span
              className="a-heading-sm mt-1 block"
              style={{ color: "var(--a-ink)" }}
            >
              {BRAND.name}
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-3 pb-8 overflow-y-auto" aria-label="Admin navigation">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="mb-6">
              <span
                className="a-label block px-3 pb-2"
                style={{ color: "var(--a-outline)" }}
              >
                {group.title}
              </span>
              <ul className="space-y-1" role="list">
                {group.items.map((item) => {
                  const isActive = item.exact
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        target={item.target}
                        aria-current={isActive ? "page" : undefined}
                        className={`a-nav-link group ${isActive ? "a-nav-link-active" : ""}`}
                      >
                        <AdminIcon
                          name={item.icon}
                          className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.label}</span>
                        {!item.live ? (
                          <span
                            title="Static shell — not reading from the database yet"
                            className="ml-auto h-1.5 w-1.5 shrink-0"
                            style={{
                              borderRadius: "var(--a-radius-pill)",
                              backgroundColor: "var(--a-outline-variant)",
                            }}
                            aria-label="Not yet connected to database"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div
        className="border-t p-4"
        style={{
          borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)",
        }}
      >
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 a-btn-ghost w-full justify-start"
        >
          <AdminIcon name="external" className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>View shop</span>
        </Link>

        <div className="px-2 pb-3">
          <span className="a-label block" style={{ color: "var(--a-outline)" }}>
            Signed in
          </span>
          <span
            className="mt-1 block truncate text-xs font-semibold"
            title={adminEmail}
            style={{ color: "var(--a-ink)" }}
          >
            {adminEmail}
          </span>
        </div>

        <form action={signOutAction}>
          <button
            type="submit"
            className="a-btn-secondary w-full justify-center"
          >
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}