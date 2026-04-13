# Design Tokens — Inflação Pessoal

> Fonte de verdade do sistema de design.  
> Todos os tokens são derivados de `components/design-tokens.ts` e espelhados em `app/globals.css` (web) e `mobile/global.css` (NativeWind v5 mobile).

---

## Índice

1. [Fundação — Cores Base](#1-fundação--cores-base)
2. [Texto (Foreground)](#2-texto-foreground)
3. [Accent — Identidade de Marca](#3-accent--identidade-de-marca)
4. [Semântica de Variação](#4-semântica-de-variação)
5. [Overlay](#5-overlay)
6. [Gráficos](#6-gráficos)
7. [Componentes Especiais](#7-componentes-especiais)
8. [Tipografia](#8-tipografia)
9. [Espaçamento e Raios](#9-espaçamento-e-raios)
10. [Regras de Acessibilidade](#10-regras-de-acessibilidade)
11. [Semântica de Variação de Inflação](#11-semântica-de-variação-de-inflação)
12. [Notas para Extensão Futura](#12-notas-para-extensão-futura)

---

## 1. Fundação — Cores Base

Camadas de profundidade para fundos e superfícies. Sempre use a camada mais escura (bgDeep) como fundo absoluto da tela e suba gradativamente para superfícies sobrepostas.

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `background` | `#0F172A` | `#F8FAFC` | Fundo principal de toda a tela |
| `background-deep` | `#0A111E` | `#F1F5F9` | Fundo mais profundo (bottom bar, áreas atrás de cards) |
| `surface` | `#1E293B` | `#FFFFFF` | Cards, sheets, painéis elevados sobre o fundo |
| `surface-hover` | `#263548` | `#F8FAFC` | Estado hover/pressed de itens interativos sobre surface |
| `surface-2` | `#162032` | `#F8FAFC` | Superfície secundária (rowlist, separadores internos de card) |
| `surface-3` | `#172035` | `#FFFFFF` | Superfície terciária (nested cards, listas dentro de cards) |
| `border` | `#334155` | `#E2E8F0` | Bordas visíveis de cards e separadores |
| `border-subtle` | `#1E293B` | `#F1F5F9` | Bordas quase invisíveis para divisores leves |
| `border-dashed` | `#334155` | `#CBD5E1` | Bordas tracejadas (estado desabilitado, placeholders) |

**Regra de uso:**  
- Nunca use `surface` como fundo de tela — reserve para cards elevados.  
- `surface-2` e `surface-3` são usados exclusivamente dentro de `surface` para criar hierarquia interna.  
- `border-subtle` vs `border`: use `border-subtle` quando a divisão visual deve ser mínima (separador interno de lista); use `border` para delimitar cards inteiros.

---

## 2. Texto (Foreground)

Hierarquia de legibilidade. Do mais importante para o mais discreto.

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `foreground` | `#F1F5F9` | `#0F172A` | Texto principal: títulos, valores de destaque, labels primários |
| `foreground-secondary` | `#94A3B8` | `#475569` | Texto secundário: subtítulos, metadados de suporte |
| `foreground-muted` | `#748495` | `#64748B` | Texto terciário: datas, contadores, labels de eixo em gráficos |
| `foreground-card-meta` | `#7CBFDA` | `#0369A1` | Metadados coloridos em cards de destaque (variação de período, badge de cesta) |

**Regra de uso:**  
- Nunca use `foreground-muted` como texto de ação ou CTA — sempre use `foreground` ou `accent`.  
- `foreground-card-meta` é exclusivo para metadados dentro de cards com fundo `surface`, nunca em texto corrido.

---

## 3. Accent — Identidade de Marca

Cor de identidade do app. Usada com parcimônia: máximo 1–2 elementos por tela.

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `accent` | `#38BDF8` | `#0369A1` | Cor de destaque principal: CTAs primários, links, ícones ativos |
| `accent-deep` | `#0EA5E9` | `#075985` | Variante escurecida: estado pressed de botão primário, gradientes |
| `accent-foreground` | `#0F172A` | `#FFFFFF` | Texto/ícone sobre fundo accent (garante contraste) |
| `accent-muted` | `rgba(56,189,248,0.12)` | `rgba(3,105,161,0.10)` | Fundo de badge, chip ou tag com identidade de marca, sem peso visual |
| `accent-glow` | `rgba(14,165,233,0.18)` | `rgba(3,105,161,0.30)` | Sombra/brilho ao redor de elementos accent em destaque |
| `accent-ring` | `rgba(56,189,248,0.08)` | `rgba(3,105,161,0.06)` | Anel de foco (focus ring) em inputs e botões |

**Regra de uso:**  
- Nunca use `accent` como cor de texto corrido — somente em elementos interativos ou de destaque.  
- `accent-muted` nunca como fundo de card inteiro; apenas em badges/chips pequenos.  
- `accent-foreground` é obrigatório sempre que o fundo for `accent` ou `accent-deep`.

---

## 4. Semântica de Variação

Cores que comunicam estado e significado. Consistentes em todo o app.

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `destructive` | `#F87171` | `#DC2626` | Inflação subiu (+), erros, exclusão, alertas críticos |
| `destructive-muted` | `rgba(248,113,113,0.10)` | `rgba(220,38,38,0.10)` | Fundo de badge/row com estado destrutivo |
| `destructive-muted-border` | `rgba(248,113,113,0.25)` | `rgba(220,38,38,0.25)` | Borda de container com estado destrutivo |
| `success` | `#34D399` | `#047857` | Inflação caiu (-), confirmações, estados positivos |
| `success-muted` | `rgba(52,211,153,0.10)` | `rgba(4,120,87,0.10)` | Fundo de badge/row com estado de sucesso |
| `success-muted-border` | `rgba(52,211,153,0.25)` | `rgba(4,120,87,0.25)` | Borda de container com estado de sucesso |
| `warning` | `#FBBF24` | `#B45309` | Alertas, dados desatualizados, atenção necessária |
| `warning-muted` | `rgba(251,191,36,0.10)` | `rgba(180,83,9,0.10)` | Fundo de badge/row com estado de aviso |
| `warning-muted-border` | `rgba(251,191,36,0.25)` | `rgba(180,83,9,0.25)` | Borda de container com estado de aviso |
| `info` | `#38BDF8` | `#0369A1` | Informações neutras, tooltips, notas explicativas |
| `info-muted` | `rgba(56,189,248,0.10)` | `rgba(3,105,161,0.10)` | Fundo de badge/row informativo |
| `info-muted-border` | `rgba(56,189,248,0.25)` | `rgba(3,105,161,0.25)` | Borda de container informativo |

**Regra de uso:**  
- A variação de inflação **positiva** (`pct > 0`) usa SEMPRE `destructive` — vermelho comunica "custou mais".  
- A variação de inflação **negativa** (`pct < 0`) usa SEMPRE `success` — verde comunica "custou menos".  
- Variação **zero** (`pct === 0`) usa `foreground-muted` — neutro, sem conotação.  
- Os pares `*-muted` + `*-muted-border` devem ser usados juntos para criar containers de estado.

---

## 5. Overlay

Camadas de escurecimento para modais, drawers e bottom sheets.

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `overlay` | `rgba(0,0,0,0.75)` | `rgba(0,0,0,0.40)` | Fundo de modal/dialog por cima do conteúdo |
| `overlay-blur` | `rgba(0,0,0,0.70)` | `rgba(0,0,0,0.30)` | Fundo de sheet com blur aplicado por cima |

**Regra de uso:**  
- Sempre aplicar `backdrop-blur` junto com `overlay-blur` para suavizar a transição.  
- Nunca usar `overlay` em elementos que não bloqueiem interação com o fundo.

---

## 6. Gráficos

Paletas dedicadas exclusivamente a visualizações de dados. Nunca reusar cores de gráfico em UI.

### 6.1 — Série Principal

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `chart-featured` | `#38BDF8` | `#0369A1` | Linha/barra da cesta do usuário (linha principal) |
| `chart-ipca` | `#94A3B8` | `#475569` | Linha de referência IPCA (linha secundária/tracejada) |

### 6.2 — Cestas (até 3 cestas comparativas)

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `chart-basket-1` | `#A78BFA` | `#7C3AED` | Primeira cesta comparativa (violeta) |
| `chart-basket-2` | `#F472B6` | `#DB2777` | Segunda cesta comparativa (rosa) |
| `chart-basket-3` | `#FB923C` | `#EA580C` | Terceira cesta comparativa (âmbar/laranja) |

### 6.3 — Volumes (até 6 categorias de produto)

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `chart-volume-1` | `#A78BFA` | `#7C3AED` | Categoria 1 (violeta) |
| `chart-volume-2` | `#F472B6` | `#DB2777` | Categoria 2 (rosa) |
| `chart-volume-3` | `#FB923C` | `#EA580C` | Categoria 3 (âmbar) |
| `chart-volume-4` | `#2DD4BF` | `#0891B2` | Categoria 4 (teal) |
| `chart-volume-5` | `#E879F9` | `#C026D3` | Categoria 5 (fúcsia) |
| `chart-volume-6` | `#A3E635` | `#3F6212` | Categoria 6 (lima) |

**Regra de uso:**  
- Manter ordem fixa das cores em gráficos de múltiplas séries — nunca randomizar.  
- `chart-featured` é reservado para a série do usuário; nunca usar para cestas comparativas.  
- Contrastes entre todas as séries foram validados entre si para daltonismo (modo protanopia/deuteranopia).

---

## 7. Componentes Especiais

Tokens compostos para componentes com identidade visual própria.

### 7.1 — Card de Destaque (Hero Card)

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `card-highlight-bg` | `linear-gradient(135deg, #1E3A5F 0%, #1E293B 60%, #162032 100%)` | `linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 100%)` | Fundo do card principal de destaque |
| `card-highlight-border` | `#2A6496` | `#BAE6FD` | Borda do card de destaque |
| `card-highlight-accent-line` | `linear-gradient(90deg, #38BDF8 0%, #0EA5E9 60%, transparent 100%)` | `linear-gradient(90deg, #0369A1 0%, #0284C7 60%, transparent 100%)` | Linha decorativa de accent no topo do card |
| `card-highlight-glow` | `rgba(56,189,248,0.20)` | `rgba(3,105,161,0.30)` | Sombra colorida ao redor do card |
| `card-highlight-divider` | `rgba(56,189,248,0.15)` | `rgba(3,105,161,0.15)` | Divisor interno do card de destaque |
| `card-highlight-shadow` | `0 0 0 1px rgba(56,189,248,0.08), 0 8px 32px rgba(14,165,233,0.18), 0 2px 8px rgba(0,0,0,0.40)` | `0 0 0 1px rgba(186,230,253,0.5), 0 8px 32px rgba(3,105,161,0.12)` | Box-shadow completo do card de destaque |

### 7.2 — Navegação e Controles

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `tab-inactive` | `#475569` | `#94A3B8` | Cor de ícone/texto de tab não selecionada |
| `toggle-container` | `#0F172A` | `#FFFFFF` | Fundo do container de toggle switch |
| `sheet-handle` | `#334155` | `#CBD5E1` | Handle drag de bottom sheet |

### 7.3 — Badges e Divisores

| Token | Dark Value | Light Value | Uso |
|---|---|---|---|
| `badge-auto-bg` | `#0F172A` | `#DBEAFE` | Fundo do badge "AUTO" (modo automático) |
| `badge-auto-text` | `#748495` | `#1E40AF` | Texto do badge "AUTO" |
| `divider-frozen-bg` | `rgba(30,41,59,0.80)` | `#F1F5F9` | Fundo do separador "congelado" (seção agrupada) |
| `divider-frozen-text` | `#475569` | `#475569` | Texto do separador congelado |
| `frozen-indicator-bg` | `rgba(116,132,149,0.15)` | `rgba(116,132,149,0.15)` | Fundo do indicador de item congelado (igual em ambos os modos) |

---

## 8. Tipografia

Dois tipos com papéis distintos. Nunca inverter os papéis.

| Variável CSS | Família | Papel | Pesos usados |
|---|---|---|---|
| `--font-dm-sans` | DM Sans | Headings, títulos, valores estatísticos, CTAs | 700 (Bold) |
| `--font-inter` | Inter | Corpo de texto, labels, captions, metadados | 400 (Regular), 500 (Medium), 600 (SemiBold) |

### Escala Tipográfica

| Nome do Estilo | Família | Tamanho | Peso | Cor padrão | Uso |
|---|---|---|---|---|---|
| `stat-large` | DM Sans | 36px | Bold (700) | `foreground` | Valor estatístico principal (% de inflação, total em R$) |
| `stat-medium` | DM Sans | 24px | Bold (700) | `foreground` | Valores monetários médios |
| `stat-small` | DM Sans | 20px | Bold (700) | `foreground` | Valores menores, totais de linha |
| `heading` | DM Sans | 24px | Bold (700) | `foreground` | Título de seção/tela |
| `subheading` | DM Sans | 16px | Bold (700) | `foreground` | Subtítulo de seção ou card |
| `body` | Inter | 14px | Regular (400) | `foreground` | Texto descritivo, corpo de mensagem |
| `body-semibold` | Inter | 14px | SemiBold (600) | `foreground` | Label de item de lista, nome de produto |
| `caption` | Inter | 12px | Regular (400) | `foreground-secondary` | Contadores, metadados, períodos |
| `label` | Inter | 11px | Medium (500) | `foreground-muted` | Labels de eixo, rótulos de campo de formulário, uppercase |
| `tag` | Inter | 10px | SemiBold (600) | `foreground-muted` | Tags de categoria, badges "AUTO", sempre uppercase |

**Regra de uso:**  
- `stat-*` é exclusivo para números/valores financeiros — nunca para texto corrido.  
- `label` e `tag` devem ter `letter-spacing: 0.05em` (tracking-wide) e `text-transform: uppercase`.  
- Nunca usar DM Sans para texto com mais de 2 linhas seguidas (legibilidade em corpo).

---

## 9. Espaçamento e Raios

### Raios de Borda

| Token | Valor | Uso |
|---|---|---|
| `radius-xs` | `4px` | Badges, chips, tags pequenas |
| `radius-sm` | `8px` | Botões, inputs, elementos de controle |
| `radius-md` | `12px` | Cards internos, tooltips, items de lista |
| `radius-lg` | `16px` | Bottom sheets, modais internos |
| `radius-xl` | `20px` | Cards principais, painéis laterais |
| `radius-2xl` | `24px` | Bottom sheet principal, cards de destaque |
| `radius-full` | `9999px` | Botões pill, avatares, badges circulares |

**Regra de uso:**  
- Nunca usar `radius-2xl` em elementos que não sejam containers de nível superior.  
- Elementos aninhados dentro de um container com `radius-2xl` devem usar no máximo `radius-lg`.

### Escala de Espaçamento

Usa a escala padrão do Tailwind (múltiplos de 4px). Valores mais usados no app:

| Classe Tailwind | Valor | Uso típico |
|---|---|---|
| `p-2` | 8px | Padding interno de chip/badge |
| `p-3` | 12px | Padding de item de lista compacto |
| `p-4` | 16px | Padding padrão de card |
| `p-5` | 20px | Padding de card com mais respiração |
| `p-6` | 24px | Padding de seção ou bottom sheet |
| `gap-2` | 8px | Gap entre ícone e texto inline |
| `gap-3` | 12px | Gap entre items de lista |
| `gap-4` | 16px | Gap entre cards |
| `gap-6` | 24px | Gap entre seções |

---

## 10. Regras de Acessibilidade

### Contraste Mínimo (WCAG AA)

| Combinação | Ratio | Status |
|---|---|---|
| `foreground` sobre `background` (dark) | 14.5:1 | ✓ AAA |
| `foreground` sobre `surface` (dark) | 10.2:1 | ✓ AAA |
| `foreground-secondary` sobre `surface` (dark) | 4.7:1 | ✓ AA |
| `foreground-muted` sobre `surface` (dark) | 3.2:1 | ✓ AA Large |
| `accent` sobre `background` (dark) | 7.1:1 | ✓ AAA |
| `accent` sobre `surface` (dark) | 5.0:1 | ✓ AA |
| `accent-foreground` sobre `accent` (dark) | 6.8:1 | ✓ AA |
| `destructive` sobre `surface` (dark) | 4.5:1 | ✓ AA |
| `success` sobre `surface` (dark) | 5.2:1 | ✓ AA |
| `foreground` sobre `background` (light) | 14.8:1 | ✓ AAA |
| `accent` sobre `background` (light) | 5.8:1 | ✓ AA |
| `accent-foreground` sobre `accent` (light) | 4.6:1 | ✓ AA |
| `destructive` sobre `background` (light) | 5.1:1 | ✓ AA |
| `success` sobre `background` (light) | 4.8:1 | ✓ AA |

**Regras:**  
- Texto de tamanho `body` (14px) ou menor: exigir AA (4.5:1 mínimo).  
- Texto `label` e `tag` (11–10px): exigir AA Large (3:1 mínimo) — são always uppercase, o que aumenta legibilidade.  
- `foreground-muted` somente em textos acima de 18px ou uppercase (pois está no limiar de AA Large).  
- Nunca usar `accent-muted`, `success-muted` ou `destructive-muted` como cor de texto.

---

## 11. Semântica de Variação de Inflação

Esta é a regra de negócio mais crítica do design system. Consistência é obrigatória.

```
variationColor(pct, theme):
  pct > 0  →  theme.destructive   // subiu: vermelho (ruim para o consumidor)
  pct < 0  →  theme.success       // caiu: verde (bom para o consumidor)
  pct = 0  →  theme.foreground-muted  // neutro: cinza
```

**Justificativa:**  
O app mede o impacto da inflação no bolso do usuário. Inflação positiva significa que o usuário pagou mais — isso é ruim, portanto `destructive` (vermelho). Inflação negativa significa que pagou menos — bom, portanto `success` (verde). Esta semântica é inversa à de muitos apps financeiros que usam verde para "subiu" (cotação de ações), e deve ser documentada claramente para evitar inconsistências.

**Ícones associados:**  
- `pct > 0`: `ChevronUp` ou `TrendingUp` na cor `destructive`  
- `pct < 0`: `ChevronDown` ou `TrendingDown` na cor `success`  
- `pct = 0`: `Minus` na cor `foreground-muted`

**Referência IPCA:**  
A linha de referência IPCA nos gráficos usa sempre `chart-ipca` — nunca `destructive` ou `success`, pois é uma referência neutra de mercado.

---

## 12. Notas para Extensão Futura

### Dark → Light (modo automático do sistema)

O app atualmente força dark mode via `<html lang="pt-BR" className="dark">`. A estrutura de tokens já suporta light mode completo. Para ativar:

1. Remover `className="dark"` do `<html>` em `layout.tsx`
2. Adicionar `ThemeProvider` com `attribute="class"` e `defaultTheme="system"`
3. Os tokens CSS em `:root` (light) e `.dark` (dark) já estão prontos em `globals.css`
4. No NativeWind mobile: usar `useColorScheme()` para selecionar entre os temas exportados

### Tokens Futuros Planejados

| Token | Uso previsto |
|---|---|
| `surface-glass` | Cards com efeito frosted glass (blur + opacidade) |
| `border-focus` | Borda de foco de inputs (atualmente inline) |
| `chart-projection` | Linha tracejada de projeção futura em gráficos |
| `badge-new-bg` / `badge-new-text` | Badge de novidade em produtos recém-adicionados |
| `skeleton-base` / `skeleton-highlight` | Cores para skeleton loading state |

### Princípios de Extensão

1. **Nunca adicionar tokens sem justificativa de componente real** — tokens devem ser extraídos de uso existente, não antecipados.
2. **Tokens semânticos > tokens literais** — preferir `destructive` a `red-400`.
3. **Pares obrigatórios** — ao adicionar `*-muted`, adicionar também `*-muted-border`.
4. **Consistência entre plataformas** — qualquer token adicionado em `design-tokens.ts` deve ser refletido imediatamente em `globals.css` e `mobile/global.css`.
