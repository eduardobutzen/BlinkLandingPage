import type { AccordionItem } from "@/components/Accordion";

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
  {
    id: "material",
    number: "05",
    title: "O que acontece com o material que eu envio?",
    content: (
      <p>
        Ele só sai dos nossos servidores para a IA quando você usa um recurso de IA. Usamos a
        modalidade paga da API Gemini, do Google, em que o seu conteúdo não é usado para treinar os
        modelos. Os detalhes estão na <a href="/privacidade#ia">Política de Privacidade</a>.
      </p>
    ),
  },
  {
    id: "limites",
    number: "06",
    title: "Tem limite de tamanho de arquivo?",
    content: (
      <p>
        Sim: até 25 MB, 80 páginas ou slides e 60 figuras por arquivo. O que passar disso é
        processado até onde couber, e o app avisa.
      </p>
    ),
  },
  {
    id: "algoritmo",
    number: "07",
    title: "Como o app decide quando eu revejo um card?",
    content: (
      <p>
        Pelo algoritmo SM-2, da mesma família usada pelo Anki. Você diz se acertou ou errou, e ele
        agenda a próxima revisão de cada card.
      </p>
    ),
  },
  {
    id: "conta",
    number: "08",
    title: "Posso apagar minha conta?",
    content: (
      <p>
        Sim, dentro do próprio app. A exclusão remove decks, cards, sessões, progresso, conquistas e
        imagens. Cópias de decks que você publicou e outras pessoas já baixaram ficam com elas.
      </p>
    ),
  },
];
