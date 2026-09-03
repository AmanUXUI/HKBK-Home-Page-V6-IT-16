import React, { useState, useEffect } from "react";
import { 
  Check, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  Clock, 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft,
  Cpu,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  PhoneCall,
  Play,
  X,
  FileText,
  Download,
  CheckCircle2,
  Brain
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  aimlHeroData,
  aimlOverviewData,
  aimlScopeData,
  aimlScopeCompanies,
  aimlFeesData,
  aimlMouPartners,
  aimlWhoIsItForData,
  aimlStories,
  aimlFaqs,
  aimlCurriculumModules
} from "../data/aimlData";

interface AIMLProgramPageProps {
  onOpenApplyModal: () => void;
  onOpenLoginModal: () => void;
  onNavigateHome: () => void;
}

// Custom Counter Component for Smooth Animated Numbers
function AnimatedCounter({ 
  target, 
  decimals = 0, 
  suffix = "", 
  duration = 2000 
}: { 
  target: number; 
  decimals?: number; 
  suffix?: string; 
  duration?: number; 
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function AIMLProgramPage({
  onOpenApplyModal,
  onOpenLoginModal,
  onNavigateHome
}: AIMLProgramPageProps) {
  // Form State (Matching ME & CSE structure)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    dob: "",
    city: "",
    discipline: "Engineering",
    program: "B.E. Artificial Intelligence & Machine Learning"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Currency & Category Selector for Fee Table
  const [feeCategory, setFeeCategory] = useState<"indian" | "international">("indian");

  // Modals & Sliders
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCurriculumModalOpen, setIsCurriculumModalOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div id="aiml-program-page" className="w-full bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased selection:bg-[#8C1515]/20">
      
      {/* 1. Breadcrumbs Header */}
      <div className="bg-[#FAF8F5] border-b border-[#E5E0D5] py-2.5 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#777]">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#8C1515] transition-colors cursor-pointer flex items-center space-x-1"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#888]">Programs</span>
            <span>/</span>
            <span className="text-[#888]">Engineering</span>
            <span>/</span>
            <span className="text-[#8C1515] font-bold">AI &amp; ML Engineering</span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono">
            <span className="text-[#8C1515] font-bold flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8C1515] animate-pulse" />
              <span>Admissions Open 2026-27</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Hero Section (Matching ME Structure with User Provided Content) */}
      <section className="relative w-full bg-white overflow-hidden pt-6 sm:pt-10">
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative">
          
          {/* Top Row: Left Text & CTAs + Right Form Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-20">
            
            {/* Left Content Area (Columns 1-8) */}
            <div className="lg:col-span-8 pr-0 lg:pr-6">
              
              {/* Category Pill */}
              <div className="inline-block bg-[#F1EFEA] text-[#555] text-[11px] sm:text-xs font-medium px-3 py-1 rounded-md mb-4 border border-[#E2DDD5]">
                {aimlHeroData.categoryPill}
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#111] leading-[1.12] mb-3">
                <span className="block text-[#111] font-bold text-2xl sm:text-3xl lg:text-[32px]">
                  {aimlHeroData.titlePrefix}
                </span>
                <span className="text-[#8C1515] font-black">{aimlHeroData.titleHighlight}</span>{" "}
                <span className="text-[#111] font-bold">{aimlHeroData.titleSuffix}</span>
              </h1>

              {/* Paragraph (User Provided Content) */}
              <p className="text-[14px] sm:text-[15px] text-[#444] leading-[1.65] mb-5 max-w-2xl font-normal">
                {aimlHeroData.description}
              </p>

              {/* Approvals */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-7 text-xs sm:text-sm font-semibold text-[#222]">
                {aimlHeroData.approvals.map((appr, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5">
                    <span className="text-emerald-600">✅</span>
                    <span>{appr}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
                <button
                  onClick={onOpenApplyModal}
                  className="bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 sm:px-8 py-3.5 rounded-lg flex items-center space-x-2.5 transition-all shadow-[0_4px_14px_rgba(140,21,21,0.25)] hover:shadow-[0_6px_20px_rgba(140,21,21,0.35)] active:scale-95 cursor-pointer"
                >
                  <span>APPLY TODAY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Application Form (Columns 9-12) - Elevated over organic wavy backdrop */}
            <div className="lg:col-span-4 relative z-30 lg:-mb-36">
              
              {/* Organic Wavy / Scalloped Gradient Backdrop */}
              <div className="absolute -inset-3 sm:-inset-5 -top-6 -bottom-8 rounded-[28px] overflow-hidden -z-10 shadow-2xl pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#8E7AB5] via-[#3B3486] to-[#0D0C1D]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(197,163,248,0.5)_0%,transparent_60%)]" />

                <svg
                  className="absolute inset-0 w-full h-full object-cover"
                  viewBox="0 0 400 600"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="aimlScallopGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7E60BF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#4335A7" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#1E1B4B" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="aimlScallopGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#A594F9" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="#5944B3" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#151238" stopOpacity="1" />
                    </linearGradient>
                    <filter id="aimlSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <path
                    d="M160,0 C210,40 230,80 200,130 C170,180 260,220 280,270 C300,320 210,360 230,420 C250,480 320,530 310,600 L400,600 L400,0 Z"
                    fill="url(#aimlScallopGrad2)"
                    opacity="0.75"
                  />
                  <path
                    d="M120,0 C175,35 190,75 165,115 C140,155 125,190 145,230 C165,270 240,290 235,350 C230,400 150,430 160,490 C170,540 220,570 210,600 L400,600 L400,0 Z"
                    fill="url(#aimlScallopGrad1)"
                    filter="url(#aimlSoftGlow)"
                  />
                  <path
                    d="M200,0 C250,50 270,95 240,145 C210,195 290,245 285,310 C280,370 230,420 250,480 C270,535 340,565 330,600 L400,600 L400,0 Z"
                    fill="url(#aimlScallopGrad2)"
                    opacity="0.5"
                  />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.22)] p-5 sm:p-6 relative">
                
                {/* Form Header */}
                <div className="text-center mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#666] block">
                    APPLY TODAY FOR
                  </span>
                  <h3 className="font-bold text-lg sm:text-[19px] text-[#111] tracking-tight mt-0.5">
                    ARTIFICIAL INTELLIGENCE &amp; ML PROGRAM
                  </h3>
                  <div className="mt-2 inline-block bg-[#A8181D] text-white text-[10px] font-bold px-3 py-1 rounded-sm">
                    Registration End Date (Phase-II): 10<sup>th</sup> September 2026
                  </div>
                </div>

                {/* Form Body */}
                {formSubmitted ? (
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-emerald-900 text-sm">Application Received</h4>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      Thank you <span className="font-semibold">{formData.name}</span>. Our AI &amp; ML admissions team will reach out at <span className="font-semibold">{formData.phone}</span> shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-emerald-800 underline mt-2 cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="STUDENT NAME"
                        required
                        className="w-full text-[11px] font-medium px-3 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none placeholder:text-[#888] uppercase"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="STUDENT EMAIL ID"
                        required
                        className="w-full text-[11px] font-medium px-3 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none placeholder:text-[#888] uppercase"
                      />
                    </div>

                    <div className="flex space-x-1.5">
                      <div className="w-16 shrink-0">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="w-full text-[11px] font-medium px-1.5 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none bg-white text-[#333] cursor-pointer"
                        >
                          <option value="+91">+91</option>
                          <option value="+971">+971</option>
                          <option value="+1">+1</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="STUDENT MOBILE NO"
                          required
                          className="w-full text-[11px] font-medium px-3 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none placeholder:text-[#888] uppercase"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <input
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        placeholder="SELECT DOB"
                        className="w-full text-[11px] font-medium px-3 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none placeholder:text-[#888] uppercase"
                      />
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full text-[11px] font-medium px-2.5 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none bg-white text-[#666] cursor-pointer"
                      >
                        <option value="">STUDENT CITY</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="w-full text-[11px] font-medium px-3 py-2 rounded border border-[#CCC] bg-white flex items-center justify-between text-[#333]">
                        <span>Engineering</span>
                        <span className="text-[10px] text-[#999] cursor-pointer font-bold">✕ ▾</span>
                      </div>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full text-[11px] font-medium px-2.5 py-2 rounded border border-[#CCC] focus:border-[#E01A22] focus:outline-none bg-white text-[#666] cursor-pointer"
                      >
                        <option value="B.E. Artificial Intelligence & Machine Learning">SELECT PROGRAM</option>
                        <option value="B.E. Artificial Intelligence & Machine Learning">B.E. Artificial Intelligence &amp; ML</option>
                        <option value="B.E. AI & Data Science">B.E. AI &amp; Data Science</option>
                        <option value="B.E. AI Robotics & Edge Computing">B.E. AI Robotics &amp; Edge Computing</option>
                      </select>
                    </div>

                    <p className="text-[10px] text-[#777] text-center leading-tight pt-1">
                      By submitting this form, I agree to receive notifications from the University in the form of SMS/E-mail/Call.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-[0_4px_14px_rgba(140,21,21,0.25)] hover:shadow-[0_6px_18px_rgba(140,21,21,0.35)] disabled:opacity-75"
                    >
                      {isSubmitting ? "PROCESSING..." : "APPLY NOW"}
                    </button>

                    <div className="text-center pt-0.5">
                      <p className="text-[11px] text-[#555]">
                        Already Registered ? Click to{" "}
                        <button
                          type="button"
                          onClick={onOpenLoginModal}
                          className="text-[#8C1515] font-bold hover:underline cursor-pointer"
                        >
                          Login
                        </button>
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

        {/* 3. Campus Background Tech Students & Lab Banner */}
        <div className="relative w-full mt-4 sm:mt-6">

          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] bg-slate-900 overflow-hidden">
            
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
              alt="AI and Machine Learning Students in Computing Lab at HKBK"
              className="w-full h-full object-cover object-[65%_35%]"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />

            {/* Floating 4 White Accreditation Cards Over Backdrop */}
            <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
                  
                  {/* Card 1: Logo 1 (AICTE) */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 flex items-center space-x-3 shadow-md border border-white/60">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E5E0D5] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
                        alt="AICTE Official Logo"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#111] block uppercase">AICTE</span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#444] leading-tight block">
                        All India Council for Technical Education
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Text 1 (AICTE Approval) */}
                  <div className="bg-white rounded-lg p-3 sm:p-3.5 flex items-center shadow-md border border-white/60">
                    <p className="text-[9.5px] sm:text-[10.5px] text-[#444] leading-tight">
                      B.E. AI &amp; ML Program is approved by the Statutory Apex Body <span className="text-[#8C1515] font-semibold underline">AICTE</span>, Ministry of Education, Govt. of India.
                    </p>
                  </div>

                  {/* Card 3: Logo 2 (VTU) */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 flex items-center space-x-3 shadow-md border border-white/60">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E5E0D5] p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                      <img
                        src="https://imgh.in/host/mvpiko"
                        alt="VTU Official Logo"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-[#8C1515] font-serif font-bold text-[9px] text-center leading-tight">VTU<br/>BELGAUM</div>`;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#111] block uppercase">VTU</span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#444] leading-tight block">
                        Visvesvaraya Technological University
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Text 2 (VTU Affiliation) */}
                  <div className="bg-white rounded-lg p-3 sm:p-3.5 flex items-center shadow-md border border-white/60">
                    <p className="text-[9.5px] sm:text-[10.5px] text-[#444] leading-tight">
                      B.E. AI &amp; ML Program is permanently affiliated to <span className="text-[#8C1515] font-semibold underline">VTU</span> Belagavi, approved by Govt. of Karnataka.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4. Bottom Hero Red Info Strip (Course Profile Strip) */}
        <div id="aiml-course-profile-strip" className="w-full bg-[#8C1515] border-t border-[#721111] text-white py-5 sm:py-6 shadow-md relative z-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
              
              {/* Item 1: Department */}
              <div className="flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1">
                  Department
                </span>
                <p className="text-xs sm:text-[14px] font-bold text-white leading-snug">
                  Engineering
                </p>
              </div>

              {/* Item 2: Delivery Mode */}
              <div className="flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1">
                  Delivery Mode
                </span>
                <p className="text-xs sm:text-[14px] font-bold text-white leading-snug">
                  On Campus
                </p>
              </div>

              {/* Item 3: Programs Offered */}
              <div className="flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1">
                  Programs Offered
                </span>
                <p className="text-xs sm:text-[14px] font-bold text-white leading-snug">
                  Degree
                </p>
              </div>

              {/* Item 4: Duration */}
              <div className="flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1">
                  Duration
                </span>
                <p className="text-xs sm:text-[14px] font-bold text-white leading-snug">
                  4
                </p>
              </div>

              {/* Item 5: Extra Electives */}
              <div className="col-span-2 md:col-span-1 flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1">
                  Extra Electives
                </span>
                <div className="flex flex-col items-center justify-center gap-1.5 max-w-xs text-center">
                  <span className="text-[10px] sm:text-[11px] font-semibold bg-white/15 px-2.5 py-0.5 rounded border border-white/20 text-white whitespace-nowrap">
                    Python | NLP with Spacy
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold bg-white/15 px-2.5 py-0.5 rounded border border-white/20 text-white whitespace-nowrap">
                    Keras | PyTorch
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold bg-white/15 px-2.5 py-0.5 rounded border border-white/20 text-white whitespace-nowrap">
                    Scikit Learn
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* 5. Program Overview Section (Matching Reference Layout & User Content) */}
      <section id="aiml-program-overview" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-stretch">
            
            {/* Left Column: Context, Growth & Career Propel */}
            <div className="lg:col-span-6 lg:pr-12 xl:pr-16 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#111111] tracking-tight leading-[1.18] mb-6">
                  {aimlOverviewData.title}
                </h2>

                <div className="space-y-4 text-[14.5px] sm:text-[15.5px] text-[#444] leading-[1.7] font-normal">
                  <p>
                    {aimlOverviewData.leftIntro1}
                  </p>
                  
                  <p>
                    {aimlOverviewData.leftIntro2}
                  </p>

                  {/* Highlight Callout Box: #1 Fastest-Growing Career Field */}
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#E5E0D5] shadow-xs my-3">
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8C1515] shrink-0" />
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#111111]">
                        {aimlOverviewData.calloutTitle}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[13.5px] text-[#555] font-medium leading-relaxed italic">
                      {aimlOverviewData.calloutSub}
                    </p>
                  </div>

                  <p>
                    {aimlOverviewData.careerPropel}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenApplyModal}
                  className="bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center space-x-2.5 transition-all shadow-[0_4px_14px_rgba(140,21,21,0.25)] hover:shadow-[0_6px_20px_rgba(140,21,21,0.35)] active:scale-95 cursor-pointer w-fit"
                >
                  <span>APPLY TODAY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Vertical Red Dividing Line (Desktop) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-stretch py-2">
              <div className="w-[1.5px] bg-[#8C1515]/70 h-full rounded-full" />
            </div>

            {/* Right Column: What is AI & ML? */}
            <div className="lg:col-span-5 lg:pl-4 xl:pl-6 flex flex-col justify-start">
              
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#111111] tracking-tight leading-snug">
                  {aimlOverviewData.rightTitle}
                </h3>
              </div>

              {/* Content Body */}
              <div className="space-y-4 text-[14.5px] sm:text-[15.5px] text-[#444] leading-[1.7] font-normal">
                <p>
                  {aimlOverviewData.aiDefinition}
                </p>

                <p>
                  {aimlOverviewData.mlDefinition}
                </p>

                {/* Software & Systems Highlight Card */}
                <div className="p-3.5 sm:p-4 bg-white rounded-lg border border-[#E5E0D5] text-[13px] sm:text-[13.5px] text-[#333] font-medium leading-relaxed shadow-2xs">
                  <span className="text-[#8C1515] font-bold block mb-1 uppercase tracking-wider text-[11px] font-mono">
                    MACHINE LEARNING &amp; INTELLIGENT SYSTEMS:
                  </span>
                  <p className="text-[#444] leading-relaxed">
                    {aimlOverviewData.mlHighlightBox}
                  </p>
                </div>

                <p>
                  {aimlOverviewData.marketGrowth}
                </p>

                <p>
                  {aimlOverviewData.conclusion}
                </p>
              </div>

            </div>

          </div>

          {/* Syllabus & Course Curriculum Action Banner (Exact Match to Reference Image) */}
          <div className="mt-10 sm:mt-14 pt-6 border-t border-[#E5E0D5]">
            <div className="w-full bg-[#F2EFEB] hover:bg-[#ECE8E0] transition-colors rounded-xl sm:rounded-2xl border border-[#DFD9CD] px-5 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-6 shadow-xs">
              <span className="text-[#555555] text-xs sm:text-[14px] font-medium text-center sm:text-right">
                Explore Detailed Syllabus &amp; Subjects
              </span>
              <button
                onClick={() => setIsCurriculumModalOpen(true)}
                className="inline-flex items-center space-x-2.5 text-[#111111] hover:text-[#8C1515] font-black text-xs sm:text-[13.5px] tracking-wider uppercase transition-colors cursor-pointer group select-none"
              >
                <span>VIEW COURSE CURRICULUM</span>
                <span className="bg-[#8C1515] group-hover:bg-[#9B2329] text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded shadow-xs group-hover:scale-105 transition-all">
                  PDF
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Scope Section (Matching Reference Image Layout with Top Red Card & Photo Banner) */}
      <section id="aiml-scope-section" className="relative w-full bg-white overflow-hidden pt-10 sm:pt-14 pb-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          
          {/* Top Overhanging Scope Red Card */}
          <div className="relative z-20 max-w-2xl lg:max-w-3xl">
            <div className="bg-[#8C1515] text-white p-7 sm:p-9 lg:p-11 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(140,21,21,0.35)] border border-[#7A1212]">
              
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-white tracking-tight leading-tight mb-4">
                {aimlScopeData.title}
              </h2>

              <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] text-white/95 leading-[1.65] font-normal mb-7 max-w-2xl">
                {aimlScopeData.description}
              </p>

              {/* Companies Grid with Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-3.5 sm:gap-y-4">
                {aimlScopeCompanies.map((company) => (
                  <div key={company} className="flex items-center space-x-2.5 sm:space-x-3 group">
                    <div className="w-4 h-4 rounded-[4px] bg-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3 h-3 text-[#8C1515] stroke-[3.5]" />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-white tracking-tight">
                      {company}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Background Photo of Students & Floating Apply CTA */}
        <div className="relative w-full -mt-24 sm:-mt-32 lg:-mt-44 h-[380px] sm:h-[460px] lg:h-[520px] bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
            alt="AI Engineering Students in Collaboration"
            className="w-full h-full object-cover object-[70%_35%]"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />

          {/* Floating Action Button on Right Side */}
          <div className="absolute bottom-8 sm:bottom-12 right-6 sm:right-12 lg:right-20 z-20">
            <button
              onClick={onOpenApplyModal}
              className="bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-6 sm:px-8 py-3.5 rounded-lg flex items-center space-x-2.5 transition-all shadow-[0_10px_30px_rgba(140,21,21,0.5)] hover:shadow-[0_15px_40px_rgba(140,21,21,0.7)] active:scale-95 cursor-pointer"
            >
              <span>APPLY TODAY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

      {/* 7. Eligibility and Fees Details Section */}
      <section id="aiml-eligibility-fees" className="w-full bg-white border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111111] tracking-tight leading-[1.2] mb-3">
              HKBKCE Artificial Intelligence &amp; Machine Learning Eligibility &amp; Fee Details
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#555] leading-[1.7] font-normal">
              As one of the top artificial intelligence and machine learning colleges in Bangalore, HKBKCE maintains clear and transparent admission criteria to ensure the right candidates join this prestigious program.
            </p>
          </div>

          {/* Eligibility Criteria Narrative Box */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#E5E0D5] p-6 sm:p-8 mb-10 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#111] mb-3 flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C1515] shrink-0" />
              <span>Academic Eligibility Requirements</span>
            </h3>
            
            <p className="text-[14px] sm:text-[14.5px] text-[#444] leading-[1.7] mb-4 font-normal">
              Candidates must have passed Second PUC / 12th Standard / 10+2 / A Level / IB / American 12th Grade or an equivalent qualification, with English as one of the subjects, and a minimum aggregate of 45% marks in Physics and Mathematics, along with any one of the following: Chemistry / Bio-Technology / Biology / Electronics / Computer Science.
            </p>
            
            <div className="bg-white rounded-xl border border-[#E5E0D5] p-4 text-xs sm:text-[13.5px] text-[#444] leading-relaxed mb-4">
              <span className="font-bold text-[#8C1515]">Karnataka Candidate Relaxation: </span>
              SC, ST, Category 1, 2A, 2B, 3A, and 3B candidates from Karnataka State are eligible with a minimum aggregate of 40%. This relaxation applies exclusively to Karnataka candidates.
            </div>

            <div className="text-xs sm:text-sm text-[#333]">
              <span className="font-bold text-[#111]">Entrance Examination: </span>
              <span className="text-[#555]">Admission is processed through JEE / KCET or any other recognized engineering entrance examination.</span>
            </div>
          </div>

          {/* Fee Structure Header & Currency / Category Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#111] tracking-tight">
                Detailed Fee Structure (4-Year B.E. Program)
              </h3>
              <p className="text-xs sm:text-sm text-[#666] mt-0.5">
                Transparent semester &amp; annual fees with zero hidden charges.
              </p>
            </div>

            {/* Currency / Category Toggle */}
            <div className="inline-flex p-1 bg-[#F2EFEB] rounded-xl border border-[#DFD9CD] shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setFeeCategory("indian")}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  feeCategory === "indian"
                    ? "bg-[#7B1113] text-white shadow-xs"
                    : "text-[#555] hover:text-[#111]"
                }`}
              >
                Indian Students (INR)
              </button>
              <button
                type="button"
                onClick={() => setFeeCategory("international")}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  feeCategory === "international"
                    ? "bg-[#7B1113] text-white shadow-xs"
                    : "text-[#555] hover:text-[#111]"
                }`}
              >
                International Students (USD)
              </button>
            </div>
          </div>

          {/* Fee Content Tables */}
          {feeCategory === "indian" ? (
            <div className="space-y-8">
              
              {/* Quick Summary Card */}
              <div className="max-w-2xl overflow-x-auto rounded-xl border border-[#D5D0C5] shadow-xs">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-[#3E4C59] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270] whitespace-nowrap">Program Fee</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270] whitespace-nowrap">Total 4-Yr Fee</th>
                      <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Program Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#222]">
                    <tr>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#444] border-r border-[#E5E0D5] whitespace-nowrap">Annual / Semester Basis</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#8C1515] border-r border-[#E5E0D5] whitespace-nowrap">{aimlFeesData.indian.total4Yr}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#333] whitespace-nowrap">4.0 Years (8 Semesters)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Comprehensive Year-by-Year Fee Table */}
              <div className="overflow-hidden rounded-xl border border-[#D5D0C5] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#3E4C59] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270]">YEAR</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270]">TUITION FEE (RS.)</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270]">UNIVERSITY &amp; EXTRA FEES (RS.)</th>
                      <th className="py-3.5 px-4 sm:px-6">TOTAL (RS.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#333]">
                    {aimlFeesData.indian.yearly.map((row) => (
                      <tr key={row.year} className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-medium text-[#111] border-r border-[#E5E0D5]">{row.year}</td>
                        <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">{row.tuition}</td>
                        <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">{row.extra}</td>
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">{row.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#F8F6F2] font-black text-xs sm:text-sm text-[#8C1515]">
                      <td className="py-4 px-4 sm:px-6 uppercase tracking-wider border-r border-[#E5E0D5]">TOTAL</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">{aimlFeesData.indian.summaryTuition}</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">{aimlFeesData.indian.summaryExtra}</td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-extrabold text-[#8C1515]">{aimlFeesData.indian.summaryTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Quick Summary Card for International */}
              <div className="max-w-2xl overflow-x-auto rounded-xl border border-[#D5D0C5] shadow-xs">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-[#3E4C59] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270] whitespace-nowrap">Program Fee</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270] whitespace-nowrap">Total 4-Yr Fee</th>
                      <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Program Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#222]">
                    <tr>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#444] border-r border-[#E5E0D5] whitespace-nowrap">International Tuition</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#8C1515] border-r border-[#E5E0D5] whitespace-nowrap">{aimlFeesData.international.total4Yr}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#333] whitespace-nowrap">4.0 Years (8 Semesters)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Comprehensive Year-by-Year Fee Table for International */}
              <div className="overflow-hidden rounded-xl border border-[#D5D0C5] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#3E4C59] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270]">YEAR</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270]">TUITION FEE ($)</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#546270]">UNIVERSITY &amp; EXTRA FEES ($)</th>
                      <th className="py-3.5 px-4 sm:px-6">TOTAL ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#333]">
                    {aimlFeesData.international.yearly.map((row) => (
                      <tr key={row.year} className="hover:bg-[#FAF8F5] transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 font-medium text-[#111] border-r border-[#E5E0D5]">{row.year}</td>
                        <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">{row.tuition}</td>
                        <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">{row.extra}</td>
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">{row.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#F8F6F2] font-black text-xs sm:text-sm text-[#8C1515]">
                      <td className="py-4 px-4 sm:px-6 uppercase tracking-wider border-r border-[#E5E0D5]">TOTAL</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">{aimlFeesData.international.summaryTuition}</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">{aimlFeesData.international.summaryExtra}</td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-extrabold text-[#8C1515]">{aimlFeesData.international.summaryTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* Action CTA Bar */}
          <div className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E0D5]">
            <p className="text-xs sm:text-[13.5px] text-[#555]">
              * Scholarships &amp; merit concessions available for meritorious students and KCET high rankers.
            </p>
            <button
              onClick={onOpenApplyModal}
              className="bg-[#7B1113] hover:bg-[#8C1515] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3 rounded-lg flex items-center space-x-2.5 transition-all shadow-[0_4px_14px_rgba(123,17,19,0.25)] hover:shadow-[0_6px_20px_rgba(123,17,19,0.35)] active:scale-95 cursor-pointer"
            >
              <span>APPLY FOR ADMISSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. MOU (Memorandum of Understanding) & Industry Collaborations Section */}
      <section id="aiml-mou" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111111] tracking-tight leading-[1.2]">
              Memorandum of Understanding (MOU)
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#555] leading-[1.7] mt-3">
              HKBK College of Engineering collaborates with premier industry leaders, startups, and tech research centers to offer real-world project exposure, specialized certifications, and guaranteed internship pipelines.
            </p>
          </div>
        </div>

        {/* Infinite Scroll Marquee Cards Row (Matching Reference Structure) */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle gradient edge masks for smooth scroll fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent" />

          {/* Marquee Track with duplicated items for seamless loop */}
          <div className="animate-marquee-slow hover:[animation-play-state:paused] flex gap-5 sm:gap-6 py-4 px-4">
            {[
              {
                id: "mou-1",
                name: "Cranes Varsity",
                logo: "https://crm.cranesvarsitycrm.com/IMG/craneslogopng.png"
              },
              {
                id: "mou-2",
                name: "Pentech IT & Networking",
                logo: "https://d502jbuhuh9wk.cloudfront.net/logos/667935babb9e9c3a2bbe1342.png?v=1"
              },
              {
                id: "mou-3",
                name: "Mitron Innovations",
                logo: "https://media.licdn.com/dms/image/v2/D560BAQHjdYDA7Q2Cag/company-logo_200_200/company-logo_200_200/0/1692597585703/mitron_innovations_logo?e=2147483647&v=beta&t=IhDA0LCTYHBYMNcNIc-z_8wgDDfhiUgvL4Y9jErc6lM",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-4",
                name: "YNOS Startup Tech",
                logo: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS329539.png",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-5",
                name: "PD CloudEx Technologies",
                logo: "https://pdcloudex.com/wp-content/uploads/2023/09/pdlightthemebluetext.webp"
              },
              {
                id: "mou-6",
                name: "Enterprise Tech Partners",
                logo: "https://media.licdn.com/dms/image/v2/C560BAQEP4qDjTjLDew/company-logo_200_200/company-logo_200_200/0/1630638497793?e=2147483647&v=beta&t=PycDFmMfFQ1SZj4APrA4WAJKovl_34VHGyq-uuGA1TI"
              },
              {
                id: "mou-7",
                name: "Global EdTech Innovation",
                logo: "https://yt3.googleusercontent.com/sFXyvg6KuS35HqzLLJaYcxrgOgbrHjwqtHyMmRz2px4Qn-SYlrwFNJT-0wAkirSKjmQrr4hQ9g=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              },
              // Duplicated set for seamless loop
              {
                id: "mou-1-dup",
                name: "Cranes Varsity",
                logo: "https://crm.cranesvarsitycrm.com/IMG/craneslogopng.png"
              },
              {
                id: "mou-2-dup",
                name: "Pentech IT & Networking",
                logo: "https://d502jbuhuh9wk.cloudfront.net/logos/667935babb9e9c3a2bbe1342.png?v=1"
              },
              {
                id: "mou-3-dup",
                name: "Mitron Innovations",
                logo: "https://media.licdn.com/dms/image/v2/D560BAQHjdYDA7Q2Cag/company-logo_200_200/company-logo_200_200/0/1692597585703/mitron_innovations_logo?e=2147483647&v=beta&t=IhDA0LCTYHBYMNcNIc-z_8wgDDfhiUgvL4Y9jErc6lM",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-4-dup",
                name: "YNOS Startup Tech",
                logo: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS329539.png",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-5-dup",
                name: "PD CloudEx Technologies",
                logo: "https://pdcloudex.com/wp-content/uploads/2023/09/pdlightthemebluetext.webp"
              },
              {
                id: "mou-6-dup",
                name: "Enterprise Tech Partners",
                logo: "https://media.licdn.com/dms/image/v2/C560BAQEP4qDjTjLDew/company-logo_200_200/company-logo_200_200/0/1630638497793?e=2147483647&v=beta&t=PycDFmMfFQ1SZj4APrA4WAJKovl_34VHGyq-uuGA1TI"
              },
              {
                id: "mou-7-dup",
                name: "Global EdTech Innovation",
                logo: "https://yt3.googleusercontent.com/sFXyvg6KuS35HqzLLJaYcxrgOgbrHjwqtHyMmRz2px4Qn-SYlrwFNJT-0wAkirSKjmQrr4hQ9g=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              }
            ].map((partner, pIdx) => (
              <div
                key={`${partner.id}-${pIdx}`}
                className="w-[240px] sm:w-[290px] md:w-[320px] h-[160px] sm:h-[180px] shrink-0 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E0D5] shadow-sm hover:shadow-lg hover:border-[#8C1515]/40 transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 group cursor-pointer"
              >
                {/* Upper Area: Only MOU Partner label */}
                <div className="flex items-center justify-end w-full">
                  <span className="text-[11px] font-bold tracking-wide text-[#888] group-hover:text-[#8C1515] transition-colors">
                    MOU Partner
                  </span>
                </div>

                {/* Logo Center Container */}
                <div className="w-full h-20 sm:h-24 flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    referrerPolicy="no-referrer"
                    className={`max-h-full max-w-[85%] object-contain transition-transform duration-300 filter drop-shadow-xs ${
                      partner.scale ? `${partner.scale} group-hover:scale-165` : "group-hover:scale-105"
                    }`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".fallback-label")) {
                        const div = document.createElement("div");
                        div.className = "fallback-label text-sm font-black text-[#8C1515] tracking-wider text-center";
                        div.innerText = partner.name;
                        parent.appendChild(div);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Who Is This Program For / Pathways Section (Matching Reference Image Layout) */}
      <section id="aiml-who-is-it-for" className="w-full bg-[#F5F2EC] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Main Section Header */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111111] uppercase tracking-tight leading-[1.15]">
              WHO IS THIS PROGRAM FOR
            </h2>
          </div>

          {/* 3-Column Cards Grid (Exact Match to Reference Image) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Column 1: Is For Individuals Who Are */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <h3 className="text-sm sm:text-[15px] font-black uppercase tracking-wider text-[#111111] mb-5 sm:mb-6">
                IS FOR INDIVIDUALS WHO ARE...
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#333333] leading-[1.75] font-normal">
                {aimlWhoIsItForData.column1}
              </p>
            </div>

            {/* Column 2: Looking For */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <h3 className="text-sm sm:text-[15px] font-black uppercase tracking-wider text-[#111111] mb-5 sm:mb-6">
                LOOKING FOR...
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#333333] leading-[1.75] font-normal">
                {aimlWhoIsItForData.column2}
              </p>
            </div>

            {/* Column 3: To Become */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <h3 className="text-sm sm:text-[15px] font-black uppercase tracking-wider text-[#111111] mb-5 sm:mb-6">
                TO BECOME...
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-[14.5px] sm:text-[15.5px] text-[#333333] leading-relaxed">
                {aimlWhoIsItForData.roles.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 10. Placement Stats Section */}
      <section id="aiml-placement-stats" className="w-full bg-[#8C1515] text-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
            
            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={250} suffix="+" duration={2000} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Companies visiting HKBK
              </p>
            </div>

            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={32.4} decimals={1} suffix="L" duration={2200} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Highest salary offered
              </p>
            </div>

            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={93.3} decimals={1} suffix="%" duration={2400} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Students got placed
              </p>
            </div>

            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={23} suffix="+" duration={1800} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Startups registered
              </p>
            </div>

            <div className="flex flex-col col-span-2 sm:col-span-1">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={42} suffix="K" duration={2000} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Highest internship stipend
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 11. Hiring From Us Section */}
      <section id="aiml-hiring-partners" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111111] tracking-tight leading-[1.2]">
              Hiring From Us
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#555] leading-[1.7] mt-3">
              Leading artificial intelligence enterprises, research labs, cloud computing giants, and tech conglomerates recruit top talent from HKBK.
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-3xl sm:rounded-[32px] border border-[#E5E0D5] shadow-sm py-8 sm:py-12 px-2 sm:px-6 relative overflow-hidden">
            
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-white via-white/80 to-transparent rounded-r-3xl" />

            <div className="space-y-6 sm:space-y-8">
              {/* Row 1: Slides Left */}
              <div className="animate-marquee-slow flex items-center space-x-12 sm:space-x-20 whitespace-nowrap">
                {[
                  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", h: "h-5 sm:h-6" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-5 sm:h-6" },
                  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg", h: "h-5 sm:h-6" },
                  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", h: "h-5 sm:h-6" },
                  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg", h: "h-5 sm:h-6" },
                  // Duplicated for continuous loop
                  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", h: "h-5 sm:h-6" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-5 sm:h-6" },
                  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg", h: "h-5 sm:h-6" },
                  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", h: "h-5 sm:h-6" },
                  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg", h: "h-5 sm:h-6" }
                ].map((c, idx) => (
                  <div key={`row1-${c.name}-${idx}`} className="flex items-center justify-center shrink-0 px-2 group cursor-pointer">
                    <img
                      src={c.logo}
                      alt={c.name}
                      referrerPolicy="no-referrer"
                      className={`${c.h} w-auto object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-2xs`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-label")) {
                          const span = document.createElement("span");
                          span.className = "fallback-label text-base font-bold text-[#333]";
                          span.innerText = c.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: Slides Right */}
              <div className="animate-marquee-right flex items-center space-x-12 sm:space-x-20 whitespace-nowrap">
                {[
                  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg", h: "h-5 sm:h-6" },
                  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", h: "h-6 sm:h-7" },
                  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", h: "h-6 sm:h-7" },
                  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", h: "h-6 sm:h-7" },
                  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", h: "h-5 sm:h-6" },
                  { name: "Qualcomm", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Qualcomm-Logo.svg", h: "h-5 sm:h-6" },
                  // Duplicated
                  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg", h: "h-5 sm:h-6" },
                  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg", h: "h-6 sm:h-7" },
                  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", h: "h-6 sm:h-7" },
                  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", h: "h-6 sm:h-7" },
                  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", h: "h-5 sm:h-6" },
                  { name: "Qualcomm", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Qualcomm-Logo.svg", h: "h-5 sm:h-6" }
                ].map((c, idx) => (
                  <div key={`row2-${c.name}-${idx}`} className="flex items-center justify-center shrink-0 px-2 group cursor-pointer">
                    <img
                      src={c.logo}
                      alt={c.name}
                      referrerPolicy="no-referrer"
                      className={`${c.h} w-auto object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-2xs`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-label")) {
                          const span = document.createElement("span");
                          span.className = "fallback-label text-base font-bold text-[#333]";
                          span.innerText = c.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. Student Stories Section */}
      <section id="aiml-student-stories" className="w-full relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
            alt="HKBK Campus Architecture"
            className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
          <div className="absolute inset-0 bg-[#8C1515]/15 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-[1.15] tracking-tight mb-8">
                Inspiring Stories<br />
                of Our Students’<br />
                Journeys
              </h2>
              
              <button
                onClick={onOpenApplyModal}
                className="inline-flex items-center space-x-2.5 bg-white text-[#111111] hover:bg-[#8C1515] hover:text-white px-7 py-3.5 rounded-sm text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer group"
              >
                <span>VIEW ALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Interactive Testimonial Slider */}
            <div className="lg:col-span-8 relative">
              {(() => {
                const currentStory = aimlStories[currentStoryIndex];

                return (
                  <div className="relative px-8 sm:px-12 py-4">
                    <button
                      onClick={() => setCurrentStoryIndex((prev) => (prev === 0 ? aimlStories.length - 1 : prev - 1))}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 p-2 transition-all cursor-pointer z-10"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </button>

                    <button
                      onClick={() => setCurrentStoryIndex((prev) => (prev === aimlStories.length - 1 ? 0 : prev + 1))}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 p-2 transition-all cursor-pointer z-10"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </button>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStory.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex flex-col items-center text-center max-w-2xl mx-auto"
                      >
                        <p className="text-[16px] sm:text-[19px] lg:text-[21px] text-white/95 font-normal leading-[1.65] mb-8 sm:mb-10 text-center tracking-normal font-sans">
                          &ldquo;{currentStory.quote}&rdquo;
                        </p>

                        <div className="flex flex-col items-center text-center">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                            {currentStory.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                            {currentStory.role}, {currentStory.company}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center space-x-2 mt-8">
                      {aimlStories.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setCurrentStoryIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            currentStoryIndex === idx 
                              ? "w-8 bg-[#8C1515]" 
                              : "w-2 bg-white/30 hover:bg-white/60"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>
      </section>

      {/* 13. FAQs Section */}
      <section id="aiml-faqs" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-16 sm:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#8C1515]/10 text-[#8C1515] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#111111] tracking-tight leading-[1.2] mb-3">
              Artificial Intelligence &amp; ML - FAQs
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#555] leading-[1.7]">
              Get detailed, transparent answers regarding our four-year B.E. Artificial Intelligence and Machine Learning programme, GPU computing facilities, curriculum, and admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Accordion Items */}
            <div className="lg:col-span-8 space-y-4">
              {aimlFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                      isOpen
                        ? "border-[#8C1515] shadow-md ring-1 ring-[#8C1515]/10"
                        : "border-[#E5E0D5] hover:border-[#8C1515]/40 shadow-xs"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full py-5 px-5 sm:px-6 flex items-start justify-between text-left cursor-pointer group gap-4"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start space-x-3.5 sm:space-x-4">
                        <span className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md shrink-0 mt-0.5 transition-colors ${
                          isOpen 
                            ? "bg-[#8C1515] text-white" 
                            : "bg-[#FAF8F5] text-[#8C1515] border border-[#E5E0D5]"
                        }`}>
                          {faq.index}
                        </span>
                        <h3 className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                          isOpen ? "text-[#8C1515]" : "text-[#111] group-hover:text-[#8C1515]"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "bg-[#8C1515]/10 text-[#8C1515] rotate-180" 
                          : "bg-[#FAF8F5] text-[#666] group-hover:bg-[#8C1515]/10 group-hover:text-[#8C1515]"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-[13.5px] sm:text-[15px] text-[#444] leading-[1.75] border-t border-[#FAF8F5] ml-0 sm:ml-12">
                            <p className="bg-[#FAF8F5]/80 p-4 rounded-xl border border-[#E5E0D5]/60 text-[#333]">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Quick Helpdesk Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              <div className="bg-white rounded-2xl border border-[#E5E0D5] p-6 sm:p-7 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#8C1515]/10 flex items-center justify-center text-[#8C1515] mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111] mb-2">
                  Have More Questions?
                </h3>
                <p className="text-xs sm:text-[13.5px] text-[#666] leading-relaxed mb-6">
                  Speak directly with our AI &amp; ML academic advisors regarding curriculum specializations, KCET/COMEDK quotas, GPU compute labs, or placement records.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={onOpenApplyModal}
                    className="w-full bg-[#8C1515] hover:bg-[#9B2329] text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Apply for AI &amp; ML 2026 Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+919035039000"
                    className="w-full bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#E5E0D5] text-[#111] text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#8C1515]" />
                    <span>Call Admissions: +91 90350 39000</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#111] to-[#222] text-white rounded-2xl p-6 shadow-sm border border-white/10">
                <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#E5E0D5]/70 block mb-1">
                  Admissions 2026 Status
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  Applications Open Now
                </h4>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  KCET, COMEDK &amp; Direct Quota admissions are actively processed on a merit basis.
                </p>
                <div className="flex items-center space-x-2 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>AI &amp; ML Seats Filling Fast</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 14. Interactive Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#111]">
                <div className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-[#E01A22] fill-[#E01A22]" />
                  <h3 className="text-sm font-bold text-white font-sans">
                    HKBK AI &amp; Machine Learning Supercomputing Lab Tour
                  </h3>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="HKBK AI Department Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 bg-[#111] flex items-center justify-between">
                <p className="text-xs text-white/70">
                  Explore GPU workstations, deep learning neural rigs, and robotics hubs at HKBK.
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenApplyModal();
                  }}
                  className="text-xs font-bold text-white bg-[#E01A22] hover:bg-[#C0151C] px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0 ml-4"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 15. Curriculum Modal */}
      <AnimatePresence>
        {isCurriculumModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsCurriculumModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E5E0D5] flex flex-col"
            >
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E5E0D5] bg-[#FAF8F5]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8C1515]/10 flex items-center justify-center text-[#8C1515]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#111]">
                        B.E. AI &amp; Machine Learning Curriculum
                      </h3>
                      <span className="bg-[#8C1515] text-white text-[10px] font-black px-2 py-0.5 rounded">
                        VTU SCHEME
                      </span>
                    </div>
                    <p className="text-xs text-[#666]">
                      Comprehensive 4-Year (8 Semesters) NEP &amp; VTU CBCS Course Structure
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCurriculumModalOpen(false)}
                  className="text-[#666] hover:text-[#111] p-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 sm:p-6 overflow-y-auto space-y-6 max-h-[calc(90vh-160px)]">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D5]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C1515] block mb-1">Total Credits</span>
                    <span className="text-xl font-black text-[#111]">160 Credits</span>
                    <span className="text-xs text-[#666] block mt-1">Theory, GPU Labs &amp; Capstone</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D5]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C1515] block mb-1">Specialized Tracks</span>
                    <span className="text-xl font-black text-[#111]">GenAI &amp; Computer Vision</span>
                    <span className="text-xs text-[#666] block mt-1">Industry-certified modules</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E0D5]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C1515] block mb-1">Innovation Labs</span>
                    <span className="text-xl font-black text-[#111]">NVIDIA &amp; Cloud Labs</span>
                    <span className="text-xs text-[#666] block mt-1">Deep learning workstations</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#111] mb-3">
                    Semester-Wise Key Course Modules
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aimlCurriculumModules.map((group, idx) => (
                      <div key={idx} className="bg-[#FAF8F5] border border-[#E5E0D5] p-4 rounded-xl">
                        <h5 className="text-xs font-black uppercase text-[#8C1515] tracking-wider mb-2">
                          {group.sem}
                        </h5>
                        <ul className="space-y-1.5">
                          {group.subjects.map((sub, sIdx) => (
                            <li key={sIdx} className="flex items-start space-x-2 text-xs text-[#444]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8C1515] shrink-0 mt-0.5" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#E5E0D5] flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-[#666]">
                  * VTU Scheme Choice Based Credit System (CBCS).
                </p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      alert("Detailed VTU B.E. Artificial Intelligence & Machine Learning syllabus PDF downloaded successfully.");
                    }}
                    className="bg-[#111] hover:bg-[#222] text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Syllabus</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsCurriculumModalOpen(false);
                      onOpenApplyModal();
                    }}
                    className="bg-[#8C1515] hover:bg-[#9B2329] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    Apply for AI &amp; ML 2026
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
