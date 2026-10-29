import { Link } from "react-router-dom";
import { BlinkMark } from "@/components/BlinkMark";
import { EMAIL_SUPORTE, LINK_APP_STORE, URL_APP_STORE, URL_GOOGLE_PLAY } from "@/data/site";

function LinkDaLoja({ url, nome, externo = true }: { url: string; nome: string; externo?: boolean }) {
  // Loja sem URL ainda (Google Play antes do lançamento): aparece, sem link.
  if (!url) return <li><span className="footer__breve">{nome} (em breve)</span></li>;
  return (
    <li>
      {externo ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {nome}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      ) : (
        <Link to={url}>{nome}</Link>
      )}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="brand" to="/" aria-label="Blink, página inicial">
              <BlinkMark />
              <span className="brand__word" aria-hidden="true">Blink</span>
            </Link>
            <p>Flashcards com IA e repetição espaçada, para iPhone e Android.</p>
          </div>

          <nav className="footer__col" aria-labelledby="rodape-baixar">
            <h2 id="rodape-baixar">Baixar</h2>
            <ul>
              <LinkDaLoja url={LINK_APP_STORE} externo={Boolean(URL_APP_STORE)} nome="App Store" />
              <LinkDaLoja url={URL_GOOGLE_PLAY} nome="Google Play" />
            </ul>
          </nav>

          <nav className="footer__col" aria-labelledby="rodape-legal">
            <h2 id="rodape-legal">Legal</h2>
            <ul>
              <li><Link to="/termos">Termos de Uso</Link></li>
              <li><Link to="/privacidade">Política de Privacidade</Link></li>
            </ul>
          </nav>

          <div className="footer__col footer__col--contato">
            <h2>Contato</h2>
            <ul>
              <li><a href={`mailto:${EMAIL_SUPORTE}`}>{EMAIL_SUPORTE}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Blink. Todos os direitos reservados.</span>
          <span>Feito no Brasil</span>
        </div>
      </div>

      <p className="footer__word" aria-hidden="true">Blink</p>
    </footer>
  );
}
