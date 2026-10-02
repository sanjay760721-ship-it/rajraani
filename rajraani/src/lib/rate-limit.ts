// One Node process: bounded storage and lazy expiry avoid both growing maps
// and long-lived cleanup timers. The reverse proxy must overwrite client IPs.
export function createRateLimit(limit: number, windowMs: number, maxKeys = 10_000) {
  const entries = new Map<string, { count: number; expires: number }>();
  let lastSweep = 0;
  return (key: string, now = Date.now()): boolean => {
    if (now - lastSweep > 60_000) {
      for (const [k, entry] of entries) if (entry.expires <= now) entries.delete(k);
      lastSweep = now;
    }
    key = key.slice(0, 256);
    let entry = entries.get(key);
    if (!entry || entry.expires <= now) {
      // Refuse new keys at capacity rather than letting attackers evict limits.
      if (!entry && entries.size >= maxKeys) return false;
      entry = { count: 0, expires: now + windowMs };
      entries.set(key, entry);
    }
    if (entry.count >= limit) return false;
    entry.count++;
    return true;
  };
}
