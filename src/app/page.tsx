// src/app/page.tsx

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // We remove all padding and container logic from the main tag.
    // Each section will now be full-width.
    <main className="flex flex-col"> 
      <Navbar />

      {/* 
        Each section is now a full-screen container.
        - min-h-screen: Makes the section at least as tall as the screen.
        - flex, items-center, justify-center: Vertically and horizontally centers the content.
        - scroll-mt-24: Corrects the scroll position because of the sticky navbar.
      */}

      <section id="about" className="min-h-screen flex items-center justify-center scroll-mt-24">
        <About />
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center scroll-mt-24 bg-gray-800">
        <Experience />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center scroll-mt-24">
        <Skills />
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center scroll-mt-24 bg-gray-800">
        <Projects />
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}