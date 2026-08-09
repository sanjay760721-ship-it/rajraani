import { ExecutiveOverview } from "@/components/admin/ExecutiveOverview";
import { getDashboardMetrics, listProductsForAdmin } from "@/lib/data/admin-queries";

export const metadata = { title: "Executive Overview" };

/**
 * The admin's landing screen — catalogue health at a glance, then the
 * catalogue itself with inline stock control.
 */
export default async function AdminHome(props: PageProps<"/admin">) {
  const { saved, deleted } = await props.searchParams;
  const products = listProductsForAdmin();
  const metrics = getDashboardMetrics();

  const notice = saved
    ? "Piece saved."
    : deleted
      ? "Piece deleted."
      : null;

  return (
    <div className="flex flex-col gap-8">
      {notice ? (
        <p
          role="status"
          className="border px-4 py-3 text-[13px] font-semibold"
          style={{
            borderRadius: "var(--a-radius)",
            borderColor: "var(--a-accent)",
            color: "var(--a-on-accent-container)",
            backgroundColor: "var(--a-accent-container)",
          }}
        >
          {notice}
        </p>
      ) : null}

      <ExecutiveOverview products={products} metrics={metrics} />
    </div>
  );
}
