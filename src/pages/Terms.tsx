import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TermsBody } from "@/pages/TermsBody";

export default function Terms() {
  useEffect(() => {
    document.title = "Termos de Uso — Blink";
  }, []);

  return (
    <>
      <Header enxuto />
      <TermsBody />
      <Footer />
    </>
  );
}
