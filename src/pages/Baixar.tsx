import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreBadges } from "@/components/StoreBadges";
import { URL_APP_STORE, URL_GOOGLE_PLAY } from "@/data/site";

type Aparelho = "ios" | "android" | "outro";

/** Descobre a loja certa pelo que o navegador informa. */
function detectar(): Aparelho {
  if (typeof navigator === "undefined") return "outro";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  // iPad com "Solicitar site para computador" se anuncia como Mac com toque.
  const iPadNovo = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/i.test(ua) || iPadNovo) return "ios";
  return "outro";
}

/**
 * `/baixar` é o endereço que o app compartilha e que vai na bio das redes.
 * Ele manda cada aparelho para a sua loja e preserva a marcação de origem
 * (`?utm_source=...`) que veio no link, para sabermos qual post trouxe gente.
 */
export default function Baixar() {
  const [aparelho] = useState<Aparelho>(detectar);

  const destino =
    aparelho === "ios" ? URL_APP_STORE : aparelho === "android" ? URL_GOOGLE_PLAY : "";

  useEffect(() => {
    document.title = "Baixar o Blink";
    if (!destino) return;
    const busca = window.location.search;
    const separador = destino.includes("?") ? "&" : "?";
    const url = busca ? `${destino}${separador}${busca.slice(1)}` : destino;
    // `replace` para o botão voltar não cair de novo no redirecionamento.
    window.location.replace(url);
  }, [destino]);

  return (
    <>
      <Header enxuto />
      <section className="section">
        <div className="wrap" style={{ textAlign: "center", maxWidth: "46rem" }}>
          <h1 className="h-section tt">Baixar o Blink</h1>
          {destino ? (
            <p className="muted">
              Abrindo a loja do seu aparelho. Se nada acontecer, use os botões abaixo.
            </p>
          ) : (
            <p className="muted">
              O Blink está em revisão nas lojas. Assim que for aprovado, este endereço
              leva direto para o download no seu aparelho.
            </p>
          )}
          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center" }}>
            <StoreBadges />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
