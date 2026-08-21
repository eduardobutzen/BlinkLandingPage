import React, { useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAIXAS_DE_USO, planoParaUso, type Plano } from "@/data/pricing";
import { EMAIL_SUPORTE } from "@/data/site";

function formataPreco(plano: Plano) {
  if (plano.precoMensal === null) return "Em breve";
  if (plano.precoMensal === 0) return "R$ 0";
  return `R$ ${plano.precoMensal.toLocaleString("pt-BR")}`;
}

export const LoopsPricingSlider: React.FC<{ className?: string }> = ({ className }) => {
  const [indice, setIndice] = useState(FAIXAS_DE_USO.indexOf(300));
  const idSlider = useId();

  const geracoes = FAIXAS_DE_USO[indice];
  const plano = planoParaUso(geracoes);
  const progresso = (indice / (FAIXAS_DE_USO.length - 1)) * 100;
  const rotuloUso = `${geracoes.toLocaleString("pt-BR")}${indice === FAIXAS_DE_USO.length - 1 ? "+" : ""}`;

  return (
    <section className={cn("mx-auto max-w-4xl", className)}>
      <div className="flex flex-col md:flex-row gap-5">
        {/* Calculadora */}
        <div className="flex-1 rounded-3xl border border-border bg-card p-8 flex flex-col gap-8">
          <h3 className="text-sm font-display font-bold text-foreground">
            Quantas gerações por mês você faz?
          </h3>

          <div>
            <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-foreground tabular-nums">
              {rotuloUso}
            </p>
            <p className="text-sm text-muted-foreground mt-3">gerações por IA por mês</p>
          </div>

          <div>
            <label htmlFor={idSlider} className="sr-only">
              Gerações por IA por mês
            </label>
            <input
              id={idSlider}
              type="range"
              min={0}
              max={FAIXAS_DE_USO.length - 1}
              step={1}
              value={indice}
              onChange={(e) => setIndice(Number(e.target.value))}
              aria-valuetext={`${rotuloUso} gerações por mês — plano ${plano.nome}`}
              className="blink-range block w-full appearance-none h-3 rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--invert) 0%, var(--invert) ${progresso}%, var(--line-soft) ${progresso}%, var(--line-soft) 100%)`,
              }}
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground tabular-nums mt-4">
              <span>{FAIXAS_DE_USO[0]}</span>
              <span>{FAIXAS_DE_USO[FAIXAS_DE_USO.length - 1].toLocaleString("pt-BR")}+</span>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
            <span>Precisa de algo sob medida?</span>
            <a
              href={`mailto:${EMAIL_SUPORTE}?subject=${encodeURIComponent("Uso acima do plano Pro")}`}
              className="text-foreground font-display font-bold inline-flex items-center gap-1 hover:opacity-80"
            >
              Fale com a gente <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Plano resultante */}
        <div className="flex-1 rounded-3xl border border-border bg-muted p-8 flex flex-col gap-8">
          <h3 className="text-sm font-display font-bold text-foreground">Seu plano</h3>

          <div>
            <p className="text-sm font-display font-bold uppercase tracking-[0.12em] text-muted-foreground">
              {plano.nome}
            </p>
            <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-foreground mt-3">
              {formataPreco(plano)}
              {plano.precoMensal !== null && (
                <span className="font-sans text-base font-normal text-muted-foreground">
                  {" "}
                  / mês
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm text-muted-foreground leading-relaxed">{plano.descricao}</p>

            <ul className="grid gap-3">
              {plano.itens.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-foreground text-background"
                    aria-hidden="true"
                  >
                    <Check size={11} strokeWidth={3.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <a className="btn btn--solid" href={plano.ctaHref}>
              {plano.ctaRotulo}
              <ArrowRight className="arrow" size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
