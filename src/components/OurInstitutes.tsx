import React from "react";
import { motion } from "motion/react";
import { Settings, GraduationCap, ShieldCheck, BookOpen, ArrowRight } from "lucide-react";

interface InstituteCardProps {
  key?: React.Key;
  logoTitle: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: React.ReactNode;
  delay: number;
}

function InstituteCard({ logoTitle, title, subtitle, imageUrl, icon, delay }: InstituteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative h-[480px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(24,26,77,0.08)] hover:shadow-[0_24px_60px_rgba(39,50,134,0.18)] transition-all duration-500 cursor-pointer flex flex-col justify-between"
    >
      {/* Background Image with Clean Neutral Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark bottom gradient for crisp text readability without red tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/30 group-hover:to-transparent transition-all duration-500" />
        
        {/* Subtle grid block pattern overlay */}
        <div className="absolute inset-x-0 bottom-0 h-40 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      {/* CARD CONTENT */}
      
      {/* Top Section - HKBK Red Badge */}
      <div className="p-6 z-10">
        <div className="w-[42px] h-[42px] bg-[#8C1515] rounded-[6px] flex flex-col items-center justify-center p-1.5 shadow-md">
          {/* Custom Sun/Starburst Vector Icon matching HKBK logo */}
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
          <span className="text-[7px] font-black text-white tracking-widest leading-none mt-0.5">HKBK</span>
        </div>
      </div>

      {/* Bottom Section - Text, Icon and Arrow */}
      <div className="p-8 z-10 flex flex-col justify-end space-y-4">
        {/* Main Title of Card */}
        <div className="space-y-1">
          <span className="text-white/60 text-xs font-semibold uppercase tracking-widest block font-sans">
            {logoTitle}
          </span>
          <h3 className="text-white font-serif text-[28px] leading-[1.15] font-medium tracking-tight">
            {title}
          </h3>
        </div>

        {/* Divider and Details */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3 max-w-[75%]">
            {/* Outline icon in soft lavender */}
            <div className="text-[#EBD8D0] shrink-0 p-1 bg-white/5 rounded-lg border border-white/10">
              {icon}
            </div>
            <p className="text-white/70 text-[13px] font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Action pointer circle button */}
          <div className="w-[42px] h-[42px] rounded-full border border-[#8C1515]/50 flex items-center justify-center group-hover:bg-[#8C1515] group-hover:border-[#8C1515] transition-all duration-300">
            <ArrowRight className="w-4 h-4 text-[#EBD8D0] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurInstitutes() {
  const institutes = [
    {
      logoTitle: "HKBK",
      title: "College Of Engineering",
      subtitle: "Shaping innovators. Building the future.",
      imageUrl: "https://imgh.in/host/n2yq14",
      icon: <Settings className="w-5 h-5" />,
      delay: 0.1,
    },
    {
      logoTitle: "HKBK",
      title: "Degree College",
      subtitle: "Nurturing knowledge. Inspiring excellence.",
      imageUrl: "https://imgh.in/host/171n40",
      icon: <GraduationCap className="w-5 h-5" />,
      delay: 0.2,
    },
    {
      logoTitle: "HKBK",
      title: "College Of Physiotherapy",
      subtitle: "Restoring movement. Enriching lives.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      icon: <ShieldCheck className="w-5 h-5" />,
      delay: 0.3,
    },
    {
      logoTitle: "HKBK",
      title: "Pre University (PUC)",
      subtitle: "Strong foundation. Bright futures.",
      imageUrl: "https://imgh.in/host/894vii",
      icon: <BookOpen className="w-5 h-5" />,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFAEC] text-[#8C1515] font-sans relative overflow-hidden" id="institutes">
      
      {/* Decorative vector dot pattern matching top right of mockup */}
      <div className="absolute top-10 right-10 md:right-32 opacity-30 select-none pointer-events-none hidden sm:grid grid-cols-6 gap-3">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#8C1515] rounded-full" />
        ))}
      </div>

      {/* Decorative ambient blobs in background matching mockup */}
      <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] bg-gradient-to-bl from-[#EBD8D0]/40 to-transparent rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute -bottom-[200px] -left-[100px] w-[450px] h-[450px] bg-blue-50/50 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase py-1 px-3.5 rounded-[4px] mb-4 border border-[#8C1515]/10 shadow-sm"
          >
            Explore Our College
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-medium text-[42px] sm:text-[54px] leading-[1.05] tracking-tight text-[#8C1515] mb-4"
          >
            Our <span className="text-[#8C1515] font-bold">Institutes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[15px] sm:text-[17px] text-gray-550 leading-[1.6] max-w-xl mx-auto"
          >
            World-class education across diverse disciplines, empowering students to excel and lead.
          </motion.p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {institutes.map((inst, index) => (
            <InstituteCard
              key={index}
              logoTitle={inst.logoTitle}
              title={inst.title}
              subtitle={inst.subtitle}
              imageUrl={inst.imageUrl}
              icon={inst.icon}
              delay={inst.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
