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
  Cpu,
  ShieldCheck,
  Award,
  BookOpen,
  Database,
  Cloud,
  Network
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ISEProgramPageProps {
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
      
      // Easing out cubic
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

export default function ISEProgramPage({
  onOpenApplyModal,
  onOpenLoginModal,
  onNavigateHome
}: ISEProgramPageProps) {
  // Form State (Matching ME/CSE structure)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    dob: "",
    city: "",
    discipline: "Engineering",
    program: "B.E. Information Science & Engineering"
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
    <div id="ise-program-page" className="w-full bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased selection:bg-[#8C1515]/20">
      
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
            <span className="text-[#8C1515] font-bold">Information Science &amp; Engineering</span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono">
            <span className="text-[#8C1515] font-bold flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8C1515] animate-pulse" />
              <span>Admissions Open 2026-27</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Hero Section (Pixel-Accurate to ME Hero Architecture) */}
      <section className="relative w-full bg-white overflow-hidden pt-6 sm:pt-10">
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative">
          
          {/* Top Row: Left Text & CTAs + Right Form Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-20">
            
            {/* Left Content Area (Columns 1-8) */}
            <div className="lg:col-span-8 pr-0 lg:pr-6">
              
              {/* Category Pill */}
              <div className="inline-block bg-[#F1EFEA] text-[#555] text-[11px] sm:text-xs font-medium px-3 py-1 rounded-md mb-4 border border-[#E2DDD5]">
                Study Information Science and Engineering in Bangalore
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#111] leading-[1.12] mb-3">
                <span className="block text-[#111] font-bold text-2xl sm:text-3xl lg:text-[32px]">
                  Bachelor of Engineering -
                </span>
                <span className="text-[#8C1515] font-black">Information Science</span>{" "}
                <span className="text-[#111] font-bold">& Engineering</span>
              </h1>

              {/* "In Association with IBM" (Clean inline presentation without blue box container) */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5">
                <span className="text-xs sm:text-sm font-semibold text-[#444] tracking-tight">
                  In Association with
                </span>
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                  alt="IBM Logo"
                  className="h-7 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Paragraph (Exact User Prompt Hero Copy) */}
              <p className="text-[14px] sm:text-[15px] text-[#444] leading-[1.65] mb-5 max-w-2xl font-normal">
                Information science is transforming everything around us. Study Information Science Engineering in Bangalore at HKBK and get placed at top companies with excellent career opportunities. Get involved to solve world problems.
              </p>

              {/* Approvals */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-7 text-xs sm:text-sm font-semibold text-[#222]">
                <div className="flex items-center space-x-1.5">
                  <span className="text-emerald-600">✅</span>
                  <span>Approved by AICTE</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-emerald-600">✅</span>
                  <span>Affiliated to VTU</span>
                </div>
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

            {/* Right Application Form (Columns 9-12) - Elevated over the organic wavy backdrop */}
            <div className="lg:col-span-4 relative z-30 lg:-mb-36">
              
              {/* Organic Wavy / Scalloped Gradient Backdrop (Reference Image Replica) */}
              <div className="absolute -inset-3 sm:-inset-5 -top-6 -bottom-8 rounded-[28px] overflow-hidden -z-10 shadow-2xl pointer-events-none">
                {/* Base Gradient Canvas (Lilac to Deep Midnight Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#8E7AB5] via-[#3B3486] to-[#0D0C1D]" />

                {/* Soft Radial Ambient Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(197,163,248,0.5)_0%,transparent_60%)]" />

                {/* Organic Scalloped Floating SVG Wave Layers */}
                <svg
                  className="absolute inset-0 w-full h-full object-cover"
                  viewBox="0 0 400 600"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="iseScallopGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7E60BF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#4335A7" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#1E1B4B" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="iseScallopGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#A594F9" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="#5944B3" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#151238" stopOpacity="1" />
                    </linearGradient>
                    <filter id="iseSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Scalloped Wave Ribbon 1 */}
                  <path
                    d="M-20 60 C 100 20, 240 120, 420 50 C 440 180, 390 320, 420 460 C 310 440, 190 530, -20 480 Z"
                    fill="url(#iseScallopGrad1)"
                    opacity="0.85"
                  />

                  {/* Scalloped Wave Ribbon 2 */}
                  <path
                    d="M-20 180 C 120 140, 220 280, 420 210 C 430 360, 340 480, 420 580 C 260 550, 140 620, -20 560 Z"
                    fill="url(#iseScallopGrad2)"
                    opacity="0.65"
                    filter="url(#iseSoftGlow)"
                  />
                </svg>

                {/* Subtle Inner Border Ring */}
                <div className="absolute inset-0 rounded-[28px] border border-white/15" />
              </div>

              {/* Main White Card Container */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:p-6 transition-all duration-300">
                
                {/* Header Titles */}
                <div className="text-center mb-3">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-500 uppercase font-semibold block mb-1">
                    APPLY TODAY FOR
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-tight">
                    INFORMATION SCIENCE &amp; ENGINEERING PROGRAM
                  </h3>
                </div>

                {/* Maroon Registration Date Ribbon */}
                <div className="bg-[#8C1515] text-white text-[10.5px] sm:text-[11px] font-semibold py-1 px-3 rounded-md text-center mb-4 tracking-wide shadow-xs">
                  Registration End Date (Phase-II): <span className="font-bold underline decoration-white/40">10th September 2026</span>
                </div>

                {/* Success Message Feedback */}
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">Application Received!</h4>
                    <p className="text-xs text-slate-600 max-w-[240px] mx-auto leading-relaxed">
                      Our Information Science admissions counselor will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#8C1515] underline pt-2 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  /* Standard Form Fields */
                  <form onSubmit={handleFormSubmit} className="space-y-2.5">
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="STUDENT NAME"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all uppercase"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="STUDENT EMAIL ID"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all uppercase"
                        />
                      </div>
                    </div>

                    {/* Row 2: Country Code & Mobile Number */}
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-4 sm:col-span-3">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-2 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+971">+971</option>
                          <option value="+966">+966</option>
                        </select>
                      </div>
                      <div className="col-span-8 sm:col-span-9">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="STUDENT MOBILE NO"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all uppercase"
                        />
                      </div>
                    </div>

                    {/* Row 3: DOB & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <input
                          type="text"
                          name="dob"
                          placeholder="SELECT DOB"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                          }}
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all uppercase"
                        />
                      </div>
                      <div>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all uppercase"
                        >
                          <option value="">STUDENT CITY</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Chennai">Chennai</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi">Delhi NCR</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Patna">Patna</option>
                          <option value="Ranchi">Ranchi</option>
                          <option value="Other">Other City</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Discipline & Program */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <select
                          name="discipline"
                          value={formData.discipline}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all"
                        >
                          <option value="Engineering">Engineering</option>
                          <option value="Management">Management</option>
                          <option value="Computer Applications">Computer Applications</option>
                        </select>
                      </div>
                      <div>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#8C1515] focus:bg-white transition-all"
                        >
                          <option value="B.E. Information Science & Engineering">B.E. Information Science &amp; Engg.</option>
                          <option value="B.E. Computer Science">B.E. Computer Science</option>
                          <option value="B.E. Electronics & Communication">B.E. Electronics &amp; Comm.</option>
                          <option value="B.E. Mechanical Engineering">B.E. Mechanical Engg.</option>
                        </select>
                      </div>
                    </div>

                    {/* Terms Disclaimer */}
                    <p className="text-[9px] text-slate-400 leading-tight pt-1 text-center">
                      By submitting this form, I agree to receive notifications from the University in the form of SMS/E-mail/Call.
                    </p>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#8C1515] hover:bg-[#9B2329] text-white font-black text-xs uppercase tracking-wider py-2.5 rounded-md transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING...</span>
                      ) : (
                        <span>APPLY NOW</span>
                      )}
                    </button>

                    {/* Footer Login Helper */}
                    <div className="text-center pt-1.5">
                      <span className="text-[10px] text-slate-500 font-medium">
                        Already Registered? Click to{" "}
                        <button
                          type="button"
                          onClick={onOpenLoginModal}
                          className="text-[#8C1515] font-bold hover:underline cursor-pointer"
                        >
                          Login
                        </button>
                      </span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

        {/* 3. Lower Hero Banner with Approvals & Student Photo */}
        <div className="relative w-full mt-10 sm:mt-14">
          
          {/* High-Resolution Students in Advanced Computing Lab */}
          <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
              alt="Information Science Students in Cloud Lab"
              className="w-full h-full object-cover object-[center_30%]"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Overlaid Approval Cards Grid (Columns 1 to 8 only, leaving room for floating form on right) */}
            <div className="absolute bottom-6 sm:bottom-10 left-0 w-full z-20">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
                  
                  {/* Card 1: AICTE Logo & Header */}
                  <div className="bg-white rounded-lg p-3 sm:p-3.5 flex items-center space-x-3 shadow-md border border-white/60">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
                      alt="AICTE Logo"
                      className="w-10 h-10 object-contain shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="font-extrabold text-xs text-[#111] block leading-tight">
                        AICTE
                      </span>
                      <span className="text-[10px] text-[#555] font-medium leading-tight block">
                        All India Council for Technical Education
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Text 1 (AICTE Approval) */}
                  <div className="bg-white rounded-lg p-3 sm:p-3.5 flex items-center shadow-md border border-white/60">
                    <p className="text-[9.5px] sm:text-[10.5px] text-[#444] leading-tight">
                      B.E. Information Science and Engineering Program is approved by the Statutory Apex Body <span className="text-[#8C1515] font-semibold underline">AICTE</span>, Ministry of Education, Govt. of India.
                    </p>
                  </div>

                  {/* Card 3: VTU Logo & Header */}
                  <div className="bg-white rounded-lg p-3 sm:p-3.5 flex items-center space-x-3 shadow-md border border-white/60">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Visvesvaraya_Technological_University_logo.png/220px-Visvesvaraya_Technological_University_logo.png"
                      alt="VTU Logo"
                      className="w-10 h-10 object-contain shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="font-extrabold text-xs text-[#111] block leading-tight">
                        VTU
                      </span>
                      <span className="text-[10px] text-[#555] font-medium leading-tight block">
                        Visvesvaraya Technological University
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Text 2 (VTU Affiliation) */}
                  <div className="bg-white rounded-lg p-3 sm:p-3.5 flex items-center shadow-md border border-white/60">
                    <p className="text-[9.5px] sm:text-[10.5px] text-[#444] leading-tight">
                      B.E. Information Science &amp; Engineering Program is permanently affiliated to <span className="text-[#8C1515] font-semibold underline">VTU</span> Belagavi, approved by Govt. of Karnataka.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4. Bottom Hero Red Info Strip (Course Profile Strip) */}
        <div id="ise-course-profile-strip" className="w-full bg-[#8C1515] border-t border-[#721111] text-white py-5 sm:py-6 shadow-md relative z-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
              
              {/* Item 1: Department */}
              <div className="flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1">
                  Department
                </span>
                <p className="text-xs sm:text-[13.5px] font-bold text-white leading-snug">
                  Information Science &amp; Engineering
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
                <p className="text-xs sm:text-[13.5px] font-bold text-white leading-snug">
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
                <p className="text-xs sm:text-[13.5px] font-bold text-white leading-snug">
                  Bachelor of Engineering
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
                <p className="text-xs sm:text-[13.5px] font-bold text-white leading-snug">
                  4 years
                </p>
              </div>

              {/* Item 5: Extra Electives */}
              <div className="col-span-2 md:col-span-1 flex flex-col items-center lg:items-center text-center px-3 sm:px-4">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-2.5 shrink-0 border border-white/20">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/75 block mb-1.5">
                  Extra Electives
                </span>
                
                {/* Balanced, aesthetically clustered electives (3 compact rows instead of 5 vertical rows) */}
                <div className="flex flex-col items-center justify-center gap-1.5 max-w-[280px] w-full text-center">
                  {/* Row 1: AI & Machine Learning */}
                  <div className="flex justify-center w-full">
                    <span className="text-[10px] sm:text-[10.5px] font-semibold bg-white/15 hover:bg-white/20 px-3 py-0.5 rounded border border-white/20 text-white tracking-wide shadow-2xs whitespace-nowrap transition-colors">
                      AI &amp; Machine Learning
                    </span>
                  </div>

                  {/* Row 2: Data Analytics & Cloud Computing */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
                    <span className="text-[10px] sm:text-[10.5px] font-semibold bg-white/15 hover:bg-white/20 px-2.5 py-0.5 rounded border border-white/20 text-white tracking-wide shadow-2xs whitespace-nowrap transition-colors">
                      Data Analytics
                    </span>
                    <span className="text-[10px] sm:text-[10.5px] font-semibold bg-white/15 hover:bg-white/20 px-2.5 py-0.5 rounded border border-white/20 text-white tracking-wide shadow-2xs whitespace-nowrap transition-colors">
                      Cloud Computing
                    </span>
                  </div>

                  {/* Row 3: Mobile Computing & AR */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
                    <span className="text-[10px] sm:text-[10.5px] font-semibold bg-white/15 hover:bg-white/20 px-2.5 py-0.5 rounded border border-white/20 text-white tracking-wide shadow-2xs whitespace-nowrap transition-colors">
                      Mobile Computing
                    </span>
                    <span className="text-[10px] sm:text-[10.5px] font-semibold bg-white/15 hover:bg-white/20 px-3 py-0.5 rounded border border-white/20 text-white tracking-wide shadow-2xs whitespace-nowrap transition-colors">
                      AR
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* 5. Program Overview Section (Pixel-Matched to Reference Layout) */}
      <section id="ise-program-overview" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-stretch">
            
            {/* Left Column: Title, Primary Overview & Apply Button */}
            <div className="lg:col-span-6 lg:pr-10 xl:pr-14 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#111111] tracking-tight leading-[1.18] mb-6">
                  Best Information Science and Engineering College in Bangalore, India
                </h2>

                <div className="space-y-4 text-[14px] sm:text-[14.5px] text-[#444] leading-[1.7] font-normal">
                  <p>
                    Information Science and Engineering (ISE), also known as Information Technology (IT), is one of the most predominant and popular branches in the Engineering domain. It was introduced by Visvesvaraya Technological University (VTU, Belagavi) in the academic year 1997–98, and has since become one of the most sought-after engineering disciplines in the country.
                  </p>

                  <p>
                    For students searching for the best Information Science Engineering college in Bangalore, HKBKCE offers a comprehensive, industry-aligned ISE programme that prepares graduates to excel in the fast-evolving digital world.
                  </p>
                </div>
              </div>

              <div className="pt-7 sm:pt-8">
                <button
                  onClick={onOpenApplyModal}
                  className="bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-6 py-3 rounded-lg flex items-center space-x-2 transition-all shadow-[0_4px_14px_rgba(140,21,21,0.25)] hover:shadow-[0_6px_20px_rgba(140,21,21,0.35)] active:scale-95 cursor-pointer w-fit"
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

            {/* Right Column: In-depth Academic Perspective & IT Impact (From Provided Content Only) */}
            <div className="lg:col-span-5 lg:pl-4 xl:pl-6 flex flex-col justify-center">
              <div className="space-y-4 text-[14px] sm:text-[14.5px] text-[#444] leading-[1.7] font-normal pt-1">
                <p>
                  The Information Science and Engineering programme is predominantly similar to Computer Science and Engineering (CSE), with the exception of a few specialized subjects and courses that distinguish it from CSE, giving students a unique edge in IT-focused career paths.
                </p>

                <p>
                  &ldquo;Information Technology&rdquo; is the driving force of today&apos;s digital world. From cloud computing and social media to business prediction using Data Science, mobile applications, e-learning, and e-commerce, all of these function on the platform of Information Technology and have become an essential part of our everyday lives. IT is a basic requirement of modern society and is widely used across all sectors of the economy.
                </p>

                <p>
                  Thus, Information Technology (IT) / Information Science and Engineering is the force shaping both the present and the future of the world, making it one of the most valuable engineering disciplines to pursue today.
                </p>
              </div>
            </div>

          </div>

          {/* Syllabus & Course Curriculum Action Banner (Exact Reference Image Replica) */}
          <div className="mt-12 sm:mt-16 pt-2">
            <div className="w-full bg-[#EFECE6] hover:bg-[#E9E5DE] transition-colors rounded-xl border border-[#DDD7CD] px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-6 shadow-2xs">
              <span className="text-[#555555] text-xs sm:text-[14px] font-medium text-center sm:text-right">
                Explore Detailed Syllabus &amp; Subjects
              </span>
              <button
                onClick={() => setIsCurriculumModalOpen(true)}
                className="inline-flex items-center space-x-2 text-[#111111] hover:text-[#8C1515] font-black text-xs sm:text-[13.5px] tracking-wider uppercase transition-colors cursor-pointer group select-none"
              >
                <span>VIEW COURSE CURRICULUM</span>
                <span className="bg-[#8C1515] group-hover:bg-[#9B2329] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-2xs group-hover:scale-105 transition-all ml-1">
                  PDF
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Scope Section (Pixel-Matched to Reference Image) */}
      <section id="ise-scope-section" className="relative w-full bg-white overflow-hidden pt-10 sm:pt-14 pb-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative">
          
          {/* Top Overhanging Scope Red Card */}
          <div className="relative z-20 max-w-2xl lg:max-w-[700px] xl:max-w-[760px]">
            <div className="bg-[#8C1515] text-white p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-[28px] shadow-[0_20px_50px_rgba(140,21,21,0.35)] border border-[#7A1212]">
              
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-tight mb-4">
                Scope
              </h2>

              {/* Provided Paragraph */}
              <p className="text-xs sm:text-[13px] lg:text-[13.5px] text-white/95 leading-[1.68] font-normal mb-6">
                Graduates from our ISE programme are placed at some of India&apos;s and the world&apos;s most prestigious organizations reinforcing HKBKCE&apos;s reputation as an ECE college with best placements in Bangalore and across India!
              </p>

              {/* Companies Grid with Checkboxes - 3 columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3">
                {[
                  "Adobe",
                  "Amazon",
                  "Bosch",
                  "Gaar",
                  "Google",
                  "Intel",
                  "L&T",
                  "Microsoft",
                  "Samsung",
                  "Volvo",
                  "Nokia",
                  "IBM",
                  "TCS",
                  "Nuchange Informatics",
                  "Juspay",
                  "Jaro Education",
                  "Cognizant",
                  "Wipro",
                  "Infosys",
                  "Motorola",
                  "Mindtree",
                  "Practo Technologies",
                  "NTT Data",
                  "Qspider",
                  "UST Global",
                  "Harman International",
                  "CRMIT Solutions"
                ].map((company) => (
                  <div key={company} className="flex items-center space-x-2 sm:space-x-2.5">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] bg-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#8C1515] stroke-[3.5]" />
                    </div>
                    <span className="text-[11.5px] sm:text-[12.5px] font-medium text-white tracking-tight truncate">
                      {company}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Background Photo of Students & Floating Apply CTA */}
        <div className="relative w-full -mt-28 sm:-mt-36 lg:-mt-48 h-[380px] sm:h-[460px] lg:h-[520px] bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
            alt="Information Science Students in Hackathon"
            className="w-full h-full object-cover object-[70%_35%]"
            referrerPolicy="no-referrer"
          />

          {/* Dark & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/15" />

          {/* Floating Action Button (Apply Today) on Right Side */}
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-6 sm:right-12 lg:right-20 z-20">
            <button
              onClick={onOpenApplyModal}
              className="bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-6 sm:px-7 py-3 rounded-lg flex items-center space-x-2 transition-all shadow-[0_10px_30px_rgba(140,21,21,0.5)] hover:shadow-[0_15px_40px_rgba(140,21,21,0.7)] active:scale-95 cursor-pointer"
            >
              <span>APPLY TODAY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Eligibility and Fees Details Section (Pixel-Matched to Reference Image) */}
      <section id="ise-eligibility-fees" className="w-full bg-white border-b border-[#E5E0D5] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Heading & Subheading */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#111111] tracking-tight leading-[1.2] mb-3">
              HKBKCE Information Science &amp; Engineering Eligibility &amp; Fee Details
            </h2>
            <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed max-w-4xl">
              As one of the top information science engineering colleges in Bangalore, HKBKCE maintains clear and transparent admission criteria to ensure the right candidates join this prestigious program.
            </p>
          </div>

          {/* Academic Eligibility Card */}
          <div className="bg-[#FAF9F6] border border-[#DDD7CD] rounded-2xl p-6 sm:p-8 mb-12 shadow-2xs">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C1515] shrink-0" />
              <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                Academic Eligibility Requirements
              </h3>
            </div>
            
            <p className="text-xs sm:text-[13px] text-[#444444] leading-[1.68] font-normal mb-4">
              Candidates must have passed Second PUC / 12th Standard / 10+2 / A Level / IB / American 12th Grade or an equivalent qualification, with English as one of the subjects, and a minimum aggregate of 45% marks in Physics and Mathematics, along with any one of the following: Chemistry / Bio-Technology / Biology / Electronics / Computer Science.
            </p>

            {/* Karnataka Candidate Relaxation Box */}
            <div className="bg-white border border-[#DDD7CD] rounded-xl p-3.5 sm:p-4 mb-4 shadow-2xs">
              <p className="text-xs sm:text-[12.5px] text-[#444444] leading-relaxed">
                <strong className="text-[#8C1515] font-bold">Karnataka Candidate Relaxation:</strong> SC, ST, Category 1, 2A, 2B, 3A, and 3B candidates from Karnataka State are eligible with a minimum aggregate of 40%. This relaxation applies exclusively to Karnataka candidates.
              </p>
            </div>

            <p className="text-xs sm:text-[12.5px] text-[#555555] leading-relaxed">
              <strong className="text-[#111111] font-semibold">Entrance Examination:</strong> Admission is processed through JEE / KCET or any other recognized engineering entrance exam. Candidates can apply under both General and Foreign/NRI categories.
            </p>
          </div>

          {/* Detailed Fee Structure Header + Currency Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                Detailed Fee Structure (4-Year B.E. Program)
              </h3>
              <p className="text-xs sm:text-[13px] text-[#666666] mt-0.5">
                Transparent semester &amp; annual fees with zero hidden charges.
              </p>
            </div>

            {/* Currency / Category Toggle */}
            <div className="inline-flex p-1 bg-[#F1EFEA] rounded-xl border border-[#E0DBD0]">
              <button
                type="button"
                onClick={() => setFeeCategory("indian")}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  feeCategory === "indian"
                    ? "bg-[#8C1515] text-white shadow-xs"
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
                    ? "bg-[#8C1515] text-white shadow-xs"
                    : "text-[#555] hover:text-[#111]"
                }`}
              >
                International Students (USD)
              </button>
            </div>
          </div>

          {/* Fee Content Tables (Exact Match to Other Program Pages) */}
          {feeCategory === "indian" ? (
            <div className="space-y-8">
              
              {/* Quick Summary Card (Matching Reference Top Table) */}
              <div className="max-w-2xl overflow-x-auto rounded-xl border border-[#D5D0C5] shadow-xs">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-[#4A5568] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3 px-4 sm:px-6 border-r border-[#5F6D82] whitespace-nowrap">Program Fee</th>
                      <th className="py-3 px-4 sm:px-6 border-r border-[#5F6D82] whitespace-nowrap">Total 4-Yr Fee</th>
                      <th className="py-3 px-4 sm:px-6 whitespace-nowrap">Program Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#222]">
                    <tr>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#444] border-r border-[#E5E0D5] whitespace-nowrap">Annual / Semester Basis</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#8C1515] border-r border-[#E5E0D5] whitespace-nowrap">₹ 8,50,000/- INR</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#333] whitespace-nowrap">4.0 Years (8 Semesters)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Comprehensive Year-by-Year Fee Table */}
              <div className="overflow-hidden rounded-xl border border-[#D5D0C5] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#4A5568] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#5F6D82]">Year</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#5F6D82]">Tuition Fee (Rs.)</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#5F6D82]">University &amp; Extra Fees (Rs.)</th>
                      <th className="py-3.5 px-4 sm:px-6">Total (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#333]">
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 1</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 2,30,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 20,000</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">₹ 2,50,000</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 2</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 1,80,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 20,000</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">₹ 2,00,000</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 3</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 1,80,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 20,000</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">₹ 2,00,000</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 4</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 1,80,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 20,000</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">₹ 2,00,000</td>
                    </tr>
                    {/* Total Row */}
                    <tr className="bg-[#F8F6F2] font-black text-xs sm:text-sm text-[#8C1515]">
                      <td className="py-4 px-4 sm:px-6 uppercase tracking-wider border-r border-[#E5E0D5]">Total</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 7,70,000</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">₹ 80,000</td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-extrabold text-[#8C1515]">₹ 8,50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Quick Summary Card for International Students */}
              <div className="max-w-2xl overflow-x-auto rounded-xl border border-[#D5D0C5] shadow-xs">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-[#4A5568] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3 px-4 sm:px-6 border-r border-[#5F6D82] whitespace-nowrap">Program Fee</th>
                      <th className="py-3 px-4 sm:px-6 border-r border-[#5F6D82] whitespace-nowrap">Total 4-Yr Fee</th>
                      <th className="py-3 px-4 sm:px-6 whitespace-nowrap">Program Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#222]">
                    <tr>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#444] border-r border-[#E5E0D5] whitespace-nowrap">International Tuition</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#8C1515] border-r border-[#E5E0D5] whitespace-nowrap">$ 15,000 USD</td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#333] whitespace-nowrap">4.0 Years (8 Semesters)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Comprehensive Year-by-Year Fee Table for International */}
              <div className="overflow-hidden rounded-xl border border-[#D5D0C5] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#4A5568] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#5F6D82]">Year</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#5F6D82]">Tuition Fee ($)</th>
                      <th className="py-3.5 px-4 sm:px-6 border-r border-[#5F6D82]">University &amp; Extra Fees ($)</th>
                      <th className="py-3.5 px-4 sm:px-6">Total ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D5] bg-white text-xs sm:text-sm text-[#333]">
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 1</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$5,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$250</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">$5,250</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 2</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$3,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$250</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">$3,250</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 3</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$3,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$250</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">$3,250</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111] border-r border-[#E5E0D5]">Year 4</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$3,000</td>
                      <td className="py-3.5 px-4 sm:px-6 border-r border-[#E5E0D5]">$250</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111]">$3,250</td>
                    </tr>
                    {/* Total Row */}
                    <tr className="bg-[#F8F6F2] font-black text-xs sm:text-sm text-[#8C1515]">
                      <td className="py-4 px-4 sm:px-6 uppercase tracking-wider border-r border-[#E5E0D5]">Total</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">$14,000</td>
                      <td className="py-4 px-4 sm:px-6 border-r border-[#E5E0D5]">$1,000</td>
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-extrabold text-[#8C1515]">$15,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* Action CTA Bar */}
          <div className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E0D5]">
            <p className="text-xs sm:text-sm text-[#666]">
              * Scholarships &amp; merit concessions available for meritorious students and KCET high rankers.
            </p>
            <button
              onClick={onOpenApplyModal}
              className="bg-[#8C1515] hover:bg-[#9B2329] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center space-x-2.5 transition-all shadow-[0_4px_14px_rgba(140,21,21,0.25)] hover:shadow-[0_6px_20px_rgba(140,21,21,0.35)] active:scale-95 cursor-pointer"
            >
              <span>APPLY FOR ADMISSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. MOU (Memorandum of Understanding) & Industry Collaborations Section */}
      <section id="ise-mou" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24 overflow-hidden">
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
                name: "Pentech IT & Networking",
                logo: "https://d502jbuhuh9wk.cloudfront.net/logos/667935babb9e9c3a2bbe1342.png?v=1"
              },
              {
                id: "mou-2",
                name: "Mitron Innovations",
                logo: "https://media.licdn.com/dms/image/v2/D560BAQHjdYDA7Q2Cag/company-logo_200_200/company-logo_200_200/0/1692597585703/mitron_innovations_logo?e=2147483647&v=beta&t=IhDA0LCTYHBYMNcNIc-z_8wgDDfhiUgvL4Y9jErc6lM",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-3",
                name: "YNOS Startup Tech",
                logo: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS329539.png",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-4",
                name: "PD CloudEx Technologies",
                logo: "https://pdcloudex.com/wp-content/uploads/2023/09/pdlightthemebluetext.webp"
              },
              {
                id: "mou-5",
                name: "Cranes Varsity",
                logo: "https://crm.cranesvarsitycrm.com/IMG/craneslogopng.png"
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
                name: "Pentech IT & Networking",
                logo: "https://d502jbuhuh9wk.cloudfront.net/logos/667935babb9e9c3a2bbe1342.png?v=1"
              },
              {
                id: "mou-2-dup",
                name: "Mitron Innovations",
                logo: "https://media.licdn.com/dms/image/v2/D560BAQHjdYDA7Q2Cag/company-logo_200_200/company-logo_200_200/0/1692597585703/mitron_innovations_logo?e=2147483647&v=beta&t=IhDA0LCTYHBYMNcNIc-z_8wgDDfhiUgvL4Y9jErc6lM",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-3-dup",
                name: "YNOS Startup Tech",
                logo: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS329539.png",
                scale: "scale-150 sm:scale-160"
              },
              {
                id: "mou-4-dup",
                name: "PD CloudEx Technologies",
                logo: "https://pdcloudex.com/wp-content/uploads/2023/09/pdlightthemebluetext.webp"
              },
              {
                id: "mou-5-dup",
                name: "Cranes Varsity",
                logo: "https://crm.cranesvarsitycrm.com/IMG/craneslogopng.png"
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

      {/* 9. Pathways After ISE / Who Is This Program For Section (Matching Reference Image Layout) */}
      <section id="ise-who-is-it-for" className="w-full bg-[#F5F2EC] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24">
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
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5E0D5] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <h3 className="text-xs sm:text-[13.5px] font-black uppercase tracking-wider text-[#111111] mb-5 sm:mb-6">
                IS FOR INDIVIDUALS WHO ARE...
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#333333] leading-[1.75] font-normal">
                curious about computing, software, and information systems, with strong logical reasoning and problem-solving skills. You enjoy building and designing digital solutions, are comfortable working with evolving technologies, and are suited to a demanding, technically rigorous academic environment.
              </p>
            </div>

            {/* Column 2: Looking For */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5E0D5] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <h3 className="text-xs sm:text-[13.5px] font-black uppercase tracking-wider text-[#111111] mb-5 sm:mb-6">
                LOOKING FOR...
              </h3>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#333333] leading-[1.75] font-normal">
                a rigorous, hands-on Information Science and Engineering programme that builds strong fundamentals in software development, systems design, and information technology. You want to understand not just how to write code, but how software, data, and digital systems power industries across the world.
              </p>
            </div>

            {/* Column 3: To Become & Across Sectors */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E5E0D5] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start">
              <h3 className="text-xs sm:text-[13.5px] font-black uppercase tracking-wider text-[#111111] mb-5 sm:mb-6">
                TO BECOME...
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-[14px] sm:text-[15px] text-[#333333] leading-relaxed mb-6">
                {[
                  "a Software Engineer",
                  "an IT Manager",
                  "a Software Tester",
                  "an Application Developer",
                  "a Web Designer"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-[#111111] font-bold mr-2.5 select-none leading-none text-base">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Across Sectors Sub-section */}
              <div className="pt-5 border-t border-[#E5E0D5] mt-auto">
                <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#111111] mb-3">
                  ACROSS SECTORS SUCH AS...
                </h4>
                <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#444444] leading-relaxed mb-2.5">
                  {[
                    "Computer & IT Industry",
                    "Financial Services",
                    "Telecommunication Industry",
                    "Biotechnology Industry",
                    "E-Commerce Services"
                  ].map((sector, sIdx) => (
                    <li key={sIdx} className="flex items-center">
                      <span className="text-[#8C1515] font-bold mr-2 select-none leading-none text-sm">•</span>
                      <span>{sector}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] text-[#777777] italic">
                  ...and many more, across India and globally.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. Placement Stats Section (Matching Reference Red Banner Layout) */}
      <section id="ise-placement-stats" className="w-full bg-[#8C1515] text-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
            
            {/* Stat 1: 250+ Companies */}
            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={250} suffix="+" duration={2000} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Companies visiting HKBK
              </p>
            </div>

            {/* Stat 2: 32.4L Highest Salary */}
            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={32.4} decimals={1} suffix="L" duration={2200} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Highest salary offered
              </p>
            </div>

            {/* Stat 3: 93.3% Placed */}
            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={93.3} decimals={1} suffix="%" duration={2400} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Students got placed
              </p>
            </div>

            {/* Stat 4: 23+ Startups */}
            <div className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-white mb-2.5">
                <AnimatedCounter target={23} suffix="+" duration={1800} />
              </div>
              <div className="w-9 h-[2px] bg-white/70 mb-3" />
              <p className="text-xs sm:text-[13.5px] text-white/90 font-medium leading-snug">
                Startups registered
              </p>
            </div>

            {/* Stat 5: 42K Highest Internship Stipend */}
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

      {/* 11. Hiring From Us Section (Matching Reference Image Layout) */}
      <section id="ise-hiring-partners" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111111] tracking-tight leading-[1.2]">
              Hiring From Us
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#555] leading-[1.7] mt-3">
              Leading global technology leaders, Fortune 500 enterprises, and premier product companies recruit top engineering talent directly from HKBK Information Science &amp; Engineering.
            </p>
          </div>
        </div>

        {/* Outer Card Container Matching Reference Layout */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-3xl sm:rounded-[32px] border border-[#E5E0D5] shadow-sm py-8 sm:py-12 px-2 sm:px-6 relative overflow-hidden">
            
            {/* Left & Right Gradient Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-white via-white/80 to-transparent rounded-r-3xl" />

            <div className="space-y-6 sm:space-y-8">
              {/* ROW 1: Slides Left (Adobe, Deloitte, TCS, Google, Microsoft, Amazon, etc.) */}
              <div className="animate-marquee-slow flex items-center space-x-12 sm:space-x-20 whitespace-nowrap">
                {[
                  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg", h: "h-6 sm:h-7" },
                  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg", h: "h-5 sm:h-6" },
                  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", h: "h-6 sm:h-7" },
                  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", h: "h-6 sm:h-7" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", h: "h-7 sm:h-8" },
                  // Duplicated set for infinite loop
                  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg", h: "h-6 sm:h-7" },
                  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg", h: "h-5 sm:h-6" },
                  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg", h: "h-6 sm:h-7" },
                  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", h: "h-6 sm:h-7" },
                  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", h: "h-7 sm:h-8" }
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

              {/* ROW 2: Slides Right (Cognizant, Wipro, Intel, IBM, Accenture, Infosys, Capgemini, etc.) */}
              <div className="animate-marquee-right flex items-center space-x-12 sm:space-x-20 whitespace-nowrap">
                {[
                  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg", h: "h-6 sm:h-7" },
                  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo_Primary_RGB_Color_Logo.svg", h: "h-7 sm:h-8" },
                  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg", h: "h-6 sm:h-7" },
                  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", h: "h-6 sm:h-7" },
                  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg", h: "h-6 sm:h-7" },
                  // Duplicated set for infinite loop
                  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg", h: "h-6 sm:h-7" },
                  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo_Primary_RGB_Color_Logo.svg", h: "h-7 sm:h-8" },
                  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg", h: "h-6 sm:h-7" },
                  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", h: "h-5 sm:h-6" },
                  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", h: "h-6 sm:h-7" },
                  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg", h: "h-6 sm:h-7" },
                  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg", h: "h-6 sm:h-7" }
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

      {/* 12. Every Journey Has a Story (Inspiring Stories of Our Students' Journeys) */}
      <section id="ise-student-stories" className="w-full relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-[#111111]">
        {/* Campus Background Image with Dark Vignette/Overlay matching reference */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
            alt="HKBK Campus Pillars"
            className="w-full h-full object-cover object-center opacity-40 filter brightness-[0.75]"
          />
          {/* Rich Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
          <div className="absolute inset-0 bg-[#8C1515]/15 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Header & Call to Action (Matching Reference Image) */}
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

            {/* Right Interactive Testimonial Slider (Matching Reference Image) */}
            <div className="lg:col-span-8 relative">
              {(() => {
                const stories = [
                  {
                    id: "story-1",
                    name: "SAMA AMIN MARBHA",
                    role: "Data Scientist",
                    company: "Mercedes Benz Research & Development, Bangalore",
                    quote: "The strong technical foundation I built during my engineering years gave me the confidence to take on challenging roles in the automotive and data science industry. I'm proud to be contributing to innovation at Mercedes Benz R&D."
                  },
                  {
                    id: "story-2",
                    name: "IBRAHIM BASHA",
                    role: "CEO",
                    company: "Imperial EPF Pvt. Ltd., Bangalore",
                    quote: "My college years shaped not just my technical skills but also my entrepreneurial mindset. Today, as CEO of Imperial EPF Pvt. Ltd., I look back and credit that foundation for helping me build and lead my own company."
                  },
                  {
                    id: "story-3",
                    name: "NICHOLAS KURIAN",
                    role: "Senior Engineer Product",
                    company: "HARMAN, Bangalore",
                    quote: "The practical exposure and problem-solving skills I gained during my studies have been invaluable in my journey as a Senior Product Engineer at HARMAN. It prepared me well for the real-world challenges of the industry."
                  },
                  {
                    id: "story-4",
                    name: "SWATHI. VN",
                    role: "Senior Software Engineer",
                    company: "PHILIPS, Bangalore",
                    quote: "I'm grateful for the strong technical grounding and opportunities that helped me grow into my role as a Senior Software Engineer at PHILIPS. It gave me the skills and confidence to excel in a competitive tech environment."
                  }
                ];

                const currentStory = stories[currentStoryIndex];

                return (
                  <div className="relative px-8 sm:px-12 py-4">
                    {/* Left Chevron Button */}
                    <button
                      onClick={() => setCurrentStoryIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 p-2 transition-all cursor-pointer z-10"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </button>

                    {/* Right Chevron Button */}
                    <button
                      onClick={() => setCurrentStoryIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 p-2 transition-all cursor-pointer z-10"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                    </button>

                    {/* Active Story Card with AnimatePresence */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStory.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex flex-col items-center text-center max-w-2xl mx-auto"
                      >
                        {/* Quote Text */}
                        <p className="text-[16px] sm:text-[19px] lg:text-[21px] text-white/95 font-normal leading-[1.65] mb-8 sm:mb-10 text-center tracking-normal font-sans">
                          &ldquo;{currentStory.quote}&rdquo;
                        </p>

                        {/* Student/Alumni Name & Placement Designation */}
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

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center space-x-2 mt-8">
                      {stories.map((s, idx) => (
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

      {/* 13. FAQs Section (Information Science & Engineering) */}
      <section id="ise-faqs" className="w-full bg-[#FAF8F5] border-b border-[#E5E0D5] py-16 sm:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#8C1515]/10 text-[#8C1515] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#111111] tracking-tight leading-[1.2] mb-3">
              1. Information Science &amp; Engineering (ISE)
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#555] leading-[1.7]">
              Get detailed, transparent answers to the most common queries regarding our four-year B.E. Information Science and Engineering programme, curriculum, academic eligibility, and 2026 admissions.
            </p>
          </div>

          {/* Grid Layout: Main FAQs Accordion (Left) + Admissions Helpdesk Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Accordion Items (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  id: "faq-1",
                  index: "01",
                  question: "What is Information Science and Engineering at HKBK College of Engineering?",
                  answer: "Information Science and Engineering at HKBK College of Engineering is a four-year, on-campus B.E. programme focused on computing, software, information systems and digital technologies. The programme combines core computing knowledge with industry-relevant technology applications."
                },
                {
                  id: "faq-2",
                  index: "02",
                  question: "What is the difference between CSE and ISE at HKBK CE?",
                  answer: "CSE and ISE share several computing foundations, including programming, algorithms, databases and software technologies. HKBK describes CSE as broader in computer science theory and systems, while ISE has a stronger information-technology and information-systems orientation. Students should compare the respective curricula and career interests when choosing between them."
                },
                {
                  id: "faq-3",
                  index: "03",
                  question: "What subjects and electives are available in Information Science and Engineering at HKBK CE?",
                  answer: "ISE students study subjects including Data Structures, Operating Systems, Algorithms, Database Management Systems and object-oriented programming. HKBK CE also lists extra electives such as AI & Machine Learning, Data Analytics, Cloud Computing, Mobile Computing and AR for the programme."
                },
                {
                  id: "faq-4",
                  index: "04",
                  question: "What is the eligibility for ISE admission at HKBK College of Engineering?",
                  answer: "Candidates seeking ISE admission must meet HKBK CE's engineering eligibility requirements, including the prescribed 10+2/PUC qualification with Physics and Mathematics and an eligible optional subject. A minimum aggregate of 45% applies generally, with the applicable relaxation to 40% for specified Karnataka reserved categories."
                },
                {
                  id: "faq-5",
                  index: "05",
                  question: "What career opportunities are available after Information Science and Engineering?",
                  answer: "ISE graduates can pursue careers such as Software Engineer, IT Manager, Software Tester, Application Developer and Web Designer. HKBK CE identifies opportunities across industries including IT, financial services, telecommunications, biotechnology and e-commerce."
                },
                {
                  id: "faq-6",
                  index: "06",
                  question: "Is Information Science and Engineering suitable for students interested in IT careers?",
                  answer: "Yes. ISE is particularly relevant for students interested in software, information systems, cloud technologies, data and other IT-driven careers. At HKBK CE, the programme combines computing fundamentals with electives in emerging areas such as AI, data analytics, cloud computing and mobile computing."
                }
              ].map((faq, idx) => {
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

            {/* Right: Quick Helpdesk & Admissions Assistance (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* Assistance Card */}
              <div className="bg-white rounded-2xl border border-[#E5E0D5] p-6 sm:p-7 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#8C1515]/10 flex items-center justify-center text-[#8C1515] mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111] mb-2">
                  Have More Questions?
                </h3>
                <p className="text-xs sm:text-[13.5px] text-[#666] leading-relaxed mb-6">
                  Speak directly with our academic counselors regarding branch change options, management quota, lateral entry, fee structures, or hostel facilities.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={onOpenApplyModal}
                    className="w-full bg-[#8C1515] hover:bg-[#9B2329] text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Apply for ISE 2026 Batch</span>
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

              {/* Fast Facts Card */}
              <div className="bg-gradient-to-br from-[#111] to-[#222] text-white rounded-2xl p-6 shadow-sm border border-white/10">
                <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#E5E0D5]/70 block mb-1">
                  Admissions 2026 Status
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  Applications Now Open
                </h4>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  KCET, COMEDK &amp; Direct Quota admissions are actively processed on a merit basis.
                </p>
                <div className="flex items-center space-x-2 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Direct Counseling Active Today</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* Curriculum Modal */}
      <AnimatePresence>
        {isCurriculumModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    B.E. Information Science &amp; Engineering Curriculum
                  </h3>
                  <p className="text-xs text-slate-500">
                    VTU CBCS Scheme &amp; IBM Co-Curricular Program (8 Semesters)
                  </p>
                </div>
                <button
                  onClick={() => setIsCurriculumModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-700">
                <div>
                  <h4 className="font-bold text-[#8C1515] uppercase tracking-wider text-xs mb-2">
                    Years 1 &amp; 2 (Foundations &amp; Core Systems)
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Engineering Mathematics I - IV</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Data Structures &amp; Applications</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Design &amp; Analysis of Algorithms</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Database Management Systems</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Operating Systems &amp; Concurrency</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Object-Oriented Programming (Java/Python)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#8C1515] uppercase tracking-wider text-xs mb-2">
                    Years 3 &amp; 4 (Advanced Systems, IBM Cloud &amp; Capstone)
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Cloud Computing &amp; Virtualization (IBM)</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Big Data Analytics &amp; Hadoop Ecosystem</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Machine Learning &amp; Deep Learning</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Network Security &amp; Cryptography</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Full-Stack Web Architectures &amp; DevOps</li>
                    <li className="bg-slate-50 p-2.5 rounded border border-slate-200">Major Industry Capstone Project &amp; Seminar</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Total Credits: 160 | Degree Awarded: Bachelor of Engineering (B.E.)
                  </span>
                  <button
                    onClick={() => {
                      alert("Detailed Information Science syllabus brochure download initialized.");
                      setIsCurriculumModalOpen(false);
                    }}
                    className="bg-[#8C1515] hover:bg-[#9B2329] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full PDF Syllabus</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
