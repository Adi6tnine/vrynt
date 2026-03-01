import React from 'react';
import { Search, Calendar, Star, Camera, ShieldCheck, Banknote, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function HomePage({ navigateTo, scrollToWorkflow, workflowMode, setWorkflowMode, howItWorksStep, setHowItWorksStep }) {
  return (
    <div className="space-y-16 md:space-y-24 pb-16 md:pb-20 pt-24 sm:pt-28 md:pt-32 lg:pt-28">
      <div className="relative h-[90vh] sm:h-[85vh] min-h-[600px] sm:min-h-[650px] w-full mx-auto max-w-[98%] md:max-w-[96%] overflow-hidden border-4 md:border-8 border-black bg-[#f4f4f5] bg-paper-texture shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:shadow-[20px_20px_0_0_rgba(0,0,0,1)] flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-24 z-10">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] z-0 pointer-events-none opacity-30 md:opacity-100 mix-blend-multiply flex items-center justify-end md:pr-12">
          <div className="relative w-full h-[120%] md:h-[85%] border-l-8 md:border-8 border-black transform md:rotate-3 md:shadow-[20px_20px_0_0_#fef08a] overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2000&q=80" className="w-full h-full object-cover grayscale contrast-125" alt="Fashion Editorial" />
            <div className="absolute top-4 -left-8 w-32 h-12 bg-[#c084fc] border-4 border-black transform rotate-[-12deg] hidden md:block"></div>
            <div className="absolute bottom-10 -right-4 w-40 h-10 bg-[#fb7185] border-4 border-black transform rotate-[8deg] hidden md:block"></div>
          </div>
        </div>

        <svg className="absolute left-10 bottom-10 w-48 h-48 text-black opacity-10 pointer-events-none hidden md:block transform -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10,50 Q40,10 90,50 T10,90" />
          <path d="M20,20 L80,80" />
        </svg>

        <div className="relative z-10 flex flex-col items-start max-w-3xl mt-8 sm:mt-12 md:mt-0">
          <h1 className="animate-fade-up delay-100 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-6 sm:mb-8 leading-none flex flex-col items-start gap-2 sm:gap-3">
            <span className="bg-[#e879f9] text-black px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-2 inline-block hover:rotate-0 transition-all duration-300 active:scale-95">FLEX THE FIT.</span>
            <span className="bg-[#4ade80] text-black px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1 inline-block hover:rotate-0 transition-all duration-300 active:scale-95">OR FUND IT.</span>
          </h1>

          <div className="animate-fade-up delay-200 bg-white border-3 sm:border-4 border-black p-4 sm:p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] max-w-xl mb-8 sm:mb-12 transform -rotate-1">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-black font-bold leading-relaxed uppercase tracking-tight">The ultimate campus closet. Rent premium wear for your event tonight, or get your unused designer fits verified and earn passive cash.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <button onClick={() => navigateTo('shop')} className="animate-fade-up delay-300 group bg-black text-white px-6 sm:px-8 py-4 sm:py-5 font-black uppercase tracking-widest text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-[4px_4px_0_0_#fb7185] sm:shadow-[8px_8px_0_0_#fb7185] border-3 sm:border-4 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#fb7185] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span>Rent a Fit</span>
              <ChevronRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
            <button onClick={() => scrollToWorkflow('lend')} className="animate-fade-up delay-400 group bg-white text-black px-6 sm:px-8 py-4 sm:py-5 font-black uppercase tracking-widest text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-[4px_4px_0_0_#c084fc] sm:shadow-[8px_8px_0_0_#c084fc] border-3 sm:border-4 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#c084fc] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              <span>List Your Closet</span>
              <Sparkles size={20} className="sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform text-black" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      <div id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <div className="flex justify-center mb-12 sm:mb-16 animate-fade-up">
          <div className="bg-white border-3 sm:border-4 border-black p-1 sm:p-1.5 inline-flex flex-col sm:flex-row shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-1 w-full max-w-md sm:max-w-none sm:w-auto">
            <button onClick={() => { setWorkflowMode('rent'); setHowItWorksStep(0); }} className={`px-6 sm:px-8 py-3 sm:py-3 font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 ${workflowMode === 'rent' ? 'bg-black text-white' : 'bg-transparent text-gray-500 hover:text-black active:bg-gray-100'}`}>I Want To Rent</button>
            <button onClick={() => { setWorkflowMode('lend'); setHowItWorksStep(0); }} className={`px-6 sm:px-8 py-3 sm:py-3 font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 ${workflowMode === 'lend' ? 'bg-[#4ade80] text-black border-t-4 sm:border-t-0 sm:border-l-4 border-black' : 'bg-transparent text-gray-500 hover:text-black border-t-4 sm:border-t-0 sm:border-l-4 border-transparent active:bg-gray-100'}`}>I Want To Earn</button>
          </div>
        </div>

        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20 animate-fade-up relative px-4">
          <div className="relative inline-block mb-6 sm:mb-8 md:mb-10">
            <div className={`absolute -inset-y-3 sm:-inset-y-4 -inset-x-4 sm:-inset-x-8 transform rotate-[-3deg] border-3 sm:border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] z-0 ${workflowMode === 'rent' ? 'bg-[#e879f9]' : 'bg-[#4ade80]'}`}></div>
            <h2 className="relative z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter uppercase flex flex-col xs:flex-row items-center gap-2 sm:gap-4 text-center xs:text-left">
              <span>{workflowMode === 'rent' ? 'The Rental Process' : 'Verification Steps'}</span>
              <span className="bg-white rounded-full p-1.5 sm:p-2 border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform rotate-12 text-2xl sm:text-3xl">{workflowMode === 'rent' ? '🎥' : '💸'}</span>
            </h2>
          </div>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 border-2 border-black px-4 sm:px-6 py-2 sm:py-2.5 transform rotate-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center max-w-2xl ${workflowMode === 'rent' ? 'bg-[#fef08a]' : 'bg-white'}`}>
            {workflowMode === 'rent' ? 'Three simple steps to upgrading your aesthetic.' : 'Turn your idle wardrobe into a campus ATM.'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center animate-fade-up delay-100 pb-12 sm:pb-16 md:pb-20">
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 relative z-10">
            {workflowMode === 'rent' ? (
              [
                { title: "1. Pick a Fit", desc: "Browse curated collections of verified, dry-cleaned outfits.", icon: Search },
                { title: "2. Select Dates", desc: "Book for a day or a week. Pay exactly for what you need.", icon: Calendar },
                { title: "3. Flex & Return", desc: "Slay at your event. We'll pick it up unwashed the next day.", icon: Star }
              ].map((step, index) => (
                <div key={index} onClick={() => setHowItWorksStep(index)} className={`relative p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 flex items-start gap-3 sm:gap-5 border-2 active:scale-98 ${howItWorksStep === index ? 'bg-black text-white border-black shadow-[4px_4px_0_0_#e879f9] sm:shadow-[6px_6px_0_0_#e879f9] -translate-y-1 -translate-x-1' : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1'}`}>
                  <div className={`p-3 sm:p-4 rounded-xl shrink-0 border-2 ${howItWorksStep === index ? 'bg-[#e879f9] text-black border-black shadow-[2px_2px_0_0_#fff]' : 'bg-gray-100 text-gray-400 border-transparent'}`}>
                    {React.createElement(step.icon, { size: 24, className: "sm:w-7 sm:h-7" })}
                  </div>
                  <div>
                    <h3 className={`font-black text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 tracking-tight ${howItWorksStep === index ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`font-medium text-sm sm:text-base leading-relaxed ${howItWorksStep === index ? 'text-gray-300' : 'text-gray-500'}`}>{step.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              [
                { title: "1. Snap & Submit", desc: "Upload photos of your premium wear. Formals, Ethnic, Party wear.", icon: Camera },
                { title: "2. The VRYNT Check", desc: "We authenticate the brand and run our deep hygiene clean.", icon: ShieldCheck },
                { title: "3. Earn Passive Cash", desc: "Earn 60% of the rental fee every time someone wears your fit.", icon: Banknote }
              ].map((step, index) => (
                <div key={index} onClick={() => setHowItWorksStep(index)} className={`relative p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 flex items-start gap-3 sm:gap-5 border-2 active:scale-98 ${howItWorksStep === index ? 'bg-black text-white border-black shadow-[4px_4px_0_0_#4ade80] sm:shadow-[6px_6px_0_0_#4ade80] -translate-y-1 -translate-x-1' : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1'}`}>
                  <div className={`p-3 sm:p-4 rounded-xl shrink-0 border-2 ${howItWorksStep === index ? 'bg-[#4ade80] text-black border-black shadow-[2px_2px_0_0_#fff]' : 'bg-gray-100 text-gray-400 border-transparent'}`}>
                    {React.createElement(step.icon, { size: 24, className: "sm:w-7 sm:h-7" })}
                  </div>
                  <div>
                    <h3 className={`font-black text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 tracking-tight ${howItWorksStep === index ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`font-medium text-sm sm:text-base leading-relaxed ${howItWorksStep === index ? 'text-gray-300' : 'text-gray-500'}`}>{step.desc}</p>
                  </div>
                </div>
              ))
            )}
            {workflowMode === 'lend' && (
              <button onClick={() => navigateTo('contact')} className="w-full mt-3 sm:mt-4 bg-[#fef08a] text-black border-3 sm:border-4 border-black font-black uppercase tracking-widest py-3 sm:py-4 text-sm sm:text-base shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:bg-yellow-300 hover:translate-x-[2px] transition-all duration-300 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                Submit Your First Fit
              </button>
            )}
          </div>

          <div className="w-full lg:w-1/2 bg-[#f4f4f5] border-3 sm:border-4 border-black p-4 sm:p-6 h-[380px] sm:h-[420px] md:h-[500px] relative overflow-hidden flex items-center justify-center bg-paper-texture shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
            {/* Decorative Tape on the container */}
            <div className="absolute top-2 -left-8 w-24 h-6 bg-[#fb7185] rotate-[-15deg] opacity-80 mix-blend-multiply border border-black/10"></div>
            <div className="absolute bottom-4 -right-10 w-32 h-8 bg-[#c084fc] rotate-[20deg] opacity-80 mix-blend-multiply border border-black/10"></div>
            
            <div className="w-full h-full relative z-10">
              {workflowMode === 'rent' ? (
                <>
                  {howItWorksStep === 0 && (
                    <div className="absolute inset-0 animate-fade-in flex items-center justify-center scale-90 sm:scale-100">
                      {/* Background Polaroids */}
                      <div className="absolute w-24 xs:w-28 sm:w-32 md:w-40 bg-white p-1.5 sm:p-2 pb-6 sm:pb-10 shadow-xl border-2 border-gray-300 transform -rotate-[15deg] -translate-x-12 xs:-translate-x-16 sm:-translate-x-20 -translate-y-4 sm:-translate-y-6 z-0">
                        <img src={PRODUCTS[3].image} className="w-full h-24 xs:h-28 sm:h-32 md:h-40 object-cover grayscale opacity-60" alt="fit bg 1" />
                      </div>
                      <div className="absolute w-24 xs:w-28 sm:w-32 md:w-40 bg-white p-1.5 sm:p-2 pb-6 sm:pb-10 shadow-xl border-2 border-gray-300 transform rotate-[12deg] translate-x-12 xs:translate-x-16 sm:translate-x-20 translate-y-6 sm:translate-y-8 z-0">
                        <img src={PRODUCTS[5].image} className="w-full h-24 xs:h-28 sm:h-32 md:h-40 object-cover grayscale opacity-60" alt="fit bg 2" />
                      </div>
                      {/* Main Polaroid */}
                      <div className="absolute w-32 xs:w-36 sm:w-44 md:w-56 bg-white p-2 sm:p-3 pb-10 sm:pb-16 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-3 sm:border-4 border-black transform rotate-[-2deg] z-10 hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer group">
                        <img src={PRODUCTS[0].image} className="w-full h-32 xs:h-36 sm:h-44 md:h-60 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="main fit" />
                        <span className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-0 right-0 text-center font-black text-black transform rotate-[-2deg] text-sm xs:text-base sm:text-lg md:text-xl uppercase tracking-widest bg-[#4ade80] w-max mx-auto px-2 sm:px-3 py-0.5 sm:py-1 border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">The One.</span>
                        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-5 sm:h-6 bg-yellow-200 border-2 border-black rotate-2 shadow-sm"></div>
                      </div>
                    </div>
                  )}
                  {howItWorksStep === 1 && (
                    <div className="absolute inset-0 animate-fade-in flex flex-col justify-center items-center scale-90 sm:scale-100">
                      <div className="bg-[#fffdf0] border-3 sm:border-4 border-black p-4 sm:p-6 w-60 xs:w-64 sm:w-72 md:w-80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-2 relative">
                        {/* Ripped Paper Top */}
                        <div className="absolute -top-3 sm:-top-4 left-0 right-0 h-3 sm:h-4 bg-white border-t-3 sm:border-t-4 border-black" style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)' }}></div>
                        <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-8 sm:h-10 bg-black/10 rotate-[-4deg]"></div>
                        <div className="text-center font-black text-xl sm:text-2xl mb-4 sm:mb-6 uppercase tracking-widest border-b-3 sm:border-b-4 border-black pb-2 text-black">October</div>
                        <div className="grid grid-cols-7 gap-y-3 sm:gap-y-5 gap-x-1 sm:gap-x-2 text-center font-black text-xs sm:text-sm text-gray-500">
                          {['S','M','T','W','T','F','S'].map((d,i)=><div key={i} className="text-black">{d}</div>)}
                          {[...Array(31)].map((_, i) => (
                            <div key={i} className={`relative h-5 sm:h-6 flex items-center justify-center text-xs sm:text-sm ${i >= 14 && i <= 17 ? 'text-black' : ''}`}>
                              {i+1}
                              {i===14 && <svg className="absolute w-8 sm:w-10 h-8 sm:h-10 text-red-600 animate-[drawCircle_0.4s_ease-out_forwards] z-10"><circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" /></svg>}
                              {i===17 && <svg className="absolute w-8 sm:w-10 h-8 sm:h-10 text-red-600 animate-[drawCircle_0.4s_ease-out_0.3s_forwards] z-10"><circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" /></svg>}
                              {i > 14 && i < 17 && <div className="absolute top-1/2 left-[-10px] right-[-10px] h-1 sm:h-1.5 bg-red-600/80 -translate-y-1/2 z-0 opacity-0 animate-[fadeIn_0.1s_ease-out_0.2s_forwards]"></div>}
                            </div>
                          ))}
                        </div>
                        <div className="absolute -bottom-5 sm:-bottom-6 -right-5 sm:-right-6 bg-[#fef08a] border-3 sm:border-4 border-black px-3 sm:px-4 py-1.5 sm:py-2 font-black text-base sm:text-xl uppercase transform -rotate-6 shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">4 Days! 🔥</div>
                      </div>
                    </div>
                  )}
                  {howItWorksStep === 2 && (
                    <div className="absolute inset-0 animate-fade-in flex flex-col items-center justify-center scale-90 sm:scale-100">
                      <div className="bg-white w-60 xs:w-64 sm:w-72 md:w-80 p-4 sm:p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-2 border-3 sm:border-4 border-black relative">
                        <div className="flex justify-between items-start mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4">
                          <h4 className="font-black text-lg sm:text-xl md:text-2xl tracking-tighter leading-none">VRYNT <br/><span className="text-[#c084fc]">EXPRESS</span></h4>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 sm:border-4 border-black p-1 flex items-center justify-center">
                            <div className="w-full h-full bg-black"></div>
                          </div>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                          <div className="bg-black text-white font-black px-2 py-0.5 sm:py-1 inline-block uppercase text-[9px] sm:text-[10px] tracking-widest">Deliver To:</div>
                          <p className="font-black text-xl sm:text-2xl uppercase">Campus Hostel 4</p>
                          <p className="font-bold text-sm sm:text-base text-gray-500 uppercase tracking-widest">Room 402</p>
                        </div>
                        <div className="w-full h-10 sm:h-12 bg-barcode opacity-90 mb-3 sm:mb-4"></div>
                        <p className="text-[10px] sm:text-xs font-black tracking-widest text-center uppercase">ID: VR-882910</p>
                        <div className="absolute -top-5 sm:-top-6 -right-5 sm:-right-6 bg-[#fb7185] text-black border-3 sm:border-4 border-black p-2 sm:p-3 text-2xl sm:text-3xl font-black uppercase tracking-widest transform rotate-12 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] opacity-0 animate-[stamp_0.3s_ease-out_0.5s_forwards]">DISPATCHED</div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {howItWorksStep === 0 && (
                    <div className="absolute inset-0 animate-fade-in flex items-center justify-center scale-90 sm:scale-100">
                      {/* iPhone Frame Mock */}
                      <div className="bg-black w-36 xs:w-40 sm:w-48 md:w-56 h-64 xs:h-72 sm:h-80 md:h-[22rem] rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 relative shadow-[12px_12px_0_0_rgba(0,0,0,1)] sm:shadow-[16px_16px_0_0_rgba(0,0,0,1)] transform rotate-3 hover:rotate-0 transition-all z-10 border-3 sm:border-4 border-gray-800">
                        <div className="bg-gray-200 w-full h-full rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden relative border-3 sm:border-4 border-black">
                          <img src={PRODUCTS[2].image} className="w-full h-full object-cover scale-110" alt="camera view" />
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 border-2 border-white/50 flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#fef08a] rounded-full animate-ping"></div>
                          </div>
                          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-12 sm:h-14 border-3 sm:border-4 border-white rounded-full p-1">
                            <div className="w-full h-full bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="absolute -left-8 xs:-left-10 sm:-left-12 top-1/4 bg-[#e879f9] text-black border-3 sm:border-4 border-black px-3 sm:px-4 py-1.5 sm:py-2 font-black text-base sm:text-lg md:text-xl uppercase tracking-widest transform -rotate-12 shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">SNAP IT.</div>
                      </div>
                    </div>
                  )}
                  {howItWorksStep === 1 && (
                    <div className="absolute inset-0 animate-fade-in flex items-center justify-center scale-90 sm:scale-100">
                      {/* Physical Clipboard Vibe */}
                      <div className="bg-[#fef08a] w-60 xs:w-64 sm:w-72 md:w-80 p-6 sm:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-2 border-3 sm:border-4 border-black relative pt-10 sm:pt-12">
                        <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-8 sm:h-10 border-3 sm:border-4 border-black border-b-0 rounded-t-xl bg-gray-300 flex justify-center pt-1.5 sm:pt-2">
                          <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-gray-500 rounded-full"></div>
                        </div>
                        <h3 className="font-black text-2xl sm:text-3xl mb-6 sm:mb-8 uppercase tracking-tighter border-b-3 sm:border-b-4 border-black pb-2 text-center">QC Pass</h3>
                        <div className="space-y-4 sm:space-y-6 font-black text-sm sm:text-base text-gray-800">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 border-3 sm:border-4 border-black bg-white text-black flex items-center justify-center shadow-sm">
                              <CheckCircle2 size={18} className="sm:w-5 sm:h-5" strokeWidth={4}/>
                            </div>
                            <span className="uppercase tracking-wide">Brand Verified</span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 border-3 sm:border-4 border-black bg-white text-black flex items-center justify-center shadow-sm">
                              <CheckCircle2 size={18} className="sm:w-5 sm:h-5" strokeWidth={4}/>
                            </div>
                            <span className="uppercase tracking-wide">Fabric Checked</span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 border-3 sm:border-4 border-black bg-white text-black flex items-center justify-center shadow-sm">
                              <CheckCircle2 size={18} className="sm:w-5 sm:h-5" strokeWidth={4}/>
                            </div>
                            <span className="uppercase tracking-wide">Ozone Cleansed</span>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-3 sm:border-4 border-green-600 text-green-600 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-3xl sm:text-4xl font-black uppercase tracking-widest opacity-0 animate-[stamp_0.3s_ease-out_1s_forwards] -rotate-[15deg] shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">VERIFIED</div>
                      </div>
                    </div>
                  )}
                  {howItWorksStep === 2 && (
                    <div className="absolute inset-0 animate-fade-in flex flex-col items-center justify-center scale-90 sm:scale-100">
                      {/* Background floating cash doodles */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 text-[#4ade80] z-0">
                        <Banknote size={80} className="sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] absolute top-10 left-10 transform -rotate-12 animate-pulse" strokeWidth={1.5} />
                        <Banknote size={60} className="sm:w-20 sm:h-20 absolute bottom-10 right-10 transform rotate-12 animate-pulse delay-200" strokeWidth={1.5} />
                      </div>
                      <div className="bg-white border-3 sm:border-4 border-black w-60 xs:w-64 sm:w-72 md:w-80 p-6 sm:p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] sm:shadow-[16px_16px_0_0_rgba(0,0,0,1)] relative z-10 transform rotate-1">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 border-b-3 sm:border-b-4 border-black pb-3 sm:pb-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4ade80] border-3 sm:border-4 border-black flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                            <Banknote size={24} className="sm:w-7 sm:h-7 text-black" strokeWidth={2.5}/>
                          </div>
                          <div>
                            <p className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">Incoming</p>
                            <p className="font-black text-xl sm:text-2xl uppercase tracking-tighter">Payout</p>
                          </div>
                        </div>
                        <div className="text-center py-5 sm:py-6 bg-[#f4f4f5] border-3 sm:border-4 border-black mb-3 sm:mb-4">
                          <p className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter">₹850</p>
                        </div>
                        <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 bg-[#fef08a] border-3 sm:border-4 border-black px-3 sm:px-4 py-2 sm:py-3 font-black text-xl sm:text-2xl uppercase tracking-widest transform -rotate-[15deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)]">CHA-CHING! 💸</div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
