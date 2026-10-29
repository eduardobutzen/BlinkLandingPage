import { useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowDown, Flame, X } from "lucide-react";
import { Device } from "@/components/Device";
import { StoreBadges } from "@/components/StoreBadges";
import { FORMATOS } from "@/data/tour";
import { TELAS } from "@/data/telas";

/** Atraso da animação de entrada, em passos de 90ms (ver `.entra` no CSS). */
const atraso = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * Hero: título, download e o celular com a tela inicial. Em volta dele, três
 * recortes da interface do app (sequência, figura do material e erro
 * explicado) flutuam devagar; com mouse, o conjunto inclina de leve seguindo o
 * ponteiro. Embaixo, os formatos que viram cards.
 */
export function Hero() {
  const palco = useRef<HTMLDivElement>(null);

  // Inclinação pelo ponteiro: só grava -1..1 em variáveis; o CSS decide quanto mexer.
  const aoMover = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !palco.current) return;
    const r = palco.current.getBoundingClientRect();
    palco.current.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
    palco.current.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
  };
  const aoSair = () => {
    palco.current?.style.setProperty("--px", "0");
    palco.current?.style.setProperty("--py", "0");
  };

  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <h1 id="hero-titulo" className="t-display tt">
              <span className="entra" style={atraso(0)}>Sua apostila vira flashcards.</span>{" "}
              <strong className="entra" style={atraso(1)}>A IA explica cada erro.</strong>
            </h1>
            <p className="lead entra" style={atraso(2)}>
              Envie PDF, slides ou fotos e receba cards prontos, com quiz. A repetição espaçada diz
              quando revisar.
            </p>
            <div className="hero__cta entra" style={atraso(3)}>
              <StoreBadges />
              <a className="text-link" href="#como-funciona">
                Como funciona
                <ArrowDown size={16} strokeWidth={2.25} aria-hidden="true" />
              </a>
            </div>
            <p className="hero__note entra" style={atraso(4)}>
              Grátis para estudar, no iPhone e no Android.
            </p>
          </div>

          <div className="hero__visual" ref={palco} onPointerMove={aoMover} onPointerLeave={aoSair}>
            <div className="hero__glow" aria-hidden="true" />
            <Device tela={TELAS.inicio} prioridade className="hero__device" />

            {/* Recortes da interface do app, só ilustração. */}
            <div className="balao balao--sequencia" aria-hidden="true">
              <Flame size={16} strokeWidth={2.4} />
              23 dias
            </div>
            <div className="balao balao--figura" aria-hidden="true">
              <img src="/assets/telas/figura-femur.webp" alt="" width={240} height={546} loading="lazy" />
              <span>
                <small>Figura do material</small>
                Que osso é este?
              </span>
            </div>
            <div className="balao balao--erro" aria-hidden="true">
              <span className="balao__tag"><X size={13} strokeWidth={3} />Errou 3 vezes</span>
              <span>A IA explica o porquê</span>
            </div>
          </div>
        </div>

        <div className="formatos entra" style={atraso(5)}>
          <p className="formatos__rotulo">Gera cards a partir de</p>
          <ul className="formatos__lista">
            {FORMATOS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
