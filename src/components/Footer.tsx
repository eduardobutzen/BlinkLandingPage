import { Link } from "react-router-dom";
import { BlinkMark } from "@/components/BlinkMark";
import { EMAIL_SUPORTE, URL_APP_STORE, URL_GOOGLE_PLAY } from "@/data/site";

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
            <p>Flashcards com IA e repetição espaçada, para iPhone e Android.</p>
          </div>

          <div className="footer__col">
            <h4>Baixar</h4>
            <ul>
              <li>
                {URL_APP_STORE ? (
                  <a href={URL_APP_STORE} target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                ) : (
                  <span className="muted">App Store (em breve)</span>
                )}
              </li>
              <li>
                {URL_GOOGLE_PLAY ? (
                  <a href={URL_GOOGLE_PLAY} target="_blank" rel="noopener noreferrer">
                    Google Play
                  </a>
                ) : (
                  <span className="muted">Google Play (em breve)</span>
                )}
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--wide">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href={`mailto:${EMAIL_SUPORTE}`}>{EMAIL_SUPORTE}</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/termos">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/privacidade">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Blink. Todos os direitos reservados.</span>
          <span>Feito no Brasil</span>
        </div>
      </div>
    </footer>
  );
}
