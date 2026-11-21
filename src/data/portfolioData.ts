export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Enterprise Web" | "AI & Data Science" | "Research" | "Full-Stack";
  badge: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  keyContributions: string[];
  role: string;
  demoUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  externalUrlLabel?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  role: string;
  indexing: string[];
  doiUrl: string;
  abstract: string;
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
}

export const PERSONAL_INFO = {
  name: "Nixen Jenio",
  headline: "Software Engineer",
  tagline: "Building reliable software and data-driven solutions",
  location: "West Jakarta, Indonesia",
  email: "nixenjenio@gmail.com",
  linkedin: "https://linkedin.com/in/nixenjenio",
  github: "https://github.com/nixenjenio",
  cvPath: "/Nixen_Jenio_CV.pdf",
  education: {
    institution: "BINUS University",
    degree: "Bachelor of Computer Science",
    period: "Sep 2022 – Apr 2026",
    gpa: "3.80 / 4.00",
    location: "Jakarta, Indonesia",
  },
  stats: [
    { value: "20+", label: "ERP Enterprise Modules" },
    { value: "93%", label: "ML Model Accuracy" },
    { value: "83.3%", label: "GNN Test Accuracy" },
    { value: "3.80", label: "University GPA / 4.00" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "loluna-cms",
    title: "Loluna Corporate Website",
    subtitle: "Headless CMS Corporate Platform",
    category: "Enterprise Web",
    badge: "Production Client Site",
    featured: true,
    description:
      "A high-performance multilingual corporate web platform equipped with a headless CMS, empowering administrative teams to curate and publish content without code deployment.",
    longDescription:
      "Engineered an enterprise-grade corporate web application with strict adherence to responsive design, accessibility, and search engine optimization. Implemented Sanity CMS as a decoupled content backend, enabling the marketing and administrative team to manage localized articles, media assets, and corporate profiles independently. Delivered an optimized Core Web Vitals score through Next.js server-side rendering and static optimization.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    role: "Frontend Engineer & CMS Architect",
    metrics: [
      { label: "Architecture", value: "Headless CMS" },
      { label: "Localization", value: "Multilingual" },
      { label: "Performance", value: "SEO-Optimized" },
    ],
    keyContributions: [
      "Architected responsive, SEO-optimized user interfaces across desktop and mobile viewports.",
      "Integrated Sanity CMS schemas and webhook revalidation for real-time editorial updates.",
      "Configured multilingual routing and localization pipelines in Next.js.",
      "Deployed and configured production hosting with continuous delivery.",
    ],
    githubUrl: "https://github.com/nixenjenio",
  },
  {
    id: "diabetes-ml",
    title: "Diabetes Predictive Analysis",
    subtitle: "Comparative Machine Learning Classification",
    category: "AI & Data Science",
    badge: "93% Predictive Accuracy",
    featured: true,
    description:
      "Developed robust predictive machine learning pipelines achieving 93% classification accuracy through systematic feature engineering, cross-validation, and algorithm optimization.",
    longDescription:
      "Conducted an end-to-end data science study analyzing diagnostic indicators for diabetes prediction. Processed multidimensional tabular healthcare datasets using outlier detection, normalization, and correlation analysis. Evaluated and tuned gradient boosting and ensemble trees (XGBoost, Random Forest, Scikit-learn), achieving peak test accuracy of 93% with balanced sensitivity and specificity.",
    tags: ["Python", "XGBoost", "Random Forest", "Scikit-learn", "Pandas", "NumPy"],
    role: "Machine Learning Engineer",
    metrics: [
      { label: "Peak Accuracy", value: "93.0%" },
      { label: "Model Type", value: "Ensemble & Boosting" },
      { label: "Validation", value: "Stratified K-Fold" },
    ],
    keyContributions: [
      "Engineered data preprocessing pipelines handling missing diagnostic records and outlier scaling.",
      "Executed comparative benchmarks across Logistic Regression, Random Forest, and XGBoost.",
      "Optimized hyperparameters via Grid Search and cross-validation for maximum ROC-AUC.",
      "Generated feature importance rankings to identify critical clinical indicators.",
    ],
    githubUrl: "https://github.com/nixenjenio",
  },
  {
    id: "enterprise-erp",
    title: "Enterprise ERP System Frontend",
    subtitle: "Scalable Enterprise Operations Suite",
    category: "Enterprise Web",
    badge: "20+ Enterprise Modules",
    featured: true,
    description:
      "Engineered scalable frontend architecture across 20+ ERP modules supporting inventory, sales, purchasing, and finance within an architecture of 28 API service layers and 45+ UI components.",
    longDescription:
      "During the Technical Consultant Internship at PT Global Innovation Technology, served in a core 6-member Agile engineering team building mission-critical business software. Developed modular, role-based interfaces handling high-throughput transactional records. Integrated RESTful endpoints utilizing Axios and React Query for automated cache invalidation, and built secure authentication flows using NextAuth, Zod schema validation, and granular RBAC controls.",
    tags: ["Next.js", "React", "TypeScript", "React Query", "Axios", "Zod", "NextAuth", "Tailwind CSS"],
    role: "Technical Consultant Intern @ PT Global Innovation Technology",
    metrics: [
      { label: "Modules Shipped", value: "20+" },
      { label: "Service Layers", value: "28 APIs" },
      { label: "Shared Components", value: "45+" },
    ],
    keyContributions: [
      "Delivered production UI features across 20+ ERP modules (inventory, sales, finance, purchasing, user management).",
      "Architected 28 structured API service layers with Axios interceptors and React Query state synchronization.",
      "Crafted 45+ reusable, accessible UI component primitives ensuring cohesive design across the suite.",
      "Implemented dynamic forms, enterprise data tables, Zod schema validation, and NextAuth RBAC guards.",
      "Participated actively in SDLC milestones: sprint planning, UAT verification, bug triage, and client releases.",
    ],
    githubUrl: "https://github.com/nixenjenio",
  },
  {
    id: "building-footprint-cv",
    title: "Building Footprint Segmentation",
    subtitle: "Geospatial Computer Vision Pipeline",
    category: "Research",
    badge: "U-Net + Mask R-CNN",
    featured: true,
    description:
      "Engineered a multi-stage Computer Vision pipeline combining U-Net and Mask R-CNN for automated building footprint delineation and segmentation from high-resolution aerial imagery.",
    longDescription:
      "Executed research during the Junior Researcher Internship at BINUS University focused on automated geospatial intelligence. Processed high-resolution orthophotos through QGIS to generate ground-truth vector polygons, raster masks, and training tiles. Implemented deep learning architectures combining semantic segmentation (U-Net) and instance segmentation (Mask R-CNN) to resolve complex overlapping building boundaries, evaluated via Intersection over Union (IoU) metrics.",
    tags: ["Python", "U-Net", "Mask R-CNN", "QGIS", "OpenCV", "Computer Vision", "IoU"],
    role: "Junior Researcher Intern @ BINUS University",
    metrics: [
      { label: "Domain", value: "Aerial Remote Sensing" },
      { label: "Architectures", value: "U-Net & Mask R-CNN" },
      { label: "Metric", value: "IoU & F1-Score" },
    ],
    keyContributions: [
      "Prepared and annotated geospatial datasets using QGIS with tile generation and polygon rasterization.",
      "Trained and evaluated hybrid U-Net and Mask R-CNN models for boundary delineation of dense urban structures.",
      "Conducted comparative benchmark experiments measuring Intersection over Union (IoU) improvements.",
      "Synthesized experimental methodology, tables, and visual outputs for academic research publication.",
    ],
    githubUrl: "https://github.com/nixenjenio",
  },
  {
    id: "gnn-policy-research",
    title: "GNN Policy Network Analysis",
    subtitle: "IEEE ICIMCIS 2025 Peer-Reviewed Publication",
    category: "Research",
    badge: "IEEE & Scopus Indexed",
    featured: true,
    description:
      "Co-authored a peer-reviewed research publication proposing a Graph Attention Network (GAT) framework for policy network analysis, achieving 83.3% test accuracy and outperforming baseline GCNs.",
    longDescription:
      "Published in IEEE Xplore and indexed by Scopus, this study investigates Indonesia's mineral downstream industry policy ecosystem. Designed an automated research pipeline extracting unstructured multi-source web text, extracting entities via SpaCy Named Entity Recognition (NER), constructing heterogeneous relational knowledge graphs with NetworkX, and classifying sentiment dynamics with PyTorch Geometric Graph Attention Networks (GAT), achieving 83.3% accuracy.",
    tags: ["Python", "PyTorch Geometric", "NetworkX", "SpaCy", "NLP", "GNN", "GAT"],
    role: "2nd Author · Research Lead",
    metrics: [
      { label: "Test Accuracy", value: "83.3%" },
      { label: "Status", value: "Scopus Indexed" },
      { label: "Conference", value: "IEEE ICIMCIS 2025" },
    ],
    keyContributions: [
      "Engineered automated text extraction and Named Entity Recognition (NER) pipeline utilizing SpaCy.",
      "Modelled policy relationships into topological network graphs using NetworkX.",
      "Constructed and tuned Graph Attention Networks (GAT) using PyTorch Geometric, outperforming standard GCNs.",
      "Co-authored the peer-reviewed research paper indexed in IEEE Xplore.",
    ],
    externalUrl: "https://ieeexplore.ieee.org/document/11327282",
    externalUrlLabel: "View on IEEE Xplore",
    githubUrl: "https://github.com/nixenjenio",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "git-internship",
    role: "Technical Consultant Intern",
    company: "PT Global Innovation Technology",
    location: "Jakarta, Indonesia",
    period: "September 2025 – July 2026",
    type: "Enterprise Software Engineering",
    summary:
      "Contributed to enterprise web application development within a 6-member Agile engineering team, engineering robust frontend modules across 20+ ERP domains.",
    achievements: [
      "Developed responsive frontend features across 20+ enterprise ERP modules using React, Next.js, TypeScript, and Tailwind CSS.",
      "Supported core business workflows spanning inventory management, sales tracking, purchasing, financial ledgering, reporting, and user administration.",
      "Integrated RESTful endpoints within a structured architecture consisting of 28 API service layers and 45+ reusable UI components.",
      "Leveraged Axios interceptors and React Query for optimized client-side caching, automated re-fetching, and predictable error handling.",
      "Implemented dynamic enterprise forms and data tables with Zod schema validation, NextAuth session management, and granular Role-Based Access Control (RBAC).",
      "Collaborated actively across the full SDLC, including daily standups, code reviews, user acceptance testing (UAT), deployment, and bug resolution.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query", "Axios", "Zod", "NextAuth", "REST APIs"],
  },
  {
    id: "binus-researcher",
    role: "Junior Researcher Intern",
    company: "BINUS University",
    location: "Jakarta, Indonesia",
    period: "March 2025 – August 2025",
    type: "AI & Computer Vision Research",
    summary:
      "Researched and implemented deep learning computer vision architectures for geospatial building footprint segmentation from high-resolution aerial imagery.",
    achievements: [
      "Developed a multi-stage Computer Vision pipeline combining U-Net and Mask R-CNN for precise building footprint segmentation from high-resolution satellite/aerial imagery.",
      "Prepared and curated geospatial datasets using QGIS through vector annotation, instance mask rasterization, and image tiling.",
      "Tackled boundary ambiguity and segmentation degradation in adjacent, tightly clustered urban buildings.",
      "Evaluated model performance using Intersection over Union (IoU) and precision-recall metrics.",
      "Contributed directly to experimental analysis, data visualization, and academic publication preparation.",
    ],
    technologies: ["Python", "U-Net", "Mask R-CNN", "QGIS", "OpenCV", "Deep Learning", "IoU"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used across frontend engineering, backend integrations, and data pipelines",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    description: "Modern web ecosystem and state management tooling for resilient, high-speed applications",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "React Query", level: "Proficient" },
      { name: "Axios", level: "Advanced" },
      { name: "Zod", level: "Proficient" },
      { name: "Zustand", level: "Proficient" },
      { name: "NextAuth", level: "Proficient" },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    description: "Scientific computing, graph analytics, deep learning architectures, and statistical modeling",
    skills: [
      { name: "PyTorch Geometric (PyG)", level: "Proficient" },
      { name: "NetworkX", level: "Proficient" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "XGBoost", level: "Proficient" },
      { name: "Random Forest", level: "Advanced" },
      { name: "SpaCy (NLP)", level: "Proficient" },
      { name: "U-Net & Mask R-CNN", level: "Proficient" },
      { name: "Pandas & NumPy", level: "Advanced" },
    ],
  },
  {
    category: "Developer Tools & Platforms",
    description: "Engineering environments, version control, database engines, and geospatial tooling",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Linux / POSIX Shell", level: "Proficient" },
      { name: "Oracle Database", level: "Proficient" },
      { name: "Figma", level: "Proficient" },
      { name: "Tableau", level: "Proficient" },
      { name: "QGIS", level: "Proficient" },
      { name: "Sanity CMS", level: "Proficient" },
    ],
  },
];

export const PUBLICATION: Publication = {
  title:
    "A Comprehensive Network Analysis of Indonesia's Mineral Downstream Industry Policy Using Graph Neural Networks",
  venue: "2025 8th International Conference on Informatics and Computational Sciences (ICIMCIS)",
  year: "2025",
  role: "Second Author",
  indexing: ["IEEE Xplore", "Scopus Indexed", "Peer-Reviewed"],
  doiUrl: "https://ieeexplore.ieee.org/document/11327282",
  abstract:
    "This research presents a novel graph analytics framework leveraging Graph Attention Networks (GAT) to model and analyze the multifaceted policy network governing Indonesia's mineral downstream industrial strategy. By integrating multi-source web-scraped corpora with automated Named Entity Recognition (NER), relational topological graph synthesis, and sentiment classification, the proposed pipeline achieved an 83.3% test accuracy, substantially outperforming traditional Graph Convolutional Network (GCN) baselines in predicting policy sentiment dynamics.",
  highlights: [
    "Developed an end-to-end graph intelligence pipeline: web ingestion → SpaCy NER → NetworkX topological modeling → GNN classification.",
    "Engineered and benchmarked Graph Attention Network (GAT) architectures against baseline Graph Convolutional Networks (GCN).",
    "Attained 83.3% empirical test accuracy for multi-node sentiment classification.",
    "Formally published in IEEE Xplore and indexed in Scopus.",
  ],
  technologies: ["Python", "PyTorch Geometric", "NetworkX", "SpaCy", "Matplotlib", "NLP", "GNN", "GAT"],
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class",
    issued: "November 2024",
  },
  {
    title: "Data Analysis with Python",
    issuer: "Cognitive Class",
    issued: "May 2024",
  },
];
