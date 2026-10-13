import type { AccordionItem } from "@/components/ui/interactive-accordion";

/** Perguntas frequentes. `content` é ReactNode para permitir links e ênfases. */
export const perguntasFrequentes: AccordionItem[] = [
  {
    id: "pagar",
    number: "01",
    title: "Preciso pagar para usar?",
    content: (
      <p>
        Não. Estudar é grátis: flashcards, quiz, repetição espaçada, aba Revisar e comunidade. Os
        recursos de IA (gerar decks, explicar erros e conversar sobre a questão) são do Blink
        Plus.
      </p>
    ),
  },
  {
    id: "formatos",
    number: "02",
    title: "Funciona com PDF e slides?",
    content: (
      <p>
        Sim. No Plus, você envia PDF, PowerPoint (PPTX), Word (DOCX) ou fotos e a IA monta os cards,
        aproveitando as figuras do próprio material. No grátis, você cria os seus cards à mão, com
        imagens.
      </p>
    ),
  },
  {
    id: "cancelar",
    number: "03",
    title: "Posso cancelar?",
    content: (
      <p>
        Sim, quando quiser. A assinatura é feita pela App Store ou pelo Google Play, e o
        cancelamento é na sua conta da loja.
      </p>
    ),
  },
  {
    id: "chat",
    number: "04",
    title: "O chat responde qualquer coisa?",
    content: (
      <p>
        Não. O chat fica no assunto da questão: você pede outro exemplo, pergunta por que as outras
        alternativas estão erradas ou tira dúvidas sobre ela. Não é um chatbot genérico.
      </p>
    ),
  },
];
