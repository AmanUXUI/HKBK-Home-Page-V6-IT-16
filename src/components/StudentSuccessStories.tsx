import React, { useState } from "react";
import { Play, Sparkles, X, Heart, MessageCircle, Share2, Award, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SuccessStory {
  id: string;
  name: string;
  role: string;
  company: string;
  package: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  highlight: string;
  likes: number;
}

const successStories: SuccessStory[] = [
  {
    id: "aisha",
    name: "Aisha Rahman",
    role: "B.Tech CSE, Batch of 2025",
    company: "Amazon",
    package: "32 LPA",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=700",
    videoUrl: "https://www.youtube.com/embed/S_T04mD-rZ4",
    duration: "1:12",
    highlight: "Cracked AWS SDE interview through HKBK's special incubation track.",
    likes: 342
  },
  {
    id: "siddharth",
    name: "Siddharth Sen",
    role: "B.Tech ISE, Batch of 2024",
    company: "Microsoft",
    package: "42 LPA",
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=700",
    videoUrl: "https://www.youtube.com/embed/L1vM1p8A_28",
    duration: "0:58",
    highlight: "From campus coding bootcamps to Microsoft IDC Redmond team.",
    likes: 412
  },
  {
    id: "sneha",
    name: "Sneha Rao",
    role: "B.Tech ECE, Batch of 2025",
    company: "Google",
    package: "36 LPA",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=700",
    videoUrl: "https://www.youtube.com/embed/4b_vR8N1Fno",
    duration: "1:04",
    highlight: "Leveraged HKBK Hackathon exposure to secure Google cloud engineering offer.",
    likes: 289
  },
  {
    id: "kevin",
    name: "Kevin Alvares",
    role: "B.Tech CSE, Batch of 2025",
    company: "Adobe",
    package: "28 LPA",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=700",
    videoUrl: "https://www.youtube.com/embed/S4_Yn37D4k0",
    duration: "0:45",
    highlight: "Secured UI/UX engineering role. Honored HKBK project mentoring program.",
    likes: 195
  },
  {
    id: "tanveer",
    name: "Tanveer Ahmed",
    role: "B.Tech AI & ML, Batch of 2024",
    company: "Samsung",
    package: "18 LPA",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=700",
    videoUrl: "https://www.youtube.com/embed/h_D3X0pYJgM",
    duration: "1:20",
    highlight: "Published 2 papers under HKBK labs, hired by Samsung Prism research group.",
    likes: 227
  }
];

export default function StudentSuccessStories() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [likedStories, setLikedStories] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = !likedStories[id];
    setLikedStories((prev) => ({ ...prev, [id]: isLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: (prev[id] ?? successStories.find(s => s.id === id)?.likes ?? 0) + (isLiked ? 1 : -1)
    }));
  };

  const handleShare = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // Ignore clipboard fallback issues in sandboxed iframes
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getLikes = (story: SuccessStory) => {
    return likeCounts[story.id] ?? story.likes;
  };

  return (
    <section className="py-24 bg-[#8C1515] text-white relative overflow-hidden border-t border-b border-[#8C1515]/30" id="success-reels">
      
      {/* Decorative tech grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-[#EBD8D0]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#8C1515]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#EBD8D0] text-[#8C1515] text-[11px] font-bold tracking-[0.08em] uppercase rounded py-1 px-3.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8C1515]" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sentence-case font-serif">
            Student Placement
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-[15px] md:text-[16px] leading-[1.65]">
            Click to watch raw, inspiring video stories of our students landing high-profile dream packages directly from the campus placement desk.
          </p>
        </div>

        {/* Continuous Left-Sliding Marquee Track */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Side Fades for Premium Cinematic Atmosphere */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#8C1515] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#8C1515] to-transparent z-10 pointer-events-none" />

          {/* Sliding Marquee Track */}
          <div 
            className="animate-marquee flex gap-6 hover:[animation-play-state:paused] py-4"
            style={{ animationDuration: "35s" }}
          >
            {[...successStories, ...successStories, ...successStories].map((story, idx) => {
              const uniqueKey = `${story.id}-${idx}`;
              const hasLiked = !!likedStories[story.id];
              
              return (
                <div
                  key={uniqueKey}
                  onClick={() => setSelectedStory(story)}
                  className="w-[260px] h-[420px] shrink-0 bg-[#8C1515]/30 border border-white/10 rounded-[24px] overflow-hidden relative group cursor-pointer hover:border-[#DFFC66]/50 hover:shadow-[0_12px_36px_rgba(223,252,102,0.15)] transition-all duration-300"
                >
                  {/* Reel Thumbnail */}
                  <img
                    src={story.thumbnail}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8C1515] via-black/20 to-black/40 z-10" />

                  {/* Top-Right Tag: Package Badge */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1.5">
                    <div className="bg-[#EBD8D0] text-[#8C1515] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#8C1515]" />
                      <span>{story.package}</span>
                    </div>
                    <div className="bg-[#8C1515] text-white text-[9px] font-semibold px-2 py-0.5 rounded-md shadow-md">
                      {story.company}
                    </div>
                  </div>

                  {/* Duration tag top-left */}
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-[9px] text-white font-mono px-2 py-1 rounded">
                    {story.duration}
                  </div>

                  {/* Center Play Button (Pulsing & Interactive) */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-[#8C1515]/90 hover:bg-[#FBF4D7] hover:text-[#8C1515] border border-white/20 text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-[#8C1515]/40 group-hover:shadow-xl">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Text Details */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 text-left">
                    <div className="mb-2">
                      <h4 className="text-[17px] font-bold text-white tracking-tight leading-tight group-hover:text-[#EBD8D0] transition-colors">
                        {story.name}
                      </h4>
                      <p className="text-[11px] text-white/70 font-medium">
                        {story.role}
                      </p>
                    </div>
                    
                    {/* Social Stats Preview Row */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-white/80">
                      <button 
                        onClick={(e) => handleLike(story.id, e)}
                        className="flex items-center space-x-1.5 hover:text-red-400 transition-colors text-[11px] font-mono cursor-pointer"
                      >
                        <Heart className={`w-4 h-4 ${hasLiked ? "fill-red-500 text-red-500" : ""}`} />
                        <span>{getLikes(story)}</span>
                      </button>
                      <div className="flex items-center space-x-1 text-[11px] font-mono">
                        <MessageCircle className="w-4 h-4" />
                        <span>{Math.floor(story.likes / 5)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparent Banner Image Section (Placed below Success Stories) */}
        <div className="flex justify-center mt-12 md:mt-16">
          <img 
            src="https://imgh.in/host/6wocq8" 
            alt="Student Success Stories Banner" 
            className="w-full max-w-6xl xl:max-w-7xl max-h-[650px] xl:max-h-[800px] object-contain filter drop-shadow-2xl transform hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

      </div>

      {/* FULL SCREEN / CINEMATIC VERTICAL REEL VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            {/* Modal Body Container resembling vertical mobile layout */}
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-[420px] aspect-[9/16] max-h-[85vh] md:max-h-[80vh] bg-[#8C1515] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar with close */}
              <div className="absolute top-4 right-4 z-40 flex items-center space-x-2">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 shadow-lg"
                  aria-label="Close Player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube video embed or custom visual playback */}
              <div className="relative w-full h-full flex-1 bg-black">
                <iframe
                  src={`${selectedStory.videoUrl}?autoplay=1&mute=0&modestbranding=1&rel=0`}
                  title={selectedStory.name}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="no-referrer"
                />

                {/* Left hand interactive details block (absolute floating overlay on screen) */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/40 to-transparent z-30 pointer-events-none">
                  <div className="max-w-[80%] text-left select-none space-y-2 pointer-events-auto">
                    {/* User Profile */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-[#DFFC66]/50 overflow-hidden bg-[#8C1515]">
                        <img 
                          src={selectedStory.thumbnail} 
                          alt="Avatar" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white flex items-center gap-1">
                          <span>{selectedStory.name}</span>
                          <span className="text-[#EBD8D0] text-[10px]">✔</span>
                        </h5>
                        <p className="text-[10px] text-white/70">{selectedStory.role}</p>
                      </div>
                    </div>

                    {/* Story highlight bubble */}
                    <p className="text-xs text-white/90 leading-relaxed font-sans bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/5 shadow-md">
                      {selectedStory.highlight}
                    </p>

                    {/* Placed label */}
                    <div className="inline-flex items-center gap-1.5 bg-[#EBD8D0] text-[#8C1515] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase">
                      <Award className="w-3 h-3 text-[#8C1515]" />
                      <span>{selectedStory.company} — {selectedStory.package}</span>
                    </div>
                  </div>
                </div>

                {/* Right hand side action buttons overlay inside the player (like TikTok) */}
                <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-5">
                  {/* Like */}
                  <div className="flex flex-col items-center">
                    <button
                      onClick={(e) => handleLike(selectedStory.id, e)}
                      className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md hover:bg-black text-white hover:text-red-400 flex items-center justify-center transition-all shadow-lg border border-white/10 cursor-pointer"
                    >
                      <Heart className={`w-5 h-5 ${likedStories[selectedStory.id] ? "fill-red-500 text-red-500" : ""}`} />
                    </button>
                    <span className="text-[10px] text-white font-mono mt-1 font-semibold">{getLikes(selectedStory)}</span>
                  </div>

                  {/* Comments count */}
                  <div className="flex flex-col items-center">
                    <button
                      className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md hover:bg-black text-white flex items-center justify-center transition-all shadow-lg border border-white/10 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <span className="text-[10px] text-white font-mono mt-1 font-semibold">{Math.floor(selectedStory.likes / 5)}</span>
                  </div>

                  {/* Share button */}
                  <div className="flex flex-col items-center relative">
                    <button
                      onClick={handleShare}
                      className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md hover:bg-black text-white flex items-center justify-center transition-all shadow-lg border border-white/10 cursor-pointer"
                      title="Copy Share Link"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <span className="text-[10px] text-white mt-1 font-semibold uppercase tracking-wider text-[8px]">
                      {copiedLink ? "Copied!" : "Share"}
                    </span>
                    {copiedLink && (
                      <div className="absolute -top-8 right-0 bg-[#EBD8D0] text-[#8C1515] text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap animate-fade-in">
                        Copied Link!
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
