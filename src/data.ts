import { FacultyMember, FAQItem, ProgramDetails, OutcomeMetric } from "./types";

export const outcomeMetrics: OutcomeMetric[] = [
  { title: "Highest International CTC", value: "₹32.4 LPA", sub: "Top placements in global tech hubs & MNCs" },
  { title: "Average Placement Package", value: "₹7.8 LPA", sub: "Unmatched training and career alignment standard" },
  { title: "Assured Internships & Projects", value: "100%", sub: "Mandatory corporate internships starting in Year 3" },
  { title: "Active Hiring Ecosystem", value: "350+", sub: "Including Fortune 500 MNCs & high-growth tech unicorns" }
];

export const hiringPartners = [
  { name: "Google", logo: "Google" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Amazon", logo: "Amazon" },
  { name: "Adobe", logo: "Adobe" },
  { name: "Infosys", logo: "Infosys" },
  { name: "Wipro", logo: "Wipro" },
  { name: "Capgemini", logo: "Capgemini" },
  { name: "Cognizant", logo: "Cognizant" },
  { name: "TCS", logo: "TCS" }
];

export const programs: ProgramDetails[] = [
  {
    id: "be-cse",
    name: "B.E. in Computer Science & Engineering",
    duration: "4 Years (Full-Time, VTU Affiliated & NBA Accredited)",
    eligibility: "Class 12 / PUC with Physics, Mathematics & English (Min 45% aggregate)",
    desc: "A highly demanded engineering degree focused on advanced computation, software design, modern system structures, and state-of-the-art computing environments.",
    highlights: [
      "Industry-aligned specialization in Cloud Computing & Cybersecurity",
      "In-house incubation center and software engineering prototyping labs",
      "Technical training certifications from Oracle, IBM, and AWS",
      "100% placement support with dedicated mock-interview modules"
    ],
    curriculum: [
      {
        year: 1,
        subjects: ["Engineering Mathematics & Calculus", "Programming in C & Data Structures", "Applied Physics Lab", "Basic Electrical & Electronics", "Communication Skills"]
      },
      {
        year: 2,
        subjects: ["Object Oriented Programming (Java)", "Database Management Systems", "Computer Organization & Architecture", "Design & Analysis of Algorithms", "Discrete Mathematics"]
      },
      {
        year: 3,
        subjects: ["Software Engineering & Agile", "Computer Networks & Security", "Web Technologies & Projects", "Formal Languages & Automata", "Technical Seminar"]
      },
      {
        year: 4,
        subjects: ["Cloud Computing & Microservices", "Big Data Analytics", "Machine Learning & Applications", "Major Capstone Industry Project", "Professional Ethics"]
      }
    ]
  },
  {
    id: "be-aiml",
    name: "B.E. in Artificial Intelligence & Machine Learning",
    duration: "4 Years (Full-Time, AICTE Approved & VTU Affiliated)",
    eligibility: "Class 12 / PUC with Physics, Mathematics & English (Min 45% aggregate)",
    desc: "A forward-looking engineering curriculum focusing on deep learning networks, data intelligence, natural language interfaces, and cognitive computer systems.",
    highlights: [
      "Exclusive access to GPU-enabled AI Research & Deep Learning labs",
      "Hands-on projects with computer vision and predictive data engines",
      "Guest lectures from Bangalore's leading data scientists & AI architects",
      "Collaborative project-building sessions for national-level hackathons"
    ],
    curriculum: [
      {
        year: 1,
        subjects: ["Mathematics for Machine Learning", "Python Programming Foundations", "Applied Chemistry Lab", "Elements of Mechanical Engineering", "Environmental Studies"]
      },
      {
        year: 2,
        subjects: ["Data Structures & Python Libraries", "Statistical Methods & Inference", "Operating Systems", "Mathematical Foundations for AI", "Database Systems"]
      },
      {
        year: 3,
        subjects: ["Artificial Intelligence & Search Tech", "Machine Learning Core Concepts", "Neural Networks & Deep Learning", "Natural Language Processing", "Mini Project"]
      },
      {
        year: 4,
        subjects: ["Computer Vision & Applications", "Reinforcement Learning", "AI in Robotics", "Comprehensive Capstone Research Project", "IPR & Patent Drafting"]
      }
    ]
  },
  {
    id: "mba-finance-hr",
    name: "Master of Business Administration (MBA)",
    duration: "2 Years (Full-Time, VTU Affiliated & UGC Recognized)",
    eligibility: "Undergraduate Degree in any discipline (Min 50% aggregate) + KMAT / PGCET / MAT",
    desc: "An elite management program built to forge strategic business leaders, innovative entrepreneurs, and dynamic global corporate administrators.",
    highlights: [
      "Dual specializations in Marketing, Finance, HR, or Business Analytics",
      "Real-world case studies based on Harvard Business Review modules",
      "Bangalore corporate corridor connection with weekly industry visits",
      "Leadership camps, design thinking workshops, and soft skill labs"
    ],
    curriculum: [
      {
        year: 1,
        subjects: ["Management & Organizational Behavior", "Managerial Economics", "Accounting for Managers", "Business Statistics", "Marketing Management", "Business Communication"]
      },
      {
        year: 2,
        subjects: ["Strategic Management & Planning", "Corporate Finance & Taxation", "Consumer Behavior & Analytics", "Strategic Human Resource Management", "Corporate Internship Project"]
      }
    ]
  },
  {
    id: "bca-cloud",
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years (Full-Time, Bangalore University Affiliated)",
    eligibility: "Class 12 / PUC in any stream (Science, Commerce, or Arts)",
    desc: "An application-focused undergraduate degree providing pristine knowledge of software development, web application engineering, and database management.",
    highlights: [
      "Focus on Android/iOS Mobile App development frameworks",
      "Web Full-Stack technologies training (MERN & Spring Boot)",
      "Dedicated placement modules alongside main engineering cohorts",
      "Active coding club and developer community participation"
    ],
    curriculum: [
      {
        year: 1,
        subjects: ["Programming Concepts & C", "Discrete Mathematical Structures", "Database Management Systems", "Web Design Basics", "Digital Electronics"]
      },
      {
        year: 2,
        subjects: ["Data Structures & Algorithms in C++", "Software Engineering Principles", "Operating System Concepts", "Java Programming Lab", "Visual Programming"]
      },
      {
        year: 3,
        subjects: ["Web Application Development (MERN)", "Mobile Application Design", "Introduction to Cloud Computing", "Corporate Project & Viva-Voce"]
      }
    ]
  }
];

export const facultyMembers: FacultyMember[] = [
  {
    id: "vivek-vk",
    name: "Vivek VK",
    role: "Professor, Robotics & Automation",
    prevCompany: "ABB Robotics",
    companyLogo: "ABB",
    education: "Ph.D. from IISc Bangalore",
    image: "https://imgh.in/host/fwl7xk",
    bio: "Pioneering researcher in collaborative industrial robots, computer vision, and edge computing algorithms for manufacturing automation."
  },
  {
    id: "florian-finke",
    name: "Florian Finke",
    role: "Dean of Computer Applications",
    prevCompany: "Infosys Research Lab",
    companyLogo: "Infosys",
    education: "Ph.D. from IIT Bombay",
    image: "https://imgh.in/host/dw3ewm",
    bio: "A veteran in cloud infrastructure, specializing in large-scale distributed systems and enterprise application architecture."
  },
  {
    id: "nithin-vh",
    name: "Nithin VH",
    role: "Director of Training & Placements",
    prevCompany: "Cognizant Technology Solutions",
    companyLogo: "CTS",
    education: "M.Tech in Systems Engineering, NITK Surathkal",
    image: "https://imgh.in/host/25kzk3",
    bio: "Bridges the gap between classroom learnings and industry demands, maintaining HKBK's phenomenal placement and corporate internship records."
  },
  {
    id: "sahaana-reyas",
    name: "Sahaana Reyas",
    role: "Senior Assistant Professor, Management",
    prevCompany: "Wipro Executive Coach",
    companyLogo: "Wipro",
    education: "MBA, IIM Kozhikode",
    image: "https://imgh.in/host/ml1udg",
    bio: "Instructs Strategic Leadership, Corporate Communication, and HR analytics. Consults several scaling Bangalore startups on corporate agility."
  },
  {
    id: "madhura-alva",
    name: "Madhura Alva",
    role: "Head of Artificial Intelligence Department",
    prevCompany: "Samsung R&D Bangalore",
    companyLogo: "Samsung",
    education: "Ph.D. in Machine Learning, IIT Madras",
    image: "https://imgh.in/host/6k3swg",
    bio: "Published author of 30+ peer-reviewed international journals. Specialist in high-performance neural structures and automated vision systems."
  },
  {
    id: "good-methods",
    name: "Good Methods",
    role: "Dean of Engineering, HKBK",
    prevCompany: "VTU Academic Council",
    companyLogo: "VTU",
    education: "Ph.D. in Computer Science, IISc Bangalore",
    image: "https://imgh.in/host/7if3mj",
    bio: "Over 22 years of academic and administrative experience. Spearheads premium curriculum-industry integration and research excellence at HKBK."
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Why should I choose HKBK Group of Institutions?",
    answer: "HKBK combines academic excellence, industry-oriented learning, modern infrastructure, and strong career support to help students become future-ready professionals."
  },
  {
    id: "faq-2",
    category: "Academics",
    question: "What courses are offered at HKBK Group of Institutions?",
    answer: "HKBK offers B.E. programs in CSE, AI & ML, ISE, ECE, and Mechanical Engineering, along with BCA, BBA, B.Com, and BBA Aviation programs."
  },
  {
    id: "faq-3",
    category: "General",
    question: "What makes HKBK different from other colleges in Bangalore?",
    answer: "HKBK stands out through its industry-integrated curriculum, experienced faculty, career-focused training, global learning environment, and strategic location opposite Manyata Tech Park."
  },
  {
    id: "faq-4",
    category: "Infrastructure",
    question: "What facilities are available on the HKBK campus?",
    answer: "Students have access to smart classrooms, advanced laboratories, a digital library, high-speed Wi-Fi, sports facilities, cafeteria, seminar halls, innovation spaces, and student activity centers."
  },
  {
    id: "faq-5",
    category: "Placements",
    question: "Does HKBK provide placement and career support?",
    answer: "Yes. The Training & Placement Department provides aptitude training, soft-skills development, interview preparation, internship opportunities, and campus recruitment assistance."
  },
  {
    id: "faq-6",
    category: "Placements",
    question: "Does HKBK offer industry exposure?",
    answer: "Yes. Students benefit from internships, industrial visits, workshops, certification programs, guest lectures, and collaborations with leading companies and industry experts."
  },
  {
    id: "faq-7",
    category: "Infrastructure",
    question: "Is hostel accommodation available for students?",
    answer: "Yes. HKBK provides separate hostel facilities for boys and girls with comfortable rooms, dining facilities, security, and recreational amenities."
  },
  {
    id: "faq-8",
    category: "Academics",
    question: "How does HKBK prepare students for future careers?",
    answer: "HKBK focuses on practical learning, project-based education, skill development programs, leadership training, and industry-relevant certifications to enhance employability."
  },
  {
    id: "faq-9",
    category: "Infrastructure",
    question: "What kind of campus life can students expect at HKBK?",
    answer: "Students enjoy a vibrant campus life with technical clubs, cultural events, sports activities, innovation challenges, leadership opportunities, and community engagement programs."
  },
  {
    id: "faq-10",
    category: "General",
    question: "Why is HKBK an ideal destination for higher education in Bangalore?",
    answer: "With 29+ years of academic excellence, a multicultural student community, modern infrastructure, strong industry connections, and a prime location opposite Manyata Tech Park, HKBK offers students an environment to learn, grow, and succeed."
  }
];

export const comparisonMetrics = [
  {
    metric: "Affiliation & Accreditation",
    sst: "VTU Affiliated, AICTE Approved, NBA & NAAC Accredited",
    traditional: "Non-accredited regional institutions with outdated modules"
  },
  {
    metric: "Curriculum Integration",
    sst: "Updated with corporate partners, IBM/Oracle certified tracks",
    traditional: "Static theoretical models without modern tech alignment"
  },
  {
    metric: "Placement Training",
    sst: "In-house training starting from Year 1 with continuous mock panels",
    traditional: "Crash courses in the final semester with minimal real-world preparation"
  },
  {
    metric: "Location Advantage",
    sst: "Bangalore heartland, providing instant access to major tech hubs",
    traditional: "Remote outskirts with minimal corporate networking prospects"
  }
];
