import React, { useState } from "react";
import { 
  UserPlus, 
  FileText, 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  ShieldCheck,
  Send,
  Lock,
  ArrowRight
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export default function AdmissionProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "B.Tech Engineering",
    city: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps: Step[] = [
    {
      number: 1,
      title: "Register for HAT Assessment",
      description: "Complete the registration form to begin your admission journey.",
      icon: <UserPlus className="w-5 h-5" />,
      tag: "Step 01 – Registration"
    },
    {
      number: 2,
      title: "Appear for HAT",
      description: "Take the HKBK Admission Test to assess your aptitude and skills.",
      icon: <FileText className="w-5 h-5" />,
      tag: "Step 02 – Assessment"
    },
    {
      number: 3,
      title: "1:1 Interview / Personal Interview (Online)",
      description: "Interact with our admission panel to discuss your goals and profile.",
      icon: <Users className="w-5 h-5" />,
      tag: "Step 03 – Evaluation"
    },
    {
      number: 4,
      title: "Counselling & Offer",
      description: "Receive personalized counselling and your admission offer.",
      icon: <Award className="w-5 h-5" />,
      tag: "Step 04 – Counseling"
    },
    {
      number: 5,
      title: "Block Your Seat",
      description: "Confirm your admission by completing the seat-blocking process.",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "Step 05 – Confirmation"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-24 px-4 md:px-10 bg-[#FBF4D7] text-[#8C1515] font-sans relative overflow-x-clip" id="admission-process">
      
      {/* Background ambient accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,21,21,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,21,21,0.015)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#EBD8D0]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase rounded py-1.5 px-3.5 mb-4 border border-[#8C1515]/10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8C1515]" />
            <span>ADMISSIONS 2026-27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#8C1515] mb-4">
            HKBK Admission <span className="text-[#8C1515] font-bold">Journey</span>
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-slate-600 leading-[1.7]">
            Follow five simple steps to complete your registration, assess your skills, and secure your place at HKBK.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Admission Journey Steps Timeline (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-[#EBD8D0] rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(140,21,21,0.04)]">
              <div className="flex items-center justify-between border-b border-[#FBF4D7] pb-4 mb-6">
                <h3 className="text-xs font-bold text-[#8C1515] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8C1515]"></span>
                  ADMISSION STEPS
                </h3>
                <span className="text-xs text-gray-400 font-medium">5 Sequential Steps</span>
              </div>

              {/* Timeline Container */}
              <div className="space-y-4 relative">
                {steps.map((step) => {
                  const isActive = activeStep === step.number;
                  
                  return (
                    <div
                      key={step.number}
                      onClick={() => setActiveStep(step.number)}
                      className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative ${
                        isActive 
                          ? "bg-[#FDFAEC] border-[#8C1515] shadow-md -translate-y-0.5" 
                          : "bg-white border-[#FBF4D7] hover:border-[#EBD8D0] hover:bg-[#FBF4D7]/30"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Step Number Circle */}
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold transition-all duration-300 ${
                          isActive 
                            ? "bg-[#8C1515] text-white shadow-md shadow-[#8C1515]/20 scale-105" 
                            : "bg-[#FBF4D7] text-[#8C1515] group-hover:bg-[#EBD8D0]"
                        }`}>
                          {step.icon}
                        </div>

                        {/* Step Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[10px] font-bold text-[#8C1515] tracking-wider uppercase">
                              {step.tag}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              0{step.number}
                            </span>
                          </div>
                          <h4 className={`text-base sm:text-lg font-bold transition-colors ${
                            isActive ? "text-[#8C1515]" : "text-[#8C1515]/90"
                          }`}>
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-5 border-t border-[#FBF4D7] flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#8C1515]" />
                  <span>Transparent & Fast Track Process</span>
                </div>
                <span className="text-[11px] text-slate-400">Need Help? Contact Admissions</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-Conversion Registration Form (Span 5 - Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
            <div className="bg-white border-2 border-[#8C1515]/20 rounded-[24px] p-6 sm:p-8 shadow-[0_12px_40px_rgba(140,21,21,0.08)] relative overflow-hidden">
              
              {/* Form Top Header accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8C1515] via-[#EBD8D0] to-[#8C1515]" />

              {isSubmitted ? (
                /* Success View */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8C1515]">Registration Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                    Thank you <span className="font-bold text-[#8C1515]">{formData.name}</span>. Your application for <span className="font-bold text-[#8C1515]">{formData.program}</span> has been logged. Our admissions counselor will contact you shortly to schedule your HAT Assessment.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", program: "B.Tech Engineering", city: "" });
                      }}
                      className="text-xs font-bold text-[#8C1515] hover:underline cursor-pointer"
                    >
                      ← Submit another application
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form View */
                <div>
                  <div className="mb-6">
                    <div className="inline-block bg-[#8C1515]/10 text-[#8C1515] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded mb-2">
                      STEP 1 OF ADMISSION
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#8C1515] tracking-tight">
                      Register for HAT Assessment
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Fill in your details below to begin your admission journey and lock your assessment slot.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-[#8C1515] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-[#8C1515]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/20 outline-none text-sm text-[#8C1515] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#8C1515] uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-[#8C1515]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/20 outline-none text-xs text-[#8C1515] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#8C1515] uppercase tracking-wider mb-1.5">
                          Mobile Number <span className="text-[#8C1515]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/20 outline-none text-xs text-[#8C1515] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#8C1515] uppercase tracking-wider mb-1.5">
                          Program / Course <span className="text-[#8C1515]">*</span>
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/20 outline-none text-xs text-[#8C1515] bg-white transition-all cursor-pointer"
                        >
                          <option value="B.Tech Engineering">B.Tech Engineering</option>
                          <option value="Pre-University Course (PUC)">Pre-University Course (PUC)</option>
                          <option value="Commerce & Degree Courses">Commerce & Degree Courses</option>
                          <option value="Physiotherapy (BPT)">Physiotherapy (BPT)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#8C1515] uppercase tracking-wider mb-1.5">
                          City / State <span className="text-[#8C1515]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Current City"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/20 outline-none text-xs text-[#8C1515] transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#8C1515] hover:bg-[#FBF4D7] hover:text-[#8C1515] border border-transparent hover:border-[#8C1515]/30 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Register Now for HAT</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span>Your personal information is confidential and secure.</span>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

