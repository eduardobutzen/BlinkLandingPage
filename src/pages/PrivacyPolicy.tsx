import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyPolicyBody } from "@/pages/PrivacyPolicyBody";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de Privacidade — Blink";
  }, []);

  return (
    <>
      <Header enxuto />
      <PrivacyPolicyBody />
      <Footer />
    </>
  );
}
