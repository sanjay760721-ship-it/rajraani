export const metadata = { title: "Discounts & Promo Codes" };

type Discount = {
  id: string;
  code: string;
  type: "percentage" | "fixed_amount";
  value: string;
  minOrderINR: number;
  status: "Active" | "Scheduled" | "Expired";
  usesCount: number;
};

export default function DiscountsAdminPage() {
  const discounts: Discount[] = [
    {
      id: "DISC-01",
      code: "FESTIVE2026",
      type: "percentage",
      value: "10% OFF",
      minOrderINR: 50000,
      status: "Active",
      usesCount: 14,
    },
    {
      id: "DISC-02",
      code: "BRIDALWELCOME",
      type: "fixed_amount",
      value: "₹5,000 OFF",
      minOrderINR: 100000,
      status: "Active",
      usesCount: 8,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Discounts & Promo Codes</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Create and manage promotional discount codes, minimum purchase rules, and usage limits.
          </p>
        </div>
        <button
          type="button"
          className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
        >
          + Create New Promo Code
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-rule bg-bg">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-rule bg-bg-alt">
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Code</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Discount</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Min. Order</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Times Used</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Status</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-right text-ink-muted">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule text-sm">
            {discounts.map((disc) => (
              <tr key={disc.id} className="align-top hover:bg-bg-sand/30 transition-colors">
                <td className="py-4 px-4 font-mono font-bold text-ink">{disc.code}</td>
                <td className="py-4 px-4 font-semibold text-ink">{disc.value}</td>
                <td className="py-4 px-4 tabular-nums text-ink">
                  ₹{disc.minOrderINR.toLocaleString("en-IN")}
                </td>
                <td className="py-4 px-4 tabular-nums text-ink-body">{disc.usesCount} times</td>
                <td className="py-4 px-4">
                  <span className="eyebrow text-[10px] px-2 py-1 border border-success/40 bg-success/5 text-success">
                    {disc.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button type="button" className="eyebrow text-ink underline">
                    Edit Code
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
