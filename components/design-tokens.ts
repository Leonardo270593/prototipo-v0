/**
 * Design Tokens — InflaçãoPessoal
 * Fonte de verdade: docs/specs/design-tokens-fundacao.md, design-tokens-componentes.md, design-tokens-graficos.md
 *
 * Centraliza todos os valores de cor, tipografia e espaçamento
 * usados nos componentes do protótipo v0.
 *
 * Para atualizar: editar APENAS este arquivo.
 * Todos os componentes importam daqui.
 */

// ── Dark Mode ────────────────────────────────────────────────────────────────

export const DARK = {
  // Base
  bg: "#0F172A",
  bgDeep: "#0A111E",
  surface: "#1E293B",
  surfaceHover: "#263548",
  surface2: "#162032",
  surface3: "#172035",
  border: "#334155",
  borderSubtle: "#1E293B",
  borderDashed: "#334155",

  // Accent
  accent: "#38BDF8",
  accentDeep: "#0EA5E9",
  accentFg: "#0F172A",
  accentMuted: "rgba(56,189,248,0.12)",
  accentGlow: "rgba(14,165,233,0.18)",
  accentRing: "rgba(56,189,248,0.08)",

  // Texto
  fg: "#F1F5F9",
  fgSecondary: "#94A3B8",
  fgMuted: "#748495",
  fgCardMeta: "#7CBFDA",

  // Semântica
  destructive: "#F87171",
  destructiveMuted: "rgba(248,113,113,0.10)",
  destructiveMutedBorder: "rgba(248,113,113,0.25)",
  success: "#34D399",
  successMuted: "rgba(52,211,153,0.10)",
  successMutedBorder: "rgba(52,211,153,0.25)",
  warning: "#FBBF24",
  warningMuted: "rgba(251,191,36,0.10)",
  warningMutedBorder: "rgba(251,191,36,0.25)",
  info: "#38BDF8",
  infoMuted: "rgba(56,189,248,0.10)",
  infoMutedBorder: "rgba(56,189,248,0.25)",

  // Overlay
  overlay: "rgba(0,0,0,0.75)",
  overlayBlur: "rgba(0,0,0,0.70)",

  // Gráficos
  chartFeatured: "#38BDF8",
  chartIpca: "#94A3B8",
  chartBasket1: "#A78BFA",
  chartBasket2: "#F472B6",
  chartBasket3: "#FB923C",
  chartVolume1: "#A78BFA",
  chartVolume2: "#F472B6",
  chartVolume3: "#FB923C",
  chartVolume4: "#2DD4BF",
  chartVolume5: "#E879F9",
  chartVolume6: "#A3E635",

  // Componentes
  cardHighlightBg: "linear-gradient(135deg, #1E3A5F 0%, #1E293B 60%, #162032 100%)",
  cardHighlightBorder: "#2A6496",
  cardHighlightAccentLine: "linear-gradient(90deg, #38BDF8 0%, #0EA5E9 60%, rgba(14,165,233,0) 100%)",
  cardHighlightGlow: "rgba(56,189,248,0.20)",
  cardHighlightDivider: "rgba(56,189,248,0.15)",
  cardHighlightShadow: "0 0 0 1px rgba(56,189,248,0.08), 0 8px 32px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.40)",

  tabInactive: "#475569",
  toggleContainer: "#0F172A",
  badgeAutoBg: "#0F172A",
  badgeAutoText: "#748495",
  dividerFrozenBg: "rgba(30,41,59,0.80)",
  dividerFrozenText: "#475569",
  frozenIndicatorBg: "rgba(116,132,149,0.15)",
  sheetHandle: "#334155",

  // Tipografia
  font: 'var(--font-dm-sans), sans-serif',
  fontBody: 'var(--font-inter), sans-serif',
} as const

// ── Light Mode ───────────────────────────────────────────────────────────────

export const LIGHT = {
  // Base
  bg: "#F8FAFC",
  bgDeep: "#F1F5F9",
  surface: "#FFFFFF",
  surfaceHover: "#F8FAFC",
  surface2: "#F8FAFC",
  surface3: "#FFFFFF",
  border: "#E2E8F0",
  borderSubtle: "#F1F5F9",
  borderDashed: "#CBD5E1",

  // Accent
  accent: "#0369A1",
  accentDeep: "#075985",
  accentFg: "#FFFFFF",
  accentMuted: "rgba(3,105,161,0.10)",
  accentGlow: "rgba(3,105,161,0.30)",
  accentRing: "rgba(3,105,161,0.06)",

  // Texto
  fg: "#0F172A",
  fgSecondary: "#475569",
  fgMuted: "#64748B",
  fgCardMeta: "#0369A1",

  // Semântica
  destructive: "#DC2626",
  destructiveMuted: "rgba(220,38,38,0.10)",
  destructiveMutedBorder: "rgba(220,38,38,0.25)",
  success: "#047857",
  successMuted: "rgba(4,120,87,0.10)",
  successMutedBorder: "rgba(4,120,87,0.25)",
  warning: "#B45309",
  warningMuted: "rgba(180,83,9,0.10)",
  warningMutedBorder: "rgba(180,83,9,0.25)",
  info: "#0369A1",
  infoMuted: "rgba(3,105,161,0.10)",
  infoMutedBorder: "rgba(3,105,161,0.25)",

  // Overlay
  overlay: "rgba(0,0,0,0.40)",
  overlayBlur: "rgba(0,0,0,0.30)",

  // Gráficos
  chartFeatured: "#0369A1",
  chartIpca: "#475569",
  chartBasket1: "#7C3AED",
  chartBasket2: "#DB2777",
  chartBasket3: "#EA580C",
  chartVolume1: "#7C3AED",
  chartVolume2: "#DB2777",
  chartVolume3: "#EA580C",
  chartVolume4: "#0891B2",
  chartVolume5: "#C026D3",
  chartVolume6: "#3F6212",

  // Componentes
  cardHighlightBg: "linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 100%)",
  cardHighlightBorder: "#BAE6FD",
  cardHighlightAccentLine: "linear-gradient(90deg, #0369A1 0%, #0284C7 60%, transparent 100%)",
  cardHighlightGlow: "rgba(3,105,161,0.30)",
  cardHighlightDivider: "rgba(3,105,161,0.15)",
  cardHighlightShadow: "0 0 0 1px rgba(186,230,253,0.5), 0 8px 32px rgba(3,105,161,0.12)",

  tabInactive: "#94A3B8",
  toggleContainer: "#FFFFFF",
  badgeAutoBg: "#DBEAFE",
  badgeAutoText: "#1E40AF",
  dividerFrozenBg: "#F1F5F9",
  dividerFrozenText: "#475569",
  frozenIndicatorBg: "rgba(116,132,149,0.15)",
  sheetHandle: "#CBD5E1",

  // Tipografia
  font: 'var(--font-dm-sans), sans-serif',
  fontBody: 'var(--font-inter), sans-serif',
} as const

// ── Helpers ──────────────────────────────────────────────────────────────────

export type ThemeTokens = typeof DARK

/** Retorna a cor semântica de variação de inflação */
export function variationColor(pct: number, theme: ThemeTokens) {
  if (pct > 0) return theme.destructive
  if (pct < 0) return theme.success
  return theme.fgMuted
}
