export function Community() {
  return (
    <>
      <section className="section section--alt" id="comunidade">
        <div className="wrap">
          <div className="split">
            <div className="split__body reveal">
              <p className="eyebrow">Comunidade</p>
              <h2 className="h-section tt">Publique o seu deck <strong>nos seus termos</strong>.</h2>
              <p className="lead">Compartilhar não devia significar abrir mão. Ao publicar, você escolhe a licença —
                e ela é respeitada na hora do download.</p>
              <ul className="checklist">
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Descubra por <b>busca, tags e o que está em alta</b> na semana.</span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Avalie com <b>estrelas</b> e veja quantas vezes cada deck foi baixado.</span></li>
                <li><span className="tick" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10" /></svg></span><span>Baixe o deck de outra pessoa e <b>continue de onde ela parou</b>.</span></li>
              </ul>
            </div>

            <div className="split__media reveal">
              <figure className="shot">
                <img src="/assets/mockups/comunidade.webp" width="700" height="1422" loading="lazy" decoding="async" alt="Tela Comunidade do Blink: busca por concurso ou matéria, filtros por tag, decks em alta na semana com nota em estrelas e a lista dos mais bem avaliados." />
              </figure>
            </div>
          </div>

          <div className="grid grid--3 reveal" style={{ marginTop: '64px' }}>
            <article className="card">
              <span className="license__tag">Protegido</span>
              <h3 className="h-card">Baixar e estudar</h3>
              <p className="muted">Outras pessoas estudam o seu deck, mas não conseguem exportar em arquivo nem republicar.</p>
            </article>
            <article className="card">
              <span className="license__tag">Compartilhável</span>
              <h3 className="h-card">Baixar e exportar</h3>
              <p className="muted">Podem levar o deck para fora do app em arquivo, mas não publicar como se fosse deles.</p>
            </article>
            <article className="card">
              <span className="license__tag">Aberto</span>
              <h3 className="h-card">Adaptar e republicar</h3>
              <p className="muted">Liberado para exportar e publicar adaptações — sempre com o crédito de volta para você.</p>
            </article>
          </div>

          <div className="grid grid--3 reveal" style={{ marginTop: '20px' }}>
            <article className="card card--hi">
              <h3 className="h-card">Proveniência preservada</h3>
              <p className="muted">Deck adaptado mostra “Adaptado de …”. A origem não some no caminho.</p>
            </article>
            <article className="card card--hi">
              <h3 className="h-card">Cópia por snapshot</h3>
              <p className="muted">Quem baixou fica com a própria versão — editar o original não muda o deck de ninguém.</p>
            </article>
            <article className="card card--hi">
              <h3 className="h-card">Moderação de verdade</h3>
              <p className="muted">Denúncias têm fila e a remoção sai do ar no banco, não só na tela.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
