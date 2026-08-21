export function Problem() {
  return (
    <>
      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">O problema</p>
            <h2 className="h-section tt">Seu PDF de 60 páginas <strong>não estuda sozinho</strong>.</h2>
            <p className="lead">Você já tem o material certo. O que falta é o trabalho chato que fica entre ele e a revisão.</p>
          </div>

          <div className="grid grid--3 reveal">
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
              </span>
              <h3 className="h-card">Digitar card é mais lento que estudar</h3>
              <p className="muted">Uma apostila inteira vira horas de copiar e colar antes da primeira revisão — e aí o ânimo já foi.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.5h3.4l.5 2.4 2.1 1.2 2.3-.8 1.7 3-1.8 1.6v2.2l1.8 1.6-1.7 3-2.3-.8-2.1 1.2-.5 2.4h-3.4l-.5-2.4-2.1-1.2-2.3.8-1.7-3 1.8-1.6v-2.2L3.7 9.3l1.7-3 2.3.8 2.1-1.2z" /><circle cx="12" cy="12" r="2.6" /></svg>
              </span>
              <h3 className="h-card">Configurar o Anki vira projeto paralelo</h3>
              <p className="muted">Add-ons, perfis, quatro botões de avaliação. Poder de sobra para quem só quer revisar direito.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="3" /><path d="M3 15.5l4.5-4.5 4 4 3-3L21 17" /><circle cx="8.5" cy="9" r="1.6" /></svg>
              </span>
              <h3 className="h-card">As figuras ficam para trás</h3>
              <p className="muted">Gráfico, esquema, corte anatômico: é o que mais cai na prova e o que nenhum gerador de cards leva junto.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
