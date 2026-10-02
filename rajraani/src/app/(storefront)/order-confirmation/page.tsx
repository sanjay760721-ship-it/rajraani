import Link from "next/link";
import { notFound } from "next/navigation";

import { getSiteText } from "@/lib/content/site-text";
import { getOrderByReference } from "@/lib/orders/orders";
import { canReadReceipt } from "@/lib/checkout/receipt";
import { formatMoney } from "@/lib/money";
import { BASE_CURRENCY } from "@/lib/domain/types";

export const metadata = { title: "Order Confirmation", robots: { index: false, follow: false } };

export default async function OrderConfirmationPage(props: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await props.searchParams;

  if (!ref || !(await canReadReceipt(ref))) {
    notFound();
  }

  const order = getOrderByReference(ref);

  if (!order || !["paid", "dispatched", "delivered", "refunded"].includes(order.status)) {
    notFound();
  }
  const siteText = await getSiteText();

  return (
    <div className="wrap-narrow py-16 space-y-12">
      {/* Receipt Top Banner */}
      <div className="border border-success bg-bg-alt p-8 text-center space-y-3">
        <span className="eyebrow text-xs text-success uppercase tracking-widest font-semibold block">
          ✓ Payment Confirmed & Order Placed
        </span>
        <h1 className="font-display text-h1 text-ink">Thank you, {order.fullName}</h1>
        <p className="text-body text-ink-body max-w-prose mx-auto text-sm">
          Your order <strong className="font-mono text-ink">{order.reference}</strong> has been received and confirmed. Your contact email is <span className="text-ink font-semibold">{order.email}</span>.
        </p>
      </div>

      {/* Order Details Breakdown */}
      <div className="border border-rule bg-bg p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b border-rule pb-4 text-xs">
          <div>
            <span className="eyebrow text-ink-muted uppercase block">Order Reference</span>
            <span className="font-mono font-bold text-ink text-base">{order.reference}</span>
          </div>
          <div>
            <span className="eyebrow text-ink-muted uppercase block">Order Status</span>
            <span className="eyebrow text-xs font-semibold text-success uppercase">
              {order.status}
            </span>
          </div>
          <div>
            <span className="eyebrow text-ink-muted uppercase block">Payment Mode</span>
            <span className="font-medium text-ink">Razorpay (Paid in INR)</span>
          </div>
        </div>

        {/* Purchased Items List */}
        <div className="space-y-4">
          <h2 className="eyebrow text-ink uppercase tracking-wider font-semibold">
            Purchased Pieces ({order.items.length})
          </h2>
          <ul className="divide-y divide-rule border-t border-b border-rule">
            {order.items.map((item, i) => (
              <li key={i} className="py-4 flex justify-between items-center text-sm">
                <div>
                  <p className="font-display font-semibold text-ink text-base">
                    {item.poeticName}
                  </p>
                  <p className="text-caption text-ink-muted">{item.title}</p>
                  <span className="text-caption text-ink-body text-xs">Qty: {item.quantity}</span>
                </div>
                <span className="font-semibold text-ink tabular-nums">
                  {formatMoney({
                    minorUnits: item.lineTotalMinor,
                    currency: BASE_CURRENCY,
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between items-center pt-2 border-t border-rule text-base">
          <span className="font-display font-semibold text-ink">Total Amount Paid</span>
          <span className="font-display font-bold text-ink text-xl tabular-nums">
            {formatMoney({
              minorUnits: order.totalMinor,
              currency: BASE_CURRENCY,
            })}
          </span>
        </div>
      </div>

      {/* Customer Service & Next Steps */}
      <div className="border border-rule/70 bg-bg-sand/40 p-6 space-y-2 text-xs text-center">
        <h3 className="font-display text-lg font-semibold text-ink">Need assistance with your order?</h3>
        <p className="text-caption text-ink-muted max-w-prose mx-auto">
          Our Varanasi artisan team is preparing your piece for dispatch. For any inquiries regarding care instructions or tracking, reach out to our concierge team at <a href={`mailto:${siteText["contact.email"]}`} className="underline text-ink">{siteText["contact.email"]}</a> or WhatsApp us directly.
        </p>
        <div className="pt-4">
          <Link href="/" className="bg-ink px-6 py-3 text-bg text-xs eyebrow uppercase hover:opacity-90">
            Return to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
