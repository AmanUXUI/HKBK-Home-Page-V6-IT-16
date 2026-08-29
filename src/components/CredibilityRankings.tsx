import React from "react";
import { motion } from "motion/react";

export default function CredibilityRankings() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-[#8C1515] font-sans relative overflow-hidden" id="credibility-rankings">
      {/* Decorative ambient blobs using soft lavender #EBD8D0 */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EBD8D0]/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-none w-full px-4 md:px-12 lg:px-16 xl:px-24 mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Eyebrow Label matching system requirements */}
          <div className="inline-block bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase py-1 px-4 rounded-[4px] mb-4 border border-[#8C1515]/10 shadow-sm">
            Our Credibility
          </div>
          
          <h2 className="font-serif font-medium text-[42px] sm:text-[56px] leading-[1.05] tracking-tight text-[#8C1515] mb-4">
            Credibility and <span className="text-[#8C1515] font-bold">Rankings</span>
          </h2>
          
          <p className="font-sans text-[15px] sm:text-[16px] text-gray-550 leading-[1.7] max-w-2xl mx-auto">
            Recognitions that reflect our commitment to excellence and the success of our students.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          
          {/* CARD 1: A+ GRADE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="w-full aspect-[16/9] rounded-[24px] overflow-hidden border border-[#8C1515]/5 hover:translate-y-[-4px] transition-all duration-500 group relative block shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(140, 21, 21,0.12)]"
          >
            <img 
              src="https://imgh.in/host/9de9xv"
              alt="Credibility Recognition Badge"
              className="w-full h-full object-cover rounded-[24px] select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* CARD 2: 1ST IN GRADUATE EMPLOYABILITY */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full aspect-[16/9] rounded-[24px] overflow-hidden border border-[#8C1515]/5 hover:translate-y-[-4px] transition-all duration-500 group relative block shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(140,21,21,0.12)]"
          >
            <img 
              src="https://imgh.in/host/29q66z"
              alt="Credibility and Rankings Badge"
              className="w-full h-full object-cover rounded-[24px] select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
