"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Award } from "lucide-react";

const achievementsData = [
  {
    id: "wice-2026",
    title: "47th National Science & Technology Fair 2026",
    subTitle: "National Level - 5th Place",
    description: "Secured 5th Place at the Grand Finale of the 47th National Science & Technology Fair (National Level).",
    date: "14–16 June 2026",
    venue: "National Science and Technology Complex",
    organizer: "National Museum of Science & Technology, Ministry of Science & Technology",
    image: "/images/national.jpg",
  },
  {
    id: "nstf-sylhet-2026",
    title: "World Invention Competition & Exhibition 2026",
    subTitle: "WICE 2026 National Round Gold Medalist",
    description: "Golden moment of achieving the Gold Medal at the WICE 2026 national round.",
    date: "9 May 2026",
    venue: "Northern University Bangladesh (NUB)",
    organizer: "Dreams of Bangladesh (DOB) in collaboration with IYSA & WICE",
    image: "/images/wice.jpg",
  },
  {
    id: "nstf-habiganj-2026",
    title: "47th National Science & Technology Fair 2026",
    subTitle: "Sylhet Divisional Level - 1st Place",
    description: "Achieved 1st Place at the Sylhet Divisional Level of the 47th National Science & Technology Fair 2026.",
    date: "15–17 May 2026",
    venue: "Mohammad Ali Gymnasium, Rikabibazar, Sylhet",
    organizer: "Divisional Commissioner's Office, Sylhet under National Museum of Science & Technology",
    image: "/images/sylhet.jpg",
  },
  {
    id: "nstf-bahubal-2026",
    title: "47th National Science & Technology Fair 2026",
    subTitle: "Habiganj District Level - 1st Place",
    description: "Achieved 1st Place at the Habiganj District Level of the 47th National Science & Technology Fair 2026.",
    date: "18–20 April 2026",
    venue: "Zilla Parishad Auditorium, Habiganj",
    organizer: "District Administration, Habiganj (Sponsored by Ministry of Science & Technology)",
    image: "/images/habiganj.jpg",
  },
  {
    id: "nstf-national-2026",
    title: "47th National Science & Technology Fair 2026",
    subTitle: "Bahubal Upazila Level - 1st Place",
    description: "Achieved 1st Place at the Bahubal Upazila Level of the 47th National Science & Technology Fair 2026.",
    date: "15 April 2026",
    venue: "Upazila Parishad Auditorium, Bahubal",
    organizer: "Upazila Administration, Bahubal (Sponsored by Ministry of Science & Technology)",
    image: "/images/bahubal.jpg",
  }
];

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievementsData[0] | null>(null);
  const featuredAchievement = achievementsData[0];
  const remainingAchievements = achievementsData.slice(1);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">
      <div className="text-center mb-16">
        <p className="text-[#de4030] text-sm font-bold tracking-[0.3em] uppercase mb-2">
          OUR TRIUMPHS & MILESTONES
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-black uppercase tracking-wider">
          ACHIEVEMENTS
        </h1>
      </div>

      <section className="w-full max-w-[1400px] mb-10 flex justify-center">
        <motion.div
          key={featuredAchievement.id}
          layoutId={`card-${featuredAchievement.id}`}
          onClick={() => setSelectedAchievement(featuredAchievement)}
          className="w-full max-w-[640px] bg-zinc-950/40 border border-zinc-900 hover:border-[#de4030]/60 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-2xl flex flex-col"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
            <img
              src={featuredAchievement.image}
              alt={featuredAchievement.subTitle}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 filter-none opacity-100"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute top-4 left-4 bg-[#de4030] text-white text-xs font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow-md flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> WINNER
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">
                {featuredAchievement.title}
              </h3>
              <h2 className="text-white font-extrabold text-xl md:text-2xl tracking-wide group-hover:text-[#de4030] transition-colors duration-300 line-clamp-2">
                {featuredAchievement.subTitle}
              </h2>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed text-justify line-clamp-2">
                {featuredAchievement.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900/80 space-y-2 text-xs text-zinc-500 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#de4030]/70 flex-shrink-0" />
                <span>{featuredAchievement.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#de4030]/70 flex-shrink-0" />
                <span className="truncate">{featuredAchievement.venue}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-10">
        {remainingAchievements.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedAchievement(item)}
            className="bg-zinc-950/40 border border-zinc-900 hover:border-[#de4030]/60 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-2xl flex flex-col w-full"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
              <img
                src={item.image}
                alt={item.subTitle}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 filter-none opacity-100"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute top-4 left-4 bg-[#de4030] text-white text-xs font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow-md flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> WINNER
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-1">
                  {item.title}
                </h3>
                <h2 className="text-white font-extrabold text-xl md:text-2xl tracking-wide group-hover:text-[#de4030] transition-colors duration-300 line-clamp-2">
                  {item.subTitle}
                </h2>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed text-justify line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/80 space-y-2 text-xs text-zinc-500 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#de4030]/70 flex-shrink-0" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#de4030]/70 flex-shrink-0" />
                  <span className="truncate">{item.venue}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <motion.div
              layoutId={`card-${selectedAchievement.id}`}
              className="bg-zinc-950 border border-zinc-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-0"
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="md:col-span-6 bg-zinc-900 relative aspect-[4/3] md:aspect-auto md:min-h-[450px]">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.subTitle}
                  className="object-cover w-full h-full filter-none"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
              </div>

              <div className="md:col-span-6 p-8 flex flex-col justify-center">
                <span className="text-[#de4030] text-xs font-bold uppercase tracking-widest border-b border-zinc-900 pb-2 mb-3 block">
                  {selectedAchievement.title}
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white tracking-wide leading-tight">
                  {selectedAchievement.subTitle}
                </h2>

                <p className="text-zinc-300 text-sm leading-relaxed text-justify mt-4 mb-6">
                  {selectedAchievement.description}
                </p>

                <div className="bg-zinc-900/40 border border-zinc-900/60 rounded-xl p-4 space-y-3 text-xs md:text-sm">
                  <div className="flex items-start gap-3 text-zinc-400">
                    <Calendar className="w-4 h-4 text-[#de4030] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white block text-xs uppercase tracking-wider mb-0.5">Timeline</span>
                      {selectedAchievement.date}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-zinc-400">
                    <MapPin className="w-4 h-4 text-[#de4030] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white block text-xs uppercase tracking-wider mb-0.5">Venue</span>
                      {selectedAchievement.venue}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-zinc-400">
                    <Award className="w-4 h-4 text-[#de4030] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white block text-xs uppercase tracking-wider mb-0.5">Authority / Organizer</span>
                      {selectedAchievement.organizer}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
