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
  type AutorPublico,
  type DeckPublico,
} from "@/lib/preview";

/**
 * O perfil público de quem publica, na web.
 *
 * Espelha a tela de perfil dentro do app, com a mesma regra de fundo: a
 * comunidade só sabe de alguém o que essa pessoa PUBLICOU. Não há "membro
 * desde", sequência de estudo nem e-mail — a tabela de perfis não é exposta, e
 * o que aparece aqui é o que já aparecia para qualquer usuário logado.
 */
export default function AutorCompartilhado() {
  const { id = "" } = useParams();
  const [autor, setAutor] = useState<AutorPublico | null>(null);
  const [decks, setDecks] = useState<DeckPublico[]>([]);
  const [estado, setEstado] = useState<"carregando" | "ok" | "nao-encontrado">(
    "carregando",
  );

  useEffect(() => {
    let vivo = true;
    void buscarPreview("autor", id).then((r) => {
      if (!vivo) return;
      if (r?.tipo === "autor") {
        setAutor(r.autor);
        setDecks(r.decks);
        setEstado("ok");
        document.title = `${r.autor.name} — Blink`;
      } else {
        setEstado("nao-encontrado");
        document.title = "Autor não encontrado — Blink";
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

  if (estado === "nao-encontrado" || !autor) {
    return (
      <>
        <Header enxuto />
        <section className="section">
          <div className="wrap section-head section-head--center">
            <h1 className="h-section tt">Este perfil não está disponível</h1>
            <p className="lead muted">
              A pessoa pode não ter nenhum deck publicado no momento.
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

  const nota = autor.rating_count > 0 ? autor.rating_avg.toFixed(1) : null;
  const desde = new Date(autor.since).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Header enxuto />

      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--center">
            {autor.avatar_url && (
              <img
                src={autor.avatar_url}
                alt=""
                width={96}
                height={96}
                style={{ borderRadius: "50%", margin: "0 auto 16px" }}
              />
            )}
            <p className="eyebrow">Publica no Blink</p>
            <h1 className="h-section tt">{autor.name}</h1>
            <p className="lead muted">Publica desde {desde}</p>
          </div>

          <div className="stats">
            <div>
              <div className="stat__n">{autor.deck_count}</div>
              <div className="stat__l">
                {autor.deck_count === 1 ? "deck publicado" : "decks publicados"}
              </div>
            </div>
            <div>
              <div className="stat__n">{autor.downloads}</div>
              <div className="stat__l">
                {autor.downloads === 1 ? "download" : "downloads"}
              </div>
            </div>
            {nota && (
              <div>
                <div className="stat__n">{nota}</div>
                <div className="stat__l">de nota</div>
              </div>
            )}
            <div>
              <div className="stat__n">{autor.card_count}</div>
              <div className="stat__l">
                {autor.card_count === 1 ? "card criado" : "cards criados"}
              </div>
            </div>
          </div>

          <div className="hero__cta">
            <button
              className="btn btn--solid btn--lg"
              onClick={() =>
                abrirNoApp("autor", autor.id, lojaDoAparelho(URL_APP_STORE, URL_GOOGLE_PLAY))
              }
            >
              Abrir no app
            </button>
          </div>

          {decks.length > 0 && (
            <div style={{ marginTop: "40px" }}>
              <p className="eyebrow">Decks desta pessoa</p>
              <div className="grid grid--2">
                {decks.map((deck) => (
                  <Link className="card" to={`/deck/${deck.id}`} key={deck.id}>
                    <h3 className="h-card">{deck.title}</h3>
                    <p className="small muted">
                      {deck.card_count} {deck.card_count === 1 ? "card" : "cards"}
                      {deck.rating_count > 0 &&
                        ` · ${deck.rating_avg.toFixed(1)} de nota`}
                    </p>
                  </Link>
                ))}
              </div>
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
