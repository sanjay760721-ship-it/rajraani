export const metadata = { title: "Orders & Fulfillment" };

type SampleOrder = {
  id: string;
  customerName: string;
  email: string;
  pieceName: string;
  sku: string;
  amountRupees: number;
  paymentMode: string;
  fulfilmentMode: "ready_to_ship" | "made_to_order";
  status: "Pending Dispatch" | "In Weaving" | "Dispatched" | "Delivered";
  date: string;
};

export default function OrdersAdminPage() {
  const orders: SampleOrder[] = [
    {
      id: "RR-2026-1089",
      customerName: "Radhika Sharma",
      email: "radhika.s@example.com",
      pieceName: "Kadhua Jangla Neelam Saree",
      sku: "KDH-JNG-001",
      amountRupees: 68500,
      paymentMode: "Razorpay (UPI)",
      fulfilmentMode: "ready_to_ship",
      status: "Pending Dispatch",
      date: "7 Aug 2026",
    },
    {
      id: "RR-2026-1088",
      customerName: "Ananya Mehta",
      email: "ananya.m@example.com",
      pieceName: "Aparajita Tanchoi Brocade",
      sku: "TNC-APR-004",
      amountRupees: 54000,
      paymentMode: "Razorpay (Card)",
      fulfilmentMode: "made_to_order",
      status: "In Weaving",
      date: "6 Aug 2026",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Orders & Fulfillment</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Manage customer orders, Razorpay payments, ready-to-ship dispatches, and made-to-order weaving schedules.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="border border-rule bg-bg px-4 py-2 text-xs tracking-wider uppercase text-ink hover:bg-bg-sand"
          >
            Filter by Pre-Order
          </button>
          <button
            type="button"
            className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
          >
            Export Orders CSV
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto border border-rule bg-bg">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-rule bg-bg-alt">
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Order ID</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Customer</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Piece Ordered</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Amount</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Fulfillment Mode</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-ink-muted">Status</th>
              <th scope="col" className="eyebrow py-3.5 px-4 text-right text-ink-muted">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="align-top hover:bg-bg-sand/30 transition-colors">
                <td className="py-4 px-4 font-mono font-semibold text-ink">{order.id}</td>
                <td className="py-4 px-4">
                  <p className="font-semibold text-ink">{order.customerName}</p>
                  <p className="text-caption text-ink-muted">{order.email}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="font-display font-semibold text-ink">{order.pieceName}</p>
                  <p className="text-caption font-mono text-ink-muted">{order.sku}</p>
                </td>
                <td className="py-4 px-4 tabular-nums font-medium text-ink">
                  ₹{order.amountRupees.toLocaleString("en-IN")}
                </td>
                <td className="py-4 px-4 text-caption capitalize">
                  <span className="px-2 py-0.5 border border-rule bg-bg-alt text-ink">
                    {order.fulfilmentMode.replace(/_/g, " ")}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="eyebrow text-[10px] px-2 py-1 border border-success/40 bg-success/5 text-success">
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button type="button" className="eyebrow text-ink underline">
                    View Details
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
