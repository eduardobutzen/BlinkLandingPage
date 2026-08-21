export function Figures() {
  return (
    <>
      <section className="section section--alt">
        <div className="wrap split">
          <div className="split__body reveal">
            <p className="eyebrow">O diferencial</p>
            <h2 className="h-section tt">As figuras da sua apostila viram <strong>as imagens dos seus cards</strong>.</h2>
            <p className="lead">Um extrator próprio abre o arquivo, recorta cada ilustração com posição e legenda,
              e um ranking escolhe as que valem virar card. Você só confirma.</p>
            <ul className="checklist">
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Você decide.</b> Material só de texto pula essa etapa inteira.</span></li>
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Legenda preservada.</b> A figura chega ao card com o contexto que ela tinha no original.</span></li>
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Até 60 figuras</b> aprovadas por material, ranqueadas pela relevância.</span></li>
              <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span><b>Tabelas e notas do slide</b> entram junto, sem virar bloco de texto ilegível.</span></li>
            </ul>
          </div>

          <div className="split__media reveal">
            <div className="card card--hi" style={{ width: '100%', maxWidth: '420px' }}>
              <p className="eyebrow">O que o extrator devolve</p>
              <ul className="checklist" style={{ marginTop: '20px', gap: '0' }}>
                <li style={{ display: 'block', borderBottom: '1px solid var(--line-soft)', paddingBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Figura 4 · pág. 12</b><span className="small">curva de dose-resposta</span>
                  </div>
                </li>
                <li style={{ display: 'block', borderBottom: '1px solid var(--line-soft)', padding: '14px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Figura 7 · pág. 19</b><span className="small">esquema do arco reflexo</span>
                  </div>
                </li>
                <li style={{ display: 'block', borderBottom: '1px solid var(--line-soft)', padding: '14px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Tabela 2 · pág. 21</b><span className="small">convertida em markdown</span>
                  </div>
                </li>
                <li style={{ display: 'block', paddingTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
                    <b>Notas do slide 14</b><span className="small">entram no verso do card</span>
                  </div>
                </li>
              </ul>
              <p className="small muted" style={{ marginTop: '20px' }}>Cada item vem com a página de origem. O que você aprovar
                vira imagem de card; o resto é descartado.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
