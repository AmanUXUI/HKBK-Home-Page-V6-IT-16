import React, { useState } from "react";
import { faqItems } from "../data";
import { Search, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = ["All", "General", "Academics", "Placements", "Infrastructure"];

  const filteredFaqs = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-white text-[#8C1515] font-sans border-t border-neutral-200 pb-32" id="faqs">
      <div className="max-w-4xl mx-auto">
        
         {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase rounded py-1 px-3 mb-4 border border-[#8C1515]/10 shadow-xs">
            <MessageSquare className="w-4 h-4 text-[#8C1515]" />
            <span>Support Helpdesk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#8C1515] mb-4 sentence-case font-serif">
            Answers to your queries
          </h2>
          <p className="text-neutral-600 text-[15px] md:text-[16px] max-w-xl mx-auto font-normal">
            Search our compiled knowledge bank. If you do not find what you are looking for, our helpdesk counselors are available.
          </p>
        </div>

        {/* Live Search and Filters Block */}
        <div className="space-y-6 mb-10">
          
          {/* Search Box */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search questions about courses, placement support, hostels, or campus life..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 hover:border-[#8C1515]/40 focus:border-[#8C1515] focus:ring-2 focus:ring-[#8C1515]/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-normal text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all shadow-xs"
            />
          </div>

          {/* Quick Pill Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setOpenFaqId(null); }}
                className={`text-xs font-medium px-4 py-2 rounded-full cursor-pointer transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#8C1515] border-[#8C1515] text-white shadow-sm font-bold"
                    : "bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-[#8C1515] hover:bg-neutral-200/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`border rounded-2xl overflow-hidden shadow-xs transition-all text-left duration-300 ${
                      isOpen
                        ? "bg-neutral-50 border-[#8C1515]/30 shadow-md ring-1 ring-[#8C1515]/10"
                        : "bg-white border-neutral-200 hover:bg-neutral-50/80 hover:border-neutral-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 md:p-6 flex justify-between items-center space-x-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-semibold text-sm md:text-base tracking-tight text-neutral-900 transition-colors">
                        {faq.question}
                      </span>
                      <div className={`rounded-lg p-1.5 transition-colors ${
                        isOpen ? "bg-[#8C1515] text-white" : "bg-neutral-100 text-neutral-600"
                      }`}>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-[14px] text-neutral-600 leading-relaxed font-normal border-t border-neutral-200/80 pt-4">
                            {faq.answer}
                            
                            <div className="mt-4 flex items-center space-x-1.5 text-[10px] font-medium uppercase tracking-widest">
                              <span className="text-neutral-400">Topic Category:</span>
                              <span className="bg-neutral-100 text-[#8C1515] px-2 py-0.5 rounded border border-neutral-200 font-semibold">{faq.category}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-neutral-50 border border-neutral-200 rounded-2xl shadow-xs">
                <span className="text-sm font-semibold text-[#8C1515] uppercase tracking-widest block mb-1">
                  No matches found
                </span>
                <p className="text-xs text-neutral-500 max-w-md mx-auto">
                  Try clearing your search terms or selecting another category above to view results.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
