export const metadata = { title: "Boutique Store Visits" };

type Appointment = {
  id: string;
  store: "Varanasi Flagship" | "Mumbai Boutique";
  clientName: string;
  phone: string;
  purpose: "Bridal Trousseau Consultation" | "Custom Weave Inquiry" | "General Visit";
  date: string;
  timeSlot: string;
  status: "Confirmed" | "Completed" | "Rescheduled";
};

export default function AppointmentsAdminPage() {
  const appointments: Appointment[] = [
    {
      id: "APT-VAR-042",
      store: "Varanasi Flagship",
      clientName: "Meera & Family",
      phone: "+91 98765 43210",
      purpose: "Bridal Trousseau Consultation",
      date: "9 Aug 2026",
      timeSlot: "11:30 AM - 01:00 PM",
      status: "Confirmed",
    },
    {
      id: "APT-BOM-018",
      store: "Mumbai Boutique",
      clientName: "Pooja Singhania",
      phone: "+91 99887 76655",
      purpose: "Custom Weave Inquiry",
      date: "10 Aug 2026",
      timeSlot: "03:00 PM - 04:30 PM",
      status: "Confirmed",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Boutique Store Visit Appointments</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Manage VIP consultation bookings for Varanasi and Mumbai flagship stores.
          </p>
        </div>
        <button
          type="button"
          className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
        >
          + Book New Consultation
        </button>
      </div>

      {/* Boutique Switcher Tabs */}
      <div className="flex border-b border-rule space-x-6 text-sm">
        <button type="button" className="pb-3 font-semibold border-b-2 border-ink text-ink">
          Varanasi Flagship (1 Today)
        </button>
        <button type="button" className="pb-3 text-ink-muted hover:text-ink">
          Mumbai Boutique (1 Tomorrow)
        </button>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <div key={apt.id} className="border border-rule bg-bg p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase">{apt.store}</span>
                <h2 className="font-display text-xl font-semibold text-ink mt-0.5">{apt.clientName}</h2>
              </div>
              <span className="eyebrow text-[10px] px-2 py-0.5 border border-success/40 bg-success/5 text-success">
                {apt.status}
              </span>
            </div>

            <div className="text-caption text-ink-body space-y-1">
              <p>📅 <strong>Date & Time:</strong> {apt.date} · {apt.timeSlot}</p>
              <p>🛍️ <strong>Purpose:</strong> {apt.purpose}</p>
              <p>📞 <strong>Contact:</strong> {apt.phone}</p>
            </div>

            <div className="border-t border-rule pt-4 flex justify-between items-center text-xs">
              <button type="button" className="eyebrow text-ink underline">
                Send WhatsApp Confirmation
              </button>
              <button type="button" className="eyebrow text-ink-muted hover:underline">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
