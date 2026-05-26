// src/components/Contact.tsx
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
        <Reveal>
            <h2 className="text-4xl font-black text-white mb-6 font-display">Execute Connection</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Currently evaluating distributed remote roles bridging US operations with global engineering schedules. My technical terminal is always listening.
            </p>
            <div className="flex flex-col items-center gap-4">
                <a 
                    href="mailto:janithgayashan9@gmail.com"
                    className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition duration-300 text-lg shadow-xl shadow-primary/10"
                >
                    Initialize Connection
                </a>
                <span className="text-gray-600 font-mono text-sm tracking-wide mt-2">
                  janithgayashan9@gmail.com
                </span>
            </div>
        </Reveal>
    </div>
  );
}