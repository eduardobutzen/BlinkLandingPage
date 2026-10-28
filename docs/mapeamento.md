# Mapeamento: estrutura do Cooud → conteúdo do Blink

Base: `docs/referencia-cooud.md` (estrutura) e `docs/conteudo-blink.md` (conteúdo).
Regra: só textos e imagens que o Blink já tem. Onde falta conteúdo, a seção fica marcada como
**sem conteúdo** e a decisão é sua. Nada é inventado.

Legenda: ✅ encaixa direto · 🔧 encaixa com adaptação · ⛔ sem conteúdo · ❓ decisão sua

---

## 1. Home

| # | Seção do Cooud (padrão) | Conteúdo do Blink que entra | Status |
| --- | --- | --- | --- |
| 0 | **Header flutuante**: logo, nav com menu suspenso, link "entrar", CTA claro | Logo e "Blink"; nav **Como funciona · Recursos · Perguntas**; botão de tema (só o Blink tem); CTA **Baixar o app →**. Sem menu suspenso, porque o Blink tem só 3 âncoras. Sem "entrar", porque não há login na web | 🔧 |
| 0m | **Menu mobile** em `<dialog>` | Hambúrguer abrindo um diálogo com as 3 âncoras e o CTA "Baixar o app" | 🔧 |
| 1 | **Hero, coluna esquerda**: título de 2 linhas e 2 CTAs | H1 **Sua apostila vira flashcards. A IA explica cada erro.** Lead "Envie PDF, slides ou fotos…". CTA primário = **botões das lojas**. CTA secundário = **Como funciona ↓** (texto que já está no menu) | ✅ |
| 1 | **Hero, visual central** iluminado | **Carrossel de telas** (7 mockups) com o brilho radial que já existe | ✅ ❓ ver D3 |
| 1 | **Hero, coluna direita**: texto curto | "Grátis para estudar, no iPhone e no Android." | ✅ |
| 1 | **Etiqueta acima do título** (só no mobile) | — | ⛔ omitir |
| 1 | **Faixa de 3 links numerados** abaixo do hero | Os 3 passos: **01 Envie o material · 02 Estude com flashcards e quiz · 03 Errou? A IA explica**, levando a `#como-funciona` | ✅ |
| 1b | **Faixa de 3 números grandes** com legenda | O Blink não tem métricas de uso | ⛔ ❓ ver D2 |
| 2 | **`#plataforma`**: etiqueta numerada, título de 2 tons, subtítulo à direita, mock grande, 3 colunas com ícone, título e frase | Etiqueta **01 / Como funciona**. H2 **Do material à revisão em três passos.** 3 colunas = os **3 passos** (número em vez de ícone). O mock grande pode ser 3 telas (`decks` → `questao` → `chat`), uma por passo. Subtítulo à direita: **sem conteúdo**, então o título ocupa a linha | 🔧 ❓ ver D4 |
| 3 | **`#servicos`**: botões de alternância e painel de 2 colunas (texto e demo) | Etiqueta **02 / Recursos**. H2 **Tudo para estudar, revisar e entender.** 6 botões: **Criar · Entender · Estudar · Revisar · Compartilhar · Acompanhar**. O painel mostra o contador "01 — 06", o título, o texto, o selo **Plus** (Criar e Entender) e o mockup da tela correspondente. Substitui o bento atual | ✅ |
| 4 | **`#global`**: alcance internacional, globo e número | — | ⛔ remover |
| 5 | **`#developers`**: API em abas | — | ⛔ remover |
| 6 | **`#taxas`**: abas de opções, métricas e botão largo | **Planos**: abas **Mensal / Anual** com R$ 29,90/mês e R$ 199,90/ano (os valores dos Termos), Grátis × Plus, limites e "Entrar na lista de espera". Todo o texto vem da seção removida em 21/10 | ❓ ver D1 |
| 7 | **`#produtos`**: carrossel de cards com controles | Se o hero usar um mockup fixo (D3), o carrossel das 7 telas vem para cá, com as legendas = nomes das telas no app (Início, Decks, Questão, Chat, Revisar, Comunidade, Progresso). Mas **não há título para a seção** | ❓ ver D3 |
| 8 | **`#app`**: painel grande de download com 2 botões de loja | Etiqueta **Baixar**. H2 **Baixe o Blink e estude hoje.** Lead **Grátis no iPhone e no Android.** Botões das lojas | ✅ |
| 8b | **Linha de 3 itens** com ícone abaixo do painel | — | ⛔ omitir |
| 9 | **`#perguntas`**: 2 colunas (título e link à esquerda, acordeão à direita) | Etiqueta **03 / Perguntas**. H2 **Perguntas frequentes**. As 4 perguntas. No lugar do link "central de ajuda", o e-mail **blinkflashcards@gmail.com** (`mailto:`). "Ver mais" não faz falta com 4 perguntas | 🔧 |
| 10 | **CTA final** com título gigante e 2 botões | O Blink tem um só texto de CTA, e ele já vai no painel `#app` | ⛔ ❓ ver D5 |
| 11 | **Footer**: 4 colunas, ícones sociais, barra legal, wordmark gigante | Col. 1: logo, "Blink" e "Flashcards com IA e repetição espaçada, para iPhone e Android." Col. 2 **Baixar**, Col. 3 **Contato**, Col. 4 **Legal**. Barra inferior: "© {ano} Blink. Todos os direitos reservados." · "Feito no Brasil". Wordmark gigante "Blink" como decoração | ✅ |
| 11b | **Ícones sociais** no footer | Não há perfis de rede social | ⛔ omitir (ou você me passa os perfis) |

### Ordem proposta

```
Header
1  Hero ............................ #topo
   faixa dos 3 passos
2  01 / Como funciona .............. #como-funciona   (padrão #plataforma)
3  02 / Recursos ................... #recursos        (padrão #servicos)
4  Planos .......................... #planos          (padrão #taxas)     ← só se D1 = sim
5  Telas do app .................... (sem âncora)     (padrão #produtos)  ← só se D3 = B
6  Baixar .......................... #baixar          (padrão #app)
7  03 / Perguntas ................... #faq             (padrão #perguntas)
8  CTA final ....................... —                (padrão CTA final)  ← só se D5 = B
Footer
```

As âncoras `#como-funciona`, `#recursos`, `#faq` e `#baixar` continuam as mesmas, para não
quebrar links já compartilhados.

---

## 2. Outras páginas

| Página do Cooud | Página do Blink | Status |
| --- | --- | --- |
| Legal longo (`/rules/terms-conditions`): cabeçalho com ícone, etiqueta, H1, subtítulo, chips (data, leitura, seções), índice e seções numeradas | **`/termos`** e **`/privacidade`**: etiqueta "Legal", H1, "Aplica-se ao aplicativo…", chips com **12 de outubro de 2026**, **tempo de leitura calculado do texto** e **13 seções** (Termos) ou **14 seções** (Privacidade). O índice "Nesta página" vira coluna lateral no desktop. Seções com selo numerado. O texto legal não muda | 🔧 |
| Legal curto (privacidade, cookies, segurança) | — (os dois documentos do Blink usam o template longo) | — |
| Central de ajuda | — | ⛔ não criar |
| Documentação de API | — | ⛔ não criar |
| — | **`/baixar` e `/app`**, **`/deck/:id`**, **`/autor/:id`**: sem equivalente no Cooud | Mantêm o comportamento atual e ganham o novo visual (header enxuto, botões e cards do design system) |

---

## 3. Conteúdo do Blink sem lugar no Cooud

| Conteúdo | Onde encaixar |
| --- | --- |
| Botão de tema claro/escuro | Header, antes do CTA (o Cooud é só escuro) |
| Selo **Plus** | No painel de Recursos, ao lado do rótulo |
| Estado "em breve" das lojas | Nos próprios botões de loja (hero, Baixar e footer) |
| "Feito no Brasil" | Barra inferior do footer |
| Fatos do brief nunca publicados (modo Escrever, 73 conquistas, 7 patentes, SM-2, licenças, privacidade) | **Nenhum lugar por enquanto.** Eles poderiam ocupar uma seção "de confiança" no lugar de `#global`, mas só com a sua confirmação, porque o brief está desatualizado |

---

## 4. Comportamentos que vou reproduzir (escritos do zero)

| Comportamento do Cooud | Como fica no Blink |
| --- | --- |
| Header fixo e flutuante que não esconde | Igual, com o `--glass-bg` do Blink e borda `--line` |
| Menu mobile em `<dialog>` com trava de rolagem e Escape | Igual, **com foco entrando no menu e voltando ao botão** e o resto da página inerte (o Cooud não faz isso) |
| Reveal ao rolar (opacidade e deslocamento, 0,55 s / 0,85 s) | Reaproveito o `useScrollReveal` que já existe, com transição equivalente |
| Hover só com `(hover: hover)`, CTA subindo 2 px | Igual |
| Foco com `outline` de 2 px deslocado | Igual, na cor `--text` |
| Botões de alternância com `aria-pressed` e painel único | Na seção Recursos |
| Abas ARIA com setas do teclado | Na seção Planos, se D1 = sim |
| Carrossel com teclado, arraste, `aria-live` e pausa | No carrossel de telas (hero ou seção própria) |
| FAQ com "+" girando para "×" | O acordeão atual (uma pergunta aberta por vez) ganha esse ícone |
| Movimento reduzido desliga tudo; botão de pausa por animação | Igual. O carrossel já tem botão de pausa |
| Escala tipográfica fluida (≈−40% no mobile), títulos com espaçamento negativo | Com Manrope, mantendo o **peso 800** do Blink nos títulos (identidade do Blink, não do Cooud) e corpo com **16 px ou mais** |
| Mobile-first | Só `min-width` |

---

## 5. Decisões que preciso de você

- **D1 — Preços voltam?** Sim: crio a seção Planos no padrão `#taxas`, com os valores dos
  Termos e os textos da seção removida. Não: a seção fica de fora, como hoje.
- **D2 — Faixa de números do hero.** Não há métricas reais. Opções: (A) remover; (B) usar 3
  fatos que já estão no site, sem número inventado, por exemplo "R$ 0 para estudar", "4
  alternativas em cada card" e "iPhone e Android". Recomendo (A).
- **D3 — Onde fica o carrossel de telas?** (A) No hero, como hoje, e a seção `#produtos` sai.
  (B) O hero ganha um mockup fixo iluminado e o carrossel vira seção própria; para isso,
  preciso de um **título para essa seção**, que você escreveria. Recomendo (A).
- **D4 — Visual grande de "Como funciona".** (A) Uma tela por passo (`decks`, `questao`,
  `chat`). Essas telas também aparecem em Recursos. (B) Sem visual grande, só os 3 passos.
  Recomendo (A).
- **D5 — CTA final gigante.** (A) Remover: a página termina em FAQ e depois o footer, e o
  download fica no painel antes da FAQ. (B) Manter, com um texto novo seu. Recomendo (A).
- **D6 — Pendências do conteúdo** (de `docs/conteudo-blink.md` §7): corrijo "Em breve **no**
  Google Play"? Copio o `blink_app_icon_1024.png` do repositório do app? Os dois são
  opcionais.
