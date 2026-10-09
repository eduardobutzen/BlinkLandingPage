import { StoreBadges } from "@/components/StoreBadges";
import { DotPattern } from "@/components/ui/dot-pattern";
import { PhoneCarousel } from "@/components/ui/phone-carousel";
import { TELAS } from "@/data/telas";

const TELAS_DO_HEROI = [
  TELAS.inicio,
  TELAS.decks,
  TELAS.questao,
  TELAS.chat,
  TELAS.revisar,
  TELAS.comunidade,
  TELAS.progresso,
];

export function Hero() {
  return (
    <section className="hero">
      {/* Textura de fundo: a máscara concentra os pontos no topo, atrás do
          título, para que eles sumam antes dos aparelhos. */}
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1}
        className="fill-[var(--line)] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,white,transparent)]"
      />

      <div className="wrap hero__inner">
        <h1 className="h-display tt">
          Sua apostila vira flashcards. <strong>A IA explica cada erro.</strong>
        </h1>

        <p className="lead">
          Envie PDF, slides ou fotos e receba cards prontos, com quiz. A repetição espaçada diz
          quando revisar.
        </p>

        <div className="hero__cta">
          <StoreBadges />
          <p className="hero__note">Grátis para estudar, no iPhone e no Android.</p>
        </div>

        {/* A tela inicial abre o giro: é a primeira coisa que se vê no app. */}
        <PhoneCarousel images={TELAS_DO_HEROI} className="hero__phones" />
      </div>
    </section>
  );
}
