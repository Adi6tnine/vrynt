import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 pt-32 sm:pt-36 md:pt-40 animate-fade-up">
      <div className="bg-[#fef08a] border-3 sm:border-4 border-black p-6 sm:p-8 md:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-1">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 sm:mb-6 leading-none">Our Manifesto</h2>
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl font-bold border-l-3 sm:border-l-4 border-black pl-4 sm:pl-6">
          <p>Style shouldn't cost the earth. Or your entire semester's pocket money.</p>
          <p>We built VRYNT because we were tired of buying ₹5000 outfits for a single freshers party, only to let them rot in our wardrobes.</p>
          <p>Flex Smart. Rent the premium designer wear, return it. We handle the dry-cleaning. You handle the compliments.</p>
        </div>
      </div>
    </div>
  );
}
