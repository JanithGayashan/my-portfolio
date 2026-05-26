// src/components/Skills.tsx
"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Skills() {
  // Your real tech stack mapped with high-quality tech logos
  const skillsList = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  // Container motion configuration to stagger the card entrance beautifully
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <Reveal>
        {/* Modern styled title matching the reference theme */}
        <h2 className="text-4xl font-black text-white text-center mb-4 font-display uppercase tracking-widest">
          My Skills
        </h2>
        <p className="text-center text-gray-500 mb-16 text-sm sm:text-base font-mono">
          // Core technologies and architectures engineered in my terminal
        </p>

        {/* Dynamic Staggered Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 max-w-6xl mx-auto"
        >
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.03,
                borderColor: "rgba(139, 92, 246, 0.4)", // Glow border color matching your theme
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-surface rounded-2xl p-6 border border-gray-800/80 flex flex-col items-center justify-center min-h-[130px] group transition-all duration-300 shadow-lg hover:shadow-primary/5 cursor-default select-none"
            >
              {/* Subtle background glow effect on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Centered Vector Logo Container */}
              <div className="w-12 h-12 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} icon`} 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_4px_12px_rgba(139,92,246,0.3)] transition-all"
                  loading="lazy"
                />
              </div>

              {/* Title label that subtly appears brighter on hover */}
              <span className="mt-4 text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 font-display text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
          
          {/* Custom Artificial Intelligence Specializations Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.03, borderColor: "rgba(217, 70, 239, 0.4)" }}
            className="col-span-2 sm:col-span-3 md:col-span-2 bg-gradient-to-br from-surface to-background rounded-2xl p-6 border border-gray-800/80 flex flex-col justify-center min-h-[130px] group transition-all duration-300 shadow-lg hover:shadow-secondary/5"
          >
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-sm font-bold font-display uppercase tracking-wider mb-2">
              Advanced AI Frameworks
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-mono">
              LangGraph • LangChain • OpenAI Models • Scikit-Learn • Explainable AI (XAI)
            </p>
          </motion.div>
        </motion.div>
      </Reveal>
    </div>
  );
}