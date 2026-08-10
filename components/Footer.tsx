"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

// Custom SVG Icons to avoid Lucide package version mismatch bugs
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-10 mb-12">
        
        {/* Column 1: Brand & About */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-[#de4030] uppercase">
              DEMON71
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-500 max-w-sm">
            A student-led technology and engineering team from Alif Subhan Chowdhury Govt College. Driven to build next-generation tech solutions through innovative ideas, advanced coding, and robust system architecture.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            <a href="https://www.facebook.com/teamdemon71" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#de4030] hover:bg-[#de4030] text-white flex items-center justify-center transition-all duration-300">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#de4030] hover:bg-[#de4030] text-white flex items-center justify-center transition-all duration-300">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-[#de4030] hover:bg-[#de4030] text-white flex items-center justify-center transition-all duration-300">
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-wide text-sm uppercase border-b border-zinc-900 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-[#de4030] transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#de4030] transition-colors duration-200">About</Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-[#de4030] transition-colors duration-200">Projects</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#de4030] transition-colors duration-200">Team</Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-[#de4030] transition-colors duration-200">Achievements</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#de4030] transition-colors duration-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-wide text-sm uppercase border-b border-zinc-900 pb-2">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#de4030] mt-0.5 flex-shrink-0" />
              <span className="text-zinc-500 leading-relaxed">
                Alif Subhan Chowdhury Govt College, Bahubal, Habiganj
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#de4030] flex-shrink-0" />
              <span className="text-zinc-500">+8801819-986598</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#de4030] flex-shrink-0" />
              <a href="mailto:contact@teamzenithruet.info" className="text-zinc-500 hover:text-[#de4030] transition-colors duration-200 break-all">
                contact@teamdemon71.info
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-[1200px] mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© {currentYear} Team DEMON71. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed & Developed by <a href="https://yourtarikur.netlify.app" target="_blank" rel="noopener noreferrer" className="text-zinc-300 font-medium hover:text-[#de4030] transition-colors duration-200">Tarikur Rahman</a>
        </p>
      </div>
    </footer>
  );
}