/**
 * A localStorage-backed external store for `useSyncExternalStore`.
 *
 * Currency and cart are both browser state that must survive a reload and must
 * not break hydration. Reading localStorage during render causes a mismatch;
 * reading it in an effect and calling setState causes a cascading render (and
 * is what the React compiler lint objects to). `useSyncExternalStore` is the
 * primitive for exactly this: the server and the hydration pass both see the
 * fallback, and the stored value is adopted immediately afterwards.
 *
 * Snapshots are cached against the raw string, because getSnapshot must return
 * a referentially stable value or React re-renders forever.
 */

export type LocalStore<T> = {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => T;
  getServerSnapshot: () => T;
  write: (value: T) => void;
};

export function createLocalStore<T>(
  key: string,
  fallback: T,
  isValid: (value: unknown) => value is T,
): LocalStore<T> {
  const listeners = new Set<() => void>();
  let cachedRaw: string | null | undefined;
  let cachedValue: T = fallback;

  const notify = () => {
    for (const listener of listeners) listener();
  };

  return {
    subscribe(listener) {
      listeners.add(listener);
      // Keep tabs in step with each other.
      window.addEventListener("storage", listener);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", listener);
      };
    },

    getSnapshot() {
      const raw = window.localStorage.getItem(key);
      if (raw === cachedRaw) return cachedValue;

      cachedRaw = raw;
      if (raw === null) {
        cachedValue = fallback;
        return cachedValue;
      }
      try {
        const parsed: unknown = JSON.parse(raw);
        cachedValue = isValid(parsed) ? parsed : fallback;
      } catch {
        // Corrupt storage is not worth surfacing — fall back and move on.
        cachedValue = fallback;
      }
      return cachedValue;
    },

    getServerSnapshot() {
      return fallback;
    },

    write(value) {
      const raw = JSON.stringify(value);
      window.localStorage.setItem(key, raw);
      cachedRaw = raw;
      cachedValue = value;
      notify();
    },
  };
}
