"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ProductCard } from "./ProductCard";
import { useSearchModal } from "./search-context";
import { search } from "@/lib/search";

/**
 * Search Modal Overlay.
 *
 * Centred modal (not full-screen) with live typeahead.
 * Four groups: Popular Suggestions / Categories / Pages / Products.
 * Opens from header search, closes on Esc or ×.
 * Focus trap, restores focus on close.
 * Coexists with /search page for SEO/direct links.
 */
export function SearchModal() {
  // Open state lives in the shared context — the header's search button is what
  // opens this, and it has no other way to reach in here.
  const { isOpen, close: closeSearch } = useSearchModal();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(search(""));
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const id = useId();
  const router = useRouter();

  // Read initial query from URL on client side (avoids useSearchParams Suspense requirement).
  //
  // This is a genuine read *from* an external system (the address bar) that
  // cannot happen during render — the server has no `window`, and a lazy
  // initialiser would hydrate a `?q=` deep link mismatched against the server's
  // empty string. The modal is closed at mount, so nothing is visible until the
  // user opens it and no cascading render is observable.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlQuery = params.get("q");
    if (urlQuery) {
      /* eslint-disable-next-line react-hooks/set-state-in-effect */
      setQuery(urlQuery);
      setResults(search(urlQuery));
    }
  }, []);

  // Lock scroll, remember what had focus, and focus the input while open.
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 0);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const close = useCallback(() => {
    closeSearch();
    setQuery("");
    setResults(search(""));
  }, [closeSearch]);

  // Handle query change
  const handleQueryChange = (value: string) => {
    setQuery(value);
    setResults(search(value));
    // Update URL without navigation
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  // Escape closes
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Outside click closes (but not clicks inside modal)
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (modalRef.current?.contains(event.target as Node)) return;
      close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const total =
    results.products.length + results.collections.length + results.pages.length;

  return (
    <div className="fixed inset-0 z-100" role="dialog" aria-modal="true" aria-labelledby={id}>
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-scrim/60"
        onClick={close}
      />
      <div
        ref={modalRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[80vh] bg-bg border border-rule shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-rule">
          <h2 id={id} className="font-display text-h3 text-ink">
            Search
          </h2>
          <button
            type="button"
            className="eyebrow text-ink-muted hover:text-ink p-2"
            onClick={close}
            aria-label="Close search"
          >
            ✕
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6 border-b border-rule">
          <label htmlFor={id + "-input"} className="sr-only">
            Search
          </label>
          <input
            ref={inputRef}
            id={id + "-input"}
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="A colour, a weave, a name"
            className="w-full border-b border-rule-input bg-transparent py-4 text-center text-h4 text-ink outline-none focus:border-ink"
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls={id + "-results"}
          />
        </div>

        {/* Results */}
        <div
          id={id + "-results"}
          className="flex-1 overflow-y-auto p-6"
          role="listbox"
          aria-label="Search results"
        >
          {query.length >= 2 && total === 0 ? (
            <p className="py-8 text-center text-ink-body">
              Nothing for “{query}”. Try a weave, a colour, or a piece&rsquo;s name.
            </p>
          ) : (
            <>
              {results.matchedTerms.length > 0 ? (
                <div className="mb-6">
                  <p className="text-caption text-center text-ink-muted">
                    Reading that as{" "}
                    {results.matchedTerms.map((term) => term.name).join(", ")}.
                  </p>
                </div>
              ) : null}

              {results.collections.length > 0 ? (
                <section className="mb-8" aria-labelledby={id + "-collections-heading"}>
                  <h3 id={id + "-collections-heading"} className="eyebrow mb-4 text-ink-muted">
                    Collections
                  </h3>
                  <ul className="space-y-3" role="list">
                    {results.collections.map((collection) => (
                      <li key={collection.handle}>
                        <Link
                          href={`/collections/${collection.handle}`}
                          className="font-display text-h4 text-ink hover:underline block"
                          onClick={close}
                        >
                          {collection.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {results.pages.length > 0 ? (
                <section className="mb-8" aria-labelledby={id + "-pages-heading"}>
                  <h3 id={id + "-pages-heading"} className="eyebrow mb-4 text-ink-muted">
                    Reading
                  </h3>
                  <ul className="space-y-4" role="list">
                    {results.pages.map((page) => (
                      <li key={page.slug}>
                        <Link
                          href={`/pages/${page.slug}`}
                          className="font-display text-h4 text-ink hover:underline block"
                          onClick={close}
                        >
                          {page.title}
                        </Link>
                        <p className="text-caption mt-1 max-w-prose text-ink-body">
                          {page.standfirst}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {results.products.length > 0 ? (
                <section aria-labelledby={id + "-products-heading"}>
                  <h3 id={id + "-products-heading"} className="eyebrow mb-4 text-ink-muted">
                    Pieces
                  </h3>
                  <ul
                    className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-4"
                    role="list"
                  >
                    {results.products.slice(0, 8).map((product) => (
                      <li key={product.handle}>
                        <ProductCard product={product} />
                      </li>
                    ))}
                  </ul>
                  {results.products.length > 8 && (
                    <div className="mt-6 text-center">
                      <Link
                        href={`/search?q=${encodeURIComponent(query)}`}
                        className="cta inline-block"
                        onClick={close}
                      >
                        View all {results.products.length} pieces
                      </Link>
                    </div>
                  )}
                </section>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}