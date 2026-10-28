import type { CSSProperties } from "react";
import { Lock, Share2, Unlock } from "lucide-react";
import { Device } from "@/components/Device";
import { FaixaDeCapas } from "@/components/FaixaDeCapas";
import { SectionHead } from "@/components/SectionHead";
import { TELAS } from "@/data/telas";

/* As três licenças de deck, resumidas dos Termos de Uso (§7). */
const LICENCAS = [
  { Icone: Lock, nome: "Protegido", texto: "Outras pessoas baixam e estudam, mas não exportam nem republicam." },
  { Icone: Share2, nome: "Compartilhável", texto: "Podem baixar e exportar em arquivo, mas não republicar como próprio." },
  { Icone: Unlock, nome: "Aberto", texto: "Podem republicar adaptações, sempre com crédito a você." },
];

export function Comunidade() {
  return (
    <section className="section section--line" id="comunidade" aria-labelledby="comunidade-titulo">
      <div className="wrap">
        <SectionHead
          numero={2}
          rotulo="Comunidade"
          tituloId="comunidade-titulo"
          titulo={
            <>
              Explore decks <strong>prontos da comunidade</strong>.
            </>
          }
          aside={
            <p className="muted">
              Encontre decks de outros estudantes por categoria, com busca, avaliações e comentários, e
              publique os seus. No Plus, você baixa e estuda qualquer deck publicado.
            </p>
          }
        />
      </div>

      <FaixaDeCapas />

      <div className="wrap">
        <div className="comunidade">
          <div className="comunidade__telas reveal">
            <Device tela={TELAS.comunidade} className="comunidade__a" />
            <Device tela={TELAS.deckCompartilhado} className="comunidade__b" />
          </div>

          <div className="comunidade__licencas">
            <p className="eyebrow reveal">Você escolhe a licença ao publicar</p>
            <ul>
              {LICENCAS.map(({ Icone, nome, texto }, i) => (
                <li key={nome} className="licenca spot reveal" style={{ "--i": i } as CSSProperties}>
                  <span className="licenca__icone" aria-hidden="true"><Icone size={18} strokeWidth={2} /></span>
                  <div>
                    <h3 className="t-card">{nome}</h3>
                    <p>{texto}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="note reveal">Decks adaptados mostram de onde vieram, e quem baixa fica com uma cópia própria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
