// InflaçãoPessoal · Direção A Light · WCAG AA
"use client"

import { Home, ShoppingCart, Package, MoreHorizontal, Plus, Info } from "lucide-react"
import { InflationChart } from "./inflation-chart"
import { LIGHT, variationColor } from "./design-tokens"

const T = LIGHT

export function ScreenDirectionALight() {
  return (
    <div
      className="relative flex flex-col w-[375px] min-h-[812px] rounded-[44px] overflow-hidden shadow-2xl"
      style={{ background: T.bg, fontFamily: T.fontBody }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-center pt-4 pb-1">
        <span className="text-sm font-semibold tracking-wide" style={{ color: T.fg }}>9:41</span>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24 px-5 pt-2">

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold" style={{ color: T.fg, fontFamily: T.font }}>
            Cestas
          </h1>
        </div>

        {/* Summary Card */}
        <div
          className="rounded-[24px] p-5 mb-6 relative overflow-hidden"
          style={{
            background: T.cardHighlightBg,
            border: `1px solid ${T.cardHighlightBorder}`,
            boxShadow: T.cardHighlightShadow,
          }}
        >
          <div
            className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full"
            style={{ background: T.cardHighlightAccentLine }}
          />

          <p className="text-xs mb-3 relative z-10" style={{ color: T.fgCardMeta, fontWeight: 600 }}>
            Cesta em destaque · Casa
          </p>

          <div className="flex items-start justify-between mb-4 relative z-10">
            <div>
              <p
                className="text-4xl font-bold leading-tight mb-1"
                style={{ color: T.destructive, fontFamily: T.font }}
              >
                +5,2%
              </p>
              <p className="text-xs" style={{ color: T.fgCardMeta }}>Sua cesta (mai-nov)</p>
              <p className="text-[10px] mt-0.5" style={{ color: T.fgCardMeta }}>12 produtos</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold" style={{ color: T.fgSecondary, fontFamily: T.font }}>+2,4%</p>
              <p className="text-xs flex items-center gap-1 justify-end" style={{ color: T.fgCardMeta }}>
                IPCA (mai-out) <Info size={10} color={T.fgMuted} />
              </p>
              <p className="text-[10px] mt-1" style={{ color: T.fgMuted }}>Acum. no ano: +3,6% (jan-out)</p>
            </div>
          </div>

          <div className="h-px mb-4 relative z-10" style={{ background: T.cardHighlightDivider }} />

          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-xs mb-1" style={{ color: T.fgCardMeta }}>Gasto no ano</p>
              <p className="text-2xl font-bold" style={{ color: T.fg, fontFamily: T.font }}>
                R$&nbsp;17.150
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs mb-1" style={{ color: T.fgCardMeta }}>Média mensal</p>
              <p className="text-2xl font-bold" style={{ color: T.fg, fontFamily: T.font }}>
                R$&nbsp;2.450
              </p>
              <p className="text-xs" style={{ color: T.fgCardMeta }}>(mai-nov)</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-6">
          <p className="text-base font-bold mb-3" style={{ color: T.fg, fontFamily: T.font }}>
            Inflação
          </p>
          <InflationChart
            cestaColor={T.chartFeatured}
            ipcaColor={T.chartIpca}
            toggleBg={T.toggleContainer}
            toggleActiveBg={T.accent}
            toggleActiveText={T.accentFg}
            toggleInactiveText={T.fgMuted}
            basketColor={T.chartBasket1}
            basketColor2={T.chartBasket2}
            chipBgColor={T.surface}
            chipBorderColor={T.border}
            chipTextColor={T.fgMuted}
            noteBgColor={T.bgDeep}
            noteTextColor={T.fgSecondary}
            borderColor={T.border}
            textPrimary={T.fg}
            textMuted={T.fgMuted}
            gridColor={T.borderSubtle}
          />
        </div>

        {/* Basket List */}
        <div className="mb-4">
          <p className="text-base font-bold mb-3" style={{ color: T.fg, fontFamily: T.font }}>
            Suas cestas
          </p>
          <div className="flex flex-col gap-2">

            <div
              className="rounded-[20px] p-6 flex items-center justify-between"
              style={{ background: T.surface, border: `1px solid ${T.border}` }}
            >
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold text-sm" style={{ color: T.fg }}>Cesta completa</p>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-lg font-semibold uppercase tracking-wider"
                    style={{ background: T.badgeAutoBg, color: T.badgeAutoText }}
                  >
                    auto
                  </span>
                </div>
                <p className="text-xs" style={{ color: T.fgMuted }}>Todos os produtos · (jan-nov)</p>
              </div>
              <p className="font-bold text-sm" style={{ color: T.destructive, fontFamily: T.font }}>+5,1%</p>
            </div>

            <div
              className="rounded-[20px] p-6 flex items-center justify-between"
              style={{ background: T.surface, border: `1px solid ${T.border}` }}
            >
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold text-sm" style={{ color: T.fg }}>Casa</p>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-lg font-semibold tracking-wider"
                    style={{ background: "rgba(3,105,161,0.10)", color: T.accent }}
                  >
                    ★ destaque
                  </span>
                </div>
                <p className="text-xs" style={{ color: T.fgMuted }}>12 produtos · (mai-nov)</p>
              </div>
              <p className="font-bold text-sm" style={{ color: T.destructive, fontFamily: T.font }}>+5,2%</p>
            </div>

            <div
              className="rounded-[20px] p-6 flex items-center justify-between"
              style={{ background: T.surface, border: `1px solid ${T.border}` }}
            >
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: T.fg }}>Padaria</p>
                <p className="text-xs" style={{ color: T.fgMuted }}>5 produtos · (set-nov)</p>
              </div>
              <p className="font-bold text-sm" style={{ color: T.success, fontFamily: T.font }}>-1,3%</p>
            </div>

            {/* Cesta sem dados suficientes — sem variação, sem período */}
            <div
              className="rounded-[20px] p-6"
              style={{ background: T.surface, border: `1px solid ${T.border}` }}
            >
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: T.fg }}>Higiene</p>
                <p className="text-xs" style={{ color: T.fgMuted }}>3 produtos</p>
              </div>
            </div>

          </div>
        </div>

        {/* Create basket button */}
        <button
          className="w-full py-4 rounded-[20px] text-sm font-semibold flex items-center justify-center gap-2"
          style={{ background: "transparent", border: `1px dashed ${T.borderDashed}`, color: T.fgMuted }}
        >
          <Plus size={16} />
          Criar nova cesta
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
          <ShoppingCart size={24} color={T.accent} />
          <span className="text-[10px] font-semibold" style={{ color: T.accent }}>Cestas</span>
        </button>
        <button
          className="w-14 h-14 rounded-full flex items-center justify-center -mt-7"
          style={{ background: T.accent, boxShadow: "0 4px 16px rgba(3,105,161,0.25)" }}
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
