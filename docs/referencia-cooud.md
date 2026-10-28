# Referência de layout e UX: cooud.com

Análise feita em 23/10/2026 para usar a **estrutura e o comportamento** do Cooud como
referência da nova landing do Blink. Este documento descreve padrões; ele não reproduz
código, CSS, textos, imagens, ícones, logo, ilustrações ou SVGs do Cooud. Quando uma seção
precisa ser identificada, uso o `id` da âncora dela, não o título.

## Como a análise foi feita

| Etapa | Ferramenta | Evidência |
| --- | --- | --- |
| Listar a página aberta | REA `list_browser_targets` | `ev_fd4f6478…9a49` |
| DOM, árvore de acessibilidade, links, recursos | REA `inspect_web_page` (com texto de acessibilidade) | `ev_55ee504d…f162` |
| Captura dos scripts da página | REA `inspect_web_page` (com fontes de script) | `ev_1852aa57…6a` |
| Exportação dos 19 scripts para análise estática | REA `export_web_scripts` | `ev_74746d1b…6182` |
| Análise estática do JavaScript (370 módulos, 0 falhas de parse) | REA `analyze_javascript_application` | `ev_5f55aecf…cdf` |
| Medidas computadas (container, grid, tipografia, breakpoints) e screenshots | Script próprio via CDP no mesmo Chrome isolado | `docs/screenshots/cooud/*.jpg` |
| Teste de interações (clique, hover, teclado, arraste, scroll, movimento reduzido) | Script próprio via CDP | resultados resumidos abaixo |

Ambiente: Chrome 152 headless, perfil temporário, porta de depuração só em `127.0.0.1`.
Desktop em 1440×900. Mobile em 390×844, DPR 2, user agent de iPhone e toque emulado.

**Limites que valem para o documento inteiro**

- O REA observa de forma passiva. Cliques, teclas e scroll foram feitos pelo meu script
  CDP, não pelo REA.
- O `analyze_web_bundle` do REA estourou a memória (heap de 4 GB) nesta página. Usei o
  caminho alternativo do próprio REA: exportar os scripts e rodar a análise estática.
- O código está minificado, então nomes de bibliotecas podem ter sumido. Não encontrar
  o nome de uma biblioteca não prova que ela não está lá.
- Testei as interações só na home. Nas outras páginas registrei apenas estrutura e medidas.
- O site é só escuro (`color-scheme: dark`). Não existe tema claro para comparar.
- Nos screenshots de página inteira, o header fixo aparece no meio da página e o link
  "pular para o conteúdo" aparece visível. As duas coisas vêm da captura, não do site.
- Termos (desktop e mobile): capturei só os primeiros 6000 px, porque a página tem cerca
  de 98 mil px de altura.

---

## 1. Mapa de páginas e rotas

Fonte: links do DOM registrados pelo REA (`ev_55ee504d…`), com destino aprovado na
mesma origem.

| Rota | Tipo | Template | Relevância para o Blink |
| --- | --- | --- | --- |
| `/` | Landing one-page | Home (seção 2) | **Alta**: é a referência principal |
| `/#home`, `/#plataforma`, `/#servicos`, `/#global`, `/#developers`, `/#taxas`, `/#produtos`, `/#app`, `/#perguntas` | Âncoras da home | — | Navegação interna |
| `/help-center` | Central de ajuda | Hero com busca, categorias, vídeos, FAQ e card de suporte | Baixa (o Blink não tem central de ajuda) |
| `/public-doc` e subrotas (`/v2/api`, `/payments/hosted-checkout`, `/platforms/connect`, `/operations/currency`, `/v2/api/checkout-sessions/create`) | Documentação de API | Hub de documentação | Nenhuma |
| `/rules/terms-conditions`, `/rules/negocios-proibidos` | Legal longo | Documento com cabeçalho rico e seções numeradas | **Alta** para `/termos` |
| `/rules/privacy-policy`, `/rules/cookie-policy`, `/rules/security` | Legal curto | Coluna única | **Alta** para `/privacidade` |
| "Entrar" e "Começar agora" | Outra origem (painel) | — | Fora do escopo; o REA bloqueou por política |
| Instagram, X, LinkedIn, Discord | Externos | — | — |

---

## 2. Home: ordem e tipo das seções

Altura total: 10.889 px no desktop e 11.986 px no mobile. Há 10 `<section>`, 13 `<article>`,
5 `<details>`, 2 `<dialog>`, 3 `<canvas>`, 52 botões, 56 links e nenhum formulário.

| # | Âncora | Tipo | Estrutura no desktop | Estrutura no mobile |
| --- | --- | --- | --- | --- |
| 0 | — | **Header flutuante** fixo | Barra arredondada com logo, nav central (1 botão de menu e 2 links) e ações à direita (link de texto e botão CTA claro) | Logo, CTA e botão de menu (hambúrguer) |
| 1 | `#home` | **Hero** de altura de tela (900 px) | Grid de 3 colunas (≈438/504/307, gap 24): título de 2 linhas e 2 CTAs à esquerda, visual de marca iluminado no centro, texto curto à direita. Embaixo, uma faixa com 3 links numerados (01/02/03) e um botão de pausar movimento | 1 coluna centralizada: etiqueta, título, CTAs, visual e texto. Os 3 links ficam lado a lado |
| 1b | — | **Faixa de números** | Rótulo e 3 números grandes com legenda, mais 1 link "condições" alinhado à direita | 3 números em linha (≈106 px cada) |
| 2 | `#plataforma` | **Visão geral do produto** | Etiqueta numerada ("01 /"), título de 2 tons à esquerda, subtítulo à direita (flex space-between). Mock grande de painel em janela com botão de expandir. 3 colunas (369×3, gap 55) com ícone, título e frase | Tudo empilhado. Os 3 itens viram lista com divisórias |
| 3 | `#servicos` | **Soluções em abas** (botões de alternância) | Etiqueta, título e subtítulo. Linha de 5 botões com ícone e sublinhado no ativo. Painel de 2 colunas (≈593/623): card de texto (contador "01 — 05", título, frase, link) e demo interativa | Os botões viram grade de 2 colunas. O painel empilha texto e demo |
| 4 | `#global` | **Alcance** (texto e visual) | 2 colunas: texto (etiqueta, título, frase, botão, número grande) e globo animado em canvas com cards flutuantes e botão de pausa | Empilhado |
| 5 | `#developers` | **Recurso técnico em abas** | Título e subtítulo com link, e painel "janela" com tablist de 3 colunas (431×3) e uma demo animada | Abas compactas (114×3) |
| 6 | `#taxas` | **Condições/planos em abas** | 2 colunas (626/579, gap 62): visual de mostrador à esquerda; à direita, tablist de 4 opções, título da opção, 2 métricas lado a lado e botão largo | 1 coluna. Tablist com 4 colunas (82×4) |
| 7 | `#produtos` | **Carrossel de produtos** | Container de 1240 px. Título à esquerda e dica "arraste" à direita. Cards em coverflow 3D (central maior, laterais inclinados) com título, frase e botão. Pílula de controles (anterior, pontos, próximo), contador "03 / 06" e nome do item ativo | Cards menores; os controles se mantêm |
| 8 | `#app` | **Download do app** | Painel arredondado grande com fundo animado: etiqueta, título de 2 linhas centralizado, frase, 2 botões de loja e rótulos flutuantes nos cantos. Abaixo, 3 itens em linha com ícone, título e frase | Painel ocupa a largura. Os 3 itens empilham |
| 9 | `#perguntas` | **FAQ** | 2 colunas: etiqueta, título de 2 tons e link de ajuda à esquerda; à direita, 5 perguntas numeradas (01–05) com "+", e botão "ver mais 9" | Empilhado |
| 10 | — | **CTA final** | Título gigante centralizado (144 px, 2 linhas, a segunda mais apagada) e 2 botões (primário claro, secundário contornado) | Título de 83 px quebrando em 5 linhas; botões lado a lado |
| 11 | — | **Footer** | Grid de 4 colunas (≈415/221/249/276, gap 45): marca, slogan e ícones sociais; 3 colunas de links com título. Barra inferior com copyright e 5 links legais. Wordmark gigante e apagada como decoração no fim | 2 colunas, depois contato, depois a barra inferior |

**Padrões que se repetem**

- **Etiqueta numerada** acima de cada título de seção ("01 /", "02 /", …), em caixa alta
  pequena com espaçamento entre letras.
- **Título em 2 tons**: a primeira linha clara e a segunda em cinza médio, sempre quebrando
  em duas frases curtas.
- **Cabeçalho de seção dividido**: título à esquerda e subtítulo curto à direita, alinhados
  pela base. No mobile o subtítulo desce para baixo do título.
- **Cards "janela"**: blocos com cantos arredondados, borda fina, barra superior com 3
  pontos e um rótulo "demonstração".

---

## 3. Grid e layout

Medidas computadas no navegador.

| Item | Desktop (1440) | Mobile (390) |
| --- | --- | --- |
| Fonte raiz | 16 px | 16 px |
| Container externo | `max-width: 1536px` com padding lateral de 72 px (5% da largura) | Padding lateral de 23,4 px (6% da largura) |
| Container interno | `max-width: 1376px`; largura útil ≈1296 px | Largura útil ≈343 px |
| Container alternativo (`#produtos`) | `max-width: 1240px`, padding de 40 px | Padding de 25 px |
| Blocos de texto | `max-width` entre 280 e 620 px, para limitar o comprimento da linha | 280–580 px |
| Padding vertical das seções | 90–130 px (hero com 130 px no topo para compensar o header) | 48–78 px |
| Hero | 900 px (altura da tela) | 800 px |
| Header | Fixo, `top: 14px`, altura de 62 px, `z-index: 60`, flex `space-between` com gap de 30 px | `top: 10px`, 56 px, gap de 10 px |
| Gaps comuns | 24, 30, 45, 55 e 62 px entre colunas; 12–16 px entre itens de lista | 10–25 px |

**Grids por seção** (colunas medidas)

- Hero: 3 colunas assimétricas, com a central um pouco mais larga, que viram 1 coluna.
- Itens de recurso: 3 colunas iguais que viram 1 coluna.
- Painel texto e demo: 2 colunas quase iguais que viram 1 coluna.
- Footer: 4 colunas que viram 2 colunas.
- Tablists: as abas são colunas de largura igual e continuam em linha no mobile.

**Breakpoints** (regras `@media` contadas nas folhas de estilo)

| Media query | Regras | Leitura |
| --- | --- | --- |
| `(prefers-color-scheme: dark)` | 329 | Tema escuro |
| `(max-width: 600px)` | 227 | Principal corte mobile |
| `(hover: hover)` | 208 | Hover só em aparelhos com ponteiro |
| `(min-width: 48rem)` = 768 px | 102 | Corte de tablet (padrão Tailwind `md`) |
| `(max-width: 850px)` | 79 | Corte intermediário |
| `(max-width: 1100px)` | 67 | Desktop estreito |
| `(max-width: 520px)`, `480px`, `380px`, `360px` | 58, 51, 18, 43 | Ajustes finos de celular |
| `(min-width: 40rem)` = 640 px, `(min-width: 64rem)` = 1024 px | 51, 50 | Padrões Tailwind `sm` e `lg` |
| `(prefers-reduced-motion: reduce)` | 29 | Movimento reduzido |
| `(forced-colors: active)` | 6 | Alto contraste do sistema |

Inferência: os estilos combinam utilitários Tailwind (`40rem`, `48rem`, `64rem`) com CSS
próprio escrito para desktop (`max-width`). Para o Blink, que é mobile-first, o caminho
equivalente é usar só `min-width`, com cortes em cerca de 640, 768, 1024 e 1280 px.

---

## 4. Hierarquia tipográfica

As medidas são relativas ao corpo. As fontes do Cooud não serão usadas; o Blink usa Manrope.

| Papel | Desktop | Mobile | Peso | Entrelinha | Espaçamento entre letras |
| --- | --- | --- | --- | --- | --- |
| H1 do hero | 78,5 px (≈4,9 rem) | 47 px (≈2,9 rem; −40%) | 400 | 1,04 | −0,058 em (bem fechado) |
| H2 de seção | 55–82 px (3,4–5,1 rem) | 33–52 px | 400–450 | 1,02–1,08 | −0,05 a −0,068 em |
| H2 do CTA final | 144 px (9 rem) | 83 px | 400 | 0,92 | −0,065 em |
| H3 de card ou painel | 20–48 px (o mais comum é 28–30 px) | 19–34 px | 400–500 | 1,1–1,5 | −0,045 em |
| H4 e títulos de item | 16–19 px | 14–18 px | 500–600 | 1,3–1,5 | −0,025 em |
| Lead/subtítulo | ≈18 px | ≈14 px | 400 | 1,8 | quase nenhum |
| Corpo e legendas | 11–14 px | 11–14 px | 400 | 1,6–1,8 | −0,01 em |
| Etiquetas | ≈10–11 px, caixa alta | igual | 400–500 | — | positivo (aberto) |
| Botões | 12 px (11 no mobile) | | 400 | — | — |

**Leitura da hierarquia**

- O contraste é de **tamanho**, não de peso. Títulos enormes ficam em peso regular
  (400–450) com espaçamento negativo forte; o corpo é pequeno e arejado.
- A razão H1/corpo é de ≈5,6× no desktop e ≈3,4× no mobile. A escala é fluida, encolhendo
  ≈40% do desktop para o mobile.
- O destaque dentro do título vem da **cor** (segunda linha em cinza), não do negrito.
- Ressalva de acessibilidade: corpo de 11–12 px é pequeno demais para leitura no celular.
  No Blink, o corpo deve ficar em pelo menos 16 px.

---

## 5. Componentes de interação

Testados em desktop e mobile. "Observado" = medido no navegador. "Inferência" = dedução a
partir do que foi medido.

### 5.1 Header
- **Observado:** fixo e flutuante (`top` de 14 px), com a mesma posição e opacidade ao
  descer até 1600 e 3200 px e ao subir de volta. **Não esconde ao rolar.**
- **Observado:** o primeiro elemento focável é o link "pular para o conteúdo", visível só
  com foco.

### 5.2 Menu (desktop) e menu mobile
- **Observado:** o botão do menu tem `aria-haspopup="dialog"`, `aria-expanded` e
  `aria-controls`, e abre um `<dialog>` (painel de 1040×779 px com 12 links).
- Abre com **clique**; passar o mouse não abre.
- Fecha com **Escape** e com **clique fora**, com transição de opacidade.
  `aria-expanded` volta para `false`.
- No mobile, o hambúrguer abre o **mesmo `<dialog>`** em largura total (366×754 px) e
  **trava a rolagem** (`body { overflow: hidden }`). O Escape fecha.
- **Observado (lacuna a não copiar):** o diálogo não é modal (sem `aria-modal`, `main`
  sem `inert`) e o foco **não entra** no painel; ele fica no botão. No Blink, o foco deve
  ir para o primeiro link ao abrir e voltar ao botão ao fechar, com o resto da página
  inerte.

### 5.3 Botões e hover
- **Observado:** o CTA principal é uma pílula clara com gradiente sutil e sombra interna.
  No hover, sobe 2 px (`translateY(-2px)`) e o gradiente vira cor sólida, em 0,25–0,3 s.
- **Observado:** o efeito de hover fica atrás de `(hover: hover)`, então não "gruda" no
  celular depois de um toque.
- O CTA secundário é contornado (borda de 1 px) e transparente.

### 5.4 Foco visível
- **Observado:** `outline` de 2 px sólido em cinza claro com `outline-offset` de 6 px em
  links e botões ao navegar com Tab.

### 5.5 Animações ao rolar (reveal)
- **Observado:** abaixo da dobra, os elementos começam com `opacity: 0`, `scale(0.94–0.98)`
  e deslocamento vertical de 12–18 px.
- Ao entrar na tela, vão para o estado final com `opacity` em 0,55 s e `transform` em
  0,85 s, curva `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Evidência do JS:** 19 ocorrências de `IntersectionObserver` e 12 de
  `requestAnimationFrame` nos scripts exportados.

### 5.6 Painel com botões de alternância (`#servicos`)
- **Observado:** 5 botões com `aria-pressed` e `aria-controls` apontando para **um único
  painel**. O clique troca o conteúdo do painel e o estado pressionado.
- **Não troca sozinho:** nada mudou em 6 s sem interação.

### 5.7 Abas ARIA (`#developers`, `#taxas`)
- **Observado:** `role="tablist"`, `tab` e `tabpanel`, com *roving tabindex* (só a aba ativa
  tem `tabindex=0`).
- A **seta para a direita** move o foco e **ativa** a próxima aba (ativação automática).
- Nada trocou sozinho em 7 s.

### 5.8 Carrossel (`#produtos`)
- **Observado:** `role="group"` com `aria-roledescription="carrossel"` e uma região
  `aria-live="polite"`.
- Avança pelas **setas do teclado** e por **arraste** com o ponteiro (desktop). Há botões
  anterior/próximo e um botão por item.
- Nada trocou sozinho em 6 s.
- **Não confirmado:** no teste, o clique em "próximo" não mudou o item ativo,
  provavelmente porque a rolagem até o botão deslocou a página durante o clique.

### 5.9 FAQ
- **Observado:** usa `<details>`/`<summary>` nativos e **permite vários abertos ao mesmo
  tempo** (não é exclusivo).
- O ícone "+" gira 45° e vira "×" quando aberto.
- O botão "ver mais" revela as perguntas restantes **na própria lista** (de 5 para 14),
  sem modal.

### 5.10 Movimento reduzido e botões de pausa
- **Observado:** com `prefers-reduced-motion: no-preference` há 68 animações ativas; com
  `reduce`, há **0**.
- Cada área animada (hero, globo, infraestrutura, recebimentos, app) tem seu próprio botão
  de pausar/reproduzir com `aria-pressed`. No modo reduzido, eles já começam pausados.

### 5.11 Demos decorativas
- Mock de painel com "expandir", checkout com "arrastar para confirmar", botões de efeito
  de luz e globo em canvas. São demonstrações de produto que **não se aplicam ao Blink**.

### 5.12 Formulários
- **Home:** nenhum campo (`<input>` = 0).
- **Central de ajuda** (único formulário do site): `<form role="search">` com um
  `input type="search"` rotulado e `autocomplete="off"`.
  - Filtra os resultados **enquanto você digita**, sem enviar nem mudar a URL.
  - Ao digitar, surge uma região `role="status"` para anunciar o resultado.
  - **Sem validação**: Enter com o campo vazio não faz nada.
  - Não encontrei mensagem de "nenhum resultado" por texto.

### 5.13 Links externos
- Os botões das lojas abrem em nova aba e têm "(abre em nova aba)" no nome acessível.

### 5.14 O que a análise de JS mostrou
- 19 scripts, 18 analisados, 370 módulos, 935 achados, 0 falhas de parse
  (`ev_5f55aecf…`). Next.js (rotas `/_next/static`).
- Não aparecem nomes de bibliotecas de animação, scroll suave, carrossel ou 3D (GSAP,
  Lenis, Embla, Swiper, Three.js, framer-motion).
- Aparecem APIs nativas: `showModal` (2), `inert` (6), `matchMedia` (8),
  `prefers-reduced-motion` (5), `pointerdown` (9), `touchstart` (5), `scrollIntoView` (5),
  `aria-expanded`/`aria-controls`.
- Inferência: os componentes são próprios, sobre React com APIs do navegador. Para o Blink,
  dá para reproduzir os mesmos comportamentos com o que o projeto já tem (React, `motion`,
  `IntersectionObserver`) sem adicionar bibliotecas.

---

## 6. Subpáginas: templates

**Legal longo** (`/rules/terms-conditions`, `/rules/negocios-proibidos`)
- Cabeçalho centralizado: ícone em quadrado, etiqueta colorida em caixa alta, H1 de 48 px
  peso 600, subtítulo de uma linha.
- Fileira de 3 "chips" com data, tempo de leitura e número de seções, e uma nota curta
  sobre o idioma.
- Corpo em `max-width: 768px`, com seções numeradas: H2 de 26 px peso 600 e selo com o
  número ("01").
- Itens com numeração em negrito ("1.1.").
- Na página mais longa, um índice em coluna lateral (grid de 228/820 px).

**Legal curto** (`/rules/privacy-policy`, `/rules/cookie-policy`, `/rules/security`)
- Coluna única, H2 de 30 px peso 700 e H3 de 24 px peso 600.
- Footer de site com bloco de "começar".

**Central de ajuda:** header próprio mais simples; hero com H1 de 72 px e busca; grade de
categorias de 3×2; vídeos com filtros em chips, cards de 3 colunas e "ver todos"; FAQ em
2 colunas; card de suporte por e-mail; footer de uma linha.

---

## 7. Screenshots

Ficam em `docs/screenshots/cooud/` (fora do git; ver `.gitignore`). São só para comparação
na Fase 5, não para uso no site.

| Página | Desktop | Mobile |
| --- | --- | --- |
| Home | `home-desktop.jpg` | `home-mobile.jpg` |
| Central de ajuda | `help-center-desktop.jpg` | `help-center-mobile.jpg` |
| Documentação | `public-doc-desktop.jpg` | `public-doc-mobile.jpg` |
| Termos (primeiros 6000 px) | `termos-desktop.jpg` | `termos-mobile.jpg` |
| Privacidade | `privacidade-desktop.jpg` | `privacidade-mobile.jpg` |
| Cookies | `cookies-desktop.jpg` | `cookies-mobile.jpg` |
| Segurança | `seguranca-desktop.jpg` | `seguranca-mobile.jpg` |
| Negócios proibidos | `negocios-proibidos-desktop.jpg` | `negocios-proibidos-mobile.jpg` |

---

## 8. Resumo para a implementação

Padrões de **estrutura** a seguir:
1. Header flutuante fixo, que não esconde ao rolar.
2. Hero de altura de tela, com visual central forte.
3. Etiqueta numerada e título em 2 tons em toda seção.
4. Cabeçalho de seção dividido (título à esquerda, subtítulo à direita).
5. Painel de conteúdo trocado por botões.
6. Carrossel acessível.
7. Painel grande de download com botões de loja.
8. FAQ em 2 colunas.
9. Footer em 4 colunas com barra legal.

Padrões de **comportamento** a seguir:
1. Reveal ao rolar com opacidade e deslocamento.
2. Hover só com `(hover: hover)`.
3. Foco com outline deslocado.
4. Menu mobile em `<dialog>` com trava de rolagem e Escape.
5. Abas ARIA com setas do teclado.
6. Carrossel com teclado, arraste, `aria-live` e botão de pausa.
7. Movimento reduzido desligando todas as animações.

Pontos em que o Blink deve **fazer melhor** que a referência:
1. Corpo de texto com pelo menos 16 px no celular.
2. Foco que entra no menu aberto e volta ao botão ao fechar.
3. Página inerte por trás do menu aberto.
4. Mobile-first com `min-width`.
