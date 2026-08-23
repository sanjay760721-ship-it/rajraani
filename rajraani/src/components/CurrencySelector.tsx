"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useCurrency } from "./currency-context";

const CURRENCY_LABELS: Record<string, string> = {
  INR: "INR",
  USD: "USD",
  CAD: "CAD",
  GBP: "GBP",
  AUD: "AUD",
  EUR: "EUR",
  JPY: "JPY",
  SGD: "SGD",
};

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
        aria-label="Currency"
        className="font-display text-[13px] tracking-wide text-ink hover:text-accent-hover flex items-center gap-1.5 py-1 transition-colors cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{CURRENCY_LABELS[currency] ?? currency}</span>
        <span className="text-[10px] text-ink/70" aria-hidden>▾</span>
      </button>

      {isOpen && (
        <ul
          ref={listboxRef}
          id={id}
          role="listbox"
          aria-label="Select currency"
          className="absolute right-0 top-full z-50 mt-1 min-w-[130px] bg-white border border-rule shadow-lg py-1.5 overflow-hidden"
          style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
        >
          {currencies.map((curr) => (
            <li key={curr}>
              <button
                type="button"
                role="option"
                aria-selected={curr === currency}
                data-currency={curr}
                className={`w-full text-left px-4 py-1.5 font-display text-[12.5px] tracking-wide transition-colors ${
                  curr === currency
                    ? "bg-surface-notice text-accent-hover font-semibold"
                    : "text-ink/80 hover:bg-surface-notice/60 hover:text-accent-hover"
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
