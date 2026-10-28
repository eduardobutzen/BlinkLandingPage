/**
 * Capturas reais do app (public/assets/telas), sem moldura: o aparelho é
 * desenhado em CSS pelo componente Device. Todas têm 720×1565 (iPhone,
 * 1206×2622 na origem). O texto alternativo mora aqui para não divergir entre
 * as seções que usam a mesma tela.
 */
export interface Tela {
  src: string;
  alt: string;
}

export const TELAS = {
  inicio: {
    src: "/assets/telas/inicio.webp",
    alt: "Tela inicial do Blink: anel da meta com 18 de 30 cards hoje, sequência de 23 dias, o botão Revisar 55 cards e os decks para continuar estudando.",
  },
  decks: {
    src: "/assets/telas/decks.webp",
    alt: "Tela Decks: Direito Constitucional, Ossos do corpo humano, História do Brasil, Farmacologia, Química, Biologia e Redação, cada um com capa e número de cards.",
  },
  questaoFigura: {
    src: "/assets/telas/questao-figura.webp",
    alt: "Questão do deck Ossos do corpo humano com a figura de um fêmur tirada do material, a pergunta Que osso é este? e as alternativas Tíbia, Fêmur e Fíbula.",
  },
  explicacao: {
    src: "/assets/telas/explicacao.webp",
    alt: "Questão de Farmacologia marcada como errada 3 vezes, com a alternativa certa, TP com INR, e o quadro Por que é essa, com a explicação da IA e o botão Entendi.",
  },
  chat: {
    src: "/assets/telas/chat.webp",
    alt: "Conversa com a IA sobre a questão: o estudante pergunta por que não é o TTPa e pede um jeito de não esquecer, e a IA responde com o macete PeT.",
  },
  revisar: {
    src: "/assets/telas/revisar.webp",
    alt: "Aba Revisar: 30 questões a corrigir espalhadas por 8 decks, o botão Iniciar correção, filtros e as questões pendentes com as mais erradas primeiro.",
  },
  comunidade: {
    src: "/assets/telas/comunidade.webp",
    alt: "Tela Comunidade com busca e oito decks publicados pelo Blink, como Inglês: falsos cognatos, Direito Constitucional: artigo 5º e Ossos do corpo humano.",
  },
  deckCompartilhado: {
    src: "/assets/telas/deck-compartilhado.webp",
    alt: "Página do deck Farmacologia: classes de medicamentos na comunidade, com capa, descrição, licença Compartilhável, 31 questões, tags e a lista de questões.",
  },
  perfil: {
    src: "/assets/telas/perfil.webp",
    alt: "Perfil com o selo Blink Plus, a patente Estudante no nível 9 com 2.157 XP e os limites de uso da IA no dia e no mês.",
  },
  progresso: {
    src: "/assets/telas/progresso.webp",
    alt: "Tela de progresso: 23 dias de sequência, 47 cards dominados, 2.157 cards estudados, 83% de acerto, o mapa de atividade e a meta diária de 100 cards.",
  },
  conquistas: {
    src: "/assets/telas/conquistas.webp",
    alt: "Tela Conquistas: 17 de 72 desbloqueadas, Capítulo próprio a 96% e a lista com Primeiro deck, Primeiro degrau, Sessão perfeita, Giro completo, Hat-trick e Memória de elefante.",
  },
} satisfies Record<string, Tela>;

export type TelaId = keyof typeof TELAS;

/** Dimensões das capturas exportadas, para reservar o espaço antes de carregar. */
export const TELA_W = 720;
export const TELA_H = 1565;
