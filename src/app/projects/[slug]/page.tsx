import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Layers, Code, BrainCircuit } from "lucide-react"; // Github removed
import { FaGithub } from "react-icons/fa"; // Official Github icon added

// This object acts as our database. Next.js will pull the correct project based on the URL slug.
const projectsData = {
  "website-builder": {
    title: "AI-Powered Website Builder",
    tag: "WEB SYSTEM",
    overview: "A full-stack LLM orchestration system that translates natural language intent into production-ready web code. Built as part of the Agent Smiths team initiatives, this project bridges the gap between conversational AI and automated UI generation.",
    architecture: "The system utilizes a modular backend to handle chat intent parsing, routing requests through specialized prompt chains before generating and serving React components in real-time.",
    techStack: ["Next.js", "FastAPI", "LLM Orchestration", "React"],
    challenges: "Handling context windows and preventing hallucinated code elements required strict system prompts and a validation layer before returning the generated code to the user interface.",
    github: "https://github.com/JanithGayashan",
  },
  "gab-net": {
    title: "GAB-Net Research",
    tag: "ML RESEARCH",
    overview: "An explainable imitation learning architecture specifically designed for autonomous driving applications. This research focuses on breaking the 'black box' nature of traditional neural networks in high-stakes environments.",
    architecture: "GAB-Net processes visual and sensor data through a specialized pipeline, separating perception from decision-making to provide human-readable rationales for driving actions.",
    techStack: ["PyTorch", "Computer Vision Systems", "Python", "Imitation Learning"],
    challenges: "The primary architectural bottleneck was maintaining real-time inference speeds while extracting the explainable attention maps. We optimized the visual perception system to balance speed with interpretability.",
    github: "https://github.com/JanithGayashan",
  },
  "ai-assistant": {
    title: "Enterprise Agentic AI Assistant",
    tag: "AI WORKFLOW",
    overview: "A sophisticated multi-agent workflow engineered for intelligent text classification and secure document retrieval (RAG). Contributed to during the slt-travel-chatbot enterprise project, focusing on scalable AI infrastructure.",
    architecture: "Built on LangGraph, the workflow utilizes specialized agent nodes. A supervisor agent routes queries to either a document retrieval tool or a classification pipeline, seamlessly combining internal data with LLM generation.",
    techStack: ["LangGraph", "FastAPI", "Vector Databases", "Python", "RAG"],
    challenges: "Managing state across multiple agent interactions and ensuring low-latency retrieval from the vector database required refining the LangGraph nodes and optimizing our embedding strategy.",
    github: "https://github.com/JanithGayashan",
  }
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Next.js 15 requires us to 'await' the params
  const resolvedParams = await params;
  
  // 2. Now we can safely use the slug to find the project
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

  // If the URL doesn't match any project, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12 font-mono text-sm tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <header className="mb-16 border-b border-gray-800 pb-12">
          <span className="text-primary font-bold tracking-widest text-sm mb-4 block uppercase">
            {project.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-6">
            {project.title}
          </h1>
          
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-gray-700 px-6 py-3 rounded-lg font-bold transition-all"
          >
            <FaGithub size={20} />
            View Source Code
          </a>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Case Study Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <BrainCircuit className="text-primary" />
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Layers className="text-secondary" />
                System Architecture
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.architecture}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Challenges & Solutions</h2>
              <div className="bg-surface border border-gray-800 p-6 rounded-xl border-l-4 border-l-primary">
                <p className="text-gray-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-surface border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-gray-800 pb-4">
                <Code size={18} className="text-primary" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-background border border-gray-700 text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}