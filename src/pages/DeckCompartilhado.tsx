import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreBadges } from "@/components/StoreBadges";
import { LINK_APP_STORE, URL_GOOGLE_PLAY } from "@/data/site";
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
        document.title = `${r.deck.title} | Blink`;
      } else {
        setEstado("nao-encontrado");
        document.title = "Deck não encontrado | Blink";
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
        <main id="conteudo" tabIndex={-1} className="section page-top">
          <div className="wrap">
            <p className="muted" role="status">Carregando…</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (estado === "nao-encontrado" || !deck) {
    return (
      <>
        <Header enxuto />
        <main id="conteudo" tabIndex={-1} className="section page-top">
          <div className="wrap">
            <div className="page-head page-head--center">
              <h1 className="t-section">Este deck não está disponível</h1>
              <p className="lead">
                Ele pode ter sido removido pelo autor ou tirado do ar. O resto da
                comunidade continua lá dentro.
              </p>
              <div className="actions">
                <Link className="btn btn--solid btn--lg" to="/">
                  Conhecer o Blink
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const nota = deck.rating_count > 0 ? deck.rating_avg.toFixed(1) : null;

  return (
    <>
      <Header enxuto />

      <main id="conteudo" tabIndex={-1} className="section page-top">
        <div className="wrap">
          <div className="page-head">
            <p className="eyebrow">Deck da comunidade</p>
            <h1 className="t-section">{deck.title}</h1>
            {deck.description && <p className="lead">{deck.description}</p>}

            {/* Autor — leva ao perfil dele, que é a outra página compartilhável */}
            {deck.author_name && (
              <Link className="author" to={`/autor/${deck.author_id}`}>
                {deck.author_avatar_url && (
                  <img src={deck.author_avatar_url} alt="" width={32} height={32} />
                )}
                <span>por {deck.author_name}</span>
              </Link>
            )}
          </div>

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
            <div className="tags">
              {deck.tags.slice(0, 6).map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="actions">
            <button
              type="button"
              className="btn btn--solid btn--lg"
              onClick={() =>
                abrirNoApp("deck", deck.id, lojaDoAparelho(LINK_APP_STORE, URL_GOOGLE_PLAY))
              }
            >
              Abrir no app
            </button>
          </div>
          <p className="note mt-3.5">
            Já tem o Blink? O botão abre o deck direto. Se ainda não tem, ele leva
            para a loja.
          </p>

          {/* Amostra — só as perguntas, e só quando a licença do autor permite */}
          {amostra.length > 0 && (
            <div className="card mt-8">
              <p className="eyebrow">Algumas perguntas deste deck</p>
              <ul className="checklist">
                {amostra.map((pergunta, i) => (
                  <li key={i}>{pergunta}</li>
                ))}
              </ul>
              <p className="small muted">
                As respostas ficam no app, que é onde elas viram memória.
              </p>
            </div>
          )}

          <div className="mt-10">
            <StoreBadges alinhar="inicio" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
