"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/brand";

type NavItem = {
  href: string;
  label: string;
  icon: string;
  target?: string;
  exact?: boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { href: "/admin", label: "Dashboard & Pieces", icon: "📊", exact: true },
    ],
  },
  {
    title: "Catalogue",
    items: [
      { href: "/admin/collections", label: "Collections & Drops", icon: "🗂️" },
      { href: "/admin/taxonomy", label: "Taxonomy Vocabulary", icon: "🏷️" },
      { href: "/admin/artisans", label: "Artisans & Looms", icon: "🧵" },
    ],
  },
  {
    title: "Content Studio",
    items: [
      { href: "/admin/homepage", label: "Homepage Layout", icon: "🎨" },
      { href: "/admin/media", label: "Media Manager", icon: "🖼️" },
      { href: "/admin/editorials", label: "Editorial Stories", icon: "📖" },
      { href: "/admin/faqs", label: "Customer FAQs", icon: "❓" },
    ],
  },
  {
    title: "Operations & Sales",
    items: [
      { href: "/admin/orders", label: "Orders & Fulfillment", icon: "📦" },
      { href: "/admin/customers", label: "Customer Profiles & CRM", icon: "👥" },
      { href: "/admin/appointments", label: "Boutique Store Visits", icon: "📅" },
      { href: "/admin/discounts", label: "Promos & Discounts", icon: "🎟️" },
    ],
  },
  {
    title: "Storefront",
    items: [
      { href: "/", label: "Preview Live Shop", icon: "↗️", target: "_blank" },
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
    <aside className="w-64 bg-bg-alt border-r border-rule min-h-screen flex flex-col justify-between shrink-0 sticky top-0 h-screen overflow-y-auto">
      <div>
        {/* Brand Brand Header */}
        <div className="p-6 border-b border-rule bg-bg">
          <Link href="/admin" className="block">
            <span className="eyebrow text-[10px] text-ink-muted uppercase tracking-widest block">
              Admin Portal
            </span>
            <span className="font-display text-2xl font-bold text-ink tracking-tight">
              {BRAND.name}
            </span>
          </Link>
        </div>

        {/* Grouped Navigation Links */}
        <nav className="p-4 space-y-6" aria-label="Admin Sidebar Navigation">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="space-y-1.5">
              <span className="px-3 text-[10px] font-semibold uppercase tracking-wider text-ink-muted/70 block">
                {group.title}
              </span>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = item.exact
                    ? pathname === item.href
                    : pathname.startsWith(item.href) && item.href !== "/";

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        target={item.target}
                        className={`flex items-center gap-3 px-3 py-2 text-xs font-medium transition-colors border ${
                          isActive
                            ? "bg-ink text-bg border-ink font-semibold shadow-xs"
                            : "text-ink-body hover:bg-bg-sand hover:text-ink border-transparent"
                        }`}
                      >
                        <span className="text-base shrink-0">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Admin User Profile & Sign Out Footer */}
      <div className="p-4 border-t border-rule bg-bg space-y-3">
        <div className="flex items-center justify-between">
          <div className="truncate">
            <span className="eyebrow text-[9px] text-ink-muted uppercase block">Signed in as</span>
            <span className="text-xs font-semibold text-ink truncate block" title={adminEmail}>
              {adminEmail}
            </span>
          </div>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="w-full text-center text-xs border border-rule py-1.5 px-3 text-ink-body hover:bg-error/10 hover:border-error hover:text-error transition-colors uppercase eyebrow"
          >
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
