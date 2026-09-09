"use client";

import { useId, useState } from "react";

import { INFO_TABS } from "@/lib/brand";

/**
 * Shipping · Dimensions · Care · Other.
 *
 * design.md §6.3: "Tabs on desktop (active tab gets a 1px `--c-rule-strong`
 * underline), accordion on mobile." This was an accordion at every width, which
 * on a wide screen buries four short lists behind four clicks for no reason —
 * the horizontal room is there and the tab bar is what the spec asks for.
 *
 * The content is global rather than per-product (design-addendum §A5 item 10,
 * verified against two unrelated PDPs), which is why it lives in `brand.ts` and
 * this component takes no props.
 *
 * Both renderings are in the DOM and CSS decides which is shown, so there is no
 * viewport measurement in JavaScript and nothing shifts on hydration. The
 * hidden one is `display: none`, which takes it out of the accessibility tree
 * too — a screen reader is never offered the same four panels twice.
 */
export function InfoPanels() {
  const [active, setActive] = useState(INFO_TABS[0]?.id);
  const id = useId();

  const activeTab = INFO_TABS.find((tab) => tab.id === active) ?? INFO_TABS[0];

  return (
    <section aria-label="Product information" className="mt-16">
      {/* Desktop: a tab bar. */}
      <div className="hidden md:block">
        <div role="tablist" className="flex gap-8 border-b border-rule">
          {INFO_TABS.map((tab) => {
            const selected = tab.id === activeTab?.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${id}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${id}-panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`eyebrow -mb-px border-b pb-3 transition-colors ${
                  selected
                    ? "border-rule-strong text-ink"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab ? (
          <div
            role="tabpanel"
            id={`${id}-panel-${activeTab.id}`}
            aria-labelledby={`${id}-tab-${activeTab.id}`}
            className="max-w-prose pt-6"
          >
            <ul className="space-y-2 text-caption text-ink-body">
              {activeTab.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Mobile: the same four panels as an accordion. */}
      <div className="md:hidden">
        {INFO_TABS.map((tab) => (
          <details key={tab.id} className="border-b border-rule py-4">
            <summary className="eyebrow cursor-pointer text-ink">{tab.label}</summary>
            <ul className="mt-4 space-y-2 text-caption text-ink-body">
              {tab.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
