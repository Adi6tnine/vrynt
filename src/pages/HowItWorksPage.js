import React from 'react';
import { Search, Calendar, Truck, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40">
      <div className="flex flex-col items-center mb-16 sm:mb-20 md:mb-24 animate-fade-up relative px-4">
        <div className="relative inline-block mb-6 sm:mb-8 md:mb-10">
          <div className="absolute -inset-y-3 sm:-inset-y-4 -inset-x-4 sm:-inset-x-8 bg-[#c084fc] transform rotate-[-3deg] border-3 sm:border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] z-0"></div>
          <h2 className="relative z-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase flex flex-col xs:flex-row items-center gap-2 sm:gap-4 text-center xs:text-left">
            <span>The Playbook</span>
            <span className="bg-white rounded-full p-1.5 sm:p-2 border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform rotate-12 text-2xl sm:text-3xl">📖</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 border-2 border-black bg-[#fef08a] px-4 sm:px-6 py-2 sm:py-3 transform rotate-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center max-w-2xl uppercase tracking-wider">
          Stop repeating outfits. Stop buying one-time fits. Here is exactly how to rent your next look.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
        <div className="animate-fade-up delay-100 flex flex-col md:flex-row items-center gap-4 sm:gap-6 bg-white border-3 sm:border-4 border-black p-5 sm:p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-1 relative">
          <div className="absolute -top-5 sm:-top-6 -left-5 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center font-black text-xl sm:text-2xl border-3 sm:border-4 border-black transform rotate-6 z-10 shadow-[3px_3px_0_0_#4ade80] sm:shadow-[4px_4px_0_0_#4ade80]">1</div>
          <div className="p-4 sm:p-5 bg-[#fef08a] border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] shrink-0 transform -rotate-3">
            <Search size={32} className="sm:w-10 sm:h-10" strokeWidth={2.5}/>
          </div>
          <div>
            <h3 className="font-black text-2xl sm:text-3xl text-black uppercase mb-2 sm:mb-3 tracking-tight">Find Your Fit</h3>
            <p className="text-gray-700 font-bold text-sm sm:text-base md:text-lg leading-relaxed border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4">Scroll through our curated collection of premium ethnic, formal, and party wear. Filter by category to find exactly what you need.</p>
          </div>
        </div>

        <div className="animate-fade-up delay-200 flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 bg-[#e879f9] border-3 sm:border-4 border-black p-5 sm:p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-1 relative">
          <div className="absolute -top-5 sm:-top-6 -right-5 sm:-right-6 md:-left-6 md:right-auto w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center font-black text-xl sm:text-2xl border-3 sm:border-4 border-black transform -rotate-6 z-10 shadow-[3px_3px_0_0_#fef08a] sm:shadow-[4px_4px_0_0_#fef08a]">2</div>
          <div className="p-4 sm:p-5 bg-white border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] shrink-0 transform rotate-3">
            <Calendar size={32} className="sm:w-10 sm:h-10" strokeWidth={2.5}/>
          </div>
          <div className="md:text-right">
            <h3 className="font-black text-2xl sm:text-3xl text-black uppercase mb-2 sm:mb-3 tracking-tight">Book Dates & Pay</h3>
            <p className="text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed border-r-3 sm:border-r-4 border-black pr-3 sm:pr-4">Select your pickup and return dates. Dynamic pricing ensures you only pay for what you use. Secure checkout with a small refundable deposit.</p>
          </div>
        </div>

        <div className="animate-fade-up delay-300 flex flex-col md:flex-row items-center gap-4 sm:gap-6 bg-white border-3 sm:border-4 border-black p-5 sm:p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-1 relative">
          <div className="absolute -top-5 sm:-top-6 -left-5 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#4ade80] text-black flex items-center justify-center font-black text-xl sm:text-2xl border-3 sm:border-4 border-black transform rotate-6 z-10 shadow-[3px_3px_0_0_#e879f9] sm:shadow-[4px_4px_0_0_#e879f9]">3</div>
          <div className="p-4 sm:p-5 bg-[#4ade80] border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] shrink-0 transform -rotate-3">
            <Truck size={32} className="sm:w-10 sm:h-10" strokeWidth={2.5}/>
          </div>
          <div>
            <h3 className="font-black text-2xl sm:text-3xl text-black uppercase mb-2 sm:mb-3 tracking-tight">Receive & Flex</h3>
            <p className="text-gray-700 font-bold text-sm sm:text-base md:text-lg leading-relaxed border-l-3 sm:border-l-4 border-black pl-3 sm:pl-4">We deliver the freshly dry-cleaned, quality-checked outfit straight to your campus hostel. Go out there and steal the show.</p>
          </div>
        </div>

        <div className="animate-fade-up delay-400 flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 bg-[#fb7185] border-3 sm:border-4 border-black p-5 sm:p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-1 relative">
          <div className="absolute -top-5 sm:-top-6 -right-5 sm:-right-6 md:-left-6 md:right-auto w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center font-black text-xl sm:text-2xl border-3 sm:border-4 border-black transform -rotate-6 z-10 shadow-[3px_3px_0_0_#c084fc] sm:shadow-[4px_4px_0_0_#c084fc]">4</div>
          <div className="p-4 sm:p-5 bg-white border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] shrink-0 transform rotate-3">
            <RefreshCw size={32} className="sm:w-10 sm:h-10" strokeWidth={2.5}/>
          </div>
          <div className="md:text-right">
            <h3 className="font-black text-2xl sm:text-3xl text-black uppercase mb-2 sm:mb-3 tracking-tight">Easy Return</h3>
            <p className="text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed border-r-3 sm:border-r-4 border-black pr-3 sm:pr-4">Pack it up unwashed. Our rider picks it up, and your security deposit drops back in your account instantly after a quick quality check.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 animate-fade-up delay-500">
        <div className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-1 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 active:scale-98">
          <div className="p-3 sm:p-4 bg-[#4ade80] border-3 sm:border-4 border-black mb-4 sm:mb-6 transform rotate-3">
            <ShieldCheck size={28} className="sm:w-9 sm:h-9" strokeWidth={2.5}/>
          </div>
          <h4 className="font-black text-xl sm:text-2xl uppercase mb-2 sm:mb-3 tracking-tight">Quality Verified</h4>
          <p className="font-bold text-sm sm:text-base text-gray-600">Every fit is checked before dispatch.</p>
        </div>

        <div className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 active:scale-98">
          <div className="p-3 sm:p-4 bg-[#fef08a] border-3 sm:border-4 border-black mb-4 sm:mb-6 transform -rotate-3">
            <Sparkles size={28} className="sm:w-9 sm:h-9" strokeWidth={2.5}/>
          </div>
          <h4 className="font-black text-xl sm:text-2xl uppercase mb-2 sm:mb-3 tracking-tight">100% Hygienic</h4>
          <p className="font-bold text-sm sm:text-base text-gray-600">Professionally dry-cleaned after every use.</p>
        </div>

        <div className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-2 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 active:scale-98">
          <div className="p-3 sm:p-4 bg-[#c084fc] border-3 sm:border-4 border-black mb-4 sm:mb-6 transform rotate-6">
            <RefreshCw size={28} className="sm:w-9 sm:h-9" strokeWidth={2.5}/>
          </div>
          <h4 className="font-black text-xl sm:text-2xl uppercase mb-2 sm:mb-3 tracking-tight">Hassle-free Returns</h4>
          <p className="font-bold text-sm sm:text-base text-gray-600">Don't wash it, just hand it back to us.</p>
        </div>
      </div>
    </div>
  );
}
