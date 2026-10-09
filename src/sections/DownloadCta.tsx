import { StoreBadges } from "@/components/StoreBadges";

export function DownloadCta() {
  return (
    <section className="section" id="baixar">
      <div className="wrap">
        <div className="cta reveal">
          <h2 className="h-section tt">
            Baixe o Blink e <strong>estude hoje</strong>.
          </h2>
          <p className="lead">Grátis no iPhone e no Android.</p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
