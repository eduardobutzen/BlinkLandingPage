import { EMAIL_SUPORTE } from "@/data/site";

/**
 * Planos e preços do Blink. Os valores são os reais — mudar aqui muda a
 * página inteira, inclusive as contas do plano anual.
 */

export const PRECO_PLUS_MENSAL = 29.9;
export const PRECO_PLUS_ANUAL = 199.9;

/** O anual dividido em 12 e a economia sobre 12 meses do mensal. */
export const PLUS_ANUAL_POR_MES = PRECO_PLUS_ANUAL / 12;
export const DOZE_MESES_DO_MENSAL = PRECO_PLUS_MENSAL * 12;
export const ECONOMIA_ANUAL_PCT = Math.round(
  (1 - PRECO_PLUS_ANUAL / DOZE_MESES_DO_MENSAL) * 100,
);

const formatador = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export const reais = (valor: number) => formatador.format(valor);

/**
 * A compra do Plus ainda não abriu. Enquanto `false`, o botão do Plus leva à
 * lista de espera (um e-mail para o suporte). Quando a compra abrir, troque
 * para `true`: o botão vira "Assinar o Plus" e aponta para o download, já que
 * a assinatura é feita dentro do app.
 */
export const PLUS_A_VENDA = false;

export const CTA_PLUS = PLUS_A_VENDA
  ? { rotulo: "Assinar o Plus", href: "#baixar" }
  : {
      rotulo: "Entrar na lista de espera",
      href: `mailto:${EMAIL_SUPORTE}?subject=${encodeURIComponent(
        "Lista de espera do Blink Plus",
      )}&body=${encodeURIComponent("Quero receber um aviso quando o Blink Plus abrir.")}`,
    };

export const ITENS_GRATIS = [
  "Estudo completo com repetição espaçada, flashcards e quiz",
  "Criar e editar os próprios cards, com imagens",
  "Aba Revisar para refazer as questões",
  "Explorar e publicar na comunidade",
];

/** O que o grátis não tem — mostrado como item à parte, sem o check. */
export const RESSALVA_GRATIS = "Sem recursos de IA, com anúncios do próprio Blink entre os cards";

export const ITENS_PLUS = [
  "Decks por IA a partir de arquivos: PDF, PPTX, DOCX e fotos",
  "Decks por IA a partir de um assunto digitado",
  "Explicação da IA em cada questão errada",
  "Chat com a IA sobre a questão",
  "Baixar decks da comunidade",
  "Sem anúncios",
];

/** Limites do Plus, aplicados no servidor. Nunca chamar o Plus de "ilimitado". */
export const LIMITES_PLUS = [
  { rotulo: "Decks a partir de arquivo", dia: 3, mes: 20 },
  { rotulo: "Decks a partir de um assunto", dia: 10, mes: 80 },
  { rotulo: "Explicações da IA", dia: 20, mes: 200 },
  { rotulo: "Conversas com a IA", dia: 10, mes: 60 },
];
