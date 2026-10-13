# Project content sources

Reviewed on 2026-10-13. Homepage and case studies share `src/data/projects.ts`.
Order: SL-Travel, research, ERPNext, insurance RAG, fraud detection, credit/loan risk.

- **SL-Travel:** `public/Janith_CV.pdf`, Work Experience. The owner confirmed
  this is a private Sri Lanka Telecom project. Publish only the CV-level
  contribution summary. No repository or public demo. Use the matching conceptual
  travel illustration in `public/projects/sl-travel-concept.png`; preserve the
  original `public/project-slt.jpg` without displaying it as the cover.
- **Research:** <https://github.com/JanithGayashan/Research-Project> (linked in
  the CV). Reviewed README.md, models.py, and repository tree. Active GABNet
  uses ResNet-18, channel/spatial gating, and a five-model registry. The repo
  includes multi-seed training and XAI/simulator evaluation. Omit the CV's
  numerical explanation-improvement claim without the associated outputs.
  The full thesis is intentionally excluded at the owner's request: no thesis
  PDF or download link is included in the portfolio or release. The resource
  link to `models.py` remains removed; the repository and methodology links
  remain. Original user documents outside the project were not deleted, and no
  experiment-result claims were changed during the document-link update.
- **ERPNext:** <https://github.com/JanithGayashan/erpnext-agentic-platform>.
  Reviewed README.md, src/erpnext_agentic/workflow.py, and repository tree.
  Current deterministic, checkpointed review workflows are read-only.
  SQLite is the implemented local checkpoint store. Broad ERP automation,
  LLM decisions, Redis/Pinecone use, and ERP writes are not completed features.
- **Insurance RAG:**
  <https://github.com/JanithGayashan/insurance-rag-intelligence-platform>.
  Reviewed README.md, src/chunking/semantic/embeddings.py, and repository tree.
  Ingestion, validation, multiple chunkers, local BGE embeddings, and LlamaIndex
  implementations exist. Retrieval, reranking, grounded generation, RAG
  evaluation, and API deployment remain upcoming stages.
- **Fraud:** <https://github.com/JanithGayashan/real-time-fraud-detection>.
  Reviewed README.md and source cells of
  notebooks/eda/01_dataset_understanding.ipynb. Current work is dataset
  exploration. Modeling, calibration, streaming, serving, and monitoring
  remain roadmap items.
- **Credit/loan risk:** <https://github.com/JanithGayashan/loan-approval-analyzer>.
  Reviewed the full notebook's source cells and relevant saved text outputs.
  Saved accuracy: 0.977751756440281, 854 test records, 80/20 stratified split,
  4,269 total records. Label encoding, training-only scaler fitting,
  DecisionTreeClassifier, and joblib exports are implemented. Checked local
  portfolio-backend/app/api/v1/loan.py for inference integration. A synthetic
  POST to the hosted endpoint returned `Your space is in error, check its
  status on hf.co`. Do not advertise a working live demo.

## Presentation

Remove the website builder from the registry and detail routes. Redirect the
old /projects/ai-assistant route to /projects/sl-travel and the former
/projects/loan-predictor route to the credit/loan case study. Initially show the
first three rows; "Show more projects" reveals all remaining rows without a
hard-coded project count. The toggle always follows the visible rows and changes
to "Show fewer projects" when expanded. Only the disclosure interaction is a
client component; the project rows remain server-rendered.
All six projects use AI-generated conceptual cover illustrations,
labelled as concept illustrations rather than product screenshots or experiment
outputs. SL-Travel uses only its publicly shareable description. Generation prompts and asset paths
are recorded in `docs/project-image-prompts.md`. Case-study architecture text
still summarizes reviewed implementations and explicitly marks planned stages.
Public source links point to exact repositories and reviewed files. No private
repository contents, credentials, or company-internal details are included.
