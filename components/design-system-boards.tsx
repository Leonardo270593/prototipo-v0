export default function DesignSystemBoards() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0A111E' }}>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Design System — Inflação Pessoal
          </h1>
          <p style={{ color: '#94A3B8' }}>
            Componentes visuais renderizados · Dark Mode
          </p>
        </header>

        {/* Board 1 - Tipografia */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 1 — Tipografia
          </h2>
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <div className="space-y-2">
              <div className="text-[36px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
                +4,2%
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>stat-large · DM Sans 36px Bold</p>
            </div>

            <div className="space-y-2">
              <div className="text-[24px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
                R$ 19.950
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>stat-medium · DM Sans 24px Bold</p>
            </div>

            <div className="space-y-2">
              <div className="text-[20px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
                R$ 2.850
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>stat-small · DM Sans 20px Bold</p>
            </div>

            <div className="space-y-2">
              <div className="text-[24px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
                Inflação · 2026
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>heading · DM Sans 24px Bold</p>
            </div>

            <div className="space-y-2">
              <div className="text-base font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
                Suas cestas
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>subheading · DM Sans 16px Bold</p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-normal" style={{ color: '#F1F5F9' }}>
                Índices do ano corrente são recalculados mensalmente.
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>body · Inter 14px Regular</p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>
                Alimentação e Bebidas
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>body-semibold · Inter 14px SemiBold</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-normal" style={{ color: '#94A3B8' }}>
                8 produtos · (mai-nov)
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>caption · Inter 12px Regular</p>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>
                Gasto no ano
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>label · Inter 11px Medium</p>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#748495' }}>
                AUTO
              </div>
              <p className="text-sm" style={{ color: '#748495' }}>tag · Inter 10px SemiBold uppercase</p>
            </div>
          </div>
        </section>

        {/* Board 2 - Cores */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 2 — Cores
          </h2>
          
          {/* Base Colors */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Base</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#0F172A' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>background</p>
                <p className="text-xs" style={{ color: '#748495' }}>#0F172A</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#0A111E' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>background-deep</p>
                <p className="text-xs" style={{ color: '#748495' }}>#0A111E</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>surface</p>
                <p className="text-xs" style={{ color: '#748495' }}>#1E293B</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#263548' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>surface-hover</p>
                <p className="text-xs" style={{ color: '#748495' }}>#263548</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#162032' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>surface-2</p>
                <p className="text-xs" style={{ color: '#748495' }}>#162032</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#172035' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>surface-3</p>
                <p className="text-xs" style={{ color: '#748495' }}>#172035</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#334155' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>border</p>
                <p className="text-xs" style={{ color: '#748495' }}>#334155</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#1E293B' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>border-subtle</p>
                <p className="text-xs" style={{ color: '#748495' }}>#1E293B</p>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Texto</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F1F5F9' }}>
                  <span className="font-semibold" style={{ color: '#0F172A' }}>Aa</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>foreground</p>
                <p className="text-xs" style={{ color: '#748495' }}>#F1F5F9</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#94A3B8' }}>
                  <span className="font-semibold" style={{ color: '#0F172A' }}>Aa</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>foreground-secondary</p>
                <p className="text-xs" style={{ color: '#748495' }}>#94A3B8</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#748495' }}>
                  <span className="font-semibold" style={{ color: '#F1F5F9' }}>Aa</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>foreground-muted</p>
                <p className="text-xs" style={{ color: '#748495' }}>#748495</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7CBFDA' }}>
                  <span className="font-semibold" style={{ color: '#0F172A' }}>Aa</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>foreground-card-meta</p>
                <p className="text-xs" style={{ color: '#748495' }}>#7CBFDA</p>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Accent (Identidade de marca)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#38BDF8' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>accent</p>
                <p className="text-xs" style={{ color: '#748495' }}>#38BDF8</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#0EA5E9' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>accent-deep</p>
                <p className="text-xs" style={{ color: '#748495' }}>#0EA5E9</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0F172A' }}>
                  <span className="font-semibold" style={{ color: '#38BDF8' }}>Aa</span>
                </div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>accent-foreground</p>
                <p className="text-xs" style={{ color: '#748495' }}>#0F172A</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: 'rgba(56,189,248,0.12)' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>accent-muted</p>
                <p className="text-xs" style={{ color: '#748495' }}>rgba(56,189,248,0.12)</p>
              </div>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Semântica de Variação</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#F87171' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Inflação subiu (+)</p>
                <p className="text-xs" style={{ color: '#748495' }}>#F87171</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#34D399' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Inflação caiu (-)</p>
                <p className="text-xs" style={{ color: '#748495' }}>#34D399</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#748495' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Variação zero</p>
                <p className="text-xs" style={{ color: '#748495' }}>#748495</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#94A3B8' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>IPCA referência</p>
                <p className="text-xs" style={{ color: '#748495' }}>#94A3B8</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#FBBF24' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>warning</p>
                <p className="text-xs" style={{ color: '#748495' }}>#FBBF24</p>
              </div>
            </div>
          </div>

          {/* Chart Colors - Cestas */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Gráficos — Cestas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#38BDF8' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Featured (cyan)</p>
                <p className="text-xs" style={{ color: '#748495' }}>#38BDF8</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#0EA5E9' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>IPCA</p>
                <p className="text-xs" style={{ color: '#748495' }}>#0EA5E9</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#A78BFA' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Cesta 1 (violeta)</p>
                <p className="text-xs" style={{ color: '#748495' }}>#A78BFA</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#F472B6' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Cesta 2 (rosa)</p>
                <p className="text-xs" style={{ color: '#748495' }}>#F472B6</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#FB923C' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Cesta 3 (âmbar)</p>
                <p className="text-xs" style={{ color: '#748495' }}>#FB923C</p>
              </div>
            </div>
          </div>

          {/* Chart Colors - Volumes */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Gráficos — Volumes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#A78BFA' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Volume 1</p>
                <p className="text-xs" style={{ color: '#748495' }}>#A78BFA</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#F472B6' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Volume 2</p>
                <p className="text-xs" style={{ color: '#748495' }}>#F472B6</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#FB923C' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Volume 3</p>
                <p className="text-xs" style={{ color: '#748495' }}>#FB923C</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#2DD4BF' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Volume 4</p>
                <p className="text-xs" style={{ color: '#748495' }}>#2DD4BF</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#E879F9' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Volume 5</p>
                <p className="text-xs" style={{ color: '#748495' }}>#E879F9</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 rounded-lg" style={{ backgroundColor: '#A3E635' }}></div>
                <p className="text-xs font-semibold" style={{ color: '#F1F5F9' }}>Volume 6</p>
                <p className="text-xs" style={{ color: '#748495' }}>#A3E635</p>
              </div>
            </div>
          </div>
        </section>

        {/* Board 3 - Botões */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 3 — Botões
          </h2>
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Headers */}
            <div className="grid grid-cols-5 gap-4 text-center">
              <div></div>
              <div className="text-xs font-semibold" style={{ color: '#94A3B8' }}>Default</div>
              <div className="text-xs font-semibold" style={{ color: '#94A3B8' }}>Pressed</div>
              <div className="text-xs font-semibold" style={{ color: '#94A3B8' }}>Disabled</div>
              <div className="text-xs font-semibold" style={{ color: '#94A3B8' }}>Loading</div>
            </div>

            {/* Primary */}
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Primary</div>
              <button className="px-4 py-2 rounded-full text-sm font-semibold transition-colors" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                Adicionar
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#0EA5E9', color: '#0F172A' }}>
                Adicionar
              </button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold" style={{ backgroundColor: '#1E293B', color: '#748495', border: '1px dashed #334155' }}>Adicionar</button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: '#1E293B', color: '#748495', border: '1px dashed #334155' }}>
                <svg className="animate-spin w-4 h-4" style={{ color: '#38BDF8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Adicionar
              </button>
            </div>

            {/* Secondary */}
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Secondary</div>
              <button className="px-4 py-2 rounded-full text-sm font-semibold transition-colors" style={{ backgroundColor: 'transparent', border: '1px solid #334155', color: '#F1F5F9' }}>
                Cancelar
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#263548', border: '1px solid #334155', color: '#F1F5F9' }}>
                Cancelar
              </button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold" style={{ backgroundColor: 'transparent', color: '#748495', border: '1px dashed #334155' }}>Cancelar</button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: 'transparent', color: '#F1F5F9', border: '1px solid #334155' }}>
                <svg className="animate-spin w-4 h-4" style={{ color: '#F1F5F9' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Cancelar
              </button>
            </div>

            {/* Ghost */}
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Ghost</div>
              <button className="px-4 py-2 rounded-full text-sm font-semibold transition-colors" style={{ backgroundColor: 'transparent', color: '#38BDF8', border: '1px dashed #334155' }}>
                Detalhes
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(56,189,248,0.12)', color: '#38BDF8' }}>
                Detalhes
              </button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold" style={{ backgroundColor: 'transparent', color: '#748495', border: '1px dashed #334155' }}>Detalhes</button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: 'transparent', color: '#38BDF8', border: '1px dashed #334155' }}>
                <svg className="animate-spin w-4 h-4" style={{ color: '#38BDF8' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Detalhes
              </button>
            </div>

            {/* Destructive */}
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Destructive</div>
              <button className="px-4 py-2 rounded-full text-sm font-semibold transition-colors" style={{ backgroundColor: 'transparent', border: '1px solid #F87171', color: '#F87171' }}>
                Excluir
              </button>
              <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#F87171', border: '1px solid #F87171', color: '#0F172A' }}>
                Excluir
              </button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold" style={{ backgroundColor: 'transparent', color: '#748495', border: '1px dashed #334155' }}>Excluir</button>
              <button className="py-2 px-4 rounded-full text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: 'transparent', color: '#F87171', border: '1px solid #F87171' }}>
                <svg className="animate-spin w-4 h-4" style={{ color: '#F87171' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Excluir
              </button>
            </div>
          </div>
        </section>

        {/* Board 4 - Inputs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 4 — Inputs
          </h2>
          
          {/* Basic Input States */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Estados básicos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Default */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Nome do produto</label>
                  <input 
                    type="text" 
                    placeholder="0,00"
                    className="w-full pl-12 pr-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  />
                <p className="text-xs" style={{ color: '#748495' }}>Default</p>
              </div>

              {/* Focused */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Nome do produto</label>
                <input 
                  type="text" 
                  value="Café Pilão"
                  readOnly
                  className="w-full px-4 py-3 rounded-[12px] text-sm"
                  style={{ backgroundColor: '#162032', border: '2px solid #38BDF8', color: '#F1F5F9', outline: 'none', boxShadow: '0 0 0 3px rgba(56,189,248,0.12)' }}
                />
                <p className="text-xs" style={{ color: '#748495' }}>Focused</p>
              </div>

              {/* Error */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Nome do produto</label>
                <input 
                  type="text" 
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-[12px] text-sm"
                  style={{ backgroundColor: '#162032', border: '1px solid #F87171', color: '#F1F5F9' }}
                />
                <p className="text-xs" style={{ color: '#F87171' }}>Campo obrigatório</p>
              </div>

              {/* Disabled */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide opacity-40" style={{ color: '#748495' }}>Nome do produto</label>
                <input 
                  type="text" 
                  value="Café Pilão 500g"
                  disabled
                  className="w-full px-4 py-3 rounded-[12px] text-sm opacity-40 cursor-not-allowed"
                  style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', color: '#F1F5F9' }}
                />
                <p className="text-xs" style={{ color: '#748495' }}>Disabled</p>
              </div>
            </div>
          </div>

          {/* Input with Icon + Select */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Input com ícone e Select</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input with Icon */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Preço</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: '#94A3B8' }}>R$</span>
                  <input 
                    type="text" 
                    placeholder="0,00"
                    className="w-full pl-12 pr-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  />
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Input com ícone</p>
              </div>

              {/* Select Closed */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Categoria</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-[12px] text-sm appearance-none"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  >
                    <option>Selecione...</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Select fechado</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Select Open */}
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Categoria</label>
                <div className="relative">
                  <div className="w-full px-4 py-3 rounded-t-[12px] text-sm" style={{ backgroundColor: '#162032', border: '1px solid #38BDF8', borderBottom: 'none', color: '#F1F5F9' }}>
                    Selecione...
                  </div>
                  <svg className="absolute right-4 top-4 w-4 h-4 pointer-events-none rotate-180" style={{ color: '#38BDF8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Dropdown */}
                  <div className="rounded-b-xl overflow-hidden" style={{ backgroundColor: '#162032', border: '1px solid #38BDF8', borderTop: 'none' }}>
                    <div className="px-4 py-3 hover:bg-[#1E293B] cursor-pointer transition-colors">
                      <p className="text-sm" style={{ color: '#F1F5F9' }}>Alimentação e Bebidas</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#1E293B] cursor-pointer transition-colors">
                      <p className="text-sm" style={{ color: '#F1F5F9' }}>Artigos de Limpeza</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#1E293B] cursor-pointer transition-colors">
                      <p className="text-sm" style={{ color: '#F1F5F9' }}>Higiene e Cuidados</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Select aberto</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Search Bar</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Empty */}
              <div className="space-y-2">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Buscar produto..."
                    className="w-full pl-12 pr-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  />
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Vazio</p>
              </div>

              {/* With Text (no dropdown) */}
              <div className="space-y-2">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    value="café"
                    readOnly
                    className="w-full pl-12 pr-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  />
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Com texto</p>
              </div>

              {/* With Results Dropdown */}
              <div className="space-y-2">
                <div className="relative">
                  <svg className="absolute left-4 top-4 w-5 h-5" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    value="café"
                    readOnly
                    className="w-full pl-12 pr-4 py-3 rounded-t-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #38BDF8', borderBottom: 'none', color: '#F1F5F9', outline: 'none' }}
                  />
                  {/* Dropdown */}
                  <div className="rounded-b-[12px] overflow-hidden" style={{ backgroundColor: '#162032', border: '1px solid #38BDF8', borderTop: 'none' }}>
                    {/* Header PRODUTOS */}
                    <div className="px-3 py-2" style={{ backgroundColor: '#0F172A' }}>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#748495' }}>PRODUTOS</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#1E293B] cursor-pointer transition-colors">
                      <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Café Pilão 500g</p>
                      <p className="text-xs" style={{ color: '#748495' }}>Alimentação e Bebidas</p>
                    </div>
                    
                    {/* Header TIPOS */}
                    <div className="px-3 py-2 mt-1" style={{ backgroundColor: '#0F172A' }}>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#748495' }}>TIPOS</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#1E293B] cursor-pointer transition-colors">
                      <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Café Moído</p>
                      <p className="text-xs" style={{ color: '#748495' }}>Alimentação e Bebidas</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Com resultados</p>
              </div>

              {/* No Results */}
              <div className="space-y-2">
                <div className="relative">
                  <svg className="absolute left-4 top-4 w-5 h-5" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    value="xyz123"
                    readOnly
                    className="w-full pl-12 pr-4 py-3 rounded-t-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', borderBottom: 'none', color: '#F1F5F9' }}
                  />
                  {/* No Results Dropdown */}
                  <div className="rounded-b-[12px] p-6 text-center space-y-3" style={{ backgroundColor: '#162032', border: '1px solid #334155', borderTop: 'none' }}>
                    <svg className="w-10 h-10 mx-auto" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm" style={{ color: '#94A3B8' }}>Nenhum resultado encontrado</p>
                    <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ color: '#38BDF8' }}>
                      Criar novo produto
                    </button>
                  </div>
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Sem resultados</p>
              </div>
            </div>
          </div>

          {/* Form Group */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Form Group Completo</h3>
            
            {/* Exemplo 1: Com helper text */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Volume</label>
                  <input 
                    type="text" 
                    placeholder="500"
                    className="w-full px-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  />
                  <p className="text-xs" style={{ color: '#748495' }}>Ex: 500, 1000</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Unidade</label>
                  <select className="w-full px-4 py-3 rounded-[12px] text-sm appearance-none" style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}>
                    <option>g</option>
                    <option>kg</option>
                    <option>ml</option>
                    <option>L</option>
                  </select>
                  <p className="text-xs" style={{ color: '#748495' }}>Selecione a unidade</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Preço</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: '#94A3B8' }}>R$</span>
                  <input 
                    type="text" 
                    placeholder="0,00"
                    className="w-full pl-12 pr-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}
                  />
                </div>
                <p className="text-xs" style={{ color: '#748495' }}>Preço pago no produto</p>
              </div>
            </div>

            {/* Exemplo 2: Com error text */}
            <div className="space-y-4 pt-4" style={{ borderTop: '1px solid #334155' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Volume</label>
                  <input 
                    type="text" 
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #F87171', color: '#F1F5F9' }}
                  />
                  <p className="text-xs" style={{ color: '#F87171' }}>Campo obrigatório</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Unidade</label>
                  <select className="w-full px-4 py-3 rounded-[12px] text-sm appearance-none" style={{ backgroundColor: '#162032', border: '1px solid #F87171', color: '#F1F5F9' }}>
                    <option>Selecione...</option>
                  </select>
                  <p className="text-xs" style={{ color: '#F87171' }}>Selecione uma unidade</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Preço</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: '#94A3B8' }}>R$</span>
                  <input 
                    type="text" 
                    value="9999,99"
                    readOnly
                    className="w-full pl-12 pr-4 py-3 rounded-[12px] text-sm"
                    style={{ backgroundColor: '#162032', border: '1px solid #FBBF24', color: '#F1F5F9' }}
                  />
                </div>
                <p className="text-xs" style={{ color: '#FBBF24' }}>Preço muito acima da média</p>
              </div>
            </div>
          </div>
        </section>

        {/* Board 5 - Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 5 — Cards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Padrão */}
            <div className="space-y-2">
              <div className="rounded-[20px] p-6 space-y-4" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Alimentação e Bebidas</p>
                    <p className="text-xs" style={{ color: '#748495' }}>Peso: 67,3% · R$ 12.430</p>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold" style={{ color: '#F87171' }}>+4,8%</div>
                    <p className="text-[10px]" style={{ color: '#94A3B8' }}>IPCA +3,5%</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Card padrão</p>
            </div>

            {/* Card Hero */}
            <div className="space-y-2">
              <div className="rounded-[24px] p-5 space-y-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #1E293B 60%, #162032 100%)', border: '1px solid #2A6496', boxShadow: '0 0 0 1px rgba(56,189,248,0.08), 0 8px 32px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.40)' }}>
                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #38BDF8 0%, #0EA5E9 60%, rgba(14,165,233,0) 100%)' }}></div>
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)' }}></div>
                
                <div className="flex items-start justify-between relative z-10">
                  <div className="space-y-1">
                    <p className="text-xs" style={{ color: '#7CBFDA' }}>Cesta em destaque · Cesta completa</p>
                    <div className="text-[36px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F87171' }}>+4,2%</div>
                    <p className="text-xs" style={{ color: '#748495' }}>Sua cesta (mai-nov)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[20px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#94A3B8' }}>+3,1%</div>
                    <p className="text-[10px]" style={{ color: '#748495' }}>IPCA (jan-out)</p>
                  </div>
                </div>
                
                <div className="flex justify-between pt-2" style={{ borderTop: '1px solid rgba(56,189,248,0.15)' }}>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Gasto no ano</p>
                    <p className="text-[24px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>R$ 19.950</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Média mensal</p>
                    <p className="text-[20px] font-bold leading-tight" style={{ color: '#F1F5F9' }}>R$ 2.850</p>
                    <p className="text-xs" style={{ color: '#748495' }}>(mai-nov)</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Card hero (destaque com gradiente + accent line + glow)</p>
            </div>

            {/* Card Outline */}
            <div className="space-y-2">
              <div className="rounded-[20px] p-6 space-y-4" style={{ backgroundColor: 'transparent', border: '1px dashed #334155' }}>
                <div className="flex flex-col items-center justify-center gap-3 py-4">
                  <svg className="w-12 h-12" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-sm font-semibold" style={{ color: '#94A3B8' }}>Criar nova cesta</p>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Card outline (dashed border)</p>
            </div>

              {/* Card Cesta com ação (chevron) */}
              <div className="space-y-2">
                <div className="rounded-[20px] p-6 cursor-pointer transition-colors hover:bg-[#263548]" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1" style={{ color: '#F1F5F9' }}>Café da manhã</p>
                    <p className="text-xs" style={{ color: '#748495' }}>8 produtos · +6,1%</p>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Card com ação (chevron › indica navegação)</p>
            </div>

            {/* Card Cesta (badge + variação + navegação) */}
            <div className="space-y-2">
              <div className="rounded-[20px] p-6 cursor-pointer transition-colors hover:bg-[#263548]" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Café da manhã</p>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: '#0F172A', color: '#748495' }}>AUTO</span>
                    </div>
                    <p className="text-xs" style={{ color: '#748495' }}>8 produtos · (mai-nov)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <p className="text-sm font-semibold" style={{ color: '#F87171' }}>+6,1%</p>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Card cesta (badge + variação + navegação)</p>
            </div>
          </div>
        </section>

        {/* Board 6 - Tab Bar e Headers */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 6 — Tab Bar e Headers
          </h2>
          
          {/* Tab Bar Completa */}
          <div className="space-y-2">
            <div className="rounded-[24px] overflow-hidden" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
              <div className="flex items-center justify-around relative" style={{ backgroundColor: '#0A111E', borderTop: '1px solid #1E293B' }}>
                {/* Home */}
                <div className="flex-1 flex flex-col items-center gap-1 py-3">
                  <svg className="w-6 h-6" style={{ color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-[10px] font-medium" style={{ color: '#475569' }}>Home</span>
                </div>

                {/* Cestas (Active) */}
                <div className="flex-1 flex flex-col items-center gap-1 py-3 relative">
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full" style={{ backgroundColor: '#38BDF8' }}></div>
                  <svg className="w-6 h-6" style={{ color: '#38BDF8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-[10px] font-semibold" style={{ color: '#38BDF8' }}>Cestas</span>
                </div>

                {/* FAB Placeholder */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#38BDF8', boxShadow: '0 4px 16px rgba(56,189,248,0.4)', marginTop: '-28px' }}>
                    <svg className="w-6 h-6" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                {/* Produtos */}
                <div className="flex-1 flex flex-col items-center gap-1 py-3">
                  <svg className="w-6 h-6" style={{ color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-[10px] font-medium" style={{ color: '#475569' }}>Produtos</span>
                </div>

                {/* Mais */}
                <div className="flex-1 flex flex-col items-center gap-1 py-3">
                  <svg className="w-6 h-6" style={{ color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  <span className="text-[10px] font-medium" style={{ color: '#475569' }}>Mais</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-center" style={{ color: '#748495' }}>Tab bar completa (5 itens + FAB)</p>
          </div>

          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Header Simples */}
            <div className="space-y-2">
              <div className="rounded-[20px] p-6 flex items-center justify-between" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
                <h1 className="text-[24px] font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Cestas</h1>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1E293B' }}>
                  <svg className="w-5 h-5" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Header simples</p>
            </div>

            {/* Header com Back */}
            <div className="space-y-2">
              <div className="rounded-[20px] p-6 flex items-center gap-4" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1E293B' }}>
                  <svg className="w-5 h-5" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h1 className="text-[24px] font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Cesta completa</h1>
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>Header com back button</p>
            </div>
          </div>
        </section>

        {/* Board 7 - Toggle e Chips */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 7 — Toggle e Chips
          </h2>
          
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Segmented Control */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Segmented Control</h3>
              <div className="inline-flex rounded-[16px] p-1" style={{ backgroundColor: '#0F172A' }}>
                <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-all" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                  Mensal
                </button>
                <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-all" style={{ color: '#748495' }}>
                  Acumulado
                </button>
              </div>
              <p className="text-xs" style={{ color: '#748495' }}>Mensal selecionado</p>
            </div>

            {/* Chips */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Chips</h3>
              <div className="flex flex-wrap gap-3">
                {/* Chip Inativo */}
                <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', color: '#94A3B8' }}>
                  Todos
                </button>
                
                {/* Chip Ativo */}
                <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.30)', color: '#38BDF8' }}>
                  Atacadão
                </button>
                
                {/* Chip com Dot */}
                <button className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', color: '#94A3B8' }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FB923C' }}></span>
                  Café da manhã
                </button>

                {/* Chip com Dot Violeta */}
                <button className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', color: '#94A3B8' }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A78BFA' }}></span>
                  Pão de Açúcar
                </button>

                {/* Chip com Dot Rosa */}
                <button className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', color: '#94A3B8' }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F472B6' }}></span>
                  Padaria
                </button>
              </div>
              <p className="text-xs" style={{ color: '#748495' }}>Chips: inativo, ativo, com dot colorido (identifica cestas/categorias)</p>
            </div>
          </div>
        </section>

        {/* Board 8 - Badges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 8 — Badges
          </h2>
          <div className="rounded-[24px] p-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <div className="flex flex-wrap gap-4">
              {/* Auto */}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: '#0F172A', color: '#748495' }}>AUTO</span>
              
              {/* Congelado */}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: 'rgba(30,41,59,0.80)', color: '#475569' }}>CONGELADO</span>
              
              {/* Atualizado */}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: '#1E293B', color: '#748495' }}>ATUALIZADO</span>
              
              {/* Projeção Disponível */}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: 'rgba(52,211,153,0.10)', color: '#34D399' }}>PROJEÇÃO DISPONÍVEL</span>
              
              {/* Dado Antigo */}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: 'rgba(251,191,36,0.10)', color: '#FBBF24' }}>DADO ANTIGO</span>
            </div>
            <p className="text-xs mt-4" style={{ color: '#748495' }}>Badges: auto, congelado, atualizado, projeção disponível, dado antigo</p>
          </div>
        </section>

        {/* Board 9 - Feedback */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 9 — Feedback
          </h2>
          
          {/* Disclaimer */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Disclaimer</h3>
            <div className="rounded-[12px] p-4" style={{ backgroundColor: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.25)' }}>
              <p className="text-sm" style={{ color: '#94A3B8' }}>
                Índices do ano corrente (linha tracejada) são recalculados mensalmente.
              </p>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Disclaimer informativo</p>
          </div>

          {/* Inline Alert */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Inline Alert</h3>
            <div className="rounded-[12px] p-4 space-y-3" style={{ backgroundColor: 'rgba(251,191,36,0.10)', border: '1px solid rgba(251,191,36,0.25)' }}>
              <div className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FBBF24' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1 space-y-2">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Preço atípico detectado</p>
                  <p className="text-sm" style={{ color: '#94A3B8' }}>
                    Este preço está 40% acima da média histórica. Deseja manter ou descartar?
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'transparent', border: '1px solid #334155', color: '#F1F5F9' }}>
                      Corrigir
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                      Manter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Inline alert com 2 botões de ação</p>
          </div>

          {/* Toasts */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Toasts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Success Toast */}
              <div className="rounded-[12px] p-4 flex items-start gap-3 relative" style={{ backgroundColor: 'rgba(52,211,153,0.10)', border: '1px solid rgba(52,211,153,0.25)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(52,211,153,0.2)' }}>
                  <svg className="w-3 h-3" style={{ color: '#34D399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Produto adicionado</p>
                  <p className="text-xs" style={{ color: '#94A3B8' }}>Café Pilão 500g foi adicionado</p>
                </div>
                <button className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-lg hover:bg-[#263548]" style={{ color: '#748495' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Error Toast */}
              <div className="rounded-[12px] p-4 flex items-start gap-3 relative" style={{ backgroundColor: 'rgba(248,113,113,0.10)', border: '1px solid rgba(248,113,113,0.25)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(248,113,113,0.2)' }}>
                  <svg className="w-3 h-3" style={{ color: '#F87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Erro ao salvar</p>
                  <p className="text-xs" style={{ color: '#94A3B8' }}>Não foi possível salvar as alterações</p>
                </div>
                <button className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-lg hover:bg-[#263548]" style={{ color: '#748495' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Warning Toast */}
              <div className="rounded-[12px] p-4 flex items-start gap-3 relative" style={{ backgroundColor: 'rgba(251,191,36,0.10)', border: '1px solid rgba(251,191,36,0.25)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(251,191,36,0.2)' }}>
                  <svg className="w-3 h-3" style={{ color: '#FBBF24' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Atenção</p>
                  <p className="text-xs" style={{ color: '#94A3B8' }}>Alguns dados podem estar desatualizados</p>
                </div>
                <button className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-lg hover:bg-[#263548]" style={{ color: '#748495' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Info Toast */}
              <div className="rounded-[12px] p-4 flex items-start gap-3 relative" style={{ backgroundColor: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.25)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(56,189,248,0.2)' }}>
                  <svg className="w-3 h-3" style={{ color: '#38BDF8' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Informação</p>
                  <p className="text-xs" style={{ color: '#94A3B8' }}>Nova versão disponível</p>
                </div>
                <button className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center rounded-lg hover:bg-[#263548]" style={{ color: '#748495' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>4 toasts: success, error, warning, info</p>
          </div>

          {/* Banner */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Banner Informativo</h3>
            <div className="rounded-[12px] p-4 flex items-center justify-between gap-4" style={{ backgroundColor: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.25)' }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#38BDF8' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm" style={{ color: '#F1F5F9' }}>Novos dados do IPCA disponíveis para dezembro/2026</p>
              </div>
              <button className="text-sm font-semibold" style={{ color: '#38BDF8' }}>Atualizar</button>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Banner informativo com ação</p>
          </div>
        </section>

        {/* Board 10 - Overlays */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 10 — Overlays
          </h2>
          
          {/* Modal */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Modal</h3>
            <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.75)', minHeight: '400px' }}>
              {/* Overlay */}
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}></div>
              
              {/* Modal Content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <div className="rounded-[24px] p-6 space-y-4 mx-4" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Excluir produto?</h3>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#263548' }}>
                      <svg className="w-4 h-4" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm" style={{ color: '#94A3B8' }}>
                    Tem certeza que deseja excluir &quot;Café Pilão 500g&quot;? Esta ação não pode ser desfeita.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 px-4 py-3 rounded-[12px] text-sm font-semibold" style={{ backgroundColor: '#263548', color: '#F1F5F9' }}>
                      Cancelar
                    </button>
                    <button className="flex-1 px-4 py-3 rounded-[12px] text-sm font-semibold" style={{ backgroundColor: 'rgba(248,113,113,0.1)', color: '#F87171', border: '1px solid rgba(248,113,113,0.25)' }}>
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Modal completo com overlay visível</p>
          </div>

          {/* Bottom Sheet */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Bottom Sheet</h3>
            <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.75)', minHeight: '400px' }}>
              {/* Overlay */}
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}></div>
              
              {/* Bottom Sheet Content */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="rounded-t-[24px] p-6 space-y-4" style={{ backgroundColor: '#172035' }}>
                  {/* Handle */}
                  <div className="flex justify-center">
                    <div className="w-8 h-1 rounded-full" style={{ backgroundColor: '#334155' }}></div>
                  </div>
                  
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Filtrar produtos</h3>
                  
                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <label className="text-[11px] font-medium uppercase tracking-wide" style={{ color: '#748495' }}>Categoria</label>
                      <select className="w-full px-4 py-3 rounded-[12px] text-sm appearance-none" style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}>
                        <option>Todas as categorias</option>
                        <option>Alimentação e Bebidas</option>
                        <option>Higiene e Cuidados</option>
                      </select>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 px-4 py-3 rounded-[12px] text-sm font-semibold" style={{ backgroundColor: '#263548', color: '#F1F5F9' }}>
                        Limpar
                      </button>
                      <button className="flex-1 px-4 py-3 rounded-[12px] text-sm font-semibold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Bottom sheet completo com overlay e handle</p>
          </div>

          {/* Tooltip */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Tooltip</h3>
            <div className="flex justify-center py-8">
              <div className="relative inline-flex">
                <button className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#263548', border: '1px solid #334155' }}>
                  <svg className="w-3 h-3" style={{ color: '#94A3B8' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-[8px] whitespace-nowrap" style={{ backgroundColor: '#172035', border: '1px solid #334155' }}>
                  <p className="text-xs" style={{ color: '#F1F5F9' }}>+2,0% (ago→out)</p>
                  <p className="text-xs" style={{ color: '#F1F5F9' }}>R$ 18,99 · 2 compras</p>
                  <p className="text-xs" style={{ color: '#F1F5F9' }}>15/out · Atacadão</p>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                    <div className="w-2 h-2 rotate-45" style={{ backgroundColor: '#172035', borderRight: '1px solid #334155', borderBottom: '1px solid #334155' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Tooltip com arrow</p>
          </div>
        </section>

        {/* Board 11 - Listas */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 11 — Listas
          </h2>
          
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* List Items Básicos */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>List Items</h3>
              
              {/* Item básico enriquecido */}
              <div className="rounded-[12px] p-4" style={{ backgroundColor: '#162032' }}>
                <p className="text-sm font-semibold mb-1" style={{ color: '#F1F5F9' }}>Café Pilão 500g</p>
                <p className="text-xs" style={{ color: '#748495' }}>R$ 18,99 · Atacadão · 02/abr</p>
              </div>
              
              {/* Item com ícone */}
              <div className="rounded-[12px] p-4 flex items-center gap-3" style={{ backgroundColor: '#162032' }}>
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#263548' }}>
                  <svg className="w-5 h-5" style={{ color: '#38BDF8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Atacadão</p>
                  <p className="text-xs" style={{ color: '#748495' }}>23 produtos</p>
                </div>
              </div>
              
              {/* Item com thumbnail */}
              <div className="rounded-[12px] p-4 flex items-center gap-3" style={{ backgroundColor: '#162032' }}>
                <div className="w-12 h-12 rounded-[8px] flex-shrink-0" style={{ backgroundColor: '#263548' }}></div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Café Pilão 500g</p>
                  <p className="text-xs" style={{ color: '#748495' }}>R$ 18,99 · Atacadão</p>
                </div>
              </div>
              
              {/* Item com avatar */}
              <div className="rounded-[12px] p-4 flex items-center gap-3" style={{ backgroundColor: '#162032' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                  AB
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Atacadão Barra Funda</p>
                  <p className="text-xs" style={{ color: '#748495' }}>Loja preferencial</p>
                </div>
              </div>
            </div>

            {/* Item Compra Editável */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Item Compra (editável)</h3>
              <div className="rounded-xl p-4 space-y-3" style={{ backgroundColor: '#162032', border: '1px solid #334155' }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>02/abr/2026 · Atacadão</p>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-lg" style={{ backgroundColor: 'rgba(56,189,248,0.12)', color: '#38BDF8' }}>2 UN</span>
                    </div>
                    <p className="text-xs" style={{ color: '#748495' }}>500g · 3 un</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold" style={{ color: '#F1F5F9' }}>R$ 18,99</p>
                  </div>
                </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2" style={{ backgroundColor: '#263548', color: '#94A3B8' }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Editar
                    </button>
                    <button className="px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2" style={{ backgroundColor: 'rgba(248,113,113,0.1)', color: '#F87171', border: '1px solid rgba(248,113,113,0.25)' }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Excluir
                    </button>
                  </div>
              </div>
            </div>

            {/* Item Compra Congelado */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Item Compra (congelado)</h3>
              <div className="rounded-xl p-4 space-y-3 opacity-[0.65]" style={{ backgroundColor: '#162032', border: '1px solid #334155' }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>28/dez/2025 · Atacadão</p>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[8px]" style={{ backgroundColor: 'rgba(148,163,184,0.12)', color: '#94A3B8' }}>CONGELADO</span>
                    </div>
                    <p className="text-xs" style={{ color: '#748495' }}>500g · 2 un</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold" style={{ color: '#F1F5F9' }}>R$ 17,50</p>
                  </div>
                </div>
              </div>
              <p className="text-xs" style={{ color: '#748495' }}>Sem botões, opacidade 0.6</p>
            </div>

            {/* Month Group */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Month Group</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 px-2">
                  <h4 className="text-sm font-bold" style={{ color: '#F1F5F9' }}>2026</h4>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <h5 className="text-xs font-semibold" style={{ color: '#94A3B8' }}>Fevereiro</h5>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-lg" style={{ backgroundColor: 'rgba(148,163,184,0.12)', color: '#94A3B8' }}>CONGELADO</span>
                </div>
              </div>
            </div>

            {/* Dividers */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Dividers</h3>
              <div className="h-px" style={{ backgroundColor: '#334155' }}></div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ backgroundColor: '#334155' }}></div>
                <span className="text-xs font-semibold" style={{ color: '#748495' }}>OU</span>
                <div className="flex-1 h-px" style={{ backgroundColor: '#334155' }}></div>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Accordion</h3>
              
              {/* Collapsed */}
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#162032', border: '1px solid #334155' }}>
                <button className="w-full p-4 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Alimentação e Bebidas</p>
                    <p className="text-xs" style={{ color: '#748495' }}>12 produtos</p>
                  </div>
                  <svg className="w-5 h-5" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Expanded */}
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#162032', border: '1px solid #38BDF8' }}>
                <button className="w-full p-4 flex items-center justify-between" style={{ backgroundColor: 'rgba(56,189,248,0.05)' }}>
                  <div className="text-left">
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Higiene e Cuidados</p>
                    <p className="text-xs" style={{ color: '#748495' }}>5 produtos</p>
                  </div>
                  <svg className="w-5 h-5 rotate-180" style={{ color: '#38BDF8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 space-y-2" style={{ borderTop: '1px solid #334155' }}>
                  <div className="p-3 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#1E293B' }}>
                    <p className="text-sm" style={{ color: '#F1F5F9' }}>Sabonete Dove</p>
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>R$ 3,50</p>
                  </div>
                  <div className="p-3 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#1E293B' }}>
                    <p className="text-sm" style={{ color: '#F1F5F9' }}>Shampoo Seda</p>
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>R$ 12,90</p>
                  </div>
                </div>
              </div>

              {/* Sem dados */}
              <div className="rounded-xl p-4" style={{ backgroundColor: '#162032', border: '1px dashed #334155' }}>
                <p className="text-sm text-center" style={{ color: '#748495' }}>Nenhum produto nesta categoria</p>
              </div>
            </div>

            {/* Number/Stat Display */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Number/Stat Display (hierarquia de inflação)</h3>
              <div className="flex items-end gap-6">
                <div className="space-y-1">
                  <div className="text-[36px] font-bold leading-tight" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F87171' }}>+4,2%</div>
                  <p className="text-xs" style={{ color: '#748495' }}>Inflação acumulada (jan-abr)</p>
                </div>
                <div className="space-y-1 pb-1">
                  <div className="text-[20px] font-bold leading-tight" style={{ color: '#94A3B8' }}>IPCA +3,1%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board 12 - Estados Especiais */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 12 — Estados Especiais
          </h2>
          
          {/* Empty States */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Estados Vazios</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Empty 1 - Lista */}
              <div className="rounded-[20px] p-8 flex flex-col items-center justify-center gap-3 text-center" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', minHeight: '200px' }}>
                <svg className="w-12 h-12" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <div className="space-y-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Nenhum produto</p>
                  <p className="text-xs" style={{ color: '#748495' }}>Adicione produtos para começar</p>
                </div>
                <button className="px-4 py-2 rounded-full text-sm font-semibold mt-2" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                  Adicionar produto
                </button>
              </div>

              {/* Empty 2 - Busca */}
              <div className="rounded-[20px] p-8 flex flex-col items-center justify-center gap-3 text-center" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', minHeight: '200px' }}>
                <svg className="w-12 h-12" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <div className="space-y-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Nenhum resultado</p>
                  <p className="text-xs" style={{ color: '#748495' }}>Tente buscar por outro termo</p>
                </div>
              </div>

              {/* Empty 3 - Erro */}
              <div className="rounded-[20px] p-8 flex flex-col items-center justify-center gap-3 text-center" style={{ backgroundColor: '#1E293B', border: '1px solid #334155', minHeight: '200px' }}>
                <svg className="w-12 h-12" style={{ color: '#F87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="space-y-1">
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Erro ao carregar</p>
                  <p className="text-xs" style={{ color: '#748495' }}>Não foi possível carregar os dados</p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold mt-2" style={{ backgroundColor: '#263548', color: '#F1F5F9' }}>
                  Tentar novamente
                </button>
              </div>
            </div>
          </div>

          {/* Skeletons */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Skeletons</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Skeleton Card */}
              <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: '#162032' }}>
                <div className="h-4 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '60%' }}></div>
                <div className="h-8 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '40%' }}></div>
                <div className="space-y-2">
                  <div className="h-3 rounded-lg animate-pulse" style={{ backgroundColor: '#263548' }}></div>
                  <div className="h-3 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '80%' }}></div>
                </div>
              </div>

              {/* Skeleton Gráfico */}
              <div className="rounded-xl p-6" style={{ backgroundColor: '#162032' }}>
                <div className="flex items-end justify-between gap-2 h-32">
                  <div className="w-full rounded-t animate-pulse" style={{ backgroundColor: '#263548', height: '60%' }}></div>
                  <div className="w-full rounded-t animate-pulse" style={{ backgroundColor: '#263548', height: '80%' }}></div>
                  <div className="w-full rounded-t animate-pulse" style={{ backgroundColor: '#263548', height: '40%' }}></div>
                  <div className="w-full rounded-t animate-pulse" style={{ backgroundColor: '#263548', height: '90%' }}></div>
                  <div className="w-full rounded-t animate-pulse" style={{ backgroundColor: '#263548', height: '50%' }}></div>
                </div>
              </div>

              {/* Skeleton List */}
              <div className="space-y-3">
                <div className="rounded-xl p-4 flex items-center gap-3" style={{ backgroundColor: '#162032' }}>
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 animate-pulse" style={{ backgroundColor: '#263548' }}></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '70%' }}></div>
                    <div className="h-3 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '40%' }}></div>
                  </div>
                </div>
                <div className="rounded-xl p-4 flex items-center gap-3" style={{ backgroundColor: '#162032' }}>
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 animate-pulse" style={{ backgroundColor: '#263548' }}></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '70%' }}></div>
                    <div className="h-3 rounded-lg animate-pulse" style={{ backgroundColor: '#263548', width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Skeleton: card, gráfico, list</p>
          </div>

          {/* Checkboxes */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Checkboxes</h3>
            <div className="flex gap-6">
              {/* Unchecked */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded-[4px] border-2 flex items-center justify-center" style={{ borderColor: '#334155', backgroundColor: 'transparent' }}></div>
                <span className="text-sm" style={{ color: '#F1F5F9' }}>Unchecked</span>
              </label>

              {/* Checked */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded-[4px] border-2 flex items-center justify-center" style={{ borderColor: '#38BDF8', backgroundColor: '#38BDF8' }}>
                  <svg className="w-3 h-3" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: '#F1F5F9' }}>Checked</span>
              </label>
            </div>
          </div>
        </section>

        {/* Board 13 - Gráficos */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 13 — Gráficos
          </h2>
          
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Gráfico com convenção */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Gráfico de linha (sólida/tracejada + gaps)</h3>
              <div className="rounded-xl p-6" style={{ backgroundColor: '#162032' }}>
                <svg className="w-full" height="200" viewBox="0 0 600 200">
                  {/* Grid lines */}
                  <line x1="40" y1="40" x2="560" y2="40" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="40" y1="100" x2="560" y2="100" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="40" y1="160" x2="560" y2="160" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Linha sólida (Featured) */}
                  <polyline
                    points="40,120 120,100 200,80 280,130 360,110 440,90 520,100 560,85"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Linha tracejada (IPCA) com gap */}
                  <polyline
                    points="40,140 120,135 200,125"
                    fill="none"
                    stroke="#0EA5E9"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="280,115 360,120 440,105 520,110 560,100"
                    fill="none"
                    stroke="#0EA5E9"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                  />
                  
                  {/* Pontos */}
                  <circle cx="40" cy="120" r="3" fill="#38BDF8" />
                  <circle cx="120" cy="100" r="3" fill="#38BDF8" />
                  <circle cx="200" cy="80" r="3" fill="#38BDF8" />
                  <circle cx="280" cy="130" r="3" fill="#38BDF8" />
                  <circle cx="360" cy="110" r="3" fill="#38BDF8" />
                  <circle cx="440" cy="90" r="3" fill="#38BDF8" />
                  <circle cx="520" cy="100" r="3" fill="#38BDF8" />
                  <circle cx="560" cy="85" r="3" fill="#38BDF8" />
                  
                  <circle cx="40" cy="140" r="3" fill="#0EA5E9" />
                  <circle cx="120" cy="135" r="3" fill="#0EA5E9" />
                  <circle cx="200" cy="125" r="3" fill="#0EA5E9" />
                  <circle cx="280" cy="115" r="3" fill="#0EA5E9" />
                  <circle cx="360" cy="120" r="3" fill="#0EA5E9" />
                  <circle cx="440" cy="105" r="3" fill="#0EA5E9" />
                  <circle cx="520" cy="110" r="3" fill="#0EA5E9" />
                  <circle cx="560" cy="100" r="3" fill="#0EA5E9" />
                  
                  {/* Labels */}
                  <text x="40" y="185" fill="#748495" fontSize="10" textAnchor="middle">mai</text>
                  <text x="120" y="185" fill="#748495" fontSize="10" textAnchor="middle">jun</text>
                  <text x="200" y="185" fill="#748495" fontSize="10" textAnchor="middle">jul</text>
                  <text x="280" y="185" fill="#748495" fontSize="10" textAnchor="middle">ago</text>
                  <text x="360" y="185" fill="#748495" fontSize="10" textAnchor="middle">set</text>
                  <text x="440" y="185" fill="#748495" fontSize="10" textAnchor="middle">out</text>
                  <text x="520" y="185" fill="#748495" fontSize="10" textAnchor="middle">nov</text>
                </svg>
              </div>
              <p className="text-xs" style={{ color: '#748495' }}>Linha sólida (featured), tracejada (IPCA), com gap entre jul-ago</p>
            </div>

            {/* Legenda */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Legenda com dots</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#38BDF8' }}></span>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Cesta completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0EA5E9' }}></span>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>IPCA geral</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FB923C' }}></span>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Café da manhã</span>
                </div>
              </div>
            </div>

            {/* Paletas */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Paletas em swatches</h3>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold" style={{ color: '#94A3B8' }}>Cestas</p>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#38BDF8' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#0EA5E9' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#A78BFA' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#F472B6' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#FB923C' }}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold" style={{ color: '#94A3B8' }}>Volumes</p>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#A78BFA' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#F472B6' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#FB923C' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#2DD4BF' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#E879F9' }}></div>
                  <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#A3E635' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board 14 - Código */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 14 — Código e Autenticação
          </h2>
          
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Input 6 dígitos */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Input de 6 dígitos</h3>
              <div className="flex gap-2 justify-center">
                <input type="text" maxLength={1} className="w-12 h-12 rounded-[12px] text-center text-[24px] font-bold" style={{ backgroundColor: '#172035', border: '2px solid #38BDF8', color: '#F1F5F9', fontFamily: 'var(--font-dm-sans)' }} value="4" readOnly />
                <input type="text" maxLength={1} className="w-12 h-12 rounded-[12px] text-center text-[24px] font-bold" style={{ backgroundColor: '#172035', border: '2px solid #38BDF8', color: '#F1F5F9', fontFamily: 'var(--font-dm-sans)' }} value="2" readOnly />
                <input type="text" maxLength={1} className="w-12 h-12 rounded-[12px] text-center text-[24px] font-bold" style={{ backgroundColor: '#172035', border: '2px solid #38BDF8', color: '#F1F5F9', fontFamily: 'var(--font-dm-sans)' }} value="7" readOnly />
                <input type="text" maxLength={1} className="w-12 h-12 rounded-[12px] text-center text-[24px] font-bold" style={{ backgroundColor: '#172035', border: '1px solid #334155', color: '#F1F5F9', fontFamily: 'var(--font-dm-sans)' }} defaultValue="" />
                <input type="text" maxLength={1} className="w-12 h-12 rounded-[12px] text-center text-[24px] font-bold" style={{ backgroundColor: '#172035', border: '1px solid #334155', color: '#F1F5F9', fontFamily: 'var(--font-dm-sans)' }} defaultValue="" />
                <input type="text" maxLength={1} className="w-12 h-12 rounded-[12px] text-center text-[24px] font-bold" style={{ backgroundColor: '#172035', border: '1px solid #334155', color: '#F1F5F9', fontFamily: 'var(--font-dm-sans)' }} defaultValue="" />
              </div>
              <p className="text-xs text-center" style={{ color: '#748495' }}>3 de 6 preenchidos</p>
            </div>

            {/* Requisitos de senha */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Requisitos de senha</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(52,211,153,0.2)' }}>
                    <svg className="w-2.5 h-2.5" style={{ color: '#34D399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Mínimo 8 caracteres</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(52,211,153,0.2)' }}>
                    <svg className="w-2.5 h-2.5" style={{ color: '#34D399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Ao menos uma letra maiúscula</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(248,113,113,0.2)' }}>
                    <svg className="w-2.5 h-2.5" style={{ color: '#F87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Ao menos um número</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(248,113,113,0.2)' }}>
                    <svg className="w-2.5 h-2.5" style={{ color: '#F87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Ao menos um caractere especial</span>
                </div>
              </div>
              <p className="text-xs" style={{ color: '#748495' }}>Dots com check (ok) e X (fail)</p>
            </div>

            {/* Timer reenvio */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Timer de reenvio</h3>
              <div className="text-center space-y-3">
                <p className="text-sm" style={{ color: '#94A3B8' }}>
                  Não recebeu o código?
                </p>
                <button className="text-sm font-semibold opacity-40 cursor-not-allowed" style={{ color: '#38BDF8' }}>
                  Reenviar código (0:45)
                </button>
              </div>
              <div className="text-center space-y-3 pt-4">
                <p className="text-sm" style={{ color: '#94A3B8' }}>
                  Não recebeu o código?
                </p>
                <button className="text-sm font-semibold" style={{ color: '#38BDF8' }}>
                  Reenviar código
                </button>
              </div>
              <p className="text-xs" style={{ color: '#748495' }}>Timer ativo (disabled) e pronto para reenvio</p>
            </div>
          </div>
        </section>

        {/* Board 15 - Componentes Extras */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>
            Board 15 — Componentes Extras
          </h2>
          
          {/* Date Picker */}
          <div className="rounded-[24px] p-8 space-y-6" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Date Picker</h3>
            <div className="rounded-xl p-4 inline-block" style={{ backgroundColor: '#162032' }}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <button className="p-2 rounded-lg" style={{ backgroundColor: '#263548' }}>
                    <svg className="w-4 h-4" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Abril 2026</p>
                  <button className="p-2 rounded-lg" style={{ backgroundColor: '#263548' }}>
                    <svg className="w-4 h-4" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="w-10 h-10 flex items-center justify-center text-xs font-semibold" style={{ color: '#748495' }}>{day}</div>
                  ))}
                  {[30, 31, 1, 2, 3, 4, 5].map((day, i) => (
                    <div key={i} className={`w-10 h-10 flex items-center justify-center text-sm rounded-lg ${i < 2 ? 'opacity-40' : ''}`} style={{ color: '#94A3B8' }}>{day}</div>
                  ))}
                  {[6, 7, 8, 9, 10, 11, 12].map((day, i) => (
                    <div key={i} className="w-10 h-10 flex items-center justify-center text-sm rounded-lg" style={{ color: day === 9 ? '#0F172A' : '#94A3B8', backgroundColor: day === 9 ? '#38BDF8' : 'transparent' }}>{day}</div>
                  ))}
                  {[13, 14, 15, 16, 17, 18, 19].map((day, i) => (
                    <div key={i} className={`w-10 h-10 flex items-center justify-center text-sm rounded-lg ${day === 15 ? 'ring-2' : ''}`} style={{ color: '#94A3B8', ringColor: day === 15 ? '#38BDF8' : 'transparent' }}>{day}</div>
                  ))}
                  {[20, 21, 22, 23, 24, 25, 26].map((day, i) => (
                    <div key={i} className="w-10 h-10 flex items-center justify-center text-sm rounded-lg" style={{ color: day > 25 ? '#748495' : '#94A3B8' }}>{day}</div>
                  ))}
                  {[27, 28, 29, 30, 1, 2, 3].map((day, i) => (
                    <div key={i} className={`w-10 h-10 flex items-center justify-center text-sm rounded-lg ${i > 3 ? 'opacity-40' : ''}`} style={{ color: '#94A3B8' }}>{day}</div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#748495' }}>Dia 9 selecionado (accent), dia 15 atual (ring), dias desabilitados (opacidade)</p>
          </div>

          {/* Time Picker + Sliders */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Time Picker */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Time Picker</h3>
                <div className="flex items-center gap-2">
                  <input type="text" value="14" readOnly className="w-16 px-3 py-2 rounded-lg text-center text-xl font-bold" style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }} />
                  <span className="text-xl font-bold" style={{ color: '#748495' }}>:</span>
                  <input type="text" value="30" readOnly className="w-16 px-3 py-2 rounded-lg text-center text-xl font-bold" style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }} />
                </div>
              </div>

              {/* Stepper */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Stepper</h3>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#263548' }}>
                    <svg className="w-4 h-4" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="w-16 px-3 py-2 rounded-lg text-center text-base font-bold" style={{ backgroundColor: '#162032', border: '1px solid #334155', color: '#F1F5F9' }}>3</div>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#38BDF8' }}>
                    <svg className="w-4 h-4" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Slider Simples</h3>
                <div className="relative pt-2">
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#263548' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#38BDF8', width: '60%' }}></div>
                  </div>
                  <div className="absolute top-0 w-5 h-5 rounded-full" style={{ backgroundColor: '#38BDF8', left: 'calc(60% - 10px)', boxShadow: '0 2px 8px rgba(56,189,248,0.4)' }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Range Slider (2 thumbs)</h3>
                <div className="relative pt-2">
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#263548' }}>
                    <div className="h-2 rounded-full absolute" style={{ backgroundColor: '#38BDF8', left: '25%', right: '35%' }}></div>
                  </div>
                  <div className="absolute top-0 w-5 h-5 rounded-full" style={{ backgroundColor: '#38BDF8', left: 'calc(25% - 10px)', boxShadow: '0 2px 8px rgba(56,189,248,0.4)' }}></div>
                  <div className="absolute top-0 w-5 h-5 rounded-full" style={{ backgroundColor: '#38BDF8', left: 'calc(65% - 10px)', boxShadow: '0 2px 8px rgba(56,189,248,0.4)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress + Switch + Radio */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Progress Bar */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Progress Bar</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#263548' }}></div>
                  <p className="text-xs" style={{ color: '#748495' }}>0%</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#263548' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#38BDF8', width: '50%' }}></div>
                  </div>
                  <p className="text-xs" style={{ color: '#748495' }}>50%</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#38BDF8' }}></div>
                  <p className="text-xs" style={{ color: '#748495' }}>100%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm" style={{ color: '#F1F5F9' }}>Upload de arquivo</p>
                    <p className="text-sm font-semibold" style={{ color: '#38BDF8' }}>75%</p>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#263548' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#38BDF8', width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Switch */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Switch</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-6 rounded-full p-0.5 cursor-pointer" style={{ backgroundColor: '#263548' }}>
                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#748495' }}></div>
                  </div>
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Off</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-6 rounded-full p-0.5 cursor-pointer flex justify-end" style={{ backgroundColor: '#38BDF8' }}>
                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#0F172A' }}></div>
                  </div>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>On</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-11 h-6 rounded-full p-0.5 cursor-not-allowed" style={{ backgroundColor: '#263548' }}>
                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#748495' }}></div>
                  </div>
                  <span className="text-sm" style={{ color: '#94A3B8' }}>Disabled</span>
                </div>
              </div>
            </div>

            {/* Radio Button */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Radio Button</h3>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: '#334155' }}></div>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Unchecked</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#38BDF8' }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#38BDF8' }}></div>
                  </div>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Checked</span>
                </label>
                <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                  <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: '#334155' }}></div>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Disabled</span>
                </label>
              </div>
            </div>
          </div>

          {/* Segmented Tabs + Avatars */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Segmented Tabs 4 options */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Segmented Tabs (4 opções)</h3>
              <div className="inline-flex rounded-[16px] p-1" style={{ backgroundColor: '#0F172A' }}>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>Todos</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ color: '#94A3B8' }}>Mercado</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ color: '#94A3B8' }}>Feira</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ color: '#94A3B8' }}>Online</button>
              </div>
            </div>

            {/* Avatars */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Avatar (foto + iniciais 32/40/48px)</h3>
              <div className="flex items-end gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>JD</div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{ backgroundColor: '#A78BFA', color: '#0F172A' }}>MC</div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold" style={{ backgroundColor: '#F472B6', color: '#0F172A' }}>AB</div>
                <div className="w-10 h-10 rounded-full overflow-hidden" style={{ backgroundColor: '#263548' }}>
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#38BDF8' }}>
                    <svg className="w-6 h-6" style={{ color: '#0F172A' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Dot */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Notification Dot</h3>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#263548' }}>
                    <svg className="w-5 h-5" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ backgroundColor: '#F87171', border: '2px solid #1E293B' }}></div>
                </div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#263548' }}>
                    <svg className="w-5 h-5" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: '#F87171', color: '#0F172A', border: '2px solid #1E293B' }}>9</div>
                </div>
              </div>
            </div>
          </div>

          {/* Snackbar + Tags */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Snackbar */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Snackbar com ação</h3>
              <div className="rounded-xl p-4 flex items-center justify-between" style={{ backgroundColor: '#0F172A', border: '1px solid #334155' }}>
                <p className="text-sm" style={{ color: '#F1F5F9' }}>Item removido da cesta</p>
                <button className="text-sm font-semibold" style={{ color: '#38BDF8' }}>Desfazer</button>
              </div>
            </div>

            {/* Tag Removível */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Tag Removível</h3>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ backgroundColor: '#263548' }}>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Café</span>
                  <button className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                    <svg className="w-3 h-3" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ backgroundColor: '#263548' }}>
                  <span className="text-sm" style={{ color: '#F1F5F9' }}>Pão</span>
                  <button className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                    <svg className="w-3 h-3" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Pagination Dots</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#38BDF8' }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#748495' }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#748495' }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#748495' }}></div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Image Placeholder</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-xl flex items-center justify-center" style={{ backgroundColor: '#263548' }}>
                  <svg className="w-12 h-12" style={{ color: '#748495' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden" style={{ backgroundColor: '#263548' }}>
                  <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)' }}></div>
                </div>
              </div>
            </div>

            {/* Divider with Action */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Divider with Action</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px" style={{ backgroundColor: '#334155' }}></div>
                <button className="text-sm font-semibold" style={{ color: '#38BDF8' }}>Ver mais</button>
                <div className="flex-1 h-px" style={{ backgroundColor: '#334155' }}></div>
              </div>
            </div>
          </div>

          {/* Tabs Horizontais + Pull to Refresh + More */}
          <div className="rounded-[24px] p-8 space-y-8" style={{ backgroundColor: '#1E293B', border: '1px solid #334155' }}>
            {/* Tabs Horizontais com Scroll */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Tabs Horizontais (scroll)</h3>
              <div className="flex gap-1 overflow-x-auto pb-2">
                <button className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>Todos</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: '#263548', color: '#94A3B8' }}>Alimentos</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: '#263548', color: '#94A3B8' }}>Bebidas</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: '#263548', color: '#94A3B8' }}>Limpeza</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: '#263548', color: '#94A3B8' }}>Higiene</button>
                <button className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: '#263548', color: '#94A3B8' }}>Outros</button>
              </div>
            </div>

            {/* Pull to Refresh */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Pull to Refresh</h3>
              <div className="rounded-xl p-6 flex flex-col items-center gap-3" style={{ backgroundColor: '#162032' }}>
                <svg className="w-6 h-6 animate-spin" style={{ color: '#38BDF8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p className="text-sm" style={{ color: '#94A3B8' }}>Atualizando...</p>
              </div>
            </div>

            {/* Floating Action Menu */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Floating Action Menu (expandido)</h3>
              <div className="relative inline-block">
                <div className="flex flex-col gap-3 items-end mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm px-3 py-1.5 rounded-lg" style={{ backgroundColor: '#0F172A', color: '#F1F5F9' }}>Adicionar produto</span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A78BFA' }}>
                      <svg className="w-5 h-5" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm px-3 py-1.5 rounded-lg" style={{ backgroundColor: '#0F172A', color: '#F1F5F9' }}>Criar cesta</span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F472B6' }}>
                      <svg className="w-5 h-5" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#38BDF8', boxShadow: '0 4px 20px rgba(56,189,248,0.4)' }}>
                  <svg className="w-6 h-6 rotate-45" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Swipe Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-dm-sans)', color: '#F1F5F9' }}>Swipe Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4" style={{ backgroundColor: '#F87171', width: '80px' }}>
                    <svg className="w-5 h-5" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div className="p-4 ml-20" style={{ backgroundColor: '#162032' }}>
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Swipe esquerda (delete)</p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4" style={{ backgroundColor: '#38BDF8', width: '80px', justifyContent: 'flex-end' }}>
                    <svg className="w-5 h-5" style={{ color: '#0F172A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="p-4 mr-20" style={{ backgroundColor: '#162032' }}>
                    <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>Swipe direita (favorito)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm pb-8 pt-12" style={{ color: '#748495' }}>
          <p>Design System — APP Inflação Pessoal · Dark Mode · Boards 1-15 completos</p>
        </footer>
      </div>
    </div>
  );
}
