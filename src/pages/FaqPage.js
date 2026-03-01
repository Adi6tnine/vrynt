import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FaqPage() {
  const faqs = [
    { q: "Do I need to wash the clothes?", a: "Absolutely not! We use professional ozone cleaning after every rental." },
    { q: "What if I damage it?", a: "Minor wear is on us. Major damage is deducted from your security deposit." },
    { q: "How does delivery work?", a: "Direct campus delivery 24hrs before your rental starts." }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 pt-32 sm:pt-36 md:pt-40 animate-fade-up">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 sm:mb-12 flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4">
        <span>FAQs</span>
        <HelpCircle size={32} className="sm:w-10 sm:h-10 text-[#c084fc]" />
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 active:scale-98">
            <h3 className="font-black text-lg sm:text-xl mb-2 sm:mb-3">{faq.q}</h3>
            <p className="font-bold text-sm sm:text-base text-gray-500">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
