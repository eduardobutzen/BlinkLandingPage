import type { CSSProperties } from "react";

const SEMANAS = 22;
const DIAS = 7;

/** Gerador pseudoaleatório com semente: o desenho é o mesmo a cada visita. */
function nivelDe(i: number) {
  const x = Math.sin(i * 12.9898 + 4.1414) * 43758.5453;
  const r = x - Math.floor(x);
  // as semanas mais recentes (à direita) ficam mais cheias, como um hábito pegando
  const semana = Math.floor(i / DIAS);
  const ajuste = semana / SEMANAS;
  const v = r * 0.75 + ajuste * 0.45;
  return v < 0.3 ? 0 : v < 0.5 ? 1 : v < 0.7 ? 2 : v < 0.88 ? 3 : 4;
}

/**
 * Mapa de atividade no estilo do app: semanas em colunas, dias em linhas.
 * É ilustração (aria-hidden); acende coluna a coluna quando a seção aparece.
 */
export function MapaAtividade() {
  const celulas = Array.from({ length: SEMANAS * DIAS }, (_, i) => nivelDe(i));
  return (
    <div className="mapa" aria-hidden="true" style={{ "--semanas": SEMANAS } as CSSProperties}>
      {celulas.map((nivel, i) => (
        <span
          key={i}
          className="mapa__dia"
          data-nivel={nivel}
          style={{ "--c": Math.floor(i / DIAS) } as CSSProperties}
        />
      ))}
    </div>
  );
}
