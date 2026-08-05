import tokensJson from '@/design/tokens.json';
import { BRAND, CURRENCIES } from '@/lib/brand';
import { formatMoney } from '@/lib/money';

/**
 * Sprint 0 exit criterion (build.md §5): "a blank page renders with the real
 * type scale and palette."
 *
 * So this is not a placeholder homepage — it is the token specimen. It reads
 * design/tokens.json at build time and renders what is actually in it, which
 * means it cannot drift from the token set the way a hand-written swatch page
 * would. It is deleted in Sprint 5 when the real homepage lands.
 */

const SPECIMEN = 'रजरानी — Rajraani';

/**
 * The token file mixes `$`-prefixed metadata in among the real entries, so the
 * literal type TypeScript infers from the JSON is a wide union that fights every
 * iteration. It is narrowed once, here, rather than at each call site.
 */
interface ColourLeaf { value: string; use: string }
interface TypeStep {
  family: string;
  base: { size: string };
  md?: { size: string };
  lg?: { size: string };
}
interface TokenFile {
  $meta: { version: string; status: string };
  colour: Record<string, Record<string, ColourLeaf> | string>;
  type: { scale: Record<string, TypeStep | string> };
}

const tokens = tokensJson as unknown as TokenFile;

const isEntry = <T,>(e: [string, T | string]): e is [string, T] =>
  !e[0].startsWith('$') && typeof e[1] === 'object';

export default function TokenSpecimen() {
  const colourGroups = Object.entries(tokens.colour).filter(isEntry<Record<string, ColourLeaf>>);
  const typeScale = Object.entries(tokens.type.scale).filter(isEntry<TypeStep>);

  return (
    <main id="main" className="container-page" style={{ paddingBlock: 'var(--rj-space-8)' }}>
      <header style={{ marginBottom: 'var(--rj-space-8)' }}>
        <p className="type-eyebrow" style={{ color: 'var(--rj-ink-muted)' }}>
          Sprint 0 · design tokens v{tokens.$meta.version}
        </p>
        <h1 className="type-display" style={{ marginBlock: 'var(--rj-space-3)' }}>
          {BRAND.name}
        </h1>
        <p className="type-body-lg container-narrow" style={{ marginInline: 0, color: 'var(--rj-ink-secondary)' }}>
          {BRAND.promise} — {tokens.$meta.status}
        </p>
      </header>

      <section aria-labelledby="h-type" style={{ marginBottom: 'var(--rj-space-9)' }}>
        <h2 id="h-type" className="type-h2">Type scale</h2>
        <p className="type-caption" style={{ color: 'var(--rj-ink-muted)', marginBottom: 'var(--rj-space-5)' }}>
          Devanagari is set in the same stack — <code>poetic_name</code> may be authored in either script.
        </p>
        {typeScale.map(([name, s]) => (
          <div key={name} style={{ borderTop: 'var(--rj-border-bounded)', paddingBlock: 'var(--rj-space-4)' }}>
            <p className="type-caption" style={{ color: 'var(--rj-ink-muted)', margin: 0 }}>
              {name} · {s.base.size} → {s.lg?.size ?? s.base.size} · {s.family}
            </p>
            <p className={`type-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`} style={{ margin: 0 }}>
              {SPECIMEN}
            </p>
          </div>
        ))}
      </section>

      <section aria-labelledby="h-colour" style={{ marginBottom: 'var(--rj-space-9)' }}>
        <h2 id="h-colour" className="type-h2">Palette</h2>
        <p className="type-caption" style={{ color: 'var(--rj-ink-muted)', marginBottom: 'var(--rj-space-5)' }}>
          Every pair below is verified against WCAG 2.2 in CI — <code>npm run check:contrast</code>.
        </p>
        {colourGroups.map(([group, members]) => (
          <div key={group} style={{ marginBottom: 'var(--rj-space-5)' }}>
            <h3 className="type-h4" style={{ marginBottom: 'var(--rj-space-2)' }}>{group}</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--rj-space-3)', listStyle: 'none', margin: 0, padding: 0 }}>
              {Object.entries(members).map(([name, leaf]) => (
                <li key={name} style={{ border: 'var(--rj-border-bounded)' }}>
                  <div style={{ background: leaf.value, height: 'var(--rj-space-8)' }} />
                  <div style={{ padding: 'var(--rj-space-3)' }}>
                    <p className="type-caption" style={{ margin: 0 }}>
                      <strong>{group}.{name}</strong> · {leaf.value}
                    </p>
                    <p className="type-caption" style={{ margin: 0, color: 'var(--rj-ink-muted)' }}>{leaf.use}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section aria-labelledby="h-ratio" style={{ marginBottom: 'var(--rj-space-9)' }}>
        <h2 id="h-ratio" className="type-h2">Image ratios</h2>
        <p className="type-caption" style={{ color: 'var(--rj-ink-muted)', marginBottom: 'var(--rj-space-5)' }}>
          Both reserved in CSS so the gallery never shifts while loading. Frames are schematic on
          purpose — no photography exists yet, and none is borrowed.
        </p>
        <div style={{ display: 'flex', gap: 'var(--rj-space-4)', flexWrap: 'wrap' }}>
          <figure style={{ margin: 0, width: 180 }}>
            <div className="ratio-portrait" style={{ background: 'var(--rj-bg-sunk)', border: 'var(--rj-border-bounded)' }} />
            <figcaption className="type-caption" style={{ color: 'var(--rj-ink-muted)' }}>2:3 · frames 1–5 · master 3000×4500</figcaption>
          </figure>
          <figure style={{ margin: 0, width: 180 }}>
            <div className="ratio-square" style={{ background: 'var(--rj-bg-sunk)', border: 'var(--rj-border-bounded)' }} />
            <figcaption className="type-caption" style={{ color: 'var(--rj-ink-muted)' }}>1:1 · frames 6+ · master 3000×3000</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="h-money">
        <h2 id="h-money" className="type-h2">Price formatting · 8 markets</h2>
        <p className="type-caption" style={{ color: 'var(--rj-ink-muted)', marginBottom: 'var(--rj-space-5)' }}>
          INR groups by lakh, JPY carries no minor unit. Figures are tabular so the cart aligns.
        </p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 'var(--rj-space-5)', flexWrap: 'wrap' }}>
          {CURRENCIES.map((c) => (
            <li key={c}>
              <p className="type-eyebrow" style={{ color: 'var(--rj-ink-muted)', margin: 0 }}>{c}</p>
              <p className="type-price" style={{ margin: 0 }}>{formatMoney({ amount: '149500.00', currencyCode: c })}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
