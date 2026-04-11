# Changelog

## [1.0.2] — 2026-04-11

### Corrigido

**Bug crítico — StatCard com OnPush**
- `stat-card.ts` — IntersectionObserver atualizava `animated = true` sem notificar o Angular (OnPush), fazendo os valores das estatísticas ficarem com `opacity: 0` para sempre; corrigido com `ChangeDetectorRef.markForCheck()` após a mutação; threshold ajustado de 0.5 → 0.3

**Botão "Contato" no Header**
- `button.ts` / `button.scss` — adicionada variante `outline-primary` (fundo transparente, borda e texto na cor primária ciano), correspondendo ao design do Figma para o botão de contato no cabeçalho
- `header.html` — botão "Contato" alterado de `variant="outline"` para `variant="outline-primary"`

**Visibilidade de bordas e badges**
- `button.scss` — borda do botão `outline` aumentada de `rgba(255,255,255,0.25)` → `0.40` para maior visibilidade no hero
- `badge.scss` — variante `availability` com border de `rgba(255,255,255,0.07)` → `0.18` e leve fundo `rgba(255,255,255,0.04)` para destaque no hero

### Melhorado

**Tamanhos de heading nas seções**
- `heading.scss` — size `--lg` ampliada: máximo de `font-size-5xl` (48px) → `font-size-6xl` (60px) e vw de `4vw` → `5vw`, tornando os títulos das seções mais próximos do Figma

**Hero — Background sem imagem**
- `hero.scss` — background-image alterado para lista de camadas: tenta carregar `/hero-bg.jpg` e, como fallback, exibe gradient radial (`#0c1e2e → #0a1520 → var(--color-bg)`) criando profundidade visual mesmo sem a foto; overlay atualizado com gradient de 4 paradas + glow ciano sutil no lado direito

**Stat Cards**
- `stat-card.scss` — `font-size` do valor agora usa `clamp(font-size-4xl, 3.5vw, font-size-5xl)` para responsividade; `hover` inclui `box-shadow` para consistência com outros cards

**Tech Cards**
- `tech-card.scss` — padding aumentado de `var(--space-4) var(--space-5)` → `var(--space-5) var(--space-6)` e gap de `var(--space-3)` → `var(--space-4)` para melhor espaçamento interno

---

## [1.0.1] — 2026-04-11

### Corrigido

**Cores e backgrounds**
- `_tokens.scss` — background corrigido de azul-marinho (`#090e1a`) para preto com tint teal (`#070b0e`); card, section-alt e elevated atualizados na mesma proporção
- `hero.scss`, `header.scss` — RGB hardcoded nas gradientes/overlays atualizado para `rgba(7, 11, 14, …)` alinhado ao novo token `--color-bg`
- `about.scss` — adicionado `background-color: var(--color-bg-section-alt)` para alternância visual de seções

**Layout "Sobre"**
- `about.html` — `<ptf-section-header>` movido para dentro da coluna esquerda (ao lado dos stats), eliminando cabeçalho que ocupava largura total
- `about.scss` — grid corrigido de `1fr 1fr` para `2fr 3fr`; container sem gap extra; nova classe `__left` (flex column, gap 10) agrupa header + stats-grid
- `about.scss` — removido `gap: var(--space-16)` do container (não há mais elemento acima do grid)

**Seção Stacks (tech-grid)**
- `tech-grid.html` — removido `<div class="tech-grid__card-wrapper">` desnecessário; `ptfAnimateOnScroll` e `role="listitem"` aplicados diretamente no `<ptf-tech-card>`
- `tech-grid.scss` — removida regra `&__card-wrapper` obsoleta
- `tech-card.scss` — padding reduzido de `var(--space-5) var(--space-6)` → `var(--space-4) var(--space-5)`; gap de `var(--space-4)` → `var(--space-3)`; nome reduzido de `font-size-base` → `font-size-sm` para cards compactos
- `tech-card.scss` — adicionado `:host { display: block }` para participação correta no grid CSS após remoção do wrapper

## [1.0.0] — 2026-04-11

### Adicionado

**Setup e infraestrutura**
- Design tokens SCSS com CSS custom properties para cores, tipografia, espaçamento e breakpoints
- CSS reset global e classes de animação (`fade-in-up`, `animate-on-scroll`, `marquee-scroll`, `pulse-dot`, `scroll-line`)
- Mixins SCSS para breakpoints e container (`mobile`, `tablet`, `desktop`, `mobile-tablet`, `tablet-up`, `container`)
- `stylePreprocessorOptions.includePaths: ["src"]` no `angular.json` para imports limpos de mixins
- Google Fonts Inter via `<link>` no `index.html`
- `lang="pt-BR"` e meta description no `index.html`
- `ScrollTrackerService` — IntersectionObserver para detecção de seção ativa
- `PortfolioDataService` — dados estáticos do portfólio
- `AnimateOnScrollDirective` — animação de entrada ao scroll

**Atoms (7)**
- `ptf-icon` — SVG inline por nome (code, layers, database, server, box, git-branch, globe, mail, linkedin, github)
- `ptf-badge` — variantes: `primary`, `outline`, `availability`, `production`
- `ptf-button` — variantes: `filled`, `outline`; tamanhos: `md`, `sm`
- `ptf-heading` — níveis h1/h2/h3, tamanhos hero/xl/lg/md, suporte a `highlight`
- `ptf-text` — variantes primary/secondary/muted, tamanhos sm/base/lg
- `ptf-label` — uppercase ciano para subtítulos de seção
- `ptf-divider` — separador horizontal

**Molecules (8)**
- `ptf-nav-link` — link com estado ativo + `aria-current`
- `ptf-section-header` — combinação de `ptf-label` + `ptf-heading`
- `ptf-stat-card` — card com valor grande (ciano) + descrição + animação de entrada
- `ptf-tech-card` — card com ícone + categoria + nome da tecnologia
- `ptf-experience-item` — item de timeline (período, cargo, badge empresa, descrição)
- `ptf-project-item` — item de projeto (número, nome, status, ano, descrição, tags)
- `ptf-contact-card` — card de contato clicável (ícone, texto, subtítulo, link)
- `ptf-scroll-indicator` — "SCROLL" + barra animada

**Organisms (8)**
- `ptf-header` — menu fixo com logo, nav, botão contato, hamburger mobile, backdrop blur ao scroll
- `ptf-hero` — seção hero fullscreen com badge, heading, subtítulo, botões e scroll indicator
- `ptf-marquee` — faixa tech marquee infinita com animação CSS
- `ptf-about` — seção sobre com grid de stats 2×2 e timeline de experiências
- `ptf-tech-grid` — grid 4×3 de tecnologias com fade-in escalonado
- `ptf-projects` — lista vertical de 3 projetos com separadores
- `ptf-contact` — seção contato two-column com info e cards
- `ptf-footer` — rodapé com copyright e cargo

**Templates e Pages**
- `ptf-landing-template` — layout com ng-content slots nomeados
- `ptf-home-page` — página raiz que orquestra todos os organisms via template
- Rota lazy-loaded `''` → `HomePageComponent` em `app.routes.ts`

**Testes**
- ~60 arquivos `.spec.ts` cobrindo renderização, inputs, outputs, estados visuais e acessibilidade
