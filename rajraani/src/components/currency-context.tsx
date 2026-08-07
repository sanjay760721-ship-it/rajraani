"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import { createLocalStore } from "@/lib/client-store";
import { BASE_CURRENCY, type CurrencyCode, CURRENCIES } from "@/lib/domain/types";

/**
 * Currency state.
 *
 * Persisted in localStorage, synced across tabs via storage event.
 * Server snapshot is BASE_CURRENCY to avoid hydration mismatch.
 */

const currencyStore = createLocalStore<CurrencyCode>(
  "currency",
  BASE_CURRENCY,
  (value): value is CurrencyCode =>
    typeof value === "string" && CURRENCIES.includes(value as CurrencyCode),
);

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  currencies: readonly CurrencyCode[];
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

  const value = useMemo<CurrencyContextValue>(
    () => ({ currency, setCurrency, currencies: CURRENCIES }),
    [currency, setCurrency],
  );

  return <CurrencyContext value={value}>{children}</CurrencyContext>;
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used inside a CurrencyProvider");
  return context;
}