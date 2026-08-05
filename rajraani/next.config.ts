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
    /**
     * AVIF first, WebP fallback — build.md §9.3.
     *
     * Images are 72% of PDP payload in this category (738 KB of ~1.0 MB) and
     * the reference site serves JPEG and PNG only, with no WebP or AVIF
     * anywhere. This one line is a 40–60% payload cut and the single
     * highest-leverage performance decision available on this build.
     */
    formats: ["image/avif", "image/webp"],
    /**
     * The srcset ladder, capped at the 3000px master (photography-brief §2.1).
     *
     * §9.3: the ladder must not advertise a width the master cannot supply.
     * The reference site declares up to 5000w against 1440–1600px masters, so
     * a browser that asks for it receives an upscale — on a ₹50,000 product
     * where the buyer is pinch-zooming into the zari.
     */
    deviceSizes: [400, 600, 900, 1200, 1800, 2400, 3000],
    imageSizes: [80, 160, 240, 320],
  },
};

export default nextConfig;
