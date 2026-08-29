export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  prevCompany: string;
  companyLogo: string;
  education: string;
  image: string;
  bio: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProgramDetails {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  desc: string;
  highlights: string[];
  curriculum: { year: number; subjects: string[] }[];
}

export interface OutcomeMetric {
  title: string;
  value: string;
  sub: string;
}
