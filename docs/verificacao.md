# Verificação da nova landing (Fase 5)

Feita em 23/10/2026 na branch `feat/landing-layout-cooud`, com o servidor de
desenvolvimento (`npm run dev`) e um Chrome 152 headless de perfil temporário.
Desktop em 1440×900; mobile em 390×844 com DPR 2, user agent de iPhone e toque. Os dois
temas foram testados. Também conferi no navegador do app com 375 px e 310 px de largura.

Decisões aplicadas: D1 = sem seção de preços · D2 = sem faixa de números · D3 = carrossel no
hero · D4 = uma tela por passo · D5 = sem CTA final gigante · D6 = corrigido "Em breve **no**
Google Play".

---

## 1. Screenshots

| Página | Desktop | Mobile |
| --- | --- | --- |
| Home, tema escuro | `blink-novo/home-dark-desktop.jpg` | `blink-novo/home-dark-mobile.jpg` |
| Home, tema claro | `blink-novo/home-light-desktop.jpg` | `blink-novo/home-light-mobile.jpg` |
| Termos | `blink-novo/termos-desktop.jpg` | `blink-novo/termos-mobile.jpg` |
| Privacidade | `blink-novo/privacidade-desktop.jpg` | `blink-novo/privacidade-mobile.jpg` |
| Baixar | `blink-novo/baixar-desktop.jpg` | `blink-novo/baixar-mobile.jpg` |
| Deck inexistente | `blink-novo/deck-invalido-desktop.jpg` | `blink-novo/deck-invalido-mobile.jpg` |
| **Lado a lado com o Cooud** | `comparacao/home-desktop.jpg`, `comparacao/termos-desktop.jpg` | `comparacao/home-mobile.jpg`, `comparacao/termos-mobile.jpg` |

Todos os caminhos são relativos a `docs/screenshots/`, que fica fora do git. Nas capturas de
página inteira, o header fixo e o link "pular para o conteúdo" aparecem fora do lugar, o que
também aconteceu com o Cooud. No navegador real, os dois ficam no lugar certo: conferido a
375 px.

---

## 2. Estrutura: Cooud × Blink

| Seção do Cooud | No Blink | Equivalente? |
| --- | --- | --- |
| Header flutuante fixo, que não esconde | Igual (vidro do Blink, logo, 3 âncoras, tema, "Baixar o app") | ✅ |
| Menu mobile em `<dialog>` | Igual, e agora **modal** | ✅ (melhor) |
| Hero: texto, visual central e nota (3 colunas) | 3 colunas a partir de 1280 px; 2 colunas de 1024 a 1279 px; 1 coluna centralizada no celular | ✅ |
| Faixa de 3 links numerados | 01–03 com os passos, levando a `#como-funciona` | ✅ |
| `#plataforma` (etiqueta numerada, título de 2 tons, mock grande, 3 colunas) | "01 / Como funciona", painel com 3 telas e 3 passos alinhados | ✅ |
| `#servicos` (botões de alternância e painel de 2 colunas) | "02 / Recursos", 6 botões e painel com texto e tela | ✅ |
| `#app` (painel grande de download) | Painel "Baixar" com logo, título, lead e botões das lojas | ✅ |
| `#perguntas` (FAQ em 2 colunas) | "03 / Perguntas", com o e-mail à esquerda e o acordeão à direita | ✅ |
| Footer de 4 colunas, barra legal e wordmark gigante | Igual, sem redes sociais | ✅ |
| Legal longo (cabeçalho, chips, índice, seções numeradas) | `/termos` e `/privacidade` com índice lateral (recolhível no celular) e selos numerados | ✅ |
| `#global`, `#developers`, `#taxas`, `#produtos`, faixa de números, CTA final | Removidos conforme D1–D5 | — (decisão) |

O visual é o do Blink: Manrope com títulos em peso 800, paleta monocromática nos temas claro
e escuro, logo e mockups reais do app, e nenhum texto, imagem, ícone ou código do Cooud.

---

## 3. Comportamento

| Comportamento | Resultado medido |
| --- | --- |
| Pular para o conteúdo | O primeiro Tab mostra o link, e o alvo `#conteudo` existe ✅ |
| Foco visível | `outline` de 2 px sólido, deslocado 4 px ✅ |
| Hover | Atrás de `(hover: hover)`: o CTA sobe 2 px e vai a opacidade 0,9 num navegador com mouse ✅. No Chrome headless, que se declara sem hover, não aplica, como esperado |
| Menu mobile | Abre como modal (`:modal`), com `aria-expanded=true`. O foco entra no menu, a rolagem trava, o Escape fecha, o foco volta a "Abrir menu" e um link do menu fecha o menu e leva à âncora ✅ |
| Carrossel | Gira sozinho (avançou em 4 s); "Próxima tela", a seta → e o arraste avançam; o aviso para leitor de tela ("Tela N de 7") é atualizado; com a pausa, nada muda em 4 s ✅ |
| Recursos | `aria-pressed` acompanha o botão; título, texto, selo Plus, contador e tela trocam juntos; só a tela ativa expõe o texto alternativo ✅ |
| FAQ | Uma pergunta aberta por vez; as fechadas ficam `inert` e com altura 0; o "+" gira 45° ✅ |
| Reveal ao rolar | 10 blocos fora da tela começam invisíveis; ao rolar, 12 de 12 são revelados ✅ |
| Movimento reduzido | O carrossel começa pausado e não gira em 4 s; o reveal começa visível; as transições caem para ~0 ✅ |
| Índice legal | 13 itens nos Termos e 14 na Privacidade, nenhum quebrado; o clique leva à seção e marca o item com `aria-current` ✅ |
| Console | Nenhum erro ou aviso ✅ |
| Largura de 310 px | Sem rolagem horizontal; o header cabe numa linha ✅ |

---

## 4. Conteúdo de `docs/conteudo-blink.md`

Conferido automaticamente: **64 de 64** itens presentes. São 47 textos da home, 4 respostas
do FAQ, 7 textos alternativos das telas e 6 recursos completos (rótulo, título, texto, selo
Plus e tela).

| Seção do documento | Situação |
| --- | --- |
| 1.1 SEO (title, description, OG, Twitter, canonical, `lang="pt-BR"`) | Usado; o `index.html` não mudou ✅ |
| 1.2–1.8 Header, Hero, Como funciona, Recursos, FAQ, CTA, Footer | Usados ✅ |
| 2 Planos e preços | **Removido** (D1). Os valores continuam nos Termos §8 (`/termos#planos`) |
| 3.1 `/baixar` e `/app` | Usados, com o estado "em revisão nas lojas" ✅ |
| 3.2 `/deck/:id` | Estado "não disponível" testado ✅. O estado com deck real **não foi testado** (falta um ID público); a lógica não mudou |
| 3.3 `/autor/:id` | Mesma situação do 3.2 |
| 3.4–3.5 Termos e Privacidade | Texto mantido; só o layout e os números das seções mudaram ✅ |
| 3.6 Rota desconhecida | Cai na home ✅ |
| 4 Conteúdo só do brief | **Não usado**: aguarda sua confirmação |
| 6 Identidade (logo, 7 mockups, cores, Manrope) | Usados ✅. Os tons de texto secundário foram ajustados para passar no AA (seção 6) |
| 8 Assets | Nada baixado; tudo já estava em `public/assets/` ✅ |

---

## 5. Links

| Link | Situação |
| --- | --- |
| Âncoras da home (`#conteudo`, `#como-funciona`, `#recursos`, `#faq`, `#baixar`) | Nenhuma quebrada ✅ |
| Internos (`/`, `/termos`, `/privacidade`) | OK ✅ |
| `mailto:blinkflashcards@gmail.com` | OK ✅ |
| **App Store e Google Play** | ⚠️ **Sem link**: as URLs em `src/data/site.ts` estão vazias, então os botões aparecem como "Em breve na App Store" e "Em breve no Google Play". Comportamento esperado até a publicação |
| `/baixar` | Funciona; sem as URLs, mostra "em revisão nas lojas" |
| **Planos** | ⚠️ Não há seção de planos (D1). O único lugar com preço é `/termos#planos`, e essa âncora funciona |

---

## 6. Acessibilidade e SEO

- HTML semântico: um `h1` por página, `section` com `aria-labelledby`, `nav` com rótulo,
  `main` como alvo do pular. Todas as imagens têm `alt`; as decorativas, `alt=""`.
- **Contraste AA:** `--text-2` e `--text-3` foram ajustados de #66666b / #75757a para
  #58585d / #5e5e63 no tema claro, e de #7c7c84 / #66666d para #8a8a92 / #808088 no escuro.
  Todos passam de 4,5:1 em todas as superfícies (antes, o `--text-2` claro ficava em 4,40 e
  o `--text-3` em até 3,15).
- Corpo de texto com pelo menos 16 px; alvos de toque com pelo menos 40 px.
- Metadados conferidos no navegador: `lang`, `title`, `description`, `og:*`, `canonical` ✅.

---

## 7. O que mudou no código

- **Design system:** `src/styles/tokens.css` (cores, tipografia fluida, espaço, raios,
  movimento), `base.css` (reset, foco, reveal, movimento reduzido) e `site.css`
  (componentes). O `index.css` liga os tokens ao Tailwind v4 (`bg-card`, `text-muted`…).
  O `blink.css` antigo foi removido.
- **Componentes novos:** `PhoneCarousel`, `Accordion`, `SectionHead`, `LegalPage`;
  `Header`, `Footer` e `StoreBadges` foram reescritos.
- **Seções:** `Hero`, `HowItWorks`, `Features` e `Faq` foram reescritas; entrou a nova
  `Download`. Os dados foram para `src/data/passos.ts` e `src/data/recursos.ts`, com os
  textos idênticos.
- **Removidos:** `components/ui/*` (bento, dot-pattern, interactive-accordion,
  phone-carousel), `sections/DownloadCta.tsx` e as dependências `motion` e
  `class-variance-authority`, que deixaram de ser usadas.
- **Textos legais:** 7 espaços que o JSX engolia antes de links e negritos (por exemplo,
  "com aPolítica") foram corrigidos; o mesmo erro está no site publicado hoje.
- **Microtextos de interface novos** (rótulos de acessibilidade, não marketing): "Pular para
  o conteúdo", "Abrir menu", "Fechar menu", "Menu", "Passos", "Mostrar tela N de 7",
  "Tela N de 7", "N min de leitura", "N seções".

---

## 8. Pendências

1. **URLs das lojas** em `src/data/site.ts`, no dia da publicação.
2. **`www.blinkflashcards.com.br` sem DNS:** criar o registro e o redirecionamento.
3. **Prévias por rota:** `/deck/:id`, `/termos` e as outras rotas ainda servem o título e o
   OG da home para robôs e WhatsApp. Exige SSR ou pré-renderização, fora deste escopo.
4. **Deck e autor com dados reais** não foram testados; preciso de um link público para isso.
5. **Conteúdo do brief** (modo Escrever, conquistas, SM-2, licenças, privacidade) aguarda sua
   confirmação antes de ganhar uma seção.
6. **Preços:** se quiser a seção de volta, o padrão de abas já está documentado.
7. **`DESIGN.md`** descreve outra marca (Foodnoms) e o **`LANDING_BRIEF.md`** está
   desatualizado: vale apagar ou atualizar.
8. **`npm audit`:** 2 alertas altos no ferramental de desenvolvimento (`vite` ≤ 6.4.3 e
   `source-map-js`). Já existiam antes, não afetam o site publicado e se resolvem com
   `npm audit fix`, que atualiza as versões.
9. **Mockup com o seu nome** (`inicio.webp`): opcional trocar.
10. **`sitemap.xml`:** atualizar o `lastmod` no deploy.
11. Nada foi commitado. As mudanças estão na branch `feat/landing-layout-cooud`, à espera da
    sua revisão.
