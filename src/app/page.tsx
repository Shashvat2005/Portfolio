import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";
import CompetitiveProgramming from "@/components/sections/CodingProfiles";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative bg-black">

        <Hero />

        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Experience />
        </FadeIn>

        <FadeIn>
          <Projects />
        </FadeIn>

        <FadeIn>
          <CompetitiveProgramming />
        </FadeIn>

        <FadeIn>
          <Skills />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>

      </main>

      <Footer />
    </>
  );
}