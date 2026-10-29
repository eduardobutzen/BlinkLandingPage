import { useEffect, useRef, useState } from "react";

function menosMovimento() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Número que conta até `ate` quando entra na tela. O leitor de tela recebe o
 * valor final direto; a contagem é só visual.
 */
export function Contador({ ate, duracao = 1400, sufixo = "" }: { ate: number; duracao?: number; sufixo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [valor, setValor] = useState(() => (menosMovimento() ? ate : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || menosMovimento()) return;
    let quadro = 0;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();
        const inicio = performance.now();
        const passo = (agora: number) => {
          const t = Math.min(1, (agora - inicio) / duracao);
          // desacelera no fim, como quem chega ao número
          setValor(Math.round(ate * (1 - Math.pow(1 - t, 3))));
          if (t < 1) quadro = requestAnimationFrame(passo);
        };
        quadro = requestAnimationFrame(passo);
      },
      { threshold: 0.6 },
    );
    observador.observe(el);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [ate, duracao]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{valor}{sufixo}</span>
      <span className="sr-only">{ate}{sufixo}</span>
    </span>
  );
}
