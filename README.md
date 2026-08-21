# Blink — Landing Page

Site de pré-lançamento do **Blink**, app de flashcards com repetição espaçada que
transforma o material do próprio usuário (PDF, PPTX, DOCX, imagem ou tópico digitado)
em decks prontos.

HTML, CSS e JavaScript estáticos. Sem build, sem dependências, sem framework.

## Estrutura

```
index.html           Landing page
privacidade.html     Política de Privacidade  (RASCUNHO — ver "Pendências")
termos.html          Termos de Uso            (RASCUNHO — ver "Pendências")
assets/css/style.css Sistema visual completo (tokens, componentes, responsivo)
assets/js/main.js    Tema claro/escuro, revelação em scroll, lista de espera
assets/brand/        Ícones
assets/mockups/      Capturas de tela do app (WebP)
DESIGN.md            Referência de linguagem visual (extraída do Foodnoms)
LANDING_BRIEF.md     Fonte de verdade do conteúdo
```

## Rodar localmente

Basta abrir `index.html` no navegador. Para servir por HTTP:

```bash
python -m http.server 8000
```

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

Tudo é controlado por custom properties no topo de `assets/css/style.css`.
Trocar a paleta é editar o bloco `:root`.

## Mockups

Capturas reais do app, em `assets/mockups/` — WebP com fundo transparente e a moldura
do aparelho já embutida na imagem (por isso o realce é `drop-shadow`, que segue o
recorte, e não `box-shadow`).

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

1. **Revisar os documentos legais.** `privacidade.html` e `termos.html` são rascunhos
   redigidos a partir do brief e trazem marcadores `[DEFINIR]` (titular, endereço,
   comarca do foro, data de vigência, prazo de backup). Precisam de revisão jurídica —
   as URLs são exigidas pelo App Store Connect e pelo Play Console.
2. **Definir o domínio.** O bundle ID definitivo do app deriva dele em reverse-DNS
   e é permanente após a primeira publicação nas lojas.
3. **Lista de espera.** Hoje o formulário abre o cliente de e-mail do visitante
   (`mailto:`). Trocar pelo provedor escolhido em `assets/js/main.js`.
4. **Preço do Pro.** A seção de planos mostra "em breve"; o texto do card e a
   seção 8 dos Termos precisam de ajuste quando o preço existir.
5. **Links das lojas.** Os badges estão com selo "em breve" e sem `href`.
   Trocar os `<span class="store-badge">` por `<a>` quando os links saírem.
6. **Ícones do app.** Copiar `blink_favicon.png` e o ícone 1024 de `assets/brand/`
   do repositório do app; hoje há um favicon SVG equivalente feito aqui.
7. **Depoimentos são de exemplo.** A seção `#depoimentos` de [index.html](index.html)
   traz textos fictícios, sinalizados na própria página pelo parágrafo
   `.placeholder-note`. O brief §4 proíbe inventar prova social: ou troque por
   depoimentos reais e autorizados (removendo o aviso), ou apague a seção e o link
   do menu antes de publicar.
8. **Open Graph.** Falta `og:image` e `og:url` — dependem do domínio e de uma
   imagem de compartilhamento.

## Deploy

Qualquer host de arquivos estáticos serve: GitHub Pages, Netlify, Vercel ou
Cloudflare Pages. Não há etapa de build — publique a raiz do repositório.
