"use client";
import { useState } from "react";

export default function LoanPredictor() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Initialized with empty strings to prevent the "leading zero" bug 
  // and present a clean, empty form to the user.
  const [formData, setFormData] = useState({
    no_of_dependents: "",
    education: "Graduate",
    self_employed: "No",
    income_annum: "",
    loan_amount: "",
    loan_term: "",
    cibil_score: "",
    residential_assets_value: "",
    commercial_assets_value: "",
    luxury_assets_value: "",
    bank_asset_value: "",
  });

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null); 
    
    // Convert the empty strings back to 0 right before sending to the backend
    // so the FastAPI server doesn't crash on empty fields.
    const cleanData = {
      ...formData,
      no_of_dependents: Number(formData.no_of_dependents) || 0,
      income_annum: Number(formData.income_annum) || 0,
      loan_amount: Number(formData.loan_amount) || 0,
      loan_term: Number(formData.loan_term) || 0,
      cibil_score: Number(formData.cibil_score) || 0,
      residential_assets_value: Number(formData.residential_assets_value) || 0,
      commercial_assets_value: Number(formData.commercial_assets_value) || 0,
      luxury_assets_value: Number(formData.luxury_assets_value) || 0,
      bank_asset_value: Number(formData.bank_asset_value) || 0,
    };

    try {
      const response = await fetch("http://localhost:8000/api/v1/loan/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });
      
      if (!response.ok) {
        throw new Error("Server returned an error");
      }

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Prediction failed", error);
      setResult("Error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:border-primary focus:outline-none transition-colors";
  const labelStyle = "block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider";

  return (
    <div className="bg-[#1C1936] p-6 md:p-8 rounded-2xl border border-gray-800 text-white w-full shadow-2xl">
      <h2 className="text-2xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-display">
        Live Inference Parameters
      </h2>
      
      
      <form onSubmit={handlePredict} className="space-y-6">
        
        {/* Section 1: Applicant Profile */}
        <div className="p-4 rounded-xl border border-gray-800 bg-background/50">
          <h3 className="text-sm font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Applicant Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelStyle}>Dependents</label>
              <input type="number" value={formData.no_of_dependents} onChange={(e) => setFormData({...formData, no_of_dependents: e.target.value})} className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Education</label>
              <select value={formData.education} onChange={(e) => setFormData({...formData, education: e.target.value})} className={inputStyle}>
                <option value="Graduate">Graduate</option>
                <option value="Not Graduate">Not Graduate</option>
              </select>
            </div>
            <div>
              <label className={labelStyle}>Self Employed</label>
              <select value={formData.self_employed} onChange={(e) => setFormData({...formData, self_employed: e.target.value})} className={inputStyle}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Financial Standing */}
        <div className="p-4 rounded-xl border border-gray-800 bg-background/50">
          <h3 className="text-sm font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Financial Standing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Income (Annual)</label>
              <input type="number" value={formData.income_annum} onChange={(e) => setFormData({...formData, income_annum: e.target.value})} className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>CIBIL Score</label>
              <input type="number" value={formData.cibil_score} onChange={(e) => setFormData({...formData, cibil_score: e.target.value})} className={inputStyle} required />
            </div>
          </div>
        </div>

        {/* Section 3: Loan Request Details */}
        <div className="p-4 rounded-xl border border-gray-800 bg-background/50">
          <h3 className="text-sm font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Loan Request</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Loan Amount</label>
              <input type="number" value={formData.loan_amount} onChange={(e) => setFormData({...formData, loan_amount: e.target.value})} className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Loan Term (Years)</label>
              <input type="number" value={formData.loan_term} onChange={(e) => setFormData({...formData, loan_term: e.target.value})} className={inputStyle} required />
            </div>
          </div>
        </div>

        {/* Section 4: Asset Evaluation */}
        <div className="p-4 rounded-xl border border-gray-800 bg-background/50">
          <h3 className="text-sm font-bold text-gray-300 mb-4 border-b border-gray-800 pb-2">Asset Evaluation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Residential Assets</label>
              <input type="number" value={formData.residential_assets_value} onChange={(e) => setFormData({...formData, residential_assets_value: e.target.value})} className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Commercial Assets</label>
              <input type="number" value={formData.commercial_assets_value} onChange={(e) => setFormData({...formData, commercial_assets_value: e.target.value})} className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Luxury Assets</label>
              <input type="number" value={formData.luxury_assets_value} onChange={(e) => setFormData({...formData, luxury_assets_value: e.target.value})} className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Bank Assets</label>
              <input type="number" value={formData.bank_asset_value} onChange={(e) => setFormData({...formData, bank_asset_value: e.target.value})} className={inputStyle} required />
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity p-4 rounded-xl font-black text-lg mt-8 disabled:opacity-50 shadow-lg shadow-primary/20"
        >
          {loading ? "Running Model Inference..." : "Execute Prediction Pipeline"}
        </button>
      </form>

      {/* Result Display */}
      {result && (
        <div className={`mt-8 p-6 rounded-xl text-center border-2 shadow-2xl transition-all duration-500 ${
          result === 'Approved' 
            ? 'bg-green-950/40 border-green-500/50' 
            : result === 'Error'
            ? 'bg-yellow-950/40 border-yellow-500/50'
            : 'bg-red-950/40 border-red-500/50'
        }`}>
          <p className="text-sm font-mono text-gray-400 mb-2">Model Classification Result:</p>
          <h3 className={`text-3xl font-black uppercase tracking-widest font-display ${
            result === 'Approved' ? 'text-green-400' : result === 'Error' ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {result === 'Error' ? 'Connection Failed' : `Loan ${result}`}
          </h3>
        </div>
      )}
    </div>
  );
}