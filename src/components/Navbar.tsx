// src/components/Navbar.tsx
"use client";

import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // This listener makes the navbar transparent at the top, and glass-like when you scroll down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Experience", path: "experience" },
    { title: "Skills", path: "skills" },
    { title: "Projects", path: "projects" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/5 py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        
        {/* Upgraded Logo: Uses your initials with the theme's gradient */}
        {/* <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-display cursor-pointer tracking-tighter">
          Janith Gayashan
        </div> */}
        <div className="text-2xl font-black text-gray-100 hover:text-white transition-colors duration-300 font-display cursor-pointer tracking-tight">
          Janith Gayashan
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300 relative group font-display tracking-wide uppercase"
              activeClass="!text-white"
            >
              {link.title}
              {/* This creates a sleek, animated neon line under the link when hovered */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full group-[.active]:w-full"></span>
            </Link>
          ))}
        </div>
        
      </div>
    </nav>
  );
}