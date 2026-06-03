import Link from "next/link";
import LoanPredictor from "@/components/LoanPredictor";
import { ArrowLeft } from "lucide-react"; // Make sure lucide-react is installed

export default function LoanPredictorPage() {
  return (
    <main className="min-h-screen bg-[#0F0C29] text-white py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Clean Navigation Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 font-display uppercase tracking-wider text-sm font-bold"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        {/* Dashboard Header */}
        <div className="mb-12 text-center md:text-left border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Financial ML Architecture
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            A production-grade Decision Tree Classifier simulating real-world financial risk assessment. 
            Adjust the parameters below to execute a live prediction through the FastAPI backend.
          </p>
        </div>

        {/* The Actual ML Component */}
        <div className="bg-surface rounded-3xl p-4 md:p-8 border border-gray-800/80 shadow-2xl">
          <LoanPredictor />
        </div>
        
      </div>
    </main>
  );
}