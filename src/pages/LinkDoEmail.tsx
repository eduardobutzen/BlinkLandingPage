import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Quando o link de um e-mail do Blink (redefinir senha, confirmar conta) não
 * vale mais, a Supabase devolve a pessoa para a raiz do site com o motivo no
 * fragmento: `#error=access_denied&error_code=otp_expired&...`. Antes isso
 * deixava a página preta (ver `RolarAoTrocarDeRota`); agora explica o que
 * aconteceu e o que fazer.
 */
export function erroDoLink(hash: string): string | null {
  if (!hash.includes("error_code=") && !hash.includes("error=")) return null;
  return new URLSearchParams(hash.slice(1)).get("error_code") ?? "erro";
}

export default function LinkDoEmail({ codigo }: { codigo: string }) {
  const venceu = codigo === "otp_expired";

  useEffect(() => {
    document.title = venceu ? "Link vencido | Blink" : "Link inválido | Blink";
  }, [venceu]);

  return (
    <>
      <Header enxuto />
      <main id="conteudo" tabIndex={-1} className="section page-top">
        <div className="wrap">
          <div className="page-head page-head--center">
            <h1 className="t-section">
              {venceu ? "Esse link venceu" : "Esse link não funcionou"}
            </h1>
            <p className="lead">
              Os links que o Blink manda por e-mail valem por 1 hora e só uma vez.
              Peça um novo no app: na tela de entrar, toque em "Esqueci a senha".
            </p>
            <p className="lead">
              Abra o e-mail novo no celular onde o Blink está instalado e toque no
              link uma vez só. Ele abre o app direto.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
