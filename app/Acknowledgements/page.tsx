"use client";

import React from "react";
import { Heart, Shield } from "lucide-react";
import Link from "next/link";

// Custom Minimal SVG Icons for flawless production compilation
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const sponsors = [
  {
    id: 1,
    name: "ZAN Tech",
    logo: "/sponsor/zan-tech.png",
    type: "COMPANY",
    tag: "IN-KIND CONTRIBUTION",
    facebook: "#",
    website: "#"
  },
  {
    id: 2,
    name: "Robo Haat BD",
    logo: "/sponsor/robo-haat.png",
    type: "SPONSOR",
    tag: "HARDWARE SPONSOR",
    facebook: "#",
    website: "#"
  },
  {
    id: 3,
    name: "Trust Electric Solutions",
    logo: "/sponsor/trust-electric.png",
    type: "COMPANY",
    tag: "IN-KIND CONTRIBUTION",
    facebook: "#",
    website: "#"
  }
];

export default function AcknowledgementsPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-x-hidden selection:bg-[#de4030] selection:text-white">
      
      {/* Background Cyber Glow Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#de4030]/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 1. Ultra-Modern Header Section */}
      <div className="text-center mb-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent mb-4">
          We are grateful <span className="bg-gradient-to-r from-[#de4030] to-[#ff6b57] bg-clip-text text-transparent">to you!</span>
        </h1>
        <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
          We extend our heartfelt thanks to all the individuals and organizations who have supported 
          Team Demon71 through their generous contributions, sponsorships, and donations.
        </p>

        {/* Floating Futuristic Glass Banner */}
        <div className="mt-12 max-w-2xl mx-auto bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 border border-zinc-800/60 backdrop-blur-xl p-6 rounded-2xl flex items-center gap-5 text-left relative group hover:border-[#de4030]/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#de4030]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#de4030] to-[#8a1c11] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#de4030]/20">
            <Heart className="w-5 h-5 fill-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-zinc-200 font-extrabold text-lg uppercase tracking-wide">Thank You for Your Support!</h3>
            <p className="text-zinc-500 text-xs mt-0.5">Every contribution empowers our engineering breakthroughs.</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col gap-24 relative z-10">
        
        {/* 2. Core Card Layout */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-8 h-[1px] bg-zinc-800" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#de4030]">
              Our Premium Supporters
            </h2>
            <div className="w-8 h-[1px] bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="relative bg-gradient-to-b from-[#0d0d0e] to-[#050506] border border-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-between group hover:border-[#de4030]/30 hover:shadow-[0_0_50px_-12px_rgba(222,64,48,0.15)] transition-all duration-500"
              >
                {/* Cyberpunk corner accent decor */}
                <div className="absolute top-3 right-3 text-zinc-800 font-mono text-[9px] select-none tracking-widest opacity-40 group-hover:text-[#de4030]/40 group-hover:opacity-100 transition-colors">
                  // MOD_0{sponsor.id}
                </div>

                <div className="w-full flex flex-col items-center">
                  {/* Category Type Badge */}
                  <div className="flex items-center gap-1.5 mb-6 bg-zinc-900/50 border border-zinc-800 px-3 py-1 rounded-full">
                    <Shield className="w-3 h-3 text-[#de4030]" />
                    <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">
                      {sponsor.type}
                    </span>
                  </div>

                  {/* Logo Container with Glassmorphism */}
                  <div className="w-36 h-36 mb-6 bg-gradient-to-b from-zinc-900/30 to-zinc-950/60 backdrop-blur-md flex items-center justify-center p-5 border border-zinc-800/80 group-hover:border-zinc-700/80 rounded-2xl overflow-hidden group-hover:scale-[1.03] transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-zinc-950 opacity-40 group-hover:opacity-0 transition-opacity" />
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-w-full max-h-full object-contain relative z-10 filter brightness-95 group-hover:brightness-110 transition-all" 
                    />
                  </div>
                  
                  {/* Name and Tag */}
                  <h3 className="text-xl font-black tracking-tight text-center text-zinc-100 group-hover:text-[#de4030] transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  <p className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase mt-1.5">
                    {sponsor.tag}
                  </p>
                </div>

                {/* Minimalist Tech-Styled Footer Links */}
                <div className="mt-8 pt-5 w-full border-t border-zinc-900/60 flex justify-center gap-5">
                  <a 
                    href={sponsor.facebook} 
                    className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a 
                    href={sponsor.website} 
                    className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
                    aria-label="Website"
                  >
                    <GlobeIcon />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 3. Sleek Cyberpunk Action Call Section */}
        <div className="mt-4 relative">
          <div className="absolute inset-0 bg-[#de4030]/5 blur-3xl rounded-full pointer-events-none" />
          <div className="w-full bg-gradient-to-b from-[#0d0d0e] to-[#050506] border border-zinc-900 rounded-3xl p-10 md:p-12 text-center flex flex-col items-center justify-center max-w-[850px] mx-auto shadow-2xl relative overflow-hidden group">
            
            {/* Tech decorative crosshairs */}
            <div className="absolute top-0 left-0 w-4 h-[1px] bg-zinc-800 group-hover:bg-[#de4030]/30 transition-colors" />
            <div className="absolute top-0 left-0 w-[1px] h-4 bg-zinc-800 group-hover:bg-[#de4030]/30 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-zinc-800 group-hover:bg-[#de4030]/30 transition-colors" />
            <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-zinc-800 group-hover:bg-[#de4030]/30 transition-colors" />

            <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-200">
              Want to <span className="text-[#de4030]">Support Us?</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mt-4 max-w-xl">
              If you'd like to support Team Demon71 through donations, sponsorships, or in-kind contributions, we'd love to hear from you!
            </p>
            
<div className="pt-8 w-full max-w-xs">
  <Link 
    href="/support" 
    className="block w-full text-center relative group/btn overflow-hidden bg-transparent border border-[#de4030] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#de4030]/5"
  >
    <div className="absolute inset-0 bg-[#de4030] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
    <span className="relative z-10 group-hover/btn:text-white transition-colors">
      Get In Touch
    </span>
  </Link>
</div>
          </div>
        </div>

      </div>
    </div>
  );
}