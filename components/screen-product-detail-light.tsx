// InflaçãoPessoal · Tela: Produto Individual Light · WCAG AA
"use client"

import { useState } from "react"
import {
  ChevronLeft,
  Pencil,
  Trash2,
  Lock,
  Plus,
  Home,
  ShoppingCart,
  Package,
  MoreHorizontal,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from "recharts"

import { LIGHT, variationColor } from "./design-tokens"

// ── Tokens (remapped from centralized file) ──────────────────────────────────
const T = {
  bg: LIGHT.bg,
  bgDeep: LIGHT.bgDeep,
  surface: LIGHT.surface,
  surface2: LIGHT.surface2,
  border: LIGHT.border,
  borderSubtle: LIGHT.borderSubtle,
  accent: LIGHT.accent,
  accentFg: LIGHT.accentFg,
  textPrimary: LIGHT.fg,
  textSecondary: LIGHT.fgSecondary,
  textMuted: LIGHT.fgMuted,
  success: LIGHT.success,
  warning: LIGHT.warning,
  destructive: LIGHT.destructive,
  ipcaRef: LIGHT.chartIpca,
  tabInactive: LIGHT.tabInactive,
  font: LIGHT.font,
  fontBody: LIGHT.fontBody,
}

// ── Dados dos gráficos (histórico completo 2025+2026) ────────────────────────
// Preço — R$/pacote, uma linha por volume. null = sem compra no mês.
// Linha contínua entre pontos reais (connectNulls=true).
const precoData = [
  // 2025
  { mes: "mai 25", v500: 16.50 },
  { mes: "jul 25", v500: 16.99, v250: 9.49 },
  { mes: "set 25", v500: 17.20 },
  { mes: "nov 25", v500: 17.50, v1k: 36.50 },
  { mes: "dez 25", v500: 17.50, v250: 9.99 },
  // 2026
  { mes: "jan 26", v500: 17.99 },
  { mes: "mar 26", v500: 18.50, v1k: 35.90 },
  { mes: "mai 26", v500: 18.50, v250: 10.99 },
  { mes: "jul 26", v500: 18.99, v250: 11.49 },
  { mes: "ago 26", v500: 20.99, v1k: 39.90 },
  { mes: "out 26", v500: 18.99, v250: 11.99, v1k: 37.50 },
  { mes: "nov 26", v500: 18.99 },
]

// Variação % acumulada (histórico completo). IPCA grupo sincronizado.
const variacaoData = [
  // 2025
  { mes: "jun 25", v500: 0, consolidada: 0, ipca: 0.45 },
  { mes: "jul 25", v500: 3.0, consolidada: 2.1, ipca: 0.77 },
  { mes: "ago 25", v500: 3.0, consolidada: 2.6, ipca: 1.15 },
  { mes: "set 25", v500: 4.2, consolidada: 3.4, ipca: 1.45 },
  { mes: "out 25", v500: 4.2, consolidada: 3.7, ipca: 1.87 },
  { mes: "nov 25", v500: 5.9, consolidada: 4.9, ipca: 2.22 },
  { mes: "dez 25", v500: 5.9, consolidada: 4.6, ipca: 2.50 },
  // 2026
  { mes: "jan 26", v500: 8.7, consolidada: 6.1, ipca: 2.82 },
  { mes: "mar 26", v500: 11.5, consolidada: 8.1, ipca: 3.17 },
  { mes: "mai 26", v500: 11.5, consolidada: 8.5, ipca: 3.55 },
  { mes: "jul 26", v500: 14.1, consolidada: 10.3, ipca: 3.83 },
  { mes: "ago 26", v500: 17.6, consolidada: 12.7, ipca: 4.25 },
  { mes: "set 26", v500: 14.8, consolidada: 11.5, ipca: 4.60 },
  { mes: "out 26", v500: 14.8, consolidada: 12.3, ipca: 5.07 },
  { mes: "nov 26", v500: 14.8, consolidada: 13.4, ipca: null },
]

// ── Compras ───────────────────────────────────────────────────────────────────
// Histórico sincronizado com precoData. Mostra últimas compras (5 registros).
const comprasAgrupadas = [
  {
    label: "Novembro 2026",
    frozen: false,
    items: [
      { data: "10/nov", local: "Atacadão",      vol: "500g", un: "2 un", preco: "R$ 18,99" },
    ],
  },
  {
    label: "Outubro 2026",
    frozen: false,
    items: [
      { data: "20/out", local: "Pão de Açúcar", vol: "1kg",  un: "1 un", preco: "R$ 37,50" },
      { data: "05/out", local: "Atacadão",      vol: "250g", un: "2 un", preco: "R$ 11,99" },
      { data: "02/out", local: "Atacadão",      vol: "500g", un: "1 un", preco: "R$ 18,99" },
    ],
  },
  {
    label: "Dezembro 2025",
    frozen: true,
    items: [
      { data: "18/dez", local: "Atacadão",      vol: "500g", un: "2 un", preco: "R$ 17,50" },
    ],
  },
]

// ── Sub-componentes ───────────────────────────────────────────────────────────
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

interface PurchaseItemProps {
  data: string
  local: string
  vol: string
  un: string
  preco: string
  frozen: boolean
}

function PurchaseItem({ data, local, vol, un, preco, frozen }: PurchaseItemProps) {
  return (
    <div
      className="flex items-center justify-between py-3.5"
      style={{ borderBottom: `1px solid ${T.borderSubtle}`, opacity: frozen ? 0.65 : 1 }}
    >
      <div className="flex-1 min-w-0 pr-2">
        <p
          className="text-sm font-semibold leading-snug"
          style={{ color: frozen ? T.textSecondary : T.textPrimary, fontFamily: T.font }}
        >
          {data} · {local}
        </p>
        <p className="text-[10px] mt-0.5" style={{ color: T.textMuted }}>
          {vol} · {un}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-sm font-bold" style={{ color: T.textPrimary, fontFamily: T.font }}>
          {preco}
        </span>
        {!frozen && (
          <>
            <button
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: T.surface, border: `1px solid ${T.border}` }}
            >
              <Pencil size={12} color={T.textMuted} />
            </button>
            <button
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: LIGHT.destructiveMuted, border: `1px solid ${LIGHT.destructiveMutedBorder}` }}
            >
              <Trash2 size={12} color={T.destructive} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Tela principal ────────────────────────────────────────────────────────────
export function ScreenProductDetailLight() {
  const [chartMode, setChartMode] = useState<"preco" | "variacao">("preco")
  const [activeFilter, setActiveFilter] = useState<string>("Todos")
  const filters = ["Todos", "Atacadão", "Pão de Açúcar"]

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
        <div className="flex items-center gap-3 mb-4">
          <button
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: T.surface, border: `1px solid ${T.border}` }}
          >
            <ChevronLeft size={18} color={T.textSecondary} />
          </button>
          <h1
            className="text-lg font-bold leading-tight"
            style={{ color: T.textPrimary, fontFamily: T.font }}
          >
            Café Pilão Tradicional
          </h1>
        </div>

        {/* 1. Resumo por volume */}
        <div className="mb-8">
          <p className="text-xs mb-4" style={{ color: T.textMuted }}>
            Alimentação e Bebidas · Café Moído
          </p>

          {/* Resumo por volume */}
          <SectionLabel>Resumo por volume</SectionLabel>
          <p className="text-[10px] mb-3" style={{ color: T.textMuted }}>Últimos 12 meses (dez/25–nov/26)</p>

          {/* Volume cards */}
          <div className="flex flex-col gap-2">
            {/* Min/Méd/Máx = últimos 12 meses corridos (dez/25-nov/26). Sincronizado com precoData. */}
            {[
              { vol: "250g", min: "9,99",  med: "11,12", max: "11,99", ultimo: "R$ 11,99 (out/26)", local: "Atacadão" },
              { vol: "500g", min: "17,50", med: "18,80", max: "20,99", ultimo: "R$ 18,99 (nov/26)", local: "Atacadão" },
              { vol: "1kg",  min: "35,90", med: "37,77", max: "39,90", ultimo: "R$ 37,50 (out/26)", local: "Pão de Açúcar" },
            ].map((v) => (
              <div
                key={v.vol}
                className="rounded-[20px] px-4 py-3"
                style={{ background: T.surface, border: `1px solid ${T.border}` }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: T.textPrimary, fontFamily: T.font }}>
                  {v.vol}
                </p>
                <p className="text-[10px] mb-0.5" style={{ color: T.textMuted }}>
                  Último: <span style={{ color: T.textSecondary }}>{v.ultimo}</span>
                </p>
                <p className="text-[10px] mb-1" style={{ color: T.textMuted }}>
                  Melhor preço médio: <span style={{ color: T.accent }}>{v.local}</span>
                </p>
                <div className="flex items-center justify-between text-[10px]" style={{ color: T.textMuted }}>
                  <span>Mínimo: <span className="font-semibold" style={{ color: T.success }}>R$ {v.min}</span></span>
                  <span>Médio: <span className="font-semibold" style={{ color: T.textSecondary }}>R$ {v.med}</span></span>
                  <span>Máximo: <span className="font-semibold" style={{ color: T.destructive }}>R$ {v.max}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Gráfico com toggle */}
        <div
          className="rounded-[20px] p-4 mb-5"
          style={{ background: T.surface, border: `1px solid ${T.border}` }}
        >
          {/* Toggle */}
          <div
            className="flex rounded-2xl p-0.5 mb-4"
            style={{ background: LIGHT.toggleContainer, border: `1px solid ${T.border}` }}
          >
            {([
              { key: "preco", label: "Preço" },
              { key: "variacao", label: "Variação" },
            ] as const).map((m) => (
              <button
                key={m.key}
                className="flex-1 py-2 rounded-lg text-xs font-semibold transition-colors"
                onClick={() => setChartMode(m.key)}
                style={{
                  background: chartMode === m.key ? T.accent : "transparent",
                  color: chartMode === m.key ? T.accentFg : T.textMuted,
                }}
              >
                {m.label}
              </button>
            ))}
          </div>

          <p
            className="text-sm font-semibold mb-3"
            style={{ color: T.textMuted }}
          >
            {chartMode === "preco" ? "Preço · Histórico" : "Variação acumulada · Histórico"}
          </p>

          {/* Gráfico Preço */}
          {chartMode === "preco" && (
            <>
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={precoData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke={T.borderSubtle} strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="mes"
                    tick={{ fill: T.textMuted, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    interval={2}
                  />
                  <YAxis
                    tick={{ fill: T.textMuted, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `R$ ${v}`}
                    domain={[7, 42]}
                  />
                  <Tooltip
                    contentStyle={{ background: LIGHT.surface3, border: "none", borderRadius: 8, boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
                    labelStyle={{ color: T.textMuted, fontSize: 11 }}
                    formatter={(value: number | null, name: string) =>
                      value == null ? ["-", name] : [`R$ ${value.toFixed(2)}`, name]
                    }
                    itemStyle={{ fontSize: 11 }}
                  />
                  {/* connectNulls=true: linha contínua entre pontos reais (premissa) */}
                  <Line
                    dataKey="v250"
                    stroke={LIGHT.chartVolume1}
                    strokeWidth={2}
                    connectNulls={true}
                    dot={(props: { cx: number; cy: number; value: number | null }) =>
                      props.value != null ? (
                        <circle key={`v250-${props.cx}`} cx={props.cx} cy={props.cy} r={3} fill={LIGHT.chartVolume1} stroke="none" />
                      ) : <g key={`v250-empty-${props.cx}`} />
                    }
                    name="250g"
                  />
                  <Line
                    dataKey="v500"
                    stroke={LIGHT.chartVolume2}
                    strokeWidth={2}
                    connectNulls={true}
                    dot={(props: { cx: number; cy: number; value: number | null }) =>
                      props.value != null ? (
                        <circle key={`v500-${props.cx}`} cx={props.cx} cy={props.cy} r={3} fill={LIGHT.chartVolume2} stroke="none" />
                      ) : <g key={`v500-empty-${props.cx}`} />
                    }
                    name="500g"
                  />
                  <Line
                    dataKey="v1k"
                    stroke={LIGHT.chartVolume3}
                    strokeWidth={2}
                    connectNulls={true}
                    dot={(props: { cx: number; cy: number; value: number | null }) =>
                      props.value != null ? (
                        <circle key={`v1k-${props.cx}`} cx={props.cx} cy={props.cy} r={3} fill={LIGHT.chartVolume3} stroke="none" />
                      ) : <g key={`v1k-empty-${props.cx}`} />
                    }
                    name="1kg"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2">
                {[
                  { color: LIGHT.chartVolume1, label: "250g" },
                  { color: LIGHT.chartVolume2, label: "500g" },
                  { color: LIGHT.chartVolume3, label: "1kg" },
                ].map((l) => (
                  <div key={l.label} className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 rounded-full" style={{ background: l.color }} />
                    <span className="text-[10px]" style={{ color: T.textMuted }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Gráfico Variação */}
          {chartMode === "variacao" && (
            <>
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={variacaoData} margin={{ top: 4, right: 4, left: -20, bottom: 8 }}>
                  <CartesianGrid stroke={T.borderSubtle} strokeDasharray="3 3" vertical={false} />
                  <ReferenceLine y={0} stroke={T.border} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="mes"
                    tick={{ fill: T.textMuted, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    interval={2}
                    padding={{ left: 8 }}
                  />
                  <YAxis
                    tick={{ fill: T.textMuted, fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`}
                  />
                  <Tooltip
                    contentStyle={{ background: LIGHT.surface3, border: "none", borderRadius: 8, boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
                    labelStyle={{ color: T.textMuted, fontSize: 11 }}
                    formatter={(value: number | null, name: string) =>
                      value != null ? [`${value > 0 ? "+" : ""}${value.toFixed(1)}%`, name] : ["-", name]
                    }
                    itemStyle={{ fontSize: 11 }}
                  />
                  <Line
                    dataKey="v500"
                    stroke={LIGHT.chartVolume2}
                    strokeWidth={1.5}
                    connectNulls={true}
                    dot={{ r: 2, fill: LIGHT.chartVolume2, strokeWidth: 0 }}
                    name="500g (mais comprado)"
                  />
                  <Line
                    dataKey="consolidada"
                    stroke={T.accent}
                    strokeWidth={2}
                    connectNulls={true}
                    dot={{ r: 3, fill: T.accent, strokeWidth: 0 }}
                    name="Todos volumes"
                  />
                  {/* IPCA sempre sólido */}
                  <Line
                    dataKey="ipca"
                    stroke={T.ipcaRef}
                    strokeWidth={1.5}
                    dot={{ r: 2, fill: T.ipcaRef, strokeWidth: 0 }}
                    connectNulls={false}
                    name="IPCA Alimentação e Bebidas"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 rounded-full" style={{ background: LIGHT.chartVolume2 }} />
                    <span className="text-[10px]" style={{ color: T.textMuted }}>500g (mais comprado)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 rounded-full" style={{ background: T.accent }} />
                    <span className="text-[10px]" style={{ color: T.textMuted }}>Todos volumes</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-3 h-0.5 rounded-full" style={{ background: T.ipcaRef }} />
                  <span className="text-[10px]" style={{ color: T.textMuted }}>IPCA Alimentação e Bebidas</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Filtros de estabelecimento */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
              style={{
                background: activeFilter === f ? LIGHT.accentMuted : "transparent",
                color: activeFilter === f ? T.accent : T.textSecondary,
                border: activeFilter === f ? `1px solid rgba(3,105,161,0.30)` : `1px solid ${T.border}`,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 3. Histórico de compras */}
        <SectionLabel>Histórico de compras</SectionLabel>

        {comprasAgrupadas.map((grupo, gi) => (
          <div key={gi} className={gi > 0 ? "mt-4 mb-1" : "mb-1"}>
            <div className="flex items-center gap-2 mb-2">
              <p
                className="text-xs font-bold"
                style={{ color: T.textMuted, fontFamily: T.font }}
              >
                {grupo.label}
              </p>
              {grupo.frozen && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: LIGHT.frozenIndicatorBg, border: `1px solid ${T.borderSubtle}` }}>
                  <Lock size={9} color={T.textMuted} />
                  <span className="text-[9px] font-semibold" style={{ color: T.textMuted }}>congelado</span>
                </div>
              )}
            </div>
            {grupo.items.map((c, i) => (
              <PurchaseItem key={i} data={c.data} local={c.local} vol={c.vol} un={c.un} preco={c.preco} frozen={grupo.frozen} />
            ))}
          </div>
        ))}

        {/* Ver todos */}
        <button
          className="w-full py-4 text-sm font-semibold text-center"
          style={{ color: T.accent }}
        >
          Ver todos (23)
        </button>

      </div>

      {/* Tab bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-2 pt-3 pb-6"
        style={{ background: T.surface, borderTop: `1px solid ${T.border}` }}
      >
        <button className="flex flex-col items-center gap-1">
          <Home size={24} color={T.tabInactive} />
          <span className="text-[10px]" style={{ color: T.tabInactive }}>Home</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <ShoppingCart size={24} color={T.tabInactive} />
          <span className="text-[10px]" style={{ color: T.tabInactive }}>Cestas</span>
        </button>
        <button
          className="w-14 h-14 rounded-full flex items-center justify-center -mt-7"
          style={{ background: T.accent, boxShadow: `0 4px 16px rgba(3,105,161,0.25)` }}
        >
          <Plus size={24} strokeWidth={3} color={T.accentFg} />
        </button>
        <button className="flex flex-col items-center gap-1">
          <Package size={24} color={T.accent} />
          <span className="text-[10px] font-semibold" style={{ color: T.accent }}>Produtos</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <MoreHorizontal size={24} color={T.tabInactive} />
          <span className="text-[10px]" style={{ color: T.tabInactive }}>Mais</span>
        </button>
      </div>
    </div>
  )
}
