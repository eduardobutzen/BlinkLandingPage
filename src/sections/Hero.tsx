export function Hero() {
  return (
    <>
      <section className="section hero">
        <div className="wrap hero__inner">
          <h1 className="h-display tt">Seu material vira <strong>deck de flashcards</strong> em segundos.</h1>

          <div className="hero__cta">
            <div className="store-badges">
              <span className="store-badge" role="img" aria-label="App Store — em breve">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.2 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.2 1 8.3.7 1 1.6 2.1 2.6 2.1 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.7.7 1.1 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.2-2.4-.1 0-2.4-.9-2.4-3.2zM14.3 6.4c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" /></svg>
                <span>
                  <span className="s1">Baixe na</span>
                  <span className="s2">App Store</span>
                </span>
              </span>
              <span className="store-badge" role="img" aria-label="Google Play — em breve">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2L3.6 2.4zM16.1 15.4l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1-.1zM15.4 16.1 12.9 12l-9.2 9.2c.3.4.9.4 1.6 0l10.1-5.1zM15.4 7.9 5.3 2.8c-.7-.4-1.3-.4-1.6 0L12.9 12l2.5-4.1z" /></svg>
                <span>
                  <span className="s1">Disponível no</span>
                  <span className="s2">Google Play</span>
                </span>
              </span>
            </div>
            <p className="hero__note">Ainda não publicamos nas lojas. <a href="#lista-de-espera" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Avisamos você no dia</a>.</p>
          </div>

          {/* Leque de capturas reais do app */}
          <div className="mockup-fan" aria-label="Telas do aplicativo Blink">
            <figure className="shot">
              <img src="/assets/mockups/decks.webp" width="700" height="1422" loading="eager" decoding="async" alt="Tela Decks do Blink: lista de decks com capa, número de cards e quando cada um foi estudado." />
            </figure>
            <figure className="shot">
              <img src="/assets/mockups/inicio.webp" width="700" height="1422" loading="eager" decoding="async" fetchPriority="high" alt="Tela inicial do Blink: anel da meta diária em 25 de 60 cards, sequência de 2 dias e o botão Revisar 49 cards." />
            </figure>
            <figure className="shot">
              <img src="/assets/mockups/progresso.webp" width="700" height="1422" loading="eager" decoding="async" alt="Tela Progresso do Blink: patente Aprendiz no nível 3, heatmap de atividade, 271 cards estudados e 94% de acerto." />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
