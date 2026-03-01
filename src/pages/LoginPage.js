import React from 'react';
import { User, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function LoginPage({ navigateTo }) {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-20 sm:py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Coming Soon Message */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 animate-fade-up">
            <div className="relative inline-block">
              <div className="absolute -inset-y-3 sm:-inset-y-4 -inset-x-4 sm:-inset-x-6 bg-[#e879f9] transform rotate-[-2deg] border-3 sm:border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] z-0"></div>
              <h1 className="relative z-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-none">
                Coming Soon
              </h1>
            </div>

            <div className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 md:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform rotate-1">
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-relaxed mb-4 sm:mb-6">
                We're cooking up something special for you! Our login system is getting a brutalist makeover.
              </p>
              <div className="space-y-3 sm:space-y-4 border-l-3 sm:border-l-4 border-black pl-4 sm:pl-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4ade80] border-2 border-black shrink-0 mt-0.5 sm:mt-1"></div>
                  <p className="font-bold text-sm sm:text-base text-gray-700">Secure authentication</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#fef08a] border-2 border-black shrink-0 mt-0.5 sm:mt-1"></div>
                  <p className="font-bold text-sm sm:text-base text-gray-700">Social login options</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#fb7185] border-2 border-black shrink-0 mt-0.5 sm:mt-1"></div>
                  <p className="font-bold text-sm sm:text-base text-gray-700">Personalized dashboard</p>
                </div>
              </div>
            </div>

            <div className="bg-[#fef08a] border-3 sm:border-4 border-black p-5 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform -rotate-1">
              <p className="font-black text-lg sm:text-xl md:text-2xl uppercase mb-3 sm:mb-4">Want Early Access?</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-grow border-3 sm:border-4 border-black p-3 font-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                />
                <button className="bg-black text-white px-5 sm:px-6 py-3 font-black uppercase tracking-widest text-sm md:text-base hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 border-3 sm:border-4 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                  Notify Me
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={3} />
                </button>
              </div>
            </div>

            <button 
              onClick={() => navigateTo('home')} 
              className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-black uppercase tracking-widest text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-[4px_4px_0_0_#c084fc] sm:shadow-[6px_6px_0_0_#c084fc] border-3 sm:border-4 border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#c084fc] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Back to Home
              <Sparkles size={18} className="sm:w-5 sm:h-5" strokeWidth={3} />
            </button>
          </div>

          {/* Right Side - Mock Login Form */}
          <div className="order-1 lg:order-2 animate-fade-up delay-200">
            <div className="bg-white border-3 sm:border-4 border-black p-5 sm:p-6 md:p-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-2 relative">
              {/* "Coming Soon" Stamp Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="bg-[#e879f9] border-3 sm:border-4 border-black px-5 sm:px-8 py-3 sm:py-4 transform -rotate-12 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider">Coming Soon</p>
                </div>
              </div>

              {/* Blurred Form (for visual effect) */}
              <div className="opacity-30 blur-sm">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-black border-2 border-black">
                    <User size={24} className="sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase">Login</h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block font-black uppercase text-xs sm:text-sm mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="email" 
                        placeholder="you@college.edu"
                        className="w-full border-3 sm:border-4 border-black p-3 sm:p-4 pl-10 sm:pl-12 font-bold text-sm sm:text-base"
                        disabled
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-black uppercase text-xs sm:text-sm mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full border-3 sm:border-4 border-black p-3 sm:p-4 pl-10 sm:pl-12 font-bold text-sm sm:text-base"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 sm:border-4 border-black bg-white"></div>
                      <span className="font-black text-xs sm:text-sm uppercase">Remember Me</span>
                    </label>
                    <button className="font-black text-xs sm:text-sm uppercase underline">Forgot Password?</button>
                  </div>

                  <button className="w-full bg-black text-white py-3 sm:py-4 font-black uppercase tracking-widest text-sm sm:text-base border-3 sm:border-4 border-black shadow-[4px_4px_0_0_rgba(74,222,128,1)] sm:shadow-[6px_6px_0_0_rgba(74,222,128,1)]">
                    Sign In
                  </button>

                  <div className="relative my-4 sm:my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-3 sm:border-t-4 border-black"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 sm:px-4 font-black uppercase text-xs sm:text-sm">Or</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    <button className="bg-white border-3 sm:border-4 border-black p-2.5 sm:p-3 font-black uppercase text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      Google
                    </button>
                    <button className="bg-white border-3 sm:border-4 border-black p-2.5 sm:p-3 font-black uppercase text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      Facebook
                    </button>
                  </div>

                  <p className="text-center font-bold text-sm sm:text-base text-gray-600 mt-4 sm:mt-6">
                    Don't have an account? <button className="font-black underline">Sign Up</button>
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-32 h-32 bg-[#4ade80] border-4 border-black transform rotate-12 -z-10"></div>
            <div className="hidden lg:block absolute -top-8 -left-8 w-24 h-24 bg-[#fb7185] border-4 border-black transform -rotate-12 -z-10"></div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 animate-fade-up delay-300">
          <div className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform -rotate-1 hover:-translate-y-2 transition-all duration-300 active:scale-98">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4ade80] border-3 sm:border-4 border-black mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🔒</span>
            </div>
            <h3 className="font-black text-lg sm:text-xl uppercase mb-1 sm:mb-2">Secure</h3>
            <p className="font-bold text-gray-600 text-xs sm:text-sm">Bank-level encryption for your data</p>
          </div>

          <div className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform rotate-1 hover:-translate-y-2 transition-all duration-300 active:scale-98">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fef08a] border-3 sm:border-4 border-black mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">⚡</span>
            </div>
            <h3 className="font-black text-lg sm:text-xl uppercase mb-1 sm:mb-2">Fast</h3>
            <p className="font-bold text-gray-600 text-xs sm:text-sm">One-click login with social accounts</p>
          </div>

          <div className="bg-white border-3 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transform -rotate-1 hover:-translate-y-2 transition-all duration-300 xs:col-span-2 lg:col-span-1 active:scale-98">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c084fc] border-3 sm:border-4 border-black mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 className="font-black text-lg sm:text-xl uppercase mb-1 sm:mb-2">Personal</h3>
            <p className="font-bold text-gray-600 text-xs sm:text-sm">Customized dashboard just for you</p>
          </div>
        </div>
      </div>
    </div>
  );
}
