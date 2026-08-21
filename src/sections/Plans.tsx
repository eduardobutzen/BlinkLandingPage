export function Plans() {
  return (
    <>
      <section className="section section--alt" id="planos">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Planos</p>
            <h2 className="h-section tt">Comece de graça. <strong>Sem cartão, sem pegadinha.</strong></h2>
          </div>

          <div className="plans reveal">
            <article className="card plan">
              <h3 className="h-card">Free</h3>
              <p className="plan__price">R$ 0<sub> / para sempre</sub></p>
              <ul className="checklist">
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>300 gerações por IA</b> a cada mês</span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Decks e cards <b>sem limite</b> criados por você</span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Os <b>4 modos de prática</b> e a repetição espaçada</span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Comunidade, conquistas e sincronização entre aparelhos</span></li>
              </ul>
              <div className="plan__foot">
                <a className="btn btn--ghost" href="#lista-de-espera">Quero ser avisado</a>
              </div>
            </article>

            <article className="card plan plan--pro">
              <h3 className="h-card">Pro</h3>
              <p className="plan__price">Em breve<sub> · preço a definir</sub></p>
              <ul className="checklist">
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Tudo do Free, com <b>folga de sobra nas gerações por IA</b></span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Pensado para <b>semestre inteiro de material</b> em vez de uma aula</span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Quem estiver na lista de espera <b>fica sabendo antes</b></span></li>
              </ul>
              <div className="plan__foot">
                <a className="btn btn--solid" href="#lista-de-espera" style={{ background: 'var(--on-invert)', color: 'var(--invert)' }}>Entrar na lista</a>
              </div>
            </article>
          </div>

          <p className="small muted reveal" style={{ textAlign: 'center', marginTop: '24px' }}>
            O limite de gerações é verificado no servidor — nunca no aparelho.
          </p>
        </div>
      </section>
    </>
  );
}
