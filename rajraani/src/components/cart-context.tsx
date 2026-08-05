"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import { createLocalStore } from "@/lib/client-store";
import { BASE_CURRENCY, type Money } from "@/lib/domain/types";

/**
 * Cart state.
 *
 * A line carries a snapshot of the piece rather than a reference to it, which
 * is how Shopify models cart lines and the reason a cart survives a catalogue
 * change. It also keeps the whole catalogue out of the client bundle — fine at
 * twelve fixtures, wrong at three thousand products.
 *
 * Checkout is deliberately absent. build.md §10 Non-goals is explicit that
 * checkout is not rebuilt: the cart hands off to Shopify's hosted checkout,
 * which needs a store that does not exist yet. The drawer stops at the handoff
 * and says so, rather than faking a payment step.
 */

export type CartLine = {
  handle: string;
  title: string;
  poeticName: string;
  sku: string;
  priceMinorUnits: number;
  colourSlug: string;
  alt: string;
  quantity: number;
  /** Inventory of 1 is the norm for unique pieces — the stepper caps here. */
  maxQuantity: number;
};

function isCartLines(value: unknown): value is CartLine[] {
  return (
    Array.isArray(value) &&
    value.every(
      (line): line is CartLine =>
        typeof line === "object" &&
        line !== null &&
        typeof (line as CartLine).handle === "string" &&
        typeof (line as CartLine).quantity === "number",
    )
  );
}

const cartStore = createLocalStore<CartLine[]>("cart", [], isCartLines);

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  itemCount: number;
  subtotal: Money;
  add: (line: Omit<CartLine, "quantity">, quantity?: number) => void;
  setQuantity: (handle: string, quantity: number) => void;
  remove: (handle: string) => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    cartStore.getServerSnapshot,
  );
  // Drawer visibility is ordinary UI state — it does not belong in storage.
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((line: Omit<CartLine, "quantity">, quantity = 1) => {
    const current = cartStore.getSnapshot();
    const existing = current.find((item) => item.handle === line.handle);

    cartStore.write(
      existing
        ? current.map((item) =>
            item.handle === line.handle
              ? {
                  ...item,
                  quantity: Math.min(item.quantity + quantity, item.maxQuantity),
                }
              : item,
          )
        : [...current, { ...line, quantity: Math.min(quantity, line.maxQuantity) }],
    );
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((handle: string, quantity: number) => {
    const current = cartStore.getSnapshot();
    cartStore.write(
      quantity <= 0
        ? current.filter((item) => item.handle !== handle)
        : current.map((item) =>
            item.handle === handle
              ? { ...item, quantity: Math.min(quantity, item.maxQuantity) }
              : item,
          ),
    );
  }, []);

  const remove = useCallback((handle: string) => {
    cartStore.write(
      cartStore.getSnapshot().filter((item) => item.handle !== handle),
    );
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((total, line) => total + line.quantity, 0);
    const subtotal: Money = {
      minorUnits: lines.reduce(
        (total, line) => total + line.priceMinorUnits * line.quantity,
        0,
      ),
      currency: BASE_CURRENCY,
    };
    return {
      lines,
      isOpen,
      itemCount,
      subtotal,
      add,
      setQuantity,
      remove,
      open,
      close,
    };
  }, [lines, isOpen, add, setQuantity, remove, open, close]);

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a CartProvider");
  return context;
}
