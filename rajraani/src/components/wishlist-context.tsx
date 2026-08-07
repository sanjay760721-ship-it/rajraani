"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import { createLocalStore } from "@/lib/client-store";

/**
 * Wishlist state.
 *
 * Persisted in localStorage, synced across tabs via storage event.
 * Stores product handles for lightweight persistence.
 */

export type WishlistItem = {
  handle: string;
  title: string;
  poeticName: string;
  sku: string;
  priceMinorUnits: number;
  colourSlug: string;
  alt: string;
};

const wishlistStore = createLocalStore<WishlistItem[]>(
  "wishlist",
  [],
  (value): value is WishlistItem[] =>
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as WishlistItem).handle === "string",
    ),
);

type WishlistContextValue = {
  items: WishlistItem[];
  itemCount: number;
  isInWishlist: (handle: string) => boolean;
  toggle: (item: WishlistItem) => void;
  add: (item: WishlistItem) => void;
  remove: (handle: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(
    wishlistStore.subscribe,
    wishlistStore.getSnapshot,
    wishlistStore.getServerSnapshot,
  );

  const isInWishlist = useCallback(
    (handle: string) => items.some((item) => item.handle === handle),
    [items],
  );

  const add = useCallback((item: WishlistItem) => {
    const current = wishlistStore.getSnapshot();
    if (!current.some((i) => i.handle === item.handle)) {
      wishlistStore.write([...current, item]);
    }
  }, []);

  const remove = useCallback((handle: string) => {
    const current = wishlistStore.getSnapshot();
    wishlistStore.write(current.filter((item) => item.handle !== handle));
  }, []);

  const toggle = useCallback(
    (item: WishlistItem) => {
      const current = wishlistStore.getSnapshot();
      if (current.some((i) => i.handle === item.handle)) {
        wishlistStore.write(current.filter((i) => i.handle !== item.handle));
      } else {
        wishlistStore.write([...current, item]);
      }
    },
    [],
  );

  const clear = useCallback(() => {
    wishlistStore.write([]);
  }, []);

  const value = useMemo<WishlistContextValue>(
    () => ({
      items,
      itemCount: items.length,
      isInWishlist,
      toggle,
      add,
      remove,
      clear,
    }),
    [items, isInWishlist, add, remove, toggle, clear],
  );

  return <WishlistContext value={value}>{children}</WishlistContext>;
}

export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside a WishlistProvider");
  return context;
}