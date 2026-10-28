import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho de seção: etiqueta numerada ("01 / Como funciona"), título e, no
 * desktop, um aparte à direita. `titulo` aceita <strong> para o segundo tom.
 */
export function SectionHead({
  numero,
  rotulo,
  titulo,
  tituloId,
  aside,
  centro = false,
  className,
}: {
  numero?: number;
  rotulo: string;
  titulo: ReactNode;
  tituloId: string;
  aside?: ReactNode;
  centro?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "section-head reveal",
        aside && "section-head--split",
        centro && "section-head--center",
        className,
      )}
    >
      <p className="eyebrow">
        {numero !== undefined && (
          <span className="eyebrow__n" aria-hidden="true">
            {String(numero).padStart(2, "0")} /
          </span>
        )}
        {rotulo}
      </p>
      <h2 id={tituloId} className="t-section tt">
        {titulo}
      </h2>
      {aside && <div className="section-head__aside">{aside}</div>}
    </div>
  );
}
