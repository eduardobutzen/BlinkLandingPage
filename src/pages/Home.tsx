import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { Features } from "@/sections/Features";
import { Faq } from "@/sections/Faq";
import { DownloadCta } from "@/sections/DownloadCta";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <HowItWorks />
        <Features />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
