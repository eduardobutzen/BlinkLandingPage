export function Progress() {
  return (
    <>
      <section className="section" id="progresso">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Hábito e progresso</p>
            <h2 className="h-section tt">Estude no ritmo certo, todo dia, <strong>sem planilha e sem culpa</strong>.</h2>
          </div>

          <div className="grid grid--2 reveal" style={{ alignItems: 'stretch' }}>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 7.4 14.1" /></svg>
              </span>
              <h3 className="h-card">Meta diária e sequência</h3>
              <p className="muted">Escolha de 10 a 150 cards por dia e acompanhe o anel fechar. A sequência conta os dias
                seguidos — com alerta opcional quando ela está prestes a cair.</p>
            </article>
            <article className="card">
              <span className="card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="6" height="6" rx="1.5" /><rect x="3" y="14" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /></svg>
              </span>
              <h3 className="h-card">Heatmap de atividade</h3>
              <p className="muted">Um ano inteiro de estudo em um quadro só, no estilo GitHub. Dá para ver de longe onde você sumiu.</p>
              <div className="heat" data-heat="big" style={{ marginTop: '20px', gap: '2px' }} aria-hidden="true"><i></i><i data-l="2"></i><i data-l="3"></i><i></i><i></i><i></i><i></i><i data-l="1"></i><i></i><i data-l="1"></i><i></i><i></i><i></i><i></i><i></i><i data-l="3"></i><i></i><i></i><i data-l="4"></i><i></i><i></i><i data-l="4"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i data-l="1"></i><i data-l="1"></i><i data-l="1"></i><i data-l="3"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i data-l="3"></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i></i><i></i><i data-l="1"></i><i></i><i></i><i data-l="4"></i><i></i><i data-l="3"></i><i></i><i></i><i></i><i></i><i data-l="3"></i><i data-l="3"></i><i></i><i></i><i data-l="4"></i><i></i><i data-l="1"></i><i data-l="3"></i><i></i><i></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="3"></i><i></i><i></i><i data-l="3"></i><i data-l="2"></i><i></i><i></i><i></i><i data-l="2"></i><i data-l="4"></i><i></i><i></i><i></i><i></i><i data-l="3"></i><i></i><i></i><i></i><i data-l="2"></i><i data-l="4"></i><i></i><i></i><i data-l="1"></i><i></i><i></i><i data-l="2"></i><i data-l="3"></i><i></i><i data-l="2"></i><i></i><i data-l="4"></i><i></i><i data-l="2"></i><i></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="1"></i><i></i><i></i><i data-l="1"></i><i data-l="3"></i><i data-l="4"></i><i></i><i data-l="2"></i><i></i><i data-l="1"></i><i></i><i></i><i></i><i></i><i></i><i data-l="1"></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="2"></i><i></i><i></i><i data-l="1"></i><i data-l="2"></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="4"></i><i></i><i></i><i></i><i></i><i data-l="2"></i><i data-l="2"></i><i data-l="2"></i><i></i><i data-l="4"></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="3"></i><i data-l="4"></i><i data-l="4"></i><i data-l="1"></i><i></i><i></i><i data-l="1"></i><i></i><i data-l="3"></i><i></i><i data-l="3"></i><i></i><i></i><i data-l="3"></i><i data-l="2"></i><i></i><i data-l="2"></i><i></i><i data-l="2"></i><i></i><i></i><i data-l="1"></i><i data-l="4"></i><i></i><i></i><i data-l="1"></i><i></i><i></i><i></i><i></i><i></i><i data-l="4"></i><i data-l="3"></i><i></i><i data-l="1"></i><i data-l="3"></i><i data-l="3"></i><i></i><i data-l="3"></i><i data-l="2"></i><i></i><i></i><i data-l="2"></i><i data-l="1"></i><i></i><i></i><i data-l="4"></i><i></i><i></i><i data-l="1"></i><i></i><i></i><i data-l="4"></i><i data-l="1"></i><i data-l="2"></i><i></i><i></i><i></i><i></i><i data-l="2"></i><i data-l="4"></i><i></i><i data-l="3"></i><i data-l="4"></i><i></i><i></i><i></i><i></i><i data-l="4"></i><i data-l="4"></i><i></i><i></i><i></i><i data-l="4"></i><i data-l="4"></i><i></i><i data-l="4"></i><i data-l="2"></i><i></i><i data-l="1"></i><i data-l="2"></i><i></i><i></i><i data-l="3"></i><i data-l="4"></i><i data-l="4"></i><i data-l="4"></i><i data-l="4"></i><i data-l="1"></i><i data-l="4"></i><i data-l="3"></i><i data-l="2"></i><i data-l="2"></i><i></i><i data-l="4"></i><i data-l="4"></i><i></i><i></i><i data-l="1"></i><i></i><i data-l="2"></i><i></i><i></i><i data-l="2"></i><i data-l="2"></i><i data-l="1"></i><i data-l="4"></i><i></i><i></i><i data-l="2"></i><i></i><i data-l="2"></i><i data-l="3"></i><i data-l="2"></i><i data-l="2"></i><i data-l="4"></i><i></i><i data-l="1"></i><i></i><i data-l="2"></i><i></i><i></i><i data-l="2"></i><i data-l="1"></i><i data-l="2"></i><i></i><i data-l="2"></i><i data-l="1"></i><i data-l="3"></i><i data-l="3"></i><i data-l="4"></i><i></i><i data-l="2"></i><i data-l="4"></i><i data-l="1"></i><i data-l="4"></i><i data-l="4"></i><i data-l="4"></i><i></i><i></i><i></i><i data-l="4"></i><i data-l="4"></i><i data-l="4"></i><i></i><i data-l="2"></i><i data-l="3"></i><i></i><i data-l="3"></i><i data-l="1"></i><i data-l="2"></i><i data-l="3"></i><i data-l="2"></i><i></i><i data-l="1"></i><i data-l="3"></i><i data-l="2"></i><i data-l="4"></i><i data-l="4"></i><i></i><i></i><i data-l="1"></i><i data-l="4"></i><i></i><i></i><i data-l="4"></i><i data-l="3"></i><i data-l="2"></i><i data-l="1"></i><i data-l="4"></i><i data-l="1"></i><i data-l="1"></i><i data-l="1"></i><i data-l="3"></i><i data-l="3"></i><i data-l="2"></i><i data-l="2"></i><i data-l="2"></i><i data-l="2"></i><i data-l="4"></i><i data-l="1"></i><i data-l="3"></i><i></i><i data-l="3"></i><i data-l="3"></i><i data-l="4"></i><i data-l="1"></i><i data-l="1"></i><i></i><i data-l="2"></i><i data-l="4"></i><i data-l="3"></i><i data-l="1"></i><i></i><i></i><i data-l="1"></i></div>
            </article>
          </div>

          <div className="card reveal" style={{ marginTop: '20px' }}>
            <div className="grid grid--2" style={{ gap: '40px', alignItems: 'center' }}>
              <div>
                <h3 className="h-card">XP, níveis e 7 patentes</h3>
                <p className="muted" style={{ marginTop: '12px' }}>Cada card revisado vale 1 XP e cada nível custa um pouco mais que o anterior.
                  No topo, duas patentes em dourado que ninguém alcança por acidente.</p>
                <div className="ranks" style={{ marginTop: '20px' }}>
                  <span className="rank">Iniciante</span><span className="sep">›</span>
                  <span className="rank">Aprendiz</span><span className="sep">›</span>
                  <span className="rank">Dedicado</span><span className="sep">›</span>
                  <span className="rank">Estudante</span><span className="sep">›</span>
                  <span className="rank">Erudito</span><span className="sep">›</span>
                  <span className="rank is-gold">Mestre</span><span className="sep">›</span>
                  <span className="rank is-gold">Lenda</span>
                </div>
              </div>
              <div>
                <h3 className="h-card">73 conquistas que você não perde</h3>
                <p className="muted" style={{ marginTop: '12px' }}>Todas são calculadas sobre o seu histórico completo: nenhuma expira, e as novas
                  desbloqueiam retroativamente pelo que você já fez.</p>
                <div className="badges" style={{ marginTop: '20px' }}>
                  <span className="badge-chip">🎉 Primeiro deck</span>
                  <span className="badge-chip">🪜 Primeiro degrau</span>
                  <span className="badge-chip">🧘 Uma hora na cadeira</span>
                  <span className="badge-chip">🥪 Sanduíche de estudo</span>
                  <span className="badge-chip">⚽ Hat-trick</span>
                  <span className="badge-chip">🐢 Devagar e sempre</span>
                  <span className="badge-chip is-gold">🐦‍🔥 Fênix</span>
                  <span className="badge-chip">🐍 Fera domada</span>
                  <span className="badge-chip">🧭 Semana completa</span>
                  <span className="badge-chip is-gold">🪐 Ano completo</span>
                  <span className="badge-chip">🐳 Deck baleia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
