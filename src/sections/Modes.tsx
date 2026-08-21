export function Modes() {
  return (
    <>
      <section className="section section--alt" id="modos">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Quatro modos</p>
            <h2 className="h-section tt">O mesmo deck, <strong>cobrado de quatro jeitos</strong>.</h2>
            <p className="lead">Porque reconhecer a resposta é fácil demais quando você já viu o card umas dez vezes.</p>
          </div>

          <div className="grid grid--4 reveal">
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><rect x="3" y="6" width="14" height="12" rx="3" /><path d="M7 3.5h11a3 3 0 0 1 3 3V16" /></svg>
              </span>
              <h3 className="h-card">Flashcards</h3>
              <p className="muted">Vire o card e avalie a sua resposta. Botão ou swipe.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 13l2.4 2.4L15.8 10" /></svg>
              </span>
              <h3 className="h-card">Quiz</h3>
              <p className="muted">Múltipla escolha com alternativas suas ou geradas pela IA.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4l10.5-10.5a2.8 2.8 0 0 0-4-4L4 16z" /><path d="M14 6l4 4" /></svg>
              </span>
              <h3 className="h-card">Escrever</h3>
              <p className="muted">Você digita e a IA corrige por sentido, não por letra igual.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4" /><path d="M18 4l3 3-3 3M18 14l3 3-3 3" /></svg>
              </span>
              <h3 className="h-card">Misto</h3>
              <p className="muted">Flashcard e quiz intercalados: alternado 1 a 1 ou aleatório 50/50.</p>
            </article>
          </div>

          <p className="muted small reveal" style={{ marginTop: '24px', textAlign: 'center' }}>
            Toda sessão termina com acertos, tempo e taxa de acerto — e um cronômetro regressivo se você quiser pressão.
          </p>
        </div>
      </section>
    </>
  );
}
