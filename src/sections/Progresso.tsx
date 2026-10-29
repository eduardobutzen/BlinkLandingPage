import type { CSSProperties } from "react";
import { BellRing, Medal, Trophy } from "lucide-react";
import { Contador } from "@/components/Contador";
import { Device } from "@/components/Device";
import { MapaAtividade } from "@/components/MapaAtividade";
import { SectionHead } from "@/components/SectionHead";
import { CONQUISTAS, META_MAX, META_MIN, PATENTES, TOTAL_CONQUISTAS } from "@/data/progresso";
import { TELAS } from "@/data/telas";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * Hábito e progresso num bento: meta e mapa de atividade, conquistas, a
 * escada de patentes e os lembretes, ao lado das duas telas do app.
 */
export function Progresso() {
  return (
    <section className="section section--line" id="progresso" aria-labelledby="progresso-titulo">
      <div className="wrap">
        <SectionHead
          numero={3}
          rotulo="Progresso"
          tituloId="progresso-titulo"
          titulo={
            <>
              Todo dia, <strong>sem planilha e sem culpa</strong>.
            </>
          }
        />

        <div className="progresso">
          <div className="progresso__telas reveal">
            <Device tela={TELAS.progresso} className="progresso__a" />
            <Device tela={TELAS.conquistas} className="progresso__b" />
          </div>

          <div className="bento">
            <article className="bento__card bento__card--largo spot reveal" style={ordem(0)}>
              <MapaAtividade />
              <h3 className="t-card">Meta diária e sequência</h3>
              <p>
                Escolha uma meta de {META_MIN} a {META_MAX} cards por dia e mantenha a sequência viva.
                O mapa de atividade mostra cada dia estudado.
              </p>
            </article>

            <article className="bento__card spot reveal" style={ordem(1)}>
              <span className="bento__icone" aria-hidden="true"><Trophy size={18} strokeWidth={2} /></span>
              <p className="bento__numero"><Contador ate={TOTAL_CONQUISTAS} /></p>
              <h3 className="t-card">conquistas para desbloquear</h3>
              <ul className="conquistas">
                {CONQUISTAS.map((c) => (
                  <li key={c.nome}>
                    <b>{c.nome}</b> {c.descricao}
                  </li>
                ))}
              </ul>
            </article>

            <article className="bento__card spot reveal" style={ordem(2)}>
              <span className="bento__icone" aria-hidden="true"><Medal size={18} strokeWidth={2} /></span>
              <p className="bento__numero"><Contador ate={PATENTES.length} /></p>
              <h3 className="t-card">patentes para subir</h3>
              <ol className="patentes">
                {PATENTES.map((p, i) => (
                  <li key={p} data-ouro={i >= PATENTES.length - 2} style={ordem(i)}>{p}</li>
                ))}
              </ol>
            </article>

            <article className="bento__card bento__card--largo spot reveal" style={ordem(3)}>
              <span className="bento__icone" aria-hidden="true"><BellRing size={18} strokeWidth={2} /></span>
              <h3 className="t-card">Lembretes no seu horário</h3>
              <p>
                Uma notificação na hora que você escolher (o padrão é 20h) e, se quiser, um alerta à
                parte quando a sequência estiver em risco.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
