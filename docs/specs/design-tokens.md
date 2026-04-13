# Design Tokens — Inflação Pessoal

> Documento de especificação completo. Gerado em: 2026-04-13  
> Versão: 2.0.0

**Fontes de verdade canônicas:**
- `components/design-tokens.ts` — valores DARK e LIGHT validados visualmente
- `app/globals.css` — espelho web (Tailwind v4, web)
- `mobile/global.css` — espelho mobile (NativeWind v5, React Native)

**Para comparação com specs anteriores:**
`docs/specs/design-tokens-fundacao.md`, `design-tokens-componentes.md`, `design-tokens-graficos.md`

---

## Índice

1. [Fundação — Cores Base](#1-fundação--cores-base)
2. [Texto / Foreground](#2-texto--foreground)
3. [Accent — Identidade de Marca](#3-accent--identidade-de-marca)
4. [Semântica de Variação](#4-semântica-de-variação)
5. [Overlay](#5-overlay)
6. [Gráficos](#6-gráficos)
7. [Botões — 4 variantes × estados](#7-botões--4-variantes--estados)
8. [Card](#8-card)
9. [Input](#9-input)
10. [Tab Bar](#10-tab-bar)
11. [Toggle / Segmented Control](#11-toggle--segmented-control)
12. [Chip / Filter](#12-chip--filter)
13. [Skeleton](#13-skeleton)
14. [Badge](#14-badge)
15. [Divisores / Frozen](#15-divisores--frozen)
16. [Sheet / Modal](#16-sheet--modal)
17. [Componentes Futuros](#17-componentes-futuros)
18. [Tipografia](#18-tipografia)
19. [Espaçamento e Raios](#19-espaçamento-e-raios)
20. [Sombras](#20-sombras)
21. [Animação](#21-animação)
22. [Regras de Acessibilidade](#22-regras-de-acessibilidade)
23. [Notas para Extensão Futura](#23-notas-para-extensão-futura)

---

## 1. Fundação — Cores Base

Hierarquia de profundidade. Cada camada representa uma elevação visual distinta.  
**Regra:** `background` é a mais escura/profunda; `surface-3` é a mais elevada/clara.  
Nunca usar `surface` diretamente como fundo de tela — reservado para cards elevados.

| Token CSS (canônico) | Dark | Light | Uso |
|---|---|---|---|
| `--background` | `#0F172A` | `#F8FAFC` | Fundo principal de toda tela |
| `--background-deep` | `#0A111E` | `#F1F5F9` | Fundo mais profundo: por trás de cards, bottom bar, áreas atrás de sheets |
| `--surface` | `#1E293B` | `#FFFFFF` | Cards, sheets e painéis elevados sobre o fundo |
| `--surface-hover` | `#263548` | `#F8FAFC` | Estado pressed/active de itens interativos sobre surface |
| `--surface-2` | `#162032` | `#F8FAFC` | Superfície secundária: rows alternadas, separadores internos de card, fundo de input |
| `--surface-3` | `#172035` | `#FFFFFF` | Superfície terciária: nested cards, listas dentro de cards |
| `--border` | `#334155` | `#E2E8F0` | Bordas visíveis de cards e separadores com peso visual |
| `--border-subtle` | `#1E293B` | `#F1F5F9` | Bordas quase invisíveis para divisores leves dentro de surfaces |
| `--border-dashed` | `#334155` | `#CBD5E1` | Bordas tracejadas: estado desabilitado, placeholders de adição |

**Regras de hierarquia:**
- `background` → `background-deep` (mais fundo) → `surface` → `surface-2` → `surface-3`
- Nunca colocar `surface` como fundo de tela; nunca colocar `background` como fundo de card
- `border-subtle` vs `border`: use `border-subtle` para divisor interno de lista; `border` para delimitar o card inteiro

---

## 2. Texto / Foreground

Hierarquia de legibilidade: do mais importante ao mais discreto.

| Token CSS | Dark | Light | Uso | WCAG (sobre surface dark) |
|---|---|---|---|---|
| `--foreground` | `#F1F5F9` | `#0F172A` | Texto principal: títulos, valores de destaque, labels primários | 10.2:1 ✓ AAA |
| `--foreground-secondary` | `#94A3B8` | `#475569` | Texto secundário: subtítulos, metadados de suporte | 4.7:1 ✓ AA |
| `--foreground-muted` | `#748495` | `#64748B` | Texto terciário: datas, contadores, labels de eixo em gráficos | 3.2:1 ✓ AA Large |
| `--foreground-card-meta` | `#7CBFDA` | `#0369A1` | Metadados coloridos em cards de destaque (badge de período, variação de cesta) | 4.1:1 ✓ AA Large |

**Regras:**
- Nunca usar `foreground-muted` como texto de ação ou CTA
- `foreground-card-meta` é exclusivo para metadados dentro de cards com fundo `surface`; nunca em texto corrido
- `foreground-muted` requer tamanho mínimo de 18px regular ou 14px bold para AA compliance

---

## 3. Accent — Identidade de Marca

Cor de identidade do produto. Usar com parcimônia: máximo 1–2 elementos accent por tela.

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--accent` | `#38BDF8` | `#0369A1` | Cor de destaque principal: CTAs primários, links, ícones ativos, tab ativa |
| `--accent-deep` | `#0EA5E9` | `#075985` | Variante escurecida: estado pressed do botão primário, gradientes de destaque |
| `--accent-foreground` | `#0F172A` | `#FFFFFF` | Texto/ícone sobre fundo accent — garante contraste mínimo 4.5:1 |
| `--accent-muted` | `rgba(56,189,248,0.12)` | `rgba(3,105,161,0.10)` | Fundo de badge, chip ou tag com identidade de marca, sem peso visual |
| `--accent-glow` | `rgba(14,165,233,0.18)` | `rgba(3,105,161,0.30)` | Sombra/brilho ao redor de elementos accent em destaque (card hero, FAB) |
| `--accent-ring` | `rgba(56,189,248,0.08)` | `rgba(3,105,161,0.06)` | Anel de foco (focus ring) em inputs e botões interativos |

**Regras:**
- Nunca usar `accent` como cor de texto corrido — somente elementos interativos ou de destaque único
- `accent-muted` nunca como fundo de card inteiro; apenas badges/chips pequenos (< 32px de altura)
- `accent-foreground` é obrigatório sempre que o fundo for `accent` ou `accent-deep`

---

## 4. Semântica de Variação

Cores que comunicam estado e significado. Consistência obrigatória em todo o app.

### 4.1 — Regra Crítica de Negócio: Inflação

```
variationColor(pct):
  pct > 0  →  --destructive      // preço SUBIU → ruim para o consumidor (vermelho)
  pct < 0  →  --success          // preço CAIU  → bom para o consumidor  (verde)
  pct === 0 →  --foreground-muted // sem variação → neutro               (cinza)
```

**Justificativa:** O app mede o impacto da inflação no bolso do usuário. Inflação positiva significa que custou mais — isso é ruim, portanto `destructive`. Inflação negativa significa que custou menos — bom, portanto `success`. Esta semântica é **inversa** à de apps de ações (onde verde = subiu). Documentar claramente em toda nova tela que use variação de preço.

**Ícones associados:**
- `pct > 0`: `TrendingUp` ou `ChevronUp` em `--destructive`
- `pct < 0`: `TrendingDown` ou `ChevronDown` em `--success`
- `pct === 0`: `Minus` em `--foreground-muted`

**Referência IPCA:** A linha de comparação nos gráficos usa `--chart-ipca` (slate neutro) — nunca `destructive` ou `success`, pois é referência neutra de mercado.

### 4.2 — Tabela Completa

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--destructive` | `#F87171` | `#DC2626` | Inflação positiva (+), erros, ações de exclusão, alertas críticos |
| `--destructive-muted` | `rgba(248,113,113,0.10)` | `rgba(220,38,38,0.10)` | Fundo de badge/row com estado destrutivo |
| `--destructive-muted-border` | `rgba(248,113,113,0.25)` | `rgba(220,38,38,0.25)` | Borda de container com estado destrutivo |
| `--success` | `#34D399` | `#047857` | Inflação negativa (−), confirmações, estados positivos para o usuário |
| `--success-muted` | `rgba(52,211,153,0.10)` | `rgba(4,120,87,0.10)` | Fundo de badge/row com estado de sucesso |
| `--success-muted-border` | `rgba(52,211,153,0.25)` | `rgba(4,120,87,0.25)` | Borda de container com estado de sucesso |
| `--warning` | `#FBBF24` | `#B45309` | Alertas, dados desatualizados, atenção necessária |
| `--warning-muted` | `rgba(251,191,36,0.10)` | `rgba(180,83,9,0.10)` | Fundo de badge/row com estado de aviso |
| `--warning-muted-border` | `rgba(251,191,36,0.25)` | `rgba(180,83,9,0.25)` | Borda de container com estado de aviso |
| `--info` | `#38BDF8` | `#0369A1` | Informações neutras, tooltips, notas explicativas (= accent em dark) |
| `--info-muted` | `rgba(56,189,248,0.10)` | `rgba(3,105,161,0.10)` | Fundo de badge/row informativo |
| `--info-muted-border` | `rgba(56,189,248,0.25)` | `rgba(3,105,161,0.25)` | Borda de container informativo |

**Regra de uso dos pares:** Os três tokens de cada semântica (`*`, `*-muted`, `*-muted-border`) devem sempre ser usados juntos para criar containers de estado coerentes.

---

## 5. Overlay

Camadas de escurecimento para modais, drawers e bottom sheets.

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--overlay` | `rgba(0,0,0,0.75)` | `rgba(0,0,0,0.40)` | Scrim bloqueante de modal/dialog por cima do conteúdo |
| `--overlay-blur` | `rgba(0,0,0,0.70)` | `rgba(0,0,0,0.30)` | Fundo de sheet com backdrop blur aplicado |

**Regras:**
- Sempre aplicar `backdrop-blur-sm` junto com `overlay-blur` para suavizar a transição
- Nunca usar `overlay` em elementos que não bloqueiem interação com o fundo (acessibilidade)
- Em light mode, o overlay é mais transparente pois o fundo já tem contraste visual suficiente

---

## 6. Gráficos

Paletas dedicadas exclusivamente a visualizações de dados. Nunca reusar cores de gráfico em UI de navegação ou texto.

### 6.1 — Série Principal

| Token CSS | Dark | Light | Uso | Espessura de linha |
|---|---|---|---|---|
| `--chart-featured` | `#38BDF8` | `#0369A1` | Linha/barra da cesta do usuário em destaque (série principal) | 2px sólido |
| `--chart-ipca` | `#94A3B8` | `#475569` | Linha de referência IPCA (série secundária/comparativa) | 1.5px tracejado |

### 6.2 — Cestas Comparativas (até 3)

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--chart-basket-1` | `#A78BFA` | `#7C3AED` | Primeira cesta comparativa (violeta) |
| `--chart-basket-2` | `#F472B6` | `#DB2777` | Segunda cesta comparativa (rosa) |
| `--chart-basket-3` | `#FB923C` | `#EA580C` | Terceira cesta comparativa (âmbar/laranja) |

### 6.3 — Volumes por Categoria (até 6)

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--chart-volume-1` | `#A78BFA` | `#7C3AED` | Categoria 1 (violeta) |
| `--chart-volume-2` | `#F472B6` | `#DB2777` | Categoria 2 (rosa) |
| `--chart-volume-3` | `#FB923C` | `#EA580C` | Categoria 3 (âmbar) |
| `--chart-volume-4` | `#2DD4BF` | `#0891B2` | Categoria 4 (teal) |
| `--chart-volume-5` | `#E879F9` | `#C026D3` | Categoria 5 (fúcsia) |
| `--chart-volume-6` | `#A3E635` | `#3F6212` | Categoria 6 (lima) |

**Regras de gráficos:**
- Manter ordem fixa das cores em gráficos com múltiplas séries — nunca randomizar
- `chart-featured` é exclusivo para a série do usuário; nunca usar para cestas comparativas
- As 6 cores de volume foram validadas para daltonismo (protanopia/deuteranopia) entre si
- Em dark mode, as cores são mais saturadas para compensar o fundo escuro

---

## 7. Botões — 4 Variantes × Estados

### 7.1 — Primary (CTA de alta ênfase)

| Estado | Token(s) | Dark | Light |
|---|---|---|---|
| Default BG | `--btn-primary-bg` | `#38BDF8` | `#0369A1` |
| Default Text | `--btn-primary-text` | `#0F172A` | `#FFFFFF` |
| Pressed BG | `--btn-primary-bg-pressed` | `#0EA5E9` | `#075985` |
| Disabled BG | `--btn-primary-bg-disabled` | `#1E293B` | `#F1F5F9` |
| Disabled Text | `--btn-primary-text-disabled` | `#748495` | `#94A3B8` |

### 7.2 — Secondary (outline, ênfase média)

| Estado | Token(s) | Dark | Light |
|---|---|---|---|
| Border | `--btn-secondary-border` | `#334155` | `#E2E8F0` |
| Text | `--btn-secondary-text` | `#F1F5F9` | `#0F172A` |
| BG Pressed | `--btn-secondary-bg-pressed` | `#263548` | `#F8FAFC` |
| Border Disabled | `--btn-secondary-border-disabled` | `#1E293B` | `#F1F5F9` |
| Text Disabled | `--btn-secondary-text-disabled` | `#748495` | `#94A3B8` |

### 7.3 — Ghost (sem fundo, ênfase baixa)

| Estado | Token(s) | Dark | Light |
|---|---|---|---|
| Text | `--btn-ghost-text` | `#F1F5F9` | `#0F172A` |
| BG Pressed | `--btn-ghost-bg-pressed` | `#263548` | `#F8FAFC` |
| Text Disabled | `--btn-ghost-text-disabled` | `#748495` | `#94A3B8` |

### 7.4 — Destructive (ação perigosa, outline vermelho)

| Estado | Token(s) | Dark | Light |
|---|---|---|---|
| Border | `--btn-destructive-border` | `#F87171` | `#DC2626` |
| Text | `--btn-destructive-text` | `#F87171` | `#DC2626` |
| BG Pressed | `--btn-destructive-bg-pressed` | `rgba(248,113,113,0.10)` | `rgba(220,38,38,0.10)` |
| Text Pressed | `--btn-destructive-text-pressed` | `#FECACA` | `#991B1B` |
| Border Disabled | `--btn-destructive-border-disabled` | `#334155` | `#E2E8F0` |
| Text Disabled | `--btn-destructive-text-disabled` | `#748495` | `#94A3B8` |

**Propriedades fixas (mode-agnostic):** `border-radius: 12px (--radius-md)`, `padding: 12px 16px`, `font-size: 14px`, `font-weight: 600`.

---

## 8. Card

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--card-bg` | `#1E293B` | `#FFFFFF` | Fundo padrão de card (= surface) |
| `--card-border` | `#334155` | `#E2E8F0` | Borda de card padrão |
| `--card-highlight-border` | `#2A6496` | `#BAE6FD` | Borda do card hero em destaque |
| `--card-highlight-bg` (gradiente) | `linear-gradient(135deg, #1E3A5F 0%, #1E293B 60%, #162032 100%)` | `linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 100%)` | Fundo do card hero — usar via `style` inline (não suportado em CSS var RN) |
| `--card-highlight-accent-line` (gradiente) | `linear-gradient(90deg, #38BDF8 0%, #0EA5E9 60%, transparent 100%)` | `linear-gradient(90deg, #0369A1 0%, #0284C7 60%, transparent 100%)` | Linha decorativa de accent no topo do card hero |
| `--card-highlight-glow` | `rgba(56,189,248,0.20)` | `rgba(3,105,161,0.30)` | Sombra colorida ao redor do card hero |
| `--card-highlight-divider` | `rgba(56,189,248,0.15)` | `rgba(3,105,161,0.15)` | Divisor interno do card hero |
| `--card-highlight-shadow` (shadow) | `0 0 0 1px rgba(56,189,248,0.08), 0 8px 32px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.40)` | `0 0 0 1px rgba(186,230,253,0.5), 0 8px 32px rgba(3,105,161,0.12)` | Box-shadow completo do card hero |

**Notas:**
- Gradientes (`card-highlight-bg`, `card-highlight-accent-line`) não funcionam como CSS custom properties em React Native. Devem ser passados via `style` inline ou `LinearGradient` do Expo
- Fonte dos valores: `design-tokens.ts → DARK.cardHighlightBg` e `LIGHT.cardHighlightBg`

---

## 9. Input

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--input-bg` | `#162032` | `#FFFFFF` | Fundo padrão do campo de texto |
| `--input-border` | `#334155` | `#E2E8F0` | Borda padrão do input |
| `--input-focus-border` | `#38BDF8` | `#0369A1` | Borda com foco ativo |
| `--input-focus-shadow` | `rgba(56,189,248,0.08)` | `rgba(3,105,161,0.06)` | Sombra de foco (anel externo) |
| `--input-error-border` | `#F87171` | `#DC2626` | Borda no estado de erro |
| `--input-error-shadow` | `rgba(248,113,113,0.10)` | `rgba(220,38,38,0.10)` | Sombra de erro (anel externo vermelho) |
| `--input-disabled-bg` | `#1E293B` | `#F8FAFC` | Fundo desabilitado |
| `--input-disabled-border` | `#1E293B` | `#F1F5F9` | Borda desabilitada |

---

## 10. Tab Bar

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--tab-bar-bg` | `#0F172A` | `#FFFFFF` | Fundo da barra de navegação inferior |
| `--tab-bar-border` | `#1E293B` | `#F1F5F9` | Borda superior da tab bar |
| `--tab-active-color` | `#38BDF8` | `#0369A1` | Cor do ícone e label da aba ativa |
| `--tab-inactive-color` | `#475569` | `#94A3B8` | Cor do ícone e label de abas inativas |

---

## 11. Toggle / Segmented Control

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--toggle-container-bg` | `#0F172A` | `#FFFFFF` | Fundo do container do toggle |
| `--toggle-active-bg` | `#1E293B` | `#F1F5F9` | Fundo da pílula ativa dentro do toggle |
| `--toggle-active-fg` | `#F1F5F9` | `#0F172A` | Texto/ícone na opção ativa |
| `--toggle-inactive-fg` | `#748495` | `#64748B` | Texto/ícone nas opções inativas |

---

## 12. Chip / Filter

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--chip-bg` | `#1E293B` | `#FFFFFF` | Fundo do chip inativo |
| `--chip-border` | `#334155` | `#E2E8F0` | Borda do chip inativo |
| `--chip-text` | `#94A3B8` | `#475569` | Texto/label do chip inativo |
| `--chip-active-bg` | `rgba(56,189,248,0.12)` | `rgba(3,105,161,0.10)` | Fundo do chip ativo |
| `--chip-active-border` | `#38BDF8` | `#0369A1` | Borda do chip ativo |
| `--chip-active-text` | `#38BDF8` | `#0369A1` | Texto do chip ativo |

---

## 13. Skeleton

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--skeleton-bg` | `#1E293B` | `#E2E8F0` | Cor base do shimmer (fundo do placeholder) |
| `--skeleton-shine` | `rgba(255,255,255,0.04)` | `rgba(255,255,255,0.70)` | Cor do brilho animado passando sobre o skeleton |

**Implementação:** Usar `Animated.Value` com interpolação de `translateX` para simular o shimmer em React Native. O `skeleton-shine` representa a cor do gradiente de destaque na animação.

---

## 14. Badge

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--badge-auto-bg` | `#0F172A` | `#DBEAFE` | Fundo do badge "AUTO" (coleta automática de preço) |
| `--badge-auto-text` | `#748495` | `#1E40AF` | Texto do badge "AUTO" |

---

## 15. Divisores / Frozen

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--divider-frozen-bg` | `rgba(30,41,59,0.80)` | `#F1F5F9` | Fundo do separador de seção "congelada" (cabeçalho sticky de lista) |
| `--divider-frozen-text` | `#475569` | `#475569` | Texto do separador congelado (igual em ambos os modos) |
| `--frozen-indicator-bg` | `rgba(116,132,149,0.15)` | `rgba(116,132,149,0.15)` | Fundo do indicador de item congelado (igual em ambos os modos) |

---

## 16. Sheet / Modal

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--sheet-handle` | `#334155` | `#CBD5E1` | Cor da alça de drag do bottom sheet |
| `--modal-backdrop` | `rgba(0,0,0,0.75)` | `rgba(0,0,0,0.40)` | Backdrop de modal (= overlay) |

---

## 17. Componentes Futuros

Tokens definidos na spec para componentes do MVP 2+. Não utilizados no MVP 1.  
Incluídos para evitar reabrir o contexto no futuro.

### FAB Menu

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--fab-menu-bg` | `#1E293B` | `#FFFFFF` | Fundo do menu do FAB expandido |
| `--fab-menu-border` | `#334155` | `#E2E8F0` | Borda do menu FAB |
| `--fab-menu-item-bg` | `#162032` | `#F8FAFC` | Fundo de cada item no menu FAB |
| `--fab-menu-item-pressed` | `#263548` | `#F1F5F9` | Fundo de item FAB pressionado |

### Segmented Tabs

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--segmented-tab-bg` | `#162032` | `#F1F5F9` | Fundo do container segmented tabs |
| `--segmented-tab-active-bg` | `#1E293B` | `#FFFFFF` | Fundo da aba ativa |
| `--segmented-tab-active-text` | `#F1F5F9` | `#0F172A` | Texto da aba ativa |
| `--segmented-tab-inactive-text` | `#748495` | `#64748B` | Texto das abas inativas |

### Tag Removível

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--tag-bg` | `rgba(56,189,248,0.12)` | `rgba(3,105,161,0.10)` | Fundo da tag |
| `--tag-text` | `#38BDF8` | `#0369A1` | Texto/label da tag |
| `--tag-remove-icon` | `#94A3B8` | `#475569` | Ícone "×" de remover a tag |

### Date Picker

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--datepicker-bg` | `#1E293B` | `#FFFFFF` | Fundo do calendar picker |
| `--datepicker-border` | `#334155` | `#E2E8F0` | Borda do picker |
| `--datepicker-selected-bg` | `#38BDF8` | `#0369A1` | Fundo do dia selecionado |
| `--datepicker-selected-text` | `#0F172A` | `#FFFFFF` | Texto do dia selecionado |
| `--datepicker-today-border` | `rgba(56,189,248,0.50)` | `rgba(3,105,161,0.50)` | Borda do dia atual (não selecionado) |

### Slider

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--slider-track-bg` | `#334155` | `#E2E8F0` | Fundo da trilha |
| `--slider-track-fill` | `#38BDF8` | `#0369A1` | Preenchimento da trilha (valor selecionado) |
| `--slider-thumb-bg` | `#F1F5F9` | `#FFFFFF` | Fundo do thumb |
| `--slider-thumb-border` | `#38BDF8` | `#0369A1` | Borda do thumb |

### Switch

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--switch-track-off` | `#334155` | `#E2E8F0` | Trilha no estado desativado |
| `--switch-track-on` | `#38BDF8` | `#0369A1` | Trilha no estado ativado |
| `--switch-thumb` | `#F1F5F9` | `#FFFFFF` | Bolinha do switch |

### Radio Button

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--radio-border` | `#334155` | `#E2E8F0` | Borda do radio não selecionado |
| `--radio-selected-bg` | `#38BDF8` | `#0369A1` | Fundo do radio selecionado |
| `--radio-selected-dot` | `#0F172A` | `#FFFFFF` | Ponto interno do radio selecionado |

### Content Tabs (abas de conteúdo dentro de telas)

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--content-tab-border` | `#334155` | `#E2E8F0` | Linha base das abas |
| `--content-tab-active-border` | `#38BDF8` | `#0369A1` | Indicador da aba ativa (underline) |
| `--content-tab-active-text` | `#F1F5F9` | `#0F172A` | Texto da aba ativa |
| `--content-tab-inactive-text` | `#748495` | `#64748B` | Texto das abas inativas |

### Snackbar / Toast

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--snackbar-bg` | `#263548` | `#0F172A` | Fundo do snackbar (escuro em ambos os modos) |
| `--snackbar-text` | `#F1F5F9` | `#F1F5F9` | Texto do snackbar |
| `--snackbar-action` | `#38BDF8` | `#38BDF8` | Botão de ação do snackbar |

### Progress Bar

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--progress-track-bg` | `#334155` | `#E2E8F0` | Fundo da barra de progresso |
| `--progress-fill` | `#38BDF8` | `#0369A1` | Preenchimento da barra |

### Avatar

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--avatar-bg` | `#162032` | `#F1F5F9` | Fundo do avatar sem foto |
| `--avatar-text` | `#94A3B8` | `#475569` | Iniciais do avatar |
| `--avatar-border` | `rgba(56,189,248,0.20)` | `rgba(3,105,161,0.20)` | Borda opcional do avatar |

### Swipe Actions

| Token CSS | Dark | Light | Uso |
|---|---|---|---|
| `--swipe-destructive-bg` | `rgba(248,113,113,0.20)` | `rgba(220,38,38,0.15)` | Fundo da ação de swipe destrutiva (excluir) |
| `--swipe-action-bg` | `rgba(56,189,248,0.12)` | `rgba(3,105,161,0.10)` | Fundo de ação de swipe não-destrutiva |

---

## 18. Tipografia

### 18.1 — Famílias

| Variável | Família | Papel no app | Pesos disponíveis |
|---|---|---|---|
| `--font-heading` (`DMSans`) | DM Sans | Títulos, valores estatísticos, CTAs, headings | 700 (Bold) |
| `--font-body` (`Inter`) | Inter | Corpo de texto, labels, captions, metadados, inputs | 400 (Regular), 500 (Medium), 600 (SemiBold) |
| `--font-mono` (`JetBrainsMono`) | JetBrains Mono | Valores de código, debugging, IPCA exato | 400, 500 |

**Regra:** Nunca usar DM Sans para texto corrido com mais de 2 linhas (baixa legibilidade em body). Nunca usar Inter para valores estatísticos (falta de peso visual).

### 18.2 — Escala de Tamanhos

| Nome do Estilo | Família | Tamanho | Peso | Line-height | Cor padrão | Uso |
|---|---|---|---|---|---|---|
| `stat-large` | DM Sans | 36px | 700 | 1.1 | `--foreground` | Valor principal de inflação no card hero, total em R$ |
| `stat-medium` | DM Sans | 24px | 700 | 1.2 | `--foreground` | Valores monetários médios em cards |
| `stat-small` | DM Sans | 20px | 700 | 1.3 | `--foreground` | Valores menores, totais de linha em tabelas |
| `heading` | DM Sans | 24px | 700 | 1.2 | `--foreground` | Título principal de tela e de card |
| `subheading` | DM Sans | 16px | 700 | 1.4 | `--foreground` | Subtítulo de seção interna |
| `body` | Inter | 14px | 400 | 1.5 | `--foreground` | Texto descritivo, corpo de mensagem |
| `body-semibold` | Inter | 14px | 600 | 1.5 | `--foreground` | Nome de produto, label de item de lista |
| `caption` | Inter | 12px | 400 | 1.4 | `--foreground-secondary` | Metadados, datas, contadores, períodos |
| `label` | Inter | 11px | 500 | 1.3 | `--foreground-muted` | Labels de campo, rótulos de eixo de gráfico |
| `tag` | Inter | 10px | 600 | 1.2 | `--foreground-muted` | Tags de categoria, badges "AUTO" — sempre uppercase |

### 18.3 — Letter-spacing

| Uso | Valor |
|---|---|
| Texto corrido, valores numéricos | `0em` (padrão) |
| `label` e `tag` (uppercase) | `0.05em` (tracking-wide) |
| Tags de categoria especiais | `0.08em` (tracking-wider) |

### 18.4 — Line-height

| Uso | Valor |
|---|---|
| Estatísticas grandes (stat-*) | `1.1–1.2` |
| Headings | `1.2–1.3` |
| Corpo de texto | `1.5–1.6` |
| Captions e labels | `1.3–1.4` |

---

## 19. Espaçamento e Raios

### 19.1 — Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-xs` | `4px` | Badges inline, tags pequenas, indicadores |
| `--radius-sm` | `8px` | Inputs, botões compactos, chips |
| `--radius-md` | `12px` | Botões padrão, chips, cards internos, tooltips |
| `--radius-lg` | `16px` | Modais internos, drawers, popovers |
| `--radius-xl` | `20px` | Cards de lista, painéis laterais |
| `--radius-2xl` | `24px` | Card hero, bottom sheet principal |
| `--radius-full` | `9999px` | Pills, avatares, badges circulares, chips de filtro |

**Regra de aninhamento:** Elementos dentro de um container com `radius-2xl` devem usar no máximo `radius-lg`. Nunca usar o mesmo raio para container e elemento interno.

### 19.2 — Espaçamento (múltiplos de 4px)

| Token | Valor | Uso típico |
|---|---|---|
| `--spacing-1` | `4px` | Gaps mínimos entre ícone e badge |
| `--spacing-2` | `8px` | Padding de chip/badge, gap ícone-texto inline |
| `--spacing-3` | `12px` | Padding de item de lista compacto, gap padrão entre elementos |
| `--spacing-4` | `16px` | Padding padrão de card, gap entre cards |
| `--spacing-5` | `20px` | Padding de card hero |
| `--spacing-6` | `24px` | Padding de seção ou bottom sheet |
| `--spacing-8` | `32px` | Padding de telas, gap entre seções |
| `--spacing-10` | `40px` | Espaçamento entre blocos principais |
| `--spacing-12` | `48px` | Margens de tela em landscape |
| `--spacing-16` | `64px` | Espaços generosos, empty states |

---

## 20. Sombras

Valores fixos — independem do modo dark/light.

| Token | Valor | Uso |
|---|---|---|
| `--shadow-fab` | `0 4px 16px rgba(0,0,0,0.40)` | Botão de ação flutuante (FAB) |
| `--shadow-elevated` | `0 2px 12px rgba(0,0,0,0.30)` | Cards com elevação padrão |
| `--shadow-card-hero` | `0 0 0 1px rgba(56,189,248,0.08), 0 8px 32px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.40)` | Card hero de destaque (multi-camada) |
| `--shadow-modal` | `0 20px 60px rgba(0,0,0,0.60)` | Modais e dialogs |
| `--shadow-dropdown` | `0 4px 20px rgba(0,0,0,0.40)` | Menus dropdown e popovers |
| `--shadow-sheet` | `0 -4px 20px rgba(0,0,0,0.40)` | Bottom sheets (sombra para cima) |

---

## 21. Animação

Valores fixos — independem do modo dark/light.

### Durações

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | `150ms` | Micro-interações, ripple, hover de botão |
| `--duration-base` | `200ms` | Transições de estado padrão (active, focus, pressed) |
| `--duration-slow` | `300ms` | Modais, sheets, animações de entrada de tela |

### Easing

| Token | Valor | Uso |
|---|---|---|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Material Design standard — maioria das transições |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring com overshoot — FAB, bottom sheet, itens que "saltam" |

---

## 22. Regras de Acessibilidade

### Contraste Mínimo WCAG 2.1

#### Dark Mode

| Combinação | Ratio | Status | Uso |
|---|---|---|---|
| `--foreground` sobre `--background` | 14.5:1 | ✓ AAA | Texto principal em tela |
| `--foreground` sobre `--surface` | 10.2:1 | ✓ AAA | Texto em cards |
| `--foreground-secondary` sobre `--surface` | 4.7:1 | ✓ AA | Metadados em cards |
| `--foreground-muted` sobre `--surface` | 3.2:1 | ✓ AA Large | Labels uppercase ≥ 11px |
| `--accent` sobre `--background` | 7.1:1 | ✓ AAA | Texto accent em tela |
| `--accent` sobre `--surface` | 5.0:1 | ✓ AA | Texto accent em cards |
| `--accent-foreground` sobre `--accent` | 6.8:1 | ✓ AA | Texto branco sobre botão |
| `--destructive` sobre `--surface` | 4.5:1 | ✓ AA | Texto de erro/alerta |
| `--success` sobre `--surface` | 5.2:1 | ✓ AA | Texto de sucesso |
| `--warning` sobre `--surface` | 4.8:1 | ✓ AA | Texto de aviso |

#### Light Mode

| Combinação | Ratio | Status | Uso |
|---|---|---|---|
| `--foreground` sobre `--background` | 14.8:1 | ✓ AAA | Texto principal em tela |
| `--accent` sobre `--background` | 5.8:1 | ✓ AA | Texto accent em tela |
| `--accent-foreground` sobre `--accent` | 4.6:1 | ✓ AA | Texto branco sobre botão |
| `--destructive` sobre `--background` | 5.1:1 | ✓ AA | Texto de erro |
| `--success` sobre `--background` | 4.8:1 | ✓ AA | Texto de sucesso |

### Regras Gerais

1. Texto body (14px, regular): exigir AA mínimo (4.5:1)
2. Texto label/tag (10–11px, sempre uppercase + bold): exigir AA Large (3:1 mínimo)
3. `--foreground-muted` somente em textos ≥ 18px regular ou uppercase — está no limiar de AA Large
4. Nunca usar `*-muted` (accent-muted, success-muted, destructive-muted) como cor de texto — são exclusivos para fundos
5. Sempre verificar contraste quando combinar `--foreground-card-meta` com fundos de card hero

---

## 23. Notas para Extensão Futura

### Ativação do Light Mode (dark → light)

O MVP 1 força dark mode no entry point do app. A estrutura de tokens já suporta light mode completo. Para ativar:

**Web (Next.js):**
1. Remover `className="dark"` do `<html>` em `layout.tsx`
2. Adicionar `ThemeProvider` com `attribute="class"` e `defaultTheme="system"`
3. Os tokens em `:root` (light) e `.dark` (dark) em `globals.css` já estão prontos

**Mobile (React Native + NativeWind v5):**
1. Usar `useColorScheme()` do React Native para detectar o tema do sistema
2. No código: `const theme = useColorScheme() === 'dark' ? DARK : LIGHT`
3. O `@media (prefers-color-scheme: light)` em `mobile/global.css` já está configurado
4. NativeWind v5 aplica o media query automaticamente

### Tokens Planejados para MVP 2+

| Token | Uso previsto | Derivar de |
|---|---|---|
| `--surface-glass` | Cards frosted glass (blur + opacidade) | `--surface` com opacidade |
| `--chart-projection` | Linha tracejada de projeção futura | `--chart-ipca` com opacidade |
| `--badge-new-bg` / `--badge-new-text` | Badge de novidade em produtos recém-adicionados | `--accent-muted` / `--accent` |
| `--notification-dot` | Ponto indicador de notificação na tab bar | `--destructive` |
| `--drag-handle` | Handles de reordenação de items | `--border` |
| `--loading-spinner` | Spinner de carregamento primário | `--accent` |

### Princípios de Extensão

1. **Nunca adicionar tokens sem componente real** — tokens devem ser extraídos de uso existente, não antecipados sem base
2. **Tokens semânticos > literais** — preferir `--destructive` a `--red-400`
3. **Pares obrigatórios** — ao adicionar `--*`, adicionar também `--*-muted` e `--*-muted-border`
4. **Consistência cross-platform** — qualquer token em `design-tokens.ts` deve ser refletido imediatamente em `globals.css` e `mobile/global.css`
5. **Documentar a justificativa** — cada token novo deve ter um comentário de "por que existe" e "quando usar"
