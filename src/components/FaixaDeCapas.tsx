import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { DECKS_DA_COMUNIDADE } from "@/data/capas";

function menosMovimento() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Faixa de capas que corre sozinha, como uma estante. A lista aparece duas
 * vezes para o laço não ter emenda; a segunda cópia é invisível para leitores
 * de tela. Para no hover, no foco e no botão de pausa.
 */
export function FaixaDeCapas() {
  const [pausada, setPausada] = useState(menosMovimento);

  const decks = (copia: boolean) =>
    DECKS_DA_COMUNIDADE.map((deck) => (
      <li key={`${copia}-${deck.capa}`} className="faixa__item" aria-hidden={copia || undefined}>
        <img src={deck.capa} alt="" width={480} height={480} loading="lazy" decoding="async" />
        <span className="faixa__titulo">{deck.titulo}</span>
        <span className="faixa__cards">{deck.cards} cards</span>
      </li>
    ));

  return (
    <div className="faixa" data-pausada={pausada}>
      {/* A janela fica parada e esmaece as pontas; a trilha corre dentro dela. */}
      <div className="faixa__janela">
        <div className="faixa__trilho">
          <ul className="faixa__lista" aria-label="Decks do Blink na Comunidade">{decks(false)}</ul>
          <ul className="faixa__lista" aria-hidden="true">{decks(true)}</ul>
        </div>
      </div>
      <button
        type="button"
        className="faixa__pausa icon-btn"
        aria-pressed={pausada}
        aria-label="Pausar a faixa de decks"
        onClick={() => setPausada((p) => !p)}
      >
        {pausada ? <Play size={15} strokeWidth={2.25} aria-hidden="true" /> : <Pause size={15} strokeWidth={2.25} aria-hidden="true" />}
      </button>
    </div>
  );
}
