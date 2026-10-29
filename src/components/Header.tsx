import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { BlinkMark } from "@/components/BlinkMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#comunidade", rotulo: "Comunidade" },
  { href: "#progresso", rotulo: "Progresso" },
  { href: "#faq", rotulo: "Perguntas" },
];

function Marca({ aoClicar }: { aoClicar?: () => void }) {
  return (
    <Link className="brand" to="/" aria-label="Blink, página inicial" onClick={aoClicar}>
      <BlinkMark />
      <span className="brand__word" aria-hidden="true">Blink</span>
    </Link>
  );
}

/**
 * Header flutuante e fixo. Na home, o menu do celular é um <dialog> modal:
 * `showModal()` deixa o resto da página inerte e prende o foco nele; Escape e
 * o clique fora fecham, e o foco volta ao botão que abriu.
 * `enxuto` é o header das páginas internas: sem menu, com volta para a home.
 */
export function Header({ enxuto = false }: { enxuto?: boolean }) {
  const menuRef = useRef<HTMLDialogElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const [aberto, setAberto] = useState(false);

  const abrir = () => {
    menuRef.current?.showModal();
    document.documentElement.classList.add("menu-aberto");
    setAberto(true);
  };
  const fechar = () => menuRef.current?.close();

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const aoFechar = () => {
      document.documentElement.classList.remove("menu-aberto");
      setAberto(false);
      botaoRef.current?.focus();
    };
    menu.addEventListener("close", aoFechar);
    // Se a tela crescer até o desktop com o menu aberto, ele não faz mais sentido.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const aoMudar = () => desktop.matches && menu.open && menu.close();
    desktop.addEventListener("change", aoMudar);
    return () => {
      menu.removeEventListener("close", aoFechar);
      desktop.removeEventListener("change", aoMudar);
      document.documentElement.classList.remove("menu-aberto");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className={cn("header", enxuto && "header--enxuto")}>
        <div className="header__bar">
          <Marca />

          {!enxuto && (
            <nav className="nav" aria-label="Seções da página">
              {NAV.map((item) => (
                <a key={item.href} href={item.href}>{item.rotulo}</a>
              ))}
            </nav>
          )}

          <div className="header__actions">
            <span className="header__theme"><ThemeToggle /></span>
            {enxuto ? (
              <Link className="btn btn--ghost btn--sm" to="/">Voltar ao site</Link>
            ) : (
              <>
                <a className="btn btn--solid btn--sm" href="#baixar">
                  Baixar o app
                  <ArrowRight className="btn__icon btn__icon--move" size={16} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <button
                  ref={botaoRef}
                  type="button"
                  className="icon-btn header__menu"
                  aria-label="Abrir menu"
                  aria-haspopup="dialog"
                  aria-expanded={aberto}
                  aria-controls="menu"
                  onClick={abrir}
                >
                  <Menu size={18} strokeWidth={2.25} aria-hidden="true" />
                </button>
              </>
            )}
          </div>
          {/* Quanto da página já foi lido; anima pela rolagem, sem JS. */}
          {!enxuto && <span className="header__progresso" aria-hidden="true" />}
        </div>
      </header>

      {!enxuto && (
        <dialog
          ref={menuRef}
          id="menu"
          className="menu"
          aria-label="Menu"
          // Clique no fundo (fora do conteúdo) cai no próprio <dialog>.
          onClick={(e) => e.target === e.currentTarget && fechar()}
        >
          <div className="menu__top">
            <Marca aoClicar={fechar} />
            <div className="header__actions">
              <ThemeToggle />
              <button type="button" className="icon-btn" aria-label="Fechar menu" onClick={fechar}>
                <X size={18} strokeWidth={2.25} aria-hidden="true" />
              </button>
            </div>
          </div>
          <nav className="menu__nav" aria-label="Seções da página">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={fechar}>
                {item.rotulo}
                <ArrowRight size={20} strokeWidth={2} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="menu__foot">
            <a className="btn btn--solid btn--block" href="#baixar" onClick={fechar}>
              Baixar o app
              <ArrowRight className="btn__icon" size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </dialog>
      )}
    </>
  );
}
