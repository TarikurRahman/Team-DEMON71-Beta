"use client";

import React from "react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase text-[#de4030] mb-6">
            Support Team DEMON71
          </h1>
          <p className="text-zinc-400 text-lg">
            Your support helps us push the boundaries of robotics and space exploration. Every contribution makes a difference in our journey.
          </p>
        </div>

        {/* Support Form */}
        <div className="bg-[#111827] p-8 md:p-12 rounded-2xl border border-zinc-800">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Support Request Form</h2>
            <p className="text-zinc-400">Tell us how you'd like to support our mission</p>
          </div>

          <form className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-zinc-800 pb-2">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Your Name *" className="bg-[#1f2937] p-3 rounded-lg w-full outline-none focus:ring-2 ring-[#de4030]" />
                <input required type="email" placeholder="Email *" className="bg-[#1f2937] p-3 rounded-lg w-full outline-none focus:ring-2 ring-[#de4030]" />
                <input type="tel" placeholder="Phone Number" className="bg-[#1f2937] p-3 rounded-lg w-full outline-none focus:ring-2 ring-[#de4030]" />
                <input type="text" placeholder="Organization/Company" className="bg-[#1f2937] p-3 rounded-lg w-full outline-none focus:ring-2 ring-[#de4030]" />
              </div>
              <input type="url" placeholder="Website (Optional)" className="bg-[#1f2937] p-3 rounded-lg w-full outline-none focus:ring-2 ring-[#de4030]" />
            </div>

            {/* Support Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">How would you like to support us?</h3>
              {["Financial Sponsorship", "In-Kind Contribution", "Technical Mentorship", "Corporate Partnership", "Other"].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer p-3 bg-[#1f2937] rounded-lg hover:bg-[#2d3748] transition-colors">
                  <input type="radio" name="supportType" className="accent-[#de4030]" />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            {/* Message */}
            <textarea placeholder="Your Message" rows={4} className="bg-[#1f2937] p-3 rounded-lg w-full outline-none focus:ring-2 ring-[#de4030]" />
            
            {/* Honeypot Field - এটি সাধারণ ইউজার দেখবে না কিন্তু বট দেখলে ফর্ম রিজেক্ট হবে */}
            <div style={{ display: 'none' }}>
              <input type="text" name="website_url_check" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className="w-full bg-[#de4030] hover:bg-[#b91c1c] text-white font-bold py-4 rounded-lg transition-all uppercase tracking-wider">
              Submit Request
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why Support Team DEMON71?</h2>
          <p className="text-zinc-400 leading-relaxed">
            Your support directly contributes to developing cutting-edge robotics projects, enabling students to participate in national and international competitions, and fostering the next generation of engineers and innovators at Alif Subhan Chowdhury Govt College (ASCGC). By partnering with us, you are joining a tech-driven defense revolution born in Bangladesh, helping us build smart, life-saving tactical solutions to safeguard our borders and lead our nation toward a self-reliant, tech-driven future.
          </p>
        </div>
      </div>
    </div>
  );
}