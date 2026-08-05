/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Ladder capped at the true master width (3000px). build.md §9 / photography-brief §2.1:
    // never advertise a srcset width larger than the master — zooming into zari on a
    // 50,000-rupee product must not hit an upscale.
    deviceSizes: [400, 600, 800, 1200, 1600, 2400, 3000],
    imageSizes: [200, 300, 400],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.shopify.com' }],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
