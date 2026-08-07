"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useWishlist } from "./wishlist-context";

/**
 * Wishlist button for header.
 *
 * Opens a dropdown showing wishlist items (like cart drawer but simpler).
 * For now, just shows count and links to a wishlist page.
 */
export function WishlistButton() {
  const { itemCount } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const close = () => setIsOpen(false);

  // Outside click closes. The handler lives inside the effect so it is not
  // rebuilt on every render and the dependency list stays honest.
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current?.contains(event.target as Node) ||
        panelRef.current?.contains(event.target as Node)
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

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={id}
        aria-label={`Wishlist${itemCount > 0 ? `, ${itemCount} items` : ""}`}
        className="eyebrow text-ink flex items-center gap-1.5 px-2 py-1 border border-transparent hover:border-rule-strong transition-colors relative"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          className="w-5 h-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-ink text-bg text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id={id}
          role="dialog"
          aria-label="Wishlist"
          className="absolute right-0 top-full z-50 mt-2 w-72 bg-bg border border-rule shadow-lg overflow-hidden"
        >
          <div className="p-4 border-b border-rule flex items-center justify-between">
            <h3 className="font-display text-h4 text-ink">Wishlist</h3>
            <button
              type="button"
              className="eyebrow text-ink-muted hover:text-ink"
              onClick={close}
              aria-label="Close wishlist"
            >
              ✕
            </button>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <p className="px-4 py-8 text-center text-ink-body">
              Wishlist page coming soon. Items persist across sessions.
            </p>
          </div>
          <div className="p-4 border-t border-rule">
            <a
              href="/wishlist"
              className="block text-center cta"
              onClick={close}
            >
              View Wishlist
            </a>
          </div>
        </div>
      )}
    </div>
  );
}