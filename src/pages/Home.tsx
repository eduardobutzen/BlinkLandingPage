import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { Plans } from "@/sections/Plans";
import { Faq } from "@/sections/Faq";
import { DownloadCta } from "@/sections/DownloadCta";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Features />
        <Testimonials />
        <Plans />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
