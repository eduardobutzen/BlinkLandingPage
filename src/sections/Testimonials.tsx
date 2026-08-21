import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { primeiraColuna, segundaColuna, terceiraColuna } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="section-head section-head--center"
        >
          <p className="eyebrow">Depoimentos</p>
          <h2 className="h-section tt">
            Quem estuda com o Blink <strong>conta como foi</strong>.
          </h2>
        </motion.div>

        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={primeiraColuna} duration={15} />
          <TestimonialsColumn
            testimonials={segundaColuna}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={terceiraColuna}
            className="hidden lg:block"
            duration={17}
          />
        </div>

        {/* Sai junto com os depoimentos de exemplo — ver src/data/testimonials.ts */}
        <p className="placeholder-note">
          Conteúdo de exemplo — substituir por depoimentos reais antes de publicar.
        </p>
      </div>
    </section>
  );
}
