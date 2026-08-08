import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Without this, Turbopack walks up to the home directory looking for a
    // lockfile and infers the workspace root there.
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
