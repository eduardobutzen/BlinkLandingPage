/*
 * Seção única de recursos. Substitui as antigas Problem, Figures,
 * SpacedRepetition, Modes, Progress e Community: cada uma virou um card
 * com o essencial da função, sem a página inteira de argumentação.
 */
export function Features() {
  return (
    <section className="section section--alt" id="recursos">
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">O que o app faz</p>
          <h2 className="h-section tt">
            Tudo que você precisa para <strong>estudar e não esquecer</strong>.
          </h2>
        </div>

        <div className="grid grid--3 reveal">
          <article className="card">
            <span className="card__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4" /><path d="M8 8l4-4 4 4" /><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /></svg>
            </span>
            <h3 className="h-card">Seu material vira deck</h3>
            <p className="muted">
              Envie o que você já tem e a IA escreve as perguntas a partir do seu conteúdo — não de
              um resumo genérico da internet.
            </p>
            <div className="badges">
              <span className="badge-chip">PDF</span>
              <span className="badge-chip">PowerPoint</span>
              <span className="badge-chip">Word</span>
              <span className="badge-chip">Foto</span>
              <span className="badge-chip">Texto</span>
              <span className="badge-chip">Tópico</span>
            </div>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="3" /><path d="M3 15.5l4.5-4.5 4 4 3-3L21 17" /><circle cx="8.5" cy="9" r="1.6" /></svg>
            </span>
            <h3 className="h-card">As figuras vêm junto</h3>
            <p className="muted">
              Gráficos, esquemas e cortes anatômicos são recortados da apostila com a legenda
              original e viram imagem de card. Você só aprova o que vale.
            </p>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><rect x="3" y="6" width="14" height="12" rx="3" /><path d="M7 3.5h11a3 3 0 0 1 3 3V16" /></svg>
            </span>
            <h3 className="h-card">Quatro modos de prática</h3>
            <p className="muted">
              O mesmo deck cobrado de jeitos diferentes, porque reconhecer a resposta é fácil demais
              depois da décima vez.
            </p>
            <div className="badges">
              <span className="badge-chip">Flashcards</span>
              <span className="badge-chip">Quiz</span>
              <span className="badge-chip">Escrever</span>
              <span className="badge-chip">Misto</span>
            </div>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
            </span>
            <h3 className="h-card">Repetição espaçada</h3>
            <p className="muted">
              O algoritmo SM-2 agenda cada card sozinho. Você só responde <em>Errei</em> ou{" "}
              <em>Entendi</em> — o que errou volta na mesma sessão, o que dominou sai do rodízio.
            </p>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 7.4 14.1" /></svg>
            </span>
            <h3 className="h-card">Meta diária e progresso</h3>
            <p className="muted">
              Meta de 10 a 150 cards por dia, sequência de dias seguidos, heatmap de um ano inteiro,
              XP com 7 patentes e 73 conquistas que nunca expiram.
            </p>
          </article>

          <article className="card">
            <span className="card__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 19c0-3 2.7-4.8 6-4.8s6 1.8 6 4.8" /><path d="M16 5.4a3.2 3.2 0 0 1 0 5.2M18.5 14.6c1.7.8 2.5 2.3 2.5 4.4" /></svg>
            </span>
            <h3 className="h-card">Comunidade de decks</h3>
            <p className="muted">
              Publique o seu deck escolhendo a licença e baixe o de outra pessoa continuando de onde
              ela parou. O crédito de origem sempre volta para quem criou.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
