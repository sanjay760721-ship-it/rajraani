
export const metadata = { title: "Customer Profiles & CRM" };

type CustomerProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  instagramHandle?: string;
  location: string;
  totalOrders: number;
  totalSpentINR: number;
  segmentTag: "VIP Bridal Client" | "Repeat Buyer" | "Collector" | "New Customer";
  wishlistPieces: string[];
  lastOrderDate: string;
  notes: string;
};

export default function CustomersAdminPage() {
  const customers: CustomerProfile[] = [
    {
      id: "CUST-001",
      name: "Ananya Mehta",
      email: "ananya.m@example.com",
      phone: "+91 98765 43210",
      instagramHandle: "@ananya_mehta_stylist",
      location: "Mumbai, Maharashtra",
      totalOrders: 4,
      totalSpentINR: 245000,
      segmentTag: "VIP Bridal Client",
      wishlistPieces: ["Kadhua Jangla Neelam Saree", "Aparajita Tanchoi Brocade"],
      lastOrderDate: "6 Aug 2026",
      notes: "Preferred gold zari over silver. Booked Mumbai boutique consultation for bridal trousseau.",
    },
    {
      id: "CUST-002",
      name: "Dr. Radhika Sharma",
      email: "radhika.sharma@example.com",
      phone: "+91 98112 23344",
      instagramHandle: "@radhika_sharma_doc",
      location: "New Delhi, NCR",
      totalOrders: 2,
      totalSpentINR: 112000,
      segmentTag: "Collector",
      wishlistPieces: ["Shikargah Real Zari Dupatta"],
      lastOrderDate: "1 Aug 2026",
      notes: "Interested in vintage Katikari cutwork pieces. Contact via WhatsApp.",
    },
    {
      id: "CUST-003",
      name: "Pooja Singhania",
      email: "pooja.singhania@example.com",
      phone: "+91 99001 12233",
      instagramHandle: "@pooja_singhania",
      location: "Varanasi, Uttar Pradesh",
      totalOrders: 3,
      totalSpentINR: 178000,
      segmentTag: "Repeat Buyer",
      wishlistPieces: ["Kashi Heritage Shikargah", "Vanam Leela Saree"],
      lastOrderDate: "28 Jul 2026",
      notes: "Prefers pickup from Varanasi Flagship boutique.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Customer Profiles & CRM</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Track customer emails, phone numbers, Instagram social identity, wishlist activity, and purchase history.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="border border-rule bg-bg px-4 py-2 text-xs tracking-wider uppercase text-ink hover:bg-bg-sand"
          >
            Filter VIP Clients
          </button>
          <button
            type="button"
            className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
          >
            + Add Customer Profile
          </button>
        </div>
      </div>

      {/* Customer Directory Cards */}
      <div className="grid grid-cols-1 gap-6">
        {customers.map((cust) => (
          <div key={cust.id} className="border border-rule bg-bg p-6 space-y-4 hover:border-ink transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-xl font-semibold text-ink">{cust.name}</h2>
                  <span
                    className={`eyebrow text-[10px] px-2.5 py-0.5 border ${
                      cust.segmentTag === "VIP Bridal Client"
                        ? "border-accent/40 bg-accent/5 text-accent"
                        : "border-rule bg-bg-alt text-ink-muted"
                    }`}
                  >
                    {cust.segmentTag}
                  </span>
                </div>
                <p className="text-caption text-ink-muted mt-0.5">
                  ID: <span className="font-mono text-ink">{cust.id}</span> · {cust.location}
                </p>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="flex items-center gap-2 text-xs">
                <a
                  href={`https://wa.me/${cust.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-success/40 bg-success/5 text-success hover:bg-success/10 font-medium transition-colors"
                >
                  💬 WhatsApp Chat
                </a>
                <a
                  href={`mailto:${cust.email}`}
                  className="px-3 py-1.5 border border-rule bg-bg-alt text-ink hover:bg-bg-sand font-medium transition-colors"
                >
                  ✉️ Send Email
                </a>
              </div>
            </div>

            {/* Contact & Social Identity Info Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-bg-alt/40 p-4 border border-rule/60 text-xs">
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase block">Email Address</span>
                <span className="font-medium text-ink block truncate">{cust.email}</span>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase block">Phone / WhatsApp</span>
                <span className="font-mono text-ink block">{cust.phone}</span>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase block">Social Identity (Instagram)</span>
                <span className="font-medium text-accent block">{cust.instagramHandle || "Not linked"}</span>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase block">Lifetime Value</span>
                <span className="font-semibold text-ink block">
                  ₹{cust.totalSpentINR.toLocaleString("en-IN")} ({cust.totalOrders} orders)
                </span>
              </div>
            </div>

            {/* Wishlist & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase block mb-1">
                  💖 Wishlist & Saved Pieces
                </span>
                <ul className="list-disc list-inside text-ink-body space-y-0.5">
                  {cust.wishlistPieces.map((piece) => (
                    <li key={piece} className="truncate">{piece}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase block mb-1">
                  📝 Client Notes & Preferences
                </span>
                <p className="text-ink-body leading-relaxed">{cust.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
