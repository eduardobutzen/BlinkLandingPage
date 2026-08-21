export function Privacy() {
  return (
    <>
      <section className="section" id="privacidade">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Privacidade</p>
            <h2 className="h-section tt">Seu material é seu. <strong>Isso está no banco, não no marketing.</strong></h2>
          </div>

          <div className="grid grid--4 reveal">
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 3l7.5 3v6c0 4.5-3 8.1-7.5 9.5C7.5 20.1 4.5 16.5 4.5 12V6z" /></svg>
              </span>
              <h3 className="h-card">Row Level Security</h3>
              <p className="muted">Todas as tabelas têm RLS: cada conta só alcança os próprios dados, no nível do banco.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="8" cy="12" r="4" /><path d="M12 12h9M17.5 12v3.5M20.5 12v2.5" /></svg>
              </span>
              <h3 className="h-card">Chave da IA no servidor</h3>
              <p className="muted">Nenhum segredo viaja no aplicativo. As chaves ficam nas Edge Functions, fora do bundle.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13" /></svg>
              </span>
              <h3 className="h-card">Exclusão dentro do app</h3>
              <p className="muted">Apagar a conta é um botão, e o apagamento é de ponta a ponta — como a Apple exige.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V8M12 8l-3 3M12 8l3 3" /><path d="M4.5 15A4 4 0 0 1 6 7.4a5.5 5.5 0 0 1 10.6-.7A4.2 4.2 0 0 1 19.5 15" /></svg>
              </span>
              <h3 className="h-card">Dito com todas as letras</h3>
              <p className="muted">O material enviado é processado por IA de terceiros (Anthropic e Google). Está escrito na política, sem letra miúda.</p>
            </article>
          </div>

          <p className="reveal" style={{ textAlign: 'center', marginTop: '32px' }}>
            <a className="btn btn--ghost" href="/privacidade">
              Ler a Política de Privacidade
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
