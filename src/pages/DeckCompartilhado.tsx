import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreBadges } from "@/components/StoreBadges";
import { URL_APP_STORE, URL_GOOGLE_PLAY } from "@/data/site";
import {
  buscarPreview,
  abrirNoApp,
  lojaDoAparelho,
  type DeckPublico,
} from "@/lib/preview";

/**
 * A página que alguém abre ao receber um deck por link.
 *
 * Ela tem uma função só, e a estrutura toda serve a ela: fazer a pessoa
 * entender em três segundos o que é aquilo e querer o app. Quem já tem o app
 * vai embora pelo botão de cima; quem não tem precisa de motivo para baixar, e
 * o motivo é o deck em si — daí o número de cards, a nota e a amostra de
 * perguntas ficarem acima da dobra.
 *
 * O que ela NÃO faz: mostrar as respostas. A amostra vem só com perguntas, e
 * decidido no servidor, não aqui — ver a Edge Function `share-preview`.
 */
export default function DeckCompartilhado() {
  const { id = "" } = useParams();
  const [deck, setDeck] = useState<DeckPublico | null>(null);
  const [amostra, setAmostra] = useState<string[]>([]);
  const [estado, setEstado] = useState<"carregando" | "ok" | "nao-encontrado">(
    "carregando",
  );

  useEffect(() => {
    let vivo = true;
    void buscarPreview("deck", id).then((r) => {
      if (!vivo) return;
      if (r?.tipo === "deck") {
        setDeck(r.deck);
        setAmostra(r.amostra);
        setEstado("ok");
        document.title = `${r.deck.title} — Blink`;
      } else {
        setEstado("nao-encontrado");
        document.title = "Deck não encontrado — Blink";
      }
    });
    return () => {
      vivo = false;
    };
  }, [id]);

  if (estado === "carregando") {
    return (
      <>
        <Header enxuto />
        <section className="section">
          <div className="wrap">
            <p className="muted">Carregando…</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (estado === "nao-encontrado" || !deck) {
    return (
      <>
        <Header enxuto />
        <section className="section">
          <div className="wrap section-head section-head--center">
            <h1 className="h-section tt">Este deck não está disponível</h1>
            <p className="lead muted">
              Ele pode ter sido removido pelo autor ou tirado do ar. O resto da
              comunidade continua lá dentro.
            </p>
            <div className="hero__cta" style={{ justifyContent: "center" }}>
              <Link className="btn btn--solid btn--lg" to="/">
                Conhecer o Blink
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const nota = deck.rating_count > 0 ? deck.rating_avg.toFixed(1) : null;

  return (
    <>
      <Header enxuto />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Deck da comunidade</p>
            <h1 className="h-section tt">{deck.title}</h1>
            {deck.description && <p className="lead muted">{deck.description}</p>}
          </div>

          {/* Autor — leva ao perfil dele, que é a outra página compartilhável */}
          {deck.author_name && (
            <Link
              className="doc__meta"
              to={`/autor/${deck.author_id}`}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              {deck.author_avatar_url && (
                <img
                  src={deck.author_avatar_url}
                  alt=""
                  width={32}
                  height={32}
                  style={{ borderRadius: "50%" }}
                />
              )}
              <span>por {deck.author_name}</span>
            </Link>
          )}

          {/* Os números que fazem alguém decidir */}
          <div className="stats">
            <div>
              <div className="stat__n">{deck.card_count}</div>
              <div className="stat__l">{deck.card_count === 1 ? "card" : "cards"}</div>
            </div>
            <div>
              <div className="stat__n">{deck.downloads_count}</div>
              <div className="stat__l">
                {deck.downloads_count === 1 ? "download" : "downloads"}
              </div>
            </div>
            {nota && (
              <div>
                <div className="stat__n">{nota}</div>
                <div className="stat__l">
                  de nota · {deck.rating_count}{" "}
                  {deck.rating_count === 1 ? "avaliação" : "avaliações"}
                </div>
              </div>
            )}
          </div>

          {deck.tags.length > 0 && (
            <div className="badges">
              {deck.tags.slice(0, 6).map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="hero__cta">
            <button
              className="btn btn--solid btn--lg"
              onClick={() =>
                abrirNoApp("deck", deck.id, lojaDoAparelho(URL_APP_STORE, URL_GOOGLE_PLAY))
              }
            >
              Abrir no app
            </button>
          </div>
          <p className="hero__note muted small">
            Já tem o Blink? O botão abre o deck direto. Se ainda não tem, ele leva
            para a loja.
          </p>

          {/* Amostra — só as perguntas, e só quando a licença do autor permite */}
          {amostra.length > 0 && (
            <div className="card" style={{ marginTop: "32px" }}>
              <p className="eyebrow">Algumas perguntas deste deck</p>
              <ul className="checklist">
                {amostra.map((pergunta, i) => (
                  <li key={i}>{pergunta}</li>
                ))}
              </ul>
              <p className="small muted">
                As respostas ficam no app — é lá que elas viram memória.
              </p>
            </div>
          )}

          <div style={{ marginTop: "40px" }}>
            <StoreBadges />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
