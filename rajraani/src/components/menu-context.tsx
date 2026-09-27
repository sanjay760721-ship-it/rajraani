"use client";

import { createContext, useContext } from "react";

import { NAVIGATION, type NavPanel } from "@/lib/data/navigation";

/**
 * The site menu for the header (a client component). The storefront layout
 * reads the owner's saved menu from the database and provides it here.
 */
const MenuContext = createContext<readonly NavPanel[]>(NAVIGATION);

export function MenuProvider({ value, children }: { value: readonly NavPanel[]; children: React.ReactNode }) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenu = () => useContext(MenuContext);
