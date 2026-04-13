# Features

Registro de todas as features implementadas na landing page do portfólio.

---

## F-001 — Setup Inicial do Projeto

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**O que foi feito:**
- Design tokens via CSS custom properties (`src/styles/_tokens.scss`)
- CSS reset global (`src/styles/_reset.scss`)
- Keyframes e classes utilitárias de animação (`src/styles/_animations.scss`)
- Mixins SCSS para responsividade e container (`src/styles/_mixins.scss`)
- Configuração do `stylePreprocessorOptions` no `angular.json` com `includePaths: ["src"]`
- Smooth scroll via `html { scroll-behavior: smooth }`
- Google Fonts Inter configurado no `index.html`
- Interfaces TypeScript para todos os modelos de dados (`portfolio.models.ts`)
- `ScrollTrackerService` — rastreia seção ativa via IntersectionObserver
- `PortfolioDataService` — dados estáticos do portfólio (stats, experiências, tecnologias, projetos, contatos)
- `AnimateOnScrollDirective` — aplica fade-in+slide-up ao entrar na viewport

---

## F-002 — Header / Menu de Navegação

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-header` (organism) + `ptf-nav-link` (molecule) + `ptf-button` (atom)

**Comportamento:**
- Menu fixo no topo com `position: fixed` e `z-index: var(--z-header)`
- Logo "Vinicius **Soares**" com sobrenome em ciano
- Navbar central com links âncora: Início, Sobre, Tecnologias, Projetos, Contato
- Link ativo detectado pelo `ScrollTrackerService` com classe `nav-link--active` + indicador sublinhado
- Botão "Contato" usa variante `outline-primary` (borda e texto ciano), correspondendo ao Figma
- Backdrop blur + fundo semitransparente ao rolar (`header--scrolled`)
- Menu hambúrguer para mobile/tablet com animação de abertura/fechamento

---

## F-003 — Seção Hero / Banner

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-hero` (organism) + `ptf-badge`, `ptf-heading`, `ptf-button`, `ptf-scroll-indicator`

**Comportamento:**
- Ocupa 100dvh com background image (`/hero-bg.jpg`) + overlay gradiente
- Badge "Disponível para novos projetos" com ponto pulsante verde (`ptf-badge[variant=availability]`)
- Título H1 "Vinicius **Soares**" com destaque ciano (`ptf-heading[size=hero]`)
- Subtítulo com especialidades separadas por `·`
- Dois botões: "Entre em contato" (filled) e "Ver projetos" (outline)
- `ptf-scroll-indicator` com animação de linha vertical pulsante
- Fade-in com atraso progressivo nos elementos (CSS animation)

> **Nota:** A imagem de fundo (`/hero-bg.jpg`) deve ser colocada na pasta `public/`. Enquanto não existir, o fundo exibe o gradiente escuro de fallback via `background-color`.

---

## F-004 — Tarja de Tecnologias (Marquee)

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-marquee` (organism)

**Comportamento:**
- Faixa horizontal entre Hero e Sobre com `background-color: var(--color-bg-section-alt)`
- 12 tecnologias em maiúsculas separadas por losangos `◆` em ciano
- Animação `marquee-scroll` (CSS `@keyframes`) — scroll contínuo da direita para esquerda
- Conteúdo duplicado no HTML para loop seamless sem JavaScript
- Alternância de cor: a cada 3 itens aparece em ciano, demais em cinza

---

## F-005 — Seção Sobre (Quem Sou)

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-about` (organism) + `ptf-stat-card`, `ptf-experience-item`, `ptf-section-header`, `ptf-divider`

**Comportamento:**
- Layout duas colunas: grid de stats (esq.) + bio + timeline (dir.)
- 4 stat cards com animação de entrada ao entrar na viewport (IntersectionObserver + `ChangeDetectorRef.markForCheck()`)
- Parágrafo de apresentação pessoal
- Timeline com 3 experiências, cada uma com período, cargo, badge da empresa e descrição
- Separadores `ptf-divider` entre experiências (exceto após o último)
- `AnimateOnScrollDirective` nos blocos principais

> **Atenção:** `StatCardComponent` usa `OnPush`. Alterações assíncronas (IntersectionObserver) **devem** chamar `ChangeDetectorRef.markForCheck()` para forçar a re-renderização e exibir os valores das estatísticas.

---

## F-006 — Seção Tecnologias (Stack)

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-tech-grid` (organism) + `ptf-tech-card`, `ptf-section-header`

**Comportamento:**
- Grid 4×3 com 12 cards de tecnologias
- Cada card: ícone SVG (ciano) + categoria uppercase + nome
- Hover: elevação + brilho na borda (`border-color: var(--color-primary-border)`)
- `AnimateOnScrollDirective` com atraso escalonado (via `nth-child` no SCSS)
- Responsivo: 4 colunas → 3 (tablet) → 2 (mobile)

---

## F-007 — Seção Projetos (Portfólio)

**Status:** ⏸ Desabilitada via Feature Toggle  
**Data:** 2026-04-11 | Atualizado: 2026-04-13

**Componentes:** `ptf-projects` (organism) + `ptf-project-item`, `ptf-section-header`, `ptf-divider`

**Comportamento:**
- Lista vertical de 3 projetos separados por `ptf-divider`
- Cada item: número (ciano), nome, badge "Produção" (verde), ano, descrição, tags (outline badges)
- Hover no item: nome muda para ciano
- `AnimateOnScrollDirective` em cada item da lista

> **Feature Toggle:** desabilitada com `projetos: false` em `FeatureToggleService`. Para reativar: mudar para `true`. Isso reabilita a seção, o botão "Ver projetos" no Hero e o link "Projetos" no menu.

---

## F-008 — Seção Contato

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-contact` (organism) + `ptf-contact-card`, `ptf-section-header`, `ptf-badge`

**Comportamento:**
- `background-color: var(--color-bg-section-alt)` diferenciando do restante
- Layout duas colunas: info (esq.) + cards de contato (dir.)
- Título "Vamos trabalhar **juntos**" com destaque ciano
- Tabela de info: localização, disponibilidade, modalidade (badges ciano)
- 3 cards clicáveis (email, LinkedIn, GitHub) com ícone + link + subtítulo
- Hover: `transform: translateX(4px)` + brilho na borda

---

## F-010 — Feature Toggle System

**Status:** ✅ Concluído  
**Data:** 2026-04-13

**Serviço:** `FeatureToggleService` (`src/app/shared/services/feature-toggle.service.ts`)

**Comportamento:**
- `FEATURE_FLAGS` no topo do arquivo é a única fonte de verdade — mudar um `boolean` habilita/desabilita tudo relacionado à jornada
- `FeatureKey` é um union type que cresce conforme novas jornadas são adicionadas
- `NavItem.featureKey?` vincula itens do menu ao toggle correspondente; o `HeaderComponent` filtra automaticamente
- `HeroComponent` e `HomePageComponent` checam `isEnabled('projetos')` para esconder o botão e a seção
- Não depende de environment variables ou build steps — adequado para portfólio pessoal

**Como adicionar uma nova jornada com toggle:**
1. Adicionar a chave ao tipo `FeatureKey` em `feature-toggle.service.ts`
2. Adicionar `novaJornada: false` ao objeto `FEATURE_FLAGS`
3. Marcar o nav item com `featureKey: 'novaJornada'` em `portfolio-data.service.ts`
4. Condicionar a seção e outros pontos de entrada com `@if (isEnabled('novaJornada'))`

---

## F-011 — Contact Mobile Fix

**Status:** ✅ Concluído  
**Data:** 2026-04-13

**Arquivos:** `contact-card.scss`, `contact.scss`

**Problema resolvido:**
- Overflow horizontal no mobile causado por `white-space: nowrap` em URLs longas (ex.: LinkedIn) sem `min-width: 0` nos containers de grid, fazendo o layout ultrapassar o viewport

**Correções:**
- `contact-card.scss`: `min-width: 0` no card; mobile permite `word-break: break-all` para URLs
- `contact.scss`: `min-width: 0` em `__left` e `__right`; no mobile o `__info-row` empilha label e badge verticalmente para maior legibilidade

---

## F-009 — Footer

**Status:** ✅ Concluído  
**Data:** 2026-04-11

**Componentes:** `ptf-footer` (organism) + `ptf-divider`

**Comportamento:**
- Separado por `ptf-divider`
- Esquerda: "© 2026 Vinicius **Soares**" com "Soares" em ciano
- Direita: "Analista de Sistemas" em cinza
- Ano calculado dinamicamente com `new Date().getFullYear()`
