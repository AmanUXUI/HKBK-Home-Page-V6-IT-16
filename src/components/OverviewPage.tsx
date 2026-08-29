import React from "react";
import { 
  Building2, 
  Building,
  Users,
  Briefcase,
  Mail, 
  ArrowLeft,
  ArrowRight,
  Quote,
  Compass,
  Award,
  Sparkles
} from "lucide-react";

interface OverviewPageProps {
  onOpenApplyModal: () => void;
  onNavigateHome: () => void;
}

export default function OverviewPage({ onOpenApplyModal, onNavigateHome }: OverviewPageProps) {
  return (
    <div id="overview-page" className="w-full bg-[#FCFBF7] text-[#1A1A1A]">
      
      {/* 1. Masthead Header & Breadcrumbs Section */}
      <section className="relative bg-[#8C1515] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-12 border-b border-[#721111] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#EBD8D0] uppercase mb-8">
            <button 
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/80">About Us</span>
            <span className="text-white/40">/</span>
            <span className="text-white font-bold">Overview</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              ABOUT HKBK GROUP OF INSTITUTIONS
            </h1>

            <div className="pt-2">
              <p className="font-mono text-sm sm:text-base font-bold text-[#FFD700] tracking-[0.2em] uppercase">
                LEGACY OF EXCELLENCE SINCE 1997
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Heritage Section (Editorial Split) */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  Institutional Heritage
                </span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] leading-tight">
                Shaping Global Pioneers & Tomorrow's Leaders
              </h2>

              <div className="pt-4 border-t border-[#E5E0D5] space-y-4 text-sm text-[#555]">
                <div className="flex items-start space-x-3">
                  <Compass className="w-5 h-5 text-[#8C1515] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold">17-Acre Campus</strong>
                    <span>Situated in the vibrant tech heart of Bangalore city</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#8C1515] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold">Have Knowledge Be Knowledgeable</strong>
                    <span>The foundational tenet guiding academic rigor and ethics</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenApplyModal}
                  className="inline-flex items-center space-x-2 bg-[#8C1515] hover:bg-[#721111] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Apply for Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Body Copy */}
            <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#8C1515] first-letter:mr-3 first-letter:float-left text-lg sm:text-xl text-[#222] leading-relaxed">
                Welcome to the institution dedicated to creating tomorrow’s leaders and today’s pioneers. HKBK Group of Institutions has been consistent to maintain excellence in the academic standards since its inception. Our beautiful 17 Acre campus in the heart of Bangalore city inspires students to succeed professionally and personally in a competitive world. Full form of HKBK is "Have Knowledge Be Knowledgeable"Learning is an enjoyable experience here, with experienced faculty, inspiring libraries, large playgrounds and state-of-the-art labs.
              </p>

              <div className="w-20 h-[1.5px] bg-[#8C1515]/30 my-6" />

              <p>
                We invite you to explore our campus, our teaching process, laboratories and facilities, and simply discover why HKBK stands as the most preferred destination for students who aspire to grow, learn and reach beyond the country.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Chairman's Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F6F3EB] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          {/* Editorial Section Header */}
          <div className="mb-12 border-b border-[#E5E0D5] pb-6">
            <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              WELCOME TO HKBK!
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              CHAIRMAN'S MESSAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Portrait & Title */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden bg-neutral-200 border border-[#DCD6C8] shadow-sm">
                <img
                  src="https://imgh.in/host/yxnbzh"
                  alt="C M Ibrahim - Chairman"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-2">
                <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">C M Ibrahim</h3>
                <p className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-wider mt-1">
                  Chairman
                </p>
                <p className="text-xs text-[#666] mt-2 leading-relaxed font-sans">
                  HKBK College of Engineering | HKBK College of Management | HKBK Degree College | HKBK PU College
                </p>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Blockquote with refined styling */}
              <div className="relative pl-8 sm:pl-10 border-l-2 border-[#8C1515]">
                <Quote className="w-8 h-8 text-[#8C1515]/20 absolute -top-2 left-0 -translate-x-1/2 bg-[#F6F3EB] p-1" />
                <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#222] leading-relaxed">
                  "The Future of our country depends on outlook and behavior of our students. The graduates emerging from the portals of an educational institution should possess at least minimal moral values. A college is a platform to mould the student to be model acceptable by the society. They should not only excel in subject matter, they should develop their traits and add value to life and should become a role model."
                </blockquote>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#333] leading-relaxed">
                <p>
                  HKBK is a platform, where your potential finds its opportunities. You can call HKBK is a process where every day is an opportunity to learn. Unlearn and relearn.You can join a community of learners, whether they are 10,000+ alumni or 200+ faculty experts.
                </p>

                <p className="font-medium text-[#1A1A1A]">
                  I welcome you to be a HKBKian, together we have come a long way, with you we look forward to taking it further.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Director's Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FCFBF7] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 border-b border-[#E5E0D5] pb-6">
            <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              WELCOME TO HKBK!
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              DIRECTOR'S MESSAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Message Body */}
            <div className="lg:col-span-8 space-y-6 order-2 lg:order-1 text-base sm:text-lg text-[#333] leading-relaxed">
              <p>
                “On behalf of the institute, i welcome you to HKBKCE,an adobe where young minds are nurtured to become tomorrow's professionals and socially responsible individuals.At HKBK college of engineering, our vision is based on hard work, dedication, discipline and determination with a strong emphasis on teamwork & shouldering high level of responsibility. This culture allows our students not only adopt themselves to the present day challenge but also accept individual responsibility to the family, society and nation. The institute has set specific objectives and activity plans for achieving excellence in all areas of quality technical education. We strongly believe in achieving academic excellence through high standards in teaching, career guidance and moulding team players. At HKBK college of Engineering, we emphasise on creating technical competence and readily employable technocrats and managers for the corporate organisations. The testimony is that the institution has emerged as a one stop destination for meeting the technical manpower need of corporate of repute and the country’s prestigious defence forces.Our students learn the joy as well as the rigours of new discovery, and acquire skills of inquiry, evaluation, and communication that provide a foundation for the next phases of their careers and lives.”
              </p>
            </div>

            {/* Portrait & Title */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col space-y-4">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden bg-neutral-200 border border-[#DCD6C8] shadow-sm">
                <img
                  src="https://imgh.in/host/savg5i"
                  alt="C M Faiz - Director"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-2">
                <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">C M Faiz</h3>
                <p className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-wider mt-1">
                  Director
                </p>
                <p className="text-xs text-[#666] mt-2 leading-relaxed font-sans">
                  HKBK College of Engineering
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Principal's Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F6F3EB] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 border-b border-[#E5E0D5] pb-6 text-center sm:text-left">
            <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              WELCOME TO HKBK!
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              PRINCIPAL'S MESSAGE
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#333] leading-relaxed font-sans">
            <p>
              It is with great pleasure that I extend a warm welcome to each and every one of you to HKBK College of Engineering. Our college stands as a beacon of learning, innovation, and growth, dedicated to shaping the future professionals and leaders of tomorrow.
            </p>

            <p>
              At HKBK, we believe in fostering not just academic excellence, but also in instilling strong moral values and a sense of social responsibility in our students. It is our firm belief that the graduates that emerge from our institution should not only excel in their chosen fields but should also contribute positively to society, becoming role models in their communities and beyond. Our vision is built on the pillars of hard work, dedication, and teamwork. We are committed to providing a nurturing environment, where young minds are given the tools and guidance to thrive, and where they can shoulder high levels of responsibility with determination and discipline.
            </p>

            <p>
              With a dedicated and experienced faculty, top-notch facilities, and a focus on technical competence and career readiness, HKBK College of Engineering is not just a place for education, but a platform for your potential to find its full expression. Our goal is to create not just students, but leaders, innovators, and valuable contributors to the professional world and society at large. I invite you to join our community of learners, where every day is an opportunity for growth, and every challenge is a chance to learn, unlearn, and relearn. With a track record of excellence and a commitment to shaping the future, HKBK College of Engineering is truly a place where your aspirations can find wings. Together, let's embark on this journey of discovery, growth, and achievement.
            </p>

            <p className="font-medium text-[#1A1A1A] pt-2">
              I welcome you to be a part of the HKBKian family, and together, we look forward to a future filled with endless possibilities.
            </p>
          </div>

        </div>
      </section>

      {/* 6. Administration & Governance Directory */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#FCFBF7] border-b border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-[#E5E0D5]">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                  Institutional Governance
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
                ADMINISTRATION
              </h2>
            </div>
            <p className="text-xs text-[#777] font-mono mt-3 sm:mt-0 uppercase tracking-widest">
              Executive Departmental Registry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Item 1: General Administration */}
            <div className="flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    01 / Governance
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515]/8 text-[#8C1515] flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
                  General Administration
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  The administration of all the colleges is handling by Administrator
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="mailto:director@hkbk.edu.in"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D5] bg-white hover:border-[#8C1515] hover:bg-[#8C1515]/5 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#8C1515] transition-all group shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C1515] group-hover:scale-110 transition-transform" />
                  <span>director@hkbk.edu.in</span>
                </a>
              </div>
            </div>

            {/* Item 2: Admission and Marketing */}
            <div className="flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    02 / Admissions
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515]/8 text-[#8C1515] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
                  ADMISSION AND MARKETING
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  Admission process for all its colleges/department are handeled by Admissions
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-[#777] font-mono uppercase mb-1.5 tracking-wider">
                  Department Contact:
                </div>
                <a 
                  href="mailto:admissions@hkbk.edu.in"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D5] bg-white hover:border-[#8C1515] hover:bg-[#8C1515]/5 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#8C1515] transition-all group shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C1515] group-hover:scale-110 transition-transform" />
                  <span>admissions@hkbk.edu.in</span>
                </a>
              </div>
            </div>

            {/* Item 3: Department of Human Resources */}
            <div className="flex flex-col justify-between border-t-2 border-[#8C1515] pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8C1515] uppercase tracking-widest">
                    03 / Human Resources
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#8C1515]/8 text-[#8C1515] flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] tracking-tight">
                  DEPARTMENT OF HUMAN RESOURCES
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
                  Internal recruitments, Evaluation of faculties and College events are handling by HR Department.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="mailto:hr@hkbk.edu.in"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D5] bg-white hover:border-[#8C1515] hover:bg-[#8C1515]/5 text-xs font-mono font-semibold text-[#1A1A1A] hover:text-[#8C1515] transition-all group shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8C1515] group-hover:scale-110 transition-transform" />
                  <span>hr@hkbk.edu.in</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Placement Statistics (Editorial Broadsheet Data Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#FCFBF7]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center mb-3">
              <span className="text-[#8C1515] font-mono text-xs font-bold tracking-[0.25em] uppercase">
                CAREER & PLACEMENT OUTCOMES
              </span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#1A1A1A] tracking-tight">
              PLACEMENT STATISTICS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5">
            
            <div className="p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r border-[#E5E0D5] last:border-r-0 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8C1515] tracking-tight">
                250+
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#444] mt-3 font-sans leading-snug">
                Companies visiting HKBK
              </span>
            </div>

            <div className="p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r border-[#E5E0D5] last:border-r-0 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8C1515] tracking-tight">
                32.4 LPA
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#444] mt-3 font-sans leading-snug">
                Highest salary offered
              </span>
            </div>

            <div className="p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r border-[#E5E0D5] last:border-r-0 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8C1515] tracking-tight">
                93%
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#444] mt-3 font-sans leading-snug">
                Students got placed
              </span>
            </div>

            <div className="p-6 sm:p-8 text-center border-b sm:border-b-0 md:border-r border-[#E5E0D5] last:border-r-0 flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8C1515] tracking-tight">
                23+
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#444] mt-3 font-sans leading-snug">
                Startups registered
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-6 sm:p-8 text-center flex flex-col justify-center items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8C1515] tracking-tight">
                ₹42000
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#444] mt-3 font-sans leading-snug">
                Highest internship stipend
              </span>
            </div>

          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenApplyModal}
              className="w-full sm:w-auto bg-[#8C1515] hover:bg-[#721111] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Apply for Admissions 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto bg-transparent hover:bg-black/5 text-[#1A1A1A] border border-[#1A1A1A]/30 px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
