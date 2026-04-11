# Decisões Arquiteturais

---

## ADR-001 — Atomic Design como sistema de componentes

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** O projeto precisava de uma estratégia de componentização clara que facilitasse reuso, testes e manutenção futura.

**Decisão:** Adotar os 5 níveis do Atomic Design (Atoms, Molecules, Organisms, Templates, Pages), com regras rígidas:
- Atoms: apenas `@Input()`/`@Output()`, zero lógica de negócio
- Molecules: estado local mínimo, combinam atoms
- Organisms: podem injetar services, definem comportamento
- Templates: zero lógica de dados, apenas layout com slots
- Pages: orquestram dados e services, passam para baixo

**Consequência:** Estrutura mais verbosa (mais arquivos), mas com responsabilidades claras, testabilidade alta e reuso máximo.

---

## ADR-002 — CSS Custom Properties para design tokens

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** Tokens de cor, espaçamento e tipografia precisam ser acessíveis em todos os componentes SCSS sem imports explícitos.

**Decisão:** Definir todos os tokens como CSS Custom Properties em `:root` no arquivo `src/styles/_tokens.scss`, importado globalmente via `styles.scss`. Componentes usam `var(--color-primary)` diretamente, sem precisar importar nada.

**Consequência:** Zero acoplamento entre componentes e o arquivo de tokens. Mudanças de tema futuras impactam apenas `_tokens.scss`.

---

## ADR-003 — SCSS mixins para breakpoints

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** Precisávamos de um sistema de breakpoints consistente e evitar duplicação de media queries.

**Decisão:** Criar mixins SCSS em `src/styles/_mixins.scss` e configurar `stylePreprocessorOptions.includePaths: ["src"]` no `angular.json`. Componentes importam com `@use 'styles/mixins' as m;` e usam `@include m.mobile { ... }`.

**Alternativa descartada:** CSS Container Queries — ainda sem suporte uniforme em todos os targets de teste.

---

## ADR-004 — Ícones inline SVG via componente ptf-icon

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** O projeto precisa de ~10 ícones. Bibliotecas externas (Lucide, Font Awesome) adicionam peso desnecessário para esse volume.

**Decisão:** Criar `ptf-icon` com um mapa estático de strings SVG. O componente recebe `name: string` e renderiza via `[innerHTML]`.

**Consequência:** Bundle zero-dependency para ícones. Para adicionar um novo ícone, basta adicionar a string SVG ao mapa em `icon.ts`.

**Limitação:** Não é tree-shakeable automaticamente — todos os ícones ficam no bundle. Aceitável para ~10 ícones.

---

## ADR-005 — ScrollTrackerService para seção ativa no menu

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** O header precisa saber qual seção está visível na tela para destacar o link ativo.

**Decisão:** `ScrollTrackerService` (providedIn: 'root') mantém um `signal<string>` com o ID da seção ativa. Cada organism de seção registra seu elemento via `track(element, sectionId)` no `ngAfterViewInit` usando `IntersectionObserver` com threshold de 40%.

**Alternativa descartada:** HostListener scroll no header calculando offsets — frágil e dependente de tamanhos de seção.

---

## ADR-006 — AnimateOnScrollDirective para animações de entrada

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** Múltiplos elementos em múltiplas seções precisam de animação fade-in+slide-up ao entrar na viewport.

**Decisão:** Diretiva `ptfAnimateOnScroll` que aplica a classe `animate-on-scroll` ao host e usa `IntersectionObserver` para adicionar `is-visible` quando o elemento entra na viewport. A animação real é feita puramente em CSS.

**Consequência:** Lógica de observação isolada na diretiva. SCSS global define o visual. Atraso escalonado via `nth-child` no SCSS dos organisms.

---

## ADR-007 — Dados estáticos no PortfolioDataService

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** Dados do portfólio (projetos, experiências, tecnologias) são estáticos e não vêm de uma API.

**Decisão:** Centralizar todos os dados em `PortfolioDataService` com métodos getter síncronos. Organisms injetam o service diretamente.

**Alternativa descartada:** Props passadas pela home page para todos os organisms — aumentaria o acoplamento na página e o tamanho dos templates.

---

## ADR-008 — Single Page sem rotas adicionais

**Data:** 2026-04-11  
**Status:** Aceito

**Contexto:** O portfólio é uma landing page com navegação por âncoras, sem necessidade de múltiplas rotas.

**Decisão:** Única rota `''` que carrega `HomePageComponent` via `loadComponent` (lazy). Wildcard `'**'` redireciona para `''`. Navegação interna via `href="#section-id"` + CSS `scroll-behavior: smooth`.

**Consequência:** Sem complexidade de roteamento. A URL sempre é `/` independente da seção visível.
