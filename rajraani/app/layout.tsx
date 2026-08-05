import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default: BRAND.name, template: `%s · ${BRAND.name}` },
  description: BRAND.promise,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // `lang` is set explicitly. Sprint 6 adds hreflang across all 8 markets —
    // pre-build-gaps §6 records that as an open competitive gap.
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
