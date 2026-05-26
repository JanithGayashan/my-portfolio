// src/components/About.tsx
import Reveal from "./Reveal";

export default function About() {
  return (
    
    <div className="container px-4 text-center">
        <Reveal>
            <h2 className="text-4xl font-bold text-white text-center mb-8 font-display">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                I am an undergraduate specializing in Artificial Intelligence at the University of Moratuwa, with practical
                experience in AI and ML projects. Skilled in developing innovative solutions and collaborating effectively
                in teams, I am seeking opportunities to apply and expand my ML and AI development skills, embracing
                challenges for growth in the rapidly evolving field of AI.
            </p>
        </Reveal>
    </div>
  );
}