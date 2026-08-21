import { LoopsPricingSlider } from "@/components/ui/pricing-slider-loops";

export function Plans() {
  return (
    <section className="section section--alt" id="planos">
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Planos</p>
          <h2 className="h-section tt">
            Comece de graça. <strong>Sem cartão, sem pegadinha.</strong>
          </h2>
        </div>

        <div className="reveal">
          <LoopsPricingSlider />
        </div>

        <p className="small muted reveal" style={{ textAlign: "center", marginTop: "24px" }}>
          O limite de gerações é verificado no servidor — nunca no aparelho. Criar cards por conta
          própria não consome geração.
        </p>
      </div>
    </section>
  );
}
