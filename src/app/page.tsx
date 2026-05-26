// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (    
    <main className="flex flex-col bg-background selection:bg-primary/30 selection:text-secondary"> 
      <Navbar />    
            
      <section id="home" className="min-h-screen w-full flex items-center justify-center">
        <Hero />
      </section>

      <section id="about" className="min-h-screen w-full flex items-center justify-center scroll-mt-24">
        <About />
      </section>

      <section id="experience" className="min-h-screen w-full flex items-center justify-center scroll-mt-24 bg-surface/30">
        <Experience />
      </section>

      <section id="skills" className="min-h-screen w-full flex items-center justify-center scroll-mt-24">
        <Skills />
      </section>
      
      <section id="projects" className="min-h-screen w-full flex items-center justify-center scroll-mt-24 bg-surface/30">
        <Projects />
      </section>
      
      <section id="contact" className="min-h-screen w-full flex items-center justify-center scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}