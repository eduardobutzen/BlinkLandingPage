import { Link } from "react-router-dom";
import { BlinkMark } from "@/components/BlinkMark";
import { EMAIL_SUPORTE } from "@/data/site";

const PRODUTO = [
  { href: "/#recursos", rotulo: "Recursos" },
  { href: "/#depoimentos", rotulo: "Depoimentos" },
  { href: "/#planos", rotulo: "Planos" },
  { href: "/#faq", rotulo: "FAQ" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="brand" to="/">
              <span className="brand__mark">
                <BlinkMark />
              </span>
              <span className="brand__word">Blink</span>
            </Link>
            <p>
              Flashcards com repetição espaçada, feitos a partir do seu próprio material.
              Disponível para iOS e Android.
            </p>
          </div>

          <div className="footer__col">
            <h4>Produto</h4>
            <ul>
              {PRODUTO.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.rotulo}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/privacidade">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/termos">Termos de Uso</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Suporte</h4>
            <ul>
              <li>
                <a href={`mailto:${EMAIL_SUPORTE}`}>{EMAIL_SUPORTE}</a>
              </li>
              <li>
                <a href="/#faq">Perguntas frequentes</a>
              </li>
              <li>
                <a href="/#baixar">Baixar o app</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Blink. Todos os direitos reservados.</span>
          <span>Feito no Brasil · versão 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
