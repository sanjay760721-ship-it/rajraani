import type { Config } from 'tailwindcss';

/**
 * Tailwind is bound to design/tokens.json via the CSS custom properties in
 * design/tokens.css. Nothing here restates a token value — if a hex or a rem
 * appears in this file, the token pipeline has been bypassed.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  theme: {
    // Deliberately `theme`, not `theme.extend`: the default Tailwind palette and
    // scale are removed. A developer cannot reach for `text-gray-500` or
    // `rounded-lg`, because they do not exist. This is how the token set stays
    // load-bearing instead of decorative.
    screens: { md: '768px', lg: '1024px', xl: '1440px' },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      page: 'var(--rj-bg-page)',
      sunk: 'var(--rj-bg-sunk)',
      surface: 'var(--rj-bg-surface)',
      inverse: 'var(--rj-bg-inverse)',
      ink: {
        DEFAULT: 'var(--rj-ink-primary)',
        secondary: 'var(--rj-ink-secondary)',
        muted: 'var(--rj-ink-muted)',
        disabled: 'var(--rj-ink-disabled)',
        inverse: 'var(--rj-ink-inverse)',
        'on-accent': 'var(--rj-ink-on-accent)',
      },
      rule: {
        DEFAULT: 'var(--rj-rule-hairline)',
        strong: 'var(--rj-rule-strong)',
        inverse: 'var(--rj-rule-inverse)',
      },
      lac: { DEFAULT: 'var(--rj-accent-lac)', hover: 'var(--rj-accent-lac-hover)', quiet: 'var(--rj-accent-lac-quiet)' },
      success: 'var(--rj-state-success)',
      warning: 'var(--rj-state-warning)',
      error: 'var(--rj-state-error)',
      'sold-out': 'var(--rj-state-sold-out)',
    },
    spacing: {
      0: 'var(--rj-space-0)',
      1: 'var(--rj-space-1)',
      2: 'var(--rj-space-2)',
      3: 'var(--rj-space-3)',
      4: 'var(--rj-space-4)',
      5: 'var(--rj-space-5)',
      6: 'var(--rj-space-6)',
      7: 'var(--rj-space-7)',
      8: 'var(--rj-space-8)',
      9: 'var(--rj-space-9)',
      10: 'var(--rj-space-10)',
      11: 'var(--rj-space-11)',
    },
    borderRadius: { none: 'var(--rj-radius)', DEFAULT: 'var(--rj-radius)' },
    boxShadow: { none: 'none' }, // §elevation: rules, not shadows. There is no shadow scale.
    fontFamily: {
      display: 'var(--rj-font-display)',
      ui: 'var(--rj-font-ui)',
      mono: 'var(--rj-font-mono)',
    },
    aspectRatio: {
      portrait: 'var(--rj-ratio-portrait)',
      square: 'var(--rj-ratio-square)',
      wide: 'var(--rj-ratio-wide)',
      'hero-mobile': 'var(--rj-ratio-hero-mobile)',
    },
    transitionDuration: {
      fast: 'var(--rj-duration-fast)',
      medium: 'var(--rj-duration-medium)',
      slow: 'var(--rj-duration-slow)',
    },
    transitionTimingFunction: {
      standard: 'var(--rj-ease-standard)',
      exit: 'var(--rj-ease-exit)',
      linear: 'var(--rj-ease-linear)',
    },
    extend: {
      maxWidth: { container: 'var(--rj-container-max)', narrow: 'var(--rj-container-narrow)' },
    },
  },
  plugins: [],
};

export default config;
