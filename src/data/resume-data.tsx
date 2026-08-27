import StreamLensLogo from "../images/logos/StreamLensLogo.png";
import PowerCurveLogo from "../images/logos/PowerCurveLogo.png";
import MercedesLogo from "../images/logos/MercedesLogo.png";
import NYCabDataLogo from "../images/logos/NYCabDataLogo.png";
import PredictingDrowsinessLogo from "../images/logos/PredictingDrowsinessLogo.png";
import CustomerRelationshipPredictionLogo from "../images/logos/CustomerRelationshipPredictionLogo.png";
import Phase1AnalysisLogo from "../images/logos/Phase1AnalysisLogo.png";
import NeuroBuddyLogo from "../images/logos/neuerobuddy.png";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { HuggingFaceIcon } from "@/components/icons/HuggingFace";
import { ResumeData } from "@/types/resume";

export const RESUME_DATA: ResumeData = {
  name: "Jay Shah",
  initials: "JS",
  location: "Sunnyvale, CA",
  locationLink: "https://www.google.com/maps/place/Sunnyvale,+CA",
  about:
    "Senior Data Scientist building production AI applications and foundational model systems with robust evaluation at scale.",
  summary:
    "Senior Data Scientist at 6sense building production AI applications, foundational model systems, and agent evaluation frameworks. Expert in model explainability, Python, AWS, and GCP with cross-team leadership from roadmap to production.",
  avatarUrl:
    "https://raw.githubusercontent.com/jayshah5696/jayshah5696.github.io/main/assets/images/Profile.jpg",
  personalWebsiteUrl: "https://jayshah.dev/",
  contact: {
    email: "contact@jayshah.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jayshah5696",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jayshah5696/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jayjshah",
        icon: XIcon,
      },
      {
        name: "HF",
        url: "https://huggingface.co/jayshah5696",
        icon: HuggingFaceIcon,
      },
    ],
  },
  education: [
    {
      school: "Texas A&M University",
      degree:
        "M.S. in Industrial and Systems Engineering (minor Applied Statistics)",
      start: "2017",
      end: "2019",
    },
    {
      school: "Gujarat Technological University",
      degree: "B.E. in Mechanical Engineering",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "6sense",
      link: "https://6sense.com/",
      badges: ["San Francisco, CA"],
      title: "Senior Data Scientist",
      logo: "SixSenseLogo",
      start: "Feb 2026",
      end: "Present",
      description:
        "Trained foundational models with custom embeddings to power B2B intent intelligence at enterprise scale.\nShipped model explainability in production to provide transparent predictions for sales and marketing workflows.\nArchitected a LLM agent evaluation framework adopted across the engineering and product organizations to prevent regressions.\nBuilt internal agents for key revenue acceleration use cases.\nDesigned and developed a contextual knowledge graph to link enterprise accounts, intent signals, and buyer personas.",
    },
    {
      company: "Avathon",
      link: "https://www.avathon.com/",
      badges: ["Pleasanton, California"],
      title: "Data Scientist III",
      logo: "SparkLogo",
      start: "2022",
      end: "2026",
      description:
        "Led foundation-model MLOps platform; cut release time 45% and increased model adoption.\nArchitected agent platform with MCP tools to spin up domain agents in under 5 minutes; now powering 20+ workflows.\nBuilt LLM interface integrating asset data, enabling reporting and task automation.\nLaunched cross-site solar-storage autoencoder anomaly detection to predict failures and performance issues, saving >$500k.\nShipped RAG compliance agent, reducing violations 10% and automating audit preparation for energy domains.\nReduced false positives 25% by ranking predictive alerts and next-best actions with Bayesian analysis.",
    },
    {
      company: "Avathon",
      link: "https://www.avathon.com/",
      badges: ["Sunnyvale, California"],
      title: "Data Scientist II",
      logo: "SparkLogo",
      start: "2021",
      end: "2021",
      description:
        "Deployed XGBoost-based solar/wind forecasting service; lowered MAPE 10% over baseline.\nMentored offshore ML team on systems design and best practices; boosted delivery speed 25%.\nDefined ML architecture standards adopted by 3 squads to streamline handoffs and deployments.",
    },
    {
      company: "Avathon (Acquired Ensemble Energy)",
      link: "https://www.avathon.com/",
      badges: ["Palo Alto, California"],
      title: "Data Scientist",
      logo: "SparkLogo",
      start: "2019",
      end: "2021",
      description:
        "Built wind-turbine remaining useful life (RUL) model (92% accuracy) using industrial sensor and fault data.\nAutomated model deployment and tracking using Airflow, Docker, Serverless, and Terraform on AWS/GCP.\nDesigned Airflow + AWS Lambda ETL reducing latency 60% across five clients.\nPrototyped statistical tools to quantify power production inefficiency and energy loss.",
    },
    {
      company: "Avathon (Acquired Ensemble Energy)",
      link: "https://www.avathon.com/",
      badges: ["Palo Alto, California"],
      title: "Data Science Intern",
      logo: "SparkLogo",
      start: "2018",
      end: "2018",
      description:
        "Implemented anomaly detection to predict component failures using GBM for 8 wind-turbine components.\nEstimated bearing types and segmented bearing failures from 10-minute signatures using K-means clustering; delivered actionable insights.",
    },
    {
      company: "Texas A&M University",
      link: "https://www.tamu.edu/",
      badges: ["College Station, Texas"],
      title: "Graduate Research Assistant",
      logo: "ParabolLogo",
      start: "2019",
      end: "2019",
      description:
        "Researched with Dr. Yu Ding on applying advanced machine learning methods to solve and predict wind energy system failure. \nImplemented deep learning methods to predict possible power production and downtimes associated with the failures of wind turbine.",
    },
    {
      company: "Utilities and Energy Services",
      link: "",
      badges: ["College Station, Texas"],
      title: "Student Analyst",
      logo: "ParabolLogo",
      start: "2017",
      end: "2018",
      description:
        "Created weather-controlled building baseline regression models for all digitally metered utilities using enterprise energy module. \nThese models are used to monitor consumption across the campus to prevent sensor issues and energy loss. \nManipulated Data in SQL to compare baseline modelled consumption with real-time consumption using statistical control limit chart in excel to analyse the average variation related to prediction.",
    },
    {
      company: "DataKind",
      link: "https://www.datakind.org/",
      badges: ["San Francisco, California"],
      title: "Data Ambassador",
      logo: "DataKindLogo",
      start: "2022",
      end: "2022",
      description:
        "As a Data Ambassador for DataKind, I played a pivotal role in a collaborative project with John Jay College, developing advanced machine learning models to predict student dropout and delayed graduation. \nLeveraging Random Forest classifiers, our team crafted and tested over 20 models, ultimately recommending a tailored suite of six models to enable early identification and support for students at risk, significantly contributing to improving college completion rates.",
    },
  ],
  skills: [
    {
      category: "AI & Foundational Systems",
      items: [
        "Agentic Systems",
        "Agent Evaluation",
        "MCP (Model Context Protocol)",
        "Large Language Models (LLM): Fine-tuning, RAG, Unsupervised",
        "Deep Learning (Transformers, CNN, RNN, LSTM)",
        "Natural Language Processing (NLP)",
        "Predictive Modeling & Analytics",
        "Time Series Forecasting",
        "Model Optimization & Fine-tuning",
        "AI-driven Solution Development",
      ],
    },
    {
      category: "Libraries & ML Tools",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Transformers",
        "LangChain",
        "XGBoost",
        "DSPy",
        "ColBERT",
        "Data Visualization (Plotly, Seaborn, Matplotlib, Dash)",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      category: "MLOps & Data",
      items: [
        "Cloud Computing (AWS, GCP, Azure)",
        "Real-time Data Processing & ETL (Airflow, Dask, Pandas)",
        "Big Data Technologies (Spark)",
        "Model Deployment & Monitoring (MLflow, BentoML, Modal)",
        "Docker",
        "Linux",
        "High-Performance Computing (GPU/CPU)",
      ],
    },
    {
      category: "Software Engineering",
      items: [
        "Python, SQL, Bash, JavaScript",
        "Version Control (Git, GitHub)",
        "API Development (FastAPI, Flask)",
        "Project Management & Team Leadership",
        "Agile Methodologies (Scrum, Kanban)",
        "R&D in Renewable Energy Systems",
      ],
    },
  ],
  projects: [
    { title: "Text Watermarking Lab", techStack: ["Python", "Transformers", "Statistics", "Evaluation"], description: "Experiments with keyed text watermarking, statistical detection, model behavior, calibration, and the effect of editing on the signal.", link: { href: "https://github.com/jayshah5696/text-watermarking-lab" } },
    { title: "AgentEval Suite — Specialized Evals for Production Agents", techStack: ["Python", "LangGraph", "RAG", "LLM-as-Judge", "CI"], description: "Scenario-driven evaluation harness for domain agents with synthetic task generation, tool-usage tracing, success and latency metrics, and judge models for regression testing." },
    { title: "Pi Agent Extensions", techStack: ["AI Agents", "TypeScript", "Developer Tools"], description: "A collection of extensions and themes for the Pi coding agent, including sessions, structured questions, handoffs, multi-agent workflows, and review tools.", link: { href: "https://github.com/jayshah5696/pi-agent-extensions" } },
    { title: "Sangam (संगम)", techStack: ["AI Agents", "FastAPI", "Vite", "Python", "Local-First"], description: "A single-user, self-hosted document workspace where a human and identified AI agents work with ordinary files through the same revision-aware API.", link: { href: "https://github.com/jayshah5696/sangam" } },
    { title: "Session Aggregator", techStack: ["Python", "SQLite", "TUI", "Semantic Search"], description: "A local tool for syncing, searching, and exporting AI coding sessions across development tools, with a terminal UI and semantic search.", link: { href: "https://github.com/jayshah5696/session-aggregator" } },
    { title: "Medha IDE", techStack: ["FastAPI", "Vite", "DuckDB", "LangGraph", "SQL"], description: "A local-first SQL IDE for flat files that combines DuckDB, FastAPI, Vite, and LangGraph for semantic query generation.", link: { href: "https://github.com/jayshah5696/medha" } },
    { title: "Arka — Config-Driven Synthetic Data Generation", techStack: ["Python", "YAML", "SQLite", "MinHash", "LSH", "Evol-Instruct"], description: "A config-driven pipeline for generating and filtering fine-tuning data with multi-source ingestion, Evol-Instruct, MinHash and LSH deduplication, and SQLite checkpoints.", link: { href: "https://github.com/jayshah5696/arka" } },
    { title: "Humanizer-RL — AI Text Humanness Scorer", techStack: ["Reinforcement Learning", "Gemma", "DAPO", "Ridge", "Python"], description: "A text humanness scorer and reinforcement-learning pipeline that turns model evaluations into a reward function for Gemma fine-tuning.", link: { href: "https://github.com/jayshah5696/humanize-rl" } },
    { title: "Entity Resolution POC", techStack: ["ML", "Elasticsearch", "MRL", "Entity Resolution"], description: "An entity-resolution evaluation comparing dense embeddings with BM25 and Matryoshka Representation Learning for efficient retrieval at scale.", link: { href: "https://github.com/jayshah5696/entity-resolution-poc" } },
    { title: "Pravāha — AI Search Engine", techStack: ["BM25", "Search", "RAG", "LLMs"], description: "A local search assistant that combines web search, document retrieval, agent tools, and language models with specialized ranking and chunking.", link: { href: "https://github.com/jayshah5696/pravah" } },
    { title: "Gujarati Llama", techStack: ["Transformers", "Python", "Hugging Face", "LLaMA", "Fine-tuning"], description: "A Llama 2 7B model fine-tuned on 60,000 bilingual English-Gujarati pairs for low-resource language use cases.", link: { href: "https://huggingface.co/jayshah5696/Gujarati-Llama-7b-Base" } },
    { title: "StreamLens", techStack: ["RAG", "LlamaIndex", "MLX", "Video"], description: "A multi-model retrieval-augmented system for interacting with autonomous-vehicle video streams, built for the LlamaIndex RAG-a-thon.", link: { href: "https://github.com/rohrao/llamaindex_RAGathon" } },
    { title: "NeuroBuddy", techStack: ["LLM", "Mistral", "Whisper", "Healthcare"], description: "A personalized chatbot for mental-health support and resources, built with Mistral AI and Whisper models during a hackathon.", logo: NeuroBuddyLogo, link: { href: "https://devpost.com/software/neurobuddy" } },
    { title: "Power Curve Estimation for Wind Energy Farms", techStack: ["Data Analytics", "Python", "Machine Learning", "MLP"], description: "Statistical and machine-learning models for estimating wind-farm power curves and supporting energy-system optimization.", logo: PowerCurveLogo, link: { href: "https://github.com/jayshah5696/Power_Curve_Estimation" } },
    { title: "Customer Relationship Prediction", techStack: ["CRM", "Data Analytics", "Machine Learning", "Classification"], description: "Classification models for predicting churn, appetency, and up-selling behavior for a mobile network operator.", logo: CustomerRelationshipPredictionLogo, link: { href: "https://github.com/jayshah5696/Crm-Analytics" } },
    { title: "Phase 1 Analysis", techStack: ["Data Analysis", "PCA", "T2 Charts", "M-Cusum Charts"], description: "Multivariate quality-control analysis for an industrial forging process using principal components and control charts.", logo: Phase1AnalysisLogo, link: { href: "https://github.com/jayshah5696/Phase1_Analysis" } },
  ],
};
