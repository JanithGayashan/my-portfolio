import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep purple/black palette
        background: '#0B0914', 
        surface: '#131124',
        surfaceHover: '#1C1936',
        // Vibrant neon gradients
        primary: '#8B5CF6', 
        secondary: '#D946EF', 
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],      
        display: ['var(--font-poppins)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};

export default config;