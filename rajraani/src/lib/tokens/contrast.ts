/**
 * Contrast verification for the palette tokens.
 *
 * build.md §2.5 requires "verified AA pairs for every ink-on-surface
 * combination", and explicitly says to verify at token-definition time rather
 * than at audit time — a light, low-chroma ground is the category's standard
 * accessibility failure mode.
 *
 * This module encodes that as a contract the test suite enforces. When the
 * designer delivers real values, change PALETTE here and in globals.css and
 * run `npm test`: any pair that drops below its required ratio fails loudly
 * before it reaches a page.
 *
 * The two files are kept in sync by contrast.test.ts, which parses globals.css
 * and asserts the hexes match. Editing one without the other fails the test.
 */

/** Hex values mirroring the @theme block in src/app/globals.css. */
export const PALETTE = {
  bg: "#ffffff",
  bgAlt: "#fbf9f6",
  bgSand: "#f1ece4",
  ink: "#301e1d",
  inkBody: "#533e2d",
  inkMuted: "#6b6055",
  rule: "#e7e0d6",
  ruleInput: "#8b8072",
  ruleStrong: "#301e1d",
  accent: "#7d5f2a",
  error: "#9c3b30",
  success: "#4a6b48",
} as const;

export type PaletteToken = keyof typeof PALETTE;

/** The CSS custom property each palette key corresponds to. */
export const CSS_VARIABLE: Record<PaletteToken, string> = {
  bg: "--color-bg",
  bgAlt: "--color-bg-alt",
  bgSand: "--color-bg-sand",
  ink: "--color-ink",
  inkBody: "--color-ink-body",
  inkMuted: "--color-ink-muted",
  rule: "--color-rule",
  ruleInput: "--color-rule-input",
  ruleStrong: "--color-rule-strong",
  accent: "--color-accent",
  error: "--color-error",
  success: "--color-success",
};

/**
 * WCAG 2.2 minimum contrast ratios.
 *
 * `largeText` is 18.66px bold or 24px regular and above — on this site that is
 * display headings only. Everything in the 11–15px range owes `text`.
 */
export const WCAG = {
  /** 1.4.3 Contrast (Minimum), normal text. */
  text: 4.5,
  /** 1.4.3 Contrast (Minimum), large text. */
  largeText: 3,
  /** 1.4.11 Non-text Contrast — UI component boundaries and graphics. */
  nonText: 3,
} as const;

export function parseHex(hex: string): [number, number, number] {
  const clean = hex.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) {
    throw new Error(`Expected a 6-digit hex colour, received "${hex}"`);
  }
  return [
    Number.parseInt(clean.slice(0, 2), 16),
    Number.parseInt(clean.slice(2, 4), 16),
    Number.parseInt(clean.slice(4, 6), 16),
  ];
}

/** Relative luminance per WCAG 2.x. */
export function relativeLuminance(hex: string): number {
  const channels = parseHex(hex).map((value) => {
    const srgb = value / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  }) as [number, number, number];

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/** Contrast ratio between two hex colours, 1–21. */
export function contrastRatio(foreground: string, background: string): number {
  const a = relativeLuminance(foreground);
  const b = relativeLuminance(background);
  const lighter = Math.max(a, b);
  const darker = Math.min(a, b);
  return (lighter + 0.05) / (darker + 0.05);
}

export type ContrastRequirement = {
  foreground: PaletteToken | "white";
  background: PaletteToken;
  /** Minimum acceptable ratio. */
  minimum: number;
  /** Where this pair is actually used — the reason the requirement applies. */
  usage: string;
};

const SURFACES = ["bg", "bgAlt", "bgSand"] as const satisfies readonly PaletteToken[];

/**
 * Every ink-on-surface combination the design uses, with the ratio it owes.
 *
 * Three surfaces × three inks is the whole matrix, and all nine must pass —
 * the footer and editorial bands are not lesser surfaces, and the muted ink
 * carries 11px SKU and caption text, which is small text owing 4.5:1.
 */
export const CONTRAST_CONTRACT: ContrastRequirement[] = [
  ...SURFACES.flatMap((background): ContrastRequirement[] => [
    {
      foreground: "ink",
      background,
      minimum: WCAG.text,
      usage: "headings and primary ink",
    },
    {
      foreground: "inkBody",
      background,
      minimum: WCAG.text,
      usage: "body copy",
    },
    {
      foreground: "inkMuted",
      background,
      minimum: WCAG.text,
      usage: "SKU, captions, meta — 11px, so small text",
    },
    {
      foreground: "accent",
      background,
      minimum: WCAG.text,
      usage: "accent text and links",
    },
    {
      foreground: "error",
      background,
      minimum: WCAG.text,
      usage: "form validation messages",
    },
    {
      foreground: "success",
      background,
      minimum: WCAG.text,
      usage: "confirmation messages",
    },
    {
      foreground: "ruleInput",
      background,
      minimum: WCAG.nonText,
      usage: "form control boundary — WCAG 1.4.11",
    },
  ]),
  {
    foreground: "white",
    background: "ink",
    minimum: WCAG.text,
    usage: "primary button label on the filled ink button",
  },
];

export type ContrastResult = ContrastRequirement & {
  ratio: number;
  passes: boolean;
};

export function evaluateContrast(
  requirement: ContrastRequirement,
): ContrastResult {
  const foreground =
    requirement.foreground === "white"
      ? "#ffffff"
      : PALETTE[requirement.foreground];
  const ratio = contrastRatio(foreground, PALETTE[requirement.background]);
  return {
    ...requirement,
    ratio,
    // Round to 2dp before comparing so a value sitting exactly on the
    // threshold is not failed by float representation.
    passes: Math.round(ratio * 100) / 100 >= requirement.minimum,
  };
}

export function evaluateContrastContract(): ContrastResult[] {
  return CONTRAST_CONTRACT.map(evaluateContrast);
}
