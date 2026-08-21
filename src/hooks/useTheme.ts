import { useCallback, useEffect, useState } from "react";

type Tema = "light" | "dark";
const CHAVE = "blink-theme";

function temaDoSistema(): Tema {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function temaAtual(): Tema {
  const carimbado = document.documentElement.getAttribute("data-theme");
  return carimbado === "dark" ? "dark" : "light";
}

function aplicar(tema: Tema) {
  const raiz = document.documentElement;
  raiz.setAttribute("data-theme", tema);
  // O Tailwind lê a variante `dark:` do mesmo atributo, mas a classe ajuda
  // bibliotecas de terceiros que só entendem `.dark`.
  raiz.classList.toggle("dark", tema === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", tema === "dark" ? "#000000" : "#e2e2df");
}

/** Tema claro/escuro, iniciado pelo script inline do index.html. */
export function useTheme() {
  const [tema, setTema] = useState<Tema>(() =>
    typeof document === "undefined" ? "light" : temaAtual(),
  );

  useEffect(() => {
    aplicar(tema);
  }, [tema]);

  // Acompanha o sistema enquanto a pessoa não escolheu manualmente.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const aoMudar = () => {
      let salvo: string | null = null;
      try {
        salvo = localStorage.getItem(CHAVE);
      } catch {
        /* modo privado bloqueia o acesso; seguir com o tema do sistema */
      }
      if (!salvo) setTema(temaDoSistema());
    };
    mq.addEventListener("change", aoMudar);
    return () => mq.removeEventListener("change", aoMudar);
  }, []);

  const alternar = useCallback(() => {
    setTema((anterior) => {
      const proximo: Tema = anterior === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(CHAVE, proximo);
      } catch {
        /* sem persistência: a escolha vale só para esta sessão */
      }
      return proximo;
    });
  }, []);

  return { tema, alternar };
}
