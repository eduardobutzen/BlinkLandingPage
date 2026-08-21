# Blink — Landing Page

Site de pré-lançamento do **Blink**, app de flashcards com repetição espaçada que
transforma o material do próprio usuário (PDF, PPTX, DOCX, imagem ou tópico digitado)
em decks prontos.

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
    Header.tsx  Footer.tsx  ThemeToggle.tsx  BlinkMark.tsx
  sections/                   Uma seção da landing por arquivo
  pages/                      Home, Política de Privacidade, Termos
  hooks/                      useTheme, useScrollReveal
  data/                       testimonials.ts, site.ts
  lib/utils.ts                cn()
DESIGN.md                     Referência de linguagem visual (extraída do Foodnoms)
LANDING_BRIEF.md              Fonte de verdade do conteúdo
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
| `testimonials-columns-1.tsx` | seção Depoimentos | 21st.dev |
| `interactive-accordion.tsx` | seção FAQ | 21st.dev |
| `pricing-slider-loops.tsx` | seção Planos | 21st.dev |

## Sistema visual

A **estrutura** vem do `DESIGN.md`: canvas claro, mockups de celular como herói,
headline em duas tonalidades, raio de 26px em tudo, superfícies planas, ritmo
vertical de 96px, coluna única de 1200px.

A **paleta** vem do `LANDING_BRIEF.md` §8, porque o app é monocromático de propósito —
o cromatismo pertence às capas dos decks, não ao chrome. Onde o Foodnoms usa laranja
e verde, aqui o contraste é de tom: texto forte contra texto secundário.

| Token | Claro | Escuro |
| --- | --- | --- |
| Fundo | `#e2e2df` | `#000000` |
| Texto | `#111111` | `#c9c9c9` |
| Secundário | `#78787d` | `#71717a` |
| Dourado (só patente/conquista) | `#a16207` | `#e3b341` |
| Erro | `#d92d20` | `#f4212e` |

Tipografia: **Plus Jakarta Sans** (títulos) + **Inter** (texto), via Google Fonts.
Efeito *liquid glass* restrito ao header e ao bloco final de CTA, como no app.

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
| `decks.webp` | Decks | hero, à esquerda |
| `inicio.webp` | Início | hero, ao centro |
| `progresso.webp` | Progresso | hero, à direita |
| `comunidade.webp` | Comunidade | seção Comunidade |

Geradas a partir dos PNGs de 1419×2796 com recorte da área pintada e reamostragem
para 700px de largura (~2,2× do tamanho de exibição). Somam 252 KB.
Para trocar uma tela, basta substituir o arquivo mantendo a proporção 700×1422.

## Pendências antes de publicar

1. **Revisar os documentos legais.** As páginas de Privacidade e Termos
   (`src/pages/PrivacyPolicyBody.tsx` e `TermsBody.tsx`) são rascunhos redigidos a
   partir do brief e trazem marcadores `[DEFINIR]` (titular, endereço, comarca do
   foro, data de vigência, prazo de backup). Precisam de revisão jurídica — as URLs
   são exigidas pelo App Store Connect e pelo Play Console.
2. **Definir o domínio.** O bundle ID definitivo do app deriva dele em reverse-DNS
   e é permanente após a primeira publicação nas lojas.
3. **Lista de espera.** Hoje o formulário abre o cliente de e-mail do visitante
   (`mailto:`). Trocar pelo provedor escolhido em `src/sections/WaitlistCta.tsx`.
4. **Preço do Pro.** Definir e preencher `precoMensal` em `src/data/pricing.ts`
   (hoje `null`, que faz o card mostrar "Em breve"). Ajustar também a seção 8 dos
   Termos. As faixas do slider — `FAIXAS_DE_USO` — estão no mesmo arquivo.
5. **Links das lojas.** Os badges estão com selo "em breve" e sem `href`.
   Trocar os `<span className="store-badge">` por `<a>` quando os links saírem.
6. **Ícones do app.** Copiar `blink_favicon.png` e o ícone 1024 para
   `public/assets/brand/` do repositório do app; hoje há um favicon SVG feito aqui.
7. **Depoimentos são de exemplo.** `src/data/testimonials.ts` traz textos fictícios,
   sinalizados na própria página pelo parágrafo `.placeholder-note`. O brief §4 proíbe
   inventar prova social: ou troque por depoimentos reais e autorizados (removendo o
   aviso), ou apague a seção e o item do menu em `src/components/Header.tsx`.
8. **Open Graph.** Falta `og:image` e `og:url` — dependem do domínio e de uma
   imagem de compartilhamento.

## Deploy

`npm run build` gera `dist/`. Publique essa pasta em Vercel, Netlify, Cloudflare
Pages ou GitHub Pages.

Como as rotas `/privacidade` e `/termos` são do React Router, o host precisa
devolver o `index.html` para qualquer caminho. Isso já está configurado:
`vercel.json` para a Vercel e `public/_redirects` para Netlify e Cloudflare Pages.
Em outros hosts, configure o fallback de SPA para `index.html`.
