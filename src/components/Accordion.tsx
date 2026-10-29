import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

export interface AccordionItem {
  id: string;
  number: string;
  title: string;
  content: ReactNode;
}

/**
 * Perguntas que abrem uma de cada vez. A altura anima pelo grid (0fr → 1fr),
 * sem medir nada em JS; a resposta fechada fica `inert`, fora do foco e da
 * árvore de acessibilidade. Com `visiveis`, as demais ficam atrás de um
 * "ver mais" que as revela na própria lista.
 */
export function Accordion({
  items,
  defaultOpenId = items[0]?.id ?? null,
  visiveis,
}: {
  items: AccordionItem[];
  /** Item aberto na primeira renderização. `null` abre nenhum. */
  defaultOpenId?: string | null;
  visiveis?: number;
}) {
  const [aberto, setAberto] = useState<string | null>(defaultOpenId);
  const [todas, setTodas] = useState(!visiveis || visiveis >= items.length);
  const uid = useId();
  const mostradas = todas ? items : items.slice(0, visiveis);
  const escondidas = items.length - mostradas.length;

  // O botão "ver mais" some ao ser usado: o foco vai para a primeira pergunta revelada.
  const revelou = useRef(false);
  useEffect(() => {
    if (!revelou.current || visiveis === undefined) return;
    revelou.current = false;
    document.getElementById(`${uid}-${items[visiveis]?.id}-botao`)?.focus();
  }, [todas, uid, items, visiveis]);

  return (
    <div className="acc">
      {mostradas.map((item, i) => {
        const estaAberto = aberto === item.id;
        const botaoId = `${uid}-${item.id}-botao`;
        const painelId = `${uid}-${item.id}-painel`;
        return (
          <div className="acc__item" key={item.id} data-nova={visiveis !== undefined && i >= visiveis}>
            <h3>
              <button
                type="button"
                id={botaoId}
                className="acc__btn"
                aria-expanded={estaAberto}
                aria-controls={painelId}
                onClick={() => setAberto(estaAberto ? null : item.id)}
              >
                <span className="acc__n" aria-hidden="true">{item.number}</span>
                <span className="acc__q">{item.title}</span>
                <span className="acc__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={painelId}
              role="region"
              aria-labelledby={botaoId}
              className="acc__panel"
              data-aberto={estaAberto}
              // React 18 não conhece `inert`; o ref inline roda a cada render.
              ref={(el) => el?.toggleAttribute("inert", !estaAberto)}
            >
              <div className="acc__inner">
                <div>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
      {escondidas > 0 && (
        <button type="button" className="acc__mais" onClick={() => { revelou.current = true; setTodas(true); }}>
          Ver mais {escondidas} perguntas
          <Plus size={16} strokeWidth={2.25} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
