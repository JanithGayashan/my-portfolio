export interface ProjectStep {
  title: string;
  description: string;
  planned?: boolean;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  status: string;
  context: string;
  summary: string;
  focus: string;
  technologies: string[];
  overview: string;
  problem: string;
  contributions: string[];
  architectureTitle: string;
  architecture: ProjectStep[];
  outcomes: string[];
  nextSteps?: string[];
  repository?: string;
  resources?: { title: string; url: string }[];
  image?: { src: string; alt: string };
  visualCaption: string;
}

// Shared order and content for the homepage, case studies, and sitemap.
// Source decisions are recorded in docs/project-content-sources.md.
export const projects: PortfolioProject[] = [
  {
    slug: "sl-travel",
    title: "SL-Travel AI Assistant",
    category: "Agentic AI · Tourism",
    status: "Internship project",
    context: "Sri Lanka Telecom · March – September 2025",
    summary: "A conversational travel assistant for planning trips, finding destinations, and coordinating booking-related workflows across a tourism platform.",
    focus: "Multi-agent architecture, travel RAG, and backend integration.",
    technologies: ["LangGraph", "FastAPI", "Pinecone", "MySQL", "MongoDB", "Next.js"],
    overview: "During my AI/ML internship at Sri Lanka Telecom, I worked on the agentic AI architecture for the SL-Travel tourism platform. The assistant coordinated specialized travel agents and connected conversational requests with travel information and structured platform data.",
    problem: "Travel planning brings together destination questions, itineraries, hotel and train searches, and tour-guide matching. The project used specialized workflows to handle these tasks within a connected conversational experience.",
    contributions: [
      "Designed and implemented LangGraph orchestration for travel planning, train and hotel booking workflows, destination recommendations, tour-guide matching, and sentiment analysis.",
      "Built a Pinecone-based semantic retrieval pipeline to ground travel responses in relevant information.",
      "Integrated structured data sources for personalized destination and tour-guide recommendations.",
      "Connected the agent system with FastAPI, MySQL, MongoDB, and the Next.js frontend.",
    ],
    architectureTitle: "Workflow overview",
    architecture: [
      { title: "Traveler request", description: "A conversational request enters through the tourism platform." },
      { title: "Agent orchestration", description: "LangGraph coordinates the specialized travel workflows." },
      { title: "Retrieval & platform data", description: "Pinecone retrieval and structured data support the response." },
      { title: "Travel response", description: "The platform presents travel information and workflow results." },
    ],
    outcomes: [
      "Integrated multi-agent orchestration, retrieval, and backend services into conversational travel workflows.",
      "This is a company-owned project. The case study describes my publicly shareable contribution; source code and a public demo are not provided.",
    ],
    image: { src: "/projects/sl-travel-concept.png", alt: "Concept illustration of Sri Lanka travel destinations connected by an itinerary route and coordinated assistant workflows" },
    visualCaption: "Concept illustration · travel planning & orchestration",
  },
  {
    slug: "gab-net",
    title: "Explainable AI for Autonomous Driving",
    category: "Deep learning · Explainable AI",
    status: "Final-year research",
    context: "University of Moratuwa · GAB-Net",
    summary: "Research into a gated attention network that predicts steering while exposing the visual regions involved in its decisions.",
    focus: "Model architecture, baseline comparisons, and explanation faithfulness.",
    technologies: ["PyTorch", "ResNet-18", "OpenCV", "Python", "Explainable AI"],
    overview: "My final-year research investigates intrinsically explainable deep learning for autonomous driving. GAB-Net combines a ResNet-18 visual backbone with channel and spatial gates to produce steering predictions together with inspectable attention masks.",
    problem: "A steering model can make an accurate prediction without making it clear which image regions influenced that prediction. The research studies whether an attention bottleneck can make those decisions more interpretable, and whether the explanations remain faithful to model behavior.",
    contributions: [
      "Designed a gated attention architecture with a ResNet-18 backbone for visual steering prediction.",
      "Implemented comparisons with PilotNet, a standard ResNet-18, CBAM, and a soft-attention ablation.",
      "Built multi-seed training and evaluation workflows with a shared held-out split.",
      "Implemented attention-map visualizations, perturbation-based explanation evaluation, and simulator telemetry analysis.",
    ],
    architectureTitle: "Research architecture",
    architecture: [
      { title: "Driving image", description: "A camera frame is preprocessed for the steering model." },
      { title: "ResNet-18 features", description: "The visual backbone extracts spatial feature maps." },
      { title: "Channel & spatial gates", description: "An attention bottleneck controls the features passed forward." },
      { title: "Steering & attention", description: "The network returns a steering prediction and an attention mask." },
    ],
    outcomes: [
      "The repository includes five model variants, multi-seed training, qualitative comparisons, and explanation-evaluation scripts.",
      "Evaluation covers steering error and explanation behavior rather than relying on attention-map appearance alone.",
      "The simulator bridge records closed-loop telemetry for robustness analysis. Performance comparisons depend on the dataset, held-out split, and experiment conditions.",
    ],
    repository: "https://github.com/JanithGayashan/Research-Project",
    resources: [
      { title: "Research methodology and setup", url: "https://github.com/JanithGayashan/Research-Project/blob/main/README.md" },
    ],
    image: { src: "/projects/gab-net-concept.png", alt: "Concept illustration of a car on a road with a visual attention overlay and connected neural features" },
    visualCaption: "Concept illustration · visual steering & attention",
  },
  {
    slug: "erpnext-agentic-platform",
    title: "ERPNext Agentic Automation Platform",
    category: "Workflow orchestration · ERP",
    status: "In development",
    context: "Replenishment proposals & sourcing review",
    summary: "An ERPNext integration that turns inventory data into replenishment proposals and resumable workflows with human approval.",
    focus: "API integration, persistent workflow state, and controlled approvals.",
    technologies: ["LangGraph", "FastAPI", "ERPNext / Frappe", "Pydantic", "SQLite"],
    overview: "I am building a separate workflow service that integrates with ERPNext through authenticated APIs. The current milestone implements read-only replenishment proposals and checkpointed human-review workflows, providing a controlled foundation for future ERP automation.",
    problem: "ERP workflows need to preserve state, respect permissions, and ensure that an approval still refers to the data being acted on. The current implementation focuses on deterministic proposals and review before introducing document-writing capability.",
    contributions: [
      "Implemented typed ERPNext API reads and deterministic replenishment calculations.",
      "Built authenticated FastAPI routes to start, inspect, approve, and reject LangGraph workflows.",
      "Added plan hashing, approval expiry, separate requester and approver identities, and post-approval revalidation.",
      "Implemented a Frappe-HMAC-authenticated auto-reorder webhook and an idempotent sourcing-review workflow.",
      "Added local SQLite checkpoint persistence and tests for API behavior, workflow interrupts, and restart recovery.",
    ],
    architectureTitle: "Implemented review flow",
    architecture: [
      { title: "ERPNext data", description: "Authenticated API reads retrieve inventory and Material Request data." },
      { title: "Proposal & checkpoint", description: "A deterministic plan is hashed and stored in LangGraph state." },
      { title: "Human approval", description: "A separate reviewer approves or rejects the exact plan." },
      { title: "Revalidate & finish", description: "ERPNext data is checked again; the workflow finishes without writing documents." },
    ],
    outcomes: [
      "The implemented replenishment workflow can pause for approval and resume from a persisted checkpoint.",
      "Approved proposals finish as APPROVED_NO_WRITE; sourcing reviews finish as REVIEWED_NO_WRITE.",
      "ERPNext retains ownership of native reorder detection and Material Request creation. The current service does not select suppliers or create downstream ERP documents.",
    ],
    nextSteps: [
      "Select an ERP workflow gap that is not already handled by ERPNext before expanding the automation scope.",
      "Extend the platform toward broader business workflows while retaining permission checks and explicit approvals.",
    ],
    repository: "https://github.com/JanithGayashan/erpnext-agentic-platform",
    resources: [
      { title: "Implementation status and workflow endpoints", url: "https://github.com/JanithGayashan/erpnext-agentic-platform/blob/main/README.md" },
      { title: "Auto-reorder event workflow", url: "https://github.com/JanithGayashan/erpnext-agentic-platform/blob/main/docs/auto-reorder-event-workflow.md" },
    ],
    image: { src: "/projects/erpnext-concept.png", alt: "Concept illustration of warehouse inventory connected to a proposal document and human-review workflow" },
    visualCaption: "Concept illustration · inventory planning & approvals",
  },
  {
    slug: "insurance-rag",
    title: "Insurance RAG Intelligence Platform",
    category: "Document intelligence · RAG",
    status: "In development",
    context: "Document ingestion & chunking",
    summary: "An insurance document intelligence project building validated PDF ingestion and structure-aware chunking as the foundation for grounded retrieval.",
    focus: "Parsing quality, document structure, and chunking experiments.",
    technologies: ["Python", "Docling", "pdfplumber", "LlamaIndex", "Sentence Transformers"],
    overview: "I am developing a RAG system for insurance policy and regulatory documents. The current implementation focuses on reliable document parsing and comparing chunking strategies before adding retrieval and answer generation.",
    problem: "Insurance PDFs contain sections, lists, tables, and scanned pages that can lose meaning during extraction. Reliable retrieval depends on preserving this structure and validating the input before building an index.",
    contributions: [
      "Built batch PDF discovery and Docling parsing with structured JSON, Markdown, and plain-text outputs.",
      "Implemented document fingerprints, page-level text and image analysis, and Docling–pdfplumber cross-validation.",
      "Added PASS, REVIEW, and FAIL parsing-quality reports for pages and documents.",
      "Implemented fixed, recursive, structure-aware, parent-child, and semantic chunking experiments with preserved source references.",
      "Compared custom and LlamaIndex chunkers using local BGE embeddings and chunk-quality metrics.",
    ],
    architectureTitle: "Current pipeline & next stage",
    architecture: [
      { title: "Insurance PDFs", description: "Discover documents and preserve their metadata and fingerprints." },
      { title: "Parse & validate", description: "Docling extraction is checked against independent parsing signals." },
      { title: "Structured chunks", description: "Compare chunking strategies while retaining page and section references." },
      { title: "Retrieve & answer", description: "Hybrid retrieval, reranking, and citation-grounded generation are upcoming stages.", planned: true },
    ],
    outcomes: [
      "The repository contains ingestion, parsing-quality validation, chunking pipelines, and unit and integration tests.",
      "The current stage produces validated documents and comparable chunk artifacts; it is not yet a complete insurance question-answering service.",
    ],
    nextSteps: [
      "Build a reviewed question set and run controlled retrieval experiments across chunking strategies.",
      "Add Qdrant indexing, BM25/vector hybrid retrieval, query transformations, and reranking.",
      "Implement citation-grounded generation, RAG evaluation, and API deployment.",
    ],
    repository: "https://github.com/JanithGayashan/insurance-rag-intelligence-platform",
    resources: [
      { title: "Implemented phases and RAG roadmap", url: "https://github.com/JanithGayashan/insurance-rag-intelligence-platform/blob/main/README.md" },
      { title: "Local semantic embedding implementation", url: "https://github.com/JanithGayashan/insurance-rag-intelligence-platform/blob/main/src/chunking/semantic/embeddings.py" },
    ],
    image: { src: "/projects/insurance-rag-concept.png", alt: "Concept illustration of insurance policy documents separated into structured chunks and connected embedding nodes" },
    visualCaption: "Concept illustration · document parsing & chunking",
  },
  {
    slug: "fraud-detection",
    title: "Financial Transaction Fraud Detection",
    category: "Machine learning · Financial transactions",
    status: "In development",
    context: "IEEE-CIS dataset understanding",
    summary: "A fraud-detection project studying transaction data quality and temporal leakage before developing an imbalanced-classification pipeline.",
    focus: "Dataset exploration and a time-aware model evaluation plan.",
    technologies: ["Python", "Pandas", "NumPy", "Jupyter"],
    overview: "This project aims to build a fraud-risk detection pipeline around the IEEE-CIS dataset. It is currently in the initial data-understanding stage, with an exploratory notebook and a documented roadmap for modeling, serving, and monitoring.",
    problem: "Fraud detection must handle rare positive cases and avoid using future information when evaluating transactions. The development plan prioritizes data understanding and temporal validation before model performance or real-time deployment claims.",
    contributions: [
      "Created an exploratory notebook for the transaction and identity datasets.",
      "Inspected transaction identifiers, missing values, uniqueness, duplicates, and relationships between transaction and identity records.",
      "Examined transaction ordering as groundwork for later temporal-validation and leakage analysis.",
      "Documented a staged ML workflow, cost-sensitive evaluation strategy, and future inference architecture.",
    ],
    architectureTitle: "Development roadmap",
    architecture: [
      { title: "IEEE-CIS data", description: "Explore labeled transaction and identity records." },
      { title: "Data-quality analysis", description: "Inspect identifiers, missing values, duplicates, and record relationships." },
      { title: "Temporal validation & models", description: "Build leakage-aware baselines and compare imbalanced-classification models.", planned: true },
      { title: "Serving & monitoring", description: "Add event processing, online inference, and drift monitoring after model development.", planned: true },
    ],
    outcomes: [
      "Current public work consists of the dataset-understanding notebook and the system roadmap.",
      "LightGBM/XGBoost, calibration, SHAP, MLflow, Kafka, and a serving API are planned capabilities rather than completed deployment features.",
    ],
    nextSteps: [
      "Complete data-quality, temporal-structure, and leakage analysis before establishing a baseline model.",
      "Evaluate precision, recall, PR-AUC, calibration, and threshold costs for highly imbalanced data.",
      "Build the inference and monitoring layers after validating the offline pipeline.",
    ],
    repository: "https://github.com/JanithGayashan/real-time-fraud-detection",
    resources: [
      { title: "Dataset-understanding notebook", url: "https://github.com/JanithGayashan/real-time-fraud-detection/blob/main/notebooks/eda/01_dataset_understanding.ipynb" },
      { title: "Fraud detection roadmap", url: "https://github.com/JanithGayashan/real-time-fraud-detection/blob/main/README.md" },
    ],
    image: { src: "/projects/fraud-detection-concept.png", alt: "Concept illustration of transaction patterns with a magnifying lens highlighting an anomalous data point" },
    visualCaption: "Concept illustration · transaction data analysis",
  },
  {
    slug: "credit-loan-risk",
    title: "Credit & Loan Risk Analysis",
    category: "Applied machine learning · Classification",
    status: "ML prototype",
    context: "Loan approval analysis",
    summary: "A decision-tree classification project exploring how applicant income, credit scores, loan terms, and assets relate to loan approval outcomes.",
    focus: "Exploratory analysis, model evaluation, and inference integration.",
    technologies: ["Scikit-learn", "Pandas", "Seaborn", "FastAPI", "Python"],
    overview: "This educational prototype studies loan approval as a supervised classification problem. The notebook covers data cleaning, exploratory plots, categorical encoding, a stratified train/test split, and decision-tree evaluation. The exported model and scaler are also integrated into a FastAPI prediction endpoint in my portfolio backend.",
    problem: "The project explores relationships between applicant and loan attributes and the dataset's approval labels. It demonstrates a model-development and inference workflow; it is not a production credit-scoring system or a real lending decision service.",
    contributions: [
      "Cleaned column names and categorical values, checked missing data and duplicates, and explored distributions and feature relationships.",
      "Encoded categorical features, removed the identifier column, and used an 80/20 stratified train/test split.",
      "Fitted preprocessing on the training split and trained a DecisionTreeClassifier.",
      "Evaluated held-out predictions using a classification report, confusion matrix, and accuracy.",
      "Exported the model and scaler with joblib and integrated their inference into a FastAPI endpoint.",
    ],
    architectureTitle: "Model & inference flow",
    architecture: [
      { title: "Applicant & loan features", description: "Income, CIBIL score, loan term, dependents, and asset values." },
      { title: "Encode & scale", description: "Apply the categorical mapping and fitted training scaler." },
      { title: "Decision-tree classifier", description: "Predict the dataset's approval class from the prepared features." },
      { title: "Prediction response", description: "The FastAPI endpoint returns an Approved or Rejected label." },
    ],
    outcomes: [
      "The saved notebook reports 97.78% accuracy on 854 held-out examples from an 80/20 stratified split of 4,269 records. This is a recorded experiment result, not an independently reproduced production benchmark.",
      "Model and preprocessing artifacts are connected to the portfolio backend's loan prediction endpoint.",
      "The hosted inference service is currently unavailable, so a working live-demo link is not advertised.",
    ],
    repository: "https://github.com/JanithGayashan/loan-approval-analyzer",
    resources: [
      { title: "Analysis and model-training notebook", url: "https://github.com/JanithGayashan/loan-approval-analyzer/blob/main/loan_approval_analyse_model.ipynb" },
      { title: "FastAPI inference implementation", url: "https://github.com/JanithGayashan/portfolio-backend/blob/main/app/api/v1/loan.py" },
    ],
    image: { src: "/projects/credit-loan-risk-concept.png", alt: "Concept illustration of applicant features feeding a decision-tree classifier, with a bank and balance scale" },
    visualCaption: "Concept illustration · loan classification",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
