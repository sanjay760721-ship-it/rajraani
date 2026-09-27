"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { EditContext } from "./SiteEditorPanel";

/**
 * Edit the website from the website.
 *
 * Mounted on every storefront page, and for visitors it does nothing: no
 * request, no markup. Only when the `rj_edit` hint cookie is present (set at
 * admin sign-in) does it ask the server whether this browser really is an
 * admin, and only then is the editing panel's code even downloaded.
 */

const SiteEditorPanel = dynamic(() => import("./SiteEditorPanel").then((mod) => mod.SiteEditorPanel), {
  ssr: false,
});

function mayBeAdmin(): boolean {
  // Inside the admin's own preview frame the page is being shown, not edited;
  // a second editing bar floating in the preview is only confusing.
  if (window.self !== window.top) return false;
  // In development the admin needs no sign-in (see auth/session.ts), so there
  // is no cookie to look for.
  if (process.env.NODE_ENV !== "production") return true;
  return document.cookie.split("; ").some((part) => part === "rj_edit=1");
}

export function SiteEditor() {
  const pathname = usePathname();
  const [context, setContext] = useState<EditContext | null>(null);

  useEffect(() => {
    if (!mayBeAdmin()) return;
    let cancelled = false;
    fetch(`/admin/api/edit-context?path=${encodeURIComponent(pathname)}`, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: EditContext | null) => {
        if (!cancelled) setContext(data?.admin ? data : null);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return context ? <SiteEditorPanel context={context} /> : null;
}
