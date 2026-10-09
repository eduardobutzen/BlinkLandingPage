const PASSOS = [
  {
    titulo: "Envie o material",
    texto: "Apostila em PDF, slides, Word, fotos ou só o assunto digitado.",
  },
  {
    titulo: "Estude com flashcards e quiz",
    texto: "Cada card vem com 4 alternativas, e o app agenda a hora certa de revisar.",
  },
  {
    titulo: "Errou? A IA explica",
    texto: "Você vê o porquê da resposta certa e conversa com a IA até entender.",
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Como funciona</p>
          <h2 className="h-section tt">
            Do material à revisão <strong>em três passos</strong>.
          </h2>
        </div>

        <ol className="steps reveal">
          {PASSOS.map((passo, i) => (
            <li className="step" key={passo.titulo}>
              <span className="step__n" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="h-card">{passo.titulo}</h3>
              <p className="muted">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
