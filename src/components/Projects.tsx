// src/components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const portfolioProjects = [
    {
      title: "AI-Powered Website Builder",
      description: "Full-Stack LLM Orchestration generating web code from chat intent.",
      tag: "WEB SYSTEM",
      demo: "/projects/website-builder", // Updated to a real route
      github: "https://github.com/JanithGayashan",
      image: "/project-builder.jpg", 
    },
    {
      title: "GAB-Net Research",
      description: "Explainable imitation learning architecture for autonomous driving.",
      tag: "ML RESEARCH",
      demo: "/projects/gab-net", // Updated to a real route
      github: "https://github.com/JanithGayashan",
      image: "/project-gabnet.jpg", 
    },
    {
      title: "Agentic AI Assistant",
      description: "Enterprise multi-agent workflow for classification and RAG access.",
      tag: "AI WORKFLOW",
      demo: "/projects/ai-assistant", // Updated to a real route
      github: "https://github.com/JanithGayashan",
      image: "/project-slt.jpg", 
    }
  ];

  return (
    <div id="projects" className="container mx-auto px-6 py-24">
        <Reveal>
            <h2 className="text-4xl font-black text-white text-center mb-16 font-display uppercase tracking-widest">
                My Projects
            </h2>

            {/* 3-Column Grid Layout matching the video */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {portfolioProjects.map((project, idx) => (
                    <motion.div 
                        key={idx} 
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
                            {/* Uncomment the Image component once your images are in the public folder */}
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
            </div>
        </Reveal>
    </div>
  );
}