import React, { useRef } from "react";
import { facultyMembers } from "../data";
import { Users, ArrowRight, ArrowLeft } from "lucide-react";

export default function OurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1);
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-white text-brand-navy font-sans border-t border-brand-neutral" id="our-team">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Left Content and Right Arrow Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-lavender text-brand-navy text-[11px] font-medium tracking-[0.08em] uppercase rounded py-1 px-3 mb-4">
              <Users className="w-4 h-4 text-brand-navy" />
              <span>Academic Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-cobalt mb-4 sentence-case font-serif">
              Learn from accomplished academic mentors
            </h2>
            <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.65] font-normal">
              Our directors, deans, and professors hold doctoral degrees from prime universities and bring massive research and industry experience.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-brand-cobalt/40 text-brand-cobalt hover:border-brand-cobalt hover:bg-brand-cobalt hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous Members"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-brand-cobalt/40 text-brand-cobalt hover:border-brand-cobalt hover:bg-brand-cobalt hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next Members"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          {/* Track with hidden scrollbar */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2"
          >
            {facultyMembers.map((member) => (
              <div
                key={member.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start bg-[#FBF4D7]/30 border border-[#FBF4D7] rounded-[24px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all duration-300 group aspect-square relative"
              >
                {/* Image Holder */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
