import type { ImageItem } from "@/components/ui/phone-carousel";

/**
 * Capturas reais do app (public/assets/mockups), com a moldura do iPhone já
 * na imagem. Todas têm 700×1398. Usadas no carrossel do herói e nos cards de
 * recursos — o texto alternativo mora aqui para não divergir entre os dois.
 */
export const TELAS = {
  inicio: {
    src: "/assets/mockups/inicio.webp",
    alt: "Tela inicial do Blink: anel da meta diária com 0 de 115 cards hoje, sequência de 1 dia e o botão Revisar 88 cards.",
  },
  decks: {
    src: "/assets/mockups/decks.webp",
    alt: "Tela Decks do Blink: decks de Redes de Computadores, Anatomia e Desenvolvimento Web, cada um com capa e número de cards.",
  },
  questao: {
    src: "/assets/mockups/questao.webp",
    alt: "Uma questão de Redes de Computadores com quatro alternativas, a certa marcada em verde, e o botão Pedir explicação.",
  },
  chat: {
    src: "/assets/mockups/chat.webp",
    alt: "Conversa com a IA sobre a questão: o estudante pede um exemplo e a IA explica com a analogia de um envelope enviado pelos correios.",
  },
  revisar: {
    src: "/assets/mockups/revisar.webp",
    alt: "Aba Revisar: 4 questões a corrigir em Redes de Computadores e o botão Iniciar correção.",
  },
  comunidade: {
    src: "/assets/mockups/comunidade.webp",
    alt: "Tela Comunidade: decks em alta e categorias como Medicina e Saúde, Idiomas e Tecnologia.",
  },
  progresso: {
    src: "/assets/mockups/progresso.webp",
    alt: "Tela de progresso: 2 dias de sequência, 389 cards estudados, 93% de acerto e a meta diária de 115 cards.",
  },
} satisfies Record<string, ImageItem>;

export type Tela = keyof typeof TELAS;
