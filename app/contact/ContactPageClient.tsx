"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-[#de4030]">
          Contact Us
        </h1>
        <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Have questions, proposals, or want to collaborate? We'd love to hear from you!
        </p>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col gap-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-[#de4030]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#de4030] flex items-center justify-center mb-4 text-white shadow-lg shadow-[#de4030]/20">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg tracking-wide mb-2">Location</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Bahubal, Habiganj<br />Sylhet, Bangladesh
            </p>
          </div>

          <div className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-[#de4030]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#de4030] flex items-center justify-center mb-4 text-white shadow-lg shadow-[#de4030]/20">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg tracking-wide mb-2">Phone</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2">
              +880 1819-986598
            </p>
          </div>

          <div className="bg-zinc-950/50 border border-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-[#de4030]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#de4030] flex items-center justify-center mb-4 text-white shadow-lg shadow-[#de4030]/20">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg tracking-wide mb-2">Email</h3>
            <a href="mailto:teamdemon71bd@gmail.com" className="text-[#de4030] hover:underline text-sm leading-relaxed break-all mt-2">
              teamdemon71bd@gmail.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 bg-[#de4030] rounded-2xl p-8 md:p-10 flex flex-col justify-between text-white shadow-2xl">
            <div>
              <h2 className="text-3xl font-black tracking-wide mb-4">Let's Connect!</h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                Feel free to reach out with any questions, proposals, or agreements. We look forward to hearing from you and, as always, you are most welcome!
              </p>

              <div className="space-y-4 text-sm font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                  <div>
                    <span className="font-bold block text-xs uppercase opacity-75 mb-0.5">Visit Us</span>
                    Alif Subhan Chowdhury Govt College, Bahubal
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                  <div>
                    <span className="font-bold block text-xs uppercase opacity-75 mb-0.5">Call Us</span>
                    +880 1819-986598
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                  <div>
                    <span className="font-bold block text-xs uppercase opacity-75 mb-0.5">Email Us</span>
                    teamdemon71bd@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <span className="block text-xs font-bold uppercase opacity-75 tracking-wider mb-3">Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/teamdemon71" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#de4030] flex items-center justify-center transition-all duration-300">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/tarikurrahman08/" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#de4030] flex items-center justify-center transition-all duration-300">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="https://github.com/TarikurRahman" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#de4030] flex items-center justify-center transition-all duration-300">
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-950/50 border border-zinc-900 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white/90">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 ring-[#de4030] text-white placeholder-zinc-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 ring-[#de4030] text-white placeholder-zinc-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Subject</label>
                <input
                  type="text"
                  placeholder="Message Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 ring-[#de4030] text-white placeholder-zinc-600"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Message</label>
                <textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full bg-zinc-900 p-3 rounded-lg outline-none focus:ring-2 ring-[#de4030] text-white placeholder-zinc-600"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#de4030] hover:bg-[#b91c1c] text-white font-bold py-3 rounded-lg transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
