import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from './data';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 z-[100]">
      <CheckCircle2 size={20} className="text-green-400" />
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [howItWorksStep, setHowItWorksStep] = useState(0);
  const [workflowMode, setWorkflowMode] = useState('rent');

  useEffect(() => {
    if (activeTab === 'home' || activeTab === 'howItWorks') {
      const timer = setInterval(() => {
        setHowItWorksStep((prev) => (prev + 1) % 3);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [activeTab, workflowMode]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const showToast = (msg) => setToastMessage(msg);
  
  const addToCart = (product, start, end, days, total) => {
    setCart([...cart, { ...product, cartId: Date.now(), startDate: start, endDate: end, days, total }]);
    setSelectedProduct(null);
    setStartDate('');
    setEndDate('');
    showToast(`${product.name} added to cart!`);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
    showToast("Item removed from cart.");
  };

  const filteredProducts = selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory);
  const cartTotal = cart.reduce((sum, item) => sum + item.total, 0);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToWorkflow = (mode) => {
    setIsMobileMenuOpen(false);
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        setWorkflowMode(mode);
        const el = document.getElementById('workflow-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setWorkflowMode(mode);
      const el = document.getElementById('workflow-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateDays = () => {
    if(!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? 1 : diffDays + 1;
  };

  const rentalDays = calculateDays();
  const estimatedTotal = selectedProduct ? selectedProduct.pricePerDay * rentalDays : 0;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 selection:bg-pink-200 flex flex-col relative overflow-x-hidden">
      <Navigation 
        activeTab={activeTab}
        navigateTo={navigateTo}
        cart={cart}
        showToast={showToast}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToWorkflow={scrollToWorkflow}
      />

      <main className="flex-grow">
        {activeTab === 'home' && <HomePage navigateTo={navigateTo} scrollToWorkflow={scrollToWorkflow} workflowMode={workflowMode} setWorkflowMode={setWorkflowMode} howItWorksStep={howItWorksStep} setHowItWorksStep={setHowItWorksStep} />}
        {activeTab === 'shop' && <ShopPage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filteredProducts={filteredProducts} setSelectedProduct={setSelectedProduct} showToast={showToast} />}
        {activeTab === 'howItWorks' && <HowItWorksPage />}
        {activeTab === 'cart' && <CartPage cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal} navigateTo={navigateTo} showToast={showToast} setCart={setCart} />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'faq' && <FaqPage />}
        {activeTab === 'contact' && <ContactPage navigateTo={navigateTo} showToast={showToast} />}
        {activeTab === 'legal' && <LegalPage />}
        {activeTab === 'login' && <LoginPage navigateTo={navigateTo} />}
      </main>

      {selectedProduct && (
        <ProductModal 
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          rentalDays={rentalDays}
          estimatedTotal={estimatedTotal}
          addToCart={addToCart}
        />
      )}

      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      <Footer navigateTo={navigateTo} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
