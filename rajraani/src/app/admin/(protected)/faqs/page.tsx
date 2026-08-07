import { BRAND } from "@/lib/brand";

export const metadata = { title: "Customer Care & FAQs Manager" };

type FAQItem = {
  id: string;
  category: "Shipping & Returns" | "Care & Craft" | "Custom Orders" | "Silk Mark Certification";
  question: string;
  answer: string;
};

export default function FAQsAdminPage() {
  const faqs: FAQItem[] = [
    {
      id: "FAQ-01",
      category: "Shipping & Returns",
      question: "How long does dispatch take for ready-to-ship vs made-to-order sarees?",
      answer: "Ready-to-ship pieces dispatch within 2-3 business days. Made-to-order weaving pieces take between 8-12 weeks depending on pit loom complexity.",
    },
    {
      id: "FAQ-02",
      category: "Care & Craft",
      question: "How should pure Banarasi silk sarees with real zari be stored?",
      answer: "Always store pure Banarasi silk in a breathable cotton muslin bag. Avoid hanging for prolonged periods, and dry clean only.",
    },
    {
      id: "FAQ-03",
      category: "Silk Mark Certification",
      question: `Are all ${BRAND.name} sarees Silk Mark certified?`,
      answer: "Yes, every saree comes with an official Silk Mark Organization of India tag guaranteeing 100% pure natural silk.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Customer Care & FAQ Manager</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Manage published customer help guides, care instructions, and FAQ sections without code changes.
          </p>
        </div>
        <button
          type="button"
          className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
        >
          + Add New FAQ Question
        </button>
      </div>

      {/* FAQs List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-rule bg-bg p-6 space-y-2">
            <div className="flex justify-between items-start">
              <span className="eyebrow text-ink-muted text-[10px] uppercase font-semibold">
                {faq.category}
              </span>
              <button type="button" className="eyebrow text-ink underline text-xs">
                Edit FAQ
              </button>
            </div>
            <h2 className="font-display text-lg font-semibold text-ink">{faq.question}</h2>
            <p className="text-caption text-ink-body text-xs leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
