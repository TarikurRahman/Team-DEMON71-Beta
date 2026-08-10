"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "@/constants/content";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const { language } = useApp();
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const nav = translations[language].nav;
  const linksOrder = ["home", "about", "project", "team", "achievements", "contact"];

  const isActive = (key: string) => {
    const slug = key === "home" ? "/" : `/${key}`;
    return pathname === slug || pathname === `${slug}/`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e293b]/10 bg-white/70 backdrop-blur-md text-[#1e293b] transition-colors duration-300 dark:border-white/10 dark:bg-black/70 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              {/* পুরাতন D71 টেক্সট বক্স সরিয়ে এখানে ইমেজ লোগো অ্যাড করা হয়েছে */}
              <img 
                src="/images/logo.png" 
                alt="DEMON71 Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="font-semibold text-lg tracking-wider">DEMON71</span>
            </Link>
          </div>

          {/* Center links block: fills available space and pushes links toward action buttons */}
          <div className="hidden md:flex flex-1 justify-end px-8">
            <div className="flex items-center gap-6">
              {linksOrder.map((key) => (
                <Link
                  key={key}
                  href={key === "home" ? "/" : `/${key}`}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${isActive(key) ? "text-[#de4030]" : "text-[#1e293b] hover:text-[#de4030] dark:text-white"}`}
                >
                  {(nav as any)[key]}
                  {isActive(key) && <span className="absolute left-0 -bottom-2 h-1 w-full rounded bg-[#de4030]" />}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-md bg-[#a81e16] px-4 py-2 text-white transition-colors duration-200 hover:bg-[#de4030]"
            >
              {nav.getInTouch}
            </Link>

            <button
              className="md:hidden rounded-md border border-[#1e293b]/10 bg-white/90 p-2 text-[#1e293b] transition-colors duration-200 hover:border-[#1e293b]/20 hover:bg-white dark:border-white/10 dark:bg-black/90 dark:text-white dark:hover:border-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className={`md:hidden border-t border-[#1e293b]/10 bg-white text-[#1e293b] transition-colors duration-200 dark:border-white/10 dark:bg-black dark:text-white`}> 
          <div className="px-4 py-4 space-y-3">
            {linksOrder.map((key) => (
              <Link
                key={key}
                href={key === "home" ? "/" : `/${key}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(key) ? "text-[#de4030]" : "text-[#1e293b] hover:text-[#de4030] dark:text-white"}`}
              >
                {(nav as any)[key]}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-[#a81e16] px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-[#de4030]"
            >
              {nav.getInTouch}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}