import { ShieldCheck } from "lucide-react";
import { LegalPage } from "@/pages/LegalPage";
import { PrivacyPolicyBody } from "@/pages/PrivacyPolicyBody";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      titulo="Política de Privacidade"
      escopo="Aplica-se ao aplicativo Blink (iOS e Android) e a este site."
      atualizacao="12 de outubro de 2026"
      Icone={ShieldCheck}
    >
      <PrivacyPolicyBody />
    </LegalPage>
  );
}
