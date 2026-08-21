export function SpacedRepetition() {
  return (
    <>
      <section className="section">
        <div className="wrap split split--rev">
          <div className="split__body reveal">
            <p className="eyebrow">Repetição espaçada</p>
            <h2 className="h-section tt">Diga só se acertou ou errou. <strong>O Blink decide quando você revisa.</strong></h2>
            <p className="lead">O mesmo algoritmo SM-2 que sustenta o Anki, com a decisão reduzida ao que você
              realmente consegue responder no automático: <em>Errei</em> ou <em>Entendi</em> — no botão ou no swipe.</p>
            <ul className="checklist">
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Errou, volta na mesma sessão</b> — e ainda é reagendado para os próximos dias.</span></li>
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Cada card tem seu intervalo</b>, com ease factor e data de próxima revisão próprios.</span></li>
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>O que você dominou sai do rodízio</b> e para de ocupar espaço na sessão.</span></li>
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Cronômetro opcional</b> de 5 a 60 minutos, com alerta em âmbar a 1 min e vermelho a 10 s.</span></li>
            </ul>
          </div>

          <div className="split__media reveal">
            <div className="card card--hi" style={{ width: '100%', maxWidth: '420px' }}>
              <p className="eyebrow">Um card, ao longo do tempo</p>
              <ul className="checklist" style={{ marginTop: '20px', gap: '0' }}>
                <li style={{ display: 'block', borderBottom: '1px solid var(--line-soft)', paddingBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Hoje</b><span className="small">Errei · volta em 10 min</span>
                  </div>
                </li>
                <li style={{ display: 'block', borderBottom: '1px solid var(--line-soft)', padding: '14px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Amanhã</b><span className="small">Entendi · volta em 3 dias</span>
                  </div>
                </li>
                <li style={{ display: 'block', borderBottom: '1px solid var(--line-soft)', padding: '14px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Em 3 dias</b><span className="small">Entendi · volta em 9 dias</span>
                  </div>
                </li>
                <li style={{ display: 'block', paddingTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Em 12 dias</b><span className="small">Entendi · dominado</span>
                  </div>
                </li>
              </ul>
              <p className="small muted" style={{ marginTop: '20px' }}>Você não escolhe o intervalo. Só responde.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
