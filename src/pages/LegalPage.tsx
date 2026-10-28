import { useEffect, useRef, useState, type ReactNode } from "react";
import { CalendarDays, ChevronDown, Clock, ListOrdered, type LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Secao {
  id: string;
  titulo: string;
}

/** Leitura média em português, em palavras por minuto. */
const PALAVRAS_POR_MINUTO = 200;

function ehDesktop() {
  return typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
}

/**
 * Layout dos documentos legais: cabeçalho centralizado com data, tempo de
 * leitura e número de seções; índice lateral no desktop (recolhível no
 * celular) e o corpo numerado. Índice, tempo e contagem saem do próprio texto,
 * então não há número para manter à mão.
 */
export function LegalPage({
  titulo,
  escopo,
  atualizacao,
  Icone,
  children,
}: {
  titulo: string;
  escopo: string;
  /** Data por extenso, como aparece no documento. */
  atualizacao: string;
  Icone: LucideIcon;
  children: ReactNode;
}) {
  const corpoRef = useRef<HTMLElement>(null);
  const [secoes, setSecoes] = useState<Secao[]>([]);
  const [minutos, setMinutos] = useState<number | null>(null);
  const [atual, setAtual] = useState<string | null>(null);
  // Aberto no desktop (índice lateral), recolhido no celular.
  const [indiceAberto] = useState(ehDesktop);

  useEffect(() => {
    document.title = `${titulo} | Blink`;
    const corpo = corpoRef.current;
    if (!corpo) return;

    const titulos = [...corpo.querySelectorAll<HTMLHeadingElement>("h2[id]")];
    setSecoes(
      titulos.map((h) => ({ id: h.id, titulo: (h.textContent ?? "").replace(/^\s*\d+\.?\s*/, "") })),
    );
    const palavras = (corpo.textContent ?? "").trim().split(/\s+/).length;
    setMinutos(Math.max(1, Math.round(palavras / PALAVRAS_POR_MINUTO)));

    // Marca no índice a seção que está no topo da leitura.
    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas.find((e) => e.isIntersecting);
        if (visivel) setAtual(visivel.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    titulos.forEach((h) => observador.observe(h));
    return () => observador.disconnect();
  }, [titulo]);

  return (
    <>
      <Header enxuto />
      <main id="conteudo" tabIndex={-1} className="section page-top">
        <div className="wrap">
          <header className="legal-head">
            <span className="legal-head__icon" aria-hidden="true">
              <Icone size={22} strokeWidth={2} />
            </span>
            <p className="eyebrow">Legal</p>
            <h1>{titulo}</h1>
            <p>{escopo}</p>
            <ul className="chips">
              <li className="chip">
                <CalendarDays size={15} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">Última atualização: </span>
                {atualizacao}
              </li>
              {minutos !== null && (
                <li className="chip">
                  <Clock size={15} strokeWidth={2} aria-hidden="true" />
                  {minutos} min de leitura
                </li>
              )}
              {secoes.length > 0 && (
                <li className="chip">
                  <ListOrdered size={15} strokeWidth={2} aria-hidden="true" />
                  {secoes.length} seções
                </li>
              )}
            </ul>
          </header>

          <div className="legal">
            <details className="toc" open={indiceAberto}>
              <summary>
                Nesta página
                <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
              </summary>
              <nav aria-label="Nesta página">
                <ol>
                  {secoes.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} aria-current={atual === s.id ? "true" : undefined}>
                        {s.titulo}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details>

            <article className="doc" ref={corpoRef}>
              {children}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
