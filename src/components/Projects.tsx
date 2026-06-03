// src/components/Projects.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // Track whether the grid is expanded to show all projects
  const [showAll, setShowAll] = useState(false);

  const portfolioProjects = [
    {
      title: "AI-Powered Website Builder",
      description: "Full-Stack LLM Orchestration generating web code from chat intent.",
      tag: "WEB SYSTEM",
      demo: "/projects/website-builder", 
      github: "https://github.com/JanithGayashan",
      image: "/project-builder.jpg", 
    },
    {
      title: "GAB-Net Research",
      description: "Explainable imitation learning architecture for autonomous driving.",
      tag: "ML RESEARCH",
      demo: "/projects/gab-net", 
      github: "https://github.com/JanithGayashan",
      image: "/project-gabnet.jpg", 
    },
    {
      title: "Agentic AI Assistant",
      description: "Enterprise multi-agent workflow for classification and RAG access.",
      tag: "AI WORKFLOW",
      demo: "/projects/ai-assistant", 
      github: "https://github.com/JanithGayashan",
      image: "/project-slt.jpg",
    },
    {
      title: "Loan Approval System",
      description: "Decision Tree Classifier deployed via FastAPI with standard scaled features.",
      tag: "LIVE ML DEMO",
      demo: "/projects/loan-predictor", 
      github: "https://github.com/JanithGayashan",
      image: "/project-loan.jpg", 
    }
  ];

  // Slice the array dynamically: show only 3 if not expanded, otherwise show all
  const visibleProjects = showAll ? portfolioProjects : portfolioProjects.slice(0, 3);

  return (
    <div id="projects" className="container mx-auto px-6 py-24">
      <Reveal>
        <h2 className="text-4xl font-black text-white text-center mb-16 font-display uppercase tracking-widest">
          My Projects
        </h2>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div 
                key={project.title} 
                layout // Smoothly re-animates grid positions when elements appear
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-surface border border-gray-800 rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              >
                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
                    {project.description}
                  </p>
                </div>

                {/* Central Image Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-background border border-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs z-0">
                    [Screenshot: {project.image}]
                  </div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition duration-700 z-10"
                  />
                </div>

                {/* Bottom Actions Row */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800/50">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">
                    {project.tag}
                  </span>
                  
                  <Link 
                    href={project.demo} 
                    className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300"
                  >
                    View 
                    <span className="text-lg leading-none">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Toggle Button */}
        {portfolioProjects.length > 3 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-gray-700 hover:border-primary/50 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:bg-surface cursor-pointer font-display uppercase tracking-wider text-sm"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </Reveal>
    </div>
  );
}