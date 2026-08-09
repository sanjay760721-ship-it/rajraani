import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  turbopack: {
    /*
     * Pin the workspace root to this package.
     *
     * Without it Turbopack walks up looking for a lockfile, finds the stray
     * `package-lock.json` in the home directory, infers the workspace root
     * there, and then warns that it is ignoring it for being outside the
     * repository. Removing this does not fix a build — it only moves the
     * root somewhere wrong and quietly.
     */
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  images: {
    /*
     * No remotePatterns.
     *
     * Every image this site serves is a local file under public/. Allowing a
     * remote host here would let the deployed site load images from someone
     * else's CDN at runtime — their bandwidth, their logs, and an outage of
     * theirs becomes an outage of ours. Add a host only when we own it, or
     * when there is a contract that says we may use it.
     */
    /**
     * AVIF first, WebP fallback — build.md §9.3.
     */
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    deviceSizes: [400, 600, 900, 1200, 1800, 2400, 3000],
    imageSizes: [80, 160, 240, 320, 480, 640],
  },
};

export default nextConfig;
