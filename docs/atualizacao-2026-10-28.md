# Atualização do site com as telas novas do app (28/10/2026)

Base: o pacote `blink-telasu.zip`, com 11 telas do app, 8 capas de deck e o ícone novo.
Os fatos foram cruzados com os Termos de Uso e a Política de Privacidade (ambos de 12/10) e
com o `LANDING_BRIEF.md`. Preços continuam fora do site (decisão D1).

## O que mudou

| Área | Antes | Agora |
| --- | --- | --- |
| Marca | Ícone do cérebro | **O pensador** no logo, favicon, ícone da Apple, painel de download e imagem de compartilhamento (`og-blink.png`) |
| Telas | 7 mockups antigos com moldura embutida (um deles com o seu nome) | 11 capturas novas em `public/assets/telas/`, dentro de um **iPhone desenhado em CSS** (`Device.tsx`) |
| Hero | Carrossel de telas | Celular com a tela inicial e **três balões flutuantes** tirados da interface (sequência, figura do material, "Errou 3 vezes"). O conjunto inclina de leve com o mouse. Embaixo, os **6 formatos** que viram cards |
| Como funciona | 3 passos com 3 telas | **Tour guiado em 5 passos**: no desktop, o celular fica preso e troca de tela conforme o passo lido, com uma régua de progresso; no celular, cada passo traz a própria tela |
| Recursos (botões) | 6 botões e um painel | Conteúdo redistribuído entre o tour, a Comunidade e o Progresso |
| Comunidade | — | **Seção nova**: faixa animada com as 8 capas dos decks do Blink (com pausa), duas telas e as 3 licenças de deck |
| Progresso | — | **Seção nova** em bento: mapa de atividade que acende, contador de conquistas (72), escada de 7 patentes e lembretes |
| FAQ | 4 perguntas | **8 perguntas** (5 visíveis e "ver mais 3") |
| Header | 3 âncoras | 4 âncoras (Como funciona, Comunidade, Progresso, Perguntas) e **barra de progresso de leitura** |
| Animações | Reveal ao rolar | Mais: entrada em cascata do título, balões flutuando, troca de tela no tour, faixa de capas, contadores, mapa acendendo, holofote que segue o mouse nos cards, ícone "respirando". Tudo desligado com movimento reduzido; a faixa tem botão de pausa |

## Textos novos que escrevi (para revisão)

Os fatos vêm das fontes indicadas; a redação é minha.

| Onde | Texto | Fonte do fato |
| --- | --- | --- |
| Formatos | "Gera cards a partir de" PDF · PowerPoint · Word · Imagem · Texto colado · Tópico digitado | Termos §2 |
| Tour, título | "Do material à revisão, passo a passo." | — |
| Tour, passo 1 | "Até 25 MB e 80 páginas ou slides por arquivo." | Termos §6 |
| Tour, passo 2 | "As figuras da sua apostila viram as imagens dos seus cards." | Frase de apoio do brief; tela da questão com figura |
| Tour, passo 3 | "O app conta quantas vezes você errou cada questão." | Tela "Errou 3 vezes" |
| Tour, passo 4 | Título "Converse sobre a questão" e "Não é um chatbot genérico: a conversa fica no assunto da questão." | FAQ 04 |
| Tour, passo 5 | Título "Refaça o que errou" e "As mais erradas aparecem primeiro." | Tela Revisar ("mais erradas primeiro") |
| Comunidade | "Explore decks prontos da comunidade." · "No Plus, você baixa e estuda qualquer deck publicado." | Termos §8 (download de decks é do Plus) |
| Comunidade | As 3 licenças resumidas e "Decks adaptados mostram de onde vieram, e quem baixa fica com uma cópia própria." | Termos §7 |
| Progresso | "Todo dia, sem planilha e sem culpa." | Frase de apoio do brief |
| Progresso | "Escolha uma meta de 10 a 150 cards por dia…" | Tela de Progresso (régua 10–150) |
| Progresso | "72 conquistas para desbloquear" e 4 exemplos com as descrições do app | Tela de Conquistas |
| Progresso | "7 patentes para subir": Iniciante → Aprendiz → Dedicado → Estudante → Erudito → Mestre → Lenda | ⚠️ Brief de 20/08; a tela de Perfil só confirma Estudante → Erudito |
| Progresso | Lembretes "na hora que você escolher (o padrão é 20h)" e alerta de sequência em risco | Privacidade §8 |
| FAQ 05 | Material vai para a IA só ao usar um recurso de IA; API Gemini paga, sem treino | Privacidade §3 |
| FAQ 06 | 25 MB, 80 páginas ou slides, 60 figuras | Termos §6 |
| FAQ 07 | SM-2, "da mesma família usada pelo Anki" | Termos §2 / Privacidade §2.3 (SM-2); a menção ao Anki vem do brief |
| FAQ 08 | Exclusão de conta dentro do app e o que ela não alcança | Privacidade §9 |
| Balões do hero | "23 dias", "Figura do material / Que osso é este?", "Errou 3 vezes / A IA explica o porquê" | Recortes da interface (dados de demonstração da usuária "Júlia"); marcados como decorativos para leitores de tela |
| Textos alternativos | As 11 telas descritas a partir das capturas | Telas |

## Para confirmar

1. **Patentes:** a escada de 7 nomes ainda é essa?
2. **Decks "por Blink":** os 8 decks da faixa vão estar publicados na Comunidade no lançamento?
3. **72 conquistas:** a tela diz 72 e o brief dizia 73. Usei 72.
4. **Tela de Perfil** (limites do Plus): ficou de fora, junto com os preços (D1).
5. **Menção ao Anki** no FAQ 07: tirar, se preferir não citar outro app.

## Verificação

- `tsc` e `npm run build` sem erros; nenhum erro no console.
- 36 imagens, nenhuma quebrada e todas com `alt`; todas as âncoras existem; sem rolagem
  horizontal a 1440 px nem a 375 px.
- 81 textos esperados presentes na página (3 deles atrás do "ver mais", conferidos depois do
  clique).
- O tour troca a tela certa por passo (conferido nos passos 2, 3 e 4); a faixa anda e pausa;
  o "ver mais" revela 3 perguntas e leva o foco à primeira; os contadores chegam a 72 e 7.
- Contraste AA para os tons novos: dourado `#8a5306` (claro) e `#e3b341` (escuro); texto de
  erro `#b42318` / `#ff5a63`.
- **Não deu para refazer os screenshots de página inteira:** o Google Chrome não está mais
  instalado nesta máquina. A verificação visual foi feita no navegador do app, seção por
  seção.
