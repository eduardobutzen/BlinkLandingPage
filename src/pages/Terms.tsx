import { Scale } from "lucide-react";
import { LegalPage } from "@/pages/LegalPage";
import { TermsBody } from "@/pages/TermsBody";

export default function Terms() {
  return (
    <LegalPage
      titulo="Termos de Uso"
      escopo="Aplica-se ao aplicativo Blink (iOS e Android) e a este site."
      atualizacao="12 de outubro de 2026"
      Icone={Scale}
    >
      <TermsBody />
    </LegalPage>
  );
}
