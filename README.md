# Blink — Landing Page

Site do **Blink**, app de estudo com flashcards, quiz e repetição espaçada. A IA
transforma o material do estudante (PDF, PPTX, DOCX, fotos ou um assunto digitado) em
cards prontos e explica cada erro. Página direta: o que o app faz, o preço e o download.

**Vite · React 18 · TypeScript · Tailwind CSS v4 · shadcn (estrutura) · React Router**

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Checagem de tipos + build de produção em `dist/` |
| `npm run preview` | Serve o `dist/` para conferir o build |
| `npm run typecheck` | Só a checagem de tipos |

## Estrutura

```
index.html                    Entry do Vite
components.json               Config do shadcn (aliases, tema, lucide)
vite.config.ts                Plugins e alias @ -> ./src
public/assets/mockups/        Capturas de tela do app (WebP)
public/assets/brand/          Ícones
src/
  main.tsx                    Bootstrap + BrowserRouter
  App.tsx                     Rotas
  index.css                   Tailwind + ponte de tokens shadcn -> Blink
  styles/blink.css            Sistema visual (tokens, componentes, responsivo)
  components/
    ui/                       Componentes shadcn / 21st.dev
    Header.tsx  Footer.tsx  StoreBadges.tsx  ThemeToggle.tsx  BlinkMark.tsx
  sections/                   Uma seção da landing por arquivo, na ordem da página:
                              Hero, HowItWorks, Features, Plans, Faq, DownloadCta
  pages/                      Home, Privacidade, Termos, deck e autor compartilhados
  hooks/                      useTheme, useScrollReveal
  data/                       pricing.ts (preços, itens, limites), faq.tsx, site.ts
  lib/utils.ts                cn()
DESIGN.md                     Referência de linguagem visual (extraída do Foodnoms)
LANDING_BRIEF.md              Brief original (preços, planos e recursos já mudaram — vale o site)
```

## Adicionar componentes do shadcn / 21st.dev

O `components.json` já está configurado (estilo `new-york`, `cssVariables`, ícones
`lucide`, alias `@/components/ui`), então dá para colar componentes direto:

```bash
npx shadcn@latest add button
```

Componentes do 21st.dev que trazem `"use client"` funcionam — a diretiva é ignorada
fora do Next e não atrapalha.

**Animação:** o projeto usa o pacote `motion` (`import { motion } from "motion/react"`),
que é a continuação do `framer-motion` com a mesma API. Componentes de terceiros que
importam de `"framer-motion"` só precisam ter o import trocado para `"motion/react"` —
não instale as duas bibliotecas, o bundle carregaria dois motores de animação.

Já integrados em `src/components/ui/`:

| Componente | Onde é usado | Origem |
| --- | --- | --- |
| `interactive-accordion.tsx` | seção FAQ | 21st.dev |
| `dot-pattern.tsx` | textura do herói | Magic UI |
| `phone-carousel.tsx` | carrossel de telas do herói | reescrito no desenho do "Phone Mockups 1" (solaceui, 21st.dev) |
| `bento.tsx` | seção Recursos (o grid e os cantos ficam em `.bento`, no `blink.css`) | `BentoCard` do "FUI Bento Grid Dark" (21st.dev), adaptado para `motion/react` |

## Sistema visual

**Preto e branco, como o app**: paleta monocromática, com tema claro e escuro (o
botão no header alterna; sem escolha salva, segue o sistema). O destaque é de tom —
o resto do título em secundário e o resultado em forte (`.tt` + `<strong>`) —,
nunca de cor. Muito espaço em branco, uma ideia por seção, e o CSS é escrito celular
primeiro (a regra solta vale para o celular; as media queries só acrescentam).

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#e2e2df` | `#000000` | Fundo da página |
| `--card` | `#f6f6f4` | `#121212` | Cards |
| `--text` | `#111111` | `#c9c9c9` | Texto principal |
| `--text-2` | `#66666b` | `#7c7c84` | Texto secundário |
| `--invert` | `#111111` | `#c9c9c9` | Botões, números dos passos, "Melhor escolha" |

Tipografia: **Manrope** (400–800), via Google Fonts, em títulos e texto.

Os tokens vivem em `src/styles/blink.css`; **trocar a paleta é editar o bloco `:root`
de lá**. O `src/index.css` só faz a ponte: mapeia os nomes que o shadcn espera
(`--color-background`, `--color-primary`, `--color-border`…) para esses tokens, de
modo que componentes de terceiros já nascem na paleta certa.

O tema é carimbado em `<html data-theme="…">` por um script inline no `index.html`,
antes da primeira pintura, para não piscar. A variante `dark:` do Tailwind está
ligada a esse mesmo atributo via `@custom-variant`.

**Cuidado com a ordem das camadas.** O `blink.css` é importado com
`layer(components)`, e isso não é decorativo: CSS fora de qualquer `@layer` vence
*qualquer* regra dentro de uma layer, então o reset daqui (`p { margin: 0 }`,
`a { color: inherit }`, `img { display: block }`) passaria por cima dos utilitários
do Tailwind — um `mb-8` num `<p>` simplesmente não teria efeito. Em `components` a
precedência fica certa: o reset ainda vence o preflight, e as utilities vencem o
reset. Se algum dia um utilitário do Tailwind parecer ignorado, é aqui que se olha.

## Mockups

Capturas reais do app, em `public/assets/mockups/` — WebP com fundo transparente e a
moldura do aparelho já embutida na imagem (por isso o realce é `drop-shadow`, que
segue o recorte, e não `box-shadow`).

| Arquivo | Tela | Onde aparece |
| --- | --- | --- |
| `decks.webp` | Decks | carrossel do herói e bento "Decks gerados por IA" |
| `inicio.webp` | Início | carrossel do herói (abre nela) |
| `chat.webp` | Conversa sobre a questão | carrossel do herói e bento "Chat sobre a questão" |
| `questao.webp` | Questão com alternativas | carrossel do herói e bento "Repetição espaçada" |
| `revisar.webp` | Revisar | carrossel do herói e bento "Aba Revisar" |
| `comunidade.webp` | Comunidade | carrossel do herói e bento "Comunidade" |
| `progresso.webp` | Progresso | carrossel do herói e bento "Hábito e progresso" |

O carrossel do herói passa por todas as telas; a lista e a ordem ficam em
`src/sections/Hero.tsx`, e o texto alternativo de cada tela em `src/data/telas.ts`.

Geradas a partir dos PNGs de 1451×2828 (mockups de iPhone 15) com recorte da área
pintada e reamostragem para 700×1398. Para trocar uma tela, basta substituir o arquivo
mantendo essa proporção.

## Pendências antes de publicar

1. **Revisar os documentos legais.** As páginas de Privacidade e Termos
   (`src/pages/PrivacyPolicyBody.tsx` e `TermsBody.tsx`) são rascunhos redigidos a
   partir do brief e trazem marcadores `[DEFINIR]` (titular, endereço, comarca do
   foro, data de vigência, prazo de backup). Precisam de revisão jurídica — as URLs
   são exigidas pelo App Store Connect e pelo Play Console.
2. **Definir o domínio.** O bundle ID definitivo do app deriva dele em reverse-DNS
   e é permanente após a primeira publicação nas lojas.
3. **Lista de espera do Plus.** Enquanto a compra não abre, o botão "Entrar na lista
   de espera" abre o cliente de e-mail do visitante (`mailto:` para o suporte). Quando
   a compra abrir, trocar `PLUS_A_VENDA` para `true` em `src/data/pricing.ts`: o botão
   vira "Assinar o Plus" e aponta para o download.
4. **Preços.** Valores, itens e limites do Plus ficam todos em `src/data/pricing.ts`
   (o equivalente mensal e a economia do anual são calculados). Se mudarem, ajustar
   também a seção 8 dos Termos.
5. **Links das lojas.** `URL_APP_STORE` em `src/data/site.ts` ainda é provisório.
6. **Ícones do app.** A logo (cérebro) está em `public/assets/brand/`, gerada a partir
   do ícone 1024 do app: `blink_logo.png` (header/footer), `blink_favicon.png` e
   `apple-touch-icon.png`. Se o ícone do app mudar, regere os três a partir dele.
7. **Open Graph.** Falta `og:image` e `og:url` — dependem do domínio e de uma
   imagem de compartilhamento.

## Deploy

`npm run build` gera `dist/`. Publique essa pasta em Vercel, Netlify, Cloudflare
Pages ou GitHub Pages.

Como as rotas `/privacidade` e `/termos` são do React Router, o host precisa
devolver o `index.html` para qualquer caminho. Isso já está configurado:
`vercel.json` para a Vercel e `public/_redirects` para Netlify e Cloudflare Pages.
Em outros hosts, configure o fallback de SPA para `index.html`.
