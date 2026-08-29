import React, { useState } from "react";
import { Camera, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  caption: string;
  tilt: string;
  col: number;
  rowOffset: string;
}

const collageImages: GalleryImage[] = [
  // Column 1
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Multimedia Lecture Theatres",
    caption: "Smart air-conditioned lecture theatres with advanced premium audiovisual systems.",
    tilt: "-rotate-2 hover:rotate-0",
    col: 1,
    rowOffset: "mt-0"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Lush Campus Lawns",
    caption: "Iconic campus architecture and sprawling green lawns spread across a beautiful 15-acre estate.",
    tilt: "rotate-1 hover:rotate-0",
    col: 1,
    rowOffset: "mt-6"
  },
  // Column 2
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Student Collaboration",
    caption: "Lively peer group discussion and cooperative learning on the central campus grounds.",
    tilt: "rotate-3 hover:rotate-0",
    col: 2,
    rowOffset: "mt-12"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1568790308560-f46399432791?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Central Plaza Structures",
    caption: "Beautiful central plaza featuring modern water fixtures, stone sculpture, and pristine seating zones.",
    tilt: "-rotate-1 hover:rotate-0",
    col: 2,
    rowOffset: "mt-6"
  },
  // Column 3
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Corporate Grooming Sessions",
    caption: "Professional student council discussions and mock-interview training under top industry mentors.",
    tilt: "-rotate-3 hover:rotate-0",
    col: 3,
    rowOffset: "mt-0"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Knowledge Resource Centers",
    caption: "Multi-level library with access to over 100,000 learning catalogs, journals, and dedicated study desks.",
    tilt: "rotate-2 hover:rotate-0",
    col: 3,
    rowOffset: "mt-6"
  },
  // Column 4
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Active Learning Spaces",
    caption: "Collaborative computing labs and real-time project presentations.",
    tilt: "rotate-1 hover:rotate-0",
    col: 4,
    rowOffset: "mt-16"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1607237138185-eedd996c5c0c?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Grand Entrance Walkway",
    caption: "A magnificent boulevard lined with royal palm trees and vibrant botanical borders.",
    tilt: "-rotate-2 hover:rotate-0",
    col: 4,
    rowOffset: "mt-6"
  },
  // Column 5
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Cultural Youth Festivals",
    caption: "Annual campus fests, talent exhibitions, and collaborative creative activities.",
    tilt: "rotate-3 hover:rotate-0",
    col: 5,
    rowOffset: "mt-4"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=450&q=80",
    title: "Advanced Research Labs",
    caption: "Cutting-edge system environments for Artificial Intelligence and high-performance engineering labs.",
    tilt: "-rotate-1 hover:rotate-0",
    col: 5,
    rowOffset: "mt-6"
  }
];

export default function CampusLife() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section 
      className="py-20 px-0 bg-black text-white font-sans relative overflow-hidden border-t border-white/10" 
      id="campus-life"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://imgh.in/host/ivpr7t"
          alt="Campus background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-65 filter brightness-[0.75] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/25 to-black" />
      </div>

      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#8C1515]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#8C1515]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* Header Block exactly with the requested content */}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 text-white/90 text-[11px] font-bold tracking-[0.12em] uppercase rounded-full py-1.5 px-4 mb-5 border border-white/10">
            <Camera className="w-4 h-4 text-[#8C1515]" />
            <span>Campus Experience</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-5 font-serif leading-tight max-w-4xl mx-auto">
            Student life and sprawling facilities
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto text-[15px] sm:text-base md:text-lg leading-relaxed font-sans font-medium">
            A premium 15-acre student environment right in Bangalore, crafted carefully to balance high-intensity professional education with refreshing recreation.
          </p>
        </div>

      </div>

      {/* HORIZONTAL CONTINUOUS MOVING GALLERY (Right to Left with Progressive Edge Blurs) */}
      <div className="w-full relative z-10 overflow-hidden py-4">
        
        {/* Progressive Blur and Fade Masks on Left and Right Ends */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-30 w-24 sm:w-40 md:w-56 bg-gradient-to-r from-black via-black/85 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black_20%,transparent_100%)]" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-30 w-24 sm:w-40 md:w-56 bg-gradient-to-l from-black via-black/85 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_left,black_20%,transparent_100%)]" />

        {/* TRACK 1: Moving Right to Left */}
        <div className="flex overflow-hidden relative mb-5">
          <div className="animate-marquee-slow flex items-center space-x-6 whitespace-nowrap">
            {/* Set 1 */}
            {collageImages.map((img) => (
              <div
                key={`track1-a-${img.id}`}
                onClick={() => setSelectedImage(img)}
                className="group relative w-[280px] sm:w-[340px] md:w-[380px] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#8C1515]/50 hover:shadow-[0_12px_35px_rgba(140, 21, 21,0.3)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle Top Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Hover Icon Button */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>

                  {/* Text Details at bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C1515] bg-[#8C1515]/20 px-2 py-0.5 rounded backdrop-blur-xs inline-block mb-1">
                      HKBK Campus
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base font-serif leading-snug drop-shadow-sm">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicate for infinite seamless loop) */}
            {collageImages.map((img) => (
              <div
                key={`track1-b-${img.id}`}
                onClick={() => setSelectedImage(img)}
                className="group relative w-[280px] sm:w-[340px] md:w-[380px] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#8C1515]/50 hover:shadow-[0_12px_35px_rgba(140, 21, 21,0.3)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle Top Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Hover Icon Button */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>

                  {/* Text Details at bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C1515] bg-[#8C1515]/20 px-2 py-0.5 rounded backdrop-blur-xs inline-block mb-1">
                      HKBK Campus
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base font-serif leading-snug drop-shadow-sm">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRACK 2: Moving Right to Left (Staggered Offset Row) */}
        <div className="flex overflow-hidden relative">
          <div className="animate-marquee-slow-2 flex items-center space-x-6 whitespace-nowrap">
            {/* Set 1 (Reversed / Staggered array) */}
            {[...collageImages].reverse().map((img) => (
              <div
                key={`track2-a-${img.id}`}
                onClick={() => setSelectedImage(img)}
                className="group relative w-[260px] sm:w-[320px] md:w-[360px] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#8C1515]/50 hover:shadow-[0_12px_35px_rgba(140, 21, 21,0.3)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C1515] bg-[#8C1515]/20 px-2 py-0.5 rounded backdrop-blur-xs inline-block mb-1">
                      HKBK Campus
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base font-serif leading-snug drop-shadow-sm">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicate for infinite seamless loop) */}
            {[...collageImages].reverse().map((img) => (
              <div
                key={`track2-b-${img.id}`}
                onClick={() => setSelectedImage(img)}
                className="group relative w-[260px] sm:w-[320px] md:w-[360px] shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#8C1515]/50 hover:shadow-[0_12px_35px_rgba(140, 21, 21,0.3)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C1515] bg-[#8C1515]/20 px-2 py-0.5 rounded backdrop-blur-xs inline-block mb-1">
                      HKBK Campus
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base font-serif leading-snug drop-shadow-sm">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>



      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#8C1515]/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] bg-gray-100 relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 bg-white text-[#8C1515]">
                <span className="text-[11px] font-bold tracking-widest text-[#8C1515] uppercase block mb-1">
                  HKBK Group of Institutions
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold font-serif mb-2 text-[#8C1515]">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
