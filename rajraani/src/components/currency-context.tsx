"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import { createLocalStore } from "@/lib/client-store";
import { BASE_CURRENCY, CURRENCIES, type CurrencyCode } from "@/lib/domain/types";

/**
 * Currency context.
 *
 * Addendum A1: "any rebuild needs a currency context provider from day one,
 * not bolted on later." Eight currencies are live and the list was confirmed
 * against the Markets configuration (pre-build-gaps.md §7), so this is real
 * infrastructure rather than decoration.
 *
 * The choice is persisted, shared across tabs and hydration-safe — see
 * lib/client-store for why it is an external store rather than an effect.
 */

function isCurrencyCode(value: unknown): value is CurrencyCode {
  return (
    typeof value === "string" && (CURRENCIES as readonly string[]).includes(value)
  );
}

const currencyStore = createLocalStore<CurrencyCode>(
  "currency",
  BASE_CURRENCY,
  isCurrencyCode,
);

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const currency = useSyncExternalStore(
    currencyStore.subscribe,
    currencyStore.getSnapshot,
    currencyStore.getServerSnapshot,
  );

  const setCurrency = useCallback((next: CurrencyCode) => {
    currencyStore.write(next);
  }, []);

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);

  return <CurrencyContext value={value}>{children}</CurrencyContext>;
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used inside a CurrencyProvider");
  }
  return context;
}
