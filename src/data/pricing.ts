/**
 * Faixas de uso do calculador de plano.
 *
 * O eixo é "gerações por IA por mês" porque é o único limite que o Blink
 * realmente aplica hoje (verificado no servidor, nunca no aparelho).
 *
 * ATENÇÃO — o preço do Pro ainda não foi definido (LANDING_BRIEF.md §5).
 * `precoMensal: null` faz o card exibir "Em breve" em vez de um valor.
 * Troque `null` pelo número assim que o preço existir; o card se ajusta sozinho.
 */

export const LIMITE_FREE = 300;

/** Posições do slider, em gerações por mês. */
export const FAIXAS_DE_USO = [
  50, 100, 150, 200, 250, 300, 400, 500, 750, 1000, 1500, 2000, 3000,
];

export interface Plano {
  nome: string;
  /** `null` = ainda sem preço público. */
  precoMensal: number | null;
  descricao: string;
  itens: string[];
  ctaRotulo: string;
  ctaHref: string;
}

export const PLANO_FREE: Plano = {
  nome: "Free",
  precoMensal: 0,
  descricao:
    "Até 300 gerações por IA por mês — o bastante para transformar o material de um semestre inteiro em decks. Criar cards por conta própria é ilimitado.",
  itens: [
    "300 gerações por IA a cada mês",
    "Decks e cards ilimitados criados por você",
    "Os 4 modos de prática e a repetição espaçada",
    "Comunidade, conquistas e sincronização entre aparelhos",
  ],
  ctaRotulo: "Baixar grátis",
  ctaHref: "#baixar",
};

export const PLANO_PRO: Plano = {
  nome: "Pro",
  precoMensal: null,
  descricao:
    "Acima de 300 gerações por mês entra o Pro, pensado para quem processa material novo toda semana. Baixe o app e comece pelo Free — o Pro aparece dentro dele quando você precisar.",
  itens: [
    "Tudo do Free, com folga de sobra nas gerações por IA",
    "Pensado para semestre inteiro de material em vez de uma aula",
    "Você começa no Free e só muda de plano se o limite apertar",
  ],
  ctaRotulo: "Baixar o app",
  ctaHref: "#baixar",
};

export function planoParaUso(geracoesPorMes: number): Plano {
  return geracoesPorMes <= LIMITE_FREE ? PLANO_FREE : PLANO_PRO;
}
