// src/components/Reveal.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 }, // Start hidden, 75px below final position
        visible: { opacity: 1, y: 0 },   // Animate to visible, final position
      }}
      initial="hidden"
      whileInView="visible" // This is the magic prop that triggers the animation on scroll
      viewport={{ once: true }} // Animate only once
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
}