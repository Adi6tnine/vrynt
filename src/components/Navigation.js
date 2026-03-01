import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';

export default function Navigation({ activeTab, navigateTo, cart, showToast, isMobileMenuOpen, setIsMobileMenuOpen, scrollToWorkflow }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide nav when scrolling down (after 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#e879f9] flex flex-col justify-center items-center animate-fade-in p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 bg-white border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-black hover:rotate-90 transition-transform active:scale-95">
            <X size={28} className="sm:w-8 sm:h-8" strokeWidth={3} />
          </button>
          <div className="flex flex-col space-y-5 sm:space-y-6 text-center w-full max-w-sm">
            <button onClick={() => navigateTo('home')} className="bg-white border-3 sm:border-4 border-black p-3.5 sm:p-4 text-xl sm:text-2xl md:text-3xl font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-2 hover:-translate-y-1 transition-all duration-300 active:scale-95">Home</button>
            <button onClick={() => navigateTo('shop')} className="bg-[#fef08a] border-3 sm:border-4 border-black p-3.5 sm:p-4 text-xl sm:text-2xl md:text-3xl font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1 hover:-translate-y-1 transition-all duration-300 active:scale-95">The Collection</button>
            <button onClick={() => navigateTo('howItWorks')} className="bg-white border-3 sm:border-4 border-black p-3.5 sm:p-4 text-xl sm:text-2xl md:text-3xl font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-1 hover:-translate-y-1 transition-all duration-300 active:scale-95">Playbook</button>
            <button onClick={() => scrollToWorkflow('lend')} className="bg-[#4ade80] border-3 sm:border-4 border-black p-3.5 sm:p-4 text-xl sm:text-2xl md:text-3xl font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-2 hover:-translate-y-1 transition-all duration-300 active:scale-95">Earn</button>
            <button onClick={() => navigateTo('login')} className="bg-[#c084fc] border-3 sm:border-4 border-black p-3.5 sm:p-4 text-xl sm:text-2xl md:text-3xl font-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-2 hover:-translate-y-1 transition-all duration-300 active:scale-95">Login</button>
          </div>
        </div>
      )}

      <nav className={`fixed top-3 sm:top-4 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white/85 backdrop-blur-xl border-3 sm:border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] px-4 sm:px-5 py-2.5 sm:py-3 flex justify-between items-center transform -rotate-1">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => navigateTo('home')}>
              <div className="relative inline-block">
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#e879f9] border-2 border-black transition-all group-hover:top-2 group-hover:left-2"></div>
                <div className="relative bg-black text-white border-2 border-black px-3 py-1 flex items-center gap-1 transform group-hover:-rotate-2 transition-all">
                  <span className="bg-[#fef08a] text-black px-1.5 py-0.5 text-xl font-black leading-none">V</span>
                  <span className="font-black text-2xl tracking-widest uppercase mt-0.5">RYNT</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8 items-center bg-gray-50/50 px-6 py-2.5 rounded-full border border-gray-200">
              <button onClick={() => navigateTo('home')} className={`font-black text-sm uppercase transition-colors ${activeTab === 'home' ? 'text-black' : 'text-gray-400 hover:text-black'}`}>Home</button>
              <button onClick={() => navigateTo('shop')} className={`font-black text-sm uppercase transition-colors ${activeTab === 'shop' ? 'text-black' : 'text-gray-400 hover:text-black'}`}>The Collection</button>
              <button onClick={() => navigateTo('howItWorks')} className={`font-black text-sm uppercase transition-colors ${activeTab === 'howItWorks' ? 'text-black' : 'text-gray-400 hover:text-black'}`}>Playbook</button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <button onClick={() => showToast("Search coming soon!")} className="text-gray-400 hover:text-black hidden sm:block transition-colors active:scale-95">
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button onClick={() => navigateTo('login')} className="text-gray-400 hover:text-black hidden sm:block transition-colors active:scale-95">
                <User size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button onClick={() => navigateTo('cart')} className="text-black bg-[#D1FF26] p-1.5 sm:p-2 border-2 border-black relative hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:scale-95">
                <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 bg-pink-500 text-white text-[9px] sm:text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white">{cart.length}</span>
                )}
              </button>
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-black p-1.5 sm:p-2 bg-gray-100 hover:bg-gray-200 border-2 border-transparent transition-colors active:scale-95">
                <Menu size={22} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
