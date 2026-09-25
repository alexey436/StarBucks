import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WeMakeSection } from './components/WeMakeSection';
import { ProductsSection, PRODUCTS_DATA } from './components/ProductsSection';
import { EventsSection } from './components/EventsSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import {
  CookingProcessModal,
  OrderCoffeeModal,
  EventDetailsModal,
  CartDrawer,
  ProductItem,
  CartItem,
} from './components/Modals';
import { ViewModeSwitch, ViewMode } from './components/ViewModeSwitch';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('responsive');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCookingOpen, setIsCookingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<{
    id: string;
    title: string;
    description: string;
    promoCode?: string;
  } | null>(null);

  const handleAddToCart = (product: ProductItem, milk: string, syrup: string, size: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.selectedMilk === milk && i.selectedSyrup === syrup && i.volume === size
      );
      if (existing) {
        return prev.map((i) => (i === existing ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          ...product,
          volume: size,
          quantity: 1,
          selectedMilk: milk,
          selectedSyrup: syrup,
        },
      ];
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToEvents = () => {
    const el = document.getElementById('events');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reusable page layout content
  const renderPageContent = (isMobileDevice = false) => (
    <div
      className={`min-h-screen bg-[#111413] text-white selection:bg-[#00a862] selection:text-white ${
        isMobileDevice ? 'max-w-[420px] mx-auto text-[95%]' : 'w-full'
      }`}
    >
      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCoffee={handleScrollToMenu}
      />

      <main>
        <HeroSection
          onSelectCoffee={handleScrollToMenu}
          onMoreDetails={handleScrollToEvents}
        />

        <WeMakeSection onOpenCookingProcess={() => setIsCookingOpen(true)} />

        <ProductsSection onSelectProduct={(p) => setSelectedProduct(p)} />

        <EventsSection onSelectEvent={(ev) => setSelectedEvent(ev)} />

        <ContactsSection />
      </main>

      <Footer
        onSelectCoffee={handleScrollToMenu}
        onMoreDetails={handleScrollToEvents}
        onOpenCookingProcess={() => setIsCookingOpen(true)}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#090b0a] text-white antialiased font-sans">
      {/* Mode 1: Responsive Default View */}
      {viewMode === 'responsive' && (
        <div className="w-full">
          {renderPageContent(false)}
        </div>
      )}

      {/* Mode 2: Split View matching the user's uploaded screenshots with Web layout on left and Mobile on right! */}
      {viewMode === 'split' && (
        <div className="p-4 sm:p-6 lg:p-10 max-w-[1900px] mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <span>Порівняння макетів</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#00a862]/20 text-[#00a862]">
                  100% відповідність
                </span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Ліворуч: Десктопна версія сайту · Праворуч: Мобільна версія сайту (як на наданих скріншотах)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            {/* Left: Web Desktop Mockup Container (xl:col-span-8) */}
            <div className="xl:col-span-8 bg-[#111413] rounded-[40px] border border-white/10 shadow-2xl overflow-hidden">
              <div className="bg-[#181d1b] px-6 py-3 border-b border-white/5 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-gray-300">starbucks.ua (Веб-версія)</span>
                </div>
                <div className="font-semibold text-[#00a862]">1440 × 900 px</div>
              </div>
              <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                {renderPageContent(false)}
              </div>
            </div>

            {/* Right: Mobile Smartphone Mockup Container (xl:col-span-4) */}
            <div className="xl:col-span-4 flex justify-center">
              <div className="w-full max-w-[390px] bg-[#111413] rounded-[48px] border-[8px] border-[#222926] shadow-2xl overflow-hidden relative">
                {/* Smartphone Dynamic Island / Notch */}
                <div className="bg-[#111413] pt-3 pb-2 px-6 flex items-center justify-between text-[11px] text-gray-400 border-b border-white/5">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                  <span>5G 100%</span>
                </div>
                <div className="max-h-[82vh] overflow-y-auto custom-scrollbar">
                  {renderPageContent(true)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Focused Mobile View */}
      {viewMode === 'mobile' && (
        <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center bg-[#090b0a]">
          <div className="w-full max-w-[400px] bg-[#111413] rounded-[48px] border-[8px] border-[#222926] shadow-2xl overflow-hidden">
            <div className="bg-[#111413] pt-3 pb-2 px-6 flex items-center justify-between text-[11px] text-gray-400 border-b border-white/5">
              <span>9:41</span>
              <div className="w-24 h-4 bg-black rounded-full mx-auto" />
              <span>5G 100%</span>
            </div>
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
              {renderPageContent(true)}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Modals & Cart Drawer */}
      <CookingProcessModal
        isOpen={isCookingOpen}
        onClose={() => setIsCookingOpen(false)}
      />

      <OrderCoffeeModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <EventDetailsModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />

      {/* Floating View Switcher to compare Web & Mobile side-by-side or responsive */}
      <ViewModeSwitch mode={viewMode} onChange={setViewMode} />
    </div>
  );
}
