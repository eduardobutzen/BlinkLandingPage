import { useEffect, useState, type FormEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SUPABASE_URL = "https://ekgznmmkccqitbibtgja.supabase.co";
// A chave PUBLICÁVEL, a mesma de src/lib/preview.ts.
const SUPABASE_ANON_KEY = "sb_publishable_Hu3A963n1IUgziuMcxGp5Q_FecT39TO";
/** Igual ao `password_min_length` da Supabase e ao `MIN_PASSWORD` do app (10). */
const MIN_SENHA = 10;

/**
 * O link do e-mail "Redefina sua senha" devia abrir o app, mas quem o abre no
 * computador (ou num celular sem o app) chega aqui, na raiz do site, com a
 * sessão de recuperação no fragmento: `#access_token=...&type=recovery`.
 * Antes o site ignorava isso e a pessoa ficava sem como trocar a senha.
 */
export function tokenDeRecuperacao(hash: string): string | null {
  const p = new URLSearchParams(hash.slice(1));
  if (p.get("type") !== "recovery") return null;
  return p.get("access_token");
}

type Estado = "form" | "enviando" | "pronto" | "vencido";

export default function RedefinirSenha({ token }: { token: string }) {
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [estado, setEstado] = useState<Estado>("form");

  useEffect(() => {
    document.title = "Senha nova | Blink";
    // A chave dá acesso à conta: tira da barra de endereço e do histórico.
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  async function salvar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    if (senha.length < MIN_SENHA) return setErro(`A senha precisa ter pelo menos ${MIN_SENHA} caracteres.`);
    if (senha !== confirma) return setErro("As senhas não coincidem.");

    setEstado("enviando");
    try {
      const r = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: "PUT",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: senha }),
      });
      if (r.ok) return setEstado("pronto");
      const corpo = await r.json().catch(() => ({}));
      if (r.status === 401 || r.status === 403) return setEstado("vencido");
      setEstado("form");
      setErro(
        corpo.error_code === "same_password"
          ? "A senha nova precisa ser diferente da antiga."
          : corpo.error_code === "weak_password"
            ? "Essa senha é fácil de adivinhar. Tente outra."
            : "Não deu para trocar a senha. Tente de novo.",
      );
    } catch {
      setEstado("form");
      setErro("Sem conexão. Confira a internet e tente de novo.");
    }
  }

  return (
    <>
      <Header enxuto />
      <main id="conteudo" tabIndex={-1} className="section page-top">
        <div className="wrap">
          <div className="page-head page-head--center">
            {estado === "pronto" ? (
              <>
                <h1 className="t-section">Senha trocada</h1>
                <p className="lead">Volte ao Blink e entre com a senha nova.</p>
              </>
            ) : estado === "vencido" ? (
              <>
                <h1 className="t-section">Esse link venceu</h1>
                <p className="lead">
                  Peça um novo no app: na tela de entrar, toque em "Esqueci a senha".
                </p>
              </>
            ) : (
              <>
                <h1 className="t-section">Crie uma senha nova</h1>
                <form className="senha-form" onSubmit={salvar} noValidate>
                  <label className="campo">
                    <span>Senha nova</span>
                    <input
                      type="password"
                      autoComplete="new-password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder={`Mínimo ${MIN_SENHA} caracteres`}
                      autoFocus
                    />
                  </label>
                  <label className="campo">
                    <span>Repita a senha</span>
                    <input
                      type="password"
                      autoComplete="new-password"
                      value={confirma}
                      onChange={(e) => setConfirma(e.target.value)}
                    />
                  </label>
                  {erro && <p className="campo-erro" role="alert">{erro}</p>}
                  <button className="btn btn--solid btn--lg btn--block" disabled={estado === "enviando"}>
                    {estado === "enviando" ? "Salvando..." : "Salvar senha"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
