import { Analytics } from "@vercel/analytics/react"
import StreamLensLogo from "../images/logos/StreamLensLogo.png";
import PowerCurveLogo from "../images/logos/PowerCurveLogo.png";
import MercedesLogo from "../images/logos/MercedesLogo.png";
import NYCabDataLogo from "../images/logos/NYCabDataLogo.png";
import PredictingDrowsinessLogo from "../images/logos/PredictingDrowsinessLogo.png";
import CustomerRelationshipPredictionLogo from "../images/logos/CustomerRelationshipPredictionLogo.png";
import Phase1AnalysisLogo from "../images/logos/Phase1AnalysisLogo.png";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { HuggingFaceIcon } from "@/components/icons/HuggingFace";

export const RESUME_DATA = {
  name: "Jay Shah",
  initials: "JS",
  location: "SanFranscio",
  locationLink: "https://www.google.com/maps/place/SanFranscico",
  about:
    "Data Scientist specializing in AI, with a deep commitment to impactful innovations and social contributions.",
  summary:
    "I am an experienced Data Scientist with over 5 years of experience, focusing on AI innovations for renewable energy. My expertise in predictive maintenance covers wind, solar, and energy storage systems. Beyond technical pursuits, I actively contribute to DataKind’s social impact projects, merging technical expertise with meaningful contributions. With a Master’s in Industrial Systems Engineering, my skill set spans from data engineering to AI, where I lead impactful data science projects.",
  avatarUrl: "https://github.com/jayshah5696/jayshah5696.github.io/blob/29dc4ae4340873d5fbba3de46684db963841bc76/assets/images/Profile.jpg",
  personalWebsiteUrl: "https://jayshah5696.github.io/",
  contact: {
    email: "jayshah5696@gmail.com",
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
      degree: "Master's Degree in Industrial and Systems Engineering",
      start: "2017",
      end: "2019",
    },
    {
      school: "Gujarat State University",
      degree: "Bachelor's Degree in Mechanical Engineering",
      start: "2013",
      end: "2017",
    }
  ],
  work: [
    {
      "company": "SparkCognition",
      "link": "https://www.sparkcognition.com/",
      "badges": ["Menlopark, California"],
      "title": "Data Scientist III",
      "logo": "SparkLogo",
      "start": "2022",
      "end": "Present",
      "description": "Leading data science endeavor of the renewable product research team to develop and productize analytics capabilities."
    },
    {
      "company": "SparkCognition",
      "link": "https://www.sparkcognition.com/",
      "badges": ["Sunnyvale, California"],
      "title": "Data Scientist II",
      "logo": "SparkLogo",
      "start": "2021",
      "end": "2021",
      "description": "Designed and deployed core wind and solar power forecasting capabilities using techniques of XGBoost Informers and achieved 10% mape improvement over SOTA with faster lead time to deployment. Mentored and guided an offshore team of 2 with providing ml systems principles and designs related strategies."
    },
    {
      "company": "Ensemble Energy",
      "link": "https://www.ensembleenergy.com/",
      "badges": ["Palo Alto, California"],
      "title": "Data Scientist",
      "logo": "EnsembleLogo",
      "start": "2019",
      "end": "2021",
      "description": "Built a predictive maintenance system for wind assets to estimate wind turbine’s remaining useful life (RUL).  Developed processes and systems for automated deployment of the models in production with performance tracking using Airflow. Architected real-time data processing (ETL) pipeline for 5 customers and achieved 60% reduction in processing time utilizing multiprocessing pandas dask pipeline in Python on AWS serverless cloud server. Prototyped and productionized statistical tools to provide insight into power production inefficiency and quantify the energy loss."
    },
    {
      "company": "Ensemble Energy",
      "link": "https://www.ensembleenergy.com/",
      "badges": ["Palo Alto, California"],
      "title": "Data Science Intern",
      "logo": "EnsembleLogo",
      "start": "2018",
      "end": "2018",
      "description": "Implemented a robust anomaly detection system to predict component failure using GBM for 8 components of the wind turbine. Estimated bearing type and segmented bearing failures based on 10-min signature profile using K-means clustering to perform RCA. Delivered executable insights to customers by performing physics-based statistical data analysis and advanced data visualization utilizing ggplot & matplotlib library in Python that helped to increase 250K $/year in revenue."
    },
    {
      "company": "Texas A&M University",
      "link": "https://www.tamu.edu/",
      "badges": ["College Station, Texas"],
      "title": "Graduate Research Assistant",
      "logo": "ParabolLogo",
      "start": "2019",
      "end": "2019",
      "description": "Researched with Dr. Yu Ding on applying advanced machine learning methods to solve and predict wind energy system failure. Implemented deep learning methods to predict possible power production and downtimes associated with the failures of wind turbine."
    },
    {
      "company": "Utilities and Energy Services",
      "link": "",
      "badges": ["College Station, Texas"],
      "title": "Student Analyst",
      "logo": "ParabolLogo",
      "start": "2017",
      "end": "2018",
      "description": "Created weather-controlled building baseline regression models for all digitally metered utilities using enterprise energy module. These models are used to monitor consumption across the campus to prevent sensor issues and energy loss. Manipulated Data in SQL to compare baseline modelled consumption with real-time consumption using statistical control limit chart in excel to analyse the average variation related to prediction."
    }
  ]
  ,
  "skills": [
    "Data Science & Machine Learning",
    "Predictive Modeling & Analytics",
    "Natural Language Processing (NLP)",
    "Model Optimization & Fine-tuning",
    "AI-driven Solution Development",
    "Statistical Analysis & Data Visualization",
    "Cloud Computing & Serverless Architectures (AWS, GCP)",
    "Real-time Data Processing & ETL",
    "Software Development (Python, SQL)",
    "Project Management & Team Leadership",
    "Research & Development in Renewable Energy Systems",
    "Machine Learning Model Deployment & Monitoring"
  ],
  projects: 
    [
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
          "href": "https://github.com/jayshah5696/DataOpen-2018https://github.com/jayshah5696/DataOpen-2018"
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
