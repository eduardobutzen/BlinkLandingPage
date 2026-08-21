# Blink — Brief para a Landing Page

Extração de tudo que o app realmente faz, para servir de matéria-prima da landing.
Fontes: código, `README.md`, `LANCAMENTO.md`, `app.json`, `supabase/schema.sql`,
`extractor/README.md`. Atualizado em 20/08/2026.

---

## 1. Identidade

| Item | Valor |
| --- | --- |
| Nome | **Blink** |
| Slug / deep-link scheme | `blink` |
| Versão | 1.0.0 (pré-lançamento, ainda não publicado nas lojas) |
| Bundle ID / package | `com.blink.app` — **provisório**, será reverse-DNS do domínio (ex.: `br.com.blink.app`) |
| E-mail de contato/suporte | `blinkflashcards@gmail.com` |
| Plataformas | iOS e Android (celular; `supportsTablet: false`) |
| Ícones prontos | `assets/brand/blink_app_icon_1024.png`, `blink_favicon.png`, `blink_adaptive_foreground.png` |

### Uma frase
> App de flashcards com repetição espaçada que transforma o **seu próprio material**
> — PDF, slide, Word, imagem ou um tópico digitado — em decks prontos para estudar.

### Frases de apoio
- "Diga só se acertou ou errou. O Blink decide quando você revisa."
- "As figuras da sua apostila viram as imagens dos seus cards."
- "Estude no ritmo certo, todo dia, sem planilha e sem culpa."

---

## 2. Público-alvo

Estudantes que já estudam por material próprio (universitários, concurseiros,
vestibulandos, residência médica) e usuários de Anki que acham a configuração
pesada demais. O app fala **português brasileiro** em toda a interface.

---

## 3. Funcionalidades (o que anunciar)

### 3.1 Geração por IA — o diferencial
- Gera cards a partir de: **tópico digitado, texto colado, imagem, PDF, PowerPoint (.pptx) e Word (.docx)**.
- **As figuras do material viram imagem dos cards** — o extrator recorta ilustrações
  do arquivo com posição e legenda, e um ranking escolhe as melhores. É o diferencial
  mais forte e o que nenhum concorrente óbvio entrega.
- O usuário decide se quer aproveitar as figuras (material só-texto pula essa etapa).
- Também extrai tabelas (viram markdown) e notas do apresentador nos slides.
- Modelos: **Claude Sonnet 5** (documentos) e **Claude Haiku 4.5** (tópico/texto e
  correção de respostas), com fallback para Gemini Flash.
- Limites técnicos por arquivo: **25 MB**, **80 páginas/slides**, até 60 figuras
  aprovadas. Excedente não quebra: processa o que cabe e avisa.

### 3.2 Repetição espaçada
- Algoritmo **SM-2** (a mesma família do Anki): intervalo, ease factor, repetições
  e data da próxima revisão por card.
- Avaliação **binária** na tela — *Errei* / *Entendi*, também por **gesto de swipe**.
  Simplicidade deliberada frente aos quatro botões do Anki.
- Card errado **volta na mesma sessão**, além de ser reagendado.
- Cards "dominados" (mastered) saem do rodízio.

### 3.3 Quatro modos de prática
| Modo | O que é |
| --- | --- |
| **Flashcards** | Vire o card e avalie sua resposta |
| **Quiz** | Perguntas de múltipla escolha (alternativas autorais ou geradas) |
| **Escrever** | Você digita a resposta e a IA corrige por **sentido**, não por letra |
| **Misto** | Flashcards + quiz intercalados — "alternado 1 a 1" ou "aleatório 50/50" |

Extras da sessão: **cronômetro regressivo opcional** (5–60 min, alerta em âmbar a 1
min e vermelho a 10 s) e tela de resultado com acertos, tempo e taxa de acerto.

### 3.4 Comunidade (aba própria)
- Publique um deck e escolha a **licença**:
  - **Protegido** — outros podem baixar e estudar, mas não exportar nem republicar.
  - **Compartilhável** — podem baixar e exportar em arquivo, mas não republicar como próprio.
  - **Aberto** — podem exportar e republicar adaptações, sempre creditando você.
- Descubra e baixe decks de outras pessoas, avalie com **estrelas**, veja downloads.
- Decks adaptados mostram "Adaptado de …" (proveniência preservada).
- Publicação por **snapshot**: quem baixou fica com a própria cópia.
- Moderação com fila de denúncias e remoção efetiva do ar (aplicada no banco, não só na tela).

### 3.5 Progresso e hábito
- **Meta diária** de cards (10 a 150), com anel de progresso.
- **Sequência (streak)** de dias estudados, com alerta opcional.
- **Heatmap de atividade** ao estilo GitHub.
- **XP e níveis**: 1 XP por card revisado; cada nível custa progressivamente mais.
- **7 patentes** aspiracionais: Iniciante → Aprendiz → Dedicado → Estudante →
  Erudito → **Mestre** → **Lenda** (as duas últimas em dourado).
- **73 conquistas** com ícone único, sempre calculadas sobre o histórico completo —
  nenhuma é perdível e conquistas novas desbloqueiam retroativamente.
  Exemplos de nome (bons para uma seção divertida da landing):
  🎉 Primeiro deck · 🪜 Primeiro degrau · 🧘 Uma hora na cadeira ·
  🥪 Sanduíche de estudo · ⚽ Hat-trick · 🐢 Devagar e sempre · 🐦‍🔥 Fênix ·
  🐍 Fera domada · 🧭 Semana completa · 🪐 Ano completo · 🐳 Deck baleia.

### 3.6 Lembretes inteligentes
Notificação local no horário escolhido (padrão 20:00), com a **contagem real de
cards devidos** dos próximos dias — não um "vem estudar" genérico. Alerta de
sequência em risco é opção separada.

### 3.7 Organização e personalização
- Decks com **emoji, cor, capa, tags**; cards com imagens.
- Busca, filtros e swipe nas listas de deck.
- Tema **claro / escuro / sistema**, tamanho de fonte, **redução de movimento**,
  sons de feedback e gestos de swipe — todos ajustáveis.
- **Exportar e importar** decks em arquivo, com resolução de conflito
  (copiar / pular / substituir).
- **Onboarding** de 4 telas com cards de virada 3D, uma única vez por conta.

### 3.8 Conta e sincronização
Decks, sessões, conquistas, configurações e onboarding ficam na conta e
acompanham o usuário entre aparelhos. Login por e-mail/senha com recuperação.

---

## 4. Prova / números para a landing

- **73** conquistas
- **7** patentes de nível
- **4** modos de prática (5 variações contando os dois mistos)
- **6** formatos de entrada para a IA (tópico, texto, imagem, PDF, PPTX, DOCX)
- **5** abas: Início · Decks · Comunidade · Progresso · Perfil
- Algoritmo **SM-2**, o mesmo do Anki
- Arquivos de até **25 MB / 80 páginas**

> ⚠️ Não há números de usuários, downloads ou depoimentos — o app ainda não
> lançou. **Não invente prova social.** Se precisar de credibilidade, use o
> algoritmo (SM-2/Anki), a privacidade (RLS) e o diferencial das figuras.

---

## 5. Planos (freemium)

O modelo existe no banco: tabela `plans` com `limits` em JSON, `user_subscriptions`
apontando o plano do usuário e `overrides` por conta. Planos hoje: **`free`** e
**`pro`**. O limite que já é aplicado de fato é `ai_generations_per_month`
(checado no servidor, nunca no app).

- Intenção registrada para o `free`: **300 gerações por IA/mês** por pessoa.
- Preço do `pro`: **ainda não definido** — a landing precisa de uma decisão sua
  antes de publicar tabela de preços. Enquanto isso, "grátis para começar" é
  seguro.

---

## 6. Privacidade e segurança (vira seção de confiança)

- **Row Level Security** em todas as tabelas: cada usuário só acessa os próprios dados.
- A **chave da IA nunca vai no app** — fica como secret das Edge Functions do
  Supabase. Nenhum segredo viaja no bundle.
- Imagens no Storage com nome derivado do **hash do conteúdo** (sem duplicatas);
  escrita restrita à pasta do próprio usuário.
- **Exclusão de conta dentro do app**, com apagamento de ponta a ponta
  (exigência 5.1.1(v) da Apple, já implementada).
- Material enviado é processado por **IA de terceiros** (Anthropic/Google) —
  isso **precisa** estar escrito na política de privacidade.

---

## 7. O que a landing PRECISA ter (bloqueia o lançamento)

Isto não é opcional: App Store Connect e Play Console pedem as URLs no formulário,
e sem elas o app não pode nem ser submetido.

1. **Página de Política de Privacidade** em URL pública e estável — declarando o
   envio de material do usuário para IA de terceiro.
2. **Página de Termos de Uso**.
3. **Contato de suporte** visível (`blinkflashcards@gmail.com`).
4. **Definir o domínio o quanto antes** — o bundle ID definitivo do app deriva
   dele (reverse-DNS) e é permanente depois da primeira publicação nas lojas.
5. Espaço para os botões **App Store** e **Google Play** (ainda sem link — use
   "em breve" ou captura de e-mail para lista de espera).

Fora do escopo v1: site de compartilhamento de deck por link (a aba Comunidade
já cobre isso dentro do app).

---

## 8. Direção visual (herdar do app)

O app é **monocromático de propósito**: o chrome não tem cor de marca — a cor vem
das capas dos decks. A landing deve seguir isso.

| Token | Escuro | Claro |
| --- | --- | --- |
| Fundo / superfície | `#000000` | `#e2e2df` |
| Texto principal | `#c9c9c9` | `#111111` |
| Destaque (primary) | `#c9c9c9` | `#111111` |
| Dourado (só topo de patente/conquista) | `#e3b341` | `#a16207` |
| Texto secundário (outline) | `#71717a` | `#78787d` |
| Erro | `#f4212e` | `#d92d20` |

- Tipografia: **Plus Jakarta Sans** (títulos, extrabold/bold) + **Inter** (texto).
  Ambas no Google Fonts.
- Cantos arredondados generosos, sombra suave nos cards.
- Efeito **"liquid glass"** reservado a modais e overlays — borda fina clara,
  brilho no topo e um reflexo especular diagonal que varre a superfície.
- Suporta tema claro e escuro; a landing idealmente também.

---

## 9. Copy pronta (do onboarding — já usada no app)

> **Aprenda qualquer assunto**
> Digite um tópico e a IA monta o deck em segundos — ou crie os cards você mesmo e anexe imagens.

> **Estude no ritmo certo**
> Diga só se acertou ou errou. Os que você errar voltam na mesma sessão, e a repetição espaçada agenda cada card para a hora exata de revisar.

> **Pratique de outros jeitos**
> Além dos flashcards, teste-se com o Quiz de alternativas ou digite a resposta no modo Escrever.

> **Crie o hábito**
> Defina sua meta diária, mantenha a sequência viva e desbloqueie conquistas enquanto acompanha seu progresso.

---

## 10. Estrutura sugerida da página

1. **Hero** — nome, uma frase, mockup do celular, botões das lojas ("em breve") ou lista de espera.
2. **O problema** — "seu PDF de 60 páginas não estuda sozinho".
3. **Do material ao deck** — 3 passos: envie o arquivo → a IA monta os cards com as figuras → estude.
4. **Repetição espaçada explicada em 3 linhas** — com o argumento do "só acertou/errou".
5. **Os 4 modos de prática** — grade com ícones.
6. **Hábito e progresso** — heatmap, streak, níveis, as 73 conquistas.
7. **Comunidade** — publicar, licenças, baixar decks de outros.
8. **Privacidade** — RLS, chave no servidor, exclusão de conta.
9. **Planos** — grátis para começar (definir preço do Pro antes).
10. **FAQ** — "é o Anki?", "meus arquivos ficam guardados?", "funciona offline?", "quanto custa?".
11. **Rodapé** — Política de Privacidade, Termos, suporte.

---

## 11. Stack (caso a landing tenha seção técnica)

Expo 54 · React Native 0.81 · React 19 · TypeScript · expo-router ·
NativeWind 4 (Tailwind) · Reanimated 4 · Supabase (Auth, Postgres com RLS,
Storage, Edge Functions) · extrator próprio em Python (PyMuPDF/Pillow) ·
Claude (Anthropic) com fallback Gemini.
