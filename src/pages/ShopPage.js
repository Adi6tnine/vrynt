import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { CATEGORIES } from '../data';

export default function ShopPage({ selectedCategory, setSelectedCategory, filteredProducts, setSelectedProduct, showToast }) {
  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40">
      <div className="flex flex-col items-center mb-12 sm:mb-16 animate-fade-up relative px-4">
        <div className="relative inline-block mb-6 sm:mb-8 md:mb-10">
          <div className="absolute -inset-y-2 sm:-inset-y-3 -inset-x-4 sm:-inset-x-6 bg-[#4ade80] transform rotate-[2deg] border-3 sm:border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] z-0"></div>
          <h2 className="relative z-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter uppercase flex flex-col xs:flex-row items-center gap-2 sm:gap-4 text-center xs:text-left">
            <span>The Collection</span>
            <span className="bg-white rounded-full p-1.5 sm:p-2 border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -rotate-12 text-2xl sm:text-3xl">🔥</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg font-bold text-black bg-[#c084fc] border-2 border-black px-4 sm:px-6 py-2 transform -rotate-1 shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase tracking-wider text-center">
          Curated fits for your next campus event.
        </p>
      </div>

      <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-6 sm:pb-8 w-full justify-start md:justify-center scrollbar-hide mb-6 sm:mb-8 px-2">
        {CATEGORIES.map((cat, i) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap font-black text-sm sm:text-base uppercase tracking-wide transition-all duration-300 border-3 sm:border-4 border-black active:scale-95 ${selectedCategory === cat ? 'bg-[#fb7185] text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] -translate-y-1' : 'bg-white text-black hover:bg-[#fef08a] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1'} ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-2">
        {filteredProducts.map((product, i) => (
          <div key={product.id} className={`animate-fade-up group relative bg-white p-3 sm:p-4 border-3 sm:border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer flex flex-col ${i % 3 === 0 ? 'rotate-2' : '-rotate-1'} hover:rotate-0 hover:-translate-y-2 z-10 hover:z-20 active:scale-98`} onClick={() => setSelectedProduct(product)} style={{ animationDelay: `${150 + (i * 100)}ms` }}>
            <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-5 sm:h-6 bg-white/60 border-2 border-gray-200 backdrop-blur-sm z-20 rotate-2"></div>
            
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-black mb-3 sm:mb-4 bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                <button onClick={(e) => { e.stopPropagation(); showToast("Added to wishlist!"); }} className="p-1.5 sm:p-2 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-[#fb7185] transition-colors active:scale-95">
                  <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
              
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-[#fef08a] border-2 border-black px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-black flex items-center shadow-[2px_2px_0_0_rgba(0,0,0,1)] transform -rotate-3">
                {product.rating}
              </div>
            </div>

            <div className="flex-grow flex flex-col">
              <div className="mb-2">
                <span className="text-[9px] sm:text-[10px] font-black text-white bg-black px-1.5 sm:px-2 py-0.5 sm:py-1 uppercase tracking-widest">{product.category}</span>
              </div>
              <h3 className="font-black text-black text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-tight uppercase line-clamp-2">{product.name}</h3>
              
              <div className="mt-auto flex justify-between items-end border-t-2 border-black pt-2 sm:pt-3">
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-500 line-through">₹{product.originalPrice}</p>
                  <p className="font-black text-xl sm:text-2xl text-black">₹{product.pricePerDay}<span className="text-[10px] sm:text-xs">/day</span></p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center group-hover:bg-[#c084fc] transition-colors">
                  <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
