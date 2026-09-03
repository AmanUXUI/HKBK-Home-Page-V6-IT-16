export interface AIMLStory {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface AIMLFAQ {
  id: string;
  index: string;
  question: string;
  answer: string;
}

export interface AIMLPartner {
  id: string;
  name: string;
  logo: string;
}

export const aimlHeroData = {
  categoryPill: "Study Artificial Intelligence and ML Engineering in Bangalore",
  titlePrefix: "Bachelor of Engineering -",
  titleHighlight: "Artificial Intelligence & ML",
  titleSuffix: "Engineering",
  description:
    "Study Artificial Intelligence and Machine Learning at HKBK, as one of the top AI and ML engineering colleges in Bangalore, we prepare you for a successful and rewarding career in today’s fast-growing tech field. Explore the practice of Artificial Intelligence",
  approvals: [
    "Approved by AICTE",
    "Affiliated to VTU Belagavi"
  ]
};

export const aimlCourseProfile = [
  {
    label: "Department",
    val: "Engineering"
  },
  {
    label: "Delivery Mode",
    val: "On Campus"
  },
  {
    label: "Programs Offered",
    val: "Degree"
  },
  {
    label: "Duration",
    val: "4"
  },
  {
    label: "Extra Electives",
    val: [
      "Python | NLP with Spacy",
      "Keras | PyTorch",
      "Scikit Learn"
    ]
  }
];

export const aimlOverviewData = {
  title: "Best Artificial Intelligence and Machine Learning Engineering College in Bangalore, India",
  leftIntro1:
    "In a world driven by data and intelligent systems, choosing the best Artificial Intelligence Engineering college in Bangalore can be the most defining decision of your career. The Department of Artificial Intelligence and Machine Learning (AI & ML) at HKBKCE offers a cutting-edge B.E. programme designed to prepare students for the most in-demand roles in both industry and academia.",
  leftIntro2:
    "B.E. in Artificial Intelligence and Machine Learning is currently the highest-demand discipline in the global tech landscape. Leading companies such as Microsoft, Google, Amazon, Tesla, and NVIDIA have already integrated AI and ML deeply into their core systems and the demand for skilled professionals in this field is growing exponentially every year. As one of the top Artificial Intelligence Engineering colleges in India, HKBKCE equips students with the knowledge, tools, and hands-on experience needed to drive change, spark innovation, and deliver outstanding business outcomes using the power of AI.",
  calloutTitle: "The #1 fastest-growing career field in 2026",
  calloutSub: "(AI/ML roles grew 163% in one year. The demand is real, salaries are high, and the talent gap is wide open)",
  careerPropel:
    "Propel your career towards a better job and salary with the most demandable AI & Machine learning program. You will learn how AI really works, exploring topics like machine learning, neural networks, natural language processing, and much more. And you will get a chance to apply these ideas to real applications.",
  rightTitle: "What is Artificial Intelligence & Machine Learning?",
  aiDefinition:
    "Artificial Intelligence (AI) involves the development of computer systems that simulate human brain functionality, enabling machines to perform tasks that typically require human intelligence, such as reasoning, problem-solving, perception, and decision-making.",
  mlDefinition:
    "Machine Learning (ML) is a powerful branch of Artificial Intelligence based on the principle that systems can learn from data, identify patterns, and make intelligent decisions with minimal human intervention. As a subset of AI, Machine Learning is making tremendous strides in simulating human thinking, making computers smarter, faster, and more capable than ever before.",
  mlHighlightBox:
    "Machine Learning is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention. Computers are becoming smarter, as AI and ML, a subset of AI, make tremendous strides in simulating human thinking.",
  marketGrowth:
    "Artificial Intelligence software, developed by the world's leading AI companies, represents one of the fastest-growing markets globally focused on creating and providing intelligent, automated problem-solving solutions across every industry.",
  conclusion:
    "As a premier AI ML Engineering college in Bangalore, HKBKCE ensures that students are at the forefront of this technological revolution."
};

export const aimlScopeData = {
  title: "Scope",
  description: "Graduates from our AI & ML programme are placed at some of India's and the world's most prestigious organizations.",
  companies: [
    "Adobe",
    "Amazon",
    "Google",
    "Nokia",
    "IBM",
    "Juspay",
    "NTT Data"
  ]
};

export const aimlScopeCompanies = [
  "Adobe",
  "Amazon",
  "Google",
  "Nokia",
  "IBM",
  "Juspay",
  "NTT Data"
];

export const aimlFeesData = {
  indian: {
    total4Yr: "₹ 11,00,000/- INR",
    yearly: [
      { year: "Year 1", tuition: "₹ 3,30,000", extra: "₹ 20,000", total: "₹ 3,50,000" },
      { year: "Year 2", tuition: "₹ 2,30,000", extra: "₹ 20,000", total: "₹ 2,50,000" },
      { year: "Year 3", tuition: "₹ 2,30,000", extra: "₹ 20,000", total: "₹ 2,50,000" },
      { year: "Year 4", tuition: "₹ 2,30,000", extra: "₹ 20,000", total: "₹ 2,50,000" }
    ],
    summaryTuition: "₹ 10,20,000",
    summaryExtra: "₹ 80,000",
    summaryTotal: "₹ 11,00,000"
  },
  international: {
    total4Yr: "$ 17,000 USD",
    yearly: [
      { year: "Year 1", tuition: "$7,000", extra: "$250", total: "$7,250" },
      { year: "Year 2", tuition: "$3,000", extra: "$250", total: "$3,250" },
      { year: "Year 3", tuition: "$3,000", extra: "$250", total: "$3,250" },
      { year: "Year 4", tuition: "$3,000", extra: "$250", total: "$3,250" }
    ],
    summaryTuition: "$16,000",
    summaryExtra: "$1,000",
    summaryTotal: "$17,000"
  }
};

export const aimlMouPartners: AIMLPartner[] = [
  {
    id: "mou-1",
    name: "NVIDIA Deep Learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    id: "mou-2",
    name: "Google Cloud AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg"
  },
  {
    id: "mou-3",
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
  },
  {
    id: "mou-4",
    name: "IBM Cognitive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: "mou-5",
    name: "Intel AI Academy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg"
  },
  {
    id: "mou-6",
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    id: "mou-7",
    name: "Infosys Springboard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  }
];

export const aimlWhoIsItForData = {
  column1:
    "passionate about mathematics and technology, with strong analytical and abstract reasoning skills. You have an interest in how intelligent systems learn and make decisions, enjoy hands-on coding and experimentation, and are suited to a demanding, technically rigorous academic environment.",
  column2:
    "a rigorous, hands-on Artificial Intelligence and Machine Learning programme from HKBKCE that builds strong fundamentals in data, algorithms, and intelligent systems. You want to understand not just how AI models work, but how to design, train, and apply them across real-world industries.",
  roles: [
    "an AI / ML Engineer",
    "a Data Scientist & Data Analyst",
    "an NLP Engineer",
    "a Computer Vision Engineer",
    "a Deep Learning Researcher",
    "an AI Product Manager",
    "a Robotics Engineer",
    "a Business Intelligence Analyst",
    "an AI Solutions Architect"
  ]
};

export const aimlStories: AIMLStory[] = [
  {
    id: "story-1",
    name: "AREEBA KHAN",
    role: "AI Research Engineer",
    company: "Google Cloud AI, Bengaluru",
    quote:
      "The NVIDIA-powered computing lab and deep learning research guidance at HKBK provided the ideal ecosystem to experiment with large transformer models. Today at Google, I work on production-scale neural algorithms that empower millions of users daily."
  },
  {
    id: "story-2",
    name: "HARSHIT VERMA",
    role: "Machine Learning Solutions Architect",
    company: "Amazon Web Services (AWS)",
    quote:
      "HKBK's AI & ML curriculum balances mathematical rigor with cloud deployment. The capstone hackathons, research publications, and faculty mentorship gave me the exact technical edge required to join AWS as an ML architect straight out of college."
  },
  {
    id: "story-3",
    name: "ZAINAB FATIMA",
    role: "Computer Vision & Edge AI Specialist",
    company: "Microsoft AI Development Center",
    quote:
      "Working on real-world computer vision projects in our department lab helped me patent an intelligent edge inspection system in my third year. The industry connections and guidance at HKBK made all the difference in launching my deep-tech career."
  }
];

export const aimlFaqs: AIMLFAQ[] = [
  {
    id: "faq-1",
    index: "01",
    question: "What is the B.E. Artificial Intelligence and Machine Learning programme at HKBK CE?",
    answer:
      "The B.E. Artificial Intelligence and Machine Learning programme at HKBK College of Engineering, Bengaluru, focuses on building foundations in computing, AI, machine learning and data-driven technologies. The department was established in the 2021–22 academic year and its intake increased from 60 to 120 for 2024–25."
  },
  {
    id: "faq-2",
    index: "02",
    question: "What will I study in AI and Machine Learning at HKBK College of Engineering?",
    answer:
      "Students study computing and AI-related areas including programming, data structures, operating systems, machine learning, neural networks and natural language processing, along with mathematics and other engineering subjects prescribed in the curriculum. The programme combines theoretical concepts with experimental and application-oriented learning."
  },
  {
    id: "faq-3",
    index: "03",
    question: "What is the eligibility for B.E. AI and Machine Learning at HKBK CE?",
    answer:
      "Candidates must have passed Second PUC, Class 12 or an equivalent qualification with English and at least 45% aggregate in Physics and Mathematics along with an eligible optional subject. Eligible Karnataka reserved-category candidates require a minimum of 40%. Admission is processed through JEE, KCET or another recognised engineering entrance examination."
  },
  {
    id: "faq-4",
    index: "04",
    question: "What career opportunities are available after AI and Machine Learning at HKBK CE?",
    answer:
      "AI & ML graduates can explore roles such as AI/ML Engineer, Data Scientist, Data Analyst, NLP Engineer, Computer Vision Engineer, Deep Learning Researcher, AI Product Manager, Robotics Engineer, Business Intelligence Analyst and AI Solutions Architect."
  },
  {
    id: "faq-5",
    index: "05",
    question: "Does HKBK CE provide practical exposure to Artificial Intelligence and Machine Learning?",
    answer:
      "Yes. HKBK CE states that the programme is designed around theoretical concepts and experimental learning in AI, machine learning and allied fields. The department also conducts activities around applied AI topics; for example, its listed events include an expert session on productionising machine-learning models."
  },
  {
    id: "faq-6",
    index: "06",
    question: "Which companies are listed as recruiters for AI & ML students at HKBK CE?",
    answer:
      "HKBK CE's AI & ML programme page lists companies including Adobe, Amazon, Google, Nokia, IBM, Juspay and NTT Data in its recruitment section. Actual placement opportunities depend on recruitment cycles, student eligibility, skills and company requirements."
  }
];

export const aimlCurriculumModules = [
  {
    sem: "Year 1 (Semesters 1 & 2)",
    subjects: [
      "Mathematics for Machine Learning (Calculus & Linear Algebra)",
      "Problem Solving with Python & C Programming",
      "Digital Logic & Computer Systems",
      "Applied Physics & Computational Chemistry Labs",
      "Foundations of Data Analysis & Algorithmic Thinking"
    ]
  },
  {
    sem: "Year 2 (Semesters 3 & 4)",
    subjects: [
      "Data Structures & Object-Oriented Algorithms",
      "Discrete Mathematics & Probability Theory",
      "Database Management Systems & SQL/NoSQL",
      "Design and Analysis of Algorithms",
      "Principles of Artificial Intelligence & Search Techniques",
      "Statistical Methods & Exploratory Data Analysis"
    ]
  },
  {
    sem: "Year 3 (Semesters 5 & 6)",
    subjects: [
      "Machine Learning Algorithms & Model Evaluation",
      "Deep Learning & Neural Network Architectures",
      "Natural Language Processing & Speech Recognition",
      "Computer Vision & Digital Image Processing",
      "Big Data Analytics & Distributed Computing (Spark/Hadoop)",
      "Cloud Computing & AI Microservices"
    ]
  },
  {
    sem: "Year 4 (Semesters 7 & 8)",
    subjects: [
      "Generative AI, LLMs & Foundation Models",
      "Reinforcement Learning & Autonomous Agents",
      "MLOps, Model Deployment & Edge AI Computing",
      "AI Ethics, Explainable AI (XAI) & Governance",
      "Major Capstone Industry AI Research Project",
      "Industry Internship & Technical Seminar"
    ]
  }
];

export interface DepartmentNutshellItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  stats?: { label: string; value: string }[];
  keyHighlights: string[];
  callout?: {
    title: string;
    description: string;
  };
}

export const aimlDepartmentNutshellData: DepartmentNutshellItem[] = [
  {
    id: "achievements",
    title: "Achievements",
    tagline: "Academic Excellence, Hackathon Triumphs & Milestones",
    badge: "Milestones",
    description:
      "The Department of Artificial Intelligence & Machine Learning at HKBK College of Engineering has consistently demonstrated exceptional standards in technical innovation, student placement success, and national competitive benchmarks.",
    stats: [
      { label: "Highest CTC", value: "₹32.4 LPA" },
      { label: "Overall Placement", value: "93.3%" },
      { label: "Hackathons Won", value: "24+" },
      { label: "Faculty Awards", value: "12+" }
    ],
    keyHighlights: [
      "Top placement records with students recruited by global technology leaders including Adobe, Amazon, Google, Juspay, and Nokia.",
      "First prize winners at the National Smart India Hackathon (SIH) for developing an AI-driven smart healthcare diagnosis assistant.",
      "Dr. Tabassum Ara (Professor & HOD, AI & ML) honored with the prestigious 'Best Faculty of the Year' award for innovative technology integration in teaching and research.",
      "Recognized by Visvesvaraya Technological University (VTU) as an emerging Center of Excellence in Machine Learning and Data Science.",
      "Consistently high semester academic results with multiple university top-rank holders across core computing subjects."
    ],
    callout: {
      title: "Student Innovation Spotlight",
      description:
        "Student teams from the Department built an automated crop-disease detection algorithm that was featured at the VTU State-Level Innovation Conclave."
    }
  },
  {
    id: "patents",
    title: "Patents",
    tagline: "Breakthrough Intellectual Property & Inventive Solutions",
    badge: "IPR & Patents",
    description:
      "Innovation and original research are central to our departmental ethos. Faculty members and students are actively supported by the HKBK IPR & Incubation Cell to file national and international patents.",
    stats: [
      { label: "International Patents", value: "3" },
      { label: "Indian Patents Published", value: "8+" },
      { label: "Patents Filed", value: "14+" },
      { label: "IPR Funding Support", value: "100%" }
    ],
    keyHighlights: [
      "International Australian Patent granted to Dr. Tabassum Ara (Professor & Head, Dept. of AI & ML) for 'An Apparatus to Design a Dynamic Key Dependent S-Box for Symmetric Encryption for IoT Devices'.",
      "Published Indian Patent on 'IoT and Deep Learning Framework for Real-Time Cardiac Arrhythmia Detection using Wearable Sensors'.",
      "Patent on 'Automated Deep Neural Network Architecture for Autonomous Drone Collision Avoidance in Low-Light Urban Environments'.",
      "Invention disclosure on 'Privacy-Preserving Federated Learning Pipeline for Healthcare Data Aggregation across Multi-Cloud Environments'.",
      "Dedicated institutional financial grant providing 100% filing fee reimbursement for approved student-driven innovations."
    ],
    callout: {
      title: "Comprehensive IPR Support",
      description:
        "HKBK's Intellectual Property Rights Cell mentors students from the ideation and prior-art search stages all the way through legal documentation and patent granting."
    }
  },
  {
    id: "research",
    title: "Research",
    tagline: "Pioneering Frontiers in AI, Neural Networks & Cognitive Computing",
    badge: "R&D Thrust",
    description:
      "Our faculty and research scholars engage in multidisciplinary inquiries spanning generative models, computer vision, natural language understanding, and secure cyber-physical systems.",
    stats: [
      { label: "Indexed Papers", value: "55+" },
      { label: "Scopus / Web of Sci", value: "40+" },
      { label: "Citations Count", value: "650+" },
      { label: "Funded Projects", value: "₹45L+" }
    ],
    keyHighlights: [
      "Thrust Research Areas: Large Language Models (LLMs), Explainable AI (XAI), Medical Image Synthesis, Edge AI, Cognitive Robotics, and Cyber Threat Intelligence.",
      "Publications in high-impact journals including IEEE Access, Springer Nature, Elsevier, and ACM Digital Library.",
      "Research grants and technical sponsorships received from VTU, KSCST (Karnataka State Council for Science & Technology), and MSME Govt. of India.",
      "Collaborative research agreements with international research groups and leading Indian technology startups.",
      "Undergraduate Research Fellowship (UGRF) allowing 3rd and 4th-year students to publish peer-reviewed papers prior to graduation."
    ],
    callout: {
      title: "Interdisciplinary Research Labs",
      description:
        "Students work on live cross-domain problems merging AI with biomedical sensors, renewable smart grids, and autonomous automotive systems."
    }
  },
  {
    id: "expert-sessions",
    title: "Expert Sessions",
    tagline: "Industry Masterclasses, Tech Talks & Practical Workshops",
    badge: "Industry Connect",
    description:
      "Bridging the classroom with industry reality, the department regularly hosts senior architects, Silicon Valley engineers, and distinguished academics for immersive interactive sessions.",
    stats: [
      { label: "Annual Tech Talks", value: "20+" },
      { label: "Industry Trainers", value: "35+" },
      { label: "Hands-on Workshops", value: "15+" },
      { label: "Global Speakers", value: "10+" }
    ],
    keyHighlights: [
      "Specialized Masterclass on 'Productionising Machine Learning Models: From Jupyter Notebooks to Docker & Kubernetes' by senior MLOps engineers.",
      "Expert Lecture Series on 'Generative AI, Retrieval-Augmented Generation (RAG) and Agentic Workflows' conducted by cloud AI architects.",
      "Technical Deep-Dive into 'Transformer Architectures and Vision-Language Multi-Modal Foundations' with hands-on PyTorch coding.",
      "Industry panel on 'AI Ethics, Algorithmic Bias & Responsible Computing Standards in Enterprise Deployments'.",
      "Interactive technical interview preparation and competitive coding bootcamps mentored by engineers from FAANG companies."
    ],
    callout: {
      title: "Real-World Engineering Insight",
      description:
        "Sessions emphasize enterprise-grade software development practices, including version control, model monitoring, data drift, and scalable API microservices."
    }
  },
  {
    id: "activities",
    title: "Activities",
    tagline: "Clubs, Hackathons, Tech Fests & Community Coding",
    badge: "Student Life",
    description:
      "Life at the Department of AI & ML is dynamic and vibrant. Students run active technical clubs, organize hackathons, participate in Kaggle sprints, and engage in social tech outreach.",
    stats: [
      { label: "Active Tech Clubs", value: "3" },
      { label: "Coding Competitions", value: "18/yr" },
      { label: "Hackathon Participants", value: "500+" },
      { label: "Industrial Tours", value: "4/yr" }
    ],
    keyHighlights: [
      "'NeuralNexus' AI & Data Science Club: Weekly student-led code jams, algorithmic challenges, and paper-reading groups.",
      "Annual 24-Hour National Hackathon ('Hack-AI-Thon') featuring industry problem statements in healthcare, fintech, and green sustainability.",
      "Participation in Kaggle community competitions and global open-source events such as Google Summer of Code and Hacktoberfest.",
      "Industrial visits to high-tech organizations including ISRO Telemetry Centre, Cloud Data Centers, and Innovation Labs across Bengaluru.",
      "Community outreach programs teaching foundational computer literacy and basic AI awareness to high school students in local communities."
    ],
    callout: {
      title: "Holistic Student Experience",
      description:
        "Our activity calendar balances technical prowess with teamwork, presentation skills, leadership development, and entrepreneurial confidence."
    }
  },
  {
    id: "labs",
    title: "Labs",
    tagline: "High-Performance GPU Workstations & Cloud Infrastructure",
    badge: "Facilities",
    description:
      "The department houses cutting-edge laboratory facilities built specifically for computationally intensive deep learning workloads, computer vision experiments, and high-throughput data pipelines.",
    stats: [
      { label: "NVIDIA GPUs", value: "Dedicated" },
      { label: "Gigabit LAN", value: "1 Gbps" },
      { label: "Workstations", value: "120+" },
      { label: "Cloud Sandboxes", value: "AWS / GCP" }
    ],
    keyHighlights: [
      "NVIDIA AI & Deep Learning Lab: High-end workstations equipped with NVIDIA RTX GPUs, multi-core processors, and CUDA computing runtimes.",
      "Computer Vision & Edge AI Lab: High-speed machine vision cameras, LiDAR sensors, NVIDIA Jetson Nano kits, and Raspberry Pi 5 embedded setups.",
      "Data Analytics & Cloud Sandbox: High-speed cloud credits and virtual sandboxes for distributed Spark, Hadoop, and BigQuery analytics.",
      "Comprehensive Software Ecosystem: PyTorch, TensorFlow, Keras, Hugging Face, OpenCV, Docker, JupyterLab, Anaconda, and MATLAB.",
      "24/7 Remote Lab Access: Secure VPN credentials enabling students to submit deep learning training jobs from anywhere on campus."
    ],
    callout: {
      title: "State-of-the-Art Computing",
      description:
        "Every workstation is configured with verified AI acceleration drivers, guaranteeing zero bottlenecks when training complex deep learning architectures."
    }
  },
  {
    id: "mentoring-system",
    title: "Mentoring System",
    tagline: "Proctorial Care, Academic Counseling & Career Direction",
    badge: "Support System",
    description:
      "We believe that individual attention unlocks every student's highest potential. Our structured proctorial framework guarantees close guidance throughout the undergraduate journey.",
    stats: [
      { label: "Mentor-Student Ratio", value: "1 : 15" },
      { label: "Reviews per Sem", value: "4+" },
      { label: "Career Guidance", value: "100%" },
      { label: "Counseling Support", value: "Dedicated" }
    ],
    keyHighlights: [
      "Dedicated 1:15 Proctoring Model: A designated faculty mentor closely monitors a small group of 15 students across all 4 academic years.",
      "Continuous Academic Progress Tracking: Regular reviews of internal assessments, laboratory evaluations, attendance, and conceptual clarity.",
      "Remedial & Advanced Learning Tracks: Special coaching for students seeking extra assistance alongside fast-track research tracks for high achievers.",
      "Career Pathway Planning: One-on-one sessions for placement grooming, resume building, mock interviews, and competitive exams (GATE/GRE/CAT).",
      "Holistic Wellness & Mental Health: Qualified campus counselors providing confidential guidance and emotional wellbeing support."
    ],
    callout: {
      title: "Parent-Teacher Partnership",
      description:
        "Mentors maintain regular communication with parents via an automated ERP portal to share academic attendance, marks, and achievements."
    }
  },
  {
    id: "course-curriculum",
    title: "Course Curriculum",
    tagline: "VTU NEP-2020 Aligned Scheme with Flexible Electives",
    badge: "Academics",
    description:
      "The B.E. in Artificial Intelligence & Machine Learning follows a comprehensive 160-credit, 8-semester curriculum aligned with VTU regulations and the National Education Policy (NEP 2020).",
    stats: [
      { label: "Degree Credits", value: "160 Credits" },
      { label: "Hands-on Labs", value: "18 Labs" },
      { label: "Industry Electives", value: "12+" },
      { label: "Degree Duration", value: "4 Years" }
    ],
    keyHighlights: [
      "Semesters 1 & 2 (Foundations): Mathematics for AI (Linear Algebra, Calculus), Python Programming, Digital Electronics, and Problem Solving.",
      "Semesters 3 & 4 (Core Computing): Data Structures, Object-Oriented System Design, Discrete Maths, Algorithms, and Database Management.",
      "Semesters 5 & 6 (AI & ML Specialization): Machine Learning, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data.",
      "Semesters 7 & 8 (Advanced Applications): Generative AI & LLMs, Reinforcement Learning, MLOps, AI Ethics, Capstone Project & Full-Semester Internship.",
      "Integrated Minors & Certifications: Options to pursue value-added micro-credentials in Cloud Architecture, Cybersecurity, and Data Engineering."
    ],
    callout: {
      title: "Outcome-Based Curriculum",
      description:
        "Every course module is mapped directly to specific Course Outcomes (COs) and Program Outcomes (POs) to guarantee industry-ready mastery."
    }
  },
  {
    id: "peo-so-po-pso",
    title: "PEO, SO, PO & PSO",
    tagline: "Program Educational Objectives & Defined Learning Outcomes",
    badge: "Accreditation",
    description:
      "Our educational framework is formulated on clear, measurable learning outcomes benchmarked against the Washington Accord and NBA standards for engineering excellence.",
    stats: [
      { label: "PEOs Defined", value: "3 Objectives" },
      { label: "Program Outcomes", value: "12 POs" },
      { label: "PSOs Defined", value: "2 Specific" },
      { label: "NBA Framework", value: "Compliant" }
    ],
    keyHighlights: [
      "PEO-1 (Technical Mastery): Graduates excel in applying computational theory and machine learning models to solve complex real-world challenges.",
      "PEO-2 (Professional Success): Graduates thrive in leading software, AI, and multinational enterprises, or pursue advanced research in world-class institutions.",
      "PEO-3 (Ethical Leadership): Graduates champion responsible AI practices, data privacy, social responsibility, and continuous lifelong self-learning.",
      "PO 1 to 12 (Core Graduate Attributes): Engineering Knowledge, Problem Analysis, Design/Development, Modern Tool Usage, Engineer & Society, Ethics, Project Management.",
      "PSO-1: Formulate and build scalable machine learning, deep learning, and cognitive systems using modern mathematical and computational techniques.",
      "PSO-2: Architect and deploy production-grade cloud and edge AI pipelines complying with enterprise performance, security, and ethical guidelines."
    ],
    callout: {
      title: "Outcome-Based Assessment",
      description:
        "Continuous evaluation metrics track every student's attainment across all 12 Program Outcomes from day one to graduation."
    }
  },
  {
    id: "standards",
    title: "Standards",
    tagline: "Quality Benchmarks, Accreditations & Academic Rigor",
    badge: "Quality Assurance",
    description:
      "The department adheres to stringent national and global quality standards, ensuring transparency, academic integrity, and benchmarked infrastructure.",
    stats: [
      { label: "AICTE Status", value: "Approved" },
      { label: "VTU Affiliation", value: "Permanent" },
      { label: "NAAC Rating", value: "Accredited" },
      { label: "ISO Standard", value: "9001:2015" }
    ],
    keyHighlights: [
      "All-India Council for Technical Education (AICTE) recognized and affiliated with Visvesvaraya Technological University (VTU), Belagavi.",
      "National Assessment and Accreditation Council (NAAC) accredited institution adhering to rigorous quality standards in education and student welfare.",
      "ISO 9001:2015 certified internal academic, examination, lab safety, and administrative processes.",
      "Standardized rubrics for continuous internal evaluation (CIE), laboratory journals, mini-projects, and capstone dissertations.",
      "Strict compliance with IEEE standards on Ethical Considerations in Artificial Intelligence and Autonomous Systems."
    ],
    callout: {
      title: "Zero-Tolerance Academic Integrity",
      description:
        "All student research papers and project code repositories are verified through automated plagiarism and originality evaluation tools."
    }
  },
  {
    id: "alumni",
    title: "Alumni",
    tagline: "Global Network of Engineers, Researchers & Tech Leaders",
    badge: "Network",
    description:
      "Our alumni network spans the globe—building high-impact artificial intelligence solutions at premier tech conglomerates, innovative startups, and top-tier research institutes.",
    stats: [
      { label: "Global Reach", value: "15+ Countries" },
      { label: "Tech Conglomerates", value: "50+ Firms" },
      { label: "Higher Studies", value: "US / UK / EU" },
      { label: "Alumni Mentors", value: "Active" }
    ],
    keyHighlights: [
      "Alumni working as AI Engineers, Machine Learning Scientists, and Data Architects at companies including Google, Amazon, Microsoft, Adobe, and IBM.",
      "Graduates pursuing Masters (MS) and Ph.D. degrees at premier universities across the United States, United Kingdom, Canada, and Germany.",
      "Active Alumni Mentorship Circle: Regular 1-on-1 career guidance sessions connecting current students with alumni working across Silicon Valley and Bengaluru.",
      "Alumni Entrepreneurship: Graduates who have founded funded tech startups in generative AI, health-tech, and logistics automation.",
      "Annual 'Return to Roots' Alumni Meet fostering long-term professional networking and collaborative campus placement drives."
    ],
    callout: {
      title: "Lifelong Alumni Community",
      description:
        "The HKBK Alumni Association provides a lifelong collaborative ecosystem for career advancement, startup co-founding, and technical collaboration."
    }
  }
];
