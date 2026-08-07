import { InteractiveAdminHub } from "@/components/admin/InteractiveAdminHub";
import { togglePublishedAction } from "@/lib/admin/product-actions";
import { getDashboardMetrics, listProductsForAdmin } from "@/lib/data/admin-queries";

export const metadata = { title: "Dashboard & Operating System" };

/**
 * Admin Dashboard & Catalogue Overview.
 *
 * Single-pane-of-glass interactive operating system for catalogue readiness, inventory,
 * live stock adjusters, search, inspect modals, and launch progress meters.
 */
export default async function AdminHome(props: PageProps<"/admin">) {
  const { saved, deleted } = await props.searchParams;
  const products = listProductsForAdmin();
  const metrics = getDashboardMetrics();

  return (
    <div className="space-y-6">
      {saved ? (
        <p
          role="status"
          className="text-caption border border-emerald-700/40 bg-emerald-50 px-4 py-3 text-emerald-800 text-xs font-semibold"
        >
          ✓ Product successfully saved and updated.
        </p>
      ) : null}

      {deleted ? (
        <p
          role="status"
          className="text-caption border border-rule bg-bg-alt px-4 py-3 text-ink-muted text-xs"
        >
          ✓ Product deleted from database.
        </p>
      ) : null}

      <InteractiveAdminHub
        products={products}
        metrics={metrics}
        togglePublishedAction={togglePublishedAction}
      />
    </div>
  );
}



