import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useHolofote } from "@/hooks/useHolofote";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { Tour } from "@/sections/Tour";
import { Comunidade } from "@/sections/Comunidade";
import { Progresso } from "@/sections/Progresso";
import { Download } from "@/sections/Download";
import { Faq } from "@/sections/Faq";

export default function Home() {
  useScrollReveal();
  useHolofote();

  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Tour />
        <Comunidade />
        <Progresso />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
