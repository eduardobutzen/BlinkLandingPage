import { useEffect } from "react";

/**
 * Holofote dos cards: grava a posição do mouse em --mx/--my no `.spot` sob o
 * ponteiro, e o CSS desenha um brilho ali. Só com mouse; toque não tem hover.
 */
export function useHolofote() {
  useEffect(() => {
    const aoMover = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const alvo = (e.target as Element | null)?.closest<HTMLElement>(".spot");
      if (!alvo) return;
      const r = alvo.getBoundingClientRect();
      alvo.style.setProperty("--mx", `${e.clientX - r.left}px`);
      alvo.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", aoMover, { passive: true });
    return () => document.removeEventListener("pointermove", aoMover);
  }, []);
}
