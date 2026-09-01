import { StoreBadges } from "@/components/StoreBadges";

export function DownloadCta() {
  return (
    <section className="section" id="baixar">
      <div className="wrap">
        <div className="cta reveal">
          <p className="eyebrow">Disponível agora</p>
          <h2 className="h-section tt">
            Baixe o Blink e <strong>transforme seu primeiro material hoje</strong>.
          </h2>
          <p className="lead" style={{ maxWidth: "52ch", marginInline: "auto" }}>
            Grátis para começar, com 300 gerações por IA todo mês. Sem cartão, sem período de teste
            que expira.
          </p>

          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
