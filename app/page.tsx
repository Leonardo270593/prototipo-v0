import DesignSystemBoards from "@/components/design-system-boards"
import { ScreenDirectionA } from "@/components/screen-direction-a"
import { ScreenDirectionALight } from "@/components/screen-direction-a-light"
import { ScreenBasketDetail } from "@/components/screen-basket-detail"
import { ScreenBasketDetailLight } from "@/components/screen-basket-detail-light"
import { ScreenProductDetail } from "@/components/screen-product-detail"
import { ScreenProductDetailLight } from "@/components/screen-product-detail-light"

export default function Page() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A111E" }}>
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-20">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#F1F5F9" }}
          >
            Design System + Telas — Inflacao Pessoal
          </h1>
          <p style={{ color: "#94A3B8" }}>
            Projeto unificado: boards de componentes + telas completas (dark &amp; light)
          </p>
        </header>

        {/* Dark Screens */}
        <section className="space-y-6">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#F1F5F9" }}
          >
            Telas — Dark Mode
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <ScreenDirectionA />
            <ScreenBasketDetail />
            <ScreenProductDetail />
          </div>
        </section>

        {/* Light Screens */}
        <section className="space-y-6">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#F1F5F9" }}
          >
            Telas — Light Mode
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <ScreenDirectionALight />
            <ScreenBasketDetailLight />
            <ScreenProductDetailLight />
          </div>
        </section>

        {/* Design System Boards */}
        <section>
          <DesignSystemBoards />
        </section>
      </div>
    </div>
  )
}
