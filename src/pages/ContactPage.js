import React from 'react';

export default function ContactPage({ navigateTo, showToast }) {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 pt-32 sm:pt-36 md:pt-40 animate-fade-up">
      <div className="bg-[#e879f9] border-3 sm:border-4 border-black p-6 sm:p-8 md:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6 sm:mb-8 leading-none">Hit Us Up</h2>
        <div className="space-y-4 sm:space-y-5">
          <input type="email" placeholder="you@college.edu" className="w-full border-3 sm:border-4 border-black p-3 font-black bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" />
          <textarea placeholder="What's up?" rows="4" className="w-full border-3 sm:border-4 border-black p-3 font-black bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"></textarea>
          <button onClick={() => { showToast("Message sent! We'll hit you back soon."); navigateTo('home'); }} className="bg-black text-white font-black uppercase tracking-widest py-3 sm:py-4 px-6 sm:px-8 border-3 sm:border-4 border-black hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base active:scale-95">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
