/* Portfolio content — single source of truth (from Hardik's brief/résumé) */
const PROFILE = {
  name: 'Hardik Chemburkar',
  titles: ['Data Scientist', 'AI Engineer', 'Data Analyst'],
  phone: '+91 77386 67977',
  email: 'hardikchemburkar@gmail.com',
  location: 'Mumbai, India',
  summary: [
    'I’m a data scientist who genuinely enjoys the messy middle of a problem — the part where raw, half-broken data slowly turns into something a team can actually make decisions with. Most of my work lives at the intersection of machine learning and language: predictive models, NLP pipelines built on BioBERT and RAG, and the BI dashboards that make all of it legible to people who don’t live in notebooks.',
    'Across internships and graduate research I’ve taken projects end to end — from collecting and cleaning large sensor, image, and text datasets, to feature engineering and model evaluation, to shipping the result as a dashboard or a small web app. Along the way I’ve pushed a crop-detection model from 35% to 82% accuracy, indexed nearly half a million research papers, and learned that the hardest 10% of any project is usually explaining it clearly.',
    'Right now I’m finishing my M.S. in Data Science at the University of Arizona and looking for roles where I can keep building models that earn their keep — and tell an honest story with the numbers behind them.',
  ],
};

const EXPERIENCE = [
  {
    role: 'Artificial Intelligence Intern',
    org: 'Hydrotek Farm LLC',
    period: 'Jan 2023 — Mar 2024',
    place: 'Remote · US',
    points: [
      'Collected, processed, and analyzed large-scale sensor and image datasets from hydroponic farms, performing data validation and cleansing.',
      'Conducted exploratory data analysis to identify patterns in crop health indicators and translated findings into actionable insights for operations management.',
      'Built and evaluated predictive models in Python (TensorFlow, Scikit-learn) with iterative feature engineering, improving detection accuracy from 35% to 82%.',
    ],
    metric: { from: '35%', to: '82%', label: 'detection accuracy' },
  },
  {
    role: 'Data Science & Business Analytics Intern',
    org: 'The Sparks Foundation',
    period: 'Dec 2022 — Jan 2023',
    place: 'Remote · Singapore',
    points: [
      'Delivered end-to-end analytics projects spanning regression, clustering, and EDA.',
      'Built a student performance predictive model achieving 95% training and 88% test accuracy with rigorous evaluation.',
      'Designed insight-driven visualizations and reports across retail, sports, and geopolitical datasets for non-technical audiences.',
    ],
    metric: { from: '95%', to: '88%', label: 'train / test accuracy' },
  },
];

/* slug = simple-icons slug, or {fallback:'database'} Lucide name when no brand mark exists */
const SKILLS = [
  { name: 'Python', slug: 'python' },
  { name: 'R', slug: 'r' },
  { name: 'SQL', fallback: 'database' },
  { name: 'TensorFlow', slug: 'tensorflow' },
  { name: 'Scikit-learn', slug: 'scikitlearn' },
  { name: 'Pandas', slug: 'pandas' },
  { name: 'NumPy', slug: 'numpy' },
  { name: 'ChromaDB', fallback: 'box' },
  { name: 'Streamlit', slug: 'streamlit' },
  { name: 'Power BI', fallback: 'bar-chart-3' },
  { name: 'Tableau', fallback: 'pie-chart' },
  { name: 'MySQL', slug: 'mysql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Docker', slug: 'docker' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Jupyter', slug: 'jupyter' },
  { name: 'Linux / Ubuntu', slug: 'ubuntu' },
];

const EDUCATION = [
  {
    degree: 'M.S. in Data Science',
    school: 'University of Arizona',
    period: 'Aug 2024 — May 2026',
    gpa: '3.88 / 4.0',
  },
  {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    school: 'TCET, Mumbai',
    period: 'Aug 2020 — May 2024',
    gpa: '9.47 / 10',
  },
];

const CERTS = [
  { name: 'Oracle Cloud Infrastructure (OCI) 2025 Certified Data Science Professional', by: 'Oracle', when: 'Oct 2025' },
  { name: 'Foundation of Sports Analytics', by: 'University of Michigan', when: 'Jun 2025' },
  { name: 'Data Science & Business Analytics', by: 'The Sparks Foundation', when: 'Jan 2023' },
  { name: 'Linux Spoken Tutorial', by: 'IIT Bombay', when: 'May 2021' },
];

const PROJECTS = [
  {
    id: 'dhlit',
    title: 'DHLit Search',
    tag: 'Large-Scale Literature Analysis · NLP',
    period: 'Spring 2026',
    summary:
      'End-to-end NLP pipeline mining 490,482 papers into a 10 GB BioBERT vector store with a multi-backend RAG application.',
    stat: { value: '490,482', label: 'papers indexed' },
    detail: [
      'DHLit Search is my capstone: a search and discovery engine for digital-humanities literature that lets a researcher ask a question in plain English and get back the most relevant papers from a corpus of nearly half a million documents — along with an AI-generated synthesis grounded in those exact sources.',
      'The pipeline starts with large-scale ingestion. I collected 490,482 papers, then built deduplication and cleaning passes to strip near-duplicates and malformed records before anything reached the model. Each surviving document is embedded with BioBERT and stored in a ~10 GB ChromaDB vector database, so semantic search runs in milliseconds rather than scanning raw text.',
      'On top of the vector store I built a multi-backend RAG layer that can route generation through Vertex AI, Gemini, or a local Ollama model depending on cost, privacy, and latency needs. BERTopic adds an unsupervised topic-modeling view so users can browse the corpus thematically, and the whole thing is wrapped in a Streamlit web app for non-technical researchers.',
    ],
    outcomes: [
      '490,482 papers ingested, deduplicated, and embedded end to end.',
      '~10 GB BioBERT vector index enabling millisecond semantic search.',
      'Swappable Vertex AI / Gemini / Ollama backends behind one RAG interface.',
    ],
    stack: ['BioBERT', 'ChromaDB', 'RAG', 'Vertex AI', 'Gemini', 'Ollama', 'BERTopic', 'Streamlit'],
  },
  {
    id: 'sentiment',
    title: 'Sentiment Analysis',
    tag: 'Statistical NLP',
    period: 'Spring 2025',
    summary:
      'Statistical NLP classifier over large text corpora using TF-IDF features and ensemble methods, tuned against precision / recall / F1.',
    stat: { value: 'TF-IDF', label: '+ ensemble methods' },
    detail: [
      'This project was a deep dive into doing sentiment classification the rigorous, statistical way — no black-box shortcuts. The goal was a model that not only predicts sentiment on large text corpora but whose every step, from preprocessing to evaluation, is transparent and reproducible.',
      'I built the full pipeline by hand: tokenization, normalization, stop-word handling, and TF-IDF feature extraction to turn raw text into a meaningful numerical representation. On top of those features I trained and compared ensemble methods, tuning hyperparameters to balance bias and variance rather than just chasing a single accuracy number.',
      'Evaluation was the part I cared about most. I measured precision, recall, and F1 across classes to understand where the model was confident, where it confused tone, and what that meant for real use — then iterated on the features and ensemble weighting based on what the metrics actually showed.',
    ],
    outcomes: [
      'Hand-built TF-IDF + ensemble pipeline, fully reproducible.',
      'Class-level precision / recall / F1 analysis, not just headline accuracy.',
      'Iterative feature and ensemble tuning driven by error analysis.',
    ],
    stack: ['TF-IDF', 'Ensemble', 'Precision/Recall', 'F1', 'scikit-learn'],
  },
  {
    id: 'tucson',
    title: 'Tucson Crime Data Analysis',
    tag: 'Spatial & Temporal EDA',
    period: 'Fall 2024',
    summary:
      'Spatial and temporal EDA on public-safety data, surfacing concentration zones and trends in stakeholder-ready dashboards.',
    stat: { value: 'Geo-EDA', label: 'public-safety data' },
    detail: [
      'For this project I worked with the City of Tucson’s public-safety data to answer a deceptively simple question: where and when does crime actually concentrate, and how do you show that to people who decide where resources go?',
      'I started with exploratory data analysis across both space and time — mapping incidents geographically to find concentration zones, then layering in temporal patterns to see how those hotspots shift by hour, day, and season. A lot of the work was the unglamorous kind: reconciling inconsistent location fields, handling missing timestamps, and making sure the trends I was seeing were real and not artifacts of how the data was recorded.',
      'The deliverable was a set of dashboards and visualizations built for non-technical stakeholders. The emphasis was on data storytelling — clear maps, honest framing of uncertainty, and visuals that lead the eye to the insight instead of burying it in a table.',
    ],
    outcomes: [
      'Spatial hotspot mapping that surfaced recurring concentration zones.',
      'Temporal analysis of how those zones shift by time of day and season.',
      'Stakeholder-ready dashboards focused on clear, honest storytelling.',
    ],
    stack: ['EDA', 'GeoSpatial', 'Dashboards', 'Data Storytelling'],
  },
];

const SOCIALS = [
  { name: 'GitHub', slug: 'github', href: 'https://github.com/HardikChemburkar2402' },
  { name: 'LinkedIn', custom: 'linkedin', href: 'https://www.linkedin.com/in/hardik-chemburkar/' },
  { name: 'Gmail', slug: 'gmail', href: 'mailto:hardikchemburkar@gmail.com' },
  { name: 'Kaggle', slug: 'kaggle', href: 'https://www.kaggle.com/hardikchemburkar' },
  { name: 'WhatsApp', slug: 'whatsapp', href: 'https://wa.me/917738667977' },
];

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
];

Object.assign(window, { PROFILE, EXPERIENCE, SKILLS, EDUCATION, CERTS, PROJECTS, SOCIALS, NAV });
