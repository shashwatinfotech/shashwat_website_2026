/**
 * Kinetic Precision — JS-side design tokens.
 * Mirrors DESIGN.md exactly. Use these (not raw hex strings) whenever a
 * color is needed outside Tailwind class names — chart series, inline
 * SVG fills, canvas, etc. — so the whole app stays traceable to one source.
 */

export const colors = {
  primary: "#00605B",
  primaryContainer: "#1A7A74",
  onPrimary: "#FFFFFF",
  onPrimaryContainer: "#B2FFF7",

  accent: "#A8D420",
  secondary: "#4F6600",
  secondaryContainer: "#C5F342",
  onSecondaryContainer: "#546D00",

  tertiary: "#844429",
  tertiaryContainer: "#A15B3F",
  onTertiaryContainer: "#FFEDE8",

  error: "#BA1A1A",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#93000A",

  background: "#F7FAF8",
  onBackground: "#181C1C",

  surface: "#F7FAF8",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#F1F4F3",
  surfaceContainer: "#EBEFED",
  surfaceContainerHigh: "#E5E9E7",
  surfaceContainerHighest: "#E0E3E2",

  onSurface: "#181C1C",
  onSurfaceVariant: "#3E4947",
  outline: "#6E7978",
  outlineVariant: "#BDC9C7",

  inverseSurface: "#2D3131",
  inverseOnSurface: "#EEF1F0",

  textPrimary: "#1C1C1C",
  textSecondary: "#8C8C8C",
  border: "#ECECEC",
  white: "#FFFFFF",
} as const;

export const statusColors = {
  active: colors.secondaryContainer,
  activeText: colors.onSecondaryContainer,
  pending: colors.surfaceContainerHigh,
  pendingText: colors.onSurfaceVariant,
  critical: colors.errorContainer,
  criticalText: colors.onErrorContainer,
} as const;

export const chartSeries = [
  colors.primaryContainer,
  colors.secondaryContainer,
  colors.tertiaryContainer,
  colors.outlineVariant,
] as const;

export const radius = {
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
  input: "6px",
  bento: "12px",
} as const;

export const spacing = {
  unit: 4,
  containerMax: 1440,
  gutter: 24,
  marginDesktop: 64,
  marginMobile: 20,
} as const;

export const easing = {
  mechanical: [0.4, 0, 0.2, 1] as [number, number, number, number],
} as const;
