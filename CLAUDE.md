# CLAUDE.md — Portfólio Angular 21

## Visão Geral

Portfólio pessoal construído com **Angular 21**, seguindo **Atomic Design** estrito.
Single Page Application com navegação por âncoras. Tema dark, destaque ciano (`#00e5ff`). Idioma PT-BR.

- `docs/README.md` — estrutura, seções implementadas e comandos
- `docs/architecture/components.md` — catálogo de componentes existentes (Atoms, Molecules, Organisms…)
- `docs/FEATURES.md` — detalhes de cada feature
- `docs/CHANGELOG.md` — histórico de mudanças
- `docs/architecture/decisions.md` — decisões técnicas (ADR-001 a ADR-008)

---

## Arquitetura: Atomic Design

Todos os componentes devem seguir os cinco níveis do Atomic Design. Antes de criar um componente novo, verifique se já existe em `docs/architecture/components.md`.

### Princípios

- **Atoms** — menores elementos indivisíveis. Apenas `@Input()`/`@Output()`, zero lógica de negócio.
- **Molecules** — combinam Atoms. Estado local mínimo.
- **Organisms** — combinam Molecules e Atoms. Podem injetar services.
- **Templates** — layouts com slots de conteúdo. Zero lógica de dados.
- **Pages** — orquestram services e dados, passam para os níveis inferiores.

### Componentização Total

Tudo deve ser componentizado, **incluindo textos**. Nenhum texto solto em templates de organismos ou páginas.

---

## Prefixo de Seletor

Todos os seletores de componente usam o prefixo **`ptf-`**.

---

## Stack e Padrões

- **Framework:** Angular 21 (standalone components, signals, `@if`/`@for`)
- **Estilo:** SCSS com design tokens via CSS Custom Properties (`src/styles/_tokens.scss`)
- **Mixins:** `@use 'styles/mixins' as m;` — disponível sem path relativo (configurado em `angular.json`)
- **Ícones:** Inline SVG via `ptf-icon`. Para adicionar: editar o mapa `ICONS` em `src/app/components/atoms/icon/icon.ts`
- **Estado:** Signals. Services apenas para estado compartilhado.
- **Rotas:** Lazy loading por página via `loadComponent`.
- **Change Detection:** `OnPush` em todos os componentes.
- **Tipagem:** Nenhum `any`. Interfaces em `src/app/shared/models/portfolio.models.ts`.
- **Acessibilidade:** Todo elemento interativo deve ter `aria-label` ou texto acessível.

### Animações de Scroll

Para animar um elemento ao entrar na viewport, use a diretiva `ptfAnimateOnScroll`:

```html
<div ptfAnimateOnScroll>...</div>
```

Diretiva em `src/app/shared/directives/animate-on-scroll.directive.ts`. Classes `animate-on-scroll` e `is-visible` definidas em `src/styles/_animations.scss`.

### Rastreamento de Seção Ativa

Cada organism de seção deve:
1. Injetar `ElementRef` e `ScrollTrackerService`
2. Em `ngAfterViewInit`: `scrollTracker.track(this.el.nativeElement, 'id-da-secao')`
3. Em `ngOnDestroy`: `scrollTracker.untrack('id-da-secao')`

IDs válidos: `inicio`, `sobre`, `tecnologias`, `projetos`, `contato`.

### Dados do Portfólio

Todos os dados estáticos estão em `PortfolioDataService` (`src/app/shared/services/portfolio-data.service.ts`). Para alterar conteúdo (nome, projetos, experiências, contatos), editar apenas esse arquivo.

---

## Testes Unitários

Todo componente deve ter testes que validem:

- Renderização com diferentes combinações de `@Input()`.
- Emissão de `@Output()` nos eventos esperados.
- Estados visuais e condicionais.
- Interação do usuário (cliques, digitação) quando aplicável.
- Casos de borda (inputs vazios, nulos, listas vazias).

**Runner:** Vitest via `@angular/build:unit-test`. Globals (`describe`, `it`, `expect`, `beforeEach`) disponíveis sem import explícito.

---

## Documentação Obrigatória

A cada feature criada ou modificada, atualizar:

- **`docs/FEATURES.md`** — uma entrada por seção/funcionalidade
- **`docs/CHANGELOG.md`** — log cronológico (formato semver)
- **`docs/architecture/decisions.md`** — ADRs quando há decisão relevante
- **`docs/architecture/components.md`** — ao criar ou alterar um componente

> **Regra de Ouro:** Nenhuma feature está completa sem atualização correspondente na documentação.
