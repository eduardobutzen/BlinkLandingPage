import { ArrowUpRight } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { SectionHead } from "@/components/SectionHead";
import { EMAIL_SUPORTE } from "@/data/site";
import { perguntasFrequentes } from "@/data/faq";

/** Duas colunas no desktop: título e contato à esquerda, perguntas à direita. */
export function Faq() {
  return (
    <section className="section section--line" id="faq" aria-labelledby="faq-titulo">
      <div className="wrap faq">
        <div>
          <SectionHead numero={4} rotulo="Perguntas" tituloId="faq-titulo" titulo="Perguntas frequentes" />
          <a className="text-link faq__contato reveal" href={`mailto:${EMAIL_SUPORTE}`}>
            {EMAIL_SUPORTE}
            <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>
        <div className="reveal">
          <Accordion items={perguntasFrequentes} visiveis={5} />
        </div>
      </div>
    </section>
  );
}
