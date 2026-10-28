import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Device } from "@/components/Device";
import { SectionHead } from "@/components/SectionHead";
import { TOUR } from "@/data/tour";
import { TELAS } from "@/data/telas";

const telasDoTour = TOUR.map((p) => TELAS[p.tela]);

/**
 * "Como funciona" em rolagem guiada. No desktop, o celular fica preso ao lado
 * e troca de tela conforme o passo que está no meio da janela; a régua à
 * esquerda mostra o avanço. No celular, cada passo traz a própria tela.
 */
export function Tour() {
  const [ativo, setAtivo] = useState(0);
  const passos = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) setAtivo(Number((e.target as HTMLElement).dataset.indice));
        }
      },
      // Só a faixa do meio da janela conta: o passo "ativo" é o que está sendo lido.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    passos.current.forEach((el) => el && observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return (
    <section className="section" id="como-funciona" aria-labelledby="como-funciona-titulo">
      <div className="wrap">
        <SectionHead
          numero={1}
          rotulo="Como funciona"
          tituloId="como-funciona-titulo"
          titulo={
            <>
              Do material à revisão, <strong>passo a passo</strong>.
            </>
          }
        />

        <div className="tour" style={{ "--progresso": (ativo + 1) / TOUR.length } as CSSProperties}>
          <ol className="tour__passos">
            {TOUR.map((passo, i) => (
              <li
                key={passo.titulo}
                ref={(el) => { passos.current[i] = el; }}
                data-indice={i}
                data-ativo={i === ativo}
                className="tour__passo"
              >
                <span className="tour__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="tour__texto">
                  <h3 className="t-panel">
                    {passo.titulo}
                    {passo.plus && <span className="tag-plus">Plus</span>}
                  </h3>
                  <p className="lead">{passo.texto}</p>
                  <p className="tour__detalhe">{passo.detalhe}</p>
                </div>
                {/* No celular a tela vem junto do texto. */}
                <Device tela={TELAS[passo.tela]} className="tour__inline" />
              </li>
            ))}
          </ol>

          {/* No desktop, um celular só, preso ao lado; o texto à esquerda já descreve cada tela. */}
          <div className="tour__palco" aria-hidden="true">
            <div className="tour__fixo">
              <Device telas={telasDoTour} ativa={ativo} decorativo className="tour__device" />
              <div className="tour__regua"><span /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
