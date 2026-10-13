import { permanentRedirect } from "next/navigation";

// Preserve old links without presenting the unavailable inference service as a live demo.
export default function LoanPredictorPage() {
  permanentRedirect("/projects/credit-loan-risk");
}
