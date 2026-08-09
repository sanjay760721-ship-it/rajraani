export const metadata = { title: "Order Vault" };

type SampleOrder = {
  id: string;
  customerName: string;
  email: string;
  pieceName: string;
  sku: string;
  amountRupees: number;
  paymentMode: string;
  fulfilmentMode: "ready_to_ship" | "made_to_order";
  status: "Pending Dispatch" | "In Weaving" | "Dispatched" | "Delivered" | "Cancelled";
  date: string;
  itemImage?: string;
  collection: string;
};

const orders: SampleOrder[] = [
  {
    id: "RR-2026-1089",
    customerName: "Eleanor Vance",
    email: "eleanor.v@example.com",
    pieceName: "Kadhua Jangla Neelam Saree",
    sku: "KDH-JNG-001",
    amountRupees: 1250000,
    paymentMode: "Razorpay (UPI)",
    fulfilmentMode: "ready_to_ship",
    status: "Pending Dispatch",
    date: "24 Oct 2026",
    itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3IcpJZTd7qPAANsEs82UNGYB1F2NeuGeRc--roh59B4ZzvDpjqE062aniBqu5OsqATogypY3hIh-SP6357qSSA4GPPhtSK5VL1LUkLBxUr9qLdEgyEpldC74GUc01kKEfKvkkgvLsMuokdQCWtzKNlKsBJ8FyuqQGXE2X4zD__E1TVEHMvqo1xSLpxv26f2iq_geVNBv3Vw7BCcBu2DO7WEG7AV1tBzzneqw3cNGsutwBZc79jSfiTw",
    collection: "Nizam Heritage Line",
  },
  {
    id: "RR-2026-1088",
    customerName: "Alistair Sterling",
    email: "alistair.s@example.com",
    pieceName: "Aparajita Tanchoi Brocade",
    sku: "TNC-APR-004",
    amountRupees: 850000,
    paymentMode: "Razorpay (Card)",
    fulfilmentMode: "made_to_order",
    status: "In Weaving",
    date: "23 Oct 2026",
    itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtEQYp1zN0R7tiTjPOL6iQCYq4GlUCmqs2gmOKSnOgsOyfyxXjGfUvkrXgEjYnrSJg4R_C5D8i2KvLMGQ_dPSywXXfDogxTITTtOMgQ7rnh57CfHI7wIIaC_4mDaN5o3K2HSiFB8dtUdFbfaMjURAzeNVPHc8cxuD1DqoT2kqHbGAmmPzUZ321s_2QndKzKs1N1ctsEButh8AkEHJys2S94OJODhuMZhTGpOoVvTecRvdyiZhnES9DqA",
    collection: "Rajputana Collection",
  },
  {
    id: "RR-2026-1087",
    customerName: "Isabella Rossi",
    email: "isabella.r@example.com",
    pieceName: "Polki Diamond Choker",
    sku: "PDC-001",
    amountRupees: 3400000,
    paymentMode: "Wire Transfer",
    fulfilmentMode: "ready_to_ship",
    status: "Dispatched",
    date: "20 Oct 2026",
    itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjvaS2zCbx0A5E0dWjGEu6kHcERD0JepJEhxsqU2oufkQg0TJftFdJmg1K-9ERphGzjqlPSIzlqEf58RiysbuPFmAELpZJnuOdmndxTH9r1c83o_khoEQ6yEMzmReg5QKquoAvwZ7jGR1xwysqcVETzBwWFNx2FJSi-TMj6j6tXMOaK3EXwGBy-LscMXBgLid3aOlLEvCx-gASTNF2SK-GTkh1t0gsMCY0N7TGz1XD1pw_cU_Lh5udDQ",
    collection: "Bespoke Commission",
  },
  {
    id: "RR-2026-1086",
    customerName: "Margot Windsor",
    email: "margot.w@example.com",
    pieceName: "Heritage Kundan Necklace",
    sku: "HKN-045",
    amountRupees: 2400000,
    paymentMode: "Razorpay (Card)",
    fulfilmentMode: "ready_to_ship",
    status: "Delivered",
    date: "19 Oct 2026",
    itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_lK7_KpNo5VjcqLEsor_vC8e9z8Bu5S4nnU7Yf2MoJv6d1bCrG0YxkfFjzAN850CrqizM0Mr1F7sDoiZB_1G6GbJYrSQbLQkrKDOeA3IdFpvYeEaH9a9lQtDzyIG-Q5tvbK74KuTzZsvK7vUjqoU14LVvBnnpOWT46XKYiRsSLKsCr3VMPL8HbrT1zmXKc6jlceiV0s5DYxvNB6D43vbRiF0YzSOwOie3OJZqbaycv864HaK_zg-zw",
    collection: "Maharani Pearls",
  },
  {
    id: "RR-2026-1085",
    customerName: "Victoria Dubois",
    email: "victoria.d@example.com",
    pieceName: "Temple Gold Bangles",
    sku: "TGB-012",
    amountRupees: 1450000,
    paymentMode: "Razorpay (UPI)",
    fulfilmentMode: "ready_to_ship",
    status: "Delivered",
    date: "18 Oct 2026",
    itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3W7meIccf1Vy0QD2-4NXNUHR-NOkFEyeH3QI29SR950DO1VHwYb2s9tLDTEhApUsQTLiFF_Y26iSwKA4cE6t0E0E0WPPQZgo0LgFc4M5cZr1ckV1nenzlmRQt7mEVwtF5bBxBGn5JOQWvAAayxdpJD-4jdKkfgVYHN7ejh0RLRhHMm6wDyqpAmUQJ1F22dvzjqpmCAUJ_0X-EOAZIqny5algZWS1jKeAhRI90HJ6hZxD87-Qe40RjqQ",
    collection: "Temple Gold",
  },
  {
    id: "RR-2026-1084",
    customerName: "Harrison Beck",
    email: "harrison.b@example.com",
    pieceName: "Contemporary Polki Earrings",
    sku: "CPE-007",
    amountRupees: 560000,
    paymentMode: "Razorpay (Card)",
    fulfilmentMode: "made_to_order",
    status: "Cancelled",
    date: "18 Oct 2026",
    itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPKvCjl8eiDIvoEBBncpBSiPQPlMOPX7XcGNzPXE6hHSNE9hnrHvZT3bPQQBHchQrquK-Sq__oY87hkkNjVSg0D5ktdl26eJRCh3w07eg2cR0qtMBWol46NkF_2pn2kID4wY10m0JqVPYqAijupqOCnY6NPy7BLsDiUmbrXKCrIdY73TrSc2wHxVJKtM6rbg0KyNkI4jwl-MA8WbrAsv0_i15tiRMTv8kY6P7ml8p-0vV9QbqkG7Z8ug",
    collection: "Contemporary Polki",
  },
];

const METRICS: Array<{ label: string; value: string; detail: string; icon: string; tone: "neutral" | "positive" | "warning" }> = [
  { label: "Total Volume", value: "₹24.5M", detail: "+12.4% vs last quarter", icon: "account_balance_wallet", tone: "positive" },
  { label: "Pending Fulfillment", value: "42", detail: "8 require immediate action", icon: "hourglass_top", tone: "warning" },
  { label: "Avg. Order Value", value: "₹850K", detail: "+5.2% vs last quarter", icon: "diamond", tone: "positive" },
  { label: "Return Rate", value: "1.2%", detail: "Maintained below threshold", icon: "trending_down", tone: "positive" },
];

function KPICard({ label, value, detail, icon, tone = "neutral" }: {
  label: string;
  value: string;
  detail: string;
  icon: string;
  tone?: "neutral" | "positive" | "warning";
}) {
  const detailColor =
    tone === "positive"
      ? "var(--a-positive)"
      : tone === "warning"
      ? "var(--a-negative)"
      : "var(--a-outline)";

  const bgColor =
    tone === "positive"
      ? "var(--a-accent-container)"
      : "var(--a-surface-lowest)";

  return (
    <div className={`a-card a-card-interactive p-8 flex flex-col justify-between h-48 relative overflow-hidden group ${tone === "positive" ? "bg-accent-container/20" : ""}`} style={{ backgroundColor: bgColor }}>
      <div className="relative z-10">
        <p className="a-label mb-2" style={{ color: "var(--a-ink-variant)" }}>
          {label}
        </p>
        <p className="a-figure text-3xl" style={{ color: "var(--a-ink)" }}>
          {value}
        </p>
      </div>
      <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 translate-x-4 translate-y-4">
        <span className="material-symbols-outlined" style={{ fontSize: "120px", color: "var(--a-ink)" }}>
          {icon}
        </span>
      </div>
      <div className="relative z-10 flex items-center gap-2" style={{ color: detailColor }}>
        <span className="material-symbols-outlined text-[16px]">
          {tone === "positive" ? "trending_up" : tone === "warning" ? "schedule" : "trending_up"}
        </span>
        <span className="a-label">{detail}</span>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: SampleOrder["status"] }) {
  const configs: Record<SampleOrder["status"], { bg: string; color: string; dot: string; label: string }> = {
    "Pending Dispatch": {
      bg: "var(--a-surface-high)",
      color: "var(--a-ink-variant)",
      dot: "var(--a-status-waiting)",
      label: "PENDING DISPATCH",
    },
    "In Weaving": {
      bg: "var(--a-accent-container)",
      color: "var(--a-on-accent-container)",
      dot: "var(--a-status-progress)",
      label: "IN WEAVING",
    },
    "Dispatched": {
      bg: "var(--a-surface-high)",
      color: "var(--a-ink-variant)",
      dot: "var(--a-status-done)",
      label: "DISPATCHED",
    },
    "Delivered": {
      bg: "var(--a-surface-high)",
      color: "var(--a-ink-variant)",
      dot: "var(--a-status-done)",
      label: "DELIVERED",
    },
    "Cancelled": {
      bg: "var(--a-negative-container)",
      color: "var(--a-negative)",
      dot: "var(--a-status-stopped)",
      label: "CANCELLED",
    },
  };

  const config = configs[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full a-label"
      style={{
        backgroundColor: config.bg,
        color: config.color,
        border: status === "Delivered" || status === "Dispatched" ? "1px solid color-mix(in srgb, var(--a-outline-variant) 40%, transparent)" : "none",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: config.dot }}
      />
      {config.label}
    </span>
  );
}

function FulfilmentBadge({ mode }: { mode: SampleOrder["fulfilmentMode"] }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full a-label"
      style={{
        backgroundColor: mode === "made_to_order" ? "var(--a-accent-container)" : "var(--a-surface-high)",
        color: mode === "made_to_order" ? "var(--a-on-accent-container)" : "var(--a-ink-variant)",
        border: mode === "ready_to_ship" ? "1px solid color-mix(in srgb, var(--a-outline-variant) 40%, transparent)" : "none",
      }}
    >
      {mode === "made_to_order" ? "MADE TO ORDER" : "READY TO SHIP"}
    </span>
  );
}

export default function OrdersAdminPage() {
  return (
    <div className="px-2 space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b a-divider-strong pb-8">
        <div>
          <h1 className="a-display-md" style={{ color: "var(--a-ink)" }}>
            Order Vault
          </h1>
          <p className="a-body-md mt-2 max-w-xl" style={{ color: "var(--a-ink-variant)" }}>
            A curated archive of all client acquisitions. Review statuses, manage
            fulfillment, and ensure impeccable service delivery.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="a-btn-secondary flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            EXPORT LEDGER
          </button>
          <button className="a-btn-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            NEW ORDER
          </button>
        </div>
      </header>

      {/* Metrics Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {METRICS.map((m) => (
          <KPICard key={m.label} {...m} />
        ))}
      </section>

      {/* Controls & Filters */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b a-divider">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-96 flex-1">
            <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2" style={{ color: "var(--a-outline)" }}>
              search
            </span>
            <input
              className="a-input w-full pl-8 pr-4"
              placeholder="Search by Order ID, Client, or Provenance..."
              type="text"
            />
          </div>
          <button className="a-btn-icon" aria-label="Filter orders">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
        <div className="flex gap-8 overflow-x-auto w-full md:w-auto" style={{ scrollbarWidth: "none" }}>
          {["All Orders", "Processing", "Shipped", "Delivered", "Exceptions"].map((tab, i) => (
            <button
              key={tab}
              className={`a-label px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
                i === 0
                  ? "border-ink text-ink"
                  : "border-transparent text-ink-variant hover:text-ink hover:border-outline-variant/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Data Table */}
      <section className="a-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="a-table">
            <thead>
              <tr>
                <th scope="col" className="w-24">Order ID</th>
                <th scope="col">Client & Line</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-right">Value</th>
                <th scope="col" className="text-center w-16"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="group hover:bg-surface-low/50 transition-colors">
                  <td className="a-label text-primary font-mono">
                    {order.id}
                  </td>
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-high">
                        {order.itemImage && (
                          <img
                            src={order.itemImage}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="a-heading-sm text-[18px] leading-tight" style={{ color: "var(--a-ink)" }}>
                          {order.customerName}
                        </span>
                        <span className="text-xs a-label" style={{ color: "var(--a-outline)", textTransform: "uppercase" }}>
                          {order.collection}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td style={{ color: "var(--a-ink-variant)" }}>
                    {order.date}
                  </td>
                  <td>
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="text-right a-figure text-[20px]">
                    ₹{order.amountRupees.toLocaleString("en-IN")}
                  </td>
                  <td className="text-center">
                    <button
                      className="a-btn-icon opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="More actions"
                    >
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="p-6 border-t flex justify-between items-center" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 20%, transparent)" }}>
          <span className="a-label" style={{ color: "var(--a-ink-variant)" }}>
            SHOWING 1-6 OF 1,248
          </span>
          <div className="flex gap-2 items-center">
            <button className="a-btn-icon disabled:opacity-30" disabled aria-label="Previous page">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center a-figure" style={{ backgroundColor: "var(--a-ink)", color: "var(--a-surface-lowest)" }}>
              1
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-high transition-colors" style={{ color: "var(--a-ink-variant)" }}>
              2
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-high transition-colors" style={{ color: "var(--a-ink-variant)" }}>
              3
            </button>
            <span className="w-10 h-10 flex items-center justify-center" style={{ color: "var(--a-outline-variant)" }}>
              …
            </span>
            <button className="a-btn-icon" aria-label="Next page">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}