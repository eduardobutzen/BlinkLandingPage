import { UniqueAccordion } from "@/components/ui/interactive-accordion";
import { perguntasFrequentes } from "@/data/faq";

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Perguntas</p>
          <h2 className="h-section tt">
            O que <strong>sempre perguntam</strong>.
          </h2>
        </div>

        <div className="reveal mx-auto max-w-3xl">
          <UniqueAccordion items={perguntasFrequentes} />
        </div>
      </div>
    </section>
  );
}
