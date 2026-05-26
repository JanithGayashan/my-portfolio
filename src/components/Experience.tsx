// src/components/Experience.tsx
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <div className="container mx-auto px-6 py-24">
        <Reveal>
            <h2 className="text-4xl font-bold text-white text-center mb-16 font-display">
              Professional Footprint
            </h2>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l border-gray-800 pl-8 ml-4 md:ml-6 group">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-background border-2 border-primary rounded-full group-hover:bg-secondary transition-colors duration-300"></div>
                    
                    <h3 className="text-2xl font-bold text-white font-display">AI/ML Engineer Intern</h3>
                    <p className="text-lg font-medium text-primary mt-1">Sri Lanka Telecom (SLT) | March 2025 – September 2025</p>
                    
                    <ul className="list-none text-gray-400 mt-6 space-y-4">
                        <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1.5 text-xs">◆</span>
                            <span>Architected and deployed an end-to-end Agentic AI Assistant using **LangGraph**, **FastAPI**, and production **OpenAI APIs**.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1.5 text-xs">◆</span>
                            <span>Designed reactive multi-agent nodes responsible for natural language intent parsing, user personalization routing, and transactional token workflows.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1.5 text-xs">◆</span>
                            <span>Constructed an enterprise-level Retrieval-Augmented Generation (RAG) platform mapping highly relational internal models via structural **MySQL** and **MongoDB** instances.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Reveal>
    </div>
  );
}