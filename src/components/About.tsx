import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20 text-center md:py-24">
      <Reveal>
        <h2 id="about-heading" className="section-heading mb-8">
          About Me
        </h2>
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
          <p>
            I am an undergraduate specializing in Artificial Intelligence at the{" "}
            {profile.education.institution}. My work brings together machine
            learning, agent workflows, and web development using Python,
            FastAPI, PyTorch, and Next.js.
          </p>
          <p>
            During my AI/ML engineering internship at Sri Lanka Telecom, I
            worked on agentic AI assistants and retrieval-augmented generation.
            I enjoy turning an idea into a working application and collaborating
            with others to solve practical problems.
          </p>
          <p>
            I am seeking opportunities in AI/ML and backend engineering where I
            can contribute and continue learning.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
