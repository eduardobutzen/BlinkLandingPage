import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Carrossel de aparelhos, no desenho do "Phone Mockups 1" (solaceui, 21st.dev):
 * o aparelho ativo na frente, o anterior e o próximo atrás nas laterais, giro
 * automático e os controles anterior / pausar / próximo sobre a base.
 *
 * Reescrito aqui porque o código original não estava disponível. As imagens
 * já trazem a moldura do iPhone (fundo transparente), então o componente não
 * desenha moldura — só posiciona, anima e controla.
 */

export interface ImageItem {
  src: string;
  alt: string;
}

interface PhoneCarouselProps {
  images: ImageItem[];
  /** Tempo de cada tela antes de girar, em ms. */
  intervalo?: number;
  className?: string;
}

type Posicao = "centro" | "esquerda" | "direita" | "fora";

/* As laterais escurecem por brilho, não por opacidade: transparente, o
   aparelho vira um fantasma cinza no tema claro. */
const POSES: Record<
  Posicao,
  { x: string; y: string; scale: number; opacity: number; filter: string; zIndex: number }
> = {
  centro: { x: "0%", y: "0%", scale: 1, opacity: 1, filter: "brightness(1)", zIndex: 3 },
  esquerda: { x: "-60%", y: "7%", scale: 0.88, opacity: 1, filter: "brightness(0.55)", zIndex: 2 },
  direita: { x: "60%", y: "7%", scale: 0.88, opacity: 1, filter: "brightness(0.55)", zIndex: 2 },
  fora: { x: "0%", y: "10%", scale: 0.76, opacity: 0, filter: "brightness(0.55)", zIndex: 1 },
};

function posicaoDe(indice: number, ativo: number, total: number): Posicao {
  const distancia = (indice - ativo + total) % total;
  if (distancia === 0) return "centro";
  if (distancia === 1) return "direita";
  if (distancia === total - 1) return "esquerda";
  return "fora";
}

const botao =
  "grid size-10 place-items-center rounded-full border border-border bg-card/80 text-foreground " +
  "shadow-sm backdrop-blur-md transition-transform hover:scale-105 active:scale-95";

export function PhoneCarousel({ images, intervalo = 3500, className }: PhoneCarouselProps) {
  const total = images.length;
  const reduzirMovimento = useReducedMotion();
  const [ativo, setAtivo] = useState(0);
  // Quem pede menos movimento começa com o giro parado; o play continua lá.
  const [pausado, setPausado] = useState(() => Boolean(reduzirMovimento));

  const ir = useCallback((passo: number) => setAtivo((i) => (i + passo + total) % total), [total]);

  // Um timeout por tela, e não um interval: navegar à mão reinicia a contagem.
  useEffect(() => {
    if (pausado || total < 2) return;
    const id = window.setTimeout(() => ir(1), intervalo);
    return () => window.clearTimeout(id);
  }, [ativo, pausado, intervalo, ir, total]);

  return (
    <section
      className={cn("relative", className)}
      aria-roledescription="carrossel"
      aria-label="Telas do aplicativo Blink"
    >
      {/* O palco corta a base dos aparelhos com um esmaecido; os controles
          ficam fora dele para não esmaecer junto. */}
      <div
        className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
        aria-live={pausado ? "polite" : "off"}
      >
        {images.map((imagem, i) => {
          const posicao = posicaoDe(i, ativo, total);
          return (
            <motion.div
              key={imagem.src}
              role="group"
              aria-roledescription="tela"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={posicao !== "centro"}
              className="absolute inset-x-0 top-0 mx-auto w-[240px] origin-top md:w-[300px]"
              initial={false}
              animate={POSES[posicao]}
              transition={
                reduzirMovimento ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 32 }
              }
            >
              <img
                src={imagem.src}
                alt={imagem.alt}
                width={700}
                height={1398}
                loading={posicao === "fora" ? "lazy" : "eager"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : undefined}
                className="h-auto w-full drop-shadow-[0_24px_48px_var(--shot-shadow)]"
              />
            </motion.div>
          );
        })}
      </div>

      {total > 1 && (
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-3">
          <button type="button" className={botao} onClick={() => ir(-1)} aria-label="Tela anterior">
            <ChevronLeft size={18} strokeWidth={2.25} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={botao}
            onClick={() => setPausado((p) => !p)}
            aria-label={pausado ? "Continuar o giro das telas" : "Pausar o giro das telas"}
          >
            {pausado ? (
              <Play size={16} strokeWidth={2.25} aria-hidden="true" />
            ) : (
              <Pause size={16} strokeWidth={2.25} aria-hidden="true" />
            )}
          </button>
          <button type="button" className={botao} onClick={() => ir(1)} aria-label="Próxima tela">
            <ChevronRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
