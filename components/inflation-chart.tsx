"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

// ── Dados Mensal (2026, ano corrente) ────────────────────────────────────────
// Featured = Casa (destaque, criada mai/2026). Chips: Cesta completa + Padaria.
// Cesta completa tem dados jan-nov. Casa e Padaria têm range menor (null = gap).
// IPCA nov não publicado. Range adaptativo: sem chip = mai-nov, com completa = jan-nov.

// Range só Casa (mai-nov)
const dataMensalCasa = [
  { mes: "mai", featured: 0.85, ipca: 0.38 },
  { mes: "jun", featured: 1.20, ipca: 0.50 },
  { mes: "jul", featured: -0.30, ipca: 0.28 },
  { mes: "ago", featured: 1.45, ipca: 0.42 },
  { mes: "set", featured: 0.35, padaria: -0.55, ipca: 0.35 },
  { mes: "out", featured: 0.90, padaria: -0.40, ipca: 0.47 },
  { mes: "nov", featured: 0.75, padaria: -0.35, ipca: null },
]

// Range expandido com cesta completa (jan-nov)
const dataMensalFull = [
  { mes: "jan", completa: 0.45, ipca: 0.32 },
  { mes: "fev", completa: 0.38, ipca: 0.28 },
  { mes: "mar", completa: 0.42, ipca: 0.35 },
  { mes: "abr", completa: 0.35, ipca: 0.25 },
  { mes: "mai", featured: 0.85, completa: 0.52, ipca: 0.38 },
  { mes: "jun", featured: 1.20, completa: 0.75, ipca: 0.50 },
  { mes: "jul", featured: -0.30, completa: -0.15, ipca: 0.28 },
  { mes: "ago", featured: 1.45, completa: 0.98, ipca: 0.42 },
  { mes: "set", featured: 0.35, completa: 0.28, padaria: -0.55, ipca: 0.35 },
  { mes: "out", featured: 0.90, completa: 0.62, padaria: -0.40, ipca: 0.47 },
  { mes: "nov", featured: 0.75, completa: 0.50, padaria: -0.35, ipca: null },
]

// ── Dados Acumulado ──────────────────────────────────────────────────────────
// Dois datasets: range se adapta às linhas ativas.

// Acumulado só Casa (featured) — range mai 26-nov 26. IPCA acompanha.
const dataAcumuladoCasa = [
  { mes: "mai 26", featured: 0.85, ipca: 0.38 },
  { mes: "jun 26", featured: 2.05, ipca: 0.88 },
  { mes: "jul 26", featured: 1.75, ipca: 1.16 },
  { mes: "ago 26", featured: 3.20, ipca: 1.58 },
  { mes: "set 26", featured: 3.55, ipca: 1.93 },
  { mes: "out 26", featured: 4.45, ipca: 2.40 },
  { mes: "nov 26", featured: 5.20, ipca: null },
]

// Acumulado com Cesta completa — range mai 25-nov 26. Encadeado multi-ano.
// frozen_* = 2025 congelado (sólido). Demais = 2026 corrente (tracejado).
// Ponto dez 25 compartilhado para conectar visualmente.
const dataAcumuladoFull = [
  // 2025 — congelado
  { mes: "mai 25", frozen_completa: 0.45, frozen_ipca: 0.42 },
  { mes: "jul/25", frozen_completa: 0.92, frozen_ipca: 1.10 },
  { mes: "set 25", frozen_completa: 1.48, frozen_ipca: 1.85 },
  { mes: "nov/25", frozen_completa: 2.05, frozen_ipca: 2.60 },
  // Transição
  { mes: "dez 25", frozen_completa: 2.50, frozen_ipca: 3.15, completa: 2.50, ipca: 3.15 },
  // 2026 — corrente
  { mes: "fev 26", completa: 2.95, ipca: 3.52 },
  { mes: "abr 26", completa: 3.30, ipca: 3.90 },
  { mes: "mai 26", featured: 0.85, completa: 3.52, ipca: 4.28 },
  { mes: "jul 26", featured: 1.75, completa: 4.12, ipca: 4.68 },
  { mes: "set 26", featured: 3.55, completa: 4.88, ipca: 5.08 },
  { mes: "nov 26", featured: 5.20, completa: 5.50, ipca: null },
]

interface InflationChartProps {
  cestaColor: string
  ipcaColor: string
  toggleBg: string
  toggleActiveBg: string
  toggleActiveText: string
  toggleInactiveText: string
  basketColor: string
  basketColor2: string
  chipBgColor: string
  chipBorderColor: string
  chipTextColor: string
  noteBgColor: string
  noteTextColor: string
  borderColor: string
  textPrimary: string
  textMuted: string
  gridColor: string
}

export function InflationChart({
  cestaColor,
  ipcaColor,
  toggleBg,
  toggleActiveBg,
  toggleActiveText,
  toggleInactiveText,
  basketColor,
  basketColor2,
  chipBgColor,
  chipBorderColor,
  chipTextColor,
  noteBgColor,
  noteTextColor,
  borderColor,
  textPrimary,
  textMuted,
  gridColor,
}: InflationChartProps) {
  const [view, setView] = useState<"mensal" | "acumulado">("mensal")
  const [completaAtiva, setCompletaAtiva] = useState(false)
  const [padAtivo, setPadAtivo] = useState(false)

  const isAcumulado = view === "acumulado"
  // Range adaptativo em ambos os modos: sem Cesta completa = período de Casa; com = range completo
  const chartData = isAcumulado
    ? (completaAtiva ? dataAcumuladoFull : dataAcumuladoCasa)
    : (completaAtiva ? dataMensalFull : dataMensalCasa)

  return (
    <div className="flex flex-col gap-3">
      {/* Toggle */}
      <div className="flex rounded-2xl p-0.5" style={{ backgroundColor: toggleBg, border: borderColor ? `1px solid ${borderColor}` : undefined }}>
        <button
          onClick={() => setView("mensal")}
          className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all"
          style={{
            backgroundColor: view === "mensal" ? toggleActiveBg : "transparent",
            color: view === "mensal" ? toggleActiveText : toggleInactiveText,
          }}
        >
          Mensal
        </button>
        <button
          onClick={() => setView("acumulado")}
          className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all"
          style={{
            backgroundColor: view === "acumulado" ? toggleActiveBg : "transparent",
            color: view === "acumulado" ? toggleActiveText : toggleInactiveText,
          }}
        >
          Acumulado
        </button>
      </div>

      {/* Subtítulo — só no mensal */}
      {view === "mensal" && (
        <p className="text-sm font-semibold mb-2" style={{ color: textMuted }}>
          Variação · 2026
        </p>
      )}

      {/* Gráfico */}
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <ReferenceLine y={0} stroke={gridColor} strokeDasharray="3 3" />
            <XAxis
              dataKey="mes"
              tick={{ fontSize: isAcumulado ? 9 : 10, fill: textMuted }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: textMuted }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`}
            />
            <Tooltip
              contentStyle={{
                background: "#172035",
                border: "none",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.40)",
              }}
              formatter={(value: number | null) =>
                value != null ? [`${value > 0 ? "+" : ""}${value.toFixed(1)}%`] : ["-"]
              }
            />

            {/* Casa (featured) — tracejada (ano corrente / dados desde criação) */}
            <Line
              type="monotone"
              dataKey="featured"
              stroke={cestaColor}
              strokeWidth={2}
              strokeDasharray="8 6"
              dot={{ r: 3, fill: cestaColor }}
              activeDot={{ r: 5 }}
              connectNulls={false}
            />

            {/* Cesta completa — 2025 congelado (sólida) */}
            {isAcumulado && completaAtiva && (
              <Line
                type="monotone"
                dataKey="frozen_completa"
                stroke={basketColor}
                strokeWidth={1.5}
                dot={{ r: 3, fill: basketColor, strokeWidth: 0 }}
                connectNulls={false}
                name="Completa (congelado)"
              />
            )}

            {/* Cesta completa — 2026 corrente (tracejada) */}
            {completaAtiva && (
              <Line
                type="monotone"
                dataKey="completa"
                stroke={basketColor}
                strokeWidth={1.5}
                strokeDasharray="8 6"
                dot={false}
                connectNulls={false}
                name="Cesta completa"
              />
            )}

            {/* Padaria (só no mensal, não tem dados 2025) */}
            {!isAcumulado && padAtivo && (
              <Line
                type="monotone"
                dataKey="padaria"
                stroke={basketColor2}
                strokeWidth={1.5}
                strokeDasharray="8 6"
                dot={false}
                connectNulls={false}
                name="Padaria"
              />
            )}

            {/* IPCA — 2025 congelado (sólida, sempre visível no acumulado) */}
            {isAcumulado && (
              <Line
                type="monotone"
                dataKey="frozen_ipca"
                stroke={ipcaColor}
                strokeWidth={1.5}
                dot={{ r: 2, fill: ipcaColor }}
                connectNulls={false}
                name="IPCA (congelado)"
              />
            )}

            {/* IPCA — sempre sólido */}
            <Line
              type="monotone"
              dataKey="ipca"
              stroke={ipcaColor}
              strokeWidth={1.5}
              dot={{ r: 2, fill: ipcaColor }}
              activeDot={{ r: 5 }}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legenda fixa — cesta em destaque + IPCA */}
      <div className="flex items-center gap-4 text-xs">
        <span className="flex items-center gap-1.5">
          <svg width="16" height="8">
            <line x1="0" y1="4" x2="16" y2="4" stroke={cestaColor} strokeWidth="2" strokeDasharray="5 3" />
          </svg>
          <span style={{ color: textMuted }} className="text-xs">Casa</span>
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="16" height="8">
            <line x1="0" y1="4" x2="16" y2="4" stroke={ipcaColor} strokeWidth="1.5" />
          </svg>
          <span style={{ color: textMuted }} className="text-xs">IPCA geral</span>
        </span>
      </div>

      {/* Chips — inativas por default, opt-in via toque */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setCompletaAtiva(!completaAtiva)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
          style={{
            background: chipBgColor,
            border: `1px solid ${chipBorderColor}`,
            color: chipTextColor,
            opacity: completaAtiva ? 1 : 0.4,
          }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: basketColor }} />
          Cesta completa
        </button>
        {!isAcumulado && (
          <button
            onClick={() => setPadAtivo(!padAtivo)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              background: chipBgColor,
              border: `1px solid ${chipBorderColor}`,
              color: chipTextColor,
              opacity: padAtivo ? 1 : 0.4,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: basketColor2 }} />
            Padaria
          </button>
        )}
      </div>

      {/* Disclaimer — distinto por modo */}
      <p
        className="text-[11px] leading-relaxed px-3 py-2 rounded-lg"
        style={{ background: noteBgColor, color: noteTextColor }}
      >
        {view === "mensal"
          ? "Índices do ano corrente (linha tracejada) são recalculados mensalmente para maior precisão."
          : "Linha sólida: anos congelados (definitivos). Linha tracejada: ano corrente (recalculável)."}
      </p>
    </div>
  )
}
