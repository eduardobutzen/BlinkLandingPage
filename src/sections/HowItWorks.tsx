export function HowItWorks() {
  return (
    <>
      <section className="section" id="como-funciona">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Do material ao deck</p>
            <h2 className="h-section tt">Três passos, <strong>nenhuma configuração</strong>.</h2>
          </div>

          <div className="grid grid--3 reveal">
            <article className="card step">
              <span className="step__n">1</span>
              <h3 className="h-card">Envie o que você já tem</h3>
              <p className="muted">PDF, PowerPoint, Word, uma foto do caderno, um texto colado — ou só digite o tópico e deixe a IA levantar o conteúdo.</p>
              <p className="small muted">Até 25 MB e 80 páginas por arquivo. Passou disso, o Blink processa o que cabe e avisa.</p>
            </article>
            <article className="card step">
              <span className="step__n">2</span>
              <h3 className="h-card">A IA monta os cards</h3>
              <p className="muted">Perguntas e respostas saem do seu conteúdo, não de um resumo genérico da internet. Tabelas viram markdown e as notas do apresentador entram na conta.</p>
              <p className="small muted">Claude Sonnet 5 para documentos, Claude Haiku 4.5 para tópicos e correção.</p>
            </article>
            <article className="card step">
              <span className="step__n">3</span>
              <h3 className="h-card">Estude e esqueça o resto</h3>
              <p className="muted">A repetição espaçada agenda cada card. Você abre o app, revisa o que está devido e fecha.</p>
              <p className="small muted">Um lembrete diário avisa quantos cards estão esperando — o número real, não um empurrão genérico.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
