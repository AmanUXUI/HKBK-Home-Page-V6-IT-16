import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Newspaper, ExternalLink } from "lucide-react";

interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  organizer: string;
}

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  ctaLabel: string;
}

export default function NewsEvents() {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const eventsData: EventItem[] = [
    {
      id: 1,
      title: "Technovate '26: Annual National Level Mega Technical & AI Fest",
      category: "CAMPUS LIFE",
      date: "MAY 19, 2026",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400",
      organizer: "HKBK Bangalore"
    },
    {
      id: 2,
      title: "Sustainable Smart Energy & AI-Grid Systems National Conference",
      category: "CONFERENCE",
      date: "MAY 24, 2026",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
      organizer: "HKBK Bangalore"
    },
    {
      id: 3,
      title: "Global Alumni Meet 2026: Inspiring Journeys & CXO Panel Meet",
      category: "ALUMNI MEET",
      date: "MAY 31, 2026",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400",
      organizer: "HKBK Bangalore"
    },
    {
      id: 4,
      title: "Entrepreneurship Conclave: Transforming Ideas into Enterprise",
      category: "WORKSHOP",
      date: "JUN 12, 2026",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400",
      organizer: "HKBK Bangalore"
    },
    {
      id: 5,
      title: "CyberSecurity & Digital Forensics: Expert Masterclass with Cyber Police",
      category: "ACADEMICS",
      date: "JUN 20, 2026",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      organizer: "HKBK Bangalore"
    }
  ];

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "HKBK Bangalore Launches South India's First 'AI Fest – 2026' to Empower Young Innovators and Transform Ideas into Tech-Driven Solutions",
      category: "AI FEST",
      date: "MAY 17, 2026",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
      ctaLabel: "AI FEST 2026"
    },
    {
      id: 2,
      title: "HKBK Students Secure Grand Prize at National AI Innovation Challenge with ₹1,00,000 Cash Reward",
      category: "ACCOLADES",
      date: "MAY 12, 2026",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
      ctaLabel: "VIEW CHALLENGE"
    },
    {
      id: 3,
      title: "HKBK Racing Team Triumphs at Formula Bharat 2026 Championship with Innovative Aero-design",
      category: "COMPETITION",
      date: "MAY 05, 2026",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000",
      ctaLabel: "RACING CHRONICLES"
    },
    {
      id: 4,
      title: "State-of-the-Art Center for Advanced AI Research & Deep Tech Lab Inaugurated on Campus",
      category: "CAMPUS LAUNCH",
      date: "MAY 02, 2026",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?auto=format&fit=crop&q=80&w=1000",
      ctaLabel: "EXPLORE LABS"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll > 0) {
        setScrollProgress(scrollTop / totalScroll);
      }
    }
  };

  const nextNews = () => {
    setActiveNewsIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevNews = () => {
    setActiveNewsIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const currentNews = newsData[activeNewsIndex];

  return (
    <section className="py-20 px-4 md:px-10 bg-[#F9F9FB] text-[#8C1515] font-sans border-t border-[#FBF4D7]" id="news-events">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase py-1 px-3.5 rounded-[4px] mb-4 border border-[#8C1515]/10 shadow-sm">
            STAY UPDATED
          </div>
          <h2 className="font-serif font-medium text-[42px] sm:text-[54px] leading-[1.05] tracking-tight text-[#8C1515] mb-4">
            News and <span className="text-[#8C1515] font-bold">Events</span>
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-slate-500 leading-[1.7] max-w-2xl mx-auto">
            Stay informed with the latest updates, announcements, and key highlights from our campus.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: EVENTS CARD (SCROLLABLE TIMELINE FEED) */}
          <div className="lg:col-span-5 bg-white border border-[#FBF4D7] rounded-[24px] p-6 md:p-8 shadow-[0_4px_25px_rgba(24,26,77,0.03)] flex flex-col h-[580px]">
            <div className="flex items-center justify-between border-b border-[#FBF4D7] pb-4 mb-6 shrink-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#8C1515]/10 flex items-center justify-center text-[#8C1515]">
                  <Newspaper className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-[#8C1515] tracking-wider uppercase block">LATEST NEWS</span>
                  <h3 className="text-lg font-bold text-[#8C1515] tracking-tight">Campus News</h3>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {eventsData.length} News Updates
              </span>
            </div>

            {/* Scroll Container with Custom Scroll Progress */}
            <div className="flex-1 flex gap-4 overflow-hidden min-h-0">
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-none"
                style={{ scrollbarWidth: 'none' }}
              >
                {eventsData.map((event, idx) => (
                  <div 
                    key={event.id}
                    className="flex items-start gap-4 group cursor-pointer transition-all duration-300"
                  >
                    {/* Event image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-[#FBF4D7] relative">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Event details */}
                    <div className="flex-1 text-left flex flex-col justify-between py-0.5 min-w-0">
                      <div>
                        {/* Eyebrow info */}
                        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          <span>{event.date}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-[#8C1515]">{event.category}</span>
                        </div>
                        {/* Event Title */}
                        <h4 className="text-[13px] sm:text-[14px] font-extrabold text-[#8C1515] leading-snug tracking-tight group-hover:text-[#8C1515] transition-colors duration-200 line-clamp-3">
                          {event.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10.5px] text-gray-400 font-semibold mt-2.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8C1515]/70" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chandigarh-style Premium Vertical Scroll Indicator */}
              <div className="w-3.5 h-full flex flex-col items-center justify-between py-1.5 shrink-0 relative">
                {/* Upper Arrow Indicator */}
                <div className={`w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] transition-colors duration-200 ${scrollProgress > 0.05 ? "border-b-[#8C1515]" : "border-b-gray-300"}`} />
                
                {/* Progress Track */}
                <div className="w-[1.5px] bg-gray-200 rounded-full flex-1 my-2.5 relative">
                  {/* Dynamic Scroll Bubble */}
                  <div 
                    className="w-[3.5px] h-12 bg-[#8C1515] rounded-full absolute -left-[1px] transition-all duration-100 shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
                    style={{ 
                      top: `${scrollProgress * (100 - 15)}%` 
                    }}
                  />
                </div>

                {/* Lower Arrow Indicator */}
                <div className={`w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[6px] transition-colors duration-200 ${scrollProgress < 0.95 ? "border-t-[#8C1515]" : "border-t-gray-300"}`} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: NEWS CARD (LARGE FEATURED CAROUSEL / SLIDER) */}
          <div className="lg:col-span-7 bg-white border border-[#FBF4D7] rounded-[24px] overflow-hidden shadow-[0_4px_25px_rgba(24,26,77,0.03)] flex flex-col justify-between h-[580px] group/news relative">
            
            {/* Top Carousel Image Wrapper */}
            <div className="relative h-[290px] sm:h-[320px] w-full overflow-hidden shrink-0 bg-gray-50 border-b border-[#FBF4D7]">
              <img 
                src={currentNews.image} 
                alt={currentNews.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover/news:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Slider Navigation Arrows */}
              <button 
                onClick={prevNews}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-[#8C1515] hover:scale-105 hover:border-transparent flex items-center justify-center transition-all duration-300 z-10 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={nextNews}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-[#8C1515] hover:scale-105 hover:border-transparent flex items-center justify-center transition-all duration-300 z-10 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Transparent indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
                {newsData.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveNewsIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${dotIdx === activeNewsIndex ? "w-5 bg-[#8C1515]" : "w-1.5 bg-white/50 hover:bg-white"}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Content Description Grid */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-left relative bg-white">
              <div className="space-y-3">
                {/* Category & Date Info */}
                <div className="flex items-center gap-2.5 text-[11px] font-extrabold text-[#8C1515] uppercase tracking-wider">
                  <span>{currentNews.date}</span>
                  <span className="text-gray-300">•</span>
                  <span className="bg-[#EBD8D0] text-[#8C1515] px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest">
                    {currentNews.category}
                  </span>
                </div>

                {/* News Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#8C1515] leading-snug tracking-tight group-hover/news:text-[#8C1515] transition-colors duration-300">
                  {currentNews.title}
                </h3>
              </div>

              {/* Bottom Row containing secondary information and the primary action CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-[#FBF4D7] mt-auto">
                <span className="text-[11px] font-bold text-gray-400 tracking-wide uppercase">
                  HKBK Group of Institutions
                </span>

                {/* Premium Conversion CTA */}
                <button className="bg-[#8C1515] hover:bg-[#FBF4D7] hover:text-[#8C1515] border border-transparent hover:border-[#8C1515]/20 hover:-translate-y-0.5 text-white text-[11px] font-extrabold uppercase tracking-widest px-5 py-3 rounded-xl shadow-[0_4px_16px_rgba(140, 21, 21,0.25)] transition-all duration-300 flex items-center gap-2 group cursor-pointer self-stretch sm:self-auto justify-center">
                  <span>{currentNews.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

