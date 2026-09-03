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
