import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BlinkMark } from "@/components/BlinkMark";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#modos", rotulo: "Modos" },
  { href: "#progresso", rotulo: "Progresso" },
  { href: "#comunidade", rotulo: "Comunidade" },
  { href: "#depoimentos", rotulo: "Depoimentos" },
  { href: "#planos", rotulo: "Planos" },
  { href: "#faq", rotulo: "FAQ" },
];

/** `enxuto` é o cabeçalho das páginas legais: sem menu, com volta para a home. */
export function Header({ enxuto = false }: { enxuto?: boolean }) {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link className="brand" to="/" aria-label="Blink — início">
          <span className="brand__mark">
            <BlinkMark />
          </span>
          <span className="brand__word">Blink</span>
        </Link>

        {!enxuto && (
          <nav className="nav" aria-label="Seções da página">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.rotulo}
              </a>
            ))}
          </nav>
        )}

        <div className="header__actions">
          <ThemeToggle />
          {enxuto ? (
            <Link className="btn btn--ghost" to="/">
              Voltar ao site
            </Link>
          ) : (
            <a className="btn btn--solid" href="#lista-de-espera">
              Entrar na lista
              <ArrowRight className="arrow" size={16} strokeWidth={2.5} />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
