# Portfólio — Vinicius Soares

Landing page pessoal construída com Angular 21, seguindo Atomic Design estrito. Single Page Application com navegação por âncoras.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Angular 21 (standalone, signals, `@if`/`@for`) |
| Estilo | SCSS com design tokens (`--color-*`, `--space-*`, etc.) |
| Testes | Vitest via `@angular/build:unit-test` |
| Fontes | Inter (Google Fonts) |
| Animações | CSS keyframes + IntersectionObserver |

## Estrutura de Pastas

```
src/
  styles/
    _tokens.scss          # Design tokens (CSS custom properties)
    _reset.scss           # CSS reset
    _animations.scss      # Keyframes e classes utilitárias
    _mixins.scss          # Mixins SCSS (breakpoints, container)
  app/
    shared/
      models/             # Interfaces TypeScript
      services/           # ScrollTrackerService, PortfolioDataService
      directives/         # AnimateOnScrollDirective
    components/
      atoms/              # badge, button, heading, text, label, divider, icon
      molecules/          # nav-link, stat-card, tech-card, experience-item,
                          # project-item, contact-card, scroll-indicator, section-header
      organisms/          # header, hero, marquee, about, tech-grid, projects, contact, footer
      templates/          # landing-template
    pages/
      home/               # HomePageComponent (rota raiz "/")
```

## Seções da Landing Page

| # | Seção | ID âncora | Organism |
|---|---|---|---|
| 1 | Header | — | `ptf-header` |
| 2 | Hero / Banner | `#inicio` | `ptf-hero` |
| 3 | Tarja Marquee | — | `ptf-marquee` |
| 4 | Sobre | `#sobre` | `ptf-about` |
| 5 | Tecnologias | `#tecnologias` | `ptf-tech-grid` |
| 6 | Projetos | `#projetos` | `ptf-projects` |
| 7 | Contato | `#contato` | `ptf-contact` |
| 8 | Footer | — | `ptf-footer` |

## Comandos

```bash
npm start          # dev server
npm run build      # build produção
npm test           # executa testes com Vitest
```

## Documentação

- [FEATURES.md](./FEATURES.md) — registro de features implementadas
- [CHANGELOG.md](./CHANGELOG.md) — histórico de mudanças
- [architecture/decisions.md](./architecture/decisions.md) — decisões arquiteturais (ADR-001 a ADR-008)
- [architecture/components.md](./architecture/components.md) — catálogo completo de componentes (Atoms, Molecules, Organisms, Templates, Pages, Shared)
