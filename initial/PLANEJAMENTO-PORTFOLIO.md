# Planejamento de Desenvolvimento — Portfólio Vinicius Soares

## Visão Geral

Landing page de portfólio pessoal para um Analista de Sistemas. O site é uma **single page application** com navegação por âncoras. O design segue um tema **dark** com fundo escuro (tons de cinza/azul muito escuro) e cor de destaque **ciano/turquesa (#00E5FF ou similar)** usada em títulos, badges, botões e destaques. A tipografia é moderna, com títulos grandes e em negrito.

**Framework:** Angular 21
**Tipo:** Landing page (página única com scroll)
**Idioma do conteúdo:** Português (PT-BR)
**Responsividade:** Desktop, Tablet e Mobile

---

## Referência Visual

As imagens de referência do Figma estão disponíveis em:

- `/mnt/user-data/uploads/1775878247118_image.png` — Header + Hero/Banner
- `/mnt/user-data/uploads/1775878271541_image.png` — Tarja de Tecnologias (marquee) + Seção Sobre
- `/mnt/user-data/uploads/1775878286768_image.png` — Seção Tecnologias (grid de cards)
- `/mnt/user-data/uploads/1775878303627_image.png` — Seção Projetos
- `/mnt/user-data/uploads/1775878316713_image.png` — Seção Contato + Footer

**Consulte cada imagem antes de desenvolver a respectiva seção.**

---

## Paleta de Cores e Estilo

| Token | Valor aproximado | Uso |
|---|---|---|
| Cor primária (destaque) | Ciano/Turquesa (#00E5FF) | Títulos destacados, badges, botões, ícones, links ativos |
| Fundo principal | Cinza muito escuro (#0A0F1A ou similar) | Background geral de toda a página |
| Fundo dos cards | Cinza escuro com leve transparência (#111827 ou similar) | Cards de tecnologias, cards de stats, cards de contato |
| Texto principal | Branco (#FFFFFF) | Títulos, nomes |
| Texto secundário | Cinza claro (#9CA3AF ou similar) | Descrições, subtítulos, parágrafos |
| Bordas dos cards | Cinza médio com baixa opacidade | Contorno sutil nos cards |

---

## Estrutura de Tarefas

### TAREFA 1 — Setup Inicial do Projeto (5%)

**O que fazer:**
- Criar o projeto Angular 21 do zero
- Configurar a paleta de cores e variáveis globais de estilo (cores, fontes, espaçamentos)
- Configurar o scroll suave (smooth scroll) para navegação por âncoras
- Definir a estrutura base de componentes (um componente por seção)
- Configurar responsividade base (breakpoints para Desktop, Tablet e Mobile)

---

### TAREFA 2 — Header / Menu de Navegação (10%)

**O que fazer:**
- Menu fixo no topo da página (permanece visível durante o scroll)
- Lado esquerdo: logo em texto "Vinicius **Soares**" (sobrenome em ciano/destaque)
- Centro: links de navegação — Início, Sobre, Tecnologias, Projetos, Contato
- Lado direito: botão "Contato" com borda ciano, fundo transparente, texto ciano
- Os links devem navegar via scroll suave até a seção correspondente
- O link ativo deve ter destaque visual conforme a seção visível na tela

**Animações identificadas:**
- Transição suave de cor/destaque no link ativo ao fazer scroll
- Hover nos links com transição de cor
- Possível efeito de backdrop blur / fundo semitransparente no header ao rolar a página

**Responsividade:**
- Em telas menores, o menu deve se transformar em menu hambúrguer

---

### TAREFA 3 — Seção Hero / Banner (15%)

**O que fazer:**
- Ocupa a tela inteira (100vh)
- Imagem de fundo escura (mesa de trabalho com teclado e mouse, escurecida com overlay)
- Badge no topo do conteúdo: ponto verde/ciano pulsante + texto "Disponível para novos projetos" com borda arredondada
- Título principal muito grande: "Vinicius **Soares**" (sobrenome em ciano)
- Subtítulo: "Analista de Sistemas · Arquitetura de Software · Integração de Sistemas"
- Dois botões lado a lado:
  - "Entre em contato" — botão preenchido (fundo ciano, texto escuro)
  - "Ver projetos" — botão outline (borda cinza, texto branco, fundo transparente)
- Indicador de scroll no rodapé da seção: texto "SCROLL" + linha vertical animada

**Animações identificadas:**
- Ponto pulsante no badge de disponibilidade (pulse animation)
- Linha do indicador de scroll com animação contínua de cima para baixo
- Fade-in ou slide-up dos textos ao carregar a página
- Hover com transição nos botões

---

### TAREFA 4 — Tarja de Tecnologias (Marquee) (10%)

**O que fazer:**
- Faixa horizontal que fica entre o Banner e a seção Sobre
- Lista de tecnologias em texto maiúsculo, separadas por losangos/diamantes (◆) em ciano
- Tecnologias listadas: CLOUD, DEVOPS, PYTHON, REACT, NODE.JS, POSTGRESQL, DOCKER, MONGODB, REST APIS, MICROSSERVIÇOS, GIT, SQL (e repete)
- Algumas tecnologias aparecem em ciano e outras em cinza claro, alternando destaque
- A faixa inteira tem fundo levemente diferente do restante da página

**Animações identificadas:**
- Scroll horizontal automático e infinito (efeito marquee/ticker), movendo da direita para a esquerda continuamente
- O movimento deve ser suave e contínuo, sem pausas
- A lista deve se repetir de forma seamless (sem cortes visíveis)

---

### TAREFA 5 — Seção Sobre (Quem Sou) (15%)

**O que fazer:**
- Subtítulo em ciano: "QUEM SOU"
- Título grande: "Sobre"
- Layout dividido em duas colunas:

**Coluna esquerda:**
- Grid 2x2 com 4 cards de estatísticas:
  - "5+" — Anos de experiência
  - "30+" — Projetos entregues
  - "12+" — Tecnologias dominadas
  - "3" — Empresas atendidas
- Cada card tem o número grande em ciano e a descrição em texto cinza claro
- Cards com borda sutil e fundo ligeiramente diferente

**Coluna direita:**
- Parágrafo de apresentação pessoal (texto descritivo sobre a carreira)
- Subseção "EXPERIÊNCIA PROFISSIONAL" (subtítulo em cinza claro, letras maiúsculas espaçadas)
- Timeline vertical com 3 experiências, cada uma contendo:
  - Período (ex: "2023 — atual")
  - Cargo em negrito (ex: "Analista de Sistemas Sênior")
  - Badge com nome da empresa em ciano (ex: "Tech Solutions")
  - Descrição breve da atuação
- As experiências são separadas por linhas horizontais sutis

**Animações identificadas:**
- Contagem animada nos números dos cards de estatísticas (count-up animation de 0 até o valor final ao entrar na viewport)
- Fade-in ou slide-up dos cards e itens da timeline ao entrarem na viewport durante o scroll

---

### TAREFA 6 — Seção Tecnologias (Stack) (12%)

**O que fazer:**
- Subtítulo em ciano: "STACK"
- Título grande: "Tecnologias"
- Texto descritivo à direita: "Ferramentas e linguagens que utilizo no dia a dia para construir soluções de alta qualidade."
- Grid 4x3 (4 colunas, 3 linhas) com 12 cards de tecnologias
- Cada card contém:
  - Ícone da tecnologia (à esquerda)
  - Categoria em texto pequeno e maiúsculo (ex: "BACKEND", "FRONTEND", "DATABASE", "DEVOPS", "TOOLS", "ARCHITECTURE")
  - Nome da tecnologia em negrito (ex: "Python", "JavaScript", "React", etc.)
- Cards com borda sutil e fundo levemente diferente do background

**Lista completa dos cards (na ordem do grid):**
1. BACKEND — Python
2. FRONTEND — JavaScript
3. FRONTEND — React
4. BACKEND — Node.js
5. DATABASE — SQL
6. DATABASE — PostgreSQL
7. DATABASE — MongoDB
8. DEVOPS — Docker
9. TOOLS — Git
10. ARCHITECTURE — REST APIs
11. FRONTEND — TypeScript
12. DATABASE — Redis

**Animações identificadas:**
- Fade-in ou slide-up dos cards ao entrarem na viewport
- Efeito hover nos cards (leve elevação, brilho na borda, ou mudança de cor)

**Responsividade:**
- Em tablet: grid 2x6 ou 3x4
- Em mobile: grid 1x12 ou 2x6

---

### TAREFA 7 — Seção Projetos (Portfólio) (15%)

**O que fazer:**
- Subtítulo em ciano: "PORTFÓLIO"
- Título grande: "Projetos"
- Indicador à direita: "3 projetos selecionados"
- Lista vertical de 3 projetos, cada um separado por linhas horizontais
- Cada projeto contém:
  - Número de ordem em ciano (01, 02, 03)
  - Nome do projeto em negrito e grande
  - Badge "Produção" em verde/ciano com borda
  - Ano à direita (2025, 2024, etc.)
  - Descrição do projeto em texto cinza
  - Tags de tecnologias usadas (badges com borda ciano): ex. "React", "Node.js", "PostgreSQL"

**Projetos listados:**
1. **Sistema de Gestão Empresarial** — Produção — 2025 — Descrição sobre ERP — Tags: React, Node.js, PostgreSQL
2. **Plataforma de E-commerce** — Produção — 2024 — Descrição sobre microsserviços — Tags: Python, Docker, MongoDB
3. **API de Integração Financeira** — Produção — 2024 — Descrição sobre API RESTful — Tags: Node.js, PostgreSQL, Redis

**Animações identificadas:**
- Fade-in ou slide-up de cada projeto ao entrar na viewport
- Hover nos itens de projeto (leve destaque ou mudança visual)
- Hover nas tags de tecnologia

---

### TAREFA 8 — Seção Contato (12%)

**O que fazer:**
- Fundo ligeiramente diferente (um pouco mais claro que o restante)
- Layout em duas colunas:

**Coluna esquerda:**
- Subtítulo em ciano: "CONTATO"
- Título grande em duas linhas: "Vamos trabalhar" / "**juntos**" (a palavra "juntos" em ciano)
- Parágrafo: "Disponível para novos projetos, freelances e oportunidades de emprego. Entre em contato e vamos conversar."
- Tabela de informações:
  - Localização: badge "Brasil"
  - Disponibilidade: badge "Imediata"
  - Modalidade: badge "Remoto / Híbrido"
  - Cada badge tem fundo ciano e texto escuro

**Coluna direita:**
- 3 cards empilhados verticalmente com informações de contato:
  - Ícone de email + "vinicius.soares@email.com" + subtítulo "E-mail profissional"
  - Ícone do LinkedIn + "linkedin.com/in/viniciussoares" + subtítulo "Perfil LinkedIn"
  - Ícone do GitHub + "github.com/viniciussoares" + subtítulo "Repositórios públicos"
- Cada card tem borda sutil e deve ser clicável (abrir link em nova aba)

**Animações identificadas:**
- Fade-in dos elementos ao entrar na viewport
- Hover nos cards de contato (leve elevação ou brilho)

---

### TAREFA 9 — Footer (3%)

**O que fazer:**
- Faixa inferior simples com fundo igual ao background principal
- Separado do conteúdo acima por uma linha horizontal sutil
- Lado esquerdo: "© 2026 Vinicius **Soares**" (sobrenome em ciano)
- Lado direito: "Analista de Sistemas" em texto cinza

---

### TAREFA 10 — Animações Globais e Polimento Final (3%)

**O que fazer:**
- Garantir que todas as animações de entrada (fade-in, slide-up) ao scroll estejam consistentes em todas as seções
- Revisar responsividade completa (Desktop, Tablet, Mobile)
- Testar navegação por âncoras e destaque do link ativo no menu
- Verificar performance das animações (sem travamentos)
- Validar acessibilidade básica (contraste de cores, textos alternativos, navegação por teclado)

---

## Resumo Visual das Tarefas

| # | Seção | % do Total |
|---|---|---|
| 1 | Setup Inicial do Projeto | 5% |
| 2 | Header / Menu de Navegação | 10% |
| 3 | Seção Hero / Banner | 15% |
| 4 | Tarja de Tecnologias (Marquee) | 10% |
| 5 | Seção Sobre (Quem Sou) | 15% |
| 6 | Seção Tecnologias (Stack) | 12% |
| 7 | Seção Projetos (Portfólio) | 15% |
| 8 | Seção Contato | 12% |
| 9 | Footer | 3% |
| 10 | Animações Globais e Polimento | 3% |
| | **TOTAL** | **100%** |

---

## Ordem Sugerida de Desenvolvimento

1. Setup Inicial (Tarefa 1)
2. Header (Tarefa 2)
3. Hero/Banner (Tarefa 3)
4. Tarja Marquee (Tarefa 4)
5. Sobre (Tarefa 5)
6. Tecnologias (Tarefa 6)
7. Projetos (Tarefa 7)
8. Contato (Tarefa 8)
9. Footer (Tarefa 9)
10. Polimento Final (Tarefa 10)

---

## Observações Importantes

- Todo o conteúdo textual (nomes, descrições, experiências, projetos) deve ser extraído fielmente das imagens de referência listadas no início deste documento.
- A imagem de fundo do Banner (mesa com teclado) deve utilizar um overlay escuro para manter a legibilidade do texto.
- Os dados dos cards de estatísticas, experiências profissionais, tecnologias e projetos podem ser organizados em estruturas de dados (arrays/objetos) para facilitar a manutenção futura.
- O site é uma single page, portanto toda a navegação deve ser feita via scroll com âncoras, sem rotas adicionais.
