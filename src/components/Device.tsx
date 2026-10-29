import type { CSSProperties, ReactNode } from "react";
import { TELA_H, TELA_W, type Tela } from "@/data/telas";
import { cn } from "@/lib/utils";

/**
 * iPhone desenhado em CSS em volta de uma captura crua do app. Com `telas`
 * (várias), empilha as capturas e mostra só a `ativa`, com troca suave; as
 * outras ficam fora da árvore de acessibilidade.
 */
export function Device({
  tela,
  telas,
  ativa = 0,
  largura,
  decorativo = false,
  prioridade = false,
  className,
  children,
}: {
  tela?: Tela;
  telas?: Tela[];
  ativa?: number;
  /** Largura em px; sem ela, vale a variável --device-w do contexto. */
  largura?: number;
  /** Quando o texto ao lado já descreve a tela, a imagem não precisa de alt. */
  decorativo?: boolean;
  prioridade?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const lista = telas ?? (tela ? [tela] : []);
  const estilo = largura ? ({ "--device-w": `${largura}px` } as CSSProperties) : undefined;

  return (
    <div className={cn("device", className)} style={estilo}>
      <div className="device__screen">
        {lista.map((t, i) => (
          <img
            key={t.src}
            src={t.src}
            alt={decorativo || i !== ativa ? "" : t.alt}
            aria-hidden={decorativo || i !== ativa ? true : undefined}
            data-ativa={i === ativa}
            width={TELA_W}
            height={TELA_H}
            loading={prioridade && i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            // React 18 só repassa o atributo em minúsculas.
            {...(prioridade && i === 0 ? { fetchpriority: "high" } : {})}
          />
        ))}
        <span className="device__island" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
