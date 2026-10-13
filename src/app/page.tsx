// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-col bg-background selection:bg-primary/30 selection:text-secondary"
      >
        <section
          id="home"
          tabIndex={-1}
          aria-labelledby="home-heading"
          className="w-full scroll-mt-20"
        >
          <Hero />
        </section>

        <section
          id="about"
          tabIndex={-1}
          aria-labelledby="about-heading"
          className="w-full scroll-mt-20"
        >
          <About />
        </section>

        <section
          id="experience"
          tabIndex={-1}
          aria-labelledby="experience-heading"
          className="w-full scroll-mt-20 bg-surface/30"
        >
          <Experience />
        </section>

        <section
          id="skills"
          tabIndex={-1}
          aria-labelledby="skills-heading"
          className="w-full scroll-mt-20"
        >
          <Skills />
        </section>

        <section
          id="projects"
          tabIndex={-1}
          aria-labelledby="projects-heading"
          className="w-full scroll-mt-20 bg-surface/30"
        >
          <Projects />
        </section>

        <section
          id="contact"
          tabIndex={-1}
          aria-labelledby="contact-heading"
          className="w-full scroll-mt-20"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
