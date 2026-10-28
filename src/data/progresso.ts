/**
 * Hábito e progresso. Conquistas e meta vêm das telas do app (Conquistas e
 * Progresso, out/2026); a escada de patentes vem do LANDING_BRIEF.md e bate
 * com a tela de Perfil (Estudante → Erudito); os lembretes, da Política de
 * Privacidade (§8).
 */
export const TOTAL_CONQUISTAS = 72;

export const CONQUISTAS: { nome: string; descricao: string }[] = [
  { nome: "Sessão perfeita", descricao: "5+ cards numa sessão sem nenhum “De novo”." },
  { nome: "Giro completo", descricao: "3+ decks estudados no mesmo dia." },
  { nome: "Hat-trick", descricao: "Três sessões perfeitas em sequência." },
  { nome: "Memória de elefante", descricao: "Retenção de 85%+ nos últimos 30 dias (100+ revisões)." },
];

/** As duas últimas aparecem em dourado no app. */
export const PATENTES = ["Iniciante", "Aprendiz", "Dedicado", "Estudante", "Erudito", "Mestre", "Lenda"];

export const META_MIN = 10;
export const META_MAX = 150;
