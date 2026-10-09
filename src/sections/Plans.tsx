import { Check, Minus } from "lucide-react";
import {
  CTA_PLUS,
  DOZE_MESES_DO_MENSAL,
  ECONOMIA_ANUAL_PCT,
  ITENS_GRATIS,
  ITENS_PLUS,
  LIMITES_PLUS,
  PLUS_ANUAL_POR_MES,
  PLUS_A_VENDA,
  PRECO_PLUS_ANUAL,
  PRECO_PLUS_MENSAL,
  RESSALVA_GRATIS,
  reais,
} from "@/data/pricing";

export function Plans() {
  return (
    <section className="section" id="planos">
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Preços</p>
          <h2 className="h-section tt">
            Estude de graça. <strong>A IA fica no Plus.</strong>
          </h2>
        </div>

        <div className="plans reveal">
          <article className="plan">
            <header className="plan__head">
              <h3 className="plan__name">Grátis</h3>
              <p className="plan__price">R$ 0</p>
              <p className="small muted">Para estudar sem pagar nada.</p>
            </header>

            <ul className="plan__list">
              {ITENS_GRATIS.map((item) => (
                <li key={item}>
                  <Check className="plan__tick" size={18} strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
              <li className="plan__ressalva">
                <Minus className="plan__tick" size={18} strokeWidth={2.5} aria-hidden="true" />
                {RESSALVA_GRATIS}
              </li>
            </ul>

            <a className="btn btn--ghost btn--block" href="#baixar">
              Baixar grátis
            </a>
          </article>

          <article className="plan plan--plus">
            <header className="plan__head">
              <h3 className="plan__name">Blink Plus</h3>

              {/* As duas formas de pagar, com o anual na frente. */}
              <div className="plan__options">
                <div className="plan__option plan__option--best">
                  <div className="plan__option-top">
                    <span className="plan__option-name">Anual</span>
                    <span className="tag-best">Melhor escolha</span>
                  </div>
                  <p className="plan__price">
                    {reais(PRECO_PLUS_ANUAL)}
                    <span>/ano</span>
                  </p>
                  <p className="small muted">
                    Equivale a {reais(PLUS_ANUAL_POR_MES)}/mês, {ECONOMIA_ANUAL_PCT}% mais barato que
                    12 meses do mensal ({reais(DOZE_MESES_DO_MENSAL)}).
                  </p>
                </div>

                <div className="plan__option">
                  <div className="plan__option-top">
                    <span className="plan__option-name">Mensal</span>
                  </div>
                  <p className="plan__price plan__price--sm">
                    {reais(PRECO_PLUS_MENSAL)}
                    <span>/mês</span>
                  </p>
                </div>
              </div>
            </header>

            <p className="plan__lead">Tudo do Grátis, mais:</p>
            <ul className="plan__list">
              {ITENS_PLUS.map((item) => (
                <li key={item}>
                  <Check className="plan__tick" size={18} strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <details className="plan__limits">
              <summary>Ver limites de uso da IA</summary>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Até</th>
                    <th scope="col">por dia</th>
                    <th scope="col">por mês</th>
                  </tr>
                </thead>
                <tbody>
                  {LIMITES_PLUS.map((limite) => (
                    <tr key={limite.rotulo}>
                      <th scope="row">{limite.rotulo}</th>
                      <td>{limite.dia}</td>
                      <td>{limite.mes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>

            <a className="btn btn--solid btn--block" href={CTA_PLUS.href}>
              {CTA_PLUS.rotulo}
            </a>
            {!PLUS_A_VENDA && (
              <p className="plan__note">
                A assinatura ainda não abriu. Mande um e-mail e avisamos no lançamento.
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
