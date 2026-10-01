"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useCurrency } from "./currency-context";

/**
 * Currency picker for the header's action cluster: the code as a small text
 * pill, opening a short list on ivory paper.
 */
export function CurrencySelector() {
  const { currency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const id = useId();

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current?.contains(event.target as Node) ||
        listboxRef.current?.contains(event.target as Node)
      )
        return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={id}
        aria-label={`Currency, ${currency}`}
        className="inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-full px-3 font-ui text-[12.5px] font-medium tracking-[0.06em] text-ink transition-colors hover:bg-bg-alt hover:text-sindoor"
        onClick={() => setIsOpen((open) => !open)}
      >
        {currency}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M0.75 0.75L4 4L7.25 0.75" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <ul
          ref={listboxRef}
          id={id}
          role="listbox"
          aria-label="Select currency"
          className="absolute left-1/2 top-full z-50 mt-2 min-w-[112px] -translate-x-1/2 overflow-hidden rounded-[var(--radius-soft)] border border-rule bg-paper py-1.5 animate-[riseIn_200ms_var(--ease-out)]"
        >
          {currencies.map((curr) => (
            <li key={curr}>
              <button
                type="button"
                role="option"
                aria-selected={curr === currency}
                data-currency={curr}
                className={`w-full px-4 py-2 text-left font-ui text-[13px] tracking-[0.04em] transition-colors ${
                  curr === currency
                    ? "bg-bg-alt font-medium text-sindoor"
                    : "text-ink-body hover:bg-bg-alt hover:text-ink"
                }`}
                onClick={() => {
                  setCurrency(curr);
                  close();
                }}
              >
                {curr}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
