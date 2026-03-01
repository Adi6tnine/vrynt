import React from 'react';

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 pt-32 sm:pt-36 md:pt-40 animate-fade-up">
      <div className="bg-white border-3 sm:border-4 border-black p-6 sm:p-8 md:p-12 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6 sm:mb-8">Legal Stuff</h2>
        <div className="space-y-5 sm:space-y-6 font-bold text-sm sm:text-base text-gray-600">
          <div>
            <h3 className="text-black text-lg sm:text-xl mb-2">1. Terms</h3>
            <p>Don't steal our clothes. We know your hostel room number.</p>
          </div>
          <div>
            <h3 className="text-black text-lg sm:text-xl mb-2">2. Privacy</h3>
            <p>We don't sell your data to creepy third parties. Your fashion secrets are safe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
