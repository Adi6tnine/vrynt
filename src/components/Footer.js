import React from 'react';

export default function Footer({ navigateTo, setSelectedCategory }) {
  return (
    <footer className="bg-white border-t-6 sm:border-t-8 border-black pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16">
        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="font-black uppercase border-b-3 sm:border-b-4 border-black w-max pb-1 text-sm sm:text-base">Shop</span>
          <button onClick={() => { setSelectedCategory("All"); navigateTo('shop'); }} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">All Fits</button>
          <button onClick={() => { setSelectedCategory("Formals"); navigateTo('shop'); }} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Formals</button>
          <button onClick={() => { setSelectedCategory("Ethnic"); navigateTo('shop'); }} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Ethnic</button>
          <button onClick={() => { setSelectedCategory("Party Wear"); navigateTo('shop'); }} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Party Wear</button>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="font-black uppercase border-b-3 sm:border-b-4 border-black w-max pb-1 text-sm sm:text-base">Company</span>
          <button onClick={() => navigateTo('howItWorks')} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">The Playbook</button>
          <button onClick={() => navigateTo('about')} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Our Manifesto</button>
          <button onClick={() => navigateTo('contact')} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Careers</button>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="font-black uppercase border-b-3 sm:border-b-4 border-black w-max pb-1 text-sm sm:text-base">Support</span>
          <button onClick={() => navigateTo('faq')} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">FAQs</button>
          <button onClick={() => navigateTo('contact')} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Contact Us</button>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="font-black uppercase border-b-3 sm:border-b-4 border-black w-max pb-1 text-sm sm:text-base">Social</span>
          <button onClick={() => { window.open('https://instagram.com', '_blank'); }} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Instagram</button>
          <button onClick={() => { window.open('https://twitter.com', '_blank'); }} className="text-left font-black text-xs sm:text-sm text-gray-400 hover:text-black transition-colors active:scale-95">Twitter</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t-3 sm:border-t-4 border-black gap-4">
        <div className="flex flex-col xs:flex-row items-center gap-2 sm:gap-3 mb-4 md:mb-0">
          <div className="relative inline-block group cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 w-full h-full bg-[#e879f9] border-2 border-black transition-all group-hover:top-2 group-hover:left-2"></div>
            <div className="relative bg-black text-white border-2 border-black px-2.5 sm:px-3 py-1 flex items-center gap-1 transform group-hover:-rotate-2 transition-all">
              <span className="bg-[#fef08a] text-black px-1 sm:px-1.5 py-0.5 text-lg sm:text-xl font-black leading-none">V</span>
              <span className="font-black text-xl sm:text-2xl tracking-widest uppercase mt-0.5">RYNT</span>
            </div>
          </div>
          <span className="text-gray-400 font-bold text-xs sm:text-sm text-center xs:text-left">© 2026. Flexing made affordable.</span>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <button onClick={() => navigateTo('legal')} className="text-gray-400 hover:text-black uppercase font-black text-[10px] sm:text-xs transition-colors active:scale-95">Privacy</button>
          <button onClick={() => navigateTo('legal')} className="text-gray-400 hover:text-black uppercase font-black text-[10px] sm:text-xs transition-colors active:scale-95">Terms</button>
        </div>
      </div>
    </footer>
  );
}
