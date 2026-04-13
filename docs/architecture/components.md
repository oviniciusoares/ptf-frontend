# Catálogo de Componentes

Referência completa de todos os componentes organizados por nível do Atomic Design.

> **Ao criar um componente novo, adicione a entrada correspondente neste arquivo.**

---

## Atoms

Elementos indivisíveis. Apenas `@Input()`/`@Output()`, zero lógica de negócio.

| Componente | Seletor | Inputs |
|---|---|---|
| `IconComponent` | `ptf-icon` | `name: string` (required) |
| `BadgeComponent` | `ptf-badge` | `text`, `variant: 'primary'\|'outline'\|'availability'\|'production'` — `availability`: dot verde pulsante + borda sutil; `primary`: fundo ciano |
| `ButtonComponent` | `ptf-button` | `label`, `variant: 'filled'\|'outline'\|'outline-primary'`, `size: 'md'\|'sm'`, `type`, `ariaLabel`; Output: `clicked` |
| `HeadingComponent` | `ptf-heading` | `text`, `highlight`, `level: 1\|2\|3`, `size: 'hero'\|'xl'\|'lg'\|'md'` |
| `TextComponent` | `ptf-text` | `content`, `variant: 'primary'\|'secondary'\|'muted'`, `size: 'sm'\|'base'\|'lg'` |
| `LabelComponent` | `ptf-label` | `text` (required) |
| `DividerComponent` | `ptf-divider` | — |

---

## Molecules

Combinam Atoms. Estado local mínimo.

| Componente | Seletor | Inputs |
|---|---|---|
| `NavLinkComponent` | `ptf-nav-link` | `label`, `href`, `active` |
| `SectionHeaderComponent` | `ptf-section-header` | `label`, `title`, `highlight`, `size` |
| `StatCardComponent` | `ptf-stat-card` | `value`, `description` |
| `TechCardComponent` | `ptf-tech-card` | `name`, `category`, `icon` |
| `ExperienceItemComponent` | `ptf-experience-item` | `period`, `role`, `company`, `description` |
| `ProjectItemComponent` | `ptf-project-item` | `number`, `name`, `status`, `year`, `description`, `tags: string[]` |
| `ContactCardComponent` | `ptf-contact-card` | `icon`, `main`, `subtitle`, `href` |
| `ScrollIndicatorComponent` | `ptf-scroll-indicator` | — |

---

## Organisms

Combinam Molecules e Atoms. Podem injetar services.

| Componente | Seletor | Seção / ID âncora |
|---|---|---|
| `HeaderComponent` | `ptf-header` | Menu fixo de navegação |
| `HeroComponent` | `ptf-hero` | Banner fullscreen — `#inicio` |
| `MarqueeComponent` | `ptf-marquee` | Faixa de tecnologias |
| `AboutComponent` | `ptf-about` | Sobre — `#sobre` |
| `TechGridComponent` | `ptf-tech-grid` | Tecnologias — `#tecnologias` |
| `ProjectsComponent` | `ptf-projects` | Projetos — `#projetos` |
| `ContactComponent` | `ptf-contact` | Contato — `#contato` |
| `FooterComponent` | `ptf-footer` | Rodapé |

---

## Templates

Definem layout com slots de conteúdo. Zero lógica de dados.

| Componente | Seletor | Descrição |
|---|---|---|
| `LandingTemplateComponent` | `ptf-landing-template` | Layout da landing page com `ng-content` slots nomeados |

---

## Pages

Orquestram services, dados e repassa para os níveis inferiores.

| Componente | Seletor | Rota |
|---|---|---|
| `HomePageComponent` | `ptf-home-page` | `/` (lazy-loaded via `loadComponent`) |

---

## Shared

### Directives

| Diretiva | Seletor | Descrição |
|---|---|---|
| `AnimateOnScrollDirective` | `ptfAnimateOnScroll` | Fade-in + slide-up ao entrar na viewport via `IntersectionObserver` |

### Services

| Service | Arquivo | Descrição |
|---|---|---|
| `ScrollTrackerService` | `shared/services/scroll-tracker.service.ts` | Rastreia seção ativa via `IntersectionObserver`; expõe `signal<string>` |
| `PortfolioDataService` | `shared/services/portfolio-data.service.ts` | Dados estáticos do portfólio (stats, experiências, tecnologias, projetos, contatos) |
| `FeatureToggleService` | `shared/services/feature-toggle.service.ts` | Controla visibilidade de jornadas via `FEATURE_FLAGS`; expõe `isEnabled(key: FeatureKey): boolean` |

### Models

Interfaces TypeScript em `src/app/shared/models/portfolio.models.ts`.
