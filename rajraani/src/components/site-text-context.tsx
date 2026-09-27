"use client";

import { createContext, useContext } from "react";

import { SITE_TEXT_DEFAULTS, type SiteText } from "@/lib/content/site-text-defs";

/**
 * The owner-editable site-wide lines, for client components (announcement
 * strip, top bar, product tabs). The storefront layout reads them from the
 * database once and provides them here.
 */
const SiteTextContext = createContext<SiteText>(SITE_TEXT_DEFAULTS);

export function SiteTextProvider({ value, children }: { value: SiteText; children: React.ReactNode }) {
  return <SiteTextContext.Provider value={value}>{children}</SiteTextContext.Provider>;
}

export const useSiteText = () => useContext(SiteTextContext);
