import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import DeckCompartilhado from "@/pages/DeckCompartilhado";
import AutorCompartilhado from "@/pages/AutorCompartilhado";

/** Trocar de rota deve levar ao topo; âncora na mesma página, não. */
function RolarAoTrocarDeRota() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <RolarAoTrocarDeRota />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<Terms />} />
        {/* Links compartilhados pelo app. Os caminhos são em português porque
            quem os lê é gente no WhatsApp; quem traduz para a rota interna do
            app é `app/+native-intent.tsx`, lá no repositório do Blink. */}
        <Route path="/deck/:id" element={<DeckCompartilhado />} />
        <Route path="/autor/:id" element={<AutorCompartilhado />} />
        {/* Endereço desconhecido cai na landing em vez de uma tela em branco. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
