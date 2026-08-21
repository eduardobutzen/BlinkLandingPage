import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { EMAIL_SUPORTE } from "@/data/site";

export function WaitlistCta() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  /*
   * Sem backend ainda: abre o cliente de e-mail com a inscrição pronta.
   * Trocar por um POST para o provedor (Formspree, Buttondown, Supabase…)
   * quando o serviço estiver definido.
   */
  function inscrever(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const valor = email.trim();
    if (!valor.includes("@") || valor.startsWith("@")) {
      setMensagem("Digite um e-mail válido para entrar na lista.");
      return;
    }
    const assunto = encodeURIComponent("Lista de espera do Blink");
    const corpo = encodeURIComponent(
      `Quero avisar quando o Blink chegar nas lojas.\n\nE-mail: ${valor}`,
    );
    window.location.href = `mailto:${EMAIL_SUPORTE}?subject=${assunto}&body=${corpo}`;
    setMensagem("Abrimos seu e-mail com a inscrição pronta — é só enviar.");
    setEmail("");
  }

  return (
    <section className="section" id="lista-de-espera">
      <div className="wrap">
        <div className="cta reveal">
          <p className="eyebrow">Lançamento</p>
          <h2 className="h-section tt">
            O Blink está a caminho. <strong>Quer saber quando chegar?</strong>
          </h2>
          <p className="lead" style={{ maxWidth: "52ch", marginInline: "auto" }}>
            Deixe seu e-mail e avisamos no dia em que o app entrar na App Store e no Google Play.
            Nada além disso.
          </p>

          <form className="cta__form" onSubmit={inscrever} noValidate>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              aria-label="Seu e-mail"
              autoComplete="email"
              required
            />
            <button className="btn btn--solid" type="submit">
              Avise-me
              <ArrowRight className="arrow" size={16} strokeWidth={2.5} />
            </button>
          </form>
          <p className="form-msg" role="status" aria-live="polite">
            {mensagem}
          </p>
        </div>
      </div>
    </section>
  );
}
