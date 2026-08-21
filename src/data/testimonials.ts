import type { Testimonial } from "@/components/ui/testimonials-columns-1";

/**
 * ATENÇÃO — CONTEÚDO DE EXEMPLO.
 *
 * O app ainda não lançou e o LANDING_BRIEF.md §4 é explícito: não inventar prova
 * social. Antes de publicar, escolha uma das duas saídas:
 *   a) trocar por depoimentos reais, com autorização de quem escreveu, e remover
 *      o aviso `.placeholder-note` de sections/Testimonials.tsx; ou
 *   b) apagar a seção e o item "Depoimentos" do menu em components/Header.tsx.
 *
 * O campo `image` é opcional de propósito: sem ele o avatar usa as iniciais.
 * Não aponte para bancos de rostos (randomuser.me e afins) — são fotos de
 * pessoas reais que nunca escreveram estes textos.
 */
export const testimonials: Testimonial[] = [
  {
    text: "Joguei o PDF de 60 páginas da aula e voltaram 40 cards já com os gráficos do próprio material. Era exatamente o que eu passava o domingo fazendo à mão.",
    name: "Marina R.",
    role: "Medicina, 4º ano",
  },
  {
    text: "Larguei o Anki porque eu perdia mais tempo configurando do que revisando. Aqui é só errei ou entendi, e o resto ele resolve.",
    name: "Diego F.",
    role: "Concurseiro",
  },
  {
    text: "As figuras virarem card mudou meu estudo de anatomia. Reconhecer a imagem já é metade da prova.",
    name: "Camila S.",
    role: "Medicina, 2º ano",
  },
  {
    text: "Uso o modo Escrever para treinar resposta discursiva. A correção entende o sentido em vez de exigir a palavra exata.",
    name: "Rafael M.",
    role: "Direito, 5º período",
  },
  {
    text: "A sequência me pegou. Quarenta dias sem falhar, coisa que planilha nenhuma tinha conseguido antes.",
    name: "Letícia A.",
    role: "Enfermagem",
  },
  {
    text: "Subo o slide do professor antes da aula e chego na sala com os cards prontos. Virou parte da rotina.",
    name: "Bruno T.",
    role: "Engenharia Elétrica",
  },
  {
    text: "Baixei um deck da comunidade na véspera e ainda deu tempo de revisar tudo pelo menos uma vez.",
    name: "Aline P.",
    role: "Vestibulanda",
  },
  {
    text: "Quiz e flashcard alternados quebram aquele automático de decorar a posição da resposta na tela.",
    name: "Thiago N.",
    role: "Residência médica",
  },
  {
    text: "Meta de 30 cards por dia, cinco minutos na fila do bandejão. É o único app de estudo que eu abro sem culpa.",
    name: "Júlia C.",
    role: "Farmácia",
  },
];

export const primeiraColuna = testimonials.slice(0, 3);
export const segundaColuna = testimonials.slice(3, 6);
export const terceiraColuna = testimonials.slice(6, 9);
