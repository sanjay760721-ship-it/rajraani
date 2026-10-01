---
name: Ethos & Elegance
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#715a3e'
  on-secondary: '#ffffff'
  secondary-container: '#fdddb9'
  on-secondary-container: '#786044'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c19'
  on-tertiary-container: '#838480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#fdddb9'
  secondary-fixed-dim: '#e0c29f'
  on-secondary-fixed: '#281803'
  on-secondary-fixed-variant: '#584329'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built on a foundation of **Sophisticated Minimalism** blended with **Editorial Elegance**. It is designed for luxury, culture, and high-end editorial experiences where content is given maximum breathing room to resonate. The target audience values exclusivity, intellectual depth, and refined aesthetics.

The visual narrative avoids the "tech-heavy" look of typical SaaS products, instead opting for a "digital gallery" feel. Key characteristics include:
- **Quiet Confidence:** Generous whitespace (negative space) that directs focus without visual noise.
- **Precision:** Perfect alignment and purposeful use of hair-lines to create structure.
- **Tactile Digitalism:** Subtle use of depth through tonal layering rather than aggressive shadows, mimicking the feel of high-quality matte paper.

## Colors

This design system utilizes a high-contrast, "Inked" palette. The primary color is a deep, near-black charcoal used for essential text and structural borders. The secondary color is a muted bronze, used sparingly for accents, active states, and call-to-action highlights to provide a sense of luxury.

The background system relies on the tertiary "Off-White" to reduce eye strain and provide a more premium feel than pure white. Neutral grays are reserved for secondary metadata and disabled states. 

- **Primary:** High-fidelity text and core iconography.
- **Secondary:** Intentional accents and highlights.
- **Tertiary:** Base canvas and surface layers.
- **Neutral:** Hierarchy management and utility.

## Typography

The typography strategy is a classic serif-on-sans pairing. **Playfair Display** provides an authoritative, editorial voice for headlines, creating a sense of history and craftsmanship. **Manrope** serves as the functional workhorse, offering high legibility and a modern, geometric contrast for body copy and UI labels.

Large display headings should use tighter letter spacing to maintain visual tension. Captions and labels should utilize the `label-caps` style with increased letter spacing to ensure clarity at small scales and provide a structured, "catalog" aesthetic.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid Grid**. Content is constrained to a 12-column grid on desktop to ensure optimal readability line-lengths, while the background and decorative elements can bleed to the edges.

- **Rhythm:** All spacing is derived from a base-8 unit.
- **Desktop:** 1280px max-width container, 12 columns, 24px gutters, 64px outer margins.
- **Tablet:** 8 columns, 16px gutters, 40px outer margins.
- **Mobile:** 4 columns, 16px gutters, 20px outer margins.

The layout emphasizes verticality. Use generous top-and-bottom padding (64px+) between major sections to allow the design to "breathe" and signal transitions in content.

## Elevation & Depth

To maintain the editorial feel, this design system rejects heavy shadows in favor of **Tonal Layering** and **Ghost Borders**. 

1.  **Level 0 (Base):** The Tertiary color (#F5F5F0) serves as the primary canvas.
2.  **Level 1 (Cards/Surface):** Pure White (#FFFFFF) surfaces with a 1px solid border in a very light neutral tint.
3.  **Interaction Depth:** Only upon interaction (hover/active) should a subtle, ultra-diffused "Ambient Shadow" appear (e.g., `0 8px 24px rgba(26, 26, 26, 0.04)`).

This approach creates a flat, "stacked paper" effect rather than objects floating in 3D space.

## Shapes

The shape language is **Soft-Square**. While the core of the design system values the structure of 90-degree angles, a subtle 4px (`rounded-sm`) radius is applied to primary UI elements like buttons and input fields to prevent the interface from feeling aggressive or overly clinical.

- **Images:** Should remain strictly sharp (0px) to mimic high-end photography prints.
- **Secondary Containers:** Such as tooltips or dropdowns, may use `rounded-lg` (8px) to distinguish them from the primary structural grid.

## Components

### Buttons
- **Primary:** Solid Primary color background with Tertiary color text. No border. Sharp or 4px corners.
- **Secondary:** Ghost style. 1px solid Primary color border with Primary color text. Transparent background.

### Input Fields
- Underline style preferred for a more elegant, "form-like" feel. 
- 1px bottom border in Primary color. 
- Labels use `label-caps` and are positioned above the input.

### Cards
- No shadows by default.
- 1px border in a light neutral tint.
- Content should have generous internal padding (min 32px) to maintain the minimalist narrative.

### Navigation
- Top-aligned minimalist bar. 
- Links use `body-md` with a subtle 1px underline transition on hover.
- Brand mark/logo should always be centered to reinforce the editorial feel.

### Lists
- Separated by thin (1px) horizontal lines that extend to the container edges.
- High vertical padding (16px - 24px) between list items.