"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useCurrency } from "./currency-context";
import { UTILITY_CAPTION, UTILITY_ICON, UTILITY_ITEM } from "./utility-styles";

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
    <div className="relative h-full">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={id}
        aria-label="Currency"
        className={UTILITY_ITEM}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={UTILITY_ICON}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {/*
          * The caret hangs off the caption rather than sitting in its flow, so
          * "INR" centres under the globe exactly as "LOGIN" does under its
          * icon. Inline, the caret dragged the word a few pixels left.
          */}
        <span className={`${UTILITY_CAPTION} relative`}>
          {CURRENCY_LABELS[currency] ?? currency}
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            aria-hidden="true"
            className={`absolute left-full top-1/2 ml-1 -translate-y-1/2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M0.75 0.75L4 4L7.25 0.75" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listboxRef}
          id={id}
          role="listbox"
          aria-label="Select currency"
          className="absolute left-1/2 -translate-x-1/2 top-full z-50 min-w-[110px] bg-bg border border-rule shadow-lg py-1.5 overflow-hidden"
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
