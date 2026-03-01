import React from 'react';
import { X } from 'lucide-react';

export default function ProductModal({ selectedProduct, setSelectedProduct, startDate, setStartDate, endDate, setEndDate, rentalDays, estimatedTotal, addToCart }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white border-3 sm:border-4 border-black w-full max-w-5xl max-h-[90vh] sm:max-h-[95vh] overflow-hidden shadow-[12px_12px_0_0_rgba(232,121,249,1)] sm:shadow-[16px_16px_0_0_rgba(232,121,249,1)] relative flex flex-col sm:flex-row transform rotate-1">
        <button onClick={() => { setSelectedProduct(null); setStartDate(''); setEndDate(''); }} className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-white border-2 border-black hover:bg-red-500 z-20 active:scale-95 transition-all">
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        <div className="w-full sm:w-5/12 bg-gray-100 border-b-3 sm:border-b-0 sm:border-r-4 border-black shrink-0 relative h-48 xs:h-56 sm:h-auto">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-7/12 p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col overflow-y-auto bg-paper-texture">
          <span className="px-2 sm:px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-black uppercase tracking-widest w-fit mb-3 sm:mb-4">{selectedProduct.category}</span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black uppercase mb-3 sm:mb-4 leading-none">{selectedProduct.name}</h2>
          <p className="font-bold text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 border-l-3 sm:border-l-4 border-black pl-2 sm:pl-3">{selectedProduct.description}</p>

          <div className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 mb-6 sm:mb-8 transform -rotate-1">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-2xl xs:text-3xl sm:text-4xl font-black">₹{selectedProduct.pricePerDay}</span>
                <span className="ml-1 sm:ml-2 font-black uppercase text-[10px] sm:text-xs text-gray-500">/ day</span>
              </div>
              <span className="text-[10px] sm:text-xs font-black text-black bg-[#4ade80] px-1.5 sm:px-2 py-0.5 sm:py-1 border-2 border-black">SAVE 90%</span>
            </div>
          </div>

          <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
            <h3 className="font-black uppercase tracking-wider text-sm sm:text-base">Select Dates</h3>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full border-3 sm:border-4 border-black p-2.5 sm:p-3 font-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" />
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full border-3 sm:border-4 border-black p-2.5 sm:p-3 font-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" />
            </div>
          </div>

          <div className="mt-auto pt-3 sm:pt-4">
            {rentalDays > 0 && startDate && endDate && (
              <div className="flex justify-between items-center border-y-3 sm:border-y-4 border-black border-dashed py-2 mb-3 sm:mb-4">
                <span className="font-black uppercase tracking-widest text-xs sm:text-sm">{rentalDays} Days</span>
                <span className="font-black text-xl sm:text-2xl text-[#fb7185]">₹{estimatedTotal}</span>
              </div>
            )}
            <button disabled={!startDate || !endDate} onClick={() => addToCart(selectedProduct, startDate, endDate, rentalDays, estimatedTotal)} className="w-full bg-[#e879f9] text-black py-3 sm:py-4 border-3 sm:border-4 border-black font-black uppercase tracking-widest text-sm sm:text-base hover:bg-[#c084fc] transition-all duration-300 disabled:opacity-50 disabled:bg-gray-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] disabled:shadow-none disabled:transform-none active:scale-98">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
