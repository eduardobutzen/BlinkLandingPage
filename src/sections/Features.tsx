import { motion, useReducedMotion } from "motion/react";
import { BentoCard } from "@/components/ui/bento";
import { TELAS, type Tela } from "@/data/telas";
import { cn } from "@/lib/utils";

/*
 * As seis funções do app num bento: os dois recursos de IA (do Plus) em cards
 * largos na primeira linha, os quatro de estudo na segunda. Cada card tem
 * título, uma frase e a tela real correspondente. `plus` marca o que depende
 * da IA, para a página não prometer de graça o que é do Blink Plus.
 */
const RECURSOS: {
  rotulo: string;
  titulo: string;
  texto: string;
  plus: boolean;
  tela: Tela;
  largo?: boolean;
}[] = [
  {
    rotulo: "Criar",
    titulo: "Decks gerados por IA",
    texto:
      "Digite um assunto ou envie PDF, PPTX, DOCX ou fotos e receba um deck pronto, com as figuras do material e 4 alternativas em cada card.",
    plus: true,
    tela: "decks",
    largo: true,
  },
  {
    rotulo: "Entender",
    titulo: "Chat sobre a questão",
    texto:
      "Se a explicação não bastou, converse com a IA sobre aquela questão: peça outro exemplo ou pergunte por que as outras alternativas estão erradas.",
    plus: true,
    tela: "chat",
    largo: true,
  },
  {
    rotulo: "Estudar",
    titulo: "Repetição espaçada",
    texto:
      "Diga se acertou ou errou e o app agenda cada card para a hora certa de revisar, em flashcards, quiz ou os dois intercalados.",
    plus: false,
    tela: "questao",
  },
  {
    rotulo: "Revisar",
    titulo: "Aba Revisar",
    texto:
      "As questões que você errou ou pulou ficam juntas para refazer, e o botão “Entendi” tira da lista o que você já aprendeu.",
    plus: false,
    tela: "revisar",
  },
  {
    rotulo: "Compartilhar",
    titulo: "Comunidade",
    texto:
      "Encontre decks de outros estudantes por categoria, com busca, avaliações e comentários, e publique os seus.",
    plus: false,
    tela: "comunidade",
  },
  {
    rotulo: "Acompanhar",
    titulo: "Hábito e progresso",
    texto:
      "Meta diária, sequência de dias, conquistas, níveis, estatísticas e lembretes para você não perder a revisão.",
    plus: false,
    tela: "progresso",
  },
];

/** A tela do app subindo de dentro do card; no hover do card, sobe um pouco. */
function Aparelho({ tela, largo }: { tela: Tela; largo?: boolean }) {
  const reduzirMovimento = useReducedMotion();

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_100%,rgba(255,255,255,.09),transparent)]" />
      <motion.img
        src={TELAS[tela].src}
        alt={TELAS[tela].alt}
        width={700}
        height={1398}
        loading="lazy"
        decoding="async"
        variants={{ idle: { y: 0 }, active: { y: reduzirMovimento ? 0 : -10 } }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className={cn(
          "absolute inset-x-0 top-8 mx-auto h-auto drop-shadow-[0_24px_48px_rgba(0,0,0,.8)]",
          largo ? "w-[250px] md:w-[290px]" : "w-[250px]",
        )}
      />
    </>
  );
}

export function Features() {
  return (
    <section className="section section--alt" id="recursos">
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Recursos</p>
          <h2 className="h-section tt">
            Tudo para estudar, <strong>revisar e entender</strong>.
          </h2>
        </div>

        <div className="bento reveal">
          {RECURSOS.map((recurso) => (
            <BentoCard
              key={recurso.titulo}
              className={recurso.largo ? "bento__largo" : undefined}
              eyebrow={
                <>
                  {recurso.rotulo}
                  {recurso.plus && (
                    <span className="rounded-full border border-white/25 px-2 py-0.5 text-[11px] normal-case tracking-[.04em] text-white">
                      Plus
                    </span>
                  )}
                </>
              }
              title={recurso.titulo}
              description={recurso.texto}
              graphic={<Aparelho tela={recurso.tela} largo={recurso.largo} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
