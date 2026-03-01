import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';

export default function CartPage({ cart, removeFromCart, cartTotal, navigateTo, showToast, setCart }) {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40">
      <h2 className="animate-fade-up text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-6 sm:mb-8 uppercase">Your Rental Bag</h2>
      
      {cart.length === 0 ? (
        <div className="animate-fade-up bg-white border-3 sm:border-4 border-black p-10 sm:p-16 text-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-1 max-w-2xl mx-auto">
          <ShoppingBag size={48} className="sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 text-gray-200" />
          <h3 className="text-2xl sm:text-3xl font-black mb-3">Cart is empty!</h3>
          <button onClick={() => navigateTo('shop')} className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 font-black uppercase tracking-widest text-sm sm:text-base hover:bg-gray-800 transition-all duration-300 active:scale-95">
            Start Browsing
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          <div className="flex-grow space-y-4 sm:space-y-6">
            {cart.map((item) => (
              <div key={item.cartId} className="bg-white p-4 border-3 sm:border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col xs:flex-row gap-4 sm:gap-6 relative group">
                <div className="w-full xs:w-28 sm:w-32 h-36 sm:h-40 shrink-0 border-2 border-black">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-[10px] sm:text-xs font-black uppercase text-purple-600">{item.category}</p>
                  <h3 className="font-black text-lg sm:text-xl mb-2 sm:mb-3">{item.name}</h3>
                  <p className="font-black text-xl sm:text-2xl">₹{item.total}</p>
                </div>
                <button onClick={() => removeFromCart(item.cartId)} className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 text-gray-400 hover:text-red-500 transition-colors active:scale-95">
                  <Trash2 size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white p-6 sm:p-8 border-3 sm:border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] lg:sticky lg:top-32">
              <h3 className="font-black text-xl sm:text-2xl mb-4 sm:mb-6 uppercase">Summary</h3>
              <div className="space-y-3 sm:space-y-4 font-bold border-b-3 sm:border-b-4 border-black pb-6 sm:pb-8 mb-6 sm:mb-8 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Rental Total</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Student Discount</span>
                  <span>- ₹{Math.floor(cartTotal * 0.1)}</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-6 sm:mb-8">
                <span className="font-black text-base sm:text-lg">Total</span>
                <span className="text-3xl sm:text-4xl font-black tracking-tighter">₹{cartTotal + 1000 - Math.floor(cartTotal * 0.1)}</span>
              </div>
              <button onClick={() => { setCart([]); showToast("Order Placed Successfully!"); navigateTo('home'); }} className="w-full bg-black text-white py-4 sm:py-5 font-black uppercase tracking-widest text-sm sm:text-base shadow-[4px_4px_0_0_rgba(74,222,128,1)] sm:shadow-[6px_6px_0_0_rgba(74,222,128,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 active:translate-x-2 active:translate-y-2 active:shadow-[2px_2px_0_0_rgba(74,222,128,1)]">
                Checkout Securely
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
