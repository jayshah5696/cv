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

export const RESUME_DATA = {
  name: "Jay Shah",
  initials: "JS",
  location: "Sunnyvale, CA",
  locationLink: "https://www.google.com/maps/place/Sunnyvale,+CA",
  about:
    "Lead Data Scientist building LLM/RAG systems, agent platforms, and MLOps at enterprise scale.",
  summary:
    "Lead Data Scientist shipping LLM/RAG, agentic systems, and MLOps products in enterprise SaaS. Expert in Python, AWS, and GCP with crisp communication and cross-team leadership from roadmap to production.",
  avatarUrl: "https://raw.githubusercontent.com/jayshah5696/jayshah5696.github.io/main/assets/images/Profile.jpg",
  personalWebsiteUrl: "https://jayshah.dev/",
  contact: {
    email: "contact@jayshah.dev",
    tel: "+19792133271",
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
      degree: "M.S. in Industrial and Systems Engineering (minor Applied Statistics)",
      start: "2017",
      end: "2019",
    },
    {
      school: "Gujarat Technological University",
      degree: "B.E. in Mechanical Engineering",
      start: "2013",
      end: "2017",
    }
  ],
  work: [
    {
      "company": "Avathon",
      "link": "https://www.avathon.com/",
      "badges": ["Pleasanton, California"],
      "title": "Data Scientist III",
      "logo": "SparkLogo",
      "start": "2022",
      "end": "Present",
      "description": "Led foundation-model MLOps platform; cut release time 45% and increased model adoption.\nArchitected agent platform with MCP tools to spin up domain agents in under 5 minutes; now powering 20+ workflows.\nBuilt LLM interface integrating asset data, enabling reporting and task automation.\nLaunched cross-site solar-storage autoencoder anomaly detection to predict failures and performance issues, saving >$500k.\nShipped RAG compliance agent, reducing violations 10% and automating audit preparation for energy domains.\nReduced false positives 25% by ranking predictive alerts and next-best actions with Bayesian analysis."
    },
    {
      "company": "Avathon",
      "link": "https://www.avathon.com/",
      "badges": ["Sunnyvale, California"],
      "title": "Data Scientist II",
      "logo": "SparkLogo",
      "start": "2021",
      "end": "2021",
      "description": "Deployed XGBoost-based solar/wind forecasting service; lowered MAPE 10% over baseline.\nMentored offshore ML team on systems design and best practices; boosted delivery speed 25%.\nDefined ML architecture standards adopted by 3 squads to streamline handoffs and deployments."
    },
    {
      "company": "Avathon (Acquired Ensemble Energy)",
      "link": "https://www.avathon.com/",
      "badges": ["Palo Alto, California"],
      "title": "Data Scientist",
      "logo": "SparkLogo",
      "start": "2019",
      "end": "2021",
      "description": "Built wind-turbine remaining useful life (RUL) model (92% accuracy) using industrial sensor and fault data.\nAutomated model deployment and tracking using Airflow, Docker, Serverless, and Terraform on AWS/GCP.\nDesigned Airflow + AWS Lambda ETL reducing latency 60% across five clients.\nPrototyped statistical tools to quantify power production inefficiency and energy loss."
    },
    {
      "company": "Avathon (Acquired Ensemble Energy)",
      "link": "https://www.avathon.com/",
      "badges": ["Palo Alto, California"],
      "title": "Data Science Intern",
      "logo": "SparkLogo",
      "start": "2018",
      "end": "2018",
      "description": "Implemented anomaly detection to predict component failures using GBM for 8 wind-turbine components.\nEstimated bearing types and segmented bearing failures from 10-minute signatures using K-means clustering; delivered actionable insights."
    },
    {
      "company": "Texas A&M University",
      "link": "https://www.tamu.edu/",
      "badges": ["College Station, Texas"],
      "title": "Graduate Research Assistant",
      "logo": "ParabolLogo",
      "start": "2019",
      "end": "2019",
      "description": "Researched with Dr. Yu Ding on applying advanced machine learning methods to solve and predict wind energy system failure. \nImplemented deep learning methods to predict possible power production and downtimes associated with the failures of wind turbine."
    },
    {
      "company": "Utilities and Energy Services",
      "link": "",
      "badges": ["College Station, Texas"],
      "title": "Student Analyst",
      "logo": "ParabolLogo",
      "start": "2017",
      "end": "2018",
      "description": "Created weather-controlled building baseline regression models for all digitally metered utilities using enterprise energy module. \nThese models are used to monitor consumption across the campus to prevent sensor issues and energy loss. \nManipulated Data in SQL to compare baseline modelled consumption with real-time consumption using statistical control limit chart in excel to analyse the average variation related to prediction."
    },
    {
    "company":'DataKind',
    "link": "https://www.datakind.org/",
    "badges": ["San Francisco, California"],
    "title":"Data Ambassador",
    "logo":"DataKindLogo",
    "start":"2022",
    "end":"2022",
    "description":"As a Data Ambassador for DataKind, I played a pivotal role in a collaborative project with John Jay College, developing advanced machine learning models to predict student dropout and delayed graduation. \nLeveraging Random Forest classifiers, our team crafted and tested over 20 models, ultimately recommending a tailored suite of six models to enable early identification and support for students at risk, significantly contributing to improving college completion rates."
    }
  ]
  ,
  "skills": [
    // Data Science & Machine Learning
    "Data Science & Machine Learning",
    "Predictive Modeling & Analytics",
    "Natural Language Processing (NLP)",
    "Deep Learning (CNN, RNN, LSTM, Transformers, TensorFlow, PyTorch)",
    "Time Series Forecasting",
    "Large Language Models (LLM): Fine-tuning, Retrieval-Augmented Generation (RAG), Unsupervised Learning",
    "Model Optimization & Fine-tuning",
    "AI-driven Solution Development",
    
    // Machine Learning Libraries
    "PyTorch", 
    "TensorFlow", 
    "Scikit-learn", 
    "Transformers", 
    "LangChain", 
    "XGBoost", 
    "Statsmodels", 
    "Darts",
    
    // Data Engineering & Cloud
    "Cloud Computing & Serverless Architectures (AWS, GCP, Azure)",
    "Real-time Data Processing & ETL (Apache Airflow, Dask, Pandas)",
    "Big Data Technologies (Spark, Hadoop)",
    
    // Software Development
    "Software Development (Python, SQL, Bash, R, JavaScript)",
    "Version Control (Git, GitHub)",
    "API Development (FastAPI, Flask)",
    
    // Data Visualization & Analysis
    "Statistical Analysis & Data Visualization (Matplotlib, Seaborn, Plotly, Dash, PowerBI)",
    "Exploratory Data Analysis (EDA)",
    
    // Other Tools & Technologies
    "Docker", 
    "Linux", 
    "High-Performance Computing (GPU/CPU)",
    
    // Project Management & Leadership
    "Project Management & Team Leadership",
    "Agile Methodologies (Scrum, Kanban)",
    
    // Domain Expertise
    "Research & Development in Renewable Energy Systems",
    "Machine Learning Model Deployment & Monitoring (MLflow, BentoML, Modal)"
  ],
  projects: 
    [
      {"title":'Pravāha - Your Local Perplexity-Inspired Search Engine',
      "techStack":["BM25",'openai-api','tavily-search'],
      "description":"Pravāha is an AI search assistant that combines local search engine capabilities with advanced Large Language Models (LLMs), inspired by Perplexity.ai.",
      "logo": NeuroBuddyLogo,
      "link": { 
        "href": "https://github.com/jayshah5696/pravah"
        },
      },
      {"title":'NeuroBuddy: A Personalized Chatbot',
      "techStack":["streamlit",'mistral-api','whisper-models'],
      "description":"A personalized chatbot that provides mental health support and resources to users, leveraging advanced NLP models and AI-driven analytics. The project was developed with Mistral AI and Whisper Models.",
      "logo": NeuroBuddyLogo,
      "link": {
        "href": "https://github.com/jayshah5696/nd-empowerment"
        },
      },
      {
        "title": "AgentEval Suite — Specialized Evals for Production Agents",
        "techStack": ["Python", "LangGraph", "RAG", "LLM-as-Judge", "CI"],
        "description": "Scenario-driven evaluation harness for domain agents: synthetic task generation, tool-usage tracing, success/latency metrics, and judge models; CI-friendly to prevent regressions.",
      },
      {
        "title": "Policy Compliance Tracker (LLM + docETL)",
        "techStack": ["LLM", "docETL", "RAG", "Vector DB", "Reports"],
        "description": "Tracks regulatory compliance across policy docs, SOPs, and audit logs; ingests with docETL, normalizes, and runs retrieval + rule checking with explainable outputs and audit-ready reports.",
      },
      {
        "title": "StreamLens: Revolutionizing Video Content Interaction with AI",
        "techStack": ["hackathon","llamaindex","MLX","BentoML","NVIDIA-AI-Endpoints"],
        "description": "An AI-driven project aimed at transforming video content interaction, leveraging advanced analytics and machine learning. Participated in the RAG-A-THON challenge organized by Llama Index.",
        "logo": StreamLensLogo,
        "link": {
          "href": "https://github.com/rohrao/llamaindex_RAGathon"
        }
      },
      {
        "title": "Gujarati Llama - Fine-tuned Version of LLaMA on Indic Language",
        "techStack": ["Transformers", "Python", "Hugging Face", "LLaMA", "Fine-tuning"],
        "description": "Developed a fine-tuned version of the LLaMA model specifically for Gujarati and other Indic languages, enhancing language understanding and generation capabilities for low-resource languages.",
        "logo": NeuroBuddyLogo,
        "link": {
          "href": "https://huggingface.co/jayshah5696/Gujarati-Llama-7b-Base"
        }
      },
      {
        "title": "PowerCurve Estimation for Wind Energy Farms",
        "techStack": ["Data Analytics", "Python", "Machine Learning","MLP"],
        "description": "Collaborated with Texas A&M University to develop models for estimating power curves of wind energy farms, enhancing efficiency and predictive maintenance.",
        "logo": PowerCurveLogo,
        "link": {
          "href": "https://github.com/jayshah5696/Power_Curve_Estimation"
        }
      },
      {
        "title": "Exploratory Data Analysis of Mercedes Green Manufacturing Challenge",
        "techStack": ["Data Science", "Python", "Exploratory Data Analysis"],
        "description": "A project associated with Texas A&M University focusing on analyzing the green manufacturing processes of Mercedes, aiming at improving safety and efficiency.",
        "logo": MercedesLogo,
        "link": {
          "href": "https://github.com/jayshah5696/Kaggle_Mercedes"
        }
      },
      {
        "title": "Portfolio Analysis on New York Cab Data",
        "techStack": ["Data Analysis", "Python", "Statistical Modeling"],
        "description": "Performed comprehensive data analysis on New York cab data to uncover insights and patterns, associated with Texas A&M University.",
        "logo": NYCabDataLogo,
        "link": {
          "href": "https://github.com/jayshah5696/DataOpen-2018"
        }
      },
      {
        "title": "Predicting Drowsiness Related Lane Departures",
        "techStack": ["Data Transformation", "Keras"],
        "description": "A project aimed at predicting lane departures caused by drowsiness using novel feature generation techniques and convolutional neural networks, in collaboration with Texas A&M University. Achieved robust results with a confidence interval of 0.75-0.86 using the Bootstrap significance test.",
        "logo": PredictingDrowsinessLogo,
        "link": {
          "href": "https://jayshah5696.github.io/drowsy_driving/"
        }
      },
      {
        "title": "Customer Relationship Prediction for a Mobile Network Operator",
        "techStack": ["CRM", "Data Analytics", "Machine Learning", "Logistic Regression"],
        "description": "Worked on predicting customer behavior (churn, appetency, up-selling) for Orange, using a wide range of classification techniques to identify the highest AUC for individual problems. The project focused on true positives and direct customer communication strategies.",
        "logo": CustomerRelationshipPredictionLogo,
        "link": {
          "href": "https://github.com/jayshah5696/Crm-Analytics"
        }
      },
      {
        "title": "Phase 1 Analysis of Multivariate Quality Control Data for an Industrial Forging Process",
        "techStack": ["Data Analysis", "PCA", "T2 Charts", "M-Cusum Charts", "Minitab"],
        "description": "Conducted principal component analysis and applied T2 and M-Cusum charts on multivariate data from an industrial forging process, achieving significant data reduction and cleansing. This work was associated with Texas A&M University, focusing on quality control data categorization.",
        "logo": Phase1AnalysisLogo,
        "link": {
          "href": "https://github.com/jayshah5696/Phase1_Analysis"
        }
      }
    ],
} as const;
