"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";

type SearchContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<SearchContextValue>(
    () => ({ isOpen, open, close }),
    [isOpen, open, close],
  );

  return <SearchContext value={value}>{children}</SearchContext>;
}

export function useSearchModal(): SearchContextValue {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearchModal must be used inside a SearchProvider");
  return context;
}