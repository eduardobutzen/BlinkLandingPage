# Conteúdo do Blink

Levantamento feito em 23/10/2026 a partir de duas fontes, que foram cruzadas:

- **Site ao vivo** `https://blinkflashcards.com.br/`, inspecionado com o REA
  (`inspect_web_page`, evidência `ev_8b3e04df…8d78286`). Screenshots desktop e mobile em
  `docs/screenshots/blink-atual/`.
- **Código deste repositório** (branch `main`, commit `5fca07d`), que é o que está
  publicado. Os textos abaixo foram copiados dos arquivos indicados em cada seção.

O site ao vivo e o código batem: mesmas seções, mesmos textos e nenhuma seção de preços.

> Legenda: **[site]** está publicado hoje · **[histórico]** existiu no site e foi removido ·
> **[brief]** está só no `LANDING_BRIEF.md` (20/08/2026) e nunca foi publicado ·
> ⚠️ precisa da sua atenção

---

## 1. Home (`/`)

### 1.1 SEO e compartilhamento [site] (`index.html`)

| Campo | Texto |
| --- | --- |
| `<title>` | Blink: sua apostila vira flashcards, e a IA explica cada erro |
| `meta description` | App de estudo com flashcards, quiz e repetição espaçada. Envie PDF, slides ou fotos e receba cards prontos; quando você erra, a IA explica o porquê. Grátis para estudar, no iPhone e no Android. |
| `og:title` / `twitter:title` | Blink: sua apostila vira flashcards, e a IA explica cada erro |
| `og:description` | Envie PDF, slides ou fotos e receba cards prontos, com quiz. Errou? A IA explica e conversa com você. Grátis para estudar, no iPhone e no Android. |
| `twitter:description` | Envie PDF, slides ou fotos e receba cards prontos, com quiz. Errou? A IA explica e conversa com você. |
| `og:image` | `/assets/brand/og-blink.png` (1200×630) |
| `og:image:alt` | Ícone do Blink ao lado da frase: sua apostila vira flashcards, com repetição espaçada e IA. |
| `og:locale` / `og:site_name` / canonical | `pt_BR` / Blink / `https://blinkflashcards.com.br/` |

### 1.2 Header [site] (`src/components/Header.tsx`)
- Marca: logo e a palavra **Blink**; nome acessível "Blink, página inicial".
- Menu (`aria-label` "Seções da página"): **Como funciona** (`#como-funciona`) ·
  **Recursos** (`#recursos`) · **Perguntas** (`#faq`).
- Botão de tema: "Mudar para o tema claro" ou "Mudar para o tema escuro".
- CTA: **Baixar o app →** (`#baixar`).
- Nas páginas legais e secundárias, o header não tem menu e o CTA vira **Voltar ao site** (`/`).

### 1.3 Hero [site] (`src/sections/Hero.tsx`)
- **H1:** Sua apostila vira flashcards. **A IA explica cada erro.** (a segunda frase em destaque)
- **Lead:** Envie PDF, slides ou fotos e receba cards prontos, com quiz. A repetição espaçada diz quando revisar.
- **Botões de loja** (`src/components/StoreBadges.tsx`):
  - Com link: "Baixe na **App Store**" / "Disponível no **Google Play**". Nomes acessíveis:
    "Baixar o Blink na App Store" / "Baixar o Blink no Google Play".
  - Sem link (hoje): "Em breve na **App Store**" / "Em breve na **Google Play**". Nomes
    acessíveis: "App Store: em breve" / "Google Play: em breve".
- **Nota:** Grátis para estudar, no iPhone e no Android.
- **Carrossel de telas** ("Telas do aplicativo Blink"): 7 capturas que giram sozinhas a cada
  3,5 s, com os botões "Tela anterior", "Pausar o giro das telas" / "Continuar o giro das
  telas" e "Próxima tela". As telas e os textos alternativos estão na seção 6.2.

### 1.4 Como funciona [site] (`src/sections/HowItWorks.tsx`, `#como-funciona`)
- **Etiqueta:** Como funciona
- **H2:** Do material à revisão **em três passos**.
- **Passos:**
  1. **Envie o material**: Apostila em PDF, slides, Word, fotos ou só o assunto digitado.
  2. **Estude com flashcards e quiz**: Cada card vem com 4 alternativas, e o app agenda a hora certa de revisar.
  3. **Errou? A IA explica**: Você vê o porquê da resposta certa e conversa com a IA até entender.

### 1.5 Recursos [site] (`src/sections/Features.tsx`, `#recursos`)
- **Etiqueta:** Recursos
- **H2:** Tudo para estudar, **revisar e entender**.

| Rótulo | Título | Texto | Selo | Tela |
| --- | --- | --- | --- | --- |
| Criar | Decks gerados por IA | Digite um assunto ou envie PDF, PPTX, DOCX ou fotos e receba um deck pronto, com as figuras do material e 4 alternativas em cada card. | **Plus** | `decks` |
| Entender | Chat sobre a questão | Se a explicação não bastou, converse com a IA sobre aquela questão: peça outro exemplo ou pergunte por que as outras alternativas estão erradas. | **Plus** | `chat` |
| Estudar | Repetição espaçada | Diga se acertou ou errou e o app agenda cada card para a hora certa de revisar, em flashcards, quiz ou os dois intercalados. | — | `questao` |
| Revisar | Aba Revisar | As questões que você errou ou pulou ficam juntas para refazer, e o botão “Entendi” tira da lista o que você já aprendeu. | — | `revisar` |
| Compartilhar | Comunidade | Encontre decks de outros estudantes por categoria, com busca, avaliações e comentários, e publique os seus. | — | `comunidade` |
| Acompanhar | Hábito e progresso | Meta diária, sequência de dias, conquistas, níveis, estatísticas e lembretes para você não perder a revisão. | — | `progresso` |

### 1.6 Perguntas frequentes [site] (`src/data/faq.tsx`, `#faq`)
- **Etiqueta:** Perguntas
- **H2:** Perguntas frequentes

| # | Pergunta | Resposta |
| --- | --- | --- |
| 01 | Preciso pagar para usar? | Não. Estudar é grátis: flashcards, quiz, repetição espaçada, aba Revisar e comunidade. Os recursos de IA (gerar decks, explicar erros e conversar sobre a questão) são do Blink Plus. |
| 02 | Funciona com PDF e slides? | Sim. No Plus, você envia PDF, PowerPoint (PPTX), Word (DOCX) ou fotos e a IA monta os cards, aproveitando as figuras do próprio material. No grátis, você cria os seus cards à mão, com imagens. |
| 03 | Posso cancelar? | Sim, quando quiser. A assinatura é feita pela App Store ou pelo Google Play, e o cancelamento é na sua conta da loja. |
| 04 | O chat responde qualquer coisa? | Não. O chat fica no assunto da questão: você pede outro exemplo, pergunta por que as outras alternativas estão erradas ou tira dúvidas sobre ela. Não é um chatbot genérico. |

O acordeão abre uma pergunta por vez, e a primeira começa aberta.

### 1.7 CTA de download [site] (`src/sections/DownloadCta.tsx`, `#baixar`)
- **H2:** Baixe o Blink e **estude hoje**.
- **Lead:** Grátis no iPhone e no Android.
- Botões de loja (os mesmos do hero).

### 1.8 Footer [site] (`src/components/Footer.tsx`)
- Marca e frase: Flashcards com IA e repetição espaçada, para iPhone e Android.
- **Baixar:** App Store (em breve) · Google Play (em breve). Sem link enquanto as URLs
  estiverem vazias.
- **Contato:** blinkflashcards@gmail.com (`mailto:`)
- **Legal:** Termos de Uso (`/termos`) · Política de Privacidade (`/privacidade`)
- Barra inferior: © {ano atual} Blink. Todos os direitos reservados. · Feito no Brasil

---

## 2. Planos e preços

### 2.1 No site hoje
**Não há seção de preços.** Ela foi removida em 21/10/2026 (commit `5fca07d`,
"landing sem o card de preços"). O site hoje só menciona o **Blink Plus** de três formas:
o selo "Plus" em dois recursos, a resposta da FAQ 01 e os Termos de Uso.

### 2.2 Valores nos Termos de Uso [site] (`src/pages/TermsBody.tsx`, §8)
- **Grátis:** estudo com repetição espaçada, flashcards e quiz, criação e edição dos
  próprios cards, aba Revisar e comunidade. Não inclui IA e exibe anúncios do próprio Blink
  entre os cards.
- **Blink Plus:** **R$ 29,90 por mês** ou **R$ 199,90 por ano**. Acrescenta geração de
  decks por IA, explicação da IA nas questões erradas, chat com a IA sobre a questão,
  download de decks da comunidade e remoção dos anúncios.
- Limites diários e mensais, verificados no servidor. Cobrança, renovação e reembolso
  seguem as regras da App Store ou do Google Play. Direito de arrependimento em 7 dias (CDC).

### 2.3 A seção removida [histórico] (`git show 5fca07d^:src/sections/Plans.tsx` e `src/data/pricing.ts`)
- **Etiqueta:** Preços · **H2:** Estude de graça. **A IA fica no Plus.**
- **Grátis** — R$ 0 — "Para estudar sem pagar nada."
  - Estudo completo com repetição espaçada, flashcards e quiz
  - Criar e editar os próprios cards, com imagens
  - Aba Revisar para refazer as questões
  - Explorar e publicar na comunidade
  - (ressalva) Sem recursos de IA, com anúncios do próprio Blink entre os cards
  - Botão: **Baixar grátis**
- **Blink Plus**
  - **Anual** (com o selo "Melhor escolha"): R$ 199,90/ano. "Equivale a R$ 16,66/mês, 44%
    mais barato que 12 meses do mensal (R$ 358,80)." Os três valores eram calculados a
    partir do preço anual e do mensal.
  - **Mensal:** R$ 29,90/mês
  - "Tudo do Grátis, mais:" Decks por IA a partir de arquivos: PDF, PPTX, DOCX e fotos ·
    Decks por IA a partir de um assunto digitado · Explicação da IA em cada questão errada ·
    Chat com a IA sobre a questão · Baixar decks da comunidade · Sem anúncios
  - "Ver limites de uso da IA" (por dia / por mês): decks a partir de arquivo 3/20 · decks a
    partir de um assunto 10/80 · explicações da IA 20/200 · conversas com a IA 10/60
  - Botão (com a venda ainda fechada): **Entrar na lista de espera**, que abria um e-mail
    para blinkflashcards@gmail.com com o assunto "Lista de espera do Blink Plus". Nota: "A
    assinatura ainda não abriu. Mande um e-mail e avisamos no lançamento."
  - Com a venda aberta, o botão viraria **Assinar o Plus** e levaria a `#baixar`.

⚠️ Decidir: a seção de preços volta na nova landing? A referência tem um bloco que serve
para isso (ver `docs/mapeamento.md`).

---

## 3. Outras páginas

### 3.1 `/baixar` e `/app` [site] (`src/pages/Baixar.tsx`)
- Endereço que o app compartilha e que vai na bio das redes. Detecta o aparelho e manda para
  a loja certa, mantendo os parâmetros `?utm_…`.
- **H1:** Baixar o Blink
- Com link de loja: "Abrindo a loja do seu aparelho. Se nada acontecer, use os botões abaixo."
- Sem link (hoje): "O Blink está em revisão nas lojas. Assim que for aprovado, este endereço
  leva direto para o download no seu aparelho."
- Botões de loja.

### 3.2 `/deck/:id` — deck compartilhado [site] (`src/pages/DeckCompartilhado.tsx`)
- O conteúdo vem do Supabase (`share_preview_deck`).
- **Carregando:** "Carregando…"
- **Não encontrado:** H1 "Este deck não está disponível". Texto: "Ele pode ter sido removido
  pelo autor ou tirado do ar. O resto da comunidade continua lá dentro." Botão "Conhecer o Blink".
- **Encontrado:**
  - Etiqueta "Deck da comunidade", título e descrição do deck, e "por {autor}".
  - Números: cards, downloads, nota com contagem de avaliações. Até 6 tags.
  - Botão **Abrir no app**. Nota: "Já tem o Blink? O botão abre o deck direto. Se ainda não
    tem, ele leva para a loja."
  - Amostra: "Algumas perguntas deste deck", seguida de "As respostas ficam no app, que é
    onde elas viram memória."
  - Botões de loja.

### 3.3 `/autor/:id` — perfil público [site] (`src/pages/AutorCompartilhado.tsx`)
- **Não encontrado:** "Este perfil não está disponível". Texto: "A pessoa pode não ter
  nenhum deck publicado no momento." Botão "Conhecer o Blink".
- **Encontrado:**
  - Foto, a etiqueta "Publica no Blink", o nome e "Publica desde {mês de ano}".
  - Números: decks publicados, downloads, nota, cards criados.
  - Botão **Abrir no app**, "Decks desta pessoa" (grade de cards) e botões de loja.

### 3.4 `/termos` [site] (`src/pages/TermsBody.tsx`)
- Etiqueta "Legal" · H1 "Termos de Uso" · "Aplica-se ao aplicativo Blink (iOS e Android) e
  a este site." · **Última atualização: 12 de outubro de 2026** · índice "Nesta página".
- Seções:
  1. Aceitação destes termos
  2. O que o Blink é
  3. Sua conta
  4. Uso aceitável
  5. Seu conteúdo continua seu
  6. Geração por inteligência artificial
  7. Comunidade e licenças de deck
  8. Planos, limites e pagamentos
  9. Disponibilidade e mudanças
  10. Suspensão e encerramento
  11. Garantias e limitação de responsabilidade
  12. Disposições gerais
  13. Contato
- O texto completo (≈11 KB) fica em `TermsBody.tsx` e **não é reescrito**; só ganha o novo
  layout.

### 3.5 `/privacidade` [site] (`src/pages/PrivacyPolicyBody.tsx`)
- Mesmo cabeçalho, com H1 "Política de Privacidade" e a mesma data (12/10/2026) e índice.
- Seções:
  1. Quem é responsável pelos seus dados
  2. Que dados o Blink trata (2.1 Conta · 2.2 Conteúdo que você cria ou envia · 2.3 Estudo ·
     2.4 Técnicos · 2.5 Assinatura)
  3. Processamento do seu material por inteligência artificial
  4. Para que usamos cada dado
  5. Com quem compartilhamos
  6. Como protegemos
  7. Conteúdo que você publica na Comunidade
  8. Notificações
  9. Retenção e exclusão da conta
  10. Seus direitos
  11. Idade mínima
  12. Transferência internacional
  13. Mudanças nesta política
  14. Contato
- O texto completo (≈13 KB) também fica no arquivo e não é reescrito.

### 3.6 Qualquer outro endereço
Cai na home (`<Route path="*">`).

---

## 4. Conteúdo que existe mas não está no site [brief]

Fatos do `LANDING_BRIEF.md` (20/08/2026) que nunca foram publicados. **Não uso nenhum sem a
sua confirmação**, porque o brief está desatualizado em outros pontos (seção 7).

- **Modos de prática:** Flashcards, Quiz, **Escrever** (a IA corrige por sentido) e Misto
  (alternado 1 a 1 ou aleatório 50/50). ⚠️ O site fala só de flashcards e quiz.
- **Números do produto:**
  - 73 conquistas e 7 patentes (Iniciante → Aprendiz → Dedicado → Estudante → Erudito →
    Mestre → Lenda)
  - 6 formatos de entrada para a IA
  - 5 abas: Início · Decks · Comunidade · Progresso · Perfil
  - Algoritmo SM-2 ("o mesmo do Anki")
  - Arquivos de até 25 MB e 80 páginas
- **Comunidade:** licenças Protegido / Compartilhável / Aberto, "Adaptado de …", avaliação
  por estrelas e moderação.
- **Lembretes:** notificação no horário escolhido, com a contagem real de cards devidos.
- **Privacidade como argumento:** RLS em todas as tabelas, a chave da IA fica no servidor e a
  conta pode ser excluída dentro do app.
- **Textos do onboarding** (já usados no app):
  - "Aprenda qualquer assunto": Digite um tópico e a IA monta o deck em segundos — ou crie
    os cards você mesmo e anexe imagens.
  - "Estude no ritmo certo": Diga só se acertou ou errou. Os que você errar voltam na mesma
    sessão, e a repetição espaçada agenda cada card para a hora exata de revisar.
  - "Pratique de outros jeitos": Além dos flashcards, teste-se com o Quiz de alternativas
    ou digite a resposta no modo Escrever.
  - "Crie o hábito": Defina sua meta diária, mantenha a sequência viva e desbloqueie
    conquistas enquanto acompanha seu progresso.
- **Frases de apoio:** "Diga só se acertou ou errou. O Blink decide quando você revisa." ·
  "As figuras da sua apostila viram as imagens dos seus cards." · "Estude no ritmo certo,
  todo dia, sem planilha e sem culpa."

**Depoimentos:** não há nenhum. **Números de usuários ou downloads:** não há nenhum. O
próprio brief avisa: "Não invente prova social."

---

## 5. Links

| Tipo | Destino | Estado |
| --- | --- | --- |
| App Store | `URL_APP_STORE` em `src/data/site.ts` | ⚠️ **Vazio**. Os botões mostram "em breve" |
| Google Play | `URL_GOOGLE_PLAY` em `src/data/site.ts` | ⚠️ **Vazio**. URL prevista (comentário no código): `https://play.google.com/store/apps/details?id=br.com.blinkflashcards.app` |
| Download inteligente | `/baixar` e `/app` | Funcionam (200). Sem loja, mostram "em revisão nas lojas" |
| Contato | `mailto:blinkflashcards@gmail.com` | OK |
| Termos de Uso | `/termos` | OK (200) |
| Política de Privacidade | `/privacidade` | OK (200) |
| Abrir no app | `blink://community/{id}` e `blink://community/author/{id}`; sem resposta em 1,5 s, vai para a loja | Depende das URLs das lojas |
| Redes sociais | — | **Sem conteúdo**: não há perfis no site nem no código |
| Sitemap e robots | `/sitemap.xml` (4 URLs) e `/robots.txt` | OK |
| `http://` | Redireciona 308 para `https://` | OK |

---

## 6. Identidade visual

### 6.1 Logo e marca
- **Logomarca:** `public/assets/brand/blink_logo.png` (128×128), o ícone do app com um
  cérebro em quadrado escuro. Aparece ao lado da palavra **Blink** em texto (Manrope). Não
  há wordmark em arquivo.
- **Favicon:** `blink_favicon.png` (64×64). **Apple touch:** `apple-touch-icon.png` (180×180).
- **Compartilhamento:** `og-blink.png` (1200×630).
- **No repositório do app** (`~/projetos/Blink/assets/brand/`): `blink_app_icon_1024.png`
  e `blink_adaptive_foreground.png`. Ainda não estão na landing.

### 6.2 Mockups do app
Os arquivos ficam em `public/assets/mockups/`: capturas reais do app em WebP de 700×1398 com
a moldura do iPhone. Textos alternativos (de `src/data/telas.ts`):

| Arquivo | Texto alternativo |
| --- | --- |
| `inicio.webp` | Tela inicial do Blink: anel da meta diária com 0 de 115 cards hoje, sequência de 1 dia e o botão Revisar 88 cards. |
| `decks.webp` | Tela Decks do Blink: decks de Redes de Computadores, Anatomia e Desenvolvimento Web, cada um com capa e número de cards. |
| `questao.webp` | Uma questão de Redes de Computadores com quatro alternativas, a certa marcada em verde, e o botão Pedir explicação. |
| `chat.webp` | Conversa com a IA sobre a questão: o estudante pede um exemplo e a IA explica com a analogia de um envelope enviado pelos correios. |
| `revisar.webp` | Aba Revisar: 4 questões a corrigir em Redes de Computadores e o botão Iniciar correção. |
| `comunidade.webp` | Tela Comunidade: decks em alta e categorias como Medicina e Saúde, Idiomas e Tecnologia. |
| `progresso.webp` | Tela de progresso: 2 dias de sequência, 389 cards estudados, 93% de acerto e a meta diária de 115 cards. |

### 6.3 Cores (`src/styles/blink.css`)
O Blink é **monocromático de propósito**: a interface não tem cor de marca, e a cor vem das
capas dos decks.

| Token | Claro | Escuro |
| --- | --- | --- |
| `--bg` | `#e2e2df` | `#000000` |
| `--surface` | `#ededea` | `#0b0b0b` |
| `--card` / `--card-hi` | `#f6f6f4` / `#ffffff` | `#121212` / `#171717` |
| `--line` / `--line-soft` / `--line-strong` | `#cfcfcb` / `#dcdcd8` / `#a9a9a6` | `#262626` / `#1c1c1c` / `#4a4a4a` |
| `--text` / `--text-2` / `--text-3` | `#111111` / `#66666b` / `#75757a` | `#c9c9c9` / `#7c7c84` / `#66666d` |
| `--invert` / `--on-invert` | `#111111` / `#e2e2df` | `#c9c9c9` / `#000000` |
| `--error` | `#d92d20` | `#f4212e` |
| `--glass-bg` | `rgba(246,246,244,.72)` | `rgba(24,24,24,.62)` |
| Dourado (só patentes e conquistas no app; brief) | `#a16207` | `#e3b341` |

O tema segue o sistema e pode ser trocado no botão do header; a escolha fica salva em
`localStorage` (`blink-theme`).

### 6.4 Tipografia
- **Manrope** (Google Fonts), pesos 400–800, usada em títulos e corpo.
- Medidas no site atual: H1 com 68 px peso 800, H2 com 44 px peso 800, H3 com 22–24 px
  peso 600–700, corpo com 14–16 px e entrelinha de 1,6.
- Títulos em 2 tons: a parte comum em `--text-2` e a parte em `<strong>` em `--text`.
- Escala definida: 12 / 14 / 16 / 18 / 20 px. Layout: `--page-max: 1160px`,
  `--gutter: 20px`, raios de 24 px, 14 px e pílula.

### 6.5 Estilo das imagens
- Capturas reais do app, sempre dentro da moldura do iPhone e com sombra forte.
- Brilho radial claro atrás dos aparelhos e textura de pontos no topo do hero.
- Nada de ilustração ou foto de banco de imagens.

---

## 7. Desatualizado ou quebrado

| # | Problema | Onde | Sugestão |
| --- | --- | --- | --- |
| 1 | ⚠️ **Botões das lojas sem link.** O site inteiro diz "em breve" | `src/data/site.ts` | Esperado no pré-lançamento. No dia, preencher as duas URLs |
| 2 | ⚠️ **`www.blinkflashcards.com.br` não resolve** (sem DNS) | DNS | Criar um CNAME do `www` com redirecionamento para o domínio sem `www` |
| 3 | ⚠️ **Todas as rotas devolvem o mesmo HTML**, com título, descrição e OG da home. Quem compartilha `/deck/:id` no WhatsApp vê a prévia da home | SPA na Vercel | Fora do escopo do layout; anotar como pendência de SEO |
| 4 | **Endereços inexistentes respondem 200** com a home (soft 404) | `vercel.json` e `<Route path="*">` | Idem |
| 5 | ⚠️ **`DESIGN.md` descreve outra marca** ("Foodnoms", fonte Aquawax Pro, laranja e verde) | `DESIGN.md` | Não usar como fonte. Substituir pelos tokens desta seção ou apagar |
| 6 | ⚠️ **`LANDING_BRIEF.md` desatualizado** em vários pontos: diz que o preço "ainda não [foi] definido", mas os Termos dizem R$ 29,90 / R$ 199,90; diz "free com 300 gerações por IA/mês", mas os Termos dizem que o Grátis não tem IA; sugere Plus Jakarta Sans + Inter, mas o site usa Manrope; o bundle ID mudou de `com.blink.app` para `br.com.blinkflashcards.app`; diz que o link de deck está "fora do escopo", mas `/deck` e `/autor` existem | `LANDING_BRIEF.md` | Usar só como lista de ideias, com confirmação |
| 7 | O preço do Plus só aparece nos Termos. A FAQ 01 e os selos "Plus" citam o plano sem dizer quanto custa | Home | Decidir no mapeamento |
| 8 | O mockup `inicio.webp` mostra o seu nome ("Eduardo Butzen") na tela | Mockup | Opcional: trocar por uma captura com nome genérico |
| 9 | O `lastmod` do sitemap (15/10) é anterior à mudança de 21/10 | `public/sitemap.xml` | Atualizar no próximo deploy |
| 10 | O modo **Escrever** aparece no brief e no onboarding do app, mas não no site | — | Confirmar se o modo existe hoje |
| 11 | O selo sem link diz "Em breve **na** Google Play"; o certo é "no Google Play" (o selo com link usa "Disponível **no**") | `StoreBadges.tsx` | ✅ Corrigido na Fase 4 |
| 12 | Nos textos legais, o JSX engole o espaço antes de 7 links ou negritos ("com aPolítica de Privacidade", "termos:blinkflashcards@…") | `TermsBody.tsx`, `PrivacyPolicyBody.tsx` | ✅ Corrigido na Fase 4 (só os espaços) |

---

## 8. Assets

**Todos os assets que o site usa já estão em `public/assets/`.** Nada precisa ser baixado do
site ao vivo:

```
public/assets/brand/   blink_logo.png · blink_favicon.png · apple-touch-icon.png · og-blink.png
public/assets/mockups/ inicio · decks · questao · chat · revisar · comunidade · progresso (.webp)
```

Opcional, com sua confirmação: copiar `blink_app_icon_1024.png` do repositório do app
(`~/projetos/Blink/assets/brand/`) para `public/assets/brand/`. Ele serviria para um logo
grande e nítido no hero ou no CTA. É uma cópia local, sem download.
