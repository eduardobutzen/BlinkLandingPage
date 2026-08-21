import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { Numbers } from "@/sections/Numbers";
import { Problem } from "@/sections/Problem";
import { HowItWorks } from "@/sections/HowItWorks";
import { Figures } from "@/sections/Figures";
import { SpacedRepetition } from "@/sections/SpacedRepetition";
import { Modes } from "@/sections/Modes";
import { Progress } from "@/sections/Progress";
import { Community } from "@/sections/Community";
import { Testimonials } from "@/sections/Testimonials";
import { Plans } from "@/sections/Plans";
import { Faq } from "@/sections/Faq";
import { WaitlistCta } from "@/sections/WaitlistCta";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Numbers />
        <Problem />
        <HowItWorks />
        <Figures />
        <SpacedRepetition />
        <Modes />
        <Progress />
        <Community />
        <Testimonials />
        <Plans />
        <Faq />
        <WaitlistCta />
      </main>
      <Footer />
    </>
  );
}
