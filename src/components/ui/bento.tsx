import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/*
 * Card de bento no estilo do "FUI Bento Grid Dark" (21st.dev): a ilustração
 * ocupa o topo e o texto sobe por cima da base dela num painel com desfoque.
 *
 * O card é escuro nos dois temas, como no original e como as telas do app que
 * ele mostra. Os cantos não são definidos aqui: quem monta o grid arredonda só
 * os cantos externos (ver `.bento` em styles/blink.css) — um `rounded-*` neste
 * arquivo venceria aquelas regras, porque utilitário do Tailwind ganha da
 * camada `components`.
 *
 * `whileHover="active"` propaga para os filhos: uma ilustração feita com
 * `motion` pode declarar a variante `active` para reagir ao hover do card.
 */
export function BentoCard({
  eyebrow,
  title,
  description,
  graphic,
  className,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  graphic?: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      className={cn(
        "group relative flex transform-gpu flex-col overflow-hidden bg-neutral-950 text-white shadow-sm ring-1 ring-white/10",
        "dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_rgba(255,255,255,.08)_inset]",
        className,
      )}
    >
      <div className="relative h-[22rem] shrink-0 overflow-hidden md:h-[26rem]">{graphic}</div>

      {/* Sobe 110px por cima da ilustração; o desfoque é o que dá o efeito.
          A máscara esfuma os primeiros 24px para a borda do desfoque não
          cortar a ilustração numa linha seca. */}
      <div className="relative isolate z-20 -mt-[110px] flex-1 bg-gradient-to-b from-black/20 to-black/90 to-45% p-7 backdrop-blur-xl [mask-image:linear-gradient(to_bottom,transparent,#000_24px)] md:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-white/55">
          {eyebrow}
        </div>
        <h3 className="mt-2 text-2xl/8 font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-2 max-w-[600px] text-sm/6 text-neutral-400">{description}</p>
      </div>
    </motion.article>
  );
}
