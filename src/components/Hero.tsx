// src/components/Hero.tsx
"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; // Added Next.js Image component
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

// Native Typewriter implementation engineered for React 19 stability
function TypewriterEffect() {
  const words = ['Machine Learning Systems', 'Agentic AI Workflows', 'Computer Vision Systems', 'FastAPI Backend Architectures', 'LangGraph Solutions'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTypingSpeed(2000); // Wait at full word
          setIsDeleting(true);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500); // Pause before next word
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary min-h-[40px] block">
      {currentText}
      <span className="text-secondary animate-pulse ml-1">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      
      {/* Dynamic Ambient Gradient Blob Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-full blur-[100px] md:blur-[160px] animate-pulse -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full">
        
        {/* Left Layout Container: Technical Titles */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 text-left flex flex-col justify-center"
        >
          <h2 className="text-secondary font-bold text-sm sm:text-base mb-4 tracking-widest uppercase font-display">
            ⚡ AI Engineer
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-display leading-tight">
            Janith Gayashan
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-[40px]">
            <TypewriterEffect />
          </div>

          <p className="text-gray-400 max-w-xl text-base sm:text-lg mb-8 leading-relaxed">
            Specializing in scalable intelligence, multi-agent frameworks, and high-performance backend pipelines. Transforming algorithmic concepts into production systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to="projects" 
              smooth={true} 
              offset={-80} 
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-xl font-bold cursor-pointer hover:opacity-90 transition shadow-lg shadow-primary/20 text-center w-full sm:w-auto"
            >
              View System Architecture
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              offset={-80} 
              className="border border-gray-700 text-white px-8 py-3.5 rounded-xl font-bold cursor-pointer hover:bg-surface transition text-center w-full sm:w-auto"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
<div className="flex items-center gap-6 mt-8">
    <a 
        href="https://github.com/JanithGayashan" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
    >
        <FaGithub size={28} />
    </a>
    
    <a 
        href="https://www.linkedin.com/in/janith-gayashan/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-secondary transition-colors duration-300 transform hover:scale-110"
    >
        <FaLinkedin size={28} />
    </a>

    <a 
        href="https://www.kaggle.com/janithgayashan" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
    >
        <FaKaggle size={26} /> 
    </a>

    <a 
        href="https://huggingface.co/JanithGayashan" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-secondary transition-colors duration-300 transform hover:scale-110"
    >
        <SiHuggingface size={28} />
    </a>
</div>
        </motion.div>

        {/* Right Layout Container: Cyber Glass Profile Silhouette Frame */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Outer Glowing Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              
              {/* Subtle tint overlay to make the photo blend with the dark theme */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
              
              {/* The Actual Photo */}
              <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl">
  <Image
    src="/hero-profile.jpg"
    alt="Janith Gayashan"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 33vw"
    className="transition duration-700 group-hover:scale-105"
    style={{ 
      objectFit: 'cover', 
      objectPosition: '50% 70%'
    }}
  />
</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}