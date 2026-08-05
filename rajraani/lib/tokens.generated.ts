// GENERATED FROM design/tokens.json — DO NOT EDIT. Run `npm run tokens`.
export const breakpoints = {
  "base": 0,
  "md": 768,
  "lg": 1024,
  "xl": 1440
} as const;

export const imageRatios = {
  "portrait": "2 / 3",
  "square": "1 / 1",
  "wide": "16 / 9",
  "heroMobile": "4 / 5"
} as const;

export const imageWidths = [400,600,800,1200,1600,2400,3000] as const;
export const imageFormats = ["avif","webp","jpeg"] as const;

export type ImageRatio = keyof typeof imageRatios;
export type Breakpoint = keyof typeof breakpoints;
