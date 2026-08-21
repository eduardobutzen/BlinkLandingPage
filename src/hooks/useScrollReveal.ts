import { useEffect } from "react";

/**
 * Revela os elementos com a classe `.reveal` conforme entram na viewport.
 * Roda uma vez por rota; observa apenas o que ainda não foi revelado.
 */
export function useScrollReveal(dependencia?: unknown) {
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)");
    if (!alvos.length) return;

    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("is-in");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
    );

    alvos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, [dependencia]);
}
