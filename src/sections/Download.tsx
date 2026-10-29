import { StoreBadges } from "@/components/StoreBadges";
import { PLATAFORMAS } from "@/data/site";

/** Painel grande de download, com o ícone do app em destaque, fechando a página. */
export function Download() {
  return (
    <section className="section" id="baixar" aria-labelledby="baixar-titulo">
      <div className="wrap">
        <div className="download reveal">
          <img className="download__icone" src="/assets/brand/blink_icon_512.webp" alt="" width={512} height={512} loading="lazy" decoding="async" />
          <p className="eyebrow">Baixar</p>
          <h2 id="baixar-titulo" className="t-section tt">
            Baixe o Blink e <strong>estude hoje</strong>.
          </h2>
          <p className="lead">Grátis {PLATAFORMAS}.</p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
