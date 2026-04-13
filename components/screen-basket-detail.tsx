// InflaçãoPessoal · Tela: Cesta — Drill-down · Direção A
"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Star,
  Info,
  MoreHorizontal,
  Plus,
  Home,
  ShoppingCart,
  Package,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts"

import { DARK, variationColor } from "./design-tokens"

// ── Tokens (remapped from centralized file) ──────────────────────────────────
const T = {
  bg: DARK.bg,
  bgDeep: DARK.bgDeep,
  surface: DARK.surface,
  surface2: DARK.surface2,
  border: DARK.border,
  borderSubtle: DARK.borderSubtle,
  accent: DARK.accent,
  accentFg: DARK.accentFg,
  textPrimary: DARK.fg,
  textSecondary: DARK.fgSecondary,
  textMuted: DARK.fgMuted,
  success: DARK.success,
  warning: DARK.warning,
  destructive: DARK.destructive,
  ipcaRef: DARK.chartIpca,
  tabInactive: DARK.tabInactive,
  font: DARK.font,
  fontBody: DARK.fontBody,
}

function varColor(pct: number) {
  if (pct > 0) return T.destructive
  if (pct < 0) return T.success
  return T.textMuted
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-semibold tracking-widest uppercase mb-2"
      style={{ color: T.textMuted, fontFamily: T.fontBody }}
    >
      {children}
    </p>
  )
}

// ── Dados do gráfico variação ─────────────────────────────────────────────────
// ── Mensal (jan-nov 2026) ─────────────────────────────────────────────────────
// Cesta completa: 0.45+0.38+0.42+0.35+0.52+0.75-0.15+0.98+0.28+0.62+0.50 = 5.10
// IPCA jan-out: 0.32+0.28+0.35+0.25+0.38+0.50+0.28+0.42+0.35+0.47 = 3.60
const variationData = [
  { mes: "Jan", cesta: 0.45, ipca: 0.32 },
  { mes: "Fev", cesta: 0.38, ipca: 0.28 },
  { mes: "Mar", cesta: 0.42, ipca: 0.35 },
  { mes: "Abr", cesta: 0.35, ipca: 0.25 },
  { mes: "Mai", cesta: 0.52, ipca: 0.38 },
  { mes: "Jun", cesta: 0.75, ipca: 0.50 },
  { mes: "Jul", cesta: -0.15, ipca: 0.28 },
  { mes: "Ago", cesta: 0.98, ipca: 0.42 },
  { mes: "Set", cesta: 0.28, ipca: 0.35 },
  { mes: "Out", cesta: 0.62, ipca: 0.47 },
  { mes: "Nov", cesta: 0.50, ipca: null },
]

// ── Acumulado (2025 congelado + 2026 corrente, encadeado) ────────────────────
// frozen_* = 2025 (sólido). cesta/ipca = 2026 (tracejado/sólido).
// Ponto dez/25 compartilhado para conectar visualmente.
const accumulatedData = [
  // 2025 — congelado (trimestral para legibilidade)
  { mes: "mai 25", frozen_cesta: 0.45, frozen_ipca: 0.42 },
  { mes: "set 25", frozen_cesta: 1.48, frozen_ipca: 1.85 },
  // Transição
  { mes: "dez 25", frozen_cesta: 2.50, frozen_ipca: 3.15, cesta: 2.50, ipca: 3.15 },
  // 2026 — corrente (trimestral)
  { mes: "mar 26", cesta: 3.15, ipca: 3.75 },
  { mes: "jun 26", cesta: 3.72, ipca: 4.28 },
  { mes: "set 26", cesta: 4.88, ipca: 5.08 },
  { mes: "nov 26", cesta: 5.10, ipca: null },
]

// ── Dados da projeção ────────────────────────────────────────────────────────
const projectionData = [
  { label: "Hoje", base: 3500, ot: 3500, pess: 3500 },
  { label: "3m", base: 3620, ot: 3560, pess: 3720 },
  { label: "6m", base: 3750, ot: 3620, pess: 3980 },
  { label: "9m", base: 3890, ot: 3680, pess: 4280 },
  { label: "12m", base: 4040, ot: 3720, pess: 4580 },
]

// ── Accordion item ────────────────────────────────────────────────────────────
interface AccordionItemProps {
  label: string
  weight: string
  total: string
  products?: { name: string; weight: string; total: string; variation: number; inactive?: boolean; firstPurchase?: boolean }[]
}

function AccordionItem({ label, weight, total, products }: AccordionItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-xl overflow-hidden mb-2"
      style={{ background: open ? "rgba(56,189,248,0.05)" : T.surface2, border: `1px solid ${open ? T.accent : T.border}` }}
    >
      <button
        className="w-full flex items-center justify-between px-4 py-3.5"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1 min-w-0 text-left">
          <p className="text-sm font-semibold" style={{ color: T.textPrimary, fontFamily: T.font }}>
            {label}
          </p>
          <p className="text-xs mt-0.5" style={{ color: T.textMuted }}>
            Peso: {weight} · {total}
          </p>
        </div>
        {open ? (
          <ChevronUp size={20} color={T.accent} />
        ) : (
          <ChevronDown size={20} color={T.textSecondary} />
        )}
      </button>

      {open && products && (
        <div style={{ borderTop: `1px solid ${T.borderSubtle}` }}>
          {products.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3"
              style={{
                borderBottom: i < products.length - 1 ? `1px solid ${T.borderSubtle}` : undefined,
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate" style={{ color: p.inactive ? T.textMuted : T.textSecondary, opacity: p.inactive ? 0.6 : 1 }}>
                  {p.name}
                </p>
                <p className="text-[10px]" style={{ color: T.textMuted, opacity: p.inactive ? 0.6 : 1 }}>
                  {p.inactive ? "Sem compras no ano" : `Peso: ${p.weight} · ${p.total}`}
                </p>
              </div>
              {!p.inactive && !p.firstPurchase && (
                <span className="text-xs font-bold shrink-0 ml-3" style={{ color: varColor(p.variation) }}>
                  {p.variation > 0 ? "+" : ""}{p.variation.toFixed(1)}% no ano
                </span>
              )}
              {p.firstPurchase && (
                <span className="text-[10px] shrink-0 ml-3" style={{ color: T.textMuted }}>
                  1ª compra
                </span>
              )}
              {!p.inactive && (
                <ChevronRight size={14} color={T.textMuted} className="shrink-0 ml-1" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Tela principal ─────────────────────────────────────────────────────────────
export function ScreenBasketDetail() {
  const [chartMode, setChartMode] = useState<"mensal" | "acumulado">("mensal")
  const isAcumulado = chartMode === "acumulado"
  const data = isAcumulado ? accumulatedData : variationData

  return (
    <div
      className="relative flex flex-col w-[375px] rounded-[44px] overflow-hidden shadow-2xl"
      style={{ background: T.bg, fontFamily: T.fontBody, minHeight: 812 }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-center pt-4 pb-1">
        <span className="text-sm font-semibold tracking-wide" style={{ color: T.textPrimary }}>9:41</span>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24 px-5 pt-2">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <button
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: T.surface, border: `1px solid ${T.border}` }}
          >
            <ChevronLeft size={18} color={T.textSecondary} />
          </button>
          <h1
            className="text-lg font-bold"
            style={{ color: T.textPrimary, fontFamily: T.font }}
          >
            Cesta completa
          </h1>
        </div>

        {/* 1. Resumo compacto — outline, sem fundo sólido */}
        <div
          className="rounded-[20px] p-4 mb-6"
          style={{
            background: "transparent",
            border: `1px solid ${T.border}`,
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-[10px] mb-1" style={{ color: T.textMuted }}>Inflação (jan-nov)</p>
              <p
                className="text-2xl font-bold leading-none"
                style={{ color: T.destructive, fontFamily: T.font }}
              >
                +5,1%
              </p>
              <p className="text-[10px] mt-1" style={{ color: T.textMuted }}>23 produtos</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] mb-1 flex items-center gap-1 justify-end" style={{ color: T.textMuted }}>
                IPCA (jan-out) <Info size={9} color={T.textMuted} />
              </p>
              <p className="text-xl font-bold" style={{ color: T.textSecondary, fontFamily: T.font }}>
                +3,6%
              </p>
            </div>
          </div>
          <div className="h-px mb-3" style={{ background: T.borderSubtle }} />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] mb-0.5" style={{ color: T.textMuted }}>Gasto total</p>
              <p className="text-base font-bold" style={{ color: T.textPrimary, fontFamily: T.font }}>
                R$&nbsp;38.500
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] mb-0.5" style={{ color: T.textMuted }}>Média mensal (jan-nov)</p>
              <p className="text-base font-bold" style={{ color: T.textPrimary, fontFamily: T.font }}>
                R$&nbsp;3.500<span className="text-xs font-normal" style={{ color: T.textMuted }}>/mês</span>
              </p>
            </div>
          </div>
        </div>

        {/* 2. Gráfico variação */}
        <div
          className="rounded-[20px] p-4 mb-6"
          style={{ background: T.surface, border: `1px solid ${T.border}` }}
        >
          {/* Toggle */}
          <div
            className="flex rounded-2xl p-0.5 mb-4"
            style={{ background: T.bg }}
          >
            {(["mensal", "acumulado"] as const).map((m) => (
              <button
                key={m}
                className="flex-1 py-2 rounded-lg text-xs font-semibold capitalize transition-colors"
                onClick={() => setChartMode(m)}
                style={{
                  background: chartMode === m ? T.accent : "transparent",
                  color: chartMode === m ? T.accentFg : T.textMuted,
                }}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          {/* Subtítulo — só no mensal */}
          {chartMode === "mensal" && (
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: T.textMuted }}
            >
              Variação · 2026
            </p>
          )}

          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={data} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
              <CartesianGrid stroke={T.borderSubtle} strokeDasharray="3 3" vertical={false} />
              <ReferenceLine y={0} stroke={T.border} strokeDasharray="3 3" />
              <XAxis
                dataKey="mes"
                tick={{ fill: T.textMuted, fontSize: isAcumulado ? 8 : 9 }}
                axisLine={false}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{ fill: T.textMuted, fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`}
              />
              <Tooltip
                contentStyle={{ background: DARK.surface3, border: "none", borderRadius: 8, boxShadow: "0 4px 16px rgba(0,0,0,0.40)" }}
                labelStyle={{ color: T.textMuted, fontSize: 11 }}
                formatter={(value: number | null) =>
                  value != null ? [`${value > 0 ? "+" : ""}${value.toFixed(1)}%`] : ["-"]
                }
                itemStyle={{ fontSize: 11 }}
              />

              {/* 2025 congelado (sólido) — sem dados no mensal = não renderiza */}
              <Line
                dataKey="frozen_cesta"
                stroke={T.accent}
                strokeWidth={2}
                dot={{ r: 3, fill: T.accent, strokeWidth: 0 }}
                connectNulls={false}
                name="Cesta (2025)"
              />
              <Line
                dataKey="frozen_ipca"
                stroke={T.ipcaRef}
                strokeWidth={1.5}
                dot={{ r: 2, fill: T.ipcaRef, strokeWidth: 0 }}
                connectNulls={false}
                name="IPCA (2025)"
              />

              {/* Cesta — tracejada (ano corrente) */}
              <Line
                dataKey="cesta"
                stroke={T.accent}
                strokeWidth={2}
                strokeDasharray="8 6"
                dot={{ r: 3, fill: T.accent, strokeWidth: 0 }}
                connectNulls={false}
                name="Cesta completa"
              />
              {/* IPCA sempre sólido */}
              <Line
                dataKey="ipca"
                stroke={T.ipcaRef}
                strokeWidth={1.5}
                dot={{ r: 2, fill: T.ipcaRef, strokeWidth: 0 }}
                connectNulls={false}
                name="IPCA geral"
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Legenda */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <svg width="16" height="8">
                <line x1="0" y1="4" x2="16" y2="4" stroke={T.accent} strokeWidth="2" strokeDasharray="5 3" />
              </svg>
              <span className="text-[10px]" style={{ color: T.textMuted }}>Cesta completa</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="8">
                <line x1="0" y1="4" x2="16" y2="4" stroke={T.ipcaRef} strokeWidth="1.5" />
              </svg>
              <span className="text-[10px]" style={{ color: T.textMuted }}>IPCA geral</span>
            </div>
          </div>

          {/* Disclaimer — padronizado com visão geral */}
          <p className="text-[10px] mt-2 leading-relaxed" style={{ color: T.textMuted }}>
            {chartMode === "mensal"
              ? "Índices do ano corrente (linha tracejada) são recalculados mensalmente para maior precisão."
              : "Linha sólida: anos congelados (definitivos). Linha tracejada: ano corrente (recalculável)."}
          </p>
        </div>

        {/* 3. Comparativo por categoria vs IPCA */}
        <SectionLabel>Comparativo por categoria</SectionLabel>
        <p className="text-[10px] mb-3" style={{ color: T.textMuted }}>Acumulado no ano (jan-nov)</p>

        <div className="flex flex-col gap-2 mb-6">
          {[
            { cat: "Alimentação e Bebidas", peso: "65%", pessoal: 4.8, ipca: 3.5 },
            { cat: "Artigos de Limpeza",    peso: "20%", pessoal: 2.1, ipca: 2.8 },
            { cat: "Higiene e Cuidados",    peso: "15%", pessoal: 3.5, ipca: 2.2 },
          ].map((row) => {
            const acima = row.pessoal > row.ipca
            return (
              <div
                key={row.cat}
                className="rounded-[20px] px-4 py-3.5"
                style={{ background: T.surface, border: `1px solid ${T.border}` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: T.textPrimary, fontFamily: T.font }}>
                      {row.cat}
                    </p>
                    <p className="text-[10px] mt-0.5" style={{ color: T.textMuted }}>Peso: {row.peso}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <span
                        className="text-base font-bold"
                        style={{ color: varColor(row.pessoal), fontFamily: T.font }}
                      >
                        +{row.pessoal.toFixed(1)}%
                      </span>
                    </div>
                    <p className="text-[10px]" style={{ color: T.textSecondary }}>
                      IPCA categoria: +{row.ipca.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 4. Composição da cesta — accordion */}
        <SectionLabel>Composição</SectionLabel>
        <p className="text-[10px] mb-3" style={{ color: T.textMuted }}>Acumulado no ano (jan-nov)</p>
        <div className="mb-6">
          <AccordionItem
            label="Alimentação e Bebidas"
            weight="65%"
            total="R$ 25.025"
            products={[
              { name: "Arroz Camil", weight: "15,8%", total: "R$ 6.080", variation: 2.1 },
              { name: "Café Pilão", weight: "12,5%", total: "R$ 4.810", variation: 7.3 },
              { name: "Leite Integral", weight: "11,5%", total: "R$ 4.430", variation: 3.8 },
              { name: "Feijão Carioca", weight: "9,2%", total: "R$ 3.540", variation: -1.2 },
              { name: "Manteiga Aviação", weight: "4,5%", total: "R$ 1.733", variation: 0, firstPurchase: true },
              { name: "Açúcar União", weight: "—", total: "", variation: 0, inactive: true },
            ]}
          />
          <AccordionItem
            label="Artigos de Limpeza"
            weight="20%"
            total="R$ 7.700"
          />
          <AccordionItem
            label="Higiene e Cuidados"
            weight="15%"
            total="R$ 5.775"
          />
        </div>

        {/* 5. Projeção de custo */}
        <SectionLabel>Projeção de custo</SectionLabel>
        <div
          className="rounded-[20px] p-4 mb-6"
          style={{ background: T.surface, border: `1px solid ${T.border}` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[10px] mb-0.5" style={{ color: T.textMuted }}>Sua cesta hoje</p>
              <p className="text-base font-bold" style={{ color: T.textPrimary, fontFamily: T.font }}>R$ 3.500/mês</p>
              <p className="text-[10px]" style={{ color: T.textMuted }}>(média jan-nov)</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] mb-0.5" style={{ color: T.textMuted }}>Em 12 meses</p>
              <p className="text-base font-bold" style={{ color: T.textPrimary, fontFamily: T.font }}>R$ 4.040/mês</p>
              <p className="text-[10px]" style={{ color: T.textMuted }}>(R$ 3.720 — R$ 4.580)</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={projectionData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid stroke={T.borderSubtle} strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="label"
                tick={{ fill: T.textMuted, fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: T.textMuted, fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                domain={[3300, 4800]}
                tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
              />
              <Tooltip
                contentStyle={{ background: DARK.surface3, border: "none", borderRadius: 8, boxShadow: "0 4px 16px rgba(0,0,0,0.40)" }}
                labelStyle={{ color: T.textMuted, fontSize: 11 }}
                formatter={(value: number, name: string) => [
                  `R$ ${value.toLocaleString("pt-BR")}`,
                  name,
                ]}
                itemStyle={{ fontSize: 11 }}
              />
              <Line dataKey="ot"   stroke={T.success}     strokeWidth={2} dot={{ r: 3, fill: T.success,     strokeWidth: 0 }} name="Otimista" />
              <Line dataKey="base" stroke={T.accent}      strokeWidth={2} dot={{ r: 3, fill: T.accent,      strokeWidth: 0 }} name="Base" />
              <Line dataKey="pess" stroke={T.destructive} strokeWidth={2} dot={{ r: 3, fill: T.destructive, strokeWidth: 0 }} name="Pessimista" />
            </LineChart>
          </ResponsiveContainer>

          {/* Legenda projeção */}
          <div className="flex items-center gap-4 mt-2">
            {[
              { color: T.success, label: "Otimista" },
              { color: T.accent,  label: "Base" },
              { color: T.destructive, label: "Pessimista" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className="w-3 h-0.5 rounded-full" style={{ background: l.color }} />
                <span className="text-[10px]" style={{ color: T.textMuted }}>{l.label}</span>
              </div>
            ))}
          </div>
          {/* Disclaimer */}
          <p className="text-[10px] mt-3 leading-relaxed" style={{ color: T.textMuted }}>
            Projeção estimada com base no seu histórico de compras. Quanto mais compras registradas, melhor a estimativa. Valores reais podem variar conforme mudanças no mercado e na economia.
          </p>
        </div>

        {/* 6. Gestão — cesta completa: só "destaque" (não editável, não excluível) */}
        <SectionLabel>Gestão</SectionLabel>
        <div className="flex flex-col gap-2 mb-2">
          <button
            className="w-full py-3.5 rounded-[20px] text-sm font-semibold flex items-center justify-center gap-2"
            style={{ background: T.surface, border: `1px solid ${T.border}`, color: T.textPrimary }}
          >
            <Star size={15} color={T.warning} />
            Marcar como destaque
          </button>
        </div>

      </div>

      {/* Tab bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-2 pt-3 pb-6"
        style={{ background: T.bgDeep, borderTop: `1px solid ${T.borderSubtle}` }}
      >
        <button className="flex flex-col items-center gap-1">
          <Home size={24} color={T.tabInactive} />
          <span className="text-[10px]" style={{ color: T.tabInactive }}>Home</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <ShoppingCart size={24} color={T.accent} />
          <span className="text-[10px] font-semibold" style={{ color: T.accent }}>Cestas</span>
        </button>
        <button
          className="w-14 h-14 rounded-full flex items-center justify-center -mt-7"
          style={{ background: T.accent, boxShadow: "0 4px 16px rgba(56,189,248,0.4)" }}
        >
          <Plus size={24} strokeWidth={3} color={T.accentFg} />
        </button>
        <button className="flex flex-col items-center gap-1">
          <Package size={24} color={T.tabInactive} />
          <span className="text-[10px]" style={{ color: T.tabInactive }}>Produtos</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <MoreHorizontal size={24} color={T.tabInactive} />
          <span className="text-[10px]" style={{ color: T.tabInactive }}>Mais</span>
        </button>
      </div>
    </div>
  )
}
