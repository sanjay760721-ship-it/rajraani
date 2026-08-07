"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useCurrency } from "./currency-context";
import { CURRENCIES, type CurrencyCode } from "@/lib/domain/types";

/** Narrows a `data-currency` attribute, which is only ever a string to the DOM. */
function isCurrencyCode(value: string): value is CurrencyCode {
  return CURRENCIES.includes(value as CurrencyCode);
}

const CURRENCY_LABELS: Record<string, string> = {
  INR: "₹ INR",
  USD: "$ USD",
  CAD: "CA$ CAD",
  GBP: "£ GBP",
  AUD: "A$ AUD",
  EUR: "€ EUR",
  JPY: "¥ JPY",
  SGD: "S$ SGD",
};

/**
 * Currency selector dropdown.
 *
 * Opens on click, closes on outside click or Escape. Keyboard accessible.
 * Persists selection to localStorage via currency context.
 */
export function CurrencySelector() {
  const { currency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const id = useId();

  const close = () => setIsOpen(false);

  // Outside click closes. The handler lives inside the effect so it is not
  // rebuilt on every render and the dependency list stays honest.
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

  // Escape closes
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

  // Arrow key navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    const options = listboxRef.current?.querySelectorAll<HTMLButtonElement>('[role="option"]');
    if (!options?.length) return;

    const currentIndex = Array.from(options).findIndex((opt) => opt === document.activeElement);
    let nextIndex = currentIndex;

    if (event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % options.length;
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      nextIndex = (currentIndex - 1 + options.length) % options.length;
      event.preventDefault();
    } else if (event.key === "Home") {
      nextIndex = 0;
      event.preventDefault();
    } else if (event.key === "End") {
      nextIndex = options.length - 1;
      event.preventDefault();
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const selected = options[currentIndex];
      if (selected) {
        const currencyCode = selected.dataset.currency;
        if (currencyCode && isCurrencyCode(currencyCode)) setCurrency(currencyCode);
        close();
      }
    }

    if (nextIndex !== currentIndex) {
      options[nextIndex]?.focus();
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={id}
        aria-label="Currency"
        className="eyebrow text-ink flex items-center gap-1.5 px-2 py-1 border border-transparent hover:border-rule-strong transition-colors"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleKeyDown}
      >
        <span>{CURRENCY_LABELS[currency] ?? currency}</span>
        <span className="text-ink-muted" aria-hidden>▾</span>
      </button>

      {isOpen ? (
        <ul
          ref={listboxRef}
          id={id}
          role="listbox"
          aria-label="Select currency"
          className="absolute right-0 top-full z-50 mt-1 min-w-[140px] bg-bg border border-rule shadow-lg overflow-hidden"
        >
          {currencies.map((curr) => (
            <li key={curr}>
              <button
                type="button"
                role="option"
                aria-selected={curr === currency}
                data-currency={curr}
                className={`w-full text-left px-3 py-2 text-caption ${
                  curr === currency
                    ? "bg-ink text-bg font-semibold"
                    : "text-ink-body hover:bg-bg-alt hover:text-ink"
                }`}
                onClick={() => {
                  setCurrency(curr);
                  close();
                }}
                onKeyDown={handleKeyDown}
              >
                {CURRENCY_LABELS[curr] ?? curr}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}