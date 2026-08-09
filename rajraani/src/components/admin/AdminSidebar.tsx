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
  /** Reads from the database. Everything else is still a static shell. */
  live?: boolean;
};

type NavGroup = { title: string; items: NavItem[] };

const NAV_GROUPS: NavGroup[] = [
  {
    title: "Overview",
    items: [{ href: "/admin", label: "Dashboard", icon: "dashboard", exact: true, live: true }],
  },
  {
    title: "Catalogue",
    items: [
      { href: "/admin/collections", label: "Collections", icon: "collections", live: true },
      { href: "/admin/taxonomy", label: "Taxonomy", icon: "taxonomy", live: true },
      { href: "/admin/artisans", label: "Artisans", icon: "artisans" },
    ],
  },
  {
    title: "Content",
    items: [
      { href: "/admin/homepage", label: "Homepage", icon: "homepage" },
      { href: "/admin/media", label: "Media", icon: "media", live: true },
      { href: "/admin/editorials", label: "Editorials", icon: "editorials" },
      { href: "/admin/faqs", label: "FAQs", icon: "faqs" },
    ],
  },
  {
    title: "Operations",
    items: [
      { href: "/admin/orders", label: "Orders", icon: "orders" },
      { href: "/admin/customers", label: "Customers", icon: "customers" },
      { href: "/admin/appointments", label: "Appointments", icon: "appointments" },
      { href: "/admin/discounts", label: "Discounts", icon: "discounts" },
    ],
  },
];

/**
 * Admin sidebar — fixed rail, grouped navigation, bronze active state.
 *
 * The mockups put a wordmark image here. This uses live type instead, so the
 * brand name comes from `BRAND` and there is no asset to go stale.
 *
 * Sections still backed by hardcoded arrays are marked. Eight of twelve are,
 * and an operations console that looks equally authoritative everywhere is how
 * someone ends up trusting a number that was typed in by hand.
 */
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
      className="sticky top-0 flex h-screen w-64 shrink-0 flex-col justify-between overflow-y-auto border-r"
      style={{
        backgroundColor: "var(--a-surface-low)",
        borderColor: "color-mix(in srgb, var(--a-outline-variant) 40%, transparent)",
      }}
    >
      <div>
        <div className="px-6 pt-8 pb-9">
          <Link href="/admin" className="block">
            <span className="a-label block" style={{ color: "var(--a-accent)" }}>
              Admin
            </span>
            <span
              className="a-heading mt-1 block text-2xl"
              style={{ color: "var(--a-ink)" }}
            >
              {BRAND.name}
            </span>
          </Link>
        </div>

        <nav className="space-y-7 px-3 pb-8" aria-label="Admin">
          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <span
                className="a-label block px-3 pb-2"
                style={{ color: "var(--a-outline)" }}
              >
                {group.title}
              </span>
              <ul className="space-y-0.5">
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
                        className="group flex items-center gap-3 px-3 py-2.5 text-sm transition-colors"
                        style={{
                          borderRadius: "var(--a-radius)",
                          backgroundColor: isActive
                            ? "var(--a-accent-container)"
                            : "transparent",
                          color: isActive
                            ? "var(--a-on-accent-container)"
                            : "var(--a-ink-variant)",
                          fontWeight: isActive ? 600 : 500,
                        }}
                      >
                        <AdminIcon name={item.icon} className="h-[18px] w-[18px] shrink-0" />
                        <span className="truncate">{item.label}</span>
                        {!item.live ? (
                          <span
                            title="Static shell — not reading from the database yet"
                            className="ml-auto h-1.5 w-1.5 shrink-0"
                            style={{
                              borderRadius: "var(--a-radius-pill)",
                              backgroundColor: "var(--a-outline-variant)",
                            }}
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
        className="border-t px-4 py-4"
        style={{
          borderColor: "color-mix(in srgb, var(--a-outline-variant) 40%, transparent)",
        }}
      >
        <Link
          href="/"
          target="_blank"
          className="mb-3 flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:opacity-70"
          style={{ color: "var(--a-ink-variant)", borderRadius: "var(--a-radius)" }}
        >
          <AdminIcon name="external" className="h-[18px] w-[18px] shrink-0" />
          <span>View shop</span>
        </Link>

        <div className="px-3 pb-3">
          <span className="a-label block" style={{ color: "var(--a-outline)" }}>
            Signed in
          </span>
          <span
            className="mt-0.5 block truncate text-xs font-semibold"
            title={adminEmail}
            style={{ color: "var(--a-ink)" }}
          >
            {adminEmail}
          </span>
        </div>

        <form action={signOutAction}>
          <button
            type="submit"
            className="a-label w-full border px-3 py-2 transition-colors"
            style={{
              borderRadius: "var(--a-radius)",
              borderColor: "var(--a-outline-variant)",
              color: "var(--a-ink-variant)",
            }}
          >
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
