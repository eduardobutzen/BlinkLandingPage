import type { TelaId } from "@/data/telas";

/**
 * O caminho do material à revisão, um passo por tela do app. `texto` vem do
 * site atual; `detalhe` é um fato dos Termos de Uso (§2 e §6) ou das telas.
 * `plus` marca o que depende da IA, para não prometer de graça o que é do Plus.
 */
export const TOUR: { titulo: string; texto: string; detalhe: string; tela: TelaId; plus?: boolean }[] = [
  {
    titulo: "Envie o material",
    texto: "Apostila em PDF, slides, Word, fotos ou só o assunto digitado.",
    detalhe: "Até 25 MB e 80 páginas ou slides por arquivo.",
    tela: "decks",
  },
  {
    titulo: "Estude com flashcards e quiz",
    texto: "Cada card vem com 4 alternativas, e o app agenda a hora certa de revisar.",
    detalhe: "As figuras da sua apostila viram as imagens dos seus cards.",
    tela: "questaoFigura",
  },
  {
    titulo: "Errou? A IA explica",
    texto: "Você vê o porquê da resposta certa e conversa com a IA até entender.",
    detalhe: "O app conta quantas vezes você errou cada questão.",
    tela: "explicacao",
    plus: true,
  },
  {
    titulo: "Converse sobre a questão",
    texto:
      "Se a explicação não bastou, converse com a IA sobre aquela questão: peça outro exemplo ou pergunte por que as outras alternativas estão erradas.",
    detalhe: "Não é um chatbot genérico: a conversa fica no assunto da questão.",
    tela: "chat",
    plus: true,
  },
  {
    titulo: "Refaça o que errou",
    texto:
      "As questões que você errou ou pulou ficam juntas para refazer, e o botão “Entendi” tira da lista o que você já aprendeu.",
    detalhe: "As mais erradas aparecem primeiro.",
    tela: "revisar",
  },
];

/** Formatos aceitos para gerar cards (Termos de Uso, §2). */
export const FORMATOS = ["PDF", "PowerPoint", "Word", "Imagem", "Texto colado", "Tópico digitado"] as const;
