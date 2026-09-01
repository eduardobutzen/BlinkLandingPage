import { StoreBadges } from "@/components/StoreBadges";
import { DotPattern } from "@/components/ui/dot-pattern";

export function Hero() {
  return (
    <>
      <section className="section hero">
        {/* Textura de fundo: o fill sai do token do tema (não de slate-*), e a
            máscara concentra os pontos no topo, atrás do título, para que eles
            sumam antes do leque de mockups. */}
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="fill-[var(--text-3)] opacity-50 md:fill-[var(--text-3)] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,white,transparent)]"
        />

        <div className="wrap hero__inner">
          <h1 className="h-display tt">Seu material vira <strong>deck de flashcards</strong> em segundos.</h1>

          <div className="hero__cta">
            <StoreBadges />
            <p className="hero__note">Grátis para começar, no iPhone e no Android. Sem cartão.</p>
          </div>

          {/* Leque de capturas reais do app */}
          <div className="mockup-fan" aria-label="Telas do aplicativo Blink">
            <figure className="shot">
              <img src="/assets/mockups/decks.webp" width="700" height="1422" loading="eager" decoding="async" alt="Tela Decks do Blink: lista de decks com capa, número de cards e quando cada um foi estudado." />
            </figure>
            <figure className="shot">
              <img src="/assets/mockups/inicio.webp" width="700" height="1422" loading="eager" decoding="async" fetchPriority="high" alt="Tela inicial do Blink: anel da meta diária em 25 de 60 cards, sequência de 2 dias e o botão Revisar 49 cards." />
            </figure>
            <figure className="shot">
              <img src="/assets/mockups/progresso.webp" width="700" height="1422" loading="eager" decoding="async" alt="Tela Progresso do Blink: patente Aprendiz no nível 3, heatmap de atividade, 271 cards estudados e 94% de acerto." />
            </figure>
          </div>

          {/* Os antigos 3 passos, reduzidos a uma faixa dentro do herói. */}
          <ol className="steps-strip reveal" aria-label="Como funciona">
            <li>
              <span className="steps-strip__n">1</span>
              <span>
                <b>Envie o material</b>
                <span className="small muted">PDF, slide, foto, texto ou só o tópico</span>
              </span>
            </li>
            <li>
              <span className="steps-strip__n">2</span>
              <span>
                <b>A IA monta os cards</b>
                <span className="small muted">perguntas tiradas do seu conteúdo, com as figuras</span>
              </span>
            </li>
            <li>
              <span className="steps-strip__n">3</span>
              <span>
                <b>Estude e esqueça o resto</b>
                <span className="small muted">a repetição espaçada agenda cada revisão</span>
              </span>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
